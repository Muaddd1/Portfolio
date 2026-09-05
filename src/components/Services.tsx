import { motion } from 'framer-motion';
import { Code2, Layers, Zap, Smartphone, Globe, TrendingUp } from 'lucide-react';
import { personal } from '../data/personal';

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Layers,
  Zap,
  Smartphone,
  Globe,
  TrendingUp,
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-48 relative"
      aria-label="Services"
    >
      <div className="absolute inset-0 bg-void" aria-hidden="true" />
      <div className="absolute inset-0 grid-overlay" aria-hidden="true" />

      {/* Side accent line */}
      <div
        className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-cyan/10 to-transparent"
        aria-hidden="true"
      />

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
              03 — Services
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-display font-bold leading-tight text-white"
            >
              What I
              <br />
              <span className="text-gradient">Do</span>
            </motion.h2>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 gap-px bg-white/[0.05]">
          {personal.services.items.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Code2;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                className="bg-void p-10 lg:p-14 group hover:bg-white/[0.02] transition-colors duration-500"
              >
                <div className="flex flex-col h-full">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-10 group-hover:border-cyan/20 group-hover:bg-cyan-dim transition-all duration-300">
                    <Icon size={18} className="text-white/40 group-hover:text-cyan transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-[14px] text-white/35 leading-relaxed flex-1">{service.description}</p>
                  <div className="mt-8 pt-8 border-t border-white/[0.05]">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-cyan/40 uppercase">
                      0{i + 1}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
