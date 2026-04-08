"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Phone, Mail, MapPin, Send } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative bg-gray-50 py-24 overflow-hidden">
     
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#0000ff 1px, transparent 1px), linear-gradient(90deg, #0000ff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — CTA copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Badge
              variant="outline"
              className="border-blue-500/50 text-blue-400 bg-blue-500/10 mb-5 tracking-widest text-xs uppercase"
            >
              Get Started
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight mb-6">
              Ready to Engineer{" "}
              <span className="text-blue-400">Your Next Project?</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Share your requirements and our engineering team will respond with
              a detailed quote within 24 hours. No obligation. No fluff.
            </p>

            {/* Contact info */}
            <div className="space-y-4 mb-10">
              {[
                { icon: Phone, label: "+91 98765 43210", sub: "Mon–Sat, 9am–6pm IST" },
                { icon: Mail, label: "sales@precisionworks.in", sub: "Replies within 4 hrs" },
                {
                  icon: MapPin,
                  label: "Pune · Bangalore · Chennai",
                  sub: "3 facilities across India",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-blue-500/60 font-semibold text-sm">{item.label}</div>
                    <div className="text-gray-500 text-xs">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Primary CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-xl px-8 group"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-400 text-blue-500 hover:bg-white/6 rounded-xl px-8"
              >
                Download Brochure
              </Button>
            </div>
          </motion.div>

          {/* Right — Quick contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl border border-blue-300 bg-blue-50 backdrop-blur-sm p-8 sm:p-5 lg:mt-10"
          >
            <h3 className="text-gray-700 text-xl font-bold mb-1">
              Send Us a Message
            </h3>
            <p className="text-gray-500 text-sm mb-7">
              Tell us what you need — we'll engineer a solution.
            </p>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs text-gray-700 font-medium tracking-wide uppercase">
                    Full Name
                  </label>
                  <Input
                    placeholder="Rajesh Kumar"
                    className="bg-white border-white/8 text-gray-600 placeholder:text-gray-600 rounded-xl focus-visible:ring-blue-500/40 focus-visible:border-blue-500/50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs text-gray-700 font-medium tracking-wide uppercase">
                    Company
                  </label>
                  <Input
                    placeholder="Tata Advanced Systems"
                    className="bg-white border-white/8 text-gray-600 placeholder:text-gray-600 rounded-xl focus-visible:ring-blue-500/40 focus-visible:border-blue-500/50"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-gray-700 font-medium tracking-wide uppercase">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="you@company.com"
                  className="bg-white border-white/8 text-gray-600 placeholder:text-gray-600 rounded-xl focus-visible:ring-blue-500/40 focus-visible:border-blue-500/50"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-gray-700 font-medium tracking-wide uppercase">
                  Industry
                </label>
                <select className="w-full h-10 rounded-xl border border-white/8 bg-white text-gray-600 text-sm px-3 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50">
                  <option value="" className="bg-gray-50">
                    Select your industry
                  </option>
                  <option value="auto" className="bg-gray-50">Automotive</option>
                  <option value="aero" className="bg-gray-50">Aerospace & Defense</option>
                  <option value="energy" className="bg-gray-50">Energy</option>
                  <option value="med" className="bg-gray-50">Medical Devices</option>
                  <option value="other" className="bg-gray-50">Other</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-gray-700 font-medium tracking-wide uppercase">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your component specifications, quantity, and timeline..."
                  className="w-full rounded-xl border border-white/8 bg-white text-gray-600 placeholder:text-gray-600 text-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 resize-none"
                />
              </div>

              <Button className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-xl h-12 group">
                <Send className="w-4 h-4 mr-2 group-hover:translate-x-0.5 transition-transform" />
                Send Enquiry
              </Button>

              <p className="text-center text-xs text-gray-700">
                Your data is safe with us — we never share details with third
                parties.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}