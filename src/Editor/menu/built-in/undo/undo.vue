<template>
  <Menu :disabled="isDisabled" :active="false" @operate="onOperate">
    <Icon name="kaitify-icon-undo" />
  </Menu>
</template>
<script setup lang="ts">
import { computed, inject, Ref } from 'vue'
import { Icon } from '@/core/icon'
import { StateType } from '@/editor/wrapper'
import Menu from '@/editor/menu/menu.vue'
import { UndoMenuPropsType } from './props'

defineOptions({
  name: 'UndoMenu'
})
//属性
const props = withDefaults(defineProps<UndoMenuPropsType>(), {
  disabled: false
})
//编辑器状态数据
const state = inject<Ref<StateType>>('state')!

//是否禁用
const isDisabled = computed(() => {
  if (!state.value.editor?.selection.focused()) {
    return true
  }
  if (!state.value.editor.commands.canUndo?.()) {
    return true
  }
  return props.disabled
})
//方法
const onOperate = () => {
  state.value.editor?.commands.undo?.()
}
</script>
