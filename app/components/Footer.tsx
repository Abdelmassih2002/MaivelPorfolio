export default function Footer() {
  return (
    <footer className="border-t border-ink-900/10 bg-cream">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg font-semibold uppercase tracking-wide text-ink-900">
            Maivel Moneer
          </p>
          <p className="text-[10px] uppercase tracking-[0.24em] text-muted">
            Interior Designer · 3D Visualizer
          </p>
        </div>
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Maivel Moneer. All rights reserved. Designed with elegance.
        </p>
        <a
          href="#top"
          className="text-[11px] uppercase tracking-[0.2em] text-ink-700 transition-colors hover:text-clay-600"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
