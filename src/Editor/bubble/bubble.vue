<template>
  <Teleport to="body">
    <Transition name="kaitify-bubble" @enter="updatePosition">
      <div v-if="visible" ref="elRef" class="kaitify-bubble" :style="{ zIndex: zIndex }">
        <slot></slot>
      </div>
    </Transition>
  </Teleport>
</template>
<script setup lang="ts">
import { ref, inject, watch, getCurrentInstance, onBeforeUnmount, ComputedRef } from "vue"
import { createPopper, Instance } from '@popperjs/core';
import { event as DapEvent } from "dap-util"
import { KNode } from "@kaitify/core";
import { BubblePropsType } from "./props";
import { StateType } from "../wrapper";
defineOptions({
  name: 'Bubble'
})
const instance = getCurrentInstance()!
//属性
const props = withDefaults(defineProps<BubblePropsType>(), {
  visible: false,
  zIndex: 5
})
//事件
const emits = defineEmits(['show', 'showing', 'shown', 'hide', 'hiding', 'hidden',])
//编辑器状态数据
const state = inject<ComputedRef<StateType>>('state')!
//popperjs实例
const popperInstance = ref<Instance | undefined>()
//气泡元素
const elRef = ref<HTMLElement | undefined>()

//获取编辑器内的光标位置
const getVirtualDomRect = () => {
  if (!state.value.editor) {
    return null
  }
  if (state.value.editor.selection.focused()) {
    let matchNode: KNode | null = null
    if (props.matches && props.matches.length) {
      for (let i = 0; i < props.matches.length; i++) {
        const node = state.value.editor.getMatchNodeBySelection(props.matches[i])
        if (node) {
          matchNode = node
          break
        }
      }
    }
    if (matchNode) {
      const matchDom = state.value.editor.findDom(matchNode)
      return matchDom.getBoundingClientRect()
    }
    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return state.value.editor.$el!.getBoundingClientRect();
    const range = selection.getRangeAt(0);
    const rects = range.getClientRects();
    if (rects.length) {
      const rect = rects[rects.length - 1]
      return {
        top: rect.top,
        left: rect.left,
        right: rect.left + rect.width,
        bottom: rect.top + rect.height,
        width: rect.width,
        height: rect.height,
        x: rect.left,
        y: rect.top,
        toJSON: () => { }
      } as DOMRect
    }
  }
  return state.value.editor!.$el!.getBoundingClientRect();
}
//更新气泡位置
const updatePosition = () => {
  if (!props.visible || !elRef.value || !state.value.editor) {
    return
  }
  const domRect = getVirtualDomRect()!
  //销毁当前popperjs实例
  if (popperInstance.value) {
    popperInstance.value.destroy()
    popperInstance.value = undefined
  }
  //重新创建popperjs实例
  popperInstance.value = createPopper({
    getBoundingClientRect: () => domRect
  }, elRef.value, {
    placement: 'bottom-start',
    modifiers: [
      //控制浮层的位置计算方式，包括使用 GPU 加速、是否启用自适应等
      {
        name: 'computeStyles',
        options: {
          adaptive: true,//启用自适应
          gpuAcceleration: false//关闭GPU加速
        }
      },
      //如果弹出框在预设的位置被页面边界或其他限制遮挡，popperjs会自动尝试翻转到其他位置。它会检查可用的视窗空间并自动调整位置，确保内容不会超出视窗或被遮挡。
      {
        name: 'flip',
        options: {
          enabled: true,
          fallbackPlacements: ['bottom', 'bottom-end', 'top-start', 'top', 'top-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']
        }
      },
      //控制offset为0
      {
        name: 'offset',
        options: {
          offset: [0, 5]
        }
      },
      //确保浮层不会超出指定的边界区域，通常用于当浮层过大或目标位置变化时自动修正浮层位置
      {
        name: 'preventOverflow',
        options: {
          enabled: true,
          boundary: 'viewport',
          padding: 5
        }
      }
    ],
  })
}
//滚动监听
const onScroll = (el: HTMLElement) => {
  DapEvent.on(el, `scroll.kaitify_bubble_${instance.uid}`, () => {
    if (props.visible) {
      updatePosition()
    }
  })
  if (el.parentNode) {
    onScroll(el.parentNode as HTMLElement)
  }
}
//移除滚动监听
const removeScroll = (el: HTMLElement) => {
  DapEvent.off(el, `scroll.kaitify_bubble_${instance.uid}`)
  if (el.parentNode) {
    removeScroll(el.parentNode as HTMLElement)
  }
}
//监听光标变化
watch(() => state.value.selection, () => {
  //更新气泡位置
  updatePosition()
}, {
  deep: true
})
//监听编辑器实例传入
watch(() => state.value.editor, newVal => {
  if (newVal) {
    //更新气泡位置
    updatePosition()
    //设置滚动监听
    onScroll(newVal.$el!)
  }
}, {
  immediate: true
})

onBeforeUnmount(() => {
  if (state.value.editor?.$el) {
    removeScroll(state.value.editor.$el)
  }
  if (popperInstance.value) {
    popperInstance.value.destroy()
  }
})

defineExpose({
  elRef,
  popperInstance
})

</script>
<style src="./style.less" scoped></style>