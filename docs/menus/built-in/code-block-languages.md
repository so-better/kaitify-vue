---
title: code-block-languages 代码块语言选择
---

# code-block-languages 代码块语言选择

选择语言来设置代码块的高亮

## 使用方法

- 引入组件

```ts
import { CodeBlockLanguagesMenu } from '@kaitify/vue'
```

- 在 `Wrapper` 包裹器插槽中使用

```html
<Wrapper v-model="content">
  <template #before>
    <CodeBlockLanguagesMenu />
  </template>
</Wrapper>
```

## Props 参数

##### disabled <Badge type="danger" text="boolean" />

是否禁用该菜单，默认为 `false`

##### languages <Badge type="danger" text="HljsLanguageType[]" />

自定义可选择的语言列表，默认是全量的值，全量值请参考 `HljsLanguages` 的值

##### popoverProps <Badge type="danger" text="MenuPropsType['popoverProps']" />

浮层属性配置，同 `Menu` 的 `popoverProps` 属性

##### shortcut <Badge type="danger" text="{ [key: MenuDataType['value']]: (e: KeyboardEvent) => boolean }" />

菜单快捷键实现，继承自 `Menu` 组件的同名属性，具体使用可参考 [Menu 组件的 shortcut](/guide/menu#shortcut)

## 代码示例

<Wrapper ref="wrapper" :dark="isDark" v-model="content" placeholder="输入内容..." style="width:100%;height:200px;" :bubble-props="{ match: { tag: 'pre' }, visible: shouldVisible }">
  <template #before>
    <div style="margin-bottom:10px;">
      <CodeBlockMenu />
    </div>
  </template>
  <template #bubble>
    <WrapUpMenu :match="{ tag: 'pre' }"/>
    <CodeBlockLanguagesMenu />
    <WrapDownMenu :match="{ tag: 'pre' }"/>
  </template>
</Wrapper>

<script lang="ts" setup>
import { useData } from 'vitepress'
import { Wrapper,CodeBlockMenu, CodeBlockLanguagesMenu, WrapUpMenu, WrapDownMenu } from '../../../lib/kaitify-vue.es.js'
import { ref, computed } from 'vue'
const { isDark } = useData()
const wrapper = ref<(typeof Wrapper) | undefined>()
const content = ref('<p>hello</p>')

const shouldVisible = computed<boolean>(() => {
  if (!wrapper.value) {
    return false
  }
  if (!!wrapper.value.state.editor?.commands.getCodeBlock()) {
    return true
  }
  return false
})
</script>
