import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("beta", "routes/beta.tsx"),
  route("*", "routes/$.tsx"),
] satisfies RouteConfig;
