<template>
  <button class="kaitify-button" :class="{ 'kaitify-button-active': active, 'kaitify-button-block': block, 'kaitify-button-large': large, 'kaitify-dark': state.editor?.isDark() }" :disabled="disabled" type="button" role="button">
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
import { inject, Ref } from 'vue'
import { StateType } from '@/editor/wrapper'
import { ButtonPropsType } from './props'

defineOptions({
  name: 'Button'
})

withDefaults(defineProps<ButtonPropsType>(), {
  disabled: false,
  active: false,
  block: false,
  large: false
})

//编辑器状态数据
const state = inject<Ref<StateType>>('state')!
</script>
<style src="./style.less" scoped></style>
