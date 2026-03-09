import { Button } from "@/components/ui"

type HeaderProps = {
    title1: string
    title2: string
    subtitle?: string
    buttonText?: string
}

export default function BannerHeader({ title1, title2, subtitle, buttonText }: HeaderProps) {
    return (
        <header className="flex flex-col gap-2 md:mb-2">

            <div className="text-center md:text-start text-[32px] md:text-[46px] font-bold text-[var(--brand-black)]" >
                <span className="text-[var(--brand-black)]">{title1 || ""}</span>
                <span className="text-[var(--brand-primary)]"> {title2 || ""} </span>
            </div>

            <p className="md:text-[var(--body-large-size)] text-[var(--body-regular-size)] font-[var(--font-weight-semibold)] text-center md:text-start text-[var(--brand-neutral-text)]">
                {subtitle || ""}
            </p>

            <Button className="self-center md:self-start mt-4 hidden md:block" variant="primary">
                {buttonText || "Learn More"}
            </Button>

        </header>
    )
}