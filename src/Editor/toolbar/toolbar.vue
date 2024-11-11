<template>
  <div class="kaitify-toolbar" :class="{ 'kaitify-toolbar-border': border, 'kaitify-toolbar-underline': underline }">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { ToolbarPropsType } from './props';

defineOptions({
  name: 'Toolbar'
})
withDefaults(defineProps<ToolbarPropsType>(), {
  border: false,
  underline: false
})
</script>
<style src="./style.less" scoped></style>