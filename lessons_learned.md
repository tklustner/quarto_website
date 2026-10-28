# lessons_learned.md

Written 2026-10-16 as an owner-approved backfill. Part A points to the house conventions for site prose; it holds a rule here only when no other doc does. Part B holds method and process findings. History lives in [[change_log.md]].

## Axioms

One sentence per session, synthesized at "close out" (root `CLAUDE.md`, step 8). Newest at the bottom.

- 2026-10-28 (twenty-first session). A claim can be checked only once its source is public, so publish the evidence before the summary that points to it.
- 2026-10-28 (twenty-second session). The section a piece sits in tells the reader what it claims to be, so moving it is a change of claim, not of layout, and its blurb and register have to follow.
- 2026-10-28 (twenty-third session). A default that works for most cases hides the rule it stands in for, so write the rule down before the one case that breaks it.
- 2026-10-28 (twenty-fourth session). When two words name one thing in adjacent sentences, check whether the second mention repeats the first before choosing between them, since cutting the repeat often fixes the clash.
- 2026-10-28 (twenty-fifth session). Each edit that makes a sentence easier to read can also change what it claims, so check the claim against its source again after every edit, not only after the first draft.

## A. House conventions

- **Formatting.** Citations, figures, folder layout and the pre-flight checklist are in `PUBLISHING.md`. Dashes, units and statistics notation are in `CLAUDE.md` point 0. Both files sit one level above this repo.
- **Titles.** Sentence case, with a capital after the colon: "The war-risk screen: Gleaning signal from noise in maritime conflict shipping" (owner, 2026-10-16). A title can appear in five places: the page front matter, `papers/index.qmd` or `work/index.qmd`, the "From:" credits in `charts/index.qmd`, the landing feature in `index.qmd`, and a Services proof list (`services/*.qmd`; tin_rival_weighing, 2026-10-28).
- **Citations.** Superscript numbers (nature style), placed after the punctuation. In the legacy papers (afg, honduras, mich_guer, nshan, skivu) a cite may sit on the word it supports (`killed[@key] José`). Keep it there, so each source still covers the same claim.
- **Terms.** "war-risk screen" in lower case (`116e0e6`). "Authentic", not "genuine", for signal validity (`voice_choices.md`, 2026-10-08). Foreign words and phrases found in a standard English dictionary (de jure, de facto) and Spanish terms are set in roman, not italic (owner, 2026-10-20).
- **Voice.**
  - `work/` pages use the methods-and-results register, first-person plural (register table in `CLAUDE.md`, "options for"). Exception: tin_rival_weighing keeps the analytic narrative of DC-Q35 after its move to `work/` (owner, 2026-10-28); the register follows the paper.
  - About is first person and varies its wording from the landing headline on purpose.
  - About says "armed groups", not the junta, and uses "Hablo español" (`voice_choices.md`, 2026-10-07).
- **Section names.** The navbar and page titles say Cases (`papers/`) and Methods (`work/`); the folders keep their names so URLs do not change (owner, 2026-10-28).
- **Pulled quotes.** The landing page quote matches its source line word for word (`75020e3`).
- **List order.** In every list of papers or checks on the site (section indexes, Services proof lists, the Services index), the most recent goes at the top (owner, 2026-10-28). The Services index leads with the mirror-trade check.

## B. Lessons

1. **Site copies drift from their canonical project files.** On 2026-10-16:
   - The war_risk_check opening sentence existed only in the site copy, not in `osint_toolkit/sar_damage_assessment/docs/war_risk_check/`.
   - The cam_car_border site copy was ahead of `cam_car_border/docs/` (last changed 2026-09-20).

   `PUBLISHING.md` said the site copy is never edited, but in practice it is. Decided 2026-10-20 (owner): the site copy is the source of truth after first publication (`PUBLISHING.md`, "After publication"). A search for canonical copies that skips `docs/` folders misses both project copies.
