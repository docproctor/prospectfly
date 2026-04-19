export function AdminHelp() {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="space-y-6">
                {/* Quick Links */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Links</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <a href="https://supabase.com/dashboard/project/wloxeyxvoktswfdynwhy" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                            <div className="font-medium text-green-800">Supabase</div>
                            <div className="text-sm text-green-600">Database & Auth</div>
                        </a>
                        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <div className="font-medium text-gray-800">Vercel</div>
                            <div className="text-sm text-gray-600">Deployment</div>
                        </a>
                        <a href="https://prospectfly.com" target="_blank" rel="noopener noreferrer" className="block p-3 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors">
                            <div className="font-medium text-amber-800">Public Site</div>
                            <div className="text-sm text-amber-600">Prospect Fly</div>
                        </a>
                        <a href="https://app.prospectfly.com" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                            <div className="font-medium text-blue-800">CMS App</div>
                            <div className="text-sm text-blue-600">app.prospectfly.com</div>
                        </a>
                    </div>
                </div>

                {/* Application Pages */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Application Pages</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                            <h3 className="font-bold text-gray-800 mb-2">Dashboard</h3>
                            <div className="text-sm text-gray-600 space-y-1">
                                <div>Overview stats: Total pages, Published, Draft, Blog posts</div>
                                <div>Quick links to create new content</div>
                                <div>Recent activity feed</div>
                            </div>
                        </div>
                        <div className="border rounded-lg p-4">
                            <h3 className="font-bold text-gray-800 mb-2">Site Pages</h3>
                            <div className="text-sm text-gray-600 space-y-1">
                                <div>Filter tabs: All, Pages, SEO, Blog, Case Studies, Pillar</div>
                                <div>Manage all content pages via 5-tab editor</div>
                                <div>Drag-and-drop body sections with live preview</div>
                                <div>Quality checklist + Help card sidebars</div>
                                <div>Preview draft pages with ?preview=true</div>
                                <div>Delete pages with confirmation modal</div>
                                <div>Auto-deploy to Vercel on publish</div>
                            </div>
                        </div>
                        <div className="border rounded-lg p-4">
                            <h3 className="font-bold text-gray-800 mb-2">Blog</h3>
                            <div className="text-sm text-gray-600 space-y-1">
                                <div>Manage blog posts</div>
                                <div>Uses page_type = 'blog' in pf_site_pages</div>
                                <div>Assign categories, set featured images</div>
                                <div>Schedule publishing with published_at</div>
                            </div>
                        </div>
                        <div className="border rounded-lg p-4">
                            <h3 className="font-bold text-gray-800 mb-2">SEO Pages</h3>
                            <div className="text-sm text-gray-600 space-y-1">
                                <div>Programmatic SEO landing pages</div>
                                <div>Uses page_type = 'seo' in pf_site_pages</div>
                                <div>Bulk generate from templates</div>
                                <div>Target: industry + process combinations</div>
                            </div>
                        </div>
                        <div className="border rounded-lg p-4">
                            <h3 className="font-bold text-gray-800 mb-2">Case Studies</h3>
                            <div className="text-sm text-gray-600 space-y-1">
                                <div>Client success stories</div>
                                <div>Uses page_type = 'case_study' in pf_site_pages</div>
                                <div>Fields: client_name, industry, challenge, solution, results</div>
                                <div>Results stored as JSONB metrics array</div>
                            </div>
                        </div>
                        <div className="border rounded-lg p-4">
                            <h3 className="font-bold text-gray-800 mb-2">Categories</h3>
                            <div className="text-sm text-gray-600 space-y-1">
                                <div>Organize content by category</div>
                                <div>Types: industry, process, topic</div>
                                <div>Supports parent/child hierarchy</div>
                                <div>Used for filtering and navigation</div>
                            </div>
                        </div>
                        <div className="border rounded-lg p-4">
                            <h3 className="font-bold text-gray-800 mb-2">SEO Templates</h3>
                            <div className="text-sm text-gray-600 space-y-1">
                                <div>Templates for bulk SEO page generation</div>
                                <div>Use {'{{placeholders}}'} in template_body</div>
                                <div>Generate pages for industry/process combos</div>
                            </div>
                        </div>
                        <div className="border rounded-lg p-4">
                            <h3 className="font-bold text-gray-800 mb-2">Assets</h3>
                            <div className="text-sm text-gray-600 space-y-1">
                                <div>Manage uploaded images and files</div>
                                <div>Stored in Supabase Storage</div>
                                <div>Link to pages via featured_image_asset_id</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Page Editor Guide */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Page Editor Guide</h2>

                    <div className="space-y-4">
                        <div className="bg-amber-50 rounded p-3 text-sm text-amber-800">
                            <strong>Create:</strong> /site-pages/add | <strong>Edit:</strong> /site-pages/edit/:id
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-700 mb-2">5-Tab Editor Structure</h3>
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                                <div className="bg-blue-50 rounded p-2 text-sm">
                                    <div className="font-medium text-blue-800">Top Section</div>
                                    <div className="text-blue-600 text-xs">Title, Slug, Type, Status, Intro, Category</div>
                                </div>
                                <div className="bg-green-50 rounded p-2 text-sm">
                                    <div className="font-medium text-green-800">Body Sections</div>
                                    <div className="text-green-600 text-xs">Drag-drop content blocks</div>
                                </div>
                                <div className="bg-purple-50 rounded p-2 text-sm">
                                    <div className="font-medium text-purple-800">FAQ</div>
                                    <div className="text-purple-600 text-xs">Question/Answer pairs</div>
                                </div>
                                <div className="bg-pink-50 rounded p-2 text-sm">
                                    <div className="font-medium text-pink-800">SEO</div>
                                    <div className="text-pink-600 text-xs">Meta, Keywords, Schema</div>
                                </div>
                                <div className="bg-gray-100 rounded p-2 text-sm">
                                    <div className="font-medium text-gray-800">Settings</div>
                                    <div className="text-gray-600 text-xs">CTA, Author, Template</div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-700 mb-2">Section Types</h3>
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                                <div className="bg-blue-100 text-blue-700 rounded px-3 py-1 text-sm text-center">Text</div>
                                <div className="bg-green-100 text-green-700 rounded px-3 py-1 text-sm text-center">Bullets</div>
                                <div className="bg-purple-100 text-purple-700 rounded px-3 py-1 text-sm text-center">Numbered</div>
                                <div className="bg-amber-100 text-amber-700 rounded px-3 py-1 text-sm text-center">CTA</div>
                                <div className="bg-pink-100 text-pink-700 rounded px-3 py-1 text-sm text-center">Image</div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-700 mb-2">Quality Checklist</h3>
                            <div className="bg-gray-50 rounded p-3 text-sm space-y-1">
                                <div>✓ Title filled</div>
                                <div>✓ Meta title ≤60 chars</div>
                                <div>✓ Meta description ≤160 chars</div>
                                <div>✓ Focus keyword filled</div>
                                <div>✓ At least one body section</div>
                                <div>✓ Slug is URL-safe</div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-700 mb-2">Save Actions</h3>
                            <div className="flex gap-2">
                                <span className="px-3 py-1 bg-gray-100 rounded text-sm">Save Draft - Saves without publishing</span>
                                <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded text-sm">Publish - Saves + triggers Vercel deploy</span>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-700 mb-2">Preview Mode</h3>
                            <div className="bg-gray-50 rounded p-3 text-sm space-y-2">
                                <div>Draft pages can be previewed before publishing using <code className="bg-gray-200 px-1 rounded">?preview=true</code></div>
                                <div>Click the external link button on a draft page - it auto-adds the preview param</div>
                                <div>Preview pages show a small amber "Preview" badge in the top-left corner</div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-700 mb-2">Help Card</h3>
                            <div className="bg-gray-50 rounded p-3 text-sm space-y-2">
                                <div>The Help card in the sidebar explains each editor tab</div>
                                <div>Click any section link to open detailed documentation</div>
                                <div>Use "Copy to clipboard" to copy individual section help</div>
                                <div>Use "Copy All Help Text" to copy all documentation at once</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Types */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Content Types</h2>

                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-gray-700 mb-2">Unified pf_site_pages Table</h3>
                            <div className="bg-gray-50 rounded p-3 text-sm">
                                <p className="mb-2">All content types use the same table, differentiated by <code className="bg-gray-200 px-1 rounded">page_type</code>:</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">page</span>
                                    <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-800">blog</span>
                                    <span className="px-3 py-1 text-sm rounded-full bg-purple-100 text-purple-800">seo</span>
                                    <span className="px-3 py-1 text-sm rounded-full bg-amber-100 text-amber-800">case_study</span>
                                    <span className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-800">pillar</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-700 mb-2">Page Statuses</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-800">draft</span>
                                <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-800">published</span>
                                <span className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-600">archived</span>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-700 mb-2">Body Sections (JSONB)</h3>
                            <div className="bg-gray-50 rounded p-3 text-sm space-y-1">
                                <div><span className="font-medium text-blue-600">text</span> - Rich HTML content</div>
                                <div><span className="font-medium text-green-600">bullets</span> - Bullet list (newline separated)</div>
                                <div><span className="font-medium text-purple-600">numbered</span> - Numbered list</div>
                                <div><span className="font-medium text-amber-600">cta</span> - Call to action button</div>
                                <div><span className="font-medium text-pink-600">image</span> - Featured image</div>
                                <div><span className="font-medium text-cyan-600">testimonial</span> - Client quote</div>
                                <div><span className="font-medium text-orange-600">metrics</span> - Stats/numbers (case studies)</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Database Schema */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Database Schema (pf_ prefix)</h2>

                    <div className="space-y-4">
                        <div className="bg-blue-50 rounded p-3 text-sm text-blue-800">
                            <strong>Shared Supabase Instance:</strong> All Prospect Fly tables use <code>pf_</code> prefix to avoid conflicts with prospectracker tables.
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-700 mb-2">pf_user_profiles</h3>
                            <div className="bg-gray-50 rounded p-3 font-mono text-sm grid grid-cols-2 md:grid-cols-3 gap-2">
                                <div><span className="text-purple-600">id</span> (uuid PK, FK auth.users)</div>
                                <div><span className="text-purple-600">email</span></div>
                                <div><span className="text-purple-600">display_name</span></div>
                                <div><span className="text-purple-600">role</span> (admin/standard)</div>
                                <div><span className="text-purple-600">created_at</span></div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-700 mb-2">pf_site_pages</h3>
                            <div className="bg-gray-50 rounded p-3 font-mono text-sm grid grid-cols-2 md:grid-cols-3 gap-2">
                                <div><span className="text-purple-600">id</span> (uuid PK)</div>
                                <div><span className="text-purple-600">slug</span> (unique)</div>
                                <div><span className="text-purple-600">page_type</span></div>
                                <div><span className="text-purple-600">template</span></div>
                                <div><span className="text-purple-600">status</span></div>
                                <div><span className="text-purple-600">title</span></div>
                                <div><span className="text-purple-600">meta_title</span></div>
                                <div><span className="text-purple-600">meta_description</span></div>
                                <div><span className="text-purple-600">focus_keyword</span></div>
                                <div><span className="text-purple-600">intro_text</span></div>
                                <div><span className="text-purple-600">body_sections</span> (jsonb)</div>
                                <div><span className="text-purple-600">faq_items</span> (jsonb)</div>
                                <div><span className="text-purple-600">category_id</span> (FK)</div>
                                <div><span className="text-purple-600">cta_label</span></div>
                                <div><span className="text-purple-600">cta_url</span></div>
                                <div><span className="text-purple-600">published_at</span></div>
                                <div><span className="text-purple-600">client_name</span> (case study)</div>
                                <div><span className="text-purple-600">industry</span> (case study)</div>
                                <div><span className="text-purple-600">challenge</span> (case study)</div>
                                <div><span className="text-purple-600">solution</span> (case study)</div>
                                <div><span className="text-purple-600">results</span> (case study jsonb)</div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-700 mb-2">pf_categories</h3>
                            <div className="bg-gray-50 rounded p-3 font-mono text-sm grid grid-cols-2 md:grid-cols-3 gap-2">
                                <div><span className="text-purple-600">id</span> (uuid PK)</div>
                                <div><span className="text-purple-600">name</span></div>
                                <div><span className="text-purple-600">slug</span> (unique)</div>
                                <div><span className="text-purple-600">type</span> (industry/process/topic)</div>
                                <div><span className="text-purple-600">parent_id</span> (FK self)</div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-700 mb-2">pf_site_assets</h3>
                            <div className="bg-gray-50 rounded p-3 font-mono text-sm grid grid-cols-2 md:grid-cols-3 gap-2">
                                <div><span className="text-purple-600">id</span> (uuid PK)</div>
                                <div><span className="text-purple-600">file_name</span></div>
                                <div><span className="text-purple-600">file_path</span></div>
                                <div><span className="text-purple-600">file_size</span></div>
                                <div><span className="text-purple-600">mime_type</span></div>
                                <div><span className="text-purple-600">page_id</span></div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-700 mb-2">pf_seo_templates</h3>
                            <div className="bg-gray-50 rounded p-3 font-mono text-sm grid grid-cols-2 md:grid-cols-3 gap-2">
                                <div><span className="text-purple-600">id</span> (uuid PK)</div>
                                <div><span className="text-purple-600">name</span></div>
                                <div><span className="text-purple-600">template_body</span> (jsonb)</div>
                                <div><span className="text-purple-600">target_page_type</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RLS and Admin Access */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">RLS and Admin Access</h2>

                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-gray-700 mb-2">Admin Function</h3>
                            <div className="bg-gray-50 rounded p-3 font-mono text-sm">
                                <code className="text-blue-600">pf_is_admin()</code> - SECURITY DEFINER function that checks if current user has role = 'admin' in pf_user_profiles
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-700 mb-2">RLS Policies</h3>
                            <div className="bg-gray-50 rounded p-3 text-sm space-y-1">
                                <div><strong>Public read:</strong> Anyone can read published content (status = 'published')</div>
                                <div><strong>Authenticated write:</strong> Only admins can insert/update/delete</div>
                                <div><strong>User profiles:</strong> Users can read their own profile, admins can read all</div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-700 mb-2">Making a User Admin</h3>
                            <div className="bg-amber-50 rounded p-3 text-sm">
                                <p className="mb-2">Run this SQL in Supabase SQL Editor:</p>
                                <code className="block bg-gray-800 text-green-400 p-2 rounded text-xs">
                                    UPDATE pf_user_profiles SET role = 'admin' WHERE email = 'your@email.com';
                                </code>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Files Reference */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Key Files Reference</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-semibold text-gray-700 mb-2">CMS Pages (src/pages/)</h3>
                            <div className="bg-gray-50 rounded p-3 font-mono text-sm space-y-1">
                                <div>login.jsx, signup.jsx</div>
                                <div>dashboard.jsx</div>
                                <div className="text-green-700">site-pages.jsx, site-pages-add.jsx, site-pages-edit.jsx</div>
                                <div>admin-help.jsx (this page)</div>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-700 mb-2">CMS Components (src/components/)</h3>
                            <div className="bg-gray-50 rounded p-3 font-mono text-sm space-y-1">
                                <div className="text-green-700">section-editor-modal.jsx - Section type editor</div>
                                <div className="text-green-700">quality-checklist.jsx - SEO validation sidebar</div>
                                <div className="text-green-700">help-card.jsx - Section docs with copy-to-clipboard</div>
                                <div>ProtectedRoute.jsx, AdminRoute.jsx</div>
                                <div>Sidebar.jsx, layout.jsx</div>
                                <div>/ui/* - shadcn components</div>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-700 mb-2">Utilities (src/utils/)</h3>
                            <div className="bg-gray-50 rounded p-3 font-mono text-sm space-y-1">
                                <div className="text-green-700">deploy-hook.js - Vercel deploy trigger</div>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-700 mb-2">Public Site (site/app/)</h3>
                            <div className="bg-gray-50 rounded p-3 font-mono text-sm space-y-1">
                                <div>root.tsx - Layout with sticky nav, Footer</div>
                                <div>routes/_index.tsx - Homepage (Engagement Intelligence theme)</div>
                                <div>routes/$.tsx - Dynamic page loader</div>
                                <div>routes/blog.tsx - Blog index</div>
                                <div>routes/blog.$slug.tsx - Blog post</div>
                                <div>routes/case-studies.tsx - Case studies index</div>
                                <div>routes/case-studies.$slug.tsx - Case study</div>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-700 mb-2">Migrations</h3>
                            <div className="bg-gray-50 rounded p-3 font-mono text-sm space-y-1">
                                <div>001_pf_user_profiles.sql</div>
                                <div>002_pf_categories.sql</div>
                                <div>003_pf_site_assets.sql</div>
                                <div>004_pf_site_pages.sql</div>
                                <div>005_pf_seo_templates.sql</div>
                                <div>006_pf_rls_policies.sql</div>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-700 mb-2">Config Files</h3>
                            <div className="bg-gray-50 rounded p-3 font-mono text-sm space-y-1">
                                <div>vite.config.js - CMS build config</div>
                                <div>site/vite.config.ts - Public site config</div>
                                <div>site/react-router.config.ts - SSR settings</div>
                                <div>tailwind.config.js - Styling</div>
                                <div>components.json - shadcn/ui config</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Vercel Deployment */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Vercel Deployment</h2>

                    <div className="space-y-4">
                        <div className="bg-blue-50 rounded p-3 text-sm text-blue-800">
                            <strong>Two separate Vercel projects</strong> from the same GitHub repo:
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="border rounded-lg p-4">
                                <h3 className="font-bold text-gray-800 mb-2">prospect-fly-cms</h3>
                                <div className="text-sm text-gray-600 space-y-1">
                                    <div><strong>Domain:</strong> app.prospect-fly.com</div>
                                    <div><strong>Root Directory:</strong> / (project root)</div>
                                    <div><strong>Build Command:</strong> vite build</div>
                                    <div><strong>Output:</strong> dist</div>
                                </div>
                            </div>
                            <div className="border rounded-lg p-4">
                                <h3 className="font-bold text-gray-800 mb-2">prospect-fly-site</h3>
                                <div className="text-sm text-gray-600 space-y-1">
                                    <div><strong>Domain:</strong> prospect-fly.com</div>
                                    <div><strong>Root Directory:</strong> /site</div>
                                    <div><strong>Build Command:</strong> react-router build</div>
                                    <div><strong>Output:</strong> build/client</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dev Commands */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Development Commands</h2>

                    <div className="bg-gray-50 rounded p-3 font-mono text-sm space-y-2">
                        <div><span className="text-gray-500"># Run CMS app (port 5173)</span></div>
                        <div>npm run dev</div>
                        <div className="pt-2"><span className="text-gray-500"># Run public site (port 5174)</span></div>
                        <div>cd site && npm run dev</div>
                        <div className="pt-2"><span className="text-gray-500"># Run both concurrently</span></div>
                        <div>npm run dev & cd site && npm run dev</div>
                        <div className="pt-2"><span className="text-gray-500"># Install dependencies</span></div>
                        <div>npm install && cd site && npm install</div>
                    </div>
                </div>

                {/* Public Site Routes */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Public Site Routes</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-semibold text-gray-700 mb-2">Static Routes</h3>
                            <div className="bg-gray-50 rounded p-3 font-mono text-sm space-y-1">
                                <div>/ - Homepage</div>
                                <div>/services - Platform comparison</div>
                                <div>/pricing - Pricing page</div>
                                <div>/about - About Mark Proctor</div>
                                <div>/approach - How we work</div>
                                <div>/contact - Contact form</div>
                                <div>/thank-you - Form success</div>
                                <div>/privacy, /terms, /refunds - Legal</div>
                                <div>/get-started/google-ads - Landing page</div>
                                <div>/get-started/linkedin-ads - Landing page</div>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-700 mb-2">Dynamic Routes (CMS)</h3>
                            <div className="bg-gray-50 rounded p-3 font-mono text-sm space-y-1">
                                <div>/* - Catch-all route ($.tsx)</div>
                                <div>/*?preview=true - Preview draft pages</div>
                                <div className="text-gray-500 text-xs mt-2">Loads from pf_site_pages by slug</div>
                                <div className="text-gray-500 text-xs">Example: /ppc-agency/london?preview=true</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
