# MIS 2026 IMC Deck: Full Build Prompt

You are building a complete, end-to-end Integrated Marketing Communications (IMC) pitch deck for The Mining Integration Summit 2026 (MIS 2026). This is a full React application, deployable to Vercel, built slide by slide following the Duarte Sparkline framework and investment-grade visual craft.

---

## Step 0: Load Context

Before writing any code, read these files in order. Do not skip any.

### Skill files (orchestration and visual system)
1. `/tmp/atlas-creative/atlas-creative-direction-deck/SKILL.md` — 9-agent orchestrator, activation protocol, transition format, phase gates
2. `/tmp/atlas-creative/atlas-creative-direction-deck/templates/deck-structure.md` — 24-slide Sparkline structure with beat mapping
3. `/tmp/atlas-creative/atlas-creative-direction-deck/references/core-principles.md` — 12 non-negotiable principles (trust first, quantified commitments, one idea per slide, UK English, no em dashes)
4. `/tmp/atlas-creative/atlas-creative-direction-deck/references/typography-and-visual-system.md` — Typography table, colour palette, 12-column grid, slide types, credibility tells
5. `/tmp/atlas-creative/atlas-creative-direction-deck/references/sparkline-framework.md` — Duarte Sparkline applied to mining and corporate
6. `/tmp/atlas-creative/atlas-creative-direction-deck/references/mining-sector-benchmarks.md` — ESG commitments, stakeholder frameworks, licence to operate standards

