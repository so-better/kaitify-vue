---
title: Icon 图标
---

# Icon 图标

`Icon` 组件是 `kaitify-vue` 的一个 `UI` 组件，通过该组件你可以在你想要的地方展示不同的图标

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

<Icon name="solar:home-bold-duotone" :size="14" />
<Icon name="solar:home-bold-duotone" :size="20" style="margin-left:10px;" />
<Icon name="solar:home-bold-duotone" :size="30" style="margin-left:10px;" />

<script lang="ts" setup>
import { Icon } from '../../lib/kaitify-vue.es.js'
</script>

## Props 参数

##### name <Badge type="danger" text="string" />

图标的值，目前仅支持 `kaitify` 内置图标（暂不对外提供具体的使用）和 `@iconify/vue` 图标，可在[https://icon-sets.iconify.design/](https://icon-sets.iconify.design/)上查找你想用的图标并复制其 `name` 使用

##### size <Badge type="danger" text="string | number" />

图标的大小，如果是数字默认单位为 `px`，默认图标大小为父元素的字体大小
