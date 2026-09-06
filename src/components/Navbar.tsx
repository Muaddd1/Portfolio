import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { personal } from '../data/personal';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: 'https://muadme.gumroad.com', label: 'Products', external: true },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
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
              className="group flex items-center gap-3"
              aria-label="Mouad Sehli — Home"
            >
              <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white font-mono text-xs font-medium tracking-wider group-hover:bg-cyan-dim group-hover:border-cyan/20 transition-all duration-300">
                MS
              </div>
              <span className="text-[13px] font-medium text-white/80 tracking-wide hidden sm:block">
                MOUAD SEHLI
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
              {navLinks.map(({ href, label, external }) => (
                <a
                  key={href}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="text-[12px] font-mono tracking-[0.15em] text-white/40 hover:text-cyan transition-colors duration-300 uppercase"
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* Status + toggle */}
            <div className="flex items-center gap-5">
              <span className="hidden md:flex items-center gap-2 text-[11px] font-mono text-white/30 tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
                AVAILABLE
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
            <nav className="flex-1 flex flex-col justify-center px-6 gap-2">
              {navLinks.map(({ href, label, external }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  onClick={() => !external && setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl font-display font-bold text-white/20 hover:text-white transition-colors duration-300 py-3"
                >
                  {label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
