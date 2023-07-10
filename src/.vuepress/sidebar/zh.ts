import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "ShareUI文档",
      icon: "note",
      prefix: "shareui/",
      collapsible: true,
      children: [{
        text: "入门",
        prefix: "first/",
        collapsible: true,
        children: "structure"
      },
        {
          text: "组件",
          collapsible: true,
          prefix: "components/",
          children: [
            {
              text: "表单",
              prefix: "form/",
              collapsible: true,
              children: "structure"
            },
            {
              text: "按钮",
              prefix: "button/",
              collapsible: true,
              children: "structure"
            }
          ]
        },
        {
          text: "模板",
          collapsible: true,
          prefix: "module/",
          children: "structure"
        },
      ]
    },
    {
      text: "ShareCore文档",
      icon: "note",
      collapsible: true,
      prefix: "sharecore/",
      children: "structure",
    },
    {
      text: "ShareJpa文档",
      icon: "note",
      collapsible: true,
      prefix: "sharejpa/",
      children: "structure",
    },
    {
      text: "ShareAdmin文档",
      icon: "note",
      collapsible: true,
      prefix: "shareadmin/",
      children: [
        {
          text: "入门",
          prefix: "first/",
          collapsible: true,
          children: "structure"
        }
      ],
    },
  ],
});
