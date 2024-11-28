import { MenuPropsType } from '@/editor/menu/props'

export type MathMenuPropsType = {
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 浮层属性
   */
  popoverOptions?: MenuPropsType['popoverOptions']
}
