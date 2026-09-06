import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle, Github, Linkedin } from 'lucide-react';
import { personal } from '../data/personal';

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const projectTypes = [
  'Website', 'Web Application', 'Landing Page', 'E-commerce', 'SaaS Product',
  'Frontend Only', 'Full-Stack App', 'Website Redesign', 'Other',
];

const budgetRanges = [
  'Under $500', '$500 – $1,000', '$1,000 – $2,500', '$2,500 – $5,000',
  '$5,000 – $10,000', '$10,000+', 'Not sure yet',
];

interface FormState {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '', email: '', company: '', projectType: '', budget: '', message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Enter a valid email';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    // Simulate submission (replace with actual endpoint)
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('sent');
    setForm({ name: '', email: '', company: '', projectType: '', budget: '', message: '' });
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
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left — heading + info */}
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-mono mb-6"
            >
              07 — Contact
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.5rem,5vw,3.8rem)] font-display font-bold leading-tight text-white mb-6"
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
              className="text-[14px] text-white/30 leading-relaxed mb-12"
            >
              Have a project in mind or just want to say hello —
              my inbox is always open. Typical response time: under 24 hours.
            </motion.p>

            {/* Direct contact links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="flex flex-col gap-5 mb-12"
            >
              <a
                href={`mailto:${personal.contact.email}`}
                className="flex items-center gap-4 text-[14px] text-white/50 hover:text-cyan transition-colors duration-300 group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:border-cyan/20 group-hover:bg-cyan/5 transition-all duration-300">
                  <Mail size={15} className="text-white/30 group-hover:text-cyan transition-colors" />
                </div>
                {personal.contact.email}
              </a>
              <a
                href={personal.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[14px] text-white/50 hover:text-cyan transition-colors duration-300 group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:border-cyan/20 group-hover:bg-cyan/5 transition-all duration-300">
                  <GitHubIcon />
                </div>
                github.com/Muaddd1
              </a>
              <a
                href={personal.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[14px] text-white/50 hover:text-cyan transition-colors duration-300 group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:border-cyan/20 group-hover:bg-cyan/5 transition-all duration-300">
                  <LinkedInIcon />
                </div>
                linkedin.com/in/moad-sehli
              </a>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="inline-flex items-center gap-3 bg-emerald-500/5 border border-emerald-500/10 rounded-lg px-5 py-3"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[12px] font-mono text-emerald-400/70 uppercase tracking-wider">
                Available for projects
              </span>
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
            {status === 'sent' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-24 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-cyan/10 border border-cyan/20 flex items-center justify-center mb-6">
                  <CheckCircle size={28} className="text-cyan" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-3">Message sent!</h3>
                <p className="text-[14px] text-white/40 mb-8 max-w-sm">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-[12px] font-mono text-cyan/60 hover:text-cyan transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[11px] font-mono tracking-[0.15em] text-white/30 uppercase">
                      Name <span className="text-red-400/50">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="John Smith"
                      className={`w-full bg-white/[0.02] border rounded-sm px-5 py-4 text-[14px] text-white placeholder:text-white/20 focus:outline-none transition-all duration-300 ${
                        errors.name ? 'border-red-500/40 bg-red-500/5' : 'border-white/[0.07] focus:border-cyan/40 focus:bg-cyan-dim'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-400/70">{errors.name}</p>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[11px] font-mono tracking-[0.15em] text-white/30 uppercase">
                      Email <span className="text-red-400/50">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="john@company.com"
                      className={`w-full bg-white/[0.02] border rounded-sm px-5 py-4 text-[14px] text-white placeholder:text-white/20 focus:outline-none transition-all duration-300 ${
                        errors.email ? 'border-red-500/40 bg-red-500/5' : 'border-white/[0.07] focus:border-cyan/40 focus:bg-cyan-dim'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-400/70">{errors.email}</p>}
                  </div>
                </div>

                {/* Company */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-[11px] font-mono tracking-[0.15em] text-white/30 uppercase">
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    autoComplete="organization"
                    value={form.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    placeholder="Your company or organisation (optional)"
                    className="w-full bg-white/[0.02] border border-white/[0.07] rounded-sm px-5 py-4 text-[14px] text-white placeholder:text-white/20 focus:outline-none focus:border-cyan/40 focus:bg-cyan-dim transition-all duration-300"
                  />
                </div>

                {/* Project Type + Budget */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="projectType" className="text-[11px] font-mono tracking-[0.15em] text-white/30 uppercase">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      value={form.projectType}
                      onChange={(e) => handleChange('projectType', e.target.value)}
                      className="w-full bg-white/[0.02] border border-white/[0.07] rounded-sm px-5 py-4 text-[14px] text-white/50 focus:outline-none focus:border-cyan/40 focus:bg-cyan-dim transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#0d1117]">Select type...</option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t} className="bg-[#0d1117]">{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="budget" className="text-[11px] font-mono tracking-[0.15em] text-white/30 uppercase">
                      Budget
                    </label>
                    <select
                      id="budget"
                      value={form.budget}
                      onChange={(e) => handleChange('budget', e.target.value)}
                      className="w-full bg-white/[0.02] border border-white/[0.07] rounded-sm px-5 py-4 text-[14px] text-white/50 focus:outline-none focus:border-cyan/40 focus:bg-cyan-dim transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#0d1117]">Select range...</option>
                      {budgetRanges.map((b) => (
                        <option key={b} value={b} className="bg-[#0d1117]">{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[11px] font-mono tracking-[0.15em] text-white/30 uppercase">
                    Message <span className="text-red-400/50">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Tell me about your project — what you're building, your timeline, and any specific requirements..."
                    className={`w-full bg-white/[0.02] border rounded-sm px-5 py-4 text-[14px] text-white placeholder:text-white/20 focus:outline-none focus:border-cyan/40 focus:bg-cyan-dim transition-all duration-300 resize-none ${
                      errors.message ? 'border-red-500/40 bg-red-500/5' : 'border-white/[0.07]'
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-red-400/70">{errors.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary self-start group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
