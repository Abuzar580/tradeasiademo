"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui";
import { DesktopHamburgerDrawer } from "@/components/shared/DesktopHamburgerDrawer";
import { MobileHamburgerDrawer } from "@/components/shared/MobileHamburgerDrawer";
import type { HeaderConfig } from "@/types/header";

type HeaderOneProps = {
  config: HeaderConfig;
};

export function HeaderOne({ config }: HeaderOneProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDrawerOpen, setDesktopDrawerOpen] = useState(false);

  const { logo, nav, actions } = config;
  const signInAction = actions.find((action) => action.type === "signIn");
  const otherActions = actions.filter((action) => action.type !== "signIn");

  useEffect(() => {
    const menuOpen = mobileMenuOpen || desktopDrawerOpen;
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, desktopDrawerOpen]);

  return (
    <header className="absolute left-0 right-0 top-5 z-50 px-5 md:top-[30px]">
      <div className="mx-auto flex max-w-[1350px] items-center rounded-[40px] bg-[var(--brand-primary)] px-5 py-3 md:rounded-[60px] md:px-[50px] md:py-5">
        <Link
          href={logo.href}
          className="relative h-[46px] w-[125px] shrink-0 md:h-[61px] md:w-[164px]"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            fill
            className="object-contain object-left"
            sizes="(max-width: 768px) 125px, 164px"
            priority
          />
        </Link>

        {/* Desktop nav – 30px after logo, 25px gap between items */}
        <nav
          className="hidden lg:flex lg:items-center lg:gap-[25px] lg:ml-[30px]"
          aria-label="Main"
        >
          {nav.map((item, index) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.children && setOpenIndex(index)}
              onMouseLeave={() => setOpenIndex(null)}
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
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
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

        {/* Right: search, Sign In, hamburger – pushed to end */}
        <div className="ml-auto flex items-center gap-5">
          <button
            type="button"
            aria-label="Search"
            className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-full bg-[var(--brand-primary-deep)] md:h-[50px] md:w-[50px]"
          >
            <Image src="/search.svg" alt="" width={20} height={20} />
          </button>
          {otherActions.map((action) => (
            <Button
              key={action.href}
              variant={action.type}
              href={action.href}
              className="hidden md:inline-flex"
            >
              {action.label}
            </Button>
          ))}
          {signInAction && (
            <Button
              variant="signIn"
              href={signInAction.href}
              className="hidden sm:inline-flex"
            >
              {signInAction.label}
            </Button>
          )}
          <button
            type="button"
            aria-label="Menu"
            className="flex h-10 w-10 shrink-0 items-center justify-center"
            onClick={() => {
              setMobileMenuOpen((prev) => !prev);
              setDesktopDrawerOpen((prev) => !prev);
            }}
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
        </div>
      </div>

      {/* Mobile hamburger drawer – bottom sheet, 30px top radius, only below lg */}
      <div className="lg:hidden">
        <MobileHamburgerDrawer
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          config={config}
        />
      </div>

      {/* Desktop hamburger drawer – right-side panel, only from lg up */}
      <div className="hidden lg:block">
        <DesktopHamburgerDrawer
          isOpen={desktopDrawerOpen}
          onClose={() => setDesktopDrawerOpen(false)}
        />
      </div>
    </header>
  );
}
