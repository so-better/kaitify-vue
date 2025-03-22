---
title: Checkbox 复选框
---

# Checkbox 复选框

`Checkbox` 组件是 `kaitify-vue` 的一个 `UI` 组件，该组件与编辑器具体的功能无关，它一般用于带浮层的菜单中，用来进行勾选

## 基本使用

```vue
<template>
  <Checkbox label="我是复选框" v-model="checked" />
</template>
<script setup lang="ts">
import { Checkbox } from '@kaitify/vue'
import { ref } from 'vue'
const checked = ref(false)
</script>
```

示例：

<div style="display:flex;align-items:center;height:40px;padding:0 10px;">
  <Checkbox label="我是复选框" v-model="checked" />
  <Checkbox style="margin-left:10px;" label="我是复选框" v-model="checked" disabled />
</div>

<script lang="ts" setup>
import { Checkbox } from '../../lib/kaitify-vue.es.js'
import { ref } from 'vue'
const checked = ref(false)
</script>

## Props 参数

##### v-model <Badge type="danger" text="boolean" />

复选框的值

##### disabled <Badge type="danger" text="boolean" />

复选框是否禁用

##### label <Badge type="danger" text="string" />

复选框右侧显示的文字内容
