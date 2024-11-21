<template>
  <Menu ref="menuRef" :disabled="isDisabled" :active="false" popover :data="options" @select="onSelect"
    :item-active="item => isActive(item)" :shortcut="shortcut"
    :popover-options="{ width: popoverOptions?.width, maxHeight: popoverOptions?.maxHeight ?? 240, minWidth: popoverOptions?.minWidth ?? 80, animation: popoverOptions?.animation, arrow: popoverOptions?.arrow, placement: popoverOptions?.placement, trigger: popoverOptions?.trigger, zIndex: popoverOptions?.zIndex }">
    {{ selectedData?.label || '' }}
  </Menu>
</template>
<script setup lang="ts">
import { computed, inject, ref, Ref } from 'vue';
import { Editor, HljsLanguageType, HljsLanguages } from '@kaitify/core';
import Menu from "@/editor/menu/menu.vue"
import { CodeBlockLanguagesMenuPropsType } from './props';
import { MenuDataType } from '../../props';

defineOptions({
  name: 'CodeBlockLanguagesMenu'
})
//属性
const props = withDefaults(defineProps<CodeBlockLanguagesMenuPropsType>(), {
  disabled: false
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
  return [{
    label: t('自动识别'),
    value: ''
  }, ...([...HljsLanguages].map(item => {
    return {
      label: item.charAt(0).toLocaleUpperCase() + item.slice(1),
      value: item
    }
  }))]
})
//是否禁用
const isDisabled = computed<boolean>(() => {
  if (!keyOfSelectionUpdate.value || !editorRef.value || !editorRef.value.selection.focused()) {
    return true
  }
  if (!editorRef.value.commands.getCodeBlock?.()) {
    return true
  }
  return props.disabled
})
//选项是否激活
const isActive = computed<(item: MenuDataType) => boolean>(() => {
  return item => {
    if (!keyOfSelectionUpdate.value || !editorRef.value) {
      return false
    }
    const codeBlockNode = editorRef.value.commands.getCodeBlock?.()
    return !!codeBlockNode && codeBlockNode.marks!['kaitify-hljs'] === item.value
  }
})
//选择的值
const selectedData = computed<MenuDataType | undefined>(() => {
  if (!keyOfSelectionUpdate.value || !editorRef.value) {
    return options.value[0]
  }
  return options.value.find(item => isActive.value(item)) ?? options.value[0]
})

//选择选项
const onSelect = (item: MenuDataType) => {
  if (!editorRef.value) {
    return
  }
  editorRef.value.commands.updateCodeBlockLanguage?.(item.value as HljsLanguageType)
}
</script>