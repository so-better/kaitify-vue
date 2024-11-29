<template>
  <slot name="before" :state="state" :editor="editor" :keyOfSelectionUpdate="keyOfSelectionUpdate"></slot>
  <EditorWrapper v-bind="$attrs" />
  <slot name="after" :state="state" :editor="editor" :keyOfSelectionUpdate="keyOfSelectionUpdate"></slot>
  <Bubble :visible="bubbleVisible" :matches="bubbleProps?.matches ?? []" :zIndex="bubbleProps?.zIndex">
    <slot name="bubble" :state="state" :editor="editor" :keyOfSelectionUpdate="keyOfSelectionUpdate"></slot>
  </Bubble>
</template>
<script lang="ts" setup>
import { computed, defineComponent, h, nextTick, onMounted, provide, ref, VNode, watch } from "vue";
import { Editor } from "@kaitify/core";
import { StateType, WrapperPropsType } from "./props"
import { createVNodes } from "./render"
import { translate } from "@/locale";
import { Bubble } from "../bubble";
defineOptions({
  name: 'Wrapper',
  inheritAttrs: false
})
//属性
const props = withDefaults(defineProps<WrapperPropsType>(), {
  modelValue: '<p><br/></p>',
  disabled: false,
  locale: 'zh-cn',
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
const editor = ref<Editor | undefined>()
//编辑器内容虚拟节点
const vnodes = ref<VNode[]>([])
//是否编辑器内部修改值
const internalModification = ref<boolean>(false)
//编辑器光标更新标记
const keyOfSelectionUpdate = ref<number>(0)
//编辑器总字数
const textCount = ref<number>(0)
//是否鼠标按下
const isMouseDown = ref<boolean>(false)
//是否显示气泡栏
const bubbleVisible = computed<boolean>(() => {
  if (props.disabled) {
    return false
  }
  if (isMouseDown.value) {
    return false
  }
  return props.bubbleProps?.visible ?? false
})
//编辑器状态数据
const state = computed<StateType>(() => {
  const stateData: StateType = {
    textCount: textCount.value,
    isTextSelection: false,
    isImage: false,
    isVideo: false,
    isLink: false,
    isCodeBlock: false,
    isUnorderedList: false,
    isOrderedList: false,
    isTable: false
  }
  if (keyOfSelectionUpdate.value > 0) {
    stateData.isTextSelection = !!editor.value?.getFocusNodesBySelection('text')
    stateData.isImage = !!editor.value?.commands.getImage?.()
    stateData.isVideo = !!editor.value?.commands.getVideo?.()
    stateData.isLink = !!editor.value?.commands.getLink?.()
    stateData.isCodeBlock = !!editor.value?.commands.getCodeBlock?.()
    stateData.isUnorderedList = !!editor.value?.commands.getList?.({ ordered: false })
    stateData.isOrderedList = !!editor.value?.commands.getList?.({ ordered: true })
    stateData.isTable = !!editor.value?.commands.getTable?.()
  }
  return stateData
})

//监听外部修改编辑器的值，进行编辑器视图的更新
watch(() => props.modelValue, async (newVal) => {
  if (editor.value && newVal && !internalModification.value) {
    await editor.value.review(newVal)
    textCount.value = editor.value.getText().length
  }
})
//监听以下属性变化，对编辑器进行更新
watch(() => props.disabled, newVal => {
  if (editor.value) {
    editor.value.setEditable(!newVal)
  }
})
watch(() => props.dark, newVal => {
  if (editor.value) {
    editor.value.setDark(newVal)
  }
})
watch(() => props.allowCopy, newVal => {
  if (editor.value) {
    editor.value.allowCopy = newVal
  }
})
watch(() => props.allowCut, newVal => {
  if (editor.value) {
    editor.value.allowCut = newVal
  }
})
watch(() => props.allowPaste, newVal => {
  if (editor.value) {
    editor.value.allowPaste = newVal
  }
})
watch(() => props.allowPasteHtml, newVal => {
  if (editor.value) {
    editor.value.allowPasteHtml = newVal
  }
})
watch(() => props.priorityPasteFiles, newVal => {
  if (editor.value) {
    editor.value.priorityPasteFiles = newVal
  }
})

//初始化渲染编辑器
onMounted(async () => {
  editor.value = await Editor.configure({
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
    extensions: [...props.extensions ?? []],
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
      textCount.value = this.getText().length || 0
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
      textCount.value = this.getText().length || 0
    }
  })
})

//编辑区域组件
const EditorWrapper = defineComponent(() => {
  return () => {
    return h('div', {
      ref: elRef,
      onMousedown: () => {
        isMouseDown.value = true
      },
      onMouseup: () => {
        isMouseDown.value = false
      },
    }, {
      default: () => [...vnodes.value]
    })
  }
})

//翻译方法
const t = (key: string) => {
  return translate(props.locale, key)
}

//对子孙组件提供的属性
provide('el', elRef)
provide('editor', editor)
provide('keyOfSelectionUpdate', keyOfSelectionUpdate)
provide('state', state)
provide('t', t)
provide('getLocale', () => props.locale)

//对外导出的属性
defineExpose({
  elRef,
  editor,
  keyOfSelectionUpdate,
  state
})
</script>