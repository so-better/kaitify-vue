import { MenuPropsType } from '@/editor/menu/props'

export type VideoMenuPropsType = {
	/**
	 * 是否禁用
	 */
	disabled?: boolean
	/**
	 * 初始视频宽度
	 */
	width?: string | number
	/**
	 * tabs配置
	 */
	tabs?: {
		data: ('remote' | 'upload')[]
		default: 'remote' | 'upload'
	}
	/**
	 * 自定义上传方法
	 */
	customUpload?: (file: File) => string | Promise<string>
	/**
	 * 浮层属性
	 */
	popoverProps?: MenuPropsType['popoverProps']
}

export type VideoControlsMenuPropsType = {
	/**
	 * 是否禁用
	 */
	disabled?: boolean
	/**
	 * 快捷键设置
	 */
	shortcut?: (e: KeyboardEvent) => boolean
}

export type VideoMutedMenuPropsType = {
	/**
	 * 是否禁用
	 */
	disabled?: boolean
	/**
	 * 快捷键设置
	 */
	shortcut?: (e: KeyboardEvent) => boolean
}

export type VideoLoopMenuPropsType = {
	/**
	 * 是否禁用
	 */
	disabled?: boolean
	/**
	 * 快捷键设置
	 */
	shortcut?: (e: KeyboardEvent) => boolean
}
