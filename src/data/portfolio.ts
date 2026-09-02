import projectsData from "./projects.json";

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  location: string;
  year: string;
  type: string;
  image: string;
  featured?: boolean;
  gridSpan?: string;
  link?: string;
  client?: string;
  role?: string;
  area?: string;
  description?: string;
  images?: string[];
}

export const selectedProjects: Project[] = projectsData as Project[];

export interface FeaturedProjectDetail {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  location: string;
  year: string;
  area: string;
  services: string[];
  gallery: {
    title: string;
    type: 'floor-plan' | 'interior' | 'exterior' | 'detail';
    image: string;
  }[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  responsibilities: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  gridSpan: string;
}

export interface ExpertiseItem {
  number: string;
  title: string;
  description: string;
  image?: string;
}

export const designerInfo = {
  name: "Rubel Mia",
  monogram: "RM",
  title: "3D Visualizer And Interior Designer",
  currentRole: "Lead Design Architect",
  currentCompany: "Step Media Ltd.",
  email: "rubel450000@gmail.com",
  phone: "+880 1567-993310",
  location: "Dhaka, Bangladesh",
  resumeUrl: "https://drive.google.com/file/d/1pvjWXl6ci0k7Xcqn9-C_i_OpxbJkM64M/view?usp=sharing",
  bioHeadline: "Designing spaces that balance form, function, and human experience.",
  bioDescription: "I am a professional 3D Visualizer and Interior Designer specializing in creating high-quality, photorealistic interior and exterior visualizations. I transform architectural concepts and design ideas into realistic 3D spaces with accurate materials, lighting, furniture, and detailed finishes.",
  statistics: [
    { value: "02+", label: "Years Experience" },
    { value: "35+", label: "Completed Projects" },
    { value: "10+", label: "Design Disciplines" },
    { value: "05", label: "Core Specializations" }
  ]
};

export const expertiseList: ExpertiseItem[] = [
  {
    number: "01",
    title: "Architecture",
    description: "Holistic architectural planning, spatial organization, and structural building design that responds to site and context.",
    image: "/images/expertise_arch.jpg"
  },
  {
    number: "02",
    title: "Interior Design",
    description: "Curated interior environments focusing on materiality, custom joinery, bespoke lighting, and functional layout flow.",
    image: "/images/expertise_interior.jpg"
  },

  {
    number: "03",
    title: "Space Planning",
    description: "Strategic space analysis and programmatic allocation for residential, commercial, and adaptive reuse projects.",
    image: "/images/expertise_planning.jpg"
  },
  {
    number: "04",
    title: "3D Visualization",
    description: "Photorealistic architectural renders capturing ambient light, real-world textures, and atmospheric landscaping.",
    image: "/images/expertise_visual.jpg"
  },
  {
    number: "05",
    title: "3D Modeling",
    description: "High-fidelity 3D modeling of complex architectural structures, bespoke furniture units, and spatial environments.",
    image: "/images/expertise_model.jpg"
  },
  {
    number: "06",
    title: "Realistic Rendering",
    description: "Realistic rendering of exterior and interior spaces using advanced 3D visualization techniques.",
    image: "/images/expertise_rendering.jpg"
  },
];



export const featuredProjectDetail: FeaturedProjectDetail = {
  id: "proj-1",
  number: "01",
  title: "Modern Residence",
  category: "Architecture / Interior / 3D Visualization",
  description: "Set against a lush tropical context, this modern residence explores the intersection of raw concrete, warm teak wood, and extensive glazing. The design leverages passive ventilation, open courtyards, and clean geometry to create a sanctuary that balances formal elegance with spatial warmth.",
  location: "Dhaka, Bangladesh",
  year: "2025",
  area: "6,200 SFT",
  services: ["Architectural Design", "Interior Architecture", "3D Visualization", "Furniture Selection"],
  gallery: [
    {
      title: "Ground Floor Plan",
      type: "floor-plan",
      image: "/images/feat_floorplan.jpg"
    },
    {
      title: "Living Room Atrium Renders",
      type: "interior",
      image: "/images/feat_interior.jpg"
    },
    {
      title: "North Elevation Rendering",
      type: "exterior",
      image: "/images/feat_exterior.jpg"
    },
    {
      title: "Concrete and Wood Material Detail",
      type: "detail",
      image: "/images/feat_detail.jpg"
    }
  ]
};

export const designProcess: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "Conducting site analysis, understanding programmatic requirements, and defining client preferences, core values, and budget constraints."
  },
  {
    number: "02",
    title: "Concept",
    description: "Developing schematic drawings, mood boards, hand sketches, and structural relationships to establish the overall design philosophy."
  },
  {
    number: "03",
    title: "Planning",
    description: "Translating concepts into accurate floor plans, structural layouts, sections, and technical documentation ready for regulatory review."
  },
  {
    number: "04",
    title: "3D Development",
    description: "Building detailed digital twins, architectural models, and rendering drafts to study scale, volume, and ambient daylight."
  },
  {
    number: "05",
    title: "Refinement",
    description: "Finalizing materiality, bespoke furniture joinery details, plumbing fixtures, lighting positions, and structural accents."
  },
  {
    number: "06",
    title: "Final Presentation",
    description: "Delivering high-resolution photorealistic renders, physical study models, and complete architectural bid packages."
  }
];

export const experienceTimeline: ExperienceItem[] = [
  {
    period: "2025 — 2026 (Continued)",
    role: "Junior Visualizer",
    company: "Step Media Limited",
    responsibilities: [
      "Worked as a Junior Visualizer",
      "Worked on plan, 3D modeling and rendering"
    ]
  },
  {
    period: "2024 — 2025",
    role: "Interior Designer",
    company: "Golden Touch Interior Decoration",
    responsibilities: [
      "Worked as an Interior Designer",
      "Worked on plan, 3D modeling and rendering"
    ]
  }
];

export const skillsCategories: SkillCategory[] = [
  {
    title: "2D Drafting",
    skills: ["AutoCAD", "Architectural Drawings", "Floor Plans", "Technical Detailing"]
  },
  {
    title: "3D Modeling",
    skills: ["3ds Max", "SketchUp", "Parametric Modeling", "Spatial Mockups"]
  },
  {
    title: "Render Engines",
    skills: ["V-Ray", "Corona Renderer", "Global Illumination", "Material Texturing"]
  },
  {
    title: "Graphic Design",
    skills: ["Adobe Photoshop", "Adobe Illustrator", "Post-Processing", "Vector Layouts"]
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Luxury Lounge Atrium",
    category: "Interior Rendering",
    image: "/images/proj_sofa_wood.jpg",
    gridSpan: "col-span-12 md:col-span-8"
  },
  {
    id: "gal-2",
    title: "Master Suite Detail",
    category: "Bedroom Design",
    image: "/images/proj_bedroom1.jpg",
    gridSpan: "col-span-12 md:col-span-4"
  },
  {
    id: "gal-3",
    title: "Chandelier Reflection",
    category: "Bedroom Design",
    image: "/images/proj_bedroom2.jpg",
    gridSpan: "col-span-12 md:col-span-4"
  },
  {
    id: "gal-4",
    title: "Formal Living Area",
    category: "Interior Rendering",
    image: "/images/proj_living_white.jpg",
    gridSpan: "col-span-12 md:col-span-4"
  },
  {
    id: "gal-5",
    title: "Open Dining Layout",
    category: "Space Planning",
    image: "/images/proj_dining_living.jpg",
    gridSpan: "col-span-12 md:col-span-4"
  }
];
