import { MenuPropsType } from '@/editor/menu/props'

export type OrderedListMenuPropsType = {
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 浮层属性
   */
  popoverProps?: MenuPropsType['popoverProps']
}
