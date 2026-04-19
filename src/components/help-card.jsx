import { useState } from 'react'
import { HelpCircle, Copy, Check, ChevronRight } from 'lucide-react'
import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from './ui/dialog'

// Help content for each section
const helpContent = {
  top: {
    title: 'Top Section',
    content: `TOP SECTION HELP

This section contains the core page information and metadata.

FIELDS:

• Title (required): The main title of your page. This is used as the default H1 heading and appears in the browser tab.

• Slug (required): The URL path for your page (e.g., "ppc-agency/london" creates prospectfly.com/ppc-agency/london). Auto-generated from title but can be edited. Use lowercase letters, numbers, and hyphens only. Supports nested paths with forward slashes.

• Page Type: Categorizes your content for filtering and display:
  - Page: Standard marketing pages
  - Blog: Blog posts and articles
  - SEO: Programmatic SEO pages (location/industry specific)
  - Case Study: Client success stories
  - Pillar: Cornerstone content that child pages link to

• Status: Draft pages are not visible on the public site. Published pages go live immediately.

• H1 Override: Optional custom H1 heading different from the title. Useful for SEO when you want a different display heading than the page title.

• Intro Text: Opening paragraph displayed below the H1. Sets the context for the page content.

• SEO Industry/Location/Process: For SEO page types only. Used for programmatic SEO pages targeting specific industries (e.g., "Healthcare"), locations (e.g., "London"), or processes (e.g., "Google Ads").

• Category: Assign to a content category for organization and filtering.

• Parent Pillar Slug: Link this page as a child of a pillar page for content hierarchies (e.g., blog posts under a pillar topic).`
  },
  body: {
    title: 'Body Sections',
    content: `BODY SECTIONS HELP

Build your page content using drag-and-drop sections. Each section becomes a content block on the live page.

SECTION TYPES:

• Text: Rich content block with an optional heading and paragraph text. Use for main content, explanations, or descriptions.

• Bullets: Unordered list with an optional heading. Perfect for features, benefits, or key points.

• Numbered: Ordered list with an optional heading. Ideal for step-by-step processes, rankings, or sequences.

• CTA (Call to Action): Attention-grabbing section with heading, description, button text, and button URL. Use to drive conversions.

• Image: Display an image with optional alt text and caption. Alt text is important for SEO and accessibility.

HOW TO USE:

1. Click "Add Section" to create a new content block
2. Choose the section type from the dropdown
3. Fill in the content fields
4. Click "Save Section" to add it to the page
5. Drag sections to reorder them using the grip handle on the left
6. Click the edit icon to modify existing sections
7. Click the trash icon to delete a section

TIPS:
- Use descriptive headings for better SEO
- Keep paragraphs focused and scannable
- Include CTAs at strategic points to guide visitors
- Add images to break up text and improve engagement`
  },
  faq: {
    title: 'FAQ',
    content: `FAQ SECTION HELP

Add frequently asked questions and answers to your page. FAQs improve user experience and can appear as rich results in Google search.

HOW TO USE:

1. Click "Add FAQ" to create a new question/answer pair
2. Enter the question in the "Question" field
3. Enter the answer in the "Answer" field
4. Add more FAQ items as needed
5. Click the trash icon to remove an FAQ item

BEST PRACTICES:

• Write questions in the first person (e.g., "How do I get started?")
• Keep answers concise but comprehensive
• Address common objections and concerns
• Include relevant keywords naturally
• Order FAQs from most to least common

SEO BENEFITS:

FAQs can generate FAQ schema markup, which may display as expandable questions in Google search results, increasing click-through rates.

RECOMMENDED:
- Add 3-6 FAQ items per page
- Focus on questions your target audience actually asks
- Update FAQs based on customer inquiries`
  },
  seo: {
    title: 'SEO',
    content: `SEO SECTION HELP

Optimize your page for search engines with metadata and technical settings.

FIELDS:

• Meta Title (recommended 50-60 characters): The title shown in search engine results and browser tabs. Include your primary keyword near the beginning. The character counter turns red when you exceed 60 characters.

• Meta Description (recommended 150-160 characters): The description shown below your title in search results. Write compelling copy that encourages clicks. Include your focus keyword naturally.

• Focus Keyword: The primary keyword you want this page to rank for. Used by the quality checklist to validate SEO optimization.

• Canonical URL: If this content exists elsewhere, enter the original URL to avoid duplicate content penalties. Leave blank for original content.

• OG Image URL: The image displayed when your page is shared on social media. Use an absolute URL (https://...). Recommended size: 1200x630px.

• Noindex: Check this to hide the page from search engines. Use for internal pages, duplicates, or content you don't want indexed.

• Schema Markup: Advanced structured data in JSON-LD format. This helps search engines understand your content and can enable rich results. Must be valid JSON.

TIPS:
- Every page should have a unique meta title and description
- Include your focus keyword in the meta title, description, and H1
- Keep meta titles actionable and benefit-focused
- Write meta descriptions as a call to action`
  },
  settings: {
    title: 'Settings',
    content: `SETTINGS SECTION HELP

Configure page behavior and display options.

FIELDS:

• CTA Label: The text displayed on call-to-action buttons throughout the page. Default: "Book a Free Call"

• CTA URL: Where CTA buttons link to. Can be an internal path (e.g., "/contact") or external URL (e.g., "https://calendly.com/..."). Default: "/contact"

• Author Name: The author credited for this content. Displayed on blog posts and articles. Default: "ProspectFly Team"

• Render Type:
  - Prerender (Static): Page is built at deploy time. Faster loading, better for pages that don't change often.
  - SSR (Dynamic): Page is rendered on each request. Use for pages with frequently changing content.

• Template: The page layout template to use. Currently only "Standard" is available. More templates may be added in the future.

TIPS:
- Use consistent CTA labels across similar pages
- Test CTA URLs to ensure they work correctly
- Use Prerender for most pages unless you need real-time data
- Update author name for guest posts or specific team members`
  }
}

