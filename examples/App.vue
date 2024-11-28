<template>
  <div style="padding: 10px;">
    <EditorWrapper ref="wrapper"
      :bubble-props="{ matches: [{ tag: 'table' }, { tag: 'pre' }, { tag: 'ul' }, { tag: 'ol' }], visible: shouldVisible }"
      locale="zh-cn" :disabled="disabled" :dark="isDark" :style="{ width: '100%', height: '500px' }" allow-paste-html
      placeholder="输入正文内容..." v-model="content">
      <template #before>
        <DarkMenu />
        <UndoMenu />
        <RedoMenu />
        <BoldMenu />
        <AlignLeftMenu />
        <AlignCenterMenu :shortcut="e => e.key == 'b' && e.metaKey" />
        <AlignRightMenu />
        <AlignJusitfyMenu />
        <AttachmentMenu :popover-options="{ zIndex: 100, arrow: true }" />
        <BackColorMenu />
        <BlockquoteMenu />
        <CodeMenu />
        <CodeBlockMenu />
        <ColorMenu />
        <FontFamilyMenu />
        <FontSizeMenu />
        <HeadingMenu :shortcut="{ 1: e => e.key == '1' && e.metaKey }" />
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
        <VideoMenu :popover-options="{ zIndex: 100, arrow: true }" />
        <TaskMenu />
      </template>
      <template #after="{ textCount }">
        总字数：{{ textCount }}
      </template>
      <template #bubble="{ codeBlock, table }">
        <div v-if="codeBlock" style="padding: 5px;">
          <CodeBlockLanguagesMenu :languages="['java', 'javascript']" />
          <WrapUpMenu :match="{ tag: 'pre' }" />
          <WrapDownMenu :match="{ tag: 'pre' }" />
        </div>
        <div v-else-if="table" style="padding: 5px;">
          <TableDeleteRowMenu />
          <TableDeleteColumnMenu />
          <TableAddRowMenu type="top" />
          <TableAddRowMenu type="bottom" />
          <TableAddColumnMenu type="left" />
          <TableAddColumnMenu type="right" />
          <TableMergeCellMenu direction="left" />
          <TableMergeCellMenu direction="right" />
          <TableMergeCellMenu direction="top" />
          <TableMergeCellMenu direction="bottom" />
          <TableUnsetMenu />
          <WrapUpMenu :match="{ tag: 'table' }" />
          <WrapDownMenu :match="{ tag: 'table' }" />
        </div>
        <div v-else style="padding: 5px;">
          <BoldMenu />
          <ColorMenu />
          <BackColorMenu />
          <CodeMenu />
          <FontFamilyMenu />
          <FontSizeMenu />
          <ItalicMenu />
          <StrikethroughMenu />
          <SubscriptMenu />
          <SuperscriptMenu />
          <UnderlineMenu />
        </div>
      </template>
    </EditorWrapper>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { Wrapper as EditorWrapper, BoldMenu, AlignLeftMenu, AlignCenterMenu, AlignRightMenu, AlignJusitfyMenu, AttachmentMenu, BackColorMenu, BlockquoteMenu, CodeMenu, CodeBlockMenu, ColorMenu, FontFamilyMenu, FontSizeMenu, HeadingMenu, RedoMenu, UndoMenu, HorizontalMenu, ImageMenu, IncreaseIndentMenu, DecreaseIndentMenu, ItalicMenu, LineHeightMenu, LinkMenu, OrderedListMenu, UnorderedListMenu, MathMenu, StrikethroughMenu, SubscriptMenu, SuperscriptMenu, TableMenu, UnderlineMenu, VideoMenu, TaskMenu, WrapUpMenu, WrapDownMenu, CodeBlockLanguagesMenu, TableUnsetMenu, TableDeleteRowMenu, TableDeleteColumnMenu, TableAddRowMenu, TableAddColumnMenu, TableMergeCellMenu, DarkMenu } from "../src/index"
const content = ref<string>('')
const isDark = ref<boolean>(false)
const disabled = ref<boolean>(false)
const wrapper = ref<(typeof EditorWrapper) | undefined>()
const shouldVisible = computed<boolean>(() => {
  if (!wrapper.value || !wrapper.value.editorRef || !wrapper.value.keyOfSelectionUpdate) {
    return false
  }
  if (!wrapper.value.editorRef.selection.focused()) {
    return false
  }
  if (!!wrapper.value.editorRef.commands.getTable()) {
    return true
  }
  if (!!wrapper.value.editorRef.commands.getList(true)) {
    return true
  }
  if (!!wrapper.value.editorRef.commands.getList(false)) {
    return true
  }
  if (!!wrapper.value.editorRef.commands.getCodeBlock()) {
    return true
  }
  return !wrapper.value.editorRef.selection.collapsed()
})

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
