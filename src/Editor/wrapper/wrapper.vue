<template>
  <slot :key="`before-${keyOfSelectionUpdate}`" name="before" :textCount="textCount" :editorRef="editorRef"></slot>
  <EditorWrapper v-bind="$attrs" />
  <slot :key="`after-${keyOfSelectionUpdate}`" name="after" :textCount="textCount" :editorRef="editorRef"></slot>
</template>
<script lang="ts" setup>
import { defineComponent, h, nextTick, onMounted, provide, ref, VNode, watch } from "vue";
import { Editor } from "@kaitify/core";
import { WrapperPropsType } from "./props"
import { createVNodes } from "./render"
defineOptions({
  name: 'Wrapper',
  inheritAttrs: false
})
//属性
const props = withDefaults(defineProps<WrapperPropsType>(), {
  modelValue: '<p><br/></p>',
  disabled: false,
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
const elRef = ref<HTMLElement | undefined>()
//编辑器实例
const editorRef = ref<Editor | undefined>()
//编辑器内容虚拟节点
const vnodes = ref<VNode[]>([])
//是否编辑器内部修改值
const internalModification = ref<boolean>(false)
//编辑器光标更新标记
const keyOfSelectionUpdate = ref<number>(1)
//编辑器总字数
const textCount = ref<number>(0)

//监听外部修改编辑器的值，进行编辑器视图的更新
watch(() => props.modelValue, async (newVal) => {
  if (editorRef.value && newVal && !internalModification.value) {
    await editorRef.value.review(newVal)
    textCount.value = editorRef.value.getText().length
  }
})
//监听以下属性变化，对编辑器进行更新
watch(() => props.disabled, newVal => {
  if (editorRef.value) {
    editorRef.value.setEditable(!newVal)
  }
})
watch(() => props.dark, newVal => {
  if (editorRef.value) {
    editorRef.value.setDark(newVal)
  }
})
watch(() => props.allowCopy, newVal => {
  if (editorRef.value) {
    editorRef.value.allowCopy = newVal
  }
})
watch(() => props.allowCut, newVal => {
  if (editorRef.value) {
    editorRef.value.allowCut = newVal
  }
})
watch(() => props.allowPaste, newVal => {
  if (editorRef.value) {
    editorRef.value.allowPaste = newVal
  }
})
watch(() => props.allowPasteHtml, newVal => {
  if (editorRef.value) {
    editorRef.value.allowPasteHtml = newVal
  }
})
watch(() => props.priorityPasteFiles, newVal => {
  if (editorRef.value) {
    editorRef.value.priorityPasteFiles = newVal
  }
})

//初始化渲染编辑器
onMounted(async () => {
  editorRef.value = await Editor.configure({
    el: elRef.value!,
    value: props.modelValue,
    placeholder: props.placeholder,
    dark: props.dark,
    editable: !props.disabled,
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
    onDetachMentBlockFromParentCallback: props.onDetachMentBlockFromParentCallback,
    beforePatchNodeToFormat: props.beforePatchNodeToFormat,
    onSelectionUpdate(selection) {
      keyOfSelectionUpdate.value++
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
      textCount.value = editorRef.value?.getText().length || 0
    }
  })
})

//编辑区域组件
const EditorWrapper = defineComponent(() => {
  return () => {
    return h('div', {
      ref: elRef,
    }, {
      default: () => [...vnodes.value]
    })
  }
})

//对子孙组件提供的属性
provide('elRef', elRef)
provide('editorRef', editorRef)
provide('textCount', textCount)

//对外导出的属性
defineExpose({
  elRef,
  editorRef,
  textCount
})
</script>