<template>
  <Menu :disabled="isDisabled" :active="isActive" @operate="onOperate" :shortcut="shortcut">
    <Icon name="align-left" />
  </Menu>
</template>
<script setup lang="ts">
import { computed, ComputedRef, inject, Ref } from 'vue';
import { Editor } from '@kaitify/core';
import { Icon } from '@/core/icon';
import { StateType } from '@/editor/wrapper';
import Menu from "@/editor/menu/menu.vue"
import { AlignLeftMenuPropsType } from './props';

defineOptions({
  name: 'AlignLeftMenu'
})
//属性
const props = withDefaults(defineProps<AlignLeftMenuPropsType>(), {
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
  return !!state.value.selection && (editor.value?.commands.isAlign?.('left') ?? false)
})
//是否禁用
const isDisabled = computed<boolean>(() => {
  if (!state.value.selection || !editor.value || !editor.value.selection.focused()) {
    return true
  }
  return props.disabled
})
//方法
const onOperate = () => {
  if (isActive.value) {
    editor.value?.commands.unsetAlign?.('left')
  } else {
    editor.value?.commands.setAlign?.('left')
  }
}
</script>