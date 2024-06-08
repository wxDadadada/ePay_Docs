import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/wxDa_Docs",
  // icon
  head: [["link", { rel: "icon", href: "/wxDa_Docs/favicon.ico" }]],
  // 站点标题
  title: "wxDa",
  // 站点描述
  description: "wxDa_Docs",
  // 国际化
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh'
    },
    en: {
      label: 'English',
      lang: 'en', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      link: '/en/' // 默认 /en/ -- 显示在导航栏翻译菜单上，可以是外部的
      // 其余 locale 特定属性...
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // i18nRouting: true,
    // 左上logo
    logo: '/logo.png',
    // 左上标题
    siteTitle: 'wxDa',
    // 搜索
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索",
            buttonAriaLabel: "搜索",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    // 顶部导航
    nav: [
      { text: '主菜单', link: '/' },
      { text: '第二菜单', link: '/markdown-examples' },
      {
        text: '下拉菜单',
        items: [
          { text: '下拉子菜单1', link: '/item-1' },
          { text: '下拉子菜单2', link: '/item-2' },
          { text: '下拉子菜单3', link: '/item-3' }
        ]
      }
    ],
    // 切换主题
    darkModeSwitchLabel: '切换主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '切换语言',
    externalLinkIcon: true,
    // 右上图标
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wxdadadada' },
      { icon: 'twitter', link: '...' },
      // 可以通过将 SVG 作为字符串传递来添加自定义图标：
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
        },
        link: '...',
        // 也可以为无障碍添加一个自定义标签 (可选但推荐):
        ariaLabel: 'cool link'
      }
    ],
    // 侧边栏
    sidebar: [
      {
        text: '侧边菜单',
        items: [
          { text: '侧边菜单1', link: '/markdown-examples' },
          { text: '侧边菜单2', link: '/api-examples' }
        ]
      }
    ],
    // 在GitHub编辑
    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: '在GitHub上编辑此页面'
    // },
    // 更新日期
    // lastUpdated: {
    //   text: '更新日期',
    //   formatOptions: {
    //     dateStyle: 'short',
    //     timeStyle: 'short'
    //   }
    // },
    // 上一页下一页
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    // 页脚
    footer: {
      message: 'Doc',
      copyright: 'Copyright © 2024 wxDa'
    }
  }
})
