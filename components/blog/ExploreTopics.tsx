// ─── ExploreTopics ────────────────────────────────────────────────────────────
"use client";

import { motion } from "framer-motion";
import { topics } from "@/lib/blog-data";

function ExploreTopics() {
  return (
    <section className="px-4 sm:px-6 pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-7">
          <span className="text-[11px] font-bold tracking-[3px] uppercase text-zinc-500 font-[Syne]">
            Explore by Topic
          </span>
          <div className="flex-1 h-px bg-white/[0.07]" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {topics.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="flex items-center gap-3 border border-white/[0.07] bg-white/[0.02] rounded-[14px] p-4 cursor-pointer hover:border-amber-500/30 hover:bg-amber-500/[0.03] transition-all duration-300 group"
            >
              <div className="w-9 h-9 rounded-[10px] bg-amber-500/10 border border-amber-500/18 flex items-center justify-center text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                {t.icon}
              </div>
              <div>
                <div className="text-[13px] font-semibold text-zinc-300 leading-tight">
                  {t.name}
                </div>
                <div className="text-[11px] text-zinc-600">{t.count} articles</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExploreTopics