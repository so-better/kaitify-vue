---
title: 快速上手
---

# 快速上手

## 基本概念

- <b>`Editor`</b>：kaitify 的核心类型，整个编辑器的所有操作包括任何扩展 `Extension` 都离不开这个类，我们需要它去创建一个编辑器实例`editor`，通过编辑器实例来对编辑器进行操作
- <b>`KNode`</b>：kaitify 的节点，实际上我们可以把它叫作 `Node`，之所以取名为 `KNode`，是为了与浏览器原生的 `Node` 对象作为区分，它是编辑器内容的基础数据类型，编辑器的 `html` 内容都是由节点数组（`editor.stackNodes`）经过渲染生成的

## 构建一个编辑器

```html
<div id="editor" style="width:500px;height:500px;"></div>
```

```ts
//编辑器创建并渲染的过程是异步的
//因此需要通过 `await` 来等待编辑器创建完成后获取编辑器实例
const editor = await Editor.configure({
  el: '#editor',
  value: '<p>hello</p>'
})
```

## 创建一个段落，并加入到编辑器内

```html
<div id="editor" style="width:500px;height:500px;"></div>
```

```ts
const editor = await Editor.configure({
  el: '#editor',
  value: '<p>hello</p>'
})
const paragraph = KNode.create({
  type: 'block',
  tag: 'p',
  children: [
    {
      type: 'text',
      textContent: '我是一个段落'
    }
  ]
})
//直接给stackNodes重新赋值，整个编辑器的内容都会被替换成这个段落
editor.stackNodes = [paragraph]
//更新编辑器视图
editor.updateView()
```

> [!IMPORTANT] 至此，基本的编辑器已经创建完成了
> 如果你还需要复杂的操作，可以通过 Editor 和 KNode 去操作编辑器，也可以使用编辑器内置的扩展功能
