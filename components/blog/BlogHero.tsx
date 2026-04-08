"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";

const stats = [
  { value: "120+", label: "Articles Published" },
  { value: "18K", label: "Monthly Readers" },
  { value: "8", label: "Expert Authors" },
  { value: "12", label: "Topic Categories" },
];

export default function BlogHero() {
  const [query, setQuery] = useState("");

  return (
    <section className="relative bg-slate-900 pt-20 pb-16  px-4 sm:px-6 overflow-hidden">
      {/* Grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#2c7efe 1px, transparent 1px), linear-gradient(90deg, #2c7efe 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* Glow */}
      <div className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-175 h-85 bg-amber-500/7 blur-[90px] rounded-full" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 border border-blue-500/35 text-blue-400 bg-blue-500/9 px-4 py-1.5 rounded-full text-[10px] tracking-[2px] uppercase font-semibold mb-6"
        >
          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
          Industry Insights &amp; Engineering Knowledge
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[clamp(32px,5.5vw,58px)] font-extrabold text-white leading-[1.1] tracking-tight mb-5"
        >
          The{" "}
          <span className="text-blue-400 relative">
            Manufacturing
            <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400/40 rounded-full" />
          </span>
          <br />
          Intelligence Hub
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-500 text-base sm:text-lg max-w-140 mx-auto mb-8 leading-relaxed"
        >
          Deep dives into precision engineering, Industry 4.0 trends, quality
          standards, sustainable manufacturing, and the technologies reshaping
          industrial production.
        </motion.p>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center max-w-115 mx-auto bg-white/4 border border-white/[0.07] rounded-xl overflow-hidden focus-within:border-amber-500/35 transition-colors duration-200"
        >
          <span className="px-3.5 text-zinc-500">
            <Search className="w-4 h-4" />
          </span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search articles, topics, technologies..."
            className="flex-1 bg-transparent border-none outline-none text-white text-sm py-3 placeholder:text-gray-600 font-[DM_Sans]"
          />
          <button className="m-1 bg-blue-500 hover:bg-blue-400 transition-colors text-white text-sm font-bold px-4 py-2 rounded-lg font-[Syne]">
            Search
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap justify-center gap-8 mt-12"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.08 }}
              className="text-center"
            >
              <div className="text-[clamp(20px,3vw,26px)] font-extrabold text-blue-400 font-[Syne]">
                {s.value}
              </div>
              <div className="text-[11px] text-gray-500 mt-1 tracking-wide">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}