export type ProductCategory = {
  title: string;
  description: string;
  slug: string;
  image?: string;
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    title: "Acids",
    description: "Industrial & Specialty",
    slug: "acids",
    image: "/CategoryImage.png",
  },
  {
    title: "Additives and Modifier",
    description: "Performance Enhancement",
    slug: "additives-modifier",
    image: "/CategoryImage.png",
  },
  {
    title: "Alkali",
    description: "Base Solutions",
    slug: "alkali",
    image: "/CategoryImage.png",
  },
  {
    title: "Chelant and Builders",
    description: "Binding Agents",
    slug: "chelant-builders",
    image: "/CategoryImage.png",
  },
  {
    title: "Essential Oils",
    description: "Natural Extracts",
    slug: "essential-oils",
    image: "/CategoryImage.png",
  },
  {
    title: "Industrial & Specialty",
    description: "Inorganic Chemicals",
    slug: "industrial-specialty",
    image: "/CategoryImage.png",
  },
  {
    title: "Performance Enhancement",
    description: "Oleochemicals",
    slug: "performance-enhancement",
    image: "/CategoryImage.png",
  },
  {
    title: "Base Solutions",
    description: "Organic Chemicals",
    slug: "base-solutions",
    image: "/CategoryImage.png",
  },
  {
    title: "Binding Agents",
    description: "Oxides",
    slug: "binding-agents",
    image: "/CategoryImage.png",
  },
  {
    title: "Natural Extracts",
    description: "Petrochemicals",
    slug: "natural-extracts",
    image: "/CategoryImage.png",
  },
  {
    title: "Inorganic Chemicals",
    description: "Mineral Compounds",
    slug: "inorganic-chemicals",
    image: "/CategoryImage.png",
  },
  {
    title: "Oleochemicals",
    description: "Bio-based Products",
    slug: "oleochemicals",
    image: "/CategoryImage.png",
  },
  {
    title: "Organic Chemicals",
    description: "Carbon-based Solutions",
    slug: "organic-chemicals",
    image: "/CategoryImage.png",
  },
  {
    title: "Oxides",
    description: "Metal Compounds",
    slug: "oxides",
    image: "/CategoryImage.png",
  },
  {
    title: "Petrochemicals",
    description: "Petroleum Derivatives",
    slug: "petrochemicals",
    image: "/CategoryImage.png",
  },
];
