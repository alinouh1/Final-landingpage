'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  FaGlobe, 
  FaLocationDot, 
  FaCalendarDays, 
  FaBars, 
  FaXmark, 
  FaCheck, 
  FaCompass, 
  FaFolder, 
  FaChevronDown, 
  FaCrosshairs, 
  FaUsers, 
  FaRocket, 
  FaCalendarDays as FaCalendar, 
  FaLayerGroup, 
  FaImage, 
  FaImages, 
  FaFilm, 
  FaChartLine, 
  FaBullhorn, 
  FaFilter, 
  FaChartSimple, 
  FaUserTie, 
  FaListCheck, 
  FaHandshake, 
  FaFolderOpen, 
  FaCircle, 
  FaUser, 
  FaBrain,
  FaCopy,
  FaPenNib,
  FaPeopleGroup,
  FaPeopleArrows
} from 'react-icons/fa6';

const ICON_COPY = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
const ICON_CHECK = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

const chapters = [
  { 
    title: 'Foundation & Strategy', 
    icon: 'fa-compass', 
    items: [
      {
        id: 'positioning', 
        num: '01', 
        label: 'Positioning', 
        icon: 'fa-crosshairs', 
        subs: [
          { id: 'uvp', label: 'UVP' },
          { id: 'vision-mission', label: 'Vision & Mission' },
          { id: 'pillars', label: 'Content Pillars' },
        ]
      },
      {
        id: 'audience', 
        num: '02', 
        label: 'Audience & Funnel', 
        icon: 'fa-users', 
        subs: [
          { id: 'audience-deep', label: 'Target Audience' },
          { id: 'funnel', label: 'Marketing Funnel' },
        ]
      },
      { id: 'tov', num: '03', label: 'CONTENT STRATEGY CORE', icon: 'fa-pen-nib' },
    ]
  },
  { 
    title: 'Launch Plan', 
    icon: 'fa-rocket', 
    items: [
      { id: 'timeline', num: '04', label: 'Timeline', icon: 'fa-calendar-days' },
    ]
  },
  { 
    title: 'Ready-to-Execute Content', 
    icon: 'fa-layer-group', 
    items: [
      { id: 'statics', num: '05', label: 'Post', icon: 'fa-image' },
      { id: 'carousels', num: '06', label: 'Carousel', icon: 'fa-images' },
      { id: 'reels', num: '07', label: 'Reel', icon: 'fa-film' },
    ]
  },
  { 
    title: 'Ads & Performance', 
    icon: 'fa-chart-line', 
    items: [
      { id: 'ads', num: '09', label: 'Ads', icon: 'fa-bullhorn' },
      { id: 'conversion', num: '10', label: 'Conversion', icon: 'fa-filter' },
      { id: 'tracking', num: '11', label: 'Tracking', icon: 'fa-chart-simple' },
    ]
  },
  { 
    title: 'Team Operations', 
    icon: 'fa-people-group', 
    items: [
      { id: 'roles', num: '12', label: 'Roles', icon: 'fa-user-tie' },
      { id: 'checklist', num: '13', label: 'Checklist', icon: 'fa-list-check' },
      { id: 'handoff', num: '14', label: 'Handoff', icon: 'fa-handshake' },
      { id: 'resources', num: '15', label: 'Resources', icon: 'fa-folder-open' },
    ]
  },
];

const pillarsData = [
  {
    number: '01',
    title: 'Educational & Strategy Content',
    purpose: 'Position Growth Station as a strategic authority by educating the audience on how real, results-driven marketing works.',
    focus: [
      'Simplifying complex marketing concepts into actionable insights',
      'Explaining frameworks, strategies, and growth methodologies',
      'Teaching business owners how to think beyond execution',
    ],
    examples: [
      '"Why posting daily won\'t grow your business"',
      '"The difference between marketing strategy & content execution"',
      'Step-by-step growth frameworks',
    ],
    value: 'Builds credibility from zero, establishes thought leadership, and shifts the audience mindset toward strategy-first marketing.',
  },
  {
    number: '02',
    title: 'Strategic Thinking & Analysis (High-Authority Pillar)',
    purpose: 'Demonstrate expertise by showcasing how Growth Station thinks, analyzes, and solves real marketing challenges.',
    focus: [
      'Breaking down successful & failed campaigns',
      'Analyzing brands (Egypt & GCC)',
      'Explaining the "why" behind results',
    ],
    examples: [
      '"Why this brand is dominating the Saudi market"',
      '"What this campaign did wrong (and how to fix it)"',
      'Reverse-engineering successful brands',
    ],
    value: 'Builds authority without needing clients, proves strategic depth, and positions the agency as a problem-solver — not just a service provider.',
  },
  {
    number: '03',
    title: 'Market & Growth Insights (Regional Positioning Pillar)',
    purpose: 'Establish Growth Station as a regional expert with deep understanding of both Egyptian and GCC markets.',
    focus: [
      'Market trends and shifts',
      'Differences between Egypt & GCC audiences',
      'Business growth opportunities and challenges',
    ],
    examples: [
      '"Key differences between Egyptian & UAE consumers"',
      '"Top growth opportunities for brands in Saudi Arabia"',
      'Industry-specific insights',
    ],
    value: 'Strengthens regional positioning, attracts higher-quality clients, and builds trust with businesses looking to scale beyond borders.',
  },
  {
    number: '04',
    title: 'Proof & Authority Building (Trust Pillar)',
    purpose: 'Gradually build trust and credibility through visible proof of expertise — even without heavy case studies.',
    focus: [
      'Frameworks & proprietary methodologies',
      'Behind-the-scenes processes',
      'Early wins, experiments, and insights',
      'Thought process over just results',
    ],
    examples: [
      '"How we build a marketing strategy from scratch"',
      '"Our client onboarding process"',
      '"Before/After (even if small wins)"',
    ],
    value: 'Bridges the gap of missing case studies, builds trust over time, and prepares the audience for conversion.',
  },
];

const tovSlidesData = [
  {
    number: '01',
    title: 'Visual & Brand Identity Strategy',
    body: `
      <div class="color-swatches">
        <span class="color-swatch" style="background:#111111" title="Black"></span>
        <span class="color-swatch" style="background:#ffffff" title="White"></span>
        <span class="color-swatch" style="background:var(--gold)" title="Gold"></span>
      </div>
      <div class="tov-slide-block">
        <div class="tov-slide-block-label">Colors</div>
        <p>Black, White & Gold — symbolizing sophistication, luxury, professionalism, and authority.</p>
      </div>
      <div class="tov-slide-block">
        <div class="tov-slide-block-label">Style</div>
        <p>Modern, clean, minimalist, and highly professional; aligned with the aesthetics of both Egyptian and GCC markets.</p>
      </div>
    `,
  },
  {
    number: '02',
    title: 'Tone of Voice',
    body: `
      <div class="tov-quote">
        <p>"Confident, expert, approachable, and persuasive — communicates authority and trust."</p>
      </div>
    `,
  },
  {
    number: '03',
    title: 'Design Direction',
    body: `
      <div class="tov-slide-block">
        <ul>
          <li>High-quality realistic imagery combined with clean icons, minimalistic graphics, and subtle motion elements.</li>
          <li>Emphasis on clarity, visual hierarchy, and actionable messaging.</li>
          <li>Reflects credibility, premium service, and results-driven professionalism.</li>
          <li>Gold highlights to emphasize key elements, achievements, and strategic insights.</li>
        </ul>
      </div>
    `,
  },
  {
    number: '04',
    title: 'What May Change?',
    body: `
      <div class="tov-slide-block">
        <ul>
          <li>Adjust messaging and content based on audience engagement and feedback.</li>
          <li>Explore new platforms for the Saudi, UAE, and Kuwaiti markets.</li>
          <li>Refine campaigns using real-time performance data.</li>
        </ul>
      </div>
    `,
  },
  {
    number: '05',
    title: 'If Performance Drops',
    body: `
      <div class="tov-slide-block">
        <ul>
          <li>Analyze causes: platform choice, content type, timing, or targeting.</li>
          <li>Redesign campaigns focusing on educational, value-driven content.</li>
          <li>Test varied content formats: Reels, Carousels, Infographics, and Short Videos.</li>
          <li>Reassess market gaps and adapt strategy to exploit new opportunities.</li>
        </ul>
      </div>
    `,
  },
];

