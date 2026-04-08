"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { Category } from "@/lib/blog-data";

interface BlogFilterContextType {
  activeCategory: Category;
  setActiveCategory: (cat: Category) => void;
}

const BlogFilterContext = createContext<BlogFilterContextType>({
  activeCategory: "all",
  setActiveCategory: () => {},
});

export function BlogFilterProvider({ children }: { children: ReactNode }) {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  return (
    <BlogFilterContext.Provider value={{ activeCategory, setActiveCategory }}>
      {children}
    </BlogFilterContext.Provider>
  );
}

export function useBlogFilter() {
  return useContext(BlogFilterContext);
}