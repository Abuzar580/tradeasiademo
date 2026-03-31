"use client";

import { Button } from "@/components/ui";
import { ArrowIcon } from "@/icons";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { InsightCard, InsightCardProps } from "./InsightCard";

export type { InsightCardProps } from "./InsightCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface InsightSliderProps {
  insights: InsightCardProps[];
}

export function InsightSlider({ insights }: InsightSliderProps) {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        navigation={{
          prevEl: ".insight-swiper-prev",
          nextEl: ".insight-swiper-next",
        }}
        pagination={{
          clickable: true,
          el: ".insight-swiper-pagination",
        }}
        breakpoints={{
          0: { slidesPerView: 1},
          768: { slidesPerView: 2},
          1024: { slidesPerView: 3},
        }}
        className="insight-swiper"
      >
        {insights.map((insight) => (
          <SwiperSlide key={insight.id}>
            <InsightCard {...insight} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Arrows + Dots below slider */}
      <div className="flex items-center justify-center gap-[var(--industry-trends-nav-gap)]">
        <Button
          variant="primary"
          className="mt-7 insight-swiper-prev inline-flex items-center justify-center !rounded-[50%] disabled:cursor-not-allowed disabled:opacity-[0.3] h-[50px] w-[50px]"
        >
          <ArrowIcon className="w-2 h-3 rotate-180" />
        </Button>

        {/* Pagination dots */}
        <div className="mt-7 insight-swiper-pagination !w-auto flex items-center justify-center gap-[var(--industry-trends-pagination-gap)] [&_.swiper-pagination-bullet-active]:!w-[42px] [&_.swiper-pagination-bullet-active]:!rounded-[20px] [&_.swiper-pagination-bullet-active]:!bg-[var(--industry-trends-pagination-bullet-active-color)]" />

        <Button
          variant="primary"
          className="mt-7 insight-swiper-next inline-flex items-center justify-center !rounded-[50%] disabled:cursor-not-allowed disabled:opacity-[0.3] h-[50px] w-[50px]"
        >
          <ArrowIcon className="w-2 h-3" />
        </Button>
      </div>
    </div>
  );
}
