import Image from "next/image";
import Link from "next/link";

const informationLinks = [
  { label: "Our Locations", href: "/locations" },
  { label: "FAQ", href: "/faq" },
  { label: "Customer Support", href: "/support" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms and Conditions", href: "/terms" },
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
];

export function FooterOne() {
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
        {/* Main content – 3 columns on desktop, stacked on mobile */}
        <div className="flex flex-col gap-11 md:flex-row md:gap-12 md:mt-7 lg:gap-16 md:px-14">
          {/* Column 1: Logo + social (mobile) / Company info (desktop) */}
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
              {/* Social icons – visible on mobile next to logo */}
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
              <p className="body-medium text-[var(--brand-white)]">
                Tradeasia International Pte. Ltd
              </p>
              <address className="body-small mt-6 not-italic text-[var(--brand-white)]/90">
                <p>Keck Seng Tower</p>
                <p className="mt-2">133 Cecil Street #12-03</p>
                <p className="mt-2">Singapore, 069535, Republic of Singapore</p>
              </address>

              <a
                href="tel:+6562276365"
                className="body-caption flex items-center gap-2 text-[var(--brand-white)] mt-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-primary-hover)] shadow-[var(--box-shadow)]"><PhoneIcon /></span>
                <span className="font-semibold">
                  <span className="block">Phone</span>
                  <span>+65 6227 6365</span>
                </span>
              </a>
              <a
                href="mailto:contact@chemtradeasia.com"
                className="body-caption flex items-center gap-2 text-[var(--brand-white)] mt-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-primary-hover)] shadow-[var(--box-shadow)]"><EmailIcon /></span>
                <span className="font-semibold">
                  <span className="block">Email</span>
                  <span>contact@chemtradeasia.com</span>
                </span>
              </a>
            </div>
          </div>

          {/* Column 2: Information links */}
          <div className="md:flex-1">
            <div className="body-medium mb-6 uppercase">
              Information
            </div>
            <ul className="flex flex-col gap-4">
              {informationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="body-regular text-[var(--brand-white)] hover:opacity-90"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Download app buttons */}
          <div className="md:flex-1">
            <div className="body-medium mb-4 uppercase">
              Download our mobile app
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="flex items-center gap-3 rounded-xl bg-[var(--brand-primary-hover)] shadow-[var(--box-shadow)] p-[10.5px] max-w-[265px]"
              >
                <AppStoreIcon />
                <div>
                  <span className="block text-[12px] font-semibold">Download on the</span>
                  <span className="block text-[14px] font-bold">App Store</span>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-xl bg-[var(--brand-primary-hover)] shadow-[var(--box-shadow)] p-[10.5px] max-w-[265px]"
              >
                <GooglePlayIcon />
                <div>
                  <span className="block text-[12px] font-semibold">Get it on</span>
                  <span className="block text-[14px] font-bold">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar – copyright + social (desktop) */}
        <div className="mt-11 flex flex-col gap-6 border-t border-[var(--brand-white)]/15 pt-8 md:flex-row md:justify-between md:gap-3 md:mt-18 md:pt-12 md:pb-15 md:px-3">
          <p className="body-small text-[var(--brand-white)]">
           <span className="font-normal">© 2024 Tradeasia International Pte. Ltd. All rights reserved.</span>
          </p>
          <div className="hidden gap-4 md:flex">
            {socialLinks.map((s) => (
              <a
                key={s.icon}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-primary-hover)] shadow-[var(--box-shadow)]"
              >
                <SocialIcon name={s.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <Image src="/phoneIcon.svg" alt="" width={20} height={20} className="brightness-0 invert" />
  );
}

function EmailIcon() {
  return (
    <Image src="/emailIcon.svg" alt="" width={20} height={20} className="brightness-0 invert rounded-full" />
  );
}

const socialIconSrc: Record<string, string> = {
  facebook: "/facebookIcon.svg",
  youtube: "/youtubeIcon.svg",
  linkedin: "/linkedinIcon.svg",
  instagram: "/instagramIcon.svg",
};

function SocialIcon({ name }: { name: string }) {
  const src = socialIconSrc[name];
  if (!src) return null;
  return (
    <Image src={src} alt="" width={24} height={24} className="brightness-0 invert" />
  );
}

function AppStoreIcon() {
  return (
    <Image src="/appleStoreIcon.svg" alt="" width={28} height={28} className="brightness-0 invert" />
  );
}

function GooglePlayIcon() {
  return (
    <Image src="/playStoreIcon.svg" alt="" width={28} height={28} className="brightness-0 invert" />
  );
}
