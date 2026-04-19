import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import supabase from '../supabase-client'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Plus, FileText, ExternalLink, Trash2 } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from '../components/ui/dialog'

const PAGE_TYPE_TABS = [
    { key: 'all', label: 'All' },
    { key: 'page', label: 'Pages' },
    { key: 'seo', label: 'SEO' },
    { key: 'blog', label: 'Blog' },
    { key: 'case_study', label: 'Case Studies' },
    { key: 'pillar', label: 'Pillar' },
]

const PAGE_TYPE_LABELS = {
    page: 'Page',
    seo: 'SEO',
    blog: 'Blog',
    case_study: 'Case Study',
    pillar: 'Pillar',
}

export default function SitePages() {
    const [pages, setPages] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [activeTab, setActiveTab] = useState('all')
    const [deleteModal, setDeleteModal] = useState({ open: false, page: null })
    const [deleting, setDeleting] = useState(false)

    useEffect(() => {
        fetchPages()
    }, [])

    const fetchPages = async () => {
        try {
            const { data, error } = await supabase
                .from('pf_site_pages')
                .select('*')
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

    const handleDelete = async () => {
        if (!deleteModal.page) return
        setDeleting(true)
        try {
            const { error } = await supabase
                .from('pf_site_pages')
                .delete()
                .eq('id', deleteModal.page.id)

            if (error) throw error
            setPages(pages.filter(p => p.id !== deleteModal.page.id))
            setDeleteModal({ open: false, page: null })
        } catch (err) {
            console.error('Error deleting page:', err)
            alert('Error deleting page: ' + err.message)
        } finally {
            setDeleting(false)
        }
    }

    const filteredPages = activeTab === 'all'
        ? pages
        : pages.filter(p => p.page_type === activeTab)

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

    const getTypeBadge = (pageType) => {
        const styles = {
            page: 'bg-blue-100 text-blue-700',
            seo: 'bg-purple-100 text-purple-700',
            blog: 'bg-pink-100 text-pink-700',
            case_study: 'bg-cyan-100 text-cyan-700',
            pillar: 'bg-amber-100 text-amber-700',
        }
        return (
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[pageType] || styles.page}`}>
                {PAGE_TYPE_LABELS[pageType] || pageType}
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
                <Link to="/site-pages/add">
                    <Button className="bg-amber-500 hover:bg-amber-600 cursor-pointer">
                        <Plus className="w-4 h-4 mr-2" />
                        New Page
                    </Button>
                </Link>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-1 mb-6 border-b border-gray-200">
                {PAGE_TYPE_TABS.map(tab => {
                    const count = tab.key === 'all'
                        ? pages.length
                        : pages.filter(p => p.page_type === tab.key).length
                    return (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px cursor-pointer transition-colors ${
                                activeTab === tab.key
                                    ? 'border-amber-500 text-amber-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }`}
                        >
                            {tab.label}
                            {count > 0 && (
                                <span className={`ml-2 px-1.5 py-0.5 rounded-full text-xs ${
                                    activeTab === tab.key
                                        ? 'bg-amber-100 text-amber-700'
                                        : 'bg-gray-100 text-gray-600'
                                }`}>
                                    {count}
                                </span>
                            )}
                        </button>
                    )
                })}
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

            {!error && filteredPages.length === 0 && (
                <Card>
                    <CardContent className="p-12 text-center">
                        <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                            {activeTab === 'all' ? 'No pages yet' : `No ${PAGE_TYPE_TABS.find(t => t.key === activeTab)?.label.toLowerCase() || 'pages'} yet`}
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Create your first page to get started with your marketing site.
                        </p>
                        <Link to="/site-pages/add">
                            <Button className="bg-amber-500 hover:bg-amber-600 cursor-pointer">
                                <Plus className="w-4 h-4 mr-2" />
                                Create First Page
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            )}

            {filteredPages.length > 0 && (
                <Card>
                    <CardHeader>
                        <CardTitle>
                            {activeTab === 'all' ? 'All Pages' : PAGE_TYPE_TABS.find(t => t.key === activeTab)?.label} ({filteredPages.length})
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="divide-y divide-gray-100">
                            {filteredPages.map((page) => (
                                <div key={page.id} className="py-4 flex items-center justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3">
                                            <Link to={`/site-pages/edit/${page.id}`} className="font-medium text-gray-900 hover:text-amber-600">
                                                {page.title}
                                            </Link>
                                            {activeTab === 'all' && getTypeBadge(page.page_type)}
                                            {getStatusBadge(page.status)}
                                        </div>
                                        <p className="text-sm text-gray-500 mt-1">
                                            /{page.slug}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Link to={`/site-pages/edit/${page.id}`}>
                                            <Button variant="outline" size="sm" className="cursor-pointer">
                                                Edit
                                            </Button>
                                        </Link>
                                        <a
                                            href={`${import.meta.env.VITE_PUBLIC_SITE_URL || 'https://prospect-fly.com'}/${page.slug}${page.status !== 'published' ? '?preview=true' : ''}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title={page.status !== 'published' ? 'Preview (draft)' : 'View live page'}
                                        >
                                            <Button variant="outline" size="sm" className="cursor-pointer">
                                                <ExternalLink className="w-4 h-4" />
                                            </Button>
                                        </a>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="cursor-pointer text-red-500 hover:text-red-700 hover:border-red-300"
                                            onClick={() => setDeleteModal({ open: true, page })}
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Delete Confirmation Modal */}
            <Dialog open={deleteModal.open} onOpenChange={(open) => !open && setDeleteModal({ open: false, page: null })}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Delete Page</DialogTitle>
                    </DialogHeader>
                    <p className="text-zinc-300 py-4">
                        Are you sure you want to delete <strong>"{deleteModal.page?.title}"</strong>? This action cannot be undone.
                    </p>
                    <DialogFooter>
                        <Button
                            variant="outline"
                            onClick={() => setDeleteModal({ open: false, page: null })}
                            className="cursor-pointer"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleDelete}
                            disabled={deleting}
                            className="bg-red-600 hover:bg-red-700 cursor-pointer"
                        >
                            {deleting ? 'Deleting...' : 'Delete'}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
