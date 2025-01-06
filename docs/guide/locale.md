---
title: 国际化支持
---

# 国际化支持

`kaitify-vue` 默认为中文环境，即显示的相关文字都是中文

同时支持英文环境，即显示的相关文字都是英文，目前暂不支持除中文和英文以外的第三方语言

## 中文环境

`Wrapper` 组件的 `locale` 属性设置为 `zh-cn` 或者不设置

```vue
<template>
  <Wrapper v-model="content" placeholder="请输入..." locale="zh-cn"></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const content = ref('<p>hello</p>')
</script>
```

## 英文环境

`Wrapper` 组件的 `locale` 属性设置为 `en-us` 或者不设置

```vue
<template>
  <Wrapper v-model="content" placeholder="请输入..." locale="en-us"></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const content = ref('<p>hello</p>')
</script>
```

编辑器自身可能体现不出来中英文环境的差别，`kaitify-vue` 提供了内置的 `Menu`，当设置 `locale` 为 `en-us` 后，这些内置 `Menu` 中的汉字都会转为英文
