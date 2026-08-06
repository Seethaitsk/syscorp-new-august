"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Linkedin, Twitter, Github, ChevronLeft, ChevronRight, RotateCw, RotateCcw } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
    bio: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
}

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Alex Carter",
        role: "Product Manager",
        image: "/images/team/member1.png",
        bio: "Drives product strategy with user-centric roadmaps and cross-functional leadership.",
        linkedin: "#",
        twitter: "#",
    },
    {
        id: 2,
        name: "Sarah Jennings",
        role: "Chief Technology Officer",
        image: "/images/team/member2.png",
        bio: "Architecting scalable enterprise software solutions and driving engineering excellence across global teams.",
        linkedin: "#",
        twitter: "#",
    },
    {
        id: 3,
        name: "Daniel Carter",
        role: "Lead Systems Architect",
        image: "/images/team/member3.png",
        bio: "Pioneering cloud infrastructure and high-performance backend systems to power next-generation applications.",
        linkedin: "#",
        github: "#",
    },
    {
        id: 4,
        name: "Elena Rostova",
        role: "Head of Product & Design",
        image: "/images/team/member4.png",
        bio: "Crafting intuitive digital experiences and human-centered design systems that delight users worldwide.",
        linkedin: "#",
        twitter: "#",
    },
    {
        id: 5,
        name: "Marcus Vance",
        role: "Senior DevOps Architect",
        image: "/images/team/member5.png",
        bio: "Optimizing cloud CI/CD pipelines, container orchestration, and multi-region deployment automation.",
        linkedin: "#",
        github: "#",
    },
    {
        id: 6,
        name: "Aria Takahashi",
        role: "AI Research Lead",
        image: "/images/team/member6.png",
        bio: "Spearheading advanced machine learning models and intelligent data solutions for modern enterprise workflows.",
        linkedin: "#",
        twitter: "#",
    },
];

