"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function MissionVisionSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [activeTab, setActiveTab] = useState<"mission" | "vision">("mission");

    useEffect(() => {
        if (typeof window === "undefined") return;
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".mv-image-main",
                { x: -50, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                        toggleActions: "play none none none"
                    }
                }
            );

            gsap.fromTo(
                ".mv-image-overlap",
                { y: 50, opacity: 0, scale: 0.8 },
                {
                    y: 0, opacity: 1, scale: 1, duration: 0.8, delay: 0.3, ease: "back.out(1.2)", scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                        toggleActions: "play none none none"
                    }
                }
            );

            gsap.fromTo(
                ".mv-content-reveal",
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out", scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                        toggleActions: "play none none none"
                    }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    // Animate tab content change
    useEffect(() => {
        if (contentRef.current) {
            gsap.fromTo(
                contentRef.current,
                { opacity: 0, y: 15 },
                { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
            );
        }
    }, [activeTab]);

    return (
        <section ref={sectionRef} className="py-16 md:py-24 lg:py-32 bg-[#F0F8FF] dark:bg-[#080f25] relative overflow-hidden">
            {/* Soft background glows to match other home page sections */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-100/40 dark:bg-blue-900/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-purple-100/20 dark:bg-purple-900/10 blur-[100px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
                {/* Mobile-only "Our Purpose" badge */}
                <div className="mv-content-reveal lg:hidden mb-8 flex justify-center">
                    <span className="inline-flex items-center gap-2 bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 rounded-full px-4 py-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 w-fit uppercase tracking-wider">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Our Purpose
                    </span>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 sm:gap-16 xl:gap-20 items-center">
                    
                    {/* Left Side: Composite Image Layout */}
                    <div className="w-full lg:w-1/2 relative h-[320px] sm:h-[450px] lg:h-[550px]">
                        {/* Dotted Pattern Decor (Top Left) */}
                        <div className="absolute -top-6 -left-6 w-24 h-24 sm:-top-8 sm:-left-8 sm:w-32 sm:h-32 opacity-20 dark:opacity-40" 
                             style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 2px, transparent 2.5px)', backgroundSize: '16px 16px' }}>
                        </div>

                        {/* Main Large Image */}
                        <div className="mv-image-main absolute top-0 left-4 right-10 bottom-12 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500">
                            <Image 
                                src={activeTab === "mission" 
                                    ? "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                                    : "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"} 
                                alt={activeTab === "mission" ? "Team collaborating" : "Business strategy"}
                                fill
                                className="object-cover transition-all duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply dark:bg-slate-900/40"></div>
                            
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 dark:bg-slate-900/90 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-xl hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Overlapping Smaller Image (Bottom Right) */}
                        <div className="mv-image-overlap absolute bottom-0 right-0 w-[50%] h-[45%] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 sm:border-8 border-white dark:border-[#080f25] z-10 transition-all duration-500">
                            <Image 
                                src={activeTab === "mission"
                                    ? "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400"
                                    : "https://images.unsplash.com/photo-1519389953887-29504d1528c3?auto=format&fit=crop&q=80&w=400"} 
                                alt={activeTab === "mission" ? "Advanced technology" : "Digital future"}
                                fill
                                className="object-cover transition-all duration-700 hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Right Side: Tab Navigation & Content */}
                    <div className="w-full lg:w-1/2 flex flex-col">
                        
                        {/* Desktop-only "Our Purpose" badge */}
                        <div className="mv-content-reveal hidden lg:block">
                            <span className="inline-flex items-center gap-2 bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 rounded-full px-4 py-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 w-fit uppercase tracking-wider mb-6">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                Our Purpose
                            </span>
                        </div>
                        
                        <div className="mv-content-reveal">
                            {/* Custom Tab Navigation Bar */}
                            <div className="flex bg-slate-100 dark:bg-slate-900 rounded-full p-1.5 mb-8 w-full sm:w-fit border border-slate-200 dark:border-white/5">
                                <button 
                                    onClick={() => setActiveTab("mission")}
                                    className={`flex-1 sm:flex-initial px-4 sm:px-6 py-2.5 rounded-full text-sm sm:text-[15px] font-bold text-center transition-all duration-300 ${
                                        activeTab === "mission" 
                                        ? "bg-white dark:bg-[#080f25] text-blue-600 dark:text-blue-400 shadow-sm" 
                                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                                    }`}
                                >
                                    Our Mission
                                </button>
                                <button 
                                    onClick={() => setActiveTab("vision")}
                                    className={`flex-1 sm:flex-initial px-4 sm:px-6 py-2.5 rounded-full text-sm sm:text-[15px] font-bold text-center transition-all duration-300 ${
                                        activeTab === "vision" 
                                        ? "bg-white dark:bg-[#080f25] text-blue-600 dark:text-blue-400 shadow-sm" 
                                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                                    }`}
                                >
                                    Our Vision
                                </button>
                            </div>
                        </div>

                        {/* Full Content Area with Transition */}
                        <div ref={contentRef} className="mv-content-reveal min-h-[220px]">
                            {activeTab === "mission" ? (
                                <div className="space-y-5 text-slate-700 dark:text-slate-300 text-[15px] sm:text-[16px] leading-relaxed">
                                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
                                        Empowering Businesses with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Innovation</span>
                                    </h3>
                                    <p>
                                        Our mission is to empower businesses with innovative, scalable, and reliable software solutions that simplify operations, improve efficiency, and accelerate growth.
                                    </p>
                                    <p>
                                        We strive to build technology that solves real-world challenges while delivering exceptional user experiences, high performance, and long-term business value.
                                    </p>
                                    <p>
                                        Through collaboration, innovation, and continuous improvement, we help organizations confidently navigate the evolving digital landscape.
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-5 text-slate-700 dark:text-slate-300 text-[15px] sm:text-[16px] leading-relaxed">
                                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
                                        Shaping the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Digital Transformation</span>
                                    </h3>
                                    <p>
                                        Our vision is to become the most trusted Software Company in Pondicherry and a globally recognized technology partner known for delivering intelligent digital solutions that transform businesses.
                                    </p>
                                    <p>
                                        We envision a future where businesses of every size can leverage advanced technologies to improve productivity, enhance customer experiences, and achieve sustainable growth.
                                    </p>
                                    <p>
                                        By embracing innovation and emerging technologies, we aim to shape the future of digital transformation across industries worldwide.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Circular Stats remaining underneath */}
                        <div className="mv-content-reveal flex flex-wrap items-center gap-6 sm:gap-10 mt-10 pt-8 border-t border-slate-200 dark:border-white/10">
                            <div className="flex items-center gap-4">
                                <div className="relative w-14 h-14 flex items-center justify-center rounded-full border-4 border-blue-100 dark:border-blue-900/30">
                                    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 36 36">
                                        <path className="text-blue-600 dark:text-blue-400" strokeDasharray="99, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"/>
                                    </svg>
                                    <span className="text-xs font-bold text-slate-800 dark:text-white">99%</span>
                                </div>
                                <div>
                                    <p className="text-[13px] font-bold text-slate-900 dark:text-white leading-tight">Client<br/>Satisfaction</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="relative w-14 h-14 flex items-center justify-center rounded-full border-4 border-cyan-100 dark:border-cyan-900/30">
                                    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 36 36">
                                        <path className="text-cyan-500 dark:text-cyan-400" strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"/>
                                    </svg>
                                    <span className="text-xs font-bold text-slate-800 dark:text-white">100%</span>
                                </div>
                                <div>
                                    <p className="text-[13px] font-bold text-slate-900 dark:text-white leading-tight">Reliable<br/>Support</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
