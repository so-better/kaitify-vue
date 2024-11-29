<template>
  <div style="padding: 10px;">
    <EditorWrapper ref="wrapper"
      :bubble-props="{ matches: [{ tag: 'table' }, { tag: 'pre' }, { tag: 'video' }], visible: shouldVisible }"
      locale="zh-cn" :disabled="disabled" :dark="isDark" :style="{ width: '80%', height: '500px' }" allow-paste-html
      placeholder="输入正文内容..." v-model="content">
      <template #before>
        <DarkMenu />
        <UndoMenu />
        <RedoMenu />
        <ClearFormatMenu />
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
      <template #after="{ state }">
        总字数：{{ state.editor?.getContent().length ?? 0 }}
      </template>
      <template #bubble="{ state }">
        <div v-if="state.editor?.commands.getVideo?.()" style="padding: 5px;">
          <VideoControlsMenu />
          <VideoMutedMenu />
          <VideoLoopMenu />
        </div>
        <div v-else-if="state.editor?.commands.getCodeBlock?.()" style="padding: 5px;">
          <WrapUpMenu :match="{ tag: 'pre' }" />
          <CodeBlockLanguagesMenu :languages="['java', 'javascript']" />
          <WrapDownMenu :match="{ tag: 'pre' }" />
        </div>
        <div v-else-if="state.editor?.commands.getTable?.()" style="padding: 5px;">
          <WrapUpMenu :match="{ tag: 'table' }" />
          <TableAddRowMenu type="top" />
          <TableAddRowMenu type="bottom" />
          <TableDeleteRowMenu />
          <TableAddColumnMenu type="left" />
          <TableAddColumnMenu type="right" />
          <TableDeleteColumnMenu />
          <TableMergeCellMenu direction="left" />
          <TableMergeCellMenu direction="right" />
          <TableMergeCellMenu direction="top" />
          <TableMergeCellMenu direction="bottom" />
          <TableUnsetMenu />
          <WrapDownMenu :match="{ tag: 'table' }" />
        </div>
        <div v-else style="padding: 5px;">
          <ClearFormatMenu />
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
import { Wrapper as EditorWrapper, BoldMenu, AlignLeftMenu, AlignCenterMenu, AlignRightMenu, AlignJusitfyMenu, AttachmentMenu, BackColorMenu, BlockquoteMenu, CodeMenu, CodeBlockMenu, ColorMenu, FontFamilyMenu, FontSizeMenu, HeadingMenu, RedoMenu, UndoMenu, HorizontalMenu, ImageMenu, IncreaseIndentMenu, DecreaseIndentMenu, ItalicMenu, LineHeightMenu, LinkMenu, OrderedListMenu, UnorderedListMenu, MathMenu, StrikethroughMenu, SubscriptMenu, SuperscriptMenu, TableMenu, UnderlineMenu, VideoMenu, TaskMenu, WrapUpMenu, WrapDownMenu, CodeBlockLanguagesMenu, TableUnsetMenu, TableDeleteRowMenu, TableDeleteColumnMenu, TableAddRowMenu, TableAddColumnMenu, TableMergeCellMenu, DarkMenu, VideoControlsMenu, VideoMutedMenu, VideoLoopMenu, ClearFormatMenu } from "../src/index"
const content = ref<string>('')
const isDark = ref<boolean>(false)
const disabled = ref<boolean>(false)
const wrapper = ref<(typeof EditorWrapper) | undefined>()
const shouldVisible = computed<boolean>(() => {
  if (!wrapper.value) {
    return false
  }
  if (!!wrapper.value.state.editor?.commands.getTable()) {
    return true
  }
  if (!!wrapper.value.state.editor?.commands.getCodeBlock()) {
    return true
  }
  if (!!wrapper.value.state.editor?.commands.getVideo()) {
    return true
  }
  return !!wrapper.value.state.editor?.getFocusNodesBySelection('text').length
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
