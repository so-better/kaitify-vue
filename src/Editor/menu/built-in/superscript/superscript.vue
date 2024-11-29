<template>
  <Menu :disabled="isDisabled" :active="isActive" @operate="onOperate" :shortcut="shortcut">
    <Icon name="superscript" />
  </Menu>
</template>
<script setup lang="ts">
import { computed, ComputedRef, inject, Ref } from 'vue';
import { Editor } from '@kaitify/core';
import { Icon } from '@/core/icon';
import { StateType } from '@/editor/wrapper';
import Menu from "@/editor/menu/menu.vue"
import { SuperscriptMenuPropsType } from './props';

defineOptions({
  name: 'SuperscriptMenu'
})
//属性
const props = withDefaults(defineProps<SuperscriptMenuPropsType>(), {
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
  return state.value.selection.focused() && (editor.value?.commands.isSuperscript?.() ?? false)
})
//是否禁用
const isDisabled = computed<boolean>(() => {
  if (!editor.value || !state.value.selection.focused()) {
    return true
  }
  if (!state.value.selection.collapsed() && !editor.value.getFocusNodesBySelection('text').length) {
    return true
  }
  if (state.value.selection.collapsed() && (!!editor.value.commands.getAttachment?.() || !!editor.value.commands.getMath?.())) {
    return true
  }
  if (!!editor.value.commands.getCodeBlock?.()) {
    return true
  }
  return props.disabled
})
//方法
const onOperate = () => {
  if (isActive.value) {
    editor.value?.commands.unsetSuperscript?.()
  } else {
    editor.value?.commands.setSuperscript?.()
  }
}
</script>