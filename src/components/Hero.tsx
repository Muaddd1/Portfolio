import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col relative overflow-hidden"
      aria-label="Introduction"
    >
      {/* Void background */}
      <div className="absolute inset-0 bg-void" aria-hidden="true" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-100" aria-hidden="true" />

      {/* Horizon glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent"
        aria-hidden="true"
      />

      {/* Ambient glow orbs */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(0,212,255,0.04) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-end pb-24 pt-32">
        <div className="container-wide">
          {/* Mono label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-mono mb-6"
          >
            Frontend Developer — Morocco
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3.5rem,10vw,9rem)] font-display font-bold leading-[0.95] tracking-tight text-white mb-12 max-w-5xl"
          >
            Crafting Digital
            <br />
            <span className="text-gradient">Experiences</span>
          </motion.h1>

          {/* Sub + CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:flex-row gap-10 items-start lg:items-end"
          >
            <p className="text-[15px] text-white/40 leading-relaxed max-w-md">
              Building interfaces that feel inevitable. Focused on performance,
              precision, and the kind of craft that disappears into the experience.
            </p>

            <div className="flex items-center gap-6 flex-shrink-0">
              <a
                href="#work"
                className="group flex items-center gap-3 text-[12px] font-mono tracking-[0.15em] text-white/60 hover:text-cyan uppercase transition-colors duration-300"
              >
                <span className="w-8 h-px bg-white/20 group-hover:bg-cyan group-hover:w-12 transition-all duration-300" />
                View Work
              </a>
              <a
                href="#contact"
                className="flex items-center gap-3 text-[12px] font-mono tracking-[0.15em] text-void bg-cyan px-6 py-3.5 rounded-sm uppercase hover:bg-white transition-colors duration-300"
              >
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="relative z-10 flex justify-center pb-12"
        aria-hidden="true"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-white/20 hover:text-white/50 transition-colors duration-300"
          aria-label="Scroll down"
        >
          <span className="text-[9px] font-mono tracking-[0.3em] uppercase">Scroll</span>
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </motion.div>

      {/* Index number — bottom right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 right-8 md:right-16 text-[11px] font-mono text-white/15 tracking-widest"
        aria-hidden="true"
      >
        001
      </motion.div>
    </section>
  );
}
