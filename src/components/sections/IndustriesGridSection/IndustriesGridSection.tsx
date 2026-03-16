import { IndustryTile, type IndustryCard } from "./IndustryTile";

const INDUSTRIES: IndustryCard[] = [
  { id: "agri", name: "Agriculture", image: "/HeroImage.png", href: "/industries/agriculture", productCount: 4 },
  { id: "feed", name: "Feed Ingredients", image: "/HeroImage.png", href: "/industries/feed-ingredients", productCount: 6 },
  { id: "fert", name: "Fertilizers", image: "/HeroImage.png", href: "/industries/fertilizers", productCount: 3 },
  { id: "food-add", name: "Food Additives", image: "/HeroImage.png", href: "/industries/food-additives", productCount: 8 },
  { id: "glass-ceramics", name: "Glass and Ceramics", image: "/HeroImage.png", href: "/industries/glass-ceramics", productCount: 5 },
  { id: "lab-chem", name: "Fine Chemicals", image: "/HeroImage.png", href: "/industries/lab-fine-chemicals", productCount: 12 },
  { id: "paints-inks", name: "Paints, Inks", image: "/HeroImage.png", href: "/industries/paints-inks", productCount: 7 },
  { id: "plastic-polymer", name: "Plastic and Polymer", image: "/HeroImage.png", href: "/industries/plastic-polymer", productCount: 9 },
  { id: "pulp-paper", name: "Pulp and Paper", image: "/HeroImage.png", href: "/industries/pulp-paper", productCount: 5 },
  { id: "rubber", name: "Rubber", image: "/HeroImage.png", href: "/industries/rubber", productCount: 4 },
  { id: "soap-detergent", name: "Soap & Detergents", image: "/HeroImage.png", href: "/industries/soap-detergents", productCount: 6 },
  { id: "textile", name: "Textile Chemicals", image: "/HeroImage.png", href: "/industries/textile-chemicals", productCount: 11 },
  { id: "water", name: "Water Treatment Chemicals", image: "/HeroImage.png", href: "/industries/water-treatment", productCount: 8 },
];

export function IndustriesGridSection() {
  return (
    <section className="py-10 md:py-[70px]">
      <div className="layout-container px-5">
        <div
          className="
            grid
            grid-cols-1
            gap-y-5
            md:grid-cols-3
            md:gap-y-10
            md:gap-x-7
          "
        >
          {INDUSTRIES.map((industry, index) => {
            const isLastOdd =
              INDUSTRIES.length % 3 === 1 && index === INDUSTRIES.length - 1;

            return (
              <IndustryTile
                key={industry.id}
                industry={industry}
                isCenteredOnLastRow={isLastOdd}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

