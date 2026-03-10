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
    return (
        <>
            <div className="hidden items-center justify-between mb-6 md:flex">
                <Button
                    variant="primary"
                    className="custom-swiper-prev inline-flex items-center justify-center rounded-full bg-[var(--brand-primary)] p-0 text-[var(--brand-white)] hover:bg-[var(--brand-primary-hover)] disabled:cursor-not-allowed disabled:bg-[var(--brand-neutral-surface-3)] h-12.5 w-12.5 shadow-none!"
                >
                    <ArrowIcon className="w-6 h-6  rotate-180" />
                </Button>

                <div className="custom-swiper-pagination  flex items-center justify-center gap-2 [&_.swiper-pagination-bullet-active]:!w-[32px] [&_.swiper-pagination-bullet-active]:!rounded-[20px] [&_.swiper-pagination-bullet-active]:!bg-[var(--brand-primary)]" />

                <Button
                    variant="primary"
                    className="custom-swiper-next inline-flex items-center justify-center rounded-full bg-[var(--brand-primary)] p-0 text-[var(--brand-white)] hover:bg-[var(--brand-primary-hover)] disabled:cursor-not-allowed disabled:bg-[var(--brand-neutral-surface-3)] h-12.5 w-12.5 shadow-none!"
                >
                    <ArrowIcon className="w-6 h-6" />
                </Button>
            </div>

            <Swiper
                modules={[Navigation, Pagination, Grid]}
                spaceBetween={10}
                navigation={{
                    prevEl: ".custom-swiper-prev",
                    nextEl: ".custom-swiper-next",
                }}
                pagination={{
                    clickable: true,
                    el: ".custom-swiper-pagination",
                    renderBullet: (index, className) =>
                        `<span class="${className} h-[6px] w-[6px] rounded-[10px] bg-[var(--brand-neutral-surface-3)] cursor-pointer transition-all duration-300"></span>`,
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
                            className="flex items-center justify-between rounded-[20px] bg-[var(--brand-neutral-surface-2)] px-4 py-2 min-h-[100px] transition"
                        >
                            <div className="flex items-center gap-3">
                                <span className="hidden md:flex h-12.5 w-12.5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--brand-primary)] text-[var(--brand-white)]">
                                    <BagIcon className="h-6 w-6" />
                                </span>
                                <span className="body-regular text-[var(--brand-primary)]">
                                    {industry}
                                </span>
                            </div>

                            <ArrowIcon className="w-6 h-6 text-[var(--brand-primary)]" />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}