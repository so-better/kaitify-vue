---
title: Wrapper 包裹器
---

# Wrapper 包裹器

`Wrapper` 组件是 `kaitify-vue` 的核心组件，顾名思义，它作为一个包裹器，在组件加载时，自动帮助我们创建一个编辑器实例，无需我们手动调用底层的方法去构建编辑器

## 基本使用

使用 `v-model` 进行双向绑定，通过 `options` 属性传入编辑器配置，例如通过 `options.placeholder` 设置占位符内容

```vue
<template>
  <Wrapper ref="wrapper" v-model="content" :options="{ placeholder: '输入正文内容...' }"></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const wrapper = ref<typeof Wrapper | undefined>()
const content = ref('<p>hello</p>')
</script>
```

通过 `options.editable` 来禁用编辑器，设置为 `false` 时编辑器不可编辑

```vue
<template>
  <Wrapper ref="wrapper" v-model="content" :options="{ editable: false }"></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const wrapper = ref<typeof Wrapper | undefined>()
const content = ref('<p>hello</p>')
</script>
```

使用 `options.autofocus` 来设置编辑器在初始化后自动聚焦

```vue
<template>
  <Wrapper ref="wrapper" v-model="content" :options="{ autofocus: true }"></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const wrapper = ref<typeof Wrapper | undefined>()
const content = ref('<p>hello</p>')
</script>
```

使用 `options.dark` 来设置编辑器为深色风格

```vue
<template>
  <Wrapper ref="wrapper" v-model="content" :options="{ dark: true }"></Wrapper>
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
  <Wrapper ref="wrapper" style="width:500px;height:300px;" v-model="content" :options="{ placeholder: '输入正文内容...' }"></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const wrapper = ref<typeof Wrapper | undefined>()
const content = ref('<p>hello</p>')
</script>
```

## Props 参数

`Wrapper` 包裹器提供除了以上提到的属性以外， 具体完整的属性如下：

##### v-model <Badge type="danger" text="string" />

编辑器的字符串内容

##### locale <Badge type="danger" text="LocaleType" />

编辑器语言环境，取值范围是 `zh-CN` `en-US` `ko-KR` `ja-JP`，分别表示中文简体和英文语言、韩语、日语环境，默认为 `zh-CN`

##### appendBeforeTo <Badge type="danger" text="string | HTMLElement" />

`before` 插槽挂载的元素，如果不设置，则就放置在编辑器前面

##### appendAfterTo <Badge type="danger" text="string | HTMLElement" />

`after` 插槽挂载的元素，如果不设置，则就放置在编辑器后面

##### options <Badge type="danger" text="EditorConfigureOptionType" />

