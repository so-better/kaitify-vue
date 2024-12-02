---
title: clear-format 清除格式
---

# clear-format 清除格式

清除文本的所有样式和标记

## 使用方法

- 引入组件

```ts
import { ClearFormatMenu } from '@kaitify/vue'
```

- 在 `Wrapper` 包裹器插槽中使用

```html
<Wrapper v-model="content">
  <template #before>
    <ClearFormatMenu />
  </template>
</Wrapper>
```

## Props 参数

##### disabled <Badge type="danger" text="boolean" />

是否禁用该菜单，默认为 `false`

##### shortcut <Badge type="danger" text="(e: KeyboardEvent) => boolean" />

菜单快捷键实现，继承自 `Menu` 组件的同名属性，具体使用可参考 [Menu 组件的 shortcut](/guide/menu#shortcut)

## 代码示例

<Wrapper :dark="isDark" v-model="content" placeholder="输入内容..." style="width:100%;height:200px;">
  <template #before>
    <div style="margin-bottom:10px;">
      <ClearFormatMenu />
    </div>
  </template>
</Wrapper>

<script lang="ts" setup>
import { useData } from 'vitepress'
import { Wrapper, ClearFormatMenu } from '../../../lib/kaitify-vue.es.js'
import { ref } from 'vue'
const { isDark } = useData()
const content = ref('<p><span style="font-size:20px;color:red;">hello</span></p>')
</script>
