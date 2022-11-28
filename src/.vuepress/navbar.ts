import { navbar } from "vuepress-theme-hope";

export const pinsilyNavbar = navbar([
  "/",
  {
    text: "工具使用",
    icon: "edit",
    link: "/posts/tools",
  },
  {
    text: "分类",
    icon: "category",
    link: "/category",
  },
  {
    text: "标签",
    icon: "tag",
    link: "/tag",
  },
  {
    text: "归档",
    icon: "timeline",
    link: "/timeline",
  }
]);
