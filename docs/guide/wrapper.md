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

## Props 参数

`Wrapper` 包裹器提供除了以上提到的属性以外， 具体完整的属性如下：

##### v-model <Badge type="danger" text="string" />

编辑器的字符串内容

##### disabled <Badge type="danger" text="boolean" />

是否禁用编辑器，禁用后编辑器不可编辑，默认为 `false`

##### locale <Badge type="danger" text="LocaleType" />

编辑器语言环境，取值范围是 `zh-CN` `en-US` `ko-KR` `ja-JP`，分别表示中文简体和英文语言、韩语、日语环境，默认为 `zh-CN`

##### bubbleProps <Badge type="danger" text="BubblePropsType" />

编辑器气泡栏相关属性配置，具体可以查看 [Bubble 组件的文档](/guide/bubble)

##### appendBeforeTo <Badge type="danger" text="string | HTMLElement" />

`before` 插槽挂载的元素，如果不设置，则就放置在编辑器前面

##### appendAfterTo <Badge type="danger" text="string | HTMLElement" />

`after` 插槽挂载的元素，如果不设置，则就放置在编辑器后面

##### autofocus <Badge type="danger" text="boolean" />

编辑器渲染后是否自动聚焦，默认为 `false`

##### placeholder <Badge type="danger" text="string" />

编辑器内容仅有一个默认的段落时，用来占位的内容

##### dark <Badge type="danger" text="boolean" />

编辑器是否呈现深色风格，默认为 `false`，此属性对编辑器相关的所有组件都有影响

##### allowCopy <Badge type="danger" text="boolean" />

是否允许复制操作，默认为 `true`

##### allowPaste <Badge type="danger" text="boolean" />

是否允许粘贴操作，默认为 `true`

##### allowCut <Badge type="danger" text="boolean" />

是否允许剪切操作，默认为 `true`

##### allowPasteHtml <Badge type="danger" text="boolean" />

是否允许粘贴 `html`，即粘贴内容时是否携带样式，默认为 `false`

##### priorityPasteFiles <Badge type="danger" text="boolean" />

剪切板同时存在文件和 `html/text` 时，是否优先粘贴文件，默认为 `false`

##### textRenderTag <Badge type="danger" text="string" />

自定义编辑器内渲染文本节点的真实标签，默认为 `span`

##### blockRenderTag <Badge type="danger" text="string" />

自定义编辑内渲染默认块级节点的真实标签，即段落标签，默认为 `p`

##### emptyRenderTags <Badge type="danger" text="string[]" />

自定义编辑器内定义需要置空的标签

##### extraKeepTags <Badge type="danger" text="string[]" />

自定义编辑器内额外保留的标签

##### extensions <Badge type="danger" text="Extension[]" />

自定义插件数组

##### formatRules <Badge type="danger" text="RuleFunctionType[]" />

自定义节点数组格式化规则

##### onDomParseNode <Badge type="danger" text="(this: Editor, node: KNode) => KNode" />

自定义 `dom` 转为非文本节点的后续处理

##### onPasteKeepMarks <Badge type="danger" text="(this: Editor, node: KNode) => KNodeMarksType" />

节点粘贴保留标记的自定义方法

##### onPasteKeepStyles <Badge type="danger" text="(this: Editor, node: KNode) => KNodeStylesType" />

节点粘贴保留样式的自定义方法

##### onPasteText <Badge type="danger" text="(this: Editor, text: string) => boolean | Promise<boolean>" />

编辑器粘贴纯文本时触发，如果返回 `true` 则表示继续使用默认逻辑，返回 `false` 则不走默认逻辑，需要进行自定义处理

##### onPasteHtml <Badge type="danger" text="(this: Editor, nodes: KNode[], html: string) => boolean | Promise<boolean>" />

编辑器粘贴 `html` 内容时触发，如果返回 `true` 则表示继续使用默认逻辑，返回 `false` 则不走默认逻辑，需要进行自定义处理

