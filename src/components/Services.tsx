import { motion } from 'framer-motion';
import { Code2, Layers, Zap, Eye, Globe, MessageSquare } from 'lucide-react';
import { personal } from '../data/personal';

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Layers,
  Zap,
  Eye,
  Globe,
  MessageSquare,
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-48 relative"
      aria-label="Services"
    >
      <div className="absolute inset-0 bg-void" aria-hidden="true" />

      {/* Side accent line */}
      <div
        className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-cyan/10 to-transparent"
        aria-hidden="true"
      />

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
              03 — Services
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px 100px 0px' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-display font-bold leading-tight text-white"
            >
              What I
              <br />
              <span className="text-gradient">Do</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '0px 0px 100px 0px' }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-[14px] text-white/30 max-w-sm leading-relaxed"
          >
            End-to-end web solutions — from pixel-perfect interfaces to fully functional web applications.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
          {personal.services.items.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Code2;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px 120px 0px' }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: i * 0.04 }}
                className="bg-void p-10 lg:p-12 group hover:bg-white/[0.02] transition-colors duration-500"
              >
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-8 group-hover:border-cyan/20 group-hover:bg-cyan-dim transition-all duration-300">
                    <Icon size={18} className="text-white/40 group-hover:text-cyan transition-colors duration-300" />
                  </div>

                  <h3 className="text-lg font-display font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-[13px] text-white/35 leading-relaxed flex-1">{service.description}</p>

                  {/* Bottom index */}
                  <div className="mt-8 pt-8 border-t border-white/[0.05]">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-cyan/30 uppercase">
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
