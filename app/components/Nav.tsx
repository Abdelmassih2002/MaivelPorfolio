'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills & Tools' },
  { href: '#process', label: 'Process' },
  { href: '#projects', label: 'Projects' },
  { href: '#gallery', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -36, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-ink-900/10 bg-cream/80 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6">
          <a href="#top" className="font-display leading-none">
            <span className="text-base font-semibold uppercase tracking-wide text-ink-900 sm:text-lg">
              Maivel Moneer
            </span>
            <span className="ml-3 hidden align-middle text-[10px] uppercase tracking-[0.28em] text-muted md:inline">
              Interior Designer
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-[11px] uppercase tracking-[0.2em] text-ink-700 transition-colors hover:text-ink-900"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-clay-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full bg-ink-900 px-6 py-2.5 text-[11px] uppercase tracking-[0.2em] text-cream transition-colors hover:bg-clay-600 lg:inline-block"
          >
            Let&apos;s talk
          </a>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="lg:hidden"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="#231e19" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col bg-cream lg:hidden"
          >
            <div className="flex h-20 items-center justify-between px-6">
              <span className="font-display text-lg font-semibold uppercase tracking-wide text-ink-900">
                Maivel Moneer
              </span>
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M18 6L6 18" stroke="#231e19" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-2 px-8">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-4xl text-ink-900"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="px-8 pb-12 text-sm text-muted">
              maivelmoneer97@gmail.com · 01030876730
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
