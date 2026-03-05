import { AppStoreIcon, GooglePlayIcon } from "./icons";

export function FooterApps() {
  return (
    <div className="md:flex-1">
      <div className="body-medium mb-4 uppercase">Download our mobile app</div>
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
  );
}
