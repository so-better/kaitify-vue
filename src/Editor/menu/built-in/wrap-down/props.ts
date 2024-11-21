import { KNodeMatchOptionType } from '@/index'

export type WrapDownMenuPropsType = {
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 指定换行的块节点条件
   */
  match: KNodeMatchOptionType
  /**
   * 快捷键设置
   */
  shortcut?: (e: KeyboardEvent) => boolean
}
