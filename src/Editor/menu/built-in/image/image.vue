<template>
  <Menu ref="menuRef" :disabled="isDisabled" :active="isActive" popover :popover-props="{ width: popoverProps?.width ?? 300, maxHeight: popoverProps?.maxHeight, minWidth: popoverProps?.minWidth, animation: popoverProps?.animation, arrow: popoverProps?.arrow, placement: popoverProps?.placement, trigger: popoverProps?.trigger, zIndex: popoverProps?.zIndex }" @popover-showing="menuShowing">
    <Icon name="kaitify-icon-image" />
    <template #popover>
      <div v-if="isActive" class="kaitify-image-update" :kaitify-dark="dark || undefined">
        <input v-model.trim="updateData.alt" :placeholder="t('图片名称')" type="text" />
        <input v-model.trim="updateData.src" :placeholder="t('图片地址')" type="url" />
        <div class="kaitify-image-update-footer">
          <Button @click="update" :disabled="!updateData.src">{{ t('更新') }}</Button>
        </div>
      </div>
      <Tabs v-else :default-value="tabs.default" :data="tabData">
        <template #default="{ current }">
          <div v-if="current == 'remote'" class="kaitify-image-remote" :kaitify-dark="dark || undefined">
            <input v-model.trim="remoteData.alt" :placeholder="t('图片名称')" type="text" />
            <input v-model.trim="remoteData.src" :placeholder="t('图片地址')" type="url" />
            <div class="kaitify-image-remote-footer">
              <Button @click="insert" :disabled="!remoteData.src">{{ t('插入') }}</Button>
            </div>
          </div>
          <div v-else-if="current == 'upload'" class="kaitify-image-upload" :kaitify-dark="dark || undefined">
            <input type="file" accept="image/*" @change="fileChange" />
            <Icon name="kaitify-icon-upload" />
          </div>
        </template>
      </Tabs>
    </template>
  </Menu>
</template>
<script setup lang="ts">
import { computed, ComputedRef, inject, reactive, ref } from 'vue'
import { file as DapFile } from 'dap-util'
import { SetImageOptionType, UpdateImageOptionType } from '@kaitify/core'
import { Icon } from '@/core/icon'
import { Tabs, TabsPropsType } from '@/core/tabs'
import { Button } from '@/core/button'
import { StateType } from '@/editor/wrapper'
import Menu from '@/editor/menu/menu.vue'
import { ImageMenuPropsType } from './props'

defineOptions({
  name: 'ImageMenu'
})
//属性
const props = withDefaults(defineProps<ImageMenuPropsType>(), {
  disabled: false,
  tabs: () => ({
    data: ['remote', 'upload'],
    default: 'remote'
  })
})
//是否深色模式
const dark = inject<boolean>('dark')!
//编辑器状态数据
const state = inject<ComputedRef<StateType>>('state')!
//翻译函数
const t = inject<(key: string) => string>('t')!

//菜单组件实例
const menuRef = ref<typeof Menu | null>(null)
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
const menuShowing = () => {
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
  if (!file) {
    return
  }
  const url = typeof props.customUpload == 'function' ? await props.customUpload(file) : await DapFile.dataFileToBase64(file)
  if (!url) {
    return
  }
  state.value.editor?.commands.setImage?.({
    src: url,
    alt: file.name || t('图片'),
    width: typeof props.width == 'number' ? `${props.width}px` : props.width
  })
  menuRef.value?.hidePopover()
}
//插入远程图片
const insert = async () => {
  if (!remoteData.src) {
    return
  }
  state.value.editor?.commands.setImage?.({
    src: remoteData.src,
    alt: remoteData.alt,
    width: typeof props.width == 'number' ? `${props.width}px` : props.width
  })
  menuRef.value?.hidePopover()
}
//更新图片
const update = async () => {
  if (!updateData.src) {
    return
  }
  state.value.editor?.commands.updateImage?.({
    src: updateData.src,
    alt: updateData.alt
  })
  menuRef.value?.hidePopover()
}
</script>
<style src="./style.less" scoped></style>
