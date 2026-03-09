import { AppDownloadSection } from "@/components/sections/AppDownloadSection";
import { FeedbackSection } from "@/components/sections/FeedbackSection";
import { GlobalSupplySection } from "@/components/sections/GlobalSupplySection";
import { IndustrialApplicationsAndQuickInquiry } from "@/components/sections/industrial-applications-and-quick-inquiry";

export function HomeLayoutOne() {
  return (
    <>
      <IndustrialApplicationsAndQuickInquiry />
      <GlobalSupplySection/>
      <AppDownloadSection />
      <FeedbackSection headingPrefix="Give us your" headingHighlight="Feedback" subtitle="Let us know how we can serve you better" buttonText="SUBMIT YOUR FEEDBACK" buttonHref="#" backgroundImage="/feedback.png"/>
    </>
  );
}
