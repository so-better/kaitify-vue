import { Ref } from 'vue';
import { Instance } from '@popperjs/core';
import { PopoverPropsType, PopoverPlacementType } from './props';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        refer?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {
        refer: HTMLDivElement;
        popover: HTMLDivElement;
        arrow: HTMLDivElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<PopoverPropsType, {
    visible: Ref<boolean, boolean>;
    showPopover: () => void;
    hidePopover: () => void;
    popperInstance: Ref<Instance | undefined, Instance | undefined>;
    update: () => Promise<void>;
    realPlacement: Ref<PopoverPlacementType, PopoverPlacementType>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    hidden: (value: HTMLDivElement) => any;
    hide: (value: HTMLDivElement) => any;
    show: (value: HTMLDivElement) => any;
    showing: (value: HTMLDivElement) => any;
    shown: (value: HTMLDivElement) => any;
    hiding: (value: HTMLDivElement) => any;
}, string, import('vue').PublicProps, Readonly<PopoverPropsType> & Readonly<{
    onHidden?: ((value: HTMLDivElement) => any) | undefined;
    onHide?: ((value: HTMLDivElement) => any) | undefined;
    onShow?: ((value: HTMLDivElement) => any) | undefined;
    onShowing?: ((value: HTMLDivElement) => any) | undefined;
    onShown?: ((value: HTMLDivElement) => any) | undefined;
    onHiding?: ((value: HTMLDivElement) => any) | undefined;
}>, {
    zIndex: number;
    animation: "fade" | "translate" | (string & {});
    disabled: boolean;
    placement: PopoverPlacementType;
    arrow: boolean;
    trigger: "hover" | "click" | "custom";
    delay: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    refer: HTMLDivElement;
    popover: HTMLDivElement;
    arrow: HTMLDivElement;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
