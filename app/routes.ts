import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/projects", "routes/projects.tsx"),
  route("/education", "routes/education.tsx"),
  route("/contact", "routes/contact.tsx"),
  route("/socials", "routes/socials.tsx"),
] satisfies RouteConfig;