'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Reveal from './Reveal';
import { projects, type Project } from '../lib/data';

const ease = [0.22, 1, 0.36, 1] as const;

const tabs: { id: 'all' | Project['category']; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'professional', label: 'Professional' },
  { id: 'graduation', label: 'Graduation' },
  { id: 'academic', label: 'Academic' },
];

export default function Projects() {
  const [active, setActive] = useState<'all' | Project['category']>('all');
  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="bg-ink-900 py-16 text-cream sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <span className="text-[11px] uppercase tracking-[0.28em] text-sand-300">
                Selected Projects
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-[clamp(2rem,6vw,3.25rem)] leading-[1.08] text-cream">
                Work that speaks in light, material &amp; space
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.14}>
            <div className="flex flex-wrap gap-2">
              {tabs.map((t) => {
                const isActive = active === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActive(t.id)}
                    className={`relative rounded-full px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                      isActive ? 'text-ink-900' : 'text-cream/70 hover:text-cream'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="tab-pill"
                        className="absolute inset-0 rounded-full bg-cream"
                        transition={{ type: 'spring', stiffness: 320, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{t.label}</span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <motion.div layout className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6, ease }}
                className="group overflow-hidden rounded-3xl bg-ink-800/60 ring-1 ring-cream/10"
              >
                <div className="relative h-72 overflow-hidden sm:h-80">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-cream/95 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.18em] text-ink-900">
                    {p.status}
                  </span>
                  <span className="absolute right-5 top-5 rounded-full bg-ink-900/70 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.18em] text-cream backdrop-blur-sm">
                    {p.location}
                  </span>
                </div>

                <div className="p-6 sm:p-7">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-sand-300">{p.client}</p>
                  <h3 className="mt-2 font-display text-xl text-cream sm:text-2xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/70">{p.description}</p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.highlights.map((h) => (
                      <li
                        key={h}
                        className="rounded-full border border-cream/15 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-cream/70"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
