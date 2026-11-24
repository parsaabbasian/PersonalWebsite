export interface Detail {
  text: string;
}

export interface Education {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  grade?: string;
  details: string[];
  bg?: string;
  color?: string;
  icon: string;
  logo?: string;
}

export interface Experience {
  title: string;
  subtitle: string;
  date: string;
  description: string | string[];
  details: string[];
  bg?: string;
  color?: string;
  icon: string;
  logo?: string;
  collapsible?: boolean;
  grade?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  desc: string;
  tech: string[];
  status?: string;
  link: string;
  icon?: string;
  color?: string;
  customIcon?: string;
  stars?: string;
  repo?: string;
  devpost?: string;
}

export interface Certificate {
  title: string;
  org: string;
  date: string;
  link: string;
  bg: string;
  color: string;
  icon: string;
}

export interface Blog {
  title: string;
  desc: string;
  tags: string[];
  link: string;
}

export interface Thought {
  title: string;
  date: string;
  desc: string;
  link: string;
}

export interface LearningItem {
  id: string;
  title: string;
  desc: string;
  status: string;
  icon: string;
  color: string;
  link: string;
  checklist?: { task: string; done: boolean; date?: string; summary: string; link?: string }[];
  levels?: { title: string; desc: string; link: string }[];
}

export const educationData: Education[] = [
  {
    title: "Bachelor of Engineering",
    subtitle: "Lassonde School of Engineering - York University",
    date: "Sep 2025 - May 2029 (Expected)",
    description: "Computer Engineering Student. Awarded York International Scholarship of Distinction.",
    grade: "Dean's List (2×) | First Class Standing With Distinction",
    details: [
      "Dean's Honour Roll (2×), Apr 2026",
      "Bethune Prize for Outstanding Contribution to College Life (Nominee)",
      "Operations Lead @ GDG on Campus",
      "Class Rep & Note Share — MATH 1013, MATH 1028, PHYS 1801",
      "Courses include Applied Calculus I & II (MATH 1013, MATH 1014)"
    ],
    bg: "bg-emerald-50 dark:bg-emerald-500/10",
    color: "text-emerald-700 dark:text-emerald-300",
    icon: "graduation-cap",
    logo: "/assets/logos/lassonde-logo.png"
  }
];

export const experienceData: Experience[] = [
  {
    title: "Communications & Web Director",
    subtitle: "IEEE YorkU Student Branch",
    date: "Oct 2026 - Present",
    description: "Leading communications and the web presence for the IEEE York University Student Branch.",
    details: [],
    bg: "bg-sky-50 dark:bg-sky-500/10",
    color: "text-sky-600 dark:text-sky-400",
    icon: "cpu",
    logo: "/assets/logos/ieee-logo.jpg"
  },
  {
    title: "Undergraduate Researcher",
    subtitle: "EXINES Lab — Lassonde School of Engineering, York University",
    date: "May 2026 - Present · Hybrid",
    description: "Conducting advanced software engineering and AI research under the supervision of Prof. Maleknaz Nayebi.",
    details: [
      "SWE-bench multimodal evaluation pipelines for AI coding agents",
      "Dockerized sandboxes for safe, reproducible model testing",
      "LLM evaluation on complex software engineering tasks",
      "Scalable Python infrastructure for automated code evaluation"
    ],
    bg: "bg-orange-50 dark:bg-orange-500/10",
    color: "text-orange-600 dark:text-orange-400",
    icon: "microscope",
    logo: "/assets/logos/lassonde-logo.png"
  },
  {
    title: "Operations Lead",
    subtitle: "Google Developer Group (GDG) on Campus @ York University",
    date: "Apr 2026 - Present",
    description: "Leading operational strategy and execution for Google Developer Groups on Campus at York University, coordinating events and community growth.",
    details: [
      "Logistics, scheduling, and resource planning for workshops",
      "Cross-functional coordination for GDG campus initiatives",
      "Partnerships to grow student engagement with dev tech",
      "Streamlined operations for consistent event delivery",
      "Team management and leadership"
    ],
    bg: "bg-sky-50 dark:bg-sky-500/10",
    color: "text-sky-600 dark:text-sky-400",
    icon: "users",
    logo: "/assets/logos/gdg-logo.png"
  },
  {
    title: "AI Product Developer Intern",
    subtitle: "DiamondAI · Internship",
    date: "Jun 2026 - Oct 2026",
    description: "Building a high-performance AI video generation studio powered by Google's Gemini Veo and ElevenLabs.",
    details: [
      "Full-stack Next.js app for AI video synthesis and storyboarding",
      "Gemini Veo video generation and ElevenLabs voice integration",
      "Character Libraries, Quick Shots, and Usage Dashboard workflows"
    ],
    bg: "bg-emerald-50 dark:bg-emerald-500/10",
    color: "text-emerald-700 dark:text-emerald-300",
    icon: "diamond",
    logo: "/assets/logos/diamondinyou_logo.jpg"
  }
];

