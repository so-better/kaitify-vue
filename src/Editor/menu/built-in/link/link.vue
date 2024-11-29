<template>
  <Menu ref="menuRef" :disabled="isDisabled" :active="isActive" popover
    :popover-options="{ width: popoverOptions?.width ?? 300, maxHeight: popoverOptions?.maxHeight, minWidth: popoverOptions?.minWidth, animation: popoverOptions?.animation, arrow: popoverOptions?.arrow, placement: popoverOptions?.placement, trigger: popoverOptions?.trigger, zIndex: popoverOptions?.zIndex }"
    @popover-show="menuShow">
    <Icon name="link" />
    <template v-slot:popover>
      <div class="kaitify-link">
        <!-- 修改链接 -->
        <template v-if="isActive">
          <input v-model.trim="updateData.href" :placeholder="t('链接地址')" type="url" />
          <div class="kaitify-link-footer">
            <Checkbox v-model="updateData.newOpen" :label="t('新窗口打开')" />
            <Button @click="update" :disabled="!updateData.href">{{
              t('更新') }}</Button>
          </div>
        </template>
        <!-- 插入链接 -->
        <template v-else>
          <input v-if="editor?.selection.collapsed()" v-model.trim="formData.text" :placeholder="t('链接文字')"
            type="text" />
          <input v-model.trim="formData.href" :placeholder="t('链接地址')" type="url" />
          <div class="kaitify-link-footer">
            <Checkbox v-model="formData.newOpen" :label="t('新窗口打开')" />
            <Button @click="insert" :disabled="!formData.href || (editor?.selection.collapsed() && !formData.text)">{{
              t('插入') }}</Button>
          </div>
        </template>
      </div>
    </template>
  </Menu>
</template>
<script setup lang="ts">
import { computed, inject, reactive, ref, Ref } from 'vue';
import { Editor, SetLinkOptionType, UpdateLinkOptionType } from '@kaitify/core';
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
const editor = inject<Ref<Editor | undefined>>('editor')
//组件没有放在Wrapper的插槽中会报错
if (!editor) {
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
//更新链接数据
const updateData = reactive<UpdateLinkOptionType>({
  href: '',
  newOpen: false
})
//是否激活
const isActive = computed<boolean>(() => {
  return keyOfSelectionUpdate.value > 0 && !!editor.value?.commands.getLink?.()
})
//是否禁用
const isDisabled = computed<boolean>(() => {
  if (!keyOfSelectionUpdate.value || !editor.value || !editor.value.selection.focused()) {
    return true
  }
  if (editor.value.commands.hasAttachment?.() || editor.value.commands.hasMath?.()) {
    return true
  }
  if (editor.value.commands.hasLink?.() && !isActive.value) {
    return true
  }
  if (editor.value.commands.hasCodeBlock?.()) {
    return true
  }
  return props.disabled
})

//浮层显示
const menuShow = () => {
  const linkNode = editor.value?.commands.getLink?.()
  if (linkNode) {
    updateData.href = linkNode.marks!.href as string
    updateData.newOpen = linkNode.marks!.target == '_blank'
  } else {
    formData.href = ''
    formData.text = ''
    formData.newOpen = false
  }
}
//插入链接
const insert = async () => {
  if (!formData.href || !editor.value) {
    return
  }
  if (editor.value.selection.collapsed()) {
    if (!formData.text) {
      return
    }
    editor.value.commands.setLink?.({
      href: formData.href,
      text: formData.text,
      newOpen: formData.newOpen
    })
  } else {
    editor.value.commands.setLink?.({
      href: formData.href,
      newOpen: formData.newOpen
    })
  }
  menuRef.value?.hidePopover()
}
//更新链接
const update = async () => {
  if (!updateData.href || !editor.value) {
    return
  }
  editor.value.commands.updateLink?.({
    href: updateData.href,
    newOpen: updateData.newOpen
  })
  menuRef.value?.hidePopover()
}
</script>
<style src="./style.less" scoped></style>