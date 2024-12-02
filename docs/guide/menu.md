---
title: Menu 菜单
---

# Menu 菜单

`Menu` 组件是 `kaitify-vue` 的重要 `UI` 组件，该组件与编辑器具体的功能无关，它仅仅提供了操作的事件和 `UI` 属性，让我们在做编辑器的功能栏时无需在 `UI` 方面花费心思

`Menu` 组件必须放置在 `Wrapper` 组件的插槽中，无论是放在 `before`、`after` 还是 `bubble` 插槽都是可以的

## 基本使用

```vue
<template>
  <Wrapper v-model="content">
    <template #before>
      <Menu>菜单</Menu>
    </template>
  </Wrapper>
</template>
<script setup lang="ts">
import { Wrapper, Menu } from '@kaitify/vue'
import { ref } from 'vue'
const content = ref('<p>hello</p>')
</script>
```

示例：

<Wrapper :dark="isDark" v-model="content" placeholder="输入内容..." style="width:100%;height:200px;">
  <template #before>
    <div style="margin-bottom:10px;">
      <Menu>菜单</Menu>
      <Menu popover :popover-props="{width:100}" :data="[{label:'选项1',value:0},{label:'选项2',value:1},{label:'选项3',value:2},]">带浮层的菜单</Menu>
      <Menu active>激活的菜单</Menu>
      <Menu disabled>禁用的菜单</Menu>
    </div>
  </template>
</Wrapper>

<script lang="ts" setup>
import { useData } from 'vitepress'
import { Wrapper, Menu } from '../../lib/kaitify-vue.es.js'
import { ref } from 'vue'

const { isDark } = useData()

const content = ref('<p>hello</p>')
</script>

## Props 参数

##### disabled <Badge type="danger" text="boolean" />

是否禁用菜单，默认为 `false`

##### active <Badge type="danger" text="boolean" />

是否显示激活状态，默认为 `false`

##### popover <Badge type="danger" text="boolean" />

是否为带浮层的菜单，默认为 `false`

##### popoverProps <Badge type="danger" text="PopoverPropsType" />

浮层属性配置，包含以下属性：

- width <Badge type="danger" text="string | number" />：浮层宽度，默认自适应
- minWidth <Badge type="danger" text="string | number" />：浮层最小宽度
- maxHeight <Badge type="danger" text="string | number" />：浮层最大高度
- placement <Badge type="danger" text="PopoverPlacementType" /> 浮层默认显示位置，可取值 `'auto' | 'auto-start' | 'auto-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'top-start' | 'top' | 'top-end' | 'left-start' | 'left' | 'left-end' | 'right-start' | 'right' | 'right-end'`，如果指定位置的空间不足以显示浮层，会自适应匹配其他位置
- arrow <Badge type="danger" text="boolean" />：浮层是否显示三角形
- trigger <Badge type="danger" text="hover | click | custom" />：浮层触发显示的方式，如果指定为 `custom`，则需要手动调用 `showPopover`/`hidePopover` 方法
- animation <Badge type="danger" text="'fade' | 'translate' | string" />：浮层显示动画，默认支持 `fade` 和 `translate`，可以自定义其他动画名称，例如定义动画名称`'a'`，则对应的 `Transition` 组件 `name` 值为 `kaitify-popover-a`
- zIndex <Badge type="danger" text="number" />：浮层的 `z-index` 层级，默认为 10

##### data <Badge type="danger" text="MenuDataType[]" />

浮层显示的列表数据，是一个数组，数组中每一项包含如下属性：

- label <Badge type="danger" text="string" />：选项内容
- value <Badge type="danger" text="string | number" />：选项的值
- icon <Badge type="danger" text="string | number" />：选项左侧显示的图标，只能是 `kaitify-vue` 内置的图标名称，如果需要自定义图标只能通过 `icon` 插槽来实现

##### itemDisabled <Badge type="danger" text="(item: MenuDataType) => boolean" />

浮层选项是否禁用，该属性是一个函数，返回一个 `boolean` 值，回调参数为当前选项数据

##### itemActive <Badge type="danger" text="(item: MenuDataType) => boolean" />

