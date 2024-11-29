<template>
  <Menu ref="menuRef" :disabled="isDisabled" :active="false" popover
    :popover-options="{ width: popoverOptions?.width, maxHeight: popoverOptions?.maxHeight, minWidth: popoverOptions?.minWidth, animation: popoverOptions?.animation, arrow: popoverOptions?.arrow, placement: popoverOptions?.placement, trigger: popoverOptions?.trigger, zIndex: popoverOptions?.zIndex }">
    <Icon name="table" />
    <template v-slot:popover>
      <div class="kaitify-table">
        <table>
          <tr v-for="row in tableGrids">
            <td :class="{ 'kaitify-table-inside': column.inside }" v-for="column in row"
              @mouseenter="changeTableSize(column)" @click="insert(column)">
              <span></span>
            </td>
          </tr>
        </table>
        <div class="kaitify-table-footer" v-if="specification">
          {{ specification.x }} x {{ specification.y }}
        </div>
      </div>
    </template>
  </Menu>
</template>
<script setup lang="ts">
import { computed, ComputedRef, inject, ref, Ref } from 'vue';
import { Editor } from '@kaitify/core';
import { Icon } from '@/core/icon';
import { StateType } from '@/editor/wrapper';
import Menu from "@/editor/menu/menu.vue"
import { TableGridType, TableMenuPropsType } from './props';

defineOptions({
  name: 'TableMenu'
})
//属性
const props = withDefaults(defineProps<TableMenuPropsType>(), {
  disabled: false,
  maxRows: 10,
  maxColumns: 10
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
  if (!editor.value || !state.value.selection.focused()) {
    return true
  }
  if (editor.value.commands.hasTable?.() || editor.value.commands.hasCodeBlock?.()) {
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
  if (!editor.value || props.maxRows < 1 || props.maxColumns < 1) {
    return
  }
  editor.value.commands.setTable?.({
    rows: data.x,
    columns: data.y
  })
  menuRef.value?.hidePopover()
}
</script>
<style src="./style.less" scoped></style>