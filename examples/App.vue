<template>
  <div style="padding: 10px">
    div333
    <div id="area" style="background: #fff">
      <EditorWrapper ref="wrapper" :bubble-props="{ match: bubbleMatch, visible: shouldVisible }" locale="zh-cn" :disabled="disabled" :dark="isDark" :style="{ width: '100%', height: '500px' }" allow-paste-html placeholder="输入正文内容..." v-model="content" @created="onCreated">
        <template #before>
          <UndoMenu />
          <RedoMenu />
          <Divider />
          <DecreaseIndentMenu />
          <IncreaseIndentMenu />
          <Divider />
          <ClearFormatMenu />
          <BoldMenu />
          <ItalicMenu />
          <StrikethroughMenu />
          <SubscriptMenu />
          <SuperscriptMenu />
          <UnderlineMenu />
          <CodeMenu />
          <Divider />
          <ColorMenu />
          <BackColorMenu />
          <FontFamilyMenu />
          <FontSizeMenu />
          <Divider />
          <HeadingMenu :shortcut="{ 1: e => e.key == '1' && e.metaKey }" />
          <LineHeightMenu />
          <OrderedListMenu />
          <UnorderedListMenu />
          <TaskMenu />
          <Divider />
          <AlignLeftMenu />
          <AlignCenterMenu :shortcut="e => e.key == 'b' && e.metaKey" />
          <AlignRightMenu />
          <AlignJustifyMenu />
          <Divider />
          <BlockquoteMenu />
          <CodeBlockMenu />
          <HorizontalMenu />
          <LinkMenu />
          <AttachmentMenu :popover-props="{ zIndex: 100, arrow: true }" />
          <ImageMenu />
          <VideoMenu :popover-props="{ zIndex: 100, arrow: true }" />
          <MathMenu />
          <TableMenu />
          <FullScreenMenu target="#area" />
        </template>
        <template #after="{ state: { editor } }"> 总字数：{{ editor?.getContent().length ?? 0 }} </template>
        <template #bubble="{ state }">
          <div v-if="state.editor?.commands.getVideo?.()" style="padding: 5px">
            <VideoControlsMenu />
            <VideoMutedMenu />
            <VideoLoopMenu />
          </div>
          <div v-else-if="state.editor?.commands.getCodeBlock?.()" style="padding: 5px">
            <WrapUpMenu :match="{ tag: 'pre' }" />
            <Divider />
            <CodeBlockLanguagesMenu />
            <Divider />
            <WrapDownMenu :match="{ tag: 'pre' }" />
          </div>
          <div v-else-if="!!state.editor?.getFocusNodesBySelection('text').length" style="padding: 5px">
            <ClearFormatMenu />
            <BoldMenu />
            <ItalicMenu />
            <StrikethroughMenu />
            <SubscriptMenu />
            <SuperscriptMenu />
            <UnderlineMenu />
            <Divider />
            <ColorMenu />
            <BackColorMenu />
            <CodeMenu />
            <FontFamilyMenu />
            <FontSizeMenu />
          </div>
          <div v-else-if="!!state.editor?.commands.getLink?.()" style="padding: 5px">
            <LinkUnsetMenu />
          </div>
          <div v-else-if="state.editor?.commands.getTable?.()" style="padding: 5px">
            <WrapUpMenu :match="{ tag: 'table' }" />
            <Divider />
            <TableAddRowMenu type="top" />
            <TableAddRowMenu type="bottom" />
            <TableDeleteRowMenu />
            <TableAddColumnMenu type="left" />
            <TableAddColumnMenu type="right" />
            <TableDeleteColumnMenu />
            <Divider />
            <TableMergeCellMenu direction="left" />
            <TableMergeCellMenu direction="right" />
            <TableMergeCellMenu direction="top" />
            <TableMergeCellMenu direction="bottom" />
            <Divider />
            <TableUnsetMenu />
            <Divider />
            <WrapDownMenu :match="{ tag: 'table' }" />
          </div>
        </template>
      </EditorWrapper>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { Wrapper as EditorWrapper, BoldMenu, AlignLeftMenu, AlignCenterMenu, AlignRightMenu, AlignJustifyMenu, AttachmentMenu, BackColorMenu, BlockquoteMenu, CodeMenu, CodeBlockMenu, ColorMenu, FontFamilyMenu, FontSizeMenu, HeadingMenu, RedoMenu, UndoMenu, HorizontalMenu, ImageMenu, IncreaseIndentMenu, DecreaseIndentMenu, ItalicMenu, LineHeightMenu, LinkMenu, OrderedListMenu, UnorderedListMenu, MathMenu, StrikethroughMenu, SubscriptMenu, SuperscriptMenu, TableMenu, UnderlineMenu, VideoMenu, TaskMenu, WrapUpMenu, WrapDownMenu, CodeBlockLanguagesMenu, TableUnsetMenu, TableDeleteRowMenu, TableDeleteColumnMenu, TableAddRowMenu, TableAddColumnMenu, TableMergeCellMenu, VideoControlsMenu, VideoMutedMenu, VideoLoopMenu, ClearFormatMenu, KNodeMatchOptionType, Divider, LinkUnsetMenu, FullScreenMenu, Editor } from '../src/index'
const content = ref<string>('<h1><p>3333</p></h1>')
const isDark = ref<boolean>(false)
const disabled = ref<boolean>(false)
const wrapper = ref<typeof EditorWrapper | undefined>()
const bubbleMatch = ref<KNodeMatchOptionType | undefined>()
const shouldVisible = computed<boolean>(() => {
  if (!wrapper.value) {
    return false
  }
  if (!!wrapper.value.state.editor?.commands.getVideo()) {
    bubbleMatch.value = { tag: 'video' }
    return true
  }
  if (!!wrapper.value.state.editor?.commands.getCodeBlock()) {
    bubbleMatch.value = { tag: 'pre' }
    return true
  }
  if (!!wrapper.value.state.editor?.getFocusNodesBySelection('text').length) {
    bubbleMatch.value = undefined
    return true
  }
  if (!!wrapper.value.state.editor?.commands.getLink()) {
    bubbleMatch.value = { tag: 'a' }
    return true
  }
  if (!!wrapper.value.state.editor?.commands.getTable()) {
    bubbleMatch.value = { tag: 'table' }
    return true
  }
  return false
})

const onCreated = async editor => {
  console.log(editor.value.selection)
}
</script>
<style lang="less">
html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0;
  overflow: hidden;
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
