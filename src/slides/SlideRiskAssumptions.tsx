import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'

type Risk = { risk: string; likelihood: string; mitigation: string }

const risks: Risk[] = [
  {
    risk: 'Sponsor decisions delayed past 31 May',
    likelihood: 'Medium',
    mitigation: 'Six named sponsors approached in parallel. Tier 3 fallback at R750k preserves programme integrity if two top tiers slip.',
  },
  {
    risk: 'Government speaker withdrawal',
    likelihood: 'Medium',
    mitigation: 'Three confirmed government invitations per plenary slot. SAMCA liaison escalates at week 8 and week 10.',
  },
  {
    risk: 'Community delegate travel logistics',
    likelihood: 'Low to medium',
    mitigation: 'Transport and accommodation pre-booked at registration. Two community liaison leads on the ground in North West Province.',
  },
  {
    risk: 'Ad platform policy restriction (Meta, TikTok)',
    likelihood: 'Low',
    mitigation: 'Creative pre-approved against platform policies in week 1. LinkedIn and Google held as primary pipeline.',
  },
  {
    risk: 'Content production delay',
    likelihood: 'Low',
    mitigation: 'One Fireside Conversation produces five pieces in under four hours. Buffer of two weeks between shoot and publish.',
  },
]

const assumptions: string[] = [
  'SAMCA confirms the six named sponsor targets and opens introductions by week 2',
  'At least one Premier or MEC endorsement confirmed by week 4',
  'Three host community councils sign participation memoranda by week 6',
  'SAMCA retains final editorial sign-off on all outbound communications',
  'Atlas retainer and ad budget approved by end of April 2026',
]

export default function SlideRiskAssumptions() {
  return (
    <SlideFrame bg={brand.colors.lightBg} textColor={brand.colors.bodyText} showChrome pageNumber={36} totalPages={39}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.22em', color: brand.colors.amber, textTransform: 'uppercase' }}>
            Risks and assumptions
          </div>
          <h1 style={{ fontSize: 48, fontWeight: 600, color: brand.colors.darkGreen, margin: '12px 0 0 0', letterSpacing: '-0.01em', maxWidth: 1600 }}>
            What Atlas is watching, what Atlas is assuming
          </h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 32, maxWidth: '100%', flex: 1, minHeight: 0 }}>
          <div
            style={{
              background: brand.colors.sand,
              borderRadius: 6,
              overflow: 'hidden',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.5fr 1.6fr', background: brand.colors.gold, color: brand.colors.darkGreen, fontWeight: 600, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              <div style={{ padding: '10px 16px' }}>Risk</div>
              <div style={{ padding: '10px 16px', borderLeft: `1px solid ${brand.colors.darkGreen}22` }}>Likelihood</div>
              <div style={{ padding: '10px 16px', borderLeft: `1px solid ${brand.colors.darkGreen}22` }}>Mitigation</div>
            </div>
            {risks.map((r, i) => (
              <div
                key={r.risk}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.4fr 0.5fr 1.6fr',
                  background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.4)',
                  borderTop: `1px solid rgba(38,69,39,0.08)`,
                  fontSize: 13,
                }}
              >
                <div style={{ padding: '10px 16px', color: brand.colors.darkGreen, fontWeight: 500, lineHeight: 1.45 }}>{r.risk}</div>
                <div style={{ padding: '10px 16px', color: brand.colors.amber, fontWeight: 600, borderLeft: `1px solid rgba(38,69,39,0.08)` }}>{r.likelihood}</div>
                <div style={{ padding: '10px 16px', color: brand.colors.bodyText, lineHeight: 1.45, borderLeft: `1px solid rgba(38,69,39,0.08)` }}>{r.mitigation}</div>
              </div>
            ))}
          </div>

          <div
            style={{
              background: brand.colors.darkGreen,
              borderRadius: 6,
              padding: 24,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <div style={{ color: brand.colors.gold, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}>
              The plan assumes
            </div>
            <div style={{ height: 1, background: brand.colors.gold, opacity: 0.4 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {assumptions.map((a) => (
                <div key={a} style={{ display: 'grid', gridTemplateColumns: '14px 1fr', gap: 12, alignItems: 'start' }}>
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      background: brand.colors.gold,
                      borderRadius: 1,
                      marginTop: 8,
                    }}
                  />
                  <div style={{ color: brand.colors.sand, fontSize: 14, lineHeight: 1.5 }}>{a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: 'auto', color: brand.colors.mutedGreen, fontSize: 12, letterSpacing: '0.16em' }}>
          Source: Atlas delivery plan, risk register, April 2026
        </div>
      </div>
    </SlideFrame>
  )
}
