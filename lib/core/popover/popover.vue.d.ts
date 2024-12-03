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
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    show: (...args: any[]) => void;
    showing: (...args: any[]) => void;
    shown: (...args: any[]) => void;
    hide: (...args: any[]) => void;
    hiding: (...args: any[]) => void;
    hidden: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<PopoverPropsType> & Readonly<{
    onShow?: ((...args: any[]) => any) | undefined;
    onShowing?: ((...args: any[]) => any) | undefined;
    onShown?: ((...args: any[]) => any) | undefined;
    onHide?: ((...args: any[]) => any) | undefined;
    onHiding?: ((...args: any[]) => any) | undefined;
    onHidden?: ((...args: any[]) => any) | undefined;
}>, {
    zIndex: number;
    disabled: boolean;
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
