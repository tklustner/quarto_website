# tightening.md — open gaps

Internal doc, not a site page (excluded in `_quarto.yml`). Open gaps only; a closed entry moves to [[change_log.md]].

## Before the site goes on a partner's BD page (due 2026-10-23)

Logged here 2026-10-20 from a `proposal_forge` session, so this repo does not have to rediscover it independently. A partner firm may list the site on its business-development page, so these pages get a wider audience. Send is due 2026-10-23 (detail in `proposal_forge`, which is private; this repo is public, so no names here).

- **war_risk_check: backscatter direction for vessels.** A ship that leaves lowers backscatter at its mooring; a ship that arrives raises it, in the same direction as the R1 damage signal. Places that need a check:
  - Line 15: "A departed ship's absence reads as 'damage.'"
  - The `@fig-naive-scan` caption, line 41: it calls the Mooring point a "redness peak" (after brighter), but the vessel was present before and gone after. It also counts Dot 2 among "the heuristic's own redness peaks", but line 53 and `@tbl-cases` give Dot 2 a negative VV shift (t = −3.07).
  - Method step 3, line 72, and the `@fig-mooring-quay` caption: "moored-then-departed vessel" as the false-positive mechanism.
  Proposal: re-read the naive-scan figure to see what the redness at the Mooring point actually is (an arriving vessel in the pair, the streaks beside it, or a cyan-not-red signal), then reword so the sign matches the physics. Fix the heuristic's sign convention in one sentence if the figure mixes increases and decreases.
- **index.qmd line 17: the 88% quote has no qualifier.** In the paper (line 91) "the same run" is the Ras Isa case; on the home page it reads as general. `proposal_forge/pricing.md` requires "on the Ras Isa case" (one case, list prices). Proposal: "*…by 88% on the Ras Isa case.*" The 2026-10-09 change log matched the quote to line 91, so keep the two in step.
