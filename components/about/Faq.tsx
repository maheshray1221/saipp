"use client";

import { useState } from "react";
import {
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { faqs } from "@/lib/faq";

const ITEMS_PER_PAGE = 4;

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [mobilePage, setMobilePage] = useState(0);

  const totalPages = Math.ceil(faqs.length / ITEMS_PER_PAGE);
  const mobileItems = faqs.slice(
    mobilePage * ITEMS_PER_PAGE,
    mobilePage * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
  );

  // Desktop: split into 2 columns
  const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
  const rightFaqs = faqs.filter((_, i) => i % 2 === 1);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? -1 : i);

  const AccordionItem = ({
    faq,
    index,
    globalIndex,
  }: {
    faq: { question: string; answer: string };
    index: number;
    globalIndex: number;
  }) => {
    const isOpen = openIndex === globalIndex;
    return (
      <div
        className={`rounded-xl border px-5 py-4 cursor-pointer transition-all duration-200 ${
          isOpen
            ? "border-gray-300 bg-white shadow-sm"
            : "border-gray-200 bg-white hover:border-gray-300"
        }`}
        onClick={() => toggle(globalIndex)}
      >
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm font-semibold text-gray-900">
            {faq.question}
          </span>
          <span className="shrink-0 text-gray-500">
            {isOpen ? <Minus size={16} /> : <Plus size={16} />}
          </span>
        </div>
        {isOpen && (
          <p className="mt-3 text-sm text-gray-500 leading-relaxed">
            {faq.answer}
          </p>
        )}
      </div>
    );
  };

  return (
    <section className="w-full bg-gray-50 py-10 px-4 md:px-10 rounded-2xl">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10 relative text-center flex flex-col items-center">
          {/* Decorative blob top right */}
          <div className="absolute -top-6 right-0 w-32 h-32 bg-gray-200 rounded-full opacity-40 blur-2xl pointer-events-none" />

          <div className="flex items-center gap-2 mb-3">
            <Badge
              variant="outline"
              className="text-xs font-semibold tracking-widest  text-blue-900 border-blue-300 bg-blue-50 px-3 py-1 mb-4 uppercase"
            >
              common questions
            </Badge>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 ">
            Common questions <span className="text-blue-500">about ssp.</span>
          </h2>
          <p className="text-gray-500 text-lg lg:text-base max-w-xl leading-relaxed">
            Got questions? We’ve got answers. Explore the FAQs below to learn more about our products and services.
          </p>
        </div>

        {/* ── DESKTOP: 2-column accordion ── */}
        <div className="hidden md:grid grid-cols-2 gap-3">
          {/* Left column */}
          <div className="flex flex-col gap-3">
            {leftFaqs.map((faq, i) => {
              const globalIndex = i * 2;
              return (
                <AccordionItem
                  key={globalIndex}
                  faq={faq}
                  index={i}
                  globalIndex={globalIndex}
                />
              );
            })}
          </div>
          {/* Right column */}
          <div className="flex flex-col gap-3">
            {rightFaqs.map((faq, i) => {
              const globalIndex = i * 2 + 1;
              return (
                <AccordionItem
                  key={globalIndex}
                  faq={faq}
                  index={i}
                  globalIndex={globalIndex}
                />
              );
            })}
          </div>
        </div>

        {/* ── MOBILE: 4 items per page + arrows ── */}
        <div className="md:hidden flex flex-col gap-3">
          {mobileItems.map((faq, i) => {
            const globalIndex = mobilePage * ITEMS_PER_PAGE + i;
            return (
              <AccordionItem
                key={globalIndex}
                faq={faq}
                index={i}
                globalIndex={globalIndex}
              />
            );
          })}

          {/* Arrow Buttons */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setMobilePage((p) => Math.max(p - 1, 0))}
              disabled={mobilePage === 0}
              className="rounded-full w-10 h-10 border-gray-300"
            >
              <ChevronLeft size={18} />
            </Button>

            <span className="text-xs text-gray-400">
              {mobilePage + 1} / {totalPages}
            </span>

            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                setMobilePage((p) => Math.min(p + 1, totalPages - 1))
              }
              disabled={mobilePage === totalPages - 1}
              className="rounded-full w-10 h-10 border-gray-300"
            >
              <ChevronRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
