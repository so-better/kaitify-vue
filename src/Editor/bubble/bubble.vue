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
import { ref, Ref, inject, watch, getCurrentInstance, onBeforeUnmount } from "vue"
import { createPopper, Instance } from '@popperjs/core';
import { event as DapEvent } from "dap-util"
import { Editor, KNode } from "@kaitify/core";
import { BubblePropsType } from "./props";
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
//编辑器实例
const editorRef = inject<Ref<Editor | undefined>>('editorRef')!
//编辑器光标更新key
const keyOfSelectionUpdate = inject<Ref<number>>('keyOfSelectionUpdate')!
//popperjs实例
const popperInstance = ref<Instance | undefined>()
//气泡元素
const elRef = ref<HTMLElement | undefined>()

//获取编辑器内的光标位置
const getVirtualDomRect = () => {
  if (keyOfSelectionUpdate.value > 0 && editorRef.value!.selection.focused()) {
    let matchNode: KNode | null = null
    if (props.matches && props.matches.length) {
      for (let i = 0; i < props.matches.length; i++) {
        const node = editorRef.value!.getMatchNodeBySelection(props.matches[i])
        if (node) {
          matchNode = node
          break
        }
      }
    }
    if (matchNode) {
      const matchDom = editorRef.value!.findDom(matchNode)
      return matchDom.getBoundingClientRect()
    }
    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return editorRef.value!.$el!.getBoundingClientRect();
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
  return editorRef.value!.$el!.getBoundingClientRect();
}
//更新气泡位置
const updatePosition = () => {
  if (!props.visible || !elRef.value || !editorRef.value) {
    return
  }
  const domRect = getVirtualDomRect()
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
watch(() => keyOfSelectionUpdate.value, () => {
  //更新气泡位置
  updatePosition()
})
//监听编辑器实例传入
watch(() => editorRef.value, newVal => {
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
  if (editorRef.value?.$el) {
    removeScroll(editorRef.value.$el)
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