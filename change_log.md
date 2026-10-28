# change_log.md

Written 2026-10-16 as a backfill from `git log` (owner-approved). One line per session (root `CLAUDE.md` point 6): date, commits, what changed. Append-only, newest at the bottom. Lessons live in [[lessons_learned.md]]; publishing rules in `PUBLISHING.md` (one level above this repo).

- 2026-06-01 (`d36aa10`, `00f82b1`): Site launched on its custom domain (CNAME).
- 2026-06-02 (`bf7f0e2`–`4eae797`): Landing page spacing and wording revised, afg typo fixed, GIF resized for mobile, CNAME restored after it went missing.
- 2026-06-04 (`89fa712`): Data visualization page renamed.
- 2026-06-10 (`b2de712`–`8986981`): About updated; honduras (Aguán) added to Papers; convenio map paths fixed and the map moved into charts.
- 2026-06-11 (`b4eb0ca`): Contracorriente citation updated in honduras.
- 2026-06-23 (`6a37870`–`e75e2da`): Services pages gained one-pagers; spacing and a relative path fixed on the MSM services page.
- 2026-07-01 (`822f2be`, `0cb4e88`): Services index updated.
- 2026-07-12–13 (`02cfb56`, `70b7d89`): Honduras executive summary and wording revised.
- 2026-07-23 (`9c73567`): Convenio Agrario citation added to honduras.
- 2026-08-09 (`b1b63a3`–`ca1c961`): Email link spacing fixed, `docs/CNAME` restored, mich_guer sentence fixed, homepage quote aligned.
- 2026-08-31 (`fc992da`–`9720175`): `work/` section created with sar_blindness moved in; `charts/assets/` made the single shared figure store; services links made root-absolute.
- 2026-09-18 (`170c0b9`): "fix spacing in EC" (the commit does not say what EC refers to).
- 2026-09-20 (`257bcac`–`6645d04`): war_risk_check and cam_car_border published; homepage swap, formatting pass, new Data Viz page, services rework.
- 2026-10-07 (`bbeea80`–`bf54287`): About rewritten in first person, its first sentence aligned to the landing headline (decision trail in `voice_choices.md`).
- 2026-10-08 (`9e402d2`–`6bf7ff9`): war_risk_check prose pass, new title, numeric citations placed after punctuation.
- 2026-10-09 (`116e0e6`–`88727c7`): "war-risk screen" lower-cased across the site; landing quote matched to war_risk_check line 91; R1 described as storage tanks.
- 2026-10-16 (`9735b2c`–`d48efb9`): Titles changed to sentence case with a capital after the colon; all live writeups moved to `@key` citations with the nature style (legacy papers stay flat with a `<slug>.bib`); honduras NDVI note folded into the text; six nshan sources replaced; `change_log.md` and `lessons_learned.md` backfilled.
- 2026-10-20 (`af76f2e`–`f5a64c8`): Closed both pre-BD-page tightening entries: war_risk_check vessel backscatter sign and the Dot cross-track flip fixed against the figure and a 2-image ascending check, and the 88% quote qualified "on the Ras Isa case" on all three pages.
- 2026-10-20 (owner decision): The site copy is the source of truth after first publication; `PUBLISHING.md` gained an "After publication" section, and lessons_learned lesson 1's open decision is closed.
- 2026-10-20 (`89e7795`–`d838132`): Italics removed from Spanish terms in honduras and from de jure / de facto (honduras, skivu), roman rule for dictionary-listed foreign terms recorded in lessons_learned Part A (owner decision), "sobetechos" corrected to "sobretechos"; Figure 3 CARTO-key gap opened in tightening.
- 2026-10-21 (`e7fee0c`): About dates the Egypt teacher-training program 2017–2020, not 2017–present (owner: it closed during COVID in 2020); no tightening entry closed.
- 2026-10-22 (`f4a15d3`–`355941d`): Closed the Figure 3 CARTO-key gap: the key was first put into the page, then kept private (owner) after the leaked key was revoked and rotated; Figure 3 now loads tiles from a Cloudflare Worker proxy at tiles.timklustner.com (`tile_proxy/`) that holds the key as a secret, `.env` is git-ignored, `convenio_map.py` builds with the proxy URL, and `PUBLISHING.md` gained the proxy rule and a pre-flight check for direct CARTO URLs or keys in pages.
- 2026-10-28 (`edd7217`): Published papers/tin_rival_weighing (B9 working paper from av_conflict_pipeline) with one line in papers/index.qmd; no tightening entry closed.
- 2026-10-28 (`fbc3944`–`e568dd8`): Navbar and page titles relabeled Cases (`papers/`) and Methods (`work/`, subsections Papers then Systems) with folders and URLs unchanged; tin_rival_weighing moved to `work/` with a redirect from its old URL (DC-Q35 amended, owner; PUBLISHING.md "Where it goes" gained the buyer-check rule); its blurb rewritten to lead with the buyer's check; title-line hard breaks on the Methods page restored as `<br>`; no tightening entry closed.
- 2026-10-28 (`c71a064`–`6e1d239`, twenty-second session, continued): bold restored in tight list items on six pages (`li strong` in `styles.css`); tin Section 2 header punctuation made consistent; the tin blurb ends on its origin limit again ("tracing its origin needs site-level records").
- 2026-10-28 (`93425f5`–`42ea9ce`, twenty-second session, continued): Services gained a Mirror-trade check page (proof: tin_rival_weighing; no price), listed first; Methods subsection renamed Checks (owner); every list of papers ordered newest first (owner rule, lessons_learned Part A), which moved sar_blindness to the top of both opacity proof lists.
- 2026-10-28 (`6ce5684`–`1d3f07e`, twenty-third session): the R1 tank composite on the charts page set to `width="100%"` as in war_risk_check, so it fills the column; `PUBLISHING.md` pre-flight gained the shared-figure width and 1800 px export check (owner); lesson 17 added and confirmed; no tightening entry closed.
- 2026-10-28 (`1cb5cf5`–`a2af524`, twenty-fourth session): tin_rival_weighing title now "Recounting Rwanda's 2025 tin excess" (owner), carried to work/index.qmd and the Mirror-trade check proof list; Summary second-source sentence reworded around "the recount", then "With a second source," cut (owner), which removed the source/record term clash; no tightening entry closed.
