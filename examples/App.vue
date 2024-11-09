<template>
  <div style="padding: 10px;">
    <div style="margin-bottom: 20px;">
      <Menu active dropdown>加粗</Menu>
      <Menu active>斜体</Menu>
      <Menu active>下划线</Menu>
    </div>
    <Wrapper :style="{ width: '100%', height: '500px' }" allow-paste-html placeholder="输入正文内容..." v-model="content" />
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { Wrapper, Menu } from "../src/index"
const content = ref<string>('')
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
