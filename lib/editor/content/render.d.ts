import { Editor, KNodeRenderOptionType } from '@kaitify/core';
/**
 * 生成VNode
 */
export declare const createVNode: (options: KNodeRenderOptionType) => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
    [key: string]: any;
}>;
/**
 * 创建VNode数组
 */
export declare const createVNodes: (editor: Editor) => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
    [key: string]: any;
}>[];