export const volunteeringData: Experience[] = [
  {
    title: "Class Representative & Note Share Volunteer",
    subtitle: "York University",
    date: "Sep 2025 - Apr 2026",
    description: "Representing student interests and supporting academic accessibility through structured technical note sharing.",
    details: [
      "Applied Calculus I (MATH 1013): Class Rep & Note Share, Sep - Dec 2025",
      "Physics (PHYS 1801) and Discrete Math (MATH 1028): Class Rep, Jan - Apr 2026",
      "Liaised between students and faculty on academic feedback"
    ],
    bg: "bg-purple-50 dark:bg-purple-500/10",
    color: "text-purple-600 dark:text-purple-400",
    icon: "hand-helping",
    logo: "/assets/logos/lassonde-logo.png"
  },
  {
    title: "Event Coordinator",
    subtitle: "Iranian Student Association at York University",
    date: "Sep 2025 - Jan 2026",
    description: "Helped plan and run community events for Iranian students at York University.",
    details: [],
    bg: "bg-rose-50 dark:bg-rose-500/10",
    color: "text-rose-600 dark:text-rose-400",
    icon: "heart-handshake"
  }
];

export const highlightsData: Experience[] = [
  {
    title: "Best Use of Clerk & 1st Runner Up",
    subtitle: "Build North Hackathon — Georgian",
    date: "Nov 2026",
    description: "Built Rehearsal with Soroush Baraouf, Sepehr Khodadadi and Artin Bozorgmehri over 10 days. Placed among ~50 teams and 300+ builders.",
    details: [],
    bg: "bg-lime-50 dark:bg-lime-500/10",
    color: "text-lime-600 dark:text-lime-400",
    icon: "award"
  },
  {
    title: "Judge, Programming Challenge",
    subtitle: "York Engineering Competition — Lassonde Engineering Society",
    date: "Nov 2026",
    description: "Judged solutions for optimizing EV charging schedules across time, cost, CO₂ emissions and fairness, selecting the team to represent York at the Ontario Engineering Competition.",
    details: [],
    bg: "bg-amber-50 dark:bg-amber-500/10",
    color: "text-amber-600 dark:text-amber-400",
    icon: "users"
  },
  {
    title: "Organized GDG York's first event at Google Toronto HQ",
    subtitle: "Google Developer Group on Campus @ York University",
    date: "Jul 2026",
    description: "Helped organize talks from six Google engineers for York students at Google's Toronto office.",
    details: [],
    bg: "bg-cyan-50 dark:bg-cyan-500/10",
    color: "text-cyan-600 dark:text-cyan-400",
    icon: "rocket"
  },
  {
    title: "Dean's Honour Roll (2×) & Bethune Prize Nominee",
    subtitle: "York University",
    date: "Apr 2026",
    description: "Dean's Honour Roll twice, and nominated for the Bethune Prize for Outstanding Contribution to College Life.",
    details: [],
    bg: "bg-emerald-50 dark:bg-emerald-500/10",
    color: "text-emerald-700 dark:text-emerald-300",
    icon: "graduation-cap"
  }
];

