"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const valuesData = [
    {
        title: "Customer First",
        desc: "Every solution begins with understanding our clients' business goals. We prioritize customer success by delivering software that creates measurable business impact.",
        icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
        color: "blue"
    },
    {
        title: "Innovation",
        desc: "Technology evolves rapidly, and so do we. Our team continuously explores modern frameworks, cloud technologies, AI-powered solutions, and automation tools to deliver future-ready applications.",
        icon: "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.82 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.496 1.508 1.333 1.508 2.316V18",
        color: "cyan"
    },
    {
        title: "Quality",
        desc: "Quality is never compromised. Every product undergoes comprehensive testing, performance optimization, and security validation before deployment.",
        icon: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z",
        color: "blue"
    },
    {
        title: "Transparency",
        desc: "Open communication builds trust. We maintain complete transparency throughout every stage of development, keeping clients informed with regular updates and project milestones.",
        icon: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
        color: "cyan"
    },
    {
        title: "Collaboration",
        desc: "Great products are built through teamwork. We encourage collaboration among developers, designers, testers, and clients to ensure successful project outcomes.",
        icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.007.03c.01.03.02.06.03.09m0 0H16.5m3-3h-3m1.372-1.372a3 3 0 11-3.692-3.692 3 3 0 013.692 3.692zM6.628 15.688a9 9 0 10-2.525-4.179m0 0L3.198 12.5a3 3 0 004.682 2.72m-.94-3.198l.007-.03c.01-.03.02-.06.03-.09m0 0H7.5m-3 3h3",
        color: "blue"
    },
    {
        title: "Continuous Learning",
        desc: "Our professionals continuously upgrade their technical skills to stay aligned with evolving technologies, frameworks, and industry best practices.",
        icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
        color: "cyan"
    }
];

export default function CoreValues() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".value-card-reveal",
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power2.out", scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 dark:bg-blue-500/10 dark:border-blue-500/20 rounded-full px-4 py-1.5 text-xs font-bold text-[#1A5CDD] dark:text-blue-400 w-fit uppercase tracking-wider mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] dark:bg-blue-400 inline-block animate-pulse" />
                        Our Core Values
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
                        Guiding Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Decision</span>
                    </h2>
                    <p className="text-[16px] text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        At Syscorp, our values guide every decision, project, and partnership.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {valuesData.map((val, idx) => (
                        <div key={idx} className="value-card-reveal group relative p-8 rounded-3xl border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/30 hover:bg-white dark:hover:bg-slate-900/80 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-500/5 dark:to-blue-400/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300"></div>
                            
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${
                                val.color === 'blue' 
                                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                                : 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400'
                            }`}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d={val.icon} />
                                </svg>
                            </div>

                            <h3 className="text-[19px] font-bold text-slate-900 dark:text-white mb-3">
                                {val.title}
                            </h3>
                            <p className="text-[14.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                                {val.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
