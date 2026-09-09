# Annotation policy

The graph should remain readable. Use annotations to preserve uncertainty, not to hide it.

| Category | Meaning | Where to place it |
|---|---|---|
| Source fact | Explicitly stated in the input | Diagram or structure reading |
| Organizing assumption | A non-substantive grouping, naming, or ordering choice used to make confirmed content readable | “整理假设” after the graph |
| Open question | A missing or ambiguous fact that could change route, responsibility, trigger, condition, input, output, or result | “待确认项” after the graph |
| Key note | A stated rule, exception, risk, or constraint that changes the actual route | In-graph note only if it changes a nearby path; otherwise after the graph |

## Rules

- Never report an assumption as a source fact.
- Never use an annotation to supply an unknown role, approval rule, time limit, exception, or business policy.
- Never resolve a contradiction by placing one alternative in a note and presenting the other as the only route.
- Do not attach prose notes to every node. Explanations that do not affect graph behaviour belong outside the graph.
- If missing information prevents a meaningful route, make a draft diagram with the confirmed portion and ask a concise question. Do not pad the graph with generic operations.

## Delivery shape

After the diagram, use this form only when applicable:

```markdown
### 整理假设
- “业务审核”按输入中的多个审核动作合并为一个阶段；没有新增审核规则。

### 待确认项
- 资料补齐后是否由同一位采购专员再次核验？这会影响回退路径的责任归属。
```
