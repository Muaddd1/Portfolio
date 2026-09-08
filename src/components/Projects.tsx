import { motion } from 'framer-motion';
import { ExternalLink, Layers } from 'lucide-react';
import { projects } from '../data/projects';
import { useTilt } from '../hooks/useTilt';

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const isPortfolio = project.id === 1;
  const tilt = useTilt({ max: 4, scale: 1.01 });

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      className="group relative"
    >
      {/* Card container — subtle pointer-driven tilt */}
      <motion.div
        ref={tilt.ref}
        style={tilt.style}
        onMouseMove={tilt.handlers.onMouseMove}
        onMouseEnter={tilt.handlers.onMouseEnter}
        onMouseLeave={tilt.handlers.onMouseLeave}
        className="relative overflow-hidden rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan/15 transition-colors duration-500"
      >

        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            loading="lazy"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent opacity-80" />

          {/* Hover overlay with links — always visible */}
          <div className="absolute inset-0 bg-void/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center gap-4 flex-wrap px-4">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-[11px] py-3 px-6"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={12} />
              View Product
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-[11px] py-3 px-6"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={12} />
              View Demo
            </a>
            {isPortfolio && project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-[11px] py-3 px-6"
                onClick={(e) => e.stopPropagation()}
              >
                <GitHubIcon />
                Source
              </a>
            )}
          </div>

          {/* Index */}
          <div className="absolute top-4 right-4 text-[10px] font-mono text-white/20 tracking-widest">
            0{index + 1}
          </div>
        </div>

        {/* Content */}
        <div className="p-7 lg:p-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="text-2xl font-display font-bold text-white group-hover:text-cyan transition-colors duration-300 mb-2">
                {project.title}
              </h3>
              <p className="text-[13px] text-white/35 leading-relaxed line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono tracking-wider text-white/30 border border-white/[0.07] px-3 py-1 rounded-sm uppercase"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="text-[10px] font-mono text-white/20 px-2 py-1">
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          {/* Footer links */}
          <div className="flex items-center gap-4 pt-5 border-t border-white/[0.05]">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[11px] font-mono text-cyan hover:text-white transition-colors duration-300"
            >
              <ExternalLink size={12} />
              View Product
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[11px] font-mono text-white/30 hover:text-cyan transition-colors duration-300"
            >
              <ExternalLink size={12} />
              View Demo
            </a>
            {isPortfolio && project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[11px] font-mono text-white/30 hover:text-cyan transition-colors duration-300"
              >
                <GitHubIcon />
                Source
              </a>
            )}
            {!isPortfolio && (
              <span className="ml-auto flex items-center gap-1.5 text-[10px] font-mono text-cyan/50 border border-cyan/10 bg-cyan/5 px-3 py-1 rounded-sm uppercase tracking-wider">
                <Layers size={10} />
                Project
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="work"
      className="py-48 relative"
      aria-label="Selected Work"
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
              viewport={{ once: true }}
              className="text-mono mb-5"
            >
              02 — Selected Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-display font-bold leading-tight text-white"
            >
              Things I&apos;ve
              <br />
              <span className="text-gradient">Built</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[14px] text-white/30 max-w-xs leading-relaxed"
          >
            A focused selection of projects — each one a deliberate exercise in craft.
          </motion.p>
        </div>

        {/* Project grid — 2 columns on desktop, 1 on mobile */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
