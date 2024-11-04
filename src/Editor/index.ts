import { defineComponent, h, onMounted, ref } from 'vue'
import { Editor as KaitifyEditor } from '@kaitify/core'
import { EditorProps, EditorPropsType } from './props'

export const Editor = defineComponent(
	(props: EditorPropsType) => {
		const elRef = ref<HTMLElement | null>(null)
		const { value, placeholder = '请输入' } = props
		onMounted(() => {
			const editor = KaitifyEditor.configure({
				el: elRef.value!,
				value: value,
				placeholder: placeholder
			})
		})

		return () => {
			return h('div', {
				ref: elRef
			})
		}
	},
	{
		props: EditorProps
	}
)
