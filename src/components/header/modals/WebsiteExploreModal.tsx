"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { ExploreCategory, LanguageOption } from "@/types/header";

const EXPLORE_DESCRIPTION =
  "Explore our network of country and industry based websites to access localized information, offerings, and business services across our group.";

type WebsiteExploreModalProps = {
  isOpen: boolean;
  onClose: () => void;
  exploreCategories?: ExploreCategory[];
  /** @deprecated */
  languages?: LanguageOption[];
  globalWebsiteUrl?: string;
};

export function WebsiteExploreModal({
  isOpen,
  onClose,
  exploreCategories = [],
  globalWebsiteUrl = "https://chemtradeasia.com",
}: WebsiteExploreModalProps) {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Country");

  if (!isOpen) return null;

  const activeItem = exploreCategories.find((c) => c.label === activeCategory);
  const listItems = (activeItem?.children ?? []).map((c) => ({
    label: c.label,
    href: c.href ?? "#",
    flagSrc: c.flagSrc,
  }));

  return (
    <div className="lg:hidden">
      <div
        className="fixed inset-0 z-[100] bg-black/50"
        aria-hidden
        onClick={onClose}
      />
      <div
        className="rounded-2xl px-5 py-7 shadow-[var(--header-modal-shadow)] fixed left-1/2 top-1/2 z-[101] w-full max-w-[min(90vw,400px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-[var(--header-modal-bg)]"
        role="dialog"
        aria-labelledby="website-explore-modal-title"
        aria-modal
      >
        {/* Header: title + close */}
        <div className="flex items-start justify-between pb-2">
          <div
            id="website-explore-modal-title"
            className="body-regular text-[var(--header-modal-title-color)]"
          >
            Select a Website to Explore
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-6 w-6 shrink-0 items-center justify-end"
          >
            <Image src="/close.svg" alt="" width={13} height={13} />
          </button>
        </div>
        <p className="body-caption text-[var(--header-modal-title-color)] pb-4">
          {EXPLORE_DESCRIPTION}
        </p>

        {/* Category section: dropdown with absolute-position pills */}
        <div className="relative">
          <button
            type="button"
            className="body-small text-[var(--header-modal-primary)] flex w-full items-center justify-between pb-2 border-b border-[var(--header-modal-primary)]"
            onClick={() => setCategoryOpen(!categoryOpen)}
            aria-expanded={categoryOpen}
          >
            <span>{activeCategory.toUpperCase()}</span>
            <span className={`transition-transform ${categoryOpen ? "rotate-180" : ""}`}>
              <Image src="/dropdown-icon.svg" alt="" width={12} height={7} className="invert" />
            </span>
          </button>
          {categoryOpen && (
              <div className="bg-[var(--header-modal-primary)] z-[1] flex flex-col items-stretch absolute top-full left-0 right-0">
              {exploreCategories.map((cat) => (
                <button
                  key={cat.label}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat.label);
                    setCategoryOpen(false);
                  }}
                  className="body-small p-4 text-[var(--header-modal-option-color)] text-left"
                  style={{
                    transition: "var(--transition)",
                    ...(activeCategory === cat.label && { background: "var(--header-modal-option-active-bg)" }),
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Two-column list */}
        <div className="max-h-[40vh] overflow-y-auto py-3">
          <ul className="grid grid-cols-2 gap-[var(--header-modal-explore-grid-gap)]">
            {listItems.map((item, i) => (
              <li key={item.label + i}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="flex w-full items-center gap-[var(--header-modal-explore-item-gap)]"
                    onClick={onClose}
                  >
                    {item.flagSrc && (
                      <span className="relative h-6 w-8 shrink-0 overflow-hidden rounded border border-[var(--header-modal-flag-border)] bg-[var(--header-modal-flag-bg)]">
                        <Image src={item.flagSrc} alt="" width={32} height={24} className="h-full w-full object-cover" />
                      </span>
                    )}
                    <span className="body-caption text-[var(--header-modal-title-color)]">{item.label}</span>
                  </Link>
                ) : (
                  <span className="body-caption text-[var(--header-modal-title-color)]">{item.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="h-px bg-[var(--header-modal-primary)]" />
        <div className="pt-4">
          <Link
            href={globalWebsiteUrl}
            style={{ padding: "12px 24px" }}
            className="btn btn-outlined flex w-full items-center justify-center"
            onClick={onClose}
          >
            VISIT OUR GLOBAL WEBSITE
          </Link>
        </div>
      </div>
    </div>
  );
}
