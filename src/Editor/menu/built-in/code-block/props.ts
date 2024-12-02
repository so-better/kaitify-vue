import { HljsLanguageType } from '@kaitify/core'
import { MenuDataType, MenuPropsType } from '@/editor/menu/props'

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
   * 语言列表
   */
  languages?: HljsLanguageType[]
  /**
   * 浮层属性
   */
  popoverProps?: MenuPropsType['popoverProps']
  /**
   * 快捷键设置
   */
  shortcut?: { [key: MenuDataType['value']]: (e: KeyboardEvent) => boolean }
}
