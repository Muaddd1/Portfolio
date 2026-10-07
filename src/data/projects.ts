import proofImg from '../assets/screenshots/proof.jpg';
import syntraImg from '../assets/screenshots/syntra.jpg';
import vantaDetailImg from '../assets/screenshots/vanta-detail.jpg';
import nexformImg from '../assets/screenshots/nexform.jpg';
import fadehouseImg from '../assets/screenshots/fadehouse.jpg';
import eloraImg from '../assets/screenshots/elora.jpg';
import vellutoImg from '../assets/screenshots/velluto.jpg';
import plinthImg from '../assets/screenshots/plinth.jpg';
import aurumImg from '../assets/screenshots/aurum.jpg';
import aureliaImg from '../assets/screenshots/aurelia.jpg';
import novaraImg from '../assets/screenshots/novara.jpg';
import nexaaiImg from '../assets/screenshots/nexaai.jpg';
import techzoneImg from '../assets/screenshots/techzone.jpg';
import freelancerosImg from '../assets/screenshots/freelanceros.jpg';
import portfolioImg from '../assets/screenshots/portfolio.jpg';
import clipflowImg from '../assets/screenshots/clipflow.jpg';

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
    id: 13,
    title: 'FADEHOUSE',
    description:
      'A premium barbershop website template built to book a cut in under a minute: service, barber, calendar, time slots that respect opening hours, name and phone, then a confirmation with Google Calendar, .ics, directions and WhatsApp. A 3D cordless clipper built in code turns with scroll, with transparent stills on phones and weak devices, plus a light theme and structured data.',
    tags: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Three.js / R3F', 'Booking engine'],
    image: fadehouseImg,
    demo: 'https://muadme.gumroad.com/l/jyhztr',
    demoUrl: 'https://fadehouse-muad1.vercel.app',
    github: 'https://github.com/Muaddd1/FADEHOUSE',
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
    id: 11,
    title: 'VELLUTO',
    description:
      'A cinematic, futuristic coffee-brand website template. A realistic 3D espresso cup with a scroll-driven camera that dives into the crema, an interactive origin map, a fully 3D bean-to-cup sequence (bean, roast, grind, brew), a working frontend shop, and adaptive quality that falls back to rendered stills on weak devices.',
    tags: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Three.js / R3F', 'Framer Motion', 'GSAP', 'Zustand'],
    image: vellutoImg,
    demo: 'https://muadme.gumroad.com/l/ydqpk',
    demoUrl: 'https://velluto-muad1.vercel.app',
    github: 'https://github.com/Muaddd1/VELLUTO',
    year: '2026',
  },
  {
    id: 10,
    title: 'Plinth',
    description:
      'A premium, single-file HTML website template for interior design studios and boutique consultancy brands — no framework, no build step. A CSS-only 3D "material sample" hero scene, deliberately art-directed light/dark modes, 4 hand-built CSS portfolio compositions, a working validated contact form, and a keyboard-accessible flip card, all in one index.html.',
    tags: ['HTML5', 'CSS3', 'Vanilla JS', 'No-Build', 'Single-File'],
    image: plinthImg,
    demo: 'https://muadme.gumroad.com/l/yzxssh',
    demoUrl: 'https://plinth-template.vercel.app',
    github: 'https://github.com/Muaddd1/PLINTH',
    year: '2026',
  },
  {
    id: 9,
    title: 'AURUM',
    description:
      'A niche e-commerce storefront template built specifically for gold shops, jewelers, and jewelry brands — karats, gram weight, making charges, and certificates are first-class. Signature feature: a live Gold Price Calculator with a full currency-aware breakdown. Full Arabic/English bilingual support with true RTL layout, not just translated strings.',
    tags: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Framer Motion', 'Zustand', 'i18n/RTL'],
    image: aurumImg,
    demo: 'https://muadme.gumroad.com/l/aurum',
    demoUrl: 'https://aurum-template-muad1.vercel.app',
    github: 'https://github.com/Muaddd1/AURUM',
    year: '2026',
  },
  {
    id: 8,
    title: 'AURELIA',
    description:
      'A complete, production-ready luxury e-commerce storefront template. 13 routes, a dark-luxury design system with a light-mode variant, Framer Motion page transitions, Zustand cart/wishlist state, and a multi-step checkout built with React Hook Form + Zod. Every product image is visually verified brand-safe.',
    tags: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Framer Motion', 'Zustand'],
    image: aureliaImg,
    demo: 'https://muadme.gumroad.com/l/zimpb',
    demoUrl: 'https://aurelia-template-phi.vercel.app',
    github: 'https://github.com/Muaddd1/AURELIA',
    year: '2026',
  },
  {
    id: 7,
    title: 'ClipFlow',
    description:
      'The operating system for your content business. A command center for creators — idea vault with viral scoring, script studio, content calendar, sponsor CRM, analytics, and a repurpose workspace to turn one video into many formats. Built with Next.js 16, Tailwind CSS v4, and Radix UI.',
    tags: ['Next.js 16', 'Tailwind CSS v4', 'Radix UI', 'TypeScript', 'localStorage'],
    image: clipflowImg,
    demo: 'https://clipflow-sepia.vercel.app',
    demoUrl: 'https://clipflow-sepia.vercel.app',
    github: 'https://github.com/Muaddd1/clipflow',
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
  },
  {
    id: 1,
    title: 'Portfolio',
    description:
      'My personal developer portfolio showcasing all projects. Built with React, Vite, Tailwind CSS, and Framer Motion. Features smooth animations, dark cyber aesthetic, and responsive design.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Portfolio'],
    image: portfolioImg,
    demo: 'https://muad-portfolio.vercel.app',
    demoUrl: 'https://muad-portfolio.vercel.app',
    github: 'https://github.com/Muaddd1/Portfolio',
    year: '2025',
  },
  {
    id: 2,
    title: 'Novara',
    description:
      'A complete AI SaaS platform template with warm luxury design. Features AI chat, templates, agents, analytics, team management, and full auth flow. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.',
    tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'AI'],
    image: novaraImg,
    demo: 'https://muadme.gumroad.com/l/Novara',
    demoUrl: 'https://novara-silk.vercel.app',
    github: 'https://github.com/Muaddd1/Novara',
    year: '2025',
  },
  {
    id: 3,
    title: 'TechZone Shop',
    description:
      'Immersive 3D e-commerce storefront built with React Three Fiber, Three.js, and Tailwind CSS. Features smooth animations, 3D product visuals, and a premium shopping experience.',
    tags: ['React', 'Three.js', 'Tailwind CSS', 'GSAP', 'E-Commerce'],
    image: techzoneImg,
    demo: 'https://techzone-shop1.vercel.app',
    demoUrl: 'https://techzone-shop1.vercel.app',
    github: 'https://github.com/Muaddd1/TechZone-Shop',
    year: '2025',
  },
  {
    id: 4,
    title: 'NexaAI',
    description:
      'Premium AI platform with intelligent automation, multi-model support, and enterprise features. A production-ready AI workspace for teams that demand excellence.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AI', 'Enterprise'],
    image: nexaaiImg,
    demo: 'https://muadme.gumroad.com/l/Nexaai',
    demoUrl: 'https://nexa-ai-silk.vercel.app',
    github: 'https://github.com/Muaddd1/NexaAI',
    year: '2025',
  },
  {
    id: 5,
    title: 'FreelancerOS',
    description:
      'A complete freelancer management SaaS — clients, projects, invoices, proposals, contracts, time tracking, expenses, leads, analytics, and automations. Built with Next.js 14, PostgreSQL, NextAuth, and premium dark mode UI.',
    tags: ['Next.js 14', 'PostgreSQL', 'NextAuth', 'Prisma', 'SaaS'],
    image: freelancerosImg,
    demo: 'https://muadme.gumroad.com/l/FreelancerOS',
    demoUrl: 'https://freelancer-os-gamma.vercel.app',
    github: 'https://github.com/Muaddd1/FreelancerOS',
    year: '2026',
  },
];
