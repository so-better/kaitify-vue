---
title: table-merge-cell 表格单元格合并
---

# table-merge-cell 表格单元格合并

删除表格行

## 使用方法

- 引入组件

```ts
import { TableMergeCellMenu } from '@kaitify/vue'
```

- 在 `Wrapper` 包裹器插槽中使用

```html
<Wrapper v-model="content">
  <template #before>
    <TableMergeCellMenu />
  </template>
</Wrapper>
```

## Props 参数

##### disabled <Badge type="danger" text="boolean" />

是否禁用该菜单，默认为 `false`

##### direction <Badge type="danger" text="TableCellsMergeDirectionType" />

当前光标所在的单元格往哪个方向合并，可取值 `"left" | "right" | "bottom" | "top"`

##### shortcut <Badge type="danger" text="(e: KeyboardEvent) => boolean" />

菜单快捷键实现，继承自 `Menu` 组件的同名属性，具体使用可参考 [Menu 组件的 shortcut](/guide/menu#shortcut)

## 代码示例

<Wrapper :dark="isDark" v-model="content" placeholder="输入内容..." style="width:100%;height:200px;">
  <template #before>
    <div style="margin-bottom:10px;">
      <TableMergeCellMenu direction="left" />
      <TableMergeCellMenu direction="right"  />
      <TableMergeCellMenu direction="top"  />
      <TableMergeCellMenu direction="bottom"   />
    </div>
  </template>
</Wrapper>

<script lang="ts" setup>
import { useData } from 'vitepress'
import { Wrapper, TableMergeCellMenu } from '../../../lib/kaitify-vue.es.js'
import { ref } from 'vue'
const { isDark } = useData()
const content = ref('<table><tr><td><br></td><td><br></td><td><br></td></tr><tr><td><br></td><td><br></td><td><br></td></tr><tr><td><br></td><td><br></td><td><br></td></tr></table>')
</script>
