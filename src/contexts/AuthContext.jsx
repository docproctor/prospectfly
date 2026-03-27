import React, { createContext, useContext, useEffect, useState, useRef } from 'react'
import supabase from '../supabase-client'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    // Track which users we've already processed to prevent duplicate SIGNED_IN handling
    const processedUserIds = useRef(new Set())

    useEffect(() => {
        // Handle email confirmation hash fragments on page load
        const handleAuthHash = async () => {
            const hashParams = new URLSearchParams(window.location.hash.substring(1))
            const accessToken = hashParams.get('access_token')
            const refreshToken = hashParams.get('refresh_token')

            if (accessToken) {
                const { error } = await supabase.auth.setSession({
                    access_token: accessToken,
                    refresh_token: refreshToken || ''
                })

                if (error) {
                    console.error('[AuthContext] Failed to establish session from hash:', error)
                } else {
                    // Clean up the hash from URL
                    window.history.replaceState(null, '', window.location.pathname)
                }
            }
        }

        handleAuthHash()

        // Check active sessions and sets the user
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null)
            setLoading(false)
        })

        // Listen for changes on auth state (sign in, sign out, etc.)
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            setUser(session?.user ?? null)
            setLoading(false)

            // When user signs in, check if first login and create profile
            if (event === 'SIGNED_IN' && session?.user?.id) {
                // Deduplicate: Skip if we've already processed this user in this session
                if (processedUserIds.current.has(session.user.id)) {
                    return
                }
                processedUserIds.current.add(session.user.id)

                console.log('[AuthContext] SIGNED_IN event - User:', session.user.email)

                // Run first-login actions in background (non-blocking)
                ;(async () => {
                    try {
                        // Check if pf_user_profiles record exists
                        const { data: profileRecord } = await supabase
                            .from('pf_user_profiles')
                            .select('id')
                            .eq('id', session.user.id)
                            .maybeSingle()

                        const isFirstLogin = !profileRecord

                        if (isFirstLogin) {
                            console.log('[AuthContext] First login - creating profile')

                            // Create user profile
                            const { error: insertError } = await supabase
                                .from('pf_user_profiles')
                                .insert({
                                    id: session.user.id,
                                    email: session.user.email,
                                    display_name: session.user.user_metadata?.first_name || session.user.email?.split('@')[0],
                                    role: 'standard'
                                })

                            if (insertError) {
                                if (insertError.code === '23505') {
                                    console.log('[AuthContext] Profile already exists (race condition)')
                                } else {
                                    console.warn('[AuthContext] Failed to create profile:', insertError.message)
                                }
                            } else {
                                console.log('[AuthContext] Profile created successfully')
                            }
                        }
                    } catch (error) {
                        console.error('[AuthContext] Error in first-login check:', error)
                    }
                })()
            }
        })

        return () => subscription.unsubscribe()
    }, [])

    const signUp = async (email, password, metadata = {}) => {
        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: metadata
            })
            if (error) throw error
            return { data, error: null }
        } catch (error) {
            console.error('[AuthContext] SignUp error:', error)
            return { data: null, error }
        }
    }

    const signIn = async (email, password, redirectTo = '/dashboard') => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            })
            if (error) throw error
            navigate(redirectTo)
            return { data, error: null }
        } catch (error) {
            return { data: null, error }
        }
    }

    const signOut = async () => {
        try {
            const { error } = await supabase.auth.signOut()
            if (error) throw error
            navigate('/login')
        } catch (error) {
            console.error('Error signing out:', error.message)
        }
    }

    const value = {
        user,
        signUp,
        signIn,
        signOut,
        loading
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
