<template>
  <EditorComponent />
</template>
<script lang="ts" setup>
import { defineComponent, h, nextTick, onMounted, ref, VNode, watch } from "vue";
import { Editor } from "@kaitify/core";
import { EditorPropsType } from "./props"
import { createVNodes } from "./render"

//编辑器属性
const props = withDefaults(defineProps<EditorPropsType>(), {
  modelValue: '<p><br/></p>',
  editable: true,
  autofocus: false,
  placeholder: '',
  dark: false,
  allowCopy: true,
  allowCut: true,
  allowPaste: true,
  allowPasteHtml: false,
  priorityPasteFiles: false,
  textRenderTag: 'span',
  blockRenderTag: 'p'
})
//编辑器事件
const emits = defineEmits(['update:modelValue', 'selectionupdate', 'insertParagraph', 'deleteComplete', 'keydown', 'keyup', 'focus', 'blur', 'beforeUpdateView', 'afterUpdateView'])
//编辑器dom元素
const elRef = ref<HTMLElement | null>(null)
//编辑器实例
const editorRef = ref<Editor | null>(null)
//编辑器内容虚拟节点
const vnodes = ref<VNode[]>([])
//是否编辑器内部修改值
const internalModification = ref<boolean>(false)

//监听外部修改编辑器的值，进行编辑器视图的更新
watch(() => props.modelValue, (newVal) => {
  if (editorRef.value && newVal && !internalModification.value) {
    editorRef.value.review(newVal)
  }
})
//初始化渲染编辑器
onMounted(async () => {
  editorRef.value = await Editor.configure({
    el: elRef.value!,
    value: props.modelValue,
    placeholder: props.placeholder,
    dark: props.dark,
    editable: props.editable,
    autofocus: props.autofocus,
    allowCopy: props.allowCopy,
    allowCut: props.allowCut,
    allowPaste: props.allowPaste,
    allowPasteHtml: props.allowPasteHtml,
    priorityPasteFiles: props.priorityPasteFiles,
    textRenderTag: props.textRenderTag,
    blockRenderTag: props.blockRenderTag,
    emptyRenderTags: props.emptyRenderTags,
    extraKeepTags: props.extraKeepTags,
    extensions: props.extensions,
    formatRules: props.formatRules,
    domParseNodeCallback: props.domParseNodeCallback,
    pasteKeepMarks: props.pasteKeepMarks,
    pasteKeepStyles: props.pasteKeepStyles,
    onPasteText: props.onPasteText,
    onPasteHtml: props.onPasteHtml,
    onPasteImage: props.onPasteImage,
    onPasteVideo: props.onPasteVideo,
    onPasteFile: props.onPasteFile,
    onSelectionUpdate(selection) {
      emits('selectionupdate', selection)
    },
    onInsertParagraph(node) {
      emits('insertParagraph', node)
    },
    onDeleteComplete() {
      emits('deleteComplete')
    },
    onKeydown(event) {
      emits('keydown', event)
    },
    onKeyup(event) {
      emits('keyup', event)
    },
    onFocus(event) {
      emits('focus', event)
    },
    onBlur(event) {
      emits('blur', event)
    },
    beforeUpdateView() {
      emits('beforeUpdateView')
    },
    afterUpdateView() {
      emits('afterUpdateView')
    },
    //使用vue作视图渲染
    onUpdateView() {
      vnodes.value = createVNodes(this)
      return false
    },
    //监听编辑器内部修改值
    async onChange(newVal) {
      internalModification.value = true
      emits('update:modelValue', newVal)
      await nextTick()
      internalModification.value = false
    }
  })
})

//编辑器组件
const EditorComponent = defineComponent(() => {
  return () => {
    return h('div', {
      ref: elRef
    }, {
      default: () => [...vnodes.value]
    })
  }
})

//对外导出的属性
defineExpose({
  editorRef
})
</script>