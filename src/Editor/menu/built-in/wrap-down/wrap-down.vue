<template>
  <Menu :disabled="isDisabled" :active="false" @operate="onOperate" :shortcut="shortcut">
    <Icon name="kaitify-icon-wrap-down" />
  </Menu>
</template>
<script setup lang="ts">
import { computed, ComputedRef, inject } from 'vue';
import { KNode } from '@kaitify/core';
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
//编辑器状态数据
const state = inject<ComputedRef<StateType>>('state')
//组件没有放在Wrapper的插槽中会报错
if (!state) {
  throw new Error(`The component must be placed in the slot of the Wrapper.`)
}

//是否禁用
const isDisabled = computed<boolean>(() => {
  const matchNode = state.value.editor?.getMatchNodeBySelection(props.match)
  if (!matchNode || !matchNode.isBlock() || matchNode.void || matchNode.fixed || matchNode.nested) {
    return true
  }
  return props.disabled
})
//方法
const onOperate = () => {
  if (!state.value.editor || !props.match) {
    return
  }
  const matchNode = state.value.editor.getMatchNodeBySelection(props.match)
  if (!matchNode || !matchNode.isBlock() || matchNode.void || matchNode.fixed || matchNode.nested) {
    return
  }
  const paragraph = KNode.create({
    type: 'block',
    tag: state.value.editor.blockRenderTag,
    children: [
      {
        type: 'closed',
        tag: 'br'
      }
    ]
  })
  state.value.editor.addNodeAfter(paragraph, matchNode)
  state.value.editor.setSelectionBefore(paragraph, 'all')
  state.value.editor.updateView()
}
</script>