export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: string;
  link: string;
  pdf?: string;
  summary?: string;
  moreAuthors?: boolean;
}

export const scholarUrl = "https://scholar.google.ca/citations?user=N3lPRLIAAAAJ&hl=en";

export const publicationsData: Publication[] = [
  {
    title: "From White Canes to Edge AI: A Survey of Assistive Navigation Technologies for Blind and Low-Vision Individuals",
    authors: ["Abtin Zandi", "Arian Ashrafi", "Sarvin Nami", "Seyed Sina Negahban", "Amirabbas Entezari", "Parsa Abbasian", "Ariyan Azami", "Parisa Taherizadeh", "Bardia Sabagh Kermani", "Roza Ganjipour", "Hamed Farbeh"],
    venue: "arXiv preprint arXiv:2611.00671",
    year: "2026",
    link: "https://arxiv.org/abs/2611.00671",
    pdf: "https://arxiv.org/pdf/2611.00671",
    summary: "Reviews 108 studies from 2008 to 2026 on assistive navigation, from white canes and guide dogs to deep learning and on-device AI, and the gap between research prototypes and tools people use every day."
  },
  {
    title: "ROD-Dataset: A Pedestrian-Perspective Benchmark of Urban Obstacle Classes for YOLO-Based Detection",
    authors: ["A. Zandi", "A. Azami", "B. S. Kermani", "Parsa Abbasian", "R. Ganjipour", "S. Nami"],
    moreAuthors: true,
    venue: "arXiv preprint arXiv:2611.00681",
    year: "2026",
    link: "https://arxiv.org/abs/2611.00681",
    pdf: "https://arxiv.org/pdf/2611.00681",
    summary: "A benchmark dataset of urban obstacle classes captured from a pedestrian's point of view, for training and evaluating YOLO-based detectors."
  }
];

export const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "Go (Golang)", "C++", "HTML5", "CSS3", "MATLAB"]
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Mapbox", "Vite", "Framer Motion", "Supabase Auth"]
  },
  {
    category: "Backend & Database",
    items: ["Node.js", "Express", "WebSocket", "Supabase", "PostgreSQL", "Firebase", "SurrealDB", "Clerk"]
  },
  {
    category: "Tools & AI",
    items: ["Git & GitHub", "Docker", "Linux", "Vercel", "Render", "OpenCV", "Gemini AI", "Web Scraping"]
  },
  {
    category: "Spoken Languages",
    items: ["English (Full professional)", "Persian (Native)"]
  }
];

