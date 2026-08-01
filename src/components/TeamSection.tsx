"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const roles = [
    "Software Developers",
    "Full Stack Engineers",
    "Front-End Developers",
    "Back-End Developers",
    "Mobile App Developers",
    "UI/UX Designers",
    "Quality Assurance Engineers",
    "DevOps Engineers",
    "Cloud Specialists",
    "Business Analysts",
    "SEO & Digital Marketing Experts",
    "Project Managers"
];

export default function TeamSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".team-pill-reveal",
                { y: 30, opacity: 0, scale: 0.8 },
                {
                    y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.08, ease: "back.out(1.7)", scrollTrigger: {
                        trigger: ".team-roles-container",
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );

            gsap.fromTo(
                ".team-text-reveal",
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                }
            );
            
            // Subtle floating animation for the background glows
            gsap.to(".bg-glow-team", {
                y: "random(-20, 20)",
                x: "random(-20, 20)",
                scale: "random(0.9, 1.1)",
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 0.5
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-[#F0F8FF] dark:bg-[#080f25] relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-[100px] bg-glow-team pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[100px] bg-glow-team pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-[1000px] relative z-10 text-center">
                
                <div className="team-text-reveal mb-14">
                    <span className="inline-flex items-center gap-2 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 shadow-sm rounded-full px-5 py-2 text-xs font-bold text-blue-600 dark:text-blue-400 w-fit uppercase tracking-widest mb-6 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 shadow-[0_0_8px_rgba(37,99,235,0.8)] animate-pulse" />
                        Our Experts
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-[52px] font-extrabold text-slate-900 dark:text-white leading-tight mb-6 tracking-tight">
                        Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Team</span>
                    </h2>
                    <p className="text-[17px] text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto font-medium">
                        Behind every successful project is a team of passionate professionals committed to excellence. Our multidisciplinary team includes:
                    </p>
                </div>

                {/* Grid of Roles */}
                <div className="team-roles-container flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-5 mb-16 max-w-[900px] mx-auto">
                    {roles.map((role, idx) => (
                        <div key={idx} className="team-pill-reveal relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                            <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-6 py-3.5 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_15px_rgba(0,0,0,0.2)] group-hover:border-blue-500/30 dark:group-hover:border-blue-500/50 group-hover:-translate-y-1 transition-all duration-300 backdrop-blur-xl">
                                <span className="text-[14.5px] font-bold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                    {role}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary Box */}
                <div className="team-text-reveal relative mx-auto max-w-[850px]">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-[2rem] blur-xl transform scale-95 opacity-50"></div>
                    <div className="relative space-y-6 text-[16px] md:text-[17px] text-slate-700 dark:text-slate-300 leading-relaxed bg-white/70 dark:bg-slate-900/60 p-10 md:p-12 rounded-[2rem] border border-white dark:border-slate-800 shadow-xl backdrop-blur-xl">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20 rounded-t-[2rem]"></div>
                        <p className="font-medium">
                            Each member brings specialized expertise while working collaboratively to ensure every project is delivered on time, within budget, and according to the highest quality standards.
                        </p>
                        <div className="w-12 h-[1px] bg-slate-300 dark:bg-slate-700 mx-auto"></div>
                        <p className="font-extrabold text-slate-900 dark:text-white text-lg">
                            We believe people are our greatest strength, and their dedication enables us to consistently exceed client expectations.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
