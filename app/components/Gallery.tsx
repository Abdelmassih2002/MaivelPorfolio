'use client';

import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Reveal from './Reveal';
import { galleryPages } from '../lib/data';

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const isOpen = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % galleryPages.length)),
    []
  );
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + galleryPages.length) % galleryPages.length)),
    []
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, close, next, prev]);

  return (
    <section id="gallery" className="py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <span className="text-[11px] uppercase tracking-[0.28em] text-clay-600">
                Full Portfolio
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-[clamp(2rem,6vw,3.25rem)] leading-[1.08] text-ink-900">
                The complete portfolio book
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-4 text-sm leading-relaxed text-ink-700/90">
                Browse every page of the original portfolio — from concept boards to final
                renders. Tap any page to view it in full.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <span className="text-sm text-muted">{galleryPages.length} pages</span>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-4">
          {galleryPages.map((src, i) => (
            <Reveal key={src} delay={(i % 8) * 0.04}>
              <button
                onClick={() => setIndex(i)}
                className="group relative block w-full overflow-hidden rounded-xl border border-ink-900/10 bg-white shadow-sm"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`Portfolio page ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <span className="absolute inset-0 flex items-end justify-between bg-ink-900/0 p-3 opacity-0 transition-all duration-300 group-hover:bg-ink-900/40 group-hover:opacity-100">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-cream">
                    Page {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="rounded-full bg-cream px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-ink-900">
                    View
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink-900/95 p-4 backdrop-blur-sm"
            onClick={close}
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 text-cream/70 transition hover:text-cream"
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
              className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream transition hover:bg-cream/20"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <motion.img
              key={index}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              src={galleryPages[index as number]}
              alt={`Portfolio page ${(index as number) + 1}`}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[88vh] max-w-[92vw] rounded-lg object-contain shadow-2xl"
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
              className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream transition hover:bg-cream/20"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.2em] text-cream/70">
              {(index as number) + 1} / {galleryPages.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
