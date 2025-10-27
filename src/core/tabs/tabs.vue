<template>
  <div class="kaitify-tabs" :class="{ 'kaitify-dark': dark }">
    <div class="kaitify-tabs-header">
      <div v-for="item in data" class="kaitify-tabs-header-item" :class="{ 'kaitify-tabs-header-item-active': current == item.value }" @click="onSelect(item.value)">{{ item.label }}</div>
    </div>
    <div class="kaitify-tabs-content">
      <slot :current="current"></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { inject, Ref, ref } from 'vue'
import { TabsPropsType } from './props'

defineOptions({
  name: 'Tabs'
})

//属性
const props = withDefaults(defineProps<TabsPropsType>(), {
  data: () => []
})

//是否深色模式
const dark = inject<Ref<boolean>>('dark')!

//当前选项
const current = ref<string | number>(props.defaultValue)

//选择
const onSelect = (val: string | number) => {
  current.value = val
}
</script>
<style src="./style.less" scoped></style>
