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

  const { logo, nav, actions } = config;

  // Function to close all menus
  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setDesktopDrawerOpen(false);
    setSearchOpen(false);
  };

  useEffect(() => {
    const menuOpen = mobileMenuOpen || desktopDrawerOpen || searchOpen;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen, desktopDrawerOpen, searchOpen]);

  // Close all drawers when window is resized
  useEffect(() => {
    const handleResize = () => {
      closeAllMenus();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="left-0 right-0 z-50 px-5 fixed top-5 md:top-[30px]">
      <div className="mx-auto flex max-w-[1350px] items-center rounded-[40px] bg-[var(--brand-primary)] px-5 py-3 shadow-xl backdrop-blur-md md:rounded-[60px] md:px-[50px] md:py-5">
        <HeaderLogo src={logo.src} alt={logo.alt} href={logo.href} />

        <HeaderNav
          nav={nav}
          openIndex={openIndex}
          onOpenIndexChange={setOpenIndex}
        />

        {/* Right: search, Sign In, hamburger – pushed to end */}
        <div className="ml-auto flex items-center gap-5">
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

      {/* Mobile hamburger drawer – bottom sheet, 30px top radius, only below lg */}
      <div className="lg:hidden">
        <MobileHamburgerDrawer
          isOpen={mobileMenuOpen}
          onClose={closeAllMenus}
          config={config}
        />
      </div>

      {/* Desktop hamburger drawer – right-side panel, only from lg up */}
      <div className="hidden lg:block">
        <DesktopHamburgerDrawer
          isOpen={desktopDrawerOpen}
          onClose={closeAllMenus}
          config={config}
        />
      </div>

      <SearchOverlay isOpen={searchOpen} onClose={closeAllMenus} />
    </header>
  );
}
