---
title: back-color 文本背景色
---

# back-color 文本背景色

设置/取消文本的背景色

## 使用方法

- 引入组件

```ts
import { BackColorMenu } from '@kaitify/vue'
```

- 在 `Wrapper` 包裹器插槽中使用

```html
<Wrapper v-model="content">
  <template #before>
    <BackColorMenu />
  </template>
</Wrapper>
```

## Props 参数

##### disabled <Badge type="danger" text="boolean" />

是否禁用该菜单，默认为 `false`

##### colors <Badge type="danger" text="string[]" />

自定义背景色的可选择颜色数组

##### popoverProps <Badge type="danger" text="MenuPropsType['popoverProps']" />

浮层属性配置，同 `Menu` 的 `popoverProps` 属性

## 代码示例

<Wrapper :dark="isDark" v-model="content" placeholder="输入内容..." style="width:100%;height:200px;">
  <template #before>
    <div style="margin-bottom:10px;">
      <BackColorMenu />
    </div>
  </template>
</Wrapper>

<script lang="ts" setup>
import { useData } from 'vitepress'
import { Wrapper, BackColorMenu } from '../../../lib/kaitify-vue.es.js'
import { ref } from 'vue'
const { isDark } = useData()
const content = ref('<p>hello</p>')
</script>
