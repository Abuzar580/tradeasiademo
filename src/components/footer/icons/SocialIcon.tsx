import Image from "next/image";

const socialIconSrc: Record<string, string> = {
  facebook: "/facebookIcon.svg",
  youtube: "/youtubeIcon.svg",
  linkedin: "/linkedinIcon.svg",
  instagram: "/instagramIcon.svg",
};

type SocialIconProps = {
  name: string;
};

export function SocialIcon({ name }: SocialIconProps) {
  const src = socialIconSrc[name];
  if (!src) return null;
  return (
    <Image src={src} alt="" width={24} height={24} className="brightness-0 invert" />
  );
}
