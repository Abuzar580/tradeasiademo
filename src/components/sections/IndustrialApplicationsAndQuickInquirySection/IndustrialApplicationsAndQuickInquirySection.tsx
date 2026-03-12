import { IndustrialApplicationsHeader } from "./IndustrialApplicationsHeader";
import { QuickInquiryForm } from "./QuickInquiryForm";
import { QuickInquiryHeader } from "./QuickInquiryHeader";
import Slider from "./Silder";

export function IndustrialApplicationsAndQuickInquiry() {
    return (
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
