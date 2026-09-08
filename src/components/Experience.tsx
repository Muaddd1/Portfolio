import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Independent',
    role: 'Frontend Developer',
    period: '2025 — Present',
    location: 'Remote — Morocco',
    highlights: [
      'Went independent after building production frontend experience within a development team',
      'Building and shipping frontend products end-to-end — from UI implementation to deployment',
      'Open to both freelance projects and full-time roles',
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    company: 'Private Clients (NDA)',
    role: 'Frontend Developer',
    period: '2022 — 2025',
    location: 'Morocco',
    highlights: [
      'Contributed frontend development to 40+ production websites as part of a development team',
      'Worked directly inside internal teams — turning requirements and design handoffs into shipped features',
      'Focused on clean, maintainable component architecture built to survive ongoing iteration',
    ],
    tech: ['JavaScript', 'CSS3', 'PHP', 'Figma'],
  },
  {
    company: 'Self-Taught',
    role: 'Web Development',
    period: '2020 — 2022',
    location: 'Morocco',
    highlights: [
      'Learned modern frontend development through hands-on project building',
      'Completed 20+ personal projects across React, JavaScript, and CSS',
      'Transitioned from static sites to full interactive web applications',
    ],
    tech: ['JavaScript', 'HTML5', 'CSS3', 'React'],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-48 relative"
      aria-label="Experience"
    >
      <div className="absolute inset-0 bg-void" aria-hidden="true" />
      <div className="absolute inset-0 grid-overlay" aria-hidden="true" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '0px 0px 100px 0px' }}
              className="text-mono mb-5"
            >
              05 — Experience
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px 100px 0px' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-display font-bold leading-tight text-white"
            >
              Where I&apos;ve
              <br />
              <span className="text-gradient">Worked</span>
            </motion.h2>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[11px] top-0 bottom-0 w-px bg-gradient-to-b from-cyan/20 via-cyan/10 to-transparent"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '0px 0px 120px 0px' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
                className="relative pl-14 pb-16 last:pb-0"
              >
                {/* Dot */}
                <div className="absolute left-0 top-2 w-[22px] h-[22px] rounded-full border border-cyan/30 bg-void flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-cyan" />
                </div>

                {/* Card */}
                <div className="bg-white/[0.02] border border-white/[0.06] rounded-lg p-8 hover:border-cyan/10 hover:bg-white/[0.025] transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <p className="text-[10px] font-mono text-cyan/50 uppercase tracking-widest mb-1">
                        {exp.period}
                      </p>
                      <h3 className="text-xl font-display font-bold text-white">{exp.role}</h3>
                      <p className="text-[13px] text-white/40 mt-0.5">{exp.company} · {exp.location}</p>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-2.5 mb-6">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-[13px] text-white/40 leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-cyan mt-2.5 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono text-white/30 border border-white/[0.06] px-3 py-1 rounded-sm uppercase tracking-wider"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
