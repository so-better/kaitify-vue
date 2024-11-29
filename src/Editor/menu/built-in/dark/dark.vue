<template>
  <Menu :disabled="isDisabled" :active="false" @operate="onOperate" :shortcut="shortcut">
    <Icon name="theme-light-dark" />
  </Menu>
</template>
<script setup lang="ts">
import { computed, inject, Ref } from 'vue';
import { Editor } from '@kaitify/core';
import { Icon } from '@/core/icon';
import Menu from "@/editor/menu/menu.vue"
import { DarkMenuPropsType } from './props';

defineOptions({
  name: 'DarkMenu'
})
//属性
const props = withDefaults(defineProps<DarkMenuPropsType>(), {
  disabled: false
})
//编辑器实例
const editor = inject<Ref<Editor | undefined>>('editor')
//组件没有放在Wrapper的插槽中会报错
if (!editor) {
  throw new Error(`The component must be placed in the slot of the Wrapper.`)
}
//是否禁用
const isDisabled = computed<boolean>(() => {
  if (!editor.value) {
    return true
  }
  return props.disabled
})
//方法
const onOperate = () => {
  if (!editor.value) {
    return
  }
  editor.value.setDark(!editor.value.isDark())
}
</script>