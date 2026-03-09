"use client";

import { Button } from "@/components/ui";
import { BagIcon, LeftArrowIcon, RightArrowIcon } from "@/icons";
import Link from "next/link";
import { INDUSTRIES } from "./constant";

import { Grid, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Silder() {
    return (
        <>
            <div className="md:flex items-center justify-between hidden mb-6">
                <Button
                    variant="primary"
                    className="custom-swiper-prev inline-flex items-center justify-center rounded-[var(--border-radius-full)] bg-[var(--brand-primary)] p-0 shadow-none! text-[var(--brand-white)] shadow-none hover:bg-[var(--brand-primary-hover)] disabled:cursor-not-allowed disabled:bg-[var(--brand-neutral-surface-3)] h-12.5 w-12.5"
                >
                    <LeftArrowIcon className="w-6 h-6" />
                </Button>

                <div className="custom-swiper-pagination flex items-center gap-2" />

                <Button
                    variant="primary"
                    className="custom-swiper-next inline-flex items-center justify-center rounded-[var(--border-radius-full)] bg-[var(--brand-primary)] p-0 shadow-none! text-[var(--brand-white)] shadow-none hover:bg-[var(--brand-primary-hover)] disabled:cursor-not-allowed disabled:bg-[var(--brand-neutral-surface-3)] h-12.5 w-12.5"
                >
                    <RightArrowIcon className="w-6 h-6" />
                </Button>
            </div>

            <Swiper
                modules={[Navigation, Pagination, Grid]}
                spaceBetween={10}
                navigation={{
                    prevEl: '.custom-swiper-prev',
                    nextEl: '.custom-swiper-next',
                }}
                pagination={{
                    clickable: true,
                    el: '.custom-swiper-pagination',
                    type: 'bullets',
                    bulletClass: 'custom-swiper-pagination-bullet',
                    bulletActiveClass: 'custom-swiper-pagination-bullet-active',
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
                            className="flex items-center justify-between rounded-[var(--border-radius-md)] bg-[var(--brand-neutral-surface-2)] transition hover:bg-[var(--brand-neutral-surface-3)] px-4 py-2 min-h-[100px]"
                        >
                            <div className="flex items-center gap-3">
                                <span className="hidden md:flex h-12.5 w-12.5 flex-shrink-0 items-center justify-center rounded-[var(--border-radius-full)] bg-[var(--brand-primary)] text-[var(--brand-white)]">
                                    <BagIcon className="h-6 w-6" />
                                </span>
                                <span className="body-regular text-[var(--brand-primary)]">
                                    {industry}
                                </span>
                            </div>
                            <RightArrowIcon className="w-6 h-6 text-[var(--brand-primary)]" />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}