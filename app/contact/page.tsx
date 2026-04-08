import CTASection from "@/components/home/CTASection";
import MapSection from "@/components/MapSection";

function page() {
  return (
    <div className="relative z-10 bg-white">
      <CTASection />
      <MapSection/>
    </div>
  );
}

export default page;
