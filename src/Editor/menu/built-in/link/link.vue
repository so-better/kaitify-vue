<template>
  <Menu ref="menuRef" :disabled="isDisabled" :active="false" popover :popover-options="{ width: 300 }">
    <Icon name="link" />
    <template v-slot:popover>
      <div class="kaitify-link">
        <input v-if="editorRef?.selection.collapsed()" v-model.trim="formData.text" :placeholder="t('链接文字')"
          type="text" />
        <input v-model.trim="formData.href" :placeholder="t('链接地址')" type="url" />
        <div class="kaitify-link-footer">
          <Checkbox v-model="formData.newOpen" :label="t('新窗口打开')" />
          <Button @click="insert" :disabled="!formData.href || (editorRef?.selection.collapsed() && !formData.text)">{{
            t('插入') }}</Button>
        </div>
      </div>
    </template>
  </Menu>
</template>
<script setup lang="ts">
import { computed, inject, reactive, ref, Ref } from 'vue';
import { Editor, SetLinkOptionType } from '@kaitify/core';
import { Icon } from '@/core/icon';
import { Button } from "@/core/button"
import Menu from "@/editor/menu/menu.vue"
import { LinkMenuPropsType } from './props';
import { Checkbox } from '@/core/checkbox';

defineOptions({
  name: 'LinkMenu'
})
//属性
const props = withDefaults(defineProps<LinkMenuPropsType>(), {
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
//链接数据
const formData = reactive<SetLinkOptionType>({
  href: '',
  text: '',
  newOpen: false
})
//是否禁用
const isDisabled = computed<boolean>(() => {
  if (!keyOfSelectionUpdate.value || !editorRef.value || !editorRef.value.selection.focused()) {
    return true
  }
  if (editorRef.value.commands.hasLink?.()) {
    return true
  }
  return props.disabled
})

//插入链接
const insert = async () => {
  if (!formData.href || !editorRef.value) {
    return
  }
  if (editorRef.value.selection.collapsed()) {
    if (!formData.text) {
      return
    }
    editorRef.value.commands.setLink?.({
      href: formData.href,
      text: formData.text,
      newOpen: formData.newOpen
    })
  } else {
    editorRef.value.commands.setLink?.({
      href: formData.href,
      newOpen: formData.newOpen
    })
  }
  menuRef.value?.hidePopover()
}
</script>
<style src="./style.less" scoped></style>