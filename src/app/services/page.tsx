"use client";

import Link from "next/link";
import HeaderBanner from "@/components/ui/HeaderBanner";
import {
    ArrowRight,
    Globe,
    Search,
    Megaphone,
    Video,
    Palette
} from "lucide-react";

export default function ServiceDetailsPage() {
    const servicesData = [
        {
            category: "Website Development",
            icon: <Globe size={22} />,
            services: [
                { name: "Custom Website Design", href: "/contact" },
                { name: "Responsive UI / UX", href: "/contact" },
                { name: "Corporate Websites", href: "/contact" },
                { name: "Business Websites", href: "/contact" },
                { name: "E-Commerce Solutions", href: "/contact" },
                { name: "Web Applications & Dashboards", href: "/contact" },
                { name: "Website Maintenance & Support", href: "/contact" },
                { name: "Hosting & Domain Setup", href: "/contact" },
            ],
        },
        {
            category: "SEO Services",
            icon: <Search size={22} />,
            services: [
                { name: "Website SEO Audit", href: "/services/seo-services" },
                { name: "Keyword Research & Strategy", href: "/services/seo-services" },
                { name: "On-Page SEO", href: "/services/seo-services" },
                { name: "Off-Page SEO", href: "/services/seo-services" },
                { name: "Technical SEO", href: "/services/seo-services" },
                { name: "Local SEO", href: "/services/seo-services" },
                { name: "Link Building", href: "/services/seo-services" },
                { name: "Performance Tracking & Reporting", href: "/services/seo-services" },
            ],
        },
        {
            category: "Digital Marketing",
            icon: <Megaphone size={22} />,
            services: [
                { name: "Brand-Focused Marketing Strategy", href: "/contact" },
                { name: "Premium Social Media Management", href: "/contact" },
                { name: "High-Impact Performance Ads", href: "/contact" },
                { name: "Content & Creative Marketing", href: "/contact" },
                { name: "Instagram Ads", href: "/contact" },
                { name: "Facebook Ads", href: "/contact" },
                { name: "SEO & Organic Growth", href: "/contact" },
                { name: "Google Ads", href: "/contact" },
                { name: "YouTube Ads", href: "/contact" },
                { name: "LinkedIn Ads", href: "/contact" },
                { name: "Twitter (X) Ads", href: "/contact" },
            ],
        },
        {
            category: "Video Marketing",
            icon: <Video size={22} />,
            services: [
                { name: "YouTube Video Editing", href: "/contact" },
                { name: "YouTube Shorts & Reels", href: "/contact" },
                { name: "Promotional & Ad Video Editing", href: "/contact" },
                { name: "Video SEO & Optimization", href: "/contact" },
                { name: "YouTube Channel Growth Strategy", href: "/contact" },
            ],
        },
        {
            category: "Graphic Design",
            icon: <Palette size={22} />,
            services: [
                { name: "Logo & Brand Identity Design", href: "/contact" },
                { name: "Social Media Creatives", href: "/contact" },
                { name: "Marketing & Ad Designs", href: "/contact" },
                { name: "Print & Digital Design", href: "/contact" },
            ],
        },
    ];

    return (
        <div className="bg-gradient-to-b from-gray-50 via-white to-gray-100 min-h-screen">
            <HeaderBanner
                title={
                    <>
                        Explore our <span className="text-[#38bdf8] font-serif italic font-normal">professional services</span> for digital growth.
                    </>
                }
                description="Discover all our premium digital solutions designed to help businesses grow faster, rank higher, and convert better."
            />

            <div className="max-w-7xl mx-auto px-6 py-20">
                {/* Categories */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {servicesData.map((cat, index) => {
                        const categoryId = cat.category.toLowerCase().replace(/\s+/g, "-");
                        return (
                            <div
                                key={index}
                                id={categoryId}
                                className="group bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 scroll-mt-28"
                            >
                                {/* Category Header */}
                                <div className="p-8 bg-[#011146] text-white relative">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/15 border border-white/20">
                                            {cat.icon}
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-bold">{cat.category}</h2>
                                            <p className="text-sm text-gray-300 mt-1">
                                                {cat.services.length} Services Available
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Services List */}
                                <div className="p-8">
                                    <ul className="space-y-4">
                                        {cat.services.map((service, idx) => (
                                            <li key={idx}>
                                                <Link
                                                    href={service.href}
                                                    className="group flex items-center justify-between gap-3 px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200"
                                                >
                                                    <span className="text-[15px] font-semibold text-gray-700 group-hover:text-gray-900">
                                                        {service.name}
                                                    </span>

                                                    <span className="text-gray-400 group-hover:text-blue-600 transition transform group-hover:translate-x-1">
                                                        <ArrowRight size={18} />
                                                    </span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}