<template>
  <div class="kaitify-menu">
    <Popover ref="popoverRef" :delay="100" :disabled="disabled || !popover" :zIndex="popoverProps.zIndex ?? 10" :animation="popoverProps.animation ?? 'translate'" :arrow="popoverProps.arrow" :placement="popoverProps.placement ?? 'bottom-start'" :trigger="popoverProps.trigger ?? 'click'" :width="popoverProps.width" :maxHeight="popoverProps.maxHeight" :minWidth="popoverProps.minWidth" @show="emits('popoverShow', $event)" @showing="emits('popoverShowing', $event)" @shown="emits('popoverShown', $event)" @hide="emits('popoverHide', $event)" @hiding="emits('popoverHiding', $event)" @hidden="emits('popoverHidden', $event)">
      <template #refer>
        <Button @click="onOperate" :disabled="disabled" :active="active">
          <slot></slot>
          <Icon v-if="popover" name="kaitify-icon-caret-down" class="kaitify-menu-caret" :class="{ 'kaitify-menu-caret-rotate': popoverVisible }" />
        </Button>
      </template>
      <!-- 自定义浮层内容 -->
      <slot v-if="$slots.popover" name="popover"></slot>
      <!-- 可选浮层内容 -->
      <div v-else-if="data.length" class="kaitify-menu-options">
        <div @click="onSelect(item)" v-for="item in data" :disabled="itemDisabled?.(item) ?? undefined" class="kaitify-menu-option" :class="{ 'kaitify-menu-option-active': itemActive?.(item) || false }">
          <slot v-if="$slots.icon" name="icon" :option="item"></slot>
          <Icon v-else-if="item.icon" :name="item.icon" class="kaitify-menu-option-icon" />
          <slot v-if="$slots.label" name="label" :option="item"></slot>
          <span v-else>{{ item.label }}</span>
        </div>
      </div>
    </Popover>
  </div>
</template>
<script setup lang="ts">
import { computed, ComputedRef, getCurrentInstance, inject, onBeforeUnmount, Ref, ref, watch } from 'vue'
import { event as DapEvent, common as DapCommon } from 'dap-util'
import { Popover } from '@/core/popover'
import { Icon } from '@/core/icon'
import { Button } from '@/core/button'
import { StateType } from '../wrapper'
import { MenuDataType, MenuEmitsType, MenuPropsType } from './props'

defineOptions({
  name: 'Menu'
})
const instance = getCurrentInstance()!
//属性
const props = withDefaults(defineProps<MenuPropsType>(), {
  disabled: false,
  active: false,
  popover: false,
  popoverProps: () => {
    return {
      width: 'auto',
      placement: 'bottom-start',
      arrow: false,
      trigger: 'click',
      animation: 'translate'
    }
  },
  data: () => []
})
//事件
const emits = defineEmits<MenuEmitsType>()
//编辑器状态数据
const state = inject<ComputedRef<StateType>>('state')
const wrapperRef = inject<Ref<HTMLElement | null>>('elRef')!
//组件没有放在Wrapper的插槽中会报错
if (!state) {
  throw new Error(`The component must be placed in the slot of the Wrapper.`)
}
//popover组件实例
const popoverRef = ref<typeof Popover | null>(null)
//popover浮层是否显示
const popoverVisible = computed<boolean>(() => {
  if (popoverRef.value) {
    return popoverRef.value.visible
  }
  return false
})

//关闭浮层
const hidePopover = () => {
  popoverRef.value?.hidePopover()
}
//显示浮层
const showPopover = () => {
  popoverRef.value?.showPopover()
}
//浮层选项数据点击
const onSelect = (item: MenuDataType) => {
  if (props.disabled || props.itemDisabled?.(item)) {
    return
  }
  emits('select', { ...item })
  hidePopover()
}
//按钮点击
const onOperate = () => {
  if (props.disabled || props.popover) {
    return
  }
  emits('operate')
}

//设置快捷键
watch(
  () => wrapperRef.value,
  newVal => {
    if (newVal && props.shortcut) {
      DapEvent.off(newVal, `keydown.kaitify_menu_${instance.uid}`)
      DapEvent.on(newVal, `keydown.kaitify_menu_${instance.uid}`, e => {
        //popover的菜单
        if (props.popover && DapCommon.isObject(props.shortcut)) {
          const shortcut = props.shortcut as { [key: MenuDataType['value']]: (e: KeyboardEvent) => boolean }
          props.data.forEach(item => {
            if (typeof shortcut[item.value] == 'function') {
              if (shortcut[item.value](e as KeyboardEvent)) {
                onSelect(item)
              }
            }
          })
        } else if (typeof props.shortcut == 'function') {
          if (props.shortcut(e as KeyboardEvent)) {
            onOperate()
          }
        }
      })
    }
  },
  {
    immediate: true
  }
)

onBeforeUnmount(() => {
  if (wrapperRef.value) {
    DapEvent.off(wrapperRef.value, `keydown.kaitify_menu_${instance.uid}`)
  }
})

defineExpose({
  showPopover,
  hidePopover
})
</script>
<style src="./style.less" scoped></style>
