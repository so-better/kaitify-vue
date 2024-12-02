import { MenuPropsType } from '@/editor/menu/props'

export type ImageMenuPropsType = {
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 初始图片宽度
   */
  width?: string | number
  /**
   * 自定义上传方法
   */
  customUpload?: (file: File) => string | Promise<string>
  /**
   * 浮层属性
   */
  popoverProps?: MenuPropsType['popoverProps']
}
