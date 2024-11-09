<template>
  <div class="kaitify-menu">
    <Popover :disabled="!dropdown">
      <template #refer>
        <Button :disabled="disabled" :active="active">
          <slot></slot>
          <Icon v-if="dropdown" value="caret-down" />
        </Button>
      </template>
    </Popover>
  </div>
</template>
<script setup lang="ts">
import { Popover } from "@/core/popover"
import { Icon } from "@/core/icon"
import { Button } from "@/core/button"
import { MenuPropsType } from './props';

const props = withDefaults(defineProps<MenuPropsType>(), {
  dropdown: false,
  disabled: false,
  active: false
})
</script>
<style src="./style.less" scoped></style>