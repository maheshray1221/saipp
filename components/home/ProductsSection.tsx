"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { homeProducts } from "@/lib/data/products";
import { Badge } from "@/components/ui/badge";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function ProductsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section className="py-10 px-6 md:px-12 bg-gray-50" id="products">
      {/* Decorative grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#0000ff 1px, transparent 1px), linear-gradient(90deg, #0000ff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="text-center mb-12">
        <Badge
          variant="outline"
          className="border-blue-500/50 text-blue-400 bg-blue-500/10 mb-4 tracking-widest text-xs uppercase"
        >
          Our Products
        </Badge>

        <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          Complete <span className="text-blue-400">Packaging Solutions.</span>
        </h2>
        <p className="text-gray-500 text-base max-w-xl mx-auto">
          From paper cores to wooden pallets — 12+ industrial packaging products
          tailored to your specifications.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {homeProducts.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="rounded-2xl border border-gray-300 bg-white overflow-hidden group hover:border-blue-500/30 transition-colors duration-500"
            >
              {/* Top bar */}
              <div className="h-1.5 bg-linear-to-r from-blue-500 via-blue-400 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="p-2">
                <div className="flex justify-center items-center gap-3 mb-5 h-48 bg-blue-50 rounded-xl ">
                  [Image: {f.name}]
                </div>

                <div className="">
                  <span className="text-blue-600 uppercase text-sm md:text-xl">{f.category}</span>
                  <h3 className="text-gray-700 text-lg font-semibold md:text-2xl">{f.name}</h3>
                  <p className="text-gray-500 text-base pb-2 md:text-lg">{f.description}</p>
                  <Link href={"/contact"} >
                    <Button className="py-2 px-26 md:px-35 bg-blue-500 mb-5">Request Quote</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
