<template>
  <Menu :disabled="isDisabled" :active="false" @operate="onOperate" :shortcut="shortcut">
    <Icon name="kaitify-icon-format-clear" />
  </Menu>
</template>
<script setup lang="ts">
import { computed, ComputedRef, inject } from 'vue';
import { Icon } from '@/core/icon';
import { StateType } from '@/editor/wrapper';
import Menu from "@/editor/menu/menu.vue"
import { ClearFormatMenuPropsType } from './props';

defineOptions({
  name: 'ClearFormatMenu'
})
//属性
const props = withDefaults(defineProps<ClearFormatMenuPropsType>(), {
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
  if (!state.value.editor?.selection.focused()) {
    return true
  }
  return props.disabled
})
//方法
const onOperate = () => {
  state.value.editor?.commands.clearFormat?.()
}
</script>