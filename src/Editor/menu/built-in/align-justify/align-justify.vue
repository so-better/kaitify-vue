<template>
  <Menu :disabled="isDisabled" :active="isActive" @operate="onOperate" :shortcut="shortcut">
    <Icon name="kaitify-icon-align-justify" />
  </Menu>
</template>
<script setup lang="ts">
import { computed, inject, Ref } from 'vue'
import { Icon } from '@/core/icon'
import { StateType } from '@/editor/wrapper'
import Menu from '@/editor/menu/menu.vue'
import { AlignJustifyMenuPropsType } from './props'

defineOptions({
  name: 'AlignJustifyMenu'
})
//属性
const props = withDefaults(defineProps<AlignJustifyMenuPropsType>(), {
  disabled: false
})
//编辑器状态数据
const state = inject<Ref<StateType>>('state')!
//是否激活
const isActive = computed(() => {
  return state.value.editor?.commands.isAlign?.('justify') ?? false
})
//是否禁用
const isDisabled = computed(() => {
  if (!state.value.editor?.selection.focused()) {
    return true
  }
  return props.disabled
})
//方法
const onOperate = () => {
  if (isActive.value) {
    state.value.editor?.commands.unsetAlign?.('justify')
  } else {
    state.value.editor?.commands.setAlign?.('justify')
  }
}
</script>
