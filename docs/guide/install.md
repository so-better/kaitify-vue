---
title: 安装
---

# 安装

## 下载 kaitify 本地到使用

- 下载地址：[https://registry.npmmirror.com/@kaitify/core/download/@kaitify/core-0.0.1-beta.4.tgz](https://registry.npmmirror.com/@kaitify/core/download/@kaitify/core-0.0.1-beta.4.tgz)
- 下载完成后最终解压得到一个 package 文件夹，进入 package 文件夹后，将 package 目录下的整个 lib 目录拷贝到你的项目下
- 在 html 页面中引入 js

```html
<!-- 使用全局构建版本 -->
<script src="lib/kaitify-core.umd.js" type="text/javascript"></script>
```

```html
<!-- 使用es模块构建版本 -->
<script type="module">
  import { Editor } from 'lib/kaitify-core.es.js'
</script>
```

## 通过 CDN 使用 kaitify

你可以借助 script 标签直接通过 CDN 来使用 kaitify

```html
<!-- 引入固定版本的kaitify -->
<script src="https://unpkg.com/@kaitify/core@0.0.1-beta.4/lib/kaitify-core.umd.js"></script>
<!-- 始终引入最新的kaitify -->
<script src="https://unpkg.com/@kaitify/core/lib/kaitify-core.umd.js"></script>
```

```html
<!-- 使用CDN上的es模块构建版本 -->
<script type="module">
  import { Editor } from 'https://unpkg.com/@kaitify/core/lib/kaitify-core.es.js'
</script>
```

## 通过 npm/yarn/pnpm 安装 kaitify

> 假设你已了解关于  html、css  和  javascript  的中级知识，并且对于 npm，es6，webpack 已经有了足够的了解，我们更推荐这类安装方式

::: code-group

```bash [npm]
npm install @kaitify/core

# 安装指定版本
npm install @kaitify/core@0.0.1-beta.4
```

```bash [yarn]
yarn install @kaitify/core

# 安装指定版本
yarn install @kaitify/core@0.0.1-beta.4
```

```bash [pnpm]
pnpm install @kaitify/core

# 安装指定版本
pnpm install @kaitify/core@0.0.1-beta.4
```

:::
