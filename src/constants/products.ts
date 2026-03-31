export type Product = {
  id: number;
  name: string;
  casNumber: string;
  hsCode: string;
  image: string;
  badge: string;
  category: string;
};

export const PRODUCT_CATEGORY_ORDER = [
  "agriculture",
  "feed-ingredients",
  "beauty-and-personal-care",
  "food-additives",
  "glass-and-ceramic",
  "leather-chemicals",
  "paint-ink-and-coating",
  "oleochemicals",
  "pharmaceutical",
  "pine-derivatives",
  "plastic-and-polymers",
  "pulp-and-paper",
  "rubber",
  "soap-and-detergents",
  "surplus-chemicals",
  "textile-chemicals",
  "water-treatment-chemicals",
  "boron",
  "fertilizers",
] as const;

export const PRODUCT_CATEGORY_LABELS: Record<(typeof PRODUCT_CATEGORY_ORDER)[number], string> = {
  "agriculture": "Agriculture",
  "feed-ingredients": "Feed Ingredients",
  "beauty-and-personal-care": "Beauty and Personal Care",
  "food-additives": "Food Additives",
  "glass-and-ceramic": "Glass and Ceramic",
  "leather-chemicals": "Leather Chemicals",
  "paint-ink-and-coating": "Paint Ink and Coating",
  "oleochemicals": "Oleochemicals",
  "pharmaceutical": "Pharmaceutical",
  "pine-derivatives": "Pine Derivatives",
  "plastic-and-polymers": "Plastic and Polymers",
  "pulp-and-paper": "Pulp and Paper",
  "rubber": "Rubber",
  "soap-and-detergents": "Soap and Detergents",
  "surplus-chemicals": "Surplus Chemicals",
  "textile-chemicals": "Textile Chemicals",
  "water-treatment-chemicals": "Water Treatment Chemicals",
  "boron": "Boron",
  "fertilizers": "Fertilizers",
};

const PRODUCT_NAMES: Record<string, string[]> = {
  "agriculture": [
    "Glyphosate", "Chlorpyrifos", "Mancozeb", "Imidacloprid", "Abamectin",
  ],
  "feed-ingredients": [
    "Lysine", "Methionine", "Threonine", "Tryptophan", "Choline Chloride",
  ],
  "beauty-and-personal-care": [
    "Cetyl Alcohol", "Glycerin", "Sodium Lauryl Sulfate", "Propylene Glycol", "Hyaluronic Acid",
  ],
  "food-additives": [
    "Citric Acid", "Sodium Benzoate", "Ascorbic Acid", "Tartaric Acid", "Xanthan Gum",
  ],
  "glass-and-ceramic": [
    "Sodium Silicate", "Boric Acid", "Zirconium Oxide", "Aluminum Oxide", "Calcium Carbonate",
  ],
  "leather-chemicals": [
    "Chrome Sulfate", "Formic Acid", "Sodium Formate", "Syntans", "Fatliquor",
  ],
  "paint-ink-and-coating": [
    "Titanium Dioxide", "Zinc Oxide", "Calcium Carbonate PCC", "Kaolin", "Talc",
  ],
  "oleochemicals": [
    "Palm Fatty Acid", "Stearic Acid", "Oleic Acid", "Lauric Acid", "Glycerol",
  ],
  "pharmaceutical": [
    "Paracetamol", "Ibuprofen", "Ascorbic Acid USP", "Citric Acid USP", "Magnesium Stearate",
  ],
  "pine-derivatives": [
    "Gum Rosin", "Turpentine Oil", "Tall Oil", "Pine Tar", "Abietic Acid",
  ],
  "plastic-and-polymers": [
    "Polyethylene", "Polypropylene", "Polyvinyl Chloride", "Polystyrene", "Nylon 6",
  ],
  "pulp-and-paper": [
    "Sodium Hydroxide", "Hydrogen Peroxide", "Sodium Sulfate", "Alum", "Rosin Size",
  ],
  "rubber": [
    "Sulfur", "Zinc Oxide Rubber", "Stearic Acid Rubber", "CBS Accelerator", "MBTS Accelerator",
  ],
  "soap-and-detergents": [
    "Sodium Laureth Sulfate", "Cocamidopropyl Betaine", "SLES 70%", "AOS", "Sodium Tripolyphosphate",
  ],
  "surplus-chemicals": [
    "Methanol Surplus", "Ethanol Surplus", "Acetone Surplus", "Toluene Surplus", "Xylene Surplus",
  ],
  "textile-chemicals": [
    "Acetic Acid", "Sodium Carbonate", "Hydrogen Peroxide Textile", "Caustic Soda Textile", "Optical Brightener",
  ],
  "water-treatment-chemicals": [
    "Aluminum Sulfate", "Polyaluminum Chloride", "Sodium Hypochlorite", "Chlorine", "Ferric Sulfate",
  ],
  "boron": [
    "Borax Decahydrate", "Boric Acid", "Borax Pentahydrate", "Sodium Perborate", "Disodium Octaborate",
  ],
  "fertilizers": [
    "Urea", "Ammonium Nitrate", "Diammonium Phosphate", "Potassium Chloride", "NPK Compound",
  ],
};

