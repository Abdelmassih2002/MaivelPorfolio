'use client';

import Reveal from './Reveal';
import { motion } from 'motion/react';

const credentials = [
  { k: 'University', v: 'Faculty of Fine Arts — Capital University' },
  { k: 'Major', v: 'Interior Architecture' },
  { k: 'Graduation', v: 'Class of 2026 · Very Good' },
  { k: 'Training', v: 'Nabil Raouf Designs' },
];

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 sm:gap-14 sm:px-6 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="relative">
              <div className="absolute -right-3 -top-3 h-full w-full rounded-[1.5rem] bg-sand-200 sm:-right-4 sm:-top-4 sm:rounded-[2rem]" />
              <div className="relative overflow-hidden rounded-[1.5rem] shadow-xl shadow-ink-900/10 sm:rounded-[2rem]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1000"
                  alt="Interior space designed by Maivel Moneer"
                  className="h-[400px] w-full object-cover sm:h-[520px] lg:h-[560px]"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                className="absolute -bottom-5 -left-5 flex h-24 w-24 items-center justify-center rounded-full bg-clay-500 text-center text-[10px] uppercase leading-tight tracking-[0.18em] text-cream"
              >
                Interior
                <br />
                Architecture
              </motion.div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pt-6">
          <Reveal delay={0.05}>
            <span className="text-[11px] uppercase tracking-[0.28em] text-clay-600">About Me</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-[clamp(2rem,6vw,3.25rem)] leading-[1.08] text-ink-900">
              Translating design concepts into clear, realistic visual stories.
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 text-base leading-relaxed text-ink-700/90">
              I&apos;m an Interior Designer and a 2026 graduate of the{' '}
              <strong className="font-semibold text-ink-900">Faculty of Fine Arts (Capital University)</strong>,
              specializing in Interior Architecture with a <strong className="font-semibold text-ink-900">Very Good</strong>{' '}
              overall grade. My core interest lies in 3D visualization and interior space design.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-4 text-base leading-relaxed text-ink-700/90">
              Through academic milestones, professional training at Nabil Raouf Designs, and
              real-world projects, I focus heavily on material selection, lighting accuracy, and
              intricate detail — bringing architectural concepts to life with warmth and precision.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink-900/10 bg-ink-900/10 sm:grid-cols-2">
              {credentials.map((c) => (
                <div key={c.k} className="bg-cream p-5">
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-muted">{c.k}</dt>
                  <dd className="mt-1.5 text-sm font-medium text-ink-900">{c.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
