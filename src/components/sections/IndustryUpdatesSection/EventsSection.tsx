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
    <div className="flex flex-col gap-[var(--industry-updates-events-gap-main-mobile)] h-full lg:gap-[var(--industry-updates-events-gap-main-desktop)]">
      <div className="flex flex-col gap-[var(--industry-updates-events-gap-header)]">
        <h2
          className="heading-3 text-[var(--industry-updates-subsection-title-color)]"
        >
          {title}
        </h2>

        {subtitle && (
          <p className="body-large">
            {subtitle}
          </p>
        )}
      </div>

      <div className="relative z-10 w-full flex-1 min-h-0 flex flex-col rounded-2xl bg-[var(--industry-updates-events-card-bg)] shadow-[var(--industry-updates-events-card-shadow)] hover:shadow-[var(--industry-updates-events-card-shadow-hover)] gap-[var(--industry-updates-events-card-gap)]">
        <div className="relative z-10 flex flex-1 min-h-0 flex flex-col">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={110}
            slidesPerView={1}
            slidesPerGroup={1}
            speed={0}
            allowTouchMove={false}
            loop={false}
            navigation={{
              prevEl: ".events-swiper-prev",
              nextEl: ".events-swiper-next",
            }}
            pagination={{
              clickable: true,
              el: ".events-swiper-pagination",
              renderBullet: (index, className) =>
                `<span class="${className} h-[6px] w-[6px] rounded-[10px] bg-[var(--industry-updates-events-pagination-bullet-color)] cursor-pointer transition-all duration-300"></span>`,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 12,
              }
            }}
            className="industries-swiper h-full w-full flex-1"
          >
            {INDUSTRY.map((Industry) => (
              <SwiperSlide key={Industry.id}>
                <div className="rounded-tl-2xl rounded-tr-2xl overflow-hidden h-full flex flex-col">
                  <div className="relative w-full bg-[var(--industry-updates-events-card-bg)]">
                    <Image
                      src={Industry.image}
                      alt={Industry.name}
                      width={420}
                      height={420}
                      className="object-cover w-full h-auto py-[var(--industry-updates-events-slide-image-padding-y)]"
                    />
                  </div>

                  <div className="bg-[var(--industry-updates-events-slide-content-bg)] flex-1 px-5 md:px-8 pb-0 py-[var(--industry-updates-events-slide-content-padding-y)] flex flex-col">
                    {/* Industry  Name */}
                    <h4 className="heading-4 text-[var(--industry-updates-events-slide-title-color)]">
                      {Industry.name}
                    </h4>

                    {/* Industry  Details with Icons */}
                    <div className="space-y-[var(--industry-updates-events-slide-details-gap-mobile)] md:space-y-[var(--industry-updates-events-slide-details-gap-desktop)] mt-9 md:mt-6 heading-4 text-[var(--industry-updates-events-slide-text-color)] flex-1">
                      <div className="flex items-center gap-[var(--industry-updates-events-slide-row-gap-mobile)] md:gap-[var(--industry-updates-events-slide-row-gap-desktop)]">
                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                          <Industry.calenderIcon className="text-[var(--industry-updates-events-slide-text-color)]" />
                        </div>
                        <p className="body-medium text-[var(--industry-updates-events-slide-text-color)]">
                          {Industry.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-[var(--industry-updates-events-slide-row-gap-mobile)] md:gap-[var(--industry-updates-events-slide-row-gap-desktop)]">
                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                          <Industry.locationIcon className="text-[var(--industry-updates-events-slide-text-color)]" />
                        </div>
                        <p className="body-medium text-[var(--industry-updates-events-slide-text-color)]">
                          {Industry.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Single pagination + nav outside slides so bullets stay visible */}
          <div className="rounded-b-2xl bg-[var(--industry-updates-events-nav-bg)] flex items-center justify-center w-full pb-[var(--industry-updates-events-nav-padding-bottom-mobile)] md:pb-[var(--industry-updates-events-nav-padding-bottom-desktop)] flex-shrink-0 pt-[var(--industry-updates-events-nav-padding-top)]">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center w-full max-w-[320px] px-4 gap-[var(--industry-updates-events-nav-gap)]">
              <div className="flex justify-start">
                <Button
                  variant="outlined"
                  className="events-swiper-prev inline-flex items-center justify-center shadow-none! p-3! [&.swiper-button-disabled]:opacity-30 h-[50px] w-[50px]"
                >
                  <ArrowIcon className="w-4 h-3 rotate-180" />
                </Button>
              </div>
              <div className="flex events-swiper-pagination items-center justify-center gap-[var(--industry-updates-events-nav-gap)] [&_.swiper-pagination-bullet-active]:!w-[40px] [&_.swiper-pagination-bullet-active]:!rounded-[20px] [&_.swiper-pagination-bullet-active]:!bg-[var(--industry-updates-events-pagination-bullet-color)] [&_.swiper-pagination-bullet]:!bg-[var(--industry-updates-events-pagination-bullet-color)]" />
              <div className="flex justify-end">
                <Button
                  variant="outlined"
                  className="events-swiper-next inline-flex items-center justify-center shadow-none! p-3! [&.swiper-button-disabled]:opacity-30 h-[50px] w-[50px]"
                >
                  <ArrowIcon className="w-4 h-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}