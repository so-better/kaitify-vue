import { Extension } from '@kaitify/core'

export const ShortcutExtension = Extension.create({
  name: 'shortcut',
  onKeydown(e) {
    if (!this.selection.focused()) {
      return
    }
    //增加缩进
    if (e.key.toLocaleLowerCase() == 'tab' && !e.metaKey && !e.shiftKey && !e.altKey && !e.ctrlKey) {
      e.preventDefault()
      const startCodeBlock = this.selection.start!.node.isInCodeBlockStyle()
      const endCodeBlock = this.selection.end!.node.isInCodeBlockStyle()
      //起点和终点在同一个代码块样式的块节点内
      if (startCodeBlock && endCodeBlock && (startCodeBlock.isContains(endCodeBlock) || endCodeBlock.isContains(startCodeBlock))) {
        this.insertText('   ')
        this.updateView()
      } else {
        this.commands.setIncreaseIndent?.()
      }
    }
    //减少缩进
    if (e.key.toLocaleLowerCase() == 'tab' && !e.metaKey && e.shiftKey && !e.altKey && !e.ctrlKey) {
      e.preventDefault()
      const startCodeBlock = this.selection.start!.node.isInCodeBlockStyle()
      const endCodeBlock = this.selection.end!.node.isInCodeBlockStyle()
      //起点和终点不在同一个代码块样式的块节点内
      if (!startCodeBlock || !endCodeBlock || !startCodeBlock.isContains(endCodeBlock) || !endCodeBlock.isContains(startCodeBlock)) {
        this.commands.setDecreaseIndent?.()
      }
    }
  }
})
