---
name: release
description: kaitify-vue 发布流程，按步骤完成版本号更新、源码打包、文档更新、changelog 更新、文档打包、README 更新、npm 发布，每步均需用户确认后执行。
---

# kaitify-vue 发布流程

> 执行此 skill 时，严格按照以下步骤逐步完成发布工作。**每一步执行前必须先向用户确认，用户明确同意后再执行，不得跳步或合并执行。**

---

## 步骤 1：更新版本号

首先读取 `package.json` 中当前的 `version` 字段，然后根据当前版本类型自动推算候选版本，使用 `AskUserQuestion` 工具以选项形式呈现给用户（必须包含"其他"选项供用户自定义输入）：

**若当前版本为 beta 版（如 `x.y.z-beta.N`）：**

- 选项 1：`x.y.z-beta.(N+1)`（beta 版本号 +1）
- 选项 2：`x.y.z`（发布为正式版本）
- 选项 3：其他（用户自行输入）

**若当前版本为正式版（如 `x.y.z`）：**

- 选项 1：`x.y.(z+1)-beta.1`（下一个补丁版的 beta）
- 选项 2：`x.y.(z+1)`（下一个补丁正式版）
- 选项 3：`x.(y+1).0-beta.1`（下一个次版本的 beta）
- 选项 4：其他（用户自行输入）

获取用户选择后，**直接**使用 Edit 工具修改 `package.json` 中的 `version` 字段，无需再次确认。完成后展示修改结果，直接进入下一步。

---

## 步骤 2：打包源代码

向用户确认：

> 即将执行 `npm run lib` 打包最新源代码，是否继续？

用户确认后执行：

```bash
npm run lib
```

- 执行成功：告知用户打包完成，直接进入下一步。
- 执行失败：将完整错误信息展示给用户，**停止后续步骤**，等待用户解决后再继续。

---

## 步骤 3：检查并更新文档

向用户确认：

> 即将根据 `src` 目录下的最新源码，检查并更新 `docs` 目录下的文档，是否继续？

用户确认后，执行以下操作：

### 3.0 更新 install.md 中的版本号

读取 `docs/guide/install.md`，将文件中所有出现的旧版本号（`{当前版本号}`）替换为新版本号（`{新版本号}`），包括：

- 下载链接中的版本号
- CDN 链接中的固定版本号
- npm / yarn / pnpm 安装指定版本的示例命令

使用 `replace_all` 模式一次性替换所有出现的旧版本号。

### 3.1 读取源码

重点读取以下文件，提取准确的组件、Props、事件信息：

- `src/index.ts`：对外导出的组件和工具
- `src/editor/wrapper/props.ts`：Wrapper 组件的 Props 定义（含类型）
- `src/editor/wrapper/wrapper.vue`：Wrapper 组件的 emits、slots 定义
- `src/editor/menu/props.ts`：Menu 组件的 Props 定义
- `src/editor/bubble/props.ts`：Bubble 组件的 Props 定义
- `src/editor/menu/built-in/` 下各菜单组件的 `props.ts` 和 `.vue`：各内置菜单的 Props 定义
- `src/core/checkbox/props.ts`、`src/core/divider/`、`src/core/icon/props.ts`、`src/core/tabs/props.ts`：核心基础组件 Props
- `src/locale/index.ts`：国际化相关导出

### 3.2 逐项核查文档

对 `docs/` 目录下以下文件逐一核查：

- `docs/guide/introduction.md`：项目介绍
- `docs/guide/install.md`：安装说明
- `docs/guide/quick-start.md`：快速上手示例
- `docs/guide/wrapper.md`：Wrapper 组件文档（Props、事件、插槽）
- `docs/guide/menu.md`：Menu 组件文档
- `docs/guide/bubble.md`：Bubble 组件文档
- `docs/guide/checkbox.md`：Checkbox 基础组件文档
- `docs/guide/divider.md`：Divider 基础组件文档
- `docs/guide/icon.md`：Icon 基础组件文档
- `docs/guide/tabs.md`：Tabs 基础组件文档
- `docs/guide/locale.md`：国际化文档
- `docs/guide/shortcut.md`：快捷键文档
- `docs/menus/introduction.md`：内置菜单总览
- `docs/menus/built-in/` 下各菜单文档：核对每个菜单组件的 Props 名称及类型

重点核查：

- 组件名是否与源码导出名一致
- Props 名称、类型、默认值是否与 TypeScript 定义完全一致，不得凭推断或记忆填写
- 事件名（emits）、插槽名（slots）是否与 `.vue` 文件中一致
- 代码示例中的用法是否符合真实的组件签名
- 是否存在拼写错误或注释错误
- 文档中引用的链接是否真实存在，不得编造链接

### 3.3 修正原则

- **只修改与源码不符的内容**，不随意改动其他内容
- **不得编造**任何组件名、Props、事件名、链接或示例
- 无法确认的内容保持原样，并告知用户存疑之处

完成后向用户汇报：修改了哪些文档、具体改了什么，直接进入下一步。

---

## 步骤 4：更新 changelog

向用户确认：

> 即将根据 git 提交记录自动生成版本 `{新版本号}` 的更新说明并写入 `docs/changelog.md`，是否继续？

