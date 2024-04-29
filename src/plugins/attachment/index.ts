import { ComponentInternalInstance, h } from 'vue'
import { AlexEditor, AlexElement, AlexElementsRangeType } from 'alex-editor'
import { ObjectType, PluginType } from '../../core/tool'
import Layer from '../../components/layer/layer.vue'
import Button from '../../components/button/button.vue'
import Icon from '../../components/icon/icon.vue'
import InsertAttachment from './insertAttachment/insertAttachment.vue'
import { InsertAttachmentUploadErrorType } from './insertAttachment/props'
import { event as DapEvent, common as DapCommon } from 'dap-util'
import { hasLinkInRange, hasPreInRange, hasQuoteInRange } from '../../core/function'

export type AttachmentOptionsType = {
	//排序
	sequence?: number
	//工具提示内容
	title?: string
	//按钮是否显示左侧边框
	leftBorder?: boolean
	//按钮是否显示右侧边框
	rightBorder?: boolean
	//定义可选择的文件类型，默认不限制类型，设定此参数后选择文件时会自动过滤非符合的文件类型
	accept?: string
	//支持的类型数组
	allowedFileType?: string[]
	//是否多选
	multiple?: boolean
	//选择的单个文件最大值，单位kb，不设置将不限制
	maxSize?: number
	//选择的单个文件最小值，单位kb，不设置将不限制
	minSize?: number
	//是否自定义上传附件
	customUpload?: (files: File[]) => string[] | Promise<string[]>
	//处理上传附件异常
	handleError?: (error: InsertAttachmentUploadErrorType, file: File) => void
}

/**
 * 元素是否附件
 * @param element
 * @returns
 */
export const isAttachment = (element: AlexElement) => {
	if (element.isEmpty()) {
		return false
	}
	return element.parsedom == 'span' && element.type == 'closed' && element.hasMarks() && element.marks!['data-attachment']
}

/**
 * 选区是否含有附件
 * @param editor
 * @param dataRangeCaches
 * @returns
 */
export const hasAttachmentInRange = (editor: AlexEditor, dataRangeCaches: AlexElementsRangeType) => {
	if (!editor.range) {
		return false
	}
	if (editor.range.anchor.isEqual(editor.range.focus)) {
		return isAttachment(editor.range.anchor.element)
	}
	return dataRangeCaches.flatList.some(item => {
		return isAttachment(item.element)
	})
}

/**
 * 附件插件
 * @param options
 * @returns
 */
export const attachment = (options?: AttachmentOptionsType) => {
	if (!DapCommon.isObject(options)) {
		options = {}
	}
	const plugin: PluginType = (editifyInstance: ComponentInternalInstance, editTrans: (key: string) => any) => {
		let isDisabled = false
		//如果光标范围内有链接、代码块和引用则禁用
		if (editifyInstance.exposed!.editor.value) {
			isDisabled = hasPreInRange(editifyInstance.exposed!.editor.value, editifyInstance.exposed!.dataRangeCaches.value) || hasLinkInRange(editifyInstance.exposed!.editor.value, editifyInstance.exposed!.dataRangeCaches.value) || hasQuoteInRange(editifyInstance.exposed!.editor.value, editifyInstance.exposed!.dataRangeCaches.value)
		}
		return {
			name: 'attachment',
			//附件菜单项配置
			menu: {
				sequence: options!.sequence || 100,
				extraDisabled: (name: string) => {
					//如果光标选区内有附件则禁用链接菜单、引用菜单、代码块菜单
					if (name == 'link' || name == 'quote' || name == 'codeBlock') {
						return hasAttachmentInRange(editifyInstance.exposed!.editor.value, editifyInstance.exposed!.dataRangeCaches.value)
					}
					return false
				},
				extend: {
					type: 'select',
					title: options!.title || editTrans('insertAttachment'),
					leftBorder: options!.leftBorder,
					rightBorder: options!.rightBorder,
					hideScroll: true,
					disabled: isDisabled,
					default: () => h(Icon, { value: 'attachment' }),
					layer: (_name: string, btnInstance: InstanceType<typeof Button>) =>
						h(InsertAttachment, {
							color: <string | null>editifyInstance.props.color,
							accept: options!.accept,
							allowedFileType: options!.allowedFileType || [],
							multiple: !!options!.multiple,
							maxSize: options!.maxSize,
							minSize: options!.minSize,
							customUpload: options!.customUpload,
							handleError: options!.handleError,
							onChange: () => {
								;(<InstanceType<typeof Layer>>btnInstance.$refs.layerRef).setPosition()
							},
							onInsert: (name: string, urls: string[]) => {
								//过滤掉空的地址
								urls = urls.filter(url => {
									return !!url
								})
								//如果有地址存在
								if (urls.length) {
									//获取editor对象
									const editor = <AlexEditor>editifyInstance.exposed!.editor.value
									//遍历地址数组
									urls.forEach(url => {
										const marks: ObjectType = {
											'data-attachment': url,
											'data-attachment-name': name || editTrans('attachmentDefaultName'),
											contenteditable: 'false'
										}
										//创建元素
										const attachmentElement = new AlexElement('closed', 'span', marks, null, null)
										//插入编辑器
										editor.insertElement(attachmentElement)
										//创建空文本元素
										const beforeText = AlexElement.getSpaceElement()
										const afterText = AlexElement.getSpaceElement()
										//将空白文本元素插入附件两端
										editor.addElementAfter(afterText, attachmentElement)
										editor.addElementBefore(beforeText, attachmentElement)
										//移动光标到新插入的元素
										editor.range!.anchor.moveToStart(afterText)
										editor.range!.focus.moveToStart(afterText)
									})
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
			},
			//找到附件元素点击下载
			updateView: () => {
				const editor = <AlexEditor>editifyInstance.exposed!.editor.value
				AlexElement.flatElements(editor.stack).forEach(el => {
					if (el.parsedom == 'span' && el.hasMarks() && el.marks!['data-attachment']) {
						DapEvent.off(<HTMLElement>el.elm, 'click')
						//单击下载
						DapEvent.on(<HTMLElement>el.elm, 'click', async () => {
							//获取文件地址
							const url = el.marks!['data-attachment']
							//使用fetch读取文件地址
							const res = await fetch(url, {
								method: 'GET'
							})
							//获取blob数据
							const blob = await res.blob()
							//创建a标签进行下载
							const a = document.createElement('a')
							a.setAttribute('target', '_blank')
							a.setAttribute('href', URL.createObjectURL(blob))
							a.setAttribute('download', el.marks!['data-attachment-name'])
							a.click()
						})
					}
				})
			},
			//span含有data-attachment的元素设为自闭合元素
			customParseNode: (el: AlexElement) => {
				if (el.hasMarks() && el.marks!['data-attachment'] && el.parsedom == 'span') {
					el.type = 'closed'
				}
				return el
			},
			//span元素粘贴保留data-attachment
			pasteKeepMarks: {
				'data-attachment': ['span'],
				'data-attachment-name': ['span']
			},
			//自定义渲染规范
			renderRule: (el: AlexElement) => {
				if (el.type == 'closed' && el.hasMarks() && el.marks!['data-attachment']) {
					//设置title
					el.marks!['title'] = editTrans('attachmentDownloadTitle')
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
