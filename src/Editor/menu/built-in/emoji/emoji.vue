<template>
  <Menu ref="menuRef" :disabled="isDisabled" :active="false" popover :popover-props="{ width: popoverProps?.width, maxHeight: popoverProps?.maxHeight, minWidth: popoverProps?.minWidth, animation: popoverProps?.animation, arrow: popoverProps?.arrow, placement: popoverProps?.placement, trigger: popoverProps?.trigger, zIndex: popoverProps?.zIndex }">
    <Icon name="kaitify-icon-emoji" />
    <template #popover>
      <div class="kaitify-emoji-panel">
        <div v-for="item in data" class="kaitify-emoji-el">
          <div @click="setEmoji(item)">{{ item }}</div>
        </div>
      </div>
    </template>
  </Menu>
</template>
<script setup lang="ts">
import { computed, ComputedRef, inject, ref } from 'vue'
import { Icon } from '@/core/icon'
import { StateType } from '@/editor/wrapper'
import Menu from '@/editor/menu/menu.vue'
import { EmojiMenuPropsType } from './props'

defineOptions({
  name: 'EmojiMenu'
})
//属性
const props = withDefaults(defineProps<EmojiMenuPropsType>(), {
  disabled: false,
  // [
  //   "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇",
  //   "😉", "😍", "😘", "😗", "😚", "🥰", "😋", "😜", "🤪", "🤨",
  //   "😭", "😢", "😔", "😞", "😰", "😱", "😨", "😳", "😡", "😠",
  //   "🤬", "👍", "👎", "👏", "🙌", "👐", "🤝", "✌", "🤞", "🤘",
  //   "❤️", "💕", "💖", "💗", "💘", "💔", "❣", "🖤", "💙", "💚",
  //   "🍏", "🍎", "🍌", "🍉", "🍇", "🍓", "🍒", "🍑", "🍕", "🍔",
  //   "🍟", "🌭", "🍗", "🍞", "🚗", "🚕", "🚙", "🚌", "🚑", "🚓",
  //   "🚚", "🚲", "🚜", "🚂", "✈️", "🚀", "🎉", "🎊", "🎁", "🔥",
  //   "🌈", "⭐", "💡", "⏰", "📅", "📌", "🎶", "🎵"
  // ]
  data: () => [
    '\u{1F600}',
    '\u{1F603}',
    '\u{1F604}',
    '\u{1F601}',
    '\u{1F606}',
    '\u{1F605}',
    '\u{1F602}',
    '\u{1F923}',
    '\u{1F60A}',
    '\u{1F607}',
    '\u{1F609}',
    '\u{1F60D}',
    '\u{1F618}',
    '\u{1F617}',
    '\u{1F61A}',
    '\u{1F970}',
    '\u{1F60B}',
    '\u{1F61C}',
    '\u{1F92A}',
    '\u{1F928}',
    '\u{1F62D}',
    '\u{1F622}',
    '\u{1F614}',
    '\u{1F61E}',
    '\u{1F630}',
    '\u{1F631}',
    '\u{1F628}',
    '\u{1F633}',
    '\u{1F621}',
    '\u{1F620}',
    '\u{1F92C}',
    '\u{1F44D}',
    '\u{1F44E}',
    '\u{1F44F}',
    '\u{1F64C}',
    '\u{1F450}',
    '\u{1F91D}',
    '\u{270C}',
    '\u{1F91E}',
    '\u{1F918}',
    '\u{2764}\u{FE0F}',
    '\u{1F495}',
    '\u{1F496}',
    '\u{1F497}',
    '\u{1F498}',
    '\u{1F494}',
    '\u{2763}',
    '\u{1F5A4}',
    '\u{1F499}',
    '\u{1F49A}',
    '\u{1F34F}',
    '\u{1F34E}',
    '\u{1F34C}',
    '\u{1F349}',
    '\u{1F347}',
    '\u{1F353}',
    '\u{1F352}',
    '\u{1F351}',
    '\u{1F355}',
    '\u{1F354}',
    '\u{1F35F}',
    '\u{1F32D}',
    '\u{1F357}',
    '\u{1F35E}',
    '\u{1F697}',
    '\u{1F695}',
    '\u{1F699}',
    '\u{1F68C}',
    '\u{1F691}',
    '\u{1F693}',
    '\u{1F69A}',
    '\u{1F6B2}',
    '\u{1F69C}',
    '\u{1F682}',
    '\u{2708}\u{FE0F}',
    '\u{1F680}',
    '\u{1F389}',
    '\u{1F38A}',
    '\u{1F381}',
    '\u{1F525}',
    '\u{1F308}',
    '\u{2B50}',
    '\u{1F4A1}',
    '\u{23F0}',
    '\u{1F4C5}',
    '\u{1F4CC}',
    '\u{1F3B6}',
    '\u{1F3B5}'
  ]
})
//编辑器状态数据
const state = inject<ComputedRef<StateType>>('state')!

//菜单组件实例
const menuRef = ref<typeof Menu | undefined>()
//是否禁用
const isDisabled = computed<boolean>(() => {
  if (!state.value.editor?.selection.focused()) {
    return true
  }
  return props.disabled
})

//插入标签
const setEmoji = (val: string) => {
  state.value.editor?.insertText(val)
  state.value.editor?.updateView()
  menuRef.value?.hidePopover()
}
</script>
<style src="./style.less" scoped></style>