### Taste skill files (frontend craft enforcement)
7. `~/.claude/skills/taste-skill/SKILL.md` — Design engineering directives: DESIGN_VARIANCE 8, MOTION_INTENSITY 6, VISUAL_DENSITY 4, Geist/Outfit/Cabinet Grotesk/Satoshi fonts (Inter banned), no pure black (#000), spring physics (stiffness 100, damping 20), asymmetric layouts, Bento 2.0, min-h-[100dvh]
8. `~/.claude/skills/taste-output/SKILL.md` — Full-output enforcement: no placeholders, no "rest of code here", no partial implementations, every file complete

### Agent files (for reference on agent roles)
9. `/tmp/atlas-creative/atlas-creative-direction-deck/agents/` — All 9 agent files (01 through 09). Skim these to understand the roles; you are embodying all nine sequentially in code form.

### Existing proposal context
10. `~/Projects/atlas/mis2026-proposal/` — Contains the original MIS 2026 proposal PDF and assets. Reference for content, numbers, and strategy.

If `/tmp/atlas-creative/` does not exist, unzip it first:
```bash
unzip ~/Downloads/atlas-creative-direction-deck.zip -d /tmp/atlas-creative/
```

---

## Step 1: Initiate GSD Protocol

Use the GSD (Get Shit Done) framework to manage execution. Create 5 phases:

| Phase | Goal | Slides |
|---|---|---|
| 1 | Scaffold project, brand tokens, deck shell | Infrastructure |
| 2 | Opening + Current Reality (slides 1 to 11) | 1-11 |
| 3 | Expression of the Idea (slides 12 to 17) | 12-17 |
| 4 | Substance + Close (slides 18 to 24) | 18-24 |
| 5 | Polish, typecheck, build, Vercel deploy config | Final |

Track each phase with tasks. Mark each task complete as you finish it. Do not batch.

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

Add custom theme tokens inline using `@theme`.

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
    miningGold: "#B88430",
    forestGreen: "#1F4A2A",
    shaftBlack: "#1A1A1A",
    kalahariCream: "#F4ECD8",
    ochreRed: "#8B2B1F",
    editorialGrey: "#6B6B6B",
    cloudWhite: "#F5F2ED",
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

Register these as CSS custom properties via `@theme` in `src/index.css` so Tailwind can use them as utility classes (e.g., `text-mining-gold`, `bg-kalahari-cream`).

---

## Step 4: Deck Shell

Create `src/components/DeckShell.tsx`:

Features:
- Full viewport presentation (aspect-ratio: 16/9, centred, scaled to fit)
- Keyboard navigation: ArrowRight/Space = next, ArrowLeft = prev, Home = first, End = last
- Touch swipe navigation for mobile
- Slide counter (current / total) in bottom right, editorial grey, 12pt Geist
- Subtle progress bar at top (Mining Gold fill on Shaft Black track)
- Framer Motion AnimatePresence for slide transitions: spring physics, stiffness 100, damping 20, no opacity fade; use translateX or scale
- No visible chrome except counter and progress bar

Create `src/lib/slides.ts`:
- Export a `slides` array that imports all 24 slide components
- Each entry: `{ id, component, sparklineBeat?, section }`

Wire `DeckShell` into `App.tsx` as the root.

---

## Step 5: Slide Components

Create one file per slide in `src/slides/`. Each slide is a React component that receives no props and renders at 1920x1080 logical pixels inside the shell's scaled container.

### Visual Rules (apply to every slide)

- Maximum one idea per slide
- Maximum 30 words of body copy
- Maximum 12 words in headline
- Left-aligned body copy (never centre-align body)
- Sentence case (never ALL CAPS except 8-10pt labels)
- Minimum 40% white space on content slides
- Section dividers: 70%+ white space
- No stock imagery references; use CSS gradient or geometric SVG for visual weight
- No em dashes or hyphens as punctuation
- Simplified UK English (colour, organise, centre, behaviour, analyse)
- Single font family (Geist), 2-3 weights (Regular 400, Medium 500, Semibold 600)
- Base palette: Shaft Black #1A1A1A background, Kalahari Cream #F4ECD8 text, Mining Gold #B88430 accent
- Never use pure black (#000) or pure white (#FFF) as backgrounds
- Data claims must cite a source

### Slide-by-Slide Blueprint

Use this exact structure. The Sparkline beat column tells you the narrative function.

#### Opening (Slides 1-3)

**Slide 1: Title**
- Full viewport, Shaft Black background
- "THE MINING INTEGRATION SUMMIT 2026" in Geist Medium, 72pt equivalent, Kalahari Cream
- Subtitle: "Integrated Marketing Communications Strategy" in Geist Regular, 24pt, Editorial Grey
- Date: "September 2026 | Johannesburg, South Africa" at bottom left
- Mining Gold thin horizontal rule (1px, 40% width) between title and subtitle
- Subtle geometric pattern (mining-inspired angular grid) at 5% opacity in background

**Slide 2: Room Acknowledgement**
- Single sentence showing the team has listened
- Text: "This strategy was built from the ground up, informed by three decades of mining sector intelligence, regulatory reality, and the voices of those who build, govern, and invest in Southern Africa's extractive future."
- Geist Regular, 24pt, left-aligned, Kalahari Cream on Shaft Black
- 70% white space

**Slide 3: Set the Stakes (Beat 1)**
- One sentence, 48pt, left-aligned, 70% white space
- Text: "The mining sector's next decade will be defined not by what is extracted, but by who is trusted to extract it."
- Mining Gold accent on the word "trusted" (or render it in Mining Gold while rest is Kalahari Cream)

#### Current Reality (Slides 4-7)

**Slide 4: What Is (Beat 2)**
- Single statistic with source
- Headline: "The trust deficit is measurable"
- Stat: "67% of mining communities report dissatisfaction with current engagement practices"
- Source: "Minerals Council South Africa, Community Relations Report 2024"
- Use a large number treatment: the "67%" in Geist Semibold, 120pt, Mining Gold

**Slide 5: What Could Be (Beat 3)**
- Dated commitment with trajectory
- Headline: "A summit built on substance, not spectacle"
- Body: "MIS 2026 targets 1,200 delegates across 14 nations, with 40% representation from host communities and regulatory bodies by September 2026."
- Recharts trajectory line chart: delegate growth projection, Mining Gold line on Shaft Black, target dot dated

**Slide 6: What Is (Beat 4)**
- The harder tension
- Headline: "The industry talks integration; the calendar says otherwise"
- Body: "Current mining conferences separate technical, ESG, and community tracks. Stakeholders leave without having spoken to each other."
- Stakeholder quote if space allows: italic Geist Regular

**Slide 7: What Could Be (Beat 5)**
- The modernised alternative
- Headline: "One programme. Every voice in the room."
- Body: "MIS 2026 merges technical, regulatory, community, and investor tracks into a single integrated programme with cross-stakeholder panels in every session."

#### The Insight Reveal (Slides 8-9)

**Slide 8: Section Divider**
- Pure typography, Shaft Black background
- "THE INSIGHT" in Geist Medium, 96pt, Kalahari Cream
- 75%+ white space
- Mining Gold thin rule below text, 120px wide

**Slide 9: The Insight**
- One sentence, maximum 15 words
- Text: "Integration is not a programme format. It is a trust architecture."
- Geist Medium, 48pt, centred, Kalahari Cream
- This is the "oh, of course" moment

#### The Big Idea (Slides 10-11)

**Slide 10: Section Divider**
- Pure typography
- "THE IDEA" in Geist Medium, 96pt, Mining Gold
- Shaft Black background, 75%+ white space

**Slide 11: The Big Idea**
- One sentence, maximum 12 words
- Text: "Where the mine meets the future."
- Geist Semibold, 64pt, left-aligned, Kalahari Cream
- Subtle animated gradient shimmer on "future" (CSS animation, not JS; Mining Gold to Forest Green, 8s loop)

#### Expression of the Idea (Slides 12-17)

**Slide 12: Manifesto**
- 60-word poetic statement, hero treatment
- Text (write the full manifesto):
  "We did not build this summit for applause. We built it because the ground beneath Southern Africa holds more than minerals. It holds futures. And futures demand that the geologist and the grandmother sit in the same room. That the investor and the community organiser share the same stage. This is not a conference. This is where the mine meets the future."
- Geist Regular, 20pt, Kalahari Cream, left-aligned on Shaft Black
- Mining Gold vertical rule on the left edge (4px wide, full text height)

**Slide 13: Hero Execution 1: Digital Campaign (Beat 6)**
- Headline: "Digital and Social Campaign"
- Layout: left column (copy), right column (placeholder zone)
- Left column content:
  - "LinkedIn-led thought leadership series"
  - "12-week pre-summit content calendar"
  - "Targeted delegate acquisition via paid social"
  - "Weekly mining intelligence posts"
- Right column: clearly marked placeholder zone with dashed border (Mining Gold, 1px dashed) and text "CREATIVE CONCEPTS TO BE ADDED" in Editorial Grey, 14pt
- This is where the user will add LinkedIn post concepts, creative copy, imagery

**Slide 14: Hero Execution 2: Email Marketing (Beat 7)**
- Headline: "Email and Direct Communications"
- Same two-column layout
- Left column:
  - "5-sequence delegate nurture journey"
  - "Speaker announcement series"
  - "Early-bird and tier-based pricing triggers"
  - "Post-registration onboarding sequence"
- Right column: placeholder zone "EMAIL DESIGN CONCEPTS TO BE ADDED"

**Slide 15: Hero Execution 3: PR and Media (Beat 8)**
- Headline: "Public Relations and Media Strategy"
- Left column:
  - "Tier-1 mining press embargo programme"
  - "Op-ed placement: 6 publications across 3 markets"
  - "Press accreditation and media partnership framework"
  - "Post-summit coverage and report distribution"
- Right column: placeholder zone "MEDIA KIT CONCEPTS TO BE ADDED"

**Slide 16: Tone of Voice**
- Headline: "How MIS 2026 Speaks"
- Three voice principles with short written examples:
  1. "Grounded, never grandiose" — Example: "We convene the sector" not "We revolutionise mining"
  2. "Specific, never aspirational" — Example: "1,200 delegates from 14 nations" not "a global audience"
  3. "Inclusive, never patronising" — Example: "Community voice is structural, not ceremonial"
- Left-aligned, clean vertical stack with Mining Gold rule separating each principle

**Slide 17: Art Direction**
- Headline: "Visual Language"
- Moodboard grid concept: 2x3 or 3x2 grid of coloured rectangles (using brand palette) representing image slots
- Each rectangle labelled: "Documentary mine site", "Community portrait", "Aerial landscape", "Technical close-up", "Summit environment", "Archive/heritage"
- Below grid: "Documentary photography only. No stock. No AI-generated portraits."
- Use CSS grid for the moodboard with brand colour fills as placeholders

#### Substance and Defensibility (Slides 18-20)

**Slide 18: ESG and Commitment Trajectory**
- Headline: "Measurable Impact Targets"
- Recharts trajectory chart: 3 lines (Community Engagement Score, Carbon Offset %, Local Procurement %)
- X-axis: 2024, 2025, 2026, 2027
- Target markers on 2026 data points
- Source: "Atlas Consulting Group internal benchmarking framework"
- Mining Gold, Forest Green, Ochre Red for the three lines

**Slide 19: Feedback and Grievance**
- Headline: "How We Hear When Something Is Wrong"
- Named mechanism: "MIS Stakeholder Feedback Protocol"
- Response time: "48-hour acknowledgement, 14-day resolution target"
- Disclosure: "Post-summit transparency report published within 60 days"
- Contact: "stakeholders@mis2026.co.za"
- Clean vertical stack layout

**Slide 20: Stakeholder Voice**
- Quote slide
- Quote: "For the first time, I felt like my concerns about water usage were heard in the same room as the investors making the decisions."
- Attribution: "Community liaison officer, Limpopo Province"
- Geist Regular italic for quote, 28pt, Kalahari Cream
- Mining Gold quotation mark glyph at top left, oversized (200pt, 10% opacity)

#### The Close (Slides 21-24)

**Slide 21: New Bliss (Beat 9)**
- The integrated future state, emotional treatment
- Headline: "The Summit After the Summit"
- Body: "When the stages are packed up, MIS 2026 lives on: in the partnerships formed between investor and community leader, in the MOUs signed between regulator and operator, in the research collaborations that outlast the programme."
- Warm treatment: Kalahari Cream background with Shaft Black text (inverted from other slides)
- Forest Green accent elements

**Slide 22: Measurement**
- Headline: "Success Metrics"
- Table or grid with specific targets:
  | Metric | Target |
  | Delegate registrations | 1,200 |
  | Nations represented | 14 |
  | Community representation | 40% |
  | Sponsor revenue | R18.5M |
  | Media impressions | 50M+ |
  | Post-summit NPS | 72+ |
  | Return delegate rate | 35% |
- Clean data table, Mining Gold header row, alternating subtle row shading

**Slide 23: Investment and Timeline**
- Headline: "Investment and Phasing"
- Single table:
  | Phase | Period | Investment |
  | Strategy and Creative | Apr-May 2026 | R1.2M |
  | Digital Build and Launch | Jun-Jul 2026 | R2.8M |
  | Campaign Activation | Jul-Sep 2026 | R4.5M |
  | On-site Production | Sep 2026 | R3.2M |
  | Post-summit and Legacy | Oct-Nov 2026 | R850K |
  | **Total** | | **R12.55M** |
- Clean table, Mining Gold accent on total row

**Slide 24: Call to Action (Beat 10)**
- One sentence, one action, one contact
- Text: "Let us build this together."
- Subtext: "Ofentse Thulare | Atlas Consulting Group"
- Contact: "ofentse@atlascg.co.za | +27 XX XXX XXXX"
- Geist Medium, 48pt main text, 18pt contact details
- Mining Gold thin rule between text and contact
- Shaft Black background, centred composition (this is the one slide where centre-align is acceptable)

---

## Step 6: Utility Components

Create these shared components in `src/components/`:

### `SlideFrame.tsx`
- Wrapper for every slide: enforces 1920x1080 aspect ratio, applies padding (80px), sets font family
- Accepts `bg` prop (default: Shaft Black), `className` for overrides

### `NumberTicker.tsx`
- Animated number counter using Framer Motion `useSpring` and `useTransform`
- Fires on slide mount, counts from 0 to target over 1.5s
- Used for stat slides (slide 4, slide 22)

### `TrajectoryChart.tsx`
- Recharts `LineChart` wrapper styled to brand
- Shaft Black background, Mining Gold gridlines at 10% opacity
- Geist font for all labels
- Accepts `data`, `lines` (array of {dataKey, colour}), `xKey`, `targetYear`

### `PlaceholderZone.tsx`
- Dashed border container (Mining Gold, 1px dashed, 8px border-radius)
- Centred text in Editorial Grey: configurable label
- Used for slides 13, 14, 15 where user will add creative copy later

### `SectionDivider.tsx`
- Reusable for slides 8 and 10
- Accepts `title`, `accentColor` (default Mining Gold)
- Pure typography, 96pt, 75%+ white space, thin rule below

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
4. Add `vercel.json` for SPA routing:
   ```json
   { "routes": [{ "src": "/(.*)", "dest": "/index.html" }] }
   ```

---

## Step 8: Commit and Report

```bash
git add -A && git commit -m "feat: complete MIS 2026 IMC deck (24 slides)"
```

Report the final slide count, any placeholder zones left for the user, and confirm the dev server URL.

---

## Hard Rules (Non-Negotiable)

These override any conflicting defaults:

1. **No em dashes or hyphens as punctuation.** Use commas, semicolons, colons, full stops, or restructure.
2. **Simplified UK English.** colour, organise, centre, behaviour, analyse.
3. **MIS 2026 brand palette only.** Mining Gold #B88430, Forest Green #1F4A2A, Shaft Black #1A1A1A, Kalahari Cream #F4ECD8, Ochre Red #8B2B1F.
4. **Geist font only.** Never Inter. Weights: 400 (Regular), 500 (Medium), 600 (Semibold).
5. **No pure black (#000) or pure white (#FFF)** as backgrounds.
6. **No stock imagery.** Use CSS gradients, geometric SVG, or coloured rectangles as visual placeholders.
7. **No placeholders in code.** Every component must be complete, compilable, and functional. No "// add more here", no "... rest of code".
8. **One idea per slide.** If a slide has two ideas, split it.
9. **Framer Motion spring physics.** stiffness: 100, damping: 20 for all transitions.
10. **Left-aligned body copy.** Centre-align only on title slide (1) and CTA slide (24).
11. **40%+ white space** on every content slide. 70%+ on section dividers.
12. **Every data claim cites a source.**

---

## What to Leave Blank

The user explicitly requested blank zones for:
- Slide 13 right column: LinkedIn post concepts, creative imagery
- Slide 14 right column: Email design concepts
- Slide 15 right column: Media kit concepts

Use the `PlaceholderZone` component for these. Everything else (copy, numbers, structure, charts, tables) must be complete.

---

## MIS 2026 Context Summary

The Mining Integration Summit 2026 is a flagship conference in Johannesburg, South Africa, targeting 1,200 delegates from 14 nations. It merges technical mining, ESG, community, and investor tracks into a single integrated programme. The summit is positioned as a trust architecture: where the mine meets the future. Atlas Consulting Group (the user's agency) is producing the full IMC strategy covering digital marketing, email, PR, sponsorship sales, delegate acquisition, and on-site production. Total investment: R12.55M. The summit targets 40% community and regulatory representation, R18.5M in sponsor revenue, and a post-summit NPS of 72+.

Key audiences: institutional investors, host country regulators, community stakeholders, mining operators, media, and prospective talent.

The brand tone is grounded (never grandiose), specific (never aspirational), and inclusive (never patronising). Documentary photography standards apply. The visual identity uses a mining-industrial palette anchored in gold, green, and earth tones on a dark editorial base.
