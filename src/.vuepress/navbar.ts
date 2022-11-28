import { navbar } from "vuepress-theme-hope";

export const pinsilyNavbar = navbar([
  "/",
  {
    text: "工具使用",
    icon: "edit",
    link: "/posts/tools/",
  },
  {
    text: "V2 文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
]);
