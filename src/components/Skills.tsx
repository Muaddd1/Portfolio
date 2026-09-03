import { motion } from 'framer-motion';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-48 relative"
      aria-label="Skills"
    >
      <div className="absolute inset-0 bg-void" aria-hidden="true" />
      <div className="absolute inset-0 grid-overlay" aria-hidden="true" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-mono mb-5"
            >
              04 — Stack
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-display font-bold leading-tight text-white"
            >
              Tools &amp;
              <br />
              <span className="text-gradient">Technologies</span>
            </motion.h2>
          </div>
        </div>

        {/* Skills grid */}
        <div className="flex flex-wrap gap-16">
          {skills.map((category, i) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="flex flex-col gap-5"
            >
              <span className="text-[10px] font-mono tracking-[0.25em] text-cyan/50 uppercase">
                {category.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-[13px] font-mono text-white/40 border border-white/[0.07] px-4 py-2.5 rounded-sm hover:border-cyan/30 hover:text-cyan/70 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
