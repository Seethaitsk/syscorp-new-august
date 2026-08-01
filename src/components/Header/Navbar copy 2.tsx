"use client";
import * as React from "react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (href: string) => pathname === href;

    // 1. Unified Font Configuration
    const navTextStyles = "text-[16px] font-semibold text-gray-700";

    // 2. Base styles for standard links (with underline effect)
    const linkBase = `${navTextStyles} relative py-2 transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full`;

    const activeLink = "text-blue-600 after:w-full";

    const seoServices = [
        { name: "Custom Website Design", href: "/services/custom-website-design", icon: "fa-palette" },
        { name: "Responsive UI/UX", href: "/services/responsive-ui-ux", icon: "fa-mobile-screen" },
        { name: "Business Websites", href: "/services/business-websites", icon: "fa-briefcase" },
        { name: "Corporate Website", href: "/services/corporate-website", icon: "fa-building" },
        { name: "E-Commerce", href: "/services/e-commerce", icon: "fa-cart-shopping" },
        { name: "Web Applications And Dashboards", href: "/services/web-applications-dashboards", icon: "fa-chart-line" },
        { name: "Hosting And Domain", href: "/services/hosting-domain", icon: "fa-server" },
        { name: "Website Maintenance and Support", href: "/services/website-maintenance-support", icon: "fa-screwdriver-wrench" },
    ];

    const generalServices = [
        { name: "SEO Audit", href: "/services/seo-audit", icon: "fa-code" },
        { name: "​Keyword Research", href: "/services/keyword-research", icon: "fa-screwdriver-wrench" },
        { name: "On-Page SEO", href: "/services/on-page-seo", icon: "fa-arrow-trend-up" },
        { name: "Off-Page SEO", href: "/services/off-page-seo", icon: "fa-magnifying-glass-chart" },
        { name: "Technical SEO", href: "/services/technical-seo", icon: "fa-sitemap" },
        { name: "Local SEO", href: "/services/local-seo", icon: "fa-location-dot" },
        { name: "Link Building", href: "/services/link-building", icon: "fa-link" },
        { name: "Performance Tracking and Reporting", href: "/services/performance-tracking-reporting", icon: "fa-chart-simple" },

    ];

    const digitalMarketingServices = [
        { name: "Brand-Focused Marketing Strategy", href: "/services/brand-focused-marketing-strategy", icon: "fa-bullseye" },
        { name: "High-Impact Performance Ads", href: "/services/high-impact-performance-ads", icon: "fa-chart-line" },
        { name: "Premium Social Media Management", href: "/services/premium-social-media-management", icon: "fa-hashtag" },
        { name: "Content & Creative Marketing", href: "/services/content-creative-marketing", icon: "fa-pen-nib" },
        { name: "Instagram Ads", href: "/services/instagram-ads", icon: "fab fa-instagram" },
        { name: "Facebook Ads", href: "/services/facebook-ads", icon: "fab fa-facebook-f" },
        { name: "SEO & Organic Growth", href: "/services/seo-organic-growth", icon: "fa-magnifying-glass" },


    ]
    const [menuValue, setMenuValue] = React.useState("");

    // const closeMenu = () => setMenuValue("");
    const closeMenu = () => {
        setOpen(false);
        setMobileServicesOpen(false);
        setMenuValue("");
    };

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* LOGO */}
                    <Link href="/">
                        <img src="/images/logo/logo.svg" alt="Logo" className="h-10" />
                    </Link>

                    {/* DESKTOP MENU */}
                    <ul className="hidden lg:flex items-center gap-8">
                        <li>
                            <Link href="/" className={`${linkBase} ${isActive("/") ? activeLink : ""}`}>
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link href="/about" className={`${linkBase} ${isActive("/about") ? activeLink : ""}`}>
                                Company
                            </Link>
                        </li>

                        {/* ✅ SHADCN SERVICES MENU (Font-Matched) */}
                        <li className="flex items-center">
                            <NavigationMenu value={menuValue} onValueChange={setMenuValue}>
                                <NavigationMenuList>
                                    <NavigationMenuItem value="services">
                                        {/* <NavigationMenuTrigger
                                            className={`${navTextStyles} bg-transparent p-0 h-auto hover:bg-transparent hover:text-blue-600 focus:bg-transparent data-[state=open]:bg-transparent transition-colors group`}
                                        >
                                            Services
                                        </NavigationMenuTrigger> */}
                                        <NavigationMenuTrigger
                                            className={`
                               ${navTextStyles} 
                                     !bg-transparent !p-0 !h-auto 
                                   hover:!bg-transparent hover:text-blue-600 
                                      focus:!bg-transparent focus:text-blue-600
                                      data-[state=open]:!bg-transparent data-[state=open]:text-blue-600
                                   data-[active]:!bg-transparent
                               transition-colors
                               group
                                   `}
                                        >
                                            Services
                                        </NavigationMenuTrigger>

                                        <NavigationMenuContent>
                                            <div className="w-[900px] bg-white rounded-lg shadow-xl ring-1 ring-black/5">
                                                <div className="grid grid-cols-12">
                                                    {/* SEO Services */}
                                                    <div className="col-span-4 p-8 border-r border-gray-50">
                                                        <h4 className="text-[12px] font-bold tracking-wider text-gray-900 uppercase mb-6">
                                                            Website Services
                                                        </h4>
                                                        <div className="space-y-6">
                                                            {seoServices.slice(0, 8).map((s) => (
                                                                <NavigationMenuLink asChild key={s.href}>
                                                                    {/* <Link
                                                                        href={s.href}
                                                                        className="group flex items-start gap-4 transition-colors"
                                                                    >
                                                                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-50 transition-colors group-hover:bg-[#1a5cdd] group-hover:text-white text-[#005cd8]">
                                                                            <i className={`fas ${s.icon} text-sm`} />
                                                                        </div>
                                                                        <div className="flex flex-col justify-center">
                                                                            <p className="text-sm font-bold text-gray-900 group-hover:text-[#1a5cdd]">
                                                                                {s.name}
                                                                            </p>
                                                                            <p className="text-[13px] text-gray-500 line-clamp-1">
                                                                                Expert {s.name.toLowerCase()} solutions.
                                                                            </p>
                                                                        </div>
                                                                    </Link> */}
                                                                    <Link
                                                                        href={s.href}
                                                                        className="group flex items-center gap-4 transition-colors mb-2"
                                                                    >
                                                                        {/* Icon */}
                                                                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-50 transition-colors group-hover:bg-[#00a3ff] text-[#00a3ff] group-hover:text-white">
                                                                            <i className={`fas ${s.icon} text-sm`} />
                                                                        </div>

                                                                        {/* Text */}
                                                                        <p className="text-sm font-bold text-gray-900 group-hover:text-[#00a3ff]">
                                                                            {s.name}
                                                                        </p>
                                                                    </Link>
                                                                </NavigationMenuLink>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Digital Services */}
                                                    <div className="col-span-4 p-8 border-r border-gray-50">
                                                        <h4 className="text-[12px] font-bold tracking-wider text-gray-900 uppercase mb-6">
                                                            SEO Services
                                                        </h4>
                                                        <div className="space-y-6">
                                                            {generalServices.slice(0, 8).map((s) => (
                                                                <NavigationMenuLink asChild key={s.href}>

                                                                    <Link
                                                                        href={s.href}
                                                                        className="group flex items-center gap-4 transition-colors mb-2"
                                                                    >
                                                                        {/* Icon */}
                                                                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-50 transition-colors group-hover:bg-[#00a3ff] text-[#00a3ff] group-hover:text-white">
                                                                            <i className={`fas ${s.icon} text-sm`} />
                                                                        </div>

                                                                        {/* Text */}
                                                                        <p className="text-sm font-bold text-gray-900 group-hover:text-[#00a3ff]">
                                                                            {s.name}
                                                                        </p>
                                                                    </Link>
                                                                </NavigationMenuLink>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* digitalMarketingServices */}
                                                    <div className="col-span-4 p-8">
                                                        <h4 className="text-[12px] font-bold tracking-wider text-gray-900 uppercase mb-6">
                                                            Digital Marketing
                                                        </h4>
                                                        {/* <div className="space-y-4">
                                                            <div className="h-24 bg-gray-200 rounded-lg animate-pulse"></div>
                                                            <div className="h-24 bg-gray-200 rounded-lg animate-pulse"></div>
                                                        </div> */}
                                                        <div className="space-y-6">
                                                            {digitalMarketingServices.slice(0, 8).map((s) => (
                                                                <NavigationMenuLink asChild key={s.href}>

                                                                    <Link
                                                                        href={s.href}
                                                                        className="group flex items-center gap-4 transition-colors mb-2"
                                                                    >
                                                                        {/* Icon */}
                                                                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-50 transition-colors group-hover:bg-[#00a3ff] text-[#00a3ff] group-hover:text-white">
                                                                            <i className={`fas ${s.icon} text-sm`} />
                                                                        </div>

                                                                        {/* Text */}
                                                                        <p className="text-sm font-bold text-gray-900 group-hover:text-[#00a3ff]">
                                                                            {s.name}
                                                                        </p>
                                                                    </Link>
                                                                </NavigationMenuLink>
                                                            ))}
                                                        </div>
                                                        <div>
                                                            <Link
                                                                href="/services"
                                                                onClick={() => setMenuValue("")}
                                                                className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-[#00a3ff] text-white text-sm font-semibold hover:bg-blue-700 transition"
                                                            >
                                                                View All Services
                                                            </Link>

                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </li>
                        <li>
                            <Link href="/career" className={`${linkBase} ${isActive("/career") ? activeLink : ""}`}>
                                Career
                            </Link>
                        </li>

                        <li>
                            <Link href="/blog" className={`${linkBase} ${isActive("/blog") ? activeLink : ""}`}>
                                Blog
                            </Link>
                        </li>

                        <li>
                            <Link href="/contact" className={`${linkBase} ${isActive("/contact") ? activeLink : ""}`}>
                                Contact
                            </Link>
                        </li>
                    </ul>

                    {/* CTA */}
                    <div className="hidden lg:block">
                        <Button href="/contact">Request a Quote</Button>
                    </div>

                    {/* MOBILE TOGGLE */}
                    <button className="lg:hidden text-2xl" onClick={() => setOpen(true)} aria-label="Open navigation menu">
                        <i className="fas fa-bars" />
                    </button>
                </div>
            </div>

            {/* MOBILE OVERLAY */}
            <div
                onClick={() => setOpen(false)}
                className={`fixed inset-0 bg-black/60 z-[60] transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
            />

            {/* MOBILE SIDEBAR */}
            <div
                className={`fixed top-0 right-0 h-screen w-[300px] bg-white z-[70] transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between p-6">
                    <img src="/images/logo/logo.svg" className="h-8" alt="Logo" />
                    <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 rounded-full hover:bg-gray-100 transition">
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

                        {/* Mobile Accordion */}
                        <li>
                            <button
                                className="flex items-center justify-between w-full"
                                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
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
                                <ul className="space-y-3 text-sm text-gray-600">
                                    <li className="font-bold flex items-center gap-2 font-bold">
                                        {/* <i className="fas fa-search-plus"></i> */}
                                        Website Services
                                    </li>
                                    {seoServices.map((s) => (
                                        <li key={s.href}>

                                            <Link
                                                href={s.href}
                                                onClick={() => setOpen(false)}
                                                className="flex gap-2 items-center"
                                            >
                                                <span className="flex items-center justify-center w-5 h-5">
                                                    <i className={`fas ${s.icon} text-blue-500 text-xs`} />
                                                </span>
                                                {s.name}
                                            </Link>
                                        </li>
                                    ))}
                                    <li className="font-bold pt-4 flex items-center gap-2">
                                        {/* <i className="fas fa-th-large"></i>  */}
                                        Seo Service
                                    </li>
                                    {generalServices.map((s) => (
                                        <li key={s.href}>

                                            <Link
                                                href={s.href}
                                                onClick={() => setOpen(false)}
                                                className="flex gap-2 items-center"
                                            >
                                                <span className="flex items-center justify-center w-5 h-5">
                                                    <i className={`fas ${s.icon} text-blue-500 text-xs`} />
                                                </span>
                                                {s.name}
                                            </Link>
                                        </li>
                                    ))}
                                    <li className="font-bold  pt-4 flex items-center gap-2">
                                        {/* <i className="fas fa-th-large"></i>  */}
                                        Digital Marketing
                                    </li>
                                    {digitalMarketingServices.map((s) => (
                                        <li key={s.href}>

                                            <Link
                                                href={s.href}
                                                onClick={() => setOpen(false)}
                                                className="flex gap-2 items-center"
                                            >
                                                <span className="flex items-center justify-center w-5 h-5">
                                                    <i className={`fas ${s.icon} text-blue-500 text-xs`} />
                                                </span>
                                                {s.name}
                                            </Link>
                                        </li>
                                    ))}
                                    <Link
                                        href="/services"
                                        onClick={closeMenu}
                                        className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-[#00a3ff] text-white text-sm font-semibold hover:bg-blue-700 transition"
                                    >
                                        View All Services
                                    </Link>

                                </ul>
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