编辑器配置参数，类型为 `Omit<EditorConfigureOptionType, 'el' | 'value' | 'onChange' | 'onUpdateView'>`，涵盖编辑器的所有配置选项及事件回调，如 `placeholder`、`dark`、`editable`、`autofocus`、`allowCopy`、`extensions` 等，具体可参考 [kaitify 的 Editor 构建属性](https://www.so-better.cn/docs/kaitify-core/apis/editor-configure)

## Events 事件

`Wrapper` 组件只保留了 `update:modelValue` 一个 Vue 组件事件，其余编辑器事件均通过 `options` 属性中的回调函数来设置

##### update:modelValue

编辑器内容改变时触发，即 `v-model` 的更新事件

---

以下事件回调均通过 `options` 属性传入：

```vue
<template>
  <Wrapper v-model="content" :options="options"></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const content = ref('<p>hello</p>')

const options = {
  // 编辑器创建完成后触发，回调参数为编辑器实例
  onCreated(editor) {
    console.log('编辑器创建完成', editor)
  },
  // 光标发生变化时触发，回调参数为 Selection 实例
  onSelectionUpdate(selection) {
    console.log('光标发生变化', selection)
  },
  // 换行时触发，回调参数为换行后光标所在的块节点
  onInsertParagraph(node) {
    console.log('换行', node)
  },
  // 删除操作完成时触发
  onDeleteComplete() {
    console.log('删除完成')
  },
  // 键盘按下时触发
  onKeydown(event) {
    console.log('键盘按下', event)
  },
  // 键盘松开时触发
  onKeyup(event) {
    console.log('键盘松开', event)
  },
  // 编辑器获取焦点时触发
  onFocus(event) {
    console.log('编辑器获取焦点', event)
  },
  // 编辑器失去焦点时触发
  onBlur(event) {
    console.log('编辑器失去焦点', event)
  },
  // 视图更新前触发
  onBeforeUpdateView() {
    console.log('视图更新前')
  },
  // 视图更新后触发
  onAfterUpdateView() {
    console.log('视图更新后')
  }
}
</script>
```

## API 组件属性/方法

`Wrapper` 提供了部分属性/方法可以通过组件实例来调用

##### wrapperRef <Badge type="danger" text="HTMLElement" />

获取组件实例即编辑器的 `dom` 元素

```vue
<template>
  <Wrapper ref="wrapper" v-model="content" :options="{ onCreated }"></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const wrapper = ref<typeof Wrapper | undefined>()
const content = ref('<p>hello</p>')

const onCreated = () => {
  console.log('组件实例dom', wrapper.value.wrapperRef)
}
</script>
```

##### state <Badge type="danger" text="StateType" />

`Wrapper` 组件内部返回的关于编辑器状态的相关数据，包含 `editor` `selection` 两个属性，分别表示当前编辑器的 `Editor` 实例，当前编辑器的 `Selection` 实例

该数据是响应式的数据，所以我们每次通过该数据的 `editor` 属性调用 `kaitify` 编辑器的方法都是响应式的效果

```vue
<template>
  <Wrapper ref="wrapper" v-model="content" :options="{ onCreated }"></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const wrapper = ref<typeof Wrapper>()
const content = ref('<p>hello</p>')

const onCreated = () => {
  const state = wrapper.value.state
  console.log(state.editor)
}
</script>
```

`Wrapper` 组件的所有子孙组件，还可以通过 `inject` 语法来获取 `state`

::: code-group

```vue [SubComponent.vue]
<template>
  <div>I'm SubComponent</div>
</template>
<script setup lang="ts">
import { ComputedRef, Ref } from 'vue'
import { StateType } from '@kaitify/vue'
const state = inject<Ref<StateType>>('state')
</script>
```

```vue [Index.vue]
<template>
  <Wrapper v-model="content">
    <template #before>
      <SubComponent />
    </template>
  </Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import SubComponent from './SubComponent.vue'
const content = ref('<p>hello</p>')
</script>
```

:::

## Slots 插槽

##### before

该插槽的内容会在编辑器前面显示，通常可以作为菜单栏的位置，该插槽提供一个默认参数 `state`，包含 `editor` `selection` 两个属性，分别表示当前编辑器的 `Editor` 实例，当前编辑器的 `Selection` 实例

##### after

该插槽的内容会在编辑器后面显示，该插槽提供一个默认参数 `state`，包含 `editor` `selection` 两个属性，分别表示当前编辑器的 `Editor` 实例，当前编辑器的 `Selection` 实例

##### default

默认插槽，一般用于放置 `Bubble` 组件，该插槽提供一个默认参数 `state`，包含 `editor` `selection` 两个属性，分别表示当前编辑器的 `Editor` 实例，当前编辑器的 `Selection` 实例

```vue
<template>
  <Wrapper v-model="content">
    <template #before="{ state }">before</template>
    <template #afer="{ state }">after</template>
    <template #="{ state }">
      <Bubble />
    </template>
  </Wrapper>
</template>
<script setup lang="ts">
import { Wrapper, Bubble } from '@kaitify/vue'
import { ref } from 'vue'
const wrapper = ref<typeof Wrapper | undefined>()
const content = ref('<p>hello</p>')
</script>
```
