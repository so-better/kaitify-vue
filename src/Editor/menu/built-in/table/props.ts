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
