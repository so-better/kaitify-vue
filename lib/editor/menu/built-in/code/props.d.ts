export type CodeMenuPropsType = {
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 快捷键设置
     */
    shortcut?: (e: KeyboardEvent) => boolean;
};
