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
    image: "/CategoryImage2.png",
  },
  {
    title: "Alkali",
    description: "Base Solutions",
    slug: "alkali",
    image: "/CategoryImage3.png",
  },
  {
    title: "Chelant and Builders",
    description: "Binding Agents",
    slug: "chelant-builders",
    image: "/CategoryImage4.png",
  },
  {
    title: "Essential Oils",
    description: "Natural Extracts",
    slug: "essential-oils",
    image: "/CategoryImage5.png",
  },
  {
    title: "Industrial & Specialty",
    description: "Inorganic Chemicals",
    slug: "industrial-specialty",
    image: "/CategoryImage6.png",
  },
  {
    title: "Performance Enhancement",
    description: "Oleochemicals",
    slug: "performance-enhancement",
    image: "/CategoryImage7.png",
  },
  {
    title: "Base Solutions",
    description: "Organic Chemicals",
    slug: "base-solutions",
    image: "/CategoryImage8.png",
  },
  {
    title: "Binding Agents",
    description: "Oxides",
    slug: "binding-agents",
    image: "/CategoryImage9.png",
  },
  {
    title: "Natural Extracts",
    description: "Petrochemicals",
    slug: "natural-extracts",
    image: "/CategoryImage10.png",
  },
  {
    title: "Inorganic Chemicals",
    description: "Mineral Compounds",
    slug: "inorganic-chemicals",
    image: "/CategoryImage11.png",
  },
  {
    title: "Oleochemicals",
    description: "Bio-based Products",
    slug: "oleochemicals",
    image: "/CategoryImage12.png",
  },
  {
    title: "Organic Chemicals",
    description: "Carbon-based Solutions",
    slug: "organic-chemicals",
    image: "/CategoryImage13.png",
  },
  {
    title: "Oxides",
    description: "Metal Compounds",
    slug: "oxides",
    image: "/CategoryImage14.png",
  },
  {
    title: "Petrochemicals",
    description: "Petroleum Derivatives",
    slug: "petrochemicals",
    image: "/CategoryImage15.png",
  },
];
