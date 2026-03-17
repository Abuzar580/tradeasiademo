"use client";

import Image from "next/image";
import { ArrowIcon } from "@/icons";
import { Button } from "@/components/ui/Button";

type ArticleCard = {
  id: string;
  image: string;
  badge: string;
  heading: string;
  date: string;
  readMoreUrl: string;
};

type NewsAndInsightsProps = {
  title: string;
  subtitle?: string;
  articles?: ArticleCard[];
};

const ARTICLE= [
  {
    id: "1",
    image: "/artical1.png",
    badge: "ARTICLE",
    heading: "The Invisible Framework: Understanding Bulking Agents in Foo...",
    date: "04 February 2026",
    readMoreUrl: "/article/1"
  },
  {
    id: "2",
    image: "/artical2.png",
    badge: "ARTICLE",
    heading: "The Zero-Error Standard: Managing Allergens from Distribution to Labeling",
    date: "04 February 2026",
    readMoreUrl: "/article/2"
  },
  {
    id: "3",
    image: "/artical3.png",
    badge: "ARTICLE",
    heading: "Deep Dive: The Universal Emulsifier – Understanding Lecithin in Food...",
    date: "04 February 2026",
    readMoreUrl: "/article/3"
  },
]


export function NewsAndInsights({
  title,
  subtitle,
}: NewsAndInsightsProps) {
  return (
    <div className="flex flex-col gap-[30px] h-full">
      <div className="flex flex-col gap-[20px] ">
        <h2
          className="heading-3 text-[var(--brand-primary)]"
        >
          {title}
        </h2>

        {subtitle && (
          <p
            className="body-large"
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Articles Grid */}
      {ARTICLE.length > 0 && (
        <div className="grid grid-cols-1 gap-[30px]">
          {ARTICLE.map((article) => (
            <div
              key={article.id}
              className=" flex flex-col md:flex-row rounded-[18px] bg-[var(--brand-white)] shadow-[var(--box-shadow)] hover:shadow-[var(--btn-shadow)] overflow-hidden bg-[var(--brand-white)]"
            >
              {/* Article Image */}
              <div className="hidden md:flex relative w-full md:max-w-[270px] h-auto flex-shrink-0">
                <Image
                  src={article.image}
                  alt={article.heading}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Article Content */}
              <div className="flex flex-col gap-[18px] justify-between py-7 px-6 md:px-[18px]">
                  <span
                    className="inline-flex w-fit body-caption font-[var(--font-weight-semibold)]! py-2 px-5 text-[var(--brand-primary)] border border-[var(--brand-primary)] rounded-[20px] uppercase bg-[var(--brand-neutral-surface-2)]"
                  >
                    {article.badge}
                  </span>

                <p className="body-medium text-[var(--brand-primary)] leading-[30px]!" >
                  {article.heading}
                </p>

                <div className="flex items-center justify-between gap-[16px] pt-[16px]">
                  <span className="body-caption font-[var(--font-weight-semibold)]!">
                    {article.date}
                  </span>

                  <Button
                    href={article.readMoreUrl}
                    variant="primary"
                    className=" inline-flex gap-3 items-center justify-center py-3! px-5!"
                  >
                    Read More
                    <ArrowIcon className="w-4 h-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
