"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, Network, Zap, Sparkles, MessageSquareQuote } from "lucide-react";

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
        <section ref={sectionRef} className="relative py-32 bg-[#f8fafc] dark:bg-[#020617] overflow-hidden">
            {/* AI Neural Background Effects - Optimized for Light Theme */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-100/60 dark:bg-blue-600/20 blur-[120px] rounded-full ai-glow-pulse" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-100/50 dark:bg-purple-600/20 blur-[120px] rounded-full ai-glow-pulse" style={{ animationDelay: '1.2s' }} />
                
                {/* Abstract Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            </div>

            <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
                {/* Centralized Header */}
                <div className="text-center max-w-4xl mx-auto mb-20 flex flex-col items-center">
                    <div className="ai-reveal inline-flex items-center gap-2 bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 backdrop-blur-md rounded-full px-5 py-2 text-[13px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-8 shadow-[0_4px_20px_rgba(59,130,246,0.05)] dark:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
                        <span>About Syscorp</span>
                    </div>
                    
                    <h2 className="ai-reveal text-5xl md:text-6xl lg:text-[72px] font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8">
                        Building Intelligent <br className="hidden md:block" /> Software Solutions for a <br className="md:hidden" />
                        <span className="text-[#2563eb] dark:text-[#3b82f6]">
                            Digital Future
                        </span>
                    </h2>
                    
                    <p className="ai-reveal text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl">
                        At Syscorp, we believe technology should solve real business challenges, simplify operations, and create opportunities for sustainable growth. As a leading Software Company in Pondicherry, we help startups, SMEs, and enterprises transform their ideas into innovative digital solutions that deliver measurable results.
                    </p>
                </div>

                {/* Unique AI Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* Left Column: Data Processing (Info 1) */}
                    <div className="md:col-span-1 flex flex-col gap-6">
                        <div className="ai-reveal group relative h-full bg-white dark:bg-white/[0.02] border border-slate-100 dark:border-white/10 rounded-[2rem] p-8 overflow-hidden hover:bg-slate-50/50 dark:hover:bg-white/[0.04] transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)]">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 dark:from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-500/20 border border-blue-100 dark:border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <Network className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Ecosystem Transformation</h3>
                                <p className="text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed m-0">
                                    Our team combines technical expertise, creative thinking, and industry experience to build secure, scalable, and user-focused software applications. Whether you're launching a new product, modernizing an existing system, or automating business operations, we provide end-to-end software development services tailored to your business goals.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Center Column: Core UI Experience / Product Flow Mockup */}
                    <div className="md:col-span-2 ai-reveal relative rounded-[2rem] overflow-hidden min-h-[440px] md:min-h-[480px] bg-slate-900 dark:bg-[#030712] border border-slate-200/50 dark:border-white/10 group shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                        <Image
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
                            alt="Digital Analytics Dashboard"
                            fill
                            className="object-cover opacity-85 dark:opacity-70 group-hover:scale-[1.02] transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        
                        {/* Scanning Laser Line */}
                        <div className="absolute left-0 right-0 h-[2px] bg-blue-500/80 shadow-[0_0_15px_rgba(59,130,246,0.8)] animate-[scan_4s_ease-in-out_infinite]" />

                        {/* Overlapping Floating Element 1: Active Code Snippet Mockup */}
                        <div className="absolute top-6 left-6 p-4 rounded-xl bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border border-slate-200/50 dark:border-white/5 shadow-[0_10px_25px_rgba(0,0,0,0.05)] max-w-[200px] hidden sm:block transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                            <div className="flex items-center gap-1.5 mb-2.5">
                                <span className="w-2 h-2 rounded-full bg-red-400" />
                                <span className="w-2 h-2 rounded-full bg-yellow-400" />
                                <span className="w-2 h-2 rounded-full bg-green-400" />
                                <span className="text-[9px] font-mono text-slate-400 dark:text-slate-500 ml-1">AI_Engine.py</span>
                            </div>
                            <pre className="text-[10px] font-mono text-slate-600 dark:text-slate-300 leading-tight">
                                <code>{`def optimize_flow():\n  predict = model(data)\n  return predict.solve()`}</code>
                            </pre>
                        </div>

                        {/* Overlapping Floating Element 2: User Success Card */}
                        <div className="absolute bottom-6 left-6 p-4 rounded-xl bg-white/95 dark:bg-slate-950/95 border border-slate-200/50 dark:border-white/5 shadow-xl flex items-center gap-3.5 transform translate-y-1 hover:translate-y-0 transition-transform duration-300">
                            <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                                <Zap className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest leading-none mb-1">Live Efficiency</p>
                                <p className="text-base font-extrabold text-slate-900 dark:text-white leading-none">99.8% Perfect</p>
                            </div>
                        </div>

                        {/* Floating Tech Badge (Top Tier Tech Partner) */}
                        <div className="absolute bottom-6 right-6 bg-slate-900/90 dark:bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-4 flex items-center gap-4 shadow-2xl">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white relative shrink-0">
                                <Sparkles className="w-4 h-4 relative z-10" />
                                <div className="absolute inset-0 rounded-full bg-blue-400/50 blur-sm animate-pulse" />
                            </div>
                            <div>
                                <p className="text-[16px] font-extrabold text-white leading-none mb-1">Top Tier</p>
                                <p className="text-[9px] font-bold text-blue-400 uppercase tracking-widest m-0">Tech Partner</p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Left: Info 2 */}
                    <div className="md:col-span-2 ai-reveal bg-white dark:bg-white/[0.02] border border-slate-100 dark:border-white/10 rounded-[2rem] p-8 md:p-10 hover:bg-slate-50/50 dark:hover:bg-white/[0.04] transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)]">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-500/20 border border-purple-100 dark:border-purple-500/30 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                                <Cpu className="w-7 h-7" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">End-to-End Solutions</h3>
                                <p className="text-[15.5px] text-slate-600 dark:text-slate-400 leading-relaxed m-0">
                                    From custom software and web development to mobile applications, cloud solutions, UI/UX design, and digital transformation consulting, Syscorp partners with businesses that want to innovate, grow, and stay ahead in today's competitive market.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Right: Quote */}
                    <div className="md:col-span-1 ai-reveal relative bg-gradient-to-br from-blue-50/80 to-purple-50/70 dark:from-blue-900/40 dark:to-purple-900/40 border border-blue-100 dark:border-blue-500/30 rounded-[2rem] p-8 overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                        <MessageSquareQuote className="absolute -bottom-4 -right-4 w-32 h-32 text-blue-600/5 dark:text-blue-500/10 group-hover:scale-110 transition-transform duration-700" />
                        
                        <div className="relative z-10 h-full flex flex-col justify-center">
                            <p className="text-xl font-semibold text-slate-800 dark:text-white leading-relaxed italic">
                                "We don't just build software—we build long-term partnerships based on trust, transparency, quality, and continuous innovation."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Inline styles for custom animations */}
            <style dangerouslySetInnerHTML={{__html: `
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
