import { AppStoreIcon, GooglePlayIcon } from "./icons";

export function FooterApps() {
  return (
    <div className="md:flex-1">
      <div className="body-medium mb-4 uppercase">Download our mobile app</div>
      <div className="flex flex-col gap-[var(--footer-apps-gap)]">
        <a
          href="#"
          className="flex items-center gap-[var(--footer-apps-gap)] rounded-xl bg-[var(--footer-icon-bg)] shadow-[var(--footer-shadow)] p-[10.5px] max-w-[265px]"
        >
          <AppStoreIcon />
          <div>
            <span className="block text-[length:var(--footer-app-label-size)] font-[var(--footer-app-label-weight)]">Download on the</span>
            <span className="block text-[length:var(--footer-app-title-size)] font-[var(--footer-app-title-weight)]">App Store</span>
          </div>
        </a>
        <a
          href="#"
          className="flex items-center gap-[var(--footer-apps-gap)] rounded-xl bg-[var(--footer-icon-bg)] shadow-[var(--footer-shadow)] p-[10.5px] max-w-[265px]"
        >
          <GooglePlayIcon />
          <div>
            <span className="block text-[length:var(--footer-app-label-size)] font-[var(--footer-app-label-weight)]">Get it on</span>
            <span className="block text-[length:var(--footer-app-title-size)] font-[var(--footer-app-title-weight)]">Google Play</span>
          </div>
        </a>
      </div>
    </div>
  );
}
