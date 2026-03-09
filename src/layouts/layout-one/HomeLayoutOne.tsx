import { AppDownloadSection } from "@/components/sections/AppDownloadSection";
import { BannerSection } from "@/components/sections/Banner";
import { FeedbackSection } from "@/components/sections/FeedbackSection";
import { GlobalSupplySection } from "@/components/sections/GlobalSupplySection";
import { ProductCategoriesSection } from "@/components/sections/ProductCategoriesSection";

export function HomeLayoutOne() {
  return (
    <>
      <BannerSection/>
      <GlobalSupplySection/>
      <ProductCategoriesSection />
      <AppDownloadSection />
      <FeedbackSection headingPrefix="Give us your" headingHighlight="Feedback" subtitle="Let us know how we can serve you better" buttonText="SUBMIT YOUR FEEDBACK" buttonHref="#" backgroundImage="/feedback.png"/>
    </>
  );
}
