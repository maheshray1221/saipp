"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { products } from "@/lib/data/products";

export default function HeroSection() {
  return (
    <section className="bg-slate-900 bg-brand-navy min-h-[88vh] grid grid-cols-1 lg:grid-cols-[1fr_480px] items-center px-6 md:px-12 gap-10 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: `url("data:image/svg+xml,...")` }}
      />

      {/* Glow */}
      <div
        className="absolute top-0 right-0 w-150 h-150 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgb(44, 126, 254, 0.12) 0%, transparent 70%)",
        }}
      />

      {/* Left Content */}
      <motion.div
        className="relative z-10 py-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          ISO 9001:2015 Certified Manufacturer
        </div>

        <h1 className="font-cormorant text-5xl lg:text-6xl text-white font-bold leading-[1.08] mb-5">
          Premium <span className="text-blue-400">Industrial</span>
          <br />
          Packaging
          <br />
          Solutions
        </h1>

        <p className="text-white/65 text-base leading-relaxed max-w-125 mb-9">
          Trusted by 500+ businesses across India for high-quality paper cores,
          fibre drums, corrugated boxes and complete packaging — manufactured
          with precision since 2009.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap mb-12">
          <Link
            href="/products"
            className="bg-blue-500 text-white text-brand-navy font-bold text-sm px-8 py-3.5 rounded-lg hover:bg-blue-400 transition-colors inline-flex items-center gap-2"
          >
            Explore Products →
          </Link>
          <Link
            href="/contact#quote"
            className="bg-white/10 text-white border border-white/25 font-semibold text-sm px-8 py-3.5 rounded-lg hover:bg-white/18 transition-colors"
          >
            Request a Quote
          </Link>
        </div>

        {/* Stats */}
        <div className="flex gap-8 flex-wrap">
          {[
            {id:1, num: "500+", label: "Clients Served" },
            {id:2, num: "15+", label: "Years Experience" },
            {id:3, num: "12+", label: "Product Lines" },
            {id:4, num: "98%", label: "Client Retention" },
          ].map((stat, i) => (
            <div key={stat.id}>
              <div className="font-cormorant text-4xl text-white font-bold leading-none">
                {stat.num}
              </div>
              <div className="text-xs text-white/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right — Product Chips Card */}
      <motion.div
        className="relative z-10 py-20 hidden lg:block"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="bg-white/6 border border-white/12 rounded-2xl p-7 backdrop-blur-sm">
          <p className="text-xs text-white uppercase tracking-widest mb-4">
            Our Product Range
          </p>
          <div className="flex flex-wrap gap-2">
            {products.map((p) => (
              <p key={p.id} className="flex items-center gap-1.5 bg-white/8 border border-white/12 rounded-lg px-3 py-2 text-white/80 text-[12.5px] font-medium hover:bg-yellow-500/20 hover:border-yellow-500/40 hover:text-yellow-300 transition-all">
                {p.name}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
