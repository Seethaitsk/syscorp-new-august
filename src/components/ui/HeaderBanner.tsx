"use client";

import React from "react";

interface BadgeItem {
    icon?: React.ReactNode;
    title: string;
    description?: string;
}

interface HeaderBannerProps {
    title: React.ReactNode;
    description: React.ReactNode | string;
    badge1?: BadgeItem;
    badge2?: BadgeItem;
    primaryBtnText?: string;
    primaryBtnLink?: string;
    secondaryBtnLink?: string;
    showCubes?: boolean;
    showSmiley?: boolean;
    icon?: React.ReactNode;
}

export default function HeaderBanner({
    title,
    description,
    badge1,
    badge2,
}: HeaderBannerProps) {

    // Helper function to auto-highlight key phrases in string descriptions
    const renderFormattedDescription = (text: React.ReactNode | string) => {
        if (typeof text !== "string") return text;

        const keywords = [
            "responsive", "secure", "SEO-friendly", "built for growth",
            "Content Marketing", "Web Development", "Google Ads", "Meta Ads",
            "Local SEO", "Social Media", "CRM", "ERP", "Full Stack",
            "Pondicherry", "SysCrop", "conversions", "ROI", "authority",
            "growth", "business goals", "high-performance", "scalable"
        ];

        const regex = new RegExp(`(${keywords.map(k => k.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join("|")})`, "gi");
        const parts = text.split(regex);

        return parts.map((part, i) => {
            const isMatch = keywords.some(k => k.toLowerCase() === part.toLowerCase());
            if (isMatch) {
                return (
                    <span key={i} className="text-[#38bdf8] font-bold">
                        {part}
                    </span>
                );
            }
            return part;
        });
    };

    return (
        <section className="relative min-h-[60vh] lg:min-h-[68vh] bg-gradient-to-br from-[#010926] via-[#02134e] to-[#08287d] pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 lg:pb-24 px-6 md:px-12 lg:px-20 flex items-center overflow-hidden transition-colors duration-500">
            <style>{`
                .animate-bounce-slow {
                    animation: bounceSlow 5s ease-in-out infinite;
                }
                .animate-pulse-glow {
                    animation: pulseGlow 3s ease-in-out infinite;
                }
                @keyframes bounceSlow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }
                @keyframes pulseGlow {
                    0%, 100% { opacity: 0.4; }
                    50% { opacity: 0.8; }
                }
            `}</style>

            {/* Ambient Background Tech Grid and Glows */}
            <div className="absolute inset-0 bg-[radial-gradient(#1d4ed8_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none" />
            <div className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(37,99,235,0.25)_0%,transparent_70%)] top-[-10%] left-[-10%] pointer-events-none z-0 blur-3xl" />
            <div className="absolute w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(56,189,248,0.18)_0%,transparent_70%)] bottom-[-10%] right-[-5%] pointer-events-none z-0 blur-3xl" />

            <div className="container mx-auto max-w-[1280px] relative z-10">
                {/* 2-Column Grid Layout */}
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">

                    {/* Left Column (5 Cols): Futuristic 3D Laptop + Browser Preview Visual + Floating Cards */}
                    <div className="lg:col-span-5 relative flex items-center justify-center order-2 lg:order-1 mt-6 lg:mt-0">
                        <div className="relative w-full max-w-[520px] aspect-[4/3.4] flex items-center justify-center mx-auto">

                            {/* Background Circuit Line / Connected Nodes Graphic */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 540 440" fill="none">
                                <text x="50" y="140" fill="#38bdf8" fontSize="16" opacity="0.5" fontWeight="bold">+</text>
                                <text x="480" y="100" fill="#38bdf8" fontSize="16" opacity="0.5" fontWeight="bold">+</text>
                                
                                <path d="M 80 120 L 150 120 L 170 150" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                                <circle cx="80" cy="120" r="3" fill="#38bdf8" />
                                
                                <path d="M 460 90 L 390 90 L 370 130" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                                <circle cx="460" cy="90" r="3" fill="#38bdf8" />

                                <path d="M 50 280 L 110 280 L 140 300" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                                <circle cx="50" cy="280" r="3" fill="#38bdf8" />

                                <path d="M 470 290 L 410 290 L 380 310" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                                <circle cx="470" cy="290" r="3" fill="#38bdf8" />
                            </svg>

                            {/* 3D Laptop + Browser Preview SVG */}
                            <svg viewBox="0 0 540 440" className="w-full h-full drop-shadow-[0_25px_50px_rgba(26,92,221,0.4)] relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="laptopScreenBorder" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#38bdf8" />
                                        <stop offset="100%" stopColor="#1d4ed8" />
                                    </linearGradient>
                                    <linearGradient id="laptopScreenBg" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#030712" />
                                        <stop offset="100%" stopColor="#091330" />
                                    </linearGradient>
                                    <linearGradient id="laptopBase" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#2563eb" />
                                        <stop offset="50%" stopColor="#1d4ed8" />
                                        <stop offset="100%" stopColor="#0f172a" />
                                    </linearGradient>
                                    <linearGradient id="browserWindowBg" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#0a1d56" stopOpacity="0.95" />
                                        <stop offset="100%" stopColor="#040b24" stopOpacity="0.95" />
                                    </linearGradient>
                                    <linearGradient id="laptopStandGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.6" />
                                        <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.05" />
                                    </linearGradient>
                                </defs>

                                {/* Orbit Glow Rings Under Laptop */}
                                <ellipse cx="270" cy="355" rx="220" ry="50" fill="none" stroke="#38bdf8" strokeWidth="1.5" opacity="0.4" strokeDasharray="5 5" />
                                <ellipse cx="270" cy="355" rx="175" ry="38" fill="url(#laptopStandGlow)" />
                                <ellipse cx="270" cy="355" rx="145" ry="30" fill="none" stroke="#60a5fa" strokeWidth="1.5" opacity="0.6" />

                                {/* 1. Large Background Web Browser Window (Top Right Behind Laptop Screen) */}
                                <g transform="translate(240, 50)">
                                    <rect x="0" y="0" width="220" height="175" rx="12" fill="url(#browserWindowBg)" stroke="#38bdf8" strokeWidth="1.5" opacity="0.95" />
                                    
                                    <rect x="0" y="0" width="220" height="24" rx="12" fill="#172e6e" />
                                    <circle cx="14" cy="12" r="3" fill="#ef4444" />
                                    <circle cx="24" cy="12" r="3" fill="#eab308" />
                                    <circle cx="34" cy="12" r="3" fill="#22c55e" />

                                    <rect x="14" y="34" width="192" height="78" rx="8" fill="#0f245e" stroke="#2563eb" strokeWidth="1" />
                                    
                                    <rect x="68" y="48" width="84" height="50" rx="4" fill="#1d4ed8" />
                                    <circle cx="86" cy="60" r="5" fill="#60a5fa" />
                                    <polygon points="76,88 100,68 116,84 126,74 136,88" fill="#3b82f6" />

                                    <rect x="14" y="122" width="90" height="16" rx="4" fill="#1e3a8a" />
                                    <rect x="114" y="122" width="92" height="16" rx="4" fill="#1e3a8a" />
                                    <rect x="14" y="146" width="192" height="16" rx="4" fill="#2563eb" />
                                </g>

                                {/* 2. Laptop Base / Keyboard (Foreground angled in 3D perspective) */}
                                <g>
                                    <path d="M 90 320 L 270 385 L 450 320 L 370 290 L 270 300 L 170 290 Z" fill="url(#laptopBase)" stroke="#60a5fa" strokeWidth="1.5" />
                                    <path d="M 90 320 L 270 385 L 450 320 L 450 326 L 270 392 L 90 326 Z" fill="#3b82f6" opacity="0.9" />

                                    <polygon points="175,305 270,312 365,305 340,340 270,348 200,340" fill="#071336" stroke="#2563eb" strokeWidth="1" opacity="0.85" />
                                    <polygon points="238,352 302,352 296,368 244,368" fill="#1a367c" stroke="#38bdf8" strokeWidth="1" opacity="0.75" />
                                </g>

                                {/* 3. Main Angled Laptop Screen (Center-Left) */}
                                <g>
                                    <polygon points="95,120 330,65 375,275 140,325" fill="url(#laptopScreenBg)" stroke="url(#laptopScreenBorder)" strokeWidth="3.5" />
                                    
                                    <circle cx="212" cy="90" r="2.5" fill="#38bdf8" />

                                    <g transform="translate(108, 105) rotate(-13) scale(0.85)">
                                        <rect x="0" y="0" width="220" height="210" rx="4" fill="#04091a" opacity="0.95" />
                                        
                                        <text x="6" y="24" fill="#475569" fontSize="8" fontFamily="monospace">01</text>
                                        <text x="6" y="38" fill="#475569" fontSize="8" fontFamily="monospace">02</text>
                                        <text x="6" y="52" fill="#475569" fontSize="8" fontFamily="monospace">03</text>
                                        <text x="6" y="66" fill="#475569" fontSize="8" fontFamily="monospace">04</text>
                                        <text x="6" y="80" fill="#475569" fontSize="8" fontFamily="monospace">05</text>
                                        <text x="6" y="94" fill="#475569" fontSize="8" fontFamily="monospace">06</text>
                                        <text x="6" y="108" fill="#475569" fontSize="8" fontFamily="monospace">07</text>
                                        <text x="6" y="122" fill="#475569" fontSize="8" fontFamily="monospace">08</text>
                                        <text x="6" y="136" fill="#475569" fontSize="8" fontFamily="monospace">09</text>
                                        <text x="6" y="150" fill="#475569" fontSize="8" fontFamily="monospace">10</text>
                                        <text x="6" y="164" fill="#475569" fontSize="8" fontFamily="monospace">11</text>
                                        <text x="6" y="178" fill="#475569" fontSize="8" fontFamily="monospace">12</text>

                                        <text x="20" y="24" fill="#f43f5e" fontSize="8" fontFamily="monospace">&lt;!DOCTYPE html&gt;</text>
                                        <text x="20" y="38" fill="#f43f5e" fontSize="8" fontFamily="monospace">&lt;html <tspan fill="#38bdf8">lang="en"</tspan>&gt;</text>
                                        <text x="20" y="52" fill="#f43f5e" fontSize="8" fontFamily="monospace">&lt;head&gt;</text>
                                        <text x="28" y="66" fill="#38bdf8" fontSize="8" fontFamily="monospace">&lt;meta <tspan fill="#a855f7">charset="UTF-8"</tspan>&gt;</text>
                                        <text x="28" y="80" fill="#38bdf8" fontSize="8" fontFamily="monospace">&lt;meta <tspan fill="#a855f7">name="viewport"</tspan> <tspan fill="#38bdf8">content="width=device-width"</tspan>&gt;</text>
                                        <text x="28" y="94" fill="#38bdf8" fontSize="8" fontFamily="monospace">&lt;title&gt;<tspan fill="#ffffff">Web Development</tspan>&lt;/title&gt;</text>
                                        <text x="20" y="108" fill="#f43f5e" fontSize="8" fontFamily="monospace">&lt;/head&gt;</text>
                                        <text x="20" y="122" fill="#f43f5e" fontSize="8" fontFamily="monospace">&lt;body&gt;</text>
                                        <text x="28" y="136" fill="#f43f5e" fontSize="8" fontFamily="monospace">&lt;div <tspan fill="#38bdf8">class="hero"</tspan>&gt;</text>
                                        <text x="36" y="150" fill="#38bdf8" fontSize="8" fontFamily="monospace">&lt;h1&gt;<tspan fill="#ffffff">Web Solutions</tspan>&lt;/h1&gt;</text>
                                        <text x="36" y="164" fill="#38bdf8" fontSize="8" fontFamily="monospace">&lt;a <tspan fill="#a855f7">href="#"</tspan>&gt;Learn More&lt;/a&gt;</text>
                                        <text x="28" y="178" fill="#f43f5e" fontSize="8" fontFamily="monospace">&lt;/div&gt;</text>
                                    </g>
                                </g>
                            </svg>

                            {/* 4 Floating Glowing Neon Glass Cards */}
                            {/* 1. Code Card </> (Top-Left) */}
                            <div className="absolute top-10 left-2 sm:left-4 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-[#091747]/85 backdrop-blur-md border border-[#38bdf8]/40 shadow-[0_0_25px_rgba(56,189,248,0.35)] flex items-center justify-center text-[#38bdf8] transition-transform duration-500 hover:scale-110 animate-bounce-slow z-20">
                                <span className="font-mono text-lg sm:text-2xl font-bold tracking-tighter">&lt;/&gt;</span>
                            </div>

                            {/* 2. Gear Card (Mid-Right) */}
                            <div className="absolute top-36 right-2 sm:right-6 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-[#091747]/85 backdrop-blur-md border border-[#38bdf8]/40 shadow-[0_0_25px_rgba(56,189,248,0.35)] flex items-center justify-center text-[#38bdf8] transition-transform duration-500 hover:scale-110 animate-bounce-slow z-20" style={{ animationDelay: "1s" }}>
                                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>

                            {/* 3. Globe Card (Bottom-Left) */}
                            <div className="absolute bottom-20 left-0 sm:left-2 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-[#091747]/85 backdrop-blur-md border border-[#38bdf8]/40 shadow-[0_0_25px_rgba(56,189,248,0.35)] flex items-center justify-center text-[#38bdf8] transition-transform duration-500 hover:scale-110 animate-bounce-slow z-20" style={{ animationDelay: "1.8s" }}>
                                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10z" />
                                </svg>
                            </div>

                            {/* 4. Bar Chart Card (Bottom-Right) */}
                            <div className="absolute bottom-16 right-0 sm:right-4 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-[#091747]/85 backdrop-blur-md border border-[#38bdf8]/40 shadow-[0_0_25px_rgba(56,189,248,0.35)] flex items-center justify-center text-[#38bdf8] transition-transform duration-500 hover:scale-110 animate-bounce-slow z-20" style={{ animationDelay: "2.5s" }}>
                                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>

                        </div>
                    </div>

                    {/* Right Column (7 Cols): Title -> Single Paragraph -> 2 Badges in a Row */}
                    <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">

                        {/* 1. Title */}
                        <div>
                            <h1 data-animate="fade-up" className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-white leading-[1.18] tracking-tight m-0 font-sans">
                                {title}
                            </h1>
                            {/* Glowing Horizontal Line Accent under Title */}
                            <div className="w-16 h-1 bg-[#38bdf8] rounded-full shadow-[0_0_12px_#38bdf8] mt-3.5" />
                        </div>

                        {/* 2. Single Paragraph Under Title */}
                        <p data-animate="fade-up" className="text-gray-200 text-base sm:text-lg leading-relaxed font-sans font-normal m-0 max-w-2xl">
                            {renderFormattedDescription(description)}
                        </p>

                        {/* 3. Two Badges with Content in a Row (Clean, Box-Free) */}
                        <div data-animate="fade-up" className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                            
                            {/* Badge 1 */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1d4ed8] to-[#2563eb] border border-blue-400/30 text-white flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                                    {badge1?.icon || (
                                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    )}
                                </div>
                                <div>
                                    <h4 className="text-white font-extrabold text-sm sm:text-base leading-tight">
                                        {badge1?.title || "SEO & Performance Built-In"}
                                    </h4>
                                    <p className="text-blue-200/80 text-xs sm:text-sm mt-1 font-medium">
                                        {badge1?.description || "High Speed & Top Search Rankings"}
                                    </p>
                                </div>
                            </div>

                            {/* Badge 2 */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1d4ed8] to-[#2563eb] border border-blue-400/30 text-white flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                                    {badge2?.icon || (
                                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    )}
                                </div>
                                <div>
                                    <h4 className="text-white font-extrabold text-sm sm:text-base leading-tight">
                                        {badge2?.title || "Tailored For Business Growth"}
                                    </h4>
                                    <p className="text-blue-200/80 text-xs sm:text-sm mt-1 font-medium">
                                        {badge2?.description || "Custom Modern Web Solutions"}
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

            {/* Subtle Bottom Border */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent z-20" />
        </section>
    );
}
