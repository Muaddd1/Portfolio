import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle } from 'lucide-react';
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

export default function Contact() {
  const [sent, setSent] = useState(false);

  // Check if redirected back after FormSubmit submission
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('sent') === '1') {
      setSent(true);
      // Clean URL without reload
      window.history.replaceState({}, '', window.location.pathname + '#contact');
      // Scroll to contact
      setTimeout(() => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  return (
    <section
      id="contact"
      className="py-48 relative"
      aria-label="Contact"
    >
      <div className="absolute inset-0 bg-void" aria-hidden="true" />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left — heading + info */}
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '0px 0px 100px 0px' }}
              className="text-mono mb-6"
            >
              06 — Contact
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px 100px 0px' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.5rem,5vw,3.8rem)] font-display font-bold leading-tight text-white mb-6"
            >
              Let&apos;s build
              <br />
              <span className="text-gradient">something</span>
              <br />
              great.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px 100px 0px' }}
              transition={{ delay: 0.08, duration: 0.5 }}
              className="text-[14px] text-white/30 leading-relaxed mb-12"
            >
              Open to full-time roles and freelance projects — have an opportunity
              in mind or just want to say hello, my inbox is always open.
              Typical response time: under 24 hours.
            </motion.p>

            {/* Direct contact links */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px 100px 0px' }}
              transition={{ delay: 0.14, duration: 0.5 }}
              className="flex flex-col gap-5 mb-12"
            >
              <a
                href="mailto:smoad5456@gmail.com"
                className="flex items-center gap-4 text-[14px] text-white/50 hover:text-cyan transition-colors duration-300 group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:border-cyan/20 group-hover:bg-cyan/5 transition-all duration-300">
                  <Mail size={15} className="text-white/30 group-hover:text-cyan transition-colors" />
                </div>
                smoad5456@gmail.com
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
              viewport={{ once: true, margin: '0px 0px 100px 0px' }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center gap-3 bg-emerald-500/5 border border-emerald-500/10 rounded-lg px-5 py-3"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[12px] font-mono text-emerald-400/70 uppercase tracking-wider">
                Open to full-time roles & freelance work
              </span>
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px 100px 0px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="lg:col-span-7"
          >
            {sent ? (
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
                  onClick={() => setSent(false)}
                  className="text-[12px] font-mono text-cyan/60 hover:text-cyan transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                action="https://formsubmit.co/raidteeech@gmail.com"
                method="POST"
              >
                {/* FormSubmit config */}
                <input type="hidden" name="_subject" value="New Contact from Portfolio" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://muad-portfolio.vercel.app/#contact?sent=1" />

                <div className="flex flex-col gap-5">
                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-[11px] font-mono tracking-[0.15em] text-white/30 uppercase">
                        Name <span className="text-red-400/50">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        autoComplete="name"
                        placeholder="John Smith"
                        className="w-full bg-white/[0.02] border border-white/[0.07] rounded-sm px-5 py-4 text-[14px] text-white placeholder:text-white/20 focus:outline-none focus:border-cyan/40 focus:bg-cyan-dim transition-all duration-300"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[11px] font-mono tracking-[0.15em] text-white/30 uppercase">
                        Email <span className="text-red-400/50">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        autoComplete="email"
                        placeholder="john@company.com"
                        className="w-full bg-white/[0.02] border border-white/[0.07] rounded-sm px-5 py-4 text-[14px] text-white placeholder:text-white/20 focus:outline-none focus:border-cyan/40 focus:bg-cyan-dim transition-all duration-300"
                      />
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
                      name="company"
                      autoComplete="organization"
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
                        name="projectType"
                        className="w-full bg-white/[0.02] border border-white/[0.07] rounded-sm px-5 py-4 text-[14px] text-white/50 focus:outline-none focus:border-cyan/40 focus:bg-cyan-dim transition-all duration-300 appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#1c1812]">Select type...</option>
                        <option value="Full-Time Position" className="bg-[#1c1812]">Full-Time Position</option>
                        <option value="Website" className="bg-[#1c1812]">Website</option>
                        <option value="Web Application" className="bg-[#1c1812]">Web Application</option>
                        <option value="Landing Page" className="bg-[#1c1812]">Landing Page</option>
                        <option value="E-commerce" className="bg-[#1c1812]">E-commerce</option>
                        <option value="SaaS Product" className="bg-[#1c1812]">SaaS Product</option>
                        <option value="Frontend Only" className="bg-[#1c1812]">Frontend Only</option>
                        <option value="Full-Stack App" className="bg-[#1c1812]">Full-Stack App</option>
                        <option value="Website Redesign" className="bg-[#1c1812]">Website Redesign</option>
                        <option value="Other" className="bg-[#1c1812]">Other</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="budget" className="text-[11px] font-mono tracking-[0.15em] text-white/30 uppercase">
                        Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        className="w-full bg-white/[0.02] border border-white/[0.07] rounded-sm px-5 py-4 text-[14px] text-white/50 focus:outline-none focus:border-cyan/40 focus:bg-cyan-dim transition-all duration-300 appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#1c1812]">Select range...</option>
                        <option value="N/A — Full-Time Role" className="bg-[#1c1812]">N/A — Full-Time Role</option>
                        <option value="Under $500" className="bg-[#1c1812]">Under $500</option>
                        <option value="$500 – $1,000" className="bg-[#1c1812]">$500 – $1,000</option>
                        <option value="$1,000 – $2,500" className="bg-[#1c1812]">$1,000 – $2,500</option>
                        <option value="$2,500 – $5,000" className="bg-[#1c1812]">$2,500 – $5,000</option>
                        <option value="$5,000 – $10,000" className="bg-[#1c1812]">$5,000 – $10,000</option>
                        <option value="$10,000+" className="bg-[#1c1812]">$10,000+</option>
                        <option value="Not sure yet" className="bg-[#1c1812]">Not sure yet</option>
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
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project — what you're building, your timeline, and any specific requirements..."
                      className="w-full bg-white/[0.02] border border-white/[0.07] rounded-sm px-5 py-4 text-[14px] text-white placeholder:text-white/20 focus:outline-none focus:border-cyan/40 focus:bg-cyan-dim transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn-primary self-start group"
                  >
                    Send Message
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-200">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
