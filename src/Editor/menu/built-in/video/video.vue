<template>
  <Menu ref="menuRef" :disabled="isDisabled" :active="false" popover :popover-options="{ width: 300 }">
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
import { computed, inject, reactive, ref, Ref } from 'vue';
import { file as DapFile } from "dap-util"
import { Editor, SetVideoOptionType } from '@kaitify/core';
import { Icon } from '@/core/icon';
import { Tabs } from "@/core/tabs"
import { Button } from "@/core/button"
import { Checkbox } from '@/core/checkbox';
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
const editorRef = inject<Ref<Editor | undefined>>('editorRef')
//翻译方法
const t = inject<(key: string) => string>('t')!
//菜单组件实例
const menuRef = ref<(typeof Menu) | undefined>()
//远程视频数据
const remoteData = reactive<SetVideoOptionType>({
  src: '',
  autoplay: false
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

//选择本地视频
const fileChange = async (e: Event) => {
  const file = (e.currentTarget as HTMLInputElement).files?.[0]
  if (!file || !editorRef.value) {
    return
  }
  const url = typeof props.customUpload == 'function' ? await props.customUpload(file) : await DapFile.dataFileToBase64(file)
  if (!url) {
    return
  }
  editorRef.value.commands.setVideo?.({
    src: url,
    width: typeof props.width == 'number' ? `${props.width}px` : props.width,
    autoplay: remoteData.autoplay
  })
  menuRef.value?.hidePopover()
}
//插入远程视频
const insert = async () => {
  if (!remoteData.src || !editorRef.value) {
    return
  }
  editorRef.value.commands.setVideo?.({
    src: remoteData.src,
    width: typeof props.width == 'number' ? `${props.width}px` : props.width,
    autoplay: remoteData.autoplay
  })
  menuRef.value?.hidePopover()
}
</script>
<style src="./style.less" scoped></style>