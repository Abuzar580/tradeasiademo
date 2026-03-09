type HeaderProps = {
    title: string
    subtitle?: string
}

export default function Header({ title, subtitle }: HeaderProps) {
    return (
        <header className="flex flex-col gap-3 md:mb-2">

            <div className="text-center md:text-start text-[32px] md:text-[46px] font-bold text-[var(--brand-primary)]" >
                {title}
            </div>

            <p className="md:text-[var(--body-large-size)] text-[var(--body-regular-size)] font-[var(--font-weight-semibold)] text-center md:text-start text-[var(--brand-neutral-text)] min-h-[80px]">
                {subtitle || ""}
            </p>

        </header>
    )
}