用户确认后，执行以下操作：

### 4.1 获取提交记录

执行以下命令，获取自上一个版本 tag 以来涉及 `src/` 目录的所有 commit：

```bash
git log $(git describe --tags --abbrev=0)..HEAD --oneline -- src/
```

若没有任何已有 tag，则获取全部涉及 `src/` 的提交：

```bash
git log --oneline -- src/
```

### 4.2 生成更新内容

**只根据涉及 `src/` 目录的提交**归纳整理更新要点，文档、配置、脚本等变更不计入 changelog。合并相关提交、过滤无实质意义的提交（如"fix typo"、"代码格式化"等），生成 changelog 条目列表。若无任何 `src/` 相关提交，则检查当前工作区中 `src/` 下的待提交变更（`git diff HEAD -- src/` 或 `git status`），根据实际变更内容归纳 changelog 条目。若工作区也无 `src/` 变更，再写入"代码优化，修复部分问题"作为兜底条目。

### 4.3 写入 changelog

读取 `docs/changelog.md`，在文件的 **frontmatter 结束标记（`---`）之后、第一个版本条目（`## v...`）之前**插入新版本条目，格式与文件中现有条目保持一致：

```
## v{新版本号} <Badge type="tip" text='{YYYY.MM.DD}' />

- {更新内容1}
- {更新内容2}
```

日期使用执行当天的实际日期。完成后向用户展示新增的 changelog 内容，直接进入下一步。

---

## 步骤 5：打包文档

向用户确认：

> 即将执行 `npm run docs:build` 打包最新文档，是否继续？

用户确认后执行：

```bash
npm run docs:build
```

- 执行成功：告知用户文档打包完成，直接进入下一步。
- 执行失败：将完整错误信息展示给用户，**停止后续步骤**，等待用户解决后再继续。

---

## 步骤 6：更新 README.md

向用户确认：

> 即将根据最新源码和文档更新 `README.md`，是否继续？

用户确认后，**重新读取** `src/index.ts`、`src/editor/wrapper/props.ts`、`src/editor/menu/props.ts`、`src/editor/bubble/props.ts`、`package.json` 以及更新后的 `docs/` 文档，对 `README.md` 进行核查和修正：

**若 README.md 内容极简（不足 20 行或缺少安装说明、基本使用示例），视为需要初始化**，根据源码和 `docs/` 文档生成完整的 README.md，内容应包含以下所有部分（严格按照源码，不得编造）：

1. **项目标题与徽章**：项目名、npm 版本徽章、license 徽章
2. **简介**：根据 `docs/guide/introduction.md` 提炼，说明这是什么、解决什么问题、技术栈
3. **特性列表**：根据 introduction.md 和源码特点列出核心特性
4. **安装**：npm / yarn / pnpm 三种安装命令，包含"安装指定版本"示例（版本号取自 `package.json`）；以及 CDN 使用方式（取自 `docs/guide/install.md`）
5. **快速上手**：包含完整的编辑器构建示例，取自 `docs/guide/quick-start.md`
6. **核心组件**：列出 `Wrapper`、`Menu`、`Bubble`、`Divider`、`Checkbox`、`Tabs`、`Icon` 的简要说明，每个组件附带最小可用代码示例（取自对应文档）
7. **内置菜单**：列出所有内置菜单组件名称（从 `src/editor/menu/built-in/index.ts` 导出列表），说明可直接使用
8. **国际化**：说明支持的语言（取自 `src/locale/index.ts` 的 `LocaleType`），附代码示例
9. **文档链接**：完整文档地址
10. **License**

**若 README.md 已有完整内容**，则只修正与源码不符的组件名、Props 类型、版本号、代码示例，保持文件原有结构和风格，不得编造任何内容。

完成后向用户汇报修改或生成了哪些内容，直接进入下一步。

---

## 步骤 7：发布到 npm

向用户确认：

> 即将执行 `npm publish` 将 `{新版本号}` 发布到 npm，是否继续？

用户确认后，先尝试通过 Bash 工具执行：

```bash
npm publish
```

根据结果处理：

- **执行成功**：继续步骤 8。
- **提示 `EOTP` 或需要二次验证（OTP/浏览器认证）**：告知用户 Bash 工具为非交互模式，无法完成认证流程，请用户在自己的终端中手动运行 `npm publish`，npm 会输出浏览器认证链接，完成认证后发布会自动继续。告知用户完成后继续步骤 8。
- **其他失败原因**：展示完整错误信息，分析可能原因（如未登录 npm、版本号已存在、网络问题、权限问题等），告知用户排查方式，用户处理完毕后重新执行此步骤，**不得跳过直接进入步骤 8**。

---

## 步骤 8：完成

所有步骤全部成功后，告知用户：

> 🎉 kaitify-vue v{新版本号} 已发布完成！
>
> 本次完成的工作：
>
> - ✅ 版本号已更新为 {新版本号}
> - ✅ 源代码已打包（npm run lib）
> - ✅ docs/ 文档已检查并更新
> - ✅ changelog.md 已更新
> - ✅ 文档已打包（npm run docs:build）
> - ✅ README.md 已更新
> - ✅ 已发布至 npm（npm publish）
