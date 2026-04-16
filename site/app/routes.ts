import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("beta", "routes/beta.tsx"),
  route("approach", "routes/approach.tsx"),
  route("resources/linkedin-ads-strategy", "routes/resources.linkedin-ads-strategy.tsx"),
  route("resources/linkedin-audience-targeting", "routes/resources.linkedin-audience-targeting.tsx"),
  route("resources/linkedin-ad-creative", "routes/resources.linkedin-ad-creative.tsx"),
  route("resources/linkedin-tracking-attribution", "routes/resources.linkedin-tracking-attribution.tsx"),
  route("resources/linkedin-retargeting", "routes/resources.linkedin-retargeting.tsx"),
  route("pricing", "routes/pricing.tsx"),
  route("about", "routes/about.tsx"),
  route("*", "routes/$.tsx"),
] satisfies RouteConfig;
