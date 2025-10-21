<template>
  <Menu :disabled="isDisabled" :active="isActive" @operate="onOperate" :shortcut="shortcut">
    <Icon name="kaitify-icon-align-left" />
  </Menu>
</template>
<script setup lang="ts">
import { computed, ComputedRef, inject } from 'vue'
import { Icon } from '@/core/icon'
import { StateType } from '@/editor/wrapper'
import Menu from '@/editor/menu/menu.vue'
import { AlignLeftMenuPropsType } from './props'

defineOptions({
  name: 'AlignLeftMenu'
})
//属性
const props = withDefaults(defineProps<AlignLeftMenuPropsType>(), {
  disabled: false
})
//编辑器状态数据
const state = inject<ComputedRef<StateType>>('state')!
//是否激活
const isActive = computed<boolean>(() => {
  return state.value.editor?.commands.isAlign?.('left') ?? false
})
//是否禁用
const isDisabled = computed<boolean>(() => {
  if (!state.value.editor?.selection.focused()) {
    return true
  }
  return props.disabled
})
//方法
const onOperate = () => {
  if (isActive.value) {
    state.value.editor?.commands.unsetAlign?.('left')
  } else {
    state.value.editor?.commands.setAlign?.('left')
  }
}
</script>
