# MIS 2026 IMC Deck: Full Build Prompt (v2, aligned to proposal and master strategy)

You are building a complete, end-to-end Integrated Marketing Communications (IMC) pitch deck for The Mining Integration Summit 2026 (MIS 2026). This is a full React application, deployable to Vercel, built slide by slide following the Duarte Sparkline framework and investment-grade visual craft.

This is v2. The previous prompt (BUILD-DECK.md) had invented numbers and was not aligned to the actual MIS 2026 proposal or master strategy. This version replaces it entirely. All data, audience segments, channel strategies, budgets, and timelines are drawn directly from the two source documents listed below.

---

## Step 0: Load Context

Before writing any code, read these files in this order. Do not skip any.

### Source documents (the real data)
1. `~/Projects/atlas/mis2026-proposal/generate_pdf.py` — The original MIS 2026 services proposal to SAMCA. Contains: the brief, 5 service areas (Sponsor/Delegate Acquisition, Event Tech/Data, Content/Narrative/Social, Design/Collateral, B2B Matchmaking), timeline/critical path, and next steps. READ THE ENTIRE FILE.
2. `~/Downloads/build_mis2026_master.py` — The Master Strategy response to Jade Adams (CEO SAMCA). Contains: Part A (executive response to 10 concerns), Part B (strategic foundation: 5 audience segments, 7 platform map, 4 phase campaign arc), Part C (channel strategies: LinkedIn, Meta, Google, YouTube, TikTok, WhatsApp, Email with full budgets and benchmarks), Part D (budget, projections, measurement, weekly report), Part E (content production system, 18 sample content pieces), Part F (SEO strategy), Part G (operations/GSD plan). READ THE ENTIRE FILE.

### MIS 2026 brand colours (from the proposal PDF styling)
The proposal uses these colours. The deck MUST use the same palette:
- Dark Green: #264527 (primary brand colour, used for backgrounds and headers)
- Gold: #E2BB39 (accent, rules, badges, highlights)
- Dark Brown: #854507 (secondary text, footer)
- Amber: #BD770B (subheadings, sponsor cards)
- Muted Green: #5C846C (supporting text, footer)
- Sage: #788D54 (supporting elements)
- Sand: #D9D09F (card backgrounds, subtle fills)
- Light Background: #F8F5EC (page base, content backgrounds)
- Body Text: #2D2D2D (primary reading text)
- White: #FFFFFF

The fonts used in the proposal are Barlow Condensed (Bold, SemiBold) for headings and Helvetica for body. In the React deck, use Geist Sans as the modern equivalent (already installed in the project). Map weights: Geist Semibold for section titles, Geist Medium for subheadings, Geist Regular for body.

### Skill files (orchestration and visual system)
3. Unzip if needed: `unzip ~/Downloads/atlas-creative-direction-deck.zip -d /tmp/atlas-creative/`
4. `/tmp/atlas-creative/atlas-creative-direction-deck/SKILL.md` — Orchestrator structure
5. `/tmp/atlas-creative/atlas-creative-direction-deck/templates/deck-structure.md` — 24-slide Sparkline structure
6. `/tmp/atlas-creative/atlas-creative-direction-deck/references/core-principles.md` — 12 principles
7. `/tmp/atlas-creative/atlas-creative-direction-deck/references/typography-and-visual-system.md` — Typography, grid, visual logic

### Taste skill files (frontend craft enforcement)
8. `~/.claude/skills/taste-skill/SKILL.md` — Design engineering directives
9. `~/.claude/skills/taste-output/SKILL.md` — Full-output enforcement (no placeholders in code)

---

## Step 1: Initiate GSD Protocol

Use the GSD (Get Shit Done) framework. Create 6 phases:

| Phase | Goal | Slides |
|---|---|---|
| 1 | Scaffold project, brand tokens, deck shell | Infrastructure |
| 2 | Opening + Client Summary + Background (slides 1 to 8) | 1-8 |
| 3 | Audience + Channels + Strategy (slides 9 to 18) | 9-18 |
| 4 | Expression + Creative Zones (slides 19 to 24) | 19-24 |
| 5 | Substance + Close (slides 25 to 30) | 25-30 |
| 6 | Polish, typecheck, build, Vercel deploy config | Final |

