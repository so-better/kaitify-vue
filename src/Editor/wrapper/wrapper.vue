<template>
  <slot name="before" :state="state"></slot>
  <EditorWrapper v-bind="$attrs" />
  <slot name="after" :state="state"></slot>
  <Bubble :visible="bubbleVisible" :match="bubbleProps?.match" :zIndex="bubbleProps?.zIndex" @show="onBubbleShow"
    @showing="onBubbleShowing" @shown="onBubbleShown" @hide="onBubbleHide" @hiding="onBubbleHiding"
    @hidden="onBubbleHidden">
    <slot name="bubble" :state="state"></slot>
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
  hideBubbleOnMousedown: false,
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
const emits = defineEmits(['update:modelValue', 'selectionUpdate', 'insertParagraph', 'deleteComplete', 'keydown', 'keyup', 'focus', 'blur', 'beforeUpdateView', 'afterUpdateView', 'created', 'bubbleShow', 'bubbleShowing', 'bubbleShown', 'bubbleHide', 'bubbleHiding', 'bubbleHidden'])
//编辑器dom元素
const elRef = ref<HTMLElement | undefined>()
//编辑器实例
const editor = ref<Editor | undefined>()
//编辑器内容虚拟节点
const vnodes = ref<VNode[]>([])
//是否编辑器内部修改值
const internalModification = ref<boolean>(false)
//编辑器更新标记
const updateKey = ref<number>(0)
//是否鼠标按下
const isMouseDown = ref<boolean>(false)
//是否显示气泡栏
const bubbleVisible = computed<boolean>(() => {
  if (props.disabled) {
    return false
  }
  if (isMouseDown.value && props.hideBubbleOnMousedown) {
    return false
  }
  return props.bubbleProps?.visible ?? false
})
//编辑器状态数据
const state = computed<StateType>(() => {
  const data: StateType = {
    editor: editor.value,
    selection: undefined,
    locale: props.locale,
    t: (key: string) => {
      return translate(props.locale, key)
    }
  }
  if (!!updateKey.value) {
    data.editor = editor.value
    data.selection = editor.value?.selection
  }
  return data
})

//气泡栏显示前
const onBubbleShow = (el: Element) => {
  emits('bubbleShow', el)
}
//气泡栏显示时
const onBubbleShowing = (el: Element) => {
  emits('bubbleShowing', el)
}
//气泡栏显示后
const onBubbleShown = (el: Element) => {
  emits('bubbleShown', el)
}
//气泡栏隐藏前
const onBubbleHide = (el: Element) => {
  emits('bubbleHide', el)
}
//气泡栏隐藏时
const onBubbleHiding = (el: Element) => {
  emits('bubbleHiding', el)
}
//气泡栏隐藏后
const onBubbleHidden = (el: Element) => {
  emits('bubbleHidden', el)
}

//监听外部修改编辑器的值，进行编辑器视图的更新
watch(() => props.modelValue, async (newVal) => {
  if (editor.value && !internalModification.value) {
    await editor.value.review(newVal)
    editor.value.setSelectionAfter()
    editor.value.updateRealSelection()
    updateKey.value++
  }
})
//监听以下属性变化，对编辑器进行更新
watch(() => props.disabled, newVal => {
  if (editor.value) {
    editor.value.setEditable(!newVal)
    updateKey.value++
  }
})
watch(() => props.dark, newVal => {
  if (editor.value) {
    editor.value.setDark(newVal)
    updateKey.value++
  }
})
watch(() => props.allowCopy, newVal => {
  if (editor.value) {
    editor.value.allowCopy = newVal
    updateKey.value++
  }
})
watch(() => props.allowCut, newVal => {
  if (editor.value) {
    editor.value.allowCut = newVal
    updateKey.value++
  }
})
watch(() => props.allowPaste, newVal => {
  if (editor.value) {
    editor.value.allowPaste = newVal
    updateKey.value++
  }
})
watch(() => props.allowPasteHtml, newVal => {
  if (editor.value) {
    editor.value.allowPasteHtml = newVal
    updateKey.value++
  }
})
watch(() => props.priorityPasteFiles, newVal => {
  if (editor.value) {
    editor.value.priorityPasteFiles = newVal
    updateKey.value++
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
      updateKey.value++
      emits('selectionUpdate', selection)
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
    async onUpdateView() {
      vnodes.value = createVNodes(this)
      await nextTick()
      return false
    },
    //监听编辑器内部修改值
    async onChange(newVal) {
      internalModification.value = true
      emits('update:modelValue', newVal)
      await nextTick()
      internalModification.value = false
      updateKey.value++
    }
  })
  emits('created', editor)
})

//编辑区域组件
const EditorWrapper = defineComponent(() => {
  return () => {
    return h('div', {
      ref: elRef,
      class: 'kaitify-border',
      onMousedown: () => {
        isMouseDown.value = true
      },
      onMouseup: () => {
        isMouseDown.value = false
      }
    }, {
      default: () => [...vnodes.value]
    })
  }
})

//对子孙组件提供的属性
provide('state', state)

//对外导出的属性
defineExpose({
  elRef,
  state
})
</script>
<style src="./style.less" scoped></style>