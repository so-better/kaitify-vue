<template>
  <Menu ref="menuRef" :disabled="isDisabled" :active="isActive" popover
    :popover-options="{ width: popoverOptions?.width ?? 300, maxHeight: popoverOptions?.maxHeight, minWidth: popoverOptions?.minWidth, animation: popoverOptions?.animation, arrow: popoverOptions?.arrow, placement: popoverOptions?.placement, trigger: popoverOptions?.trigger, zIndex: popoverOptions?.zIndex }"
    @popover-show="menuShow">
    <Icon name="attachment" />
    <template v-slot:popover>
      <div v-if="isActive" class="kaitify-attachment-update">
        <input v-model.trim="updateData.text" :placeholder="t('附件名称')" type="text" />
        <input v-model.trim="updateData.url" :placeholder="t('附件地址')" type="url" />
        <div class="kaitify-attachment-update-footer">
          <Button @click="update" :disabled="!updateData.url || !updateData.text">{{ t('更新') }}</Button>
        </div>
      </div>
      <Tabs v-else :names="[t('本地上传'), t('远程地址')]">
        <template v-slot="{ index }">
          <div v-if="index == 0" class="kaitify-attachment-upload">
            <input type="file" accept="*" @change="fileChange" />
            <Icon name="upload" />
          </div>
          <div v-else class="kaitify-attachment-remote">
            <input v-model.trim="remoteData.text" :placeholder="t('附件名称')" type="text" />
            <input v-model.trim="remoteData.url" :placeholder="t('附件地址')" type="url" />
            <div class="kaitify-attachment-remote-footer">
              <Button @click="insert" :disabled="!remoteData.url || !remoteData.text">{{ t('插入') }}</Button>
            </div>
          </div>
        </template>
      </Tabs>
    </template>
  </Menu>
</template>
<script setup lang="ts">
import { computed, ComputedRef, inject, reactive, ref, Ref } from 'vue';
import { file as DapFile } from "dap-util"
import { Editor, SetAttachmentOptionType, UpdateAttachmentOptionType } from '@kaitify/core';
import { Icon } from '@/core/icon';
import { Tabs } from "@/core/tabs"
import { Button } from "@/core/button"
import { StateType } from '@/editor/wrapper';
import Menu from "@/editor/menu/menu.vue"
import { AttachmentMenuPropsType } from './props';

defineOptions({
  name: 'AttachmentMenu'
})
//属性
const props = withDefaults(defineProps<AttachmentMenuPropsType>(), {
  disabled: false
})
//编辑器实例
const editor = inject<Ref<Editor | undefined>>('editor')
//组件没有放在Wrapper的插槽中会报错
if (!editor) {
  throw new Error(`The component must be placed in the slot of the Wrapper.`)
}
//编辑器状态数据
const state = inject<ComputedRef<StateType>>('state')!
//翻译方法
const t = inject<(key: string) => string>('t')!
//菜单组件实例
const menuRef = ref<(typeof Menu) | undefined>()
//远程附件数据
const remoteData = reactive<Omit<SetAttachmentOptionType, 'icon'>>({
  url: '',
  text: ''
})
//更新附件数据
const updateData = reactive<UpdateAttachmentOptionType>({
  url: '',
  text: '',
})
//是否激活
const isActive = computed<boolean>(() => {
  return state.value.selection.focused() && !!editor.value?.commands.getAttachment?.()
})
//是否禁用
const isDisabled = computed<boolean>(() => {
  if (!editor.value || !state.value.selection.focused()) {
    return true
  }
  if (editor.value.commands.hasMath?.()) {
    return true
  }
  if (editor.value.commands.hasCodeBlock?.()) {
    return true
  }
  if (editor.value.commands.hasLink?.()) {
    return true
  }
  if (editor.value.commands.hasAttachment?.() && !isActive.value) {
    return true
  }
  return props.disabled
})

//浮层显示
const menuShow = () => {
  const info = editor.value?.commands.getAttachmentInfo?.()
  if (info) {
    updateData.text = info.text
    updateData.url = info.url
  } else {
    remoteData.text = ''
    remoteData.url = ''
  }
}
//选择本地文件
const fileChange = async (e: Event) => {
  const file = (e.currentTarget as HTMLInputElement).files?.[0]
  if (!file || !editor.value) {
    return
  }
  const url = typeof props.customUpload == 'function' ? await props.customUpload(file) : await DapFile.dataFileToBase64(file)
  if (!url) {
    return
  }
  editor.value.commands.setAttachment?.({
    url: url,
    text: file.name || t('附件'),
    icon: props.iconUrl
  })
  menuRef.value?.hidePopover()
}
//插入远程附件
const insert = async () => {
  if (!remoteData.url || !remoteData.text || !editor.value) {
    return
  }
  editor.value.commands.setAttachment?.({
    url: remoteData.url,
    text: remoteData.text,
    icon: props.iconUrl
  })
  menuRef.value?.hidePopover()
}
//更新远程附件
const update = async () => {
  if (!updateData.url || !updateData.text || !editor.value) {
    return
  }
  editor.value.commands.updateAttachment?.({
    url: updateData.url,
    text: updateData.text
  })
  menuRef.value?.hidePopover()
}
</script>
<style src="./style.less" scoped></style>