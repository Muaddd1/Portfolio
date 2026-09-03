import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { personal } from '../data/personal';

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-48 relative"
      aria-label="Contact"
    >
      <div className="absolute inset-0 bg-void" aria-hidden="true" />
      <div className="absolute inset-0 grid-overlay" aria-hidden="true" />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" aria-hidden="true" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-12 gap-20">
          {/* Left — heading */}
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-mono mb-6"
            >
              05 — Contact
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.5rem,5vw,4rem)] font-display font-bold leading-tight text-white mb-8"
            >
              Let&apos;s build
              <br />
              <span className="text-gradient">something</span>
              <br />
              great.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="text-[14px] text-white/30 leading-relaxed mb-14"
            >
              Have a project in mind or just want to say hello —
              my inbox is always open.
            </motion.p>

            {/* Direct links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="flex flex-col gap-4"
            >
              <a
                href={`mailto:${personal.contact.email}`}
                className="flex items-center gap-4 text-[14px] text-white/50 hover:text-cyan transition-colors duration-300 group"
              >
                <Mail size={16} className="text-white/20 group-hover:text-cyan transition-colors" />
                {personal.contact.email}
              </a>
              <a
                href={personal.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[14px] text-white/50 hover:text-cyan transition-colors duration-300 group"
              >
                <GitHubIcon />
                github.com/mouadsehli
              </a>
              <a
                href={personal.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[14px] text-white/50 hover:text-cyan transition-colors duration-300 group"
              >
                <LinkedInIcon />
                linkedin.com/in/mouadsehli
              </a>
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[11px] font-mono tracking-[0.15em] text-white/30 uppercase">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="Your name"
                    className="w-full bg-white/[0.02] border border-white/[0.07] rounded-sm px-5 py-4 text-[14px] text-white placeholder:text-white/20 focus:outline-none focus:border-cyan/40 focus:bg-cyan-dim transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[11px] font-mono tracking-[0.15em] text-white/30 uppercase">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="you@example.com"
                    className="w-full bg-white/[0.02] border border-white/[0.07] rounded-sm px-5 py-4 text-[14px] text-white placeholder:text-white/20 focus:outline-none focus:border-cyan/40 focus:bg-cyan-dim transition-all duration-300"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[11px] font-mono tracking-[0.15em] text-white/30 uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/[0.02] border border-white/[0.07] rounded-sm px-5 py-4 text-[14px] text-white placeholder:text-white/20 focus:outline-none focus:border-cyan/40 focus:bg-cyan-dim transition-all duration-300 resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="group flex items-center gap-3 self-start px-8 py-4 bg-cyan text-void text-[12px] font-mono tracking-[0.15em] uppercase hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded-sm"
              >
                {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent' : 'Send Message'}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
