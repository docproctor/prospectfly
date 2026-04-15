import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("beta", "routes/beta.tsx"),
  route("approach", "routes/approach.tsx"),
  route("strategy", "routes/strategy.tsx"),
  route("targeting", "routes/targeting.tsx"),
  route("creative", "routes/creative.tsx"),
  route("tracking", "routes/tracking.tsx"),
  route("retargeting", "routes/retargeting.tsx"),
  route("*", "routes/$.tsx"),
] satisfies RouteConfig;
