<template>
  <div style="padding: 10px;">
    <Toolbar underline>
      <Menu>加粗</Menu>
      <Menu>斜体</Menu>
      <Menu disabled popover>字体</Menu>
      <Menu>插入图片</Menu>
      <Menu>下划线</Menu>
      <Menu active>上标</Menu>
      <Menu active>下标</Menu>
      <Menu>颜色</Menu>
      <Menu>加粗</Menu>
      <Menu>斜体</Menu>
      <Menu disabled popover>字体</Menu>
      <Menu>插入图片</Menu>
      <Menu>下划线</Menu>
      <Menu active>上标</Menu>
      <Menu active>下标</Menu>
      <Menu>颜色</Menu>
    </Toolbar>
    <Wrapper :style="{ width: '100%', height: '500px' }" allow-paste-html placeholder="输入正文内容..." v-model="content" />
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { Wrapper, Menu, MenuDataType, Toolbar } from "../src/index"
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
