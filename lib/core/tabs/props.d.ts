/**
 * 选项卡组件属性类型
 */
export type TabsPropsType = {
    /**
     * 选项卡分栏数据
     */
    data: {
        label: string;
        value: string | number;
    }[];
    /**
     * 选项卡默认选项
     */
    defaultValue: string | number;
};