2. **A render could leave the site without CNAME.** It had to be restored three times (`514e7ba`, `3f2ff90`, `edeb353`). It is now declared under `resources:` in `_quarto.yml`. Keep it there.
3. **Relative paths broke when pages moved,** four times (`2500aab`, `4291a39`, `51c7972`, `e75e2da`). That history is why figure paths are root-absolute (`/charts/assets/x.png`).
4. **Every render downloads the nature style from zotero.org.** A slow response there (about 22 s on 2026-10-16) fails the render with `ConnectionTimeout`. Retry before you debug the source.
5. **The nature style drops page locators and editor-only books.** Keep page numbers in the text, as in afg "(p. 168)". Put a book's editors in the `author` field.
6. **Bare-URL footnotes rot.** Of the 153 legacy links, many were signed links that expire (academia.edu, ScienceDirect, UQ eSpace), blocked automated access, or were private (Notion, Google Drive). Cite a DOI or a stable landing page at the time of writing.
7. **Metadata written from memory is often wrong.** A Crossref check caught 10 errors in about 25 hand-filled entries. Check every DOI entry against Crossref before you commit.
8. **A title change must reach every place it appears** (Part A). The skivu credits on the charts page used different wording and were missed (`d48efb9`). Search for each title's distinctive words, not for the exact string.
9. **Check any bulk text transform by comparing the prose against a backup.** On 2026-10-16 a lazy regex left footnote text behind as stray lines. Only a comparison of the prose before and after, ignoring citations, caught it.
10. **Rendering with an uncommitted draft open puts the draft into `docs/` and `docs/search.json`.** Commit first, or render the committed version.
11. **A regenerated figure can contradict its own caption.** The war_risk_check naive-scan raster was regenerated on the other Sentinel-1 track (2026-09-19). The caption and the text burned into the PNG still called Dot 1 and Dot 2 "redness peaks", but on the new raster they read cyan. A caption that was right for the first image went public with the second. Found 2026-10-20 by measuring pixel colour at each mark. When a figure is rebuilt, re-check each caption claim against the new image, and say in the caption which pass or date the claim is about.
12. **The editor buffer is not the file on disk.** On 2026-10-20 the owner reported two edits as done (the 88% sentence, then Limitations L81) that were still unsaved. Git, grep and the render all read the disk, so a commit then would have shipped the old text, and an edit by the assistant would have clashed with the open buffer. Before editing or committing a file the owner says they changed, check it on disk (`git diff`, or the file's modified time). If the change is not there, ask for a save before touching the file.
13. **A live third-party dependency can break a published page with no change in the repo.** On 2026-10-20 the owner found Figure 3 of the Aguán memo (an interactive folium map, unchanged since June) showing "API KEY REQUIRED" tiles: CARTO began requiring a key on 2026-09-23. Nothing in git, the render or the pre-flight checklist could catch it. A figure that loads tiles, fonts or data at view time needs a periodic look in a browser; a static PNG does not.
14. **A key in a URL that the browser loads is public.** On 2026-10-22 the CARTO key went into the Figure 3 tile URLs and so into a public commit and the live page; it had to be revoked and rotated. A browser key cannot be private: keep it on a server that adds it (`tile_proxy/`, a Cloudflare Worker), and keep `.env` in `.gitignore` from the day it is created. Also, a key in `.env` is not a key on the page: the av_conflict key was thought to be in use on the page, but no tile URL ever sent it.
15. **A trailing-whitespace trim deletes Markdown hard line breaks.** On 2026-10-28 the Methods page lost the two trailing spaces after each title, so each title and its date rendered on one line on the live page; the "reformat" rule "no trailing whitespace" and an editor's trim-on-save both remove them. Write a line break as `<br>`, as the index pages do on their date lines, never as two trailing spaces.
16. **Bold in a tight list item rendered as plain text.** `styles.css` sets body text to weight 300, so `<strong>` (one step heavier) drew at 400, and the rule that restores 600 named only `p strong` and `figcaption strong`. A list with no blank lines between items gives `<li><strong>` with no `<p>`, so its bold vanished on six pages until 2026-10-28 (`li strong` added). Editing the Markdown cannot fix a weight the CSS sets: check the rendered HTML for `<strong>` first, then the stylesheet.
17. **A shared figure can render at two widths.** On 2026-10-28 the R1 tank composite (508 px wide) filled the column in war_risk_check, which sets `{width="100%"}`, but drew at its native 508 px on the charts page, which set no width. Every other chart asset is 1200 px or wider, so it fills the 900 px column with no attribute and hides the gap. When a figure goes on the charts page, copy the writeup's width attribute with it. Upscaling a small PNG makes it soft; the real fix is to export it at 1800 px or wider. Now a pre-flight check in `PUBLISHING.md` (owner, 2026-10-28).
18. **A service page can promise a result before its data exists.** On 2026-10-28 the War-risk screen page promised a screen on the first post-strike image pair and a statistical test in the same paragraph, but the test in war_risk_check needs 3 post-strike scenes (inf_n = 3, about 1 month). Edits for readability then made three claims stronger than the paper ("premiums change in response to damage", "AIS data can estimate the extent of damage", "I verify the precise strike location"). Check each claim on a Services page against its proof paper's line, and say when each result arrives.
