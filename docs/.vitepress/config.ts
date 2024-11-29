import { defineConfig } from 'vitepress'
import path from 'path'
import fs from 'fs'

export default defineConfig({
  base: '/kaitify-vue/',
  title: 'kaitify-vue',
  description: '一个基于@kaitify/core开发的vue富文本编辑器核心库',
  lastUpdated: true,
  head: [['link', { rel: 'icon', type: 'image/png', href: './logo.png' }]],
  themeConfig: {
    logo: {
      src: '/logo.png'
    },
    outline: {
      label: '本页目录',
      level: [2, 5]
    },
    nav: [
      { text: '指南', link: '/guide/introduction', activeMatch: '/guide' },
      { text: '内置菜单', link: '/menus/introduction', activeMatch: '/menus' },
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
            }
          ]
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
