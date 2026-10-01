// Shared by the landing page form and its server action.

// The qualifying question. The bottom band is the group the site says it
// isn't for — it's captured but routed away from the calendar.
export const ACV_BANDS = [
  { value: "under_10k", label: "Under £10,000", qualified: false },
  { value: "10k_25k", label: "£10,000 – £25,000", qualified: true },
  { value: "25k_plus", label: "£25,000+", qualified: true },
] as const;

export type AcvBand = (typeof ACV_BANDS)[number]["value"];

// Query-string params captured on arrival and sent with the lead.
export const ATTRIBUTION_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "li_fat_id",
] as const;
