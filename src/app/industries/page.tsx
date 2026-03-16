import { FeedbackSection } from "@/components/sections/FeedbackSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { IndustriesGridSection } from "@/components/sections/IndustriesGridSection";

export default function IndustriesPage() {
    return (
        <>
            <HeroSection
                title="The Industries We Serve"
                subtitle="A Trusted Supplier & Distributor that understands how your industries perform"
                backgroundImage="/HeroImage.png"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Industries" }
                ]}
            />
            <IndustriesGridSection />
            <FeedbackSection
                headingPrefix="Give us your"
                headingHighlight="Feedback"
                subtitle="Let us know how we can serve you better"
                buttonText="SUBMIT YOUR FEEDBACK"
                buttonHref="#"
                backgroundImage="/feedback.png"
            />
        </>
    );
}
