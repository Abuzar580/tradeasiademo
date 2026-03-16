export type ExploreCategory = {
  label: string;
  href?: string;
  children?: { label: string; href?: string; flagSrc?: string }[];
};

export type LanguageOption = {
  code: string;
  name: string;
  flagSrc?: string;
};

export type HeaderNavChild = {
  label: string;
  href: string;
};

export type HeaderNavItem = {
  label: string;
  href: string;
  children?: HeaderNavChild[];
};

export type HeaderActionType = "primary" | "outlined" | "signIn";

export type HeaderAction = {
  type: HeaderActionType;
  label: string;
  href: string;
};

export type HeaderConfig = {
  logo: {
    src: string;
    alt: string;
    href: string;
  };
  nav: HeaderNavItem[];
  actions: HeaderAction[];
  explore: ExploreCategory[];
  languages: LanguageOption[];
};

