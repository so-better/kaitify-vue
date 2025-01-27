import { defineConfig } from 'vitepress'
import path from 'path'
import fs from 'fs'

const getMenuList = () => {
  const items = fs.readdirSync(path.resolve(__dirname, '../../src/editor/menu/built-in'))
  const folderNames: string[] = []
  for (const item of items) {
    const itemPath = path.join(path.resolve(__dirname, '../../src/editor/menu/built-in'), item)
    const stats = fs.statSync(itemPath)
    if (stats.isDirectory()) {
      folderNames.push(item)
    }
  }
  const menuNames: string[] = []
  folderNames.forEach(item => {
    const list = fs.readdirSync(path.resolve(__dirname, `../../src/editor/menu/built-in/${item}`))
    for (const el of list) {
      if (el.endsWith('.vue')) {
        const lastIndex = el.lastIndexOf('.vue')
        const name = el.substring(0, lastIndex)
        menuNames.push(name)
        //创建内置菜单的md文件
        const docPath = path.join(path.resolve(__dirname, '../../docs/menus/built-in'), `${name}.md`)
        if (!fs.existsSync(docPath)) {
          fs.writeFileSync(docPath, '', { encoding: 'utf-8' })
        }
      }
    }
  })
  return menuNames
}

export default defineConfig({
  base: '/docs/kaitify-vue/',
  title: 'kaitify-vue',
  description: '一个基于@kaitify/core开发的vue富文本编辑器核心库',
  lastUpdated: true,
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'https://www.so-better.cn/docs/kaitify-core/logo.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no' }]
  ],
  outDir: 'kaitify-vue',
  themeConfig: {
    logo: {
      src: 'https://www.so-better.cn/docs/kaitify-core/logo.png'
    },
    outline: {
      label: '本页目录',
      level: [2, 5]
    },
    nav: [
      { text: '指南', link: '/guide/introduction', activeMatch: '/guide' },
      { text: '内置菜单', link: '/menus/introduction', activeMatch: '/menus' },
      {
        text: '在线体验',
        link: 'https://www.so-better.cn/run?lib=kaitify-vue',
        target: '_blank'
      },
      { text: '反馈', link: 'https://www.so-better.cn/feedback', target: '_blank' },
      { text: '更新日志', link: '/changelog' }
    ],
    sidebar: {
      '/guide': [
        {
          text: '开始使用',
          items: [
            {
              text: '简介',
              link: '/guide/introduction'
            },
            {
              text: '安装',
              link: '/guide/install'
            },
            {
              text: '快速上手',
              link: '/guide/quick-start'
            }
          ]
        },
        {
          text: '组件',
          items: [
            {
              text: 'Wrapper',
              link: '/guide/wrapper'
            },
            {
              text: 'Bubble',
              link: '/guide/bubble'
            },
            {
              text: 'Menu',
              link: '/guide/menu'
            },
            {
              text: 'Divider',
              link: '/guide/divider'
            }
          ]
        },
        {
          text: '其他',
          items: [
            {
              text: '菜单快捷键',
              link: '/guide/shortcut'
            },
            {
              text: '国际化支持',
              link: '/guide/locale'
            }
          ]
        }
      ],
      '/menus': [
        {
          text: '开始使用',
          items: [
            {
              text: '简介',
              link: '/menus/introduction'
            }
          ]
        },
        {
          text: '内置菜单',
          items: getMenuList().map(name => {
            return {
              text: name,
              link: `/menus/built-in/${name}`
            }
          })
        }
      ]
    },
    socialLinks: [
      { icon: 'npm', link: 'https://www.npmjs.com/package/@kaitify/vue' },
      { icon: 'gitee', link: 'https://gitee.com/so-better/kaitify-vue' },
      { icon: 'github', link: 'https://github.com/so-better/kaitify-vue' }
    ],
    search: { provider: 'local' },
    lastUpdated: {
      text: '上次更新'
    },
    docFooter: {
      prev: 'Prev',
      next: 'Next'
    },
    darkModeSwitchTitle: '切换到深色模式',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchLabel: '主题风格切换',
    sidebarMenuLabel: '菜单目录',
    returnToTopLabel: '返回顶部',
    externalLinkIcon: true
  },
  markdown: {
    image: {
      lazyLoading: true
    },
    theme: {
      dark: 'github-dark',
      light: 'github-light'
    },
    codeCopyButtonTitle: '复制代码'
  },
  vite: {
    server: {
      port: 5401
    }
  }
})
