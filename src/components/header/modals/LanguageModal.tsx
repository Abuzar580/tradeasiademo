"use client";

import Image from "next/image";
import { defaultLanguages } from "@/constants/languages";
import type { LanguageOption } from "@/types/header";

export type { LanguageOption };

type LanguageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  languages?: LanguageOption[];
};

export function LanguageModal({
  isOpen,
  onClose,
  languages = defaultLanguages,
}: LanguageModalProps) {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden">
      <div
        className="fixed inset-0 z-[100] bg-black/50"
        aria-hidden
        onClick={onClose}
      />
      <div
        className="rounded-2xl px-5 py-7 shadow-[var(--btn-shadow-soft)] fixed left-1/2 top-1/2 z-[101] w-full max-w-[min(90vw,400px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-[var(--brand-neutral-surface)]"
        role="dialog"
        aria-labelledby="language-modal-title"
        aria-modal
      >
        {/* Header: title + close */}
        <div className="flex items-start justify-between pb-7">
          <div
            id="language-modal-title"
            className="body-regular text-[var(--brand-black)]"
          >
            Choose your language
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
          >
            <Image src="/close.svg" alt="" width={13} height={13} />
          </button>
        </div>
        {/* Two-column list */}
        <div className="max-h-[60vh] overflow-y-auto">
          <ul className="language-modal-grid grid grid-cols-2 gap-[10px]">
            {languages.map((item) => (
              <li key={item.code}>
                <button
                  type="button"
                  className="flex w-full items-center gap-3 pl-3"
                >
                  <span className="relative h-6 w-8 shrink-0 overflow-hidden">
                    <Image
                      src={item.flagSrc ?? "/flag.svg"}
                      alt=""
                      width={32}
                      height={24}
                      className="h-full w-full object-cover"
                    />
                  </span>
                  <span className="body-caption text-[var(--brand-black)]">{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
