import React, { useState, useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export function ProtectedRoute({ children }) {
    const { user, loading } = useAuth()
    const [checkingAuthHash, setCheckingAuthHash] = useState(true)
    const location = useLocation()

    // Check for auth hash on mount (email confirmation callback)
    useEffect(() => {
        const checkHash = () => {
            const hash = window.location.hash
            const hasAuthTokens = hash.includes('access_token') || hash.includes('refresh_token')

            if (hasAuthTokens) {
                // Give AuthContext time to process the hash
                setTimeout(() => {
                    setCheckingAuthHash(false)
                }, 3000)
            } else {
                setCheckingAuthHash(false)
            }
        }

        checkHash()
    }, [])

    if (loading || checkingAuthHash) {
        return (
            <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-pulse">
                        <p className="text-xl">Loading...</p>
                    </div>
                </div>
            </div>
        )
    }

    // Not logged in
    if (!user) {
        const intendedPath = location.pathname + location.search
        return <Navigate to="/login" state={{ from: intendedPath }} replace />
    }

    return children
}
