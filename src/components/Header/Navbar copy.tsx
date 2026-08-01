"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (href: string) => pathname === href;

    const linkBase =
        "relative py-2 transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full";
    const activeLink = "text-blue-600 after:w-full";

    const seoServices = [
        { name: "Enterprise SEO", href: "/enterprise-seo", icon: "fa-building" },
        { name: "Local SEO", href: "/local-seo", icon: "fa-location-dot" },
        { name: "Global SEO", href: "/global-seo", icon: "fa-globe" },
        { name: "E-commerce SEO", href: "/ecommerce-seo", icon: "fa-cart-shopping" },
        { name: "YouTube SEO", href: "/youtube-seo", icon: "fa-play" },
        { name: "Google Business", href: "/google-my-bussiness", icon: "fa-map" },
        { name: "Content Writing", href: "/content-writting", icon: "fa-pen-nib" },
        { name: "SEO Reseller", href: "/seo-reseller", icon: "fa-handshake" },
    ];

    const generalServices = [
        { name: "Web Development", href: "/best-website-development-company-in-chennai", icon: "fa-code" },
        { name: "Web Maintenance", href: "/website-maintenance", icon: "fa-screwdriver-wrench" },
        { name: "SEO Optimization", href: "/seo-service", icon: "fa-arrow-trend-up" },
        { name: "Search Marketing", href: "/search-engine-marketing", icon: "fa-magnifying-glass-chart" },
        { name: "Social Media", href: "/socialmedia-marketing", icon: "fa-share-nodes" },
        { name: "Logo Design", href: "/logo-design-service", icon: "fa-palette" },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* LOGO */}
                    <Link href="/">
                        <img src="/images/logo/logo.svg" alt="Logo" className="main-logo" />
                    </Link>

                    {/* DESKTOP MENU */}
                    <ul className="hidden lg:flex items-center gap-8 font-semibold text-gray-700">
                        <li>
                            <Link href="/" className={`${linkBase} ${isActive("/") ? activeLink : "text-gray-700"}`}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className={`${linkBase} ${isActive("/about") ? activeLink : "text-gray-700"}`}
                            >
                                Company
                            </Link>
                        </li>

                        {/* Services Mega Menu */}
                        <li className="relative group">
                            <span className="flex items-center gap-1 cursor-pointer py-8 hover:text-blue-600">
                                Services
                                <i className="fas fa-chevron-down text-[10px] transition-transform group-hover:rotate-180" />
                            </span>

                            <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block">
                                <div className="bg-white shadow-xl rounded-[10px] w-[640px]">
                                    <div className="grid grid-cols-2 gap-6 p-6">
                                        {/* SEO Services */}
                                        <div>
                                            <h4 className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase mb-4 pb-2">
                                                <i className="fas fa-search-plus"></i> SEO Services
                                            </h4>
                                            <ul className="space-y-2">
                                                {seoServices.map((s) => (
                                                    <li key={s.href}>
                                                        <Link
                                                            href={s.href}
                                                            className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600"
                                                        >
                                                            <i className={`fas ${s.icon} text-blue-500 text-xs`} />
                                                            {s.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* General Services */}
                                        <div>
                                            <h4 className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase mb-4 pb-2">
                                                <i className="fas fa-th-large"></i> Digital Services
                                            </h4>
                                            <ul className="space-y-2">
                                                {generalServices.map((s) => (
                                                    <li key={s.href}>
                                                        <Link
                                                            href={s.href}
                                                            className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600"
                                                        >
                                                            <i className={`fas ${s.icon} text-blue-500 text-xs`} />
                                                            {s.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <Link
                                href="/blog"
                                className={`${linkBase} ${isActive("/blog") ? activeLink : "text-gray-700"}`}
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className={`${linkBase} ${isActive("/contact") ? activeLink : "text-gray-700"}`}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>

                    {/* CTA */}
                    <div className="hidden lg:block">
                        <Button href="/contact">Request a Quote</Button>
                    </div>

                    {/* MOBILE TOGGLE */}
                    <button
                        className="lg:hidden text-2xl"
                        onClick={() => setOpen(true)}
                        aria-label="Open navigation menu"
                    >
                        <i className="fas fa-bars" aria-hidden="true" />
                    </button>
                </div>
            </div>

            {/* MOBILE OVERLAY */}
            <div
                onClick={() => setOpen(false)}
                className={`fixed inset-0 bg-black/60 z-[60] transition-opacity ${open ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
            />

            {/* MOBILE SIDEBAR */}
            <div
                className={`fixed top-0 right-0 h-screen w-[300px] bg-white z-[70] transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between p-6">
                    <img src="/images/logo/logo.svg" className="h-8" />
                    <button
                        onClick={() => setOpen(false)}
                        className="p-2 rounded-full hover:bg-gray-100 transition"
                        aria-label="Close menu"
                    >
                        <i className="fa-solid fa-xmark text-xl"></i>
                    </button>
                </div>

                <div className="flex flex-col h-[calc(100vh-80px)] overflow-y-auto p-6">
                    <ul className="flex flex-col gap-5 font-semibold">
                        <li>
                            <Link
                                href="/"
                                onClick={() => setOpen(false)}
                                className={isActive("/") ? "text-blue-600" : ""}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                onClick={() => setOpen(false)}
                                className={isActive("/about") ? "text-blue-600" : ""}
                            >
                                Company
                            </Link>
                        </li>

                        {/* Mobile Services Accordion */}
                        <li>
                            <button
                                className="flex items-center justify-between w-full"
                                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                aria-expanded={mobileServicesOpen}
                            >
                                Services
                                <i
                                    className={`fas fa-chevron-down text-xs transition-transform ${mobileServicesOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <div
                                className={`transition-all duration-300 overflow-hidden ${mobileServicesOpen ? "max-h-[2000px] mt-4" : "max-h-0"
                                    }`}
                            >
                                <div className="overflow-y-auto max-h-[calc(100vh-80px)]">
                                    <ul className="pl-4 space-y-3 text-sm text-gray-600">
                                        <li className="font-bold text-blue-600 flex items-center gap-2">
                                            <i className="fas fa-search-plus"></i> SEO
                                        </li>
                                        {seoServices.map((s) => (
                                            <li key={s.href}>
                                                <Link
                                                    href={s.href}
                                                    onClick={() => setOpen(false)}
                                                    className="flex gap-2"
                                                >
                                                    <i className={`fas ${s.icon} text-blue-500 text-xs`} />
                                                    {s.name}
                                                </Link>
                                            </li>
                                        ))}

                                        <li className="font-bold text-blue-600 pt-4 flex items-center gap-2">
                                            <i className="fas fa-th-large"></i> Digital
                                        </li>
                                        {generalServices.map((s) => (
                                            <li key={s.href}>
                                                <Link
                                                    href={s.href}
                                                    onClick={() => setOpen(false)}
                                                    className="flex gap-2"
                                                >
                                                    <i className={`fas ${s.icon} text-blue-500 text-xs`} />
                                                    {s.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </li>

                        <li>
                            <Link
                                href="/blog"
                                onClick={() => setOpen(false)}
                                className={isActive("/blog") ? "text-blue-600" : ""}
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                onClick={() => setOpen(false)}
                                className={isActive("/contact") ? "text-blue-600" : ""}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>

                    <div className="mt-auto pt-8">
                        <Button href="/contact" className="w-full">
                            Request a Quote
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
