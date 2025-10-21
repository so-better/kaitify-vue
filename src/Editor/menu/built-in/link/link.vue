<template>
  <Menu ref="menuRef" :disabled="isDisabled" :active="isActive" popover :popover-props="{ width: popoverProps?.width ?? 300, maxHeight: popoverProps?.maxHeight, minWidth: popoverProps?.minWidth, animation: popoverProps?.animation, arrow: popoverProps?.arrow, placement: popoverProps?.placement, trigger: popoverProps?.trigger, zIndex: popoverProps?.zIndex }" @popover-show="menuShow">
    <Icon name="kaitify-icon-link" />
    <template #popover>
      <div class="kaitify-link">
        <!-- 修改链接 -->
        <template v-if="isActive">
          <input v-model.trim="updateData.href" :placeholder="t('链接地址')" type="url" />
          <div class="kaitify-link-footer">
            <Checkbox v-model="updateData.newOpen" :label="t('新窗口打开')" />
            <Button @click="update" :disabled="!updateData.href">{{ t('更新') }}</Button>
          </div>
        </template>
        <!-- 插入链接 -->
        <template v-else>
          <input v-if="state.editor?.selection.collapsed()" v-model.trim="formData.text" :placeholder="t('链接文字')" type="text" />
          <input v-model.trim="formData.href" :placeholder="t('链接地址')" type="url" />
          <div class="kaitify-link-footer">
            <Checkbox v-model="formData.newOpen" :label="t('新窗口打开')" />
            <Button @click="insert" :disabled="!formData.href || (state.editor?.selection.collapsed() && !formData.text)">{{ t('插入') }}</Button>
          </div>
        </template>
      </div>
    </template>
  </Menu>
</template>
<script setup lang="ts">
import { computed, ComputedRef, inject, reactive, ref } from 'vue'
import { SetLinkOptionType, UpdateLinkOptionType } from '@kaitify/core'
import { Icon } from '@/core/icon'
import { Button } from '@/core/button'
import { StateType } from '@/editor/wrapper'
import Menu from '@/editor/menu/menu.vue'
import { LinkMenuPropsType } from './props'
import { Checkbox } from '@/core/checkbox'

defineOptions({
  name: 'LinkMenu'
})
//属性
const props = withDefaults(defineProps<LinkMenuPropsType>(), {
  disabled: false
})
//编辑器状态数据
const state = inject<ComputedRef<StateType>>('state')!
//翻译函数
const t = inject<(key: string) => string>('t')!

//菜单组件实例
const menuRef = ref<typeof Menu | undefined>()
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
  return !!state.value.editor?.commands.getLink?.()
})
//是否禁用
const isDisabled = computed<boolean>(() => {
  if (!state.value.editor?.selection.focused()) {
    return true
  }
  if (state.value.editor.commands.hasAttachment?.()) {
    return true
  }
  if (state.value.editor.commands.hasMath?.()) {
    return true
  }
  if (state.value.editor.commands.hasLink?.() && !isActive.value) {
    return true
  }
  if (state.value.editor.commands.hasCodeBlock?.()) {
    return true
  }
  return props.disabled
})

//浮层显示
const menuShow = () => {
  const linkNode = state.value.editor?.commands.getLink?.()
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
  if (!formData.href || !state.value.editor) {
    return
  }
  if (state.value.editor.selection.collapsed()) {
    if (!formData.text) {
      return
    }
    state.value.editor.commands.setLink?.({
      href: formData.href,
      text: formData.text,
      newOpen: formData.newOpen
    })
  } else {
    state.value.editor.commands.setLink?.({
      href: formData.href,
      newOpen: formData.newOpen
    })
  }
  menuRef.value?.hidePopover()
}
//更新链接
const update = async () => {
  if (!updateData.href || !state.value.editor) {
    return
  }
  state.value.editor.commands.updateLink?.({
    href: updateData.href,
    newOpen: updateData.newOpen
  })
  menuRef.value?.hidePopover()
}
</script>
<style src="./style.less" scoped></style>
