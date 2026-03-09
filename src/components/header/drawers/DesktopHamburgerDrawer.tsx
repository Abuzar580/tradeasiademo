"use client";

import Image from "next/image";
import { useState } from "react";
import type { HeaderConfig } from "@/types/header";
import { GlobeIcon } from "@/icons";

type DesktopHamburgerDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  config: HeaderConfig;
  siteDomain?: string;
};

export function DesktopHamburgerDrawer({
  isOpen,
  onClose,
  config,
  siteDomain = "chemtradeasia.com",
}: DesktopHamburgerDrawerProps) {
  const { explore, languages } = config;
  const [languageOpen, setLanguageOpen] = useState(true);
  const [exploreOpen, setExploreOpen] = useState(true);
  const [secondLevelLabel, setSecondLevelLabel] = useState<string | null>(null);

  const activeExploreItem = explore.find((i) => i.label === secondLevelLabel);
  const secondLevelItems = activeExploreItem?.children ?? [];

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay – darkens left portion, click to close */}
      <div
        className="fixed inset-0 z-40 bg-black/70 lg:block"
        aria-hidden
        onClick={onClose}
      />
      {/* Panel – slides in from right */}
      <aside
        className="fixed right-0 top-0 z-50 flex h-full w-full max-w-[288px] flex-col bg-[var(--brand-neutral-surface)] shadow-xl"
        role="dialog"
        aria-label="Menu"
      >
        {/* Close button – top right */}
        <div className="flex justify-end p-3 bg-[var(--brand-neutral-surface-3)]">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-5 w-5 items-center justify-center"
          >
            <Image src="/close.svg" alt="" width={13} height={13} />
          </button>
        </div>

        {/* Section 1: Select language – inline list on desktop */}
        <section>
          <button
            type="button"
            className="flex w-full items-center justify-between px-3 py-3 bg-[var(--brand-neutral-surface-3)]"
            onClick={() => setLanguageOpen(!languageOpen)}
            aria-expanded={languageOpen}
          >
            <span className="flex items-center gap-2">
              <GlobeIcon className="w-6 h-6 text-[var(--brand-black)]" />
              <span className="body-small text-[var(--brand-black)]">
                Select language
              </span>
            </span>
            <span
              className={`transition-transform p-[4px] ${languageOpen ? "rotate-180" : ""}`}
            >
              <Image
                src="/dropdown-icon.svg"
                alt=""
                width={12}
                height={7}
                className="invert"
              />
            </span>
          </button>
          {languageOpen && (
            <ul className="max-h-[200px] overflow-y-auto px-5 pb-4">
              {languages.map((item) => (
                <li key={item.code}>
                  <button
                    type="button"
                    className="body-caption text-[var(--brand-black)] flex w-full items-center gap-[10px] py-2 hover:text-[var(--brand-neutral-text)]"
                  >
                    <Image
                      src={item.flagSrc ?? "/flag.svg"}
                      alt=""
                      width={28}
                      height={20}
                      className="h-6 w-8 shrink-0 rounded object-cover"
                    />
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Section 2: Select a Website to Explore */}
        <section>
          <button
            type="button"
            className="flex w-full items-center justify-between px-3 py-3 bg-[var(--brand-neutral-surface-3)]"
            onClick={() => setExploreOpen(!exploreOpen)}
            aria-expanded={exploreOpen}
          >
            <span className="flex items-center gap-2">
              <GlobeIcon className="w-6 h-6 text-[var(--brand-black)]" />
              <span className="body-small text-[var(--brand-black)]">
                Select a Website to Explore
              </span>
            </span>
            <span
              className={`transition-transform p-[4px] ${exploreOpen ? "rotate-180" : ""}`}
            >
              <Image
                src="/dropdown-icon.svg"
                alt=""
                width={12}
                height={7}
                className="invert"
              />
            </span>
          </button>
          {exploreOpen && (
            <>
              <ul className="px-5 py-6">
                {explore.map((item) => (
                  <li key={item.label}>
                    <button
                      type="button"
                      onClick={() => setSecondLevelLabel(item.label)}
                      style={{ fontSize: "var(--body-regular-size)" }}
                      className="body-caption text-[var(--brand-black)] flex w-full items-center justify-between py-4 hover:text-[var(--brand-neutral-text)]"
                    >
                      {item.label}
                      <Image
                        src="/dropdown-icon.svg"
                        alt=""
                        width={12}
                        height={7}
                        className="invert rotate-[-90deg]"
                      />
                    </button>
                  </li>
                ))}
              </ul>
              <div className="h-px bg-[var(--brand-neutral-text)] mx-3" />
            </>
          )}
        </section>

        {/* Footer – domain */}
        <div className="mt-auto p-3 bg-[var(--brand-neutral-surface-3)]">
          <p className="body-caption text-[var(--brand-neutral-text)]">
            <span className="font-normal">{siteDomain}</span>
          </p>
        </div>
      </aside>

      {/* Second-level drawer */}
      {secondLevelLabel && (
        <aside
          className="fixed right-0 top-0 z-[60] flex h-full w-full max-w-[288px] flex-col bg-[var(--brand-neutral-surface)] shadow-xl"
          role="dialog"
          aria-label={secondLevelLabel}
        >
          <div className="flex items-center gap-2 p-3 bg-[var(--brand-neutral-surface-3)]">
            <button
              type="button"
              onClick={() => setSecondLevelLabel(null)}
              aria-label="Back"
              className="flex h-8 w-8 shrink-0 items-center justify-center"
            >
              <Image
                src="/dropdown-icon.svg"
                alt=""
                width={12}
                height={7}
                className="invert rotate-90"
              />
            </button>
            <span className="body-small text-[var(--brand-black)]">{secondLevelLabel}</span>
          </div>
          <ul className="flex-1 overflow-y-auto px-5 py-4">
            {secondLevelItems.map((item) => (
              <li key={item.label} className="py-3">
                <a
                  href={item.href ?? "#"}
                  className="body-caption text-[var(--brand-black)] flex items-center gap-3 hover:text-[var(--brand-neutral-text)]"
                >
                  {item.flagSrc && (
                    <Image
                      src={item.flagSrc}
                      alt=""
                      width={28}
                      height={20}
                      className="h-6 w-8 shrink-0 rounded object-cover"
                    />
                  )}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto p-3 bg-[var(--brand-neutral-surface-3)]">
            <p className="body-caption text-[var(--brand-neutral-text)]">
              <span className="font-normal">{siteDomain}</span>
            </p>
          </div>
        </aside>
      )}
    </>
  );
}
