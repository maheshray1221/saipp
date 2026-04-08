import Link from "next/link";
import { FileText } from "lucide-react";
import { products } from "@/lib/data/products";

export default function Footer() {
  return (
    <footer className="bg-brand-navy bg-[#111111] text-white/80 lg:pt-35 sticky bottom-0 z-0 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr] gap-10 px-6 md:px-12 py-14 border-b border-white/10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <span className="font-playfair text-[16px] font-bold text-white">Sai Paper Products</span>
          </div>
          <p className="text-sm text-white/60 leading-relaxed mb-5">
            Your trusted partner for industrial packaging solutions since 2005. We manufacture and supply high-quality packaging products across India.
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {["ISO 9001:2015", "Make in India", "Eco Certified"].map((b) => (
              <span key={b} className="text-[11px] font-semibold bg-white/10 border border-white/15 px-2.5 py-1 rounded">
                {b}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            {[["in","LinkedIn"],["W","WhatsApp"],["f","Facebook"],["▶","YouTube"]].map(([icon, label]) => (
              <a key={label} href="#" title={label}
                className="w-9 h-9 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-sm text-white/70 hover:bg-yellow-500 hover:text-brand-navy hover:border-yellow-500 transition-all font-bold">
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Our Products</h3>
          <ul className="flex flex-col gap-2.5">
            {products.map((p) => (
              <li key={p.name}>
                <Link href={`/products`}
                  className="text-sm text-white/60 hover:text-blue-400 flex items-center gap-1.5 transition-colors">
                  <span className="text-blue-500 font-bold">›</span> {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2.5">
            {[
              ["Home","/"], ["About Us","/about"],
              ["All Products","/products"], ["Quality Certifications","/about#certs"],
              ["Manufacturing Unit","/about#factory"], ["Blogs","/blogs"],
              ["Contact Us","/contact"], ["Request a Quote","/contact#quote"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link href={href}
                  className="text-sm text-white/60 hover:text-blue-400 flex items-center gap-1.5 transition-colors">
                  <span className="text-blue-500 font-bold">›</span> {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Get In Touch</h3>
          {[
            { icon: "📍", label: "Address", text: "Plot No. 45, Industrial Area,\nNoida, UP – 201301" },
            { icon: "📞", label: "Phone", text: "+91 98765 43210\n+91 98765 43211" },
            { icon: "✉️", label: "Email", text: "info@saipaperproducts.com\nsales@saipaperproducts.com" },
            { icon: "🕐", label: "Hours", text: "Mon – Sat: 9:00 AM – 6:00 PM" },
          ].map(({ icon, label, text }) => (
            <div key={label} className="flex gap-3 mb-4 items-start">
              <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center shrink-0 text-sm">{icon}</div>
              <div>
                <p className="text-[10px] text-white/40 uppercase tracking-wider mb-0.5">{label}</p>
                <p className="text-sm text-white/65 whitespace-pre-line leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-4 gap-2 text-xs text-white/40">
        <span>© {new Date().getFullYear()} Sai Paper Products. All rights reserved.</span>
        <div className="flex gap-5">
          {["Privacy Policy", "Terms of Service", "Sitemap"].map((l) => (
            <Link key={l} href="#" className="hover:text-white/70 transition-colors">{l}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}