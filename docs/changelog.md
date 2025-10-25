---
lastUpdated: false
title: 更新日志
---

# 更新日志

## v0.0.4-beta.4 <Badge type="tip" text='2025.10.25' />

- `LineHeightMenu` 行高菜单优化，默认行高设置为空字符串
- 更新 `@kaitify/core` 的依赖版本

## v0.0.4-beta.2 <Badge type="tip" text='2025.10.24' />

- `Bubble` 和 `Popover` 组件的封装优化
- `icon` 组件 `size` 修复默认图标大小不支持数字的问题
- `Wrapper` 组件的 `created` 事件回调参数改为 `Editor` 类型
- `Bubble` 和 `Menu` 组件的钩子函数回调参数类型由 `Element` 改成 `HTMLDivElement`
- 其他代码优化
- 更新 `@kaitify/core` 的依赖版本

## v0.0.4-beta.1 <Badge type="tip" text='2025.10.21' />

- `state` 移除其他多余属性，只保留 `editor` 和 `selection`
- `Menu` 以及内置菜单组件优化

## v0.0.3 <Badge type="tip" text='2025.10.21' />

- 移除 `Wrapper` 的 `hideBubbleOnMouseDown`，`bubbleProps` 新增 `hideOnMouseDown` 属性
- `state` 响应式状态数据新增 `disabled`、`isMouseDown`、`el` 三个属性
- `bubble` 气泡栏组件代码优化

## v0.0.1 <Badge type="tip" text='2025.09.27' />

- 更新 `@kaitify/core` 的依赖版本
- 部分属性名称重新定义

## v0.0.1-beta.36 <Badge type="tip" text='2025.09.03' />

- 更新 `@kaitify/core` 的依赖版本，修复了部分 bug

## v0.0.1-beta.35 <Badge type="tip" text='2025.09.03' />

- 更新 `@kaitify/core` 的依赖版本，优化了许多扩展的样式

## v0.0.1-beta.34 <Badge type="tip" text='2025.08.27' />

- 更新`@kaitify/core` 依赖版本，对 `Attachment` `Math` 和 `Horizontal` 扩展进行了优化

## v0.0.1-beta.33 <Badge type="tip" text='2025.08.27' />

- 更新`@kaitify/core` 依赖版本
- 新增 `Emoji` 菜单，方便在编辑器中插入表情

## v0.0.1-beta.32 <Badge type="tip" text='2025.08.22' />

- 国际化多语言新增日语和韩语支持，并且针对原先没有翻译的部分文案进行了翻译

## v0.0.1-beta.31 <Badge type="tip" text='2025.05.23' />

- 更新 `@kaitify/core`，进行了优化和 bug 修复

## v0.0.1-beta.30 <Badge type="tip" text='2025.04.12' />

- 更新 `@kaitify/core`，进行了优化和 bug 修复

## v0.0.1-beta.28 <Badge type="tip" text='2025.04.07' />

- 更新`@kaitify/core` 依赖版本

## v0.0.1-beta.26 <Badge type="tip" text='2025.04.04' />

- 新增 `Icon` 组件，支持 `@iconify/vue`
- `Tabs` 组件优化
- `Checkbox` 组件优化

## v0.0.1-beta.25 <Badge type="tip" text='2025.04.03' />

- 更新`@kaitify/core` 依赖版本，修复了 `Image` 和 `Video` 拓展的拖拽问题，同时新增 `setDomObserve` 和 `removeDomObserve` 函数

## v0.0.1-beta.24 <Badge type="tip" text='2025.04.02' />

- 更新`@kaitify/core` 依赖版本，优化对非法 `dom` 插入、移除、修改的处理逻辑

## v0.0.1-beta.23 <Badge type="tip" text='2025.03.29' />

- 优化组件事件类型的 `TS` 定义

## v0.0.1-beta.21 <Badge type="tip" text='2025.03.24' />

- 更新`@kaitify/core` 依赖版本，新增 `isSelectionInView` 函数，同时对 `unicode` 字符删除逻辑进行了优化，
- Wrapper 组件新增 `appendBeforeTo` 和 `appendAfterTo` 属性，用以设置 `before` 插槽和 `after` 插槽的位置
- 代码细节优化

## v0.0.1-beta.17 <Badge type="tip" text='2025.03.22' />

- 内置菜单 `ImageMenu` `VideoMenu` `AttachmentMenu` 新增 `tabs` 参数配置，支持对浮层内的选项卡进行设置
- 新提供了原本内部使用的 `Tabs` `Checkbox` 组件，方便开发自定义的 `Menu`

## v0.0.1-beta.15 <Badge type="tip" text='2025.03.15' />

- 更新`@kaitify/core` 依赖版本，部分拓展进行了优化，同时针对不可编辑节点的相关逻辑进行了优化

## v0.0.1-beta.13 <Badge type="tip" text='2025.03.11' />

- 更新`@kaitify/core` 依赖版本，解决了中文输入的一个 bug，并且新增了 `isEmpty` 方法
- 新增 `FullScreenMenu` 菜单，用以设置编辑器全屏功能

## v0.0.1-beta.12 <Badge type="tip" text='2025.03.10' />

- 更新`@kaitify/core` 依赖版本，解决了部分问题并对拓展进行了优化和新增了语法

## v0.0.1-beta.11 <Badge type="tip" text='2025.03.08' />

- 更新`@kaitify/core` 依赖版本，解决了部分问题并进行了性能优化

## v0.0.1-beta.10 <Badge type="tip" text='2025.03.04' />

- 更新`@kaitify/core` 依赖版本，新增 `getHTML` 函数

## v0.0.1-beta.9 <Badge type="tip" text='2025.01.26' />

- Wrapper 组件的 `created` 事件增加回调参数 `editor`

## v0.0.1-beta.8 <Badge type="tip" text='2025.01.24' />

- 当光标在代码块内时，禁用增加缩进和减少缩进的菜单
- 标题菜单的选项激活时点击可以取消标题设置
- 代码优化
- 更新 `@kaiftiy/core` 依赖版本

## v0.0.1-beta.7 <Badge type="tip" text='2025.01.23' />

- 修复编辑器在 `form` 标签下点击菜单按钮导致页面刷新的问题
- 更新 `@kaiftiy/core` 依赖版本，优化和修复了列表相关问题

## v0.0.1-beta.6 <Badge type="tip" text='2025.01.06' />

- 优化菜单悬浮层样式效果
- 更新 `@kaitify/core` 依赖版本

## v0.0.1-beta.5 <Badge type="tip" text='2024.12.16' />

- kaitify-vue 的第一个发布版本
