import { Ref } from 'vue';
import { TableMenuPropsType } from './props';
declare const _default: import('vue').DefineComponent<TableMenuPropsType, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<TableMenuPropsType> & Readonly<{}>, {
    disabled: boolean;
    maxRows: number;
    maxColumns: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    menuRef: ({
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: {
            readonly disabled?: boolean | undefined;
            readonly active?: boolean | undefined;
            readonly itemDisabled?: ((item: import('../..').MenuDataType) => boolean) | undefined;
            readonly itemActive?: ((item: import('../..').MenuDataType) => boolean) | undefined;
            readonly popover?: boolean | undefined;
            readonly popoverProps?: Omit<import('../../../../core/popover').PopoverPropsType, "disabled" | "delay"> | undefined;
            readonly data?: import('../..').MenuDataType[] | undefined;
            readonly shortcut?: ((e: KeyboardEvent) => boolean) | {
                [key: import('../..').MenuDataType["value"]]: (e: KeyboardEvent) => boolean;
            } | undefined;
            readonly onSelect?: ((value: import('../..').MenuDataType) => any) | undefined;
            readonly onOperate?: (() => any) | undefined;
            readonly onPopoverShow?: ((value: HTMLDivElement) => any) | undefined;
            readonly onPopoverShowing?: ((value: HTMLDivElement) => any) | undefined;
            readonly onPopoverShown?: ((value: HTMLDivElement) => any) | undefined;
            readonly onPopoverHide?: ((value: HTMLDivElement) => any) | undefined;
            readonly onPopoverHiding?: ((value: HTMLDivElement) => any) | undefined;
            readonly onPopoverHidden?: ((value: HTMLDivElement) => any) | undefined;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        } & {
            popoverRef: ({
                $: import('vue').ComponentInternalInstance;
                $data: {};
                $props: {
                    readonly width?: string | number | undefined;
                    readonly minWidth?: string | number | undefined;
                    readonly maxHeight?: string | number | undefined;
                    readonly placement?: import('../../../../core/popover').PopoverPlacementType | undefined;
                    readonly arrow?: boolean | undefined;
                    readonly trigger?: "hover" | "click" | "custom" | undefined;
                    readonly animation?: "fade" | "translate" | (string & {}) | undefined;
                    readonly zIndex?: number | undefined;
                    readonly delay?: number | undefined;
                    readonly disabled?: boolean | undefined;
                    readonly onHidden?: ((value: HTMLDivElement) => any) | undefined;
                    readonly onHide?: ((value: HTMLDivElement) => any) | undefined;
                    readonly onShow?: ((value: HTMLDivElement) => any) | undefined;
                    readonly onShowing?: ((value: HTMLDivElement) => any) | undefined;
                    readonly onShown?: ((value: HTMLDivElement) => any) | undefined;
                    readonly onHiding?: ((value: HTMLDivElement) => any) | undefined;
                } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
                $attrs: {
                    [x: string]: unknown;
                };
                $refs: {
                    [x: string]: unknown;
                } & {
                    referRef: HTMLDivElement;
                    popoverRef: HTMLDivElement;
                    arrowRef: HTMLDivElement;
                };
                $slots: Readonly<{
                    [name: string]: import('vue').Slot<any> | undefined;
                }>;
                $root: import('vue').ComponentPublicInstance | null;
                $parent: import('vue').ComponentPublicInstance | null;
                $host: Element | null;
                $emit: ((event: "hidden", value: HTMLDivElement) => void) & ((event: "hide", value: HTMLDivElement) => void) & ((event: "show", value: HTMLDivElement) => void) & ((event: "showing", value: HTMLDivElement) => void) & ((event: "shown", value: HTMLDivElement) => void) & ((event: "hiding", value: HTMLDivElement) => void);
                $el: any;
                $options: import('vue').ComponentOptionsBase<Readonly<import('../../../../core/popover').PopoverPropsType> & Readonly<{
                    onHidden?: ((value: HTMLDivElement) => any) | undefined;
                    onHide?: ((value: HTMLDivElement) => any) | undefined;
                    onShow?: ((value: HTMLDivElement) => any) | undefined;
                    onShowing?: ((value: HTMLDivElement) => any) | undefined;
                    onShown?: ((value: HTMLDivElement) => any) | undefined;
                    onHiding?: ((value: HTMLDivElement) => any) | undefined;
                }>, {
                    visible: Ref<boolean, boolean>;
                    showPopover: () => void;
                    hidePopover: () => void;
                    popperInstance: Ref<import('@popperjs/core').Instance | undefined, import('@popperjs/core').Instance | undefined>;
                    update: () => Promise<void>;
                    realPlacement: Ref<import('../../../../core/popover').PopoverPlacementType, import('../../../../core/popover').PopoverPlacementType>;
                }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
                    hidden: (value: HTMLDivElement) => any;
                    hide: (value: HTMLDivElement) => any;
                    show: (value: HTMLDivElement) => any;
                    showing: (value: HTMLDivElement) => any;
                    shown: (value: HTMLDivElement) => any;
                    hiding: (value: HTMLDivElement) => any;
                }, string, {
                    disabled: boolean;
                    zIndex: number;
                    animation: "fade" | "translate" | (string & {});
                    placement: import('../../../../core/popover').PopoverPlacementType;
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
                placement: import('../../../../core/popover').PopoverPlacementType;
                arrow: boolean;
                trigger: "hover" | "click" | "custom";
                delay: number;
            }> & Omit<Readonly<import('../../../../core/popover').PopoverPropsType> & Readonly<{
                onHidden?: ((value: HTMLDivElement) => any) | undefined;
                onHide?: ((value: HTMLDivElement) => any) | undefined;
                onShow?: ((value: HTMLDivElement) => any) | undefined;
                onShowing?: ((value: HTMLDivElement) => any) | undefined;
                onShown?: ((value: HTMLDivElement) => any) | undefined;
                onHiding?: ((value: HTMLDivElement) => any) | undefined;
            }>, "visible" | "popperInstance" | "showPopover" | "hidePopover" | "update" | "realPlacement" | ("disabled" | "zIndex" | "animation" | "placement" | "arrow" | "trigger" | "delay")> & import('vue').ShallowUnwrapRef<{
                visible: Ref<boolean, boolean>;
                showPopover: () => void;
                hidePopover: () => void;
                popperInstance: Ref<import('@popperjs/core').Instance | undefined, import('@popperjs/core').Instance | undefined>;
                update: () => Promise<void>;
                realPlacement: Ref<import('../../../../core/popover').PopoverPlacementType, import('../../../../core/popover').PopoverPlacementType>;
            }> & {} & import('vue').ComponentCustomProperties & {} & {
                $slots: {
                    refer?(_: {}): any;
                    default?(_: {}): any;
                };
            }) | null;
        };
        $slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        $root: import('vue').ComponentPublicInstance | null;
        $parent: import('vue').ComponentPublicInstance | null;
        $host: Element | null;
        $emit: ((event: "select", value: import('../..').MenuDataType) => void) & ((event: "operate") => void) & ((event: "popoverShow", value: HTMLDivElement) => void) & ((event: "popoverShowing", value: HTMLDivElement) => void) & ((event: "popoverShown", value: HTMLDivElement) => void) & ((event: "popoverHide", value: HTMLDivElement) => void) & ((event: "popoverHiding", value: HTMLDivElement) => void) & ((event: "popoverHidden", value: HTMLDivElement) => void);
        $el: HTMLDivElement;
        $options: import('vue').ComponentOptionsBase<Readonly<import('../..').MenuPropsType> & Readonly<{
            onSelect?: ((value: import('../..').MenuDataType) => any) | undefined;
            onOperate?: (() => any) | undefined;
            onPopoverShow?: ((value: HTMLDivElement) => any) | undefined;
            onPopoverShowing?: ((value: HTMLDivElement) => any) | undefined;
            onPopoverShown?: ((value: HTMLDivElement) => any) | undefined;
            onPopoverHide?: ((value: HTMLDivElement) => any) | undefined;
            onPopoverHiding?: ((value: HTMLDivElement) => any) | undefined;
            onPopoverHidden?: ((value: HTMLDivElement) => any) | undefined;
        }>, {
            showPopover: () => void;
            hidePopover: () => void;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            select: (value: import('../..').MenuDataType) => any;
            operate: () => any;
            popoverShow: (value: HTMLDivElement) => any;
            popoverShowing: (value: HTMLDivElement) => any;
            popoverShown: (value: HTMLDivElement) => any;
            popoverHide: (value: HTMLDivElement) => any;
            popoverHiding: (value: HTMLDivElement) => any;
            popoverHidden: (value: HTMLDivElement) => any;
        }, string, {
            data: import('../..').MenuDataType[];
            disabled: boolean;
            active: boolean;
            popover: boolean;
            popoverProps: Omit<import('../../../../core/popover').PopoverPropsType, "disabled" | "delay">;
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
        data: import('../..').MenuDataType[];
        disabled: boolean;
        active: boolean;
        popover: boolean;
        popoverProps: Omit<import('../../../../core/popover').PopoverPropsType, "disabled" | "delay">;
    }> & Omit<Readonly<import('../..').MenuPropsType> & Readonly<{
        onSelect?: ((value: import('../..').MenuDataType) => any) | undefined;
        onOperate?: (() => any) | undefined;
        onPopoverShow?: ((value: HTMLDivElement) => any) | undefined;
        onPopoverShowing?: ((value: HTMLDivElement) => any) | undefined;
        onPopoverShown?: ((value: HTMLDivElement) => any) | undefined;
        onPopoverHide?: ((value: HTMLDivElement) => any) | undefined;
        onPopoverHiding?: ((value: HTMLDivElement) => any) | undefined;
        onPopoverHidden?: ((value: HTMLDivElement) => any) | undefined;
    }>, "showPopover" | "hidePopover" | ("data" | "disabled" | "active" | "popover" | "popoverProps")> & import('vue').ShallowUnwrapRef<{
        showPopover: () => void;
        hidePopover: () => void;
    }> & {} & import('vue').ComponentCustomProperties & {} & {
        $slots: {
            default?(_: {}): any;
            popover?(_: {}): any;
            icon?(_: {
                option: import('../..').MenuDataType;
            }): any;
            label?(_: {
                option: import('../..').MenuDataType;
            }): any;
        };
    }) | null;
}, HTMLDivElement>;
export default _default;
