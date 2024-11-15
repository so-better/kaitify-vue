<template>
  <Menu ref="menuRef" :disabled="isDisabled" :active="false" popover :data="options" @select="onSelect"
    :item-active="item => isActive(item)" :popover-options="{ maxHeight: 240, minWidth: 120 }">
    {{ selectedData?.label || '' }}
  </Menu>
</template>
<script setup lang="ts">
import { computed, inject, ref, Ref } from 'vue';
import { Editor } from '@kaitify/core';
import Menu from "@/editor/menu/menu.vue"
import { LineHeightMenuPropsType } from './props';
import { MenuDataType } from '../../props';

defineOptions({
  name: 'LineHeightMenu'
})
//属性
const props = withDefaults(defineProps<LineHeightMenuPropsType>(), {
  disabled: false,
  defaultValue: 1.5,
  data: () => [
    {
      label: '1',
      value: 1
    },
    {
      label: '1.15',
      value: 1.15
    },
    {
      label: '1.5',
      value: 1.5
    },
    {
      label: '2',
      value: 2
    },
    {
      label: '2.5',
      value: 2.5
    },
    {
      label: '3',
      value: 3
    }
  ]
})
//编辑器实例
const editorRef = inject<Ref<Editor | undefined>>('editorRef')
//翻译方法
const t = inject<(key: string) => string>('t')!
//菜单组件实例
const menuRef = ref<(typeof Menu) | undefined>()

//组件没有放在Wrapper的插槽中会报错
if (!editorRef) {
  throw new Error(`The component must be placed in the slot of the Wrapper.`)
}

//选项
const options = computed<MenuDataType[]>(() => {
  return [{
    label: t('默认行高'),
    value: props.defaultValue
  }, ...(props.data || [])]
})
//是否禁用
const isDisabled = computed<boolean>(() => {
  if (!editorRef.value || !editorRef.value.selection.focused()) {
    return true
  }
  return props.disabled
})
//选项是否激活
const isActive = computed<(item: MenuDataType) => boolean>(() => {
  return item => {
    if (!editorRef.value) {
      return false
    }
    return editorRef.value.commands.isLineHeight?.(item.value) || false
  }
})
//选择的值
const selectedData = computed<MenuDataType | undefined>(() => {
  if (!editorRef.value) {
    return options.value[0]
  }
  const data = props.data.find(item => editorRef.value?.commands.isLineHeight?.(item.value) ?? false)
  return data || options.value[0]
})

//选择选项
const onSelect = (item: MenuDataType) => {
  if (!editorRef.value) {
    return
  }
  if (isActive.value(item)) {
    editorRef.value.updateRealSelection()
  } else {
    editorRef.value.commands.setLineHeight?.(item.value)
  }
}
</script>