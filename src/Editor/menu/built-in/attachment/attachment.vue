<template>
  <Menu ref="menuRef" :disabled="isDisabled" :active="false" popover :popover-options="{ width: 280 }">
    <Icon name="attachment" />
    <template v-slot:popover>
      <Tabs :names="['本地上传', '远程地址']">
        <template v-slot="{ index }">
          <div v-if="index == 0" class="kaitify-attachment-upload">
            <input type="file" accept="*" @change="fileChange" />
            <Icon name="upload" />
          </div>
          <div v-else>
            远程地址
          </div>
        </template>
      </Tabs>
    </template>
  </Menu>
</template>
<script setup lang="ts">
import { computed, inject, ref, Ref } from 'vue';
import { file as DapFile } from "dap-util"
import { Editor } from '@kaitify/core';
import { Icon } from '@/core/icon';
import { Tabs } from "@/core/tabs"
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
const editorRef = inject<Ref<Editor | undefined>>('editorRef')
//菜单组件实例
const menuRef = ref<(typeof Menu) | undefined>()

//组件没有放在Wrapper的插槽中会报错
if (!editorRef) {
  throw new Error(`The component must be placed in the slot of the Wrapper.`)
}

//是否禁用
const isDisabled = computed<boolean>(() => {
  if (!editorRef.value || !editorRef.value.selection.focused()) {
    return true
  }
  return props.disabled
})

//选择文件
const fileChange = async (e: Event) => {
  const file = (e.currentTarget as HTMLInputElement).files?.[0]
  if (!file || !editorRef.value) {
    return
  }
  const url = typeof props.uploadFile == 'function' ? await props.uploadFile(file) : await DapFile.dataFileToBase64(file)
  if (!url) {
    return
  }
  editorRef.value.commands.setAttachment?.({
    url: url,
    text: file.name || '附件',
    icon: props.iconUrl
  })
  menuRef.value?.hidePopover()
}
</script>
<style src="./style.less" scoped></style>