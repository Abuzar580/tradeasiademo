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
    image: "/CategoryImage.png",
    badge: "ARTICLE",
    heading: "The Invisible Framework: Understanding Bulking Agents in Foo...",
    date: "04 February 2026",
    readMoreUrl: "/article/1"
  },
  {
    id: "2",
    image: "/CategoryImage.png",
    badge: "ARTICLE",
    heading: "The Zero-Error Standard: Managing Allergens from Distribution to Labeling",
    date: "04 February 2026",
    readMoreUrl: "/article/2"
  },
  {
    id: "2",
    image: "/CategoryImage.png",
    badge: "ARTICLE",
    heading: "Deep Dive: The Universal Emulsifier – Understanding Lecithin in Food...",
    date: "04 February 2026",
    readMoreUrl: "/article/2"
  },
]


export function NewsAndInsights({
  title,
  subtitle,
}: NewsAndInsightsProps) {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[20px] ">
        <h2
          className="
            text-[length:var(--heading-3-size)]
            leading-[var(--heading-3-line-height)]
            font-[var(--font-weight-bold)]
            md:text-[length:var(--heading-3-size)]
            md:leading-[var(--heading-3-line-height)]
            text-[var(--brand-primary)]
          "
        >
          {title}
        </h2>

        {subtitle && (
          <p
            className="
              tracking-[-0.008em]
              text-[var(--body-medium-size)]
              leading-[var(--body-medium-line-height)]
              md:text-[var(--body-large-size)]
              font-[var(--font-weight-semibold)]
            "
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
              className=" flex flex-col md:flex-row rounded-2xl bg-[var(--brand-white)] shadow-[var(--box-shadow)] hover:shadow-[var(--btn-shadow)] overflow-hidden bg-[var(--brand-white)]"
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
              <div className="flex flex-col gap-[23px] justify-between p-[24px]">
                <div className="inline-flex w-fit">
                  <span
                    className="body-caption py-[4px] px-[12px] text-[var(--brand-primary)] border-[2px] border-[var(--brand-primary)] rounded-2xl uppercase"
                  >
                    {article.badge}
                  </span>
                </div>

                <p className="body-medium text-[var(--brand-primary)]" >
                  {article.heading}
                </p>

                <div className="flex items-center justify-between gap-[16px] pt-[16px]">
                  <span className="body-caption text-[var(--brand-neutral-text)]">
                    {article.date}
                  </span>

                  <Button
                    href={article.readMoreUrl}
                    variant="primary"
                    className=" inline-flex gap-3 items-center justify-center py-[10px]!"
                  >
                    Read More
                    <ArrowIcon className="w-[16px] h-[16px]" />
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
