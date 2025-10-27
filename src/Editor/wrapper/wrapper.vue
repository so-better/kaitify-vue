<template>
  <!-- before插槽 -->
  <Teleport v-if="appendBeforeTo" :to="appendBeforeTo">
    <slot name="before" :state="state"></slot>
  </Teleport>
  <slot v-else name="before" :state="state"></slot>
  <!-- 编辑区域 -->
  <div ref="elRef" class="kaitify-border" v-bind="attrs" @mousedown="isMouseDown = true" @mouseup="isMouseDown = false"></div>
  <!-- after插槽 -->
  <Teleport v-if="appendAfterTo" :to="appendAfterTo">
    <slot name="after" :state="state"></slot>
  </Teleport>
  <slot v-else name="after" :state="state"></slot>
  <!-- 默认插槽 -->
  <slot :state="state"></slot>
</template>
<script lang="ts" setup>
import { Fragment, h, nextTick, onBeforeUnmount, onMounted, provide, ref, render, toRef, useAttrs, watch } from 'vue'
import { Editor } from '@kaitify/core'
import { translate } from '@/locale'
import { StateType, WrapperEmitsType, WrapperPropsType } from './props'
import { createVNodes } from './render'

defineOptions({
  name: 'Wrapper',
  inheritAttrs: false
})
const attrs = useAttrs()
//属性
const props = withDefaults(defineProps<WrapperPropsType>(), {
  modelValue: '<p><br/></p>',
  disabled: false,
  locale: 'zh-CN',
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
const emits = defineEmits<WrapperEmitsType>()
//编辑器dom元素
const elRef = ref<HTMLElement>()
//编辑器实例
const editor = ref<Editor>()
//是否编辑器内部修改值
const internalModification = ref(false)
//编辑器当前的状态数据
const state = ref<StateType>({})
//是否鼠标按下
const isMouseDown = ref(false)

//监听编辑器的值
watch(
  () => props.modelValue,
  async newVal => {
    if (editor.value) {
      //内部改变
      if (internalModification.value) {
        internalModification.value = false
        state.value = {
          editor: editor.value,
          selection: editor.value.selection
        }
      }
      //外部改变，进行视图更新
      else {
        await editor.value.review(newVal)
        if (!props.disabled && props.autofocus) {
          editor.value.setSelectionAfter()
          editor.value.updateRealSelection()
        }
        state.value = {
          editor: editor.value,
          selection: editor.value.selection
        }
      }
    }
  }
)
//监听以下属性变化，对编辑器进行更新
watch(
  () => props.disabled,
  newVal => {
    if (editor.value) {
      editor.value.setEditable(!newVal)
      state.value = {
        editor: editor.value,
        selection: editor.value.selection
      }
    }
  }
)
watch(
  () => props.dark,
  newVal => {
    if (editor.value) {
      editor.value.setDark(newVal)
      state.value = {
        editor: editor.value,
        selection: editor.value.selection
      }
    }
  }
)
watch(
  () => props.allowCopy,
  newVal => {
    if (editor.value) {
      editor.value.allowCopy = newVal
      state.value = {
        editor: editor.value,
        selection: editor.value.selection
      }
    }
  }
)
watch(
  () => props.allowCut,
  newVal => {
    if (editor.value) {
      editor.value.allowCut = newVal
      state.value = {
        editor: editor.value,
        selection: editor.value.selection
      }
    }
  }
)
watch(
  () => props.allowPaste,
  newVal => {
    if (editor.value) {
      editor.value.allowPaste = newVal
      state.value = {
        editor: editor.value,
        selection: editor.value.selection
      }
    }
  }
)
watch(
  () => props.allowPasteHtml,
  newVal => {
    if (editor.value) {
      editor.value.allowPasteHtml = newVal
      state.value = {
        editor: editor.value,
        selection: editor.value.selection
      }
    }
  }
)
watch(
  () => props.priorityPasteFiles,
  newVal => {
    if (editor.value) {
      editor.value.priorityPasteFiles = newVal
      state.value = {
        editor: editor.value,
        selection: editor.value.selection
      }
    }
  }
)

//初始化渲染编辑器
onMounted(() => {
  Editor.configure({
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
    extensions: [...(props.extensions ?? [])],
    formatRules: props.formatRules,
    onDomParseNode: props.onDomParseNode,
    onPasteKeepMarks: props.onPasteKeepMarks,
    onPasteKeepStyles: props.onPasteKeepStyles,
    onPasteText: props.onPasteText,
    onPasteHtml: props.onPasteHtml,
    onPasteImage: props.onPasteImage,
    onPasteVideo: props.onPasteVideo,
    onPasteFile: props.onPasteFile,
    onDetachMentBlockFromParent: props.onDetachMentBlockFromParent,
    onBeforePatchNodeToFormat: props.onBeforePatchNodeToFormat,
    onInsertParagraph: node => emits('insertParagraph', node),
    onDeleteComplete: () => emits('deleteComplete'),
    onKeydown: event => emits('keydown', event),
    onKeyup: event => emits('keyup', event),
    onFocus: event => emits('focus', event),
    onBlur: event => emits('blur', event),
    onBeforeUpdateView: () => emits('beforeUpdateView'),
    onAfterUpdateView: () => emits('afterUpdateView'),
    onCreate(ed) {
      editor.value = ed
      state.value = {
        editor: ed,
        selection: ed.selection
      }
    },
    onCreated(ed) {
      emits('created', ed)
      state.value = {
        editor: ed,
        selection: ed.selection
      }
    },
    onSelectionUpdate() {
      state.value = {
        editor: this,
        selection: this.selection
      }
      emits('selectionUpdate', this.selection)
    },
    async onUpdateView() {
      //使用vue作视图渲染
      render(h(Fragment, null, createVNodes(this)), elRef.value!)
      //等待视图渲染完成
      await nextTick()
      //阻止默认渲染方式
      return false
    },
    //监听编辑器内部修改值
    onChange(newVal) {
      internalModification.value = true
      emits('update:modelValue', newVal)
    }
  })
})

//卸载时销毁编辑器
onBeforeUnmount(() => {
  editor.value?.destroy()
  editor.value = undefined
})

//对子孙组件提供的属性
provide('state', state)
provide('elRef', elRef)
provide('disabled', props.disabled)
provide('isMouseDown', isMouseDown)
provide('dark', toRef(props, 'dark'))
provide('t', (key: string) => {
  return translate(props.locale, key)
})

//对外导出的属性
defineExpose({
  state,
  elRef
})
</script>
<style src="./style.less" scoped></style>
