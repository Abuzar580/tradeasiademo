/**
 * Shared language/country list for desktop drawer and mobile language modal.
 * Replace with API data when available – pass as `languages` prop to both consumers.
 */
export type LanguageOption = {
  code: string;
  name: string;
  flagSrc?: string;
};

export const defaultLanguages: LanguageOption[] = [
  { code: "af", name: "Afghanistan" },
  { code: "al", name: "Albania" },
  { code: "dz", name: "Algeria" },
  { code: "ad", name: "Andorra" },
  { code: "ao", name: "Angola" },
  { code: "ar", name: "Argentina" },
  { code: "am", name: "Armenia" },
  { code: "au", name: "Australia" },
  { code: "at", name: "Austria" },
];
