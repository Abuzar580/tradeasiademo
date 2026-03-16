"use client";

import { Button } from "@/components/ui";
import Image from "next/image";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ArrowIcon, CheckIcon, FileIcon, StackIcon } from "@/icons";

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
    <section className="relative flex justify-center overflow-hidden bg-[var(--brand-primary)] md:bg-[var(--brand-black)] py-[40px] md:py-[80px] pb-[120px] text-center md:py-16 lg:py-[120px]">
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
      <div className="w-full md:px-[40px] flex flex-col items-center relative justify-center md:justify-end md:flex-row z-10 md:gap-[30px]">
        <div className=" absolute w-[calc(100%-240px)] h-full md:bg-[var(--brand-neutral-surface-2)] md:rounded-2xl"> </div>
        {/* Desktop & Mobile Title */}
        <div className="flex flex-col w-full md:w-[545px] z-50 items-center justify-center bg-[rgba(var(--brand-primary-rgb),0.9)] md:p-6 md:py-[72px] rounded-none md:rounded-3xl">
          <div className="flex flex-col gap-[30px] text-center md:px-0 px-[52px] pb-[50px] md:pb-[40px]">
            <h1
              className="
              text-[length:var(--heading-3-size)]
              leading-[var(--heading-3-line-height)]
              font-[var(--font-weight-semibold)]
              md:text-[length:var(--heading-2-size)]
              md:leading-[var(--heading-2-line-height)]
              text-[var(--brand-white)]
              md:px-0 px-[50px]
            "
            >
              {title}
            </h1>

            {subtitle && (
              <p
                className="
                body-large
                font-[var(--font-weight-medium)]!
                leading-[var(--body-large-line-height)]!
                text-[var(--brand-white)]
              "
              >
                {subtitle}
              </p>
            )}
          </div>

          <div className="absolute md:relative bottom-[-80px] md:bottom-0 grid grid-cols-[1fr_auto_1fr] items-center w-full max-w-[320px] px-4 gap-2">
            <div className="flex justify-start">
              <Button
                variant="outlined"
                className="products-swiper-prev inline-flex items-center justify-center shadow-none! p-3! [&.swiper-button-disabled]:opacity-30 h-[50px] w-[50px]"
              >
                <ArrowIcon className="w-4 h-3 rotate-180" />
              </Button>
            </div>
            <div className="flex products-swiper-pagination items-center justify-center gap-2 [&_.swiper-pagination-bullet-active]:!w-[40px] [&_.swiper-pagination-bullet-active]:!rounded-[20px] [&_.swiper-pagination-bullet-active]:!bg-[var(--brand-white)] [&_.swiper-pagination-bullet]:!bg-[var(--brand-white)]" />
            <div className="flex justify-end">
              <Button
                variant="outlined"
                className="products-swiper-next inline-flex items-center justify-center shadow-none! p-3! [&.swiper-button-disabled]:opacity-30 h-[50px] w-[50px]"
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
              `<span class="${className} h-[6px] w-[6px] rounded-[10px] bg-[var(--brand-white)] cursor-pointer transition-all duration-300"></span>`,
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
          className="industries-swiper m-0! w-full p-[50px]! md:p-0! py-0! md:pr-[32px]! md:py-[76px]!"
        >
          {PRODUCTS.map((product) => (
            <SwiperSlide key={product.id} className="!h-auto">
              <div className="rounded-xl overflow-hidden h-full flex flex-col border-3 border-transparent hover:border-[var(--brand-primary)] hover:shadow-[1px_1px_6px_var(--brand-primary-hover)] hover:border-[5px_3px_10px_var(--brand-primary-hover)] transition-all duration-800 ease-in-out">
                <div className="relative w-full h-[533px] bg-[var(--brand-neutral-surface-2)]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={280}
                    height={280}
                    className="w-full h-[286px] object-cover"
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

      </div>
    </section>
  );
}
