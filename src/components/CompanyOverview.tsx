"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, Sparkles, MessageSquareQuote, Code2, Layers } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function CompanyOverview() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".ai-reveal",
                { y: 50, opacity: 0, scale: 0.95 },
                {
                    y: 0, opacity: 1, scale: 1, duration: 1, stagger: 0.1, ease: "power3.out", scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                        toggleActions: "play none none none"
                    }
                }
            );

            gsap.to(".ai-glow-pulse", {
                opacity: 0.6,
                scale: 1.15,
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative py-8 md:py-10 lg:py-12 bg-[#f8fafc] dark:bg-[#020617] overflow-hidden">
            {/* AI Neural Background Effects - Optimized for Light Theme */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-100/60 dark:bg-blue-600/20 blur-[120px] rounded-full ai-glow-pulse" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-100/50 dark:bg-purple-600/20 blur-[120px] rounded-full ai-glow-pulse" style={{ animationDelay: '1.2s' }} />

                {/* Abstract Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            </div>

            <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
                {/* Centralized Header */}
                <div className="text-center max-w-4xl mx-auto mb-6 md:mb-8 flex flex-col items-center">
                    <div className="ai-reveal inline-flex items-center gap-2 bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 backdrop-blur-md rounded-full px-5 py-2 text-[13px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-8 shadow-[0_4px_20px_rgba(59,130,246,0.05)] dark:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
                        <span>About Syscorp</span>
                    </div>

                    <h2 className="ai-reveal text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8">
                        Building Intelligent <br className="hidden md:block" /> Software Solutions for a <br className="md:hidden" />
                        <span className="text-[#2563eb] dark:text-[#3b82f6]">
                            Digital Future
                        </span>
                    </h2>

                    <p className="ai-reveal text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl">
                        At Syscorp, we believe technology should solve real business challenges, simplify operations, and create opportunities for sustainable growth. As a leading Software Company in Pondicherry, we help startups, SMEs, and enterprises transform their ideas into innovative digital solutions that deliver measurable results.
                    </p>
                </div>

                {/* Two Column Layout: Content & Image */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">

                    {/* Left Side: Content Stack */}
                    <div className="flex flex-col gap-10 h-full justify-center lg:pr-8 py-6">
                        
                        {/* Info 1 */}
                        <div className="ai-reveal flex flex-col gap-3">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                                    <Code2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-[22px] font-bold text-slate-900 dark:text-white tracking-tight">Technical Excellence</h3>
                            </div>
                            <p className="text-[16px] text-slate-600 dark:text-slate-400 leading-relaxed m-0 md:pl-16">
                                Our team combines technical expertise, creative thinking, and industry experience to build secure, scalable, and user-focused software applications. Whether you're launching a new product, modernizing an existing system, or automating business operations, we provide end-to-end software development services tailored to your business goals.
                            </p>
                        </div>

                        {/* Info 2 */}
                        <div className="ai-reveal flex flex-col gap-3">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                                    <Layers className="w-6 h-6" />
                                </div>
                                <h3 className="text-[22px] font-bold text-slate-900 dark:text-white tracking-tight">Comprehensive Solutions</h3>
                            </div>
                            <p className="text-[16px] text-slate-600 dark:text-slate-400 leading-relaxed m-0 md:pl-16">
                                From custom software and web development to mobile applications, cloud solutions, UI/UX design, and digital transformation consulting, Syscorp partners with businesses that want to innovate, grow, and stay ahead in today's competitive market.
                            </p>
                        </div>

                        {/* Quote */}
                        <div className="ai-reveal relative mt-8 md:ml-16">
                            <MessageSquareQuote className="absolute -top-6 -left-6 w-16 h-16 text-blue-500/15 dark:text-blue-400/15 shrink-0 transform -scale-x-100 pointer-events-none" />
                            <div className="relative z-10 pl-6 border-l-2 border-blue-500/30 dark:border-blue-400/30">
                                <p className="text-[19px] font-medium text-slate-800 dark:text-slate-200 leading-relaxed italic m-0">
                                    "We don't just build software; we build long-term partnerships based on trust, transparency, quality, and continuous innovation."
                                </p>
                            </div>
                        </div>
                        
                    </div>

                    {/* Right Side: Image Card */}
                    <div className="ai-reveal relative rounded-[2rem] overflow-hidden min-h-[500px] h-full bg-slate-900 dark:bg-[#030712] border border-slate-800 dark:border-white/10 group shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
                        <Image
                            src="/images/about/1.png"
                            alt="Digital Analytics Dashboard"
                            fill
                            className="object-cover opacity-90 dark:opacity-75 group-hover:scale-105 group-hover:rotate-1 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent dark:from-black/90 dark:via-black/20" />
                        
                        {/* Overlay subtle grain */}
                        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />

                        {/* Floating Element 1: User Success Card */}
                        <div className="absolute top-4 left-4 sm:top-auto sm:bottom-6 sm:left-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl flex items-center gap-3 sm:gap-4 transform translate-y-0 sm:translate-y-2 group-hover:translate-y-0 group-hover:rotate-[-2deg] transition-all duration-500 ease-out z-20">
                            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-[14px] bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                                <Zap className="w-4 h-4 sm:w-6 sm:h-6" />
                            </div>
                            <div>
                                <p className="text-[9px] sm:text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-none mb-1">Live Efficiency</p>
                                <p className="text-[14px] sm:text-[19px] font-black text-slate-900 dark:text-white leading-none tracking-tight">99.8% Perfect</p>
                            </div>
                        </div>

                        {/* Floating Tech Badge (Top Tier Tech Partner) */}
                        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 p-3 sm:p-4 bg-slate-900/90 dark:bg-black/80 backdrop-blur-xl border border-slate-700 dark:border-white/10 rounded-xl sm:rounded-2xl flex items-center gap-3 sm:gap-4 shadow-2xl transform translate-y-0 sm:translate-y-2 group-hover:translate-y-0 group-hover:rotate-[2deg] transition-all duration-500 ease-out delay-75 z-20">
                            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white relative shrink-0">
                                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                                <div className="absolute inset-0 rounded-full bg-blue-400/50 blur-md animate-pulse" />
                            </div>
                            <div>
                                <p className="text-[14px] sm:text-[18px] font-black text-white leading-none tracking-tight mb-1">Top Tier</p>
                                <p className="text-[9px] sm:text-[10px] font-bold text-blue-300 uppercase tracking-widest m-0">Tech Partner</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Inline styles for custom animations */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes scan {
                    0% { top: 0%; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient-x 5s ease infinite;
                }
                @keyframes gradient-x {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}} />
        </section>
    );
}
