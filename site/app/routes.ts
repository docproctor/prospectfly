import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("beta", "routes/beta.tsx"),
  route("approach", "routes/approach.tsx"),
  route("services", "routes/services.tsx"),
  route("contact", "routes/contact.tsx"),
  route("thank-you", "routes/thank-you.tsx"),
  route("get-started/google-ads", "routes/get-started.google-ads.tsx"),
  route("get-started/linkedin-ads", "routes/get-started.linkedin-ads.tsx"),
  route("resources/linkedin-ads-strategy", "routes/resources.linkedin-ads-strategy.tsx"),
  route("resources/linkedin-audience-targeting", "routes/resources.linkedin-audience-targeting.tsx"),
  route("resources/linkedin-ad-creative", "routes/resources.linkedin-ad-creative.tsx"),
  route("resources/linkedin-tracking-attribution", "routes/resources.linkedin-tracking-attribution.tsx"),
  route("resources/linkedin-retargeting", "routes/resources.linkedin-retargeting.tsx"),
  route("pricing", "routes/pricing.tsx"),
  route("about", "routes/about.tsx"),
  route("privacy", "routes/privacy.tsx"),
  route("terms", "routes/terms.tsx"),
  route("refunds", "routes/refunds.tsx"),
  route("free-video-content-1", "routes/free-video-content-1.tsx"),
  route("*", "routes/$.tsx"),
] satisfies RouteConfig;
