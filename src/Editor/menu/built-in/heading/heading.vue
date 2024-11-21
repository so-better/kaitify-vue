<template>
  <Menu ref="menuRef" :disabled="isDisabled" :active="false" popover :data="options" @select="onSelect"
    :item-active="item => isActive(item)" :shortcut="shortcut"
    :popover-options="{ width: popoverOptions?.width, maxHeight: popoverOptions?.maxHeight ?? 240, minWidth: popoverOptions?.minWidth ?? 120, animation: popoverOptions?.animation, arrow: popoverOptions?.arrow, placement: popoverOptions?.placement, trigger: popoverOptions?.trigger, zIndex: popoverOptions?.zIndex }">
    {{ selectedData?.label || '' }}
    <template v-slot:label="{ option }">
      <span :style="{ fontSize: fontSizeMap[option.value as number] }">{{ option.label }}</span>
    </template>
  </Menu>
</template>
<script setup lang="ts">
import { computed, inject, ref, Ref } from 'vue';
import { Editor, HeadingLevelType } from '@kaitify/core';
import Menu from "@/editor/menu/menu.vue"
import { HeadingMenuPropsType } from './props';
import { MenuDataType } from '../../props';

defineOptions({
  name: 'HeadingMenu'
})
//属性
const props = withDefaults(defineProps<HeadingMenuPropsType>(), {
  disabled: false,
  data: () => [
    {
      label: '一级标题',
      value: 1
    },
    {
      label: '二级标题',
      value: 2
    },
    {
      label: '三级标题',
      value: 3
    },
    {
      label: '四级标题',
      value: 4
    },
    {
      label: '五级标题',
      value: 5
    },
    {
      label: '六级标题',
      value: 6
    }
  ]
})
//编辑器实例
const editorRef = inject<Ref<Editor | undefined>>('editorRef')
//组件没有放在Wrapper的插槽中会报错
if (!editorRef) {
  throw new Error(`The component must be placed in the slot of the Wrapper.`)
}
//编辑器光标更新key
const keyOfSelectionUpdate = inject<Ref<number>>('keyOfSelectionUpdate')!
//翻译方法
const t = inject<(key: string) => string>('t')!
//菜单组件实例
const menuRef = ref<(typeof Menu) | undefined>()
//选项
const options = computed<MenuDataType[]>(() => {
  return [...(props.data || []), {
    label: t('正文'),
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
  if (!keyOfSelectionUpdate.value || !editorRef.value || !editorRef.value.selection.focused()) {
    return true
  }
  return props.disabled
})
//选项是否激活
const isActive = computed<(item: MenuDataType) => boolean>(() => {
  return item => {
    return (keyOfSelectionUpdate.value > 0 && editorRef.value?.commands.allHeading?.(item.value as HeadingLevelType)) ?? false
  }
})
//选择的值
const selectedData = computed<MenuDataType | undefined>(() => {
  return props.data.find(item => isActive.value(item)) ?? options.value[options.value.length - 1]
})

//选择选项
const onSelect = (item: MenuDataType) => {
  if (!editorRef.value) {
    return
  }
  if (isActive.value(item)) {
    editorRef.value.updateRealSelection()
  } else {
    editorRef.value.commands.setHeading?.(item.value as HeadingLevelType)
  }
}
</script>