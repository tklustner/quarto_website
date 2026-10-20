# tightening.md — open gaps

**Waiting on you:** [Figure 3 basemap: CARTO key](#figure-3-basemap-carto-key-owner-action-2026-10-20)

Internal doc, not a site page (excluded in `_quarto.yml`). Open gaps only; a closed entry moves to [[change_log.md]].

## Figure 3 basemap: CARTO key (owner action, 2026-10-20)

> **Decision needed:** which key goes into the two tile URLs of `charts/assets/convenio_map.html` (lines 119 and 365, append `?key=…`): a new site-only key restricted to `timklustner.com` (recommended), or the `av_conflict_pipeline` key. The repo is public, so the key is published either way; the auto-mode classifier blocked the assistant from writing it.

Written 2026-10-20. Since 2026-09-23 CARTO serves an "API KEY REQUIRED" watermark tile to keyless requests, so Figure 3 of `papers/honduras.qmd` shows no basemap (verified live; a keyed request returns the real Positron tile). After the key is in: render, check the tiles in a real browser, commit and push. Remainder: `archived_projects/hond_palm_oil/convenio_map.py` line 40 still builds with keyless `tiles="CartoDB positron"`, so a rebuild would reintroduce the watermark.
