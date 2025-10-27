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
      <div v-else-if="data.length" class="kaitify-menu-options" :kaitify-dark="dark || undefined">
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
import { computed, getCurrentInstance, inject, onBeforeUnmount, Ref, ref, watch } from 'vue'
import { event as DapEvent, common as DapCommon } from 'dap-util'
import { Popover } from '@/core/popover'
import { Icon } from '@/core/icon'
import { Button } from '@/core/button'
import { MenuDataType, MenuEmitsType, MenuPropsType } from './props'
import { StateType } from '../wrapper'

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
//是否深色模式
const dark = inject<Ref<boolean>>('dark')!
//编辑器状态数据
const state = inject<Ref<StateType>>('state')!
//dom
const wrapperRef = inject<Ref<HTMLElement | undefined>>('elRef')!
//popover组件实例
const popoverRef = ref<typeof Popover>()
//popover浮层是否显示
const popoverVisible = computed(() => {
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
  //wrapperRef.value可能是null，需要从editor.$el取值
  if (wrapperRef.value || state.value.editor?.$el) {
    DapEvent.off(wrapperRef.value || state.value.editor!.$el!, `keydown.kaitify_menu_${instance.uid}`)
  }
})

defineExpose({
  showPopover,
  hidePopover
})
</script>
<style src="./style.less" scoped></style>
