<template>
  <Menu :disabled="isDisabled" :active="isActive" @operate="onOperate">
    <Icon name="list-ordered" />
  </Menu>
</template>
<script setup lang="ts">
import { computed, inject, Ref } from 'vue';
import { Editor } from '@kaitify/core';
import { Icon } from '@/core/icon';
import Menu from "@/editor/menu/menu.vue"
import { OrderedListMenuPropsType } from './props';

defineOptions({
  name: 'OrderedListMenu'
})
//属性
const props = withDefaults(defineProps<OrderedListMenuPropsType>(), {
  disabled: false
})
//编辑器实例
const editorRef = inject<Ref<Editor | undefined>>('editorRef')

//组件没有放在Wrapper的插槽中会报错
if (!editorRef) {
  throw new Error(`The component must be placed in the slot of the Wrapper.`)
}

//是否激活
const isActive = computed<boolean>(() => {
  return editorRef.value?.commands.allList?.(true) || false
})
//是否禁用
const isDisabled = computed<boolean>(() => {
  if (!editorRef.value || !editorRef.value.selection.focused()) {
    return true
  }
  return props.disabled
})
//方法
const onOperate = () => {
  if (isActive.value) {
    editorRef.value?.commands.unsetList?.(true)
  } else {
    editorRef.value?.commands.setList?.(true)
  }
}
</script>