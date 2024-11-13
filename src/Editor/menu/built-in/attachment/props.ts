export type AttachmentMenuPropsType = {
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 上传文件方法
   */
  uploadFile?: (file: File) => string | Promise<string>
  /**
   * 附件logo图片地址
   */
  iconUrl?: string
}
