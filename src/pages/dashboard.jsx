import { useAuth } from '../contexts/AuthContext'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { FileText, PenSquare, BarChart3, FolderOpen } from 'lucide-react'

export default function Dashboard() {
    const { user } = useAuth()

    const stats = [
        { label: 'Site Pages', value: '0', icon: FileText, color: 'bg-blue-500' },
        { label: 'Blog Posts', value: '0', icon: PenSquare, color: 'bg-green-500' },
        { label: 'SEO Pages', value: '0', icon: BarChart3, color: 'bg-purple-500' },
        { label: 'Categories', value: '0', icon: FolderOpen, color: 'bg-amber-500' },
    ]

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600 mt-1">
                    Welcome back, {user?.email?.split('@')[0] || 'User'}
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat) => {
                    const Icon = stat.icon
                    return (
                        <Card key={stat.label}>
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-600">{stat.label}</p>
                                        <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                                    </div>
                                    <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>

            {/* Quick Actions */}
            <Card>
                <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <a
                            href="/site-pages"
                            className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-colors"
                        >
                            <FileText className="w-5 h-5 text-amber-600" />
                            <div>
                                <p className="font-medium text-gray-900">Create Page</p>
                                <p className="text-sm text-gray-600">Add a new site page</p>
                            </div>
                        </a>
                        <a
                            href="/blog"
                            className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-colors"
                        >
                            <PenSquare className="w-5 h-5 text-amber-600" />
                            <div>
                                <p className="font-medium text-gray-900">Write Blog Post</p>
                                <p className="text-sm text-gray-600">Create new content</p>
                            </div>
                        </a>
                        <a
                            href="/seo-pages"
                            className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-colors"
                        >
                            <BarChart3 className="w-5 h-5 text-amber-600" />
                            <div>
                                <p className="font-medium text-gray-900">Generate SEO Pages</p>
                                <p className="text-sm text-gray-600">Build programmatic pages</p>
                            </div>
                        </a>
                    </div>
                </CardContent>
            </Card>

            {/* Setup Notice */}
            <Card className="mt-6 border-amber-200 bg-amber-50">
                <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-xl">🚀</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">Getting Started</h3>
                            <p className="text-gray-600 mt-1">
                                Welcome to ProspectFly CMS! Database tables need to be created before you can start adding content.
                                Run the migrations in <code className="bg-white px-1.5 py-0.5 rounded text-sm">supabase/migrations/</code> to set up the database.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
