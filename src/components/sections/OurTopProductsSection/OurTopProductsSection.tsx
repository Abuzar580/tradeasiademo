"use client";

import { Button } from "@/components/ui";
import Image from "next/image";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ArrowIcon, CheckIcon, FileIcon } from "@/icons";

type ProductsCard = {
  id: number;
  name: string;
  casNumber: string;
  hsCode: string;
  image: string;
  CheckIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  FileIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

type ProductsSectionProps = {
  title: string;
  subtitle: string;
  products?: ProductsCard[];
};

const PRODUCTS = [
  {
    id: 1,
    name: "Citric Acid Anhydrous",
    casNumber: "88-92-9",
    hsCode: "2918.14.00",
    image: "/SliderImage1.png",
    checkIcon: CheckIcon,
    fileIcon: FileIcon,
  },
  {
    id: 2,
    name: "Citric Acid 1",
    casNumber: "99-92-9",
    hsCode: "2918.14.00",
    image: "/SliderImage2.png",
    checkIcon: CheckIcon,
    fileIcon: FileIcon,
  },
  {
    id: 3,
    name: "Citric Acid 2",
    casNumber: "77-92-9",
    hsCode: "2918.14.00",
    image: "/SliderImage3.png",
    checkIcon: CheckIcon,
    fileIcon: FileIcon,
  },
  {
    id: 4,
    name: "Citric Acid 3",
    casNumber: "66-92-9",
    hsCode: "2918.14.00",
    image: "/SliderImage3.png",
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
    <section className="relative flex justify-center overflow-hidden bg-[var(--our-top-products-bg-mobile)] md:bg-[var(--our-top-products-bg-desktop)] pt-[var(--our-top-products-padding-top-mobile)] pb-[var(--our-top-products-padding-bottom-mobile)] md:pt-[var(--our-top-products-padding-top-desktop)] md:pb-[var(--our-top-products-padding-bottom-desktop)] text-center">
      <Image
        src="/DecoratorImage.svg"
        alt=""
        width={551}
        height={543}
        className="pointer-events-none absolute right-[-80px] top-0 hidden md:block
        w-[551px] h-[543px] opacity-70
        rounded-tl-[199px]"
      />

      <Image
        src="/DecoratorImage.svg"
        alt=""
        width={551}
        height={543}
        className="pointer-events-none absolute left-[-80px] bottom-0  hidden md:block
        w-[551px] h-[543px] opacity-70
        rounded-tl-[192px] -rotate-180"
      />

      {/* Products Slider */}
      <div className="w-full md:px-[var(--our-top-products-slider-padding-x-desktop)] flex flex-col items-center relative justify-center md:justify-end md:flex-row z-10 md:gap-[var(--our-top-products-gap-main-desktop)]">
        <div className=" absolute w-[calc(100%-280px)] h-full md:bg-[var(--our-top-products-slider-bg)] md:rounded-2xl"> </div>
        {/* Desktop & Mobile Title */}
        <div className="flex flex-col w-full md:w-[545px] z-50 items-center justify-center bg-[var(--our-top-products-title-bg-mobile)]/90 md:p-6 md:py-[var(--our-top-products-title-py-desktop)] rounded-none md:rounded-3xl">
          <div className="flex flex-col gap-[var(--our-top-products-gap-inner)] text-center px-[var(--our-top-products-content-padding-mobile)] md:px-0 pb-[var(--our-top-products-content-padding-mobile)] md:pb-[var(--our-top-products-content-pb-desktop)]">
            <h1
              className="
              text-[length:var(--our-top-products-heading-size-mobile)]
              leading-[var(--our-top-products-heading-line-mobile)]
              font-[var(--our-top-products-heading-weight-mobile)]
              md:text-[length:var(--our-top-products-heading-size-desktop)]
              md:leading-[var(--our-top-products-heading-line-desktop)]
              md:font-[var(--our-top-products-heading-weight-desktop)]
              text-[var(--our-top-products-heading-color)]
            "
            >
              {title}
            </h1>

            {subtitle && (
              <p
                className="
                body-large
                font-[var(--our-top-products-text-weight-mobile)]!
                leading-[var(--our-top-products-text-line-mobile)]!
                md:font-[var(--our-top-products-text-weight-desktop)]!
                md:leading-[var(--our-top-products-text-line-desktop)]!
                text-[var(--our-top-products-text-color)]
              "
              >
                {subtitle}
              </p>
            )}
          </div>

          <div className="absolute md:relative bottom-[-80px] md:bottom-0 grid grid-cols-[1fr_auto_1fr] items-center w-full max-w-[320px] px-4 gap-[var(--our-top-products-pagination-gap)]">
            <div className="flex justify-start">
              <Button
                variant="outlined"
                className="products-swiper-prev inline-flex items-center justify-center [&.swiper-button-disabled]:opacity-30 h-[50px] w-[50px]"
              >
                <ArrowIcon className="w-4 h-3 rotate-180" />
              </Button>
            </div>
            <div className="flex products-swiper-pagination items-center justify-center gap-[var(--our-top-products-pagination-gap)] [&_.swiper-pagination-bullet-active]:!w-[40px] [&_.swiper-pagination-bullet-active]:!rounded-[20px] [&_.swiper-pagination-bullet-active]:!bg-[var(--our-top-products-pagination-bullet-color)] [&_.swiper-pagination-bullet]:!bg-[var(--our-top-products-pagination-bullet-color)]" />
            <div className="flex justify-end">
              <Button
                variant="outlined"
                className="products-swiper-next inline-flex items-center justify-center [&.swiper-button-disabled]:opacity-30 h-[50px] w-[50px]"
              >
                <ArrowIcon className="w-4 h-3" />
              </Button>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={110}
          slidesPerView={1}
          slidesPerGroup={1}
          speed={0}
          allowTouchMove={false}
          loop={false}
          navigation={{
            prevEl: ".products-swiper-prev",
            nextEl: ".products-swiper-next",
          }}
          pagination={{
            clickable: true,
            el: ".products-swiper-pagination",
            renderBullet: (index, className) =>
              `<span class="${className} h-[6px] w-[6px] rounded-[10px] bg-[var(--our-top-products-pagination-bullet-color)] cursor-pointer transition-all duration-300"></span>`,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            }
          }}
          className="industries-swiper w-full p-[var(--our-top-products-slider-padding-mobile)]! md:p-0! py-0! md:pr-[var(--our-top-products-slider-padding-right-desktop)]! md:py-[var(--our-top-products-slider-padding-desktop)]!"
        >
          {PRODUCTS.map((product) => (
            <SwiperSlide key={product.id} className="!h-auto">
              <div className="rounded-xl overflow-hidden h-full flex flex-col border-3 border-transparent hover:border-[var(--our-top-products-card-border-hover)] hover:shadow-[var(--our-top-products-card-shadow-hover)] hover:shadow-[var(--our-top-products-card-shadow-strong-hover)] transition-all duration-800 ease-in-out">
                <div className="relative w-full h-[var(--our-top-products-card-height)] bg-[var(--our-top-products-card-bg)]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={280}
                    height={280}
                    className="w-full h-[var(--our-top-products-card-image-height)] object-cover"
                  />
                  <div className="absolute w-full bottom-0 rounded-t-2xl bg-[var(--our-top-products-card-overlay)] z-50! p-[var(--our-top-products-card-padding)] flex flex-col gap-[var(--our-top-products-card-gap)] flex-1">
                    {/* Product Name */}
                    <h3 className="text-start body-large text-[var(--our-top-products-card-title-color)] line-clamp-2">
                      {product.name}
                    </h3>

                    {/* Product Details with Icons */}
                    <div className="space-y-[var(--our-top-products-card-details-gap)] flex-1">
                      <div className="flex items-center gap-[var(--our-top-products-card-detail-row-gap)]">
                        <div className="bg-[var(--our-top-products-icon-bg)] rounded-lg flex-shrink-0 w-8 h-8 flex items-center justify-center">
                          <product.checkIcon className="w-4 h-4 text-[var(--our-top-products-icon-color)]" />
                        </div>
                        <p className="body-caption text-[var(--our-top-products-card-text-color)]">
                          <label>CAS NUMBER:</label> {product.casNumber}
                        </p>
                      </div>

                      <div className="flex items-center gap-[var(--our-top-products-card-detail-row-gap)]">
                        <div className="bg-[var(--our-top-products-icon-bg)] rounded-lg flex-shrink-0 w-8 h-8 flex items-center justify-center">
                          <product.fileIcon className="w-4 h-4 text-[var(--our-top-products-icon-color)]" />
                        </div>
                        <p className="body-caption text-[var(--our-top-products-card-text-color)]">
                          <label>HS CODE:</label> {product.hsCode}
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

      </div>
    </section>
  );
}
