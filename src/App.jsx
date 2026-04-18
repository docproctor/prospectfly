import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { ProtectedRoute } from './components/ProtectedRoute'
import { AdminRoute } from './components/AdminRoute'
import { Layout } from './layout'

// Pages
import Login from './pages/login'
import Signup from './pages/signup'
import Dashboard from './pages/dashboard'
import SitePages from './pages/site-pages'
import SitePagesAdd from './pages/site-pages-add'
import SitePagesEdit from './pages/site-pages-edit'
import { AdminHelp } from './pages/admin-help'

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected routes with Layout */}
        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/site-pages" element={<SitePages />} />
          <Route path="/site-pages/add" element={<SitePagesAdd />} />
          <Route path="/site-pages/edit/:id" element={<SitePagesEdit />} />

          {/* Placeholder routes - to be implemented */}
          <Route path="/blog" element={<Dashboard />} />
          <Route path="/seo-pages" element={<Dashboard />} />
          <Route path="/case-studies" element={<Dashboard />} />
          <Route path="/categories" element={<Dashboard />} />
          <Route path="/seo-templates" element={<Dashboard />} />
          <Route path="/account" element={<Dashboard />} />
          <Route path="/settings" element={<Dashboard />} />
          <Route path="/admin/help" element={<AdminHelp />} />

          {/* Admin routes */}
          <Route
            path="/admin/users"
            element={
              <AdminRoute>
                <Dashboard />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/assets"
            element={
              <AdminRoute>
                <Dashboard />
              </AdminRoute>
            }
          />
        </Route>

        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
