'use client';

import { motion } from 'motion/react';
import Reveal from './Reveal';
import { skills, software } from '../lib/data';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Skills() {
  return (
    <section id="skills" className="bg-shell py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Reveal>
              <span className="text-[11px] uppercase tracking-[0.28em] text-clay-600">
                Skills &amp; Tools
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-[clamp(2rem,6vw,3.25rem)] leading-[1.08] text-ink-900">
                Core skills &amp; software proficiency
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={0.14}>
              <p className="text-sm leading-relaxed text-ink-700/90">
                From concept and space planning to detailed, photorealistic rendering — a complete
                visualization workflow built on industry-standard software.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Expertise grid */}
          <div className="lg:col-span-7">
            <Reveal>
              <h3 className="text-[11px] uppercase tracking-[0.24em] text-muted">
                Design &amp; Technical
              </h3>
            </Reveal>
            <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink-900/10 bg-ink-900/10 sm:grid-cols-2">
              {skills.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.04}>
                  <div className="group h-full bg-cream p-5 transition-colors duration-300 hover:bg-white">
                    <div className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay-500 transition-transform duration-300 group-hover:scale-150" />
                      <div>
                        <p className="text-sm font-semibold text-ink-900">{s.title}</p>
                        <p className="mt-0.5 text-xs text-muted">{s.desc}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Software bars */}
          <div className="lg:col-span-5">
            <Reveal>
              <h3 className="text-[11px] uppercase tracking-[0.24em] text-muted">
                Software Stack
              </h3>
            </Reveal>
            <div className="mt-6 space-y-6 rounded-2xl border border-ink-900/10 bg-cream p-7">
              {software.map((sw, i) => (
                <div key={sw.name}>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-medium text-ink-900">{sw.name}</span>
                    <span className="font-display text-sm text-clay-600">{sw.level}%</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-sand-200">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-clay-500 to-ink-700"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${sw.level}%` }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 1.1, ease, delay: 0.15 + i * 0.08 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
