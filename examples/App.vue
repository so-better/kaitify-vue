<template>
  <div style="padding: 10px;">
    <Wrapper locale="zh-cn" :disabled="disabled" :dark="isDark" :style="{ width: '100%', height: '500px' }"
      allow-paste-html placeholder="输入正文内容..." v-model="content">
      <template #before>
        <UndoMenu />
        <RedoMenu />
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
        <HeadingMenu />
        <HorizontalMenu />
        <ImageMenu />
        <DecreaseIndentMenu />
        <IncreaseIndentMenu />
        <ItalicMenu />
        <LineHeightMenu />
        <LinkMenu />
        <OrderedListMenu />
        <UnorderedListMenu />
        <MathMenu />
      </template>
      <template v-slot:after="{ textCount }">
        总字数：{{ textCount }}
      </template>
    </Wrapper>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Wrapper, BoldMenu, AlignLeftMenu, AlignCenterMenu, AlignRightMenu, AlignJusitfyMenu, AttachmentMenu, BackColorMenu, BlockquoteMenu, CodeMenu, CodeBlockMenu, ColorMenu, FontFamilyMenu, FontSizeMenu, HeadingMenu, RedoMenu, UndoMenu, HorizontalMenu, ImageMenu, IncreaseIndentMenu, DecreaseIndentMenu, ItalicMenu, LineHeightMenu, LinkMenu, OrderedListMenu, UnorderedListMenu, MathMenu } from "../src/index"
const content = ref<string>('')
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
