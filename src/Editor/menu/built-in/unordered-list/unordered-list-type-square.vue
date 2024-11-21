<template>
  <Menu :disabled="isDisabled" :active="isActive" @operate="onOperate">
    <Icon name="list-square" />
  </Menu>
</template>
<script setup lang="ts">
import { computed, inject, Ref } from 'vue';
import { Editor } from '@kaitify/core';
import { Icon } from '@/core/icon';
import Menu from "@/editor/menu/menu.vue"
import { UnorderedListMenuPropsType } from './props';

defineOptions({
  name: 'UnorderedListTypeSquareMenu'
})
//属性
const props = withDefaults(defineProps<UnorderedListMenuPropsType>(), {
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
  if (!keyOfSelectionUpdate.value || !editorRef.value) {
    return false
  }
  const listNode = editorRef.value.commands.getList?.(false)
  return !!listNode && listNode.hasStyles() && listNode.styles!.listStyleType == 'square'
})
//是否禁用
const isDisabled = computed<boolean>(() => {
  if (!keyOfSelectionUpdate.value || !editorRef.value || !editorRef.value.selection.focused()) {
    return true
  }
  if (!editorRef.value.commands.getList?.(false)) {
    return true
  }
  return props.disabled
})
//方法
const onOperate = () => {
  if (isActive.value) {
    return
  }
  editorRef.value?.commands.updateListType?.({
    listType: 'square',
    ordered: false
  })
}
</script>