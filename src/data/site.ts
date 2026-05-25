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

export type SkillGroup = {
  heading: LocalizedText;
  items: LocalizedText[];
};

export type Experience = {
  role: LocalizedText;
  employer: LocalizedText;
  bullets: LocalizedText[];
};

export type Certification = {
  name: LocalizedText;
  issuer?: LocalizedText;
  duration?: LocalizedText;
  bullets?: LocalizedText[];
};

export type TrainingProject = {
  name: LocalizedText;
  bullets: LocalizedText[];
};

export const locales: Locale[] = ['zh-TW', 'en'];

export const localeLabels: Record<Locale, string> = {
  'zh-TW': '中文',
  en: 'English',
};

export const profile = {
  name: {
    'zh-TW': '林庭安',
    en: 'Lin, Ting-An',
  },
  email: 'ann810613@hotmail.com',
  phone: '0980404516',
  location: 'Taiwan',
  pdfPath: '/downloads/wood-cycle-workshop-lin-ting-an.pdf',
  heroImage: '/assets/pictures/portrait.JPG',
  intro: {
    'zh-TW': '木作實踐 × 舊木再生',
    en: 'Woodworking · Reclaimed wood',
  },
  headline: {
    'zh-TW': '從空間設計走向雙手實作，讓舊木材以新的形式延續價值。',
    en: 'From spatial design to hands-on craft, turning material memory into useful, lasting objects.',
  },
  bio: {
    'zh-TW': '我具備多年室內設計經驗，熟悉概念、圖面與工程監工流程。旅居歐洲期間，我被阿姆斯特丹的再利用文化與愛爾蘭以修復取代丟棄的生活哲學影響。回台後，我重新投入木作職訓並取得家具木工技術士丙級證照，希望把設計美學與修復技術帶進老屋、古蹟與日常家具。',
    en: 'I brings interior design experience into practical woodworking.',
  },
  professionalProfile: {
    'zh-TW': '木作家具製作學員，具備室內設計背景與8個月政府密集木作職訓訓練。結合空間思維、材料感知與實作技能，創作實用且有想法的作品。特別關注舊木再利用、循環設計，以及與修復、保存和有意義的工藝相關的長期工作。',
    en: 'Woodworker and furniture-making trainee with a background in interior design and formal training through an intensive 8-month government woodworking program. Combines spatial thinking, material awareness, and hands-on making skills to create practical, thoughtful objects. Particularly interested in reclaimed wood, circular design, and long-term work connected to restoration, preservation, and meaningful craft.',
  },
};

export const coreSkills: SkillGroup[] = [
  {
    heading: { 'zh-TW': '木作技能', en: 'Woodworking' },
    items: [
      { 'zh-TW': '家具木作基礎技能', en: 'Fundamental furniture woodworking' },
      { 'zh-TW': '基礎接合技法', en: 'Basic joinery' },
      { 'zh-TW': '手工具木作', en: 'Hand tool woodworking' },
      { 'zh-TW': '小型家具製作', en: 'Small furniture making' },
      { 'zh-TW': '表面處理與塗裝', en: 'Surface preparation and finishing' },
      { 'zh-TW': '材料準備與組裝', en: 'Material preparation and assembly' },
    ],
  },
  {
    heading: { 'zh-TW': '設計與專案技能', en: 'Design and Project Skills' },
    items: [
      { 'zh-TW': '室內設計與空間規劃', en: 'Interior design and spatial planning' },
      { 'zh-TW': '材料選擇', en: 'Material selection' },
      { 'zh-TW': '設計思考與功能性問題解決', en: 'Design thinking and functional problem-solving' },
      { 'zh-TW': '工藝原型製作', en: 'Craft-based prototyping' },
      { 'zh-TW': '細節導向的實作', en: 'Detail-focused making' },
    ],
  },
  {
    heading: { 'zh-TW': '永續關注', en: 'Sustainability Focus' },
    items: [
      { 'zh-TW': '循環設計思維', en: 'Circular design mindset' },
      { 'zh-TW': '再利用與舊材料感知', en: 'Reuse and reclaimed material awareness' },
      { 'zh-TW': '耐用、長久物件製作', en: 'Durable, long-lasting object making' },
    ],
  },
];

