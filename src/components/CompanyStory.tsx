"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lightbulb, TrendingUp, Code2, Award, Rocket } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function CompanyStory() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".timeline-line-fill",
                { height: 0 },
                {
                    height: "100%", ease: "none",
                    scrollTrigger: {
                        trigger: ".timeline-container",
                        start: "top 30%",
                        end: "bottom 70%",
                        scrub: 0.5
                    }
                }
            );

            gsap.fromTo(
                ".timeline-node",
                { scale: 0, opacity: 0 },
                {
                    scale: 1, opacity: 1, duration: 0.4, stagger: 0.08, ease: "back.out(2)",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                        toggleActions: "play none none none"
                    }
                }
            );

            gsap.fromTo(
                ".story-row",
                { y: 30, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out",
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

    return (
        <section ref={sectionRef} className="py-20 lg:py-24 relative overflow-hidden">
            {/* Soft background glows - NO grid lines */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-100/30 dark:bg-blue-900/10 blur-[130px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-100/20 dark:bg-purple-900/10 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 max-w-[1050px] relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16 flex flex-col items-center">
                    <span className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 rounded-full px-4 py-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 w-fit uppercase tracking-wider mb-4 shadow-[0_4px_15px_rgba(59,130,246,0.03)]">
                        The Beginning
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight m-0">
                        Our Company Story
                    </h2>
                </div>

                {/* Symmetrical Alternating Journey Timeline */}
                <div className="relative timeline-container">
                    
                    {/* Dotted Vertical Timeline Path Line - Perfectly Aligned and Centered */}
                    <div className="absolute left-1/2 top-6 bottom-6 w-[2px] -translate-x-1/2 hidden md:block">
                        {/* Background grey dotted line */}
                        <div className="absolute inset-0 border-l-2 border-dotted border-slate-300 dark:border-slate-700" />
                        {/* Scroll-triggered blue dotted line overlay */}
                        <div className="timeline-line-fill absolute top-0 left-0 w-full border-l-2 border-dotted border-[#1A5CDD] h-0 overflow-hidden" />
                    </div>

                    <div className="space-y-12 md:space-y-16 relative">
                        
                        {/* Row 1: Left Card, Center Node 1, Right Image */}
                        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center story-row">
                            {/* Card (Left Column) */}
                            <div className="w-full md:pr-4 flex justify-end">
                                <div className="w-full bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-white/5 rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_30px_rgba(26,92,221,0.05)] dark:hover:shadow-[0_12px_30px_rgba(26,92,221,0.12)] border-l-4 border-l-[#1A5CDD]/30 hover:border-l-[#1A5CDD] transition-all duration-300 text-left">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="md:hidden w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center text-[#1A5CDD] dark:text-blue-400">
                                            <Lightbulb className="w-5 h-5" />
                                        </div>
                                        <p className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-200 leading-relaxed m-0">
                                            Every successful business begins with a vision.
                                        </p>
                                    </div>
                                    <p className="text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed m-0">
                                        Syscorp was founded with a simple objective—to create innovative software solutions that help businesses embrace digital transformation with confidence.
                                    </p>
                                </div>
                            </div>

                            {/* Node 1 (Centered Symmetrical Circle using margin offsets to prevent GSAP overrides) */}
                            <div className="absolute left-1/2 top-1/2 -ml-[18px] -mt-[18px] w-9 h-9 rounded-full border-2 border-[#1A5CDD] bg-white dark:bg-slate-955 flex items-center justify-center text-sm font-extrabold text-[#1A5CDD] timeline-node shadow-md hidden md:flex z-10 hover:scale-110 transition-transform duration-300">
                                1
                            </div>

                            {/* Image (Right Column) */}
                            <div className="hidden md:flex justify-start pl-4">
                                <div className="relative w-full max-w-[340px] aspect-[16/10] rounded-2xl overflow-hidden border-4 border-white dark:border-slate-850 shadow-md hover:scale-103 hover:shadow-xl transition-all duration-500">
                                    <Image
                                        src="/images/about/2.png"
                                        alt="Creative vision brainstorming"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        {/* Row 2: Left Image, Center Node 2, Right Card */}
                        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center story-row">
                            {/* Image (Left Column) */}
                            <div className="hidden md:flex justify-end pr-4">
                                <div className="relative w-full max-w-[340px] aspect-[16/10] rounded-2xl overflow-hidden border-4 border-white dark:border-slate-850 shadow-md hover:scale-103 hover:shadow-xl transition-all duration-500">
                                    <Image
                                        src="/images/about/3.png"
                                        alt="Corporate analytics growth"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                                </div>
                            </div>

                            {/* Node 2 */}
                            <div className="absolute left-1/2 top-1/2 -ml-[18px] -mt-[18px] w-9 h-9 rounded-full border-2 border-[#1A5CDD] bg-white dark:bg-slate-955 flex items-center justify-center text-sm font-extrabold text-[#1A5CDD] timeline-node shadow-md hidden md:flex z-10 hover:scale-110 transition-transform duration-300">
                                2
                            </div>

                            {/* Card (Right Column) */}
                            <div className="w-full md:pl-4 flex justify-start">
                                <div className="w-full bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-white/5 rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_30px_rgba(26,92,221,0.05)] dark:hover:shadow-[0_12px_30px_rgba(26,92,221,0.12)] border-l-4 border-l-[#1A5CDD]/30 hover:border-l-[#1A5CDD] transition-all duration-300 text-left">
                                    <div className="flex items-center gap-3 mb-2.5 md:mb-0">
                                        <div className="md:hidden w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center text-[#1A5CDD] dark:text-blue-400">
                                            <TrendingUp className="w-5 h-5" />
                                        </div>
                                    </div>
                                    <p className="text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed m-0">
                                        Over the years, we have grown into a trusted Software Company in Pondicherry, serving clients across multiple industries with customized technology solutions. Our journey has been driven by continuous learning, technological innovation, and a passion for solving complex business problems.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Row 3: Left Card, Center Node 3, Right Image */}
                        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center story-row">
                            {/* Card (Left Column) */}
                            <div className="w-full md:pr-4 flex justify-end">
                                <div className="w-full bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-white/5 rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_30px_rgba(26,92,221,0.05)] dark:hover:shadow-[0_12px_30px_rgba(26,92,221,0.12)] border-l-4 border-l-[#1A5CDD]/30 hover:border-l-[#1A5CDD] transition-all duration-300 text-left">
                                    <div className="flex items-center gap-3 mb-2.5 md:mb-0">
                                        <div className="md:hidden w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center text-[#1A5CDD] dark:text-blue-400">
                                            <Code2 className="w-5 h-5" />
                                        </div>
                                    </div>
                                    <p className="text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed m-0">
                                        What started as a small team of dedicated developers has evolved into a multidisciplinary technology company comprising software engineers, UI/UX designers, cloud specialists, QA engineers, business analysts, and project managers working together to deliver exceptional digital experiences.
                                    </p>
                                </div>
                            </div>

                            {/* Node 3 */}
                            <div className="absolute left-1/2 top-1/2 -ml-[18px] -mt-[18px] w-9 h-9 rounded-full border-2 border-[#1A5CDD] bg-white dark:bg-slate-955 flex items-center justify-center text-sm font-extrabold text-[#1A5CDD] timeline-node shadow-md hidden md:flex z-10 hover:scale-110 transition-transform duration-300">
                                3
                            </div>

                            {/* Image (Right Column) */}
                            <div className="hidden md:flex justify-start pl-4">
                                <div className="relative w-full max-w-[340px] aspect-[16/10] rounded-2xl overflow-hidden border-4 border-white dark:border-slate-850 shadow-md hover:scale-103 hover:shadow-xl transition-all duration-500">
                                    <Image
                                        src="/images/about/4.png"
                                        alt="Software team collaboration"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        {/* Row 4: Left Image, Center Node 4, Right Card */}
                        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center story-row">
                            {/* Image (Left Column) */}
                            <div className="hidden md:flex justify-end pr-4">
                                <div className="relative w-full max-w-[340px] aspect-[16/10] rounded-2xl overflow-hidden border-4 border-white dark:border-slate-850 shadow-md hover:scale-103 hover:shadow-xl transition-all duration-500">
                                    <Image
                                        src="/images/about/5.png"
                                        alt="Digital interface engineering"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                                </div>
                            </div>

                            {/* Node 4 */}
                            <div className="absolute left-1/2 top-1/2 -ml-[18px] -mt-[18px] w-9 h-9 rounded-full border-2 border-[#1A5CDD] bg-white dark:bg-slate-955 flex items-center justify-center text-sm font-extrabold text-[#1A5CDD] timeline-node shadow-md hidden md:flex z-10 hover:scale-110 transition-transform duration-300">
                                4
                            </div>

                            {/* Card (Right Column) */}
                            <div className="w-full md:pl-4 flex justify-start">
                                <div className="w-full bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-white/5 rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_30px_rgba(26,92,221,0.05)] dark:hover:shadow-[0_12px_30px_rgba(26,92,221,0.12)] border-l-4 border-l-[#1A5CDD]/30 hover:border-l-[#1A5CDD] transition-all duration-300 text-left">
                                    <div className="flex items-center gap-3 mb-2.5 md:mb-0">
                                        <div className="md:hidden w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center text-[#1A5CDD] dark:text-blue-400">
                                            <Award className="w-5 h-5" />
                                        </div>
                                    </div>
                                    <p className="text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed m-0">
                                        Every project we undertake strengthens our belief that technology should not only meet business requirements but also create lasting value for customers and end users.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Row 5: Left Card, Center Node 5, Right Image */}
                        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center story-row">
                            {/* Card (Left Column) */}
                            <div className="w-full md:pr-4 flex justify-end">
                                <div className="w-full bg-gradient-to-r from-blue-500 to-[#1A5CDD] rounded-2xl p-[1px] shadow-lg hover:scale-[1.005] transition-all duration-300">
                                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 text-left">
                                        <div className="flex items-center gap-3 mb-2.5 md:mb-0">
                                            <div className="md:hidden w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center text-[#1A5CDD] dark:text-blue-400">
                                                <Rocket className="w-5 h-5" />
                                            </div>
                                        </div>
                                        <p className="font-semibold text-slate-800 dark:text-white leading-relaxed text-[16px] md:text-[17px] m-0">
                                            Today, Syscorp continues to expand its capabilities while maintaining the same commitment to quality, reliability, and customer satisfaction that shaped our foundation.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Node 5 */}
                            <div className="absolute left-1/2 top-1/2 -ml-[18px] -mt-[18px] w-9 h-9 rounded-full border-2 border-[#1A5CDD] bg-white dark:bg-slate-955 flex items-center justify-center text-sm font-extrabold text-[#1A5CDD] timeline-node shadow-md hidden md:flex z-10 hover:scale-110 transition-transform duration-300">
                                5
                            </div>

                            {/* Image (Right Column) */}
                            <div className="hidden md:flex justify-start pl-4">
                                <div className="relative w-full max-w-[340px] aspect-[16/10] rounded-2xl overflow-hidden border-4 border-white dark:border-slate-850 shadow-md hover:scale-103 hover:shadow-xl transition-all duration-500">
                                    <Image
                                        src="/images/about/6.png"
                                        alt="Sleek future tech facility"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
