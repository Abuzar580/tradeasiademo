"use client";

import { Button } from "@/components/ui";
import Image from "next/image";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowIcon, CheckIcon, FileIcon, StackIcon } from "@/icons";

type ProductsSectionProps = {
  title: string;
  subtitle: string;
};

export type FeatureCard = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  value: string;
  label: string;
};

const PRODUCTS = [
  {
    id: 1,
    name: "Citric Acid Anhydrous",
    casNumber: "88-92-9",
    hsCode: "2918.14.00",
    image: "/CategoryImage.png",
    checkIcon: CheckIcon,
    fileIcon: FileIcon,
  },
  {
    id: 2,
    name: "Citric Acid 1",
    casNumber: "99-92-9",
    hsCode: "2918.14.00",
    image: "/BannerImage.png",
    checkIcon: CheckIcon,
    fileIcon: FileIcon,
  },
  {
    id: 3,
    name: "Citric Acid 2",
    casNumber: "77-92-9",
    hsCode: "2918.14.00",
    image: "/CategoryImage.png",
    checkIcon: CheckIcon,
    fileIcon: FileIcon,
  },
  {
    id: 4,
    name: "Citric Acid 3",
    casNumber: "66-92-9",
    hsCode: "2918.14.00",
    image: "/BannerImage.png",
    checkIcon: CheckIcon,
    fileIcon: FileIcon,
  },
  {
    id: 5,
    name: "Citric Acid 4",
    casNumber: "44-92-9",
    hsCode: "2918.14.00",
    image: "/CategoryImage.png",
    checkIcon: CheckIcon,
    fileIcon: FileIcon,
  },
  {
    id: 6,
    name: "Citric Acid 5",
    casNumber: "66-92-9",
    hsCode: "2918.14.00",
    image: "/BannerImage.png",
    checkIcon: CheckIcon,
    fileIcon: FileIcon,
  },
];

