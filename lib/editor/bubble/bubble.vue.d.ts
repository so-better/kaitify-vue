import { Ref } from 'vue';
import { Instance } from '@popperjs/core';
import { BubblePropsType } from './props';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {
        elRef: HTMLDivElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<BubblePropsType, {
    elRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
    popperInstance: Ref<Instance | undefined, Instance | undefined>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    hidden: (value: HTMLDivElement) => any;
    hide: (value: HTMLDivElement) => any;
    show: (value: HTMLDivElement) => any;
    showing: (value: HTMLDivElement) => any;
    shown: (value: HTMLDivElement) => any;
    hiding: (value: HTMLDivElement) => any;
}, string, import('vue').PublicProps, Readonly<BubblePropsType> & Readonly<{
    onHidden?: ((value: HTMLDivElement) => any) | undefined;
    onHide?: ((value: HTMLDivElement) => any) | undefined;
    onShow?: ((value: HTMLDivElement) => any) | undefined;
    onShowing?: ((value: HTMLDivElement) => any) | undefined;
    onShown?: ((value: HTMLDivElement) => any) | undefined;
    onHiding?: ((value: HTMLDivElement) => any) | undefined;
}>, {
    zIndex: number;
    visible: boolean;
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
