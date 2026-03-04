import Link from "next/link";

const footerLinks = {
  company: [
    { label: "About Us", href: "/company/about" },
    { label: "Our Locations", href: "/company/locations" },
    { label: "Careers", href: "/careers" },
  ],
  products: [
    { label: "View all", href: "/products" },
    { label: "Categories", href: "/products/categories" },
  ],
  support: [
    { label: "Contact", href: "/contact" },
    { label: "Newsletter", href: "/newsletter" },
  ],
};

export function FooterOne() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[var(--brand-neutral-surface-3)] bg-[var(--brand-neutral-surface-2)]"
      role="contentinfo"
    >
      <div className="mx-auto max-w-[1360px] px-5 py-12 md:px-10">
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          <div>
            <h4 className="heading-5 mb-4 text-[var(--brand-primary)]">Company</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="body-small text-[var(--brand-neutral-text)] hover:text-[var(--brand-primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="heading-5 mb-4 text-[var(--brand-primary)]">Products</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="body-small text-[var(--brand-neutral-text)] hover:text-[var(--brand-primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="heading-5 mb-4 text-[var(--brand-primary)]">Support</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="body-small text-[var(--brand-neutral-text)] hover:text-[var(--brand-primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-[var(--brand-neutral-surface-3)] pt-8">
          <p className="body-small text-center text-[var(--brand-neutral-text)]">
            © {currentYear} ChemTradeAsia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
