# Stop Slop - Revision Artifact

Optionally create an inspectable HTML diff for a writing revision.

This workflow adapts the revision-record idea from Shreya Shankar's Plain Writing skill. The implementation uses [revision_template.html](../assets/revision_template.html).

## Trigger

Use only when the user requests a diff or an inspectable record would help them review a substantial change. It is optional. Ordinary chat edits need no artifact. Preserve the requested output location; otherwise use a durable task output directory rather than a temporary path when the user needs the file.

## Sequence

1. Finish structural changes before building the artifact. The template tracks sentences inside paragraphs and cannot explain section moves well.
2. Save the first cleaned draft. This is the version before the second reader pass.
3. Run the second pass clause by clause. Remove text the reader does not need, restore any explanation the cleanup cut too far, and check every technical term.
4. Record every sentence as `keep`, `edit`, or `del`.
5. Group the sentence records by paragraph.
6. Save the records as JSON or pipe them to the local builder.
7. Run `scripts/build_revision_artifact.mjs` and write the result to the chosen task output path.
8. Open the file once or inspect it in a browser, then give the user the absolute path.

## Builder

Use a JSON file:

```bash
node scripts/build_revision_artifact.mjs \
  --data "/path/to/revision-data.json" \
  --output "/tmp/stop-slop-revision-short-name.html"
```

Or pipe JSON through standard input:

```bash
node scripts/build_revision_artifact.mjs \
  --data - \
  --output "/tmp/stop-slop-revision-short-name.html"
```

The builder validates every paragraph and sentence record, safely encodes embedded text, replaces the template placeholder, and prints the absolute output path.

## Data shape

```json
[
  {
    "para": 1,
    "items": [
      {
        "type": "keep",
        "text": "This sentence stayed the same."
      },
      {
        "type": "edit",
        "old": "This sentence was vague.",
        "new": "The team delayed the launch because the audit found two unresolved access-control bugs.",
        "why": "names the actor and reason"
      },
      {
        "type": "del",
        "old": "It is worth noting that the result is significant.",
        "why": "empty emphasis"
      }
    ]
  }
]
```

## Record rules

- `keep` needs `text`.
- `edit` needs `old`, `new`, and `why`.
- `del` needs `old` and `why`.
- `why` should name the concrete edit in a few words.
- Keep paragraph numbers in source order.
- Record whole sentences. Explain paragraph or section moves separately in the change summary.

## Safe embedding

The builder safely encodes these characters before inserting JSON into the template:

```text
<  -> \u003c
>  -> \u003e
&  -> \u0026
```

This prevents source text from closing the script block or injecting markup. Use the builder instead of assembling JSON by hand.

## What the file shows

- **First draft** shows the version before the second reader pass.
- **Final draft** shows the delivered revision.
- **Diff** marks removed text in red and rewritten text in green.
- Hovering over a change shows the short reason.

## Boundary

The artifact explains sentence edits. Use the normal Stop Slop diagnosis and change summary for a new outline, moved section, changed argument, or rebuilt AI-first center.
