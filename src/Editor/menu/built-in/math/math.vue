<template>
  <Menu ref="menuRef" :disabled="isDisabled" :active="false" popover :popover-options="{ width: 300 }">
    <Icon name="mathformula" />
    <template v-slot:popover>
      <div class="kaitify-math">
        <textarea class="kaitify-math-textarea" v-model.trim="mathText" :placeholder="t('输入Latex数学公式')" />
        <div class="kaitify-math-footer">
          <Button @click="insert">{{ t('插入') }}</Button>
        </div>
      </div>
    </template>
  </Menu>
</template>
<script setup lang="ts">
import { computed, inject, ref, Ref } from 'vue';
import { Editor } from '@kaitify/core';
import { Icon } from '@/core/icon';
import { Button } from "@/core/button"
import Menu from "@/editor/menu/menu.vue"
import { MathMenuPropsType } from './props';
//  \sum_{i=1}^{n} i = \frac{n(n+1)}{2}

defineOptions({
  name: 'MathMenu'
})
//属性
const props = withDefaults(defineProps<MathMenuPropsType>(), {
  disabled: false
})
//编辑器实例
const editorRef = inject<Ref<Editor | undefined>>('editorRef')
//翻译方法
const t = inject<(key: string) => string>('t')!
//菜单组件实例
const menuRef = ref<(typeof Menu) | undefined>()
//数学公式内容
const mathText = ref<string>('')

//组件没有放在Wrapper的插槽中会报错
if (!editorRef) {
  throw new Error(`The component must be placed in the slot of the Wrapper.`)
}

//是否禁用
const isDisabled = computed<boolean>(() => {
  if (!editorRef.value || !editorRef.value.selection.focused()) {
    return true
  }
  if (!!editorRef.value.commands.hasMath?.()) {
    return true
  }
  return props.disabled
})

//插入数学公式
const insert = () => {
  if (!mathText.value || !editorRef.value) {
    return
  }
  editorRef.value.commands.setMath?.(mathText.value)
  menuRef.value?.hidePopover()
}
</script>
<style src="./style.less" scoped></style>