"use client";

import { easeInOut, motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck,
  Zap,
  Globe,
  Clock,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Zero-Defect Policy",
    desc: "Six Sigma processes ensure 99.99% accuracy across every production line — quality is non-negotiable.",
    stat: "99.99%",
    label: "Accuracy Rate",
  },
  {
    icon: Zap,
    title: "Rapid Turnaround",
    desc: "From blueprint to delivery in record time. Our automated facilities run 24/7 with zero downtime.",
    stat: "48 hrs",
    label: "Avg. Lead Time",
  },
  {
    icon: Globe,
    title: "Global Supply Chain",
    desc: "Sourcing premium raw materials from 40+ countries with verified ethical procurement standards.",
    stat: "40+",
    label: "Countries Sourced",
  },
  {
    icon: Clock,
    title: "25 Years of Mastery",
    desc: "Two decades of engineering excellence, serving Fortune 500 companies across 6 continents.",
    stat: "25 Yrs",
    label: "Industry Experience",
  },
  
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeInOut } },
};

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative bg-gray-50 py-24 overflow-hidden">
      {/* Decorative grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#0000ff 1px, transparent 1px), linear-gradient(90deg, #0000ff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="border-blue-500/50 text-blue-400 bg-blue-500/10 mb-4 tracking-widest text-xs uppercase"
          >
            Why Choose Us
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Built Different.{" "}
            <span className="text-blue-400">Engineered Better.</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500 text-lg">
            We don't just manufacture — we engineer precision into every atom.
            Here's what sets us apart from the rest.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative rounded-2xl border border-gray-400 bg-white shadow-sm p-7 flex flex-col gap-4 overflow-hidden cursor-default"
            >
              {/* Hover amber line */}
              <div className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-transparent via-blue-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <r.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-blue-400 leading-none">
                    {r.stat}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">{r.label}</div>
                </div>
              </div>

              <div>
                <h3 className="text-gray-700 font-bold text-lg mb-1">
                  {r.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
