import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';

const WORDS = ['Crafting', 'Digital', 'Experiences'];

export default function Hero() {
  const handleScrollToWork = () => {
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleScrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col relative overflow-hidden"
      aria-label="Introduction"
    >
      {/* Void background */}
      <div className="absolute inset-0 bg-void" aria-hidden="true" />

      {/* Subtle grid */}
      <div className="absolute inset-0 grid-overlay opacity-100" aria-hidden="true" />

      {/* Horizon glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/15 to-transparent"
        aria-hidden="true"
      />

      {/* Ambient glow orbs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,212,255,0.05) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.03) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-end pb-20 pt-32">
        <div className="container-wide">
          {/* Mono label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-mono mb-8"
          >
            Frontend Developer — Morocco
          </motion.p>

          {/* Headline — kinetic word-by-word reveal */}
          <h1
            className="text-[clamp(3.5rem,10vw,9rem)] font-display font-bold leading-[0.93] tracking-tight mb-12 max-w-5xl overflow-hidden"
            aria-label="Crafting Digital Experiences"
          >
            {WORDS.map((word, wi) => (
              <span key={word} className="inline-block overflow-hidden mr-[0.2em]">
                <motion.span
                  className="inline-block text-white"
                  initial={{ y: '110%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{
                    delay: 0.35 + wi * 0.12,
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
            <br />
            <span className="inline-block overflow-hidden mr-[0.2em]">
              <motion.span
                className="text-gradient"
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ delay: 0.35 + 3 * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                that convert.
              </motion.span>
            </span>
          </h1>

          {/* Sub + CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:flex-row gap-12 items-start lg:items-end"
          >
            <p className="text-[15px] text-white/40 leading-relaxed max-w-md">
              Building high-performance websites and web applications with precision,
              intent, and clean code. From concept to deployment — every pixel considered.
            </p>

            {/* Premium CTA buttons */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <button
                onClick={handleScrollToWork}
                className="btn-primary group"
                aria-label="View my work"
              >
                View My Work
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </button>
              <button
                onClick={handleScrollToContact}
                className="btn-secondary group"
                aria-label="Let's talk"
              >
                Let&apos;s Talk
              </button>
            </div>
          </motion.div>

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex items-center gap-3 mt-16"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-mono text-white/30 tracking-[0.15em] uppercase">
              Available for freelance projects
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="relative z-10 flex justify-center pb-10"
        aria-hidden="true"
      >
        <button
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-2 text-white/20 hover:text-white/50 transition-colors duration-300 cursor-pointer"
          aria-label="Scroll down"
        >
          <span className="text-[9px] font-mono tracking-[0.3em] uppercase">Scroll</span>
          <ArrowDown size={14} className="animate-bounce" />
        </button>
      </motion.div>

      {/* Index number */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 right-8 md:right-16 text-[11px] font-mono text-white/12 tracking-widest"
        aria-hidden="true"
      >
        001
      </motion.div>
    </section>
  );
}
