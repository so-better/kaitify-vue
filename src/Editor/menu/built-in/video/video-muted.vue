<template>
  <Menu :disabled="isDisabled" :active="isActive" @operate="onOperate" :shortcut="shortcut">
    <Icon name="kaitify-icon-muted" />
  </Menu>
</template>
<script setup lang="ts">
import { computed, inject, Ref } from 'vue'
import { Icon } from '@/core/icon'
import { StateType } from '@/editor/wrapper'
import Menu from '@/editor/menu/menu.vue'
import { VideoMutedMenuPropsType } from './props'

defineOptions({
  name: 'VideoMutedMenu'
})
//属性
const props = withDefaults(defineProps<VideoMutedMenuPropsType>(), {
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
  return videoNode.hasMarks() && videoNode.marks!.hasOwnProperty('muted')
})
//是否禁用
const isDisabled = computed(() => {
  if (!state.value.editor?.selection.focused()) {
    return true
  }
  if (!state.value.editor.commands.getVideo?.()) {
    return true
  }
  return props.disabled
})
//方法
const onOperate = () => {
  if (isActive.value) {
    state.value.editor?.commands.updateVideo?.({
      muted: false
    })
  } else {
    state.value.editor?.commands.updateVideo?.({
      muted: true
    })
  }
}
</script>
