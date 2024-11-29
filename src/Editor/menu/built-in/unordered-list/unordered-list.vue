<template>
  <Menu ref="menuRef" :disabled="isDisabled" :active="isActive" popover :shortcut="shortcut"
    :popover-options="{ width: popoverOptions?.width ?? 175, maxHeight: popoverOptions?.maxHeight, minWidth: popoverOptions?.minWidth, animation: popoverOptions?.animation, arrow: popoverOptions?.arrow, placement: popoverOptions?.placement, trigger: popoverOptions?.trigger, zIndex: popoverOptions?.zIndex }">
    <Icon name="list-disc" />
    <template v-slot:popover>
      <div class="kaitify-unordered-list">
        <div class="kaitify-unordered-list-item" v-for="item in listTypes">
          <Button large :active="itemActive(item)" @click="onSelect(item)">
            <Icon :name="'list-' + item" />
          </Button>
        </div>
      </div>
    </template>
  </Menu>
</template>
<script setup lang="ts">
import { computed, ComputedRef, inject, ref, Ref } from 'vue';
import { Editor, UnorderListType } from '@kaitify/core';
import { Icon } from "@/core/icon"
import { Button } from '@/core/button';
import { StateType } from '@/editor/wrapper';
import Menu from "@/editor/menu/menu.vue"
import { UnorderedListMenuPropsType } from './props';

defineOptions({
  name: 'UnorderedListMenu'
})
//属性
const props = withDefaults(defineProps<UnorderedListMenuPropsType>(), {
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
//菜单组件实例
const menuRef = ref<(typeof Menu) | undefined>()
//有序列表序标列表
const listTypes = ref<UnorderListType[]>(['disc', 'square', 'circle'])
//是否禁用
const isDisabled = computed<boolean>(() => {
  if (!editor.value || !state.value.selection.focused()) {
    return true
  }
  return props.disabled
})
//选项是否激活
const itemActive = computed<(item: UnorderListType) => boolean>(() => {
  return item => {
    return state.value.selection.focused() && (editor.value?.commands.allList?.({
      ordered: false,
      listType: item
    }) ?? false)
  }
})
//菜单是否激活
const isActive = computed<boolean>(() => {
  return state.value.selection.focused() && (editor.value?.commands.allList?.({
    ordered: false
  }) ?? false)
})

//选择选项
const onSelect = (item: UnorderListType) => {
  if (!editor.value) {
    return
  }
  if (itemActive.value(item)) {
    editor.value.updateRealSelection()
  } else {
    editor.value.commands.setList?.({
      ordered: false,
      listType: item
    })
  }
  menuRef.value?.hidePopover()
}
</script>
<style src="./style.less" scoped></style>