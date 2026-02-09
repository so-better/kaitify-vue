import { LocaleType } from '../../locale';
import { Editor, EditorConfigureOptionType, KNode, Selection } from '@kaitify/core';
/**
 * 编辑器参数类型
 */
export type WrapperPropsType = {
    /**
     * 编辑器的值
     */
    modelValue: string;
    /**
     * 编辑器是否禁用
     */
    disabled?: boolean;
    /**
     * 语言环境
     */
    locale?: LocaleType;
    /**
     * before插槽挂载的元素，如果不设置，则就放置在编辑器前面
     */
    appendBeforeTo?: string | HTMLElement;
    /**
     * after插槽挂载的元素，如果不设置，则就放置在编辑器后面
     */
    appendAfterTo?: string | HTMLElement;
    /**
     * 是否自动聚焦
     */
    autofocus?: EditorConfigureOptionType['autofocus'];
    /**
     * 编辑器内容只有一个段落时的默认文本
     */
    placeholder?: EditorConfigureOptionType['placeholder'];
    /**
     * 是否深色模式
     */
    dark?: EditorConfigureOptionType['dark'];
    /**
     * 是否允许复制
     */
    allowCopy?: EditorConfigureOptionType['allowCopy'];
    /**
     * 是否允许粘贴
     */
    allowPaste?: EditorConfigureOptionType['allowPaste'];
    /**
     * 是否允许剪切
     */
    allowCut?: EditorConfigureOptionType['allowCut'];
    /**
     * 是否允许粘贴html
     */
    allowPasteHtml?: EditorConfigureOptionType['allowPasteHtml'];
    /**
     * 剪切板同时存在文件和html/text时，是否优先粘贴文件
     */
    priorityPasteFiles?: EditorConfigureOptionType['priorityPasteFiles'];
    /**
     * 自定义编辑器内渲染文本节点的真实标签
     */
    textRenderTag?: EditorConfigureOptionType['textRenderTag'];
    /**
     * 自定义编辑内渲染默认块级节点的真实标签，即段落标签
     */
    blockRenderTag?: EditorConfigureOptionType['blockRenderTag'];
    /**
     * 自定义编辑器内定义需要置空的标签
     */
    emptyRenderTags?: EditorConfigureOptionType['emptyRenderTags'];
    /**
     * 自定义编辑器内额外保留的标签
     */
    extraKeepTags?: EditorConfigureOptionType['extraKeepTags'];
    /**
     * 自定义插件数组
     */
    extensions?: EditorConfigureOptionType['extensions'];
    /**
     * 自定义节点数组格式化规则
     */
    formatRules?: EditorConfigureOptionType['formatRules'];
    /**
     * 自定义dom转为非文本节点的后续处理
     */
    onDomParseNode?: EditorConfigureOptionType['onDomParseNode'];
    /**
     * 节点粘贴保留标记的自定义方法
     */
    onPasteKeepMarks?: EditorConfigureOptionType['onPasteKeepMarks'];
    /**
     * 节点粘贴保留样式的自定义方法
     */
    onPasteKeepStyles?: EditorConfigureOptionType['onPasteKeepStyles'];
    /**
     * 编辑器粘贴纯文本时触发，如果返回true则表示继续使用默认逻辑，返回false则不走默认逻辑，需要进行自定义处理
     */
    onPasteText?: EditorConfigureOptionType['onPasteText'];
    /**
     * 编辑器粘贴html内容时触发，如果返回true则表示继续使用默认逻辑，返回false则不走默认逻辑，需要进行自定义处理
     */
    onPasteHtml?: EditorConfigureOptionType['onPasteHtml'];
    /**
     * 编辑器粘贴图片时触发，如果返回true则表示继续使用默认逻辑，返回false则不走默认逻辑，需要进行自定义处理
     */
    onPasteImage?: EditorConfigureOptionType['onPasteImage'];
    /**
     * 编辑器粘贴视频时触发，如果返回true则表示继续使用默认逻辑，返回false则不走默认逻辑，需要进行自定义处理
     */
    onPasteVideo?: EditorConfigureOptionType['onPasteVideo'];
    /**
     * 编辑器粘贴除了图片和视频以外的文件时触发，需要自定义处理
     */
    onPasteFile?: EditorConfigureOptionType['onPasteFile'];
    /**
     * 在删除和换行操作中块节点节点从其父节点中抽离出去成为与父节点同级的节点后触发，如果返回true则表示继续使用默认逻辑，会将该节点转为段落，返回false则不走默认逻辑，需要自定义处理
     */
    onDetachMentBlockFromParent?: EditorConfigureOptionType['onDetachMentBlockFromParent'];
    /**
     * 编辑器updateView执行时，通过比对新旧节点数组获取需要格式化的节点，在这些节点被格式化前，触发此方法，回调参数即当前需要被格式化的节点，该方法返回一个节点，返回的节点将会被格式化，如果你不需要任何特殊处理，返回入参提供的节点即可
     */
    onBeforePatchNodeToFormat?: EditorConfigureOptionType['onBeforePatchNodeToFormat'];
    /**
     * 编辑器进行光标纠正时触发，在这里可以修改虚拟光标的位置
     */
    onRedressSelection?: EditorConfigureOptionType['onRedressSelection'];
};
/**
 * 编辑器事件类型
 */
export type WrapperEmitsType = {
    /**
     * 编辑器值改变触发的事件
     */
    (e: 'update:modelValue', value: string): void;
    /**
     * 编辑器光标发生变化触发的事件
     */
    (e: 'selectionUpdate', value: Selection): void;
    /**
     * 编辑器进行换行时触发的事件
     */
    (e: 'insertParagraph', value: KNode): void;
    /**
     * 编辑器执行删除操作完成的时候触发的事件
     */
    (e: 'deleteComplete'): void;
    /**
     * 编辑器内键盘按下触发的事件
     */
    (e: 'keydown', value: KeyboardEvent): void;
    /**
     * 编辑器内键盘松开触发的事件
     */
    (e: 'keyup', value: KeyboardEvent): void;
    /**
     * 编辑器获取光标触发的事件
     */
    (e: 'focus', value: FocusEvent): void;
    /**
     * 编辑器失去光标触发的事件
     */
    (e: 'blur', value: FocusEvent): void;
    /**
     * 编辑器视图更新前触发的事件
     */
    (e: 'beforeUpdateView'): void;
    /**
     * 编辑器视图更新后触发的事件
     */
    (e: 'afterUpdateView'): void;
    /**
     * 编辑器创建完成后触发的事件
     */
    (e: 'created', value: Editor): void;
};
/**
 * 编辑器状态对象
 */
export type StateType = {
    editor?: Editor;
    selection?: Selection;
};
