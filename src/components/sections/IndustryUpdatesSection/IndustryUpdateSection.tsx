import { Events } from "./EventsSection";
import { NewsAndInsights } from "./NewsAndInsightsSection";

export function IndustryUpdatesSection() {
    return (
        <section className="bg-[var(--brand-neutral-surface-2)] pt-[70px] pb-10 md:pb-[70px]">
            <div className="layout-container px-5">
                <div className="text-center">
                    <h2 className="text-[length:var(--heading-3-size)] leading-[var(--heading-3-line-height)] font-[var(--font-weight-bold)] text-[var(--brand-black)] md:text-[length:var(--heading-2-size)] md:leading-[var(--heading-2-line-height)]">
                        Industry  Updates
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-[64px] lg:gap-7 mt-8 lg:mt-16 lg:items-stretch">
                    <div className="lg:col-span-5 relative z-10 flex flex-col min-h-0 h-full">
                        <Events
                            title="Events"
                            subtitle="EStay informed with our latest events, researches"
                        />
                    </div>
                    <div className="lg:col-span-7 flex flex-col min-h-0 h-full">
                        <NewsAndInsights
                            title="News & Insights"
                            subtitle="Stay informed with our latest articles, research, and expert perspectives on the chemical industry."
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
