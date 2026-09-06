import { motion } from 'framer-motion';
import { Zap, Code2, MessageSquare, Eye, Layers, Rocket } from 'lucide-react';

const reasons = [
  {
    icon: Code2,
    title: 'Clean Implementation',
    desc: 'No shortcuts, no hacky workarounds. Production-ready code from day one — maintainable, scalable, and easy to handed off.',
  },
  {
    icon: Rocket,
    title: 'Performance Obsessed',
    desc: 'Sub-second loads, smooth 60fps interactions, zero layout shift. Speed isn\'t an afterthought — it\'s a design constraint.',
  },
  {
    icon: Layers,
    title: 'End-to-End Delivery',
    desc: 'From architecture and design implementation to deployment and testing. You get a finished product, not a half-built prototype.',
  },
  {
    icon: Eye,
    title: 'Pixel-Perfect Execution',
    desc: 'If the design calls for it, I build it exactly as specified. Attention to detail that separates good products from great ones.',
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    desc: 'Regular updates, honest timelines, and no surprises. You\'ll always know where your project stands.',
  },
  {
    icon: Zap,
    title: 'Modern Stack',
    desc: 'React, TypeScript, Tailwind, Next.js — tools that make building fast, beautiful products actually possible.',
  },
];

export default function WhyWorkWithMe() {
  return (
    <section
      className="py-48 relative"
      aria-label="Why work with me"
    >
      <div className="absolute inset-0 bg-void" aria-hidden="true" />
      <div className="absolute inset-0 grid-overlay" aria-hidden="true" />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-mono mb-5"
            >
              06 — Why Work With Me
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-display font-bold leading-tight text-white"
            >
              What Sets
              <br />
              <span className="text-gradient">Me Apart</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[14px] text-white/30 max-w-sm leading-relaxed"
          >
            Skills are learnable. The way I work — clear, precise, and focused on your outcome — is what actually matters.
          </motion.p>
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
                className="bg-white/[0.02] border border-white/[0.06] rounded-lg p-8 hover:border-cyan/12 hover:bg-white/[0.025] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan/5 border border-cyan/10 flex items-center justify-center mb-6 group-hover:bg-cyan/10 group-hover:border-cyan/20 transition-all duration-300">
                  <Icon size={18} className="text-cyan/60 group-hover:text-cyan transition-colors duration-300" />
                </div>
                <h3 className="text-[15px] font-display font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-[13px] text-white/35 leading-relaxed">{reason.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
