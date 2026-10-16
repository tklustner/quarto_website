# lessons_learned.md

Written 2026-10-16 as an owner-approved backfill. Part A points to the house conventions for site prose; it holds a rule here only when no other doc does. Part B holds method and process findings. History lives in [[change_log.md]].

## A. House conventions

- **Formatting.** Citations, figures, folder layout and the pre-flight checklist are in `PUBLISHING.md`. Dashes, units and statistics notation are in `CLAUDE.md` point 0. Both files sit one level above this repo.
- **Titles.** Sentence case, with a capital after the colon: "The war-risk screen: Gleaning signal from noise in maritime conflict shipping" (owner, 2026-10-16). A title appears in four places: the page front matter, `papers/index.qmd` or `work/index.qmd`, the "From:" credits in `charts/index.qmd`, and the landing feature in `index.qmd`.
- **Citations.** Superscript numbers (nature style), placed after the punctuation. In the legacy papers (afg, honduras, mich_guer, nshan, skivu) a cite may sit on the word it supports (`killed[@key] José`). Keep it there, so each source still covers the same claim.
- **Terms.** "war-risk screen" in lower case (`116e0e6`). "Authentic", not "genuine", for signal validity (`voice_choices.md`, 2026-10-08).
- **Voice.**
  - `work/` pages use the methods-and-results register, first-person plural (register table in `CLAUDE.md`, "options for").
  - About is first person and varies its wording from the landing headline on purpose.
  - About says "armed groups", not the junta, and uses "Hablo español" (`voice_choices.md`, 2026-10-07).
- **Pulled quotes.** The landing page quote matches its source line word for word (`75020e3`).

## B. Lessons

1. **Site copies drift from their canonical project files.** On 2026-10-16:
   - The war_risk_check opening sentence existed only in the site copy, not in `osint_toolkit/sar_damage_assessment/docs/war_risk_check/`.
   - The cam_car_border site copy was ahead of `cam_car_border/docs/` (last changed 2026-09-20).

   `PUBLISHING.md` says the site copy is never edited, but in practice it is. Open owner decision: sync the project copies, or treat the site copies as canonical. A search for canonical copies that skips `docs/` folders misses both of them.
2. **A render could leave the site without CNAME.** It had to be restored three times (`514e7ba`, `3f2ff90`, `edeb353`). It is now declared under `resources:` in `_quarto.yml`. Keep it there.
3. **Relative paths broke when pages moved,** four times (`2500aab`, `4291a39`, `51c7972`, `e75e2da`). That history is why figure paths are root-absolute (`/charts/assets/x.png`).
4. **Every render downloads the nature style from zotero.org.** A slow response there (about 22 s on 2026-10-16) fails the render with `ConnectionTimeout`. Retry before you debug the source.
5. **The nature style drops page locators and editor-only books.** Keep page numbers in the text, as in afg "(p. 168)". Put a book's editors in the `author` field.
6. **Bare-URL footnotes rot.** Of the 153 legacy links, many were signed links that expire (academia.edu, ScienceDirect, UQ eSpace), blocked automated access, or were private (Notion, Google Drive). Cite a DOI or a stable landing page at the time of writing.
7. **Metadata written from memory is often wrong.** A Crossref check caught 10 errors in about 25 hand-filled entries. Check every DOI entry against Crossref before you commit.
8. **A title change must reach all four places it appears** (Part A). The skivu credits on the charts page used different wording and were missed (`d48efb9`). Search for each title's distinctive words, not for the exact string.
9. **Check any bulk text transform by comparing the prose against a backup.** On 2026-10-16 a lazy regex left footnote text behind as stray lines. Only a comparison of the prose before and after, ignoring citations, caught it.
10. **Rendering with an uncommitted draft open puts the draft into `docs/` and `docs/search.json`.** Commit first, or render the committed version.
