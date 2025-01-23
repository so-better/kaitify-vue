<template>
  <button class="kaitify-button"
    :class="{ 'kaitify-button-active': active, 'kaitify-button-block': block, 'kaitify-button-large': large }"
    :disabled="disabled || undefined" type="button" role="button">
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
import { ButtonPropsType } from './props';
defineOptions({
  name: 'Button'
})
withDefaults(defineProps<ButtonPropsType>(), {
  disabled: false,
  active: false,
  block: false,
  large: false
})
</script>
<style src="./style.less" scoped></style>