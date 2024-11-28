<template>
  <Menu ref="menuRef" :disabled="isDisabled" :active="false" popover :data="options" @select="onSelect"
    :item-active="item => isActive(item)" :shortcut="shortcut"
    :popover-options="{ width: popoverOptions?.width, maxHeight: popoverOptions?.maxHeight ?? 240, minWidth: popoverOptions?.minWidth ?? 90, animation: popoverOptions?.animation, arrow: popoverOptions?.arrow, placement: popoverOptions?.placement, trigger: popoverOptions?.trigger, zIndex: popoverOptions?.zIndex }">
    {{ selectedData?.label || '' }}
  </Menu>
</template>
<script setup lang="ts">
import { computed, inject, ref, Ref } from 'vue';
import { Editor } from '@kaitify/core';
import Menu from "@/editor/menu/menu.vue"
import { FontFamilyMenuPropsType } from './props';
import { MenuDataType } from '@/editor/menu/props';

defineOptions({
  name: 'FontFamilyMenu'
})
//属性
const props = withDefaults(defineProps<FontFamilyMenuPropsType>(), {
  disabled: false,
  data: () => [
    {
      label: '黑体',
      value: '黑体,黑体-简'
    },
    {
      label: '华文仿宋',
      value: '华文仿宋'
    },
    {
      label: '楷体',
      value: '楷体,楷体-简'
    },
    {
      label: '华文楷体',
      value: '华文楷体'
    },
    {
      label: '宋体',
      value: '宋体,宋体-简'
    },
    {
      label: 'Arial',
      value: 'Arial'
    },
    {
      label: 'Consolas',
      value: 'Consolas,monospace'
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
    label: t('默认字体'),
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
  if (editorRef.value.selection.collapsed() && (!!editorRef.value.commands.getAttachment?.() || !!editorRef.value.commands.getMath?.())) {
    return true
  }
  if (!!editorRef.value.commands.getCodeBlock?.()) {
    return true
  }
  return props.disabled
})
//选项是否激活
const isActive = computed<(item: MenuDataType) => boolean>(() => {
  return item => {
    return (keyOfSelectionUpdate.value > 0 && editorRef.value?.commands.isFontFamily?.(item.value as string)) || false
  }
})
//选择的值
const selectedData = computed<MenuDataType | undefined>(() => {
  return props.data.find(item => isActive.value(item)) ?? options.value[0]
})

//选择选项
const onSelect = (item: MenuDataType) => {
  if (!editorRef.value) {
    return
  }
  if (item.value == '') {
    editorRef.value.commands.removeTextStyle?.(['fontFamily'])
  } else if (isActive.value(item)) {
    editorRef.value.updateRealSelection()
  } else {
    editorRef.value.commands.setFontFamily?.(item.value as string)
  }
}
</script>