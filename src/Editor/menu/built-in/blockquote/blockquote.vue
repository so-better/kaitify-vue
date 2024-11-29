<template>
  <Menu :disabled="isDisabled" :active="isActive" @operate="onOperate" :shortcut="shortcut">
    <Icon name="quote" />
  </Menu>
</template>
<script setup lang="ts">
import { computed, ComputedRef, inject, Ref } from 'vue';
import { Editor } from '@kaitify/core';
import { Icon } from '@/core/icon';
import { StateType } from '@/editor/wrapper';
import Menu from "@/editor/menu/menu.vue"
import { BlockquoteMenuPropsType } from './props';

defineOptions({
  name: 'BlockquoteMenu'
})
//属性
const props = withDefaults(defineProps<BlockquoteMenuPropsType>(), {
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
//是否激活
const isActive = computed<boolean>(() => {
  return state.value.selection.focused() && (editor.value?.commands.allBlockquote?.() ?? false)
})
//是否禁用
const isDisabled = computed<boolean>(() => {
  if (!editor.value || !state.value.selection.focused()) {
    return true
  }
  return props.disabled
})
//方法
const onOperate = () => {
  if (isActive.value) {
    editor.value?.commands.unsetBlockquote?.()
  } else {
    editor.value?.commands.setBlockquote?.()
  }
}
</script>