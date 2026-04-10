# @kaitify/vue

[![npm version](https://img.shields.io/npm/v/@kaitify/vue)](https://www.npmjs.com/package/@kaitify/vue)
[![license](https://img.shields.io/npm/l/@kaitify/vue)](./LICENSE)

基于 [@kaitify/core](https://www.so-better.cn/docs/kaitify-core/) 开发的 Vue3 富文本编辑器核心库。使用 Vue3 的 VNode 作为视图渲染层，无需关心底层渲染细节，提供开箱即用的编辑器组件和丰富的内置菜单。

> 📖 [官方文档](https://www.so-better.cn/docs/kaitify-vue/)

## 特性

- 基于 `kaitify` 富文本编辑器核心库，采用 Vue3 VNode 渲染
- 提供 `Wrapper`、`Menu`、`Bubble` 等核心组件，快速搭建编辑器
- 内置 38+ 功能菜单，涵盖文本格式、段落、媒体、表格等常见操作
- 支持中文、英文、韩语、日语四种语言环境
- 支持深色模式
- 支持 CDN 引入和 npm 安装

## 安装

```bash
# npm
npm install @kaitify/vue

# 安装指定版本
npm install @kaitify/vue@0.0.5-beta.3

# yarn
yarn add @kaitify/vue

# pnpm
pnpm add @kaitify/vue
```

### CDN 方式

```html
<!-- UMD 全局构建（固定版本）-->
<script src="https://unpkg.com/@kaitify/vue@0.0.5-beta.3/lib/kaitify-vue.umd.js"></script>

<!-- UMD 全局构建（始终最新）-->
<script src="https://unpkg.com/@kaitify/vue/lib/kaitify-vue.umd.js"></script>

<!-- ES 模块构建 -->
<script type="module">
  import { Wrapper } from 'https://unpkg.com/@kaitify/vue/lib/kaitify-vue.es.js'
</script>
```

## 快速上手

```vue
<template>
  <Wrapper
    ref="wrapper"
    style="width: 500px; height: 500px;"
    v-model="content"
    :options="{ placeholder: '输入正文内容...' }"
  ></Wrapper>
</template>

<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'

const wrapper = ref<typeof Wrapper | undefined>()
const content = ref('<p>hello</p>')
</script>
```

## 核心组件

### Wrapper

编辑器核心包裹器，通过 `v-model` 绑定内容，通过 `options` 传入编辑器配置。提供 `before`、`after`、`default` 三个插槽，分别用于放置菜单栏、底部工具栏和气泡栏。

```vue
<template>
  <Wrapper v-model="content" :options="{ placeholder: '输入内容...', dark: true }">
    <template #before="{ state }"><!-- 菜单栏 --></template>
    <template #default="{ state }"><!-- 气泡栏 --></template>
  </Wrapper>
</template>
```

主要 Props：`modelValue`、`locale`、`appendBeforeTo`、`appendAfterTo`、`options`

### Menu

菜单按钮组件，支持普通按钮和带浮层（下拉列表）两种模式，必须放置在 `Wrapper` 的插槽中使用。

```vue
<template>
  <Wrapper v-model="content">
    <template #before>
      <!-- 普通按钮 -->
      <Menu @operate="onBold">加粗</Menu>
      <!-- 带浮层的下拉菜单 -->
      <Menu popover :data="[{ label: '标题1', value: 'h1' }, { label: '标题2', value: 'h2' }]" @select="onSelect">
        标题
      </Menu>
    </template>
  </Wrapper>
</template>
```

主要 Props：`disabled`、`active`、`popover`、`popoverProps`、`data`、`itemDisabled`、`itemActive`、`shortcut`

### Bubble

气泡栏组件，跟随光标浮动显示，必须放置在 `Wrapper` 的 `default` 插槽中。

```vue
<template>
  <Wrapper v-model="content">
    <template #default="{ state }">
      <Bubble :visible="!!state.selection?.hasRange">
        <Menu @operate="onBold">加粗</Menu>
      </Bubble>
    </template>
  </Wrapper>
</template>
```

主要 Props：`visible`、`match`、`hideOnMousedown`

### Divider

菜单分隔线组件，放置在 `Menu` 组件之间用于分组。

```vue
<Menu>菜单1</Menu>
<Divider />
<Menu>菜单2</Menu>
```

### Checkbox

复选框组件，一般用于带浮层的菜单中，支持 `v-model` 绑定。

```vue
<Checkbox v-model="checked" label="勾选项" />
```

### Tabs

选项卡组件，一般用于带浮层的菜单中，通过默认插槽的 `current` 参数动态渲染内容。

```vue
<Tabs default-value="A" :data="[{ label: '选项A', value: 'A' }, { label: '选项B', value: 'B' }]">
  <template #default="{ current }">{{ current }}</template>
</Tabs>
```

### Icon

图标组件，支持 `kaitify` 内置图标和 [Iconify](https://icon-sets.iconify.design/) 图标库。

```vue
<Icon name="solar:home-bold-duotone" :size="20" />
```

## 内置菜单

内置菜单已封装好操作逻辑和激活/禁用状态，可直接在 `Wrapper` 插槽中使用：

| 菜单组件 | 功能 |
| --- | --- |
| `UndoMenu` / `RedoMenu` | 撤销 / 重做 |
| `BoldMenu` | 加粗 |
| `ItalicMenu` | 斜体 |
| `UnderlineMenu` | 下划线 |
| `StrikethroughMenu` | 删除线 |
| `SubscriptMenu` / `SuperscriptMenu` | 下标 / 上标 |
| `CodeMenu` | 行内代码 |
| `CodeBlockMenu` | 代码块 |
| `HeadingMenu` | 标题（H1~H6） |
| `AlignLeftMenu` / `AlignCenterMenu` / `AlignRightMenu` / `AlignJustifyMenu` | 对齐方式 |
| `OrderedListMenu` / `UnorderedListMenu` / `TaskMenu` | 列表 / 任务列表 |
| `BlockquoteMenu` | 引用块 |
| `ColorMenu` / `BackColorMenu` | 字体颜色 / 背景颜色 |
| `FontSizeMenu` / `FontFamilyMenu` / `LineHeightMenu` | 字号 / 字体 / 行高 |
| `IncreaseIndentMenu` / `DecreaseIndentMenu` | 增加 / 减少缩进 |
| `LinkMenu` | 链接 |
| `ImageMenu` | 图片（支持本地上传和远程链接） |
| `VideoMenu` | 视频 |
| `AttachmentMenu` | 附件 |
| `TableMenu` | 表格 |
| `MathMenu` | 数学公式 |
| `EmojiMenu` | 表情 |
| `HorizontalMenu` | 分隔线 |
| `WrapUpMenu` / `WrapDownMenu` | 向上 / 向下换行 |
| `ClearFormatMenu` | 清除格式 |
| `FullScreenMenu` | 全屏 |

```vue
<template>
  <Wrapper v-model="content">
    <template #before>
      <UndoMenu />
      <RedoMenu />
      <Divider />
      <BoldMenu />
      <ItalicMenu />
      <UnderlineMenu />
    </template>
  </Wrapper>
</template>

<script setup lang="ts">
import { Wrapper, Divider, UndoMenu, RedoMenu, BoldMenu, ItalicMenu, UnderlineMenu } from '@kaitify/vue'
import { ref } from 'vue'

const content = ref('<p>hello</p>')
</script>
```

## 国际化

通过 `Wrapper` 组件的 `locale` 属性设置语言环境，支持以下语言：

| 值 | 语言 |
| --- | --- |
| `zh-CN`（默认） | 中文简体 |
| `en-US` | 英文 |
| `ko-KR` | 韩语 |
| `ja-JP` | 日语 |

```vue
<Wrapper v-model="content" locale="en-US"></Wrapper>
```

## License

[MIT](./LICENSE)
