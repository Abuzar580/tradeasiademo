import * as React from "react"

import { ArrowSmIcon } from "@/icons"

function Pagination({ className = "", ...props }: React.ComponentProps<"nav">) {
    return (
        <nav
            role="navigation"
            aria-label="pagination"
            data-slot="pagination"
            className={`mx-auto flex w-full justify-center ${className}`}
            {...props}
        />
    )
}

function PaginationContent({
    className = "",
    ...props
}: React.ComponentProps<"ul">) {
    return (
        <ul
            className={`flex items-center md:gap-[var(--pagination-gap-desktop)] ${className}`}
            {...props}
        />
    )
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
    return <li data-slot="pagination-item" {...props} />
}

type PaginationLinkProps = {
    isActive?: boolean
} & React.ComponentProps<"a">

function PaginationLink({
    className = "",
    isActive,
    children,
    ...props
}: PaginationLinkProps) {
    const isDisabled = props["aria-disabled"] === true
    return (
        <a
            aria-current={isActive ? "page" : undefined}
            data-slot="pagination-link"
            className={`
                flex items-center justify-center
                min-w-[32px] h-[32px]
                px-[12px]
                text-sm body-small
                font-[var(--pagination-link-weight)]!
                rounded-md
                transition
                ${isDisabled ? "pointer-events-none opacity-50 cursor-not-allowed" : ""}
                ${isActive
                    ? "bg-[var(--pagination-bg-active)] text-[var(--pagination-color-active)]"
                    : "text-[var(--pagination-color)]"
                }
                ${className}
            `}
            {...props}
        >
            {children}
        </a>
    )
}

function PaginationPrevious({
    className = "",
    text = "Previous",
    disabled = false,
    ...props
}: React.ComponentProps<typeof PaginationLink> & { text?: string; disabled?: boolean }) {
    return (
        <PaginationLink
            aria-label="Go to previous page"
            aria-disabled={disabled}
            tabIndex={disabled ? -1 : undefined}
            className={`gap-2 text-[var(--pagination-muted)] hover:text-[var(--pagination-color)] ${className}`}
            {...props}
        >
            <ArrowSmIcon className="w-4 h-4" />
            <span className="text-[length:var(--pagination-caption-size-mobile)] md:text-[length:var(--pagination-caption-size-desktop)]">{text}</span>
        </PaginationLink>
    )
}

function PaginationNext({
    className = "",
    text = "Next",
    disabled = false,
    ...props
}: React.ComponentProps<typeof PaginationLink> & { text?: string; disabled?: boolean }) {
    return (
        <PaginationLink
            aria-label="Go to previous page"
            aria-disabled={disabled}
            tabIndex={disabled ? -1 : undefined}
            className={`gap-2 text-[var(--pagination-color)] hover:text-[var(--pagination-muted)] ${className}`}
            {...props}
        >
            <span className="text-[length:var(--pagination-caption-size-mobile)] md:text-[length:var(--pagination-caption-size-desktop)]">{text}</span>
            <ArrowSmIcon className="rotate-180 w-4 h-4" />
        </PaginationLink>
    )
}

function PaginationEllipsis({
    className = "",
    ...props
}: React.ComponentProps<"span">) {
    return (
        <span
            className={`flex items-center justify-center w-[36px] h-[36px] text-[var(--pagination-color)] ${className}`}
            {...props}
        >
            ...
        </span>
    )
}

export {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
}
