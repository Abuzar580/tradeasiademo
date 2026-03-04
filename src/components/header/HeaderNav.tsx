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
      className="hidden lg:flex lg:items-center lg:gap-[25px] lg:ml-[30px]"
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
              <button
                type="button"
                className="body-caption flex items-center gap-1 hover:opacity-90 text-[var(--brand-white)] uppercase"
                style={{
                  fontWeight: "var(--font-weight-bold)",
                  lineHeight: "13.2px",
                  letterSpacing: "var(--common-letter-spacing)",
                }}
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
              </button>
              {openIndex === index && (
                <ul
                  className="rounded-lg absolute left-0 top-2 z-20 mt-1 min-w-[180px] py-2"
                  style={{
                    background: "var(--brand-neutral-surface)",
                    boxShadow: "var(--btn-shadow-soft)",
                    transition: "var(--transition)",
                  }}
                  role="menu"
                >
                  {item.children.map((child) => (
                    <li key={child.href} role="none">
                      <Link
                        href={child.href}
                        className="body-small block px-4 py-2 hover:bg-[var(--brand-neutral-surface-2)]"
                        style={{
                          fontWeight: "var(--font-weight-normal)",
                          color: "var(--brand-neutral-text)",
                          transition: "var(--transition)",
                        }}
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
              className="body-caption hover:opacity-90 text-[var(--brand-white)] uppercase"
              style={{
                fontWeight: "var(--font-weight-bold)",
                lineHeight: "13.2px",
                letterSpacing: "var(--common-letter-spacing)",
              }}
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