##### onPasteImage <Badge type="danger" text="(this: Editor, file: File) => boolean | Promise<boolean>" />

编辑器粘贴图片时触发，如果返回 `true` 则表示继续使用默认逻辑，返回 `false` 则不走默认逻辑，需要进行自定义处理

##### onPasteVideo <Badge type="danger" text="(this: Editor, file: File) => boolean | Promise<boolean>" />

编辑器粘贴视频时触发，如果返回 `true` 则表示继续使用默认逻辑，返回 `false` 则不走默认逻辑，需要进行自定义处理

##### onPasteFile <Badge type="danger" text="(this: Editor, file: File) => void | Promise<void>" />

编辑器粘贴除了图片和视频以外的文件时触发，需要自定义处理

##### onDetachMentBlockFromParent <Badge type="danger" text="(this: Editor, node: KNode) => boolean" />

在删除和换行操作中块节点节点从其父节点中抽离出去成为与父节点同级的节点后触发，如果返回 `true` 则表示继续使用默认逻辑，会将该节点转为段落，返回 `false` 则不走默认逻辑，需要自定义处理

##### onBeforePatchNodeToFormat <Badge type="danger" text="(this: Editor, node: KNode) => KNode" />

编辑器 `updateView` 执行时，通过比对新旧节点数组获取需要格式化的节点，在这些节点被格式化前，触发此方法，回调参数即当前需要被格式化的节点，该方法返回一个节点，返回的节点将会被格式化，如果你不需要任何特殊处理，返回入参提供的节点即可

> 上述的属性部分继承于 kaitify 的 Editor 构建属性（同名属性），如果需要深入了解，可以去查看 kaitify 的文档

## Events 事件

部分 `Editor` 实例的函数属性我们通过 `vue` 组件事件的方式来设置，同时 `kaitify-vue` 也提供了一部分的事件

##### selectionUpdate

编辑器光标发生变化触发的事件，回调参数为编辑器的 `Selection` 对象实例

```vue
<template>
  <Wrapper v-model="content" @selectionUpdate="onSelectionUpdate"></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper, Selection } from '@kaitify/vue'
import { ref } from 'vue'
const content = ref('<p>hello</p>')

const onSelectionUpdate = (sel: Selection) => {
  console.log('光标发生变化', sel)
}
</script>
```

##### insertParagraph

编辑器进行换行时触发的事件，回调参数为换行后光标所在的块节点

```vue
<template>
  <Wrapper v-model="content" @insertParagraph="onInsertParagraph"></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper, KNode } from '@kaitify/vue'
import { ref } from 'vue'
const content = ref('<p>hello</p>')

const onInsertParagraph = (node: KNode) => {
  console.log('换行', node)
}
</script>
```

##### deleteComplete

编辑器执行删除操作完成的时候触发的事件

```vue
<template>
  <Wrapper v-model="content" @deleteComplete="onDeleteComplete"></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const content = ref('<p>hello</p>')

const onDeleteComplete = () => {
  console.log('删除完成')
}
</script>
```

##### keydown

编辑器内键盘按下触发的事件，回调参数为 `KeyboardEvent`

```vue
<template>
  <Wrapper v-model="content" @keydown="onKeydown"></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const content = ref('<p>hello</p>')

const onKeydown = (event: KeyboardEvent) => {
  console.log('键盘按下', event)
}
</script>
```

##### keyup

编辑器内键盘松开触发的事件，回调参数为 `KeyboardEvent`

```vue
<template>
  <Wrapper v-model="content" @keyup="onKeyup"></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const content = ref('<p>hello</p>')

const onKeyup = (event: KeyboardEvent) => {
  console.log('键盘松开', event)
}
</script>
```

##### focus

编辑器获取光标触发的事件，回调参数为 `FocusEvent`

```vue
<template>
  <Wrapper v-model="content" @focus="onFocus"></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const content = ref('<p>hello</p>')

const onFocus = (event: FocusEvent) => {
  console.log('编辑器获取光标', event)
}
</script>
```

##### blur

