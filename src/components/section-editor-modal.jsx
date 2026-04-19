import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from './ui/dialog'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { Plus, Trash2, GripVertical } from 'lucide-react'
import supabase from '../supabase-client'

const SECTION_TYPES = [
  { value: 'text', label: 'Text' },
  { value: 'bullets', label: 'Bullet List' },
  { value: 'numbered', label: 'Numbered List' },
  { value: 'cta', label: 'Call to Action' },
  { value: 'image', label: 'Image' },
]

const HEADING_LEVELS = [
  { value: 'h2', label: 'H2 (Main section)' },
  { value: 'h3', label: 'H3 (Subsection)' },
]

function createEmptySection(type) {
  const base = {
    id: Date.now(),
    type,
    heading: '',
    headingLevel: 'h2',
  }

  switch (type) {
    case 'text':
      return { ...base, content: '' }
    case 'bullets':
    case 'numbered':
      return { ...base, items: [''] }
    case 'cta':
      return { ...base, content: '', buttonLabel: 'Book a Free Call', buttonUrl: '/contact' }
    case 'image':
      return { ...base, assetId: '', altText: '', caption: '' }
    default:
      return base
  }
}

export function SectionEditorModal({ isOpen, section, onSave, onClose }) {
  const [data, setData] = useState(null)
  const [assets, setAssets] = useState([])
  const [loadingAssets, setLoadingAssets] = useState(false)

  useEffect(() => {
    if (isOpen) {
      if (section) {
        setData({ ...section })
      } else {
        setData(createEmptySection('text'))
      }
    }
  }, [isOpen, section])

  useEffect(() => {
    if (isOpen && data?.type === 'image') {
      fetchAssets()
    }
  }, [isOpen, data?.type])

  const fetchAssets = async () => {
    setLoadingAssets(true)
    try {
      const { data: assetsData } = await supabase
        .from('pf_site_assets')
        .select('id, file_name, alt_text')
        .order('created_at', { ascending: false })
      setAssets(assetsData || [])
    } catch (err) {
      console.error('Error fetching assets:', err)
    } finally {
      setLoadingAssets(false)
    }
  }

  const handleTypeChange = (newType) => {
    setData(createEmptySection(newType))
  }

  const updateField = (field, value) => {
    setData(prev => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    if (data) {
      onSave(data)
    }
  }

  // List item handlers for bullets/numbered
  const addItem = () => {
    setData(prev => ({
      ...prev,
      items: [...(prev.items || []), '']
    }))
  }

  const updateItem = (index, value) => {
    setData(prev => ({
      ...prev,
      items: prev.items.map((item, i) => i === index ? value : item)
    }))
  }

  const removeItem = (index) => {
    setData(prev => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index)
    }))
  }

  if (!data) return null

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {section ? 'Edit Section' : 'Add Section'}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Section Type */}
          <div className="space-y-2">
            <Label>Section Type</Label>
            <Select value={data.type} onValueChange={handleTypeChange}>
              <SelectTrigger className="text-black bg-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {SECTION_TYPES.map(type => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Heading (for all types) */}
          <div className="space-y-2">
            <Label>Heading</Label>
            <Input
              value={data.heading}
              onChange={(e) => updateField('heading', e.target.value)}
              placeholder="Section heading"
              className="text-black bg-white"
            />
          </div>

          {/* Heading Level */}
          <div className="space-y-2">
            <Label>Heading Level</Label>
            <Select value={data.headingLevel} onValueChange={(v) => updateField('headingLevel', v)}>
              <SelectTrigger className="text-black bg-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {HEADING_LEVELS.map(level => (
                  <SelectItem key={level.value} value={level.value}>
                    {level.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Type-specific fields */}
          {data.type === 'text' && (
            <div className="space-y-2">
              <Label>Content</Label>
              <Textarea
                value={data.content}
                onChange={(e) => updateField('content', e.target.value)}
                placeholder="Enter paragraph content. Use <strong> for bold, <em> for italic."
                className="min-h-[200px] text-black bg-white"
              />
              <p className="text-xs text-zinc-400">
                Allowed HTML: &lt;strong&gt;, &lt;em&gt;, &lt;a href=""&gt;
              </p>
            </div>
          )}

          {(data.type === 'bullets' || data.type === 'numbered') && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>List Items</Label>
                <Button type="button" variant="outline" size="sm" onClick={addItem} className="cursor-pointer">
                  <Plus className="w-4 h-4 mr-1" />
                  Add Item
                </Button>
              </div>
              <div className="space-y-2">
                {(data.items || []).map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <GripVertical className="w-4 h-4 text-zinc-500" />
                    <Input
                      value={item}
                      onChange={(e) => updateItem(index, e.target.value)}
                      placeholder={`Item ${index + 1}`}
                      className="flex-1 text-black bg-white"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(index)}
                      disabled={data.items.length <= 1}
                      className="cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4 text-zinc-400" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {data.type === 'cta' && (
            <>
              <div className="space-y-2">
                <Label>CTA Message</Label>
                <Textarea
                  value={data.content}
                  onChange={(e) => updateField('content', e.target.value)}
                  placeholder="Call to action message"
                  className="min-h-[100px] text-black bg-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Button Label</Label>
                  <Input
                    value={data.buttonLabel}
                    onChange={(e) => updateField('buttonLabel', e.target.value)}
                    placeholder="Book a Free Call"
                    className="text-black bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Button URL</Label>
                  <Input
                    value={data.buttonUrl}
                    onChange={(e) => updateField('buttonUrl', e.target.value)}
                    placeholder="/contact"
                    className="text-black bg-white"
                  />
                </div>
              </div>
            </>
          )}

          {data.type === 'image' && (
            <>
              <div className="space-y-2">
                <Label>Select Image</Label>
                {loadingAssets ? (
                  <p className="text-sm text-zinc-400">Loading assets...</p>
                ) : assets.length === 0 ? (
                  <p className="text-sm text-zinc-400">No images available. Upload images in the Assets section first.</p>
                ) : (
                  <Select value={data.assetId} onValueChange={(v) => updateField('assetId', v)}>
                    <SelectTrigger className="text-black bg-white">
                      <SelectValue placeholder="Select an image" />
                    </SelectTrigger>
                    <SelectContent>
                      {assets.map(asset => (
                        <SelectItem key={asset.id} value={asset.id}>
                          {asset.alt_text || asset.file_name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </div>
              <div className="space-y-2">
                <Label>Alt Text</Label>
                <Input
                  value={data.altText}
                  onChange={(e) => updateField('altText', e.target.value)}
                  placeholder="Describe the image for accessibility"
                  className="text-black bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label>Caption (optional)</Label>
                <Input
                  value={data.caption}
                  onChange={(e) => updateField('caption', e.target.value)}
                  placeholder="Image caption"
                  className="text-black bg-white"
                />
              </div>
            </>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose} className="cursor-pointer">
            Cancel
          </Button>
          <Button onClick={handleSave} className="bg-amber-500 hover:bg-amber-600 cursor-pointer">
            {section ? 'Update Section' : 'Add Section'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// Preview card for body sections list
export function SectionPreviewCard({ section, onEdit, onDelete, dragHandleProps }) {
  const typeLabels = {
    text: 'Text',
    bullets: 'Bullets',
    numbered: 'Numbered',
    cta: 'CTA',
    image: 'Image'
  }

  const typeColors = {
    text: 'bg-blue-100 text-blue-700',
    bullets: 'bg-green-100 text-green-700',
    numbered: 'bg-purple-100 text-purple-700',
    cta: 'bg-amber-100 text-amber-700',
    image: 'bg-pink-100 text-pink-700'
  }

  return (
    <div className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg">
      <div {...dragHandleProps} className="cursor-grab">
        <GripVertical className="w-5 h-5 text-gray-400" />
      </div>
      <span className={`px-2 py-0.5 text-xs font-medium rounded ${typeColors[section.type]}`}>
        {typeLabels[section.type]}
      </span>
      <span className="flex-1 text-sm text-gray-700 truncate">
        {section.heading || '(No heading)'}
      </span>
      <Button variant="outline" size="sm" onClick={() => onEdit(section)}>
        Edit
      </Button>
      <Button variant="ghost" size="sm" onClick={() => onDelete(section.id)}>
        <Trash2 className="w-4 h-4 text-gray-500" />
      </Button>
    </div>
  )
}