---

## Step 2: Project Setup

The project is already scaffolded at `~/Projects/atlas/mis2026-deck/` with:
- Vite 8 + React 19 + TypeScript
- Tailwind CSS v4 + @tailwindcss/vite
- Framer Motion 12
- Recharts 3

You need to:

### 2a. Configure Tailwind v4

In `vite.config.ts`, add the Tailwind Vite plugin:
```ts
import tailwindcss from "@tailwindcss/vite";
```

In `src/index.css`, replace all content with:
```css
@import "tailwindcss";
```

Add custom theme tokens inline using `@theme` for all MIS brand colours.

### 2b. Install Geist font

```bash
bun add geist
```

Import in `src/main.tsx`:
```ts
import "geist/font/sans.css";
```

### 2c. Clean boilerplate

Remove `src/App.css`, the default Vite logo SVGs, and the boilerplate in `App.tsx`.

### 2d. Initialise git

```bash
cd ~/Projects/atlas/mis2026-deck && git init && git add -A && git commit -m "chore: scaffold Vite React deck"
```

---

## Step 3: Brand Tokens

Create `src/lib/brand.ts`:

```ts
export const brand = {
  colors: {
    darkGreen: "#264527",
    gold: "#E2BB39",
    darkBrown: "#854507",
    amber: "#BD770B",
    mutedGreen: "#5C846C",
    sage: "#788D54",
    sand: "#D9D09F",
    lightBg: "#F8F5EC",
    bodyText: "#2D2D2D",
    white: "#FFFFFF",
  },
  fonts: {
    primary: "'Geist', system-ui, sans-serif",
  },
  grid: {
    width: 1920,
    height: 1080,
    margin: 80,
    columns: 12,
    gutter: 24,
  },
} as const;
```

Register these as CSS custom properties via `@theme` in `src/index.css` so Tailwind can use them.

---

## Step 4: Deck Shell

Create `src/components/DeckShell.tsx`:

Features:
- Full viewport presentation (aspect-ratio: 16/9, centred, scaled to fit)
- Keyboard navigation: ArrowRight/Space = next, ArrowLeft = prev, Home = first, End = last
- Touch swipe navigation for mobile
- Slide counter (current / total) in bottom right, Muted Green, 12pt Geist
- Subtle progress bar at top (Gold fill on Dark Green track)
- Framer Motion AnimatePresence for slide transitions: spring physics, stiffness 100, damping 20
- Header band on interior slides: Dark Green background with Gold text "THE MINING INTEGRATION SUMMIT 2026 | PRESENTED BY SAMCA | RUSTENBURG, NORTH WEST PROVINCE" (matching the proposal PDF header)
- Footer with Gold rule and page indicator (matching proposal PDF footer)

Create `src/lib/slides.ts`:
- Export a `slides` array that imports all slide components
- Each entry: `{ id, component, sparklineBeat?, section }`

---

## Step 5: The 30 Slides

This is a 30-slide deck (extended structure per deck-structure.md). It follows the Duarte Sparkline but is structured around the actual MIS 2026 content from the proposal and master strategy.

### Visual Rules (apply to every slide)

