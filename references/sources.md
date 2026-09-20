# Sources and design decisions

Reviewed 20 September 2026. These sources inform editing guidance and voice calibration. They do not prove authorship detection, guaranteed quality improvement or perfect voice imitation.

## Personal voice evidence

| Source | Weight and use |
|---|---|
| Ultimate Eternum S2 Scope Summary | Primary. Krumpy explicitly confirmed it was almost entirely written by him. Problem → solution → requirements → expected result; concrete mechanics, worked examples, costs, exceptions and open items. |
| Krumpy’s Eternum Ramblings - S1 and Beyond | Primary first-person sample supplied by Krumpy. Candid perspective, player experience, explicit tradeoffs, proposal logic, qualifications and natural discussion. |
| S2 Wonders & Banks; Eternum S2 Ideas & Scope; Combat v1.1 | Secondary. Krumpy said these may have AI influence. Useful context and document forms; not reliable evidence for every sentence habit. |
| Original prompts available in the current task and selected local task history | Direct corrections are strong evidence of preferences: coherent flow, named actors and ownership, clear resource flows, honest placeholders, and realistic stakes. Prompt phrasing is supplementary, not a model for publication prose. Assistant responses and generated task summaries are excluded as voice evidence. |
| Public Realms documentation | Supplementary reader-facing domain examples. Page-level personal authorship was not established. Extract explanation choices, not promotional wording or current facts for new tasks. |
| Local KrumpyLumpkins repository documentation | Inspected selectively. Ownership and commit attribution do not establish prose authorship. Team-attributed articles and generated project records are not primary voice evidence. |

The five supplied Word documents contain approximately 12,665 words of extracted paragraph/table text. Extraction was for style study: embedded equations and images are not guaranteed to be represented. No game rule was implemented or revised from this material.

The public package contains distilled observations and synthetic examples. Raw attachments, private prompt extracts, local paths and unpublished proposals are not included. The installed skill works without those originals.

Public pages inspected:

- [Realms introduction](https://docs.realms.world/overview/introduction)
- [Blitz key concepts](https://docs.realms.world/blitz/key-concepts)
- [Eternum world physics](https://docs.realms.world/eternum/world-physics)
- [Blitz world map](https://docs.realms.world/blitz/worldmap-movement/worldmap)

The mechanism pages support a useful distinction between a literal rule and its reader-facing explanation. Fantasy flavour and marketing copy are context-specific, not default personal style.

## Editing foundations

| Primary source | Adopted | Not adopted |
|---|---|---|
| [odinfree/stop-slop-refined](https://github.com/odinfree/stop-slop-refined/tree/1d384cd0b6577ce5ad15297c8e867334e0ba1af1) | Source fidelity; structure before line editing; rewrite/review distinction; second reader pass; optional revision helper. | Broad auto-activation, inherited house-word bans, mandatory revision artifacts, rigid punctuation or list rules. |
| [hardikpandya/stop-slop](https://github.com/hardikpandya/stop-slop/blob/main/SKILL.md) | Compact checks for filler and rhetorical machinery. | Passive/adverb bans, obligatory human subjects, numerical style thresholds. |
| [blader/humanizer](https://github.com/blader/humanizer/blob/main/SKILL.md) | Sample-first calibration, structural review, preservation of claims and non-prose content. | Invented personal reactions, automatic multi-draft output and blanket dash prohibition. |
| [Anthropic doc co-authoring](https://github.com/anthropics/skills/blob/main/skills/doc-coauthoring/SKILL.md) | Audience, purpose, missing context and reader-comprehension questions. | Mandatory staged interviews, quotas of questions or options, repeated approval steps. |
| [obra/the-elements-of-style](https://github.com/obra/the-elements-of-style/blob/main/skills/writing-clearly-and-concisely/SKILL.md) | Concrete language, paragraph focus and keeping connected ideas together. | Broad activation or treating brevity and historical conventions as universal rules. |

New instructions and examples express these methods independently. See [ATTRIBUTION.md](../ATTRIBUTION.md) for inherited notices and licence boundaries. Source branches can change; the upstream fork base is pinned above.

## Codex invocation

[Official skill documentation](https://learn.chatgpt.com/docs/build-skills) describes `policy.allow_implicit_invocation: false` in `agents/openai.yaml`. This package uses that setting and an explicit scope boundary in SKILL.md. Local installation targets the active Codex home's skills directory. It does not configure other accounts, machines or cloud services.

## Confidence and future calibration

The evidence supports practical reasoning, causal explanation, concrete examples, honest uncertainty and separate formal/candid registers. It does not establish a universal sentence length, punctuation quota or amount of humour. User feedback on actual drafts remains the acceptance criterion. Update narrow preferences from explicit corrections, not from presumed approval or the model's own output.
