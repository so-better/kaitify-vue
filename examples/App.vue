<template>
  <div style="padding: 10px;">
    <div style="margin-bottom: 20px;">
      <Popover arrow :placement="placement">
        <template #refer><button>按钮</button></template>
        <div>3333</div>
      </Popover>
    </div>
    <Wrapper :style="{ width: '100%', height: '500px' }" allow-paste-html placeholder="输入正文内容..." v-model="content" />
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { Wrapper, Menu } from "../src/index"
import { Popover, PopoverPlacementType } from "../src/core/popover"
const content = ref<string>('')
const placement = ref<PopoverPlacementType>('bottom')
</script>
<style lang="less">
html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  outline: none;
}

#app {
  height: 100%;
  overflow-y: auto;
}
</style>
