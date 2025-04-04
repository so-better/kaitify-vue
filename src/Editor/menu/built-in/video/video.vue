<template>
  <Menu ref="menuRef" :disabled="isDisabled" :active="false" popover
    :popover-props="{ width: popoverProps?.width ?? 300, maxHeight: popoverProps?.maxHeight, minWidth: popoverProps?.minWidth, animation: popoverProps?.animation, arrow: popoverProps?.arrow, placement: popoverProps?.placement, trigger: popoverProps?.trigger, zIndex: popoverProps?.zIndex }">
    <Icon name="kaitify-icon-video" />
    <template #popover>
      <Tabs :default-value="tabs.default" :data="tabData">
        <template #default="{ current }">
          <div v-if="current == 'remote'" class="kaitify-video-remote">
            <input v-model.trim="remoteData.src" :placeholder="state.t('视频地址')" type="url" />
            <div class="kaitify-video-remote-footer">
              <Checkbox v-model="remoteData.autoplay" :label="state.t('是否自动播放')" />
              <Button @click="insert" :disabled="!remoteData.src">{{ state.t('插入') }}</Button>
            </div>
          </div>
          <div v-else-if="current == 'upload'" class="kaitify-video-upload">
            <div class="kaitify-video-upload-wrapper">
              <input type="file" accept="video/*" @change="fileChange" />
              <Icon name="kaitify-icon-upload" />
            </div>
            <div class="kaitify-video-upload-footer">
              <Checkbox v-model="remoteData.autoplay" :label="state.t('是否自动播放')" />
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
import { SetVideoOptionType } from '@kaitify/core';
import { Icon } from '@/core/icon';
import { Tabs, TabsPropsType } from "@/core/tabs"
import { Button } from "@/core/button"
import { Checkbox } from '@/core/checkbox';
import { StateType } from '@/editor/wrapper';
import Menu from "@/editor/menu/menu.vue"
import { VideoMenuPropsType } from './props';

defineOptions({
  name: 'VideoMenu'
})
//属性
const props = withDefaults(defineProps<VideoMenuPropsType>(), {
  disabled: false,
  tabs: () => ({
    data: ['remote', 'upload'],
    default: 'remote'
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
//远程视频数据
const remoteData = reactive<SetVideoOptionType>({
  src: '',
  autoplay: false
})
//选项卡数据
const tabData = computed<TabsPropsType['data']>(() => {
  return props.tabs.data.map(item => {
    return [{
      label: state.value.t('远程地址'),
      value: 'remote'
    }, {
      label: state.value.t('本地上传'),
      value: 'upload'
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

//选择本地视频
const fileChange = async (e: Event) => {
  const file = (e.currentTarget as HTMLInputElement).files?.[0]
  if (!file || !state.value.editor) {
    return
  }
  const url = typeof props.customUpload == 'function' ? await props.customUpload(file) : await DapFile.dataFileToBase64(file)
  if (!url) {
    return
  }
  state.value.editor.commands.setVideo?.({
    src: url,
    width: typeof props.width == 'number' ? `${props.width}px` : props.width,
    autoplay: remoteData.autoplay
  })
  menuRef.value?.hidePopover()
}
//插入远程视频
const insert = async () => {
  if (!remoteData.src || !state.value.editor) {
    return
  }
  state.value.editor.commands.setVideo?.({
    src: remoteData.src,
    width: typeof props.width == 'number' ? `${props.width}px` : props.width,
    autoplay: remoteData.autoplay
  })
  menuRef.value?.hidePopover()
}
</script>
<style src="./style.less" scoped></style>