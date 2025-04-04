---
title: image 图片
---

# image 图片

插入图片 / 更新图片

## 使用方法

- 引入组件

```ts
import { ImageMenu } from '@kaitify/vue'
```

- 在 `Wrapper` 包裹器插槽中使用

```html
<Wrapper v-model="content">
	<template #before>
		<ImageMenu />
	</template>
</Wrapper>
```

## Props 参数

##### disabled <Badge type="danger" text="boolean" />

是否禁用该菜单，默认为 `false`

##### tabs <Badge type="danger" text="{ data: ('remote' | 'upload')[]; default: 'remote' | 'upload'}" />

配置浮层内的选项卡，目前支持 `upload`（本地上传）和 `remote`（远程图片），`data` 表示选项卡的数据，`default` 表示默认展示的选项卡

##### popoverProps <Badge type="danger" text="MenuPropsType['popoverProps']" />

浮层属性配置，同 `Menu` 的 `popoverProps` 属性

##### width <Badge type="danger" text="string | number" />

初始图片宽度

##### customUpload <Badge type="danger" text="(file: File) => string | Promise<string>" />

自定义本地图片上传的方法，该方法返回一个字符串值，表示上传后的图片文件地址，回调参数为 `File` 文件，如果不设置该方法，图片默认以 `base64` 字符串的形式插入编辑器中

## 代码示例

<Wrapper :dark="isDark" v-model="content" placeholder="输入内容..." style="width:100%;height:200px;">
  <template #before>
    <div style="margin-bottom:10px;">
      <ImageMenu />
    </div>
  </template>
</Wrapper>

<script lang="ts" setup>
import { useData } from 'vitepress'
import { Wrapper, ImageMenu } from '../../../lib/kaitify-vue.es.js'
import { ref } from 'vue'
const { isDark } = useData()
const content = ref('<p>hello</p>')
</script>
