"use client";

import { motion, AnimatePresence } from "framer-motion";
import { blogPosts } from "@/lib/blog-data";
import { useBlogFilter } from "@/context/BlogFilterContext ";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const PAGE_SIZE = 6;

export default function BlogGrid() {
  const { activeCategory } = useBlogFilter();
  const [page, setPage] = useState(1);

  const filtered =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  const visible = filtered.slice(0, page * PAGE_SIZE);
  const hasMore = visible.length < filtered.length;

  return (
    <section className="px-4 sm:px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-7">
          <span className="text-[11px] font-bold tracking-[3px] uppercase text-zinc-500 font-[Syne]">
            Latest Articles
          </span>
          <div className="flex-1 h-px bg-white/[0.07]" />
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((post, i) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group flex flex-col border border-white/[0.07] bg-white/[0.02] rounded-[18px] overflow-hidden hover:border-amber-500/30 transition-colors duration-350 cursor-pointer"
              >
                {/* Image area */}
                <div
                  className="h-[180px] relative flex items-center justify-center overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${post.accentBg}, rgba(13,15,18,1))`,
                  }}
                >
                  {/* Strip pattern */}
                  <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg,currentColor 0,currentColor 1px,transparent 0,transparent 50%)",
                      backgroundSize: "14px 14px",
                      color: post.accentColor,
                    }}
                  />
                  {/* Gear SVG watermark */}
                  <svg
                    viewBox="0 0 48 48"
                    className="w-14 h-14 opacity-[0.16] relative z-10"
                    fill="none"
                  >
                    <circle
                      cx="24"
                      cy="24"
                      r="8"
                      stroke={post.accentColor}
                      strokeWidth="3"
                    />
                    <path
                      d="M24 4v6M24 38v6M4 24h6M38 24h6M10.1 10.1l4.24 4.24M33.66 33.66l4.24 4.24M10.1 37.9l4.24-4.24M33.66 14.34l4.24-4.24"
                      stroke={post.accentColor}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  {/* Bottom hover bar */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"
                    style={{
                      background: `linear-gradient(90deg, ${post.accentColor}, ${post.accentColor}99)`,
                    }}
                  />
                </div>

                {/* Body */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <span
                    className="inline-block text-[10px] tracking-[1.5px] uppercase font-semibold border rounded-full px-2.5 py-1 mb-3 w-fit"
                    style={{
                      color: post.accentColor,
                      background: post.accentBg,
                      borderColor: post.accentBorder,
                    }}
                  >
                    {post.categoryLabel}
                  </span>
                  <h3 className="text-white font-bold text-[15px] sm:text-[16px] leading-snug mb-2.5 tracking-tight">
                    {post.title}
                  </h3>
                  <p className="text-zinc-500 text-[13px] leading-relaxed flex-1 mb-4">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="pt-3.5 border-t border-white/[0.05] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-[26px] h-[26px] rounded-full flex items-center justify-center text-[9px] font-bold font-[Syne] border"
                        style={{
                          color: post.accentColor,
                          background: post.accentBg,
                          borderColor: post.accentBorder,
                        }}
                      >
                        {post.authorInitials}
                      </div>
                      <span className="text-[12px] text-zinc-400">
                        {post.author}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-zinc-600">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-zinc-600">
            No articles found in this category yet.
          </div>
        )}

        {/* Load more */}
        {hasMore && (
          <div className="text-center mt-10">
            <button
              onClick={() => setPage((p) => p + 1)}
              className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.07] hover:border-amber-500/30 hover:text-amber-400 text-zinc-500 px-8 py-3 rounded-[10px] text-sm transition-all duration-200 font-[DM_Sans]"
            >
              Load More Articles
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}