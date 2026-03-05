import Image from "next/image";
import { PhoneIcon, EmailIcon, SocialIcon } from "./icons";

type FooterCompanyInfoProps = {
  company: {
    name: string;
    address: { line1: string; line2: string; line3: string };
    phone: string;
    email: string;
  };
  socialLinks: { label: string; href: string; icon: string }[];
};

export function FooterCompanyInfo({ company, socialLinks }: FooterCompanyInfoProps) {
  return (
    <div className="flex flex-col gap-15 md:flex-1">
      {/* Logo + social row on mobile */}
      <div className="flex flex-wrap items-center justify-between gap-2 md:hidden">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt=""
            width={110}
            height={50}
            className="brightness-0 invert"
          />
        </div>
        <div className="flex gap-[10px] md:hidden">
          {socialLinks.map((s) => (
            <a
              key={s.icon}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--brand-primary-hover)] shadow-[var(--box-shadow)]"
            >
              <SocialIcon name={s.icon} />
            </a>
          ))}
        </div>
      </div>

      <div>
        <p className="body-medium text-[var(--brand-white)]">{company.name}</p>
        <address className="body-small mt-6 not-italic text-[var(--brand-white)]/90">
          <p>{company.address.line1}</p>
          <p className="mt-2">{company.address.line2}</p>
          <p className="mt-2">{company.address.line3}</p>
        </address>

        <a
          href={`tel:${company.phone.replace(/\s/g, "")}`}
          className="body-caption flex items-center gap-2 text-[var(--brand-white)] mt-5"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-primary-hover)] shadow-[var(--box-shadow)]">
            <PhoneIcon />
          </span>
          <span className="font-semibold">
            <span className="block">Phone</span>
            <span>{company.phone}</span>
          </span>
        </a>
        <a
          href={`mailto:${company.email}`}
          className="body-caption flex items-center gap-2 text-[var(--brand-white)] mt-5"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-primary-hover)] shadow-[var(--box-shadow)]">
            <EmailIcon />
          </span>
          <span className="font-semibold">
            <span className="block">Email</span>
            <span>{company.email}</span>
          </span>
        </a>
      </div>
    </div>
  );
}
