<template>
  <Menu :disabled="isDisabled" :active="isActive" @operate="onOperate" :shortcut="shortcut">
    <Icon name="kaitify-icon-align-right" />
  </Menu>
</template>
<script setup lang="ts">
import { computed, ComputedRef, inject } from 'vue';
import { Icon } from '@/core/icon';
import { StateType } from '@/editor/wrapper';
import Menu from "@/editor/menu/menu.vue"
import { AlignRightMenuPropsType } from './props';

defineOptions({
  name: 'AlignRightMenu'
})
//属性
const props = withDefaults(defineProps<AlignRightMenuPropsType>(), {
  disabled: false
})
//编辑器状态数据
const state = inject<ComputedRef<StateType>>('state')
//组件没有放在Wrapper的插槽中会报错
if (!state) {
  throw new Error(`The component must be placed in the slot of the Wrapper.`)
}
//是否激活
const isActive = computed<boolean>(() => {
  return state.value.editor?.commands.isAlign?.('right') ?? false
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
    state.value.editor?.commands.unsetAlign?.('right')
  } else {
    state.value.editor?.commands.setAlign?.('right')
  }
}
</script>