import { MenuDataType, MenuPropsType } from '../../props'

export type FontSizeMenuPropsType = {
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 选项数组
   */
  data?: MenuDataType[]
  /**
   * 浮层属性
   */
  popoverOptions?: MenuPropsType['popoverOptions']
}
