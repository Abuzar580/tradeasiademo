"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LanguageModal } from "@/components/shared/LanguageModal";
import { WebsiteExploreModal } from "@/components/shared/WebsiteExploreModal";
import type { HeaderConfig } from "@/types/header";

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
        className="fixed bottom-0 left-0 right-0 z-50 max-h-[90vh] overflow-y-auto rounded-t-[30px] bg-[var(--brand-primary-hover)] lg:hidden p-5 pb-10"
        role="dialog"
        aria-label="Menu"
      >
        {/* Drag handle */}
        <div className="flex justify-center pb-5">
          <div className="h-1 w-12 rounded-full bg-[var(--brand-neutral-surface-3)]/30" />
        </div>

        <nav aria-label="Mobile">
          {nav.map((item, index) => (
            <div key={item.href}>
              {item.children && item.children.length > 0 ? (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? null : index)
                    }
                    className="body-small text-[var(--brand-white)] tracking-[var(--common-letter-spacing)] flex w-full items-center justify-between py-5"
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
                  </button>
                  {expandedIndex === index && (
                    <ul className="bg-[var(--brand-primary)]">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            style={{ fontWeight: "var(--font-weight-medium)" }}
                            className="body-small text-[var(--brand-white)] tracking-[var(--common-letter-spacing)] block border-t border-[var(--brand-neutral-surface)]/15 py-5 pl-5 text-[var(--brand-white)]"
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
                  className="body-small text-[var(--brand-white)] tracking-[var(--common-letter-spacing)] flex w-full items-center justify-between py-5 uppercase"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              )}
              <div className="h-px bg-[var(--brand-neutral-surface-3)]/15" />
            </div>
          ))}
        </nav>

        {/* Bottom: Select language + Select a website (flex), then Sign In */}
        <div className="pt-7">
          <div className="flex gap-5">
            <button
              type="button"
              onClick={() => setLanguageModalOpen(true)}
              className="body-small text-[var(--brand-white)] flex flex-1 items-center gap-3 py-2 border-b border-[var(--brand-neutral-surface)]/15 text-left"
            >
              <Image
                src="/globe.svg"
                alt=""
                width={20}
                height={20}
                className="brightness-0 invert shrink-0"
              />
              <span>Select language</span>
            </button>
            <button
              type="button"
              onClick={() => setWebsiteExploreModalOpen(true)}
              className="body-small text-[var(--brand-white)] flex flex-1 items-center gap-3 py-2 border-b border-[var(--brand-neutral-surface)]/15"
            >
              <Image
                src="/globe.svg"
                alt=""
                width={20}
                height={20}
                className="brightness-0 invert shrink-0"
              />
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
      />
      <WebsiteExploreModal
        isOpen={websiteExploreModalOpen}
        onClose={() => setWebsiteExploreModalOpen(false)}
      />
    </>
  );
}
