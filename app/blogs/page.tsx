import BlogHero from "@/components/blog/BlogHero";
import FeaturedPost from "@/components/blog/Featuredpost ";
import CategoryFilter from "@/components/blog/Categoryfilter";
import BlogGrid from "@/components/blog/BlogGrid";
import ExploreTopics from "@/components/blog/ExploreTopics";
import NewsletterSection from "@/components/blog/NewsletterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry Insights | PrecisionWorks Manufacturing",
  description:
    "Deep dives into precision engineering, Industry 4.0, quality standards, sustainability, and the technologies reshaping industrial production.",
};

export default function BlogPage() {
  return (
    <main className="bg-gray-50 min-h-screen relative z-10">
      <BlogHero />
      <FeaturedPost />
      <CategoryFilter />
      <BlogGrid />
      <ExploreTopics />
      <NewsletterSection />
    </main>
  );
}