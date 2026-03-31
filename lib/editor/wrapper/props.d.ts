import { LocaleType } from '../../locale';
import { Editor, EditorConfigureOptionType, Selection } from '@kaitify/core';
/**
 * 编辑器参数类型
 */
export type WrapperPropsType = {
    /**
     * 编辑器的值
     */
    modelValue: string;
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
     * 编辑器配置参数
     */
    options?: Omit<EditorConfigureOptionType, 'el' | 'value' | 'onChange' | 'onUpdateView'>;
};
/**
 * 编辑器事件类型
 */
export type WrapperEmitsType = {
    /**
     * 编辑器值改变触发的事件
     */
    (e: 'update:modelValue', value: string): void;
};
/**
 * 编辑器状态对象
 */
export type StateType = {
    editor?: Editor;
    selection?: Selection;
};
