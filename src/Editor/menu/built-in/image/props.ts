export type ImageMenuPropsType = {
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 上传图片的方法
   */
  uploadImage?: (file: File) => string | Promise<string>
  /**
   * 图片上传后的宽度
   */
  width?: string | number
}
