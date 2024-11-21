import { OrderedListType } from '@kaitify/core'

export type OrderedListMenuPropsType = {
  /**
   * 是否禁用
   */
  disabled?: boolean
}

export type OrderedListTypeMenuPropsType = {
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 序标类型
   */
  listType: OrderedListType
}
