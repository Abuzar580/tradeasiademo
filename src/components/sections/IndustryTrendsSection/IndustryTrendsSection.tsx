import { Button } from "@/components/ui";
import { InsightSlider, InsightCardProps } from "./InsightSlider";

const INSIGHTS_DATA: InsightCardProps[] = [
  {
    id: "1",
    image: "/MarketInsight.png",
    badge: "MARKET INSIGHT",
    title: "What Global Trade Flows Reveal About Polyaluminium Chloride Demand",
    description: "Explore how global trade flows reveal demand for Polyaluminium Chloride (PAC) in America insights on suppliers, applications, and market trends...",
    date: "05 February 2026",
    href: "#",
  },
  {
    id: "2",
    image: "/industry2.png",
    badge: "INDUSTRY TRENDS",
    title: "What Global Trade Flows Reveal About Polyaluminium Chloride Demand",
    description: "Discover the latest trends in chemical manufacturing and distribution across Southeast Asia and their impact on global supply chains...",
    date: "28 January 2026",
    href: "#",
  },
  {
    id: "3",
    image: "/industry3.png",
    badge: "MARKET ANALYSIS",
    title: "What Global Trade Flows Reveal About Polyaluminium Chloride Demand",
    description: "Analyze the growing demand for specialty chemicals in various industrial applications and what it means for importers and exporters...",
    date: "15 January 2026",
    href: "#",
  }
];

export function IndustryTrendsSection() {
  return (
    <section
      className="pt-10 pb-[60px] md:pt-20"
      aria-labelledby="industry-trends-heading"
    >
      <div className="layout-container px-5">
        <div className="text-center mb-7 md:mb-[60px] max-w-[700px] m-auto">
          <h2
            id="industry-trends-heading"
            className="
              font-[var(--font-weight-bold)]
              text-[length:var(--heading-4-size)]
              leading-[var(--heading-3-line-height)]
              md:text-[length:var(--heading-2-size)]
              md:leading-[var(--heading-2-line-height)]
              text-[var(--brand-black)]"
          >
            Industry Trends &
            <span className="text-[var(--brand-primary)]"> Analysis</span>
          </h2>

          <p className="text-[length:var(--body-regular-size)] leading-[var(--body-regular-line-height)] font-[var(--font-weight-semibold)] md:text-[length:var(--body-large-size)] md:leading-[var(--body-large-line-height)] mt-5">
            Stay informed with the latest market insights, industry trends, and expert analysis across chemical sectors worldwide.
          </p>
        </div>

        {/* Insights Slider */}
        <InsightSlider insights={INSIGHTS_DATA} />

        <div className="flex justify-center">
          <Button
            variant="primary"
            href="#"
            className="inline-flex justify-center mt-10 md:mt-14 max-w-[200px] w-full"
          >
            View more
          </Button>
        </div>

      </div>
    </section>
  );
}
