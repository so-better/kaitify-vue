<template>
  <div class="kaitify-divider" :kaitify-dark="dark || undefined"></div>
</template>
<script setup lang="ts">
import { inject } from 'vue'

defineOptions({
  name: 'Divider'
})
const dark = inject<boolean>('dark')!
</script>
<style scoped src="./style.less"></style>
