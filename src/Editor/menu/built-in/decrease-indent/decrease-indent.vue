<template>
  <Menu :disabled="isDisabled" :active="false" @operate="onOperate">
    <Icon name="indent-decrease" />
  </Menu>
</template>
<script setup lang="ts">
import { computed, inject, Ref } from 'vue';
import { Editor } from '@kaitify/core';
import { Icon } from '@/core/icon';
import Menu from "@/editor/menu/menu.vue"
import { DecreaseIndentMenuPropsType } from './props';

defineOptions({
  name: 'DecreaseIndentMenu'
})
//属性
const props = withDefaults(defineProps<DecreaseIndentMenuPropsType>(), {
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

//是否禁用
const isDisabled = computed<boolean>(() => {
  if (!keyOfSelectionUpdate.value || !editorRef.value || !editorRef.value.selection.focused()) {
    return true
  }
  return props.disabled
})
//方法
const onOperate = () => {
  editorRef.value?.commands.setDecreaseIndent?.()
}
</script>