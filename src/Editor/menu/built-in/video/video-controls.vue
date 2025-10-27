<template>
  <Menu :disabled="isDisabled" :active="isActive" @operate="onOperate" :shortcut="shortcut">
    <Icon name="kaitify-icon-controls" />
  </Menu>
</template>
<script setup lang="ts">
import { computed, inject, Ref } from 'vue'
import { Icon } from '@/core/icon'
import { StateType } from '@/editor/wrapper'
import Menu from '@/editor/menu/menu.vue'
import { VideoControlsMenuPropsType } from './props'

defineOptions({
  name: 'VideoControlsMenu'
})
//属性
const props = withDefaults(defineProps<VideoControlsMenuPropsType>(), {
  disabled: false
})
//编辑器状态数据
const state = inject<Ref<StateType>>('state')!

//是否激活
const isActive = computed(() => {
  const videoNode = state.value.editor?.commands.getVideo?.()
  if (!videoNode) {
    return false
  }
  return videoNode.hasMarks() && videoNode.marks!.hasOwnProperty('controls')
})
//是否禁用
const isDisabled = computed(() => {
  if (!state.value.editor?.commands.getVideo?.()) {
    return true
  }
  return props.disabled
})
//方法
const onOperate = () => {
  if (isActive.value) {
    state.value.editor?.commands.updateVideo?.({
      controls: false
    })
  } else {
    state.value.editor?.commands.updateVideo?.({
      controls: true
    })
  }
}
</script>
