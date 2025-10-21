<template>
  <Menu :disabled="isDisabled" :active="isActive" @operate="onOperate" :shortcut="shortcut">
    <Icon name="kaitify-icon-subscript" />
  </Menu>
</template>
<script setup lang="ts">
import { computed, ComputedRef, inject } from 'vue'
import { Icon } from '@/core/icon'
import { StateType } from '@/editor/wrapper'
import Menu from '@/editor/menu/menu.vue'
import { SubscriptMenuPropsType } from './props'

defineOptions({
  name: 'SubscriptMenu'
})
//属性
const props = withDefaults(defineProps<SubscriptMenuPropsType>(), {
  disabled: false
})
//编辑器状态数据
const state = inject<ComputedRef<StateType>>('state')!

//是否激活
const isActive = computed<boolean>(() => {
  return state.value.editor?.commands.isSubscript?.() ?? false
})
//是否禁用
const isDisabled = computed<boolean>(() => {
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
    state.value.editor?.commands.unsetSubscript?.()
  } else {
    state.value.editor?.commands.setSubscript?.()
  }
}
</script>
