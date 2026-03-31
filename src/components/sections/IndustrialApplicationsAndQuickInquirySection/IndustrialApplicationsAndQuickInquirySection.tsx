import { IndustrialApplicationsHeader } from "./IndustrialApplicationsHeader";
import { QuickInquiryForm } from "./QuickInquiryForm";
import { QuickInquiryHeader } from "./QuickInquiryHeader";
import Slider from "./Silder";

export function IndustrialApplicationsAndQuickInquiry() {
    return (
        <section className="bg-[var(--industrial-applications-bg)] layout-container pt-[var(--industrial-applications-padding-top-mobile)] pb-[var(--industrial-applications-padding-bottom-mobile)] px-[var(--industrial-applications-padding-x)] md:pt-[var(--industrial-applications-padding-top-desktop)] md:pb-[var(--industrial-applications-padding-bottom-desktop)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--industrial-applications-grid-gap)] mb-[var(--industrial-applications-grid-margin-bottom)]">

                <div className="order-1 md:order-1">
                    <IndustrialApplicationsHeader
                        title="Industrial Applications"
                        subtitle="Explore our comprehensive range of industrial solutions tailored to meet your specific needs across various sectors."
                    />
                </div>

                <div className="order-3 md:order-2">
                    <QuickInquiryHeader
                        title="Quick Inquiry"
                        subtitle="Get in touch with us for product inquiries and we'll respond promptly to your needs."
                    />
                </div>

                <div className="order-2 md:order-3">
                    <Slider />
                </div>

                <div className="order-4 md:order-4">
                    <QuickInquiryForm />
                </div>

            </div>
        </section>
    )
}
