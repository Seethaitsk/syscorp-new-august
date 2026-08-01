"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const expertiseData = [
    {
        title: "Web Development",
        desc: "We develop responsive, secure, and scalable web applications that establish a strong digital presence. From custom enterprise portals to high-performance e-commerce platforms, our solutions are designed to deliver exceptional user experiences, speed, and seamless scalability.",
        services: ["Custom Web Applications", "Enterprise Portals", "E-commerce Solutions", "Progressive Web Apps"],
        icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    },
    {
        title: "Mobile Development",
        desc: "We build intuitive Android, iOS, and cross-platform applications that deliver seamless performance across all devices. Our secure, scalable, and user-friendly mobile solutions improve customer engagement and streamline operations in today's mobile-first world.",
        services: ["Android Applications", "iOS Applications", "Cross-Platform Apps", "Hybrid Mobile Solutions"],
        icon: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
    },
    {
        title: "Cloud Solutions",
        desc: "We provide secure, scalable cloud solutions that improve business agility and efficiency. From migration and infrastructure management to DevOps automation and performance optimization, our cloud services help modern businesses scale with reliability.",
        services: ["Cloud Migration", "Cloud Infrastructure", "DevOps Automation", "Performance Optimization"],
        icon: "M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
    },
    {
        title: "UI/UX Design",
        desc: "We design intuitive and visually engaging digital experiences that enhance user satisfaction and strengthen your brand. Through user research, wireframing, and interactive prototyping, we create user-centric solutions that improve usability.",
        services: ["User Research", "Wireframing", "Interactive Prototyping", "User Experience Design", "Graphic Design"],
        icon: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.879-6.879a1.5 1.5 0 10-2.606-1.5l-3.879 6.879a15.998 15.998 0 00-4.648 4.764z"
    },
    {
        title: "Digital Marketing",
        desc: "Our digital marketing solutions help businesses increase online visibility, attract qualified leads, and build a strong brand. We combine SEO, social media, and performance-driven strategies to improve brand awareness and generate measurable growth.",
        services: ["Search Engine Optimization (SEO)", "Social Media Marketing", "Content Marketing", "Performance Marketing"],
        icon: "M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
    }
];

export default function TechExpertise() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".expertise-card-reveal",
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out", scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const scrollNext = () => {
        if (sliderRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
            if (scrollLeft + clientWidth >= scrollWidth - 10) {
                sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                sliderRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
            }
        }
    };

    const scrollPrev = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -sliderRef.current.clientWidth, behavior: 'smooth' });
        }
    };

    // Autoplay functionality
    useEffect(() => {
        const interval = setInterval(() => {
            scrollNext();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section ref={sectionRef} className="py-16 md:py-24 bg-slate-50/50 dark:bg-[#070e20] relative overflow-hidden border-t border-slate-200 dark:border-white/5">
            <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
                <div className="text-center mb-10 md:mb-16">
                    <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 dark:bg-blue-500/10 dark:border-blue-500/20 rounded-full px-4 py-1.5 text-xs font-bold text-[#1A5CDD] dark:text-blue-400 w-fit uppercase tracking-wider mb-4 md:mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] dark:bg-blue-400 inline-block animate-pulse" />
                        Our Services
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
                        Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Expertise</span>
                    </h2>
                    <p className="text-[15px] sm:text-[16px] text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        As an innovative Software Company in Pondicherry, we work with modern technologies to build scalable and secure digital products.
                    </p>
                </div>

                <div className="relative group/slider">
                    {/* Navigation Buttons (Hidden on mobile, visible on tablet/desktop) */}
                    <button onClick={scrollPrev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-20 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.1)] dark:shadow-[0_5px_15px_rgba(0,0,0,0.4)] border border-slate-200 dark:border-slate-700 items-center justify-center text-slate-800 dark:text-white transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:scale-110 hidden md:flex">
                        <ChevronLeft size={24} />
                    </button>
                    <button onClick={scrollNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-20 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.1)] dark:shadow-[0_5px_15px_rgba(0,0,0,0.4)] border border-slate-200 dark:border-slate-700 items-center justify-center text-slate-800 dark:text-white transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:scale-110 hidden md:flex">
                        <ChevronRight size={24} />
                    </button>

                    {/* Horizontal Slider */}
                    <div ref={sliderRef} className="flex items-start md:items-stretch overflow-x-auto gap-6 md:gap-8 lg:gap-10 snap-x snap-mandatory hide-scrollbar pb-8 pt-4 px-2 -mx-2">
                        {expertiseData.map((tech, idx) => (
                            <div key={idx} className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(50%-1.25rem)] snap-start md:even:snap-none expertise-card-reveal glass-card-light dark:glass-card-dark p-6 md:p-10 rounded-3xl group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex-shrink-0">
                                <div className="absolute top-0 right-0 p-4 md:p-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                                    <svg className="w-24 h-24 md:w-32 md:h-32 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d={tech.icon} />
                                    </svg>
                                </div>
                                
                                <div className="relative z-10">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 md:mb-6 shadow-sm border border-blue-200 dark:border-blue-800/50">
                                        <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d={tech.icon} />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4">
                                        {tech.title}
                                    </h3>
                                    <p className="text-[14px] md:text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed mb-4 md:mb-6">
                                        {tech.desc}
                                    </p>
                                    
                                    <div>
                                        <h4 className="text-[12px] md:text-[13px] font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 md:mb-4 border-b border-slate-200 dark:border-white/10 pb-2">
                                            Services
                                        </h4>
                                        <ul className="space-y-2.5 md:space-y-3">
                                            {tech.services.map((service, sidx) => (
                                                <li key={sidx} className="flex items-start gap-2.5 md:gap-3">
                                                    <svg className="w-4.5 h-4.5 md:w-5 md:h-5 text-blue-500 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                    </svg>
                                                    <span className="text-[13.5px] md:text-[14.5px] font-semibold text-slate-700 dark:text-slate-300">
                                                        {service}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="expertise-card-reveal mt-4 md:mt-6 text-center bg-blue-50/50 dark:bg-slate-900/50 border border-blue-100 dark:border-white/5 rounded-2xl p-6 md:p-8">
                    <p className="text-[15px] md:text-[16px] font-bold text-slate-800 dark:text-slate-200 m-0">
                        Our technology stack is continuously updated to ensure clients receive secure, high-performance, and future-proof software solutions.
                    </p>
                </div>
            </div>
            
            <style dangerouslySetInnerHTML={{__html: `
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}} />
        </section>
    );
}
