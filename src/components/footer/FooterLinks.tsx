import Link from "next/link";

type FooterLinksProps = {
  links: { label: string; href: string }[];
};

export function FooterLinks({ links }: FooterLinksProps) {
  return (
    <div className="md:flex-1">
      <div className="body-medium mb-6 uppercase">Information</div>
      <ul className="flex flex-col gap-4">
        {links.map((link) => (
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
  );
}
