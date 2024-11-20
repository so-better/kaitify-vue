<template>
  <Menu :disabled="isDisabled" :active="isActive" @operate="onOperate">
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
const editorRef = inject<Ref<Editor | undefined>>('editorRef')
//组件没有放在Wrapper的插槽中会报错
if (!editorRef) {
  throw new Error(`The component must be placed in the slot of the Wrapper.`)
}
//编辑器光标更新key
const keyOfSelectionUpdate = inject<Ref<number>>('keyOfSelectionUpdate')!
//是否激活
const isActive = computed<boolean>(() => {
  return (keyOfSelectionUpdate.value > 0 && editorRef.value?.commands.isBold?.()) || false
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
//方法
const onOperate = () => {
  if (isActive.value) {
    editorRef.value?.commands.unsetBold?.()
  } else {
    editorRef.value?.commands.setBold?.()
  }
}
</script>