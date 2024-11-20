<template>
  <Teleport to="body">
    <div class="kaitify-bubble">
      <slot></slot>
    </div>
  </Teleport>
</template>
<script setup lang="ts">
import { BubblePropsType } from "./props";

defineOptions({
  name: 'Bubble'
})
//属性
withDefaults(defineProps<BubblePropsType>(), {
  visible: false
})
//事件
const emits = defineEmits(['show', 'showing', 'shown', 'hide', 'hiding', 'hidden',])


</script>
<style src="./style.less" scoped></style>