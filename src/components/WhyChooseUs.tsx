"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const features = [
    {
        title: "Industry Experience",
        desc: "Years of experience across multiple industries enable us to understand unique business challenges and recommend practical solutions.",
        icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16.5 2.25h-9a2.25 2.25 0 00-2.25 2.25v15a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25z"
    },
    {
        title: "Customized for Scale",
        desc: "Every business is different. Our software is designed specifically around your workflows, goals, and future scalability.",
        icon: "M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.671zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-5.834L6.166 3.075m11.56 11.56l-1.591-1.591"
    },
    {
        title: "Modern Technologies",
        desc: "We leverage the latest development frameworks, cloud platforms, and automation tools.",
        icon: "M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
    },
    {
        title: "Agile Development",
        desc: "Faster delivery, continuous improvements, and greater flexibility throughout the lifecycle.",
        icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
    },
    {
        title: "Optimized for Mobile",
        desc: "Designed to run seamlessly across all devices, ensuring lightning-fast load times, responsive layouts, and intuitive user journeys on modern screens.",
        icon: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
    },
    {
        title: "Transparent Communication",
        desc: "Regular meetings, milestone reports, and progress tracking keep clients informed.",
        icon: "M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
    }
];

export default function WhyChooseUs() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".bento-card-reveal",
                { y: 60, opacity: 0, scale: 0.95 },
                {
                    y: 0, opacity: 1, scale: 1, duration: 1, stagger: 0.15, ease: "expo.out", scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                        toggleActions: "play none none none"
                    }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const renderMockup = (i: number) => {
        if (i === 0) {
            // TALL CARD: Crystal Sphere & Live Micro-Chart (Theme Adapted)
            return (
                <div className="relative flex-grow min-h-[220px] w-full overflow-hidden mt-6 rounded-2xl bg-slate-100/50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.05] flex flex-col items-center justify-center p-6 gap-6 z-10 group-hover:bg-slate-100 dark:group-hover:bg-white/[0.04] transition-colors duration-500">

                    {/* Glowing Crystal Sphere */}
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-200 via-blue-100 to-white dark:from-blue-400/40 dark:via-purple-400/30 dark:to-indigo-900/40 backdrop-blur-md border border-white/60 dark:border-white/30 shadow-[inset_0_0_20px_rgba(255,255,255,0.8),0_20px_40px_rgba(37,99,235,0.2)] dark:shadow-[inset_0_0_20px_rgba(255,255,255,0.6),0_20px_40px_rgba(37,99,235,0.3)] flex items-start justify-end p-2 animate-float relative z-10">
                        {/* Sphere Highlight */}
                        <div className="w-12 h-10 rounded-full bg-gradient-to-tr from-transparent to-white/90 dark:to-white/60 blur-[2px] -rotate-45" />
                        {/* Sphere Core Glow */}
                        <div className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-blue-400/50 blur-xl" />
                    </div>

                    {/* Floor Reflection for Sphere */}
                    <div className="w-20 h-4 bg-blue-500/10 dark:bg-blue-500/20 blur-xl rounded-full absolute top-[55%] animate-float" style={{ animationDelay: '0.1s' }} />

                    {/* Live Micro-Chart */}
                    <div className="w-full mt-auto relative z-10">
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-slate-500 dark:text-white/60 text-[11px] font-medium tracking-wider uppercase">Live micro-chart</span>
                            <span className="text-[#1A5CDD] dark:text-blue-300 text-[13px] font-bold">373,249</span>
                        </div>
                        <div className="h-16 w-full relative">
                            {/* SVG Chart Line */}
                            <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                                <path
                                    d="M 0 30 Q 15 10 30 25 T 60 15 T 85 30 T 100 5"
                                    fill="none"
                                    stroke="url(#blueGradient)"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    className="drop-shadow-[0_0_6px_rgba(26,92,221,0.5)]"
                                />
                                <defs>
                                    <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#1A5CDD" />
                                        <stop offset="100%" stopColor="#06b6d4" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            {/* X-Axis labels */}
                            <div className="absolute -bottom-4 inset-x-0 flex justify-between text-[9px] text-slate-400 dark:text-white/30 uppercase tracking-widest px-2">
                                <span>Min</span>
                                <span>Ho</span>
                                <span>Tin</span>
                                <span>eM</span>
                                <span>Aug</span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        if (i === 1) {
            // WIDE CARD 1: Floating Chrome Ring (Highlight Card Theme)
            return (
                <div className="relative flex-1 hidden sm:flex items-center justify-end min-h-[220px] overflow-hidden z-10 pr-6 group-hover:-translate-x-2 transition-transform duration-700">
                    <div className="absolute inset-0 bg-white/5 blur-[60px]" />

                    {/* Chrome Ring Component */}
                    <div className="absolute right-32 top-1/2 -translate-y-1/2 w-40 h-28 bg-white/10 border border-white/20 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-xl flex items-center justify-center gap-4 animate-float">
                        <div className="relative">
                            <div className="w-14 h-14 rounded-full border-[5px] border-transparent bg-clip-padding relative shadow-2xl"
                                style={{ background: 'linear-gradient(#1e40af, #1e40af) padding-box, linear-gradient(135deg, #ffffff, #94a3b8, #ffffff) border-box' }}>
                                <div className="absolute inset-0 rounded-full shadow-[inset_0_4px_10px_rgba(255,255,255,0.6),inset_0_-4px_10px_rgba(0,0,0,0.3)]" />
                            </div>
                            {/* Glow under ring */}
                            <div className="absolute -inset-2 bg-white/20 blur-xl rounded-full -z-10" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white text-[10px] tracking-widest font-bold uppercase leading-tight">Chrome<br />Ring</span>
                        </div>
                    </div>

                    {/* Small Status Card */}
                    <div className="absolute right-4 top-1/2 translate-y-4 w-32 h-24 bg-white/10 border border-white/20 rounded-xl shadow-2xl backdrop-blur-md p-3 flex flex-col justify-between animate-float-delayed">
                        <div className="flex justify-between items-center">
                            <span className="text-white/80 text-[9px] uppercase tracking-wider font-bold">System</span>
                            <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
                        </div>
                        <div className="space-y-1.5">
                            <div className="h-1.5 w-full bg-white/30 rounded-full" />
                            <div className="h-1.5 w-2/3 bg-white/40 rounded-full" />
                        </div>
                    </div>
                </div>
            );
        }
        if (i === 4) {
            // WIDE CARD 2: Progress Bar & Minimalist Dashboard
            return (
                <div className="relative flex-1 hidden sm:flex items-center justify-center min-h-[220px] overflow-hidden z-10 p-6 group-hover:-translate-y-2 transition-transform duration-700">
                    <div className="absolute inset-0 bg-blue-500/5 blur-[60px]" />
                    <div className="w-full max-w-sm flex flex-col gap-4">
                        {/* Progress Bar Widget */}
                        <div className="w-full p-4 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 backdrop-blur-md shadow-lg animate-float">
                            <div className="flex justify-between text-[10px] text-slate-500 dark:text-white/60 uppercase tracking-widest font-bold mb-3">
                                <span>Progress Bar</span>
                                <span className="text-[#1A5CDD] dark:text-white">100%</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-100 dark:bg-white/10 rounded-full relative overflow-hidden">
                                <div className="absolute left-0 top-0 h-full w-4/5 bg-gradient-to-r from-[#1A5CDD] to-cyan-400 rounded-full shadow-[0_0_12px_rgba(26,92,221,0.5)]" />
                            </div>
                        </div>

                        {/* Toggles & Icons */}
                        <div className="w-3/4 self-end flex gap-3 animate-float-delayed">
                            {/* Toggle Widget */}
                            <div className="flex-1 p-3 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 backdrop-blur-md shadow-lg flex flex-col gap-2">
                                <span className="text-[9px] text-slate-500 dark:text-white/50 uppercase tracking-widest font-bold">Navigation</span>
                                <div className="w-10 h-5 rounded-full bg-blue-50 dark:bg-blue-500/30 border border-blue-200 dark:border-blue-400/50 relative flex items-center p-0.5">
                                    <div className="w-4 h-4 rounded-full bg-[#1A5CDD] dark:bg-blue-300 shadow-[0_0_8px_rgba(26,92,221,0.5)] translate-x-5 transition-transform" />
                                </div>
                            </div>
                            {/* Icon Widget */}
                            <div className="flex-1 p-3 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 backdrop-blur-md shadow-lg flex justify-center items-center gap-3">
                                <div className="w-6 h-1 bg-slate-200 dark:bg-white/20 rounded-full" />
                                <div className="w-6 h-1 bg-[#1A5CDD] dark:bg-blue-400 shadow-[0_0_8px_rgba(26,92,221,0.5)] rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    };

    return (
        <section ref={sectionRef} className="py-24 bg-[#F0F8FF] dark:bg-[#080f25] relative overflow-hidden font-sans">
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-12px); }
                }
                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float { animation: float 6s ease-in-out infinite; }
                .animate-float-delayed { animation: float-delayed 7s ease-in-out 3s infinite; }
            `}</style>

            {/* Workspace Dot Pattern (Syscorp Theme) */}
            <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.15] dark:opacity-50 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 max-w-[1280px] relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-14 gap-6">
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 dark:bg-blue-500/10 dark:border-blue-500/20 rounded-full px-3 py-1 text-[11px] font-bold text-[#1A5CDD] dark:text-blue-400 w-fit uppercase tracking-wider mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] dark:bg-blue-400 inline-block animate-pulse" />
                            Syscorp Advantage
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
                            Deliver a Better User Experience with Powerful Features
                        </h2>
                    </div>
                    <p className="text-[15px] text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
                        Businesses choose Syscorp because we deliver more than software—we deliver value that boosts workflows and scales across all devices.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 grid-flow-dense">
                    {features.map((feat, idx) => {
                        const isTall = idx === 0;
                        const isWide = idx === 1 || idx === 4;
                        const isHighlight = idx === 1; // Highlight card for pop
                        const isSquare = !isTall && !isWide;

                        const gridClass = isTall ? "md:col-span-1 md:row-span-2"
                            : isWide ? "md:col-span-2 md:row-span-1"
                                : "md:col-span-1 md:row-span-1";

                        const cardBg = isHighlight
                            ? "bg-gradient-to-br from-[#1A5CDD] to-indigo-800 border-[#1A5CDD]/50 shadow-blue-900/20 text-white"
                            : "bg-white dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/80 dark:border-white/10 hover:border-blue-200 dark:hover:border-blue-500/30";

                        return (
                            <div key={idx} className={`bento-card-reveal group rounded-3xl ${cardBg} shadow-sm hover:shadow-[0_10px_40px_rgba(37,99,235,0.08)] transition-all duration-500 overflow-hidden relative flex ${gridClass} ${isWide ? 'flex-col sm:flex-row' : 'flex-col'}`}>

                                {/* Giant Watermark Icon for Square Cards */}
                                {isSquare && (
                                    <div className="absolute -bottom-8 -right-8 text-blue-600/[0.04] dark:text-white/[0.03] transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6 pointer-events-none">
                                        <svg className="w-48 h-48" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d={feat.icon} />
                                        </svg>
                                    </div>
                                )}

                                {/* Content Area */}
                                <div className={`p-6 lg:p-8 flex flex-col z-10 ${isWide ? 'sm:w-[45%] lg:w-[40%]' : 'w-full'} ${isTall ? 'h-full' : ''}`}>

                                    <div className={`flex-shrink-0 flex items-center justify-center rounded-2xl mb-6 w-14 h-14 transition-transform duration-500 group-hover:scale-110 ${isHighlight ? 'bg-white/10 text-white border border-white/20 shadow-inner' : 'bg-blue-50 dark:bg-blue-900/30 text-[#1A5CDD] dark:text-blue-400 border border-blue-100 dark:border-blue-500/20'}`}>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d={feat.icon} />
                                        </svg>
                                    </div>

                                    <h3 className={`text-[19px] font-bold mb-2 ${isHighlight ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                                        {feat.title}
                                    </h3>
                                    <p className={`text-[14px] leading-relaxed flex-grow ${isHighlight ? 'text-blue-100' : 'text-slate-600 dark:text-slate-400'}`}>
                                        {feat.desc}
                                    </p>

                                    {isTall && (
                                        <div className="mt-8 grid grid-cols-1 gap-3">
                                            {["Drag & drop editor", "No coding required", "Fully responsive", "Widgets included", "Fast performance"].map((item, i) => (
                                                <div key={i} className={`flex items-center gap-3 text-[13px] font-medium ${isHighlight ? 'text-white' : 'text-slate-600 dark:text-slate-300'}`}>
                                                    <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${isHighlight ? 'bg-white/20 text-white' : 'bg-blue-100 dark:bg-blue-500/20 text-[#1A5CDD] dark:text-blue-400'}`}>
                                                        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                                                    </div>
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Render Specific Mockups */}
                                {renderMockup(idx)}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
