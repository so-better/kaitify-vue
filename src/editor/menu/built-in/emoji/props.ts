import { MenuPropsType } from '@/editor/menu/props'

export type EmojiMenuPropsType = {
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 表情数组
   */
  data?: string[]
  /**
   * 浮层属性
   */
  popoverProps?: MenuPropsType['popoverProps']
}
