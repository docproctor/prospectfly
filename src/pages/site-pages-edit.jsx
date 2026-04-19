import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy, useSortable, arrayMove } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import supabase from '../supabase-client'
import { triggerDeploy } from '../utils/deploy-hook'
import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Label } from '../components/ui/label'
import { Checkbox } from '../components/ui/checkbox'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'
import { QualityChecklist } from '../components/quality-checklist'
import { HelpCard } from '../components/help-card'
import { SectionEditorModal, SectionPreviewCard } from '../components/section-editor-modal'
import { ArrowLeft, Plus, Trash2, Save, Send } from 'lucide-react'

// Sortable section wrapper
function SortableSection({ section, onEdit, onDelete }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: section.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div ref={setNodeRef} style={style}>
      <SectionPreviewCard
        section={section}
        onEdit={onEdit}
        onDelete={onDelete}
        dragHandleProps={{ ...attributes, ...listeners }}
      />
    </div>
  )
}

export default function SitePagesEdit() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [categories, setCategories] = useState([])
  const [groupedCategories, setGroupedCategories] = useState({})
  const [sectionModalOpen, setSectionModalOpen] = useState(false)
  const [editingSection, setEditingSection] = useState(null)

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    pageType: 'page',
    status: 'draft',
    h1Override: '',
    introText: '',
    seoIndustry: '',
    seoLocation: '',
    seoProcess: '',
    categoryId: '',
    parentPillarSlug: '',
    bodySections: [],
    faqItems: [],
    metaTitle: '',
    metaDescription: '',
    focusKeyword: '',
    canonicalUrl: '',
    ogImageUrl: '',
    noindex: false,
    schemaMarkup: '{}',
    ctaLabel: 'Book a Free Call',
    ctaUrl: '/contact',
    authorName: 'ProspectFly Team',
    renderType: 'prerender',
    template: 'standard'
  })

  // dnd-kit sensors
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  useEffect(() => {
    fetchCategories()
    fetchPage()
  }, [id])

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('pf_categories')
        .select('*')
        .order('type')
        .order('sort_order')

      if (error) throw error

      setCategories(data || [])

      const grouped = (data || []).reduce((acc, cat) => {
        if (!acc[cat.type]) acc[cat.type] = []
        acc[cat.type].push(cat)
        return acc
      }, {})
      setGroupedCategories(grouped)
    } catch (err) {
      console.error('Error fetching categories:', err)
    }
  }

  const fetchPage = async () => {
    try {
      const { data, error } = await supabase
        .from('pf_site_pages')
        .select('*')
        .eq('id', id)
        .single()

      if (error) throw error

      if (data) {
        setFormData({
          title: data.title || '',
          slug: data.slug || '',
          pageType: data.page_type || 'page',
          status: data.status || 'draft',
          h1Override: data.h1_override || '',
          introText: data.intro_text || '',
          seoIndustry: data.seo_industry || '',
          seoLocation: data.seo_location || '',
          seoProcess: data.seo_process || '',
          categoryId: data.category_id || '',
          parentPillarSlug: data.parent_pillar_slug || '',
          bodySections: data.body_sections || [],
          faqItems: data.faq_items || [],
          metaTitle: data.meta_title || '',
          metaDescription: data.meta_description || '',
          focusKeyword: data.focus_keyword || '',
          canonicalUrl: data.canonical_url || '',
          ogImageUrl: data.og_image_url || '',
          noindex: data.noindex || false,
          schemaMarkup: data.schema_markup ? JSON.stringify(data.schema_markup, null, 2) : '{}',
          ctaLabel: data.cta_label || 'Book a Free Call',
          ctaUrl: data.cta_url || '/contact',
          authorName: data.author_name || 'ProspectFly Team',
          renderType: data.render_type || 'prerender',
          template: data.template || 'standard'
        })
      }
    } catch (err) {
      console.error('Error fetching page:', err)
      alert('Error loading page: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  // Section handlers
  const handleAddSection = () => {
    setEditingSection(null)
    setSectionModalOpen(true)
  }

  const handleEditSection = (section) => {
    setEditingSection(section)
    setSectionModalOpen(true)
  }

  const handleSaveSection = (section) => {
    setFormData(prev => {
      if (editingSection) {
        return {
          ...prev,
          bodySections: prev.bodySections.map(s => s.id === section.id ? section : s)
        }
      } else {
        return {
          ...prev,
          bodySections: [...prev.bodySections, section]
        }
      }
    })
    setSectionModalOpen(false)
    setEditingSection(null)
  }

  const handleDeleteSection = (sectionId) => {
    setFormData(prev => ({
      ...prev,
      bodySections: prev.bodySections.filter(s => s.id !== sectionId)
    }))
  }

  const handleDragEnd = (event) => {
    const { active, over } = event
    if (active.id !== over?.id) {
      setFormData(prev => {
        const oldIndex = prev.bodySections.findIndex(s => s.id === active.id)
        const newIndex = prev.bodySections.findIndex(s => s.id === over.id)
        return {
          ...prev,
          bodySections: arrayMove(prev.bodySections, oldIndex, newIndex)
        }
      })
    }
  }

  // FAQ handlers
  const addFaqItem = () => {
    setFormData(prev => ({
      ...prev,
      faqItems: [...prev.faqItems, { question: '', answer: '' }]
    }))
  }

  const updateFaqItem = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      faqItems: prev.faqItems.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    }))
  }

  const removeFaqItem = (index) => {
    setFormData(prev => ({
      ...prev,
      faqItems: prev.faqItems.filter((_, i) => i !== index)
    }))
  }

  // Save handlers
  const buildPageData = (status) => {
    return {
      slug: formData.slug,
      page_type: formData.pageType,
      template: formData.template,
      render_type: formData.renderType,
      status: status,
      title: formData.title,
      meta_title: formData.metaTitle || null,
      meta_description: formData.metaDescription || null,
      focus_keyword: formData.focusKeyword || null,
      h1_override: formData.h1Override || null,
      intro_text: formData.introText || null,
      body_sections: formData.bodySections,
      faq_items: formData.faqItems,
      category_id: formData.categoryId || null,
      parent_pillar_slug: formData.parentPillarSlug || null,
      cta_label: formData.ctaLabel,
      cta_url: formData.ctaUrl,
      noindex: formData.noindex,
      schema_markup: formData.schemaMarkup ? JSON.parse(formData.schemaMarkup) : {},
      og_image_url: formData.ogImageUrl || null,
      canonical_url: formData.canonicalUrl || null,
      author_name: formData.authorName,
      seo_industry: formData.seoIndustry || null,
      seo_process: formData.seoProcess || null,
      seo_location: formData.seoLocation || null,
      published_at: status === 'published' ? new Date().toISOString() : null,
      updated_at: new Date().toISOString(),
    }
  }

  const saveAsDraft = async () => {
    setSaving(true)
    try {
      const pageData = buildPageData('draft')
      const { error } = await supabase
        .from('pf_site_pages')
        .update(pageData)
        .eq('id', id)
      if (error) throw error
      navigate('/site-pages')
    } catch (err) {
      console.error('Error saving draft:', err)
      alert('Error saving draft: ' + err.message)
    } finally {
      setSaving(false)
    }
  }

  const publish = async () => {
    setSaving(true)
    try {
      const pageData = buildPageData('published')
      const { error } = await supabase
        .from('pf_site_pages')
        .update(pageData)
        .eq('id', id)
      if (error) throw error

      await triggerDeploy()
      navigate('/site-pages')
    } catch (err) {
      console.error('Error publishing:', err)
      alert('Error publishing: ' + err.message)
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate('/site-pages')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="text-2xl font-bold text-gray-900">Edit Page</h1>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={saveAsDraft} disabled={saving || !formData.title}>
            <Save className="w-4 h-4 mr-2" />
            Save Draft
          </Button>
          <Button
            className="bg-amber-500 hover:bg-amber-600"
            onClick={publish}
            disabled={saving || !formData.title}
          >
            <Send className="w-4 h-4 mr-2" />
            Publish
          </Button>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Main Content */}
        <div className="flex-1">
          <Card>
            <CardContent className="p-6">
              <Tabs defaultValue="top" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="top">Top Section</TabsTrigger>
                  <TabsTrigger value="body">Body Sections</TabsTrigger>
                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                  <TabsTrigger value="seo">SEO</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>

                {/* Tab 1: Top Section */}
                <TabsContent value="top" className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="title">Title *</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => updateField('title', e.target.value)}
                        placeholder="Page title"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="slug">Slug *</Label>
                      <Input
                        id="slug"
                        value={formData.slug}
                        onChange={(e) => updateField('slug', e.target.value)}
                        placeholder="page-url-slug"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Page Type</Label>
                      <Select value={formData.pageType} onValueChange={(v) => updateField('pageType', v)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="page">Page</SelectItem>
                          <SelectItem value="blog">Blog</SelectItem>
                          <SelectItem value="seo">SEO</SelectItem>
                          <SelectItem value="case_study">Case Study</SelectItem>
                          <SelectItem value="pillar">Pillar</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Status</Label>
                      <Select value={formData.status} onValueChange={(v) => updateField('status', v)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="published">Published</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="h1Override">H1 Override (optional)</Label>
                    <Input
                      id="h1Override"
                      value={formData.h1Override}
                      onChange={(e) => updateField('h1Override', e.target.value)}
                      placeholder="Custom H1 heading (defaults to title)"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="introText">Intro Text</Label>
                    <Textarea
                      id="introText"
                      value={formData.introText}
                      onChange={(e) => updateField('introText', e.target.value)}
                      placeholder="Opening paragraph below the title"
                      className="min-h-[100px]"
                    />
                  </div>

                  {formData.pageType === 'seo' && (
                    <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="space-y-2">
                        <Label htmlFor="seoIndustry">SEO Industry</Label>
                        <Input
                          id="seoIndustry"
                          value={formData.seoIndustry}
                          onChange={(e) => updateField('seoIndustry', e.target.value)}
                          placeholder="e.g. Dental"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="seoLocation">SEO Location</Label>
                        <Input
                          id="seoLocation"
                          value={formData.seoLocation}
                          onChange={(e) => updateField('seoLocation', e.target.value)}
                          placeholder="e.g. London"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="seoProcess">SEO Process</Label>
                        <Input
                          id="seoProcess"
                          value={formData.seoProcess}
                          onChange={(e) => updateField('seoProcess', e.target.value)}
                          placeholder="e.g. Lead Generation"
                        />
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Category</Label>
                      <Select value={formData.categoryId} onValueChange={(v) => updateField('categoryId', v)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(groupedCategories).map(([type, cats]) => (
                            <SelectGroup key={type}>
                              <SelectLabel>{type.charAt(0).toUpperCase() + type.slice(1)}</SelectLabel>
                              {cats.map(cat => (
                                <SelectItem key={cat.id} value={cat.id}>
                                  {cat.name}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="parentPillarSlug">Parent Pillar Slug</Label>
                      <Input
                        id="parentPillarSlug"
                        value={formData.parentPillarSlug}
                        onChange={(e) => updateField('parentPillarSlug', e.target.value)}
                        placeholder="Optional: parent pillar page slug"
                      />
                    </div>
                  </div>
                </TabsContent>

                {/* Tab 2: Body Sections */}
                <TabsContent value="body" className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm text-gray-600">
                      Drag sections to reorder. Each section becomes a content block on the page.
                    </p>
                    <Button onClick={handleAddSection}>
                      <Plus className="w-4 h-4 mr-2" />
                      Add Section
                    </Button>
                  </div>

                  {formData.bodySections.length === 0 ? (
                    <div className="text-center py-12 text-gray-500 border-2 border-dashed border-gray-200 rounded-lg">
                      No sections yet. Click "Add Section" to start building your page.
                    </div>
                  ) : (
                    <DndContext
                      sensors={sensors}
                      collisionDetection={closestCenter}
                      onDragEnd={handleDragEnd}
                    >
                      <SortableContext
                        items={formData.bodySections.map(s => s.id)}
                        strategy={verticalListSortingStrategy}
                      >
                        <div className="space-y-2">
                          {formData.bodySections.map(section => (
                            <SortableSection
                              key={section.id}
                              section={section}
                              onEdit={handleEditSection}
                              onDelete={handleDeleteSection}
                            />
                          ))}
                        </div>
                      </SortableContext>
                    </DndContext>
                  )}
                </TabsContent>

                {/* Tab 3: FAQ */}
                <TabsContent value="faq" className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm text-gray-600">
                      Add FAQ items to display in an accordion or structured data.
                    </p>
                    <Button onClick={addFaqItem}>
                      <Plus className="w-4 h-4 mr-2" />
                      Add FAQ
                    </Button>
                  </div>

                  {formData.faqItems.length === 0 ? (
                    <div className="text-center py-12 text-gray-500 border-2 border-dashed border-gray-200 rounded-lg">
                      No FAQ items yet. Click "Add FAQ" to add questions and answers.
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {formData.faqItems.map((item, index) => (
                        <div key={index} className="p-4 border border-gray-200 rounded-lg space-y-3">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 space-y-2">
                              <Label>Question</Label>
                              <Input
                                value={item.question}
                                onChange={(e) => updateFaqItem(index, 'question', e.target.value)}
                                placeholder="Enter the question"
                              />
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFaqItem(index)}
                            >
                              <Trash2 className="w-4 h-4 text-gray-500" />
                            </Button>
                          </div>
                          <div className="space-y-2">
                            <Label>Answer</Label>
                            <Textarea
                              value={item.answer}
                              onChange={(e) => updateFaqItem(index, 'answer', e.target.value)}
                              placeholder="Enter the answer"
                              className="min-h-[80px]"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </TabsContent>

                {/* Tab 4: SEO */}
                <TabsContent value="seo" className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="metaTitle">Meta Title</Label>
                      <span className={`text-xs ${formData.metaTitle.length > 60 ? 'text-red-500' : 'text-gray-500'}`}>
                        {formData.metaTitle.length}/60
                      </span>
                    </div>
                    <Input
                      id="metaTitle"
                      value={formData.metaTitle}
                      onChange={(e) => updateField('metaTitle', e.target.value)}
                      placeholder="SEO title for search results"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="metaDescription">Meta Description</Label>
                      <span className={`text-xs ${formData.metaDescription.length > 160 ? 'text-red-500' : 'text-gray-500'}`}>
                        {formData.metaDescription.length}/160
                      </span>
                    </div>
                    <Textarea
                      id="metaDescription"
                      value={formData.metaDescription}
                      onChange={(e) => updateField('metaDescription', e.target.value)}
                      placeholder="Description for search results"
                      className="min-h-[80px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="focusKeyword">Focus Keyword</Label>
                    <Input
                      id="focusKeyword"
                      value={formData.focusKeyword}
                      onChange={(e) => updateField('focusKeyword', e.target.value)}
                      placeholder="Primary keyword for this page"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="canonicalUrl">Canonical URL (optional)</Label>
                      <Input
                        id="canonicalUrl"
                        value={formData.canonicalUrl}
                        onChange={(e) => updateField('canonicalUrl', e.target.value)}
                        placeholder="https://..."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ogImageUrl">OG Image URL (optional)</Label>
                      <Input
                        id="ogImageUrl"
                        value={formData.ogImageUrl}
                        onChange={(e) => updateField('ogImageUrl', e.target.value)}
                        placeholder="https://..."
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="noindex"
                      checked={formData.noindex}
                      onCheckedChange={(checked) => updateField('noindex', checked)}
                    />
                    <Label htmlFor="noindex" className="cursor-pointer">
                      Noindex (hide from search engines)
                    </Label>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="schemaMarkup">Schema Markup (JSON)</Label>
                    <Textarea
                      id="schemaMarkup"
                      value={formData.schemaMarkup}
                      onChange={(e) => updateField('schemaMarkup', e.target.value)}
                      placeholder='{"@context": "https://schema.org", ...}'
                      className="min-h-[150px] font-mono text-sm"
                    />
                  </div>
                </TabsContent>

                {/* Tab 5: Settings */}
                <TabsContent value="settings" className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="ctaLabel">CTA Label</Label>
                      <Input
                        id="ctaLabel"
                        value={formData.ctaLabel}
                        onChange={(e) => updateField('ctaLabel', e.target.value)}
                        placeholder="Book a Free Call"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ctaUrl">CTA URL</Label>
                      <Input
                        id="ctaUrl"
                        value={formData.ctaUrl}
                        onChange={(e) => updateField('ctaUrl', e.target.value)}
                        placeholder="/contact"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="authorName">Author Name</Label>
                    <Input
                      id="authorName"
                      value={formData.authorName}
                      onChange={(e) => updateField('authorName', e.target.value)}
                      placeholder="ProspectFly Team"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Render Type</Label>
                      <Select value={formData.renderType} onValueChange={(v) => updateField('renderType', v)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="prerender">Prerender (Static)</SelectItem>
                          <SelectItem value="ssr">SSR (Dynamic)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Template</Label>
                      <Select value={formData.template} onValueChange={(v) => updateField('template', v)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="w-72 shrink-0">
          <QualityChecklist formData={formData} />
          <HelpCard />
        </div>
      </div>

      {/* Section Editor Modal */}
      <SectionEditorModal
        isOpen={sectionModalOpen}
        section={editingSection}
        onSave={handleSaveSection}
        onClose={() => {
          setSectionModalOpen(false)
          setEditingSection(null)
        }}
      />
    </div>
  )
}
