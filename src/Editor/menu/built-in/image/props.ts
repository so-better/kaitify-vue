export type ImageMenuPropsType = {
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 图片上传后的宽度
   */
  width?: string | number
  /**
   * 自定义上传方法
   */
  customUpload?: (file: File) => string | Promise<string>
}
