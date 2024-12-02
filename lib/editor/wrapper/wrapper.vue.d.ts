import { StateType, WrapperPropsType } from './props';
declare function __VLS_template(): {
    slots: {
        before?(_: {
            state: StateType;
        }): any;
        after?(_: {
            state: StateType;
        }): any;
        bubble?(_: {
            state: StateType;
        }): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<WrapperPropsType, {
    elRef: import('vue').Ref<HTMLElement | undefined, HTMLElement | undefined>;
    state: import('vue').ComputedRef<StateType>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    created: (...args: any[]) => void;
    blur: (...args: any[]) => void;
    focus: (...args: any[]) => void;
    keydown: (...args: any[]) => void;
    keyup: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    selectionUpdate: (...args: any[]) => void;
    insertParagraph: (...args: any[]) => void;
    deleteComplete: (...args: any[]) => void;
    beforeUpdateView: (...args: any[]) => void;
    afterUpdateView: (...args: any[]) => void;
    bubbleShow: (...args: any[]) => void;
    bubbleShowing: (...args: any[]) => void;
    bubbleShown: (...args: any[]) => void;
    bubbleHide: (...args: any[]) => void;
    bubbleHiding: (...args: any[]) => void;
    bubbleHidden: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<WrapperPropsType> & Readonly<{
    onCreated?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onKeydown?: ((...args: any[]) => any) | undefined;
    onKeyup?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onSelectionUpdate?: ((...args: any[]) => any) | undefined;
    onInsertParagraph?: ((...args: any[]) => any) | undefined;
    onDeleteComplete?: ((...args: any[]) => any) | undefined;
    onBeforeUpdateView?: ((...args: any[]) => any) | undefined;
    onAfterUpdateView?: ((...args: any[]) => any) | undefined;
    onBubbleShow?: ((...args: any[]) => any) | undefined;
    onBubbleShowing?: ((...args: any[]) => any) | undefined;
    onBubbleShown?: ((...args: any[]) => any) | undefined;
    onBubbleHide?: ((...args: any[]) => any) | undefined;
    onBubbleHiding?: ((...args: any[]) => any) | undefined;
    onBubbleHidden?: ((...args: any[]) => any) | undefined;
}>, {
    disabled: boolean;
    modelValue: string;
    locale: import('../../locale').LocaleType;
    hideBubbleOnMousedown: boolean;
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
