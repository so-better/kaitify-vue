---
title: Tabs 选项卡
---

# Tabs 选项卡

`Tabs` 组件是 `kaitify-vue` 的一个 `UI` 组件，该组件与编辑器具体的功能无关，它一般用于带浮层的菜单中，用来分区域展示不同的内容

## 基本使用

```vue
<template>
  <Tabs
    default-value="A"
    :data="[
      { label: '我是A', value: 'A' },
      { label: '我是B', value: 'B' }
    ]"
  >
    <template #default="{ current }">{{ current }}</template>
  </Tabs>
</template>
<script setup lang="ts">
import { Tabs } from '@kaitify/vue'
import { ref } from 'vue'
</script>
```

示例：

<Tabs default-value="A" :data="data">
  <template #default="{ current }">{{ current }}</template>
</Tabs>

<script lang="ts" setup>
import { Tabs } from '../../lib/kaitify-vue.es.js'
import { ref } from 'vue'
const data = ref([
  { label: '我是A', value: 'A' },
  { label: '我是B', value: 'B' }
])
</script>

## Props 参数

##### data <Badge type="danger" text="{ label: string; value: string | number }[]" />

选项卡数据配置，是一个数组，数组项的 `label` 表示选项卡显示的名称，`value` 表示选项卡对应的值

##### defaultValue <Badge type="danger" text="string | number" />

默认展示的选项卡，这里只需要设置其 `value` 对应的值即可

## Slots 插槽

##### default

默认插槽，提供一个参数 `current`，表示当前选项卡的值，需要根据 `current` 的值来动态显示不同的内容
