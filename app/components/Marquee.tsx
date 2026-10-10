const items = [
  '3D Modeling',
  'V-Ray',
  'Photorealistic Rendering',
  '3ds Max',
  'Lighting Design',
  'SketchUp',
  'Material & Texture',
  'AutoCAD',
  'Space Planning',
  'Lumion',
  'Camera Composition',
  'Photoshop',
];

export default function Marquee() {
  return (
    <div className="border-y border-ink-900/10 bg-sand-100 py-4 sm:py-5">
      <div className="flex w-max animate-marquee items-center gap-6 whitespace-nowrap sm:gap-10">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-6 sm:gap-10">
            <span className="font-display text-base tracking-wide text-ink-800/80 sm:text-lg">{item}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-clay-500/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
