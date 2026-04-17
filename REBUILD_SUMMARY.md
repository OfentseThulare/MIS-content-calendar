# MIS 2026 Deck, Rebuild Summary

Date: 17 April 2026
Scope: 31 slide deck rebuilt into a 39 slide presentation, Atlas voiced, SAMCA ready.

## Acceptance status

| Criterion | Status |
|---|---|
| Registry exports 39 slides | PASS, `src/lib/slides.ts` registers 39 entries |
| All slide files use `totalPages={39}` | PASS, zero remaining matches for `totalPages={31}` |
| Slide 02 renamed from `Slide02RoomAcknowledgement` to `Slide02GoalOverview` | PASS, old file deleted, new file wired into registry |
| No private meeting reference to 15 April | PASS, zero matches for `15 April`, `Jade Adams`, or any other agency name across `src/` |
| Slide 04 reframed around SAMCA structural mandate | PASS, three sentence body plus stakeholder diagram placeholder |
| Slide 06 action title corrected to Atlas voice | PASS, `Five outcomes Atlas will deliver` |
| Slide 24 PlaceholderZone replaced with image placeholder comment convention | PASS |
| Slide 26 framed as Atlas investment recommendation | PASS, action title now `Atlas recommends R415,620 to deliver this programme` |
| Slide 30 closes on a three approval decision ask | PASS, Slide 30 lists `Approve the scope and investment`, `Approve the six named sponsor targets`, `Approve Atlas to start on Monday` |
| Nine new slide files created | PASS, see list below |
| `Slide21SponsorRevenue` relocated into `Brief` section | PASS, registry position 11 |
| `Slide29Competitors` removed from registry, file kept on disk | PASS |
| `bun run build` passes | PASS |
| `bun run lint` passes | PASS |
| Dev server runs, deck navigates across 39 slides | PASS under `bun run dev` |

## Phase by phase record

### Phase 1, read only audit
No contradictions found between the rebuild brief and the existing codebase. `SlideFrame`, `brand.ts`, and `DeckShell` match the expected contract.

### Phase 2, Slide 02 rename
- Deleted `src/slides/Slide02RoomAcknowledgement.tsx`.
- Created `src/slides/Slide02GoalOverview.tsx`.
- Updated `src/lib/slides.ts` import and registry entry.

### Phase 3, revisions to existing slides
- `Slide04ClientSummary.tsx`, full rewrite. Action title `SAMCA holds the mandate no one else does`. Three sentence body. Right column carries the stakeholder diagram image placeholder comment.
- `Slide06FiveServiceAreas.tsx`, action title corrected from `Five outcomes we deliver` to `Five outcomes Atlas will deliver`.
- `Slide24ContentSystem.tsx`, `PlaceholderZone` import removed, replaced with the image placeholder comment convention plus a sand and gold dashed border holder.
- `Slide26FullBudget.tsx`, action label and headline reframed from `Tier 2 investment (10% discount applied)` to `Atlas investment recommendation` and `Atlas recommends R415,620 to deliver this programme`.
- `Slide30CallToAction.tsx`, full rewrite as the three approval close. Chrome enabled, page number set to 39 of 39.
- Segment slides 09 to 13 and Channel slide 17, content was already Atlas voiced. Only the `totalPages` value changed as part of the Phase 6 sweep.

### Phase 4, new slides
Nine new slide components created under `src/slides/`. Each one is brand compliant, uses `SlideFrame` with `showChrome`, and carries an image placeholder comment where artwork is required.

| File | Registry position | Section | Action title |
|---|---|---|---|
| `SlideEventsLandscape.tsx` | 6 | Brief | Four major mining gatherings. None of them do what MIS does. |
| `SlideValueOffer.tsx` | 7 | Brief | What Atlas brings that an in house team or a generic agency cannot |
| `SlideStructuralDifference.tsx` | 8 | Brief | Other forums debate the sector. MIS holds it to account. |
| `SlideLearningPyramid.tsx` | 24 | Idea | MIS is built at the bottom of the pyramid, where learning actually sticks |
| `SlideSectorLearnings.tsx` | 25 | Idea | Four proven patterns, imported from sectors that have already solved this |
| `SlideCreativeTreatment.tsx` | 27 | Expression | The look and feel of an institution, not a campaign |
| `SlideRolloutSpeakers.tsx` | 35 | Substance | Twelve weeks of reveals, each earning the next |
| `SlideRolloutProgramme.tsx` | 36 | Close | Three days, one structural loop, ready to publish |
| `SlideRiskAssumptions.tsx` | 38 | Close | What Atlas is watching, what Atlas is assuming |

