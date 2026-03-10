import { SolutionCard } from "./SolutionCard";
import { Button } from "@/components/ui";
import { StackIcon, ClockIcon, BagIcon } from "@/icons";

export function SupplyChainSolutionsSection() {
  return (
    <section className="relative py-15 px-5">
      <div
        className="absolute inset-0 -z-1 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Logistics.png')" }}
      />

      {/* White overlay */}
      <div className="absolute inset-0 bg-[rgba(var(--brand-white-rgb),0.90)]"></div>

      <div className="layout-container relative">
        {/* Heading */}
        <div className="mx-auto max-w-[820px] text-center">
          <h2 className="text-[length:var(--heading-3-size)] leading-[var(--heading-3-line-height)] font-[var(--font-weight-semibold)] text-[var(--brand-black)] md:text-[length:var(--heading-2-size)] md:leading-[var(--heading-2-line-height)] md:font-[var(--font-weight-bold)]">
            Bridging Continents with
            <span className="block mt-2 md:mt-10 text-[var(--brand-primary)] tracking-[-1.84px]">
              Seamless Supply Chains
            </span>
          </h2>

          <p
            className="text-[length:var(--body-regular-size)] leading-[var(--body-regular-line-height)]
            tracking-[-0.16px] mt-6 font-[var(--font-weight-semibold)]
            md:text-[length:var(--heading-5-size)] md:leading-[var(--heading-5-line-height)] md:mt-10"
          >
            With over two decades of expertise in global supply chain management,
            Tradeasia International offers optimal solutions for the distribution
            of raw materials and industrial chemicals worldwide. Propel your
            industry growth with the solutions provided by Tradeasia International today.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:mt-[60px] md:gap-10">
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
        <div className="mt-7 md:mt-[60px] flex justify-center">
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
