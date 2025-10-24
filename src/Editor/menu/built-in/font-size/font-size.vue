<template>
  <Menu ref="menuRef" :disabled="isDisabled" :active="false" popover :data="options" @select="onSelect" :item-active="item => isActive(item)" :shortcut="shortcut" :popover-props="{ width: popoverProps?.width, maxHeight: popoverProps?.maxHeight ?? 240, minWidth: popoverProps?.minWidth ?? 80, animation: popoverProps?.animation, arrow: popoverProps?.arrow, placement: popoverProps?.placement, trigger: popoverProps?.trigger, zIndex: popoverProps?.zIndex }">
    {{ selectedData.label ?? '' }}
  </Menu>
</template>
<script setup lang="ts">
import { computed, ComputedRef, inject, ref } from 'vue'
import { StateType } from '@/editor/wrapper'
import Menu from '@/editor/menu/menu.vue'
import { MenuDataType } from '@/editor/menu/props'
import { FontSizeMenuPropsType } from './props'

defineOptions({
  name: 'FontSizeMenu'
})
//属性
const props = withDefaults(defineProps<FontSizeMenuPropsType>(), {
  disabled: false
})
//编辑器状态数据
const state = inject<ComputedRef<StateType>>('state')!
//翻译函数
const t = inject<(key: string) => string>('t')!

//菜单组件实例
const menuRef = ref<typeof Menu | null>(null)
//选项
const options = computed<MenuDataType[]>(() => {
  const baseOptions = [
    {
      label: '12px',
      value: '12px'
    },
    {
      label: '14px',
      value: '14px'
    },
    {
      label: '16px',
      value: '16px'
    },
    {
      label: '18px',
      value: '18px'
    },
    {
      label: '20px',
      value: '20px'
    },
    {
      label: '24px',
      value: '24px'
    },
    {
      label: '28px',
      value: '28px'
    },
    {
      label: '32px',
      value: '32px'
    },
    {
      label: '36px',
      value: '36px'
    },
    {
      label: '40px',
      value: '40px'
    }
  ]
  return [
    {
      label: t('默认字号'),
      value: ''
    },
    ...(props.data || baseOptions)
  ]
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
    return state.value.editor?.commands.isFontSize?.(item.value as string) ?? false
  }
})
//选择的值
const selectedData = computed<MenuDataType>(() => {
  return options.value.find(item => isActive.value(item)) ?? options.value[0]
})

//选择选项
const onSelect = (item: MenuDataType) => {
  if (item.value == '') {
    state.value.editor?.commands.removeTextStyle?.(['fontSize'])
  } else if (isActive.value(item)) {
    state.value.editor?.updateRealSelection()
  } else {
    state.value.editor?.commands.setFontSize?.(item.value as string)
  }
}
</script>
