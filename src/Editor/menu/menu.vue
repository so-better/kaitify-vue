<template>
  <div class="kaitify-menu">
    <Popover ref="popoverRef" :delay="100" :disabled="!popover" :zIndex="popoverOptions.zIndex ?? 10"
      :animation="popoverOptions.animation ?? 'translate'" :arrow="popoverOptions.arrow"
      :placement="popoverOptions.placement ?? 'bottom-start'" :trigger="popoverOptions.trigger ?? 'click'"
      :width="popoverOptions.width" :maxHeight="popoverOptions.maxHeight" :minWidth="popoverOptions.minWidth"
      @show="emits('popoverShow', $event)" @showing="emits('popoverShowing', $event)"
      @shown="emits('popoverShown', $event)" @hide="emits('popoverHide', $event)"
      @hiding="emits('popoverHiding', $event)" @hidden="emits('popoverHidden', $event)">
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
import { computed, getCurrentInstance, inject, onBeforeUnmount, Ref, ref, watch } from "vue";
import { event as DapEvent, common as DapCommon } from "dap-util"
import { Editor } from "@kaitify/core";
import { Popover } from "@/core/popover"
import { Icon } from "@/core/icon"
import { Button } from "@/core/button"
import { MenuDataType, MenuPropsType } from './props';

defineOptions({
  name: 'Menu'
})
const instance = getCurrentInstance()!
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
const emits = defineEmits(['operate', 'select', 'popoverShow', 'popoverShowing', 'popoverShown', 'popoverHide', 'popoverHiding', 'popoverHidden'])
//编辑器实例
const editorRef = inject<Ref<Editor | undefined>>('editorRef')
//组件没有放在Wrapper的插槽中会报错
if (!editorRef) {
  throw new Error(`The component must be placed in the slot of the Wrapper.`)
}
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

//设置快捷键
watch(() => editorRef.value, newVal => {
  if (newVal && props.shortcut) {
    DapEvent.off(newVal.$el!, `keydown.kaitify_menu_${instance.uid}`)
    DapEvent.on(newVal.$el!, `keydown.kaitify_menu_${instance.uid}`, e => {
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
}, {
  immediate: true
})

onBeforeUnmount(() => {
  if (editorRef.value) {
    DapEvent.off(editorRef.value.$el!, `keydown.kaitify_menu_${instance.uid}`)
  }
})

defineExpose({
  showPopover,
  hidePopover
})
</script>
<style src="./style.less" scoped></style>