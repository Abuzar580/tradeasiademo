import { SolutionCard } from "./SolutionCard";
import { Button } from "@/components/ui";
import { StackIcon, ClockIcon, BagIcon } from "@/icons";

export function SupplyChainSolutionsSection() {
  return (
    <section className="relative pt-[var(--supply-chain-solutions-padding-top-mobile)] pb-[var(--supply-chain-solutions-padding-bottom-mobile)] md:pt-[var(--supply-chain-solutions-padding-top-desktop)] md:pb-[var(--supply-chain-solutions-padding-bottom-desktop)]">
      <div
        className="absolute inset-0 -z-1 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Logistics.png')" }}
      />

      {/* White overlay */}
      <div className="absolute inset-0 bg-[var(--supply-chain-solutions-overlay-bg-color)]"></div>

      <div className="layout-container relative px-5">
        {/* Heading */}
        <div className="mx-auto max-w-[820px] text-center">
          <h2 className="text-[length:var(--supply-chain-solutions-heading-size-mobile)] leading-[var(--supply-chain-solutions-heading-line-mobile)] font-[var(--supply-chain-solutions-heading-weight-mobile)] text-[var(--supply-chain-solutions-heading-color)] md:text-[length:var(--supply-chain-solutions-heading-size-desktop)] md:leading-[var(--supply-chain-solutions-heading-line-desktop)] md:font-[var(--supply-chain-solutions-heading-weight-desktop)]">
            Bridging Continents with
            <span className="block mt-2 md:mt-10 text-[var(--supply-chain-solutions-heading-highlight-color)] tracking-[-1.84px]">
              Seamless Supply Chains
            </span>
          </h2>

          <p
            className="text-[length:var(--supply-chain-solutions-text-size-mobile)] leading-[var(--supply-chain-solutions-text-line-mobile)]
            tracking-[-0.16px] mt-6 font-[var(--supply-chain-solutions-text-weight-mobile)]
            md:text-[length:var(--supply-chain-solutions-text-size-desktop)] md:leading-[var(--supply-chain-solutions-text-line-desktop)] md:font-[var(--supply-chain-solutions-text-weight-desktop)] md:mt-10"
          >
            With over two decades of expertise in global supply chain management,
            Tradeasia International offers optimal solutions for the distribution
            of raw materials and industrial chemicals worldwide. Propel your
            industry growth with the solutions provided by Tradeasia International today.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-[var(--supply-chain-solutions-grid-margin-top-mobile)] grid grid-cols-1 gap-[var(--supply-chain-solutions-grid-gap-mobile)] md:grid-cols-2 lg:grid-cols-3 md:mt-[var(--supply-chain-solutions-grid-margin-top-desktop)] md:gap-[var(--supply-chain-solutions-grid-gap-desktop)]">
          <SolutionCard
            Icon={StackIcon}
            title="Supply Chain Solutions"
            description="Organizing cargo consolidation and shipping using the company's supply chain strategy to meet your needs."
            href="#"
          />

          <SolutionCard
            Icon={ClockIcon}
            title="Quality Inspection"
            description="Conducting quality and quantity inspection before shipment to guarantee a smooth transaction and process."
            href="#"
          />

          <SolutionCard
            Icon={BagIcon}
            title="Efficient Transport"
            description="Providing safe supply chain solutions for dangerous and non-dangerous goods and cargo."
            href="#"
          />
        </div>

        {/* CTA */}
        <div className="mt-[var(--supply-chain-solutions-cta-margin-top-mobile)] md:mt-[var(--supply-chain-solutions-cta-margin-top-desktop)] flex justify-center">
          <Button
            variant="primary"
            className="w-full max-w-[320px]"
            href="#"
          >
            DISCOVER OUR SOLUTIONS
          </Button>
        </div>
      </div>
    </section>
  );
}
