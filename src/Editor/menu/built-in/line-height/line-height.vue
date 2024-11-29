<template>
  <Menu ref="menuRef" :disabled="isDisabled" :active="false" popover :data="options" @select="onSelect"
    :item-active="item => isActive(item)" :shortcut="shortcut"
    :popover-options="{ width: popoverOptions?.width, maxHeight: popoverOptions?.maxHeight ?? 240, minWidth: popoverOptions?.minWidth ?? 80, animation: popoverOptions?.animation, arrow: popoverOptions?.arrow, placement: popoverOptions?.placement, trigger: popoverOptions?.trigger, zIndex: popoverOptions?.zIndex }">
    {{ selectedData?.label || '' }}
  </Menu>
</template>
<script setup lang="ts">
import { computed, ComputedRef, inject, ref, Ref } from 'vue';
import { Editor } from '@kaitify/core';
import { StateType } from '@/editor/wrapper';
import Menu from "@/editor/menu/menu.vue"
import { LineHeightMenuPropsType } from './props';
import { MenuDataType } from '@/editor/menu/props';

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
const editor = inject<Ref<Editor | undefined>>('editor')
//组件没有放在Wrapper的插槽中会报错
if (!editor) {
  throw new Error(`The component must be placed in the slot of the Wrapper.`)
}
//编辑器状态数据
const state = inject<ComputedRef<StateType>>('state')!
//翻译方法
const t = inject<(key: string) => string>('t')!
//菜单组件实例
const menuRef = ref<(typeof Menu) | undefined>()
//选项
const options = computed<MenuDataType[]>(() => {
  return [{
    label: t('默认行高'),
    value: props.defaultValue
  }, ...(props.data || [])]
})
//是否禁用
const isDisabled = computed<boolean>(() => {
  if (!state.value.selection || !editor.value || !editor.value.selection.focused()) {
    return true
  }
  return props.disabled
})
//选项是否激活
const isActive = computed<(item: MenuDataType) => boolean>(() => {
  return item => {
    return !!state.value.selection && (editor.value?.commands.isLineHeight?.(item.value) ?? false)
  }
})
//选择的值
const selectedData = computed<MenuDataType | undefined>(() => {
  return props.data.find(item => isActive.value(item)) || options.value[0]
})

//选择选项
const onSelect = (item: MenuDataType) => {
  if (!editor.value) {
    return
  }
  if (isActive.value(item)) {
    editor.value.updateRealSelection()
  } else {
    editor.value.commands.setLineHeight?.(item.value)
  }
}
</script>