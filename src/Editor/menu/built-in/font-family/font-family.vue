<template>
  <Menu ref="menuRef" :disabled="isDisabled" :active="false" popover :data="options" @select="onSelect"
    :item-active="item => isActive(item)" :shortcut="shortcut"
    :popover-props="{ width: popoverProps?.width, maxHeight: popoverProps?.maxHeight ?? 240, minWidth: popoverProps?.minWidth ?? 90, animation: popoverProps?.animation, arrow: popoverProps?.arrow, placement: popoverProps?.placement, trigger: popoverProps?.trigger, zIndex: popoverProps?.zIndex }">
    {{ selectedData?.label ?? '' }}
  </Menu>
</template>
<script setup lang="ts">
import { computed, ComputedRef, inject, ref } from 'vue';
import { StateType } from '@/editor/wrapper';
import Menu from "@/editor/menu/menu.vue"
import { FontFamilyMenuPropsType } from './props';
import { MenuDataType } from '@/editor/menu/props';

defineOptions({
  name: 'FontFamilyMenu'
})
//属性
const props = withDefaults(defineProps<FontFamilyMenuPropsType>(), {
  disabled: false,
  data: () => [
    {
      label: '黑体',
      value: '黑体,黑体-简'
    },
    {
      label: '华文仿宋',
      value: '华文仿宋'
    },
    {
      label: '楷体',
      value: '楷体,楷体-简'
    },
    {
      label: '华文楷体',
      value: '华文楷体'
    },
    {
      label: '宋体',
      value: '宋体,宋体-简'
    },
    {
      label: 'Arial',
      value: 'Arial'
    },
    {
      label: 'Consolas',
      value: 'Consolas,monospace'
    }]
})
//编辑器状态数据
const state = inject<ComputedRef<StateType>>('state')
//组件没有放在Wrapper的插槽中会报错
if (!state) {
  throw new Error(`The component must be placed in the slot of the Wrapper.`)
}
//菜单组件实例
const menuRef = ref<(typeof Menu) | undefined>()
//选项
const options = computed<MenuDataType[]>(() => {
  return [{
    label: state.value.t('默认字体'),
    value: ''
  }, ...(props.data || [])]
})
//是否禁用
const isDisabled = computed<boolean>(() => {
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
//选项是否激活
const isActive = computed<(item: MenuDataType) => boolean>(() => {
  return item => {
    return state.value.editor?.commands.isFontFamily?.(item.value as string) ?? false
  }
})
//选择的值
const selectedData = computed<MenuDataType | undefined>(() => {
  return props.data.find(item => isActive.value(item)) ?? options.value[0]
})

//选择选项
const onSelect = (item: MenuDataType) => {
  if (!state.value.editor) {
    return
  }
  if (item.value == '') {
    state.value.editor.commands.removeTextStyle?.(['fontFamily'])
  } else if (isActive.value(item)) {
    state.value.editor.updateRealSelection()
  } else {
    state.value.editor.commands.setFontFamily?.(item.value as string)
  }
}
</script>