export function OurTopProductsSection({
  title,
  subtitle
}: ProductsSectionProps) {
  return (
    <section className="relative flex justify-center overflow-hidden bg-[var(--brand-primary)] md:bg-[var(--brand-black)] py-15 text-center md:py-16 lg:py-[120px]">
      <Image
        src="/ArtWorkIcon.svg"
        alt=""
        width={551}
        height={543}
        className="pointer-events-none absolute right-[-80px] top-0 hidden md:block
        w-[551px] h-[543px] opacity-70
        rounded-tl-[199px]"
      />

      <Image
        src="/ArtWorkIcon.svg"
        alt=""
        width={551}
        height={543}
        className="pointer-events-none absolute left-[-80px] bottom-0  hidden md:block
        w-[551px] h-[543px] opacity-70
        rounded-tl-[192px] -rotate-180"
      />

      {/* Products Slider */}
      <div className="w-full flex flex-col items-center md:right-[-104px] relative justify-center md:justify-end md:flex-row max-w-[1140px] z-10 md:bg-[var(--brand-neutral-surface-2)] md:py-[76px] md:px-[34px] md:rounded-2xl">
        {/* Desktop & Mobile Title */}
        <div className="flex flex-col w-full md:absolute md:left-[-206px] md:w-[385px] md:h-[478px] items-center justify-center gap-6 bg-[rgba(var(--brand-primary-rgb),0.9)] p-4 md:p-6 rounded-none md:rounded-3xl py-8 md:py-0">
          <div className="flex flex-col gap-[30px] text-center">
            <h1
              className="
              text-[length:var(--heading-3-size)]
              leading-[var(--heading-3-line-height)]
              font-[var(--font-weight-bold)]
              md:text-[length:var(--heading-2-size)]
              md:leading-[var(--heading-2-line-height)]
              text-[var(--brand-white)]
            "
            >
              {title}
            </h1>

            {subtitle && (
              <p
                className="
                leading-[var(--body-large-line-height)]
                font-[var(--font-weight-semibold)]
                text-[var(--brand-white)]
              "
              >
                {subtitle}
              </p>
            )}
          </div>
          <div className="hidden md:flex items-center justify-between w-full md:max-w-[300px] max-w-[320px]">
            <Button
              variant="outlined"
              className="custom-swiper-prev inline-flex items-center justify-center rounded-full disabled:cursor-not-allowed disabled:opacity-[0.3]"
            >
              <ArrowIcon className="w-4 h-4 rotate-180" />
            </Button>

            <div className="hidden md:flex custom-swiper-pagination items-center justify-center gap-2 [&_.swiper-pagination-bullet-active]:!w-[32px] [&_.swiper-pagination-bullet-active]:!rounded-[20px] [&_.swiper-pagination-bullet-active]:!bg-[var(--brand-white)] [&_.swiper-pagination-bullet]:!bg-[var(--brand-white)]" />

            <Button
              variant="outlined"
              className="custom-swiper-next inline-flex items-center justify-center rounded-full disabled:cursor-not-allowed disabled:opacity-[0.3]"
            >
              <ArrowIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={12}
          slidesPerView={3}
          slidesPerGroup={1}
          speed={0}
          allowTouchMove={false}
          navigation={{
            prevEl: ".custom-swiper-prev",
            nextEl: ".custom-swiper-next",
          }}
          pagination={{
            clickable: true,
            el: ".custom-swiper-pagination",
            renderBullet: (index, className) =>
              `<span class="${className} h-[6px] w-[6px] rounded-[10px] bg-[var(--brand-white)] cursor-pointer transition-all duration-300"></span>`,
          }}
          autoplay={{
            delay: 1000000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 12,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="m-0! w-full md:max-w-[900px] p-[50px]! md:p-0! py-0! md:py-0!"
        >
          {PRODUCTS.map((product) => (
            <SwiperSlide key={product.id} className="!h-auto">
              <div className="rounded-xl overflow-hidden h-full flex flex-col border-3 border-transparent hover:border-[var(--brand-primary)] hover:shadow-[5px_5px_19px_var(--brand-primary-hover)] transition-all duration-300 ease-in-out">
                <div className="relative w-full h-[533px] bg-[var(--brand-neutral-surface-2)]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={280}
                    height={280}
                    className="w-full h-[280px] object-cover"
                  />
                  <div className="absolute w-full bottom-0 rounded-t-2xl bg-[var(--brand-primary-deep)] z-50! p-[26px] flex flex-col gap-[20px] flex-1">
                    {/* Product Name */}
                    <h3 className="text-start body-large text-[var(--brand-white)] line-clamp-2">
                      {product.name}
                    </h3>

                    {/* Product Details with Icons */}
                    <div className="space-y-4 flex-1">
                      <div className="flex items-center gap-3">
                        <div className="bg-[var(--brand-white)] rounded-lg flex-shrink-0 w-8 h-8 flex items-center justify-center">
                          <product.checkIcon className="w-4 h-4 text-[var(--brand-primary)]" />
                        </div>
                        <p className="body-caption text-[var(--brand-white)]">
                          <span className="body-caption">CAS NUMBER:</span> {product.casNumber}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="bg-[var(--brand-white)] rounded-lg flex-shrink-0 w-8 h-8 flex items-center justify-center">
                          <product.fileIcon className="w-4 h-4 text-[var(--brand-primary)]" />
                        </div>
                        <p className="body-caption text-[var(--brand-white)]">
                          <span className="body-caption">HS CODE:</span> {product.hsCode}
                        </p>
                      </div>
                    </div>

                    {/* Inquire Button */}
                    <Button
                      variant="outlined"
                      href="#"
                      className="w-full mt-auto"
                    >
                      INQUIRE NOW
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* mobile */}
        <div className="flex md:hidden mt-10 items-center justify-between w-full md:max-w-[300px] max-w-[320px]">
          <Button
            variant="outlined"
            className="custom-swiper-prev inline-flex items-center justify-center rounded-full disabled:cursor-not-allowed disabled:opacity-[0.3]"
          >
            <ArrowIcon className="w-4 h-4 rotate-180" />
          </Button>

          {/* <div className="hidden md:flex custom-swiper-pagination items-center justify-center gap-2 [&_.swiper-pagination-bullet-active]:!w-[32px] [&_.swiper-pagination-bullet-active]:!rounded-[20px] [&_.swiper-pagination-bullet-active]:!bg-[var(--brand-white)] [&_.swiper-pagination-bullet]:!bg-[var(--brand-white)]" /> */}

          <Button
            variant="outlined"
            className="custom-swiper-next inline-flex items-center justify-center rounded-full disabled:cursor-not-allowed disabled:opacity-[0.3]"
          >
            <ArrowIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