const assetData = {
  statics: [
    { 
      number: '01', 
      type: 'Post 01', 
      date: 'D-3',
      goal: 'Awareness', 
      stage: 'Awareness', 
      audience: 'General audience', 
      usage: 'Organic + Paid seed',
      design: '[Image placeholder: هنا هنعمل مكان لصوره هنخطها بعدين]',
      caption: 'Caption: Our Slogan',
      note: 'TOV: Your success partner should be Growth Station',
      objective: 'Awareness',
      tov: 'Our Slogan | Image placeholder: هنا هحط image',
      customCaption: 'Your success partner should be',
      hasCustomLayout: true
    },
    { 
      number: '02', 
      type: 'Post 02', 
      date: 'D0',
      goal: 'Conversion', 
      stage: 'Launch', 
      audience: 'Interested audience', 
      usage: 'Paid',
      design: '[Image placeholder: هنا هيبقي مكان لصوره بردوا]',
      caption: 'Caption: تم تفعيل وضع : بعد العيد وكل سنة وانتم طيبين',
      note: 'IN: تنشر قبل العيد ب كذا يوم | TOV: بعد العيد',
      hasCustomLayout: true,
      in: 'تنشر قبل العيد ب كذا يوم',
      tov: 'بعد العيد |  Image placeholder:',
      customCaption: 'تم تفعيل وضع : بعد العيد وكل سنة وانتم طيبين'
    },
  ],
  carousels: [
    { 
      number: '01', 
      type: 'Carousel 01', 
      date: 'W1',
      objective: 'Awareness & Educational',
      design: 'slide 1: إزاي توصل من 10 آﻻف لـ 100 ألف متابع\nslide 2: ﺑﺠﺪ ! ﻫﻤﺎ ﻗﺎﻟﻮﻟﻚ إن الموﻀﻮع ﺑﺎﻟﺒﺴﺎﻃﺔ دي؟\nslide 3: اﻟﺤﻘﻴﻘﺔ إن دي ﺧﺪﻋﺔ ﻛﺒﻴﺮة . ﻟﻮ ﻛﺎﻧﺖ ﺑﺎﻟﺴﻬﻮﻟﺔ دي ، ﻛﺎن ﻛﻞ اﻟﻠﻲ وعنده درع اﻟﻤﻠﻴﻮن\n" إﻧﻔﻠﻮﻧﺴﺮ ﻣﺎﺷﻲ ﻓﻲ اﻟﺸﺎرع دﻟﻮﻗﺘﻲ ﺑﻘﻰ\nslide 4: ﺷﺮﻛﺎت اﻟﻤﺎرﻛﺘﻴﻨﺞ ﺑﺘﺒﻴﻌﻠﻚ اﻟﻮﻫﻢ ﺗﺤﺖ ﻣﺴﻤﻰ " اﻟﻨﻤﻮ اﻟﺴﺮﻳﻊ " ﺑﻴﻮﻫﻤﻮك إن ﻓﻴﻪ " زرار ﺳﺤﺮي " أو " ﺗﺮﻳﻜﺎﻳﺔ ﻣﻌﻴﻨﺔ " ﻫﺘﺨﻠﻲ ﺣﺴﺎﺑﻚ ﻳﻨﻔﺠﺮ ﻓﻲ أﺳﺒﻮع\nslide 5: اﻟﺤﻘﻴﻘﺔ اﻟﻤﺮة ؟ اﻟﻤﺘﺎﺑﻌﻴﻦ اﻟﻠﻲ ﺑﻴﻴﺠﻮا ﺑﻀﻐﻄﺔ زرار ﻫﻤﺎ اﻟﻠﻲ ﺑﻴﺪﻓﻨﻮا ﺣﺴﺎﺑﻚ ﻟﻸﺑﺪ . اﻟﺨﻮارزﻣﻴﺎت ﻣﺶ ﻏﺒﻴﺔ؛ ﻫﻲ ﺑﺘﺪور ﻋﲆ ﺗﻔﺎﻋﻞ ﺣﻘﻴﻘﻲ ﻣﺶ أرﻗﺎم ﻣﻴﺘﺔ\nslide 6: ﻟﻮ ﻋﺎﻳﺰ ﺗﻜﺒﺮ ﺑﺠﺪ وﺑﺸﻜﻞ ﻣﻨﻄﻘﻲ ؟ ف اﻟﻤﻌﺎدﻟﺔ ﺑﺴﻴﻄﺔ :\nقيمة حقيقية بتحل مشكلة ✅\nاستمرار مرضي لجمهورك ✅\nفهم دقيق لللي جمهورك محتاجه فعلاً مش اللي أنت عايز تقوله✅\nslide 7:\n   لو عايز تبني إمبراطورية مش مجرد رقم على الشاشة، بطّل تدور على السهل .. اعمل فولو لو عايز تعرف إزاي تبني جمهور حقيقي بيشتري منك مش بس ﺑﻴﺘﻔﺮج ﻋﻠﻴﻚ',
      note: '[Internal note: client approves the copy before design starts]',
      hasCustomLayout: true 
    },
  ],
  reels: [
    { 
      number: '01', 
      type: 'Reel 01', 
      date: 'D-7',
      goal: 'Reach', 
      stage: 'Awareness', 
      audience: 'Broad audience', 
      usage: 'Organic',
      design: 'Stay Tuned ..',
      caption: '[Short caption that completes the idea visually]\n\n[CTA — follow us / share]',
      note: '',
      hasCustomLayout: true,
      objective: 'Awareness',
      reelLink: 'https://www.instagram.com/reels/Cous8R1uSPr/',
      isEidLayout: false
    },
    { 
      number: '02', 
      type: 'Reel 02', 
      date: 'W2',
      goal: 'Engagement', 
      stage: 'Consideration', 
      audience: 'Active follower', 
      usage: 'Organic + Retargeting',
      design: 'لو انت اللي بتكتب وتصور وتعمل المونتاچ ؟\nيبقي أكيد فيه حاجة غلط ..\nخليها علينا وإدي العيش لخبازه\nلإن كل اللي براندك محتاجه — موجود في مكان واحد',
      caption: '[Caption that opens a discussion in the comments]',
      note: '',
      hasCustomLayout: true,
      objective: 'Awareness',
      scriptLink: 'https://docs.google.com/document/d/1TbTe-yyqFmNc_w6xfLLZ_hQTbaI4XugRUM5cmRtvzCs/edit?pli=1&tab=t.0',
      isEidLayout: false
    },
    { 
      number: '03', 
      type: 'Reel 03', 
      date: 'W3',
      goal: 'Engagement', 
      stage: 'Consideration', 
      audience: 'Active follower', 
      usage: 'Organic + Retargeting',
      design: 'اﻟﻤﺎرﻛﺘﻨﺞ ﻓﻲ ﻣﺼﺮ ﻣﺶ رﻓﺎﻫﻴﺔ ! ده " أداة ﺑﻘﺎء "\nواﻟﺘﺴﻮﻳﻖ اﻟﺼﺢ ﻫﻮ اﻟﻠﻲ ﺑﻴﺤﻮل اﻟﺰﺣﻤﺔ ﻟﻔﺮص ، واﻟﻤﻨﺎﻓﺴﺔ ﻟﺴﻴﻄﺮة',
      caption: '[Caption that opens a discussion in the comments]',
      note: '',
      hasCustomLayout: true,
      objective: 'Educational & Awareness',
      scriptLink: 'https://docs.google.com/document/d/1uGEj0n3pvINcVe2dYBTKv52enpru8bzicT9mlptnIqM/edit?tab=t.0',
      isEidLayout: false
    },
    { 
      number: '04', 
      type: 'Reel 04', 
      date: 'W4',
      goal: 'Engagement', 
      stage: 'Consideration', 
      audience: 'Active follower', 
      usage: 'Organic + Retargeting',
      design: 'ﻓﻲ اﻟﻌﺼﺮ اﻟﺤﺎﻟﻲ .. اﻟﻠﻲ ﺑﻴﻌﺮف ﻳﻮﺻﻞ ﻟﻠﻨﺎس ﻫﻮ اﻟﻠﻲ ﺑﻴﻜﺴﺐ\nف ﻟﻮ ﻋﺎﻳﺰ ﺗﺒﻨﻲ ﺑﻴﺰﻧﺲ ﺣﻘﻴﻘﻲ ! ﻻزم ﺗﺒﻨﻲ " ﺑﺮاﻧﺪ " ﻓﻲ ﻋﻘﻮل اﻟﻨﺎس اﻷول .\nاﻋﻤﻞ ﻓﻮﻟﻮ ﻋﺸﺎن ﺗﻌﺮف أﺳﺮار اﻟﺒﻴﺰﻧﺲ اﻟﻠﻲ ﻣﺒﻴﻘﻮﻟﻮﻫﺎش ﻟﻴﻚ ﻓﻲ اﻟﻜﺘﺐ.',
      caption: '[Caption that opens a discussion in the comments]',
      note: '',
      hasCustomLayout: true,
      objective: 'Educational',
      scriptLink: 'https://docs.google.com/document/d/1EVPHiatS6hquICoNSvr5MhBAWpA_Ac_6ka7fUT0RDYU/edit?tab=t.0',
      isEidLayout: false
    },
    { 
      number: '05', 
      type: 'Reel 05', 
      date: 'W5',
      goal: 'Engagement', 
      stage: 'Consideration', 
      audience: 'Active follower', 
      usage: 'Organic + Retargeting',
      design: 'ﺗﻔﺘﻜﺮ ﻟﻴﻪ Gen_Z ﻋﺎﻣﻠﻴﻦ ﻣﺸﺎﻛﻞ ﻓﻲ اﻟﺸﻐﻞ ؟',
      caption: '[Caption that opens a discussion in the comments]',
      note: '',
      hasCustomLayout: true,
      objective: 'Educational',
      scriptLink: 'https://docs.google.com/document/d/1ELj9kru61xYtjYnQssJdlrA7gisXHlhoGxh-V7OJkN8/edit?tab=t.0',
      isEidLayout: false
    },
    { 
      number: '06', 
      type: 'Reel 06', 
      date: 'W6',
      goal: 'Engagement', 
      stage: 'Consideration', 
      audience: 'Active follower', 
      usage: 'Organic + Retargeting',
      design: 'اﻟﺴﻮق ﺑﻘﻰ زﺣﻤﺔ ؟\nاﻟﻜﻞ ﺑﻴﻘﻠﺪ ﺑﻌﻀﻪ ؟\nﻫﻘﻮﻟﻚ إزاي ﺗﺨﺮج ﺑﺮا اﻟﺰﺣﻤﺔ دي ﻓﻲ 60 ﺛﺎﻧﻴﺔ',
      caption: '[Caption that opens a discussion in the comments]',
      note: '',
      hasCustomLayout: true,
      objective: 'Educational',
      scriptLink: 'https://docs.google.com/document/d/1zGs6X3s1Itd70Jb0ZcCGTTyho4U7Q-Ww0DgyBOTBYuQ/edit?tab=t.0',
      isEidLayout: false
    },
    { 
      number: '07', 
      type: 'Reel 07', 
      date: 'W7',
      goal: 'Engagement', 
      stage: 'Consideration', 
      audience: 'Active follower', 
      usage: 'Organic + Retargeting',
      design: 'ﻋﻴﺪﻛﻢ ﻣﺒﺎرك\nأﻋﺎده ﷲ ﻋﻠﻴﻨﺎ وﻋﻠﻴﻜﻢ ﺑﺎﻟﻴﻤﻦ واﻟﺒﺮﻛﺎت',
      caption: '[Caption that opens a discussion in the comments]',
      note: '',
      hasCustomLayout: true,
      in: 'ﻧﺒﺪل ﺷﺨﺼﻴﺔ اﻟﺮاﺟﻞ ﺑﺎﻟﻜﺎرﻛﺘﺮ ﺑﺘﺎﻋﻨﺎ',
      tov: 'ﻋﻴﺪ أﺿﺤﻲ ﻣﺒﺎرك | Image placeholder: هنا هحط image',
      isEidLayout: true
    },
    { 
      number: '08', 
      type: 'Reel 08', 
      date: 'W8',
      goal: 'Engagement', 
      stage: 'Consideration', 
      audience: 'Active follower', 
      usage: 'Organic + Retargeting',
      design: 'إﻧﺴﻰ ﻛﻮرﺳﺎت اﻟﻤﺎرﻛﺘﻨﺞ ..\nاﻟﻔﺮاﻋﻨﺔ ﻫﻢ اﻟﻠﻲ اﺧﺘﺮﻋﻮا اﻟـ Viral Content',
      caption: '[Caption that opens a discussion in the comments]',
      note: '',
      hasCustomLayout: true,
      objective: 'Educational',
      scriptLink: 'https://docs.google.com/document/d/1tUPLPn-aXY6hJnhSLLLzq-MUGzZsP9I101H_DLmsLpo/edit?tab=t.0',
      isEidLayout: false
    },
  ],
};

