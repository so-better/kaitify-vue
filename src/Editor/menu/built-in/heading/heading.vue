<template>
  <Menu ref="menuRef" :disabled="isDisabled" :active="false" popover :data="options" @select="onSelect"
    :item-active="item => isActive(item.value as HeadingLevelType)" :shortcut="shortcut"
    :popover-props="{ width: popoverProps?.width, maxHeight: popoverProps?.maxHeight ?? 240, minWidth: popoverProps?.minWidth ?? 120, animation: popoverProps?.animation, arrow: popoverProps?.arrow, placement: popoverProps?.placement, trigger: popoverProps?.trigger, zIndex: popoverProps?.zIndex }">
    {{ selectedData?.label ?? '' }}
    <template #label="{ option }">
      <span :style="{ fontSize: fontSizeMap[option.value as number] }">{{ option.label }}</span>
    </template>
  </Menu>
</template>
<script setup lang="ts">
import { computed, ComputedRef, inject, ref } from 'vue';
import { HeadingLevelType } from '@kaitify/core';
import { StateType } from '@/editor/wrapper';
import Menu from "@/editor/menu/menu.vue"
import { HeadingMenuPropsType } from './props';
import { MenuDataType } from '@/editor/menu/props';

defineOptions({
  name: 'HeadingMenu'
})
//属性
const props = withDefaults(defineProps<HeadingMenuPropsType>(), {
  disabled: false,
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
  const baseOptions = [
    {
      label: state.value.t('一级标题'),
      value: 1
    },
    {
      label: state.value.t('二级标题'),
      value: 2
    },
    {
      label: state.value.t('三级标题'),
      value: 3
    },
    {
      label: state.value.t('四级标题'),
      value: 4
    },
    {
      label: state.value.t('五级标题'),
      value: 5
    },
    {
      label: state.value.t('六级标题'),
      value: 6
    }
  ]
  return [...(props.data || baseOptions), {
    label: state.value.t('正文'),
    value: 0
  }]
})
//选项对应的字体大小
const fontSizeMap = computed<{ [key: number]: string }>(() => {
  return {
    0: '14px',
    1: '24px',
    2: '22px',
    3: '20px',
    4: '18px',
    5: '16px',
    6: '15px'
  }
})
//是否禁用
const isDisabled = computed<boolean>(() => {
  if (!state.value.editor?.selection.focused()) {
    return true
  }
  return props.disabled
})
//选项是否激活
const isActive = computed<(value: HeadingLevelType) => boolean>(() => {
  return value => {
    //正文处理
    if (value === 0) {
      if (isActive.value(1) || isActive.value(2) || isActive.value(3) || isActive.value(4) || isActive.value(5) || isActive.value(6)) {
        return false
      }
      return true
    }
    return state.value.editor?.commands.allHeading?.(value) ?? false
  }
})
//选择的值
const selectedData = computed<MenuDataType | undefined>(() => {
  return options.value.find(item => isActive.value(item.value as HeadingLevelType)) ?? options.value[options.value.length - 1]
})

//选择选项
const onSelect = (item: MenuDataType) => {
  if (!state.value.editor) {
    return
  }
  if (isActive.value(item.value as HeadingLevelType)) {
    state.value.editor.commands.unsetHeading?.(item.value as HeadingLevelType)
  } else {
    state.value.editor.commands.setHeading?.(item.value as HeadingLevelType)
  }
}
</script>