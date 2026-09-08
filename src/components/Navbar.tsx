import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-px bg-cyan z-[60] origin-left"
        style={{ width: `${scrollProgress}%` }}
        transition={{ ease: 'linear', duration: 0 }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-void/90 backdrop-blur-md border-b border-white/[0.04]'
            : 'bg-transparent'
        }`}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-20">

            {/* Wordmark */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
              className="group flex items-center gap-3"
              aria-label="Mouad Sehli — Home"
            >
              <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white font-mono text-xs font-medium tracking-wider group-hover:bg-cyan/10 group-hover:border-cyan/20 transition-all duration-300">
                MS
              </div>
              <span className="text-[13px] font-medium text-white/80 tracking-wide hidden sm:block">
                MOUAD SEHLI
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              {navLinks.map(({ href, label }) => {
                const id = href.slice(1);
                const isActive = activeSection === id;
                return (
                  <a
                    key={href}
                    href={href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                    className="relative text-[12px] font-mono tracking-[0.12em] uppercase transition-colors duration-300 group"
                    aria-current={isActive ? 'location' : undefined}
                  >
                    <span className={isActive ? 'text-white' : 'text-white/35 hover:text-white/70'}>
                      {label}
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-px bg-cyan"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
              <a
                href="https://muadme.gumroad.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-[11px] font-mono tracking-[0.12em] uppercase px-4 py-2 rounded-sm border border-cyan/20 text-cyan/70 hover:bg-cyan/10 hover:text-cyan hover:border-cyan/40 transition-all duration-300"
              >
                Products
              </a>
            </nav>

            {/* Status + toggle */}
            <div className="flex items-center gap-5">
              <span className="hidden md:flex items-center gap-2 text-[11px] font-mono text-white/30 tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open to work
              </span>
              <button
                onClick={() => setOpen((o) => !o)}
                className="md:hidden w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                aria-expanded={open}
                aria-label={open ? 'Close menu' : 'Open menu'}
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-void flex flex-col"
          >
            <div className="flex items-center justify-between h-20 px-6 border-b border-white/[0.04]">
              <span className="text-[13px] font-mono text-white/60 tracking-widest">MENU</span>
              <button
                onClick={() => setOpen(false)}
                className="w-10 h-10 flex items-center justify-center text-white/60"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center px-6 gap-1">
              {navLinks.map(({ href, label }, i) => {
                const id = href.slice(1);
                const isActive = activeSection === id;
                return (
                  <motion.a
                    key={href}
                    href={href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className={`text-4xl font-display font-bold py-3 transition-colors duration-300 ${
                      isActive ? 'text-cyan' : 'text-white/20 hover:text-white/60'
                    }`}
                  >
                    {label}
                  </motion.a>
                );
              })}
              <motion.a
                href="https://muadme.gumroad.com"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl font-display font-bold text-white/20 hover:text-cyan py-3 transition-colors duration-300"
              >
                Products
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
