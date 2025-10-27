<template>
  <label class="kaitify-checkbox" :class="{ 'kaitify-dark': dark, 'kaitify-disabled': disabled }">
    <span class="kaitify-checkbox-el" :class="{ 'kaitify-checkbox-active': modelValue }">
      <input type="checkbox" @change="onChange" :disabled="disabled" />
    </span>
    <span class="kaitify-checkbox-label">{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
import { inject, Ref } from 'vue'
import { CheckboxEmitsType, CheckboxPropsType } from './props'

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

//是否深色模式
const dark = inject<Ref<boolean>>('dark')!

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
