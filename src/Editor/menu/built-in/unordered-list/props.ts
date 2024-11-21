import { UnorderListType } from '@kaitify/core'

export type UnorderedListMenuPropsType = {
  /**
   * 是否禁用
   */
  disabled?: boolean
}

export type UnorderedListTypeMenuPropsType = {
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 序标类型
   */
  listType: UnorderListType
}
