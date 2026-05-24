export type Locale = 'zh-TW' | 'en';

type LocalizedText = Record<Locale, string>;

export type Project = {
  slug: string;
  title: LocalizedText;
  kicker: LocalizedText;
  summary: LocalizedText;
  story: LocalizedText;
  cover: string;
  gallery: string[];
  tags: LocalizedText[];
  meta: LocalizedText[];
};

export const locales: Locale[] = ['zh-TW', 'en'];

export const localeLabels: Record<Locale, string> = {
  'zh-TW': '中文',
  en: 'English',
};

export const profile = {
  name: 'Ann / 林庭安',
  email: 'ann810613@hotmail.com',
  pdfPath: '/downloads/wood-cycle-workshop-lin-ting-an.pdf',
  heroImage: '/assets/pictures/portrait.JPG',
  intro: {
    'zh-TW': '室內設計背景 × 木作實踐 × 舊木再生',
    en: 'Interior designer · Woodworker · Giving wood a second life',
  },
  headline: {
    'zh-TW': '從空間設計走向雙手實作，讓舊木材以新的形式延續價值。',
    en: 'From spatial design to hands-on craft, Ann turns material memory into useful, lasting objects.',
  },
  bio: {
    'zh-TW': '我具備多年室內設計經驗，熟悉概念、圖面與工程監工流程。旅居歐洲期間，我被阿姆斯特丹的再利用文化與愛爾蘭以修復取代丟棄的生活哲學影響。回台後，我重新投入木作職訓並取得家具木工技術士丙級證照，希望把設計美學與修復技術帶進老屋、古蹟與日常家具。',
    en: 'Ann brings interior design experience into practical woodworking. Time in Europe shaped her interest in reuse culture and repair-first living, and formal woodworking training gave her the technical foundation to transform reclaimed material into objects with function, restraint, and story.',
  },
};

export const navigation: Record<Locale, { work: string; story: string; process: string; contact: string }> = {
  'zh-TW': {
    work: '作品',
    story: '故事',
    process: '工法',
    contact: '聯絡',
  },
  en: {
    work: 'Work',
    story: 'Story',
    process: 'Process',
    contact: 'Contact',
  },
};

export const projects: Project[] = [
  {
    slug: 'table-frame',
    title: {
      'zh-TW': '小桌與框架結構',
      en: 'Small Table & Frame Structure',
    },
    kicker: {
      'zh-TW': '家具木作實作',
      en: 'Furniture practice',
    },
    summary: {
      'zh-TW': '以基本框架、比例與接合練習建立穩定的家具結構。',
      en: 'A study in stable proportion, frame construction, and joinery discipline.',
    },
    story: {
      'zh-TW': '這件作品代表 Ann 從圖面走向工坊的轉換：不只是畫出比例，而是理解木材、接點、水平與手感如何共同決定一件家具是否可靠。',
      en: 'This piece marks the move from drawing furniture to understanding it physically: grain, joints, level, proportion, and the small tolerances that make an object reliable.',
    },
    cover: '/assets/pictures/shelf.JPG',
    gallery: ['/assets/pictures/shelf.JPG', '/assets/pictures/portrait.JPG'],
    tags: [
      { 'zh-TW': '家具', en: 'Furniture' },
      { 'zh-TW': '框架', en: 'Frame' },
      { 'zh-TW': '實作', en: 'Hands-on' },
    ],
    meta: [
      { 'zh-TW': '材料：實木', en: 'Material: solid wood' },
      { 'zh-TW': '重點：比例、結構、接合', en: 'Focus: proportion, structure, joinery' },
    ],
  },
  {
    slug: 'small-objects',
    title: {
      'zh-TW': '鉛筆盒與五指琴',
      en: 'Pencil Box & Kalimba',
    },
    kicker: {
      'zh-TW': '小物與細節',
      en: 'Objects and details',
    },
    summary: {
      'zh-TW': '從文具到樂器，練習精準裁切、邊角處理與日常物件的觸感。',
      en: 'Small-scale objects exploring precision, edge finishing, and touch.',
    },
    story: {
      'zh-TW': '小物件不能藏拙：每一條邊、每一個角、每一次打磨都會被手指感受到。鉛筆盒與五指琴展現 Ann 對日常用品比例與材質溫度的敏感度。',
      en: 'Small objects expose every detail. The pencil box and kalimba show Ann’s sensitivity to proportion, finish, and the intimate scale of things people touch every day.',
    },
    cover: '/assets/pictures/pencil.JPG',
    gallery: ['/assets/pictures/pencil.JPG'],
    tags: [
      { 'zh-TW': '小物', en: 'Objects' },
      { 'zh-TW': '打磨', en: 'Finishing' },
      { 'zh-TW': '細節', en: 'Detail' },
    ],
    meta: [
      { 'zh-TW': '作品：鉛筆盒、五指琴', en: 'Works: pencil box, kalimba' },
      { 'zh-TW': '重點：精度、手感、收邊', en: 'Focus: precision, tactility, edges' },
    ],
  },
  {
    slug: 'reuse-games',
    title: {
      'zh-TW': '手作桌遊：Catan 與 Rummy',
      en: 'Handmade Games: Catan & Rummy',
    },
    kicker: {
      'zh-TW': '再利用實驗',
      en: 'Reuse experiment',
    },
    summary: {
      'zh-TW': '把被忽略的材料轉化成可玩、可保存、可分享的物件。',
      en: 'Turning overlooked material into playful, durable, shareable objects.',
    },
    story: {
      'zh-TW': '在資源有限的環境中，Ann 曾將廢棄掃把柄鋸切、打磨成 Catan 數字木牌，也為 Rummy 研究數字排版與樹脂封層。這些不是單純的手作，而是「材料還能成為什麼」的設計思考。',
      en: 'In resource-limited settings, Ann cut and sanded discarded broom handles into Catan number tokens and studied layout and resin sealing for Rummy pieces. The work reflects design thinking under constraint.',
    },
    cover: '/assets/pictures/background.png',
    gallery: ['/assets/pictures/background.png'],
    tags: [
      { 'zh-TW': '再利用', en: 'Reuse' },
      { 'zh-TW': '遊戲', en: 'Games' },
      { 'zh-TW': '材料轉化', en: 'Material transformation' },
    ],
    meta: [
      { 'zh-TW': '作品：Catan、Rummy', en: 'Works: Catan, Rummy' },
      { 'zh-TW': '重點：低資源創作、耐用性', en: 'Focus: low-resource making, durability' },
    ],
  },
];

export const ui = {
  viewProject: {
    'zh-TW': '閱讀作品',
    en: 'View project',
  },
  featuredWork: {
    'zh-TW': '精選作品',
    en: 'Featured Work',
  },
  storyTitle: {
    'zh-TW': '不是丟棄，而是重新理解材料。',
    en: 'Not disposal — a second reading of material.',
  },
  processTitle: {
    'zh-TW': '設計眼光與工坊雙手',
    en: 'A designer’s eye, a maker’s hands',
  },
  contactTitle: {
    'zh-TW': '合作、工作與作品交流',
    en: 'Work, collaboration, and commissions',
  },
};

export function otherLocale(locale: Locale): Locale {
  return locale === 'zh-TW' ? 'en' : 'zh-TW';
}

export function localizedProjectPath(locale: Locale, slug: string): string {
  return `/${locale}/projects/${slug}`;
}
