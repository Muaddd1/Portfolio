import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="py-48 relative"
      aria-label="About"
    >
      <div className="absolute inset-0 bg-void" aria-hidden="true" />
      <div className="absolute inset-0 grid-overlay" aria-hidden="true" />

      <div className="container-wide relative z-10">
        {/* Section index */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-mono mb-20"
        >
          01 — About
        </motion.p>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left — big statement */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-display font-bold leading-tight text-white">
              Interfaces that feel{' '}
              <span className="text-gradient">inevitable</span> — built with precision and intent.
            </h2>
          </motion.div>

          {/* Right — bio */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-5 lg:pt-8"
          >
            <p className="text-[15px] text-white/40 leading-relaxed mb-6">
              I&apos;m a frontend developer based in Morocco, specialising in high-performance
              web interfaces that balance aesthetic precision with technical excellence.
            </p>
            <p className="text-[15px] text-white/40 leading-relaxed">
              Every project is an exercise in restraint — removing everything that doesn&apos;t
              serve the experience until what remains is clear, fast, and exactly right.
            </p>

            {/* Stats row */}
            <div className="flex gap-12 mt-14 pt-14 border-t border-white/[0.06]">
              {[
                { value: '3+', label: 'Years' },
                { value: '50+', label: 'Projects' },
                { value: '30+', label: 'Clients' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <dd className="text-4xl font-display font-bold text-white">{value}</dd>
                  <dt className="text-[11px] font-mono text-white/30 mt-1 tracking-wider uppercase">{label}</dt>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
