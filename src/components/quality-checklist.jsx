import { Check, X } from 'lucide-react'

function CheckItem({ passed, label }) {
  return (
    <div className="flex items-center gap-2 py-1.5">
      {passed ? (
        <Check className="w-4 h-4 text-green-600" />
      ) : (
        <X className="w-4 h-4 text-red-500" />
      )}
      <span className={`text-sm ${passed ? 'text-gray-700' : 'text-gray-500'}`}>
        {label}
      </span>
    </div>
  )
}

function isValidSlug(slug) {
  if (!slug) return false
  // URL-safe: lowercase, numbers, hyphens only
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)
}

export function QualityChecklist({ formData }) {
  const {
    title,
    slug,
    metaTitle,
    metaDescription,
    focusKeyword,
    bodySections
  } = formData

  const checks = [
    {
      passed: Boolean(title?.trim()),
      label: 'Title filled'
    },
    {
      passed: Boolean(metaTitle?.trim()) && metaTitle.length <= 60,
      label: 'Meta title ≤60 chars'
    },
    {
      passed: Boolean(metaDescription?.trim()) && metaDescription.length <= 160,
      label: 'Meta description ≤160 chars'
    },
    {
      passed: Boolean(focusKeyword?.trim()),
      label: 'Focus keyword filled'
    },
    {
      passed: Array.isArray(bodySections) && bodySections.length > 0,
      label: 'At least one body section'
    },
    {
      passed: isValidSlug(slug),
      label: 'Slug is URL-safe'
    }
  ]

  const passedCount = checks.filter(c => c.passed).length
  const allPassed = passedCount === checks.length

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-900">Quality Checklist</h3>
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
          allPassed
            ? 'bg-green-100 text-green-700'
            : 'bg-amber-100 text-amber-700'
        }`}>
          {passedCount}/{checks.length}
        </span>
      </div>
      <div className="space-y-0.5">
        {checks.map((check, i) => (
          <CheckItem key={i} passed={check.passed} label={check.label} />
        ))}
      </div>
    </div>
  )
}
