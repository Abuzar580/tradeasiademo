import { Events } from "./EventsSection";
import { NewsAndInsights } from "./NewsAndInsightsSection";

export function IndustryUpdatesSection() {
    return (
        <section className="bg-[var(--industry-updates-bg)] pt-[var(--industry-updates-padding-top-mobile)] pb-[var(--industry-updates-padding-bottom-mobile)] md:pt-[var(--industry-updates-padding-top-desktop)] md:pb-[var(--industry-updates-padding-bottom-desktop)]">
            <div className="layout-container px-5">
                <div className="text-center">
                    <h2 className="text-[length:var(--industry-updates-heading-size-mobile)] leading-[var(--industry-updates-heading-line-mobile)] font-[var(--industry-updates-heading-weight-mobile)] md:text-[length:var(--industry-updates-heading-size-desktop)] md:leading-[var(--industry-updates-heading-line-desktop)] md:font-[var(--industry-updates-heading-weight-desktop)] text-[var(--industry-updates-heading-color)]">
                        Industry  Updates
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--industry-updates-grid-gap-mobile)] lg:gap-[var(--industry-updates-grid-gap-desktop)] mt-[var(--industry-updates-grid-margin-top-mobile)] lg:mt-[var(--industry-updates-grid-margin-top-desktop)] lg:items-stretch">
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
