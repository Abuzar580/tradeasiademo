import { IndustrialApplicationsHeader } from "./IndustrialApplicationsHeader";
import { QuickInquiryForm } from "./QuickInquiryForm";
import { QuickInquiryHeader } from "./QuickInquiryHeader";
import Slider from "./Silder";

export function IndustrialApplicationsAndQuickInquiry() {
    return (
        <section className="bg-[var(--brand-white)] layout-container py-[40px] px-[20px] md:py-[60px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] mb-[60px]">

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
