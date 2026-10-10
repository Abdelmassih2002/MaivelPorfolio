'use client';

import Reveal from './Reveal';
import { FaEnvelope, FaLinkedin, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const details = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'maivelmoneer97@gmail.com',
    href: 'mailto:maivelmoneer97@gmail.com',
  },
  {
    icon: FaPhoneAlt,
    label: 'Phone',
    value: '01030876730',
    href: 'tel:+201030876730',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'maivel-moneer',
    href: 'https://linkedin.com/in/maivel-moneer-73760731a',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'Nasr City, Cairo, Egypt',
    href: undefined,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-sand-100 py-16 sm:py-24 md:py-32">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-clay-500/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-[11px] uppercase tracking-[0.28em] text-clay-600">
                Let&apos;s Connect
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-[clamp(2.1rem,7vw,4rem)] leading-[1.06] text-ink-900">
                Let&apos;s create something
                <br />
                <span className="italic text-clay-600">beautiful</span> together.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-700/90">
                Open for opportunities in Interior Architecture, 3D visualization, and design
                collaborations. Reach out and let&apos;s bring your space to life.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <a
                href="mailto:maivelmoneer97@gmail.com"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-ink-900 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-cream transition-transform duration-300 hover:-translate-y-0.5 hover:bg-clay-600"
              >
                Start a conversation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink-900/10 bg-ink-900/10 sm:grid-cols-2">
              {details.map((d, i) => {
                const Icon = d.icon;
                const content = (
                  <>
                    <Icon className="text-clay-600" size={16} />
                    <span className="mt-4 block text-[10px] uppercase tracking-[0.2em] text-muted">
                      {d.label}
                    </span>
                    <span className="mt-1 block text-sm font-medium text-ink-900">{d.value}</span>
                  </>
                );
                return (
                  <Reveal key={d.label} delay={i * 0.06}>
                    {d.href ? (
                      <a
                        href={d.href}
                        target={d.href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                        className="block h-full bg-cream p-6 transition-colors duration-300 hover:bg-white"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="h-full bg-cream p-6">{content}</div>
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
