import { MenuPropsType } from '@/editor/menu/props'

export type BackColorMenuPropsType = {
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 颜色数组
   */
  colors?: string[]
  /**
   * 浮层属性
   */
  popoverProps?: MenuPropsType['popoverProps']
}
