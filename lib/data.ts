export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  specs: { label: string; value: string }[];
  tags: string[];
  isEcoFriendly: boolean;
  image: string;
};

export const products: Product[] = [
  {
    id: "1",
    slug: "paper-core",
    name: "Paper Core",
    category: "Core Products",
    tagline: "High-strength cores for industrial winding",
    description: "...",
    specs: [{ label: "Diameter", value: "25mm – 300mm" }],
    tags: ["Recyclable", "Custom Sizes"],
    isEcoFriendly: true,
    image: "/images/paper-core.jpg",
  },
  // ...baki 10 products
];