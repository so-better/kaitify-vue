<template>
  <Menu ref="menuRef" :disabled="isDisabled" :active="false" popover :data="options" @select="onSelect"
    :item-active="item => isActive(item)" :popover-options="{ maxHeight: 240, minWidth: 80 }">
    {{ selectedData?.label || '' }}
  </Menu>
</template>
<script setup lang="ts">
import { computed, inject, ref, Ref } from 'vue';
import { Editor } from '@kaitify/core';
import Menu from "@/editor/menu/menu.vue"
import { FontSizeMenuPropsType } from './props';
import { MenuDataType } from '../../props';

defineOptions({
  name: 'FontSizeMenu'
})
//属性
const props = withDefaults(defineProps<FontSizeMenuPropsType>(), {
  disabled: false,
  data: () => [
    {
      label: '12px',
      value: '12px'
    },
    {
      label: '14px',
      value: '14px'
    },
    {
      label: '16px',
      value: '16px'
    },
    {
      label: '18px',
      value: '18px'
    },
    {
      label: '20px',
      value: '20px'
    },
    {
      label: '24px',
      value: '24px'
    },
    {
      label: '28px',
      value: '28px'
    },
    {
      label: '32px',
      value: '32px'
    },
    {
      label: '36px',
      value: '36px'
    },
    {
      label: '40px',
      value: '40px'
    }]
})
//编辑器实例
const editorRef = inject<Ref<Editor | undefined>>('editorRef')
//组件没有放在Wrapper的插槽中会报错
if (!editorRef) {
  throw new Error(`The component must be placed in the slot of the Wrapper.`)
}
//编辑器光标更新key
const keyOfSelectionUpdate = inject<Ref<number>>('keyOfSelectionUpdate')!
//翻译方法
const t = inject<(key: string) => string>('t')!
//菜单组件实例
const menuRef = ref<(typeof Menu) | undefined>()
//选项
const options = computed<MenuDataType[]>(() => {
  return [{
    label: t('默认字号'),
    value: ''
  }, ...(props.data || [])]
})
//是否禁用
const isDisabled = computed<boolean>(() => {
  if (!keyOfSelectionUpdate.value || !editorRef.value || !editorRef.value.selection.focused()) {
    return true
  }
  if (!editorRef.value.selection.collapsed() && !editorRef.value.getFocusNodesBySelection('text').length) {
    return true
  }
  return props.disabled
})
//选项是否激活
const isActive = computed<(item: MenuDataType) => boolean>(() => {
  return item => {
    return (keyOfSelectionUpdate.value > 0 && editorRef.value?.commands.isFontSize?.(item.value as string)) ?? false
  }
})
//选择的值
const selectedData = computed<MenuDataType | undefined>(() => {
  if (!keyOfSelectionUpdate.value || !editorRef.value) {
    return options.value[0]
  }
  const data = props.data.find(item => editorRef.value?.commands.isFontSize?.(item.value as string) ?? false)
  return data || options.value[0]
})

//选择选项
const onSelect = (item: MenuDataType) => {
  if (!editorRef.value) {
    return
  }
  if (item.value == '') {
    editorRef.value.commands.removeTextStyle?.(['fontSize'])
  } else if (isActive.value(item)) {
    editorRef.value.updateRealSelection()
  } else {
    editorRef.value.commands.setFontSize?.(item.value as string)
  }
}
</script>