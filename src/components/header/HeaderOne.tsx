"use client";

import { useEffect, useState } from "react";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderNav } from "./HeaderNav";
import { HeaderActions } from "./HeaderActions";
import { HeaderSearchButton } from "./HeaderSearchButton";
import { HeaderHamburger } from "./HeaderHamburger";
import { DesktopHamburgerDrawer } from "./drawers/DesktopHamburgerDrawer";
import { MobileHamburgerDrawer } from "./drawers/MobileHamburgerDrawer";
import { SearchOverlay } from "./modals/SearchOverlay";
import type { HeaderConfig } from "@/types/header";

type HeaderOneProps = {
  config: HeaderConfig;
};

export function HeaderOne({ config }: HeaderOneProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDrawerOpen, setDesktopDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { logo, nav, actions } = config;

  // Close all menus
  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setDesktopDrawerOpen(false);
    setSearchOpen(false);
  };

  // Lock body scroll when menu is open
  useEffect(() => {
    const menuOpen = mobileMenuOpen || desktopDrawerOpen || searchOpen;
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [mobileMenuOpen, desktopDrawerOpen, searchOpen]);

  // Close drawers on resize
  useEffect(() => {
    const handleResize = () => closeAllMenus();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`left-0 right-0 z-50 fixed transition-all duration-300
        ${isScrolled ? "top-0 px-0" : "top-5 md:top-[30px] px-5"}
      `}
    >
      <div
        className={`flex items-center shadow-xl backdrop-blur-md transition-all duration-300
          ${isScrolled
            ? "rounded-none bg-[var(--header-bar-bg)]/95 border-b border-white/10 px-5 py-3 md:px-[50px] md:py-5"
            : "rounded-[var(--header-bar-radius-mobile)] md:rounded-[var(--header-bar-radius-desktop)] bg-[var(--header-bar-bg)] px-5 py-3 md:px-[50px] md:py-5"}
        `}
      >
        <HeaderLogo src={logo.src} alt={logo.alt} href={logo.href} />

        <HeaderNav
          nav={nav}
          openIndex={openIndex}
          onOpenIndexChange={setOpenIndex}
        />

        {/* Right side */}
        <div className="ml-auto flex items-center gap-[var(--header-actions-gap)]">
          <HeaderSearchButton onSearchOpen={() => setSearchOpen(true)} />
          <HeaderActions actions={actions} />
          <HeaderHamburger
            onMenuToggle={() => {
              setMobileMenuOpen((prev) => !prev);
              setDesktopDrawerOpen((prev) => !prev);
            }}
          />
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className="lg:hidden">
        <MobileHamburgerDrawer
          isOpen={mobileMenuOpen}
          onClose={closeAllMenus}
          config={config}
        />
      </div>

      {/* Desktop Drawer */}
      <div className="hidden lg:block">
        <DesktopHamburgerDrawer
          isOpen={desktopDrawerOpen}
          onClose={closeAllMenus}
          config={config}
        />
      </div>

      {/* Search */}
      <SearchOverlay isOpen={searchOpen} onClose={closeAllMenus} />
    </header>
  );
}
