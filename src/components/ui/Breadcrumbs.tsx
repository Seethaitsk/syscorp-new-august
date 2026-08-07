"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";

const Breadcrumbs = () => {
    const pathname = usePathname();

    if (!pathname) return null;

    const pathSegments = pathname.split("/").filter((item) => item !== "");

    // Truncate helper
    const truncateText = (text: string | number | null | undefined, maxLength = 17) => {
        const str = (text ?? "").toString();
        if (maxLength <= 0) return "";

        return str.length > maxLength
            ? str.substring(0, maxLength - 2) + ".."
            : str;
    };

    return (
        <nav aria-label="Breadcrumb" className="flex items-center py-1.5 text-[14px]">
            <ul className="flex items-center list-none p-0 m-0 flex-wrap">
                {/* Home Item */}
                <li className="flex items-center">
                    <Link
                        href="/"
                        className="text-white flex items-center justify-center transition-colors group hover:text-blue-400"
                    >
                        <span className="flex items-center justify-center w-5 h-5 mr-1">
                            <Home size={15} className="text-white group-hover:text-blue-400 mb-[1px]" />
                        </span>
                        <span className="font-medium leading-none mb-[1px]">Home</span>
                    </Link>
                </li>

                {/* Dynamic Items */}
                {pathSegments
                    .filter((segment) => segment !== "website-development" && segment !== "seo-services")
                    .map((segment, index, filteredArray) => {
                        const isLast = index === filteredArray.length - 1;

                        const href = segment === "services"
                            ? "/services"
                            : pathname;

                        let label = decodeURIComponent(segment)
                            .replace(/-/g, " ")
                            .replace(/\b\w/g, (c) => c.toUpperCase());

                        if (label.toLowerCase() === "ui ux") label = "UI/UX Design";
                        if (label.toLowerCase() === "seo") label = "SEO Service";

                        return (
                            <li key={segment} className="flex items-center leading-none">
                                {/* Separator */}
                                <ChevronRight size={14} className="mx-1.5 text-gray-400/80" />

                                {isLast ? (
                                    <span className="text-white tracking-wide" aria-current="page">
                                        {/* Mobile truncated */}
                                        <span className="block sm:hidden">
                                            {truncateText(label, 18)}
                                        </span>

                                        {/* Desktop full */}
                                        <span className="hidden sm:block">{label}</span>
                                    </span>
                                ) : (
                                    <Link
                                        href={href}
                                        className="hover:text-blue-400 transition-colors font-medium text-white"
                                    >
                                        {/* Mobile truncated */}
                                        <span className="block sm:hidden">
                                            {truncateText(label, 18)}
                                        </span>

                                        {/* Desktop full */}
                                        <span className="hidden sm:block">{label}</span>
                                    </Link>
                                )}
                            </li>
                        );
                    })}
            </ul>
        </nav>
    );
};

export default Breadcrumbs;
