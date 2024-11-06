<template>
  <div style="padding: 20px;">
    <Editor allow-paste-html style="height: 400px;" placeholder="输入正文内容..." v-model="content" />
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { Editor } from "../src"
const content = ref<string>('')
onMounted(async () => {
  const res = await fetch('https://www.so-better.cn/api/doc/getById', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      docId: 237
    })
  }).then(res => res.json())
  content.value = (res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent + res.data.docContent).replaceAll('data-editify-hljs', 'kaitify-hljs')
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
