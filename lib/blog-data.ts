export type Category =
  | "all"
  | "industry-4"
  | "quality"
  | "sustainability"
  | "cnc"
  | "supply-chain"
  | "safety";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: Exclude<Category, "all">;
  categoryLabel: string;
  author: string;
  authorInitials: string;
  date: string;
  readTime: string;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  featured?: boolean;
  featuredDesc?: string;
}

export const categories: { value: Category; label: string; count: number }[] = [
  { value: "all", label: "All Articles", count: 48 },
  { value: "industry-4", label: "Industry 4.0", count: 14 },
  { value: "quality", label: "Quality & Standards", count: 9 },
  { value: "sustainability", label: "Sustainability", count: 8 },
  { value: "cnc", label: "CNC & Machining", count: 7 },
  { value: "supply-chain", label: "Supply Chain", count: 6 },
  { value: "safety", label: "Safety & Compliance", count: 4 },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Digital Twin Technology: Real-Time Factory Simulation for Zero-Error Production",
    excerpt:
      "How virtual replicas of physical production lines are enabling manufacturers to test, optimize, and troubleshoot without stopping the line.",
    category: "industry-4",
    categoryLabel: "Industry 4.0",
    author: "Riya Verma",
    authorInitials: "RV",
    date: "Apr 2, 2025",
    readTime: "7 min",
    accentColor: "#f59e0b",
    accentBg: "rgba(245,158,11,0.08)",
    accentBorder: "rgba(245,158,11,0.2)",
    featured: true,
    featuredDesc:
      "Machine learning models trained on vibration data, thermal imaging, and production telemetry are transforming reactive maintenance into precision-timed intervention — reducing unplanned shutdowns, extending machine life, and slashing maintenance costs across high-throughput manufacturing environments.",
  },
  {
    id: 2,
    title: "IATF 16949 vs ISO 9001: Which Certification Should Your Automotive Supplier Prioritize?",
    excerpt:
      "A practical breakdown of both standards, their overlap, audit requirements, and which delivers more value for tier-1 automotive component suppliers.",
    category: "quality",
    categoryLabel: "Quality & Standards",
    author: "Suresh Mehta",
    authorInitials: "SM",
    date: "Mar 22, 2025",
    readTime: "11 min",
    accentColor: "#38bdf8",
    accentBg: "rgba(56,189,248,0.08)",
    accentBorder: "rgba(56,189,248,0.2)",
  },
  {
    id: 3,
    title: "Closed-Loop Manufacturing: How We Cut Scrap Metal Waste by 82% in 18 Months",
    excerpt:
      "An inside look at our circular production redesign — reclaiming, remelting, and reusing metal offcuts that previously went to landfill.",
    category: "sustainability",
    categoryLabel: "Sustainability",
    author: "Priya Nair",
    authorInitials: "PN",
    date: "Mar 15, 2025",
    readTime: "8 min",
    accentColor: "#34d399",
    accentBg: "rgba(52,211,153,0.08)",
    accentBorder: "rgba(52,211,153,0.2)",
  },
  {
    id: 4,
    title: "5-Axis vs 3-Axis CNC: When the Extra Axes Justify the Extra Cost",
    excerpt:
      "A data-backed comparison of machining accuracy, cycle times, tooling costs, and part complexity thresholds where 5-axis becomes the clear winner.",
    category: "cnc",
    categoryLabel: "CNC & Machining",
    author: "Arjun Kapoor",
    authorInitials: "AK",
    date: "Mar 8, 2025",
    readTime: "10 min",
    accentColor: "#f59e0b",
    accentBg: "rgba(245,158,11,0.08)",
    accentBorder: "rgba(245,158,11,0.2)",
  },
  {
    id: 5,
    title: "Building Resilient Supplier Networks: Lessons from the 2024 Semiconductor Crunch",
    excerpt:
      "How leading manufacturers restructured multi-tier supplier dependencies, nearshored critical inputs, and added buffer stock protocols post-crisis.",
    category: "supply-chain",
    categoryLabel: "Supply Chain",
    author: "Dev Malhotra",
    authorInitials: "DM",
    date: "Feb 28, 2025",
    readTime: "12 min",
    accentColor: "#a78bfa",
    accentBg: "rgba(167,139,250,0.08)",
    accentBorder: "rgba(167,139,250,0.2)",
  },
  {
    id: 6,
    title: "ISO 45001 Implementation: A Step-by-Step Guide for Mid-Size Manufacturers",
    excerpt:
      "Practical walkthrough of documentation, hazard identification, worker participation frameworks, and audit readiness for occupational H&S certification.",
    category: "safety",
    categoryLabel: "Safety & Compliance",
    author: "Kavita Shah",
    authorInitials: "KS",
    date: "Feb 19, 2025",
    readTime: "14 min",
    accentColor: "#fb7185",
    accentBg: "rgba(251,113,133,0.08)",
    accentBorder: "rgba(251,113,133,0.2)",
  },
  {
    id: 7,
    title: "Generative AI in Product Design: From CAD Prompt to Manufacturable Component",
    excerpt:
      "Exploring how AI-assisted design tools are compressing concept-to-prototype timelines while respecting real-world manufacturability constraints.",
    category: "industry-4",
    categoryLabel: "Industry 4.0",
    author: "Riya Verma",
    authorInitials: "RV",
    date: "Feb 10, 2025",
    readTime: "9 min",
    accentColor: "#f59e0b",
    accentBg: "rgba(245,158,11,0.08)",
    accentBorder: "rgba(245,158,11,0.2)",
  },
  {
    id: 8,
    title: "Zero-Liquid Discharge: The Future of Water Management in Indian Factories",
    excerpt:
      "How ZLD systems are helping manufacturers meet CPCB compliance, reduce freshwater dependence, and recover valuable minerals from wastewater.",
    category: "sustainability",
    categoryLabel: "Sustainability",
    author: "Priya Nair",
    authorInitials: "PN",
    date: "Jan 30, 2025",
    readTime: "6 min",
    accentColor: "#34d399",
    accentBg: "rgba(52,211,153,0.08)",
    accentBorder: "rgba(52,211,153,0.2)",
  },
  {
    id: 9,
    title: "Titanium Machining: Tooling Strategies That Extend Tool Life by 3x",
    excerpt:
      "Cutting parameters, coolant strategies, and tool coatings that dramatically reduce tool wear when machining aerospace-grade titanium alloys.",
    category: "cnc",
    categoryLabel: "CNC & Machining",
    author: "Arjun Kapoor",
    authorInitials: "AK",
    date: "Jan 18, 2025",
    readTime: "13 min",
    accentColor: "#f59e0b",
    accentBg: "rgba(245,158,11,0.08)",
    accentBorder: "rgba(245,158,11,0.2)",
  },
];

export const topics = [
  { icon: "⚙️", name: "CNC Machining", count: 7 },
  { icon: "🤖", name: "Automation", count: 11 },
  { icon: "🌱", name: "Green Mfg", count: 8 },
  { icon: "🏆", name: "Quality Mgmt", count: 9 },
  { icon: "🔗", name: "Supply Chain", count: 6 },
  { icon: "📊", name: "Data & Analytics", count: 5 },
];