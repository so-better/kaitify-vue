<template>
  <Menu ref="menuRef" :disabled="isDisabled" :active="false" popover :popover-props="{ width: popoverProps?.width, maxHeight: popoverProps?.maxHeight, minWidth: popoverProps?.minWidth, animation: popoverProps?.animation, arrow: popoverProps?.arrow, placement: popoverProps?.placement, trigger: popoverProps?.trigger, zIndex: popoverProps?.zIndex }">
    <Icon name="kaitify-icon-font-color" />
    <template #popover>
      <div class="kaitify-colors-panel" :class="{ 'kaitify-dark': dark }">
        <div class="kaitify-colors-header">
          <Button @click="unsetColor" block large>
            <Icon name="kaitify-icon-remove" />
            <span class="kaitify-colors-header-text">{{ t('默认颜色') }}</span>
          </Button>
        </div>
        <div class="kaitify-colors-content">
          <div v-for="item in colors" class="kaitify-colors-el" :class="{ 'kaitify-color-el-active': isActive(item) }">
            <div :style="{ background: item }" @click="setColor(item)"></div>
          </div>
        </div>
      </div>
    </template>
  </Menu>
</template>
<script setup lang="ts">
import { computed, inject, Ref, ref } from 'vue'
import { Icon } from '@/core/icon'
import { Button } from '@/core/button'
import { StateType } from '@/editor/wrapper'
import Menu from '@/editor/menu/menu.vue'
import { ColorMenuPropsType } from './props'

defineOptions({
  name: 'ColorMenu'
})
//属性
const props = withDefaults(defineProps<ColorMenuPropsType>(), {
  disabled: false,
  colors: () => ['#000000', '#505050', '#808080', '#BBBBBB', '#CCCCCC', '#EEEEEE', '#F7F7F7', '#FFFFFF', '#EC1A0A', '#FF9900', '#FFFF00', '#07C160', '#00FFFF', '#0B73DE', '#9C00FF', '#FF00FF', '#F7C6CE', '#FFE7CE', '#FFEFC6', '#D6EFD6', '#CEDEE7', '#CEE7F7', '#D6D6E7', '#E7D6DE', '#E79C9C', '#FFC69C', '#FFE79C', '#B5D6A5', '#A5C6CE', '#9CC6EF', '#B5A5D6', '#D6A5BD', '#e45649', '#F7AD6B', '#FFD663', '#94BD7B', '#73A5AD', '#6BADDE', '#8C7BC6', '#C67BA5', '#CE0000', '#E79439', '#EFC631', '#50a14f', '#4A7B8C', '#03A8F3', '#634AA5', '#A54A7B', '#9C0000', '#B56308', '#BD9400', '#397B21', '#104A5A', '#085294', '#311873', '#731842', '#630000', '#7B3900', '#986801', '#295218', '#083139', '#003163', '#21104A', '#4A1031']
})
//是否深色模式
const dark = inject<Ref<boolean>>('dark')!
//编辑器状态数据
const state = inject<Ref<StateType>>('state')!
//翻译函数
const t = inject<(key: string) => string>('t')!

//菜单组件实例
const menuRef = ref<typeof Menu>()
//是否禁用
const isDisabled = computed(() => {
  if (!state.value.editor?.selection.focused()) {
    return true
  }
  if (!state.value.editor.selection.collapsed() && !state.value.editor.getFocusNodesBySelection('text').length) {
    return true
  }
  if (state.value.editor.selection.collapsed() && (!!state.value.editor.commands.getAttachment?.() || !!state.value.editor.commands.getMath?.())) {
    return true
  }
  if (!!state.value.editor.commands.getCodeBlock?.()) {
    return true
  }
  return props.disabled
})
//颜色是否激活
const isActive = computed<(item: string) => boolean>(() => {
  return item => {
    return state.value.editor?.commands.isColor?.(item) ?? false
  }
})

//设置颜色
const setColor = (val: string) => {
  if (isActive.value(val)) {
    return
  }
  state.value.editor?.commands.setColor?.(val)
  menuRef.value?.hidePopover()
}
//移除颜色
const unsetColor = () => {
  state.value.editor?.commands.removeTextStyle?.(['color'])
  menuRef.value?.hidePopover()
}
</script>
<style src="./style.less" scoped></style>
