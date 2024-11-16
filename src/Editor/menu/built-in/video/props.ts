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
	 * 自定义上传方法
	 */
	customUpload?: (file: File) => string | Promise<string>
}
