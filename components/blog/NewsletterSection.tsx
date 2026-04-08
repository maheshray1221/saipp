"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="px-4 sm:px-6 pb-24 md:pb-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[24px] border border-blue-500/20 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgb(44, 126, 254,0.07) 0%, rgb(44, 126, 254,0.02) 100%)",
          }}
        >
          {/* Pattern */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg,#0000ff 0,#0000ff 1px,transparent 0,transparent 50%)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative z-10 text-center py-14 px-6 sm:px-12 max-w-135 mx-auto">
            {/* Icon */}
            <div className="w-14 h-14 mx-auto mb-5 rounded-[14px] bg-blue-500/15 border border-blue-500/25 flex items-center justify-center text-2xl">
              📬
            </div>

            <h2 className="text-[clamp(22px,3vw,32px)] font-extrabold text-gray-800 tracking-tight mb-3">
              Stay Ahead of the Industry
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-7">
              Get our bi-weekly digest of engineering insights, manufacturing
              trends, regulatory updates, and exclusive case studies — delivered
              straight to your inbox.
            </p>

            <Link href={"/contact"}>
              <Button
                type="submit"
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-[10px] px-6 gap-2 shrink-0"
              >
                <Send className="w-4 h-4" />
                Request a Custom Quote
              </Button>
            </Link>

            <p className="text-zinc-700 text-[11px] mt-4">
              No spam. Unsubscribe anytime. Trusted by 18,000+ manufacturing
              professionals.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default NewsletterSection;
