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
	 * 是否激活
	 */
	active?: boolean
	/**
	 * 是否禁用
	 */
	disabled?: boolean
}

/**
 * 菜单参数类型
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
	 * 是否有浮层
	 */
	popover?: boolean
	/**
	 * 浮层属性
	 */
	popoverOptions?: Omit<PopoverPropsType, 'disabled' | 'delay' | 'zIndex'>
	/**
	 * 可选数据
	 */
	data?: MenuDataType[]
}
