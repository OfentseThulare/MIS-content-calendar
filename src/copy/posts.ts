export type PostCopy = {
  id: string
  hook: string
  body: string
  cta: string
  hashtags: string[]
}

export const posts: Record<string, PostCopy> = {
  P01: {
    id: 'P01',
    hook: 'By the time you read this, three mining houses are already in the conversation.',
    body: 'For decades, the mining sector has been measured by what came out of the ground. The next decade will be measured by who is trusted to put it there.\n\nThe Mining Integration Summit 2026 is a three-day reset.\n20 to 22 July. Sun City. North West Province.\n\nMining houses, host communities, government, investors. One room. One agenda. Three days of structured dialogue that turns Social and Labour Plan commitments into shared prosperity, on record, in front of the people they answer to.\n\nThis is the room where licence to operate becomes evidence, and where the next generation of mining leadership is recognised by name.',
    cta: 'Sponsorship and delegate registration are open. Comment below or DM Sibusiso Nxumalo, SAMCA Executive Chairperson, to start a conversation.',
    hashtags: ['#MiningIntegrationSummit2026', '#SAMCA', '#SustainableHarmony'],
  },

  P02: {
    id: 'P02',
    hook: 'Seven percent of GDP. 450,000 jobs. One conversation that has not happened yet.',
    body: 'Mining contributes 7 to 8 percent of South African GDP and supports more than 450,000 direct jobs. Yet host communities in the platinum belt still report the highest unemployment in the country.\n\nMining Integration Summit 2026 puts mining houses, municipalities, traditional leadership, investors, and government around the same table for three days at Sun City.\n\nNot to assign blame. To structure the next decade.\n\nFour reasons this summit needs to exist, in the carousel.',
    cta: 'Save the dates: 20 to 22 July 2026. Register at the link in our profile.',
    hashtags: ['#MIS2026', '#ResponsibleMining', '#NorthWest'],
  },

  P03: {
    id: 'P03',
    hook: 'A mine without trust is a mine on borrowed time.',
    body: 'Strikes, blockades, court interdicts, halted production. The cost of mining without community trust now lands on the income statement, not the CSI report.\n\nThe operators getting this right share three habits: they show up before the contract is signed, they quantify community benefit at the same cadence as production, and they let the community measure them in public.\n\nMining Integration Summit 2026 is the platform for that public measurement. Sun City, 20 to 22 July.\n\nSomething to think about for any executive still treating community engagement as a CSI line item.',
    cta: 'Reply below if your operation has a story to tell on this. We are listening.',
    hashtags: ['#SocialLicence', '#MIS2026', '#MiningCommunities'],
  },

  P04: {
    id: 'P04',
    hook: 'The MIS 2026 sponsorship prospectus is now in market.',
    body: 'Six sponsorship positions. Six commercial opportunities to put your brand at the centre of the first integrated mining summit in the North West Province.\n\nTitle Sponsor: keynote framing rights, CEO Recognition Ceremony naming, Day 1 plenary stage.\nFive supporting sponsorships, each tied to a specific day, programme stream, or signature moment.\n\nFull tier breakdown and per-target ROI is in the prospectus.',
    cta: 'DM the SAMCA team to receive the prospectus and a personalised one-pager for your business.',
    hashtags: ['#MIS2026', '#SponsorshipOpportunity', '#SAMCA'],
  },

  P05: {
    id: 'P05',
    hook: 'Tonight at 7pm: what does sustainable harmony actually mean?',
    body: 'The MIS 2026 theme reads well on a poster. The harder question is what it looks like at a shaft head, in a council chamber, and on a community register.\n\nFireside Conversation 1, live tonight on LinkedIn at 7pm to 9pm. Practitioners from mining, community leadership, and provincial government share what is working and what is not.\n\nNo panel theatre. No sales pitches. Two hours of practical, on-record dialogue.',
    cta: 'Click attend on the event below. Recording goes out to registered MIS 2026 delegates first.',
    hashtags: ['#FiresideConversations', '#MIS2026', '#SustainableHarmony'],
  },

  P06: {
    id: 'P06',
    hook: 'Week 1, on the record: three sponsor conversations open, the Premier letter is in.',
    body: 'A short Friday note from the SAMCA team.\n\nThe MIS 2026 calendar is three days. The build is twelve weeks. This week we opened sponsor conversations with three of the six target mining houses, received the first endorsement letter from provincial government, and closed Fireside 1 with 412 live viewers.\n\nIf your business serves the mining sector and you have not seen the prospectus yet, this is the week to ask for it.',
    cta: 'Reply Prospectus and we will send it through.',
    hashtags: ['#MIS2026', '#WeeklyRecap', '#SAMCA'],
  },

  P07: {
    id: 'P07',
    hook: '60 seconds: the line from Fireside 1 that the platinum sector cannot ignore.',
    body: 'Pulled from last Thursday\'s live conversation. One of the panellists, a chair of council in a mining-impacted community, on what changes when an operator funds a council secretariat instead of a once-off bursary.\n\nThe answer surprised the mining executives in the room.',
    cta: 'Watch the full recording in the comments. MIS 2026 registration is open.',
    hashtags: ['#FiresideConversations', '#MIS2026', '#SocialLicence'],
  },

  P08: {
    id: 'P08',
    hook: 'B-BBEE on a slide is not B-BBEE on the ground.',
    body: 'Three things that change when local procurement targets are reported to the host community at the same cadence as they are reported to the DMRE.\n\nFirst, supply chain managers stop booking last-minute exemptions to hit the number. Second, the SMME pipeline shifts from cousins-of-cousins to verified local enterprises. Third, the community asks better questions because they have better data.\n\nMining Integration Summit 2026 builds the integration breakout that turns this from theory into practice. Day 1, 14:00.',
    cta: 'Tag a procurement or ESD lead who needs to be in that breakout.',
    hashtags: ['#BBBEE', '#LocalProcurement', '#MIS2026'],
  },

  P09: {
    id: 'P09',
    hook: 'The Premier of the North West has confirmed.',
    body: 'A formal endorsement letter from the Premier\'s office is now on file with SAMCA, confirming the North West Province as the host platform for the inaugural Mining Integration Summit.\n\nWhat this means for delegates: the SEZ pipeline, the platinum belt investment register, and the provincial procurement strategy all sit on the Day 1 plenary stage. Not as slideware. As open commitments.\n\nFull endorsement text in the comments.',
    cta: 'Register before 15 July to be in the room.',
    hashtags: ['#MIS2026', '#NorthWest', '#PremierEndorsement'],
  },

  P10: {
    id: 'P10',
    hook: 'Fireside 2, tonight at 7pm: the Premier\'s mandate, mining, and the SEZ pipeline.',
    body: 'Bojanala Platinum SEZ. Platinum Valley. The Rustenburg manufacturing corridor. Three live development pipelines, all dependent on the social licence the mining sector either earns or loses in the next 24 months.\n\nFireside Conversation 2 brings provincial officials, two SEZ developers, and a fund manager into the same room. Live on LinkedIn, 7pm to 9pm.',
    cta: 'Click attend below. Bring your questions to the Q and A.',
    hashtags: ['#FiresideConversations', '#MIS2026', '#SEZ'],
  },

  P11: {
    id: 'P11',
    hook: 'Week 3: the Premier confirmed, 100 registrations crossed, sponsor pipeline at four.',
    body: 'Three things to know from this week.\n\nThe Premier\'s endorsement is published. The MEC for Economic Development has agreed to keynote the Day 1 government panel. Delegate registrations have crossed 100, two months ahead of the close date.\n\nThe sponsor pipeline now sits at four active conversations against a target of six by 31 May.',
    cta: 'Register at the link below before the next reveal lands on Wednesday.',
    hashtags: ['#MIS2026', '#WeeklyRecap', '#SAMCA'],
  },

  P12: {
    id: 'P12',
    hook: '60 seconds with the Premier on what the North West needs from this summit.',
    body: 'The line that landed in last Thursday\'s Fireside.\n\nThe Premier on the difference between a mining province and a province that mines. One sentence. Print it.',
    cta: 'Full Fireside recording in comments. MIS 2026 registration in profile.',
    hashtags: ['#FiresideConversations', '#MIS2026', '#NorthWest'],
  },

  P13: {
    id: 'P13',
    hook: 'The next decade of mining will be measured in trust, not tonnage.',
    body: 'For 130 years, the South African mining sector has been measured by output. Carats, ounces, troy weight, tonnage shipped.\n\nThe operators with the highest valuations in 2030 will be the ones with the lowest community risk profile, the strongest local procurement record, and the most credible traditional leadership relationships.\n\nThat shift has already started. Mining Integration Summit 2026 is where it gets quantified, in front of the people who set capital allocations and the people who grant social licence.\n\nA personal note from Lee Du Preez, BeInnovation.',
    cta: 'Repost if this lands. The summit is at Sun City, 20 to 22 July.',
    hashtags: ['#MIS2026', '#ResponsibleMining', '#SocialLicence'],
  },

  P14: {
    id: 'P14',
    hook: 'The MEC for Economic Development is keynoting Day 1.',
    body: 'Provincial leadership is no longer a question mark on the MIS 2026 programme.\n\nThe MEC for Economic Development, North West Province, has confirmed as keynote speaker on the Day 1 government and community integration plenary, 20 July at Sun City.\n\nFor mining houses with operations or pipelines in the province, this is the room where the next 24 months of provincial procurement, SEZ activation, and community development reporting are framed.',
    cta: 'Register before the speaker reveal sequence completes next week.',
    hashtags: ['#MIS2026', '#NorthWest', '#GovernmentEndorsement'],
  },

  P15: {
    id: 'P15',
    hook: 'Fireside 3, tonight at 7pm: women in mining, the keynote conversation.',
    body: 'The Day 2 Women Leadership Keynote at MIS 2026 is one of the most asked-about sessions on the programme.\n\nTonight\'s Fireside is the warm-up. Three women who hold operating, procurement, and community engagement roles inside major mining houses share what changed for them, what did not, and what the next intake of women leaders need from the sector.\n\nLive on LinkedIn, 7pm to 9pm.',
    cta: 'Click attend below. The room benefits when more men turn up.',
    hashtags: ['#WomenInMining', '#FiresideConversations', '#MIS2026'],
  },

  P16: {
    id: 'P16',
    hook: 'Phase 1 closes today. Phase 2 starts Monday.',
    body: 'Four weeks in.\n\nPremier endorsement secured. MEC keynote confirmed. Three Fireside Conversations delivered. 134 delegate registrations on the books.\n\nFrom Monday, MIS 2026 enters the speaker and endorsement phase. Sponsor reveals. Mining house CEO confirmations. Traditional leadership endorsements. Twenty posts across four weeks, building toward the Day 1 plenary lineup.\n\nIf you have been watching from the sidelines, this is the week to register.',
    cta: 'Register before Monday\'s reveal lands.',
    hashtags: ['#MIS2026', '#PhaseTwo', '#SAMCA'],
  },

  P17: {
    id: 'P17',
    hook: '60 seconds from Fireside 3: the question every operator should be asking.',
    body: 'A clip from last Thursday\'s women in mining conversation.\n\nOne of the panellists, a senior procurement executive at a major platinum operator, on the question every CEO should be asking their HR director this quarter.\n\nIt is not about quotas.',
    cta: 'Full recording in comments. Day 2 Women Leadership Keynote at MIS 2026 picks this up live.',
    hashtags: ['#WomenInMining', '#MIS2026', '#FiresideConversations'],
  },

  P18: {
    id: 'P18',
    hook: 'Sponsor 1 confirmed. Title sponsorship of MIS 2026 is closed.',
    body: 'A major platinum operator with deep North West Province roots has signed as Title Sponsor of the Mining Integration Summit 2026. Logo lockup and sponsor announcement carousel below.\n\nThis confirms the CEO Recognition Ceremony naming, Day 1 plenary framing rights, and the keynote speaking position on 20 July. Full sponsor benefits package in the comments.\n\nFive supporting sponsorships remain open.',
    cta: 'DM the SAMCA team for the remaining tier breakdown.',
    hashtags: ['#MIS2026', '#TitleSponsor', '#SAMCA'],
  },

  P19: {
    id: 'P19',
    hook: 'A mining house CEO has confirmed the Day 1 keynote.',
    body: 'The opening keynote of the Mining Integration Summit, the Future of Mining in Africa address at 09:30 on 20 July, will be delivered by the CEO of one of South Africa\'s largest platinum operators.\n\nThe full speaker name is on the carousel below. The address sets the frame for three days of integrated dialogue between mining houses, government, communities, and investors.',
    cta: 'Register before the second CEO reveal lands next week.',
    hashtags: ['#MIS2026', '#KeynoteSpeaker', '#FutureOfMining'],
  },

  P20: {
    id: 'P20',
    hook: 'Fireside 4, tonight at 7pm: the CEO\'s perspective.',
    body: 'The newly-confirmed Day 1 keynote speaker joins us live tonight on LinkedIn for an hour of unscripted conversation.\n\nWhat changed in the last 18 months. What is keeping platinum CEOs awake. What the sector needs from the Premier, the unions, and the host communities by the end of 2026.\n\n7pm to 9pm. Q and A open.',
    cta: 'Click attend below. Bring one specific question.',
    hashtags: ['#FiresideConversations', '#MIS2026', '#MiningLeadership'],
  },

  P21: {
    id: 'P21',
    hook: 'Three sponsors confirmed against a target of six.',
    body: 'A short Friday update.\n\nTitle Sponsor signed. Two further sponsor commitments confirmed this week. Three sponsor conversations remain in active negotiation, all targeted to close by 31 May.\n\nDelegate registrations have crossed 165. Provincial government endorsements at three. The Day 1 keynote is locked.\n\nFour weeks to the sponsor target. Seven weeks to the registration close.',
    cta: 'Register before next week\'s sponsor reveal.',
    hashtags: ['#MIS2026', '#WeeklyRecap', '#SAMCA'],
  },

  P22: {
    id: 'P22',
    hook: '60 seconds with a mining CEO on what changes when a Premier shows up.',
    body: 'A clip from last Thursday\'s Fireside.\n\nThe newly-confirmed Day 1 keynote speaker on the difference between a mining indaba and a mining integration summit. One sentence. Worth the share.',
    cta: 'Full recording in comments.',
    hashtags: ['#MIS2026', '#FiresideConversations', '#MiningLeadership'],
  },

  P23: {
    id: 'P23',
    hook: 'Sponsor 2 confirmed. Investment partner of MIS 2026 is closed.',
    body: 'A South African development finance institution with a long mining and infrastructure track record has signed as Investment Partner of MIS 2026.\n\nThis confirms the Deal Room programming on Day 2, the investor briefing rooms across all three days, and the post-event impact report sponsorship.\n\nFour supporting sponsorships remain.',
    cta: 'DM the SAMCA team for the tier breakdown.',
    hashtags: ['#MIS2026', '#InvestmentPartner', '#DealRoom'],
  },

  P24: {
    id: 'P24',
    hook: 'A second mining house CEO has joined the Day 1 plenary.',
    body: 'The Day 1 plenary panel on the Future of Mining in Africa now has its second confirmed CEO, joining the keynote speaker and the Premier on stage at 09:30 on 20 July.\n\nFull biography and operating context on the carousel below. Two further CEO confirmations expected over the next ten days.',
    cta: 'Register before the next reveal.',
    hashtags: ['#MIS2026', '#KeynoteSpeaker', '#PlatinumBelt'],
  },

  P25: {
    id: 'P25',
    hook: 'Fireside 5, tonight at 7pm: the investor view.',
    body: 'The newly-confirmed Investment Partner brings the head of mining finance and a senior fund manager to the Fireside table tonight.\n\nWhy capital is moving toward operators with strong community engagement records. What the ESG due diligence checklist looks like in 2026. Where the sector is mispriced.\n\n7pm to 9pm. Live on LinkedIn.',
    cta: 'Click attend below.',
    hashtags: ['#FiresideConversations', '#MIS2026', '#MiningFinance'],
  },

  P26: {
    id: 'P26',
    hook: '200 delegates. The first major milestone is on the board.',
    body: 'Six weeks in. 200 delegate registrations confirmed.\n\nThe target is 500 to 600 by 19 July. The current registration mix runs across mining house executives, fund managers, government officials, traditional leadership, and SMME suppliers. Geographic spread is strongest in Rustenburg, Johannesburg, and Pretoria, with growing intake from Cape Town and Gqeberha.\n\nLast registrations close at midnight on 15 July.',
    cta: 'Reserve your seat at the link below.',
    hashtags: ['#MIS2026', '#WeeklyRecap', '#SAMCA'],
  },

  P27: {
    id: 'P27',
    hook: '60 seconds with a fund manager on the new mining due diligence.',
    body: 'A clip from last Thursday\'s investor Fireside.\n\nA senior fund manager on the three questions every mining due diligence team is now asking before allocating capital. Two of them did not exist five years ago.',
    cta: 'Full recording in comments.',
    hashtags: ['#MIS2026', '#FiresideConversations', '#MiningFinance'],
  },

  P28: {
    id: 'P28',
    hook: 'A council of 16 kings has endorsed the Mining Integration Summit.',
    body: 'A formal endorsement from the chair of the council of 16 kings is now on file. The chair will receive the keys to the Kings\' Honour Cocktail on the evening of 20 July at Sun City.\n\nThis is the first time a traditional leadership council has anchored a national mining summit at this level. The cocktail recognises the leadership of mining-impacted communities in front of mining house CEOs, provincial government, and investors.\n\nFull endorsement and protocol detail on the carousel.',
    cta: 'Register to be in the room on the evening of 20 July.',
    hashtags: ['#MIS2026', '#TraditionalLeadership', '#KingsHonourCocktail'],
  },

  P29: {
    id: 'P29',
    hook: 'Sponsor 3 confirmed. The North West partnership is anchored.',
    body: 'A regional partner with deep ties to provincial economic development has signed as Province Partner of MIS 2026, anchoring the Mayoral Golf Day on 22 July and the SMME Deal Room programming.\n\nThree sponsorships remain open. All target a 31 May close, seven days from now.',
    cta: 'DM the SAMCA team to discuss the remaining tiers.',
    hashtags: ['#MIS2026', '#NorthWest', '#ProvincePartner'],
  },

  P30: {
    id: 'P30',
    hook: 'Fireside 6, tonight at 7pm: host communities, what they need from this summit.',
    body: 'The most important Fireside on the calendar.\n\nThree community leaders from the Rustenburg, Moses Kotane, and Madibeng municipalities sit at the table tonight. Not panellists. Practitioners. The conversation runs without mining house representation, by design.\n\nThis is what mining houses, government, and investors need to hear before they walk into Day 1 at Sun City.\n\n7pm to 9pm. Live on LinkedIn.',
    cta: 'Click attend below.',
    hashtags: ['#FiresideConversations', '#MIS2026', '#HostCommunities'],
  },

  P31: {
    id: 'P31',
    hook: 'CEO Recognition Ceremony nominees are now public.',
    body: 'The Day 2 Gala Dinner at Sun City closes with the inaugural CEO Recognition Ceremony, honouring mining executives for measurable safety improvements and workforce investment over the past 24 months.\n\nThe nominee list and the methodology behind it are published in the carousel. Every nomination is backed by a public data source: DMRE returns, audited safety statistics, and SLP compliance reports.\n\nNo opinion. Evidence.',
    cta: 'Register for the Gala Dinner before tier pricing closes.',
    hashtags: ['#MIS2026', '#CEORecognition', '#MiningSafety'],
  },

  P32: {
    id: 'P32',
    hook: '60 seconds: the request from a community leader that no CEO can ignore.',
    body: 'A clip from last Thursday\'s host communities Fireside.\n\nOne of the speakers, a community leader from a mining-impacted municipality, on the single thing that would change the next decade of community engagement.\n\nIt is simpler than the sector wants to admit.',
    cta: 'Full recording in comments.',
    hashtags: ['#MIS2026', '#FiresideConversations', '#HostCommunities'],
  },

  P33: {
    id: 'P33',
    hook: 'Sponsor 4 confirmed. The supplier and OEM partner is locked.',
    body: 'A leading mining equipment manufacturer has signed as OEM Partner of MIS 2026, anchoring the Pan-African products and services exhibition across all three days.\n\nThis confirms the technology and innovation showcase, the SMME pairing programme, and the Day 2 Deal Room equipment briefings.\n\nTwo sponsorships remain.',
    cta: 'DM the SAMCA team for the remaining tier detail.',
    hashtags: ['#MIS2026', '#OEMPartner', '#MiningInnovation'],
  },

  P34: {
    id: 'P34',
    hook: 'Six universities and three research institutes have joined the Day 2 academia track.',
    body: 'The Day 2 Youth Forum panel at 11:15 now has its full academic and research lineup.\n\nWits, Pretoria, Witwatersrand School of Mining Engineering, North-West University, the Mandela Mining Precinct, and three independent research institutes are on the programme. Full lineup on the carousel.\n\nThe panel runs alongside the Youth Innovation Challenge finalists, who pitch live to the floor.',
    cta: 'Register before the speaker reveal sequence closes next week.',
    hashtags: ['#MIS2026', '#YouthForum', '#MiningResearch'],
  },

  P35: {
    id: 'P35',
    hook: 'Fireside 7, tonight at 7pm: academia and the next generation of mining engineers.',
    body: 'The dean of one of South Africa\'s leading mining engineering schools sits at the Fireside table tonight, with two final-year students and a head of HR from a major operator.\n\nWhat the next 10,000 mining engineers actually want from the sector. What the curriculum is missing. Where the bridge from campus to shaft head is broken, and how to fix it.\n\n7pm to 9pm.',
    cta: 'Click attend below.',
    hashtags: ['#FiresideConversations', '#MIS2026', '#MiningEducation'],
  },

  P36: {
    id: 'P36',
    hook: 'Phase 2 closes today. The full programme reveals next week.',
    body: 'Eight weeks in.\n\nFour sponsors confirmed against a target of six. Two CEO keynotes locked. Premier and MEC endorsements published. Council of 16 kings confirmed. Six universities and three research institutes on the academic panel. 285 delegate registrations on the books.\n\nFrom Monday, MIS 2026 enters the programme and urgency phase. Day 1, Day 2, Day 3 reveals. Countdown begins.',
    cta: 'Register before Monday\'s programme reveal lands.',
    hashtags: ['#MIS2026', '#PhaseThree', '#SAMCA'],
  },

  P37: {
    id: 'P37',
    hook: '60 seconds: the line from a mining engineering student that the sector needs to hear.',
    body: 'From last Thursday\'s Fireside.\n\nA final-year mining engineering student on what made her choose mining, what almost made her choose something else, and what the sector needs to do in the next 12 months to keep the next intake.',
    cta: 'Full recording in comments.',
    hashtags: ['#MIS2026', '#FiresideConversations', '#YouthInMining'],
  },

  P38: {
    id: 'P38',
    hook: 'Day 1 programme is live. The Future of Mining in Africa keynote is just the start.',
    body: 'Day 1 of MIS 2026 at Sun City, full session breakdown.\n\n09:30 Future of Mining in Africa keynote.\n11:45 Communities and Mining Panel: Traditional Leaders, Municipalities, NGOs.\n14:00 Integration Breakout Workshops: DMRE, Municipalities, Mines, Investors.\n19:00 Kings\' Honour Cocktail.\n\nFull session abstracts, speaker bios, and breakout assignments in the carousel.',
    cta: 'Register before the Day 2 reveal lands on Tuesday.',
    hashtags: ['#MIS2026', '#Day1Programme', '#SunCity'],
  },

  P39: {
    id: 'P39',
    hook: 'Sponsor 5 confirmed. The SMME and enterprise development partner is anchored.',
    body: 'A national youth development agency has signed as Enterprise Partner of MIS 2026, anchoring the SMME Deal Room programming on Day 2 and the post-event procurement matchmaking.\n\nThis confirms the SMME accreditation programme, the Day 2 Deal Room introductions, and the post-summit supplier register.\n\nOne sponsorship remains.',
    cta: 'DM the SAMCA team to close the final tier.',
    hashtags: ['#MIS2026', '#SMMEPartner', '#EnterpriseDevelopment'],
  },

  P40: {
    id: 'P40',
    hook: 'Fireside 8, tonight at 7pm: the Day 1 panel preview.',
    body: 'The four panellists on the Day 1 Communities and Mining session sit at the Fireside table tonight, in the same order they will sit at Sun City on 20 July.\n\nA traditional leader, a mayor, an NGO director, and a head of community engagement at a major operator.\n\nThis is the rehearsal in front of an audience.\n\n7pm to 9pm.',
    cta: 'Click attend below. Day 1 register link in profile.',
    hashtags: ['#FiresideConversations', '#MIS2026', '#Day1Preview'],
  },

  P41: {
    id: 'P41',
    hook: '24 days to Sun City.',
    body: 'Today is 24 days out from the Mining Integration Summit.\n\nThe full Day 1 programme is published. Five of six sponsors confirmed. 320 delegate registrations on the books. The countdown clock is now on the SAMCA LinkedIn page header.\n\nRegistrations close at midnight on 15 July.',
    cta: 'Reserve your seat at the link below.',
    hashtags: ['#MIS2026', '#Countdown', '#SAMCA'],
  },

  P42: {
    id: 'P42',
    hook: '60 seconds with a mayor on what the Day 1 panel changes.',
    body: 'A clip from last Thursday\'s Day 1 panel preview Fireside.\n\nThe mayor of one of the platinum belt municipalities on what changes when a national mining summit puts a community panel on the opening day plenary instead of the breakout track.\n\nTwo minutes of practical reality.',
    cta: 'Full recording in comments.',
    hashtags: ['#MIS2026', '#FiresideConversations', '#PlatinumBelt'],
  },

  P43: {
    id: 'P43',
    hook: 'Day 2 programme is live. The Women Leadership Keynote opens at 09:00.',
    body: 'Day 2 of MIS 2026 at Sun City, full session breakdown.\n\n09:00 Women in Mining: Women Leadership Keynote.\n11:15 Youth Forum Panel: MQA, Universities, HR, Youth.\n13:00 Deal Room: Investor and SMME pairing.\n15:00 Economic Impact: Mining and Regional Growth.\n19:00 Gala Dinner and CEO Recognition Ceremony.\n\nFull session abstracts and speaker bios in the carousel.',
    cta: 'Register before the Day 3 reveal lands on Tuesday.',
    hashtags: ['#MIS2026', '#Day2Programme', '#WomenInMining'],
  },

  P44: {
    id: 'P44',
    hook: 'Sponsor 6 confirmed. The full sponsor lineup is closed, eight days ahead of the deadline.',
    body: 'A district municipality with deep mining and infrastructure investment has signed as Mayoral Partner of MIS 2026, anchoring the Day 3 Mayoral Charity Golf Challenge.\n\nThis closes the six-sponsor target eight days ahead of the 31 May deadline. Full sponsor lineup on the carousel below: Title, Investment, Province, OEM, Enterprise, Mayoral.\n\nThank you to every team that backed this.',
    cta: 'Register to meet the full lineup at Sun City on 20 to 22 July.',
    hashtags: ['#MIS2026', '#SponsorLineup', '#MayoralPartner'],
  },

  P45: {
    id: 'P45',
    hook: 'Fireside 9, tonight at 7pm: Youth Forum preview, the next 20 years.',
    body: 'The Day 2 Youth Forum sits five university representatives and three Youth Innovation Challenge finalists at the same table.\n\nTonight\'s Fireside is the warm-up. The conversation focuses on what the next 20 years of mining careers, mining innovation, and mining-community relationships actually look like, from the people who will live them.\n\n7pm to 9pm.',
    cta: 'Click attend below.',
    hashtags: ['#FiresideConversations', '#MIS2026', '#YouthForum'],
  },

  P46: {
    id: 'P46',
    hook: '17 days to Sun City. Registration closes 15 July at midnight.',
    body: 'A short Friday note. Today is 17 days from the opening keynote at Sun City.\n\nFull sponsor lineup confirmed. Day 1 and Day 2 programmes published. Council of 16 kings endorsement on file. 380 delegate registrations on the books, against a target of 500 to 600.\n\nRegistration closes at midnight on 15 July. No exceptions on volume; access is gated by registration order from then.',
    cta: 'Register at the link below.',
    hashtags: ['#MIS2026', '#Countdown', '#SAMCA'],
  },

  P47: {
    id: 'P47',
    hook: '60 seconds with a Youth Innovation Challenge finalist on a problem the sector has not solved.',
    body: 'A clip from last Thursday\'s Youth Forum Fireside.\n\nOne of the three finalists pitching live at MIS 2026 on a tailings dam monitoring problem the sector has not solved at scale. The pitch deck is now circulating with two operators.',
    cta: 'Full recording in comments.',
    hashtags: ['#MIS2026', '#YouthInnovation', '#FiresideConversations'],
  },

  P48: {
    id: 'P48',
    hook: 'Day 3 programme is live. The Mayoral Golf Day closes the summit.',
    body: 'Day 3 of MIS 2026, the Mayoral Charity Golf Challenge at Sun City, co-hosted with Bojanala Platinum District Municipality.\n\n07:30 Tee-off, four-ball format, mining house and government pairings.\n12:30 Lunch and networking.\n14:30 Closing ceremony, charity hand-over, MIS 2027 announcement.\n\nFull pairing list and golf day sponsor activations on the carousel.',
    cta: 'Reserve a four-ball at the link below.',
    hashtags: ['#MIS2026', '#MayoralGolfDay', '#Bojanala'],
  },

  P49: {
    id: 'P49',
    hook: 'The Kings\' Honour Cocktail invitation list is locked.',
    body: 'The 20 July evening cocktail at Sun City recognises the chair of the council of 16 kings and the traditional leadership of the Rustenburg, Moses Kotane, Madibeng, and Kgetlengrivier communities.\n\nThe invitation list is now closed. The protocol document, dress code, and arrival schedule are with confirmed delegates.\n\nThe Kings\' Honour Cocktail is one room, one evening, and the most important hour of MIS 2026.',
    cta: 'Confirmed delegates: check inbox for protocol detail.',
    hashtags: ['#MIS2026', '#KingsHonourCocktail', '#TraditionalLeadership'],
  },

  P50: {
    id: 'P50',
    hook: 'Fireside 10, tonight at 7pm: the Kings\' Honour Cocktail, why it matters.',
    body: 'The chair of the council of 16 kings, two senior chiefs, and a community development director sit at the final Fireside table tonight.\n\nThe conversation is about what the Kings\' Honour Cocktail signals to the mining sector, the provincial government, and the next generation of community leadership.\n\nThis is the last Fireside before Sun City.\n\n7pm to 9pm.',
    cta: 'Click attend below.',
    hashtags: ['#FiresideConversations', '#MIS2026', '#KingsHonour'],
  },

  P51: {
    id: 'P51',
    hook: '10 days to Sun City. The last paid push is live.',
    body: 'Today is 10 days from the opening keynote.\n\n420 delegate registrations on the books. 80 registrations to the lower bound of the target. Registration closes at midnight on 15 July.\n\nThe full LinkedIn ad budget is now on conversion. Anyone who has been touched by the outreach sequence and has not registered will see this post on their feed three times in the next five days.\n\nNo more reveals. Just the last call.',
    cta: 'Register before the close at midnight on 15 July.',
    hashtags: ['#MIS2026', '#Countdown', '#LastCall'],
  },

  P52: {
    id: 'P52',
    hook: '60 seconds with the chair of the council of 16 kings on what 20 July evening means.',
    body: 'A clip from last Thursday\'s final Fireside.\n\nThe chair on the difference between recognition that fits in a press release and recognition that holds for the next decade. One sentence. Replay it.',
    cta: 'Full recording in comments. Last 9 days to register.',
    hashtags: ['#MIS2026', '#KingsHonourCocktail', '#FiresideConversations'],
  },

  P53: {
    id: 'P53',
    hook: 'Final speaker confirmations and the full programme PDF are now public.',
    body: 'The MIS 2026 programme is locked.\n\n47 speakers across three days. 18 sessions. Six confirmed sponsors. Council of 16 kings on the Kings\' Honour Cocktail. Six universities and three research institutes on the Youth Forum. Full Day 1, Day 2, and Day 3 schedule.\n\nPDF in the carousel below. Save it, print it, bring it.',
    cta: 'Register at the link before midnight on 15 July.',
    hashtags: ['#MIS2026', '#FullProgramme', '#SAMCA'],
  },

  P54: {
    id: 'P54',
    hook: 'Registration closes tonight at midnight.',
    body: 'Today is the last day to register for the Mining Integration Summit 2026.\n\n465 delegate registrations on the books, in line with the lower target. Doors open at Sun City on Monday at 08:00. Late arrivals on the day, subject to availability and a higher walk-up rate.\n\nIf you have been thinking about it, this is the post that ends the thinking.',
    cta: 'Register at the link below before midnight tonight.',
    hashtags: ['#MIS2026', '#FinalCall', '#SAMCA'],
  },

  P55: {
    id: 'P55',
    hook: 'Doors open Monday at 08:00. Here is what the next three days look like.',
    body: 'A short Friday note before Sun City.\n\nMonday 20 July: Day 1 industry, government, and community integration. Kings\' Honour Cocktail in the evening.\nTuesday 21 July: Day 2 women, youth, investment. Gala Dinner and CEO Recognition Ceremony.\nWednesday 22 July: Day 3 Mayoral Charity Golf Day, closing ceremony, and MIS 2027 announcement.\n\nThe SAMCA team will publish live updates from the floor across all three days.',
    cta: 'Follow the page for live coverage from Sun City.',
    hashtags: ['#MIS2026', '#OpensMonday', '#SunCity'],
  },

  P56: {
    id: 'P56',
    hook: 'Live from Sun City. Day 1 of the Mining Integration Summit is open.',
    body: 'The keynote is in. The room is full. Day 1 of the inaugural Mining Integration Summit 2026 is live at Sun City, North West Province.\n\nLive updates, panel highlights, and signature moments will publish on this page across the next three days.\n\nFor everyone who registered, see you on the floor. For everyone who is following remotely, the full event recap and impact report goes out on 5 August.',
    cta: 'Follow this page for live updates.',
    hashtags: ['#MIS2026', '#LiveFromSunCity', '#SAMCA'],
  },
}
