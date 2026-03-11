"use client";

import { Button } from "@/components/ui";
import { ArrowIcon, CalenderIcon, LocationIcon } from "@/icons";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";

type EventsCard = {
  id: number;
  name: string;
  date: string;
  location: string;
  image: string;
  calenderIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  locationIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

type HeaderProps = {
  title: string
  subtitle?: string
  events?: EventsCard[];

}

const INDUSTRY = [
  {
    id: 1,
    name: "SIAL Interfood 2026",
    date: "2026-11-04 00:00:00",
    location: "Nusantara International Convention Exhibition (NICE) PIK 2, Tangerang, Indonesia",
    image: "/sialLogo.png",
    calenderIcon: CalenderIcon,
    locationIcon: LocationIcon,
  },
  {
    id: 2,
    name: "SIAL Interfood 2025",
    date: "2025-11-04 00:00:00",
    location: "Nusantara International Convention Exhibition (NICE) PIK 2, Tangerang, Indonesia",
    image: "/sialLogo.png",
    calenderIcon: CalenderIcon,
    locationIcon: LocationIcon,
  },
];

export function Events({
  title,
  subtitle,
}: HeaderProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <h2
          className="heading-3 text-[var(--brand-primary)]"
        >
          {title}
        </h2>

        {subtitle && (
          <p className="body-large">
            {subtitle}
          </p>
        )}
      </div>

      <div className="w-full rounded-2xl bg-[var(--brand-white)] shadow-[var(--box-shadow)] hover:shadow-[var(--btn-shadow)] flex flex-col gap-2">
        <div className="flex">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={110}
            slidesPerView={1}
            slidesPerGroup={1}
            speed={0}
            allowTouchMove={false}
            loop={true}
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
            // autoplay={{
            //     delay: 1000,
            //     disableOnInteraction: false,
            // }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 12,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 12,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 12,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 12,
              },
            }}
            className="industries-swiper"
          >
            {INDUSTRY.map((Industry) => (
              <SwiperSlide key={Industry.id}>
                <div className="rounded-2xl overflow-hidden h-full flex flex-col">
                  <div className="relative w-full bg-[var(--brand-white)]">
                    <Image
                      src={Industry.image}
                      alt={Industry.name}
                      width={420}
                      height={420}
                      className="object-cover w-full h-auto py-[60px]"
                    />
                  </div>

                  <div className="bg-[var(--brand-primary)] flex-1 px-5 md:px-8 py-12 flex flex-col">
                    {/* Industry  Name */}
                    <h4 className="heading-4 text-[var(--brand-white)]">
                      {Industry.name}
                    </h4>

                    {/* Industry  Details with Icons */}
                    <div className="space-y-7 md:space-y-6 mt-9 md:mt-6 heading-4  text-[var(--brand-white)] flex-1">
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                          <Industry.calenderIcon className="text-[var(--brand-white)]" />
                        </div>
                        <p className="body-medium text-[var(--brand-white)]">
                          {Industry.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                          <Industry.locationIcon className="text-[var(--brand-white)]" />
                        </div>
                        <p className="body-medium text-[var(--brand-white)]">
                          {Industry.location}
                        </p>
                      </div>

                      <div className="flex items-center justify-center w-full md:pt-4">
                        <div className="flex items-center justify-between w-full max-w-[320px]">
                          <Button
                            variant="outlined"
                            className="custom-swiper-prev inline-flex items-center justify-center shadow-none! p-3!"
                          >
                            <ArrowIcon className="w-6 h-6 rotate-180" />
                          </Button>

                          <div className="flex custom-swiper-pagination items-center justify-center gap-2 [&_.swiper-pagination-bullet-active]:!w-[32px] [&_.swiper-pagination-bullet-active]:!rounded-[20px] [&_.swiper-pagination-bullet-active]:!bg-[var(--brand-white)] [&_.swiper-pagination-bullet]:!bg-[var(--brand-white)]" />

                          <Button
                            variant="outlined"
                            className="custom-swiper-next inline-flex items-center justify-center shadow-none! p-3!"
                          >
                            <ArrowIcon className="w-6 h-6" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}