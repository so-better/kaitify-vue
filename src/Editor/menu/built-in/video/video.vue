<template>
  <Menu ref="menuRef" :disabled="isDisabled" :active="false" popover
    :popover-options="{ width: popoverOptions?.width ?? 300, maxHeight: popoverOptions?.maxHeight, minWidth: popoverOptions?.minWidth, animation: popoverOptions?.animation, arrow: popoverOptions?.arrow, placement: popoverOptions?.placement, trigger: popoverOptions?.trigger, zIndex: popoverOptions?.zIndex }">
    <Icon name="video" />
    <template v-slot:popover>
      <Tabs :names="[t('本地上传'), t('远程地址')]">
        <template v-slot="{ index }">
          <div v-if="index == 0" class="kaitify-video-upload">
            <div class="kaitify-video-upload-wrapper">
              <input type="file" accept="video/*" @change="fileChange" />
              <Icon name="upload" />
            </div>
            <div class="kaitify-video-upload-footer">
              <Checkbox v-model="remoteData.autoplay" :label="t('是否自动播放')" />
            </div>
          </div>
          <div v-else class="kaitify-video-remote">
            <input v-model.trim="remoteData.src" :placeholder="t('视频地址')" type="url" />
            <div class="kaitify-video-remote-footer">
              <Checkbox v-model="remoteData.autoplay" :label="t('是否自动播放')" />
              <Button @click="insert" :disabled="!remoteData.src">{{ t('插入') }}</Button>
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
import { Editor, SetVideoOptionType } from '@kaitify/core';
import { Icon } from '@/core/icon';
import { Tabs } from "@/core/tabs"
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
//远程视频数据
const remoteData = reactive<SetVideoOptionType>({
  src: '',
  autoplay: false
})
//是否禁用
const isDisabled = computed<boolean>(() => {
  if (!state.value.selection || !editor.value || !editor.value.selection.focused()) {
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

//选择本地视频
const fileChange = async (e: Event) => {
  const file = (e.currentTarget as HTMLInputElement).files?.[0]
  if (!file || !editor.value) {
    return
  }
  const url = typeof props.customUpload == 'function' ? await props.customUpload(file) : await DapFile.dataFileToBase64(file)
  if (!url) {
    return
  }
  editor.value.commands.setVideo?.({
    src: url,
    width: typeof props.width == 'number' ? `${props.width}px` : props.width,
    autoplay: remoteData.autoplay
  })
  menuRef.value?.hidePopover()
}
//插入远程视频
const insert = async () => {
  if (!remoteData.src || !editor.value) {
    return
  }
  editor.value.commands.setVideo?.({
    src: remoteData.src,
    width: typeof props.width == 'number' ? `${props.width}px` : props.width,
    autoplay: remoteData.autoplay
  })
  menuRef.value?.hidePopover()
}
</script>
<style src="./style.less" scoped></style>