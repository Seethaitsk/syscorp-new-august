"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Globe, Code, Cpu, Layers, Zap, Shield, ArrowRight, CheckCircle2,
    Smartphone, ShoppingCart, Server, ArrowUpRight, Sparkles, TrendingUp,
    Database, Terminal, BarChart3, ChevronDown, Check, Activity, Lock, ExternalLink
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderBanner from "@/components/ui/HeaderBanner";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function WebsiteDevelopmentPage() {
    const mainRef = useRef<HTMLDivElement>(null);
    const orbitRef = useRef<HTMLDivElement>(null);
    const hoverImgContainerRef = useRef<HTMLDivElement>(null);

    // Active tab state for Advanced Architecture Matrix (Website Workflow)
    const [activeTab, setActiveTab] = useState<"wireframe" | "development" | "hosting">("wireframe");

    // Accordion state
    const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

    // Floating cursor preview image state
    const [activeHoverImg, setActiveHoverImg] = useState<string | null>(null);

    // Tech Integrations
    const integrationLogos = [
        { name: "Next.js 15", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "React 19", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Amazon AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
    ];

    // Portfolio Showcase Items matching 2026 Minimalist Model
    const portfolioProjects = [
        {
            id: 1,
            title: "Crafting Visual Digital Stories",
            tags: ["Automation", "DevOps", "UX Design"],
            img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=75&w=450&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Transforming Concepts Into Reality",
            tags: ["Automation", "AWS", "Python", "UX Design"],
            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=75&w=450&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "Showcasing My Best Work",
            tags: ["AWS", "Blockchain", "DevOps", "Flutter"],
            img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=75&w=450&auto=format&fit=crop"
        },
        {
            id: 4,
            title: "Interactive AI Content Platform",
            tags: ["OpenAI API", "WebSockets", "GSAP"],
            img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=75&w=450&auto=format&fit=crop"
        }
    ];

    // Process Accordion Items
    const processItems = [
        {
            title: "01. Strategy, Architecture & Specs",
            desc: "We analyze your enterprise needs, outline system architecture schemas, and define performance target KPIs before writing code."
        },
        {
            title: "02. Wireframing & Responsive UI/UX",
            desc: "Crafting user-friendly Figma design systems with fluid micro-interactions, dark/light modes, and pixel-perfect responsiveness."
        },
        {
            title: "03. Agile Full-Stack Engineering",
            desc: "Building clean, typed Next.js and TypeScript codebases backed by secure REST/GraphQL microservices and automated CI/CD."
        },
        {
            title: "04. Rigorous QA & Core Web Vitals Audit",
            desc: "Testing edge case security protocols, cross-browser compatibility, and sub-second page rendering benchmarks."
        },
        {
            title: "05. Global Deployment & Continuous SLA Support",
            desc: "Zero-downtime edge releases on AWS/Vercel with ongoing performance monitoring and maintenance guarantees."
        }
    ];

    // Mouse follow effect for 3D Tilted Portfolio Hover Images
    const handlePortfolioMouseMove = (e: React.MouseEvent) => {
        if (hoverImgContainerRef.current) {
            gsap.to(hoverImgContainerRef.current, {
                x: e.clientX - 130,
                y: e.clientY - 150,
                rotate: -5,
                duration: 0.35,
                ease: "power2.out",
            });
        }
    };

    const handlePortfolioMouseEnter = (imgUrl: string) => {
        setActiveHoverImg(imgUrl);
        if (hoverImgContainerRef.current) {
            gsap.to(hoverImgContainerRef.current, {
                opacity: 1,
                scale: 1,
                rotate: -6,
                duration: 0.3,
                ease: "back.out(1.5)"
            });
        }
    };

    const handlePortfolioMouseLeave = () => {
        if (hoverImgContainerRef.current) {
            gsap.to(hoverImgContainerRef.current, {
                opacity: 0,
                scale: 0.7,
                rotate: 0,
                duration: 0.25,
                ease: "power2.in"
            });
        }
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Orbital continuous rotation
            // 4-Ring Concentric Dotted Orbital continuous rotation
            if (orbitRef.current) {
                // Ring 1 (Outermost - Clockwise)
                gsap.to(".orbit-ring-1", { rotate: 360, duration: 40, repeat: -1, ease: "none" });
                gsap.to(".orbit-icon-1", { rotate: -360, duration: 40, repeat: -1, ease: "none" });

                // Ring 2 (Counter-Clockwise)
                gsap.to(".orbit-ring-2", { rotate: -360, duration: 32, repeat: -1, ease: "none" });
                gsap.to(".orbit-icon-2", { rotate: 360, duration: 32, repeat: -1, ease: "none" });

                // Ring 3 (Clockwise)
                gsap.to(".orbit-ring-3", { rotate: 360, duration: 24, repeat: -1, ease: "none" });
                gsap.to(".orbit-icon-3", { rotate: -360, duration: 24, repeat: -1, ease: "none" });

                // Ring 4 (Innermost - Counter-Clockwise)
                gsap.to(".orbit-ring-4", { rotate: -360, duration: 16, repeat: -1, ease: "none" });
                gsap.to(".orbit-icon-4", { rotate: 360, duration: 16, repeat: -1, ease: "none" });
            }

            // ScrollTrigger reveal animations for Bento Cards
            gsap.fromTo(
                ".gsap-bento-card",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.18,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".gsap-bento-section",
                        start: "top 80%",
                    }
                }
            );

            // ScrollTrigger for Integration section
            gsap.fromTo(
                ".gsap-orbit-box",
                { scale: 0.85, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: "back.out(1.4)",
                    scrollTrigger: {
                        trigger: ".gsap-integration-section",
                        start: "top 75%",
                    }
                }
            );

            // Portfolio Row Entrance
            gsap.fromTo(
                ".gsap-portfolio-row",
                { x: -30, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".gsap-portfolio-section",
                        start: "top 80%",
                    }
                }
            );
        }, mainRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={mainRef} className="bg-white min-h-screen overflow-x-hidden font-sans">
            {/* FLOATING CURSOR HOVER PREVIEW IMAGE (3D TILT MOCKUP) */}
            <div 
                ref={hoverImgContainerRef}
                className="fixed top-0 left-0 w-64 h-72 sm:w-72 sm:h-80 rounded-2xl overflow-hidden border border-white/20 shadow-[0_30px_70px_rgba(0,0,0,0.6)] pointer-events-none z-[9999] opacity-0 scale-75 bg-[#0b132b] p-3 backdrop-blur-xl"
            >
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                    {activeHoverImg && (
                        <Image
                            src={activeHoverImg}
                            alt="Project Preview"
                            fill
                            className="object-cover"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
            </div>

            {/* Header Banner */}
            <HeaderBanner
                title={
                    <>
                        Enterprise <span className="text-[#38bdf8] font-serif italic font-normal">Website Development</span> & Engineering.
                    </>
                }
                description="We craft high-performance, secure, and fully customized web platforms that accelerate conversion, dominate SEO rankings, and scale seamlessly."
            />

            {/* SECTION 1: Bento Grid "Why Choose Syscorp" (Deep Navy & Royal Blue Theme) */}
            <section className="py-20 lg:py-28 bg-[#F0F8FF]/60 gsap-bento-section">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center max-w-3xl mx-auto mb-16" data-animate="fade-up">
                        <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 rounded-full px-3.5 py-1 text-xs font-bold text-[#1A5CDD] uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] inline-block animate-pulse" />
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#011146] mt-4 tracking-tight">
                            Why Syscorp Web Engineering
                        </h2>
                        <p className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed">
                            Combining aesthetic perfection with server-side speed and bulletproof security to drive measurable growth.
                        </p>
                    </div>

                    {/* Bento Layout Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                        {/* Left Card (Deep Navy Glass Card) */}
                        <div className="lg:col-span-6 bg-[#011146] border border-[#1A5CDD]/30 rounded-[32px] p-8 md:p-10 flex flex-col justify-between text-white group hover:shadow-[0_20px_50px_rgba(26,92,221,0.25)] hover:border-[#1A5CDD] transition-all duration-300 gsap-bento-card relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#1A5CDD]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

                            <div className="relative z-10">
                                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#38bdf8] bg-white/10 px-3 py-1 rounded-full inline-block mb-4">
                                    Conversion Architecture
                                </span>
                                <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-4">
                                    Lead & Conversion Architecture
                                </h3>
                                <p className="text-slate-300 text-base leading-relaxed mb-6">
                                    Bring in quality business leads, nurture prospects with fluid interactive UI, and turn visits into happy, paying customers with optimized checkout funnels and sub-second load speeds.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 text-sm font-extrabold text-[#38bdf8] hover:text-white transition-colors"
                                >
                                    Explore Solution <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            {/* Dashboard Graphic Container */}
                            <div className="mt-8 relative h-64 md:h-72 w-full rounded-2xl overflow-hidden bg-white/10 backdrop-blur border border-white/15 p-2 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
                                <Image
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=75&w=500&auto=format&fit=crop"
                                    alt="Analytics Dashboard"
                                    fill
                                    className="object-cover rounded-xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#011146]/70 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 bg-[#011146]/90 backdrop-blur border border-white/20 p-3.5 rounded-xl flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-[#1A5CDD] text-white flex items-center justify-center font-bold text-xs">
                                            99%
                                        </div>
                                        <div>
                                            <p className="text-xs font-extrabold text-white">Conversion Velocity</p>
                                            <p className="text-[10px] text-blue-200">Automated funnel tracking</p>
                                        </div>
                                    </div>
                                    <span className="text-xs font-bold text-[#38bdf8] bg-white/10 px-2.5 py-1 rounded-md">Live</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Stack (2 Cards - Syscorp Theme) */}
                        <div className="lg:col-span-6 flex flex-col gap-8">
                            {/* Card 2: Royal Blue Accent (AI Systems) */}
                            <div className="bg-white border border-[#1A5CDD]/15 rounded-[32px] p-8 flex flex-col sm:flex-row items-center gap-6 group hover:shadow-[0_20px_50px_rgba(26,92,221,0.08)] hover:border-[#1A5CDD] transition-all duration-300 gsap-bento-card">
                                <div className="flex-1">
                                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#1A5CDD] bg-[#1A5CDD]/10 px-3 py-1 rounded-full inline-block mb-3">
                                        Smart Systems
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-extrabold text-[#011146] tracking-tight mb-2">
                                        Artificial Intelligence Integration
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                        Embed LLM workflows, automated customer chatbots, and predictive user data processing seamlessly into your web application.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 text-sm font-extrabold text-[#1A5CDD] hover:text-[#011146] transition-colors"
                                    >
                                        Explore AI Services <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                                <div className="w-full sm:w-44 h-36 relative rounded-2xl overflow-hidden shadow-md flex-shrink-0 border border-slate-100">
                                    <Image
                                        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=75&w=400&auto=format&fit=crop"
                                        alt="AI Web Systems"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            {/* Card 3: Deep Ice Blue (Collaborate With Team) */}
                            <div className="bg-[#F0F8FF] border border-[#1A5CDD]/20 rounded-[32px] p-8 flex flex-col sm:flex-row items-center gap-6 group hover:shadow-[0_20px_50px_rgba(26,92,221,0.08)] hover:border-[#1A5CDD] transition-all duration-300 gsap-bento-card">
                                <div className="flex-1">
                                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#011146] bg-[#011146]/10 px-3 py-1 rounded-full inline-block mb-3">
                                        Dedicated Engineers
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-extrabold text-[#011146] tracking-tight mb-2">
                                        Collaborate With Our Engineering Team
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                        Direct access to senior full-stack developers, UI designers, and QA leads with transparent daily sprint tracking.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 text-sm font-extrabold text-[#1A5CDD] hover:text-[#011146] transition-colors"
                                    >
                                        Meet The Team <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                                <div className="w-full sm:w-44 h-36 relative rounded-2xl overflow-hidden shadow-md flex-shrink-0 border border-slate-200">
                                    <Image
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=75&w=400&auto=format&fit=crop"
                                        alt="Collaborate With Engineering Team"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: 4-Ring Concentric Dotted Orbital Ecosystem ("Syscorp Core Stack") */}
            <section className="py-24 lg:py-32 bg-white relative overflow-hidden gsap-integration-section">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Left Orbital Stack Graphic (4 Concentric Dotted Rings) */}
                        <div className="w-full lg:w-1/2 flex justify-center gsap-orbit-box" ref={orbitRef}>
                            <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] flex items-center justify-center">
                                {/* Ring 1: Outermost Dotted Circle (440px) */}
                                <div className="orbit-ring-1 absolute w-[300px] h-[300px] sm:w-[440px] sm:h-[440px] rounded-full border-2 border-dashed border-[#1A5CDD]/20 flex items-center justify-center">
                                    {/* Traveling Glowing Scroll Dots on Ring 1 Line */}
                                    <div className="absolute top-1/4 left-1 w-3 h-3 rounded-full bg-[#38bdf8] shadow-[0_0_12px_#38bdf8] animate-pulse z-20" />
                                    <div className="absolute bottom-1/4 right-1 w-3 h-3 rounded-full bg-[#1A5CDD] shadow-[0_0_12px_#1A5CDD] z-20" />

                                    {/* Photoshop Icon (Top) */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-11 h-11 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center p-2 z-20">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" alt="Photoshop" className="orbit-icon-1 w-full h-full object-contain" />
                                    </div>
                                    {/* Adobe Illustrator / AI Icon (Right) */}
                                    <div className="absolute top-1/2 right-0 translate-x-4 -translate-y-1/2 w-11 h-11 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center p-2 z-20">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" alt="Adobe AI" className="orbit-icon-1 w-full h-full object-contain" />
                                    </div>
                                    {/* Python Icon (Bottom) */}
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 w-11 h-11 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center p-2 z-20">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="orbit-icon-1 w-full h-full object-contain" />
                                    </div>
                                    {/* Docker Icon (Left) */}
                                    <div className="absolute top-1/2 left-0 -translate-x-4 -translate-y-1/2 w-11 h-11 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center p-2 z-20">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="orbit-icon-1 w-full h-full object-contain" />
                                    </div>
                                </div>

                                {/* Ring 2: Second Dotted Circle (360px) */}
                                <div className="orbit-ring-2 absolute w-[240px] h-[240px] sm:w-[360px] sm:h-[360px] rounded-full border-2 border-dashed border-[#1A5CDD]/35 flex items-center justify-center">
                                    {/* Traveling Glowing Scroll Dots on Ring 2 Line */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1.5 w-2.5 h-2.5 rounded-full bg-[#1A5CDD] shadow-[0_0_10px_#1A5CDD] animate-ping z-20" />
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1.5 w-2.5 h-2.5 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8] z-20" />

                                    {/* Laravel Icon (Top Right) */}
                                    <div className="absolute top-6 right-6 w-11 h-11 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center p-2 z-20">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" alt="Laravel" className="orbit-icon-2 w-full h-full object-contain" />
                                    </div>
                                    {/* Node.js Icon (Bottom Right) */}
                                    <div className="absolute bottom-6 right-6 w-11 h-11 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center p-2 z-20">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="orbit-icon-2 w-full h-full object-contain" />
                                    </div>
                                    {/* PostgreSQL Icon (Bottom Left) */}
                                    <div className="absolute bottom-6 left-6 w-11 h-11 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center p-2 z-20">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="orbit-icon-2 w-full h-full object-contain" />
                                    </div>
                                    {/* AWS Icon (Top Left) */}
                                    <div className="absolute top-6 left-6 w-11 h-11 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center p-2 z-20">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" className="orbit-icon-2 w-full h-full object-contain" />
                                    </div>
                                </div>

                                {/* Ring 3: Third Dotted Circle (280px) */}
                                <div className="orbit-ring-3 absolute w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] rounded-full border-2 border-dashed border-[#1A5CDD]/50 flex items-center justify-center">
                                    {/* React Icon (Top) */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3.5 w-10 h-10 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center p-2 z-20">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="orbit-icon-3 w-full h-full object-contain" />
                                    </div>
                                    {/* Next.js Icon (Bottom) */}
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-3.5 w-10 h-10 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center p-2 z-20">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="orbit-icon-3 w-full h-full object-contain" />
                                    </div>
                                    {/* Figma Icon (Right) */}
                                    <div className="absolute top-1/2 right-0 translate-x-3.5 -translate-y-1/2 w-10 h-10 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center p-2 z-20">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="orbit-icon-3 w-full h-full object-contain" />
                                    </div>
                                </div>

                                {/* Ring 4: Innermost Dotted Circle (200px) */}
                                <div className="orbit-ring-4 absolute w-[130px] h-[130px] sm:w-[200px] sm:h-[200px] rounded-full border-2 border-dashed border-[#1A5CDD]/70 flex items-center justify-center">
                                    {/* TypeScript Icon (Top Right) */}
                                    <div className="absolute top-2 right-2 w-9 h-9 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center p-1.5 z-20">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="orbit-icon-4 w-full h-full object-contain" />
                                    </div>
                                    {/* Tailwind Icon (Bottom Left) */}
                                    <div className="absolute bottom-2 left-2 w-9 h-9 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center p-1.5 z-20">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" className="orbit-icon-4 w-full h-full object-contain" />
                                    </div>
                                </div>

                                {/* Center Brand Hub */}
                                <div className="w-26 h-26 sm:w-32 sm:h-32 rounded-3xl  text-white flex flex-col items-center justify-center  z-30 border border-white/20 p-4 scale-120 transition-transform duration-300">
                                    <Image
                                        src="/images/logo/logo.svg"
                                        alt="Syscorp Logo"
                                        width={120}
                                        height={50}
                                        className="w-auto h-8 sm:h-11 object-contain drop-shadow-md"
                                    />

                                </div>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="w-full lg:w-1/2">
                            <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 rounded-full px-3.5 py-1 text-xs font-bold text-[#1A5CDD] uppercase tracking-wider mb-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] inline-block animate-pulse" />
                                Stack Ecosystem & Integrations <ArrowRight size={14} />
                            </span>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-[#011146] tracking-tight leading-tight">
                                Integrated with <span className="text-[#1A5CDD]">Syscorp Core Stack</span> & Modern Frameworks
                            </h2>
                            <p className="mt-6 text-slate-600 text-base md:text-lg leading-relaxed">
                                Seamlessly connecting Laravel backends, Node.js APIs, React & Next.js frontends, along with Adobe Creative Cloud design assets into a unified enterprise web platform.
                            </p>
                            <p className="mt-4 text-slate-600 text-base leading-relaxed">
                                Connect payment providers, headless CMSs, user authentication systems, and analytics platforms into a single cohesive ecosystem.
                            </p>
                            <div className="mt-8">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 bg-[#011146] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#1A5CDD] transition-all shadow-lg shadow-blue-900/10"
                                >
                                    Browse All Stack Integrations
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: ADVANCED INTERACTIVE ARCHITECTURE MATRIX (WEBSITE WORKFLOW & ADVANTAGES) */}
            <section className="py-20 lg:py-28 bg-[#011146] text-white relative">
                <div className="container mx-auto px-6 max-w-6xl relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-xs uppercase font-extrabold tracking-widest text-[#38bdf8] bg-white/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
                            End-to-End Delivery Flow
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
                            From Responsive Wireframes To Global Hosting
                        </h2>
                        <p className="mt-4 text-slate-300 text-base md:text-lg">
                            Explore how we engineering your website through every milestone for maximum speed, security, and conversion growth.
                        </p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex justify-center mb-12">
                        <div className="bg-white/10 backdrop-blur p-1.5 rounded-2xl border border-white/15 flex flex-wrap gap-2">
                            <button
                                onClick={() => setActiveTab("wireframe")}
                                className={`px-6 py-3 rounded-xl text-xs md:text-sm font-extrabold transition-all ${activeTab === "wireframe"
                                        ? "bg-[#1A5CDD] text-white shadow-lg shadow-blue-600/30"
                                        : "text-slate-300 hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                🎨 1. Wireframe & UI/UX
                            </button>
                            <button
                                onClick={() => setActiveTab("development")}
                                className={`px-6 py-3 rounded-xl text-xs md:text-sm font-extrabold transition-all ${activeTab === "development"
                                        ? "bg-[#1A5CDD] text-white shadow-lg shadow-blue-600/30"
                                        : "text-slate-300 hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                💻 2. Full-Stack Development
                            </button>
                            <button
                                onClick={() => setActiveTab("hosting")}
                                className={`px-6 py-3 rounded-xl text-xs md:text-sm font-extrabold transition-all ${activeTab === "hosting"
                                        ? "bg-[#1A5CDD] text-white shadow-lg shadow-blue-600/30"
                                        : "text-slate-300 hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                🚀 3. Managed Edge Hosting
                            </button>
                        </div>
                    </div>

                    {/* Tab Content Display */}
                    <div className="bg-white/5 border border-white/15 rounded-[32px] p-8 md:p-12 backdrop-blur">
                        {activeTab === "wireframe" && (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-extrabold text-white">Pixel-Perfect Responsive Wireframing</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        We design high-converting Figma wireframes, interactive mobile prototypes, and comprehensive design systems tailored to your brand identity before writing code.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                                            <p className="text-[10px] uppercase font-bold text-slate-400">Responsiveness</p>
                                            <p className="text-2xl font-extrabold text-emerald-400">100% Fluid</p>
                                        </div>
                                        <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                                            <p className="text-[10px] uppercase font-bold text-slate-400">Design System</p>
                                            <p className="text-2xl font-extrabold text-[#38bdf8]">Atomic Tokens</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#0b0f19] border border-white/10 rounded-2xl p-5 font-mono text-xs text-blue-200">
                                    <span className="text-slate-500">// Figma & UX Design Tokens</span><br />
                                    <span className="text-purple-400">const</span> layoutSpec = &#123;<br />
                                    &nbsp;&nbsp;grid: <span className="text-yellow-200">'12-Column Fluid Breakpoints'</span>,<br />
                                    &nbsp;&nbsp;typography: <span className="text-yellow-200">'clamp(1rem, 2.5vw, 3rem)'</span>,<br />
                                    &nbsp;&nbsp;microInteractions: <span className="text-emerald-400">'GSAP 60fps Physics'</span><br />
                                    &#125;;
                                </div>
                            </div>
                        )}

                        {activeTab === "development" && (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-extrabold text-white">Enterprise Full-Stack Web Development</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        Building clean, typed Next.js 15 and TypeScript codebases backed by secure REST/GraphQL microservices, automated CI/CD pipelines, and 100/100 Core Web Vitals performance.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                                            <p className="text-[10px] uppercase font-bold text-slate-400">Lighthouse Score</p>
                                            <p className="text-2xl font-extrabold text-emerald-400">100 / 100</p>
                                        </div>
                                        <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                                            <p className="text-[10px] uppercase font-bold text-slate-400">Type Safety</p>
                                            <p className="text-2xl font-extrabold text-[#38bdf8]">Strict TypeScript</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#0b0f19] border border-white/10 rounded-2xl p-5 font-mono text-xs text-emerald-300">
                                    <span className="text-slate-500">// Next.js App Router Action</span><br />
                                    <span className="text-purple-400">export async function</span> <span className="text-yellow-300">submitLead</span>(data) &#123;<br />
                                    &nbsp;&nbsp;<span className="text-purple-400">const</span> valid = leadSchema.parse(data);<br />
                                    &nbsp;&nbsp;<span className="text-purple-400">const</span> res = <span className="text-purple-400">await</span> api.post(<span className="text-yellow-200">'/leads'</span>, valid);<br />
                                    &nbsp;&nbsp;<span className="text-purple-400">return</span> &#123; status: <span className="text-emerald-400">200</span>, id: res.id &#125;;<br />
                                    &#125;
                                </div>
                            </div>
                        )}

                        {activeTab === "hosting" && (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-extrabold text-white">Global Edge Deployment & Hosting SLAs</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        Deployed across 300+ Edge POP locations globally with automated SSL certificate renewal, DDoS protection, daily backups, and 99.99% uptime guarantees.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                                            <p className="text-[10px] uppercase font-bold text-slate-400">Uptime SLA</p>
                                            <p className="text-2xl font-extrabold text-emerald-400">99.99% Guaranteed</p>
                                        </div>
                                        <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                                            <p className="text-[10px] uppercase font-bold text-slate-400">Global Regions</p>
                                            <p className="text-2xl font-extrabold text-[#38bdf8]">300+ Edge POPs</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#0b0f19] border border-white/10 rounded-2xl p-5 font-mono text-xs text-cyan-300">
                                    <span className="text-slate-500">// Global Edge CDN & SSL Config</span><br />
                                    <span className="text-purple-400">export const</span> runtime = <span className="text-yellow-200">'edge'</span>;<br /><br />
                                    <span className="text-purple-400">export default function</span> <span className="text-yellow-300">middleware</span>(req) &#123;<br />
                                    &nbsp;&nbsp;<span className="text-purple-400">const</span> res = NextResponse.next();<br />
                                    &nbsp;&nbsp;res.headers.set(<span className="text-yellow-200">'Strict-Transport-Security'</span>, <span className="text-yellow-200">'max-age=63072000'</span>);<br />
                                    &nbsp;&nbsp;<span className="text-purple-400">return</span> res;<br />
                                    &#125;
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* SECTION 4: Interactive Portfolio Showcase (2026 Minimalist Reference Model) */}
            <section className="py-24 lg:py-32 bg-[#011146] text-white gsap-portfolio-section relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-6xl">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6">
                        <div>
                            <span className="inline-block border border-white/20 text-slate-200 px-4 py-1 rounded-full text-xs font-semibold tracking-wider mb-6">
                                Portfolio
                            </span>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-xl">
                                Showcasing How We Help Businesses Grow
                            </h2>
                        </div>

                        <div className="flex flex-col items-start md:items-end gap-3">
                            <span className="text-xs text-slate-300 font-normal">Tools that empower your growth</span>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-[1px] bg-white/30" />
                                <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-[#38bdf8] transition-colors">
                                    View More <ArrowUpRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Minimalist Border-Separated Project Rows */}
                    <div className="border-t border-white/15" onMouseMove={handlePortfolioMouseMove}>
                        {portfolioProjects.map((project) => (
                            <div
                                key={project.id}
                                onMouseEnter={() => handlePortfolioMouseEnter(project.img)}
                                onMouseLeave={handlePortfolioMouseLeave}
                                className="group py-8 md:py-10 border-b border-white/15 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors duration-300 cursor-pointer gsap-portfolio-row"
                            >
                                {/* Left Title */}
                                <h3 className="text-2xl md:text-3xl font-extrabold text-white group-hover:text-[#38bdf8] transition-colors max-w-lg leading-snug">
                                    {project.title}
                                </h3>

                                {/* Right Tags & Circular Arrow */}
                                <div className="flex items-center gap-4 flex-wrap md:flex-nowrap">
                                    <div className="flex flex-wrap items-center gap-2">
                                        {project.tags.map((tag, tIdx) => (
                                            <span
                                                key={tIdx}
                                                className="text-xs text-slate-300 border border-white/20 px-4 py-1.5 rounded-full group-hover:border-[#38bdf8] group-hover:text-white transition-all"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Circular Arrow Button */}
                                    <Link
                                        href="/contact"
                                        className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-[#38bdf8] group-hover:text-[#011146] group-hover:border-[#38bdf8] group-hover:rotate-45 transition-all duration-300 ml-4 flex-shrink-0"
                                    >
                                        <ArrowUpRight size={20} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5: Client Satisfaction Accordion (Aligned with Theme) */}
            <section className="py-20 lg:py-28 bg-[#F0F8FF]/50 border-t border-[#1A5CDD]/10">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <span className="text-xs uppercase font-extrabold tracking-wider text-[#1A5CDD] px-3.5 py-1.5 bg-[#1A5CDD]/10 rounded-full">
                            Engineering Process
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#011146] mt-4 tracking-tight">
                            How We Guarantee Client Success
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {processItems.map((item, index) => {
                            const isOpen = activeAccordion === index;
                            return (
                                <div
                                    key={index}
                                    className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-white ${isOpen ? "border-[#1A5CDD] shadow-lg shadow-blue-900/5" : "border-slate-200 hover:border-slate-300"
                                        }`}
                                >
                                    <button
                                        onClick={() => setActiveAccordion(isOpen ? null : index)}
                                        className="w-full flex items-center justify-between p-6 text-left"
                                    >
                                        <h3 className="text-lg font-bold text-[#011146]">
                                            {item.title}
                                        </h3>
                                        <ChevronDown
                                            className={`text-[#1A5CDD] transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                                                }`}
                                            size={20}
                                        />
                                    </button>
                                    {isOpen && (
                                        <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                                            {item.desc}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION 6: Direct Conversion CTA Banner */}
            <section className="py-20 bg-gradient-to-r from-[#1A5CDD] via-[#011146] to-[#011146] text-white text-center relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-4xl relative z-10">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
                        Ready To Build Your Dedicated Web Application?
                    </h2>
                    <p className="text-blue-100 text-base md:text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                        Speak with our enterprise web engineering team today and receive a tailored technical specification and project quote.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-[#38bdf8] text-[#011146] px-10 py-4 rounded-xl font-extrabold text-sm uppercase tracking-wider hover:bg-white transition-all shadow-xl hover:scale-105"
                    >
                        Get Free Proposal <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </main>
    );
}
