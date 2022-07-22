import blog, { ga, redirects } from "https://deno.land/x/blog@0.4.1/blog.tsx";

blog({
  title: "alexlees",
  author: "alexlees",
  description: "alexlees's blog",
  avatarClass: "rounded-full",
  avatar: 'https://avatars.githubusercontent.com/u/38124537',
  links: [
    { title: "GitHub", url: "https://github.com/alexlees" },
  ],
  lang: "zh-cn",
  theme: 'auto',
  middlewares: [
    ga('G-9RKQCCX1SR'),
    redirects({}),
  ],
  favicon: 'https://avatars.githubusercontent.com/u/38124537',
});
