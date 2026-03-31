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
      <article className="group relative overflow-hidden rounded-[var(--industry-trends-card-radius)] h-full hover:shadow-[var(--industry-trends-card-shadow-hover)]">

        {/* Overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-300 opacity-100 group-hover:opacity-0 hidden md:block bg-[linear-gradient(to_right,var(--industry-trends-card-overlay-start),var(--industry-trends-card-overlay-mid),transparent)]"
        />

        <div className="relative flex flex-col h-full">

          {/* Image */}
          <div className="relative h-[var(--industry-trends-card-image-height)] w-full overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
            />
          </div>

          {/* Content */}
          <div className="relative flex flex-col flex-grow py-[var(--industry-trends-card-content-padding-y)] px-[var(--industry-trends-card-content-padding-x)] bg-[var(--industry-trends-card-content-bg)]">

            <div className="relative z-20 flex flex-col h-full">

              {/* Badge */}
              <span
                className="inline-flex w-fit items-center justify-center
                h-[38px] px-4 rounded-full uppercase
                text-[var(--industry-trends-card-badge-color)]
                font-[var(--industry-trends-card-badge-weight)]
                text-[length:var(--industry-trends-card-badge-size)]
                tracking-[var(--industry-trends-card-badge-tracking)]
                bg-[var(--industry-trends-card-badge-bg)]
                border border-[var(--industry-trends-card-badge-border)]"
              >
                {badge}
              </span>

              {/* Title */}
              <h3
                className="mt-3
                text-[length:var(--industry-trends-card-title-size-mobile)]
                md:text-[length:var(--industry-trends-card-title-size-desktop)]
                leading-[var(--industry-trends-card-title-line-mobile)]
                md:leading-[var(--industry-trends-card-title-line-desktop)]
                text-[var(--industry-trends-card-title-color)]
                font-[var(--industry-trends-card-title-weight-mobile)]
                md:font-[var(--industry-trends-card-title-weight-desktop)]"
              >
                {title}
              </h3>

              {/* Description */}
              <p className="mt-5 md:mt-3 body-small text-[var(--industry-trends-card-text-color)] line-clamp-3">
                {description}
              </p>

              {/* Footer */}
              <div className="mt-auto pt-[var(--industry-trends-card-footer-pt-mobile)] md:pt-[var(--industry-trends-card-footer-pt-desktop)] flex items-center justify-between body-small text-[var(--industry-trends-card-text-color)]">
                <time>{date}</time>

                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--industry-trends-card-arrow-bg)]">
                  <ArrowIcon className="w-2 h-3 text-[var(--industry-trends-card-arrow-color)]" />
                </span>
              </div>

            </div>
          </div>

        </div>
      </article>
    </Link>
  );
}
