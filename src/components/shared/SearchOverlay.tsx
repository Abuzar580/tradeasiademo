"use client";

import Image from "next/image";
import { useState } from "react";

type SearchOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  return (
    <>
      {/* Full-screen overlay – blocks interaction, click to close */}
      <div
        className="fixed inset-0 z-[60] bg-black/40"
        aria-hidden
        onClick={onClose}
      />
      {/* Search card – positioned under header, above overlay */}
      <div className="absolute left-0 right-0 top-full z-[61] flex justify-center px-5 sm:px-6">
      <div className="bg-[color:var(--brand-neutral-surface-2)] w-full lg:max-w-[60%] rounded-[8px] border-[rgb(var(--brand-white-rgb)/0.15)] lg:rounded-[30px] pt-3 px-5 pb-5 lg:px-7 lg:py-6">
        {/* Header row */}
        <div className="flex items-start justify-between">
          <p className="text-[length:var(--body-small-size)] text-[var(--brand-black)] lg:text-[length:var(--body-small-size)]">
            Search...
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="flex h-6 w-6 items-center justify-center"
          >
            <Image src="/close.svg" alt="" width={13} height={13} />
          </button>
        </div>

        {/* Search form */}
        <form
          className="flex flex-col gap-4 lg:flex-row lg:items-center pt-1 lg:pt-3"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <label htmlFor="header-search-input" className="sr-only">
            Search
          </label>

          {/* Input + inline icon on mobile; separate button on desktop */}
          <div className="relative w-full">
            <input
              id="header-search-input"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search for a chemical products by name, HS code, or market insights & articles..."
              className="w-full rounded-[25px] bg-[var(--brand-primary-hover)] px-5 pr-11 py-[9px] text-[length:var(--body-small-size)] text-[var(--brand-white)] lg:rounded-[30px] lg:bg-[var(--brand-primary)] lg:px-10 lg:py-[14px]"
            />
            {/* Mobile search icon inside input */}
            <button
              type="submit"
              className="absolute right-3 top-1/2 inline-flex h-[30px] w-[30px] -translate-y-1/2 items-center justify-center rounded-full bg-[var(--brand-primary-deep)] lg:hidden"
              aria-label="Run search"
            >
              <Image src="/search.svg" alt="" width={14} height={14} />
            </button>
          </div>

          {/* Desktop button */}
          <button
            type="submit"
            className="hidden shrink-0 rounded-[40px] bg-[var(--brand-primary)] px-[50px] py-[15px] text-sm font-semibold tracking-[0.5px] text-[var(--brand-white)] shadow-md lg:inline-flex hover:bg-[var(--brand-primary-hover)] transition"
          >
            Search
          </button>
        </form>
      </div>
    </div>
    </>
  );
}
