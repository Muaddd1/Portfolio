import proofImg from '../assets/screenshots/proof.jpg';
import syntraImg from '../assets/screenshots/syntra.jpg';
import vantaDetailImg from '../assets/screenshots/vanta-detail.jpg';
import nexformImg from '../assets/screenshots/nexform.jpg';
import eloraImg from '../assets/screenshots/elora.jpg';

export interface CaseStudy {
  problem: string;
  approach: string;
  result: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demo: string;
  demoUrl: string;
  github: string;
  year: string;
  caseStudy?: CaseStudy;
}

export const projects: Project[] = [
  {
    id: 17,
    title: 'PROOF',
    description:
      'A premium AI SaaS template for measuring what AI actually accomplishes: a scroll-story landing page with a live mini-product and a 3D core, plus a 15-route app. Missions tie AI work to business goals, AI Replay reconstructs any task step by step, an ROI center derives every number from editable assumptions, and an approval center logs every decision. Includes a ⌘K command center, a plain-English workflow builder and a fully seeded demo workspace with a typed mock AI layer.',
    tags: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Framer Motion', 'AI SaaS UI'],
    image: proofImg,
    demo: 'https://muadme.gumroad.com/l/lngppq',
    demoUrl: 'https://proof-muad1.vercel.app',
    github: 'https://github.com/Muaddd1/PROOF',
    year: '2026',
  },
  {
    id: 16,
    title: 'SYNTRA',
    description:
      'A premium AI SaaS template: a marketing site plus a 22-route AI business dashboard. An AI command palette with structured answers, a human-in-the-loop approval queue that writes to an exportable audit log, a visual workflow builder that also turns plain English into steps, five AI agents with permissions and live activity, and role-based access. Runs fully in demo mode with a typed mock AI layer. Lighthouse 98 on desktop.',
    tags: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Framer Motion', 'AI SaaS UI'],
    image: syntraImg,
    demo: 'https://muadme.gumroad.com/l/qamgrq',
    demoUrl: 'https://syntra-muad1.vercel.app',
    github: 'https://github.com/Muaddd1/SYNTRA',
    year: '2026',
  },
  {
    id: 15,
    title: 'VANTA DETAIL',
    description:
      'A premium automotive detailing website template: a realistic 3D car that circles and gets cleaner as you scroll, a live quote builder with vehicle-size pricing and a service-area check, and a seven-step booking flow that ends with a booking number, calendar export and WhatsApp. Includes before/after sliders, a paint surface lab and a water-beading demo that reacts to the cursor. Phones get a pre-rendered scroll sequence; Lighthouse 99 on desktop.',
    tags: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Three.js / R3F', 'Booking engine'],
    image: vantaDetailImg,
    demo: 'https://muadme.gumroad.com/l/wdpgn',
    demoUrl: 'https://vanta-detail-muad1.vercel.app',
    github: 'https://github.com/Muaddd1/VANTA-DETAIL',
    year: '2026',
  },
  {
    id: 14,
    title: 'NEXFORM',
    description:
      'A futuristic personal-trainer website template: a 3D athlete built in code, a 60-second quiz that turns six answers into a training path, a 3D body map that lights up muscle groups, a program explorer, workout preview and exercise library, and a five-step booking flow that ends in “YOU’RE IN.” Phones and weak devices get pre-rendered stills; Lighthouse 95+ on mobile.',
    tags: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Three.js / R3F', 'Booking engine'],
    image: nexformImg,
    demo: 'https://muadme.gumroad.com/l/ufsnay',
    demoUrl: 'https://nexform-muad1.vercel.app',
    github: 'https://github.com/Muaddd1/NEXFORM',
    year: '2026',
  },
  {
    id: 12,
    title: 'ÉLORA',
    description:
      'A luxury beauty-salon website template with a real, working booking flow: treatment, specialist, calendar, time slots, validated details and confirmation with an .ics calendar file. A procedural 3D serum bottle turns with scroll, with pre-rendered stills on phones and weak devices, plus dark mode, accessible modals and structured data.',
    tags: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Three.js / R3F', 'Booking engine'],
    image: eloraImg,
    demo: 'https://muadme.gumroad.com/l/phdwvf',
    demoUrl: 'https://elora-muad1.vercel.app',
    github: 'https://github.com/Muaddd1/ELORA',
    year: '2026',
  },
  {
    id: 6,
    title: 'Freelancer CRM',
    description:
      'A premium client relationship management app for freelancers. Clients, projects, invoices, proposals, contracts, payments — all fully wired with health scoring, dark mode, and localStorage persistence. Built with Next.js 16, Tailwind CSS v4, and Radix UI.',
    tags: ['Next.js 16', 'Tailwind CSS v4', 'Radix UI', 'TypeScript', 'localStorage'],
    image: 'https://raw.githubusercontent.com/Muaddd1/freelancer-crm-demo/main/screenshots/01-dashboard.png',
    demo: 'https://muadme.gumroad.com/l/FreelancerCRM',
    demoUrl: 'https://freelancer-crm-ivory.vercel.app',
    github: 'https://github.com/Muaddd1/freelancer-crm',
    year: '2026',
    caseStudy: {
      problem:
        'Clients, projects, invoices, proposals, and contracts all reference each other — a project belongs to a client, invoices and proposals belong to a project, contracts tie back to both. Duplicate that data across records (a client\'s name copied onto every invoice, say) and it drifts the moment something changes — silently, until the numbers stop adding up.',
      approach:
        'Each entity is modeled once and referenced by id everywhere else, never copied. Anything derived — the health score, a project\'s outstanding balance, dashboard totals — is computed from the current records instead of stored as its own value that can go stale. Everything persists to localStorage with a schema built to evolve, so a data model change doesn\'t quietly corrupt what\'s already saved.',
      result:
        'Mark one invoice paid, and the client\'s health score, the project\'s balance, and the dashboard totals all update correctly from that single change — nothing to remember to update in five places, nothing to go out of sync.',
    },
  }
];
