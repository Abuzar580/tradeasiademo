import Image from "next/image";
import BannerHeader from "./(components)/banner-header";
import { Button } from "@/components/ui";

export function BannerSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-neutral-surface-2)] py-15 px-5 md:py-16 lg:py-[50px]">
      {/* Top Right Decoration */}
      <Image
        src="/ArtWork.svg"
        alt=""
        width={551}
        height={543}
        className="pointer-events-none absolute right-[-80px] top-0 hidden md:block w-[551px] h-[543px] opacity-70"
      />

      {/* Top Left Decoration */}
      <Image
        src="/ArtWork.svg"
        alt=""
        width={551}
        height={543}
        className="pointer-events-none absolute left-0 top-[-80px] w-[551px] h-[543px] opacity-70 rotate-270"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 layout-container relative mt-16! md:mt-35!" style={{ textAlign: "center" }}>
        {/* Left: Text + buttons */}
        <BannerHeader
          title1="Explore TradeAsia Indonesia to discover valuable"
          title2="insights and information"
          subtitle="Mira los planes, dale seguimientos a todo el progreso y mantén las conversaciones laborales desde solo lugar. Si gestionas los proyectos con Pigueon, estarás al tanto de todo lo queel equipo realiza."
          buttonText="Learn More"
        />

        {/* Right: Mobile phone mockups */}
        <div className="w-full">
          <Image
            src="/banner-image.png"
            alt="Mobile App on smartphone"
            width={500}
            height={500}
            className="w-full h-[250px] md:h-[360px] rounded-[51px] object-cover"
            priority
          />
        </div>

        <div className="flex justify-center">
          <Button className="mt-4 block md:hidden" variant="primary">
              {"Learn More"}
          </Button>
        </div>
      </div>
    </section>
  );
}
