<template>
  <div class="kaitify-menu">
    <Popover ref="popoverRef" :delay="100" :disabled="!popover" :zIndex="10" :animation="popoverOptions.animation"
      :arrow="popoverOptions.arrow" :placement="popoverOptions.placement" :trigger="popoverOptions.trigger"
      :width="popoverOptions.width">
      <template #refer>
        <Button @click="onOperate" :disabled="disabled" :active="active">
          <slot></slot>
          <Icon v-if="popover" value="caret-down" class="kaitify-menu-caret"
            :class="{ 'kaitify-menu-caret-rotate': popoverVisible }" />
        </Button>
      </template>
      <!-- 自定义浮层内容 -->
      <slot v-if="$slots.popover" name="popover"></slot>
      <!-- 可选浮层内容 -->
      <div v-else-if="data.length" class="kaitify-menu-options">
        <div @click="onSelect(item)" v-for="item in data" :disabled="item.disabled || undefined"
          class="kaitify-menu-option" :class="{ 'kaitify-menu-option-active': item.active }">{{
            item.label }}</div>
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
const emits = defineEmits(['operate', 'select'])
//popover组件实例
const popoverRef = ref<(typeof Popover) | null>(null)
//popover浮层是否显示
const popoverVisible = computed<boolean>(() => {
  if (popoverRef.value) {
    return popoverRef.value.visible
  }
  return false
})
//浮层选项数据点击
const onSelect = (item: MenuDataType) => {
  if (props.disabled || item.disabled) {
    return
  }
  emits('select', { ...item })
  popoverRef.value?.hidePopover()
}
//按钮点击
const onOperate = () => {
  if (props.disabled || props.popover) {
    return
  }
  emits('operate')
}
</script>
<style src="./style.less" scoped></style>