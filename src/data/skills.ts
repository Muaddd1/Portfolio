export interface SkillCategory {
  label: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    label: 'Frontend',
    items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'WordPress'],
  },
  {
    label: 'Backend',
    items: ['PHP', 'Laravel', 'MySQL'],
  },
  {
    label: 'Tools',
    items: ['Git', 'GitHub', 'Figma', 'Vite'],
  },
];
