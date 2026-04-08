"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Award, BadgeCheck } from "lucide-react";

const certifications = [
  {
    code: "ISO 9001:2015",
    name: "Quality Management",
    body: "Bureau Veritas",
    year: "2009",
    color: "from-amber-500/20 to-amber-600/5",
    border: "border-amber-500/30",
  },
  {
    code: "ISO 14001:2015",
    name: "Environmental Management",
    body: "TÜV Rheinland",
    year: "2012",
    color: "from-emerald-500/20 to-emerald-600/5",
    border: "border-emerald-500/30",
  },
  {
    code: "ISO 45001:2018",
    name: "Occupational Health & Safety",
    body: "SGS Group",
    year: "2018",
    color: "from-sky-500/20 to-sky-600/5",
    border: "border-sky-500/30",
  },
  {
    code: "IATF 16949",
    name: "Automotive Quality",
    body: "DEKRA",
    year: "2015",
    color: "from-violet-500/20 to-violet-600/5",
    border: "border-violet-500/30",
  },
];

const stats = [
  { value: "17+", label: "Active Certifications" },
  { value: "4", label: "Global Standards Bodies" },
  { value: "100%", label: "Audit Pass Rate" },
  { value: "2009", label: "First Certified" },
];

export default function CertificationsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16"
        >
          <div>
            <Badge
              variant="outline"
              className="border-blue-500/50 text-blue-400 bg-blue-500/10 mb-4 tracking-widest text-xs uppercase"
            >
              Certifications
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              Standards That{" "}
              <span className="text-blue-400">Command Trust</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-md text-base leading-relaxed lg:text-right">
            Every certification is a proof of our relentless pursuit of
            excellence — validated by the world's most respected standards
            authorities.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4  lg:mb-12"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="text-center p-5 rounded-xl border border-gray-400 bg-white hidden md:flex  flex-col"
            >
              <div className="text-3xl font-black text-blue-400">{s.value}</div>
              <div className="text-xs text-gray-500 mt-1 tracking-wide">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Cert cards */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5"
        >
          {certifications.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.025, transition: { duration: 0.2 } }}
              className={`relative rounded-2xl border ${c.border} bg-linear-to-br ${c.color} p-6 overflow-hidden group cursor-default`}
            >
              {/* Shield watermark */}
              <Award className="absolute -bottom-4 -right-4 w-28 h-28 text-white/4 group-hover:text-white/[0.07] transition-colors duration-500" />

              <div className="flex items-start justify-between mb-4">
                <BadgeCheck className="w-8 h-8 text-gray-500" />
                <span className="text-xs text-gray-500 bg-white/60 px-2 py-0.5 rounded-full">
                  Since {c.year}
                </span>
              </div>
              <div className="text-2xl font-black text-gray-600 tracking-tight mb-1">
                {c.code}
              </div>
              <div className="text-sm font-medium text-gray-400 mb-2">{c.name}</div>
              <div className="text-xs text-gray-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 inline-block" />
                Certified by {c.body}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}