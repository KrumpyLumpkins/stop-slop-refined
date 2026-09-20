# Krumpy Writing

An explicitly invoked Codex writing skill for documents, proposals, explanations and correspondence. It combines anti-slop editing with Krumpy's practical, mechanism-led writing style: explain the problem, work through the proposal, retain the tradeoffs, and be honest about what remains undecided.

This is a fork of [odinfree/stop-slop-refined](https://github.com/odinfree/stop-slop-refined). Its anti-slop checks are the starting point. The personal voice guide is grounded mainly in two user-supplied writing samples, with a professional default and a more candid register when requested.

## Use

Invoke it by name for the artifact you want to write:

```text
Use $krumpy-writing to rewrite this proposal in my voice. Preserve its facts and open questions.

Use $krumpy-writing to draft documentation from these notes for a first-time reader.

Use $krumpy-writing to review this document. Flag issues without rewriting it.

Use $krumpy-writing for a candid discussion note based on these points.

Use $krumpy-writing for clarity only; keep the original author's voice.
```

It is disabled for implicit invocation through `agents/openai.yaml`. It does not govern general chat, coding, commands or operational updates. Naming it applies it to the requested writing and its revisions, not every later task. It needs no external services, private source files or API keys to edit text.

## Install locally

With the Codex skill-installer, install repository `KrumpyLumpkins/stop-slop-refined`, path `.`, under the name `krumpy-writing`. For a reproducible installation, specify a reviewed commit using `--ref`:

```bash
python3 "$CODEX_HOME/skills/.system/skill-installer/scripts/install-skill-from-github.py" \
  --repo KrumpyLumpkins/stop-slop-refined --path . --name krumpy-writing
```

Use your actual Codex home if the environment variable is unset. The installer refuses to overwrite an existing skill. Review and back up an existing local version before updating it. The skill should be available on the next turn; reopen the app if discovery has not refreshed. Installation applies to that local Codex home across projects and projectless tasks; other hosts require their own installation.

## What changed from upstream

- Explicit-only invocation and a human-facing artifact boundary.
- A personal voice profile grounded in user-authored samples, with provenance and confidence limits.
- Contextual checks in place of word, punctuation, passive-voice and three-item-list bans.
- Draft, rewrite and review modes; reader-comprehension and semantic-fidelity checks.
- Protection for formulas, identifiers, evidence, uncertainty and unresolved decisions.
- Original examples across domains and behavioural evaluation cases.
- Optional revision records rather than compulsory HTML artifacts.

Read [SKILL.md](SKILL.md), the [voice profile](references/voice.md), [examples](references/examples.md), and [source decisions](references/sources.md). Private source documents and chat extracts are not distributed.

## Repository maintenance

The inherited browser workbench in `docs/` is a catalogue viewer, not the Codex skill or a voice-matching evaluator. The optional revision builder is retained. After changing catalogue files, regenerate its data with `node scripts/generate-site-data.mjs`. No hosted deployment is needed to use the skill.

For changes to the skill, run Codex's `quick_validate.py` against the repository and review [evals/cases.md](evals/cases.md). Mechanical validation confirms packaging, not writing quality or a user's preference. See [ATTRIBUTION.md](ATTRIBUTION.md) and [LICENSE](LICENSE) for source notices.
