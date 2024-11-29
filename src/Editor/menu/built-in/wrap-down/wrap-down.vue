<template>
  <Menu :disabled="isDisabled" :active="false" @operate="onOperate" :shortcut="shortcut">
    <Icon name="wrap-down" />
  </Menu>
</template>
<script setup lang="ts">
import { computed, ComputedRef, inject, Ref } from 'vue';
import { Editor, KNode } from '@kaitify/core';
import { Icon } from '@/core/icon';
import { StateType } from '@/editor/wrapper';
import Menu from "@/editor/menu/menu.vue"
import { WrapDownMenuPropsType } from './props';

defineOptions({
  name: 'WrapDownMenu'
})
//属性
const props = withDefaults(defineProps<WrapDownMenuPropsType>(), {
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
  if (!editor.value || !state.value.selection.focused()) {
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
  editor.value.addNodeAfter(paragraph, matchNode)
  editor.value.setSelectionBefore(paragraph, 'all')
  editor.value.updateView()
}
</script>