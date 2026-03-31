---
title: emoji 表情
---

# emoji 表情

插入表情

## 使用方法

- 引入组件

```ts
import { EmojiMenu } from '@kaitify/vue'
```

- 在 `Wrapper` 包裹器插槽中使用

```html
<Wrapper v-model="content">
  <template #before>
    <EmojiMenu />
  </template>
</Wrapper>
```

## Props 参数

##### disabled <Badge type="danger" text="boolean" />

是否禁用该菜单，默认为 `false`

##### data <Badge type="danger" text="string[]" />

自定义可选择的 `emoji` 表情列表，默认数据如下：

['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '😉', '😍', '😘', '😗', '😚', '🥰', '😋', '😜', '🤪', '🤨', '😭', '😢', '😔', '😞', '😰', '😱', '😨', '😳', '😡', '😠', '🤬', '👍', '👎', '👏', '🙌', '👐', '🤝', '✌', '🤞', '🤘', '❤️', '💕', '💖', '💗', '💘', '💔', '❣', '🖤', '💙', '💚', '🍏', '🍎', '🍌', '🍉', '🍇', '🍓', '🍒', '🍑', '🍕', '🍔', '🍟', '🌭', '🍗', '🍞', '🚗', '🚕', '🚙', '🚌', '🚑', '🚓', '🚚', '🚲', '🚜', '🚂', '✈️', '🚀', '🎉', '🎊', '🎁', '🔥', '🌈', '⭐', '💡', '⏰', '📅', '📌', '🎶', '🎵']

##### popoverProps <Badge type="danger" text="MenuPropsType['popoverProps']" />

浮层属性配置，同 `Menu` 的 `popoverProps` 属性

## 代码示例

<Wrapper v-model="content" :options="{ dark: isDark, placeholder: '输入内容...'}" style="width:100%;height:200px;">
  <template #before>
    <div style="margin-bottom:10px;">
      <EmojiMenu />
    </div>
  </template>
</Wrapper>

<script lang="ts" setup>
import { useData } from 'vitepress'
import { Wrapper, EmojiMenu } from '../../../lib/kaitify-vue.es.js'
import { ref } from 'vue'
const { isDark } = useData()
const content = ref('<p>hello</p>')
</script>
