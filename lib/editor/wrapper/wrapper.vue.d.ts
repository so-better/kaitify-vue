import { Ref } from 'vue';
import { Editor } from '@kaitify/core';
import { StateType, WrapperPropsType } from './props';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        before?(_: {
            state: StateType;
        }): any;
        before?(_: {
            state: StateType;
        }): any;
        after?(_: {
            state: StateType;
        }): any;
        after?(_: {
            state: StateType;
        }): any;
        default?(_: {
            state: StateType;
        }): any;
    };
    refs: {
        elRef: HTMLDivElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<WrapperPropsType, {
    state: Ref<StateType, StateType>;
    elRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string) => any;
    selectionUpdate: (value: import('@kaitify/core').Selection) => any;
    insertParagraph: (value: import('@kaitify/core').KNode) => any;
    deleteComplete: () => any;
    keydown: (value: KeyboardEvent) => any;
    keyup: (value: KeyboardEvent) => any;
    focus: (value: FocusEvent) => any;
    blur: (value: FocusEvent) => any;
    beforeUpdateView: () => any;
    afterUpdateView: () => any;
    created: (value: Editor) => any;
}, string, import('vue').PublicProps, Readonly<WrapperPropsType> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onSelectionUpdate?: ((value: import('@kaitify/core').Selection) => any) | undefined;
    onInsertParagraph?: ((value: import('@kaitify/core').KNode) => any) | undefined;
    onDeleteComplete?: (() => any) | undefined;
    onKeydown?: ((value: KeyboardEvent) => any) | undefined;
    onKeyup?: ((value: KeyboardEvent) => any) | undefined;
    onFocus?: ((value: FocusEvent) => any) | undefined;
    onBlur?: ((value: FocusEvent) => any) | undefined;
    onBeforeUpdateView?: (() => any) | undefined;
    onAfterUpdateView?: (() => any) | undefined;
    onCreated?: ((value: Editor) => any) | undefined;
}>, {
    dark: boolean;
    disabled: boolean;
    modelValue: string;
    autofocus: boolean;
    placeholder: string;
    allowCopy: boolean;
    allowPaste: boolean;
    allowCut: boolean;
    allowPasteHtml: boolean;
    priorityPasteFiles: boolean;
    textRenderTag: string;
    blockRenderTag: string;
    locale: import('../../locale').LocaleType;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    elRef: HTMLDivElement;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
