import HeroSection from "@/components/home/HeroSection";
import ProductsSection from "@/components/home/ProductsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CertificationsSection from "@/components/home/CertificationsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import FAQSection from "@/components/about/Faq";

export const metadata = {
  title: "Sai Paper Products | Industrial Packaging Solutions",
  description:
    "Trusted manufacturer of paper cores, fibre drums, corrugated boxes & packaging. ISO 9001:2015 certified. Pan-India delivery.",
};

export default function HomePage() {
  return (
    <main className="relative z-10 bg-white">
      <HeroSection />
      <ProductsSection />
      <WhyChooseUs />
      <CertificationsSection />
      <TestimonialsSection />
      <FAQSection/>
      <CTASection />
    </main>
  );
}
