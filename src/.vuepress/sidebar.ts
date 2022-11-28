import { sidebar } from "vuepress-theme-hope";

export const pinsilySidebar = sidebar({
    "/": [
        "",
        {
            text: "工具使用",
            icon: "note",
            prefix: "posts/tools/",
            children: "structure",
        },
        
        "intro",
        "slides",
    ],
});