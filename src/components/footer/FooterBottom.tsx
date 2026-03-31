import { FooterSocial } from "./FooterSocial";

type FooterBottomProps = {
  copyright: string;
  socialLinks: { label: string; href: string; icon: string }[];
};

export function FooterBottom({ copyright, socialLinks }: FooterBottomProps) {
  return (
    <div className="mt-11 flex flex-col md:items-center gap-[var(--footer-bottom-gap-mobile)] border-t border-[var(--footer-border-color)] pt-8 md:flex-row md:justify-between md:gap-[var(--footer-bottom-gap-desktop)] md:mt-18 md:pt-12 md:pb-15 md:px-3">
      <p className="body-small text-[var(--footer-text-color)]">
        <span className="font-[var(--footer-copyright-weight)]">{copyright}</span>
      </p>
      <FooterSocial socialLinks={socialLinks} className="hidden gap-[var(--footer-bottom-social-gap)] md:flex" />
    </div>
  );
}
