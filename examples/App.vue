<template>
  <div>

  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { Editor, KNode } from '../src'
import { content } from "./content"

const count = ref<number>(0)
const editor = ref<Editor | null>(null)

onMounted(async () => {

})

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
