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
     * 层级
     */
    zIndex?: number;
    /**
     * 指定条件，每次更新气泡位置时会光标是否在符合条件的节点下，如果符合则根据该节点的真实dom进行定位
     */
    matches?: KNodeMatchOptionType[];
};
