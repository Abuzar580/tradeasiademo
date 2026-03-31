import { IndustryTile, type IndustryCard } from "./IndustryTile";

const INDUSTRIES: IndustryCard[] = [
  { id: "agri", name: "Agriculture", image: "/Agriculture.png", href: "/industries/agriculture", productCount: 4 },
  { id: "feed", name: "Feed Ingredients", image: "/FeedIngredients.png", href: "/industries/feed-ingredients", productCount: 6 },
  { id: "fert", name: "Fertilizers", image: "/Fertilizers.png", href: "/industries/fertilizers", productCount: 3 },
  { id: "food-add", name: "Food Additives", image: "/FoodAdditives.png", href: "/industries/food-additives", productCount: 8 },
  { id: "glass-ceramics", name: "Glass and Ceramics", image: "/GlassAndCeramic.png", href: "/industries/glass-ceramics", productCount: 5 },
  { id: "lab-chem", name: "Fine Chemicals", image: "/LeatherChemicals.png", href: "/industries/lab-fine-chemicals", productCount: 12 },
  { id: "paints-inks", name: "Paints, Inks", image: "/PaintCoating.png", href: "/industries/paints-inks", productCount: 7 },
  { id: "plastic-polymer", name: "Plastic and Polymer", image: "/PlasticAndPolymers.png", href: "/industries/plastic-polymer", productCount: 9 },
  { id: "pulp-paper", name: "Pulp and Paper", image: "/PulpAndPaper.png", href: "/industries/pulp-paper", productCount: 5 },
  { id: "rubber", name: "Rubber", image: "/Rubber.png", href: "/industries/rubber", productCount: 4 },
  { id: "soap-detergent", name: "Soap & Detergents", image: "/SoapAndDetergents.png", href: "/industries/soap-detergents", productCount: 6 },
  { id: "textile", name: "Textile Chemicals", image: "/TextileChemicals.png", href: "/industries/textile-chemicals", productCount: 11 },
  { id: "water", name: "Water Treatment Chemicals", image: "/WaterTreatmentChemicals.png", href: "/industries/water-treatment", productCount: 8 },
];

export function IndustriesGridSection() {
  return (
    <section className="pt-[var(--industries-grid-padding-top-mobile)] pb-[var(--industries-grid-padding-bottom-mobile)] md:pt-[var(--industries-grid-padding-top-desktop)] md:pb-[var(--industries-grid-padding-bottom-desktop)]">
      <div className="layout-container px-5">
        <div
          className="
            grid
            grid-cols-1
            gap-y-[var(--industries-grid-gap-y-mobile)]
            md:grid-cols-3
            md:gap-y-[var(--industries-grid-gap-y-desktop)]
            md:gap-x-[var(--industries-grid-gap-x-desktop)]
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

