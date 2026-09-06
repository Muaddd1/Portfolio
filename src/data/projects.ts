export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demo: string;
  github: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: 6,
    title: 'Freelancer CRM',
    description:
      'A premium client relationship management app for freelancers. Clients, projects, invoices, proposals, contracts, payments — all fully wired with health scoring, dark mode, and localStorage persistence. Built with Next.js 16, Tailwind CSS v4, and Radix UI.',
    tags: ['Next.js 16', 'Tailwind CSS v4', 'Radix UI', 'TypeScript', 'localStorage'],
    image: 'https://raw.githubusercontent.com/Muaddd1/freelancer-crm-demo/main/screenshots/01-dashboard.png',
    demo: 'https://freelancer-crm-ivory.vercel.app',
    github: 'https://github.com/Muaddd1/freelancer-crm',
    year: '2026',
  },
  {
    id: 1,
    title: 'Portfolio',
    description:
      'My personal developer portfolio showcasing all projects. Built with React, Vite, Tailwind CSS, and Framer Motion. Features smooth animations, dark cyber aesthetic, and responsive design.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Portfolio'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    demo: 'https://muad-portfolio.vercel.app',
    github: 'https://github.com/Muaddd1/Portfolio',
    year: '2025',
  },
  {
    id: 2,
    title: 'Novara',
    description:
      'A complete AI SaaS platform template with warm luxury design. Features AI chat, templates, agents, analytics, team management, and full auth flow. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.',
    tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'AI'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    demo: 'https://novara-silk.vercel.app',
    github: 'https://github.com/Muaddd1/Novara',
    year: '2025',
  },
  {
    id: 3,
    title: 'TechZone Shop',
    description:
      'Immersive 3D e-commerce storefront built with React Three Fiber, Three.js, and Tailwind CSS. Features smooth animations, 3D product visuals, and a premium shopping experience.',
    tags: ['React', 'Three.js', 'Tailwind CSS', 'GSAP', 'E-Commerce'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    demo: 'https://techzone-shop1.vercel.app',
    github: 'https://github.com/Muaddd1/TechZone-Shop',
    year: '2025',
  },
  {
    id: 4,
    title: 'NexaAI',
    description:
      'Premium AI platform with intelligent automation, multi-model support, and enterprise features. A production-ready AI workspace for teams that demand excellence.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AI', 'Enterprise'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
    demo: 'https://nexa-ai-silk.vercel.app',
    github: 'https://github.com/Muaddd1/NexaAI',
    year: '2025',
  },
  {
    id: 5,
    title: 'FreelancerOS',
    description:
      'A complete freelancer management SaaS — clients, projects, invoices, proposals, contracts, time tracking, expenses, leads, analytics, and automations. Built with Next.js 14, PostgreSQL, NextAuth, and premium dark mode UI.',
    tags: ['Next.js 14', 'PostgreSQL', 'NextAuth', 'Prisma', 'SaaS'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    demo: 'https://freelancer-os-gamma.vercel.app',
    github: 'https://github.com/Muaddd1/FreelancerOS',
    year: '2026',
  },
];
