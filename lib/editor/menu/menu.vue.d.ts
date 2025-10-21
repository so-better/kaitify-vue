import { Ref } from 'vue';
import { MenuDataType, MenuPropsType } from './props';
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
        popover?(_: {}): any;
        icon?(_: {
            option: MenuDataType;
        }): any;
        label?(_: {
            option: MenuDataType;
        }): any;
    };
    refs: {
        popoverRef: ({
            $: import('vue').ComponentInternalInstance;
            $data: {};
            $props: {
                readonly width?: (string | number) | undefined;
                readonly minWidth?: (string | number) | undefined;
                readonly maxHeight?: (string | number) | undefined;
                readonly placement?: import('../../core/popover').PopoverPlacementType | undefined;
                readonly arrow?: boolean | undefined;
                readonly trigger?: ("hover" | "click" | "custom") | undefined;
                readonly animation?: ("fade" | "translate" | (string & {})) | undefined;
                readonly zIndex?: number | undefined;
                readonly delay?: number | undefined;
                readonly disabled?: boolean | undefined;
                readonly onHidden?: ((value: Element) => any) | undefined;
                readonly onShow?: ((value: Element) => any) | undefined;
                readonly onShowing?: ((value: Element) => any) | undefined;
                readonly onShown?: ((value: Element) => any) | undefined;
                readonly onHide?: ((value: Element) => any) | undefined;
                readonly onHiding?: ((value: Element) => any) | undefined;
            } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import('vue').Slot<any> | undefined;
            }>;
            $root: import('vue').ComponentPublicInstance | null;
            $parent: import('vue').ComponentPublicInstance | null;
            $host: Element | null;
            $emit: ((event: "hidden", value: Element) => void) & ((event: "show", value: Element) => void) & ((event: "showing", value: Element) => void) & ((event: "shown", value: Element) => void) & ((event: "hide", value: Element) => void) & ((event: "hiding", value: Element) => void);
            $el: any;
            $options: import('vue').ComponentOptionsBase<Readonly<import('../../core/popover').PopoverPropsType> & Readonly<{
                onHidden?: ((value: Element) => any) | undefined;
                onShow?: ((value: Element) => any) | undefined;
                onShowing?: ((value: Element) => any) | undefined;
                onShown?: ((value: Element) => any) | undefined;
                onHide?: ((value: Element) => any) | undefined;
                onHiding?: ((value: Element) => any) | undefined;
            }>, {
                visible: Ref<boolean, boolean>;
                showPopover: () => void;
                hidePopover: () => void;
                popperInstance: Ref<import('@popperjs/core').Instance | undefined, import('@popperjs/core').Instance | undefined>;
                update: () => Promise<void>;
                realPlacement: Ref<import('../../core/popover').PopoverPlacementType, import('../../core/popover').PopoverPlacementType>;
            }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
                hidden: (value: Element) => any;
                show: (value: Element) => any;
                showing: (value: Element) => any;
                shown: (value: Element) => any;
                hide: (value: Element) => any;
                hiding: (value: Element) => any;
            }, string, {
                disabled: boolean;
                zIndex: number;
                animation: "fade" | "translate" | (string & {});
                placement: import('../../core/popover').PopoverPlacementType;
                arrow: boolean;
                trigger: "hover" | "click" | "custom";
                delay: number;
            }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import('vue').nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
        } & Readonly<{
            disabled: boolean;
            zIndex: number;
            animation: "fade" | "translate" | (string & {});
            placement: import('../../core/popover').PopoverPlacementType;
            arrow: boolean;
            trigger: "hover" | "click" | "custom";
            delay: number;
        }> & Omit<Readonly<import('../../core/popover').PopoverPropsType> & Readonly<{
            onHidden?: ((value: Element) => any) | undefined;
            onShow?: ((value: Element) => any) | undefined;
            onShowing?: ((value: Element) => any) | undefined;
            onShown?: ((value: Element) => any) | undefined;
            onHide?: ((value: Element) => any) | undefined;
            onHiding?: ((value: Element) => any) | undefined;
        }>, "visible" | "popperInstance" | "showPopover" | "hidePopover" | "update" | "realPlacement" | ("disabled" | "zIndex" | "animation" | "placement" | "arrow" | "trigger" | "delay")> & import('vue').ShallowUnwrapRef<{
            visible: Ref<boolean, boolean>;
            showPopover: () => void;
            hidePopover: () => void;
            popperInstance: Ref<import('@popperjs/core').Instance | undefined, import('@popperjs/core').Instance | undefined>;
            update: () => Promise<void>;
            realPlacement: Ref<import('../../core/popover').PopoverPlacementType, import('../../core/popover').PopoverPlacementType>;
        }> & {} & import('vue').ComponentCustomProperties & {} & {
            $slots: {
                refer?(_: {}): any;
                default?(_: {}): any;
            };
        }) | null;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<MenuPropsType, {
    showPopover: () => void;
    hidePopover: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    select: (value: MenuDataType) => any;
    operate: () => any;
    popoverShow: (value: Element) => any;
    popoverShowing: (value: Element) => any;
    popoverShown: (value: Element) => any;
    popoverHide: (value: Element) => any;
    popoverHiding: (value: Element) => any;
    popoverHidden: (value: Element) => any;
}, string, import('vue').PublicProps, Readonly<MenuPropsType> & Readonly<{
    onSelect?: ((value: MenuDataType) => any) | undefined;
    onOperate?: (() => any) | undefined;
    onPopoverShow?: ((value: Element) => any) | undefined;
    onPopoverShowing?: ((value: Element) => any) | undefined;
    onPopoverShown?: ((value: Element) => any) | undefined;
    onPopoverHide?: ((value: Element) => any) | undefined;
    onPopoverHiding?: ((value: Element) => any) | undefined;
    onPopoverHidden?: ((value: Element) => any) | undefined;
}>, {
    data: MenuDataType[];
    disabled: boolean;
    active: boolean;
    popover: boolean;
    popoverProps: Omit<import('../../core/popover').PopoverPropsType, "disabled" | "delay">;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