浮层选项是否激活，该属性是一个函数，返回一个 `boolean` 值，回调参数为当前选项数据

##### shortcut <Badge type="danger" text="((e: KeyboardEvent) => boolean) | { [key: MenuDataType['value']]: (e: KeyboardEvent) => boolean }" />

菜单快捷键实现，如果该菜单是一个普通的按钮菜单，则该属性是一个函数，回调参数为键盘事件，需要返回一个 `boolean` 值，如果该菜单是一个带浮层的选项菜单，则该属性是一个对象，对象的 `key` 是选项的 `value` 值，对象的值是一个函数，回调参数为键盘事件，需要返回一个 `boolean` 值

函数返回 `true` 值，表示触发菜单的 `operate` 或者 `select` 事件

## Events 事件

##### operate

非浮层类型的菜单按钮点击触发的事件

```vue
<template>
  <Wrapper v-model="content">
    <template #before>
      <Menu @operate="onOperate">菜单</Menu>
    </template>
  </Wrapper>
</template>
<script setup lang="ts">
import { Wrapper, Menu } from '@kaitify/vue'
import { ref } from 'vue'
const content = ref('<p>hello</p>')

const onOperate = () => {
  console.log('点击菜单按钮')
}
</script>
```

##### select

浮层类型的菜单按钮点击选项触发的事件

```vue
<template>
  <Wrapper v-model="content">
    <template #before>
      <Menu
        @select="onSelect"
        popover
        :data="[
          { label: '选项1', value: 0 },
          { label: '选项2', value: 1 },
          { label: '选项3', value: 2 }
        ]"
        >菜单</Menu
      >
    </template>
  </Wrapper>
</template>
<script setup lang="ts">
import { Wrapper, Menu } from '@kaitify/vue'
import { ref } from 'vue'
const content = ref('<p>hello</p>')

const onSelect = item => {
  console.log('点击菜单选项', item)
}
</script>
```

##### popoverShow

浮层显示前触发的事件，回调参数为浮层 `dom`

```vue
<template>
  <Wrapper v-model="content">
    <template #before>
      <Menu
        @popoverShow="popoverShow"
        popover
        :data="[
          { label: '选项1', value: 0 },
          { label: '选项2', value: 1 },
          { label: '选项3', value: 2 }
        ]"
        >菜单</Menu
      >
    </template>
  </Wrapper>
</template>
<script setup lang="ts">
import { Wrapper, Menu } from '@kaitify/vue'
import { ref } from 'vue'
const content = ref('<p>hello</p>')

const popoverShow = el => {
  console.log('浮层显示前触发', el)
}
</script>
```

##### popoverShowing

浮层显示时触发的事件，回调参数为浮层 `dom`

```vue
<template>
  <Wrapper v-model="content">
    <template #before>
      <Menu
        @popoverShowing="popoverShowing"
        popover
        :data="[
          { label: '选项1', value: 0 },
          { label: '选项2', value: 1 },
          { label: '选项3', value: 2 }
        ]"
        >菜单</Menu
      >
    </template>
  </Wrapper>
</template>
<script setup lang="ts">
import { Wrapper, Menu } from '@kaitify/vue'
import { ref } from 'vue'
const content = ref('<p>hello</p>')

const popoverShowing = el => {
  console.log('浮层显示时触发', el)
}
</script>
```

##### popoverShown

浮层显示后触发的事件，回调参数为浮层 `dom`

```vue
<template>
  <Wrapper v-model="content">
    <template #before>
      <Menu
        @popoverShown="popoverShown"
        popover
        :data="[
          { label: '选项1', value: 0 },
          { label: '选项2', value: 1 },
          { label: '选项3', value: 2 }
        ]"
        >菜单</Menu
      >
    </template>
  </Wrapper>
</template>
<script setup lang="ts">
import { Wrapper, Menu } from '@kaitify/vue'
import { ref } from 'vue'
const content = ref('<p>hello</p>')

const popoverShown = el => {
  console.log('浮层显示后触发', el)
}
</script>
```

##### popoverHide

浮层隐藏前触发的事件，回调参数为浮层 `dom`

