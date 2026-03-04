"use client";

import Image from "next/image";

type HeaderHamburgerProps = {
  onMenuToggle: () => void;
};

export function HeaderHamburger({ onMenuToggle }: HeaderHamburgerProps) {
  return (
    <button
      type="button"
      aria-label="Menu"
      className="flex h-10 w-10 shrink-0 items-center justify-center"
      onClick={onMenuToggle}
    >
      {/* Mobile icon size */}
      <Image
        src="/hamburgerMenu.svg"
        alt=""
        width={24}
        height={24}
        className="lg:hidden"
      />
      {/* Desktop icon size 30x20 */}
      <Image
        src="/hamburgerMenu.svg"
        alt=""
        width={30}
        height={20}
        className="hidden lg:inline-block"
      />
    </button>
  );
}
