import { MenuPropsType } from '../../props'

export type CodeBlockMenuPropsType = {
	/**
	 * 是否禁用
	 */
	disabled?: boolean
}

export type CodeBlockLanguagesMenuPropsType = {
	/**
	 * 是否禁用
	 */
	disabled?: boolean
	/**
	 * 浮层属性
	 */
	popoverOptions?: MenuPropsType['popoverOptions']
}
