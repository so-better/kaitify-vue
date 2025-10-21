<template>
  <Menu :disabled="isDisabled" :active="false" @operate="onOperate" :shortcut="shortcut">
    <Icon name="kaitify-icon-indent-increase" />
  </Menu>
</template>
<script setup lang="ts">
import { computed, ComputedRef, inject } from 'vue'
import { Icon } from '@/core/icon'
import { StateType } from '@/editor/wrapper'
import Menu from '@/editor/menu/menu.vue'
import { IncreaseIndentMenuPropsType } from './props'

defineOptions({
  name: 'IncreaseIndentMenu'
})
//属性
const props = withDefaults(defineProps<IncreaseIndentMenuPropsType>(), {
  disabled: false
})
//编辑器状态数据
const state = inject<ComputedRef<StateType>>('state')!

//是否禁用
const isDisabled = computed<boolean>(() => {
  if (!state.value.editor?.selection.focused()) {
    return true
  }
  if (!state.value.editor.commands.canUseIndent?.()) {
    return true
  }
  return props.disabled
})
//方法
const onOperate = () => {
  state.value.editor?.commands.setIncreaseIndent?.()
}
</script>
