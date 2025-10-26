import { StateType, WrapperPropsType } from './props';
declare function __VLS_template(): {
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
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<WrapperPropsType, {
    state: import('vue').ComputedRef<StateType>;
    elRef: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    [x: string]: any;
} & {
    [x: string]: any;
}, string, import('vue').PublicProps, Readonly<WrapperPropsType> & Readonly<{
    [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
}>, {
    dark: boolean;
    disabled: boolean;
    modelValue: string;
    locale: import('../../locale').LocaleType;
    autofocus: boolean;
    placeholder: string;
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
