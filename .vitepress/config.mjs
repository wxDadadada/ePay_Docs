import { defineConfig } from 'vitepress'

export default defineConfig({
  base: "/",
  // icon
  head: [["link", { rel: "icon", href: "/favicon 2.ico" }]],
  // 站点标题
  title: "ePay.la",
  // 站点描述
  description: "易支付",
  // // 国际化
  // locales: {
  //   root: {
  //     label: '简体中文',
  //     lang: 'zh'
  //   },
  //   en: {
  //     label: 'English',
  //     lang: 'en', // 可选，将作为 `lang` 属性添加到 `html` 标签中
  //     link: '/en/' // 默认 /en/ -- 显示在导航栏翻译菜单上，可以是外部的
  //     // 其余 locale 特定属性...
  //   }
  // },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // i18nRouting: true,
    // 左上logo
    logo: '/支付 (1).png',
    // 左上标题
    siteTitle: 'ePay.la',
    // // 搜索
    // search: {
    //   provider: "local",
    //   options: {
    //     translations: {
    //       button: {
    //         buttonText: "搜索",
    //         buttonAriaLabel: "搜索",
    //       },
    //       modal: {
    //         noResultsText: "无法找到相关结果",
    //         resetButtonTitle: "清除查询条件",
    //         footer: {
    //           selectText: "选择",
    //           navigateText: "切换",
    //         },
    //       },
    //     },
    //   },
    // },
    // 顶部导航
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guide/' },
      { text: '帮助中心', link: '/help/' },
      { text: '开发文档', link: '/doc/' },
      {
        text: '网站导航',
        items: [
          { text: 'ePay.la', link: 'https://epay.la' },
          { text: '大聪明API', link: 'https://api.openai.sn' },
          { text: 'NO-API', link: 'https://docs.qq.com/doc/p/af2a94ff20cd066dc642d20179a04006c9cba162' }
        ]
      },
    ],
    // 切换主题
    darkModeSwitchLabel: '切换主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '切换语言',
    externalLinkIcon: true,
    // // 右上图标
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/wxdadadada' },
    //   // { icon: 'twitter', link: '...' },
    //   // 可以通过将 SVG 作为字符串传递来添加自定义图标：
    //   {
    //     icon: {
    //       svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
    //     },
    //     link: '...',
    //     // 也可以为无障碍添加一个自定义标签 (可选但推荐):
    //     ariaLabel: 'cool link'
    //   }
    // ],
    // 侧边栏
    sidebar: {
      '/guide/': [{
        text: '快速开始',
        items: [
          { text: '平台介绍', link: '/guide/' },
          { text: '开户指引', link: '/guide/reg' }
        ]
      }],
      '/doc/': [{
        text: '开发文档',
        items: [
          { text: '说明', link: '/doc/' },
          {
            text: '开发文档 V2',
            items: [
              { text: '接口说明及规范', link: '/doc/v2/' },
              { text: '签名规则', link: '/doc/v2/sign_note' },
              { text: '支付方式', link: '/doc/v2/paytype' }
            ]
          },
          { text: '开发文档 V1', link: '/doc/v1/' },
        ],
      }]
    },
    // 页面导航
    outline: {
      label: '页面导航',
    },

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
      prev: false,
      next: false
    },
    // 页脚
    footer: {
      message: 'ePay.la',
      copyright: 'Copyright © 2024 wxDa'
    }
  }
})
