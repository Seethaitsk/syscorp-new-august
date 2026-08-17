"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [
      Autoplay({
        delay: 3500,
        stopOnInteraction: false,
        playOnInit: true,
      }),
    ]
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const ease = "power2.out";

      // Scroll triggered entrance timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          toggleActions: "play none none none",
        }
      });

      // Animate background vertical "Syscorp" text
      tl.fromTo(".sky-about-bg-text",
        { opacity: 0, y: 60 },
        { opacity: 0.8, y: 0, duration: 1.2, ease }
      );

      // Top image entrance
      tl.fromTo(".sky-about-img-top",
        { x: -50, opacity: 0, rotate: -2 },
        { x: 0, opacity: 1, rotate: 0, duration: 0.8, ease },
        "-=0.9"
      );

      // Bottom image entrance with a slight overlap delay
      tl.fromTo(".sky-about-img-bottom",
        { x: 50, y: 30, opacity: 0, rotate: 2 },
        { x: 0, y: 0, opacity: 1, rotate: 0, duration: 0.85, ease },
        "-=0.7"
      );

      // Floating metric widgets scale up
      tl.fromTo(".sky-about-floating-stats",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.5)" },
        "-=0.4"
      );

      // Right column text layers stagger
      tl.fromTo([
        ".sky-about-badge-anim",
        ".sky-about-title-anim",
        ".sky-about-desc-anim",
        ".sky-about-check-anim",
        ".sky-about-card-anim",
        ".sky-about-footer-anim"
      ],
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65, stagger: 0.1, ease },
        "-=0.8"
      );

      // 3D Parallax Tilt Effect on left column image stack
      const leftCol = document.querySelector(".sky-about-left-col");
      if (leftCol) {
        const onMouseMove = (e: MouseEvent) => {
          const rect = leftCol.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const xc = rect.width / 2;
          const yc = rect.height / 2;
          const rotateY = ((x - xc) / xc) * 6; // max 6deg
          const rotateX = -((y - yc) / yc) * 6; // max 6deg

          // Top image tilts slightly less for depth perception
          gsap.to(".sky-about-img-top", {
            rotateX: rotateX * 0.7,
            rotateY: rotateY * 0.7,
            transformPerspective: 600,
            duration: 0.35,
            ease: "power2.out",
            overwrite: "auto"
          });

          // Bottom image tilts slightly more to look closer
          gsap.to(".sky-about-img-bottom", {
            rotateX: rotateX * 1.1,
            rotateY: rotateY * 1.1,
            transformPerspective: 600,
            duration: 0.35,
            ease: "power2.out",
            overwrite: "auto"
          });
        };

        const onMouseLeave = () => {
          gsap.to([".sky-about-img-top", ".sky-about-img-bottom"], {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: "power2.out"
          });
        };

        leftCol.addEventListener("mousemove", onMouseMove as EventListener);
        leftCol.addEventListener("mouseleave", onMouseLeave as EventListener);

        leftCol.addEventListener("destroy", () => {
          leftCol.removeEventListener("mousemove", onMouseMove as EventListener);
          leftCol.removeEventListener("mouseleave", onMouseLeave as EventListener);
        });
      }
    }, sectionRef);

    return () => {
      ctx.revert();
      const leftCol = document.querySelector(".sky-about-left-col");
      if (leftCol) {
        leftCol.dispatchEvent(new Event("destroy"));
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="about-heading"
      className="sky-about-section bg-grid-pattern py-10 md:py-14 lg:py-16 overflow-hidden relative bg-white dark:bg-slate-950 transition-colors duration-500"
    >
      {/* ── Animated overlay orbs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Large drifting orb — blue */}
        <div
          className="absolute w-[560px] h-[560px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(26,92,221,0.13) 0%, transparent 70%)",
            top: "-10%", left: "-8%",
            animation: "skyAboutOrbDrift 18s ease-in-out infinite",
          }}
        />
        {/* Medium orb — cyan */}
        <div
          className="absolute w-[380px] h-[380px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.11) 0%, transparent 70%)",
            bottom: "-5%", right: "-6%",
            animation: "skyAboutOrbDrift 14s ease-in-out infinite reverse",
            animationDelay: "4s",
          }}
        />
        {/* Pulse ring */}
        <div
          className="absolute w-[200px] h-[200px] rounded-full border border-blue-200/30"
          style={{
            top: "30%", right: "10%",
            animation: "skyAboutOrbPulse 6s ease-in-out infinite",
          }}
        />
        {/* Shimmer sweep */}
        <div
          className="sky-about-shimmer absolute top-0 left-0 w-[40%] h-full"
          style={{
            background: "linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)",
          }}
        />
      </div>

      {/* Bounce custom animation keyframes for floats */}
      <style>{`
        @keyframes skyAboutBounce {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        @keyframes skyAboutOrbPulse {
          0%, 100% { opacity: 0.18; transform: scale(1); }
          50%      { opacity: 0.32; transform: scale(1.12); }
        }
        @keyframes skyAboutOrbDrift {
          0%   { transform: translate(0, 0) rotate(0deg); }
          33%  { transform: translate(30px, -20px) rotate(120deg); }
          66%  { transform: translate(-20px, 15px) rotate(240deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        @keyframes skyAboutShimmer {
          0%   { opacity: 0; transform: translateX(-60%) skewX(-15deg); }
          40%  { opacity: 0.5; }
          100% { opacity: 0; transform: translateX(160%) skewX(-15deg); }
        }
        .sky-about-shimmer {
          animation: skyAboutShimmer 3.5s ease-in-out infinite;
          animation-delay: 1.2s;
        }
        @keyframes skyAboutFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: skyAboutFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 gap-12 items-start lg:grid-cols-[1.05fr_1.15fr] lg:gap-14">

          {/* LEFT COLUMN: 3D Image Showcase + Floating Widgets */}
          <div className="sky-about-left-col relative w-full pb-[40px] sm:pb-[60px] flex items-center justify-center lg:justify-start mt-8 lg:mt-0 lg:sticky lg:top-28">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[#1A5CDD]/10 dark:bg-blue-500/15 rounded-full blur-[70px] pointer-events-none -z-10" />

            <div className="sky-about-bg-text absolute left-[-20px] top-[0%] hidden sm:block text-[clamp(70px,7vw,90px)] font-black text-transparent [WebkitTextStroke:1.5px_rgba(26,92,221,0.06)] dark:[WebkitTextStroke:1.5px_rgba(255,255,255,0.03)] [writingMode:vertical-rl] uppercase tracking-[0.15em] z-0 select-none pointer-events-none">
              Syscorp
            </div>

            <div className="sky-about-img-wrapper relative w-full max-w-[580px] h-[500px] sm:h-[600px] mx-auto lg:ml-0 z-10 [transformStyle:preserve-3d] group">
              {/* Main Image (Hand holding building) */}
              <div className="absolute top-0 right-0 w-[88%] h-[88%] rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(26,92,221,0.15)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.5)] border-[8px] border-white dark:border-[#0f172a] z-10 [willChange:transform] group-hover:-translate-y-2 transition-transform duration-700 ease-out">
                <Image
                  src="/images/about/about-hero-main.jpg"
                  alt="Digital Solutions Infrastructure"
                  fill
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[#011146]/5 mix-blend-overlay" />
              </div>

              {/* Secondary Overlapping Image (UI Mockup) */}
              <div className="absolute -bottom-10 left-0 w-[55%] h-[55%] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(1,17,70,0.25)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-[6px] border-white dark:border-[#0f172a] z-20 [willChange:transform] group-hover:translate-y-2 group-hover:translate-x-2 transition-transform duration-700 ease-out">
                <Image
                  src="/images/about/about-hero-secondary.jpg"
                  alt="Software Solutions Interfaces"
                  fill
                  className="object-cover object-left-top"
                />
              </div>

              {/* Floating Glassmorphic Stats Widget (99.8% Success) */}
              <div 
                className="sky-about-floating-stats absolute left-[-5%] md:left-[-15px] bottom-[0%] bg-white p-4 sm:px-[22px] sm:py-[18px] rounded-[24px] z-30 flex items-center gap-4 shadow-[0_20px_50px_rgba(1,17,70,0.1)] dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
                style={{ animation: "skyAboutBounce 4.5s ease-in-out infinite" }}
              >
                <div className="w-12 h-12 sm:w-[50px] sm:h-[50px] rounded-[16px] bg-gradient-to-br from-[#EEF4FF] to-[#E3EDFF] dark:from-blue-900/40 dark:to-blue-800/20 shadow-inner flex items-center justify-center text-[#1A5CDD] dark:text-blue-400 text-xl sm:text-2xl">
                  <i className="bi bi-graph-up-arrow"></i>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-[15px] sm:text-[17px] font-extrabold text-[#011146] dark:text-white leading-tight">99.8% Success</span>
                  <span className="text-[12px] sm:text-[13.5px] text-slate-500 dark:text-slate-400 font-semibold mt-0.5">Project Delivery Rate</span>
                </div>
              </div>

              {/* Floating Experience Widget (Active Clients: 250+) */}
              <div 
                className="sky-about-floating-stats absolute right-[0%] md:right-[-10px] top-[10%] backdrop-blur-xl py-2 px-3 sm:py-2.5 sm:px-4 rounded-full z-30 flex items-center gap-2.5 border border-[#1A5CDD]/10 dark:border-white/10 shadow-[0_20px_40px_rgba(1,17,70,0.12)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] bg-white/90 dark:bg-slate-900/90"
                style={{ animation: "skyAboutBounce 4.5s ease-in-out 1s infinite" }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] sm:text-[12px] font-extrabold text-[#011146] dark:text-white tracking-wide">Active Clients: 250+</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Badge, Heading, Sub-text, Checklists, Bento Cards, CTA Footer */}
          <div className="flex flex-col gap-5">

            <div className="sky-about-badge-anim flex flex-col gap-3">
              <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 dark:bg-blue-500/10 dark:border-blue-500/20 rounded-full px-3.5 py-1 text-xs font-bold text-[#1A5CDD] dark:text-blue-400 w-fit uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] dark:bg-blue-400 inline-block animate-pulse" />
                Your Success
              </span>
              <h2 id="about-heading" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight m-0 font-sans tracking-tight">
                Software Company in Pondicherry Delivering   Smart <span className="text-[#1A5CDD] dark:text-[#60A5FA]"> Digital Solutions for Every Business</span>

               
              </h2>
            </div>

            {/* Sub-description paragraph with Read More toggle */}
            <div className="sky-about-desc-anim flex flex-col gap-4">
              <p className={`sky-about-desc-text text-[15.5px] text-slate-600 dark:text-slate-400 leading-[1.7] m-0 transition-all duration-300 ${!isExpanded ? "line-clamp-4" : ""}`}>
                Technology is transforming the way businesses operate, and having the right technology partner can make all the difference. At Syscorp, we help businesses embrace digital transformation with innovative, scalable, and result-driven solutions. As a trusted Software Company in Pondicherry, we specialize in delivering custom software, responsive websites, digital marketing strategies, and cloud services that help organizations improve efficiency, increase productivity, and accelerate growth.
              </p>

              {!isExpanded && (
                <button
                  onClick={() => setIsExpanded(true)}
                  className="text-left text-[#1A5CDD] dark:text-blue-400 font-extrabold hover:underline text-[14.5px] cursor-pointer mt-1 self-start flex items-center gap-1.5 transition-colors duration-200"
                >
                  Read More
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
              )}

              {isExpanded && (
                <div className="flex flex-col gap-4 animate-fadeIn">
                  <p className="sky-about-desc-text text-[15.5px] text-slate-600 dark:text-slate-400 leading-[1.7] m-0 transition-colors duration-300">
                    Our team works closely with startups, small businesses, and enterprises to understand their goals before developing solutions tailored to their unique requirements. Every project is designed with performance, security, scalability, and user experience in mind, ensuring your business is ready for future growth.
                  </p>

                  <p className="sky-about-desc-text text-[15.5px] text-slate-600 dark:text-slate-400 leading-[1.7] m-0 transition-colors duration-300">
                    Whether you're launching a new product, modernizing an existing system, or expanding your online presence, Syscorp provides the expertise and technology to turn your ideas into successful digital solutions.
                  </p>

                  <button
                    onClick={() => setIsExpanded(false)}
                    className="text-left text-[#1A5CDD] dark:text-blue-400 font-extrabold hover:underline text-[14.5px] cursor-pointer mt-1 self-start flex items-center gap-1.5 transition-colors duration-200"
                  >
                    Read Less
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                  </button>
                </div>
              )}
            </div>

            {/* Bento Carousel Slider */}
            <div className="sky-about-carousel-viewport overflow-hidden w-full cursor-grab active:cursor-grabbing sky-about-card-anim py-4 -my-4" ref={emblaRef}>
              <div className="sky-about-carousel-container flex -ml-5">

                {/* Card 1: Custom Software Development */}
                <div className="sky-about-carousel-slide flex-[0_0_85%] sm:flex-[0_0_50%] min-w-0 pl-5 h-auto flex flex-col">
                  <Link href="/services/website-development/web-development" className="sky-about-card group bg-[#1A5CDD]/[0.03] dark:bg-white/[0.02] border border-[#1A5CDD]/[0.06] dark:border-white/[0.05] rounded-[20px] p-6 relative transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/[0.95] dark:hover:bg-slate-900/50 hover:border-[#1A5CDD]/15 dark:hover:border-blue-500/20 hover:shadow-[0_12px_30px_rgba(26,92,221,0.04)] dark:hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)] h-full flex flex-col justify-between block no-underline">
                    <div>
                      <div className="absolute inset-0 pointer-events-none opacity-5 bg-grid-pattern rounded-2xl" />
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                        </svg>
                      </div>
                      <h3 className="sky-about-card-title text-[16.5px] font-extrabold text-[#011146] dark:text-white m-0 mb-2 font-sans">Custom Software Development</h3>
                      <p className="sky-about-card-desc text-[13px] text-slate-500 dark:text-slate-400 leading-[1.6] m-0">
                        Develop intelligent, scalable, and secure software solutions tailored to your business needs. We build applications that automate workflows, improve operational efficiency, and support long-term business growth.
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Card 2: Website Development */}
                <div className="sky-about-carousel-slide flex-[0_0_85%] sm:flex-[0_0_50%] min-w-0 pl-5 h-auto flex flex-col">
                  <Link href="/services/website-development/web-development" className="sky-about-card group bg-[#1A5CDD]/[0.03] dark:bg-white/[0.02] border border-[#1A5CDD]/[0.06] dark:border-white/[0.05] rounded-[20px] p-6 relative transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/[0.95] dark:hover:bg-slate-900/50 hover:border-[#1A5CDD]/15 dark:hover:border-blue-500/20 hover:shadow-[0_12px_30px_rgba(26,92,221,0.04)] dark:hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)] h-full flex flex-col justify-between block no-underline">
                    <div>
                      <div className="absolute inset-0 pointer-events-none opacity-5 bg-grid-pattern rounded-2xl" />
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                          <rect x="3" y="4" width="18" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                          <line x1="3" y1="9" x2="21" y2="9" strokeLinecap="round" strokeLinejoin="round" />
                          <circle cx="6" cy="6.5" r="0.5" fill="currentColor" />
                          <circle cx="8" cy="6.5" r="0.5" fill="currentColor" />
                          <circle cx="10" cy="6.5" r="0.5" fill="currentColor" />
                        </svg>
                      </div>
                      <h3 className="sky-about-card-title text-[16.5px] font-extrabold text-[#011146] dark:text-white m-0 mb-2 font-sans">Website Development</h3>
                      <p className="sky-about-card-desc text-[13px] text-slate-500 dark:text-slate-400 leading-[1.6] m-0">
                        Create modern, responsive, and SEO-friendly websites that deliver exceptional user experiences, strengthen your online presence, and convert visitors into loyal customers.
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Card 3: UI/UX Design */}
                <div className="sky-about-carousel-slide flex-[0_0_85%] sm:flex-[0_0_50%] min-w-0 pl-5 h-auto flex flex-col">
                  <Link href="/services/website-development/ui-ux" className="sky-about-card group bg-[#1A5CDD]/[0.03] dark:bg-white/[0.02] border border-[#1A5CDD]/[0.06] dark:border-white/[0.05] rounded-[20px] p-6 relative transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/[0.95] dark:hover:bg-slate-900/50 hover:border-[#1A5CDD]/15 dark:hover:border-blue-500/20 hover:shadow-[0_12px_30px_rgba(26,92,221,0.04)] dark:hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)] h-full flex flex-col justify-between block no-underline">
                    <div>
                      <div className="absolute inset-0 pointer-events-none opacity-5 bg-grid-pattern rounded-2xl" />
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.04 5.025a15.998 15.998 0 0 0 3.398-1.626M11.1 11.1l7.153-7.153a2.25 2.25 0 0 1 3.182 3.182L14.283 14.28a3 3 0 0 1-3.182.802L9.63 13.63a3 3 0 0 1 .802-3.182Z" />
                        </svg>
                      </div>
                      <h3 className="sky-about-card-title text-[16.5px] font-extrabold text-[#011146] dark:text-white m-0 mb-2 font-sans">UI/UX Design</h3>
                      <p className="sky-about-card-desc text-[13px] text-slate-500 dark:text-slate-400 leading-[1.6] m-0">
                        Design intuitive, visually engaging, and user-focused digital experiences that enhance usability, improve customer satisfaction, and create seamless interactions across web and mobile platforms.
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Card 4: Cloud & Digital Solutions */}
                <div className="sky-about-carousel-slide flex-[0_0_85%] sm:flex-[0_0_50%] min-w-0 pl-5 h-auto flex flex-col">
                  <Link href="/services/website-development/cloud-server" className="sky-about-card group bg-[#1A5CDD]/[0.03] dark:bg-white/[0.02] border border-[#1A5CDD]/[0.06] dark:border-white/[0.05] rounded-[20px] p-6 relative transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/[0.95] dark:hover:bg-slate-900/50 hover:border-[#1A5CDD]/15 dark:hover:border-blue-500/20 hover:shadow-[0_12px_30px_rgba(26,92,221,0.04)] dark:hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)] h-full flex flex-col justify-between block no-underline">
                    <div>
                      <div className="absolute inset-0 pointer-events-none opacity-5 bg-grid-pattern rounded-2xl" />
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                        </svg>
                      </div>
                      <h3 className="sky-about-card-title text-[16.5px] font-extrabold text-[#011146] dark:text-white m-0 mb-2 font-sans">Cloud &amp; Digital Solutions</h3>
                      <p className="sky-about-card-desc text-[13px] text-slate-500 dark:text-slate-400 leading-[1.6] m-0">
                        Accelerate digital transformation with secure cloud services, business automation, and scalable infrastructure that improves collaboration, protects data, and supports future business expansion.
                      </p>
                    </div>
                  </Link>
                </div>

              </div>
            </div>

            {/* Footer CTA Row: Oval Button + Avatar & Link */}
            <div className="sky-about-footer-row flex items-center gap-6 flex-wrap mt-2">
              <a href="/about" className="sky-about-btn-pill inline-flex items-center justify-center gap-2 bg-[#011146] dark:bg-white text-white dark:text-[#011146] font-sans font-bold text-[14.5px] py-3.5 px-7 rounded-full no-underline shadow-[0_6px_18px_rgba(1,17,70,0.15)] dark:shadow-[0_6px_18px_rgba(255,255,255,0.05)] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:bg-[#1A5CDD] dark:hover:bg-[#3B82F6] hover:text-white dark:hover:text-white hover:shadow-[0_10px_24px_rgba(26,92,221,0.25)] dark:hover:shadow-[0_10px_24px_rgba(59,130,246,0.35)]">
                More About Us
                <svg className="sky-about-btn-arrow transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>

              <div className="sky-about-avatar-cta flex items-center gap-3">
                <Image
                  src="/images/user.avif"
                  alt="Customer representative"
                  width={36}
                  height={36}
                  className="sky-about-avatar-img w-9 h-9 rounded-full object-cover border-2 border-white dark:border-[#081129] shadow-[0_4px_10px_rgba(1,17,70,0.1)] flex-shrink-0"
                />
                <span className="sky-about-avatar-text text-[13.5px] font-semibold text-slate-600 dark:text-slate-400">
                  Let&apos;s make something great work together.{" "}
                  <a href="/contact" className="sky-about-avatar-link text-[#011146] dark:text-white underline font-extrabold hover:text-[#1A5CDD] dark:hover:text-blue-400 transition-colors duration-200">
                    Get Free Quote
                  </a>
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
