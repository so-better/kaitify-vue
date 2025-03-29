import { Instance } from '@popperjs/core';
import { BubblePropsType } from './props';
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {
        elRef: HTMLDivElement;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<BubblePropsType, {
    elRef: import('vue').Ref<HTMLElement | undefined, HTMLElement | undefined>;
    popperInstance: import('vue').Ref<Instance | undefined, Instance | undefined>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    hidden: (value: Element) => any;
    show: (value: Element) => any;
    showing: (value: Element) => any;
    shown: (value: Element) => any;
    hide: (value: Element) => any;
    hiding: (value: Element) => any;
}, string, import('vue').PublicProps, Readonly<BubblePropsType> & Readonly<{
    onHidden?: ((value: Element) => any) | undefined;
    onShow?: ((value: Element) => any) | undefined;
    onShowing?: ((value: Element) => any) | undefined;
    onShown?: ((value: Element) => any) | undefined;
    onHide?: ((value: Element) => any) | undefined;
    onHiding?: ((value: Element) => any) | undefined;
}>, {
    visible: boolean;
    zIndex: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
