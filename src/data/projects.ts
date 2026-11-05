export type ProjectStatus = 'completed' | 'in-development' | 'concept'

export type ProjectCategory =
  | 'Hardware / IoT / AI'
  | 'Full-Stack / Web Platform'
  | 'Full-Stack / Research Tools'
  | 'Full-Stack / Emergency Systems'
  | 'Browser Extension / Utility'

export interface ProjectFeature {
  title: string
  description: string
  icon: string
}

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  status: ProjectStatus
  description: string
  longDescription: string
  features: ProjectFeature[]
  technologies: string[]
  github: string
  demo: string
  image: string
  isResearch: boolean
}

export const projects: Project[] = [
  {
    id: 'smart-assistant',
    title: 'Smart Assistant System for Visually Impaired',
    category: 'Hardware / IoT / AI',
    status: 'completed',
    description: 'An embedded AI/IoT assistance system designed to help visually impaired users navigate daily life through obstacle detection, medicine dispensing, voice assistance, and GPS tracking.',
    longDescription: 'This hardware/software system integrates multiple sensors and actuators on an ESP32 platform to provide real-time assistance. The system was designed as a comprehensive aid combining computer vision, sensor fusion, and audio feedback.',
    features: [
      {
        title: 'Obstacle Detection',
        description: 'Ultrasonic sensing for real-time nearby obstacle detection with audio alerts',
        icon: 'radar',
      },
      {
        title: 'Medicine Dispensing',
        description: 'Servo-based automated pill dispensing mechanism with programmable schedules',
        icon: 'pill',
      },
      {
        title: 'Voice Clock',
        description: 'RTC-based time announcement through audio playback for time awareness',
        icon: 'clock',
      },
      {
        title: 'GPS Tracking',
        description: 'GPS location tracking with periodic updates sent via Telegram bot to caregivers',
        icon: 'map-pin',
      },
    ],
    technologies: ['ESP32', 'ESP32-CAM', 'NEO-6M GPS', 'DFPlayer Mini', 'Servo Motor', 'Ultrasonic Sensor', 'RTC Module', 'MAX98357A Amplifier', 'Telegram Bot API'],
    github: 'https://github.com/Imon739/Smart_Assistance_System-for_the_Visually_Impaired',
    demo: '',
    image: '',
    isResearch: true,
  },
  {
    id: 'crisisintel',
    title: 'CrisisIntel: Multi-Role Crisis Coordination Platform',
    category: 'Full-Stack / Emergency Systems',
    status: 'completed',
    description: 'A full-stack emergency response and crisis coordination platform unifying workflows across hospitals, fire services, blood banks, social organizations, doctors, and citizens with explicit SQL schema management and optional local LLM triage.',
    longDescription: 'CrisisIntel models role-based emergency workflows in a unified React + Django + raw MySQL architecture. It integrates incident management, volunteer campaign tracking, fire service dispatch with nearest-assignment logic, blood bank inventory and donor matching, hospital appointment/service booking, proximity discovery, and an Ollama-backed AI assistant.',
    features: [
      {
        title: 'Multi-Role Incident & Relief Management',
        description: 'Coordinate crises, campaigns, participant roles, victim enrollment, and financial tracking',
        icon: 'shield-alert',
      },
      {
        title: 'Fire Service Dispatch & Operations',
        description: 'Manage fire teams, inventory, nearest-assignment dispatch, and deployment lifecycles',
        icon: 'zap',
      },
      {
        title: 'Blood Bank & Donor Ecosystem',
        description: 'Direct blood requests, donor matching, recruitment posts, and crisis-linked blood allocation',
        icon: 'heart',
      },
      {
        title: 'Healthcare & Hospital Workflows',
        description: 'Hospital service catalogs, doctor schedules, and appointment/service booking lifecycles',
        icon: 'activity',
      },
      {
        title: 'Raw SQL Schema & Migration Runner',
        description: 'Explicit normalized MySQL queries with custom versioned SQL migration tooling',
        icon: 'database',
      },
      {
        title: 'Local AI Triage Assistant',
        description: 'Integrated Ollama assistant with heuristic fallback for symptom-to-specialty guidance',
        icon: 'cpu',
      },
    ],
    technologies: ['Django', 'React', 'MySQL', 'Raw SQL', 'Python', 'JavaScript', 'Ollama'],
    github: 'https://github.com/Ariful-Islam-Shihab/CrisisIntel',
    demo: '',
    image: '',
    isResearch: false,
  },
  {
    id: 'skill-bridge',
    title: 'SkillBridge: Freelancer & Skill Verification Platform',
    category: 'Full-Stack / Web Platform',
    status: 'completed',
    description: 'A full-stack freelance marketplace platform featuring skill verification workflows, client-freelancer project management, role-based dashboards, and comprehensive administrative controls.',
    longDescription: 'SkillBridge connects clients with verified freelancers through a complete web platform built with HTML, CSS, JavaScript, PHP, and MySQL. It includes skill assessment and verification badges, job posting and bidding pipelines, user management, and admin moderation tools.',
    features: [
      {
        title: 'Skill Verification System',
        description: 'Credential and skill verification workflows to validate freelancer expertise',
        icon: 'check-circle',
      },
      {
        title: 'Admin Control Panel',
        description: 'Comprehensive administrative dashboard for user moderation, verification, and platform oversight',
        icon: 'shield',
      },
      {
        title: 'Freelancer & Client Workflows',
        description: 'End-to-end project posting, proposals, talent discovery, and profile management',
        icon: 'briefcase',
      },
      {
        title: 'Full-Stack PHP & MySQL Architecture',
        description: 'Dynamic server-side backend with relational database design and responsive frontend UI',
        icon: 'database',
      },
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    github: '',
    demo: 'https://skill-bridge-vert-omega.vercel.app/',
    image: '',
    isResearch: false,
  },
  {
    id: 'researchhub',
    title: 'ResearchHub: Collaborative Research Platform',
    category: 'Full-Stack / Research Tools',
    status: 'completed',
    description: 'A full-stack platform designed around the complete research lifecycle: authentication, role-based access, collaborative paper editing, version control, experiment tracking, dataset repository, and team communication.',
    longDescription: 'ResearchHub addresses the fragmentation in research workflows by providing an integrated platform. From project initialization through publication, it combines version-controlled collaborative writing, experiment tracking, dataset management, and team coordination.',
    features: [
      {
        title: 'Collaborative Paper Editing',
        description: 'Real-time co-authoring with version control and conflict resolution',
        icon: 'edit',
      },
      {
        title: 'Experiment Tracking',
        description: 'Log hyperparameters, metrics, artifacts, and model checkpoints',
        icon: 'flask-conical',
      },
      {
        title: 'Dataset Repository',
        description: 'Versioned dataset storage with metadata and access control',
        icon: 'database',
      },
      {
        title: 'Tasks & Milestones',
        description: 'Project management tailored for research workflows',
        icon: 'check-square',
      },
      {
        title: 'Team Communication',
        description: 'Integrated discussions, meetings, and notifications',
        icon: 'users',
      },
      {
        title: 'Public Researcher Profiles',
        description: 'Showcase publications, projects, and collaboration network',
        icon: 'globe',
      },
    ],
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'NextAuth', 'WebSockets', 'TipTap', 'Redis'],
    github: 'https://github.com/Ariful-Islam-Shihab/ResearchHub',
    demo: '',
    image: '',
    isResearch: false,
  },
  {
    id: 'ucam-section-generator',
    title: 'UCam Section List Generator',
    category: 'Browser Extension / Utility',
    status: 'completed',
    description: 'A Manifest V3 Chrome extension for the UIU UCam portal that intercepts course section API responses and generates clean, customizable landscape A4 PDF section schedules by department and selected courses.',
    longDescription: 'Built for United International University students, this Chrome Manifest V3 extension runs an injected interceptor in the page MAIN world to capture UCam sections JSON payloads from fetch/XHR requests, stores them locally in chrome.storage.local, and lets students filter by department and specific courses to export formatted PDF tables using jsPDF.',
    features: [
      {
        title: 'Automatic API Payload Capture',
        description: 'Intercepts UCam fetch and XMLHttpRequest section responses seamlessly in the browser',
        icon: 'zap',
      },
      {
        title: 'Department & Course Filtering',
        description: 'Interactive popup to select specific departments and filter only desired courses',
        icon: 'filter',
      },
      {
        title: 'Landscape A4 PDF Generation',
        description: 'Exports structured schedules with Course Code, Title, Section, Faculty, Time, and Room via jsPDF',
        icon: 'file-text',
      },
      {
        title: 'Privacy-First Local Storage',
        description: 'Stores all captured schedule data strictly on-device using chrome.storage.local',
        icon: 'lock',
      },
    ],
    technologies: ['JavaScript', 'Chrome Extension (MV3)', 'jsPDF', 'HTML', 'CSS'],
    github: 'https://github.com/Ariful-Islam-Shihab/UIU-Section-List-Generator-Extension',
    demo: '',
    image: '',
    isResearch: false,
  },
]

export const projectStatusLabels: Record<ProjectStatus, { label: string; className: string }> = {
  completed: { label: 'COMPLETED', className: 'text-green-400' },
  'in-development': { label: 'IN DEVELOPMENT', className: 'text-yellow-400' },
  concept: { label: 'CONCEPT', className: 'text-purple-400' },
}