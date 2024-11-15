<template>
  <Menu ref="menuRef" :disabled="isDisabled" :active="false" popover :popover-options="{ width: 300 }">
    <Icon name="image" />
    <template v-slot:popover>
      <Tabs :names="['本地上传', '远程地址']">
        <template v-slot="{ index }">
          <div v-if="index == 0" class="kaitify-image-upload">
            <input type="file" accept="image/*" @change="fileChange" />
            <Icon name="upload" />
          </div>
          <div v-else class="kaitify-image-remote">
            <input v-model.trim="remoteData.alt" placeholder="图片名称" type="text" />
            <input v-model.trim="remoteData.src" placeholder="图片地址" type="url" />
            <div class="kaitify-image-remote-footer">
              <Button @click="insert" :disabled="!remoteData.src || !remoteData.alt">插入</Button>
            </div>
          </div>
        </template>
      </Tabs>
    </template>
  </Menu>
</template>
<script setup lang="ts">
import { computed, inject, reactive, ref, Ref } from 'vue';
import { file as DapFile } from "dap-util"
import { Editor, SetImageOptionType } from '@kaitify/core';
import { Icon } from '@/core/icon';
import { Tabs } from "@/core/tabs"
import { Button } from "@/core/button"
import Menu from "@/editor/menu/menu.vue"
import { ImageMenuPropsType } from './props';

defineOptions({
  name: 'ImageMenu'
})
//属性
const props = withDefaults(defineProps<ImageMenuPropsType>(), {
  disabled: false
})
//编辑器实例
const editorRef = inject<Ref<Editor | undefined>>('editorRef')
//菜单组件实例
const menuRef = ref<(typeof Menu) | undefined>()
//远程附件数据
const remoteData = reactive<Omit<SetImageOptionType, 'icon'>>({
  src: '',
  alt: ''
})

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

//选择本地图片
const fileChange = async (e: Event) => {
  const file = (e.currentTarget as HTMLInputElement).files?.[0]
  if (!file || !editorRef.value) {
    return
  }
  const url = typeof props.uploadImage == 'function' ? await props.uploadImage(file) : await DapFile.dataFileToBase64(file)
  if (!url) {
    return
  }
  editorRef.value.commands.setImage?.({
    src: url,
    alt: file.name || '图片',
    width: typeof props.width == 'number' ? `${props.width}px` : props.width
  })
  menuRef.value?.hidePopover()
}
//插入远程图片
const insert = async () => {
  if (!remoteData.src || !remoteData.alt || !editorRef.value) {
    return
  }
  editorRef.value.commands.setImage?.({
    src: remoteData.src,
    alt: remoteData.alt,
    width: typeof props.width == 'number' ? `${props.width}px` : props.width
  })
  menuRef.value?.hidePopover()
}
</script>
<style src="./style.less" scoped></style>