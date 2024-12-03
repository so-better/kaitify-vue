<template>
  <Menu ref="menuRef" :disabled="isDisabled" :active="false" popover :data="options" @select="onSelect"
    :item-active="item => isActive(item)" :shortcut="shortcut"
    :popover-props="{ width: popoverProps?.width, maxHeight: popoverProps?.maxHeight ?? 240, minWidth: popoverProps?.minWidth ?? 80, animation: popoverProps?.animation, arrow: popoverProps?.arrow, placement: popoverProps?.placement, trigger: popoverProps?.trigger, zIndex: popoverProps?.zIndex }">
    {{ selectedData?.label ?? '' }}
  </Menu>
</template>
<script setup lang="ts">
import { computed, ComputedRef, inject, ref } from 'vue';
import { HljsLanguageType, HljsLanguages } from '@kaitify/core';
import { StateType } from '@/editor/wrapper';
import Menu from "@/editor/menu/menu.vue"
import { CodeBlockLanguagesMenuPropsType } from './props';
import { MenuDataType } from '@/editor/menu/props';

defineOptions({
  name: 'CodeBlockLanguagesMenu'
})
//属性
const props = withDefaults(defineProps<CodeBlockLanguagesMenuPropsType>(), {
  disabled: false,
  languages: () => [...HljsLanguages]
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
    label: state.value.t('自动识别'),
    value: ''
  }, ...(props.languages.map(item => {
    return {
      label: item.charAt(0).toLocaleUpperCase() + item.slice(1),
      value: item
    }
  }))]
})
//是否禁用
const isDisabled = computed<boolean>(() => {
  if (!state.value.editor?.selection.focused()) {
    return true
  }
  if (!state.value.editor.commands.getCodeBlock?.()) {
    return true
  }
  return props.disabled
})
//选项是否激活
const isActive = computed<(item: MenuDataType) => boolean>(() => {
  return item => {
    if (!state.value.editor?.selection.focused()) {
      return false
    }
    const codeBlockNode = state.value.editor.commands.getCodeBlock?.()
    if (!codeBlockNode) {
      return false
    }
    if (item.value == '') {
      return !codeBlockNode.hasMarks() || !codeBlockNode.marks!['kaitify-hljs']
    }
    return codeBlockNode.marks!['kaitify-hljs'] === item.value
  }
})
//选择的值
const selectedData = computed<MenuDataType | undefined>(() => {
  if (!state.value.editor?.selection.focused()) {
    return options.value[0]
  }
  return options.value.find(item => isActive.value(item)) ?? options.value[0]
})

//选择选项
const onSelect = (item: MenuDataType) => {
  if (!state.value.editor) {
    return
  }
  state.value.editor.commands.updateCodeBlockLanguage?.(item.value as HljsLanguageType)
}
</script>