---
title: 国际化支持
---

# 国际化支持

`kaitify-vue` 默认为中文环境，即显示的相关文字都是中文

同时支持英文和日语、韩语环境，即显示的相关文字都是英文、日语、韩语

## 中文环境

`Wrapper` 组件的 `locale` 属性设置为 `zh-CN` 或者不设置

```vue
<template>
  <Wrapper v-model="content" placeholder="请输入..." locale="zh-CN"></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const content = ref('<p>hello</p>')
</script>
```

## 英文环境

`Wrapper` 组件的 `locale` 属性设置为 `en-US`

```vue
<template>
  <Wrapper v-model="content" placeholder="请输入..." locale="en-US"></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const content = ref('<p>hello</p>')
</script>
```

## 韩语环境

`Wrapper` 组件的 `locale` 属性设置为 `ko-KR`

```vue
<template>
  <Wrapper v-model="content" placeholder="请输入..." locale="ko-KR"></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const content = ref('<p>hello</p>')
</script>
```

## 日语环境

`Wrapper` 组件的 `locale` 属性设置为 `ja-JP`

```vue
<template>
  <Wrapper v-model="content" placeholder="请输入..." locale="ja-JP"></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const content = ref('<p>hello</p>')
</script>
```

编辑器自身可能体现不出来中英文环境的差别，`kaitify-vue` 提供了内置的 `Menu`，当设置 `locale` 为 `en-US` 后，这些内置 `Menu` 中的汉字都会转为英文，其他语言同理
