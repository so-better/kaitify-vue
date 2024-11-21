<template>
  <Menu :disabled="isDisabled" :active="isActive" @operate="onOperate">
    <Icon name="list-upper-roman" />
  </Menu>
</template>
<script setup lang="ts">
import { computed, inject, Ref } from 'vue';
import { Editor } from '@kaitify/core';
import { Icon } from '@/core/icon';
import Menu from "@/editor/menu/menu.vue"
import { OrderedListMenuPropsType } from './props';

defineOptions({
  name: 'OrderedListTypeUpperRomanMenu'
})
//属性
const props = withDefaults(defineProps<OrderedListMenuPropsType>(), {
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
  const listNode = editorRef.value.commands.getList?.(true)
  return !!listNode && listNode.hasStyles() && listNode.styles!.listStyleType == 'upper-roman'
})
//是否禁用
const isDisabled = computed<boolean>(() => {
  if (!keyOfSelectionUpdate.value || !editorRef.value || !editorRef.value.selection.focused()) {
    return true
  }
  if (!editorRef.value.commands.getList?.(true)) {
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
    listType: 'upper-roman',
    ordered: true
  })
}
</script>