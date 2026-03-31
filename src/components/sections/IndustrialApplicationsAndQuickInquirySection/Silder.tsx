"use client";

import { Button } from "@/components/ui";
import { ArrowIcon, BagIcon } from "@/icons";
import Link from "next/link";
import { INDUSTRIES } from "./constant";

import { Grid, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slider() {
    const mobileCards = INDUSTRIES.slice(0, 10);

    return (
        <div className="w-full h-full md:rounded-[var(--industrial-applications-slider-radius-desktop)] md:bg-[var(--industrial-applications-slider-bg)] px-0 py-0 md:px-[var(--industrial-applications-slider-padding-x)] md:py-[var(--industrial-applications-slider-padding-y)] md:shadow-[var(--industrial-applications-slider-shadow)] flex flex-col gap-[var(--industrial-applications-slider-gap)]">

            {/* MOBILE GRID */}
            <div className="grid grid-cols-2 gap-x-[var(--industrial-applications-slider-mobile-grid-gap-x)] gap-y-[var(--industrial-applications-slider-mobile-grid-gap-y)] md:hidden">
                {mobileCards.map((industry, index) => (
                    <Link
                        key={index}
                        href="#"
                        className="flex items-center justify-between rounded-[var(--industrial-applications-slider-card-radius)] bg-[var(--industrial-applications-slider-card-bg)] px-[var(--industrial-applications-slider-card-padding-x)] py-[var(--industrial-applications-slider-card-padding-y)] gap-[var(--industrial-applications-slider-card-gap)]"
                    >
                        <span className="body-regular text-[var(--industrial-applications-slider-card-text-color)]">
                            {industry}
                        </span>
                        <ArrowIcon className="w-2 h-3 text-[var(--industrial-applications-slider-card-icon-color)] flex-shrink-0" />
                    </Link>
                ))}
            </div>

            {/* DESKTOP SLIDER */}
            <div className="hidden md:block flex-1">
                <div className="hidden items-center justify-between mb-6 md:flex">
                    <Button
                        variant="primary"
                        className="custom-swiper-prev inline-flex items-center justify-center !rounded-[50%] disabled:cursor-not-allowed disabled:opacity-[0.3] h-[50px] w-[50px] !shadow-none"
                    >
                        <ArrowIcon className="w-2 h-3 rotate-180" />
                    </Button>

                    <div className="custom-swiper-pagination !w-auto flex items-center justify-center gap-[var(--industrial-applications-slider-pagination-gap)] [&_.swiper-pagination-bullet-active]:!w-[42px] [&_.swiper-pagination-bullet-active]:!rounded-[20px] [&_.swiper-pagination-bullet-active]:!bg-[var(--industrial-applications-slider-pagination-bullet-active-color)]" />

                    <Button
                        variant="primary"
                        className="custom-swiper-next inline-flex items-center justify-center !rounded-[50%] disabled:cursor-not-allowed disabled:opacity-[0.3] h-[50px] w-[50px] !shadow-none"
                    >
                        <ArrowIcon className="w-2 h-3" />
                    </Button>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Grid]}
                    spaceBetween={20}
                    navigation={{
                        prevEl: ".custom-swiper-prev",
                        nextEl: ".custom-swiper-next",
                    }}
                    pagination={{
                        clickable: true,
                        el: ".custom-swiper-pagination",
                        renderBullet: (index, className) =>
                            `<span class="${className} h-[6px] w-[6px] rounded-[10px] bg-[var(--industrial-applications-slider-pagination-bullet-color)] cursor-pointer transition-all duration-300"></span>`,
                    }}
                    grid={{
                        rows: 2,
                        fill: "row",
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            grid: { rows: 5, fill: "row" },
                        },
                        768: {
                            slidesPerView: 2,
                            grid: { rows: 2, fill: "row" },
                        },
                        1024: {
                            slidesPerView: 2,
                            grid: { rows: 4, fill: "row" },
                        },
                        1280: {
                            slidesPerView: 2,
                            grid: { rows: 5, fill: "row" },
                        },
                    }}
                    className="industries-swiper"
                >
                    {INDUSTRIES.map((industry, index) => (
                        <SwiperSlide key={index}>
                            <Link
                                href="#"
                                className="flex items-center justify-between rounded-[var(--industrial-applications-slider-card-radius)] bg-[var(--industrial-applications-slider-card-bg)] px-[var(--industrial-applications-slider-card-padding-x)] py-[var(--industrial-applications-slider-card-padding-y)] transition gap-[var(--industrial-applications-slider-desktop-card-gap)]"
                            >
                                <div className="flex items-center gap-[var(--industrial-applications-slider-desktop-card-inner-gap)]">
                                    <span className="hidden md:flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--industrial-applications-slider-desktop-icon-bg)] text-[var(--industrial-applications-slider-desktop-icon-color)]">
                                        <BagIcon className="h-6 w-6" />
                                    </span>
                                    <span className="body-regular text-[var(--industrial-applications-slider-card-text-color)]">
                                        {industry}
                                    </span>
                                </div>

                                <ArrowIcon className="w-2 h-3 text-[var(--industrial-applications-slider-card-icon-color)] flex-shrink-0" />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="flex justify-center">
                <Button variant="primary" href="/industries" className="px-[30px]!">
                    SEE MORE INDUSTRIES
                </Button>
            </div>
        </div>
    );
}