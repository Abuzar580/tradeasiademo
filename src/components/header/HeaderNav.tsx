"use client";

import Image from "next/image";
import Link from "next/link";
import type { HeaderNavItem } from "@/types/header";

type HeaderNavProps = {
  nav: HeaderNavItem[];
  openIndex: number | null;
  onOpenIndexChange: (index: number | null) => void;
};

export function HeaderNav({ nav, openIndex, onOpenIndexChange }: HeaderNavProps) {
  return (
    <nav
      className="hidden lg:flex lg:items-center lg:gap-[var(--header-nav-gap)] lg:ml-[30px]"
      aria-label="Main"
    >
      {nav.map((item, index) => (
        <div
          key={item.href}
          className="relative"
          onMouseEnter={() => item.children && onOpenIndexChange(index)}
          onMouseLeave={() => onOpenIndexChange(null)}
        >
          {item.children ? (
            <>
              <a
                type="button"
                className="text-[length:var(--header-link-size)] flex items-center gap-[var(--header-link-icon-gap)] hover:opacity-90 text-[var(--header-link-color)] uppercase lg:py-3 font-[var(--header-link-weight)] leading-[var(--header-link-line)] tracking-[var(--header-link-tracking)]"
                aria-expanded={openIndex === index}
                aria-haspopup="true"
                onClick={() => onOpenIndexChange(openIndex === index ? null : index)}
              >
                {item.label}
                <Image
                  src="/dropdown-icon.svg"
                  alt=""
                  width={12}
                  height={12}
                  className={`shrink-0 ${openIndex === index ? "rotate-180" : ""}`}
                />
              </a>
              {openIndex === index && (
                <ul
                  className="rounded-lg absolute left-0 top-7 z-20 mt-1 min-w-[180px] py-2 bg-[var(--header-dropdown-bg)] shadow-[var(--header-dropdown-shadow)] transition-default"
                  role="menu"
                >
                  {item.children.map((child) => (
                    <li key={child.href} role="none">
                      <Link
                        href={child.href}
                        className="block px-4 py-2 hover:bg-[var(--header-dropdown-item-hover)] font-[var(--header-dropdown-item-weight)] text-[var(--header-dropdown-item-color)] transition-default"
                        role="menuitem"
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
              className="text-[length:var(--header-link-size)] hover:opacity-90 text-[var(--header-link-color)] uppercase font-[var(--header-link-weight)] leading-[var(--header-link-line)] tracking-[var(--header-link-tracking)]"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
