<template>
  <button class="kaitify-button" :class="{ 'kaitify-button-active': active }" :disabled="disabled || undefined">
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
  active: false
})
</script>
<style src="./style.less" scoped></style>