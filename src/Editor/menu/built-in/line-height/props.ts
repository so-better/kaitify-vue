import { MenuDataType, MenuPropsType } from '@/editor/menu/props'

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
   * 浮层属性
   */
  popoverProps?: MenuPropsType['popoverProps']
  /**
   * 快捷键设置
   */
  shortcut?: { [key: MenuDataType['value']]: (e: KeyboardEvent) => boolean }
}
