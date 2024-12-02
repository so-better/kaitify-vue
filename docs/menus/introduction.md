---
title: 简介
---

# 简介

## 基本介绍

内置菜单是 `kaitify-vue` 内部使用 `Menu` 组件封装的一系列具有实际操作功能的菜单组件，每一个内置菜单的操作都是已经实现完成的了

内置菜单已经定义好了菜单各种情况下的状态，无需我们去关心什么时候该禁用、什么时候该激活，你可以直接拿来使用

除此之外，这些菜单也会提供一些参数让你可以进行灵活配置

## 使用示例

以加粗菜单为例：

```vue
<template>
  <Wrapper v-model="content">
    <template #before>
      <BoldMenu />
    </template>
  </Wrapper>
</template>
<script setup lang="ts">
import { Wrapper, BoldMenu } from '@kaitify/vue'
import { ref } from 'vue'
const content = ref('<p>hello</p>')
</script>
```

示例：

<Wrapper :dark="isDark" v-model="content" placeholder="输入内容..." style="width:100%;height:200px;">
  <template #before>
    <div style="margin-bottom:10px;">
      <BoldMenu />
    </div>
  </template>
</Wrapper>

<script lang="ts" setup>
import { useData } from 'vitepress'
import { Wrapper, BoldMenu } from '../../lib/kaitify-vue.es.js'
import { ref } from 'vue'
const { isDark } = useData()
const content = ref('<p>hello</p>')
</script>
