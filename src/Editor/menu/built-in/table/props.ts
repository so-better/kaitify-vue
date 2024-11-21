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
}

export type TableDeleteRowMenuPropsType = {
  /**
   * 是否禁用
   */
  disabled?: boolean
}

export type TableDeleteColumnMenuPropsType = {
  /**
   * 是否禁用
   */
  disabled?: boolean
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
}
