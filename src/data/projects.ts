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
    id: 1,
    title: 'Inventory Management System',
    description:
      'Full-stack inventory management dashboard built with React, Vite, Laravel, and MySQL. Features real-time data visualization, CRUD operations, and a modern admin interface.',
    tags: ['React', 'Vite', 'Laravel', 'MySQL', 'Dashboard'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    demo: '#',
    github: '#',
    year: '2025',
  },
  {
    id: 2,
    title: 'Business Landing Page',
    description:
      'High-conversion landing page built for a local business. Focused on performance, accessibility, and clear CTA flow.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    demo: '#',
    github: '#',
    year: '2024',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description:
      'Modern, minimal portfolio for a creative professional. Smooth animations, dark aesthetic, and responsive design.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
    demo: '#',
    github: '#',
    year: '2024',
  },
  {
    id: 4,
    title: 'Web Application',
    description:
      'Responsive web app built with React and Tailwind CSS. Clean architecture, component-based design, and optimized performance.',
    tags: ['React', 'Tailwind CSS', 'Vite', 'Responsive'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    demo: '#',
    github: '#',
    year: '2024',
  },
];
