---
title: Divider 菜单分隔线
---

# Divider 菜单分隔线

`Divider` 组件是 `kaitify-vue` 的一个 `UI` 组件，该组件与编辑器具体的功能无关，它仅仅是为了排列多个 `Menu` 组件时，能够更好的为 `Menu` 组件划区

因此，`Divider` 组件是放置在 `Menu` 组件之间的

## 基本使用

```vue
<template>
  <Wrapper v-model="content">
    <template #before>
      <Menu>菜单1</Menu>
      <Menu>菜单2</Menu>
      <Menu>菜单3</Menu>
      <Divider />
      <Menu>菜单4</Menu>
      <Menu>菜单5</Menu>
      <Menu>菜单6</Menu>
      <Divider />
      <Menu>菜单7</Menu>
      <Menu>菜单8</Menu>
    </template>
  </Wrapper>
</template>
<script setup lang="ts">
import { Wrapper, Menu, Divider } from '@kaitify/vue'
import { ref } from 'vue'
const content = ref('<p>hello</p>')
</script>
```
