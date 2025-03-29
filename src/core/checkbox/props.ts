/**
 * 复选框组件属性类型
 */
export type CheckboxPropsType = {
	/**
	 * 是否禁用
	 */
	disabled?: boolean
	/**
	 * 是否选中
	 */
	modelValue?: boolean
	/**
	 * label文字
	 */
	label?: string
}

/**
 * 复选框组件事件类型
 */
export type CheckboxEmitsType = {
	/**
	 * 受控值改变触发的事件
	 */
	(e: 'update:modelValue', value: boolean): void
}