const CAS_NUMBERS: Record<string, string> = {
  "agriculture":                "1071-83-6",
  "feed-ingredients":           "56-87-1",
  "beauty-and-personal-care":   "36653-82-4",
  "food-additives":             "77-92-9",
  "glass-and-ceramic":          "1344-09-8",
  "leather-chemicals":          "10101-53-8",
  "paint-ink-and-coating":      "13463-67-7",
  "oleochemicals":              "57-11-4",
  "pharmaceutical":             "103-90-2",
  "pine-derivatives":           "8050-09-7",
  "plastic-and-polymers":       "9002-88-4",
  "pulp-and-paper":             "1310-73-2",
  "rubber":                     "7704-34-9",
  "soap-and-detergents":        "68585-34-2",
  "surplus-chemicals":          "67-56-1",
  "textile-chemicals":          "64-19-7",
  "water-treatment-chemicals":  "10043-01-3",
  "boron":                      "1303-96-4",
  "fertilizers":                "57-13-6",
};

const HS_CODES: Record<string, string> = {
  "agriculture":                "3808.93.00",
  "feed-ingredients":           "2922.41.00",
  "beauty-and-personal-care":   "2905.16.00",
  "food-additives":             "2918.14.00",
  "glass-and-ceramic":          "2839.11.00",
  "leather-chemicals":          "2827.39.00",
  "paint-ink-and-coating":      "3206.11.00",
  "oleochemicals":              "2915.70.00",
  "pharmaceutical":             "2924.29.00",
  "pine-derivatives":           "3806.10.00",
  "plastic-and-polymers":       "3901.10.00",
  "pulp-and-paper":             "2815.11.00",
  "rubber":                     "2802.00.00",
  "soap-and-detergents":        "3402.11.00",
  "surplus-chemicals":          "2905.11.00",
  "textile-chemicals":          "2915.21.00",
  "water-treatment-chemicals":  "2833.22.00",
  "boron":                      "2840.19.00",
  "fertilizers":                "3102.10.00",
};

const INDUSTRY_CATEGORIES: Record<string, string[]> = {
  agriculture:    ["agriculture", "fertilizers"],
  food:           ["food-additives", "feed-ingredients"],
  pharmaceutical: ["pharmaceutical", "food-additives"],
  cosmetics:      ["beauty-and-personal-care", "oleochemicals"],
  textile:        ["textile-chemicals", "leather-chemicals"],
  manufacturing:  ["plastic-and-polymers", "rubber"],
  construction:   ["glass-and-ceramic", "paint-ink-and-coating"],
  automotive:     ["rubber", "plastic-and-polymers"],
  paper:          ["pulp-and-paper", "surplus-chemicals"],
  water:          ["water-treatment-chemicals"],
};

export function getProductsByIndustry(industryId: string): Product[] {
  const categories = INDUSTRY_CATEGORIES[industryId.toLowerCase()];
  if (!categories) return PRODUCTS;
  return PRODUCTS.filter((p) => categories.includes(p.category));
}

export const PRODUCTS: Product[] = PRODUCT_CATEGORY_ORDER.flatMap((category, catIndex) =>
  PRODUCT_NAMES[category].map((name, nameIndex) => {
    const id = catIndex * 5 + nameIndex + 1;
    const imageIndex = (id - 1) % 3;
    const sliderImages = ["/SliderImage1.png", "/SliderImage2.png", "/SliderImage3.png"];
    return {
      id,
      name,
      casNumber: CAS_NUMBERS[category],
      hsCode: HS_CODES[category],
      image: sliderImages[imageIndex],
      badge: "In Stock",
      category,
    };
  })
);
