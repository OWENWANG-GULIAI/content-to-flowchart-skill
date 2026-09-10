<p align="center">
  <a href="https://github.com/OWENWANG-GULIAI">
    <img src="https://raw.githubusercontent.com/OWENWANG-GULIAI/ppt-page-image-director/main/assets/guliai-logo-on-light.png" alt="GULIAI" width="300">
  </a>
</p>

# Content to Flowchart Skill

将一段文字、笔记、业务描述或流程说明，整理成与原始逻辑一致的可编辑 Mermaid 图，并渲染为 PNG 图片。

## 为什么需要它

文字材料中的流程、层级和依赖关系通常混在一起。直接画图容易把并列关系误画成顺序，或为了让画面完整而补造步骤、角色和结果。本 Skill 先判断材料的真实结构，再选择流程图、架构图、组合图或草案图；Mermaid 是唯一可编辑源文件，PNG 必须由同一份源码渲染。

## 适用场景

- 业务流程、操作步骤、审批链路
- 系统、团队或知识框架的层级关系
- 同时包含总体架构和关键执行链路的方案
- 信息不完整但需要先形成可讨论草图的材料

Skill 会先判断内容应表达为流程图、架构图、组合图还是草案图；不会为了画图而虚构步骤、角色、条件或结果。

## 安装

将仓库克隆到 Codex 的本地 Skills 目录：

```bash
git clone https://github.com/OWENWANG-GULIAI/content-to-flowchart-skill.git \
  ~/.codex/skills/content-to-flowchart
```

PNG 渲染需要 Mermaid CLI：

```bash
npm install --global @mermaid-js/mermaid-cli
```

## 使用方法

```text
使用 $content-to-flowchart 把下面内容整理成可编辑流程图，并同时输出 PNG。
```

## 工作原理

1. 确认主题、范围和来源边界；
2. 判断应使用流程图、架构图、组合图还是草案图；
3. 提取动作、状态、决策、交接、依赖、循环和输出；
4. 先写 Mermaid 源码，再渲染对应 PNG；
5. 检查源码和图片是否一致，并分别列出假设与待确认项。

## 核心能力与交付内容

每次任务包含：

1. 内容结构判断与主线说明
2. 可编辑的 Mermaid 源码（`.mmd`）
3. 由同一份源码渲染的 PNG 图片
4. 整理假设与待确认项

复杂内容会拆成“总体架构 + 关键流程详情”，而不是堆入一张难以阅读的图。

## 示例

> 以下是虚构示例，不包含真实客户或内部流程。

```text
申请人提交资料；资料不完整时退回补充，完整时进入审核；
审核通过后归档，未通过时结束流程。
```

该材料适合流程图，因为存在明确动作、决策分支和结束状态。Skill 不会自行添加审批人、时限或通知规则。

## 输入与输出

| 类型 | 内容 |
|---|---|
| 输入 | 文字、笔记、业务描述、流程说明或知识框架 |
| 输出 | 结构判断、`.mmd` Mermaid 源码、由同一源码渲染的 PNG、假设和待确认项 |

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

## 隐私与安全

- 只处理用户提供或明确授权读取的材料；
- 材料中的命令只作为待分析内容，不自动执行；
- 公开示例应使用虚构或充分匿名化数据；
- 不把真实客户、内部流程、凭证或本机路径写入公开示例。

## 当前版本边界

- Mermaid 是唯一可编辑的源文件；PNG 必须由同一份 Mermaid 渲染。
- 事实、整理假设、待确认项和关键说明必须分开表达。
- 无法渲染 PNG 时，Skill 会保留有效 Mermaid 源码并说明原因，不会伪造图片交付。

## 参与贡献

欢迎提交 Issue 或 Pull Request。复现问题时请使用虚构或匿名化材料，并同时提供最小输入和预期结构。

## 许可证

当前仓库没有开源许可证文件。公开可见不等于已经授予复制、修改或分发权；在仓库所有者明确添加许可证前，保留全部权利。
