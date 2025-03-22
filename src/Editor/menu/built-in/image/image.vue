<template>
  <Menu ref="menuRef" :disabled="isDisabled" :active="isActive" popover
    :popover-props="{ width: popoverProps?.width ?? 300, maxHeight: popoverProps?.maxHeight, minWidth: popoverProps?.minWidth, animation: popoverProps?.animation, arrow: popoverProps?.arrow, placement: popoverProps?.placement, trigger: popoverProps?.trigger, zIndex: popoverProps?.zIndex }"
    @popover-show="menuShow">
    <Icon name="image" />
    <template #popover>
      <div v-if="isActive" class="kaitify-image-update">
        <input v-model.trim="updateData.alt" :placeholder="state.t('图片名称')" type="text" />
        <input v-model.trim="updateData.src" :placeholder="state.t('图片地址')" type="url" />
        <div class="kaitify-image-update-footer">
          <Button @click="update" :disabled="!updateData.src">{{ state.t('更新') }}</Button>
        </div>
      </div>
      <Tabs v-else :default-value="tabs.default" :data="tabData">
        <template #default="{ current }">
          <div v-if="current == 'upload'" class="kaitify-image-upload">
            <input type="file" accept="image/*" @change="fileChange" />
            <Icon name="upload" />
          </div>
          <div v-else-if="current == 'remote'" class="kaitify-image-remote">
            <input v-model.trim="remoteData.alt" :placeholder="state.t('图片名称')" type="text" />
            <input v-model.trim="remoteData.src" :placeholder="state.t('图片地址')" type="url" />
            <div class="kaitify-image-remote-footer">
              <Button @click="insert" :disabled="!remoteData.src">{{ state.t('插入') }}</Button>
            </div>
          </div>
        </template>
      </Tabs>
    </template>
  </Menu>
</template>
<script setup lang="ts">
import { computed, ComputedRef, inject, reactive, ref } from 'vue';
import { file as DapFile } from "dap-util"
import { SetImageOptionType, UpdateImageOptionType } from '@kaitify/core';
import { Icon } from '@/core/icon';
import { Tabs, TabsPropsType } from "@/core/tabs"
import { Button } from "@/core/button"
import { StateType } from '@/editor/wrapper';
import Menu from "@/editor/menu/menu.vue"
import { ImageMenuPropsType } from './props';

defineOptions({
  name: 'ImageMenu'
})
//属性
const props = withDefaults(defineProps<ImageMenuPropsType>(), {
  disabled: false,
  tabs: () => ({
    data: ['upload', 'remote'],
    default: 'upload'
  })
})
//编辑器状态数据
const state = inject<ComputedRef<StateType>>('state')
//组件没有放在Wrapper的插槽中会报错
if (!state) {
  throw new Error(`The component must be placed in the slot of the Wrapper.`)
}
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
//选项卡数据
const tabData = computed<TabsPropsType['data']>(() => {
  return props.tabs.data.map(item => {
    return [{
      label: state.value.t('本地上传'),
      value: 'upload'
    }, {
      label: state.value.t('远程地址'),
      value: 'remote'
    }].find(v => v.value == item)!
  })
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
  if (state.value.editor.commands.hasCodeBlock?.()) {
    return true
  }
  return props.disabled
})
//是否激活
const isActive = computed<boolean>(() => {
  return !!state.value.editor?.commands.getImage?.()
})

//浮层显示
const menuShow = () => {
  const imageNode = state.value.editor?.commands.getImage?.()
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
  if (!file || !state.value.editor) {
    return
  }
  const url = typeof props.customUpload == 'function' ? await props.customUpload(file) : await DapFile.dataFileToBase64(file)
  if (!url) {
    return
  }
  state.value.editor.commands.setImage?.({
    src: url,
    alt: file.name || state.value.t('图片'),
    width: typeof props.width == 'number' ? `${props.width}px` : props.width
  })
  menuRef.value?.hidePopover()
}
//插入远程图片
const insert = async () => {
  if (!remoteData.src || !state.value.editor) {
    return
  }
  state.value.editor.commands.setImage?.({
    src: remoteData.src,
    alt: remoteData.alt,
    width: typeof props.width == 'number' ? `${props.width}px` : props.width
  })
  menuRef.value?.hidePopover()
}
//更新图片
const update = async () => {
  if (!updateData.src || !state.value.editor) {
    return
  }
  state.value.editor.commands.updateImage?.({
    src: updateData.src,
    alt: updateData.alt
  })
  menuRef.value?.hidePopover()
}
</script>
<style src="./style.less" scoped></style>