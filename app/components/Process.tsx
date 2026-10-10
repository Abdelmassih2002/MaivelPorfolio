'use client';

import { motion } from 'motion/react';
import Reveal from './Reveal';
import { processSteps } from '../lib/data';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Process() {
  return (
    <section id="process" className="py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.28em] text-clay-600">
              How I Work
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-[clamp(2rem,6vw,3.25rem)] leading-[1.08] text-ink-900">
              My visualization process
            </h2>
            </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 text-base leading-relaxed text-ink-700/90">
              A clear, five-step workflow that moves from first understanding to a polished,
              presentation-ready result.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-[34px] hidden h-px bg-ink-900/15 lg:block" />
          <motion.div
            className="absolute left-0 top-[34px] hidden h-px bg-clay-500 lg:block"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.4, ease }}
          />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {processSteps.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.1}>
                <div className="group">
                  <div className="relative mb-6 flex items-center gap-4 lg:block">
                    <span className="relative z-10 flex h-[68px] w-[68px] items-center justify-center rounded-full border border-ink-900/15 bg-cream font-display text-2xl text-ink-900 transition-colors duration-300 group-hover:border-clay-500 group-hover:bg-clay-500 group-hover:text-cream">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-ink-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700/85">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
