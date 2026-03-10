import { IndustrialApplications } from "./IndustrialApplicationsSection";
import { QuickInquiry } from "./QuickInquirySection";

export function IndustrialApplicationsAndQuickInquiry() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-[var(--brand-white)] layout-container py-[40px] px-[20px] md:py-[60px]">
            <IndustrialApplications
                title="Industrial Applications"
                subtitle="Explore our comprehensive range of industrial solutions tailored to meet your specific needs across various sectors."
            />
            <QuickInquiry
                title="Quick Inquiry"
                subtitle="Get in touch with us for product inquiries and we'll respond promptly to your needs."
            />
        </section>
    )
}
