import { Editor, getNodeRenderOptions, KNodeRenderOptionType } from '@kaitify/core'
import { h } from 'vue'

/**
 * 生成VNode
 */
export const createVNode = (options: KNodeRenderOptionType) => {
  return h(
    options.tag,
    {
      ...options.attrs,
      style: options.styles
    },
    {
      default: () => {
        if (options.children && options.children.length) {
          return options.children.map(item => createVNode(item))
        }
        return options.textContent ?? ''
      }
    }
  )
}

/**
 * 创建VNode数组
 */
export const createVNodes = (editor: Editor) => {
  return editor.stackNodes.map(item => createVNode(getNodeRenderOptions(editor, item)))
}
