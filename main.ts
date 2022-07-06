import blog, { ga, redirects } from "https://deno.land/x/blog@0.3.3/blog.tsx";

blog({
  title: "alexlees",
  author: "alexlees",
  description: "alexlees's blog",
  avatarClass: "rounded-full",
  links: [
    { title: "GitHub", url: "https://github.com/alexlees" },
  ],
  background: "#f9f9f9",
  lang: "zh-cn",
  timezone: "zh-cn",
  middlewares: [
    ga("G-9RKQCCX1SR"),
    redirects({}),
  ],
});
