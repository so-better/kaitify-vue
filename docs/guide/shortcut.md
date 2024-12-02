---
title: 菜单快捷键
---

# 菜单快捷键

`shortcut` 是 `Menu` 组件的一个参数，这里我们单独讲一下如何设置菜单的快捷键

## 普通菜单的快捷键绑定

普通菜单的 `shortcut` 属性是一个函数，返回 `boolean` 值，当返回 `true` 时会触发 `operate` 事件

```vue
<template>
  <Wrapper v-model="content">
    <template #before>
      <Menu @operate="onOperate" :shortcut="shortcut">菜单</Menu>
    </template>
  </Wrapper>
</template>
<script setup lang="ts">
import { Wrapper, Menu } from '@kaitify/vue'
import { ref } from 'vue'
const content = ref('<p>hello</p>')

const shortcut = (e: KeyboardEvent) => {
  //按下ctrl + b 触发
  return e => e.key == 'b' && e.ctrlKey
}

//除了点击触发此事件外，当你按下 ctrl + b 也会触发此事件
const onOperate = () => {
  console.log('菜单点击')
}
</script>
```

## 有浮层的菜单的快捷键绑定

浮层菜单的 `shortcut` 属性是一个对象，对象的 `key` 是 `data` 的 `value` 值，对象的值是一个函数，返回 `boolean` 值，当返回 `true` 时会触发 `operate` 事件

如果是自定义浮层内容的菜单，即没有配置 `data` 属性，通过 `popover` 插槽设置内容，此时无法通过 `shortcut` 绑定快捷键

```vue
<template>
  <Wrapper v-model="content">
    <template #before>
      <Menu
        @operate="onOperate"
        :shortcut="shortcut"
        popover
        :data="[
          { label: '选项1', value: 0 },
          { label: '选项2', value: 1 },
          { label: '选项3', value: 2 }
        ]"
        >菜单</Menu
      >
    </template>
  </Wrapper>
</template>
<script setup lang="ts">
import { Wrapper, Menu } from '@kaitify/vue'
import { ref } from 'vue'
const content = ref('<p>hello</p>')

const shortcut = (e: KeyboardEvent) => {
  return {
    //按下 ctrl + b 选择第一项，触发select事件
    0: e => e.key == 'b' && e.ctrlKey
    //按下 ctrl + w 选择第二项，触发select事件
    1: e => e.key == 'w' && e.ctrlKey
    //按下 ctrl + e 选择第三项，触发select事件
    2: e => e.key == 'e' && e.ctrlKey
  }
}

const onSelect = (item) => {
  console.log('选项选择',item)
}
</script>
```
