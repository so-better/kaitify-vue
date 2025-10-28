import { KNodeMatchOptionType } from '../../index';
/**
 * 气泡组件的属性类型
 */
export type BubblePropsType = {
    /**
     * 是否显示
     */
    visible: boolean;
    /**
     * 指定条件，每次更新气泡位置时会光标是否在符合条件的节点下，如果符合则根据该节点的真实dom进行定位
     */
    match?: KNodeMatchOptionType;
    /**
     * 鼠标按下时是否隐藏
     */
    hideOnMousedown?: boolean;
};
/**
 * 气泡组件的事件类型
 */
export type BubbleEmitsType = {
    /**
     * 气泡显示前触发的事件
     */
    (e: 'show', value: HTMLDivElement): void;
    /**
     * 气泡显示时触发的事件
     */
    (e: 'showing', value: HTMLDivElement): void;
    /**
     * 气泡显示后触发的事件
     */
    (e: 'shown', value: HTMLDivElement): void;
    /**
     * 气泡隐藏前触发的事件
     */
    (e: 'hide', value: HTMLDivElement): void;
    /**
     * 气泡隐藏时触发的事件
     */
    (e: 'hiding', value: HTMLDivElement): void;
    /**
     * 气泡隐藏后触发的事件
     */
    (e: 'hidden', value: HTMLDivElement): void;
};
