import { FooterSocial } from "./FooterSocial";

type FooterBottomProps = {
  copyright: string;
  socialLinks: { label: string; href: string; icon: string }[];
};

export function FooterBottom({ copyright, socialLinks }: FooterBottomProps) {
  return (
    <div className="mt-11 flex flex-col md:items-center gap-6 border-t border-[var(--brand-white)]/15 pt-8 md:flex-row md:justify-between md:gap-3 md:mt-18 md:pt-12 md:pb-15 md:px-3">
      <p className="body-small text-[var(--brand-white)]">
        <span className="font-normal">{copyright}</span>
      </p>
      <FooterSocial socialLinks={socialLinks} className="hidden gap-4 md:flex" />
    </div>
  );
}
