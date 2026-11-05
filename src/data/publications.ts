export type PublicationStatus = 'published' | 'under-review' | 'submitted' | 'preparation'

export interface Publication {
  id: string
  year: number
  venue: string
  location?: string
  status: PublicationStatus
  title: string
  shortDescription: string
  doi?: string
  authors: string[]
}

export const publications: Publication[] = [
  {
    id: 'iccit-2025-smart-assistance',
    year: 2025,
    venue: '28th International Conference on Computer and Information Technology (ICCIT)',
    location: "Cox's Bazar, Bangladesh",
    status: 'published',
    title: 'Smart Assistance System for the Visually Impaired',
    shortDescription:
      'A low-cost, AI-powered smart assistive system integrated into a portable backpack featuring MobileNetV2-based Bangladeshi banknote detection, ultrasonic obstacle detection, GPS tracking with emergency Telegram alerts, an RTC-controlled automated medicine dispenser, and a voice clock.',
    doi: 'https://ieeexplore.ieee.org/abstract/document/11490249',
    authors: [
      'Ariful Islam Shihab',
      'Md. Sazzad Hossain Imon',
      'Tanjin Ash-Shahriar Niloy',
      'Md. Arafatul Islam',
      'Shahriar Islam',
      'Redwanul Mahbub Talukder',
    ],
  },
  {
    id: 'rie-2026-stgw',
    year: 2026,
    venue: 'Results in Engineering',
    status: 'under-review',
    title: 'Apex Frame Recognition for Short Expression Videos Using Spatio-Temporal Geometric Weights',
    shortDescription:
      'Introduces Spatio-Temporal Geometric Weights (STGW), a lightweight landmark-based method with only 33 learnable scalar parameters that predicts micro-facial expression apex frames using normalized MediaPipe landmarks, Euclidean/Manhattan/cosine regional distances, and first- and second-order temporal features across CASME, CASME II, CAS(ME)2, CAS(ME)3, and MMEW.',
    authors: [
      'Ariful Islam Shihab',
      'Sazzad Hossain Imon',
      'Tanjin Ash-Shahriar Niloy',
      'Arafatul Islam',
      'Nahid Ferdous Aurna',
      'Suman Ahmmed',
      'Ohidujjaman',
    ],
  },
  {
    id: 'iccit-2026-banknote-mtl',
    year: 2026,
    venue: '29th International Conference on Computer and Information Technology (ICCIT)',
    status: 'under-review',
    title: 'Multi-Task Learning for Bangladeshi Banknote Denomination and Condition Recognition',
    shortDescription:
      'Introduces a self-collected Bangladeshi banknote dataset covering seven circulating denominations and three condition labels under real-world mobile capture variations, evaluating a compact shared MobileNetV3-Large multi-task architecture that improves condition macro-F1 by ~3.5 percentage points while reducing trainable parameters by ~87%.',
    authors: [
      'Md. Sazzad Hossain Imon',
      'Ariful Islam Shihab',
      'Tanjin Ash-Shahriar Niloy',
      'Md. Arafatul Islam',
      'Fowad Morshad',
      'Md. Tanvir Raihan',
    ],
  },
  {
    id: 'iccit-2026-visually-impaired-ml',
    year: 2026,
    venue: '29th International Conference on Computer and Information Technology (ICCIT)',
    status: 'under-review',
    title: 'Empowering Visually Impaired Using Machine Learning',
    shortDescription:
      'A compact, fully offline, real-time assistance application tailored for visually impaired users that integrates CNN with SVM and Random Forest for currency recognition, MediaPipe hand landmarks for sign language translation, and Tesseract OCR enhanced by n-gram models and rule-based corrections.',
    authors: [
      'Fowad Morshad',
      'Ariful Islam Shihab',
      'Jaba Anika Kotha',
      'Shihab Ahmed',
    ],
  },
  {
    id: 'iccit-2026-urbanguard',
    year: 2026,
    venue: '29th International Conference on Computer and Information Technology (ICCIT)',
    status: 'under-review',
    title: 'UrbanGuard: A User-Centered Real-Time Incident Monitoring System for Urban Safety',
    shortDescription:
      'A user-centered mobile application designed through iterative human-centered research, prototyping, and think-aloud evaluation to support real-time urban emergency incident reporting, evidence submission, safety guidance, and unified communication between citizens and emergency authorities.',
    authors: [
      'Md. Jarif Ahmed',
      'Nishat Tasnim Sadia',
      'Jaba Anika Kotha',
      'Fowad Morshad',
      'Ariful Islam Shihab',
      'Dr. Novia Nurain',
    ],
  },
]

export const publicationStatusLabels: Record<PublicationStatus, { label: string; className: string }> = {
  published: { label: 'PUBLISHED', className: 'badge-published' },
  'under-review': { label: 'UNDER REVIEW', className: 'badge-submitted' },
  submitted: { label: 'SUBMITTED', className: 'badge-submitted' },
  preparation: { label: 'IN PREPARATION', className: 'badge-preparation' },
}