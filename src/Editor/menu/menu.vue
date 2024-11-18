<template>
  <div class="kaitify-menu">
    <Popover ref="popoverRef" :delay="100" :disabled="!popover" :zIndex="10"
      :animation="popoverOptions.animation ?? 'translate'" :arrow="popoverOptions.arrow"
      :placement="popoverOptions.placement ?? 'bottom-start'" :trigger="popoverOptions.trigger ?? 'click'"
      :width="popoverOptions.width" :maxHeight="popoverOptions.maxHeight" :minWidth="popoverOptions.minWidth"
      @show="emits('popoverShow', $event)" @showing="emits('popoverShowing', $event)"
      @shown="emits('popoverShown', $event)" @hide="emits('popoverHide', $event)"
      @hidding="emits('popoverHidding', $event)" @hidden="emits('popoverHidden', $event)">
      <template v-slot:refer>
        <Button @click="onOperate" :disabled="disabled" :active="active">
          <slot></slot>
          <Icon v-if="popover" name="caret-down" class="kaitify-menu-caret"
            :class="{ 'kaitify-menu-caret-rotate': popoverVisible }" />
        </Button>
      </template>
      <!-- 自定义浮层内容 -->
      <slot v-if="$slots.popover" name="popover"></slot>
      <!-- 可选浮层内容 -->
      <div v-else-if="data.length" class="kaitify-menu-options">
        <div @click="onSelect(item)" v-for="item in data" :disabled="itemDisabled?.(item) ?? undefined"
          class="kaitify-menu-option" :class="{ 'kaitify-menu-option-active': itemActive?.(item) || false }">
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
import { computed, ref } from "vue";
import { Popover } from "@/core/popover"
import { Icon } from "@/core/icon"
import { Button } from "@/core/button"
import { MenuDataType, MenuPropsType } from './props';

defineOptions({
  name: 'Menu'
})
//属性
const props = withDefaults(defineProps<MenuPropsType>(), {
  disabled: false,
  active: false,
  popover: false,
  popoverOptions: () => {
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
const emits = defineEmits(['operate', 'select', 'popoverShow', 'popoverShowing', 'popoverShown', 'popoverHide', 'popoverHidding', 'popoverHidden'])
//popover组件实例
const popoverRef = ref<(typeof Popover) | undefined>()
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

defineExpose({
  showPopover,
  hidePopover
})
</script>
<style src="./style.less" scoped></style>