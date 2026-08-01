import Link from "next/link";

type ButtonProps = {
    href?: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    ariaLabel?: string;
    type?: "button" | "submit" | "reset";
};

export default function Button({href, children, className = "", onClick, ariaLabel, type = "button"}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center px-6 py-2.5 rounded-full font-medium text-white " +
        "transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-4 " +
        "focus-visible:ring-[#1A5CDD]/30";

    const gradientStyles = "bg-gradient-to-r from-[#3FB5FD] to-[#0B6EDA] bg-left hover:bg-right ";

    const finalClass = `${baseStyles} ${gradientStyles} ${className}`;

    // ✅ LINK VERSION
    if (href) {
        return (
            <Link href={href} className={finalClass} role="button" aria-label={ariaLabel}>
                {children}
            </Link>
        );
    }

    // ✅ BUTTON VERSION
    return (
        <button type={type} onClick={onClick} className={finalClass} aria-label={ariaLabel}>
            {children}
        </button>
    );
}
