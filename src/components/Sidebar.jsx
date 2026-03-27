import { useState, useEffect, useRef } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate, useLocation } from 'react-router-dom'
import { useUserRole } from '../hooks/useUserRole'
import { ChevronDown, LayoutDashboard, FileText, PenSquare, FolderOpen, Settings, Users, Image, HelpCircle } from 'lucide-react'

export function Sidebar() {
    const { user, signOut } = useAuth()
    const { isAdmin } = useUserRole()
    const navigate = useNavigate()
    const location = useLocation()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [showAccountDropdown, setShowAccountDropdown] = useState(false)
    const dropdownRef = useRef(null)

    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    ]

    const contentItems = [
        { icon: FileText, label: 'Site Pages', path: '/site-pages' },
        { icon: PenSquare, label: 'Blog Posts', path: '/blog' },
        { icon: FileText, label: 'SEO Pages', path: '/seo-pages' },
        { icon: FileText, label: 'Case Studies', path: '/case-studies' },
        { icon: FolderOpen, label: 'Categories', path: '/categories' },
    ]

    const adminItems = [
        { icon: Users, label: 'Users', path: '/admin/users' },
        { icon: Image, label: 'Assets', path: '/admin/assets' },
        { icon: FileText, label: 'SEO Templates', path: '/seo-templates' },
        { icon: HelpCircle, label: 'Help / Docs', path: '/admin/help' },
    ]

    const isActive = (path) => location.pathname === path

    const handleItemClick = (path) => {
        setIsMobileMenuOpen(false)
        navigate(path)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMobileMenuOpen(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowAccountDropdown(false)
            }
        }
        if (showAccountDropdown) {
            document.addEventListener('mousedown', handleClickOutside)
        }
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [showAccountDropdown])

    const MenuItem = ({ item }) => {
        const Icon = item.icon
        const active = isActive(item.path)
        return (
            <div
                onClick={() => handleItemClick(item.path)}
                className={`
                    flex items-center gap-3 px-4 py-2.5 mx-2 rounded-lg cursor-pointer transition-all
                    ${active
                        ? 'bg-amber-100 text-amber-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }
                `}
            >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
            </div>
        )
    }

    return (
        <>
            {/* Mobile Menu Toggle */}
            <button
                className="fixed top-4 left-4 z-[45] bg-amber-500 text-white p-2 rounded-md md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-[40] md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed left-0 top-0 w-[260px] h-screen bg-white border-r border-gray-200 z-[40]
                flex flex-col transition-transform duration-300
                ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            `}>
                {/* Header */}
                <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">PF</span>
                        </div>
                        <span className="font-semibold text-gray-900">ProspectFly CMS</span>
                    </div>
                </div>

                {/* User Profile */}
                <div className="p-4 border-b border-gray-200" ref={dropdownRef}>
                    <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => setShowAccountDropdown(!showAccountDropdown)}
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-medium">
                                {user?.email?.charAt(0).toUpperCase() || 'U'}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-gray-900 truncate">
                                    {user?.email?.split('@')[0] || 'User'}
                                </div>
                                <div className="text-xs text-gray-500 truncate">
                                    {user?.email || 'user@example.com'}
                                </div>
                            </div>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${showAccountDropdown ? 'rotate-180' : ''}`} />
                    </div>

                    {showAccountDropdown && (
                        <div className="absolute left-0 right-0 mt-2 mx-4 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                            <button
                                onClick={() => {
                                    setShowAccountDropdown(false)
                                    navigate('/account')
                                }}
                                className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-t-lg"
                            >
                                Account Settings
                            </button>
                            <button
                                onClick={() => {
                                    setShowAccountDropdown(false)
                                    signOut()
                                }}
                                className="w-full px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50 rounded-b-lg border-t border-gray-100"
                            >
                                Sign Out
                            </button>
                        </div>
                    )}
                </div>

                {/* Navigation */}
                <nav className="flex-1 py-4 overflow-y-auto">
                    {/* Main */}
                    <div className="mb-6">
                        {menuItems.map((item) => (
                            <MenuItem key={item.path} item={item} />
                        ))}
                    </div>

                    {/* Content Section */}
                    <div className="mb-6">
                        <div className="px-4 mb-2">
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                Content
                            </span>
                        </div>
                        {contentItems.map((item) => (
                            <MenuItem key={item.path} item={item} />
                        ))}
                    </div>

                    {/* Admin Section */}
                    {isAdmin && (
                        <div className="mb-6">
                            <div className="px-4 mb-2">
                                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                    Admin
                                </span>
                            </div>
                            {adminItems.map((item) => (
                                <MenuItem key={item.path} item={item} />
                            ))}
                        </div>
                    )}
                </nav>

                {/* Footer */}
                <div className="p-4 border-t border-gray-200">
                    <div
                        onClick={() => handleItemClick('/settings')}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-lg cursor-pointer text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                    >
                        <Settings className="w-5 h-5" />
                        <span className="text-sm">Settings</span>
                    </div>
                </div>
            </aside>
        </>
    )
}
