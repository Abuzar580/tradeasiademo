"use client";

import Image from "next/image";

type HeaderSearchButtonProps = {
  onSearchOpen: () => void;
};

export function HeaderSearchButton({ onSearchOpen }: HeaderSearchButtonProps) {
  return (
    <button
      type="button"
      aria-label="Search"
      className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-full bg-[var(--brand-primary-deep)] md:h-[50px] md:w-[50px]"
      onClick={onSearchOpen}
    >
      <Image src="/search.svg" alt="" width={20} height={20} />
    </button>
  );
}
