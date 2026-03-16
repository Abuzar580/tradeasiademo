"use client";

import Link from "next/link";

type BaseProps = {
  variant?: "signIn" | "primary" | "outlined";
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: never;
  };

type ButtonAsLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const {
    variant = "signIn",
    href,
    children,
    className = "",
    ...rest
  } = props as BaseProps & { href?: string; [key: string]: unknown };
  const variantClass =
    variant === "signIn"
      ? "btn-sign-in"
      : variant === "primary"
        ? "btn btn-primary"
        : variant === "outlined"
          ? "btn btn-outlined"
          : "";
  const combinedClass = [variantClass, className].filter(Boolean).join(" ").trim();

  if (href) {
    return <Link href={href} className={combinedClass}>{children}</Link>;
  }

  return (
    <button type="button" className={combinedClass} {...rest}>
      {children}
    </button>
  );
}
