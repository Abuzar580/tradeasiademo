import Image from "next/image";
import { footerOneConfig } from "@/config/footer-one.config";
import { FooterCompanyInfo } from "./FooterCompanyInfo";
import { FooterLinks } from "./FooterLinks";
import { FooterApps } from "./FooterApps";
import { FooterBottom } from "./FooterBottom";

export function FooterOne() {
  const { informationLinks, socialLinks, company, copyright } = footerOneConfig;

  return (
    <footer className="bg-[var(--brand-primary)] text-[var(--brand-white)]">
      <div className="mx-auto w-full max-w-[var(--layout-container-max)] p-8 md:p-0">
        <div className="hidden md:flex md:px-14 md:pt-15">
          <Image
            src="/logo.svg"
            alt=""
            width={170}
            height={70}
            className="brightness-0 invert"
          />
        </div>
        <div className="flex flex-col gap-11 md:flex-row md:gap-12 md:mt-7 lg:gap-16 md:px-14">
          <FooterCompanyInfo company={company} socialLinks={socialLinks} />
          <FooterLinks links={informationLinks} />
          <FooterApps />
        </div>
        <FooterBottom copyright={copyright} socialLinks={socialLinks} />
      </div>
    </footer>
  );
}
