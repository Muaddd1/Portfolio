import { motion } from 'framer-motion';
import { skills } from '../data/skills';

// Map skills to projects where they were used
const skillProof: Record<string, string[]> = {
  React: ['Novara', 'NexaAI', 'FreelancerCRM'],
  JavaScript: ['Novara', 'NexaAI', 'TechZone Shop', 'FreelancerCRM', 'FreelancerOS'],
  TypeScript: ['Novara', 'NexaAI', 'FreelancerCRM', 'FreelancerOS'],
  'Tailwind CSS': ['Novara', 'NexaAI', 'TechZone Shop', 'FreelancerCRM', 'FreelancerOS'],
  WordPress: ['Client Projects'],
  PHP: ['FreelancerOS'],
  Laravel: ['FreelancerOS'],
  MySQL: ['FreelancerOS'],
  Git: ['All Projects'],
  GitHub: ['All Projects'],
  Figma: ['Novara', 'TechZone Shop', 'Client Projects'],
  Vite: ['TechZone Shop', 'Portfolio'],
  HTML5: ['All Projects'],
  CSS3: ['All Projects'],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-48 relative"
      aria-label="Skills"
    >
      <div className="absolute inset-0 bg-void" aria-hidden="true" />

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
              04 — Stack
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px 100px 0px' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-display font-bold leading-tight text-white"
            >
              Tools &amp;
              <br />
              <span className="text-gradient">Technologies</span>
            </motion.h2>
          </div>
        </div>

        {/* Skills grid by category */}
        <div className="flex flex-col gap-14">
          {skills.map((category, ci) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px 120px 0px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: ci * 0.05 }}
              className="flex flex-col gap-6"
            >
              {/* Category label */}
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-mono tracking-[0.25em] text-cyan/50 uppercase">
                  {category.label}
                </span>
                <div className="flex-1 h-px bg-white/[0.05]" />
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill) => {
                  const proof = skillProof[skill];
                  return (
                    <div key={skill} className="relative group/skill">
                      <span className="inline-block text-[13px] font-mono text-white/40 border border-white/[0.07] px-4 py-2.5 rounded-sm hover:border-cyan/25 hover:text-cyan/80 transition-all duration-300 cursor-default">
                        {skill}
                      </span>
                      {/* Proof tooltip */}
                      {proof && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover/skill:opacity-100 transition-all duration-200 pointer-events-none group-hover/skill:pointer-events-auto z-10 whitespace-nowrap">
                          <div className="bg-[#1c1812] border border-white/[0.08] rounded-lg px-4 py-3 shadow-2xl shadow-black/50">
                            <p className="text-[10px] font-mono text-cyan/60 uppercase tracking-widest mb-2">
                              Used in
                            </p>
                            <div className="flex flex-wrap gap-1.5 max-w-[200px]">
                              {proof.map((p) => (
                                <span
                                  key={p}
                                  className="text-[11px] font-mono text-white/60 bg-white/[0.04] px-2 py-0.5 rounded-sm"
                                >
                                  {p}
                                </span>
                              ))}
                            </div>
                          </div>
                          {/* Arrow */}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1c1812] border-right border-bottom border-white/[0.08] rotate-45 -mt-1" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
