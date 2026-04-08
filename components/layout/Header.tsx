"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileText, ChevronDown } from "lucide-react";
import { products } from "@/lib/data/products";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white border-b border-gray-200 transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        {/* Main Nav */}
        <nav className="flex items-center justify-between px-6 md:px-12 h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-navy rounded-lg flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-playfair text-xl font-bold text-brand-navy">
                Sai Paper Products
              </span>
              <span className="text-[10px] text-brand-gray uppercase tracking-widest font-medium mt-0.5 text-blue-700">
                Industrial Packaging
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href={"/"}
              className="text-sm md:text-xl font-medium text-gray-700 hover:bg-blue-50 hover:text-brand-navy px-3.5 py-2 rounded-md transition-colors"
            >
              Home
            </Link>
            <Link
              href={"/about"}
              className="text-sm md:text-xl font-medium text-gray-700 hover:bg-blue-50 hover:text-brand-navy px-3.5 py-2 rounded-md transition-colors"
            >
              About
            </Link>
            <Link
              href={"/blogs"}
              className="text-sm md:text-xl font-medium text-gray-700 hover:bg-blue-50 hover:text-brand-navy px-3.5 py-2 rounded-md transition-colors"
            >
              Blogs
            </Link>
            <Link
              href={"/contact"}
              className="text-sm md:text-xl font-medium text-gray-700 hover:bg-blue-50 hover:text-brand-navy px-3.5 py-2 rounded-md transition-colors"
            >
              Contact
            </Link>

            {/* Products Mega Dropdown */}
            <div className="relative group">
              <Link
                href={"/products"}
                className="flex items-center gap-1 text-sm md:text-xl font-medium  text-[#6B7280] hover:bg-blue-50 hover:text-brand-navy px-3.5 py-2 rounded-md transition-colors"
              >
                Products <ChevronDown className="w-3.5 h-3.5" />
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-155 bg-white border border-gray-200 rounded-xl shadow-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 grid grid-cols-2 gap-1">
                <p className="col-span-2 text-[11px] font-bold text-gray-400 uppercase tracking-widest px-2 pb-2 border-b border-gray-100 mb-2">
                  Our Products — Industrial Packaging
                </p>
                {products.map((p) => (
                  <Link
                    key={p.id}
                    href={`/products`}
                    className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-50 transition-colors group/item"
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-800 group-hover/item:text-brand-navy">
                        {p.name}
                      </p>
                      <p className="text-xs text-gray-400">{p.category}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/products"
              className="text-sm font-medium text-brand-navy border border-gray-400 border-brand-navy px-4 py-2 rounded-lg hover:bg-brand-navy hover:text-blue-700 transition-colors"
            >
              Search Products
            </Link>
            <Link
              href="/contact#quote"
              className="flex items-center gap-2 text-sm font-semibold text-white bg-brand-navy px-5 py-2 rounded-lg hover:bg-brand-navy-hover transition-colors"
            >
              <FileText className="w-4 h-4" />
              Request a Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button className="lg:hidden p-2" onClick={() => setMobileOpen(true)}>
            <Menu className="w-6 h-6 text-brand-navy" />
          </button>
        </nav>
      </header>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-200 bg-white flex flex-col overflow-y-auto">
          <div className="flex justify-between items-center px-5 py-4 border-b border-gray-200">
            <span className="font-playfair text-lg font-bold text-brand-navy">
              Sai Paper Products
            </span>
            <button onClick={() => setMobileOpen(false)}>
              <X className="w-6 h-6 text-brand-navy" />
            </button>
          </div>
          <nav className="flex flex-col px-5 py-4 gap-1 flex-1">
            {["Home", "About", "Blogs", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                className="text-base font-medium py-3 border-b border-gray-100 text-gray-800"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </Link>
            ))}
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-4 mb-2">
              Products
            </p>
            <div className="grid grid-cols-2 gap-2 pb-4 border-b border-gray-100">
              {products.map((p) => (
                <Link
                  key={p.name}
                  href={`/products`}
                  className="text-xs font-medium bg-gray-50 px-3 py-2.5 rounded-lg text-gray-700"
                  onClick={() => setMobileOpen(false)}
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
