import { LocaleType } from '../../locale';
import { Editor, Extension, KNode, KNodeMarksType, KNodeStylesType, RuleFunctionType } from '@kaitify/core';
import { BubblePropsType } from '../bubble';
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
     * bubble气泡参数
     */
    bubbleProps?: BubblePropsType;
    /**
     * 是否自动聚焦
     */
    autofocus?: boolean;
    /**
     * 编辑器内容只有一个段落时的默认文本
     */
    placeholder?: string;
    /**
     * 是否深色模式
     */
    dark?: boolean;
    /**
     * 是否允许复制
     */
    allowCopy?: boolean;
    /**
     * 是否允许粘贴
     */
    allowPaste?: boolean;
    /**
     * 是否允许剪切
     */
    allowCut?: boolean;
    /**
     * 是否允许粘贴html
     */
    allowPasteHtml?: boolean;
    /**
     * 剪切板同时存在文件和html/text时，是否优先粘贴文件
     */
    priorityPasteFiles?: boolean;
    /**
     * 自定义编辑器内渲染文本节点的真实标签
     */
    textRenderTag?: string;
    /**
     * 自定义编辑内渲染默认块级节点的真实标签，即段落标签
     */
    blockRenderTag?: string;
    /**
     * 自定义编辑器内定义需要置空的标签
     */
    emptyRenderTags?: string[];
    /**
     * 自定义编辑器内额外保留的标签
     */
    extraKeepTags?: string[];
    /**
     * 自定义插件数组
     */
    extensions?: Extension[];
    /**
     * 自定义节点数组格式化规则
     */
    formatRules?: RuleFunctionType[];
    /**
     * 自定义dom转为非文本节点的后续处理
     */
    domParseNodeCallback?: (this: Editor, node: KNode) => KNode;
    /**
     * 节点粘贴保留标记的自定义方法
     */
    pasteKeepMarks?: (this: Editor, node: KNode) => KNodeMarksType;
    /**
     * 节点粘贴保留样式的自定义方法
     */
    pasteKeepStyles?: (this: Editor, node: KNode) => KNodeStylesType;
    /**
     * 编辑器粘贴纯文本时触发，如果返回true则表示继续使用默认逻辑，返回false则不走默认逻辑，需要进行自定义处理
     */
    onPasteText?: (this: Editor, text: string) => boolean | Promise<boolean>;
    /**
     * 编辑器粘贴html内容时触发，如果返回true则表示继续使用默认逻辑，返回false则不走默认逻辑，需要进行自定义处理
     */
    onPasteHtml?: (this: Editor, nodes: KNode[], html: string) => boolean | Promise<boolean>;
    /**
     * 编辑器粘贴图片时触发，如果返回true则表示继续使用默认逻辑，返回false则不走默认逻辑，需要进行自定义处理
     */
    onPasteImage?: (this: Editor, file: File) => boolean | Promise<boolean>;
    /**
     * 编辑器粘贴视频时触发，如果返回true则表示继续使用默认逻辑，返回false则不走默认逻辑，需要进行自定义处理
     */
    onPasteVideo?: (this: Editor, file: File) => boolean | Promise<boolean>;
    /**
     * 编辑器粘贴除了图片和视频以外的文件时触发，需要自定义处理
     */
    onPasteFile?: (this: Editor, file: File) => void | Promise<void>;
    /**
     * 在删除和换行操作中块节点节点从其父节点中抽离出去成为与父节点同级的节点后触发，如果返回true则表示继续使用默认逻辑，会将该节点转为段落，返回false则不走默认逻辑，需要自定义处理
     */
    onDetachMentBlockFromParentCallback?: (this: Editor, node: KNode) => boolean;
    /**
     * 编辑器updateView执行时，通过比对新旧节点数组获取需要格式化的节点，在这些节点被格式化前，触发此方法，回调参数即当前需要被格式化的节点，该方法返回一个节点，返回的节点将会被格式化，如果你不需要任何特殊处理，返回入参提供的节点即可
     */
    beforePatchNodeToFormat?: (this: Editor, node: KNode) => KNode;
};
