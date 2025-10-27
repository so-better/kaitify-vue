<template>
  <i v-if="name.startsWith('kaitify-icon-')" class="kaitify-icon" :class="name" :style="{ fontSize: typeof size === 'number' ? `${size}px` : size }"></i>
  <IconfiyIcon v-else mode="svg" :icon="name" class="kaitify-icon" :style="{ fontSize: typeof size === 'number' ? `${size}px` : size }" />
</template>
<script setup lang="ts">
import { Icon as IconfiyIcon } from '@iconify/vue'
import { IconPropsType } from './props'
defineOptions({
  name: 'Icon'
})
withDefaults(defineProps<IconPropsType>(), {
  name: ''
})
</script>
<style scoped src="./style.less"></style>
