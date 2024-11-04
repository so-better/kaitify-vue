import { defineComponent, h, onMounted, ref, VNode } from 'vue'
import { Editor as KaitifyEditor } from '@kaitify/core'
import { EditorProps, EditorPropsType } from './props'
import { createVNodes } from './render'

export const Editor = defineComponent(
	(props: EditorPropsType) => {
		//编辑器dom元素
		const elRef = ref<HTMLElement | null>(null)
		//编辑器实例
		const editorRef = ref<KaitifyEditor | null>(null)
		//编辑器属性
		const { value, editable = true, autofocus = false, placeholder = '', dark = false, allowCopy = true, allowCut = true, allowPaste = true, allowPasteHtml = false, priorityPasteFiles = false, textRenderTag = 'span', blockRenderTag = 'p', emptyRenderTags = [], extraKeepTags = [], extensions = [], formatRules = [], domParseNodeCallback, pasteKeepMarks, pasteKeepStyles } = props
		console.log(props)
		//编辑器内容虚拟节点
		const vnodes = ref<VNode[]>([])
		//初始化渲染编辑器
		onMounted(async () => {
			editorRef.value = await KaitifyEditor.configure({
				el: elRef.value!,
				onUpdateView() {
					vnodes.value = createVNodes(this)
					return false
				},
				value,
				placeholder,
				dark,
				editable,
				autofocus,
				allowCopy,
				allowCut,
				allowPaste,
				allowPasteHtml,
				priorityPasteFiles,
				textRenderTag,
				blockRenderTag,
				emptyRenderTags,
				extraKeepTags,
				extensions,
				formatRules,
				domParseNodeCallback,
				pasteKeepMarks,
				pasteKeepStyles
			})
		})

		return () => {
			return h(
				'div',
				{
					ref: elRef
				},
				{
					default: () => vnodes.value
				}
			)
		}
	},
	{
		props: EditorProps
	}
)
