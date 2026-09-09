---
name: content-to-flowchart
description: Use when a user provides text, notes, a process, a framework, or a business description and wants its structure expressed as an editable Mermaid flowchart, architecture diagram, or matching PNG image.
---

# Content to Flowchart

## Overview

Turn supplied content into a diagram that is faithful to its actual logic, not a decorative rewrite. Mermaid is the editable source of truth; every delivered PNG must be rendered from that same source.

## Workflow

1. Establish the topic, requested scope, and source boundary. Extract only statements supported by the input; do not infer a role, condition, policy, or outcome as fact.
2. Read [diagram-classification.md](references/diagram-classification.md) and choose `flow`, `architecture`, `hybrid`, or `draft` before writing Mermaid. If the input contains independent topics, split them and explain the split.
3. Read [diagram-grammar.md](references/diagram-grammar.md). Build a working `DiagramBrief`, then select only actions, states, decisions, handoffs, dependencies, loops, and outputs that change how the reader understands the system.
4. Read [annotation-policy.md](references/annotation-policy.md). Keep source facts, organizing assumptions, open questions, and key notes distinct. Do not use a note to conceal an invented rule or resolve a contradiction.
5. Write the Mermaid source first. Use a short, readable main path; when the source is large or has more than one independent objective, produce a total overview plus focused detail diagrams instead of one dense graph.
6. Read [rendering-and-verification.md](references/rendering-and-verification.md). Render each `.mmd` source to its matching PNG, inspect the rendered image, and correct source or rendering issues before delivery.
7. Deliver, in this order: a one-paragraph structure reading, the editable Mermaid source/file, the matching PNG/file, and concise notes split into assumptions and open questions. Only state that a PNG is delivered after it was rendered and inspected.

## Delivery rules

- Name diagram nodes with an observable action or state, usually “动词 + 对象”; use labels such as “资料是否齐全？” only for genuine decisions.
- Put normal explanation outside the graph. Put a note node inside only when it changes a route, owner, condition, input, output, risk, or exception.
- Do not force non-sequential material into a flowchart. Use an architecture or hierarchy diagram when ownership and composition matter more than order.
- Do not claim a diagram is complete when the source leaves critical ownership, triggers, conditions, or outcomes unresolved. Use a draft and list the missing information.
- Do not deliver a manually altered PNG that no longer matches its Mermaid source.
- Do not fabricate a PNG when a renderer is unavailable. Deliver the valid Mermaid source, report the exact rendering limitation, and state what is needed to produce the image.
