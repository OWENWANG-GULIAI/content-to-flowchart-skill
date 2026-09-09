# Content to Flowchart Skill

将一段文字、笔记、业务描述或流程说明，整理成与原始逻辑一致的可编辑 Mermaid 图，并渲染为 PNG 图片。

## 适用场景

- 业务流程、操作步骤、审批链路
- 系统、团队或知识框架的层级关系
- 同时包含总体架构和关键执行链路的方案
- 信息不完整但需要先形成可讨论草图的材料

Skill 会先判断内容应表达为流程图、架构图、组合图还是草案图；不会为了画图而虚构步骤、角色、条件或结果。

## 安装

将整个目录放入 Codex 的本地 Skills 目录：

```bash
cp -R content-to-flowchart ~/.codex/skills/
```

PNG 渲染需要 Mermaid CLI：

```bash
npm install --global @mermaid-js/mermaid-cli
```

## 使用

```text
使用 $content-to-flowchart 把下面内容整理成可编辑流程图，并同时输出 PNG。
```

## 交付内容

每次任务包含：

1. 内容结构判断与主线说明
2. 可编辑的 Mermaid 源码（`.mmd`）
3. 由同一份源码渲染的 PNG 图片
4. 整理假设与待确认项

复杂内容会拆成“总体架构 + 关键流程详情”，而不是堆入一张难以阅读的图。

## 目录结构

```text
content-to-flowchart/
├── SKILL.md
├── agents/
│   └── openai.yaml
└── references/
    ├── annotation-policy.md
    ├── diagram-classification.md
    ├── diagram-grammar.md
    └── rendering-and-verification.md
```

## 关键边界

- Mermaid 是唯一可编辑的源文件；PNG 必须由同一份 Mermaid 渲染。
- 事实、整理假设、待确认项和关键说明必须分开表达。
- 无法渲染 PNG 时，Skill 会保留有效 Mermaid 源码并说明原因，不会伪造图片交付。
