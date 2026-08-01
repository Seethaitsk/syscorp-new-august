"use client";

import Breadcrumbs from "@/components/ui/Breadcrumbs";

interface HeaderBannerProps {
    title: React.ReactNode;
    description: string;
    primaryBtnText?: string;
    primaryBtnLink?: string;
    secondaryBtnLink?: string;
    showCubes?: boolean;
    showSmiley?: boolean;
}

export default function HeaderBanner({
    title,
    description,
    primaryBtnText = "Explore Services",
    primaryBtnLink = "/services",
    secondaryBtnLink = "/contact",
    showCubes = true,
    showSmiley = true,
}: HeaderBannerProps) {
    return (
        <section className="relative min-h-[60vh] lg:min-h-[68vh] bg-gradient-to-br from-[#010925] via-[#011146] to-[#0a2373] pt-32 md:pt-36 lg:pt-40 pb-16 lg:pb-20 px-6 md:px-12 lg:px-24 flex items-center overflow-hidden transition-colors duration-500">
            <style>{`
                .animate-float-slow {
                    animation: floatSlow 8s ease-in-out infinite;
                }
                .animate-float-reverse {
                    animation: floatReverse 7s ease-in-out infinite;
                }
                @keyframes floatSlow {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(3deg); }
                }
                @keyframes floatReverse {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(12px) rotate(-4deg); }
                }
            `}</style>

            {/* Background grids and blobs */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
            <div className="absolute w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(26,92,221,0.18)_0%,transparent_70%)] top-[-10%] left-[-10%] pointer-events-none z-0" />
            <div className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(96,165,250,0.12)_0%,transparent_70%)] bottom-[-10%] right-[-10%] pointer-events-none z-0" />

            {/* Left/Bottom-Left Cubes Asset */}
            {showCubes && (
                <div className="absolute left-[-20px] bottom-[-20px] md:left-[30px] md:bottom-[30px] z-0 opacity-30 md:opacity-60 pointer-events-none animate-float-reverse">
                    <svg width="160" height="160" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="cubeTop" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#94A3B8" />
                                <stop offset="100%" stopColor="#475569" />
                            </linearGradient>
                            <linearGradient id="cubeLeft" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#475569" />
                                <stop offset="100%" stopColor="#1E293B" />
                            </linearGradient>
                            <linearGradient id="cubeRight" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#64748B" />
                                <stop offset="100%" stopColor="#334155" />
                            </linearGradient>
                        </defs>
                        <g transform="translate(40, 50) rotate(-10 30 30)">
                            <path d="M 30,0 L 60,15 L 30,30 L 0,15 Z" fill="url(#cubeTop)" />
                            <path d="M 0,15 L 30,30 L 30,65 L 0,50 Z" fill="url(#cubeLeft)" />
                            <path d="M 30,30 L 60,15 L 60,50 L 30,65 Z" fill="url(#cubeRight)" />
                        </g>
                        <g transform="translate(10, 95) scale(0.6) rotate(15 30 30)">
                            <path d="M 30,0 L 60,15 L 30,30 L 0,15 Z" fill="url(#cubeTop)" />
                            <path d="M 0,15 L 30,30 L 30,65 L 0,50 Z" fill="url(#cubeLeft)" />
                            <path d="M 30,30 L 60,15 L 60,50 L 30,65 Z" fill="url(#cubeRight)" />
                        </g>
                    </svg>
                </div>
            )}

            <div className="container mx-auto max-w-[1240px] relative z-10">
                {/* Clean 1 Row 2 Column Grid */}
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left Column (7 cols): Breadcrumb, Title & CTA */}
                    <div className="lg:col-span-7 space-y-4">
                        <Breadcrumbs />

                        <h1 data-animate="fade-up" className="text-3xl md:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.15] tracking-tight m-0 font-sans">
                            {title}
                        </h1>

                        <div data-animate="fade-up" className="flex items-center gap-3 pt-3">
                            <a
                                href={primaryBtnLink}
                                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#1A5CDD] hover:bg-blue-600 text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-105 active:scale-95 transition-all duration-300 no-underline"
                            >
                                <span>{primaryBtnText}</span>
                            </a>
                            {secondaryBtnLink && (
                                <a
                                    href={secondaryBtnLink}
                                    className="w-11 h-11 rounded-full border border-white/30 bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all duration-300 no-underline hover:scale-105 active:scale-95 shadow-md"
                                    aria-label="Secondary link"
                                >
                                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Right Column (5 cols): Glass Card with Scroll Pill + Description */}
                    <div className="lg:col-span-5">
                        <div className="bg-white/[0.05] backdrop-blur-md border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden group hover:border-white/30 hover:bg-white/[0.07] transition-all duration-300">
                            <div className="flex gap-5 items-start">
                                {/* Scroll Pill */}
                                <div className="w-10 h-16 rounded-full border border-white/25 bg-white/10 flex items-center justify-center text-white flex-shrink-0 animate-bounce cursor-pointer hover:border-white/50 transition-colors shadow-inner mt-1">
                                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>

                                {/* Description Paragraph */}
                                <p data-animate="fade-up" className="text-gray-200 text-sm md:text-base leading-relaxed m-0 font-sans font-normal">
                                    {description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
