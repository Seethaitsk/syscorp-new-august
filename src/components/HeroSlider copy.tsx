"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const partners = [
  { name: "Zillow", icon: "Zillow" },
  { name: "Medium", icon: "Medium" },
  { name: "Dropbox", icon: "Dropbox" },
  { name: "HubSpot", icon: "HubSpot" },
  { name: "Quora", icon: "Quora" },
  { name: "Linktree", icon: "Linktree" },
];

const cards = [
  { id: 1, type: "websites" },
  { id: 2, type: "crm" },
  { id: 3, type: "seo" },
  { id: 4, type: "cloud" },
];

// Duplicate cards to enable infinite looping layout
const extendedCards = [...cards, ...cards, ...cards];

export default function HeroSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Typewriter states
  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const words = ["Ai automation", "Business", "Websites", "Crm"];
  const colors = ["#a78bfa", "#60a5fa", "#34d399", "#22d3ee"];

  // Auto-play timer for the slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const activeWord = words[wordIndex];
    const handleType = () => {
      if (!isDeleting) {
        setTypedText(activeWord.substring(0, typedText.length + 1));
        if (typedText === activeWord) {
          setTypingSpeed(1800); // Pause at complete word
          setIsDeleting(true);
        } else {
          setTypingSpeed(120);
        }
      } else {
        setTypedText(activeWord.substring(0, typedText.length - 1));
        if (typedText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(300);
        } else {
          setTypingSpeed(60);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex, typingSpeed]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Premium GSAP landing page intro animation sequence
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Start by setting clean transparent defaults to avoid flashes
      gsap.set([
        ".sky-banner-tag",
        ".sky-banner-heading",
        ".sky-banner-sub",
        ".sky-banner-btn-primary",
        ".sky-banner-btn-secondary",
        ".sky-bullet-item",
        ".sky-prev-card",
        ".sky-orbit-icon-wrap",
        ".sky-nav-arrow-btn"
      ], { opacity: 0 });

      // Orchestrate timeline sequence
      tl.fromTo(
        ".sky-banner-tag",
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      )
        .fromTo(
          ".sky-banner-heading",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.0 },
          "-=0.6"
        )
        .fromTo(
          ".sky-banner-sub",
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        )
        // CTA buttons pop up with subtle scale spring
        .fromTo(
          [".sky-banner-btn-primary", ".sky-banner-btn-secondary"],
          { y: 30, scale: 0.9, opacity: 0 },
          { y: 0, scale: 1, opacity: 1, stagger: 0.15, duration: 0.8, ease: "back.out(1.5)" },
          "-=0.5"
        )
        // Checkmark bullets stagger-in from the left
        .fromTo(
          ".sky-bullet-item",
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.12, duration: 0.6 },
          "-=0.4"
        )
        // Floating orbits slide in from center/scale up
        .fromTo(
          ".sky-orbit-icon-wrap",
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, stagger: 0.08, duration: 0.9, ease: "back.out(1.5)" },
          "-=0.8"
        )
        // Preview cards slide up with spring bounce
        .fromTo(
          ".sky-prev-card",
          { y: 60, scale: 0.93, opacity: 0 },
          { y: 0, scale: 1, opacity: 1, stagger: 0.14, duration: 0.95, ease: "back.out(1.3)" },
          "-=1.0"
        )
        .fromTo(
          ".sky-nav-arrow-btn",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.5"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Compute translation coordinates for standard, tablet, and desktop columns
  const sliderTranslateStyle = {
    "--translate-mobile": `-${currentSlide * 100}%`,
    "--translate-tablet": `-${currentSlide * 50}%`,
    "--translate-desktop": `-${currentSlide * 33.3333}%`,
  } as React.CSSProperties;

  return (
    <div ref={containerRef}>
      <style>{`
        /* Banner Main Container with responsive padding */
        .sky-banner-sec {
          padding: 130px 0 80px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        @media (min-width: 768px) {
          .sky-banner-sec {
            padding: 180px 0 100px;
          }
        }

        /* Banner Headings */
        .sky-banner-tag {
          background: rgba(26, 92, 221, 0.15);
          border: 1px solid rgba(26, 92, 221, 0.35);
          color: #60a5fa;
          border-radius: 50px;
          padding: 6px 18px;
          font-size: 13.5px;
          font-weight: 700;
          margin-bottom: 24px;
          width: fit-content;
          display: inline-block;
          letter-spacing: 0.05em;
        }

        .sky-banner-heading {
          font-size: clamp(2rem, 6vw, 4.1rem);
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: #FFFFFF;
          font-family: 'Plus Jakarta Sans', sans-serif;
          max-width: 900px;
          text-align: center;
          margin: 0 auto 24px;
          padding: 0 16px;
        }

        .sky-banner-sub {
          font-size: 15px;
          color: #94A3B8;
          max-width: 650px;
          text-align: center;
          line-height: 1.6;
          margin: 0 auto 36px;
          padding: 0 20px;
        }
        @media (min-width: 768px) {
          .sky-banner-sub {
            font-size: 17px;
          }
        }

        /* CTA Buttons */
        .sky-banner-ctas {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 40px;
          padding: 0 16px;
        }

        .sky-banner-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #1A5CDD;
          color: #fff;
          font-weight: 700;
          font-size: 15px;
          padding: 14px 28px;
          border-radius: 50px;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .sky-banner-btn-primary:hover {
          background: #154ebc;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(26, 92, 221, 0.35);
        }
        .sky-banner-arrow-circle {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #011146;
        }

        .sky-banner-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          font-weight: 700;
          font-size: 15px;
          padding: 14px 28px;
          border-radius: 50px;
          transition: all 0.3s ease;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
        .sky-banner-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.3);
        }

        /* Bullets */
        .sky-banner-bullets {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px 24px;
          flex-wrap: wrap;
          margin-bottom: 48px;
          padding: 0 24px;
        }
        @media (min-width: 768px) {
          .sky-banner-bullets {
            margin-bottom: 80px;
          }
        }
        .sky-bullet-item {
          font-size: 13.5px;
          color: #94A3B8;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* Orbit Dotted Paths and Icons */
        .sky-orbit-icon-wrap {
          position: absolute;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(1, 17, 70, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          animation: skyOrbitFloat 6s ease-in-out infinite;
          z-index: 2;
        }
        @keyframes skyOrbitFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50%      { transform: translateY(-8px) scale(1.05); }
        }

        /* Ticker styling */
        @keyframes skyTickerScrollHero {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .sky-ticker-track-hero {
          animation: skyTickerScrollHero 28s linear infinite;
        }

        /* Dotted Grid Background Pattern for Cards */
        .sky-dotted-grid {
          background-image: radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px);
          background-size: 18px 18px;
        }

        .sky-prev-card {
          background: rgba(10, 17, 45, 0.72);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 15px 35px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05);
          padding: 20px;
          display: flex;
          flex-direction: column;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .sky-prev-card:hover {
          transform: translateY(-6px);
        }

        /* Carousel sliding track */
        .sky-carousel-track {
          display: flex;
          transition: transform 0.7s cubic-bezier(0.25, 1, 0.5, 1);
        }
        @media (max-width: 767px) {
          .sky-carousel-track {
            transform: translateX(var(--translate-mobile));
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .sky-carousel-track {
            transform: translateX(var(--translate-tablet));
          }
        }
        @media (min-width: 1024px) {
          .sky-carousel-track {
            transform: translateX(var(--translate-desktop));
          }
        }
      `}</style>

      {/* ─── BANNER CONTAINER ─── */}
      <section id="home-banner" className="sky-banner-sec bg-gradient-to-tr from-[#040824] via-[#091b5c] to-[#02071f] relative overflow-hidden">

        {/* Ambient Multi-Tone Glow Aura Lights */}
        <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-indigo-600/30 via-blue-600/25 to-sky-400/20 rounded-full blur-[150px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-5 left-10 w-[450px] h-[350px] bg-sky-500/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-20 right-10 w-[450px] h-[350px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />

        {/* Concentric Orbits & Icons Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
          {/* SVG Orbits */}
          <svg width="100%" height="100%" className="absolute min-w-[1400px] min-h-[1400px] opacity-25" viewBox="0 0 1000 1000" fill="none">
            <circle cx="500" cy="500" r="240" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" strokeDasharray="6 6" />
            <circle cx="500" cy="500" r="380" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" strokeDasharray="6 6" />
            <circle cx="500" cy="500" r="520" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" strokeDasharray="6 6" />
            <circle cx="500" cy="500" r="660" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" strokeDasharray="6 6" />
          </svg>

          {/* Floating Icons positioned on left/right sides */}
          {/* Web Dev Code Icon */}
          <div className="sky-orbit-icon-wrap" style={{ left: "6%", top: "22%", animationDelay: "0s", animationDuration: "5s" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
          {/* AI / Machine Learning Icon */}
          <div className="sky-orbit-icon-wrap" style={{ right: "6%", top: "20%", animationDelay: "1s", animationDuration: "6s" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              <circle cx="12" cy="12" r="4" fill="none" />
            </svg>
          </div>
          {/* Cloud Ops Icon */}
          <div className="sky-orbit-icon-wrap" style={{ left: "14%", top: "50%", animationDelay: "2s", animationDuration: "5.5s" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.42-1.89-1.95-3.5-4-3.5-3 0-5.5 2.5-5.5 5.5A3.5 3.5 0 0 0 10 19Z" />
            </svg>
          </div>
          {/* UI/UX / Design System Icon */}
          <div className="sky-orbit-icon-wrap" style={{ right: "14%", top: "48%", animationDelay: "3s", animationDuration: "6.5s" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12h14" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          {/* SEO & Growth Icon */}
          <div className="sky-orbit-icon-wrap" style={{ left: "8%", top: "76%", animationDelay: "1.5s", animationDuration: "4.8s" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
          </div>
          {/* Mobile Apps Icon */}
          <div className="sky-orbit-icon-wrap" style={{ right: "8%", top: "74%", animationDelay: "2.5s", animationDuration: "5.8s" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
              <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div style={{ position: "relative", zIndex: 5, display: "flex", flexDirection: "column", alignItems: "center", padding: "0 24px" }}>

          {/* Tag */}
          <span className="sky-banner-tag">
            One Platform. Every Customer.
          </span>

          {/* Heading */}
          <h1 className="sky-banner-heading">
            Seamless integrations
            <br />
            with your <span className="inline-block transition-colors duration-300" style={{ color: colors[wordIndex] }}>{typedText}</span>
            <span className="animate-pulse" style={{ color: colors[wordIndex] }}>|</span>
          </h1>

          {/* Subtext */}
          <p className="sky-banner-sub">
            We specialize in delivering full-cycle software solutions and AI-driven marketing tools designed to accelerate digital transformation.
          </p>

          {/* Buttons */}
          <div className="sky-banner-ctas">
            <a href="/contact" className="sky-banner-btn-primary sky-glow-hover">
              Ready to Try Free
              <span className="sky-banner-arrow-circle">
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </a>
            <a href="/services" className="sky-banner-btn-secondary">
              Get Started
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Bullet Points */}
          <div className="sky-banner-bullets">
            <div className="sky-bullet-item">
              <span style={{ color: "#60a5fa" }}>✓</span> No credit card required
            </div>
            <div className="sky-bullet-item">
              <span style={{ color: "#60a5fa" }}>✓</span> Cancel anytime & no hidden charge
            </div>
            <div className="sky-bullet-item">
              <span style={{ color: "#60a5fa" }}>✓</span> Cancel anytime or money back guarantee
            </div>
          </div>

        </div>

        {/* ─── 4 CARDS VIEW SLIDER CONTAINER (3-COLUMN LAYOUT ON DESKTOP) ─── */}
        <div className="relative w-full max-w-[1240px] mx-auto z-20 px-6 md:px-14">
          
          {/* Glassmorphic Navigation Buttons */}
          <button 
            onClick={() => setCurrentSlide((prev) => (prev - 1 + 4) % 4)}
            className="sky-nav-arrow-btn absolute left-[-6px] md:left-[-12px] lg:left-[-24px] top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/65 backdrop-blur-md hover:bg-slate-800 border border-white/10 flex items-center justify-center text-white transition-all duration-300 z-30 hidden md:flex cursor-pointer shadow-lg hover:border-blue-500/30"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button 
            onClick={() => setCurrentSlide((prev) => (prev + 1) % 4)}
            className="sky-nav-arrow-btn absolute right-[-6px] md:right-[-12px] lg:right-[-24px] top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/65 backdrop-blur-md hover:bg-slate-800 border border-white/10 flex items-center justify-center text-white transition-all duration-300 z-30 hidden md:flex cursor-pointer shadow-lg hover:border-blue-500/30"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Slider viewport */}
          <div className="overflow-hidden py-4 px-1">
            <div 
              className="sky-carousel-track" 
              style={sliderTranslateStyle}
            >
              
              {extendedCards.map((card, idx) => {
                
                // Card 1: Custom Websites
                if (card.type === "websites") {
                  return (
                    <div key={idx} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
                      <div className="sky-prev-card group hover:border-blue-500/30 hover:shadow-[0_20px_40px_rgba(59,130,246,0.12)] sky-dotted-grid min-h-[300px]">
                        {/* Background Dotted Line Graphics */}
                        <div className="absolute inset-0 pointer-events-none opacity-20">
                          <svg className="w-full h-full" fill="none">
                            <line x1="20%" y1="0" x2="20%" y2="100%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                            <line x1="80%" y1="0" x2="80%" y2="100%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                            <circle cx="50%" cy="30%" r="5" fill="#38BDF8" className="animate-pulse" />
                          </svg>
                        </div>

                        <div className="flex items-center justify-between mb-3 relative z-10">
                          <span className="text-[11px] font-extrabold text-[#38BDF8] tracking-wider uppercase">Custom Websites</span>
                          <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                          </span>
                        </div>
                        <h3 className="text-[15px] font-extrabold text-white m-0 mb-1 leading-snug relative z-10">Responsive UI/UX</h3>
                        <p className="text-[11.5px] text-slate-400 m-0 mb-4 relative z-10">High-conversion landing pages & apps</p>

                        {/* Browser Frame Mockup */}
                        <div className="flex-1 bg-slate-950/80 rounded-xl border border-white/10 p-3.5 flex flex-col gap-2.5 min-h-[110px] transition-colors duration-300 group-hover:bg-slate-900/90 relative z-10">
                          {/* Browser Header dots */}
                          <div className="flex items-center gap-1.5 pb-2.5 border-b border-white/[0.06]">
                            <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <div className="flex-1 bg-white/5 rounded h-4 mx-2 text-[8px] text-slate-500 flex items-center px-2 font-mono truncate">syscorp.tech/websites</div>
                          </div>
                          
                          {/* Website content miniature */}
                          <div className="flex flex-col gap-2 pt-1">
                            <div className="flex items-center justify-between">
                              <div className="w-12 h-2.5 bg-[#1A5CDD] rounded" />
                              <div className="flex gap-1.5">
                                <div className="w-5 h-2 bg-white/15 rounded" />
                                <div className="w-5 h-2 bg-white/15 rounded" />
                              </div>
                            </div>
                            <div className="w-3/4 h-3 bg-white/10 rounded mt-1" />
                            <div className="w-full h-2.5 bg-white/5 rounded" />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                // Card 2: CRM & Maintenance
                if (card.type === "crm") {
                  return (
                    <div key={idx} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
                      <div className="sky-prev-card group hover:border-emerald-500/30 hover:shadow-[0_20px_40px_rgba(16,185,129,0.12)] sky-dotted-grid min-h-[300px]">
                        {/* Background Dotted Curved Trendline */}
                        <div className="absolute inset-0 pointer-events-none opacity-20">
                          <svg className="w-full h-full" fill="none">
                            <path d="M 0 60 Q 75 25 150 45 T 300 20" stroke="white" strokeWidth="1.5" strokeDasharray="3 3" />
                            <circle cx="75" cy="38" r="4" fill="#10B981" />
                            <circle cx="150" cy="45" r="4" fill="#10B981" />
                          </svg>
                        </div>

                        <div className="flex items-center justify-between mb-3 relative z-10">
                          <span className="text-[11px] font-extrabold text-[#34D399] tracking-wider uppercase">CRM & Maintenance</span>
                          <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">+142%</span>
                        </div>
                        <h3 className="text-[15px] font-extrabold text-white m-0 mb-1 leading-snug relative z-10">Sales Target & Support</h3>
                        <p className="text-[11.5px] text-slate-400 m-0 mb-4 relative z-10">Accelerating pipelines & updates</p>

                        <div className="flex-1 flex flex-col justify-end min-h-[110px] relative z-10">
                          <div className="w-full h-[70px] relative overflow-hidden mb-2">
                            <svg width="100%" height="70" viewBox="0 0 200 70" fill="none" className="absolute bottom-0 left-0">
                              <defs>
                                <linearGradient id="crmGrad" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="rgba(16,185,129,0.35)" />
                                  <stop offset="100%" stopColor="rgba(16,185,129,0)" />
                                </linearGradient>
                              </defs>
                              <path d="M 0 65 Q 40 60 80 40 T 160 20 T 200 5 L 200 70 L 0 70 Z" fill="url(#crmGrad)" />
                              <path d="M 0 65 Q 40 60 80 40 T 160 20 T 200 5" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
                              <circle cx="200" cy="5" r="4.5" fill="#10B981" className="animate-pulse" />
                            </svg>
                            <div className="absolute top-2 left-2 flex flex-col">
                              <span className="text-xs font-bold text-white">$569,200</span>
                              <span className="text-[8px] text-slate-500">Pipeline Target Reach</span>
                            </div>
                          </div>
                          <div className="h-[1px] bg-white/5 my-2" />
                          <div className="flex items-center justify-between cursor-pointer">
                            <span className="text-[10px] font-bold text-white hover:text-[#34D399] transition-colors duration-200">Daily CRM Report</span>
                            <svg className="w-3.5 h-3.5 text-slate-400 hover:text-[#34D399] transform hover:translate-x-0.5 transition-all duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                // Card 3: SEO & Rankings
                if (card.type === "seo") {
                  return (
                    <div key={idx} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
                      <div className="sky-prev-card group hover:border-purple-500/30 hover:shadow-[0_20px_40px_rgba(168,85,247,0.12)] sky-dotted-grid min-h-[300px]">
                        {/* Background Concentric Dotted Circles */}
                        <div className="absolute inset-0 pointer-events-none opacity-20">
                          <svg className="w-full h-full" fill="none">
                            <circle cx="50%" cy="50%" r="50" stroke="white" strokeWidth="1" strokeDasharray="3 3" />
                            <circle cx="50%" cy="50%" r="28" stroke="white" strokeWidth="1" strokeDasharray="3 3" />
                          </svg>
                        </div>

                        <div className="flex items-center justify-between mb-3 relative z-10">
                          <span className="text-[11px] font-extrabold text-[#A855F7] tracking-wider uppercase">SEO & Rankings</span>
                          <span className="text-[10px] font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full">DA 85</span>
                        </div>
                        <h3 className="text-[15px] font-extrabold text-white m-0 mb-1 leading-snug relative z-10">Organic Growth</h3>
                        <p className="text-[11.5px] text-slate-400 m-0 mb-4 relative z-10">First-page Google presence</p>

                        <div className="flex-1 flex flex-col justify-end min-h-[110px] relative z-10">
                          {/* Highlight badge */}
                          <div className="bg-[#A855F7] text-white px-2.5 py-0.5 rounded text-[8px] font-bold w-fit mx-auto mb-2 relative shadow-lg shadow-purple-500/20">
                            Rank #1 Achieved
                            <div className="absolute bottom-[-3px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-t-[3px] border-t-[#A855F7]" />
                          </div>

                          {/* Bars chart */}
                          <div className="flex items-end justify-between h-[45px] gap-2.5 px-2 mb-2">
                            <div className="w-full h-[55%] bg-purple-500/20 rounded-t-sm" />
                            <div className="w-full h-[75%] bg-purple-500/20 rounded-t-sm" />
                            <div className="w-full h-[40%] bg-purple-500/20 rounded-t-sm" />
                            <div className="w-full h-[95%] bg-[#A855F7] rounded-t-sm shadow-[0_0_12px_rgba(168,85,247,0.4)]" />
                            <div className="w-full h-[30%] bg-purple-500/20 rounded-t-sm" />
                            <div className="w-full h-[80%] bg-purple-500/20 rounded-t-sm" />
                          </div>

                          {/* Months */}
                          <div className="flex justify-between text-[8px] text-slate-500 font-bold px-1.5">
                            <span>Jan</span>
                            <span>Mar</span>
                            <span>May</span>
                            <span>Jul</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                // Card 4: Cloud & Security
                if (card.type === "cloud") {
                  return (
                    <div key={idx} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
                      <div className="sky-prev-card group hover:border-sky-500/30 hover:shadow-[0_20px_40px_rgba(56,189,248,0.12)] sky-dotted-grid min-h-[300px]">
                        {/* Background Dotted Line Graphics */}
                        <div className="absolute inset-0 pointer-events-none opacity-20">
                          <svg className="w-full h-full" fill="none">
                            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white" strokeWidth="1" strokeDasharray="3 3" />
                            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="3 3" />
                          </svg>
                        </div>

                        <div className="flex items-center justify-between mb-3 relative z-10">
                          <span className="text-[11px] font-extrabold text-[#38BDF8] tracking-wider uppercase">Cloud Ops</span>
                          <span className="text-[10px] font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full">99.9% Uptime</span>
                        </div>
                        <h3 className="text-[15px] font-extrabold text-white m-0 mb-1 leading-snug relative z-10">Cloud Scaling</h3>
                        <p className="text-[11.5px] text-slate-400 m-0 mb-4 relative z-10">High-availability hosting & security</p>

                        <div className="flex-1 flex items-center justify-center relative min-h-[110px] relative z-10">
                          {/* Concentric Dotted Circles that rotate slowly on hover */}
                          <div className="absolute w-[80px] h-[80px] rounded-full border border-dashed border-white/10 transition-transform duration-1000 group-hover:rotate-180" />
                          <div className="absolute w-[46px] h-[46px] rounded-full border border-dashed border-white/10 transition-transform duration-1000 group-hover:-rotate-180" />

                          {/* Center Cloud Icon */}
                          <div className="absolute z-10 w-8 h-8 rounded-full bg-[#1e293b] flex items-center justify-center text-sky-400 border border-sky-500/30 shadow-[0_0_15px_rgba(56,189,248,0.35)] font-bold text-sm">
                            ☁️
                          </div>

                          {/* Connected Cloud Nodes */}
                          <div className="absolute top-[6px] left-[16px] bg-[#0f172a] p-1 rounded-full shadow-lg border border-white/10 transform transition-transform duration-300 group-hover:scale-110">
                            <span className="text-[9px] leading-none block">⚡</span>
                          </div>
                          <div className="absolute top-[6px] right-[16px] bg-[#0f172a] p-1 rounded-full shadow-lg border border-white/10 transform transition-transform duration-300 group-hover:scale-110">
                            <span className="text-[9px] leading-none block">🔒</span>
                          </div>
                          <div className="absolute bottom-[6px] left-[16px] bg-[#0f172a] p-1 rounded-full shadow-lg border border-white/10 transform transition-transform duration-300 group-hover:scale-110">
                            <span className="text-[9px] leading-none block">⚙️</span>
                          </div>
                          <div className="absolute bottom-[6px] right-[16px] bg-[#0f172a] p-1 rounded-full shadow-lg border border-white/10 transform transition-transform duration-300 group-hover:scale-110">
                            <span className="text-[9px] leading-none block">💾</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return null;
              })}

            </div>
          </div>

        </div>

      </section>

      {/* ─── PARTNER TICKER ─── */}
 
    </div>
  );
}
