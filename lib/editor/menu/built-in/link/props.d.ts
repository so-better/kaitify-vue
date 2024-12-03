import { MenuPropsType } from '../../props';
export type LinkMenuPropsType = {
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 浮层属性
     */
    popoverProps?: MenuPropsType['popoverProps'];
};
export type LinkUnsetMenuPropsType = {
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 快捷键设置
     */
    shortcut?: (e: KeyboardEvent) => boolean;
};
