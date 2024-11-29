<template>
  <Menu :disabled="isDisabled" :active="false" @operate="onOperate" :shortcut="shortcut">
    <Icon name="wrap-up" />
  </Menu>
</template>
<script setup lang="ts">
import { computed, ComputedRef, inject, Ref } from 'vue';
import { Editor, KNode } from '@kaitify/core';
import { Icon } from '@/core/icon';
import { StateType } from '@/editor/wrapper';
import Menu from "@/editor/menu/menu.vue"
import { WrapUpMenuPropsType } from './props';

defineOptions({
  name: 'WrapUpMenu'
})
//属性
const props = withDefaults(defineProps<WrapUpMenuPropsType>(), {
  disabled: false
})
//编辑器实例
const editor = inject<Ref<Editor | undefined>>('editor')
//组件没有放在Wrapper的插槽中会报错
if (!editor) {
  throw new Error(`The component must be placed in the slot of the Wrapper.`)
}
//编辑器状态数据
const state = inject<ComputedRef<StateType>>('state')!
//是否禁用
const isDisabled = computed<boolean>(() => {
  if (!state.value.selection || !editor.value || !editor.value.selection.focused() || !props.match) {
    return true
  }
  const matchNode = editor.value.getMatchNodeBySelection(props.match)
  if (!matchNode || !matchNode.isBlock() || matchNode.void || matchNode.fixed || matchNode.nested) {
    return true
  }
  return props.disabled
})
//方法
const onOperate = () => {
  if (!editor.value || !props.match) {
    return
  }
  const matchNode = editor.value.getMatchNodeBySelection(props.match)
  if (!matchNode || !matchNode.isBlock() || matchNode.void || matchNode.fixed || matchNode.nested) {
    return
  }
  const paragraph = KNode.create({
    type: 'block',
    tag: editor.value.blockRenderTag,
    children: [
      {
        type: 'closed',
        tag: 'br'
      }
    ]
  })
  editor.value.addNodeBefore(paragraph, matchNode)
  editor.value.setSelectionBefore(paragraph, 'all')
  editor.value.updateView()
}
</script>