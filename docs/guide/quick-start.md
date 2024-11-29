---
title: 快速上手
---

# 快速上手

## 构建一个编辑器

```vue
<template>
  <Wrapper ref="wrapper" style="width:500px;height:500px;" v-model="content" placeholder="输入正文内容..."></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const wrapper = ref<typeof Wrapper | undefined>()
const content = ref('<p>hello</p>')
</script>
```

## 基本组件

我们提供了如下的基本组件，可以很好的帮助我们在 `Vue3` 项目中使用 `kaitify-vue`

##### Wrapper

`Wrapper` 组件是编辑器的核心组件，它直接渲染一个编辑器，是对 `kaitify` 的二次包装，无需我们使用原生 `js` 的方式去构建编辑器

具体的属性配置和使用方法，参考 [Wrapper 组件](/guide/wrapper)

```vue
<template>
  <Wrapper ref="wrapper" v-model="content"></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const wrapper = ref<typeof Wrapper | undefined>()
const content = ref('<p>hello</p>')
</script>
```

##### Bubble

`Bubble` 气泡栏组件是编辑器内置的组件，无需我们在外部使用，它会跟随编辑器光标进行浮动显示，我们可以通过 `Wrapper` 组件的 `bubble` 插槽来使用

具体的属性配置和使用方法，参考 [Bubble 组件](/guide/bubble)

```vue
<template>
  <Wrapper ref="wrapper" v-model="content">
    <template #bubble="{ state }"> 我是气泡栏组件 </template>
  </Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const wrapper = ref<typeof Wrapper | undefined>()
const content = ref('<p>hello</p>')
</script>
```

##### Menu

`Menu` 菜单组件是编辑器内置的组件，它提供了一个基本的菜单按钮的样式，可以节省我们的工作，Menu 组件必须在 `Wrapper` 组件的插槽中使用

具体的属性配置和使用方法，参考 [Menu 组件](/guide/menu)

```vue
<template>
  <Wrapper ref="wrapper" v-model="content">
    <template #before>
      <Menu>菜单按钮</Menu>
    </template>
  </Wrapper>
</template>
<script setup lang="ts">
import { Wrapper, Menu } from '@kaitify/vue'
import { ref } from 'vue'
const wrapper = ref<typeof Wrapper | undefined>()
const content = ref('<p>hello</p>')
</script>
```
