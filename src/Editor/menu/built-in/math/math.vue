<template>
  <Menu ref="menuRef" :disabled="isDisabled" :active="isActive" popover :popover-props="{ width: popoverProps?.width ?? 300, maxHeight: popoverProps?.maxHeight, minWidth: popoverProps?.minWidth, animation: popoverProps?.animation, arrow: popoverProps?.arrow, placement: popoverProps?.placement, trigger: popoverProps?.trigger, zIndex: popoverProps?.zIndex }" @popover-show="menuShow">
    <Icon name="kaitify-icon-mathformula" />
    <template #popover>
      <div class="kaitify-math">
        <textarea class="kaitify-math-textarea" v-model.trim="mathText" :placeholder="t('输入Latex数学公式')" />
        <div class="kaitify-math-footer">
          <Button key="update" v-if="isActive" :disabled="!mathText" @click="update">{{ t('更新') }}</Button>
          <Button key="insert" v-else :disabled="!mathText" @click="insert">{{ t('插入') }}</Button>
        </div>
      </div>
    </template>
  </Menu>
</template>
<script setup lang="ts">
import { computed, ComputedRef, inject, ref } from 'vue'
import { Icon } from '@/core/icon'
import { Button } from '@/core/button'
import { StateType } from '@/editor/wrapper'
import Menu from '@/editor/menu/menu.vue'
import { MathMenuPropsType } from './props'
//  \sum_{i=1}^{n} i = \frac{n(n+1)}{2}

defineOptions({
  name: 'MathMenu'
})
//属性
const props = withDefaults(defineProps<MathMenuPropsType>(), {
  disabled: false
})
//编辑器状态数据
const state = inject<ComputedRef<StateType>>('state')!
//翻译函数
const t = inject<(key: string) => string>('t')!

//菜单组件实例
const menuRef = ref<typeof Menu | null>(null)
//数学公式内容
const mathText = ref<string>('')
//是否激活
const isActive = computed<boolean>(() => {
  return !!state.value.editor?.commands.getMath?.()
})
//是否禁用
const isDisabled = computed<boolean>(() => {
  if (!state.value.editor?.selection.focused()) {
    return true
  }
  if (state.value.editor.commands.hasAttachment?.()) {
    return true
  }
  if (state.value.editor.commands.hasLink?.()) {
    return true
  }
  if (state.value.editor.commands.hasCodeBlock?.()) {
    return true
  }
  if (state.value.editor.commands.hasMath?.() && !isActive.value) {
    return true
  }
  return props.disabled
})

//浮层显示
const menuShow = () => {
  const mathNode = state.value.editor?.commands.getMath?.()
  if (mathNode) {
    mathText.value = (mathNode.marks!['kaitify-math'] as string) || ''
  } else {
    mathText.value = ''
  }
}
//插入数学公式
const insert = () => {
  if (!mathText.value) {
    return
  }
  state.value.editor?.commands.setMath?.(mathText.value)
  menuRef.value?.hidePopover()
}
//更新数学公式
const update = async () => {
  if (!mathText.value) {
    return
  }
  state.value.editor?.commands.updateMath?.(mathText.value)
  menuRef.value?.hidePopover()
}
</script>
<style src="./style.less" scoped></style>
