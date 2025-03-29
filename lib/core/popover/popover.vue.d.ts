import { Instance } from '@popperjs/core';
import { PopoverPropsType, PopoverPlacementType } from './props';
declare function __VLS_template(): {
    slots: {
        refer?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {
        referRef: HTMLDivElement;
        popoverRef: HTMLDivElement;
        arrowRef: HTMLDivElement;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<PopoverPropsType, {
    visible: import('vue').Ref<boolean, boolean>;
    showPopover: () => void;
    hidePopover: () => void;
    popperInstance: import('vue').Ref<Instance | undefined, Instance | undefined>;
    update: () => Promise<void>;
    realPlacement: import('vue').Ref<PopoverPlacementType, PopoverPlacementType>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    hidden: (value: Element) => any;
    show: (value: Element) => any;
    showing: (value: Element) => any;
    shown: (value: Element) => any;
    hide: (value: Element) => any;
    hiding: (value: Element) => any;
}, string, import('vue').PublicProps, Readonly<PopoverPropsType> & Readonly<{
    onHidden?: ((value: Element) => any) | undefined;
    onShow?: ((value: Element) => any) | undefined;
    onShowing?: ((value: Element) => any) | undefined;
    onShown?: ((value: Element) => any) | undefined;
    onHide?: ((value: Element) => any) | undefined;
    onHiding?: ((value: Element) => any) | undefined;
}>, {
    disabled: boolean;
    zIndex: number;
    animation: "fade" | "translate" | (string & {});
    placement: PopoverPlacementType;
    arrow: boolean;
    trigger: "hover" | "click" | "custom";
    delay: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
