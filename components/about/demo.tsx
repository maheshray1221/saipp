"use client";

import React from "react";
import { easeInOut, motion } from "framer-motion";
import { Zap, Palette, Puzzle } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: <Zap className="w-4 h-4 text-indigo-500" />,
    title: "Lightning-Fast Performance",
    description: "Built with speed — minimal load times and optimized.",
  },
  {
    icon: <Palette className="w-4 h-4 text-indigo-500" />,
    title: "Beautifully Designed Components",
    description: "Modern, pixel-perfect UI components ready for any project.",
  },
  {
    icon: <Puzzle className="w-4 h-4 text-indigo-500" />,
    title: "Plug-and-Play Integration",
    description: "Simple setup with support for React, Next.js and Tailwind CSS.",
  },
];

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const featureVariant = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easeInOut } },
};

export default function AboutDemo() {
  return (
    <section className="relative py-20  px-6 overflow-hidden">
      {/* Background glow */}
      <div className="size-130 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full absolute blur-[300px] -z-10 bg-indigo-100/50 dark:bg-indigo-900/20" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-slate-100">
          About <span className="text-blue-500">Sai Paper products</span>
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 max-w-md mx-auto leading-relaxed">
          A visual collection of our most recent works — each piece crafted
          with intention, emotion and style.
        </p>
      </motion.div>

      {/* Content */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full md:w-auto shrink-0"
        >
          <div className="relative w-full max-w-sm mx-auto md:w-80 aspect-4/5 rounded-2xl overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1564182842834-681b7be6de4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbnVmYWN0dXJpbmd8ZW58MHx8MHx8fDA%3D"
              alt="App showcase"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="flex-1"
        >
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
            Our Latest Features
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
            Ship beautiful frontends without the overhead — customizable,
            scalable and developer-friendly UI components.
          </p>

          <motion.div
            variants={listVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8 mt-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={featureVariant}
                className="flex items-start gap-4 group"
              >
                <div className="mt-0.5 size-9 p-2 flex-shrink-0 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 rounded-lg flex items-center justify-center transition-colors group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/60">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}