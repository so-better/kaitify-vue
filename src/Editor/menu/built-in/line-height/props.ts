import { MenuDataType, MenuPropsType } from '../../props'

export type LineHeightMenuPropsType = {
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 选项数组
   */
  data?: MenuDataType[]
  /**
   * 默认行高数值
   */
  defaultValue?: string | number
  /**
   * 浮层属性
   */
  popoverOptions?: MenuPropsType['popoverOptions']
}
