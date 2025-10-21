<template>
  <Menu ref="menuRef" :disabled="isDisabled" :active="false" popover :popover-props="{ width: popoverProps?.width, maxHeight: popoverProps?.maxHeight, minWidth: popoverProps?.minWidth, animation: popoverProps?.animation, arrow: popoverProps?.arrow, placement: popoverProps?.placement, trigger: popoverProps?.trigger, zIndex: popoverProps?.zIndex }">
    <Icon name="kaitify-icon-table" />
    <template #popover>
      <div class="kaitify-table">
        <table>
          <tr v-for="row in tableGrids">
            <td :class="{ 'kaitify-table-inside': column.inside }" v-for="column in row" @mouseenter="changeTableSize(column)" @click="insert(column)">
              <span></span>
            </td>
          </tr>
        </table>
        <div class="kaitify-table-footer" v-if="specification">{{ specification.x }} x {{ specification.y }}</div>
      </div>
    </template>
  </Menu>
</template>
<script setup lang="ts">
import { computed, ComputedRef, inject, ref } from 'vue'
import { Icon } from '@/core/icon'
import { StateType } from '@/editor/wrapper'
import Menu from '@/editor/menu/menu.vue'
import { TableGridType, TableMenuPropsType } from './props'

defineOptions({
  name: 'TableMenu'
})
//属性
const props = withDefaults(defineProps<TableMenuPropsType>(), {
  disabled: false,
  maxRows: 10,
  maxColumns: 10
})
//编辑器状态数据
const state = inject<ComputedRef<StateType>>('state')!

//菜单组件实例
const menuRef = ref<typeof Menu | undefined>()
//获取表格尺寸数据
const getTableGrids = () => {
  const grids: TableGridType[][] = []
  for (let i = 1; i <= props.maxRows; i++) {
    let row: TableGridType[] = []
    for (let j = 1; j <= props.maxColumns; j++) {
      row.push({
        x: i,
        y: j,
        inside: false //是否被选中
      })
    }
    grids.push(row)
  }
  return grids
}
const tableGrids = ref<TableGridType[][]>(getTableGrids())
//表格规格
const specification = computed<TableGridType>(() => {
  return tableGrids.value
    .flat()
    .filter(item => {
      return item.inside
    })
    .sort((a, b) => {
      if (a.x > b.x && a.y > b.y) {
        return -1
      }
      if (a.x > b.x) {
        return -1
      }
      if (a.y > b.y) {
        return -1
      }
      return 1
    })[0]
})
//是否禁用
const isDisabled = computed<boolean>(() => {
  if (!state.value.editor?.selection.focused()) {
    return true
  }
  if (state.value.editor.commands.hasTable?.()) {
    return true
  }
  if (state.value.editor.commands.hasCodeBlock?.()) {
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

//改变表格大小
const changeTableSize = (data: TableGridType) => {
  for (let i in tableGrids.value) {
    const grid = tableGrids.value[i]
    for (let j in grid) {
      if (grid[j].x <= data.x && grid[j].y <= data.y) {
        tableGrids.value[i][j].inside = true
      } else {
        tableGrids.value[i][j].inside = false
      }
    }
  }
}
//插入表格
const insert = async (data: TableGridType) => {
  if (!state.value.editor || props.maxRows < 1 || props.maxColumns < 1) {
    return
  }
  state.value.editor.commands.setTable?.({
    rows: data.x,
    columns: data.y
  })
  menuRef.value?.hidePopover()
}
</script>
<style src="./style.less" scoped></style>
