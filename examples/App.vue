<template>
  <div style="padding: 10px;">
    <EditorWrapper :bubble-props="{ matches: [{ tag: 'img' }, { tag: 'pre' }], visible: true }" locale="zh-cn"
      :disabled="disabled" :dark="isDark" :style="{ width: '100%', height: '500px' }" allow-paste-html
      placeholder="输入正文内容..." v-model="content">
      <template #before>
        <UndoMenu />
        <RedoMenu />
        <BoldMenu />
        <AlignLeftMenu />
        <AlignCenterMenu />
        <AlignRightMenu />
        <AlignJusitfyMenu />
        <AttachmentMenu :popover-options="{ zIndex: 100 }" />
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
        <StrikethroughMenu />
        <SubscriptMenu />
        <SuperscriptMenu />
        <TableMenu />
        <UnderlineMenu />
        <VideoMenu />
        <TaskMenu />
      </template>
      <template #after="{ textCount }">
        总字数：{{ textCount }}
      </template>
      <template #bubble>
        <div style="padding: 4px;">
          <UndoMenu />
          <RedoMenu />
          <BoldMenu />
          <AlignLeftMenu />
          <AlignCenterMenu />
          <AlignRightMenu />
          <AlignJusitfyMenu />
          <AttachmentMenu />
        </div>
      </template>
    </EditorWrapper>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Wrapper as EditorWrapper, BoldMenu, AlignLeftMenu, AlignCenterMenu, AlignRightMenu, AlignJusitfyMenu, AttachmentMenu, BackColorMenu, BlockquoteMenu, CodeMenu, CodeBlockMenu, ColorMenu, FontFamilyMenu, FontSizeMenu, HeadingMenu, RedoMenu, UndoMenu, HorizontalMenu, ImageMenu, IncreaseIndentMenu, DecreaseIndentMenu, ItalicMenu, LineHeightMenu, LinkMenu, OrderedListMenu, UnorderedListMenu, MathMenu, StrikethroughMenu, SubscriptMenu, SuperscriptMenu, TableMenu, UnderlineMenu, VideoMenu, TaskMenu } from "../src/index"
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
  overflow: hidden
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