- Maximum one idea per slide
- Maximum 30 words of body copy (data tables excepted)
- Maximum 12 words in headline
- Left-aligned body copy (never centre-align body)
- Sentence case (never ALL CAPS except 8-10pt labels)
- Minimum 40% white space on content slides
- Section dividers: 70%+ white space, Dark Green background, Gold typography
- No stock imagery references; use CSS gradient or geometric SVG for visual weight
- No em dashes or hyphens as punctuation
- Simplified UK English (colour, organise, centre, behaviour, analyse)
- Single font family (Geist), 2-3 weights (Regular 400, Medium 500, Semibold 600)
- Gold accent elements (rules, badges, highlights) matching the proposal's gold rule treatment
- Decorative element: gold checkerboard pattern (4x5 grid of alternating filled squares) can be used subtly as per the proposal cover design
- Data claims must cite a source
- No pure black (#000) backgrounds; use Dark Green #264527 for dark slides
- Light slides use Light Background #F8F5EC with Body Text #2D2D2D

### Slide-by-Slide Blueprint

---

#### SECTION A: Opening (Slides 1 to 3)

**Slide 1: Title**
- Dark Green (#264527) background with 55% opacity photo-style gradient overlay effect
- "INTEGRATED SERVICES" in Geist Semibold, 28pt, White
- "PROPOSAL 2026" in Geist Semibold, 42pt, Gold (#E2BB39) + "2026" in White, 54pt
- Thin Gold rule (1.5px) at 85% from top
- Bottom section: "20 to 22 JULY 2026 | DAY PROGRAMME | GALA DINNER | MAYORAL GOLF DAY" in Gold, 9pt
- "Sustainable Harmony and Accountability for Transformation" in Muted Green, 9pt italic
- Gold checkerboard pattern (4x5 alternating squares) positioned bottom-right, partially overlapping the section break
- "Presented by SAMCA, South African Mining Communities Association" at bottom

**Slide 2: Room Acknowledgement**
- Light Background (#F8F5EC), left-aligned text
- Single sentence: "This strategy was built from the ground up after a direct conversation with Jade Adams, CEO of SAMCA, on 15 April 2026. Every concern raised in that meeting has been answered in this document."
- Geist Regular, 24pt, Body Text on Light Background
- 70% white space
- Gold accent rule on left edge (4px vertical bar)

**Slide 3: Set the Stakes (Beat 1)**
- Dark Green background
- One sentence, 48pt, left-aligned, 70% white space
- Text: "The mining sector's next decade will not be defined by what is extracted, but by who is trusted to extract it."
- Gold accent on "trusted"

---

#### SECTION B: The Brief and Background (Slides 4 to 8)

**Slide 4: Client Summary**
- Light Background
- Headline: "The Client" in Geist Semibold, Dark Green
- Content as clean data card (Gold left bar, Sand background):
  - Client: SAMCA, South African Mining Communities Association
  - Event: Mining Integration Summit 2026
  - Venue: Sun City, Rustenburg, North West Province
  - Dates: 20 to 22 July 2026
  - Programme: Day Programme, Gala Dinner, Mayoral Golf Day
  - Presented by: SAMCA | Delivered by Atlas Consulting Group (subcontracted under BeInnovation)
  - CEO: Jade Adams

**Slide 5: Background and Context (Beat 2: What Is)**
- Light Background
- Headline: "The summit that refuses to be a conference"
- Body (from the actual brief): "MIS 2026 is a three-day event targeting 500 to 600 delegates across mining houses, host communities, government, investors, SMMEs, and traditional leadership. The position is deliberately non-adversarial. Data, recognition, and facilitated dialogue do the work."
- Source: "SAMCA Brief, April 2026"

**Slide 6: The Five Service Areas (Beat 3: What Could Be)**
- Dark Green background
- Headline: "Five areas of delivery" in Gold
- Five numbered items in a vertical stack with Gold number badges:
  1. Sponsor and Delegate Acquisition
  2. Event Technology and Data Infrastructure
  3. Content, Narrative, and Social Media
  4. Design and Collateral
  5. B2B Matchmaking Platform Roadmap
- Each with one-line description from the proposal

**Slide 7: The Movement Frame (Beat 4: What Is)**
- Light Background
- Headline: "Mine the future, together"
- Comparison table (from Part B1 of master strategy):
  | Event framing | Movement framing |
  | Register for a conference | Join an accountability table |
  | Attend sessions | Make a public commitment |
  | Sponsor logo on banner | Sponsor chairs a pillar |
  | Community pass | Community delegation voice |
- Gold header row, alternating Sand/White rows

**Slide 8: Section Divider**
- Dark Green background, pure typography
- "THE AUDIENCE" in Geist Semibold, 96pt, Gold
- Gold thin rule below text, 120px wide
- 75%+ white space

---

#### SECTION C: Audience Segments (Slides 9 to 13)

One slide per segment, drawn directly from Part B2 of the master strategy.

**Slide 9: Segment 1: Mining Executives and ESG Leads**
- Light Background
- Headline in Dark Green: "Mining Executives and ESG Leads"
- Amber badge: "250 delegates at R8,500 avg ticket"
- Content card (Gold left bar) with:
  - Who: CEOs, COOs, Heads of Sustainability at mid and large cap mining houses
  - Hook: "The one table where mining, communities and schools sign the same page."
  - Channels: LinkedIn Sales Navigator, executive WhatsApp, curated email, invite-only Fireside
  - Proof needed: Logos of first three confirmed sponsors, named SAMCA board members, named government speaker

**Slide 10: Segment 2: Sponsors and Strategic Partners**
- Same layout
- Amber badge: "Target R4.5m sponsor revenue"
- Who: Marketing directors, sustainability directors, CSR budget holders
- Hook: "Chair a pillar, own the year-long narrative."
- Channels: Named outreach by Lee and SAMCA leadership, LinkedIn InMail, gated prospectus download
- Proof: Case study from Joburg Indaba Gold Sponsor showing R3.2m tracked deal flow

**Slide 11: Segment 3: Government, Regulators and Policy Makers**
- Same layout
- Amber badge: "50 complimentary seats, 8 speaking slots"
- Who: DMRE, DBE, DTIC, provincial government, Minerals Council
- Hook: "The platform where policy meets the people it serves."
- Proof: Endorsement letters from two MECs

**Slide 12: Segment 4: Mining-Affected Communities**
- Same layout
- Amber badge: "150 delegates, subsidised at R250"
- Who: Community leaders, tribal authorities, youth organisations, women in mining groups
- Hook: "Three requests. Sixty days to answer. On the record."
- Channels: Community radio, WhatsApp broadcast lists, church networks, in-person roadshows

**Slide 13: Segment 5: Academia, Schools and Innovation**
- Same layout
- Amber badge: "80 learners, 40 tertiary students, 30 academics"
- Who: Mining Engineering at Wits, UP, Stellenbosch; 8 partner school HODs; NYDA, SAIMM
- Hook: "Your project gets judged on stage. Winners get funded inside 90 days."
- Channels: TikTok and Instagram for learner mobilisation, parent WhatsApp groups

---

#### SECTION D: Channel Mix and Platform Strategy (Slides 14 to 18)

**Slide 14: Section Divider**
- Dark Green background
- "THE CHANNELS" in Gold, 96pt
- 75%+ white space

**Slide 15: The Seven Platform Map**
- Light Background
- Headline: "Segment by platform priority"
- Full matrix table from Part B3:
  | Segment | LinkedIn | Google | YouTube | Meta | TikTok | WhatsApp | Email |
  | Execs | Primary | Secondary | Primary | Support | Ignore | Primary | Primary |
  | Sponsors | Primary | Support | Secondary | Support | Ignore | Primary | Primary |
  | Government | Primary | Support | Secondary | Secondary | Ignore | Secondary | Primary |
  | Communities | Ignore | Support | Secondary | Primary | Primary | Primary | Secondary |
  | Schools | Secondary | Primary | Primary | Primary | Primary | Primary | Primary |
- Gold header row, Dark Green text, Sand alternating rows
- Footer note: "Primary = 40 to 60% of segment spend. Secondary = 20 to 30%. Support = 10 to 15%."

**Slide 16: Paid Media Budget Split**
- Dark Green background, Gold accents
- Headline: "R500,000 across 12 weeks" in Gold
- Recharts horizontal bar chart or styled table:
  | Platform | Budget | Share |
  | LinkedIn | R225,000 | 45% |
  | Google (Search + Display + YouTube) | R120,000 | 24% |
  | Meta (Facebook + Instagram) | R95,000 | 19% |
  | TikTok | R22,000 | 4.4% |
  | WhatsApp (Turn.io) | R22,000 | 4.4% |
  | Community radio | R16,000 | 3.2% |
- Source: "Part D1, MIS 2026 Master Strategy"

**Slide 17: Organic vs Paid Strategy**
- Light Background
- Headline: "Organic amplifies paid; paid funds organic"
- Two columns:
  - Paid: LinkedIn Lead Gen Forms (13% form completion), Google Search (R18 to R42 CPC), Meta Reels (R50.76 CPM), YouTube pre-roll (R180 CPM), TikTok (R0.27 CPM)
  - Organic: Fireside Conversation series (4 episodes), weekly newsletter (Beehiiv), community radio, WhatsApp broadcasts (95% open rate), content repurpose chain (1 Fireside = 5 finished pieces in 4 hours)
- All numbers from Part C and E1 of master strategy

**Slide 18: The Four Phase Campaign Arc**
- Light Background, full-width timeline
- Headline: "12 weeks, four phases, one trajectory"
- From Part B4:
  | Phase | Weeks | Theme | Outcome | Budget |
  | Build the case | W1-3 (27 Apr to 17 May) | Why this summit matters now | 500 warm list | R95k (10%) |
  | Fill the room | W4-6 (18 May to 7 Jun) | Who is already in the room | 200 paid regs | R285k (30%) |
  | Prove substance | W7-9 (8 Jun to 28 Jun) | What you get for three days | 400 paid regs | R285k (30%) |
  | Final push | W10-12 (29 Jun to 19 Jul) | Do not miss the table | 550 paid, sold out | R285k (30%) |
- Gold accent on phase transitions. Recharts area chart overlay showing delegate accumulation curve.

---

#### SECTION E: Value Proposition and Strategic Opportunities (Slides 19 to 21)

**Slide 19: The Insight**
- Dark Green background, centred composition
- One sentence, maximum 15 words
- Text: "Integration is not a programme format. It is a trust architecture."
- Geist Medium, 48pt, Light Background colour text
- The "oh, of course" moment

**Slide 20: The Big Idea**
- Dark Green background
- One sentence, maximum 12 words
- Text: "Mine the future, together."
- Geist Semibold, 64pt, Gold
- Subtitle: "Three days. Five promises. One accountability table."
- Subtle animated gradient shimmer on "together" (CSS, Gold to Amber, 8s loop)

**Slide 21: Sponsor Revenue Opportunity**
- Light Background
- Headline: "R4.5m sponsor revenue target"
- Tailored sponsor messaging table (from Section 01 of proposal):
  | Sponsor | KPI alignment | Angle |
  | Sibanye-Stillwater | Women in Mining / ESG | Gala dinner recognition, gender transformation |
  | Harmony Gold | Youth / Safety Recognition | CEO safety award, 2,000 days without fatalities |
  | Impala / Northam | Community / SLP Performance | Integration forum, data platform for SLP delivery |
  | NYDA | Youth Empowerment | Youth in Mining, SMME incubation pipeline |
  | OEMs | B2B Access | Exhibition, matchmaking, contractor ecosystem |
  | Bojanala Municipality | Regional Alignment | Golf Day co-host naming rights, legacy projects |
- Gold header row, Amber left bars on each card

---

#### SECTION F: Expression and Creative Zones (Slides 22 to 24)

**Slide 22: Hero Execution 1: Digital and Social Campaign (Beat 6)**
- Light Background
- Headline: "Digital and Social Campaign"
- Left column: LinkedIn content calendar (from Part C1):
  - Monday: Fireside clip 60s (SAMCA page, R3k boost)
  - Tuesday: Pillar thought leadership (Lee personal, R4k)
  - Wednesday: Sponsor/speaker announcement (R5k)
  - Thursday: Delegate spotlight
  - Friday: Week recap with registration CTA (R3k)
- Right column: PLACEHOLDER ZONE with dashed Gold border, text: "CREATIVE CONCEPTS TO BE ADDED" in Muted Green
- This is where the user adds LinkedIn post concepts, imagery

**Slide 23: Hero Execution 2: Email and WhatsApp (Beat 7)**
- Same layout
- Left column: from Part C6 and C7:
  - 5-touch delegate nurture sequence (welcome > social proof > agenda > personalised > urgency)
  - 8 WhatsApp templates across 4 phases
  - R22,329 total WhatsApp cost model
  - 95% open rate within 30 minutes
- Right column: PLACEHOLDER ZONE "EMAIL AND WHATSAPP DESIGN CONCEPTS TO BE ADDED"

**Slide 24: Hero Execution 3: Content Production System (Beat 8)**
- Same layout
- Left column: The 30-second repurpose workflow (from Part E1):
  - 1 Fireside Conversation (45 min) produces:
  - 3 polished video clips (Opus Clip + Descript)
  - 1 LinkedIn carousel (Canva template)
  - 1 newsletter summary (Beehiiv)
  - 1 WhatsApp audiogram (Headliner)
  - 1 full YouTube episode with chapters
  - Total production time: under 4 hours
- Right column: PLACEHOLDER ZONE "SAMPLE CONTENT PIECES TO BE ADDED"

---

#### SECTION G: Projections, Measurement and Budget (Slides 25 to 27)

**Slide 25: The Funnel (Spend to Eyeballs to Conversions)**
- Dark Green background, Gold data points
- Headline: "R500k to 550 delegates" in Gold
- Funnel visualisation (Recharts or styled CSS):
  - R500,000 paid media
  - 5,180,000 impressions
  - 980,000 video views
  - 58,000 landing page sessions
  - 4,200 email captures
  - 770 registration submissions
  - 550 paid delegates
- Source attribution breakdown:
  | Source | Delegates | CAC |
  | LinkedIn | 112 | R2,009 |
  | Meta | 135 | R704 |
  | Google + YouTube | 90 | R1,333 |
  | WhatsApp | 78 | R282 |
  | TikTok | 55 | R400 |
  | Email + direct | 55 | R0 |
  | PR + earned | 25 | R3,000 |
- "Blended CAC: R1,091. LTV:CAC ratio 17:1." in Gold
- Source: "Part D2, MIS 2026 Master Strategy"

**Slide 26: Full Budget**
- Light Background
- Headline: "R950,000 total investment"
- Headline budget table (from Part D1):
  | Category | Amount | Share |
  | Paid media | R500,000 | 52.6% |
  | Content production | R180,000 | 18.9% |
  | Tools and platforms | R65,000 | 6.8% |
  | PR and media | R75,000 | 7.9% |
  | Community activation | R55,000 | 5.8% |
  | Atlas fee | R75,000 | 7.9% |
- Recharts donut chart with brand colours showing the split
- Benchmark: "Joburg Indaba 2024: R2,000 per delegate. MIS 2026: R909 per delegate."

**Slide 27: Weekly Report Template**
- Light Background
- Headline: "Every Monday at 09:00"
- Six report sections displayed as a clean vertical list with Gold number badges:
  1. Headline scorecard (traffic-light: green/amber/red)
  2. Channel performance (spend, impressions, clicks, CPC, conversions)
  3. Content performance (top 3, bottom 2)
  4. Sponsor pipeline (prospect > meeting > proposal > negotiation > signed)
  5. Blockers and decisions needed from Jade
  6. Next week plan
- Reporting rhythm: Daily (Looker Studio), Weekly (written), Fortnightly (check-in with Lee), Monthly (review with Jade)

---

#### SECTION H: The Close (Slides 28 to 30)

**Slide 28: Timeline and Critical Path (Beat 9: New Bliss)**
- Dark Green background, Gold timeline
- Headline: "The critical path" in Gold
- Timeline phases from Section 06 of proposal:
  | Period | Phase | Key milestone |
  | Now to 30 Apr | Foundation and go-live | Outreach live, prospectus in production |
  | 1 to 15 May | Noise generation | Paid campaigns live, endorsements rolling |
  | 16 May to 30 Jun | Conversion window | Registrations open, 400 delegates |
  | 1 to 19 Jul | Final push | Sold out messaging, logistics confirmed |
  | 20 to 22 Jul | Event live | Three days, three programmes |
  | 23 Jul onwards | Post-event | Impact report in 14 days, sponsor renewal |
- Warm treatment: emotional close, the integrated future state

**Slide 29: Competitor Analysis and Positioning**
- Light Background
- Headline: "Where MIS 2026 sits"
- Comparison against SA mining events (from Part B1 benchmarks):
  | Event | Delegates | Ticket | Model | MIS advantage |
  | Joburg Indaba | 850 | R30,000 | Invitation only | MIS is accessible (R250 community pass) |
  | Mining Indaba (community forum) | 1,200 | Free (gated) | Application | MIS is accountable (60-day signed responses) |
  | BRICS Youth Summit 2023 | 2,000 | Sold out 2 months early | Youth mobilisation | MIS integrates youth WITH industry |
- MIS positioning: "The first time mining houses, communities, and schools are publicly answerable to each other in one room."

**Slide 30: Call to Action (Beat 10)**
- Dark Green background, centred composition
- Text: "Together Building a Prosperous, Inclusive North West" in White, 24pt
- "20 to 22 July 2026 | Rustenburg, Sun City | North West Province" in Muted Green, 18pt
- "THE MINING INTEGRATION SUMMIT '26" in Geist Semibold, 36pt, Gold
- "Presented by SAMCA | Delivered by Atlas Consulting Group" in Dark Brown, 14pt
- Gold horizontal rule (6px) at bottom
- Contact: Ofentse Thulare | Atlas Consulting Group | ofentse@atlascg.co.za

---

## Step 6: Utility Components

Create these shared components in `src/components/`:

### `SlideFrame.tsx`
- Wrapper for every slide: enforces 1920x1080 aspect ratio, applies padding (80px), sets font family
- Accepts `bg` prop (default depends on slide type: Dark Green for dark slides, Light BG for content slides)
- Includes the proposal-style header band (Dark Green with Gold centred text) and footer (Gold rule + page indicator)

### `NumberTicker.tsx`
- Animated number counter using Framer Motion `useSpring` and `useTransform`
- Fires on slide mount, counts from 0 to target over 1.5s
- Used for stat slides (slide 25, slide 26)

### `TrajectoryChart.tsx`
- Recharts `LineChart` wrapper styled to MIS brand
- Dark Green background, Gold gridlines at 10% opacity
- Geist font for all labels
- Accepts `data`, `lines` (array of {dataKey, colour}), `xKey`

### `PlaceholderZone.tsx`
- Dashed border container (Gold, 1px dashed, 8px border-radius)
- Centred text in Muted Green: configurable label
- Used for slides 22, 23, 24 where user will add creative copy later

### `SectionDivider.tsx`
- Reusable for slides 8, 14
- Dark Green background, Gold typography, 96pt, 75%+ white space, thin Gold rule below

### `DataCard.tsx`
- Reusable card with 4px Gold left bar and Sand background
- Accepts title (Geist Semibold, Dark Green) and body content
- Matches the "CapCard" treatment in the proposal PDF

### `SegmentCard.tsx`
- Reusable for slides 9 to 13
- Amber badge with segment size, content card below with who/hook/channels/proof
- Matches the sponsor card treatment from the proposal

### `BudgetChart.tsx`
- Recharts PieChart or donut chart for budget split
- Uses brand colours: Dark Green, Gold, Amber, Muted Green, Sage, Sand

### `GoldCheckerboard.tsx`
- SVG component: 4x5 grid of 14px squares, alternating filled Gold and transparent
- Used as subtle decorative element on title slide and section dividers

---

## Step 7: Polish and Quality

After all slides are built:

1. Run `bunx tsc --noEmit` and fix all type errors
2. Run `bun run build` and verify clean build
3. Run `bun run dev` and manually verify:
   - Arrow key navigation works both directions
   - Every slide renders at correct aspect ratio
   - No text overflows
   - Charts render with correct data
   - Placeholder zones are clearly visible
   - Progress bar tracks correctly
   - Gold accents, Dark Green backgrounds, and Sand cards all render correctly
   - Header band and footer match proposal styling
4. Add `vercel.json` for SPA routing:
   ```json
   { "routes": [{ "src": "/(.*)", "dest": "/index.html" }] }
   ```

---

## Step 8: Commit and Report

```bash
git add -A && git commit -m "feat: complete MIS 2026 IMC deck (30 slides, aligned to proposal and master strategy)"
```

Report the final slide count, any placeholder zones left for the user, and confirm the dev server URL.

---

## Hard Rules (Non-Negotiable)

These override any conflicting defaults:

1. **No em dashes or hyphens as punctuation.** Use commas, semicolons, colons, full stops, or restructure.
2. **Simplified UK English.** colour, organise, centre, behaviour, analyse.
3. **MIS 2026 brand palette only.** Dark Green #264527, Gold #E2BB39, Dark Brown #854507, Amber #BD770B, Muted Green #5C846C, Sage #788D54, Sand #D9D09F, Light BG #F8F5EC, Body Text #2D2D2D, White #FFFFFF.
4. **Geist font only.** Weights: 400 (Regular), 500 (Medium), 600 (Semibold).
5. **No pure black (#000) or pure white (#FFF)** as backgrounds.
6. **No stock imagery.** Use CSS gradients, geometric SVG, or coloured rectangles.
7. **No placeholders in code.** Every component must be complete, compilable, functional.
8. **One idea per slide.** Split if needed.
9. **Framer Motion spring physics.** stiffness: 100, damping: 20.
10. **Left-aligned body copy.** Centre-align only on CTA slide (30).
11. **40%+ white space** on every content slide. 70%+ on section dividers.
12. **Every data claim cites a source.** All numbers come from the proposal or master strategy docs.
13. **All numbers must match the source documents.** Do not invent figures. The budget is R950k total, R500k paid media. Delegate target is 550. Sponsor revenue target is R4.5m. CAC is R1,091 blended.

---

## What to Leave Blank

The user explicitly requested blank zones for:
- Slide 22 right column: LinkedIn post concepts, creative imagery
- Slide 23 right column: Email and WhatsApp design concepts
- Slide 24 right column: Sample content pieces

Use the `PlaceholderZone` component for these. Everything else (copy, numbers, structure, charts, tables) must be complete and drawn from the source documents.

---

## MIS 2026 Context Summary

The Mining Integration Summit 2026 is a three-day event in Rustenburg (Sun City), North West Province, South Africa, running 20 to 22 July 2026. It targets 500 to 600 delegates across mining houses, host communities, government, investors, SMMEs, and traditional leadership. It is the inaugural edition of an annually rotating provincial summit, with Northern Cape and Limpopo lined up as next editions.

**Client:** SAMCA (South African Mining Communities Association). CEO: Jade Adams.
**Delivery:** Atlas Consulting Group, subcontracted under BeInnovation. Lee Du Preez at BeInnovation is the client relationship lead.
**Theme:** Sustainable Harmony and Accountability for Transformation.
**Narrative spine:** "Mine the future, together. Three days. Five promises. One accountability table."
**Five pillars:** Beneficiation, Community Collaboration, Social Labour Plans, ESG, Schools Innovation.
**Total budget:** R950,000 across 12 weeks.
**Paid media:** R500,000 across LinkedIn, Google, Meta, TikTok, WhatsApp, community radio.
**Delegate target:** 550 paid delegates across 5 segments.
**Sponsor revenue target:** R4.5m (Platinum x2, Gold x4, Silver x6, Pillar Chair x5).
**Key audiences:** Mining executives, sponsors, government/regulators, mining-affected communities, academia/schools.
**Blended CAC:** R1,091 per delegate. LTV:CAC 17:1.

The brand tone is non-adversarial, accountability-driven, and grounded. The summit creates structured platforms where data, recognition, and facilitated dialogue replace confrontation. Every marketing asset points back to three public commitments: sponsors chair pillars with 12-month action plans, communities table three requests with 60-day signed responses, schools submit innovation projects with 90-day funded prototypes.
