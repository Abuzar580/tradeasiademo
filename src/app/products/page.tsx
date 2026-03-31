import { HeroSection } from "@/components/sections/HeroSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { routes } from "@/config/routes";
import { PRODUCTS } from "@/constants/products";

export default function ProductsPage() {
    return (
        <>
            <HeroSection
                badge="Products"
                title="Our Products"
                subtitle="Explore our full range of industrial chemical products for your business needs"
                backgroundImage="/IndustryDetail.png"
                breadcrumbs={[
                    { label: "Home", href: routes.homePage },
                    { label: "Products" },
                ]}
            />

            <ProductsSection products={PRODUCTS} />
        </>
    );
}
