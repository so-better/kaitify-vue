<template>
  <div style="padding: 10px;">
    <Toolbar underline>
      <BoldMenu />

    </Toolbar>
    <Wrapper :style="{ width: '100%', height: '500px' }" allow-paste-html placeholder="输入正文内容..." v-model="content" />
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { Wrapper, Menu, MenuDataType, Toolbar, BoldMenu } from "../src/index"
const content = ref<string>('')
const onSelect = (item: MenuDataType) => {
  console.log(item);
}
const onOperate = () => {
  console.log('点击了菜单');

}
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
