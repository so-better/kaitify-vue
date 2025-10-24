<template>
  <Menu ref="menuRef" :disabled="isDisabled" :active="isActive" popover :popover-props="{ width: popoverProps?.width ?? 160, maxHeight: popoverProps?.maxHeight, minWidth: popoverProps?.minWidth, animation: popoverProps?.animation, arrow: popoverProps?.arrow, placement: popoverProps?.placement, trigger: popoverProps?.trigger, zIndex: popoverProps?.zIndex }">
    <Icon name="kaitify-icon-list-disc" />
    <template #popover>
      <div class="kaitify-unordered-list">
        <div class="kaitify-unordered-list-item" v-for="item in listTypes">
          <Button large :active="itemActive(item)" @click="onSelect(item)">
            <Icon :name="'kaitify-icon-list-' + item" />
          </Button>
        </div>
      </div>
    </template>
  </Menu>
</template>
<script setup lang="ts">
import { computed, ComputedRef, inject, ref } from 'vue'
import { UnorderListType } from '@kaitify/core'
import { Icon } from '@/core/icon'
import { Button } from '@/core/button'
import { StateType } from '@/editor/wrapper'
import Menu from '@/editor/menu/menu.vue'
import { UnorderedListMenuPropsType } from './props'

defineOptions({
  name: 'UnorderedListMenu'
})
//属性
const props = withDefaults(defineProps<UnorderedListMenuPropsType>(), {
  disabled: false
})
//编辑器状态数据
const state = inject<ComputedRef<StateType>>('state')!

//菜单组件实例
const menuRef = ref<typeof Menu | null>(null)
//有序列表序标列表
const listTypes = ref<UnorderListType[]>(['disc', 'square', 'circle'])
//是否禁用
const isDisabled = computed<boolean>(() => {
  if (!state.value.editor?.selection.focused()) {
    return true
  }
  return props.disabled
})
//选项是否激活
const itemActive = computed<(item: UnorderListType) => boolean>(() => {
  return item => {
    return (
      state.value.editor?.commands.allList?.({
        ordered: false,
        listType: item
      }) ?? false
    )
  }
})
//菜单是否激活
const isActive = computed<boolean>(() => {
  return (
    state.value.editor?.commands.allList?.({
      ordered: false
    }) ?? false
  )
})

//选择选项
const onSelect = (item: UnorderListType) => {
  if (itemActive.value(item)) {
    state.value.editor?.commands.unsetList?.({
      ordered: false,
      listType: item
    })
  } else {
    state.value.editor?.commands.setList?.({
      ordered: false,
      listType: item
    })
  }
  menuRef.value?.hidePopover()
}
</script>
<style src="./style.less" scoped></style>
