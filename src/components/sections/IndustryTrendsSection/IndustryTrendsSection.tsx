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
      className="pt-[var(--industry-trends-padding-top-mobile)] pb-[var(--industry-trends-padding-bottom-mobile)] md:pt-[var(--industry-trends-padding-top-desktop)] md:pb-[var(--industry-trends-padding-bottom-desktop)]"
      aria-labelledby="industry-trends-heading"
    >
      <div className="layout-container px-5">
        <div className="text-center mb-[var(--industry-trends-heading-margin-bottom-mobile)] md:mb-[var(--industry-trends-heading-margin-bottom-desktop)] max-w-[700px] m-auto">
          <h2
            id="industry-trends-heading"
            className="
              font-[var(--industry-trends-heading-weight-mobile)]
              md:font-[var(--industry-trends-heading-weight-desktop)]
              text-[length:var(--industry-trends-heading-size-mobile)]
              leading-[var(--industry-trends-heading-line-mobile)]
              md:text-[length:var(--industry-trends-heading-size-desktop)]
              md:leading-[var(--industry-trends-heading-line-desktop)]
              text-[var(--industry-trends-heading-color)]"
          >
            Industry Trends &
            <span className="text-[var(--industry-trends-heading-highlight-color)]"> Analysis</span>
          </h2>

          <p className="text-[length:var(--industry-trends-text-size-mobile)] leading-[var(--industry-trends-text-line-mobile)] font-[var(--industry-trends-text-weight-mobile)] md:text-[length:var(--industry-trends-text-size-desktop)] md:leading-[var(--industry-trends-text-line-desktop)] md:font-[var(--industry-trends-text-weight-desktop)] mt-5">
            Stay informed with the latest market insights, industry trends, and expert analysis across chemical sectors worldwide.
          </p>
        </div>

        {/* Insights Slider */}
        <InsightSlider insights={INSIGHTS_DATA} />

        <div className="flex justify-center">
          <Button
            variant="primary"
            href="#"
            className="inline-flex justify-center mt-[var(--industry-trends-cta-margin-top-mobile)] md:mt-[var(--industry-trends-cta-margin-top-desktop)] max-w-[200px] w-full"
          >
            View more
          </Button>
        </div>

      </div>
    </section>
  );
}
