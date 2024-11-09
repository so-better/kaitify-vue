<template>
  <i class="kaitify-icon" :class="`kaitify-icon-${value}`"></i>
</template>
<script setup lang="ts">
import { IconPropsType } from './props'
defineOptions({
  name: 'Icon'
})
withDefaults(defineProps<IconPropsType>(), {
  value: ''
})
</script>
<style scoped src="./style.less"></style>