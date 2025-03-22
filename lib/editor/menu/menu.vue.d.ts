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
                readonly onHidden?: ((...args: any[]) => any) | undefined;
                readonly onShow?: ((...args: any[]) => any) | undefined;
                readonly onShowing?: ((...args: any[]) => any) | undefined;
                readonly onShown?: ((...args: any[]) => any) | undefined;
                readonly onHide?: ((...args: any[]) => any) | undefined;
                readonly onHiding?: ((...args: any[]) => any) | undefined;
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
            $emit: ((event: "hidden", ...args: any[]) => void) & ((event: "show", ...args: any[]) => void) & ((event: "showing", ...args: any[]) => void) & ((event: "shown", ...args: any[]) => void) & ((event: "hide", ...args: any[]) => void) & ((event: "hiding", ...args: any[]) => void);
            $el: any;
            $options: import('vue').ComponentOptionsBase<Readonly<import('../../core/popover').PopoverPropsType> & Readonly<{
                onHidden?: ((...args: any[]) => any) | undefined;
                onShow?: ((...args: any[]) => any) | undefined;
                onShowing?: ((...args: any[]) => any) | undefined;
                onShown?: ((...args: any[]) => any) | undefined;
                onHide?: ((...args: any[]) => any) | undefined;
                onHiding?: ((...args: any[]) => any) | undefined;
            }>, {
                visible: import('vue').Ref<boolean, boolean>;
                showPopover: () => void;
                hidePopover: () => void;
                popperInstance: import('vue').Ref<import('@popperjs/core').Instance | undefined, import('@popperjs/core').Instance | undefined>;
                update: () => Promise<void>;
                realPlacement: import('vue').Ref<import('../../core/popover').PopoverPlacementType, import('../../core/popover').PopoverPlacementType>;
            }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                hidden: (...args: any[]) => void;
                show: (...args: any[]) => void;
                showing: (...args: any[]) => void;
                shown: (...args: any[]) => void;
                hide: (...args: any[]) => void;
                hiding: (...args: any[]) => void;
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
            onHidden?: ((...args: any[]) => any) | undefined;
            onShow?: ((...args: any[]) => any) | undefined;
            onShowing?: ((...args: any[]) => any) | undefined;
            onShown?: ((...args: any[]) => any) | undefined;
            onHide?: ((...args: any[]) => any) | undefined;
            onHiding?: ((...args: any[]) => any) | undefined;
        }>, "visible" | "popperInstance" | "showPopover" | "hidePopover" | "update" | "realPlacement" | ("disabled" | "zIndex" | "animation" | "placement" | "arrow" | "trigger" | "delay")> & import('vue').ShallowUnwrapRef<{
            visible: import('vue').Ref<boolean, boolean>;
            showPopover: () => void;
            hidePopover: () => void;
            popperInstance: import('vue').Ref<import('@popperjs/core').Instance | undefined, import('@popperjs/core').Instance | undefined>;
            update: () => Promise<void>;
            realPlacement: import('vue').Ref<import('../../core/popover').PopoverPlacementType, import('../../core/popover').PopoverPlacementType>;
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
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    select: (...args: any[]) => void;
    operate: (...args: any[]) => void;
    popoverShow: (...args: any[]) => void;
    popoverShowing: (...args: any[]) => void;
    popoverShown: (...args: any[]) => void;
    popoverHide: (...args: any[]) => void;
    popoverHiding: (...args: any[]) => void;
    popoverHidden: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<MenuPropsType> & Readonly<{
    onSelect?: ((...args: any[]) => any) | undefined;
    onOperate?: ((...args: any[]) => any) | undefined;
    onPopoverShow?: ((...args: any[]) => any) | undefined;
    onPopoverShowing?: ((...args: any[]) => any) | undefined;
    onPopoverShown?: ((...args: any[]) => any) | undefined;
    onPopoverHide?: ((...args: any[]) => any) | undefined;
    onPopoverHiding?: ((...args: any[]) => any) | undefined;
    onPopoverHidden?: ((...args: any[]) => any) | undefined;
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
