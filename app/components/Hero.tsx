'use client';

import { motion } from 'motion/react';
import { stats } from '../lib/data';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28">
      {/* soft ambient blobs */}
      <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-sand-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-clay-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.12 }}
            className="font-display text-[clamp(2.1rem,8.5vw,4.5rem)] leading-[1.04] text-ink-900"
          >
            Interior Designer &amp;
            <br />
            <span className="italic text-clay-600">3D Visualization</span>
            <br />
            Specialist
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.24 }}
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-700/90 sm:mt-7 sm:text-base lg:text-lg"
          >
            Creating spaces that blend modern elegance with warm, human-centric design. A 2026
            graduate of the Faculty of Fine Arts, specializing in Interior Architecture — turning
            concepts into clear, photorealistic visual representations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.36 }}
            className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-ink-900 px-8 py-3.5 text-center text-[11px] uppercase tracking-[0.2em] text-cream transition-transform duration-300 hover:-translate-y-0.5 hover:bg-clay-600"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-ink-900/25 px-8 py-3.5 text-center text-[11px] uppercase tracking-[0.2em] text-ink-900 transition-colors duration-300 hover:border-ink-900 hover:bg-ink-900 hover:text-cream"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.48 }}
            className="mt-10 grid max-w-lg grid-cols-2 gap-x-6 gap-y-6 border-t border-ink-900/10 pt-7 sm:mt-12 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl text-ink-900">{s.value}</dt>
                <dd className="mt-1 text-[10px] uppercase tracking-[0.18em] text-muted">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, ease, delay: 0.2 }}
            className="relative mx-auto w-full max-w-sm sm:max-w-md"
          >
            <div className="absolute -left-3 -top-3 h-full w-full rounded-[1.5rem] border border-clay-500/30 sm:-left-4 sm:-top-4 sm:rounded-[2rem]" />
            <div className="relative overflow-hidden rounded-[1.5rem] shadow-2xl shadow-ink-900/20 sm:rounded-[2rem]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000"
                alt="Elegant interior design visualization"
                className="h-[380px] w-full object-cover sm:h-[460px] lg:h-[520px]"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.8 }}
              className="absolute -bottom-5 -right-2 rounded-2xl bg-ink-900 px-5 py-4 text-cream shadow-xl sm:-bottom-6 sm:-right-4 sm:px-6 sm:py-5"
            >
              <p className="font-display text-xl leading-none sm:text-2xl">Very Good</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-cream/60">
                Graduation Grade
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
