---
title: font-family 字体
---

# font-family 字体

设置/取消文本的字体

## 使用方法

- 引入组件

```ts
import { FontFamilyMenu } from '@kaitify/vue'
```

- 在 `Wrapper` 包裹器插槽中使用

```html
<Wrapper v-model="content">
  <template #before>
    <FontFamilyMenu />
  </template>
</Wrapper>
```

## Props 参数

##### disabled <Badge type="danger" text="boolean" />

是否禁用该菜单，默认为 `false`

##### data <Badge type="danger" text="MenuDataType[]" />

自定义可选择的字体列表，同 `Menu` 组件的 `data` 参数类型，如：

```json
[
  { "label": "楷体", "value": "楷体,楷体-简" },
  { "label": "宋体", "value": "宋体,宋体-简" }
]
```

##### popoverProps <Badge type="danger" text="MenuPropsType['popoverProps']" />

浮层属性配置，同 `Menu` 的 `popoverProps` 属性

##### shortcut <Badge type="danger" text="{ [key: MenuDataType['value']]: (e: KeyboardEvent) => boolean }" />

菜单快捷键实现，继承自 `Menu` 组件的同名属性，具体使用可参考 [Menu 组件的 shortcut](/guide/menu#shortcut)

## 代码示例

<Wrapper :dark="isDark" v-model="content" placeholder="输入内容..." style="width:100%;height:200px;">
  <template #before>
    <div style="margin-bottom:10px;">
      <FontFamilyMenu />
    </div>
  </template>
</Wrapper>

<script lang="ts" setup>
import { useData } from 'vitepress'
import { Wrapper,FontFamilyMenu } from '../../../lib/kaitify-vue.es.js'
import { ref, computed } from 'vue'
const { isDark } = useData()
const content = ref('<p>hello</p>')
</script>