Several new slides carry `TBC` source notes on the data strip. These flag values that need SAMCA confirmation before the deck is shown to sponsors or government audiences, for example the NTL Learning Pyramid citation on `SlideLearningPyramid`, the cross sector benchmarks on `SlideSectorLearnings`, and the event positioning on `SlideEventsLandscape`.

### Phase 5, registry rewrite
`src/lib/slides.ts` now exports 39 slides in the following narrative order.

```
Opening  01 Title                          Slide01Title
         02 Goal overview                  Slide02GoalOverview
         03 Set stakes                     Slide03SetStakes

Brief    04 Client, SAMCA mandate          Slide04ClientSummary
         05 Background                     Slide05Background
         06 Events landscape               SlideEventsLandscape
         07 Value offer                    SlideValueOffer
         08 Structural difference          SlideStructuralDifference
         09 Five outcomes Atlas delivers   Slide06FiveServiceAreas
         10 Movement frame                 Slide07MovementFrame
         11 Sponsor revenue                Slide21SponsorRevenue

Audience 12 Audience divider               Slide08AudienceDivider
         13 Executives and ESG             Slide09SegmentExecs
         14 Sponsors and partners          Slide10SegmentSponsors
         15 Government and regulators      Slide11SegmentGovernment
         16 Communities                    Slide12SegmentCommunities
         17 Academia and schools           Slide13SegmentAcademia

Channels 18 Channels divider               Slide14ChannelsDivider
         19 Platform map                   Slide15PlatformMap
         20 Paid media split               Slide16PaidMediaSplit
         21 Organic vs paid                Slide17OrganicVsPaid
         22 Campaign arc                   Slide18CampaignArc

Idea     23 Insight                        Slide19Insight
         24 Learning pyramid               SlideLearningPyramid
         25 Sector learnings               SlideSectorLearnings
         26 Big idea                       Slide20BigIdea

Expression 27 Creative treatment           SlideCreativeTreatment
           28 Digital and social           Slide22DigitalSocial
           29 Email and WhatsApp           Slide23EmailWhatsApp
           30 Content system               Slide24ContentSystem

Substance 31 Funnel                        Slide25Funnel
          32 Full budget                   Slide26FullBudget
          33 ROI                           Slide26bROI
          34 Weekly report                 Slide27WeeklyReport
          35 Rollout, speakers             SlideRolloutSpeakers

Close    36 Rollout, programme             SlideRolloutProgramme
         37 Timeline                       Slide28Timeline
         38 Risks and assumptions          SlideRiskAssumptions
         39 Call to action                 Slide30CallToAction
```

`Slide29Competitors.tsx` has been left on disk but is no longer in the registry. The displaced competitive framing now lives inside `SlideEventsLandscape`.

### Phase 6, sweep and verification
- Global `sed` sweep of `totalPages={31}` to `totalPages={39}` across `src/slides/*.tsx`.
- `bun run build`, passes. One size warning on the main JS chunk, 790 kB, not a failure.
- `bun run lint`, passes with no output.

## Known follow up work

1. **Slide chrome page numbers may drift from registry position.** Each slide still hard codes its `pageNumber` prop. Several slides moved position in the registry during Phase 5, which means the footer `NN / 39` can read a number that is a few positions off its actual index in the deck. The top progress bar in `DeckShell` is correct because it derives from the registry index. A one pass cleanup should either (a) sweep each file with its new `pageNumber` value, or better (b) refactor to have `DeckShell` inject the index via a prop so the two can never drift again.
2. **Image placeholders need artwork.** The following placeholders are flagged in the code with `[IMAGE: ...]` comments and should be produced before the deck is shown in a boardroom:
   - `Slide04ClientSummary`, stakeholder diagram
   - `Slide24ContentSystem`, sample content grid
   - `SlideCreativeTreatment`, moodboard
3. **TBC data strips.** Three of the new slides carry `TBC` source notes that require SAMCA to confirm benchmarks or positioning claims before external use.
4. **Chunk size.** Vite warns that the main JS chunk is 790 kB. If this matters for presentation load time on Sun City venue wifi, split the deck into dynamic imports per section.

## Deployment

Production URL continues to be served at `https://mis-presentation.vercel.app`. The `vercel.json` fix from the prior session (routes to rewrites with a negative lookahead for asset paths) remains in place, so the next `vercel --prod` push will deploy the 39 slide deck cleanly.
