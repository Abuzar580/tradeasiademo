import { BannerSection } from "@/components/sections/BannerSection";
import { GlobalSupplySection } from "@/components/sections/GlobalSupplySection";
import { OurTopProductsSection } from "@/components/sections/OurTopProductsSection";
import { ProductCategoriesSection } from "@/components/sections/ProductCategoriesSection";
import { AppDownloadSection } from "@/components/sections/AppDownloadSection";
import { FeedbackSection } from "@/components/sections/FeedbackSection";

export function HomeLayoutOne() {
  return (
    <>
      <BannerSection
        title="Explore TradeAsia Indonesia to discover valuable"
        highlight="insights and information"
        subtitle="Mira los planes, dale seguimientos a todo el progreso y mantén las conversaciones laborales desde solo lugar."
        buttonText="Learn More"
        buttonHref="#"
      />
      <GlobalSupplySection />
      <ProductCategoriesSection />
      <OurTopProductsSection
        title="Our Top Products"
        subtitle="Explore our premium selection of high-quality chemical products trusted by industries worldwide"
      />
      <AppDownloadSection />
      <FeedbackSection headingPrefix="Give us your" headingHighlight="Feedback" subtitle="Let us know how we can serve you better" buttonText="SUBMIT YOUR FEEDBACK" buttonHref="#" backgroundImage="/feedback.png" />
    </>
  );
}
