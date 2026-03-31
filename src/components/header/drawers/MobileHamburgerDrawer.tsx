"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LanguageModal } from "@/components/header/modals/LanguageModal";
import { WebsiteExploreModal } from "@/components/header/modals/WebsiteExploreModal";
import type { HeaderConfig } from "@/types/header";
import { GlobeIcon } from "@/icons";

type MobileHamburgerDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  config: HeaderConfig;
};

export function MobileHamburgerDrawer({
  isOpen,
  onClose,
  config,
}: MobileHamburgerDrawerProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [languageModalOpen, setLanguageModalOpen] = useState(false);
  const [websiteExploreModalOpen, setWebsiteExploreModalOpen] = useState(false);
  const { nav, actions } = config;
  const signInAction = actions.find((a) => a.type === "signIn");

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay – tap to close */}
      <div
        className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        aria-hidden
        onClick={onClose}
      />
      {/* Drawer – bottom sheet, 30px top radius, dark blue */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 max-h-[90vh] overflow-y-auto rounded-t-[30px] bg-[var(--header-drawer-bg)] lg:hidden p-5 pb-10"
        role="dialog"
        aria-label="Menu"
      >
        {/* Drag handle */}
        <div className="flex justify-center pb-5">
          <div className="h-1 w-12 rounded-full bg-[var(--header-drawer-surface-color)]/30" />
        </div>

        <nav aria-label="Mobile">
          {nav.map((item, index) => (
            <div key={item.href}>
              {item.children && item.children.length > 0 ? (
                <>
                  <a
                    type="button"
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? null : index)
                    }
                    className="body-small text-[var(--header-drawer-link-color)] tracking-[var(--header-link-tracking)] flex w-full items-center justify-between py-5"
                    aria-expanded={expandedIndex === index}
                  >
                    <span className="uppercase">{item.label}</span>
                    <span
                      className={`transition-transform ${expandedIndex === index ? "rotate-180" : ""}`}
                    >
                      <Image
                        src="/dropdown-icon.svg"
                        alt=""
                        width={12}
                        height={7}
                        className="shrink-0"
                      />
                    </span>
                  </a>
                  {expandedIndex === index && (
                    <ul className="bg-[var(--header-drawer-children-bg)]">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            style={{ fontWeight: "var(--header-drawer-child-weight)" }}
                            className="body-small text-[var(--header-drawer-link-color)] tracking-[var(--header-link-tracking)] block border-t border-[var(--header-drawer-border-color)]/15 py-5 pl-5 text-[var(--header-drawer-link-color)]"
                            onClick={onClose}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="body-small text-[var(--header-drawer-link-color)] tracking-[var(--header-link-tracking)] flex w-full items-center justify-between py-5 uppercase"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              )}
              <div className="h-px bg-[var(--header-drawer-surface-color)]/15" />
            </div>
          ))}
        </nav>

        {/* Bottom: Select language + Select a website (flex), then Sign In */}
        <div className="pt-7">
          <div className="flex gap-[var(--header-drawer-bottom-gap)]">
            <button
              type="button"
              onClick={() => setLanguageModalOpen(true)}
              className="body-small text-[var(--header-drawer-link-color)] flex flex-1 items-center gap-[var(--header-drawer-btn-gap)] py-2 border-b border-[var(--header-drawer-border-color)]/15 text-left"
            >
              <GlobeIcon className="w-6 h-6 text-[var(--header-drawer-link-color)]" />
              <span>Select language</span>
            </button>
            <button
              type="button"
              onClick={() => setWebsiteExploreModalOpen(true)}
              className="body-small text-[var(--header-drawer-link-color)] flex flex-1 items-center gap-[var(--header-drawer-btn-gap)] py-2 border-b border-[var(--header-drawer-border-color)]/15"
            >
              <GlobeIcon className="w-6 h-6 text-[var(--header-drawer-link-color)]" />
              <span>Select a website</span>
            </button>
          </div>
          {signInAction && (
            <Link
              href={signInAction.href}
              className="btn btn-outlined mt-7 flex w-full items-center justify-center"
              style={{ padding: "12px 24px" }}
              onClick={onClose}
            >
              {signInAction.label}
            </Link>
          )}
        </div>
      </div>

      <LanguageModal
        isOpen={languageModalOpen}
        onClose={() => setLanguageModalOpen(false)}
        languages={config.languages}
      />
      <WebsiteExploreModal
        isOpen={websiteExploreModalOpen}
        onClose={() => setWebsiteExploreModalOpen(false)}
        exploreCategories={config.explore}
        languages={config.languages}
      />
    </>
  );
}
