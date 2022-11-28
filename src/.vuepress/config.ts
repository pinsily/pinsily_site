import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "pinsily's site",
  description: "pinsily's blog collection",

  theme,

  shouldPrefetch: false,
});