const checklistData = [
  '[Client approves positioning and tone of voice]',
  '[Prepare and approve all Post and Carousel assets]',
  '[Film and edit the Reels and Hero Video]',
  '[Set up and test Tracking (Pixel / GA4)]',
  '[Replace any placeholder number or link with real data]',
  '[Approve the ad budget and spend schedule]',
];

function getIcon(iconName: string) {
  const iconMap: Record<string, any> = {
    'fa-compass': FaCompass,
    'fa-folder': FaFolder,
    'fa-crosshairs': FaCrosshairs,
    'fa-users': FaUsers,
    'fa-rocket': FaRocket,
    'fa-calendar-days': FaCalendar,
    'fa-layer-group': FaLayerGroup,
    'fa-image': FaImage,
    'fa-images': FaImages,
    'fa-film': FaFilm,
    'fa-chart-line': FaChartLine,
    'fa-bullhorn': FaBullhorn,
    'fa-filter': FaFilter,
    'fa-chart-simple': FaChartSimple,
    'fa-user-tie': FaUserTie,
    'fa-list-check': FaListCheck,
    'fa-handshake': FaHandshake,
    'fa-folder-open': FaFolderOpen,
    'fa-circle': FaCircle,
    'fa-pen-nib': FaPenNib,
    'fa-people-group': FaPeopleGroup,
    'fa-people-arrows': FaUsers,
  };
  return iconMap[iconName] || FaCircle;
}

