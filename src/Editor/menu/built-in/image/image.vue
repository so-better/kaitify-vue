<template>
  <Menu ref="menuRef" :disabled="isDisabled" :active="isActive" popover
    :popover-options="{ width: popoverOptions?.width ?? 300, maxHeight: popoverOptions?.maxHeight, minWidth: popoverOptions?.minWidth, animation: popoverOptions?.animation, arrow: popoverOptions?.arrow, placement: popoverOptions?.placement, trigger: popoverOptions?.trigger, zIndex: popoverOptions?.zIndex }"
    @popover-show="menuShow">
    <Icon name="image" />
    <template v-slot:popover>
      <div v-if="isActive" class="kaitify-image-update">
        <input v-model.trim="updateData.alt" :placeholder="t('图片名称')" type="text" />
        <input v-model.trim="updateData.src" :placeholder="t('图片地址')" type="url" />
        <div class="kaitify-image-update-footer">
          <Button @click="update" :disabled="!updateData.src">{{ t('更新') }}</Button>
        </div>
      </div>
      <Tabs v-else :names="[t('本地上传'), t('远程地址')]">
        <template v-slot="{ index }">
          <div v-if="index == 0" class="kaitify-image-upload">
            <input type="file" accept="image/*" @change="fileChange" />
            <Icon name="upload" />
          </div>
          <div v-else class="kaitify-image-remote">
            <input v-model.trim="remoteData.alt" :placeholder="t('图片名称')" type="text" />
            <input v-model.trim="remoteData.src" :placeholder="t('图片地址')" type="url" />
            <div class="kaitify-image-remote-footer">
              <Button @click="insert" :disabled="!remoteData.src">{{ t('插入') }}</Button>
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
import { Editor, SetImageOptionType, UpdateImageOptionType } from '@kaitify/core';
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
//远程图片数据
const remoteData = reactive<Omit<SetImageOptionType, 'width'>>({
  src: '',
  alt: ''
})
//更新图片数据
const updateData = reactive<UpdateImageOptionType>({
  src: '',
  alt: ''
})
//是否禁用
const isDisabled = computed<boolean>(() => {
  if (!keyOfSelectionUpdate.value || !editor.value || !editor.value.selection.focused()) {
    return true
  }
  if (editor.value.commands.hasAttachment?.() || editor.value.commands.hasMath?.()) {
    return true
  }
  if (editor.value.commands.hasCodeBlock?.()) {
    return true
  }
  return props.disabled
})
//是否激活
const isActive = computed<boolean>(() => {
  return (keyOfSelectionUpdate.value > 0 && !!editor.value?.commands.getImage?.())
})

//浮层显示
const menuShow = () => {
  const imageNode = editor.value?.commands.getImage?.()
  if (imageNode) {
    updateData.src = imageNode.marks!.src as string
    updateData.alt = (imageNode.marks!.alt as string) || ''
  } else {
    remoteData.src = ''
    remoteData.alt = ''
  }
}
//选择本地图片
const fileChange = async (e: Event) => {
  const file = (e.currentTarget as HTMLInputElement).files?.[0]
  if (!file || !editor.value) {
    return
  }
  const url = typeof props.customUpload == 'function' ? await props.customUpload(file) : await DapFile.dataFileToBase64(file)
  if (!url) {
    return
  }
  editor.value.commands.setImage?.({
    src: url,
    alt: file.name || t('图片'),
    width: typeof props.width == 'number' ? `${props.width}px` : props.width
  })
  menuRef.value?.hidePopover()
}
//插入远程图片
const insert = async () => {
  if (!remoteData.src || !editor.value) {
    return
  }
  editor.value.commands.setImage?.({
    src: remoteData.src,
    alt: remoteData.alt,
    width: typeof props.width == 'number' ? `${props.width}px` : props.width
  })
  menuRef.value?.hidePopover()
}
//更新图片
const update = async () => {
  if (!updateData.src || !editor.value) {
    return
  }
  editor.value.commands.updateImage?.({
    src: updateData.src,
    alt: updateData.alt
  })
  menuRef.value?.hidePopover()
}
</script>
<style src="./style.less" scoped></style>