import { MenuDataType, MenuPropsType } from '../../props'

export type CodeBlockMenuPropsType = {
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 快捷键设置
   */
  shortcut?: (e: KeyboardEvent) => boolean
}

export type CodeBlockLanguagesMenuPropsType = {
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 浮层属性
   */
  popoverOptions?: MenuPropsType['popoverOptions']
  /**
   * 快捷键设置
   */
  shortcut?: { [key: MenuDataType['value']]: (e: KeyboardEvent) => boolean }
}
