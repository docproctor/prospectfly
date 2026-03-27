import { Navigate } from 'react-router-dom';
import { useUserRole } from '../hooks/useUserRole';

export function AdminRoute({ children }) {
    const { isAdmin, loading } = useUserRole();

    if (loading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    if (!isAdmin) {
        // Redirect non-admin users to dashboard
        return <Navigate to="/dashboard" replace />;
    }

    return children;
}
