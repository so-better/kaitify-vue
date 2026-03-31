<template>
  <div class="kaitify-divider" :class="{ 'kaitify-dark': state.editor?.isDark() }"></div>
</template>
<script setup lang="ts">
import { inject, Ref } from 'vue'
import { StateType } from '@/editor/wrapper'

defineOptions({
  name: 'Divider'
})

//编辑器状态数据
const state = inject<Ref<StateType>>('state')!
</script>
<style scoped src="./style.less"></style>
