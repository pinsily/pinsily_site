import { sidebar } from "vuepress-theme-hope";

export const pinsilySidebar = sidebar({
    "/": [
        "",
        {
            text: "工具使用",
            icon: "note",
            prefix: "posts/tools/",
            children: [{
                text: "Git",
                prefix: "git",
                collapsible: true,
                children: "structure",
            },{
                text: "Idea",
                prefix: "idea",
                collapsible: true,
                children: "structure",
            }],
        },

        // "intro",
        // "slides",
    ],
});