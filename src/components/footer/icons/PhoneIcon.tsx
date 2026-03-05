import Image from "next/image";

export function PhoneIcon() {
  return (
    <Image src="/phoneIcon.svg" alt="" width={20} height={20} className="brightness-0 invert" />
  );
}
