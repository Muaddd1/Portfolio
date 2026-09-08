import { motion } from 'framer-motion';
import { useTilt } from '../hooks/useTilt';

const highlights = [
  {
    label: 'Focus',
    value: 'Frontend Engineering',
    detail: 'React, TypeScript, modern CSS',
  },
  {
    label: 'Experience',
    value: '3+ Years',
    detail: 'Building production apps',
  },
  {
    label: 'Websites',
    value: '40+ Shipped',
    detail: 'As part of a dev team, 2022–2025',
  },
  {
    label: 'Status',
    value: 'Independent',
    detail: 'Freelance & full-time, since 2025',
  },
];

export default function About() {
  const tilt = useTilt({ max: 6, scale: 1.015 });

  return (
    <section
      id="about"
      className="py-48 relative"
      aria-label="About"
    >
      <div className="absolute inset-0 bg-void" aria-hidden="true" />

      <div className="container-wide relative z-10">
        {/* Section index */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '0px 0px 100px 0px' }}
          transition={{ duration: 0.4 }}
          className="text-mono mb-20"
        >
          01 — About
        </motion.p>

        {/* Main grid */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Left — big statement */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px 100px 0px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-display font-bold leading-tight text-white mb-8">
              Interfaces that feel{' '}
              <span className="text-gradient">inevitable</span>
            </h2>
            <p className="text-[15px] text-white/40 leading-relaxed mb-6">
              I&apos;m a frontend developer based in Morocco, specialising in high-performance
              web interfaces that balance aesthetic precision with technical excellence.
            </p>
            <p className="text-[15px] text-white/40 leading-relaxed">
              Every project is an exercise in restraint — removing everything that doesn&apos;t
              serve the experience until what remains is clear, fast, and exactly right.
            </p>

            {/* Divider */}
            <div className="h-px bg-white/[0.06] my-12" />

            {/* How I work */}
            <div className="flex flex-col gap-6">
              {[
                {
                  title: 'Clean Architecture',
                  desc: 'Component-based structure that scales. Every piece of UI built to last.',
                },
                {
                  title: 'Performance First',
                  desc: 'Sub-second loads, smooth interactions, zero layout shift. Speed is a feature.',
                },
                {
                  title: 'Design to Code',
                  desc: 'Figma to pixel-perfect implementation. I speak both languages fluently.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-5">
                  <div className="w-1 h-1 rounded-full bg-cyan mt-2.5 flex-shrink-0" />
                  <div>
                    <p className="text-[14px] font-medium text-white/70 mb-1">{item.title}</p>
                    <p className="text-[13px] text-white/30 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — highlights + visual */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px 100px 0px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="lg:col-span-6 lg:pt-8"
          >
            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '0px 0px 100px 0px' }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white/[0.02] border border-white/[0.06] rounded-lg p-6 hover:border-cyan/15 hover:bg-white/[0.03] transition-all duration-300"
                >
                  <p className="text-[10px] font-mono text-cyan/50 uppercase tracking-widest mb-3">
                    {h.label}
                  </p>
                  <p className="text-2xl font-display font-bold text-white mb-1">{h.value}</p>
                  <p className="text-[12px] text-white/25">{h.detail}</p>
                </motion.div>
              ))}
            </div>

            {/* Code snippet visual — subtle pointer-driven tilt */}
            <motion.div
              ref={tilt.ref}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px 100px 0px' }}
              transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onMouseMove={tilt.handlers.onMouseMove}
              onMouseEnter={tilt.handlers.onMouseEnter}
              onMouseLeave={tilt.handlers.onMouseLeave}
              style={tilt.style}
              className="bg-[#0d1117] border border-white/[0.06] rounded-lg overflow-hidden"
            >
              {/* Window dots */}
              <div className="flex items-center gap-2 px-5 py-4 border-b border-white/[0.05]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28ca41]" />
                <span className="ml-3 text-[11px] font-code text-white/20">about.tsx</span>
              </div>
              <div className="p-6 font-code text-[13px] leading-7 overflow-x-auto">
                <div>
                  <span className="text-[#7ee787]">const</span>
                  <span className="text-white/70"> developer </span>
                  <span className="text-[#79c0ff]">= </span>
                  <span className="text-[#a5d6ff]">{'{'}</span>
                </div>
                <div className="pl-5">
                  <span className="text-[#ff7b72]">name</span>
                  <span className="text-white/50">: </span>
                  <span className="text-[#a5d6ff]">'Mouad Sehli'</span>
                  <span className="text-white/30">,</span>
                </div>
                <div className="pl-5">
                  <span className="text-[#ff7b72]">role</span>
                  <span className="text-white/50">: </span>
                  <span className="text-[#a5d6ff]">'Frontend Developer'</span>
                  <span className="text-white/30">,</span>
                </div>
                <div className="pl-5">
                  <span className="text-[#ff7b72]">focus</span>
                  <span className="text-white/50">: </span>
                  <span className="text-[#a5d6ff]">'Performance & Craft'</span>
                  <span className="text-white/30">,</span>
                </div>
                <div className="pl-5">
                  <span className="text-[#ff7b72]">location</span>
                  <span className="text-white/50">: </span>
                  <span className="text-[#a5d6ff]">'Morocco'</span>
                  <span className="text-white/30">,</span>
                </div>
                <div className="pl-5">
                  <span className="text-[#ff7b72]">status</span>
                  <span className="text-white/50">: </span>
                  <span className="text-[#7ee787]">'open to full-time & freelance'</span>
                </div>
                <div>
                  <span className="text-[#a5d6ff]">{'}'}</span>
                  <span className="text-white/30">;</span>
                </div>
              </div>
            </motion.div>

            {/* GitHub activity — real, live public data */}
            <motion.a
              href="https://github.com/Muaddd1"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px 100px 0px' }}
              transition={{ delay: 0.28, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="block mt-6 bg-white/[0.02] border border-white/[0.06] rounded-lg p-6 hover:border-cyan/15 hover:bg-white/[0.03] transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-[10px] font-mono text-cyan/50 uppercase tracking-widest">
                  GitHub Activity
                </p>
                <span className="text-[11px] font-mono text-white/25 group-hover:text-cyan/60 transition-colors duration-300">
                  @Muaddd1
                </span>
              </div>
              <img
                src="https://ghchart.rshah.org/d4a24c/Muaddd1"
                alt="Mouad Sehli's GitHub contribution graph"
                className="w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
