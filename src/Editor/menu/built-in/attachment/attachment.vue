<template>
  <Menu ref="menuRef" :disabled="isDisabled" :active="isActive" popover
    :popover-props="{ width: popoverProps?.width ?? 300, maxHeight: popoverProps?.maxHeight, minWidth: popoverProps?.minWidth, animation: popoverProps?.animation, arrow: popoverProps?.arrow, placement: popoverProps?.placement, trigger: popoverProps?.trigger, zIndex: popoverProps?.zIndex }"
    @popover-show="menuShow">
    <Icon name="attachment" />
    <template #popover>
      <div v-if="isActive" class="kaitify-attachment-update">
        <input v-model.trim="updateData.text" :placeholder="state.t('附件名称')" type="text" />
        <input v-model.trim="updateData.url" :placeholder="state.t('附件地址')" type="url" />
        <div class="kaitify-attachment-update-footer">
          <Button @click="update" :disabled="!updateData.url || !updateData.text">{{ state.t('更新') }}</Button>
        </div>
      </div>
      <Tabs v-else :default-value="tabs.default" :data="tabData">
        <template #default="{ current }">
          <div v-if="current == 'upload'" class="kaitify-attachment-upload">
            <input type="file" accept="*" @change="fileChange" />
            <Icon name="upload" />
          </div>
          <div v-else-if="current == 'remote'" class="kaitify-attachment-remote">
            <input v-model.trim="remoteData.text" :placeholder="state.t('附件名称')" type="text" />
            <input v-model.trim="remoteData.url" :placeholder="state.t('附件地址')" type="url" />
            <div class="kaitify-attachment-remote-footer">
              <Button @click="insert" :disabled="!remoteData.url || !remoteData.text">{{ state.t('插入') }}</Button>
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
import { SetAttachmentOptionType, UpdateAttachmentOptionType } from '@kaitify/core';
import { Icon } from '@/core/icon';
import { Tabs, TabsPropsType } from "@/core/tabs"
import { Button } from "@/core/button"
import { StateType } from '@/editor/wrapper';
import Menu from "@/editor/menu/menu.vue"
import { AttachmentMenuPropsType } from './props';

defineOptions({
  name: 'AttachmentMenu'
})
//属性
const props = withDefaults(defineProps<AttachmentMenuPropsType>(), {
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
//是否激活
const isActive = computed<boolean>(() => {
  return !!state.value.editor?.commands.getAttachment?.()
})
//是否禁用
const isDisabled = computed<boolean>(() => {
  if (!state.value.editor?.selection.focused()) {
    return true
  }
  if (state.value.editor.commands.hasMath?.()) {
    return true
  }
  if (state.value.editor.commands.hasCodeBlock?.()) {
    return true
  }
  if (state.value.editor.commands.hasLink?.()) {
    return true
  }
  if (state.value.editor.commands.hasAttachment?.() && !isActive.value) {
    return true
  }
  return props.disabled
})

//浮层显示
const menuShow = () => {
  const info = state.value.editor?.commands.getAttachmentInfo?.()
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
  if (!file || !state.value.editor) {
    return
  }
  const url = typeof props.customUpload == 'function' ? await props.customUpload(file) : await DapFile.dataFileToBase64(file)
  if (!url) {
    return
  }
  state.value.editor.commands.setAttachment?.({
    url: url,
    text: file.name || state.value.t('附件'),
    icon: props.iconUrl
  })
  menuRef.value?.hidePopover()
}
//插入远程附件
const insert = async () => {
  if (!remoteData.url || !remoteData.text || !state.value.editor) {
    return
  }
  state.value.editor.commands.setAttachment?.({
    url: remoteData.url,
    text: remoteData.text,
    icon: props.iconUrl
  })
  menuRef.value?.hidePopover()
}
//更新远程附件
const update = async () => {
  if (!updateData.url || !updateData.text || !state.value.editor) {
    return
  }
  state.value.editor.commands.updateAttachment?.({
    url: updateData.url,
    text: updateData.text
  })
  menuRef.value?.hidePopover()
}
</script>
<style src="./style.less" scoped></style>