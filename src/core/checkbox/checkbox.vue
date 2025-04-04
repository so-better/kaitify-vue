<template>
  <label class="kaitify-checkbox" :disabled="disabled || undefined">
    <span class="kaitify-checkbox-el" :class="{ 'kaitify-checkbox-active': modelValue }">
      <input type="checkbox" @change="onChange" :disabled="disabled || undefined" />
    </span>
    <span class="kaitify-checkbox-label">{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
import { CheckboxEmitsType, CheckboxPropsType } from './props';

defineOptions({
  name: 'Checkbox'
})
//属性
const props = withDefaults(defineProps<CheckboxPropsType>(), {
  disabled: false,
  modelValue: false
})
//事件
const emits = defineEmits<CheckboxEmitsType>()

//复选框变更
const onChange = (e: Event) => {
  if (props.disabled) {
    return
  }
  const isCheck = (e.target as HTMLInputElement).checked
  emits('update:modelValue', isCheck)
}

</script>

<style scoped src="./style.less"></style>
