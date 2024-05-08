import { common as DapCommon } from 'dap-util'
import { PluginType } from '../../core/tool'
import { ComponentInternalInstance, h } from 'vue'
import Icon from '../../components/icon/icon.vue'
import { AlexEditor, AlexElement } from 'alex-editor'
import KaTex from 'katex'
import Button from '../../components/button/button.vue'
import InsertMathformula from './insertMathformula/insertMathformula.vue'

export type MathformulaOptionsType = {
	//排序
	sequence?: number
	//工具提示内容
	title?: string
	//按钮是否显示左侧边框
	leftBorder?: boolean
	//按钮是否显示右侧边框
	rightBorder?: boolean
}

/**
 * 数学公式插件
 * @param options
 * @returns
 */
export const mathformula = (options?: MathformulaOptionsType) => {
	if (!DapCommon.isObject(options)) {
		options = {}
	}
	const plugin: PluginType = (editifyInstance: ComponentInternalInstance, editTrans: (key: string) => any) => {
		return {
			name: 'mathformula',
			//菜单项配置
			menu: {
				sequence: options!.sequence || 101,
				extend: {
					type: 'select',
					title: options!.title || editTrans('insertMathformula'),
					leftBorder: options!.leftBorder,
					rightBorder: options!.rightBorder,
					hideScroll: true,
					disabled: false,
					default: () => h(Icon, { value: 'mathformula' }),
					layer: (_name: string, btnInstance: InstanceType<typeof Button>) => {
						return h(InsertMathformula, {
							color: <string | null>editifyInstance.props.color,
							onInsert: (content: string) => {
								if (content) {
									//获取编辑器对象
									const editor = <AlexEditor>editifyInstance.exposed!.editor.value
									//获取mathml内容
									const mathml = KaTex.renderToString(content, {
										output: 'mathml',
										throwOnError: false
									})
									//mathml内容转为元素数组
									const elements = editor.parseHtml(mathml)
									//创建元素
									const mathformulaElement = new AlexElement(
										'inline',
										'span',
										{
											'data-editify-mathformula': 'true',
											contenteditable: 'false'
										},
										null,
										null
									)
									//将mathml元素数组都加入到元素内
									elements.forEach((item, index) => {
										editor.addElementTo(item, mathformulaElement, index)
									})
									//插入编辑器
									editor.insertElement(mathformulaElement)
									//创建空文本元素
									const leftSpace = AlexElement.getSpaceElement()
									const rightSpace = AlexElement.getSpaceElement()
									//将空白文本元素插入附件两端
									editor.addElementBefore(leftSpace, mathformulaElement)
									editor.addElementAfter(rightSpace, mathformulaElement)
									//移动光标到新插入的元素
									editor.range!.anchor.moveToEnd(rightSpace)
									editor.range!.focus.moveToEnd(rightSpace)
									//渲染
									editor.formatElementStack()
									editor.domRender()
									editor.rangeRender()
								}
								//关闭浮层
								btnInstance.show = false
							}
						})
					}
				}
			},
			//额外保留的标签
			extraKeepTags: ['math', 'mrow', 'mi', 'mo', 'mn', 'msup', 'msub', 'mfrac', 'msqrt', 'mroot', 'munder', 'mover', 'munderover', 'mtable', 'mtr', 'mtd', 'mtext', 'mspace', 'mmultiscripts', 'menclose', 'mglyph', 'maction', 'maligngroup', 'malignmark', 'mprescripts', 'none', 'mpadded', 'ms', 'mphantom', 'mstyle', 'merror', 'mscarries', 'mscarry', 'msline', 'msgroup', 'msrow', 'mscolumn', 'mstack', 'mlongdiv', 'mlabeledtr', 'mlabeledmultiscripts', 'semantics', 'msubsup'],
			//粘贴保留的属性
			pasteKeepMarks: {
				'data-editify-mathformula': ['span'],
				display: ['math'],
				encoding: ['annotation'],
				rowspacing: ['mtable'],
				columnalign: ['mtable'],
				columnspacing: ['mtable'],
				fence: ['mo'],
				xmlns: ['math'],
				stretchy: ['mo'],
				scriptlevel: ['mstyle'],
				displaystyle: ['mstyle'],
				mathvariant: ['mi'],
				actiontype: ['maction'],
				selection: ['maction'],
				groupalign: ['maligngroup', 'malignmark'],
				edge: ['maligngroup', 'malignmark'],
				rowalign: ['mrow'],
				mathsize: ['mi'],
				mathcolor: ['mi'],
				dir: ['mi'],
				linethickness: ['mfrac']
			},
			//自定义渲染规范
			renderRule: (el: AlexElement) => {
				if (el.hasMarks() && el.marks!['data-editify-mathformula']) {
					//获取editor对象
					const editor = <AlexEditor>editifyInstance.exposed!.editor.value
					//前一个元素
					const previousElement = editor.getPreviousElement(el)
					//后一个元素
					const newTextElement = editor.getNextElement(el)
					//如果不存在前一个元素或者前一个元素不是空白元素则设置空白元素
					if (!previousElement || !previousElement.isSpaceText()) {
						const spaceText = AlexElement.getSpaceElement()
						editor.addElementBefore(spaceText, el)
					}
					//如果不存在后一个元素或者后一个元素不是空白元素则设置空白元素
					if (!newTextElement || !newTextElement.isSpaceText()) {
						const spaceText = AlexElement.getSpaceElement()
						editor.addElementAfter(spaceText, el)
					}
				}
			}
		}
	}
	return plugin
}
