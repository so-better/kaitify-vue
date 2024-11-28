<template>
  <Menu ref="menuRef" :disabled="isDisabled" :active="isActive" popover :shortcut="shortcut"
    :popover-options="{ width: popoverOptions?.width ?? 175, maxHeight: popoverOptions?.maxHeight, minWidth: popoverOptions?.minWidth, animation: popoverOptions?.animation, arrow: popoverOptions?.arrow, placement: popoverOptions?.placement, trigger: popoverOptions?.trigger, zIndex: popoverOptions?.zIndex }">
    <Icon name="list-decimal" />
    <template v-slot:popover>
      <div class="kaitify-ordered-list">
        <div class="kaitify-ordered-list-item" v-for="item in listTypes">
          <Button large :active="itemActive(item)" @click="onSelect(item)">
            <Icon :name="'list-' + item" />
          </Button>
        </div>
      </div>
    </template>
  </Menu>
</template>
<script setup lang="ts">
import { computed, inject, ref, Ref } from 'vue';
import { Editor, OrderedListType } from '@kaitify/core';
import { Icon } from "@/core/icon"
import { Button } from '@/core/button';
import Menu from "@/editor/menu/menu.vue"
import { OrderedListMenuPropsType } from './props';

defineOptions({
  name: 'OrderedListMenu'
})
//属性
const props = withDefaults(defineProps<OrderedListMenuPropsType>(), {
  disabled: false
})
//编辑器实例
const editorRef = inject<Ref<Editor | undefined>>('editorRef')
//组件没有放在Wrapper的插槽中会报错
if (!editorRef) {
  throw new Error(`The component must be placed in the slot of the Wrapper.`)
}
//编辑器光标更新key
const keyOfSelectionUpdate = inject<Ref<number>>('keyOfSelectionUpdate')!
//菜单组件实例
const menuRef = ref<(typeof Menu) | undefined>()
//有序列表序标列表
const listTypes = ref<OrderedListType[]>(['decimal', 'lower-alpha', 'upper-alpha', 'lower-roman', 'upper-roman', 'lower-greek', 'cjk-ideographic'])
//是否禁用
const isDisabled = computed<boolean>(() => {
  if (!keyOfSelectionUpdate.value || !editorRef.value || !editorRef.value.selection.focused()) {
    return true
  }
  return props.disabled
})
//选项是否激活
const itemActive = computed<(item: OrderedListType) => boolean>(() => {
  return item => {
    return (keyOfSelectionUpdate.value > 0 && editorRef.value?.commands.allList?.({
      ordered: true,
      listType: item
    })) ?? false
  }
})
//菜单是否激活
const isActive = computed<boolean>(() => {
  return (keyOfSelectionUpdate.value > 0 && editorRef.value?.commands.allList?.({
    ordered: true
  })) ?? false
})

//选择选项
const onSelect = (item: OrderedListType) => {
  if (!editorRef.value) {
    return
  }
  if (itemActive.value(item)) {
    editorRef.value.updateRealSelection()
  } else {
    editorRef.value.commands.setList?.({
      ordered: true,
      listType: item
    })
  }
  menuRef.value?.hidePopover()
}
</script>
<style src="./style.less" scoped></style>