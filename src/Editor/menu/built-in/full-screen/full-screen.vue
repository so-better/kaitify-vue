<template>
  <Menu :disabled="isDisabled" :active="isActive" @operate="onOperate" :shortcut="shortcut">
    <Icon name="full-screen" />
  </Menu>
</template>
<script setup lang="ts">
import { computed, ComputedRef, inject, onBeforeUnmount, onMounted, ref } from 'vue'
import { Icon } from '@/core/icon'
import { StateType } from '@/editor/wrapper'
import Menu from '@/editor/menu/menu.vue'
import { FullScreenMenuPropsType } from './props'

defineOptions({
  name: 'FullScreenMenu'
})
//属性
const props = withDefaults(defineProps<FullScreenMenuPropsType>(), {
  disabled: false,
  zIndex: 100
})
//编辑器状态数据
const state = inject<ComputedRef<StateType>>('state')
//组件没有放在Wrapper的插槽中会报错
if (!state) {
  throw new Error(`The component must be placed in the slot of the Wrapper.`)
}

//绑定的全屏dom
const targetDom = ref<HTMLElement | null>(null)

//是否全屏
const isFullScreen = ref<boolean>(false)

//是否激活
const isActive = computed<boolean>(() => {
  return !!targetDom.value && isFullScreen.value
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
    if (targetDom.value) {
      targetDom.value.style.setProperty('position', '')
      targetDom.value.style.setProperty('left', '')
      targetDom.value.style.setProperty('top', '')
      targetDom.value.style.setProperty('z-index', '')
      targetDom.value.style.setProperty('width', '')
      targetDom.value.style.setProperty('height', '')
      isFullScreen.value = false
    }
  } else {
    if (targetDom.value) {
      targetDom.value.style.setProperty('position', 'fixed', 'important')
      targetDom.value.style.setProperty('left', '0px', 'important')
      targetDom.value.style.setProperty('top', '0px', 'important')
      targetDom.value.style.setProperty('z-index', `${props.zIndex}`, 'important')
      targetDom.value.style.setProperty('width', '100vw', 'important')
      targetDom.value.style.setProperty('height', '100vh', 'important')
      isFullScreen.value = true
    }
  }
}

onMounted(() => {
  targetDom.value = document.body.querySelector(props.target)
})

onBeforeUnmount(() => {
  targetDom.value = null
})
</script>
