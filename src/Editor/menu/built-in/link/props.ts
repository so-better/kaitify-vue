import { MenuPropsType } from '@/editor/menu/props'

export type LinkMenuPropsType = {
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 浮层属性
   */
  popoverProps?: MenuPropsType['popoverProps']
}
