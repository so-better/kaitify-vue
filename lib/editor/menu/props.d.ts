import { PopoverPropsType } from '../../core/popover';
/**
 * 菜单可选数据的类型
 */
export type MenuDataType = {
    /**
     * 显示的文字
     */
    label: string;
    /**
     * 表示的值
     */
    value: string | number;
    /**
     * 左侧显示的图标
     */
    icon?: string;
};
/**
 * 菜单组件的属性类型
 */
export type MenuPropsType = {
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 是否激活
     */
    active?: boolean;
    /**
     * 选项禁用
     */
    itemDisabled?: (item: MenuDataType) => boolean;
    /**
     * 选项是否激活
     */
    itemActive?: (item: MenuDataType) => boolean;
    /**
     * 是否有浮层
     */
    popover?: boolean;
    /**
     * 浮层属性
     */
    popoverProps?: Omit<PopoverPropsType, 'disabled' | 'delay'>;
    /**
     * 可选数据
     */
    data?: MenuDataType[];
    /**
     * 快捷键设置
     */
    shortcut?: ((e: KeyboardEvent) => boolean) | {
        [key: MenuDataType['value']]: (e: KeyboardEvent) => boolean;
    };
};
