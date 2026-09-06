import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Mail } from 'lucide-react';

interface Command {
  id: string;
  label: string;
  icon: React.ReactNode;
  action: () => void;
  group: string;
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: Command[] = [
    {
      id: 'home',
      label: 'Go to Home',
      icon: <Search size={14} />,
      action: () => { document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); },
      group: 'Navigate',
    },
    {
      id: 'about',
      label: 'View About',
      icon: <Search size={14} />,
      action: () => { document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); },
      group: 'Navigate',
    },
    {
      id: 'projects',
      label: 'View Projects',
      icon: <Search size={14} />,
      action: () => { document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); },
      group: 'Navigate',
    },
    {
      id: 'skills',
      label: 'View Skills',
      icon: <Search size={14} />,
      action: () => { document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); },
      group: 'Navigate',
    },
    {
      id: 'experience',
      label: 'View Experience',
      icon: <Search size={14} />,
      action: () => { document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); },
      group: 'Navigate',
    },
    {
      id: 'contact',
      label: 'Go to Contact',
      icon: <Search size={14} />,
      action: () => { document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); },
      group: 'Navigate',
    },
    {
      id: 'github',
      label: 'GitHub Profile',
      icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>,
      action: () => { window.open('https://github.com/Muaddd1', '_blank'); setOpen(false); },
      group: 'External',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn Profile',
      icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
      action: () => { window.open('https://www.linkedin.com/in/moad-sehli-553b46283/', '_blank'); setOpen(false); },
      group: 'External',
    },
    {
      id: 'email',
      label: 'Send Email',
      icon: <Mail size={14} />,
      action: () => { window.location.href = 'mailto:smoad5456@gmail.com'; setOpen(false); },
      group: 'External',
    },
    {
      id: 'products',
      label: 'View Products',
      icon: <Search size={14} />,
      action: () => { window.open('https://muadme.gumroad.com', '_blank'); setOpen(false); },
      group: 'External',
    },
  ];

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  const grouped = filtered.reduce<Record<string, Command[]>>((acc, cmd) => {
    if (!acc[cmd.group]) acc[cmd.group] = [];
    acc[cmd.group].push(cmd);
    return acc;
  }, {});

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery('');
      setSelected(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    setSelected(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelected((s) => Math.min(s + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelected((s) => Math.max(s - 1, 0));
    } else if (e.key === 'Enter' && filtered[selected]) {
      filtered[selected].action();
    }
  };

  let flatIndex = 0;

  return (
    <>
      {/* Trigger hint */}
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-2.5 text-[11px] font-mono text-white/30 hover:text-white/60 hover:border-white/[0.12] transition-all duration-300"
        aria-label="Open command palette"
      >
        <Search size={12} />
        <span>⌘K</span>
      </button>

      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-void/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Palette */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 z-50 w-full max-w-lg mx-4"
          >
            <div className="bg-[#0d1117] border border-white/[0.08] rounded-xl overflow-hidden shadow-2xl shadow-black/60">
              {/* Search input */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.06]">
                <Search size={16} className="text-white/30 flex-shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search commands..."
                  className="flex-1 bg-transparent text-[14px] text-white placeholder:text-white/20 focus:outline-none"
                  aria-label="Search commands"
                />
                <button
                  onClick={() => setOpen(false)}
                  className="text-white/20 hover:text-white/50 transition-colors"
                  aria-label="Close"
                >
                  <X size={14} />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-80 overflow-y-auto py-2">
                {filtered.length === 0 ? (
                  <div className="px-5 py-8 text-center text-[13px] text-white/30">
                    No results for &quot;{query}&quot;
                  </div>
                ) : (
                  Object.entries(grouped).map(([group, cmds]) => (
                    <div key={group}>
                      <p className="px-5 py-2 text-[10px] font-mono text-white/20 uppercase tracking-widest">
                        {group}
                      </p>
                      {cmds.map((cmd) => {
                        const isSelected = filtered[selected]?.id === cmd.id;
                        const currentIndex = flatIndex++;
                        return (
                          <button
                            key={cmd.id}
                            onClick={cmd.action}
                            onMouseEnter={() => setSelected(currentIndex)}
                            className={`w-full flex items-center gap-3 px-5 py-3 text-left transition-colors duration-150 ${
                              isSelected
                                ? 'bg-cyan/10 text-cyan'
                                : 'text-white/50 hover:text-white/80 hover:bg-white/[0.02]'
                            }`}
                          >
                            <span className={isSelected ? 'text-cyan' : 'text-white/25'}>
                              {cmd.icon}
                            </span>
                            <span className="text-[13px] flex-1">{cmd.label}</span>
                            {isSelected && (
                              <ArrowRight size={12} className="text-cyan/50" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="px-5 py-3 border-t border-white/[0.06] flex items-center gap-4">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-white/20">
                  <span className="bg-white/10 px-1.5 py-0.5 rounded text-white/30">↑↓</span>
                  Navigate
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-white/20">
                  <span className="bg-white/10 px-1.5 py-0.5 rounded text-white/30">↵</span>
                  Select
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-white/20">
                  <span className="bg-white/10 px-1.5 py-0.5 rounded text-white/30">esc</span>
                  Close
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
