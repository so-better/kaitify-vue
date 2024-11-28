import { MenuPropsType } from '@/editor/menu/props'

export type AttachmentMenuPropsType = {
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 浮层属性
   */
  popoverOptions?: MenuPropsType['popoverOptions']
  /**
   * 附件logo图片地址
   */
  iconUrl?: string
  /**
   * 自定义上传方法
   */
  customUpload?: (file: File) => string | Promise<string>
}
