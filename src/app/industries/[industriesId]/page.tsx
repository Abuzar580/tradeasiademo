import { HeroSection } from "@/components/sections/HeroSection";
import { IndustriesProductsSection } from "@/components/sections/IndustriesProductsSection";
import { routes } from "@/config/routes";
import { getProductsByIndustry } from "@/constants/products";

export default async function IndustriesDetailPage({ params }: { params: Promise<{ industriesId: string }> }) {
    const { industriesId } = await params;
    const formattedTitle = industriesId.charAt(0).toUpperCase() + industriesId.slice(1);

    return (
        <>
            <HeroSection
                badge="Industry"
                title={formattedTitle}
                subtitle="Essential chemicals for modern farming"
                backgroundImage="/IndustryDetail.png"
                breadcrumbs={[
                    { label: "Home", href: `${routes.homePage}` },
                    { label: "Industries", href: `${routes.industries.list}` },
                    { label: formattedTitle }
                ]}
            />

            <IndustriesProductsSection
                products={getProductsByIndustry(industriesId)}
                title={`${formattedTitle} Chemicals`}
                description={`Explore our range of chemical products for the ${formattedTitle.toLowerCase()} industry. Tradeasia International supplies high-quality chemicals to support your industrial needs.`}
            />
        </>
    );
}
