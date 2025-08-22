<template>
  <div style="padding: 10px">
    <div style="display:flex;justify-content:flex-start;align-items: center;flex-wrap: wrap;" ref="menus"></div>
    <div id="area">
      <EditorWrapper ref="wrapper" :bubble-props="{ match: bubbleMatch, visible: shouldVisible }" locale="zh-CN"
        :disabled="disabled" :dark="isDark" :style="{ width: '100%', height: '500px' }" allow-paste-html
        placeholder="输入正文内容..." v-model="content" @created="onCreated" :append-before-to="menus">
        <template #before>
          <Menu popover :popover-props="{ width: '300px' }">
            菜单
            <template #popover>
              <Tabs :defaultValue="0" :data="[{ label: 'aaaa', value: 0 }, { label: 'vvvv', value: 1 }]">
                <template #default="{ current }">{{ current }}
                  <Checkbox :model-value="true" disabled />
                </template>
              </Tabs>
            </template>
          </Menu>
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
          <ImageMenu :tabs="{ data: ['remote', 'upload'], default: 'upload' }" />
          <VideoMenu :tabs="{ data: ['remote', 'upload'], default: 'upload' }"
            :popover-props="{ zIndex: 100, arrow: true }" />
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
import { Wrapper as EditorWrapper, BoldMenu, AlignLeftMenu, AlignCenterMenu, AlignRightMenu, AlignJustifyMenu, AttachmentMenu, BackColorMenu, BlockquoteMenu, CodeMenu, CodeBlockMenu, ColorMenu, FontFamilyMenu, FontSizeMenu, HeadingMenu, RedoMenu, UndoMenu, HorizontalMenu, ImageMenu, IncreaseIndentMenu, DecreaseIndentMenu, ItalicMenu, LineHeightMenu, LinkMenu, OrderedListMenu, UnorderedListMenu, MathMenu, StrikethroughMenu, SubscriptMenu, SuperscriptMenu, TableMenu, UnderlineMenu, VideoMenu, TaskMenu, WrapUpMenu, WrapDownMenu, CodeBlockLanguagesMenu, TableUnsetMenu, TableDeleteRowMenu, TableDeleteColumnMenu, TableAddRowMenu, TableAddColumnMenu, TableMergeCellMenu, VideoControlsMenu, VideoMutedMenu, VideoLoopMenu, ClearFormatMenu, KNodeMatchOptionType, Divider, LinkUnsetMenu, FullScreenMenu, Menu, Tabs, Checkbox } from '../src/index'
const content = ref<string>('<p kaitify-node=\"91\"><span kaitify-node=\"92\" style=\"font-weight: bold; font-size: 18px;\">Publications</span></p ><p kaitify-node=\"93\" style=\"line-height: 2.5;\"><span kaitify-node=\"94\" style=\"font-size: 14px; font-weight: bold;\">Lastest metaRLK article</span><span kaitify-node=\"95\"> </span></p ><p kaitify-node=\"96\" style=\"line-height: 2;\"><span kaitify-node=\"98\">Curation,&nbsp;nomenclature,&nbsp;and&nbsp;topological&nbsp;classification&nbsp;of&nbsp;receptor&nbsp;like&nbsp;kinases&nbsp;from&nbsp;528&nbsp;plant&nbsp;species&nbsp;for&nbsp;novel&nbsp;domain&nbsp;discovery&nbsp;and&nbsp;functional&nbsp;inference[J].&nbsp;Molecular&nbsp;Plant,&nbsp;2024,&nbsp;17(4):&nbsp;658-671.&nbsp;&nbsp; </span></p><p kaitify-node=\"91\"><span kaitify-node=\"92\" style=\"font-weight: bold; font-size: 18px;\">Publications</span></p ><p kaitify-node=\"93\" style=\"line-height: 2.5;\"><span kaitify-node=\"94\" style=\"font-size: 14px; font-weight: bold;\">Lastest metaRLK article</span><span kaitify-node=\"95\"> </span></p ><p kaitify-node=\"96\" style=\"line-height: 2;\"><span kaitify-node=\"98\">Curation, nomenclature, and topological classification of receptor like kinases from 528 plant species for novel domain discovery and functional inference[J]. Molecular Plant, 2024, 17(4): 658-671. </span></p>')
const isDark = ref<boolean>(false)
const disabled = ref<boolean>(false)
const wrapper = ref<typeof EditorWrapper | undefined>()
const bubbleMatch = ref<KNodeMatchOptionType | undefined>()
const menus = ref<HTMLElement | undefined>()
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
