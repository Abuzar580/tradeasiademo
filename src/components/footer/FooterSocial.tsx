import { SocialIcon } from "./icons";

type FooterSocialProps = {
  socialLinks: { label: string; href: string; icon: string }[];
  className?: string;
};

export function FooterSocial({ socialLinks, className }: FooterSocialProps) {
  return (
    <div className={className}>
      {socialLinks.map((s) => (
        <a
          key={s.icon}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--footer-icon-bg)] shadow-[var(--footer-shadow)]"
        >
          <SocialIcon name={s.icon} />
        </a>
      ))}
    </div>
  );
}
