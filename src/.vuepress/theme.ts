import { hopeTheme } from "vuepress-theme-hope";
import {pinsilySidebar } from "./sidebar.js";
import {pinsilyNavbar} from "./navbar.js";

export default hopeTheme({
  hostname: "https://pinsily.github.io",

  author: {
    name: "Mr.pinsily",
    url: "https://blog.pinsily.site",
    email: "13160724868@163.com"
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "pinsily/pinsily_site",

  docsDir: "docs",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "一个就这样的人~~",
    intro: "/zh/intro.html",
    medias: {
      Email: "https://example.com",
      Gitee: "https://example.com",
      GitHub: "https://example.com",
      Gmail: "https://example.com",
      Wechat: "https://example.com",
      Weibo: "https://example.com",
    },
  },


  // navbar
  navbar: pinsilyNavbar,

  // sidebar
  sidebar: pinsilySidebar,

  footer: '<p class="text-center">备案号: <a href="https://beian.miit.gov.cn/">粤ICP备2021066983号-1</a></p>',

  displayFooter: true,


  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    comment: {

      provider: "Giscus",
      repo: "pinsily/giscus-discussions",
      repoId: "R_kgDOIUF1Jw",
      category: "Announcements",
      categoryId: "DIC_kwDOIUF1J84CSNan",

    },

    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imageLazyload: true,
      imageTitle: true,
      imageSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Demo",
            short_name: "Demo",
            url: "/demo/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