export const currentProjectData: Project[] = [
  {
    title: "Rehearsal",
    desc: "Best Use of Clerk and 1st Runner Up out of ~50 teams at the Build North hackathon. Lets AI agents rehearse refunds and support updates on a copy of the company first: a person approves the exact plan once, then a model-free engine applies it to production and holds any step the world no longer matches.",
    tech: ["TypeScript", "React", "Postgres", "Clerk", "SurrealDB"],
    status: "Hackathon",
    link: "https://rehearsal-api-40b8.onrender.com/app",
    repo: "https://github.com/SoroushRF/Rehearsal",
    devpost: "https://devpost.com/software/rehearsal-gq5m13",
    icon: "award",
    color: "text-lime-500"
  },
  {
    title: "UniSpot",
    desc: "High-performance, real-time event discovery platform for York U. Features a Live Map, GPS Verification, and instant sync via WebSockets.",
    tech: ["React", "Go", "Mapbox", "PostgreSQL"],
    status: "Active",
    link: "https://yorkunispot.vercel.app/",
    icon: "map-pin",
    color: "text-red-500",
    customIcon: "/assets/icons/unispot-logo.svg"
  },
  {
    title: "Undercut",
    desc: "A full-stack AI platform for finding underpriced cars. Developed high-performance scrapers in Go to extract real-time data for thousands of GTA car listings.",
    tech: ["Next.js", "FastAPI", "Go", "Gemini AI"],
    status: "Hackathon",
    link: "https://undercut-seven.vercel.app/",
    icon: "car-front",
    color: "text-red-500"
  },
  {
    title: "HawkEye",
    desc: "Built in 12 hours at CSHub Local Hack Day. Record a video of a clothing rack and HawkEye identifies each item, spots damage, estimates market value, and writes resale listings, using an FFmpeg frame pipeline and Gemini 2.5 Flash.",
    tech: ["Gemini 2.5 Flash", "FFmpeg", "Docker", "Render"],
    status: "Hackathon",
    link: "https://hawkeyedemo.onrender.com/",
    icon: "eye",
    color: "text-amber-500"
  },
  {
    title: "AlgoDrift",
    desc: "A high-performance, framework-free visualizer for algorithms and data structures.",
    tech: ["HTML5", "CSS3", "Vanilla JS"],
    status: "Active Beta",
    link: "https://algodrift.vercel.app/",
    icon: "bar-chart-2",
    color: "text-purple-500"
  },
  {
    title: "LassondeHub",
    desc: "The central repository for formulas, schematics, code snippets, and lecture notes for Engineering students.",
    tech: ["React", "Supabase", "JavaScript"],
    status: "Community",
    link: "https://lassondehub.vercel.app/",
    icon: "book-open",
    color: "text-red-500",
    customIcon: "/assets/icons/lassondehub-logo.svg"
  }
];

export const certificateData: Certificate[] = [
  {
    title: "MATLAB Onramp",
    org: "MathWorks",
    date: "Sep 2025",
    link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=da86491c-0606-4558-8e0f-53ec6cd4842b&",
    bg: "bg-orange-50 dark:bg-orange-500/10",
    color: "text-orange-600 dark:text-orange-400",
    icon: "file-badge"
  },
];

export const blogData: Blog[] = [
  {
    title: "My First Hackathon",
    desc: "Lessons learned building 'HawkEye' in a 48-hour coding sprint.",
    tags: ["Hackathon", "AI"],
    link: "blogs/hackathon/my-first-hackathon"
  },
  {
    title: "My Second Hackathon",
    desc: "Building Undercut: A full-stack AI platform for finding underpriced cars.",
    tags: ["Hackathon", "Full-Stack"],
    link: "blogs/hackathon/my-second-hackathon"
  },
];

export const thoughtData: Thought[] = [
  {
    title: "Lessons from Life",
    date: "Feb 2026",
    desc: "Insights on growth, discipline, and learning from both success and failure.",
    link: "thoughts/lessons-from-life"
  },
];

