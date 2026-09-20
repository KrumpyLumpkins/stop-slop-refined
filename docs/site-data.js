// generated from references/words.md and references/patterns.md
// do not edit by hand. run `node scripts/generate-site-data.mjs`.
window.STOP_SLOP_DATA = {
  "tier1": [
    [
      "game-changing, transformative, revolutionary",
      "What supported change is being claimed?"
    ],
    [
      "seamless, effortless",
      "Is the absence of friction actually established?"
    ],
    [
      "unlock potential, empower, drive impact",
      "Who can do what after this change?"
    ],
    [
      "robust, comprehensive, scalable",
      "What property, coverage or limit does this describe?"
    ],
    [
      "delve, embark, navigate the landscape",
      "Is a simple action being hidden behind ceremony?"
    ],
    [
      "testament to, underscores, pivotal",
      "Is this explaining evidence or merely praising it?"
    ],
    [
      "foster, facilitate, leverage",
      "Is there a more direct verb without changing the meaning?"
    ]
  ],
  "tier2": [
    [
      "important, crucial, significant",
      "Has the text shown the consequence?"
    ],
    [
      "genuinely, actually, fundamentally",
      "Does the qualifier make a real distinction?"
    ],
    [
      "interesting, exciting",
      "Is this the author's supported reaction or filler?"
    ],
    [
      "holistic, dynamic, innovative",
      "Is the specific property explained?"
    ]
  ],
  "tier3": [
    "“Leverage” in finance or mechanics.",
    "“Surface” for a physical surface, mathematical object or user interface concept.",
    "“Proof” in mathematics, cryptography, law, or an accurately described demonstration.",
    "“Realm”, “Labor” and “Materials” when these name specific game concepts.",
    "“May”, “might”, “could”, “approximately” and “subject to” when uncertainty or conditions are real.",
    "“Not”, “only”, “unless” and “except” when they define the scope of a rule."
  ],
  "openers": [
    "“In today's rapidly evolving landscape...” when no changing circumstance is relevant.",
    "“It is worth noting that...” when the sentence can simply state the information.",
    "“Let's dive in...” when the reader already asked for the content."
  ],
  "fillers": [
    "“At the end of the day” when it adds no temporal or substantive meaning.",
    "“Needless to say” before something the writer then says.",
    "“A testament to the power of” when it replaces an explanation."
  ],
  "patterns": [
    {
      "group": "sentence",
      "title": "Empty importance",
      "examples": [],
      "fix": "“The implications are significant.” Which consequence is supported? Name it, or remove the claim. Do not fabricate a consequence to fill the gap."
    },
    {
      "group": "sentence",
      "title": "Manufactured contrast",
      "examples": [],
      "fix": "“This isn't about software. It's about people.” If the rejected position is not part of the source argument, state the actual point. Preserve contrasts that distinguish real alternatives, constraints or misconceptions. Preserve negations that define a rule."
    },
    {
      "group": "sentence",
      "title": "Dramatic fragments",
      "examples": [],
      "fix": "“The catch? Everything.” Restore the actual relationship between the ideas. A short sentence or fragment may stay when it is natural to the supplied voice or format; do not build every paragraph around a reveal."
    },
    {
      "group": "sentence",
      "title": "Abstract actors",
      "examples": [],
      "fix": "“Alignment was achieved to facilitate implementation.” Name who agreed and what they agreed to, if known. Do not invent responsibility. Passive voice is useful when the affected thing is the subject of the explanation or the actor is irrelevant."
    },
    {
      "group": "sentence",
      "title": "Forced synonym changes",
      "examples": [],
      "fix": "Do not rename the same concept three ways to avoid repetition. A resource, material and token may be different things. Use the exact noun consistently and define distinctions the reader needs."
    },
    {
      "group": "structural",
      "title": "Generic opening",
      "examples": [],
      "fix": "Remove scene setting that could introduce any proposal. Begin with the actual situation, question or purpose. Preserve necessary background for readers who were not in the conversation."
    },
    {
      "group": "structural",
      "title": "Repeated paragraph machinery",
      "examples": [],
      "fix": "Check whether every paragraph begins with a claim, appends three benefits, then repeats that it matters. Give each paragraph its own work: observation, explanation, evidence, tradeoff or decision. Do not randomise structure for its own sake."
    },
    {
      "group": "structural",
      "title": "Unsupported list padding",
      "examples": [],
      "fix": "Keep exactly as many items as the subject needs. Three real conditions remain three conditions. Do not add a weaker item to complete a rhetorical triad or delete a real one to avoid it."
    },
    {
      "group": "structural",
      "title": "Compression without logic",
      "examples": [],
      "fix": "A shorter version can be worse if it removes a dependency, exception or causal link. Restore what the reader needs to understand the claim. Concision means removing waste, not imposing a length target."
    },
    {
      "group": "structural",
      "title": "Circular ending",
      "examples": [],
      "fix": "If the ending repeats the introduction, cut it or use it for the actual decision, open question or next step. A long document may need a summary when readers use it to navigate or decide; do not ban summaries."
    },
    {
      "group": "voice",
      "title": "Borrowed authority",
      "examples": [],
      "fix": "Replace “experts agree”, “the community wants”, or “research proves” with an attributable source when available. Otherwise preserve the narrower supported claim or identify the gap. Do not erase a substantive claim silently in a faithful edit."
    },
    {
      "group": "voice",
      "title": "Performed humanity",
      "examples": [],
      "fix": "Do not add fake anecdotes, deliberate errors, invented emotions, artificial hesitations or profanity. Preserve personality already supported by the brief. Human-facing writing should be useful and credible, not engineered to beat detectors."
    },
    {
      "group": "voice",
      "title": "Inflated certainty",
      "examples": [],
      "fix": "“Will transform” is not equivalent to “may improve”. Preserve the original level of evidence, even when a cleaner sentence would sound more confident. Distinguish an expected result from an observed outcome."
    },
    {
      "group": "formatting",
      "title": "Decorative punctuation",
      "examples": [],
      "fix": "Fix overloaded parenthetical dashes, colon-heavy hooks or stacked compounds when they obscure the thought. Keep useful punctuation, mathematical minus signs, ranges, identifiers and hyphenated technical terms. Do not replace a dash with a comma splice."
    },
    {
      "group": "formatting",
      "title": "Decoration that competes with the text",
      "examples": [],
      "fix": "Use formatting for hierarchy, comparison and navigation. Respect the destination and repository template. Repeated bold mini-headings, emojis and slogans are removable when they add no meaning; a meaningful heading or a user-supplied icon is not automatically a problem."
    },
    {
      "group": "chatbot",
      "title": "Conversation residue",
      "examples": [],
      "fix": "Remove “Certainly!”, praise of the request, offers to help further and narration of the drafting process from the artifact. Keep editorial disclosures separate when needed. Do not delete a quoted conversation being analysed."
    }
  ],
  "detectorPatterns": []
};
