"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
      className="sky-about-section bg-grid-pattern py-[100px] overflow-hidden relative bg-white dark:bg-slate-950 transition-colors duration-500"
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
      `}</style>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 gap-[64px] items-center lg:grid-cols-[1.05fr_1.15fr] lg:gap-20">

          {/* LEFT COLUMN: Overlapping Rounded Images + Vertical Outlined Text */}
          <div className="sky-about-left-col relative w-full pb-[40px] sm:pb-[60px]">
            <div className="sky-about-bg-text absolute right-[-10px] top-[5%] hidden sm:block text-[clamp(80px,8vw,110px)] font-black text-transparent [WebkitTextStroke:1.5px_rgba(26,92,221,0.08)] dark:[WebkitTextStroke:1.5px_rgba(255,255,255,0.04)] [writingMode:vertical-rl] uppercase tracking-[0.15em] z-0 select-none pointer-events-none">
              Syscorp
            </div>

            <div>
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=35&w=280"
                alt="Software engineering team collaborating"
                width={350}
                height={440}
                priority
                className="sky-about-img-top w-[80%] sm:w-[75%] h-auto aspect-[4/5] rounded-[24px] object-cover block relative z-10 shadow-[0_15px_40px_rgba(1,17,70,0.04)] border border-black/5 dark:border-white/5 [transformStyle:preserve-3d] [willChange:transform]"
              />
            </div>

            <div>
              <Image
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=35&w=240"
                alt="Clean IDE code workspace editor"
                width={320}
                height={240}
                priority
                className="sky-about-img-bottom absolute bottom-[-30px] sm:bottom-[-40px] right-0 w-[70%] sm:w-[62%] h-auto aspect-[4/3] rounded-[24px] object-cover block border-[6px] border-white dark:border-[#081129] shadow-[0_25px_50px_rgba(1,17,70,0.12)] dark:shadow-[0_25px_50px_rgba(0,0,0,0.4)] z-20 [transformStyle:preserve-3d] [willChange:transform]"
              />
            </div>

            {/* Floating Glassmorphic Stats Widget */}
            <div 
              className="sky-about-floating-stats absolute left-[-20px] bottom-[20%] backdrop-blur-md p-3.5 rounded-2xl z-30 flex items-center gap-3 border border-black/80 dark:border-white/8 shadow-[0_15px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_15px_30px_rgba(0,0,0,0.35)] bg-white/90 dark:bg-slate-900/85"
              style={{ animation: "skyAboutBounce 4.5s ease-in-out infinite" }}
            >
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center text-base font-bold">
                📈
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] font-extrabold text-slate-900 dark:text-white leading-none">99.8% Success</span>
                <span className="text-[9px] text-slate-500 mt-1.5 font-semibold">Project Delivery Rate</span>
              </div>
            </div>

            {/* Floating Experience Widget */}
            <div 
              className="sky-about-floating-stats absolute right-[-15px] top-[15%] backdrop-blur-md py-2.5 px-3.5 rounded-full z-30 flex items-center gap-2 border border-black/80 dark:border-white/8 shadow-[0_15px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_15px_30px_rgba(0,0,0,0.35)] bg-white/90 dark:bg-slate-900/85"
              style={{ animation: "skyAboutBounce 4.5s ease-in-out infinite", animationDelay: "1s" }}
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-extrabold text-slate-900 dark:text-white">Active Clients: 250+</span>
            </div>
          </div>

          {/* RIGHT COLUMN: Badge, Heading, Sub-text, Checklists, Bento Cards, CTA Footer */}
          <div className="flex flex-col gap-7">

            <div className="sky-about-badge-anim flex flex-col gap-[18px]">
              <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 dark:bg-blue-500/10 dark:border-blue-500/20 rounded-full px-3.5 py-1 text-xs font-bold text-[#1A5CDD] dark:text-blue-400 w-fit uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] dark:bg-blue-400 inline-block animate-pulse" />
                Your Success
              </span>
              <h2 id="about-heading" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight m-0 font-sans tracking-tight">
                Building Digital Experiences That <span className="text-[#1A5CDD] dark:text-[#60A5FA]">Love & Trust</span>
              </h2>
            </div>

            {/* Sub-description paragraph */}
            <p className="sky-about-desc-text sky-about-desc-anim text-[15.5px] text-slate-600 dark:text-slate-400 leading-[1.7] m-0 transition-colors duration-300">
              We put users at the center of our engineering process. By blending intuitive design, seamless user experience, and robust backend scalability, we deliver products that solve real problems and drive lasting adoption.
            </p>

            {/* Horizontal Checkmark Row as Bento Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1 sky-about-check-anim">
              <div className="flex items-center gap-3 bg-slate-100/70 dark:bg-slate-900/50 border border-slate-200/50 dark:border-white/5 rounded-2xl p-3.5 transition-all duration-300 hover:border-blue-500/20">
                <span className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  ✓
                </span>
                <span className="text-xs md:text-sm font-bold text-slate-800 dark:text-slate-200">User-First UX & Design</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-100/70 dark:bg-slate-900/50 border border-slate-200/50 dark:border-white/5 rounded-2xl p-3.5 transition-all duration-300 hover:border-blue-500/20">
                <span className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  ✓
                </span>
                <span className="text-xs md:text-sm font-bold text-slate-800 dark:text-slate-200">Client-Driven Engineering</span>
              </div>
            </div>

            {/* Mission & Vision Side-by-Side Bento Cards */}
            <div className="sky-about-cards-grid sky-about-card-anim grid grid-cols-1 sm:grid-cols-2 gap-5">

              {/* Card 1: User Adoption */}
              <div className="sky-about-card group bg-[#1A5CDD]/[0.03] dark:bg-white/[0.02] border border-[#1A5CDD]/[0.06] dark:border-white/[0.05] rounded-[20px] p-6 relative transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/[0.95] dark:hover:bg-slate-900/50 hover:border-[#1A5CDD]/15 dark:hover:border-blue-500/20 hover:shadow-[0_12px_30px_rgba(26,92,221,0.04)] dark:hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)]">
                <div className="absolute inset-0 pointer-events-none opacity-5 bg-grid-pattern rounded-2xl" />
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.007.03c0 .022-.012.045-.03.045m0 0H16.5m3-3h-3m1.372-1.372a3 3 0 1 1-3.692-3.692 3 3 0 0 1 3.692 3.692zM6.628 15.688a9 9 0 1 0-2.525-4.179m0 0L3.198 12.5a3 3 0 0 0 4.682 2.72m-.94-3.198.007-.03a.03.03 0 0 1 .03-.045m0 0H7.5m-3 3h3" />
                  </svg>
                </div>
                <h3 className="sky-about-card-title text-[16.5px] font-extrabold text-[#011146] dark:text-white m-0 mb-2 font-sans">User Adoption</h3>
                <p className="sky-about-card-desc text-[13px] text-slate-500 dark:text-slate-400 leading-[1.6] m-0">
                  We design and develop helpful software applications that are intuitive to use and integrate seamlessly into daily operations.
                </p>
              </div>

              {/* Card 2: Long-Term Growth */}
              <div className="sky-about-card group bg-[#1A5CDD]/[0.03] dark:bg-white/[0.02] border border-[#1A5CDD]/[0.06] dark:border-white/[0.05] rounded-[20px] p-6 relative transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/[0.95] dark:hover:bg-slate-900/50 hover:border-[#1A5CDD]/15 dark:hover:border-blue-500/20 hover:shadow-[0_12px_30px_rgba(26,92,221,0.04)] dark:hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)]">
                <div className="absolute inset-0 pointer-events-none opacity-5 bg-grid-pattern rounded-2xl" />
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18a.75.75 0 0 0 1.2 1.2l3.6-3.6 1.8 1.8a.75.75 0 0 0 1.2-.2l6-9.5 4.5 4.5a.75.75 0 0 0 1.2-.2l3-5a.75.75 0 0 0-1.2-.8l-2.4 4-4.5-4.5a.75.75 0 0 0-1.2.2L9.6 15.4l-1.8-1.8a.75.75 0 0 0-1.2.2L2.25 18z" />
                  </svg>
                </div>
                <h3 className="sky-about-card-title text-[16.5px] font-extrabold text-[#011146] dark:text-white m-0 mb-2 font-sans">Long-Term Growth</h3>
                <p className="sky-about-card-desc text-[13px] text-slate-500 dark:text-slate-400 leading-[1.6] m-0">
                  We grow alongside our clients, providing continuous maintenance, support, and scaling systems as user numbers increase.
                </p>
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
