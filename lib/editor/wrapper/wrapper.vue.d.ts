import { Ref } from 'vue';
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
        wrapper: HTMLDivElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<WrapperPropsType, {
    state: Ref<StateType, StateType>;
    wrapperRef: Readonly<import('vue').ShallowRef<HTMLElement | null>>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<WrapperPropsType> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    modelValue: string;
    locale: import('../../locale').LocaleType;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    wrapper: HTMLDivElement;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
