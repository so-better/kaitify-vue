<template>
  <Menu ref="menuRef" :disabled="isDisabled" :active="isActive" popover :popover-props="{ width: popoverProps?.width ?? 160, maxHeight: popoverProps?.maxHeight, minWidth: popoverProps?.minWidth, animation: popoverProps?.animation, arrow: popoverProps?.arrow, placement: popoverProps?.placement, trigger: popoverProps?.trigger, zIndex: popoverProps?.zIndex }">
    <Icon name="kaitify-icon-list-decimal" />
    <template #popover>
      <div class="kaitify-ordered-list">
        <div class="kaitify-ordered-list-item" v-for="item in listTypes">
          <Button :active="itemActive(item)" @click="onSelect(item)">
            <Icon :name="'kaitify-icon-list-' + item" />
          </Button>
        </div>
      </div>
    </template>
  </Menu>
</template>
<script setup lang="ts">
import { computed, inject, Ref, ref } from 'vue'
import { OrderedListType } from '@kaitify/core'
import { Icon } from '@/core/icon'
import { Button } from '@/core/button'
import { StateType } from '@/editor/wrapper'
import Menu from '@/editor/menu/menu.vue'
import { OrderedListMenuPropsType } from './props'

defineOptions({
  name: 'OrderedListMenu'
})
//属性
const props = withDefaults(defineProps<OrderedListMenuPropsType>(), {
  disabled: false
})
//编辑器状态数据
const state = inject<Ref<StateType>>('state')!

//菜单组件实例
const menuRef = ref<typeof Menu>()
//有序列表序标列表
const listTypes = ref<OrderedListType[]>(['decimal', 'lower-alpha', 'upper-alpha', 'lower-roman', 'upper-roman', 'lower-greek', 'cjk-ideographic'])
//是否禁用
const isDisabled = computed(() => {
  if (!state.value.editor?.selection.focused()) {
    return true
  }
  return props.disabled
})
//选项是否激活
const itemActive = computed<(item: OrderedListType) => boolean>(() => {
  return item => {
    return (
      state.value.editor?.commands.allList?.({
        ordered: true,
        listType: item
      }) ?? false
    )
  }
})
//菜单是否激活
const isActive = computed(() => {
  return (
    state.value.editor?.commands.allList?.({
      ordered: true
    }) ?? false
  )
})

//选择选项
const onSelect = (item: OrderedListType) => {
  if (itemActive.value(item)) {
    state.value.editor?.commands.unsetList?.({
      ordered: true,
      listType: item
    })
  } else {
    state.value.editor?.commands.setList?.({
      ordered: true,
      listType: item
    })
  }
  menuRef.value?.hidePopover()
}
</script>
<style src="./style.less" scoped></style>
