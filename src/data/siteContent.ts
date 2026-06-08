export interface HeroContent {
  eyebrow: string
  title: string
  intro: string
  primaryAction: string
  secondaryAction: string
}

export interface EvidenceCard {
  kind: string
  title: string
  description: string
  accent: string
  tags: string[]
}

export interface LabNote {
  label: string
  value: string
  description: string
}

export interface ContactLink {
  label: string
  value: string
  href: string
}

export interface SiteContent {
  navItems: string[]
  hero: HeroContent
  signals: string[]
  evidence: EvidenceCard[]
  stack: EvidenceCard[]
  labNotes: LabNote[]
  contact: {
    title: string
    description: string
    links: ContactLink[]
  }
}

export const siteContent: SiteContent = {
  navItems: ['Work', 'Lab', 'Stack', 'Reach'],
  hero: {
    eyebrow: 'LLM Application Engineer / React Ecosystem',
    title: 'Interfaces for people working with intelligent systems.',
    intro:
      'A product-minded web presence for showing how model capability, frontend craft, and reliable delivery become usable AI applications.',
    primaryAction: 'Explore modules',
    secondaryAction: 'Open GitHub',
  },
  signals: ['RAG surfaces', 'Agent UX', 'Streaming states', 'Design systems', 'GitHub Pages'],
  evidence: [
    {
      kind: 'Case Story',
      title: 'Guided knowledge surface',
      description:
        'Turn vague model output into source-aware exploration with citations, recovery paths, and clear confidence states.',
      accent: '#ff6b6b',
      tags: ['RAG', 'Trust UI', 'Search'],
    },
    {
      kind: 'Build Note',
      title: 'Readable AI latency',
      description:
        'Use React state, optimistic transitions, and streaming feedback to make long-running model work feel intentional.',
      accent: '#4ecdc4',
      tags: ['React', 'Streaming', 'Motion'],
    },
    {
      kind: 'System Map',
      title: 'Agent workflow canvas',
      description:
        'Expose prompt, retrieval, tool use, evaluation, and deployment layers as a browsable system map.',
      accent: '#7c5cff',
      tags: ['Agents', 'Tools', 'Evals'],
    },
    {
      kind: 'Field Signal',
      title: 'From prototype to ship',
      description:
        'Document tradeoffs, failure modes, and iteration loops so the work reads like engineered product thinking.',
      accent: '#ffbe0b',
      tags: ['Delivery', 'Quality', 'Notes'],
    },
  ],
  stack: [
    {
      kind: 'UI',
      title: 'React',
      description: 'Component systems, interaction state, and performance-aware rendering.',
      accent: '#61dafb',
      tags: ['Hooks', 'Composition'],
    },
    {
      kind: 'Type',
      title: 'TypeScript',
      description: 'Typed content models and predictable interfaces for evolving product copy.',
      accent: '#3178c6',
      tags: ['Types', 'Contracts'],
    },
    {
      kind: 'Build',
      title: 'Vite',
      description: 'Fast local iteration and GitHub Pages friendly static delivery.',
      accent: '#a855f7',
      tags: ['Vite', 'Pages'],
    },
    {
      kind: 'Motion',
      title: 'Framer Motion',
      description: 'Scroll-linked reveals, reduced-motion support, and purposeful feedback.',
      accent: '#f43f5e',
      tags: ['Scroll', 'Reveal'],
    },
    {
      kind: 'AI',
      title: 'LLM APIs',
      description: 'Prompt surfaces, retrieval flows, tool calls, and user-visible uncertainty.',
      accent: '#10b981',
      tags: ['RAG', 'Agents'],
    },
    {
      kind: 'Ship',
      title: 'Actions',
      description: 'Automated build and deployment path through GitHub Pages.',
      accent: '#111827',
      tags: ['CI', 'Deploy'],
    },
  ],
  labNotes: [
    {
      label: '01',
      value: 'Model output needs shape',
      description: 'The interface should explain what is happening before the final answer arrives.',
    },
    {
      label: '02',
      value: 'Sources are part of the product',
      description: 'Retrieval quality is only useful when people can inspect where context came from.',
    },
    {
      label: '03',
      value: 'Frontend craft changes trust',
      description: 'Loading, fallback, and error states decide whether AI systems feel dependable.',
    },
  ],
  contact: {
    title: 'Start a conversation',
    description:
      'For large-model application roles, React-heavy product work, or collaboration around applied AI systems.',
    links: [
      { label: 'GitHub', value: 'mcflurry0904', href: 'https://github.com/mcflurry0904' },
      { label: 'Repository', value: 'lmh-stack', href: 'https://github.com/mcflurry0904/lmh-stack' },
      { label: 'Email', value: 'hello@example.com', href: 'mailto:hello@example.com' },
    ],
  },
}
