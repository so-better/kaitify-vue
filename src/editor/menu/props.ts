import { PopoverPropsType } from '@/core/popover'

/**
 * 菜单可选数据的类型
 */
export type MenuDataType = {
  /**
   * 显示的文字
   */
  label: string
  /**
   * 表示的值
   */
  value: string | number
  /**
   * 左侧显示的图标
   */
  icon?: string
}

/**
 * 菜单组件的属性类型
 */
export type MenuPropsType = {
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 是否激活
   */
  active?: boolean
  /**
   * 选项禁用
   */
  itemDisabled?: (item: MenuDataType) => boolean
  /**
   * 选项是否激活
   */
  itemActive?: (item: MenuDataType) => boolean
  /**
   * 是否有浮层
   */
  popover?: boolean
  /**
   * 浮层属性
   */
  popoverProps?: Omit<PopoverPropsType, 'disabled' | 'delay'>
  /**
   * 可选数据
   */
  data?: MenuDataType[]
  /**
   * 快捷键设置
   */
  shortcut?: ((e: KeyboardEvent) => boolean) | { [key: MenuDataType['value']]: (e: KeyboardEvent) => boolean }
}

/**
 * 菜单组件的事件类型
 */
export type MenuEmitsType = {
  /**
   * 非浮层类型的菜单按钮点击触发的事件
   */
  (e: 'operate'): void
  /**
   * 浮层类型的菜单按钮点击选项触发的事件
   */
  (e: 'select', value: MenuDataType): void
  /**
   * 浮层显示前触发的事件
   */
  (e: 'popoverShow', value: HTMLDivElement): void
  /**
   * 浮层显示时触发的事件
   */
  (e: 'popoverShowing', value: HTMLDivElement): void
  /**
   * 浮层显示后触发的事件
   */
  (e: 'popoverShown', value: HTMLDivElement): void
  /**
   * 浮层隐藏前触发的事件
   */
  (e: 'popoverHide', value: HTMLDivElement): void
  /**
   * 浮层隐藏时触发的事件
   */
  (e: 'popoverHiding', value: HTMLDivElement): void
  /**
   * 浮层隐藏后触发的事件
   */
  (e: 'popoverHidden', value: HTMLDivElement): void
}
