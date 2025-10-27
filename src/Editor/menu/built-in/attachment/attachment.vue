<template>
  <Menu ref="menuRef" :disabled="isDisabled" :active="isActive" popover :popover-props="{ width: popoverProps?.width ?? 300, maxHeight: popoverProps?.maxHeight, minWidth: popoverProps?.minWidth, animation: popoverProps?.animation, arrow: popoverProps?.arrow, placement: popoverProps?.placement, trigger: popoverProps?.trigger, zIndex: popoverProps?.zIndex }" @popover-showing="menuShowing">
    <Icon name="kaitify-icon-attachment" />
    <template #popover>
      <div v-if="isActive" class="kaitify-attachment-update" :kaitify-dark="dark || undefined">
        <input v-model.trim="updateData.text" :placeholder="t('附件名称')" type="text" />
        <input v-model.trim="updateData.url" :placeholder="t('附件地址')" type="url" />
        <div class="kaitify-attachment-update-footer">
          <Button @click="update" :disabled="!updateData.url || !updateData.text">{{ t('更新') }}</Button>
        </div>
      </div>
      <Tabs v-else :default-value="tabs.default" :data="tabData">
        <template #default="{ current }">
          <div v-if="current == 'remote'" class="kaitify-attachment-remote" :kaitify-dark="dark || undefined">
            <input v-model.trim="remoteData.text" :placeholder="t('附件名称')" type="text" />
            <input v-model.trim="remoteData.url" :placeholder="t('附件地址')" type="url" />
            <div class="kaitify-attachment-remote-footer">
              <Button @click="insert" :disabled="!remoteData.url || !remoteData.text">{{ t('插入') }}</Button>
            </div>
          </div>
          <div v-else-if="current == 'upload'" class="kaitify-attachment-upload" :kaitify-dark="dark || undefined">
            <input type="file" accept="*" @change="fileChange" />
            <Icon name="kaitify-icon-upload" />
          </div>
        </template>
      </Tabs>
    </template>
  </Menu>
</template>
<script setup lang="ts">
import { computed, inject, reactive, Ref, ref } from 'vue'
import { file as DapFile } from 'dap-util'
import { SetAttachmentOptionType, UpdateAttachmentOptionType } from '@kaitify/core'
import { Icon } from '@/core/icon'
import { Tabs, TabsPropsType } from '@/core/tabs'
import { Button } from '@/core/button'
import { StateType } from '@/editor/wrapper'
import Menu from '@/editor/menu/menu.vue'
import { AttachmentMenuPropsType } from './props'

defineOptions({
  name: 'AttachmentMenu'
})
//属性
const props = withDefaults(defineProps<AttachmentMenuPropsType>(), {
  disabled: false,
  tabs: () => ({
    data: ['remote', 'upload'],
    default: 'remote'
  })
})
//是否深色模式
const dark = inject<Ref<boolean>>('dark')!
//编辑器状态数据
const state = inject<Ref<StateType>>('state')!
//翻译函数
const t = inject<(key: string) => string>('t')!

//菜单组件实例
const menuRef = ref<typeof Menu>()
//远程附件数据
const remoteData = reactive<Omit<SetAttachmentOptionType, 'icon'>>({
  url: '',
  text: ''
})
//更新附件数据
const updateData = reactive<UpdateAttachmentOptionType>({
  url: '',
  text: ''
})
//选项卡数据
const tabData = computed<TabsPropsType['data']>(() => {
  return props.tabs.data.map(item => {
    return [
      {
        label: t('远程地址'),
        value: 'remote'
      },
      {
        label: t('本地上传'),
        value: 'upload'
      }
    ].find(v => v.value == item)!
  })
})
//是否激活
const isActive = computed(() => {
  return !!state.value.editor?.commands.getAttachment?.()
})
//是否禁用
const isDisabled = computed(() => {
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
const menuShowing = () => {
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
  if (!file) {
    return
  }
  const url = typeof props.customUpload == 'function' ? await props.customUpload(file) : await DapFile.dataFileToBase64(file)
  if (!url) {
    return
  }
  state.value.editor?.commands.setAttachment?.({
    url: url,
    text: file.name || t('附件'),
    icon: props.iconUrl
  })
  menuRef.value?.hidePopover()
}
//插入远程附件
const insert = async () => {
  if (!remoteData.url || !remoteData.text) {
    return
  }
  state.value.editor?.commands.setAttachment?.({
    url: remoteData.url,
    text: remoteData.text,
    icon: props.iconUrl
  })
  menuRef.value?.hidePopover()
}
//更新远程附件
const update = async () => {
  if (!updateData.url || !updateData.text) {
    return
  }
  state.value.editor?.commands.updateAttachment?.({
    url: updateData.url,
    text: updateData.text
  })
  menuRef.value?.hidePopover()
}
</script>
<style src="./style.less" scoped></style>
