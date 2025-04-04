---
title: Icon 图标
---

# Icon 图标

`Icon` 组件是 `kaitify-vue` 的一个 `UI` 组件，该组件与编辑器具体的功能无关

## 基本使用

```vue
<template>
	<Icon name="solar:home-bold-duotone" />
</template>
<script setup lang="ts">
import { Icon } from '@kaitify/vue'
</script>
```

示例：

<Icon name="solar:home-bold-duotone" />

<script lang="ts" setup>
import { Icon } from '../../lib/kaitify-vue.es.js'
</script>

## Props 参数

##### name <Badge type="danger" text="string" />

图标的值，目前仅支持 `kaitify` 内置图标和 `@iconify/vue` 图标，可在[https://icon-sets.iconify.design/](https://icon-sets.iconify.design/)上查找你想用的图标并复制其 `name` 使用

##### size <Badge type="danger" text="string | number" />

图标的大小，如果是数字默认单位为 `px`，默认图标大小为父元素的字体大小
