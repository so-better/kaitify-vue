---
title: Wrapper 包裹器
---

# Wrapper 包裹器

`Wrapper` 组件是 `kaitify-vue` 的核心组件，顾名思义，它作为一个包裹器，在组件加载时，自动帮助我们创建一个编辑器实例，无需我们手动调用底层的方法去构建编辑器

## 基本使用

使用 `v-model` 进行双向绑定，通过 `placeholder` 属性设置占位符内容

```vue
<template>
  <Wrapper ref="wrapper" v-model="content" placeholder="输入正文内容..."></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const wrapper = ref<typeof Wrapper | undefined>()
const content = ref('<p>hello</p>')
</script>
```

使用 `disabled` 来禁用编辑器，此时编辑器不可编辑

```vue
<template>
  <Wrapper ref="wrapper" disabled v-model="content" placeholder="输入正文内容..."></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const wrapper = ref<typeof Wrapper | undefined>()
const content = ref('<p>hello</p>')
</script>
```

使用 `autofocus` 来设置编辑器在初始化后自动聚焦

```vue
<template>
  <Wrapper ref="wrapper" autofocus v-model="content" placeholder="输入正文内容..."></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const wrapper = ref<typeof Wrapper | undefined>()
const content = ref('<p>hello</p>')
</script>
```

使用 `dark` 来设置编辑器为深色风格

```vue
<template>
  <Wrapper ref="wrapper" dark v-model="content" placeholder="输入正文内容..."></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const wrapper = ref<typeof Wrapper | undefined>()
const content = ref('<p>hello</p>')
</script>
```

编辑器的宽度和高度可以直接通过 `css` 样式来设置

```vue
<template>
  <Wrapper ref="wrapper" style="width:500px;height:300px;" v-model="content" placeholder="输入正文内容..."></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const wrapper = ref<typeof Wrapper | undefined>()
const content = ref('<p>hello</p>')
</script>
```

## Props

`Wrapper` 包裹器提供如下的属性来设置编辑器：

##### v-model <Badge type="danger" text="string" />

编辑器的字符串内容

##### disabled <Badge type="danger" text="boolean" />

是否禁用编辑器，禁用后编辑器不可编辑，默认为 `false`
