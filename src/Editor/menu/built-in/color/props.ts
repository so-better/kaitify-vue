import { MenuPropsType } from '../../props'

export type ColorMenuPropsType = {
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
  popoverOptions?: MenuPropsType['popoverOptions']
}
