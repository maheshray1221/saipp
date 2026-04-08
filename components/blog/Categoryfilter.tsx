"use client";

import { motion } from "framer-motion";
import { categories, type Category } from "@/lib/blog-data";
import { useBlogFilter } from "@/context/BlogFilterContext ";

export default function CategoryFilter() {
  const { activeCategory, setActiveCategory } = useBlogFilter();

  return (
    <section className="px-4 sm:px-6 pb-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2.5"
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm border transition-all duration-200 font-[DM_Sans] ${
                activeCategory === cat.value
                  ? "border-amber-500/50 text-amber-400 bg-amber-500/10"
                  : "border-white/[0.07] text-zinc-500 bg-white/[0.02] hover:border-amber-500/30 hover:text-amber-400/80"
              }`}
            >
              {cat.label}
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                  activeCategory === cat.value
                    ? "bg-amber-500/15 text-amber-400"
                    : "bg-white/[0.06] text-zinc-600"
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}