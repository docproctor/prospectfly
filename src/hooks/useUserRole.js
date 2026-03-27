import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import supabase from '../supabase-client';

export function useUserRole() {
    const { user } = useAuth();
    const [role, setRole] = useState('standard');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserRole = async () => {
            if (!user) {
                setRole('standard');
                setLoading(false);
                return;
            }

            try {
                // Try to get user's profile with role from pf_user_profiles
                const { data, error } = await supabase
                    .from('pf_user_profiles')
                    .select('role')
                    .eq('id', user.id)
                    .single();

                if (error) {
                    console.error('Error fetching role:', error);
                    setRole('standard');
                } else if (data && data.role) {
                    setRole(data.role);
                } else {
                    // Default to standard if no profile or role
                    setRole('standard');
                }
            } catch (error) {
                console.error('Error in role fetch:', error);
                setRole('standard');
            } finally {
                setLoading(false);
            }
        };

        fetchUserRole();
    }, [user]);

    const isAdmin = role === 'admin';
    const isStandard = role === 'standard';

    return {
        role,
        isAdmin,
        isStandard,
        loading
    };
}
