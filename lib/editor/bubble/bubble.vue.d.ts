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
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    hidden: (...args: any[]) => void;
    show: (...args: any[]) => void;
    showing: (...args: any[]) => void;
    shown: (...args: any[]) => void;
    hide: (...args: any[]) => void;
    hiding: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<BubblePropsType> & Readonly<{
    onHidden?: ((...args: any[]) => any) | undefined;
    onShow?: ((...args: any[]) => any) | undefined;
    onShowing?: ((...args: any[]) => any) | undefined;
    onShown?: ((...args: any[]) => any) | undefined;
    onHide?: ((...args: any[]) => any) | undefined;
    onHiding?: ((...args: any[]) => any) | undefined;
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
