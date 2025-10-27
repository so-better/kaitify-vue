<template>
  <Menu :disabled="isDisabled" :active="isActive" @operate="onOperate" :shortcut="shortcut">
    <Icon name="kaitify-icon-superscript" />
  </Menu>
</template>
<script setup lang="ts">
import { computed, inject, Ref } from 'vue'
import { Icon } from '@/core/icon'
import { StateType } from '@/editor/wrapper'
import Menu from '@/editor/menu/menu.vue'
import { SuperscriptMenuPropsType } from './props'

defineOptions({
  name: 'SuperscriptMenu'
})
//属性
const props = withDefaults(defineProps<SuperscriptMenuPropsType>(), {
  disabled: false
})
//编辑器状态数据
const state = inject<Ref<StateType>>('state')!

//是否激活
const isActive = computed(() => {
  return state.value.editor?.commands.isSuperscript?.() ?? false
})
//是否禁用
const isDisabled = computed(() => {
  if (!state.value.editor?.selection.focused()) {
    return true
  }
  if (!state.value.editor.selection.collapsed() && !state.value.editor.getFocusNodesBySelection('text').length) {
    return true
  }
  if (state.value.editor.selection.collapsed() && (!!state.value.editor.commands.getAttachment?.() || !!state.value.editor.commands.getMath?.())) {
    return true
  }
  if (!!state.value.editor.commands.getCodeBlock?.()) {
    return true
  }
  return props.disabled
})
//方法
const onOperate = () => {
  if (isActive.value) {
    state.value.editor?.commands.unsetSuperscript?.()
  } else {
    state.value.editor?.commands.setSuperscript?.()
  }
}
</script>
