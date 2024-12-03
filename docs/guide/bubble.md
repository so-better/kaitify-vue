---
title: Bubble 气泡栏
---

# Bubble 气泡栏

`Bubble` 组件是 `kaitify-vue` 的内置组件，无需我们显示地引入去使用，可以通过 `Wrapper` 组件的 `bubble` 插槽来使用，另外 `Bubble` 组件的 `Props` 参数可以通过 `Wrapper` 组件的 `bubbleProps` 来配置

## Props 参数

##### visible <Badge type="danger" text="boolean" />

是否显示气泡栏，默认为 `false`

##### z-index <Badge type="danger" text="number" />

气泡栏的 `z-index` 层级，默认为 5

##### match <Badge type="danger" text="KNodeMatchOptionType" />

指定气泡栏出现的位置条件，每次更新气泡位置时会光标是否在符合条件的节点下，如果符合则根据该节点的真实 `dom` 进行定位，否则只根据光标位置进行定位

关于该属性的释义，同 [kaitify 中的 Editor 的 getMatchNodeBySelection 方法中的入参](https://www.so-better.cn/kaitify-core/apis/editor-function#getMatchNodeBySelection)

## Events 事件

##### show

气泡栏显示前触发的事件，回调参数为气泡栏的 `dom`

由于我们无法直接在 `Bubble` 组件上设置事件，因此 `Wrapper` 提供了事件 `bubbleShow`，二者是等效的

```vue
<template>
  <Wrapper v-model="content" @bubbleShow="bubbleShow"></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const content = ref('<p>hello</p>')

const bubbleShow = (el: Element) => {
  console.log('气泡栏显示前触发', el)
}
</script>
```

##### showing

气泡栏显示时触发的事件，回调参数为气泡栏的 `dom`

由于我们无法直接在 `Bubble` 组件上设置事件，因此 `Wrapper` 提供了事件 `bubbleShowing`，二者是等效的

```vue
<template>
  <Wrapper v-model="content" @bubbleShowing="bubbleShowing"></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const content = ref('<p>hello</p>')

const bubbleShowing = (el: Element) => {
  console.log('气泡栏显示时触发', el)
}
</script>
```

##### shown

气泡栏显示后触发的事件，回调参数为气泡栏的 `dom`

由于我们无法直接在 `Bubble` 组件上设置事件，因此 `Wrapper` 提供了事件 `bubbleShown`，二者是等效的

```vue
<template>
  <Wrapper v-model="content" @bubbleShown="bubbleShown"></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const content = ref('<p>hello</p>')

const bubbleShown = (el: Element) => {
  console.log('气泡栏显示后触发', el)
}
</script>
```

##### hide

气泡栏隐藏前触发的事件，回调参数为气泡栏的 `dom`

由于我们无法直接在 `Bubble` 组件上设置事件，因此 `Wrapper` 提供了事件 `bubbleHide`，二者是等效的

```vue
<template>
  <Wrapper v-model="content" @bubbleHide="bubbleHide"></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const content = ref('<p>hello</p>')

const bubbleHide = (el: Element) => {
  console.log('气泡栏隐藏前触发', el)
}
</script>
```

##### hiding

气泡栏隐藏时触发的事件，回调参数为气泡栏的 `dom`

由于我们无法直接在 `Bubble` 组件上设置事件，因此 `Wrapper` 提供了事件 `bubbleHiding`，二者是等效的

```vue
<template>
  <Wrapper v-model="content" @bubbleHiding="bubbleHiding"></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const content = ref('<p>hello</p>')

const bubbleHiding = (el: Element) => {
  console.log('气泡栏隐藏时触发', el)
}
</script>
```

##### hidden

气泡栏隐藏后触发的事件，回调参数为气泡栏的 `dom`

由于我们无法直接在 `Bubble` 组件上设置事件，因此 `Wrapper` 提供了事件 `bubbleHidden`，二者是等效的

```vue
<template>
  <Wrapper v-model="content" @bubbleHidden="bubbleHidden"></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const content = ref('<p>hello</p>')

const bubbleHidden = (el: Element) => {
  console.log('气泡栏隐藏后触发', el)
}
</script>
```

## Slots 插槽

##### default

默认插槽，显示在气泡栏上的内容，一般可以用来放置 `Menu` 组件

由于我们无法直接在 `Bubble` 组件上使用插槽，因此 `Wrapper` 提供了 `bubble` 插槽，可以允许我们在气泡栏中添加内容，并且提供了一个 `state` 参数

```vue
<template>
  <Wrapper v-model="content">
    <template #bubble="{ state }">气泡栏</template>
  </Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const wrapper = ref<typeof Wrapper | undefined>()
const content = ref('<p>hello</p>')
</script>
```
