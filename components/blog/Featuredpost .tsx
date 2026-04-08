// ─── FeaturedPost ────────────────────────────────────────────────────────────
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function FeaturedPost() {
  return (
    <section className="px-4 sm:px-6 pb-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#0000ff 1px, transparent 1px), linear-gradient(90deg, #0000ff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-7 mt-5">
          <span className="text-[11px] font-bold tracking-[3px] uppercase text-zinc-500 font-[Syne]">
            Featured Article
          </span>
          <div className="flex-1 h-px bg-white/[0.07]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 rounded-[22px] border border-blue-600 bg-white overflow-hidden hover:border-blue-500/30 transition-colors duration-500 group"
        >
          {/* Left — visual */}
          <div className="relative min-h-65 lg:min-h-90 flex items-center justify-center bg-linear-to-br from-blue-500/13 to-blue-500/3 overflow-hidden">
            {/* Stripe pattern */}
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg,#0000ff 0,#0000ff 1px,transparent 0,transparent 50%)",
                backgroundSize: "18px 18px",
              }}
            />
            {/* SVG Icon */}
            <div className="relative z-10 text-center">
              <svg
                viewBox="0 0 80 80"
                fill="none"
                className="w-24 h-24 opacity-20 mx-auto"
              >
                <rect x="6" y="28" width="10" height="42" rx="3" fill="#0000ff" />
                <rect x="22" y="16" width="10" height="54" rx="3" fill="#0000ff" />
                <rect x="38" y="8" width="10" height="62" rx="3" fill="#0000ff" />
                <rect x="54" y="20" width="10" height="50" rx="3" fill="#0000ff" />
                <path
                  d="M6 48l16-18 16 7 16-22"
                  stroke="#0000ff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
              <p className="mt-3 text-[11px] tracking-[2px] text-blue-400/50 uppercase font-semibold">
                Industry 4.0
              </p>
            </div>
          </div>

          {/* Right — content */}
          <div className="p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <Badge className="bg-blue-500/12 text-blue-400 border border-blue-500/25 text-[10px] tracking-[1.5px] uppercase mb-4 hover:bg-blue-500/20">
                Industry 4.0
              </Badge>
              <h2 className="text-[clamp(20px,2.5vw,30px)] font-extrabold text-gray-800 leading-[1.2] tracking-tight mb-4">
                How AI-Driven Predictive Maintenance Is Cutting Downtime by 63%
                in Modern Factories
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Machine learning models trained on vibration data, thermal
                imaging, and production telemetry are transforming reactive
                maintenance into precision-timed intervention — reducing
                unplanned shutdowns, extending machine life, and slashing
                maintenance costs across high-throughput environments.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-[11px] font-bold text-blue-400 font-[Syne]">
                    AK
                  </div>
                  <span className="text-zinc-400 font-medium">Arjun Kapoor</span>
                </div>
                <span className="w-1 h-1 bg-zinc-600 rounded-full" />
                <span className="text-zinc-600 text-xs">March 28, 2025</span>
                <span className="w-1 h-1 bg-zinc-600 rounded-full" />
                <span className="text-zinc-600 text-xs">9 min read</span>
              </div>
              <button className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 transition-colors text-white font-bold text-sm px-6 py-3 rounded-[10px] font-[Syne] group">
                Read Full Article
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}