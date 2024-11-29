<template>
  <Menu :disabled="isDisabled" :active="isActive" @operate="onOperate" :shortcut="shortcut">
    <Icon name="bold" />
  </Menu>
</template>
<script setup lang="ts">
import { computed, inject, Ref } from 'vue';
import { Editor } from '@kaitify/core';
import { Icon } from '@/core/icon';
import Menu from "@/editor/menu/menu.vue"
import { BoldMenuPropsType } from './props';

defineOptions({
  name: 'BoldMenu'
})
//属性
const props = withDefaults(defineProps<BoldMenuPropsType>(), {
  disabled: false
})
//编辑器实例
const editor = inject<Ref<Editor | undefined>>('editor')
//组件没有放在Wrapper的插槽中会报错
if (!editor) {
  throw new Error(`The component must be placed in the slot of the Wrapper.`)
}
//编辑器光标更新key
const keyOfSelectionUpdate = inject<Ref<number>>('keyOfSelectionUpdate')!
//是否激活
const isActive = computed<boolean>(() => {
  return (keyOfSelectionUpdate.value > 0 && editor.value?.commands.isBold?.()) || false
})
//是否禁用
const isDisabled = computed<boolean>(() => {
  if (!keyOfSelectionUpdate.value || !editor.value || !editor.value.selection.focused()) {
    return true
  }
  if (!editor.value.selection.collapsed() && !editor.value.getFocusNodesBySelection('text').length) {
    return true
  }
  if (editor.value.selection.collapsed() && (!!editor.value.commands.getAttachment?.() || !!editor.value.commands.getMath?.())) {
    return true
  }
  if (!!editor.value.commands.getCodeBlock?.()) {
    return true
  }
  return props.disabled
})
//方法
const onOperate = () => {
  if (isActive.value) {
    editor.value?.commands.unsetBold?.()
  } else {
    editor.value?.commands.setBold?.()
  }
}
</script>