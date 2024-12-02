---
lastUpdated: false
aside: false
layout: page
title: 演示
---

<div :class="$style.wrapper">
  <EditorWrapper ref="wrapper" v-model="content" placeholder="输入正文..." style="width:100%;flex:1;" :bubble-props="{ matches: [{ tag: 'video' }, { tag: 'pre' }, { tag: 'table' } ], visible: shouldVisible }" :dark="isDark" hideBubbleOnMousedown>
    <template #before>
        <div :class="$style.menus">
          <UndoMenu />
          <RedoMenu />
          <DecreaseIndentMenu />
          <IncreaseIndentMenu />
          <ClearFormatMenu />
          <BoldMenu />
          <ItalicMenu />
          <CodeMenu />
          <StrikethroughMenu />
          <SubscriptMenu />
          <SuperscriptMenu />
          <UnderlineMenu />
          <ColorMenu />
          <BackColorMenu />
          <FontFamilyMenu />
          <FontSizeMenu />
          <AlignLeftMenu />
          <AlignCenterMenu />
          <AlignRightMenu />
          <AlignJustifyMenu />
          <BlockquoteMenu />
          <CodeBlockMenu />
          <HeadingMenu />
          <LineHeightMenu />
          <OrderedListMenu />
          <UnorderedListMenu />
          <TaskMenu />
          <AttachmentMenu />
          <HorizontalMenu />
          <ImageMenu />
          <VideoMenu />
          <LinkMenu />
          <MathMenu />
          <TableMenu />
        </div>
    </template>
    <template #bubble="{ state }">
        <div v-if="state.editor?.commands.getVideo?.()" :class="$style.bubble">
          <VideoControlsMenu />
          <VideoMutedMenu />
          <VideoLoopMenu />
        </div>
        <div v-else-if="state.editor?.commands.getCodeBlock?.()" :class="$style.bubble">
          <WrapUpMenu :match="{ tag: 'pre' }" />
          <WrapDownMenu :match="{ tag: 'pre' }" />
          <CodeBlockLanguagesMenu />
        </div>
        <div v-else-if="!!state.editor?.getFocusNodesBySelection('text').length" :class="$style.bubble">
          <ClearFormatMenu />
          <BoldMenu />
          <ItalicMenu />
          <CodeMenu />
          <StrikethroughMenu />
          <SubscriptMenu />
          <SuperscriptMenu />
          <UnderlineMenu />
          <ColorMenu />
          <BackColorMenu />
          <FontFamilyMenu />
          <FontSizeMenu />
        </div>
        <div v-else-if="state.editor?.commands.getTable?.()" :class="$style.bubble">
          <WrapUpMenu :match="{ tag: 'table' }" />
          <WrapDownMenu :match="{ tag: 'table' }" />
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
        </div>
    </template>

  </EditorWrapper>
</div>

<script setup lang="ts">
  import { ref, computed } from "vue"
  import { useData } from 'vitepress'
  import { Wrapper as EditorWrapper, BoldMenu, AlignLeftMenu, AlignCenterMenu, AlignRightMenu, AlignJustifyMenu, AttachmentMenu, BackColorMenu, BlockquoteMenu, CodeMenu, CodeBlockMenu, ColorMenu, FontFamilyMenu, FontSizeMenu, HeadingMenu, RedoMenu, UndoMenu, HorizontalMenu, ImageMenu, IncreaseIndentMenu, DecreaseIndentMenu, ItalicMenu, LineHeightMenu, LinkMenu, OrderedListMenu, UnorderedListMenu, MathMenu, StrikethroughMenu, SubscriptMenu, SuperscriptMenu, TableMenu, UnderlineMenu, VideoMenu, TaskMenu, WrapUpMenu, WrapDownMenu, CodeBlockLanguagesMenu, TableUnsetMenu, TableDeleteRowMenu, TableDeleteColumnMenu, TableAddRowMenu, TableAddColumnMenu, TableMergeCellMenu, VideoControlsMenu, VideoMutedMenu, VideoLoopMenu, ClearFormatMenu } from "../lib/kaitify-vue.es.js"
  const content = ref<string>('')
  const { isDark } = useData()
  const wrapper = ref<(typeof EditorWrapper) | undefined>()

  const shouldVisible = computed<boolean>(() => {
    if (!wrapper.value) {
      return false
    }
    if (!!wrapper.value.state.editor?.commands.getVideo()) {
      return true
    }
    if (!!wrapper.value.state.editor?.commands.getCodeBlock()) {
      return true
    }
    if(!!wrapper.value.state.editor?.getFocusNodesBySelection('text').length){
      return true
    }
    if (!!wrapper.value.state.editor?.commands.getTable()) {
      return true
    }
    return false
  })
</script>
<style module>
  .wrapper{
    display:flex;
    justify-content:flex-start;
    flex-direction:column;
    padding:10px;
    width:100%;
    height:calc(100vh - 64px);
  }

  .menus{
    display:flex;
    justify-content:flex-start;
    align-items:center;
    width:100%;
    flex-wrap:wrap;
    margin-bottom:10px;
  }

  .bubble{
    padding:5px;
  }
</style>
