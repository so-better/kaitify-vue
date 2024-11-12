<template>
  <Menu :disabled="disabled" :active="isActive">
    <Icon name="bold" />
  </Menu>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { Icon } from '@/core/icon';
import Menu from "@/editor/menu/menu.vue"
import { BoldMenuPropsType } from './props';
defineOptions({
  name: 'BoldMenu'
})
//属性
const props = withDefaults(defineProps<BoldMenuPropsType>(), {
  disabled: false
})
//是否激活
const isActive = computed(() => {
  return false
})
</script>