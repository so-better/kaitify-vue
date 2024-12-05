---
title: wrap-up 向上换行
---

# wrap-up 向上换行

在匹配的节点位置向上换行

## 使用方法

- 引入组件

```ts
import { WrapUpMenu } from '@kaitify/vue'
```

- 在 `Wrapper` 包裹器插槽中使用

```html
<Wrapper v-model="content">
  <template #before>
    <WrapUpMenu :match="{tag:'pre'}" />
  </template>
</Wrapper>
```

## Props 参数

##### disabled <Badge type="danger" text="boolean" />

是否禁用该菜单，默认为 `false`

##### match <Badge type="danger" text="KNodeMatchOptionType" />

匹配相关的节点，如果匹配上了，则会在点击菜单时向上换行，关于该属性的释义，同 [kaitify 中的 Editor 的 getMatchNodeBySelection 方法中的入参](https://www.so-better.cn/docs/kaitify-core/apis/editor-function#getmatchnodebyselection)

##### shortcut <Badge type="danger" text="(e: KeyboardEvent) => boolean" />

菜单快捷键实现，继承自 `Menu` 组件的同名属性，具体使用可参考 [Menu 组件的 shortcut](/guide/menu#shortcut)

## 代码示例

<Wrapper :dark="isDark" v-model="content" placeholder="输入内容..." style="width:100%;height:200px;">
  <template #before>
    <div style="margin-bottom:10px;">
      <WrapUpMenu :match="{tag:'h1'}" />
    </div>
  </template>
</Wrapper>

<script lang="ts" setup>
import { useData } from 'vitepress'
import { Wrapper, WrapUpMenu } from '../../../lib/kaitify-vue.es.js'
import { ref } from 'vue'
const { isDark } = useData()
const content = ref('<h1>hello</h1>')
</script>
