import { Events } from "./EventsSection";
import { NewsAndInsights } from "./NewsAndInsightsSection";

export function IndustryUpdatesSection() {
    return (
        <section className="bg-[var(--brand-neutral-surface-2)] py-[40px] px-[20px] md:py-[60px]">
            <div className="mx-auto text-center mb-10">
                <h2 className="text-[length:var(--heading-3-size)] leading-[var(--heading-3-line-height)] font-[var(--font-weight-semibold)] text-[var(--brand-black)] md:text-[length:var(--heading-2-size)] md:leading-[var(--heading-2-line-height)] md:font-[var(--font-weight-bold)]">
                    Industry  Updates
                </h2>
            </div>

            <div className="layout-container grid grid-cols-1 md:grid-cols-12 gap-[27px]">
                <div className="md:col-span-5">
                    <Events
                        title="Events"
                        subtitle="EStay informed with our latest events, researches, and expert perspectives on the chemical industry."
                    />
                </div>
                <div className="md:col-span-7">
                    <NewsAndInsights
                        title="News & Insights"
                        subtitle="Stay informed with our latest articles, research, and expert perspectives on the chemical industry."
                    />
                </div>
            </div>
        </section>
    )
}
