import { MenuPropsType } from '../../props';
export type UnorderedListMenuPropsType = {
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
    * 浮层属性
    */
    popoverOptions?: MenuPropsType['popoverOptions'];
    /**
     * 快捷键设置
     */
    shortcut?: (e: KeyboardEvent) => boolean;
};
