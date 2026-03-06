import { AppDownloadSection } from "@/components/sections/AppDownloadSection";
import { FeedbackSection } from "@/components/sections/FeedbackSection";
import { GlobalSupplySection } from "@/components/sections/GlobalSupplySection";

export function HomeLayoutOne() {
  return (
    <>
      <GlobalSupplySection/>
      <AppDownloadSection />
      <FeedbackSection headingPrefix="Give us your" headingHighlight="Feedback" subtitle="Let us know how we can serve you better" buttonText="SUBMIT YOUR FEEDBACK" buttonHref="#" backgroundImage="/feedback.png"/>
    </>
  );
}
