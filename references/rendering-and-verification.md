# Rendering and verification

## Source-first rule

Save and review the Mermaid source before producing an image. Use paired names such as `采购申请-总览.mmd` and `采购申请-总览.png`; for complex input, add phase names such as `采购申请-阶段-资料核验.mmd`.

Render the PNG from that exact file. A changed `.mmd` requires a new PNG. Never polish the PNG independently and present it as matching editable source.

## Renderer selection

Prefer a locally available Mermaid CLI:

```bash
mmdc -i "<topic>.mmd" -o "<topic>.png" -b white
```

If `mmdc` is unavailable, use the standard CLI package for the current render:

```bash
npx --yes @mermaid-js/mermaid-cli -i "<topic>.mmd" -o "<topic>.png" -b white
```

Write files only to the user's active workspace or an explicitly requested output path. Default to a white background for stable previewing. If the renderer cannot be installed, launched, or its browser dependency fails, preserve the valid `.mmd`, state the exact command/error boundary, and do not claim image delivery.

## Visual inspection

Inspect the rendered PNG, not only the Mermaid text. Confirm:

- all labels, especially Chinese text and decision labels, are visible and not clipped;
- decision diamonds and branch labels are recognizable;
- main route is easy to trace and return/exception edges do not conceal it;
- nodes do not overlap and line crossings do not make a path ambiguous;
- overview and detail files have matching topic/phase labels.

If inspection finds a problem, first simplify node labels, split a dense diagram, or adjust Mermaid grouping/direction. Rerender and inspect again. Report only the source and image pair that passed this check.
