export type TimelineType = 'academic' | 'publication' | 'research'

export interface TimelineItem {
  id: string
  year: string
  title: string
  subtitle: string
  description: string
  type: TimelineType
}

export const timeline: TimelineItem[] = [
  {
    id: 'uiu-bscse',
    year: '2023–Present',
    title: 'BSCSE: United International University',
    subtitle: 'Bachelor of Science in Computer Science & Engineering (CGPA: 4.00)',
    description: 'Maintaining a 4.00 CGPA (Expected graduation: February 2027). Focus on AI/ML, Computer Vision, and Research.',
    type: 'academic',
  },
  {
    id: 'dic-hsc',
    year: '2019–2022',
    title: 'HSC: Dhaka Imperial College',
    subtitle: 'Science (Result: GPA 5.00)',
    description: 'Higher Secondary Certificate with a 5.00 GPA in Science group.',
    type: 'academic',
  },
  {
    id: 'lsc-ssc',
    year: '2017–2019',
    title: 'SSC: Liberty School and College',
    subtitle: 'Science (Result: GPA 4.50)',
    description: 'Secondary School Certificate with GPA 4.50 in Science group.',
    type: 'academic',
  },
]

export interface Achievement {
  id: string
  title: string
  subtitle: string
  description: string
  year: string
  highlight: boolean
}

export const achievements: Achievement[] = [
  {
    id: 'top-2-percent',
    title: 'Top 2% Student Merit Scholarship',
    subtitle: '4 Consecutive Years',
    description: 'Ranked among the top 2% of students at United International University for 4 years, earning continuous merit scholarship recognition.',
    year: '2023–Present',
    highlight: true,
  },
  {
    id: 'uiu-dreamers',
    title: 'Co-Founder — UIU Dreamers',
    subtitle: 'Campus Magazine',
    description: 'Co-founded the campus magazine "UIU Dreamers", leading editorial direction, student storytelling, and publication initiatives.',
    year: 'UIU',
    highlight: true,
  },
  {
    id: 'undergrad-ta',
    title: 'Undergraduate Teaching Assistant',
    subtitle: '1.5 Years Experience',
    description: 'Instructed and mentored students for the last 1.5 years across Data Structures, Algorithms, Database Management Systems, Microcontrollers & Microprocessors, and Electronics laboratory courses.',
    year: '1.5 Years',
    highlight: true,
  },
]

export const typeColors: Record<TimelineType, string> = {
  academic: 'text-blue-400 bg-blue-500/10',
  publication: 'text-green-400 bg-green-500/10',
  research: 'text-purple-400 bg-purple-500/10',
}

export const typeIcons = {
  academic: 'GraduationCap',
  publication: 'Award',
  research: 'FlaskConical',
} as const