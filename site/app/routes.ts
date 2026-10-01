import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("approach", "routes/approach.tsx"),
  route("services", "routes/services.tsx"),
  route("contact", "routes/contact.tsx"),
  route("thank-you", "routes/thank-you.tsx"),
  route("get-started/linkedin-ads", "routes/get-started.linkedin-ads.tsx"),
  route("linkedin-ads-saas", "routes/linkedin-ads-saas.tsx"),
  route("linkedin-ads-saas/thanks", "routes/linkedin-ads-saas.thanks.tsx"),
  route("linkedin-ads-saas/not-yet", "routes/linkedin-ads-saas.not-yet.tsx"),
  route("resources/linkedin-ads-strategy", "routes/resources.linkedin-ads-strategy.tsx"),
  route("resources/linkedin-audience-targeting", "routes/resources.linkedin-audience-targeting.tsx"),
  route("resources/linkedin-ad-creative", "routes/resources.linkedin-ad-creative.tsx"),
  route("resources/linkedin-tracking-attribution", "routes/resources.linkedin-tracking-attribution.tsx"),
  route("resources/linkedin-retargeting", "routes/resources.linkedin-retargeting.tsx"),
  route("about", "routes/about.tsx"),
  route("privacy", "routes/privacy.tsx"),
  route("terms", "routes/terms.tsx"),
  route("refunds", "routes/refunds.tsx"),
  route("*", "routes/$.tsx"),
] satisfies RouteConfig;
