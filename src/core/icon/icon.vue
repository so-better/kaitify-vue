<template>
  <i class="kaitify-icon" :class="`kaitify-icon-${name}`"></i>
</template>
<script setup lang="ts">
import { IconPropsType } from './props'
defineOptions({
  name: 'Icon'
})
withDefaults(defineProps<IconPropsType>(), {
  name: ''
})
</script>
<style scoped src="./style.less"></style>