编辑器失去光标触发的事件，回调参数为 `FocusEvent`

```vue
<template>
  <Wrapper v-model="content" @blur="onBlur"></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const content = ref('<p>hello</p>')

const onBlur = (event: FocusEvent) => {
  console.log('编辑器失去光标', event)
}
</script>
```

##### beforeUpdateView

编辑器视图更新前触发的事件

```vue
<template>
  <Wrapper v-model="content" @beforeUpdateView="beforeUpdateView"></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const content = ref('<p>hello</p>')

const beforeUpdateView = () => {
  console.log('编辑器视图更新之前')
}
</script>
```

##### afterUpdateView

编辑器视图更新后触发的事件

```vue
<template>
  <Wrapper v-model="content" @afterUpdateView="afterUpdateView"></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const content = ref('<p>hello</p>')

const afterUpdateView = () => {
  console.log('编辑器视图更新之后')
}
</script>
```

##### created

编辑器创建完成后触发，回调参数为 `kaitify` 的编辑器实例对象

```vue
<template>
  <Wrapper v-model="content" @created="onCreated"></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const content = ref('<p>hello</p>')

const onCreated = editor => {
  console.log('编辑器创建完成后', editor.value) //是响应式对象，需要通过.value来使用
}
</script>
```

##### bubbleShow

气泡栏显示前触发的事件，回调参数为气泡栏的 `dom`

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

##### bubbleShowing

气泡栏显示时触发的事件，回调参数为气泡栏的 `dom`

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

##### bubbleShown

气泡栏显示后触发的事件，回调参数为气泡栏的 `dom`

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

##### bubbleHide

气泡栏隐藏前触发的事件，回调参数为气泡栏的 `dom`

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

##### bubbleHiding

气泡栏隐藏时触发的事件，回调参数为气泡栏的 `dom`

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

##### bubbleHidden

气泡栏隐藏后触发的事件，回调参数为气泡栏的 `dom`

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

## API 组件属性/方法

`Wrapper` 提供了部分属性/方法可以通过组件实例来调用

##### state <Badge type="danger" text="StateType" />

`Wrapper` 组件内部返回的关于编辑器状态的相关数据，主要包含 `editor` `selection` `locale` 三个属性，分别表示当前编辑器的 `Editor` 实例，当前编辑器的 `Selection` 实例，以及当前编辑器的语言环境

该数据是响应式的数据，所以我们每次通过该数据的 `editor` 属性调用 `kaitify` 编辑器的方法都是响应式的效果

```vue
<template>
  <Wrapper ref="wrapper" v-model="content" @created="onCreated"></Wrapper>
</template>
<script setup lang="ts">
import { Wrapper } from '@kaitify/vue'
import { ref } from 'vue'
const wrapper = ref<typeof Wrapper | undefined>()
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
import { ComputedRef } from 'vue'
import { StateType } from '@kaitify/vue'
const state = inject<ComputedRef<StateType>>('state')
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

该插槽的内容会在编辑器前面显示，通常可以作为菜单栏的位置，该插槽提供一个默认参数 `state`，主要包含 `editor` `selection` `locale` 三个属性，分别表示当前编辑器的 `Editor` 实例，当前编辑器的 `Selection` 实例，以及当前编辑器的语言环境

##### after

该插槽的内容会在编辑器后面显示，该插槽提供一个默认参数 `state`，主要包含 `editor` `selection` `locale` 三个属性，分别表示当前编辑器的 `Editor` 实例，当前编辑器的 `Selection` 实例，以及当前编辑器的语言环境

##### bubble

该插槽的内容会在编辑器后面显示，该插槽提供一个默认参数 `state`，主要包含 `editor` `selection` `locale` 三个属性，分别表示当前编辑器的 `Editor` 实例，当前编辑器的 `Selection` 实例，以及当前编辑器的语言环境

```vue
<template>
  <Wrapper v-model="content">
    <template #before="{ state }">before</template>
    <template #afer="{ state }">after</template>
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
