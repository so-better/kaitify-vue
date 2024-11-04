<template>
  <div>
    <Editor />
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { content } from "./content"
import { Editor } from "../src"

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
