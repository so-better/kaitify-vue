<template>
  <button class="kaitify-button" :class="{ 'kaitify-button-active': active, 'kaitify-button-block': block, 'kaitify-button-large': large, 'kaitify-dark': dark }" :disabled="disabled" type="button" role="button">
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
import { inject, Ref } from 'vue'
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

const dark = inject<Ref<boolean>>('dark')!
</script>
<style src="./style.less" scoped></style>
