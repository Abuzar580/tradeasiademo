import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/icons";

export interface InsightCardProps {
  id: string;
  image: string;
  badge: string;
  title: string;
  description: string;
  date: string;
  href: string;
}

export function InsightCard({
  image,
  badge,
  title,
  description,
  date,
  href,
}: InsightCardProps) {
  return (
    <Link href={href} className="block h-full">
      <article className="group relative overflow-hidden rounded-[18px] h-full hover:shadow-[0_4px_20px_rgba(0,0,0,0.35)]">

        {/* Overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-300 opacity-100 group-hover:opacity-0 hidden md:block bg-gradient-to-r from-black/80 via-black/40 to-transparent"
        />

        <div className="relative flex flex-col h-full">

          {/* Image */}
          <div className="relative h-[240px] w-full overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
            />
          </div>

          {/* Content */}
          <div className="relative flex flex-col flex-grow py-10 px-6 bg-[var(--brand-primary)]">

            <div className="relative z-20 flex flex-col h-full">

              {/* Badge */}
              <span
                className="inline-flex w-fit items-center justify-center
                h-[38px] px-4 rounded-full uppercase
                text-[var(--brand-white)]
                font-[var(--font-weight-medium)]
                text-[length:var(--body-caption-size)]
                tracking-[var(--common-letter-spacing)]
                bg-[rgba(var(--brand-white-rgb),0.15)]
                border border-[rgba(var(--brand-white-rgb),0.20)]"
              >
                {badge}
              </span>

              {/* Title */}
              <h3
                className="mt-3
                text-[length:var(--body-regular-size)]
                md:text-[length:var(--heading-5-size)]
                leading-[var(--heading-5-line-height)]
                text-[var(--brand-white)]
                font-[var(--font-weight-bold)]"
              >
                {title}
              </h3>

              {/* Description */}
              <p className="mt-5 md:mt-3 body-small text-white/80 line-clamp-3">
                {description}
              </p>

              {/* Footer */}
              <div className="mt-auto pt-6 md:pt-7 flex items-center justify-between body-small text-white/80">
                <time>{date}</time>

                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--brand-primary-hover)]">
                  <ArrowIcon className="w-2 h-3 text-[var(--brand-white)]" />
                </span>
              </div>

            </div>
          </div>

        </div>
      </article>
    </Link>
  );
}
