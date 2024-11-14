<template>
  <div style="padding: 10px;">
    <Wrapper :disabled="disabled" :dark="isDark" :style="{ width: '100%', height: '500px' }" allow-paste-html
      placeholder="输入正文内容..." v-model="content">
      <template #before>
        <BoldMenu />
        <AlignLeftMenu />
        <AlignCenterMenu />
        <AlignRightMenu />
        <AlignJusitfyMenu />
        <AttachmentMenu />
        <BackColorMenu />
        <BlockquoteMenu />
        <CodeMenu />
        <CodeBlockMenu />
        <ColorMenu />
        <FontFamilyMenu />
        <FontSizeMenu />
      </template>
      <template v-slot:after="{ textCount }">
        总字数：{{ textCount }}
      </template>
    </Wrapper>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Wrapper, BoldMenu, AlignLeftMenu, AlignCenterMenu, AlignRightMenu, AlignJusitfyMenu, AttachmentMenu, BackColorMenu, BlockquoteMenu, CodeMenu, CodeBlockMenu, ColorMenu, FontFamilyMenu, FontSizeMenu } from "../src/index"
const content = ref<string>('<img src="#"/>')
const isDark = ref<boolean>(false)
const disabled = ref<boolean>(false)
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
