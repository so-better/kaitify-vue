<template>
  <Menu :disabled="isDisabled" :active="isActive" @operate="onOperate" :shortcut="shortcut">
    <Icon name="loop" />
  </Menu>
</template>
<script setup lang="ts">
import { computed, ComputedRef, inject, Ref } from 'vue';
import { Editor } from '@kaitify/core';
import { Icon } from '@/core/icon';
import { StateType } from '@/editor/wrapper';
import Menu from "@/editor/menu/menu.vue"
import { VideoLoopMenuPropsType } from './props';

defineOptions({
  name: 'VideoLoopMenu'
})
//属性
const props = withDefaults(defineProps<VideoLoopMenuPropsType>(), {
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
  if (!state.value.selection) {
    return false
  }
  const videoNode = editor.value?.commands.getVideo?.()
  if (!videoNode) {
    return false
  }
  return videoNode.hasMarks() && videoNode.marks!.hasOwnProperty('loop')
})
//是否禁用
const isDisabled = computed<boolean>(() => {
  if (!state.value.selection || !editor.value || !editor.value.selection.focused()) {
    return true
  }
  if (!editor.value.commands.getVideo?.()) {
    return true
  }
  return props.disabled
})
//方法
const onOperate = () => {
  if (isActive.value) {
    editor.value?.commands.updateVideo?.({
      loop: false
    })
  } else {
    editor.value?.commands.updateVideo?.({
      loop: true
    })
  }
}
</script>