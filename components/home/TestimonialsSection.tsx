"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "VP Procurement",
    company: "Tata Advanced Systems",
    initials: "RK",
    rating: 5,
    quote:
      "Their precision CNC components have become integral to our defense-grade assemblies. Zero rejections in 18 months. The engineering team's responsiveness is unmatched in the industry.",
    tag: "Aerospace & Defense",
  },
  {
    name: "Sarah Mitchell",
    role: "Head of Supply Chain",
    company: "Bosch Automotive Germany",
    initials: "SM",
    rating: 5,
    quote:
      "Switching to them was the best procurement decision we made in 2022. IATF-certified quality, on-time delivery above 98%, and their R&D team co-designed three of our current-gen components.",
    tag: "Automotive",
  },
  {
    name: "Anil Verma",
    role: "Director – Operations",
    company: "Siemens Energy India",
    initials: "AV",
    rating: 5,
    quote:
      "For a company demanding ISO 9001 compliance at every touchpoint, they've been an exceptional partner. Their cleanroom facility handles our most sensitive turbine components with flawless consistency.",
    tag: "Energy",
  },
  {
    name: "Priya Nair",
    role: "CTO",
    company: "MedTech Innovations Pvt Ltd",
    initials: "PN",
    rating: 5,
    quote:
      "Medical-grade manufacturing is unforgiving. They understood this from day one. Their material traceability, sterile packaging, and documentation have made FDA submissions significantly smoother.",
    tag: "Medical Devices",
  },
];

const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({
    x: dir > 0 ? -80 : 80,
    opacity: 0,
  }),
};

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const next = () => {
    setDir(1);
    setIndex((p) => (p + 1) % testimonials.length);
  };
  const prev = () => {
    setDir(-1);
    setIndex((p) => (p - 1 + testimonials.length) % testimonials.length);
  };

  const t = testimonials[index];

  return (
    <section className="relative bg-gray-50 py-5 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#0000ff 1px, transparent 1px), linear-gradient(90deg, #0000ff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            Testimonials
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight">
            Trusted by <span className="text-blue-400">Industry Leaders</span>
          </h2>
        </motion.div>

        {/* Main testimonial */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="relative"
        >
          <div className="rounded-3xl border border-blue-300 bg-white backdrop-blur-sm p-8 sm:p-12">
            <Quote className="w-10 h-10 text-blue-500/60 mb-6" />

            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={index}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-blue-400"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-light mb-8 italic">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12 border-2 border-blue-500/30">
                    <AvatarFallback className="bg-blue-500/10 text-lue-400 font-bold text-sm">
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-gray-500 font-bold text-base">
                      {t.name}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {t.role} · {t.company}
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="ml-auto hidden sm:flex border-blue-500/20 text-blue-400/70 text-xs"
                  >
                    {t.tag}
                  </Badge>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDir(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index
                      ? "bg-blue-400 w-8"
                      : "bg-black/20 w-4 hover:bg-blue-200"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-xl border-white/10 bg-blue-400 text-white hover:bg-white/8 hover:border-amber-500/30 w-10 h-10"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-xl border-white/10 bg-white/3 text-white hover:bg-white/8 hover:border-amber-500/30 w-10 h-10"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
