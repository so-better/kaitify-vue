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
    popperInstance: import('vue').Ref<{
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
    } | null, Instance | {
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
    realPlacement: import('vue').Ref<PopoverPlacementType, PopoverPlacementType>;
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
