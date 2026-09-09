# Diagram classification

Choose the diagram type from the source's observable structure, not from the user's use of the word “流程图”. State the choice in the delivery's structure reading.

| Type | Source signals | Primary output | Do not do this |
|---|---|---|---|
| `flow` | Trigger, chronological actions, conditions, handoffs, outcomes, retries | A directional Mermaid flowchart | Turn a list of responsibilities into a fake sequence |
| `architecture` | Components, teams, systems, responsibilities, containment, interfaces | A hierarchy or component relationship diagram | Invent an execution order from layout position |
| `hybrid` | A structural landscape plus one or more operational chains | One architecture overview plus focused flow diagrams | Mix every component and every step into one graph |
| `draft` | A plausible topic but missing critical order, owner, trigger, decision, or outcome | Known relationships plus explicit open questions | Fill missing parts with generic “approval” or “review” steps |

## Selection procedure

1. Mark every explicit source claim as one of: object, actor/system, action/state, trigger, condition, input/output, or relationship.
2. If order and branch consequences are the central claims, choose `flow`.
3. If containment, composition, or responsibility is central and chronology is absent, choose `architecture`.
4. If both are central, choose `hybrid`: show the stable landscape once, then write a separate flow for each user-relevant chain.
5. If a required relationship is unclear, retain confirmed elements and choose `draft` for that affected diagram. Ask only questions that would change its path, boundary, or result.

## Complexity and splitting

A main diagram normally contains about 8–18 core nodes. Split when a diagram has multiple unrelated goals, more than one dominant reader question, repeated cross-boundary handoffs, or branches that make the main route difficult to trace. A detail diagram must name the overview phase it expands; it must not repeat the entire overview.

## Source conflicts

When two statements conflict, display only the shared, certain path if one exists. Place the alternatives in open questions with their relevant source wording summarized. Never silently choose the more familiar business practice.
