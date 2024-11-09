/**
 * 浮层位置类型
 */
export type PopoverPlacementType = 'auto' | 'auto-start' | 'auto-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'top-start' | 'top' | 'top-end' | 'left-start' | 'left' | 'left-end' | 'right-start' | 'right' | 'right-end'

/**
 * 浮层组件属性类型
 */
export type PopoverPropsType = {
	/**
	 * refer内容是否块级展示
	 */
	block?: boolean
	/**
	 * 浮层宽度
	 */
	width?: string | number
	/**
	 * 浮层位置
	 */
	placement?: PopoverPlacementType
	/**
	 * 是否显示三角形
	 */
	arrow?: boolean
	/**
	 * 触发浮层的方式
	 */
	trigger?: 'hover' | 'click' | 'custom'
	/**
	 * 浮层显示动画
	 */
	animation?: 'fade' | 'translate'
	/**
	 * 浮层层级
	 */
	zIndex?: number
	/**
	 * 显示延迟时间
	 */
	delay?: number
	/**
	 * 是否禁用浮层
	 */
	disabled?: boolean
}