function copyText(text: string, btn: HTMLButtonElement, doneLabel: string) {
  const done = () => {
    btn.classList.add('copied');
    const original = btn.innerHTML;
    btn.innerHTML = doneLabel;
    setTimeout(() => { 
      btn.classList.remove('copied'); 
      btn.innerHTML = original; 
    }, 1500);
  };
  
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done).catch(() => {
      // Fallback for clipboard errors
      const ta = document.createElement('textarea');
      ta.value = text; 
      document.body.appendChild(ta); 
      ta.select();
      try { 
        document.execCommand('copy'); 
        done();
      } catch (err) {
        console.error('Copy failed', err);
      }
      document.body.removeChild(ta); 
    });
  } else {
    // Fallback for older browsers
    const ta = document.createElement('textarea');
    ta.value = text; 
    document.body.appendChild(ta); 
    ta.select();
    try { 
      document.execCommand('copy'); 
      done();
    } catch (err) {
      console.error('Copy failed', err);
    }
    document.body.removeChild(ta); 
  }
}

export default function LandingPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [activePillar, setActivePillar] = useState(0);
  const [activeTovSlide, setActiveTovSlide] = useState(0);
  const [activeAsset, setActiveAsset] = useState({ statics: 0, carousels: 0, reels: 0 });
  
  const sidebarRef = useRef<HTMLDivElement>(null);
  const pillarsScrollRef = useRef<HTMLDivElement>(null);
  const tovScrollRef = useRef<HTMLDivElement>(null);
  const assetScrollRefs = useRef<Record<string, HTMLDivElement>>({});

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (window.innerWidth <= 980) {
        closeSidebar();
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 980) {
        setSidebarOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeSidebar();
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      rootMargin: '-160px 0px -60% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const allSections = chapters.flatMap(g => g.items).map(i => document.getElementById(i.id)).filter(Boolean);
    const allSubsections = chapters.flatMap(g => g.items).flatMap(i => i.subs || []).map(s => document.getElementById(s.id)).filter(Boolean);

    allSections.forEach(el => el && observer.observe(el));
    allSubsections.forEach(el => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (pillarsScrollRef.current) {
      const cards = Array.from(pillarsScrollRef.current.children) as HTMLElement[];
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const idx = cards.indexOf(entry.target as HTMLElement);
          if (entry.isIntersecting && idx > -1) {
            setActivePillar(idx);
          }
        });
      }, { root: pillarsScrollRef.current, threshold: 0.6 });

      cards.forEach(card => observer.observe(card));
      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    if (tovScrollRef.current) {
      const slides = Array.from(tovScrollRef.current.children) as HTMLElement[];
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const idx = slides.indexOf(entry.target as HTMLElement);
          if (entry.isIntersecting && idx > -1) {
            setActiveTovSlide(idx);
          }
        });
      }, { root: tovScrollRef.current, threshold: 0.6 });

      slides.forEach(slide => observer.observe(slide));
      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    Object.keys(assetScrollRefs.current).forEach(key => {
      const scrollRef = assetScrollRefs.current[key];
      if (scrollRef) {
        const cards = Array.from(scrollRef.children) as HTMLElement[];
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            const idx = cards.indexOf(entry.target as HTMLElement);
            if (entry.isIntersecting && idx > -1) {
              setActiveAsset(prev => ({ ...prev, [key]: idx }));
            }
          });
        }, { root: scrollRef, threshold: 0.6 });

        cards.forEach(card => observer.observe(card));
        return () => observer.disconnect();
      }
    });
  }, []);

  const renderSidebar = () => (
    <aside 
      ref={sidebarRef}
      className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`} 
      id="sidebarPanel"
    >
      <div className="sidebar-mobile-header">
        <span className="sidebar-mobile-title">Menu</span>
        <button 
          className="sidebar-close-btn" 
          onClick={closeSidebar}
          type="button"
          aria-label="Close menu"
        >
          <FaXmark />
        </button>
      </div>
      <div className="sidebar-inner" id="sidebar">
        {chapters.map((group, groupIndex) => (
          <div key={groupIndex} className="sidebar-group">
            <button 
              className="sidebar-group-title"
              onClick={() => {
                if (group.items[0]) {
                  scrollToSection(group.items[0].id);
                }
              }}
            >
              <span className="title-text">
                {React.createElement(getIcon(group.icon), { className: 'title-icon' })}
                <span>{group.title}</span>
              </span>
              <FaChevronDown className="chevron" />
            </button>
            <div className="sidebar-group-body">
              {group.items.map((item) => (
                <div key={item.id}>
                  <button
                    className={`sidebar-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    <span className="label-wrap">
                      {React.createElement(getIcon(item.icon), { className: 'item-icon' })}
                      <span>{item.label}</span>
                    </span>
                    <span className="num">{item.num}</span>
                  </button>
                  {item.subs && item.subs.length > 0 && (
                    <div className="sidebar-sublinks">
                      {item.subs.map((sub) => (
                        <button
                          key={sub.id}
                          className={`sidebar-sublink ${activeSection === sub.id ? 'active' : ''}`}
                          onClick={() => scrollToSection(sub.id)}
                        >
                          <span>{sub.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );

  const renderMobileNav = () => (
    <div className="mobile-nav" id="mobileNav">
      {chapters.flatMap(g => g.items).map((item) => (
        <button
          key={item.id}
          className={activeSection === item.id ? 'active' : ''}
          onClick={() => scrollToSection(item.id)}
        >
          {item.num} {item.label}
        </button>
      ))}
    </div>
  );

  const renderPillars = () => (
    <>
      <p className="pillars-hint">4 pillars — use the numbers or scroll to move through them.</p>
      <div className="pillars-pagination" id="pillarsPagination">
        {pillarsData.map((_, index) => (
          <button
            key={index}
            className={`pillar-num-btn ${activePillar === index ? 'active' : ''}`}
            onClick={() => {
              const cards = pillarsScrollRef.current?.children;
              if (cards && cards[index]) {
                (cards[index] as HTMLElement).scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
              }
            }}
          >
            {pillarsData[index].number}
          </button>
        ))}
      </div>
      <div className="pillars-scroll" id="pillarsScroll" ref={pillarsScrollRef}>
        {pillarsData.map((item, index) => (
          <div
            key={index}
            className={`pillar-card ${activePillar === index ? 'highlighted' : ''}`}
          >
            <div className="pillar-head">
              <div className="pillar-num">{item.number}</div>
              <h4>{item.title}</h4>
            </div>
            <div className="pillar-block">
              <div className="pillar-block-label">Purpose</div>
              <p>{item.purpose}</p>
            </div>
            <div className="pillar-block">
              <div className="pillar-block-label">Content Focus</div>
              <ul>{item.focus.map((f, i) => <li key={i}>{f}</li>)}</ul>
            </div>
            <div className="pillar-block">
              <div className="pillar-block-label">Examples</div>
              <ul>{item.examples.map((e, i) => <li key={i}>{e}</li>)}</ul>
            </div>
            <div className="pillar-block">
              <div className="pillar-block-label">Value</div>
              <p>{item.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="strategic-note">
        <h5>Strategic Note (Important)</h5>
        <p style={{ fontSize: '13.5px', lineHeight: '1.85', color: 'rgba(10,50,6,.75)', marginBottom: '10px' }}>
          This pillar structure is designed to:
        </p>
        <ul>
          <li>Replace lack of portfolio with strong thinking</li>
          <li>Build authority before scale</li>
          <li>Attract high-quality clients, not random leads</li>
        </ul>
        <p className="closing">Growth Station doesn't sell marketing … it sells strategic thinking.</p>
      </div>
    </>
  );

  const renderTovSlides = () => (
    <>
      <p className="tov-slides-hint">5 slides — brand identity, tone, design direction & contingency plans. Use the numbers or scroll to move through them.</p>
      <div className="tov-slides-pagination" id="tovPagination">
        {tovSlidesData.map((_, index) => (
          <button
            key={index}
            className={`tov-slide-num-btn ${activeTovSlide === index ? 'active' : ''}`}
            onClick={() => {
              const slides = tovScrollRef.current?.children;
              if (slides && slides[index]) {
                (slides[index] as HTMLElement).scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
              }
            }}
          >
            {tovSlidesData[index].number}
          </button>
        ))}
      </div>
      <div className="tov-slides-scroll" id="tovScroll" ref={tovScrollRef}>
        {tovSlidesData.map((item, index) => (
          <div
            key={index}
            className={`tov-slide ${activeTovSlide === index ? 'highlighted' : ''}`}
          >
            <div className="tov-slide-head">
              <div className="tov-slide-num">{item.number}</div>
              <h4>{item.title}</h4>
            </div>
            <div dangerouslySetInnerHTML={{ __html: item.body }} />
          </div>
        ))}
      </div>
    </>
  );

  const renderAssetChapter = (mountId: string, items: any[]) => {
    const activeIndex = activeAsset[mountId as keyof typeof activeAsset] || 0;

    return (
      <div id={`chapter-${mountId}`}>
        <div className="asset-toolbar">
          <p>Swipe left/right or use the numbers to move between posts — every card has a full brief and copy buttons</p>
        </div>
        <div className="asset-pagination">
          {items.map((_, index) => (
            <button
              key={index}
              className={`asset-num-btn ${activeIndex === index ? 'active' : ''}`}
              onClick={() => {
                const scrollRef = assetScrollRefs.current[mountId];
                if (scrollRef) {
                  const cards = scrollRef.children;
                  if (cards && cards[index]) {
                    (cards[index] as HTMLElement).scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
                  }
                }
              }}
            >
              {items[index].number}
            </button>
          ))}
        </div>
        <div 
          className="asset-scroll" 
          ref={(el) => { if (el) assetScrollRefs.current[mountId] = el; }}
          dir="ltr"
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={`asset-card ${activeIndex === index ? 'highlighted' : ''}`}
            >
              <div className="asset-card-head">
                <span className="asset-badge">{item.type}</span>
                <span className="asset-date">{item.date}</span>
                <button 
                  className="asset-copy-btn" 
                  type="button"
                  onClick={(e) => {
                    let text = '';
                    if (item.hasCustomLayout) {
                      if (item.type === 'Post 01') {
                        text = `${item.type} — ${item.date}\nobjective: ${item.objective}\nTOV: ${item.tov}\n\nCaption:\n${item.customCaption}`;
                      } else if (item.type === 'Carousel 01') {
                        text = `${item.type} — ${item.date}\nobjective: ${item.objective}\n\nDesign Text:\n${item.design}`;
                      } else if (item.type === 'Post 02') {
                        text = `${item.type} — ${item.date}\nIN: ${item.in}\n\nTOV:\n${item.tov}\n\nCaption:\n${item.customCaption}`;
                      } else if (item.type.startsWith('Reel')) {
                        if (item.isEidLayout) {
                          text = `${item.type} — ${item.date}\nIN: ${item.in}\n\nTOV:\n${item.tov}\n\nCaption:\n${item.design}`;
                        } else {
                          text = `${item.type} — ${item.date}\nobjective: ${item.objective}\n\nCaption:\n${item.design}`;
                          if (item.scriptLink) {
                            text += `\n\nScript Link:\n${item.scriptLink}`;
                          }
                          if (item.reelLink) {
                            text += `\n\nReel Link:\n${item.reelLink}`;
                          }
                        }
                      }
                    } else {
                      text = `${item.type} — ${item.date}\nGoal: ${item.goal}\nStage: ${item.stage}\nAudience: ${item.audience}\n\nDesign Text:\n${item.design}\n\nFinal Caption:\n${item.caption}`;
                    }
                    copyText(text, e.currentTarget, 'Copied');
                  }}
                >
                  Copy All
                </button>
              </div>
              {item.hasCustomLayout ? (
                <>
                  {item.type === 'Post 01' ? (
                    <>
                      <div className="asset-meta-row">
                        <div className="asset-meta">
                          <div className="asset-meta-label">objective</div>
                          <div className="asset-meta-value">{item.objective}</div>
                        </div>
                        <div className="asset-meta">
                          <div className="asset-meta-label">TOV</div>
                          <div className="asset-meta-value">{item.tov}</div>
                        </div>
                      </div>
                      <div className="asset-text-box">
                        <div className="asset-text-label">
                          <span>Caption</span>
                          <button 
                            className="mini-copy" 
                            data-field="customCaption" 
                            type="button"
                            onClick={(e) => copyText(item.customCaption, e.currentTarget, 'Copied')}
                          >
                            Copy
                          </button>
                        </div>
                        <div className="asset-text-body">
                          {item.customCaption.split('\n').map((l: string, i: number) => <p key={i}>{l}</p>)}
                        </div>
                      </div>
                    </>
                  ) : item.type.startsWith('Reel') ? (
                    <>
                      {item.isEidLayout ? (
                        <>
                          <div className="asset-meta-row">
                            <div className="asset-meta">
                              <div className="asset-meta-label">IN</div>
                              <div className="asset-meta-value">{item.in}</div>
                            </div>
                          </div>
                          <div className="asset-text-box">
                            <div className="asset-text-label">
                              <span>TOV</span>
                            </div>
                            <div className="asset-text-body">
                              {item.tov.split('\n').map((l: string, i: number) => <p key={i}>{l}</p>)}
                            </div>
                          </div>
                          <div className="asset-text-box">
                            <div className="asset-text-label">
                              <span>Caption</span>
                              <button 
                                className="mini-copy" 
                                data-field="design" 
                                type="button"
                                onClick={(e) => copyText(item.design, e.currentTarget, 'Copied')}
                              >
                                Copy
                              </button>
                            </div>
                            <div className="asset-text-body">
                              {item.design.split('\n').map((l: string, i: number) => <p key={i}>{l}</p>)}
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="asset-meta-row">
                            <div className="asset-meta">
                              <div className="asset-meta-label">objective</div>
                              <div className="asset-meta-value">{item.objective}</div>
                            </div>
                          </div>
                          <div className="asset-text-box">
                            <div className="asset-text-label">
                              <span>Caption</span>
                              <button 
                                className="mini-copy" 
                                data-field="design" 
                                type="button"
                                onClick={(e) => copyText(item.design, e.currentTarget, 'Copied')}
                              >
                                Copy
                              </button>
                            </div>
                            <div className="asset-text-body">
                              {item.design.split('\n').map((l: string, i: number) => <p key={i}>{l}</p>)}
                            </div>
                          </div>
                          {item.scriptLink && (
                            <div className="asset-text-box">
                              <div className="asset-text-label">
                                <span>SCRIPT</span>
                              </div>
                              <div className="asset-text-body">
                                <a 
                                  href={item.scriptLink} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="reel-link-button"
                                >
                                  📄 Open Google Docs Script
                                </a>
                              </div>
                            </div>
                          )}
                          {item.reelLink && (
                            <div className="asset-text-box">
                              <div className="asset-text-label">
                                <span>Watch Reel</span>
                              </div>
                              <div className="asset-text-body">
                                <a 
                                  href={item.reelLink} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="reel-link-button"
                                >
                                  📱 Open Instagram Reel
                                </a>
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </>
                  ) : item.type === 'Carousel 01' ? (
                    <>
                      <div className="asset-meta-row">
                        <div className="asset-meta">
                          <div className="asset-meta-label">objective</div>
                          <div className="asset-meta-value">{item.objective}</div>
                        </div>
                      </div>
                      <div className="asset-text-box">
                        <div className="asset-text-label">
                          <span>Design Text</span>
                          <button 
                            className="mini-copy" 
                            data-field="design" 
                            type="button"
                            onClick={(e) => copyText(item.design, e.currentTarget, 'Copied')}
                          >
                            Copy
                          </button>
                        </div>
                        <div className="asset-text-body">
                          {item.design.split('\n').map((l: string, i: number) => <p key={i}>{l}</p>)}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="asset-meta-row">
                        <div className="asset-meta">
                          <div className="asset-meta-label">IN</div>
                          <div className="asset-meta-value">{item.in}</div>
                        </div>
                      </div>
                      <div className="asset-text-box">
                        <div className="asset-text-label">
                          <span>TOV</span>
                        </div>
                        <div className="asset-text-body">
                          {item.tov.split('\n').map((l: string, i: number) => <p key={i}>{l}</p>)}
                        </div>
                      </div>
                      <div className="asset-text-box">
                        <div className="asset-text-label">
                          <span>Caption</span>
                          <button 
                            className="mini-copy" 
                            data-field="customCaption" 
                            type="button"
                            onClick={(e) => copyText(item.customCaption, e.currentTarget, 'Copied')}
                          >
                            Copy
                          </button>
                        </div>
                        <div className="asset-text-body">
                          {item.customCaption.split('\n').map((l: string, i: number) => <p key={i}>{l}</p>)}
                        </div>
                      </div>
                    </>
                  )}
                </>
              ) : (
                <>
                  {item.hasCustomLayout ? (
                    <>
                      <div className="asset-meta-row">
                        <div className="asset-meta">
                          <div className="asset-meta-label">objective</div>
                          <div className="asset-meta-value">{item.objective}</div>
                        </div>
                      </div>
                      <div className="asset-text-box">
                        <div className="asset-text-label">
                          <span>Design Text</span>
                          <button 
                            className="mini-copy" 
                            data-field="design" 
                            type="button"
                            onClick={(e) => copyText(item.design, e.currentTarget, 'Copied')}
                          >
                            Copy
                          </button>
                        </div>
                        <div className="asset-text-body">
                          {item.design.split('\n').map((l: string, i: number) => <p key={i}>{l}</p>)}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="asset-meta-row">
                        <div className="asset-meta">
                          <div className="asset-meta-label">Goal</div>
                          <div className="asset-meta-value">{item.goal}</div>
                        </div>
                        <div className="asset-meta">
                          <div className="asset-meta-label">Stage</div>
                          <div className="asset-meta-value">{item.stage}</div>
                        </div>
                        <div className="asset-meta">
                          <div className="asset-meta-label">Audience</div>
                          <div className="asset-meta-value">{item.audience}</div>
                        </div>
                        <div className="asset-meta">
                          <div className="asset-meta-label">Usage</div>
                          <div className="asset-meta-value">{item.usage}</div>
                        </div>
                      </div>
                      <div className="asset-text-box">
                        <div className="asset-text-label">
                          <span>Design Text</span>
                          <button 
                            className="mini-copy" 
                            data-field="design" 
                            type="button"
                            onClick={(e) => copyText(item.design, e.currentTarget, 'Copied')}
                          >
                            Copy
                          </button>
                        </div>
                        <div className="asset-text-body">
                          {item.design.split('\n').map((l: string, i: number) => <p key={i}>{l}</p>)}
                        </div>
                      </div>
                      <div className="asset-text-box">
                        <div className="asset-text-label">
                          <span>Final Caption</span>
                          <button 
                            className="mini-copy" 
                            data-field="caption" 
                            type="button"
                            onClick={(e) => copyText(item.caption, e.currentTarget, 'Copied')}
                          >
                            Copy
                          </button>
                        </div>
                        <div className="asset-text-body">
                          {item.caption.split('\n').map((l: string, i: number) => <p key={i}>{l}</p>)}
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}
              {item.note && <div className="asset-note team-only">{item.note}</div>}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="topbar">
        <div className="topbar-left">
          <button 
            className="menu-toggle-btn" 
            onClick={toggleSidebar}
            type="button" 
            aria-label="Open menu" 
            aria-expanded={sidebarOpen}
            aria-controls="sidebarPanel"
          >
            {sidebarOpen ? <FaXmark /> : <FaBars />}
          </button>
          <button className="btn-pill light" onClick={() => window.print()}>Print</button>
          <button className="btn-pill dark" onClick={() => window.print()}>PDF</button>
        </div>
        <div className="topbar-right">
          <img src="/logo.svg" alt="Growth Station Logo" className="logo-image" />
        </div>
      </div>

      <div 
        className={`sidebar-overlay ${sidebarOpen ? 'visible' : ''}`} 
        onClick={closeSidebar}
        id="sidebarOverlay"
      />

      {renderSidebar()}

      <section className="hero-block">
        <div className="hero-inner">
          <div className="hero-eyebrow">GROWTH STATION · LAUNCH PLAYBOOK</div>
          <h1 className="hero-title">Growth Station — The Complete Launch Playbook, From Strategy to the Last Ready-to-Publish Post</h1>
          <div className="hero-meta">
            <a href="https://growthstationco.com"><span className="hero-chip"><FaGlobe /> [growthstation.com]</span></a>
            <span className="hero-chip"><FaLocationDot /> Cairo</span>
            <span className="hero-chip"><FaCalendarDays /> [Launch date]</span>
          </div>
          <button 
            className="hero-cta" 
            onClick={() => document.getElementById('positioning')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start with Positioning
          </button>
        </div>
      </section>

      <div className="page-wrap">
        {renderMobileNav()}

        <div className="layout">
          <div className="content" id="content">
            {/* CHAPTER 01 — FOUNDATION */}
            <div className="chapter-title">01–03 · Foundation & Strategy</div>

            <section className="card-section" id="positioning">
              <div className="section-header">
                <div className="section-num">01</div>
                <div className="section-heading">
                  <h3>Positioning</h3>
                  <p>Who is Growth Station?</p>
                </div>
              </div>
              <div className="about-content" dir="ltr">
                <p className="about-lead">Growth Station is a Cairo-based digital marketing agency built on a single, non-negotiable principle: strategy must come before execution.</p>
                <div className="about-body">
                  <p>We are not a production house that simply posts content and calls it marketing. We are a Brand &amp; Growth Partner — a strategic ally that integrates deeply into our clients' businesses to build powerful brands and drive measurable, sustainable growth.</p>
                  <p>Founded in Nasr City, Cairo, Growth Station serves small and medium enterprises (SMEs) and ambitious startups across Egypt and the GCC region. With a regional vision, we aim to support businesses in scaling beyond local markets and competing effectively in dynamic, fast-growing economies.</p>
                </div>
                <div className="about-pull">We exist to bridge the gap between agencies that only execute and the kind of strategic marketing businesses in Egypt and the Gulf truly need to grow, scale, and lead.</div>
                <div className="about-facts">
                  <span className="about-fact"><FaLocationDot /> Nasr City, Cairo</span>
                  <span className="about-fact"><FaCrosshairs /> SMEs &amp; ambitious startups</span>
                  <span className="about-fact"><FaGlobe /> Egypt &amp; the GCC region</span>
                </div>
              </div>

              <div className="subblock" id="uvp" dir="ltr">
                <div className="subblock-eyebrow">Unique Value Proposition (UVP)</div>
                <div className="about-body">
                  <p>Growth Station is not just another marketing agency. We are a Brand &amp; Growth Partner that seamlessly integrates strategy, execution, and measurable outcomes to drive sustainable business growth. We empower companies in Egypt and the GCC to scale, strengthen their brand positioning, and achieve consistent ROI.</p>
                </div>
                <div className="quote-block">
                  <p>"Strategy before execution. Growth beyond borders."</p>
                </div>
                <div className="subblock-label">Key Differentiators:</div>
                <div className="diff-list">
                  <div className="diff-item"><span className="tick"><FaCheck /></span><span><strong>Strategy-driven approach:</strong> every campaign starts with a tailored growth plan.</span></div>
                  <div className="diff-item"><span className="tick"><FaCheck /></span><span>Focus on measurable outcomes, not vanity metrics.</span></div>
                  <div className="diff-item"><span className="tick"><FaCheck /></span><span>Expertise in both local and regional markets (Egypt + GCC).</span></div>
                  <div className="diff-item"><span className="tick"><FaCheck /></span><span>Emphasis on building long-term client partnerships over short-term engagements.</span></div>
                </div>
              </div>

              <div className="subblock" id="vision-mission" dir="ltr">
                <div className="subblock-eyebrow">Vision &amp; Mission</div>
                <div className="vm-grid">
                  <div className="vm-card">
                    <h5>Vision</h5>
                    <p>We are building a future where every ambitious business in Egypt and the GCC finds a partner who thinks about their growth with the same seriousness they do — where strategy is not a luxury, and results are not a promise, they are a standard. That is the future we are building toward. Every client. Every campaign. Every day.</p>
                  </div>
                  <div className="vm-card">
                    <h5>Mission</h5>
                    <p>We exist to build — real strategies, real systems, real growth. We fight for the businesses that deserve more, push harder than anyone expects, and do not stop until the numbers move.</p>
                    <p className="tagline">Our Promise: Your growth is not a project to us. It is a commitment.</p>
                  </div>
                  <div className="vm-card">
                    <h5>What We Stand For</h5>
                    <p>We believe every ambitious business deserves a partner who thinks before they act — and owns the outcome, not just the output. We show up prepared, not reactive. Every strategy we build is tailored to your business, every decision is rooted in data, and every result is measured against what actually moves your growth forward. No guesswork. No inflated reports. No wasted budget. Just clear thinking, precise execution, and outcomes you can hold us accountable for. Because behind every number we track — there is a business someone gave everything to build.</p>
                  </div>
                </div>
              </div>

              <div className="subblock" id="pillars" dir="ltr">
                <div className="subblock-eyebrow">Strategic Content Pillars</div>
                {renderPillars()}
              </div>
            </section>

            <section className="card-section" id="audience">
              <div className="section-header">
                <div className="section-num">02</div>
                <div className="section-heading">
                  <h3>Audience & Funnel</h3>
                  <p>Who sees it, who gets convinced, and who converts into a client</p>
                </div>
              </div>
              <div className="subblock" id="audience-deep" dir="ltr" style={{ marginTop: '26px', paddingTop: '0', borderTop: 'none' }}>
                <div className="subblock-eyebrow">Target Audience (Deep Level)</div>
                <div className="about-body">
                  <p>Growth Station targets ambitious business owners and decision-makers who are looking for strategic growth, brand positioning, and measurable results, not just marketing execution. The agency's approach resonates with clients both in Egypt and the GCC region (Saudi Arabia, UAE, Kuwait).</p>
                </div>

                <div className="audience-grid">
                  <div className="audience-card">
                    <div className="audience-card-head"><span className="icon"><FaUser /></span><span>Demographics</span></div>
                    <div className="aud-row"><span className="aud-label">Age</span><span className="aud-value">25 – 45 years</span></div>
                    <div className="aud-row"><span className="aud-label">Gender</span><span className="aud-value">Male &amp; Female</span></div>
                    <div className="aud-row"><span className="aud-label">Education</span><span className="aud-value">University graduates or higher</span></div>
                    <div className="aud-row"><span className="aud-label">Occupation</span><span className="aud-value"><ul><li>Business Owners</li><li>Founders / Co-founders</li><li>Marketing Managers</li><li>Managing Directors</li></ul></span></div>
                    <div className="aud-row"><span className="aud-label">Income Level</span><span className="aud-value">Medium to high income, capable of investing in professional marketing services</span></div>
                    <div className="aud-row"><span className="aud-label">Business Type</span><span className="aud-value"><ul><li>Small to Medium-sized Businesses (SMBs)</li><li>Established startups with validated products/services</li></ul></span></div>
                    <div className="aud-row"><span className="aud-label">Location</span><span className="aud-value"><ul><li>Egypt: Cairo (Nasr City, New Cairo, Heliopolis, Maadi), Alexandria, 6th of October</li><li>GCC: Saudi Arabia, UAE, Kuwait — focus on urban business hubs like Riyadh, Jeddah, Dubai, Abu Dhabi, Kuwait City</li></ul></span></div>
                  </div>

                  <div className="audience-card">
                    <div className="audience-card-head"><span className="icon"><FaBrain /></span><span>Psychographics</span></div>
                    <div className="aud-row"><span className="aud-label">Mindset</span><span className="aud-value">Growth-oriented, ambitious, results-driven</span></div>
                    <div className="aud-row"><span className="aud-label">Core Values</span><span className="aud-value"><ul><li>Business scalability and revenue growth</li><li>Strong brand presence</li><li>Professionalism and credibility</li></ul></span></div>
                    <div className="aud-row"><span className="aud-label">Interests</span><span className="aud-value"><ul><li>Business development</li><li>Marketing trends and strategies</li><li>Expanding market reach beyond local borders</li></ul></span></div>
                    <div className="aud-row"><span className="aud-label">Attitude Towards Marketing</span><span className="aud-value"><ul><li>Values strategic guidance over mere execution</li><li>Open to innovative approaches that deliver measurable ROI</li></ul></span></div>
                    <div className="aud-row"><span className="aud-label">Personality Traits</span><span className="aud-value"><ul><li>Decision-makers under pressure</li><li>Efficiency-focused, time-conscious</li><li>Open to cross-border partnerships and regional growth</li></ul></span></div>
                  </div>
                </div>
              </div>

              <div className="subblock" id="funnel" dir="ltr">
                <div className="subblock-eyebrow">Marketing Funnel</div>
                <div className="funnel-flow">
                  <div className="funnel-stage">
                    <div className="funnel-stage-num">01</div>
                    <h4>Awareness</h4>
                    <p>Introduce Growth Station &amp; its value through educational content, targeting ambitious business owners in Egypt &amp; GCC. Builds credibility and brand recognition.</p>
                  </div>
                  <div className="funnel-stage">
                    <div className="funnel-stage-num">02</div>
                    <h4>Engagement</h4>
                    <p>Convert awareness into trust by sharing methodology, mini case studies, and insights. Encourages interactions via DMs, comments, and consultations.</p>
                  </div>
                  <div className="funnel-stage">
                    <div className="funnel-stage-num">03</div>
                    <h4>Conversion</h4>
                    <p>Turn qualified leads into clients with strategic service packages, trial consultations, and proposals. Focus on measurable ROI and closing deals.</p>
                  </div>
                  <div className="funnel-stage">
                    <div className="funnel-stage-num">04</div>
                    <h4>Retention &amp; Loyalty</h4>
                    <p>Ensure repeat business and referrals through continuous value, performance reports, and exclusive insights. Strengthens long-term partnerships.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="card-section" id="tov">
              <div className="section-header">
                <div className="section-num">03</div>
                <div className="section-heading">
                  <h3>CONTENT STRATEGY CORE</h3>
                  <p>Writing rules that prevent overselling and protect client trust</p>
                </div>
              </div>

              <div className="subblock" dir="ltr" style={{ marginTop: '0', paddingTop: '0', borderTop: 'none' }}>
                {renderTovSlides()}
              </div>
            </section>

            {/* CHAPTER 02 — LAUNCH PLAN */}
            <div className="chapter-title">04 · Launch Plan</div>

            <section className="card-section" id="timeline">
              <div className="section-header">
                <div className="section-num">04</div>
                <div className="section-heading">
                  <h3>Timeline</h3>
                  <p>Posting order from before launch through two weeks after</p>
                </div>
              </div>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Timing</th><th>Idea</th><th>Asset</th><th>Spend</th></tr></thead>
                  <tbody>
                    <tr><td>D-7</td><td>[Pre-launch teaser]</td><td>Reel 01</td><td>Organic</td></tr>
                    <tr><td>D-3</td><td>[The project's why / the problem we're solving]</td><td>Post 01</td><td>Organic</td></tr>
                    <tr><td>D0</td><td>[Official launch announcement]</td><td>Hero + Post 02</td><td>Paid + Organic</td></tr>
                    <tr><td>W1</td><td>[Social proof / first result]</td><td>Carousel 01</td><td>Paid + Organic</td></tr>
                    <tr><td>W2</td><td>[Addressing the most common objection]</td><td>Reel 02</td><td>Organic + Retargeting</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* CHAPTER 03 — CONTENT */}
            <div className="chapter-title">05–08 · Ready-to-Execute Content</div>

            <section className="card-section" id="statics">
              <div className="section-header">
                <div className="section-num">05</div>
                <div className="section-heading">
                  <h3>Post</h3>
                  <p>Full brief for every post: goal, audience, copy, and caption</p>
                </div>
              </div>
              {renderAssetChapter('statics', assetData.statics)}
            </section>

            <section className="card-section" id="carousels">
              <div className="section-header">
                <div className="section-num">06</div>
                <div className="section-heading">
                  <h3>Carousel</h3>
                  <p>Short educational sequences, card by card</p>
                </div>
              </div>
              {renderAssetChapter('carousels', assetData.carousels)}
            </section>

            <section className="card-section" id="reels">
              <div className="section-header">
                <div className="section-num">07</div>
                <div className="section-heading">
                  <h3>Reel</h3>
                  <p>Filming and editing brief for every short video</p>
                </div>
              </div>
              {renderAssetChapter('reels', assetData.reels)}
            </section>

            {/* CHAPTER 04 — PERFORMANCE */}
            <div className="chapter-title">09–11 · Ads & Performance</div>

            <section className="card-section" id="ads">
              <div className="section-header">
                <div className="section-num">09</div>
                <div className="section-heading">
                  <h3>Ads</h3>
                  <p>Paid campaigns, budget, and targeting</p>
                </div>
              </div>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Campaign</th><th>Stage</th><th>Budget</th><th>Goal</th></tr></thead>
                  <tbody>
                    <tr><td>[Awareness campaign]</td><td><span className="stage-badge stage-awareness">Awareness</span></td><td>[EGP XX,XXX/month]</td><td>Reach + video views</td></tr>
                    <tr><td>[Consideration campaign]</td><td><span className="stage-badge stage-consideration">Consideration</span></td><td>[EGP XX,XXX/month]</td><td>Engagement + page visits</td></tr>
                    <tr><td>[Conversion campaign]</td><td><span className="stage-badge stage-conversion">Conversion</span></td><td>[EGP XX,XXX/month]</td><td>Leads + calls</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="card-section" id="conversion">
              <div className="section-header">
                <div className="section-num">10</div>
                <div className="section-heading">
                  <h3>Conversion</h3>
                  <p>The person's journey from seeing the ad to reaching out</p>
                </div>
              </div>
              <div className="def-list">
                <div className="def-row"><div className="def-label">Step 1</div><div className="def-value">[Sees the ad and clicks it]</div></div>
                <div className="def-row"><div className="def-label">Step 2</div><div className="def-value">[Lands on the landing page / form]</div></div>
                <div className="def-row"><div className="def-label">Step 3</div><div className="def-value">[Leaves their info or reaches out via WhatsApp]</div></div>
                <div className="def-row"><div className="def-label">Step 4</div><div className="def-value">[Sales team follows up within [X] hours]</div></div>
              </div>
            </section>

            <section className="card-section" id="tracking">
              <div className="section-header">
                <div className="section-num">11</div>
                <div className="section-heading">
                  <h3>Tracking</h3>
                  <p>What we measure and with what</p>
                </div>
              </div>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Event</th><th>Triggered when</th><th>Tool</th></tr></thead>
                  <tbody>
                    <tr><td>Lead</td><td>[Form submission]</td><td>[Meta Pixel / GTM]</td></tr>
                    <tr><td>WhatsApp Click</td><td>[Tap on WhatsApp button]</td><td>[GA4 Event]</td></tr>
                    <tr><td>Call</td><td>[Tap on phone number]</td><td>[Call Tracking]</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* CHAPTER 05 — TEAM OPS */}
            <div className="chapter-title team-only">12–15 · Team Operations</div>

            <section className="card-section team-only" id="roles">
              <div className="section-header">
                <div className="section-num">12</div>
                <div className="section-heading">
                  <h3>Roles</h3>
                  <p>Who's responsible for what on this project</p>
                </div>
              </div>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Role</th><th>Name</th><th>Responsibility</th></tr></thead>
                  <tbody>
                    <tr><td>Strategy</td><td>[Name]</td><td>[Positioning, overall strategy]</td></tr>
                    <tr><td>Design</td><td>[Name]</td><td>[All visual assets]</td></tr>
                    <tr><td>Production</td><td>[Name]</td><td>[Filming Reels and the Hero Video]</td></tr>
                    <tr><td>Media Buying</td><td>[Name]</td><td>[Managing paid campaigns]</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="card-section team-only" id="checklist">
              <div className="section-header">
                <div className="section-num">13</div>
                <div className="section-heading">
                  <h3>Launch Checklist</h3>
                  <p>No one starts publishing before these items are locked in</p>
                </div>
              </div>
              <div className="checklist" id="checklistItems">
                {checklistData.map((text, index) => (
                  <div key={index} className="check-item">
                    <span>{text}</span>
                    <button 
                      className="mini-copy" 
                      type="button"
                      onClick={(e) => copyText(text, e.currentTarget, 'Copied')}
                    >
                      Copy
                    </button>
                  </div>
                ))}
              </div>
            </section>

            <section className="card-section" id="handoff">
              <div className="section-header">
                <div className="section-num">14</div>
                <div className="section-heading">
                  <h3>Handoff</h3>
                </div>
              </div>
              <div className="handoff-list" dir="ltr" style={{ textAlign: 'left' }}>
                <div className="handoff-row">
                  <div className="handoff-row-top">
                    <span className="handoff-row-name">Sohila ElHawary</span>
                    <span className="handoff-row-role">Content Creator</span>
                  </div>
                  <p className="handoff-row-desc">Content Strategy, Creative Ideation &amp; Scriptwriting.</p>
                </div>
                <div className="handoff-row">
                  <div className="handoff-row-top">
                    <span className="handoff-row-name">Osama Mohamed</span>
                    <span className="handoff-row-role">Media Buyer</span>
                  </div>
                  <p className="handoff-row-desc">Paid Ads, Campaign Optimization &amp; Performance Analysis.</p>
                </div>
                <div className="handoff-row">
                  <div className="handoff-row-top">
                    <span className="handoff-row-name">Ali Nouh</span>
                    <span className="handoff-row-role">UI/UX Designer &amp; Developer</span>
                  </div>
                  <p className="handoff-row-desc">UI/UX designer for the website, and programmer of the website in all its details.</p>
                </div>
              </div>
            </section>

            <section className="card-section team-only" id="resources">
              <div className="section-header">
                <div className="section-num">15</div>
                <div className="section-heading">
                  <h3>Resources</h3>
                  <p>All the links you need, in one place</p>
                </div>
              </div>
              <div className="resource-list">
                <div className="resource-item"><span>Brand Guidelines</span><span className="tag">[Google Drive]</span></div>
                <div className="resource-item"><span>Asset Library (DAM)</span><span className="tag">[Cloud Folder]</span></div>
                <div className="resource-item"><span>Database</span><span className="tag">[Notion / Airtable]</span></div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}