export const workExperience: Experience[] = [
  {
    role: { 'zh-TW': '室內設計師', en: 'Interior Designer' },
    employer: { 'zh-TW': '三商美福 / 永濬室內裝修', en: 'Sanshang Meifu / Yongjun Interior Decoration Co.' },
    bullets: [
      {
        'zh-TW': '在室內設計、空間規劃與應用材料選擇方面累積實務經驗。',
        en: 'Developed practical experience in interior design, spatial planning, and applied materials selection.',
      },
      {
        'zh-TW': '建立設計思考、美學與功能性問題解決的扎實基礎。',
        en: 'Built a strong foundation in design thinking, aesthetics, and functional problem-solving.',
      },
      {
        'zh-TW': '從事需要注重細節、可用性與視覺平衡的設計相關工作。',
        en: 'Worked on design-related tasks that required attention to detail, usability, and visual balance.',
      },
      {
        'zh-TW': '加深理解材料、結構與使用者需求如何在完工空間中結合。',
        en: 'Strengthened an understanding of how materials, structure, and user needs come together in finished spaces.',
      },
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: { 'zh-TW': '家具木工技術士證照', en: 'Furniture Woodworking Technician Certificate' },
    issuer: { 'zh-TW': '政府木作訓練計畫', en: 'Government Woodworking Training Program' },
    duration: { 'zh-TW': '8個月', en: '8 months' },
    bullets: [
      {
        'zh-TW': '完成密集的家具木作實作訓練。',
        en: 'Completed intensive hands-on training in furniture woodworking.',
      },
      {
        'zh-TW': '學習基礎接合、手工具木作、家具結構與家具製作技法。',
        en: 'Studied basic joinery, hand tool woodworking, furniture structure, and furniture-making techniques.',
      },
      {
        'zh-TW': '從原材料準備到組裝與塗裝，完成實作專案。',
        en: 'Produced practical projects from raw material preparation through assembly and finishing.',
      },
    ],
  },
  {
    name: { 'zh-TW': '設計軟體證照', en: 'Design Software Certifications' },
    bullets: [
      { 'zh-TW': 'Autodesk AutoCAD 認證專業人員', en: 'Autodesk AutoCAD Certified Professional' },
      { 'zh-TW': 'Autodesk 3ds Max Design 認證專業人員', en: 'Autodesk 3ds Max Design Certified Professional' },
      { 'zh-TW': 'Adobe Photoshop 認證助理', en: 'Adobe Photoshop Certified Associate' },
      { 'zh-TW': 'Adobe Illustrator 認證助理', en: 'Adobe Illustrator Certified Associate' },
    ],
  },
];

export const trainingProjects: TrainingProject[] = [
  {
    name: { 'zh-TW': '手作木製拉密桌遊', en: 'Handmade Rummikub Board Game' },
    bullets: [
      {
        'zh-TW': '獨立創作木製桌遊，包含木材裁切、印刷編號與樹脂塗層。',
        en: 'Created a wooden board game independently, including wood cutting, printed numbering, and resin finishing.',
      },
      {
        'zh-TW': '展現工藝技術、注重耐用性的製作，以及對可重複使用日常物件的用心。',
        en: 'Demonstrated craftsmanship, durability-focused making, and care for reusable everyday objects.',
      },
    ],
  },
  {
    name: { 'zh-TW': '小型家具與物件練習', en: 'Small Furniture and Object Practice' },
    bullets: [
      {
        'zh-TW': '在訓練期間完成小型木作專案，包含層架、鉛筆盒與木製相框。',
        en: 'Completed small-scale woodworking projects during training, including a shelf, pencil holder, and wooden photo frame.',
      },
      {
        'zh-TW': '在多次練習中實踐測量、裁切精度、密合、組裝與乾淨的塗裝。',
        en: 'Practiced measurement, cutting accuracy, fitting, assembly, and clean finishing across multiple exercises.',
      },
    ],
  },
];

export const additionalBackground: LocalizedText[] = [
  {
    'zh-TW': '曾旅居阿姆斯特丹與愛爾蘭，接觸再利用、修復與二手文化，形塑了對永續製作的長期興趣。',
    en: 'Lived in Amsterdam and Ireland, where exposure to reuse, repair, and second-hand culture shaped a lasting interest in sustainable making.',
  },
  {
    'zh-TW': '熱衷於將被丟棄或被忽略的木材轉化為有用、有意義的物件。',
    en: 'Motivated by turning discarded or overlooked wood into useful, meaningful objects.',
  },
  {
    'zh-TW': '長期目標：參與歷史建築修復與保存工作。',
    en: 'Long-term goal: contribute to historical building restoration and preservation work.',
  },
];

export const cvLabels: Record<Locale, {
  contactDetails: string;
  professionalProfile: string;
  coreSkills: string;
  workExperience: string;
  trainingCertifications: string;
  trainingProjects: string;
  additionalBackground: string;
  projectEvidence: string;
  phone: string;
  email: string;
  location: string;
  duration: string;
}> = {
  'zh-TW': {
    contactDetails: '聯絡資訊',
    professionalProfile: '專業簡介',
    coreSkills: '核心技能',
    workExperience: '工作經歷',
    trainingCertifications: '訓練與證照',
    trainingProjects: '訓練專案',
    additionalBackground: '其他背景',
    projectEvidence: '作品',
    phone: '電話',
    email: 'Email',
    location: '地點',
    duration: '期間',
  },
  en: {
    contactDetails: 'Contact Details',
    professionalProfile: 'Profile',
    coreSkills: 'Core Skills',
    workExperience: 'Work Experience',
    trainingCertifications: 'Training and Certifications',
    trainingProjects: 'Training Projects',
    projectEvidence: 'Projects',
    additionalBackground: 'Additional Background',
    phone: 'Phone',
    email: 'Email',
    location: 'Location',
    duration: 'Duration',
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
  projectEvidenceLead: {
    'zh-TW': '精選作品，呈現結構比例、細節處理與舊木再利用的實作能力。',
    en: 'Selected projects that show joinery discipline, detail care, and reclaimed-material thinking.',
  },
  projectTagsLabel: {
    'zh-TW': '作品標籤',
    en: 'Project tags',
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
