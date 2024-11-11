<template>
  <div ref="referRef" class="kaitify-popover-refer" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave"
    @click="handleClick">
    <slot name="refer"></slot>
  </div>
  <Teleport to="body">
    <Transition :name="`kaitify-popover-${animation}`" @before-enter="onShow" @enter="onShowing" @after-enter="onShown"
      @before-leave="onHide" @leave="onHidding" @after-leave="onHidden">
      <div ref="popoverRef" class="kaitify-popover" :data-arrow="arrow" v-show="visible" @mouseleave="handleMouseLeave"
        :data-placement="realPlacement" :style="{ zIndex: zIndex }">
        <!-- 主体 -->
        <div class="kaitify-popover-wrapper" :style="{ width: popoverWidth }">
          <slot></slot>
          <!-- arrow -->
          <div v-if="arrow" ref="arrowRef" class="kaitify-popover-arrow" :data-placement="realPlacement"></div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
<script lang="ts" setup>
import { createPopper, Instance } from '@popperjs/core';
import { computed, getCurrentInstance, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { event as DapEvent } from "dap-util"
import { PopoverPropsType, PopoverPlacementType } from './props';

defineOptions({
  name: 'Popover'
})
const instance = getCurrentInstance()!
//属性
const props = withDefaults(defineProps<PopoverPropsType>(), {
  block: false,
  placement: 'bottom',
  arrow: false,
  trigger: 'hover',
  animation: 'translate',
  zIndex: 10,
  delay: 0,
  disabled: false
})
//事件
const emits = defineEmits(['show', 'showing', 'shown', 'hide', 'hidding', 'hidden'])
//是否显示
const visible = ref<boolean>(false)
//目标元素
const referRef = ref<HTMLElement | null>(null)
//三角形元素
const arrowRef = ref<HTMLElement | null>(null)
//浮层元素
const popoverRef = ref<HTMLElement | null>(null)
//popperjs实例
const popperInstance = ref<Instance | null>(null)
//浮层宽度
const popoverWidth = computed<string>(() => {
  if (props.width) {
    return typeof props.width == 'number' ? `${props.width}px` : props.width
  }
  return 'auto'
})
//浮层真实位置
const realPlacement = ref<PopoverPlacementType>(props.placement)
//浮层剩余位置
const popoverRemainingPlacements = computed<PopoverPlacementType[]>(() => {
  if (props.placement.startsWith('top')) {
    return (['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'] as PopoverPlacementType[]).filter(item => item != props.placement)
  }
  if (props.placement.startsWith('bottom')) {
    return (['bottom', 'bottom-start', 'bottom-end', 'top', 'top-start', 'top-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'] as PopoverPlacementType[]).filter(item => item != props.placement)
  }
  if (props.placement.startsWith('left')) {
    return (['left', 'left-start', 'left-end', 'right', 'right-start', 'right-end', 'top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end'] as PopoverPlacementType[]).filter(item => item != props.placement)
  }
  return (['right', 'right-start', 'right-end', 'left', 'left-start', 'left-end', 'top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end'] as PopoverPlacementType[]).filter(item => item != props.placement)
})

//更新浮层位置
const update = async () => {
  if (popperInstance.value) {
    await popperInstance.value.update()
    realPlacement.value = popperInstance.value.state.placement
  }
}
//显示浮层
const showPopover = () => {
  if (props.disabled) {
    return
  }
  //延迟显示
  if (props.delay > 0) {
    setTimeout(() => {
      visible.value = true
    }, props.delay);
    return
  }
  //正常显示
  visible.value = true
}
//隐藏浮层
const hidePopover = () => {
  if (props.disabled) {
    return
  }
  visible.value = false
}

//浮层显示前
const onShow = (el: Element) => {
  update()
  emits('show', el)
}
//浮层显示时
const onShowing = (el: Element) => {
  emits('showing', el)
}
//浮层显示后
const onShown = (el: Element) => {
  emits('shown', el)
}
//浮层隐藏前
const onHide = (el: Element) => {
  emits('hide', el)
}
//浮层隐藏时
const onHidding = (el: Element) => {
  emits('hidding', el)
}
//浮层隐藏后
const onHidden = (el: Element) => {
  emits('hidden', el)
}
//鼠标移入
const handleMouseEnter = () => {
  if (props.trigger != 'hover') {
    return
  }
  showPopover()
}
//鼠标移出
const handleMouseLeave = (e: MouseEvent) => {
  if (props.trigger != 'hover') {
    return
  }
  //移出到目标元素里
  if (referRef.value?.contains(e.relatedTarget as HTMLElement)) {
    return
  }
  //移出到浮层元素里
  if (popoverRef.value?.contains(e.relatedTarget as HTMLElement)) {
    return
  }
  hidePopover()
}
//点击
const handleClick = () => {
  if (props.trigger != 'click') {
    return
  }
  if (visible.value) hidePopover()
  else showPopover()
}
//点击其他地方关闭浮层
DapEvent.on(document.documentElement, `click.kaitify-popover-${instance.uid}`, e => {
  //点击目标元素
  if (referRef.value?.contains(e.target as HTMLElement)) {
    return
  }
  //点击浮层元素
  if (popoverRef.value?.contains(e.target as HTMLElement)) {
    return
  }
  //关闭浮层
  hidePopover()
})
//监听外部改变placement，更新poperjs对象
watch(() => props.placement, (newVal) => {
  //更新realPlacement的值
  realPlacement.value = newVal
  if (popperInstance.value && visible.value) {
    popperInstance.value.state.options.placement = realPlacement.value
    popperInstance.value.state.options.modifiers.find(mod => mod.name === 'flip').options.fallbackPlacements = popoverRemainingPlacements.value
    update()
  }
})
onMounted(() => {
  if (referRef.value && popoverRef.value) {
    popperInstance.value = createPopper(referRef.value!, popoverRef.value!, {
      placement: props.placement,
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
            fallbackPlacements: popoverRemainingPlacements.value
          }
        },
        //控制offset为0
        {
          name: 'offset',
          options: {
            offset: [0, 0]
          }
        },
        //设置箭头元素的位置，使其始终指向目标元素
        {
          name: 'arrow',
          options: {
            element: arrowRef.value!,
          }
        },
        //确保浮层不会超出指定的边界区域，通常用于当浮层过大或目标位置变化时自动修正浮层位置
        {
          name: 'preventOverflow',
          options: {
            enabled: true,
            boundariesElement: 'viewport'
          }
        }
      ],
    })
  }
})
onBeforeUnmount(() => {
  if (popperInstance.value) {
    popperInstance.value.destroy()
  }
  DapEvent.off(document.documentElement, `click.kaitify-popover-${instance.uid}`)
})

defineExpose({
  visible,
  showPopover,
  hidePopover,
  popperInstance,
  update,
  realPlacement
})
</script>
<style src="./style.less" scoped></style>