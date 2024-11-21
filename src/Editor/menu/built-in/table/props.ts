import { TableCellsMergeDirectionType } from '@kaitify/core'
import { MenuPropsType } from '../../props'

export type TableGridType = {
  x: number
  y: number
  inside: boolean
}

export type TableMenuPropsType = {
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 表格最大行数
   */
  maxRows?: number
  /**
   * 表格最大列数
   */
  maxColumns?: number
  /**
   * 浮层属性
   */
  popoverOptions?: MenuPropsType['popoverOptions']
}

export type TableUnsetMenuPropsType = {
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 快捷键设置
   */
  shortcut?: (e: KeyboardEvent) => boolean
}

export type TableDeleteRowMenuPropsType = {
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 快捷键设置
   */
  shortcut?: (e: KeyboardEvent) => boolean
}

export type TableDeleteColumnMenuPropsType = {
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 快捷键设置
   */
  shortcut?: (e: KeyboardEvent) => boolean
}

export type TableAddRowMenuPropsType = {
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 插入类型
   */
  type?: 'top' | 'bottom'
  /**
   * 快捷键设置
   */
  shortcut?: (e: KeyboardEvent) => boolean
}

export type TableAddColumnMenuPropsType = {
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 插入类型
   */
  type?: 'left' | 'right'
  /**
   * 快捷键设置
   */
  shortcut?: (e: KeyboardEvent) => boolean
}

export type TableMergeCellMenuPropsType = {
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 合并方向
   */
  direction: TableCellsMergeDirectionType
  /**
   * 快捷键设置
   */
  shortcut?: (e: KeyboardEvent) => boolean
}
