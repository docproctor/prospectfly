import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import supabase from '../supabase-client'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Plus, FileText, ExternalLink } from 'lucide-react'

export default function SitePages() {
    const [pages, setPages] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchPages()
    }, [])

    const fetchPages = async () => {
        try {
            const { data, error } = await supabase
                .from('pf_site_pages')
                .select('*')
                .eq('page_type', 'page')
                .order('created_at', { ascending: false })

            if (error) throw error
            setPages(data || [])
        } catch (err) {
            console.error('Error fetching pages:', err)
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    const getStatusBadge = (status) => {
        const styles = {
            published: 'bg-green-100 text-green-700',
            draft: 'bg-yellow-100 text-yellow-700',
            archived: 'bg-gray-100 text-gray-700',
        }
        return (
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[status] || styles.draft}`}>
                {status}
            </span>
        )
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500"></div>
            </div>
        )
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Site Pages</h1>
                    <p className="text-gray-600 mt-1">Manage your marketing and content pages</p>
                </div>
                <Button className="bg-amber-500 hover:bg-amber-600">
                    <Plus className="w-4 h-4 mr-2" />
                    New Page
                </Button>
            </div>

            {error && (
                <Card className="border-red-200 bg-red-50 mb-6">
                    <CardContent className="p-4">
                        <p className="text-red-700">
                            <strong>Database not ready:</strong> {error}
                        </p>
                        <p className="text-red-600 text-sm mt-2">
                            Run the migrations in <code className="bg-white px-1.5 py-0.5 rounded">supabase/migrations/</code> to create the tables.
                        </p>
                    </CardContent>
                </Card>
            )}

            {!error && pages.length === 0 && (
                <Card>
                    <CardContent className="p-12 text-center">
                        <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No pages yet</h3>
                        <p className="text-gray-600 mb-6">
                            Create your first page to get started with your marketing site.
                        </p>
                        <Button className="bg-amber-500 hover:bg-amber-600">
                            <Plus className="w-4 h-4 mr-2" />
                            Create First Page
                        </Button>
                    </CardContent>
                </Card>
            )}

            {pages.length > 0 && (
                <Card>
                    <CardHeader>
                        <CardTitle>All Pages ({pages.length})</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="divide-y divide-gray-100">
                            {pages.map((page) => (
                                <div key={page.id} className="py-4 flex items-center justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3">
                                            <h3 className="font-medium text-gray-900">{page.title}</h3>
                                            {getStatusBadge(page.status)}
                                        </div>
                                        <p className="text-sm text-gray-500 mt-1">
                                            /{page.slug}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Button variant="outline" size="sm">
                                            Edit
                                        </Button>
                                        <Button variant="outline" size="sm">
                                            <ExternalLink className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}