export default function OurTeam() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const viewportRef = useRef<HTMLDivElement>(null);

    // Initial index set to 1 (Sarah Jennings centered)
    const [current, setCurrent] = useState(1);
    const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
    const [windowWidth, setWindowWidth] = useState<number>(1024);
    const [isPaused, setIsPaused] = useState(false);
    const isAnimatingRef = useRef(false);

    // Track window resize for 3D perspective calculation
    useEffect(() => {
        if (typeof window === "undefined") return;
        setWindowWidth(window.innerWidth);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Infinite Circular Navigation
    const goTo = useCallback((idx: number) => {
        if (isAnimatingRef.current) return;
        const total = teamMembers.length;
        const circularIndex = ((idx % total) + total) % total;

        isAnimatingRef.current = true;
        setFlippedIndex(null); // Reset flip on slide change
        setCurrent(circularIndex);

        setTimeout(() => {
            isAnimatingRef.current = false;
        }, 380);
    }, []);

    const prev = useCallback(() => goTo(current - 1), [goTo, current]);
    const next = useCallback(() => goTo(current + 1), [goTo, current]);

    // Handle Card Click (Navigates to center if inactive, flips if active)
    const handleCardClick = (i: number, e: React.MouseEvent) => {
        e.stopPropagation();
        if (i !== current) {
            goTo(i);
        } else {
            setFlippedIndex((prevFlipped) => (prevFlipped === i ? null : i));
        }
    };

    // Auto Slide Timer (3.5s interval, pauses when card is flipped or hovered)
    useEffect(() => {
        if (isPaused || flippedIndex !== null) return;
        const interval = setInterval(() => {
            setCurrent((prevIdx) => (prevIdx + 1) % teamMembers.length);
        }, 3500);

        return () => clearInterval(interval);
    }, [isPaused, flippedIndex]);

    // Touch / Swipe support
    useEffect(() => {
        const vp = viewportRef.current;
        if (!vp) return;

        let startX = 0;
        let startT = 0;
        let moved = false;

        const onTouchStart = (ev: TouchEvent) => {
            startX = ev.touches[0].clientX;
            startT = Date.now();
            moved = false;
            setIsPaused(true);
        };

        const onTouchMove = (ev: TouchEvent) => {
            if (Math.abs(ev.touches[0].clientX - startX) > 8) moved = true;
        };

        const onTouchEnd = (ev: TouchEvent) => {
            const dt = Date.now() - startT;
            if (moved && dt <= 600) {
                const endX = ev.changedTouches[0].clientX;
                const dx = endX - startX;
                if (Math.abs(dx) > 40) {
                    if (dx < 0) next();
                    else prev();
                }
            }
            setIsPaused(false);
        };

        vp.addEventListener("touchstart", onTouchStart, { passive: true });
        vp.addEventListener("touchmove", onTouchMove, { passive: true });
        vp.addEventListener("touchend", onTouchEnd, { passive: true });

        return () => {
            vp.removeEventListener("touchstart", onTouchStart);
            vp.removeEventListener("touchmove", onTouchMove);
            vp.removeEventListener("touchend", onTouchEnd);
        };
    }, [next, prev]);

    // Keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowLeft") {
            e.preventDefault();
            prev();
        } else if (e.key === "ArrowRight") {
            e.preventDefault();
            next();
        }
    };

    // GSAP ScrollTrigger Entrance Animation
    useEffect(() => {
        if (typeof window === "undefined") return;
        const page = sectionRef.current;
        if (!page) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".our-team-section-header",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }, page);

        return () => ctx.revert();
    }, []);

    // 3D Perspective Card Layout Calculations with Circular Distance Wrapping
    const getCardStyle = (i: number) => {
        const total = teamMembers.length;
        let d = i - current;

        // Circular wrapping for seamless 3D loop
        if (d > total / 2) {
            d -= total;
        } else if (d < -total / 2) {
            d += total;
        }

        const absD = Math.abs(d);

        let centerZ = 80;
        let x1 = 220;
        let x2 = 360;
        let turn1 = 18;
        let turn2 = 32;
        let depth1 = -200;
        let hx = 520;
        let hz = -420;

        if (windowWidth < 640) {
            centerZ = 44;
            x1 = 135;
            x2 = 200;
            turn1 = 14;
            turn2 = 24;
            depth1 = -120;
            hx = 320;
            hz = -320;
        } else if (windowWidth < 900) {
            centerZ = 60;
            x1 = 170;
            x2 = 260;
            turn1 = 16;
            turn2 = 28;
            depth1 = -160;
            hx = 420;
            hz = -360;
        }

        let x = 0;
        let z = 0;
        let ry = 0;
        let scale = 1;
        let opacity = 1;
        let filter = "none";

        if (d === 0) {
            x = 0;
            z = centerZ;
            ry = 0;
            scale = 1.0;
            opacity = 1;
        } else if (absD === 1) {
            x = d < 0 ? -x1 : x1;
            z = 0;
            ry = d < 0 ? turn1 : -turn1;
            scale = 0.92;
            opacity = 0.88;
            filter = "saturate(0.85) brightness(0.9)";
        } else if (absD === 2) {
            x = d < 0 ? -x2 : x2;
            z = depth1;
            ry = d < 0 ? turn2 : -turn2;
            scale = 0.84;
            opacity = 0.72;
            filter = "saturate(0.65) brightness(0.75)";
        } else {
            x = d < 0 ? -hx : hx;
            z = hz;
            ry = d < 0 ? turn2 : -turn2;
            scale = 0.76;
            opacity = 0;
            filter = "saturate(0.5) brightness(0.5)";
        }

        return {
            zIndex: 1000 - absD,
            transform: `translateX(${x}px) translateZ(${z}px) rotateY(${ry}deg) scale(${scale})`,
            opacity,
            filter,
            pointerEvents: absD > 2 ? ("none" as const) : ("auto" as const),
        };
    };

    return (
        <section
            ref={sectionRef}
            className="py-12 sm:py-16 bg-[#F0F8FF] dark:bg-[#080f25] relative overflow-hidden transition-colors duration-300"
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-[1140px] relative z-10">
                {/* Header */}
                <div className="our-team-section-header text-center mb-4 sm:mb-6 max-w-2xl mx-auto">
                    <span className="inline-flex items-center gap-2 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 shadow-sm rounded-full px-4 py-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2.5 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 shadow-[0_0_8px_rgba(37,99,235,0.8)] animate-pulse" />
                        Team Profiles
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                        Welcome our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">talented team</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 font-medium">
                        Click active card to flip & view description | Use arrows, dots, or swipe to navigate
                    </p>
                </div>

                {/* 3D Viewport */}
                <div
                    ref={viewportRef}
                    tabIndex={0}
                    onKeyDown={handleKeyDown}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className="relative focus:outline-none py-1 my-0 cursor-grab active:cursor-grabbing"
                    style={{ perspective: "1200px" }}
                    aria-label="3D Card Carousel"
                >
                    {/* 3D Track */}
                    <div
                        className="relative h-[310px] sm:h-[350px] flex items-center justify-center"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {teamMembers.map((member, i) => {
                            const style = getCardStyle(i);
                            const isCenter = i === current;
                            const isFlipped = flippedIndex === i;

                            return (
                                <div
                                    key={member.id}
                                    onClick={(e) => handleCardClick(i, e)}
                                    className={`absolute w-[200px] h-[285px] sm:w-[240px] sm:h-[330px] rounded-2xl cursor-pointer transition-all duration-450 ease-[cubic-bezier(0.22,0.61,0.36,1)] focus:outline-none ${
                                        isCenter
                                            ? "shadow-2xl shadow-blue-500/20 dark:shadow-cyan-400/20"
                                            : ""
                                    }`}
                                    style={{
                                        ...style,
                                        transformStyle: "preserve-3d",
                                        willChange: "transform, opacity, filter",
                                    }}
                                    role="button"
                                    aria-label={`${member.name}, ${member.role}`}
                                >
                                    {/* 3D Flip Inner Container */}
                                    <div
                                        className={`relative w-full h-full rounded-2xl transition-transform duration-700 ease-in-out ${
                                            isFlipped ? "[transform:rotateY(180deg)]" : ""
                                        }`}
                                        style={{ transformStyle: "preserve-3d" }}
                                    >
                                        {/* FRONT FACE */}
                                        <div
                                            className={`absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-white dark:bg-[#0c1836] border flex flex-col justify-between shadow-xl ${
                                                isCenter
                                                    ? "border-blue-500/60 dark:border-cyan-400/60 ring-2 ring-blue-500/20 dark:ring-cyan-400/20"
                                                    : "border-slate-200/80 dark:border-slate-800"
                                            }`}
                                            style={{ backfaceVisibility: "hidden" }}
                                        >
                                            {/* Card Media Top (62%) */}
                                            <div className="relative w-full h-[62%] overflow-hidden bg-slate-100 dark:bg-slate-800">
                                                <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    fill
                                                    className="object-cover object-top"
                                                    sizes="240px"
                                                    priority={i === 1}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                                                {/* Flip Hint Badge (Visible on Center Card) */}
                                                {isCenter && (
                                                    <span className="absolute top-2.5 right-2.5 inline-flex items-center gap-1 bg-slate-900/80 hover:bg-blue-600 text-white backdrop-blur-md text-[10px] font-bold px-2 py-1 rounded-full shadow-md transition-all duration-200">
                                                        <span>Info</span>
                                                        <RotateCw className="w-3 h-3 animate-spin-slow" />
                                                    </span>
                                                )}
                                            </div>

                                            {/* Card Body Bottom (38%) */}
                                            <div className="h-[38%] p-3 sm:p-3.5 flex flex-col justify-between bg-white dark:bg-[#0c1836] border-t border-slate-100 dark:border-blue-900/30">
                                                <div>
                                                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white tracking-tight line-clamp-1">
                                                        {member.name}
                                                    </h3>
                                                    <p className="text-[11px] font-semibold text-blue-600 dark:text-cyan-400 mt-0.5 line-clamp-1">
                                                        {member.role}
                                                    </p>
                                                </div>

                                                <div className="flex items-center justify-between gap-2 mt-1">
                                                    <div className="h-[3px] flex-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full opacity-85" />
                                                    {isCenter && (
                                                        <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                                                            Click to flip
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* BACK FACE (FLIPPED 180 DEG) */}
                                        <div
                                            className="absolute inset-0 w-full h-full rounded-2xl p-4 sm:p-5 flex flex-col justify-between bg-slate-900 dark:bg-[#08122c] text-white border border-blue-500/60 shadow-2xl"
                                            style={{
                                                backfaceVisibility: "hidden",
                                                transform: "rotateY(180deg)",
                                            }}
                                        >
                                            {/* Top: Name, Role & Unflip Button */}
                                            <div>
                                                <div className="flex items-start justify-between gap-2">
                                                    <div>
                                                        <h3 className="text-sm sm:text-base font-extrabold text-white tracking-tight leading-tight">
                                                            {member.name}
                                                        </h3>
                                                        <p className="text-[11px] font-bold text-cyan-400 mt-0.5">
                                                            {member.role}
                                                        </p>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setFlippedIndex(null);
                                                        }}
                                                        className="p-1.5 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white transition-all"
                                                        title="Flip back to photo"
                                                    >
                                                        <RotateCcw className="w-3.5 h-3.5" />
                                                    </button>
                                                </div>

                                                {/* Middle: Bio Description */}
                                                <p className="text-xs text-slate-300 leading-relaxed font-normal mt-3 pt-2.5 border-t border-slate-800 line-clamp-5">
                                                    {member.bio}
                                                </p>
                                            </div>

                                            {/* Bottom: Social Links & CTA */}
                                            <div className="pt-2 border-t border-slate-800/80">
                                                <div className="flex items-center justify-between gap-2 mb-3">
                                                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                                                        Connect
                                                    </span>
                                                    <div className="flex items-center gap-1">
                                                        {member.twitter && (
                                                            <a
                                                                href={member.twitter}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                onClick={(e) => e.stopPropagation()}
                                                                className="p-1.5 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white transition-all"
                                                                aria-label={`${member.name} Twitter`}
                                                            >
                                                                <Twitter className="w-3.5 h-3.5" />
                                                            </a>
                                                        )}
                                                        {member.linkedin && (
                                                            <a
                                                                href={member.linkedin}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                onClick={(e) => e.stopPropagation()}
                                                                className="p-1.5 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white transition-all"
                                                                aria-label={`${member.name} LinkedIn`}
                                                            >
                                                                <Linkedin className="w-3.5 h-3.5" />
                                                            </a>
                                                        )}
                                                        {member.github && (
                                                            <a
                                                                href={member.github}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                onClick={(e) => e.stopPropagation()}
                                                                className="p-1.5 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white transition-all"
                                                                aria-label={`${member.name} GitHub`}
                                                            >
                                                                <Github className="w-3.5 h-3.5" />
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>

                                                <Link
                                                    href="/career"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs py-2 px-3 rounded-xl transition-all group/btn shadow-md"
                                                >
                                                    <span>Join our team</span>
                                                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Navigation Buttons Controls */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center px-2 pointer-events-none z-30">
                        <button
                            type="button"
                            onClick={prev}
                            className="pointer-events-auto p-2.5 rounded-full bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white backdrop-blur-md shadow-lg transition-all duration-200"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                            type="button"
                            onClick={next}
                            className="pointer-events-auto p-2.5 rounded-full bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white backdrop-blur-md shadow-lg transition-all duration-200"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center items-center gap-2 mt-2">
                    {teamMembers.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            onClick={() => goTo(i)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                i === current
                                    ? "w-7 bg-blue-600 dark:bg-cyan-400 scale-105"
                                    : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
                            }`}
                            aria-label={`Go to slide ${i + 1}`}
                            aria-current={i === current ? "true" : "false"}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
