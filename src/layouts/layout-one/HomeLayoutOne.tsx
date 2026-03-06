import { AppDownloadSection } from "@/components/sections/AppDownloadSection";
import { FeedbackSection } from "@/components/sections/FeedbackSection";

export function HomeLayoutOne() {
  return (
    <>
      <AppDownloadSection />
      <FeedbackSection headingPrefix="Give us your" headingHighlight="Feedback" subtitle="Let us know how we can serve you better" buttonText="SUBMIT YOUR FEEDBACK" buttonHref="#" backgroundImage="/feedback.png"/>
    </>
  );
}
