export type FullScreenMenuPropsType = {
  /**
   * 指定需要设置全屏的dom的选择器
   */
  target: string
  /**
   * 全屏层级
   */
  zIndex?: number
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 快捷键设置
   */
  shortcut?: (e: KeyboardEvent) => boolean
}