export const learningData: LearningItem[] = [
  {
    id: "dsa",
    title: "DSA Pattern Mastery",
    desc: "Mastering Data Structures using the Design Gurus curriculum.",
    status: "In Progress",
    icon: "network",
    color: "text-purple-600 dark:text-purple-400",
    link: "learning/dsa-pattern-mastery",
    checklist: [
      { task: "Day 1", done: true, date: "Dec 30", summary: "Big-O Notation & Array basics.", link: "learning/dsa-pattern-mastery/days/day1" },
      { task: "Day 2", done: false, summary: "Sliding Window Pattern.", link: "learning/dsa-pattern-mastery/days/day2" },
      { task: "Day 3", done: false, summary: "Two Pointers Pattern.", link: "learning/dsa-pattern-mastery/days/day3" },
      { task: "Day 4", done: false, summary: "Fast & Slow Pointers." },
      { task: "Day 5", done: false, summary: "Merge Intervals." }
    ]
  },
  {
    id: "github",
    title: "Git & GitHub Mastery",
    desc: "Version control essentials for modern software development.",
    status: "Completed",
    icon: "git-branch",
    color: "text-orange-600 dark:text-orange-400",
    link: "learning/github",
    levels: [
      {
        title: "Level 1: The Foundation",
        desc: "Config, Init, Stage, Commit, and basic local workflow.",
        link: "learning/github/levels/level1"
      },
      {
        title: "Level 2: Branching & Merging",
        desc: "Working with branches, handling merges, and conflict resolution.",
        link: "learning/github/levels/level2"
      },
      {
        title: "Level 3: Collaboration",
        desc: "Remotes, Pull Requests (PRs), Code Reviews, and Forks.",
        link: "learning/github/levels/level3"
      },
      {
        title: "Level 4: Advanced Git",
        desc: "Rebasing, Cherry-picking, Stashing, and GitHub Actions.",
        link: "learning/github/levels/level4"
      }
    ]
  },
  {
    id: "golang",
    title: "Go (Golang)",
    desc: "Mastering cloud-native development, goroutines, and backend scalability.",
    status: "In Progress",
    icon: "box",
    color: "text-cyan-500 dark:text-cyan-400",
    link: "learning/golang",
    checklist: [
      { task: "Day 1", done: true, date: "Jan 02", summary: "Go Installation", link: "learning/golang/days/day01" },
    ]
  },
  {
    id: "cpp",
    title: "C++ Programming",
    desc: "Mastering memory management, pointers, and OOP.",
    status: "In Progress",
    icon: "code-2",
    color: "text-emerald-700 dark:text-emerald-300",
    link: "learning/cpp",
    checklist: [
      { task: "Day 1", done: true, date: "Dec 24", summary: "Syntax, data types, I/O, logic, and iteration.", link: "learning/cpp/days/day1" }
    ]
  },
  {
    id: "flask",
    title: "Flask Web Development",
    desc: "Building lightweight and scalable web applications with Python.",
    status: "In Progress",
    icon: "server",
    color: "text-emerald-500 dark:text-emerald-400",
    link: "learning/flask",
    checklist: [
      { task: "Day 1", done: true, date: "Jan 04", summary: "Environment Setup & Hello World", link: "learning/flask/days/day01" },
      { task: "Day 2", done: true, summary: "Routing & Dynamic URLs", link: "learning/flask/days/day02" },
      { task: "Day 3", done: true, summary: "Jinja2 Templates & Static Files", link: "learning/flask/days/day03" },
      { task: "Day 4", done: true, summary: "Request Handling & Forms", link: "learning/flask/days/day04" },
      { task: "Day 5", done: true, summary: "SQLAlchemy & Database Integration", link: "learning/flask/days/day05" },
      { task: "Day 6", done: true, summary: "RESTful API Basics", link: "learning/flask/days/day06" },
      { task: "Day 7", done: true, summary: "Deployment & Final Mini-Project", link: "learning/flask/days/day07" }
    ]
  },
  {
    id: "rust-core-mastery",
    title: "Rust Programming",
    desc: "Mastering memory safety, concurrency, and performance with the Rust language.",
    status: "In Progress",
    icon: "cpu",
    color: "text-orange-600 dark:text-orange-500",
    link: "learning/rust",
    checklist: [
      { task: "Day 0", done: true, summary: "Toolchain, Cargo & Variables", link: "learning/rust/days/day01" },
      { task: "Day 1", done: true, summary: "Toolchain, Cargo & Variables", link: "learning/rust/days/day01" },
    ]
  },
  {
    id: "machine-learning",
    title: "Machine Learning Fundamentals",
    desc: "Mastering the mathematical intuition and practical implementation of ML from foundations to Scikit-learn.",
    status: "In Progress",
    icon: "brain-circuit",
    color: "text-emerald-700 dark:text-emerald-300",
    link: "learning/machine-learning",
    levels: [
      { title: "Block 1: Foundations", desc: "ML vs traditional programming, problem framing, and real-world use cases.", link: "learning/machine-learning/blocks/block01-daya" },
      { title: "Block 2: Supervised Learning", desc: "Labeled data, features vs labels, and loss function intuition.", link: "learning/machine-learning/blocks/block02-daya" },
    ]
  },
  {
    id: "deep-learning",
    title: "Deep Learning & Neural Networks",
    desc: "A high-intensity dive into neural architectures, from perceptrons and backprop to Transformers and Attention mechanisms.",
    status: "In Progress",
    icon: "layers",
    color: "text-violet-600 dark:text-violet-400",
    link: "learning/deep-learning",
    levels: [
      { title: "Block 1: Foundations", desc: "Neurons, Weights, Bias, and the math of dot products.", link: "learning/deep-learning/blocks/block01" },
    ]
  },
  {
    id: "data-engineering",
    title: "Data Engineering & Preprocessing",
    desc: "The foundation of reliable AI. Mastering the art of transforming raw, messy data into high-performance feature sets.",
    status: "In Progress",
    icon: "database",
    color: "text-teal-600 dark:text-teal-400",
    link: "learning/data-engineering",
    levels: [
      { title: "Block 1: Role of Data", desc: "Understanding why Data Engineering is the backbone of ML performance.", link: "learning/data-engineering" },
    ]
  },
  {
    id: "model-deployment",
    title: "Model Deployment & MLOps",
    desc: "Closing the gap between research and production. Engineering robust, scalable, and monitored ML systems.",
    status: "In Progress",
    icon: "rocket",
    color: "text-rose-600 dark:text-rose-400",
    link: "learning/mlops",
    levels: [
      { title: "Block 1: Intro to MLOps", desc: "DevOps vs. MLOps: Understanding the ML lifecycle and system failure points.", link: "learning/mlops" },
    ]
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud & Infrastructure for AI",
    desc: "Architecting the environment for AI. Mastering GPUs, distributed training, and managed cloud services like AWS SageMaker and Vertex AI.",
    status: "In Progress",
    icon: "cloud",
    color: "text-cyan-600 dark:text-cyan-400",
    link: "learning/cloud",
    levels: [
      { title: "Block 1: Cloud Basics", desc: "IaaS vs. PaaS vs. SaaS: Why the cloud is the backbone of modern AI.", link: "learning/cloud" },
    ]
  },
  {
    id: "specialized-ai",
    title: "Specialized AI Domains",
    desc: "Choosing a superpower. Mastering specific niches like Computer Vision, NLP, Reinforcement Learning, and the frontier of Generative AI.",
    status: "In Progress",
    icon: "sparkles",
    color: "text-amber-600 dark:text-amber-400",
    link: "learning/specialized-ai",
    levels: [
      { title: "Block 1: Domain Overview", desc: "Mapping the AI landscape: CV vs. NLP vs. RL vs. GenAI and industry use cases.", link: "learning/specialized/blocks/b01" },
    ]
  }
];

export const getProjectBySlug = (slug: string) => {
  return [...currentProjectData].find(p => p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug);
};

export interface LearningInsight {
  title: string;
  date: string;
  desc: string;
  link: string;
  category?: string;
}

export const learningInsightsData: LearningInsight[] = [
  {
    title: "What I Learned Reading SWE-bench",
    date: "May 2026",
    desc: "A breakdown of the ICLR 2024 paper that tests AI on real GitHub bugs, and why the results were humbling.",
    link: "learning/swe-bench",
    category: "AI Research"
  },
  {
    title: "Understanding Model Context Protocol (MCP)",
    date: "May 2026",
    desc: "A deep dive into how MCP is standardizing the way AI models interact with local and remote data sources.",
    link: "learning/mcp-protocol",
    category: "AI Infrastructure"
  },
  {
    title: "The Power of Go Routines",
    date: "May 2026",
    desc: "How Golang's lightweight threads enable massive concurrency with minimal overhead.",
    link: "learning/golang-concurrency",
    category: "Backend"
  },
  {
    title: "Framer Motion Best Practices",
    date: "April 2026",
    desc: "Optimizing layout animations and shared element transitions for a premium feel.",
    link: "learning/framer-motion-tips",
    category: "Frontend"
  }
];
