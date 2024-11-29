<template>
  <Menu :disabled="isDisabled" :active="false" @operate="onOperate">
    <Icon name="undo" />
  </Menu>
</template>
<script setup lang="ts">
import { computed, inject, Ref } from 'vue';
import { Editor } from '@kaitify/core';
import { Icon } from '@/core/icon';
import Menu from "@/editor/menu/menu.vue"
import { UndoMenuPropsType } from './props';

defineOptions({
  name: 'UndoMenu'
})
//属性
const props = withDefaults(defineProps<UndoMenuPropsType>(), {
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
//是否禁用
const isDisabled = computed<boolean>(() => {
  if (!keyOfSelectionUpdate.value || !editor.value || !editor.value.selection.focused()) {
    return true
  }
  if (!editor.value.commands.canUndo?.()) {
    return true
  }
  return props.disabled
})
//方法
const onOperate = () => {
  editor.value?.commands.undo?.()
}
</script>