```vue
<template>
  <Wrapper v-model="content">
    <template #before>
      <Menu
        @popoverHide="popoverHide"
        popover
        :data="[
          { label: '选项1', value: 0 },
          { label: '选项2', value: 1 },
          { label: '选项3', value: 2 }
        ]"
        >菜单</Menu
      >
    </template>
  </Wrapper>
</template>
<script setup lang="ts">
import { Wrapper, Menu } from '@kaitify/vue'
import { ref } from 'vue'
const content = ref('<p>hello</p>')

const popoverHide = el => {
  console.log('浮层隐藏前触发', el)
}
</script>
```

##### popoverHiding

浮层隐藏时触发的事件，回调参数为浮层 `dom`

```vue
<template>
  <Wrapper v-model="content">
    <template #before>
      <Menu
        @popoverHiding="popoverHiding"
        popover
        :data="[
          { label: '选项1', value: 0 },
          { label: '选项2', value: 1 },
          { label: '选项3', value: 2 }
        ]"
        >菜单</Menu
      >
    </template>
  </Wrapper>
</template>
<script setup lang="ts">
import { Wrapper, Menu } from '@kaitify/vue'
import { ref } from 'vue'
const content = ref('<p>hello</p>')

const popoverHiding = el => {
  console.log('浮层隐藏时触发', el)
}
</script>
```

##### popoverHidden

浮层隐藏后触发的事件，回调参数为浮层 `dom`

```vue
<template>
  <Wrapper v-model="content">
    <template #before>
      <Menu
        @popoverHidden="popoverHidden"
        popover
        :data="[
          { label: '选项1', value: 0 },
          { label: '选项2', value: 1 },
          { label: '选项3', value: 2 }
        ]"
        >菜单</Menu
      >
    </template>
  </Wrapper>
</template>
<script setup lang="ts">
import { Wrapper, Menu } from '@kaitify/vue'
import { ref } from 'vue'
const content = ref('<p>hello</p>')

const popoverHidden = el => {
  console.log('浮层隐藏后触发', el)
}
</script>
```

## API 组件属性/方法

`Menu` 提供了部分属性/方法可以通过组件实例来调用

##### showPopover <Badge type="danger" text="() => void" />

显示浮层的方法

```vue
<template>
  <Wrapper v-model="content" @created="onCreated">
    <template #before>
      <Menu
        ref="menu"
        popover
        :data="[
          { label: '选项1', value: 0 },
          { label: '选项2', value: 1 },
          { label: '选项3', value: 2 }
        ]"
        >菜单</Menu
      >
    </template>
  </Wrapper>
</template>
<script setup lang="ts">
import { Wrapper, Menu } from '@kaitify/vue'
import { ref } from 'vue'
const menu = ref<typeof Menu | undefined>()
const content = ref('<p>hello</p>')

const onCreated = el => {
  menu.value?.showPopover()
}
</script>
```

##### hidePopover <Badge type="danger" text="() => void" />

隐藏浮层的方法

```vue
<template>
  <Wrapper v-model="content" @created="onCreated">
    <template #before>
      <Menu
        ref="menu"
        popover
        :data="[
          { label: '选项1', value: 0 },
          { label: '选项2', value: 1 },
          { label: '选项3', value: 2 }
        ]"
        >菜单</Menu
      >
    </template>
  </Wrapper>
</template>
<script setup lang="ts">
import { Wrapper, Menu } from '@kaitify/vue'
import { ref } from 'vue'
const menu = ref<typeof Menu | undefined>()
const content = ref('<p>hello</p>')

const onCreated = el => {
  menu.value?.showPopover()

  setTimeout(() => {
    menu.value?.hidePopover()
  }, 3000)
}
</script>
```

## Slots 插槽

##### default

默认插槽，即菜单按钮的内容

##### popover

浮层插槽，用于自定义浮层的内容

##### icon

选项图标插槽，用于自定义选项图标，该插槽提供一个默认参数 `option`，表示选项的数据，如果设定了该插槽，则选项数据中的 `icon` 属性不会生效

##### label

选项展示内容插槽，用于自定义选项展示的内容，该插槽提供一个默认参数 `option`，表示选项的数据，如果设定了该插槽，则选项数据中的 `label` 属性不会生效
