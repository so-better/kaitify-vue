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
            };
            $slots: Readonly<{
                [name: string]: import('vue').Slot<any> | undefined;
            }>;
            $root: import('vue').ComponentPublicInstance | null;
            $parent: import('vue').ComponentPublicInstance | null;
            $host: Element | null;
            $emit: ((event: "hidden", value: HTMLDivElement) => void) & ((event: "hide", value: HTMLDivElement) => void) & ((event: "show", value: HTMLDivElement) => void) & ((event: "showing", value: HTMLDivElement) => void) & ((event: "shown", value: HTMLDivElement) => void) & ((event: "hiding", value: HTMLDivElement) => void);
            $el: any;
            $options: import('vue').ComponentOptionsBase<Readonly<import('../../core/popover').PopoverPropsType> & Readonly<{
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
                popperInstance: Ref<{
                    state: {
                        elements: {
                            reference: Element | {
                                getBoundingClientRect: () => ClientRect | DOMRect;
                                contextElement?: Element | undefined;
                            };
                            popper: HTMLElement;
                            arrow?: HTMLElement | undefined;
                        };
                        options: {
                            placement: import('@popperjs/core').Placement;
                            modifiers: any[];
                            strategy: import('@popperjs/core').PositioningStrategy;
                            onFirstUpdate?: ((arg0: Partial<import('@popperjs/core').State>) => void) | undefined;
                        };
                        placement: import('@popperjs/core').Placement;
                        strategy: import('@popperjs/core').PositioningStrategy;
                        orderedModifiers: {
                            name: any;
                            enabled: boolean;
                            phase: import('@popperjs/core').ModifierPhases;
                            requires?: Array<string> | undefined;
                            requiresIfExists?: Array<string> | undefined;
                            fn: (arg0: import('@popperjs/core').ModifierArguments<any>) => import('@popperjs/core').State | void;
                            effect?: ((arg0: import('@popperjs/core').ModifierArguments<any>) => (() => void) | void) | undefined;
                            options?: Partial<any> | undefined;
                            data?: import('@popperjs/core').Obj | undefined;
                        }[];
                        rects: {
                            reference: {
                                width: number;
                                height: number;
                                x: number;
                                y: number;
                            };
                            popper: {
                                width: number;
                                height: number;
                                x: number;
                                y: number;
                            };
                        };
                        scrollParents: {
                            reference: (Element | {
                                innerHeight: number;
                                offsetHeight: number;
                                innerWidth: number;
                                offsetWidth: number;
                                pageXOffset: number;
                                pageYOffset: number;
                                getComputedStyle: typeof getComputedStyle;
                                addEventListener: (type: any, listener: any, optionsOrUseCapture?: any) => void;
                                removeEventListener: (type: any, listener: any, optionsOrUseCapture?: any) => void;
                                Element: Element;
                                HTMLElement: HTMLElement;
                                Node: Node;
                                toString: () => "[object Window]";
                                devicePixelRatio: number;
                                visualViewport?: {
                                    addEventListener: (type: string, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean) => void;
                                    dispatchEvent: (event: Event) => boolean;
                                    removeEventListener: (type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean) => void;
                                    width: number;
                                    height: number;
                                    offsetLeft: number;
                                    offsetTop: number;
                                    scale: number;
                                } | undefined;
                                ShadowRoot: ShadowRoot;
                            } | {
                                addEventListener: (type: string, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean) => void;
                                dispatchEvent: (event: Event) => boolean;
                                removeEventListener: (type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean) => void;
                                width: number;
                                height: number;
                                offsetLeft: number;
                                offsetTop: number;
                                scale: number;
                            })[];
                            popper: (Element | {
                                innerHeight: number;
                                offsetHeight: number;
                                innerWidth: number;
                                offsetWidth: number;
                                pageXOffset: number;
                                pageYOffset: number;
                                getComputedStyle: typeof getComputedStyle;
                                addEventListener: (type: any, listener: any, optionsOrUseCapture?: any) => void;
                                removeEventListener: (type: any, listener: any, optionsOrUseCapture?: any) => void;
                                Element: Element;
                                HTMLElement: HTMLElement;
                                Node: Node;
                                toString: () => "[object Window]";
                                devicePixelRatio: number;
                                visualViewport?: {
                                    addEventListener: (type: string, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean) => void;
                                    dispatchEvent: (event: Event) => boolean;
                                    removeEventListener: (type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean) => void;
                                    width: number;
                                    height: number;
                                    offsetLeft: number;
                                    offsetTop: number;
                                    scale: number;
                                } | undefined;
                                ShadowRoot: ShadowRoot;
                            } | {
                                addEventListener: (type: string, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean) => void;
                                dispatchEvent: (event: Event) => boolean;
                                removeEventListener: (type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean) => void;
                                width: number;
                                height: number;
                                offsetLeft: number;
                                offsetTop: number;
                                scale: number;
                            })[];
                        };
                        styles: {
                            [key: string]: Partial<CSSStyleDeclaration>;
                        };
                        attributes: {
                            [key: string]: {
                                [key: string]: string | boolean;
                            };
                        };
                        modifiersData: {
                            [x: string]: any;
                            arrow?: {
                                x?: number | undefined;
                                y?: number | undefined;
                                centerOffset: number;
                            } | undefined;
                            hide?: {
                                isReferenceHidden: boolean;
                                hasPopperEscaped: boolean;
                                referenceClippingOffsets: {
                                    top: number;
                                    left: number;
                                    right: number;
                                    bottom: number;
                                };
                                popperEscapeOffsets: {
                                    top: number;
                                    left: number;
                                    right: number;
                                    bottom: number;
                                };
                            } | undefined;
                            offset?: {
                                bottom?: {
                                    y: number;
                                    x: number;
                                } | undefined;
                                left?: {
                                    y: number;
                                    x: number;
                                } | undefined;
                                right?: {
                                    y: number;
                                    x: number;
                                } | undefined;
                                top?: {
                                    y: number;
                                    x: number;
                                } | undefined;
                                auto?: {
                                    y: number;
                                    x: number;
                                } | undefined;
                                "auto-start"?: {
                                    y: number;
                                    x: number;
                                } | undefined;
                                "auto-end"?: {
                                    y: number;
                                    x: number;
                                } | undefined;
                                "top-start"?: {
                                    y: number;
                                    x: number;
                                } | undefined;
                                "top-end"?: {
                                    y: number;
                                    x: number;
                                } | undefined;
                                "bottom-start"?: {
                                    y: number;
                                    x: number;
                                } | undefined;
                                "bottom-end"?: {
                                    y: number;
                                    x: number;
                                } | undefined;
                                "right-start"?: {
                                    y: number;
                                    x: number;
                                } | undefined;
                                "right-end"?: {
                                    y: number;
                                    x: number;
                                } | undefined;
                                "left-start"?: {
                                    y: number;
                                    x: number;
                                } | undefined;
                                "left-end"?: {
                                    y: number;
                                    x: number;
                                } | undefined;
                            } | undefined;
                            preventOverflow?: {
                                y: number;
                                x: number;
                            } | undefined;
                            popperOffsets?: {
                                y: number;
                                x: number;
                            } | undefined;
                        };
                        reset: boolean;
                    };
                    destroy: () => void;
                    forceUpdate: () => void;
                    update: () => Promise<Partial<import('@popperjs/core').State>>;
                    setOptions: (setOptionsAction: Partial<import('@popperjs/core').OptionsGeneric<any>> | ((prev: Partial<import('@popperjs/core').OptionsGeneric<any>>) => Partial<import('@popperjs/core').OptionsGeneric<any>>)) => Promise<Partial<import('@popperjs/core').State>>;
                } | null, import('@popperjs/core').Instance | {
                    state: {
                        elements: {
                            reference: Element | {
                                getBoundingClientRect: () => ClientRect | DOMRect;
                                contextElement?: Element | undefined;
                            };
                            popper: HTMLElement;
                            arrow?: HTMLElement | undefined;
                        };
                        options: {
                            placement: import('@popperjs/core').Placement;
                            modifiers: any[];
                            strategy: import('@popperjs/core').PositioningStrategy;
                            onFirstUpdate?: ((arg0: Partial<import('@popperjs/core').State>) => void) | undefined;
                        };
                        placement: import('@popperjs/core').Placement;
                        strategy: import('@popperjs/core').PositioningStrategy;
                        orderedModifiers: {
                            name: any;
                            enabled: boolean;
                            phase: import('@popperjs/core').ModifierPhases;
                            requires?: Array<string> | undefined;
                            requiresIfExists?: Array<string> | undefined;
                            fn: (arg0: import('@popperjs/core').ModifierArguments<any>) => import('@popperjs/core').State | void;
                            effect?: ((arg0: import('@popperjs/core').ModifierArguments<any>) => (() => void) | void) | undefined;
                            options?: Partial<any> | undefined;
                            data?: import('@popperjs/core').Obj | undefined;
                        }[];
                        rects: {
                            reference: {
                                width: number;
                                height: number;
                                x: number;
                                y: number;
                            };
                            popper: {
                                width: number;
                                height: number;
                                x: number;
                                y: number;
                            };
                        };
                        scrollParents: {
                            reference: (Element | {
                                innerHeight: number;
                                offsetHeight: number;
                                innerWidth: number;
                                offsetWidth: number;
                                pageXOffset: number;
                                pageYOffset: number;
                                getComputedStyle: typeof getComputedStyle;
                                addEventListener: (type: any, listener: any, optionsOrUseCapture?: any) => void;
                                removeEventListener: (type: any, listener: any, optionsOrUseCapture?: any) => void;
                                Element: Element;
                                HTMLElement: HTMLElement;
                                Node: Node;
                                toString: () => "[object Window]";
                                devicePixelRatio: number;
                                visualViewport?: {
                                    addEventListener: (type: string, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean) => void;
                                    dispatchEvent: (event: Event) => boolean;
                                    removeEventListener: (type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean) => void;
                                    width: number;
                                    height: number;
                                    offsetLeft: number;
                                    offsetTop: number;
                                    scale: number;
                                } | undefined;
                                ShadowRoot: ShadowRoot;
                            } | {
                                addEventListener: (type: string, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean) => void;
                                dispatchEvent: (event: Event) => boolean;
                                removeEventListener: (type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean) => void;
                                width: number;
                                height: number;
                                offsetLeft: number;
                                offsetTop: number;
                                scale: number;
                            })[];
                            popper: (Element | {
                                innerHeight: number;
                                offsetHeight: number;
                                innerWidth: number;
                                offsetWidth: number;
                                pageXOffset: number;
                                pageYOffset: number;
                                getComputedStyle: typeof getComputedStyle;
                                addEventListener: (type: any, listener: any, optionsOrUseCapture?: any) => void;
                                removeEventListener: (type: any, listener: any, optionsOrUseCapture?: any) => void;
                                Element: Element;
                                HTMLElement: HTMLElement;
                                Node: Node;
                                toString: () => "[object Window]";
                                devicePixelRatio: number;
                                visualViewport?: {
                                    addEventListener: (type: string, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean) => void;
                                    dispatchEvent: (event: Event) => boolean;
                                    removeEventListener: (type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean) => void;
                                    width: number;
                                    height: number;
                                    offsetLeft: number;
                                    offsetTop: number;
                                    scale: number;
                                } | undefined;
                                ShadowRoot: ShadowRoot;
                            } | {
                                addEventListener: (type: string, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean) => void;
                                dispatchEvent: (event: Event) => boolean;
                                removeEventListener: (type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean) => void;
                                width: number;
                                height: number;
                                offsetLeft: number;
                                offsetTop: number;
                                scale: number;
                            })[];
                        };
                        styles: {
                            [key: string]: Partial<CSSStyleDeclaration>;
                        };
                        attributes: {
                            [key: string]: {
                                [key: string]: string | boolean;
                            };
                        };
                        modifiersData: {
                            [x: string]: any;
                            arrow?: {
                                x?: number | undefined;
                                y?: number | undefined;
                                centerOffset: number;
                            } | undefined;
                            hide?: {
                                isReferenceHidden: boolean;
                                hasPopperEscaped: boolean;
                                referenceClippingOffsets: {
                                    top: number;
                                    left: number;
                                    right: number;
                                    bottom: number;
                                };
                                popperEscapeOffsets: {
                                    top: number;
                                    left: number;
                                    right: number;
                                    bottom: number;
                                };
                            } | undefined;
                            offset?: {
                                bottom?: {
                                    y: number;
                                    x: number;
                                } | undefined;
                                left?: {
                                    y: number;
                                    x: number;
                                } | undefined;
                                right?: {
                                    y: number;
                                    x: number;
                                } | undefined;
                                top?: {
                                    y: number;
                                    x: number;
                                } | undefined;
                                auto?: {
                                    y: number;
                                    x: number;
                                } | undefined;
                                "auto-start"?: {
                                    y: number;
                                    x: number;
                                } | undefined;
                                "auto-end"?: {
                                    y: number;
                                    x: number;
                                } | undefined;
                                "top-start"?: {
                                    y: number;
                                    x: number;
                                } | undefined;
                                "top-end"?: {
                                    y: number;
                                    x: number;
                                } | undefined;
                                "bottom-start"?: {
                                    y: number;
                                    x: number;
                                } | undefined;
                                "bottom-end"?: {
                                    y: number;
                                    x: number;
                                } | undefined;
                                "right-start"?: {
                                    y: number;
                                    x: number;
                                } | undefined;
                                "right-end"?: {
                                    y: number;
                                    x: number;
                                } | undefined;
                                "left-start"?: {
                                    y: number;
                                    x: number;
                                } | undefined;
                                "left-end"?: {
                                    y: number;
                                    x: number;
                                } | undefined;
                            } | undefined;
                            preventOverflow?: {
                                y: number;
                                x: number;
                            } | undefined;
                            popperOffsets?: {
                                y: number;
                                x: number;
                            } | undefined;
                        };
                        reset: boolean;
                    };
                    destroy: () => void;
                    forceUpdate: () => void;
                    update: () => Promise<Partial<import('@popperjs/core').State>>;
                    setOptions: (setOptionsAction: Partial<import('@popperjs/core').OptionsGeneric<any>> | ((prev: Partial<import('@popperjs/core').OptionsGeneric<any>>) => Partial<import('@popperjs/core').OptionsGeneric<any>>)) => Promise<Partial<import('@popperjs/core').State>>;
                } | null>;
                update: () => Promise<void>;
                realPlacement: Ref<import('../../core/popover').PopoverPlacementType, import('../../core/popover').PopoverPlacementType>;
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
            onHidden?: ((value: HTMLDivElement) => any) | undefined;
            onHide?: ((value: HTMLDivElement) => any) | undefined;
            onShow?: ((value: HTMLDivElement) => any) | undefined;
            onShowing?: ((value: HTMLDivElement) => any) | undefined;
            onShown?: ((value: HTMLDivElement) => any) | undefined;
            onHiding?: ((value: HTMLDivElement) => any) | undefined;
        }>, "visible" | "update" | "popperInstance" | "showPopover" | "hidePopover" | "realPlacement" | ("disabled" | "zIndex" | "animation" | "placement" | "arrow" | "trigger" | "delay")> & import('vue').ShallowUnwrapRef<{
            visible: Ref<boolean, boolean>;
            showPopover: () => void;
            hidePopover: () => void;
            popperInstance: Ref<{
                state: {
                    elements: {
                        reference: Element | {
                            getBoundingClientRect: () => ClientRect | DOMRect;
                            contextElement?: Element | undefined;
                        };
                        popper: HTMLElement;
                        arrow?: HTMLElement | undefined;
                    };
                    options: {
                        placement: import('@popperjs/core').Placement;
                        modifiers: any[];
                        strategy: import('@popperjs/core').PositioningStrategy;
                        onFirstUpdate?: ((arg0: Partial<import('@popperjs/core').State>) => void) | undefined;
                    };
                    placement: import('@popperjs/core').Placement;
                    strategy: import('@popperjs/core').PositioningStrategy;
                    orderedModifiers: {
                        name: any;
                        enabled: boolean;
                        phase: import('@popperjs/core').ModifierPhases;
                        requires?: Array<string> | undefined;
                        requiresIfExists?: Array<string> | undefined;
                        fn: (arg0: import('@popperjs/core').ModifierArguments<any>) => import('@popperjs/core').State | void;
                        effect?: ((arg0: import('@popperjs/core').ModifierArguments<any>) => (() => void) | void) | undefined;
                        options?: Partial<any> | undefined;
                        data?: import('@popperjs/core').Obj | undefined;
                    }[];
                    rects: {
                        reference: {
                            width: number;
                            height: number;
                            x: number;
                            y: number;
                        };
                        popper: {
                            width: number;
                            height: number;
                            x: number;
                            y: number;
                        };
                    };
                    scrollParents: {
                        reference: (Element | {
                            innerHeight: number;
                            offsetHeight: number;
                            innerWidth: number;
                            offsetWidth: number;
                            pageXOffset: number;
                            pageYOffset: number;
                            getComputedStyle: typeof getComputedStyle;
                            addEventListener: (type: any, listener: any, optionsOrUseCapture?: any) => void;
                            removeEventListener: (type: any, listener: any, optionsOrUseCapture?: any) => void;
                            Element: Element;
                            HTMLElement: HTMLElement;
                            Node: Node;
                            toString: () => "[object Window]";
                            devicePixelRatio: number;
                            visualViewport?: {
                                addEventListener: (type: string, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean) => void;
                                dispatchEvent: (event: Event) => boolean;
                                removeEventListener: (type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean) => void;
                                width: number;
                                height: number;
                                offsetLeft: number;
                                offsetTop: number;
                                scale: number;
                            } | undefined;
                            ShadowRoot: ShadowRoot;
                        } | {
                            addEventListener: (type: string, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean) => void;
                            dispatchEvent: (event: Event) => boolean;
                            removeEventListener: (type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean) => void;
                            width: number;
                            height: number;
                            offsetLeft: number;
                            offsetTop: number;
                            scale: number;
                        })[];
                        popper: (Element | {
                            innerHeight: number;
                            offsetHeight: number;
                            innerWidth: number;
                            offsetWidth: number;
                            pageXOffset: number;
                            pageYOffset: number;
                            getComputedStyle: typeof getComputedStyle;
                            addEventListener: (type: any, listener: any, optionsOrUseCapture?: any) => void;
                            removeEventListener: (type: any, listener: any, optionsOrUseCapture?: any) => void;
                            Element: Element;
                            HTMLElement: HTMLElement;
                            Node: Node;
                            toString: () => "[object Window]";
                            devicePixelRatio: number;
                            visualViewport?: {
                                addEventListener: (type: string, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean) => void;
                                dispatchEvent: (event: Event) => boolean;
                                removeEventListener: (type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean) => void;
                                width: number;
                                height: number;
                                offsetLeft: number;
                                offsetTop: number;
                                scale: number;
                            } | undefined;
                            ShadowRoot: ShadowRoot;
                        } | {
                            addEventListener: (type: string, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean) => void;
                            dispatchEvent: (event: Event) => boolean;
                            removeEventListener: (type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean) => void;
                            width: number;
                            height: number;
                            offsetLeft: number;
                            offsetTop: number;
                            scale: number;
                        })[];
                    };
                    styles: {
                        [key: string]: Partial<CSSStyleDeclaration>;
                    };
                    attributes: {
                        [key: string]: {
                            [key: string]: string | boolean;
                        };
                    };
                    modifiersData: {
                        [x: string]: any;
                        arrow?: {
                            x?: number | undefined;
                            y?: number | undefined;
                            centerOffset: number;
                        } | undefined;
                        hide?: {
                            isReferenceHidden: boolean;
                            hasPopperEscaped: boolean;
                            referenceClippingOffsets: {
                                top: number;
                                left: number;
                                right: number;
                                bottom: number;
                            };
                            popperEscapeOffsets: {
                                top: number;
                                left: number;
                                right: number;
                                bottom: number;
                            };
                        } | undefined;
                        offset?: {
                            bottom?: {
                                y: number;
                                x: number;
                            } | undefined;
                            left?: {
                                y: number;
                                x: number;
                            } | undefined;
                            right?: {
                                y: number;
                                x: number;
                            } | undefined;
                            top?: {
                                y: number;
                                x: number;
                            } | undefined;
                            auto?: {
                                y: number;
                                x: number;
                            } | undefined;
                            "auto-start"?: {
                                y: number;
                                x: number;
                            } | undefined;
                            "auto-end"?: {
                                y: number;
                                x: number;
                            } | undefined;
                            "top-start"?: {
                                y: number;
                                x: number;
                            } | undefined;
                            "top-end"?: {
                                y: number;
                                x: number;
                            } | undefined;
                            "bottom-start"?: {
                                y: number;
                                x: number;
                            } | undefined;
                            "bottom-end"?: {
                                y: number;
                                x: number;
                            } | undefined;
                            "right-start"?: {
                                y: number;
                                x: number;
                            } | undefined;
                            "right-end"?: {
                                y: number;
                                x: number;
                            } | undefined;
                            "left-start"?: {
                                y: number;
                                x: number;
                            } | undefined;
                            "left-end"?: {
                                y: number;
                                x: number;
                            } | undefined;
                        } | undefined;
                        preventOverflow?: {
                            y: number;
                            x: number;
                        } | undefined;
                        popperOffsets?: {
                            y: number;
                            x: number;
                        } | undefined;
                    };
                    reset: boolean;
                };
                destroy: () => void;
                forceUpdate: () => void;
                update: () => Promise<Partial<import('@popperjs/core').State>>;
                setOptions: (setOptionsAction: Partial<import('@popperjs/core').OptionsGeneric<any>> | ((prev: Partial<import('@popperjs/core').OptionsGeneric<any>>) => Partial<import('@popperjs/core').OptionsGeneric<any>>)) => Promise<Partial<import('@popperjs/core').State>>;
            } | null, import('@popperjs/core').Instance | {
                state: {
                    elements: {
                        reference: Element | {
                            getBoundingClientRect: () => ClientRect | DOMRect;
                            contextElement?: Element | undefined;
                        };
                        popper: HTMLElement;
                        arrow?: HTMLElement | undefined;
                    };
                    options: {
                        placement: import('@popperjs/core').Placement;
                        modifiers: any[];
                        strategy: import('@popperjs/core').PositioningStrategy;
                        onFirstUpdate?: ((arg0: Partial<import('@popperjs/core').State>) => void) | undefined;
                    };
                    placement: import('@popperjs/core').Placement;
                    strategy: import('@popperjs/core').PositioningStrategy;
                    orderedModifiers: {
                        name: any;
                        enabled: boolean;
                        phase: import('@popperjs/core').ModifierPhases;
                        requires?: Array<string> | undefined;
                        requiresIfExists?: Array<string> | undefined;
                        fn: (arg0: import('@popperjs/core').ModifierArguments<any>) => import('@popperjs/core').State | void;
                        effect?: ((arg0: import('@popperjs/core').ModifierArguments<any>) => (() => void) | void) | undefined;
                        options?: Partial<any> | undefined;
                        data?: import('@popperjs/core').Obj | undefined;
                    }[];
                    rects: {
                        reference: {
                            width: number;
                            height: number;
                            x: number;
                            y: number;
                        };
                        popper: {
                            width: number;
                            height: number;
                            x: number;
                            y: number;
                        };
                    };
                    scrollParents: {
                        reference: (Element | {
                            innerHeight: number;
                            offsetHeight: number;
                            innerWidth: number;
                            offsetWidth: number;
                            pageXOffset: number;
                            pageYOffset: number;
                            getComputedStyle: typeof getComputedStyle;
                            addEventListener: (type: any, listener: any, optionsOrUseCapture?: any) => void;
                            removeEventListener: (type: any, listener: any, optionsOrUseCapture?: any) => void;
                            Element: Element;
                            HTMLElement: HTMLElement;
                            Node: Node;
                            toString: () => "[object Window]";
                            devicePixelRatio: number;
                            visualViewport?: {
                                addEventListener: (type: string, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean) => void;
                                dispatchEvent: (event: Event) => boolean;
                                removeEventListener: (type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean) => void;
                                width: number;
                                height: number;
                                offsetLeft: number;
                                offsetTop: number;
                                scale: number;
                            } | undefined;
                            ShadowRoot: ShadowRoot;
                        } | {
                            addEventListener: (type: string, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean) => void;
                            dispatchEvent: (event: Event) => boolean;
                            removeEventListener: (type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean) => void;
                            width: number;
                            height: number;
                            offsetLeft: number;
                            offsetTop: number;
                            scale: number;
                        })[];
                        popper: (Element | {
                            innerHeight: number;
                            offsetHeight: number;
                            innerWidth: number;
                            offsetWidth: number;
                            pageXOffset: number;
                            pageYOffset: number;
                            getComputedStyle: typeof getComputedStyle;
                            addEventListener: (type: any, listener: any, optionsOrUseCapture?: any) => void;
                            removeEventListener: (type: any, listener: any, optionsOrUseCapture?: any) => void;
                            Element: Element;
                            HTMLElement: HTMLElement;
                            Node: Node;
                            toString: () => "[object Window]";
                            devicePixelRatio: number;
                            visualViewport?: {
                                addEventListener: (type: string, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean) => void;
                                dispatchEvent: (event: Event) => boolean;
                                removeEventListener: (type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean) => void;
                                width: number;
                                height: number;
                                offsetLeft: number;
                                offsetTop: number;
                                scale: number;
                            } | undefined;
                            ShadowRoot: ShadowRoot;
                        } | {
                            addEventListener: (type: string, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean) => void;
                            dispatchEvent: (event: Event) => boolean;
                            removeEventListener: (type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean) => void;
                            width: number;
                            height: number;
                            offsetLeft: number;
                            offsetTop: number;
                            scale: number;
                        })[];
                    };
                    styles: {
                        [key: string]: Partial<CSSStyleDeclaration>;
                    };
                    attributes: {
                        [key: string]: {
                            [key: string]: string | boolean;
                        };
                    };
                    modifiersData: {
                        [x: string]: any;
                        arrow?: {
                            x?: number | undefined;
                            y?: number | undefined;
                            centerOffset: number;
                        } | undefined;
                        hide?: {
                            isReferenceHidden: boolean;
                            hasPopperEscaped: boolean;
                            referenceClippingOffsets: {
                                top: number;
                                left: number;
                                right: number;
                                bottom: number;
                            };
                            popperEscapeOffsets: {
                                top: number;
                                left: number;
                                right: number;
                                bottom: number;
                            };
                        } | undefined;
                        offset?: {
                            bottom?: {
                                y: number;
                                x: number;
                            } | undefined;
                            left?: {
                                y: number;
                                x: number;
                            } | undefined;
                            right?: {
                                y: number;
                                x: number;
                            } | undefined;
                            top?: {
                                y: number;
                                x: number;
                            } | undefined;
                            auto?: {
                                y: number;
                                x: number;
                            } | undefined;
                            "auto-start"?: {
                                y: number;
                                x: number;
                            } | undefined;
                            "auto-end"?: {
                                y: number;
                                x: number;
                            } | undefined;
                            "top-start"?: {
                                y: number;
                                x: number;
                            } | undefined;
                            "top-end"?: {
                                y: number;
                                x: number;
                            } | undefined;
                            "bottom-start"?: {
                                y: number;
                                x: number;
                            } | undefined;
                            "bottom-end"?: {
                                y: number;
                                x: number;
                            } | undefined;
                            "right-start"?: {
                                y: number;
                                x: number;
                            } | undefined;
                            "right-end"?: {
                                y: number;
                                x: number;
                            } | undefined;
                            "left-start"?: {
                                y: number;
                                x: number;
                            } | undefined;
                            "left-end"?: {
                                y: number;
                                x: number;
                            } | undefined;
                        } | undefined;
                        preventOverflow?: {
                            y: number;
                            x: number;
                        } | undefined;
                        popperOffsets?: {
                            y: number;
                            x: number;
                        } | undefined;
                    };
                    reset: boolean;
                };
                destroy: () => void;
                forceUpdate: () => void;
                update: () => Promise<Partial<import('@popperjs/core').State>>;
                setOptions: (setOptionsAction: Partial<import('@popperjs/core').OptionsGeneric<any>> | ((prev: Partial<import('@popperjs/core').OptionsGeneric<any>>) => Partial<import('@popperjs/core').OptionsGeneric<any>>)) => Promise<Partial<import('@popperjs/core').State>>;
            } | null>;
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
    popoverShow: (value: HTMLDivElement) => any;
    popoverShowing: (value: HTMLDivElement) => any;
    popoverShown: (value: HTMLDivElement) => any;
    popoverHide: (value: HTMLDivElement) => any;
    popoverHiding: (value: HTMLDivElement) => any;
    popoverHidden: (value: HTMLDivElement) => any;
}, string, import('vue').PublicProps, Readonly<MenuPropsType> & Readonly<{
    onSelect?: ((value: MenuDataType) => any) | undefined;
    onOperate?: (() => any) | undefined;
    onPopoverShow?: ((value: HTMLDivElement) => any) | undefined;
    onPopoverShowing?: ((value: HTMLDivElement) => any) | undefined;
    onPopoverShown?: ((value: HTMLDivElement) => any) | undefined;
    onPopoverHide?: ((value: HTMLDivElement) => any) | undefined;
    onPopoverHiding?: ((value: HTMLDivElement) => any) | undefined;
    onPopoverHidden?: ((value: HTMLDivElement) => any) | undefined;
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
