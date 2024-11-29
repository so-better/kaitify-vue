import { Editor } from '@kaitify/core';
import { StateType, WrapperPropsType } from './props';
declare function __VLS_template(): {
    slots: {
        before?(_: {
            state: StateType;
            editor: Editor | undefined;
        }): any;
        after?(_: {
            state: StateType;
            editor: Editor | undefined;
        }): any;
        bubble?(_: {
            state: StateType;
            editor: Editor | undefined;
        }): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<WrapperPropsType, {
    elRef: import('vue').Ref<HTMLElement | undefined, HTMLElement | undefined>;
    editor: import('vue').Ref<Editor | undefined, Editor | undefined>;
    state: import('vue').ComputedRef<StateType>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    blur: (...args: any[]) => void;
    focus: (...args: any[]) => void;
    keydown: (...args: any[]) => void;
    keyup: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    selectionupdate: (...args: any[]) => void;
    insertParagraph: (...args: any[]) => void;
    deleteComplete: (...args: any[]) => void;
    beforeUpdateView: (...args: any[]) => void;
    afterUpdateView: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<WrapperPropsType> & Readonly<{
    onBlur?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onKeydown?: ((...args: any[]) => any) | undefined;
    onKeyup?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onSelectionupdate?: ((...args: any[]) => any) | undefined;
    onInsertParagraph?: ((...args: any[]) => any) | undefined;
    onDeleteComplete?: ((...args: any[]) => any) | undefined;
    onBeforeUpdateView?: ((...args: any[]) => any) | undefined;
    onAfterUpdateView?: ((...args: any[]) => any) | undefined;
}>, {
    disabled: boolean;
    modelValue: string;
    locale: import('../../locale').LocaleType;
    autofocus: boolean;
    placeholder: string;
    dark: boolean;
    allowCopy: boolean;
    allowPaste: boolean;
    allowCut: boolean;
    allowPasteHtml: boolean;
    priorityPasteFiles: boolean;
    textRenderTag: string;
    blockRenderTag: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
