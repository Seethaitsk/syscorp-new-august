"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, Target, Layout, Code, ShieldCheck, Rocket, Wrench } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const processSteps = [
    {
        num: "01",
        title: "Discovery & Consultation",
        desc: "We begin by understanding your business objectives, challenges, target audience, and technical requirements.",
        icon: Search
    },
    {
        num: "02",
        title: "Planning & Strategy",
        desc: "Our experts prepare detailed project roadmaps, technology recommendations, timelines, and development strategies.",
        icon: Target
    },
    {
        num: "03",
        title: "UI/UX Design",
        desc: "We design intuitive, user-friendly interfaces that improve engagement and deliver seamless digital experiences.",
        icon: Layout
    },
    {
        num: "04",
        title: "Development",
        desc: "Our experienced developers build secure, scalable, and high-performance applications using modern technologies and coding standards.",
        icon: Code
    },
    {
        num: "05",
        title: "Quality Assurance",
        desc: "Every feature undergoes rigorous functional testing, performance testing, usability testing, and security validation.",
        icon: ShieldCheck
    },
    {
        num: "06",
        title: "Deployment",
        desc: "After successful testing, we deploy the application smoothly with minimal downtime and maximum reliability.",
        icon: Rocket
    },
    {
        num: "07",
        title: "Maintenance & Support",
        desc: "Our relationship doesn't end after launch. We provide ongoing support, updates, security improvements, and feature enhancements to ensure long-term success.",
        icon: Wrench
    }
];

export default function ProcessSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".pipeline-card",
                { opacity: 0, y: 30, scale: 0.95 },
                {
                    opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.2)",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                        toggleActions: "play none none none"
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const getGridPosition = (index: number) => {
        // Row 1: Left to Right
        if (index === 0) return "lg:col-start-1 lg:row-start-1";
        if (index === 1) return "lg:col-start-2 lg:row-start-1";
        if (index === 2) return "lg:col-start-3 lg:row-start-1";
        if (index === 3) return "lg:col-start-4 lg:row-start-1";
        // Row 2: Right to Left
        if (index === 4) return "lg:col-start-4 lg:row-start-2";
        if (index === 5) return "lg:col-start-3 lg:row-start-2";
        if (index === 6) return "lg:col-start-2 lg:row-start-2";
        return "";
    };

    const renderConnector = (index: number) => {
        // Horizontal Right (0 to 1, 1 to 2, 2 to 3)
        if (index >= 0 && index < 3) {
            return (
                <div className="hidden lg:block absolute top-1/2 -right-8 w-8 h-[3px] z-0 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                    <div className="w-full h-full bg-gradient-to-r from-blue-600 to-cyan-400 animate-flow-right"></div>
                </div>
            );
        }
        // Vertical Down (3 to 4)
        if (index === 3) {
            return (
                <div className="hidden lg:block absolute -bottom-8 left-1/2 -translate-x-1/2 w-[3px] h-8 z-0 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                    <div className="w-full h-full bg-gradient-to-b from-blue-600 to-cyan-400 animate-flow-down"></div>
                </div>
            );
        }
        // Horizontal Left (4 to 5, 5 to 6)
        if (index > 3 && index < 6) {
            return (
                <div className="hidden lg:block absolute top-1/2 -left-8 w-8 h-[3px] z-0 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                    <div className="w-full h-full bg-gradient-to-l from-cyan-400 to-blue-600 animate-flow-left"></div>
                </div>
            );
        }
        return null;
    };

    return (
        <section ref={sectionRef} className="py-8 md:py-10 lg:py-12 bg-white dark:bg-[#040814] relative overflow-hidden font-sans">
            <style>{`
                @keyframes flowRight {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                @keyframes flowLeft {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                }
                @keyframes flowDown {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(100%); }
                }
                .animate-flow-right { animation: flowRight 1.5s linear infinite; }
                .animate-flow-left { animation: flowLeft 1.5s linear infinite; }
                .animate-flow-down { animation: flowDown 1.5s linear infinite; }
            `}</style>

            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-6 lg:mb-8">
                    <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 dark:bg-blue-500/10 dark:border-blue-500/20 rounded-full px-3 py-1.5 text-[11px] font-bold text-[#1A5CDD] dark:text-blue-400 w-fit uppercase tracking-wider mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] dark:bg-blue-400 animate-pulse" />
                        Our Methodology
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                        A Structured Pipeline for <br className="hidden md:block"/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Guaranteed Success</span>
                    </h2>
                </div>

                {/* DESKTOP PIPELINE (lg and up) */}
                <div className="hidden lg:grid grid-cols-4 gap-8 relative">
                    {processSteps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className={`relative pipeline-card ${getGridPosition(index)}`}>
                                {/* Connector Line */}
                                {renderConnector(index)}
                                
                                {/* Process Card */}
                                <div className="relative z-10 h-full bg-white dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-[28px] p-7 flex flex-col group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] dark:hover:shadow-[0_20px_40px_rgba(37,99,235,0.15)] hover:border-blue-300 dark:hover:border-blue-500/40 transition-all duration-300">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm border border-slate-100 dark:border-slate-700">
                                            <Icon size={26} strokeWidth={1.5} />
                                        </div>
                                        <span className="text-5xl font-black text-slate-100 dark:text-white/5 group-hover:text-blue-50 dark:group-hover:text-blue-900/40 transition-colors duration-300 select-none">
                                            {step.num}
                                        </span>
                                    </div>
                                    <h3 className="text-[17px] font-extrabold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-[13.5px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* MOBILE/TABLET VERTICAL TIMELINE */}
                <div className="lg:hidden flex flex-col gap-8 relative max-w-xl mx-auto">
                    <div className="absolute top-4 bottom-4 left-6 md:left-8 w-[2px] bg-gradient-to-b from-blue-600 via-cyan-400 to-blue-600 rounded-full opacity-30"></div>
                    
                    {processSteps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="relative pl-16 md:pl-24 pipeline-card">
                                {/* Dot Indicator */}
                                <div className="absolute left-6 md:left-8 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-[3px] border-blue-500 shadow-[0_0_12px_rgba(37,99,235,0.6)] z-10"></div>
                                
                                {/* Process Card */}
                                <div className="bg-white dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-3xl p-6 flex flex-col group shadow-sm hover:border-blue-300 dark:hover:border-blue-500/40 transition-all">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                            <Icon size={24} strokeWidth={1.5} />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[11px] font-bold text-blue-500 uppercase tracking-widest">Step {step.num}</span>
                                            <h3 className="text-[16px] font-extrabold text-slate-900 dark:text-white">
                                                {step.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <p className="text-[14px] text-slate-500 dark:text-slate-400 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}