// Get all help text combined
function getAllHelpText() {
  const sections = ['top', 'body', 'faq', 'seo', 'settings']
  return sections.map(key => helpContent[key].content).join('\n\n---\n\n')
}

function HelpLink({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-between w-full py-2 px-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md cursor-pointer transition-colors"
    >
      <span>{label}</span>
      <ChevronRight className="w-4 h-4 text-gray-400" />
    </button>
  )
}

function CopyButton({ text, label = 'Copy to clipboard' }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleCopy}
      className="cursor-pointer"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 mr-2 text-green-600" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="w-4 h-4 mr-2" />
          {label}
        </>
      )}
    </Button>
  )
}

export function HelpCard() {
  const [openModal, setOpenModal] = useState(null)
  const [allCopied, setAllCopied] = useState(false)

  const handleCopyAll = async () => {
    try {
      await navigator.clipboard.writeText(getAllHelpText())
      setAllCopied(true)
      setTimeout(() => setAllCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const sections = [
    { key: 'top', label: 'Top Section' },
    { key: 'body', label: 'Body Sections' },
    { key: 'faq', label: 'FAQ' },
    { key: 'seo', label: 'SEO' },
    { key: 'settings', label: 'Settings' },
  ]

  return (
    <>
      <div className="bg-white rounded-lg border border-gray-200 p-4 mt-4">
        <div className="flex items-center gap-2 mb-3">
          <HelpCircle className="w-4 h-4 text-gray-500" />
          <h3 className="font-semibold text-gray-900">Help</h3>
        </div>

        <div className="space-y-0.5">
          {sections.map(({ key, label }) => (
            <HelpLink
              key={key}
              label={label}
              onClick={() => setOpenModal(key)}
            />
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopyAll}
            className="w-full cursor-pointer"
          >
            {allCopied ? (
              <>
                <Check className="w-4 h-4 mr-2 text-green-600" />
                Copied All!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                Copy All Help Text
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Help Modals */}
      {sections.map(({ key }) => (
        <Dialog
          key={key}
          open={openModal === key}
          onOpenChange={(open) => !open && setOpenModal(null)}
        >
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{helpContent[key].title} Help</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <pre className="whitespace-pre-wrap text-sm text-zinc-300 font-sans leading-relaxed">
                {helpContent[key].content}
              </pre>
            </div>
            <DialogFooter>
              <CopyButton text={helpContent[key].content} />
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ))}
    </>
  )
}
