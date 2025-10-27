<template>
  <div class="kaitify-divider" :kaitify-dark="dark || undefined"></div>
</template>
<script setup lang="ts">
import { inject, Ref } from 'vue'

defineOptions({
  name: 'Divider'
})

//是否深色模式
const dark = inject<Ref<boolean>>('dark')!
</script>
<style scoped src="./style.less"></style>
