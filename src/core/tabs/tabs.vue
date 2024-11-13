<template>
  <div class="kaitify-tabs">
    <div class="kaitify-tabs-header">
      <div v-for="(item, index) in names" class="kaitify-tabs-header-item"
        :class="{ 'kaitify-tabs-header-item-active': currentIndex == index }" @click="onSelect(index)">{{ item }}</div>
    </div>
    <div class="kaitify-tabs-content">
      <slot :index="currentIndex"></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { TabsPropsType } from './props';

defineOptions({
  name: 'Tabs'
})
withDefaults(defineProps<TabsPropsType>(), {
  names: () => []
})
const currentIndex = ref<number>(0)

const onSelect = (index: number) => {
  currentIndex.value = index
}
</script>
<style src="./style.less" scoped></style>