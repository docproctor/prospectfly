// Paid-traffic landing pages render without the site nav and footer, so the
// only way off the page is the form.
const LANDING_PREFIXES = ["/get-started", "/linkedin-ads-saas"];

export function isLandingPath(pathname: string) {
  return LANDING_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );
}
