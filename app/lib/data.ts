export type Project = {
  id: number;
  title: string;
  category: 'professional' | 'graduation' | 'academic';
  client: string;
  status: string;
  location: string;
  description: string;
  highlights: string[];
  image: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Guest Room & Double Room',
    category: 'professional',
    client: 'Nabil Raouf Designs',
    status: 'In Progress',
    location: 'Tag City',
    description:
      'A modern residential interior featuring natural wood materials, realistic lighting, and custom 3D furniture modeling with space-saving wardrobe mechanisms.',
    highlights: ['3 bed-backdrop wall options', 'Custom 3D furniture', 'Space-saving joinery'],
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1400',
  },
  {
    id: 2,
    title: 'Luxury Residential Bathrooms',
    category: 'professional',
    client: 'Nabil Raouf Designs',
    status: 'In Progress',
    location: 'Tag City',
    description:
      'Residential bathroom designs focused on modern aesthetics, coordinated finishes, and realistic material textures brought to life through detailed 3D visualization.',
    highlights: ['Coordinated finishes', 'Realistic material textures', 'Modern aesthetic'],
    image:
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1400',
  },
  {
    id: 3,
    title: 'Sidra Hotel — Graduation Project',
    category: 'graduation',
    client: 'Faculty of Fine Arts',
    status: 'Completed',
    location: 'Nuweiba, Sinai',
    description:
      'A biophilic retreat inspired by the natural beauty of Nuweiba and Bedouin heritage — with mountain rock formations, earthy textures, pottery, and palm weaving across Reception, Restaurant, and Suites.',
    highlights: ['Biophilic design', 'Bedouin heritage', 'Reception · Restaurant · Suites'],
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1400',
  },
  {
    id: 4,
    title: 'An Egyptian Coastal Hotel',
    category: 'academic',
    client: 'Academic Project',
    status: 'Completed',
    location: 'Marsa Matrouh',
    description:
      'A coastal Mediterranean concept reflecting turquoise waters and sandy beaches, using a palette of white, navy and beige combined with traditional Bedouin patterns.',
    highlights: ['Coastal palette', 'Traditional patterns', 'Reception · Rooms · Landscape'],
    image:
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1400',
  },
];

export const skills: { title: string; desc: string }[] = [
  { title: '3D Modeling', desc: 'Accurate, buildable interior geometry' },
  { title: 'Photorealistic Rendering', desc: 'Images that read as photographs' },
  { title: 'Material & Texture Development', desc: 'Believable surfaces and depth' },
  { title: 'Lighting Setup', desc: 'Natural and artificial light studies' },
  { title: 'Camera Composition', desc: 'Editorial framing and perspective' },
  { title: 'Interior Design Visualization', desc: 'Concept to final image' },
  { title: 'Space Planning', desc: 'Functional, flowing layouts' },
  { title: 'Color & Material Selection', desc: 'Cohesive palettes and finishes' },
  { title: 'Technical Drawings', desc: 'Detail-ready documentation' },
  { title: 'Interior Design Detailing', desc: 'Precision at every junction' },
];

export const software: { name: string; level: number }[] = [
  { name: 'Autodesk 3ds Max', level: 95 },
  { name: 'V-Ray', level: 92 },
  { name: 'SketchUp', level: 88 },
  { name: 'Adobe Photoshop', level: 90 },
  { name: 'AutoCAD', level: 80 },
  { name: 'Lumion', level: 78 },
];

export const processSteps = [
  {
    step: '01',
    title: 'Design Understanding',
    desc: 'Understanding concepts, spatial requirements, and references before a single line is drawn.',
  },
  {
    step: '02',
    title: 'Material & Mood',
    desc: 'Exploring colors, materials, textures, and the atmosphere the space should evoke.',
  },
  {
    step: '03',
    title: '3D Modeling',
    desc: 'Translating the design into a detailed, accurate 3D model of every element.',
  },
  {
    step: '04',
    title: 'Lighting & Rendering',
    desc: 'Developing realistic materials, lighting, and camera composition for photoreal results.',
  },
  {
    step: '05',
    title: 'Final Presentation',
    desc: 'Refining images and presenting the design with clarity and confidence.',
  },
];

export const stats = [
  { value: '2026', label: 'Graduate' },
  { value: '10+', label: 'Core Skills' },
  { value: '06', label: 'Software' },
  { value: '28', label: 'Portfolio Pages' },
];

// Real portfolio pages, rendered from the original PDF (page-0001 … page-0028)
export const galleryPages = Array.from({ length: 28 }, (_, i) => {
  const n = String(i + 1).padStart(4, '0');
  return `/portfolio/Maivel_Moneer_Saad_Portfolio_page-${n}.jpg`;
});
