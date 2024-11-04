import { PropType } from 'vue'

/**
 * 编辑器参数类型
 */
export interface EditorPropsType {
	value: string
	placeholder?: string
}

/**
 * 编辑器参数
 */
export const EditorProps = {
	value: String as PropType<EditorPropsType['value']>,
	placeholder: String as PropType<EditorPropsType['placeholder']>
}
