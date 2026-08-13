# samfranco.ca → AI OS flagship rebuild (overnight build notes)

Branch: `claude/ai-os-flagship` · Built: 2026-08-13, overnight, per Sam's brief.
This file is for Sam. It is excluded from the deployed site via `.vercelignore`.

## What shipped

- **`index.html`** — ground-up rebuild of the one-pager as the AI OS flagship:
  hero + animated Mission Control widget, real-number stats strip, problem section,
  click-to-play VSL, Life OS / Business OS two-column feature grid, chief-of-staff
  quote, own-vs-rent comparison table, founder section with your photo, 3-step
  process, three scope-tier cards + on-demand inline Cal.com embed, 9-question FAQ
  accordion, final CTA band, footer. Lead modal, Meta Pixel (with `Lead`,
  `CalendlyClick`, `VSLPlay`, `WalkthroughBubbleOpen`, `FAQOpen` events), the
  floating Loom bubble, and the in-app-browser-safe reveal JS are all carried over
  from the old page and upgraded.
- **`acquisitions.html`** — the entire old samfranco.ca business-buyer page,
  ported verbatim to a static page. Nothing was deleted. Served at `/acquisitions`
  (via `cleanUrls` in the new `vercel.json`), quietly linked from the footer.
- **`og.jpg` / `og-acquisitions.jpg`** — real 1200×630 social share images
  rendered from the hero (templates kept in repo: `og-template.html`,
  `og-acquisitions-template.html`).
- **`favicon.svg`**, **`vercel.json`** (`cleanUrls`), **`.vercelignore`**,
  **`vsl-transcript.md`** (pulled from the Loom captions on the CDN, so page copy
  echoes the video), **`screenshots/`** (desktop + mobile self-review captures).
- `api/lead.js` and `privacy.html` untouched. Old page preserved in git history.

## Positioning decisions (and why)

- **"Personal OS" → "AI OS"** per the brief, and it matches what you already call
  it in the ads and the Loom title.
- Copy follows your own rules from the vault: **no em dashes anywhere**,
  **I-voice** (the shipped ads' "we" was flagged in your wiki as unearned),
  price never published, scarcity = **"first five builds at a discounted rate"**
  (replaced "limited spots this month": one scarcity claim, the honest one).
- **Every stat on the page is real**: 2 businesses, 235 orders / 3 discrepancies
  (March audit), 209 orders (April audit, in the widget), 48h to first Telegram
  brief (from your product doc), "saves me 10 to 15 hours" (your only allowed
  time claim, first person).
- Claims that were on the old page but unbacked were removed or softened:
  "used daily by founders, execs" (you have zero clients yet; you are the case
  study and the page says so), "everything live in 48 hours" (now: Telegram brief
  in 48h, full build in days, not months), "7am every day" (now: "every morning",
  no clock promise).
- No client names, no supplier names, no brand/category words from the wholesale
  business, no legal surname, no personal finance figures anywhere on the page.

## What Sam still needs to do (morning checklist)

1. **Merge the branch** (or tell me what to change first). Vercel will build a
   preview deploy for the branch automatically — check the preview link on GitHub.
2. **Point `samfranco.ca` at this Vercel project** (Vercel dashboard → this
   project → Domains → add `samfranco.ca` + `www`). The old acquisitions content
   stays reachable at `/acquisitions`, so nothing is lost when the domain moves.
   Keep `os.samfranco.ca` on this project too; both domains can serve it.
3. **Confirm the Cal.com link** `cal.com/samfranco/intro` is still live. It is a
   single constant (`BOOKING_URL`) at the top of the script block in `index.html`.
4. **Real product screenshots** would upgrade the page further: the Telegram
   morning brief, the Finance OS overview, the EOW revenue chart (with mock or
   redacted numbers). Send them and they can replace/augment the Mission Control
   widget.
5. **A wider, higher-res photo of you** would let the founder section go
   full-bleed like the reference sites. Current best asset is 543×576.
6. When the first builds ship, add real testimonials. The page intentionally has
   no testimonial section yet rather than a fake one.
7. **Security note (unrelated repo)**: a live GCP service-account key is
   committed in the vault at `Client Personal OS/serious-house-497015-a0-….json`.
   Rotate that key and delete the file.
