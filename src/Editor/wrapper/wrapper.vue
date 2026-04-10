<template>
  <!-- before插槽 -->
  <Teleport v-if="appendBeforeTo" :to="appendBeforeTo">
    <slot name="before" :state="state"></slot>
  </Teleport>
  <slot v-else name="before" :state="state"></slot>
  <!-- 编辑区域 -->
  <div ref="wrapper" class="kaitify-border" v-bind="attrs" @mousedown="isMouseDown = true" @mouseup="isMouseDown = false"></div>
  <!-- after插槽 -->
  <Teleport v-if="appendAfterTo" :to="appendAfterTo">
    <slot name="after" :state="state"></slot>
  </Teleport>
  <slot v-else name="after" :state="state"></slot>
  <!-- 默认插槽 -->
  <slot :state="state"></slot>
</template>
<script lang="ts" setup>
import { Fragment, h, nextTick, onBeforeUnmount, onMounted, provide, ref, Ref, render, useAttrs, useTemplateRef, watch } from 'vue'
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
  locale: 'zh-CN'
})
//编辑器事件
const emits = defineEmits<WrapperEmitsType>()

//编辑器dom元素
const wrapperRef = useTemplateRef<HTMLElement>('wrapper')
//编辑器实例
const editor = ref<Editor>()

//是否编辑器内部修改值
const internalModification = ref(false)
//编辑器当前的状态数据
const state: Ref<StateType> = ref<StateType>({})
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
        if (editor.value.isEditable() && props.options?.autofocus) {
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
//监听options变化，对编辑器进行更新
watch(
  () => props.options,
  (newVal, oldVal) => {
    if (!editor.value) return
    let changed = false
    if (newVal?.editable !== oldVal?.editable) {
      editor.value.setEditable(newVal?.editable ?? true)
      changed = true
    }
    if (newVal?.dark !== oldVal?.dark) {
      editor.value.setDark(newVal?.dark ?? false)
      changed = true
    }
    if (newVal?.allowCopy !== oldVal?.allowCopy) {
      editor.value.allowCopy = newVal?.allowCopy ?? false
      changed = true
    }
    if (newVal?.allowCut !== oldVal?.allowCut) {
      editor.value.allowCut = newVal?.allowCut ?? false
      changed = true
    }
    if (newVal?.allowPaste !== oldVal?.allowPaste) {
      editor.value.allowPaste = newVal?.allowPaste ?? false
      changed = true
    }
    if (newVal?.allowPasteHtml !== oldVal?.allowPasteHtml) {
      editor.value.allowPasteHtml = newVal?.allowPasteHtml ?? false
      changed = true
    }
    if (newVal?.priorityPasteFiles !== oldVal?.priorityPasteFiles) {
      editor.value.priorityPasteFiles = newVal?.priorityPasteFiles ?? false
      changed = true
    }
    if (changed) {
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
    el: wrapperRef.value!,
    value: props.modelValue,
    ...props.options,
    onCreate(ed) {
      editor.value = ed
      state.value = {
        editor: ed,
        selection: ed.selection
      }
      props.options?.onCreate?.(ed)
    },
    onCreated(ed) {
      state.value = {
        editor: ed,
        selection: ed.selection
      }
      props.options?.onCreated?.(ed)
    },
    onSelectionUpdate() {
      state.value = {
        editor: this,
        selection: this.selection
      }
      props.options?.onSelectionUpdate?.apply(this, [this.selection])
    },
    async onUpdateView() {
      //使用vue作视图渲染
      render(h(Fragment, null, createVNodes(this)), wrapperRef.value!)
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
provide('wrapperRef', wrapperRef)
provide('isMouseDown', isMouseDown)
provide('t', (key: string) => {
  return translate(props.locale, key)
})

//对外导出的属性
defineExpose({
  state,
  wrapperRef
})
</script>
<style src="./style.less" scoped></style>
