"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop layout (>= 768px): Pinned scroll trigger timeline
      mm.add("(min-width: 768px)", () => {
        // Initial setup for desktop card container
        gsap.set(".sky-prev-cards-container", { opacity: 0, y: 80, pointerEvents: "none" });

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.to(".sky-banner-tag", { y: 0, opacity: 1, duration: 0.8 })
          .to(".sky-banner-heading", { y: 0, opacity: 1, duration: 1.0 }, "-=0.6")
          .to(".sky-banner-sub", { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
          .to([".sky-banner-btn-primary", ".sky-banner-btn-secondary"],
            { y: 0, scale: 1, opacity: 1, stagger: 0.15, duration: 0.8, ease: "back.out(1.5)" }, "-=0.5")
          .to(".sky-bullet-item", { x: 0, opacity: 1, stagger: 0.12, duration: 0.6 }, "-=0.4")
          .to(".sky-orbit-icon-wrap", { scale: 1, opacity: 1, stagger: 0.08, duration: 0.9, ease: "back.out(1.5)" }, "-=0.8");

        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".sky-hero-scroll-wrapper",
            start: "top top",
            end: "+=100%",
            scrub: 1,
            pin: ".sky-banner-sec",
            pinSpacing: true,
            invalidateOnRefresh: true,
          }
        });

        // 1. Fade out the text content container
        scrollTl.to(".sky-hero-text-aligner", {
          opacity: 0,
          y: -80,
          ease: "power2.inOut",
          duration: 0.4
        }, 0);

        // 2. Fade out orbit icons container
        scrollTl.to(".sky-orbits-wrapper", {
          opacity: 0,
          scale: 0.7,
          duration: 0.3
        }, 0);

        // 3. Fade out the dark overlay
        scrollTl.to(".hero-video-overlay", {
          opacity: 0,
          ease: "power2.inOut",
          duration: 0.6
        }, 0.15);

        // 4. Fade out gradient background
        scrollTl.to(".hero-gradient-bg", {
          opacity: 0,
          ease: "power2.inOut",
          duration: 0.5
        }, 0.1);

        // 5. Slider slides up and fades in on scroll down
        scrollTl.fromTo(".sky-prev-cards-container",
          { y: 80, opacity: 0, pointerEvents: "none" },
          { y: 0, opacity: 1, pointerEvents: "auto", ease: "power2.out", duration: 0.5, immediateRender: false },
          0.4
        );
      });

      // Mobile layout (< 768px): No pinning, natural scrolling, simple load animations
      mm.add("(max-width: 767px)", () => {
        // Ensure card container is visible and aligned on mobile
        gsap.set(".sky-prev-cards-container", { opacity: 1, y: 0, pointerEvents: "auto" });

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.to(".sky-banner-tag", { y: 0, opacity: 1, duration: 0.6 })
          .to(".sky-banner-heading", { y: 0, opacity: 1, duration: 0.8 }, "-=0.4")
          .to(".sky-banner-sub", { y: 0, opacity: 1, duration: 0.6 }, "-=0.4")
          .to([".sky-banner-btn-primary", ".sky-banner-btn-secondary"],
            { y: 0, scale: 1, opacity: 1, stagger: 0.1, duration: 0.6, ease: "back.out(1.2)" }, "-=0.3")
          .to(".sky-bullet-item", { x: 0, opacity: 1, stagger: 0.08, duration: 0.5 }, "-=0.2")
          .to(".sky-orbit-icon-wrap", { scale: 1, opacity: 1, stagger: 0.05, duration: 0.6, ease: "back.out(1.2)" }, "-=0.4");
      });

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
        .sky-hero-scroll-wrapper {
          height: 200vh;
          position: relative;
          width: 100%;
        }
        @media (max-width: 767px) {
          .sky-hero-scroll-wrapper {
            height: auto;
          }
        }

        /* Banner container — relative so GSAP can pin it cleanly */
        .sky-banner-sec {
          padding: 0;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          width: 100%;
          background: #02071f url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop') no-repeat center center / cover;
        }
        @media (max-width: 767px) {
          .sky-banner-sec {
            height: auto;
            min-height: 100vh;
            padding: 100px 0 60px;
          }
        }

        /* Prevent hydration/loading flash (FOUC) by hiding elements initially */
        .sky-banner-tag {
          opacity: 0;
          transform: translateY(-30px);
        }
        .sky-banner-heading {
          opacity: 0;
          transform: translateY(40px);
        }
        .sky-banner-sub {
          opacity: 0;
          transform: translateY(25px);
        }
        .sky-banner-btn-primary,
        .sky-banner-btn-secondary {
          opacity: 0;
          transform: translateY(30px) scale(0.9);
        }
        .sky-bullet-item {
          opacity: 0;
          transform: translateX(-20px);
        }

        /* Video Full-Screen Layer — covers 100% with object-cover */
        .hero-video-mask {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          overflow: hidden;
        }
        /* Full screen video cover styling using object-fit */
        .hero-video-mask video {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(1.25); /* Perfect scale for laptops/desktops */
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          pointer-events: none;
        }
        @media (max-width: 1023px) {
          .hero-video-mask video {
            transform: translate(-50%, -50%) scale(1.45); /* Higher scale on mobile to prevent margins on device toolbar resize */
          }
        }

        @media (max-width: 1500px) {
          .hero-video-mask video {
            transform: translate(-50%, -50%) scale(1.35); /* Higher scale on mobile to prevent margins on device toolbar resize */
          }
        }

        .sky-prev-cards-container {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          z-index: 20;
          pointer-events: auto;
          transition: opacity 0.5s ease;
        }
        @media (min-width: 768px) {
          .sky-prev-cards-container {
            bottom: 40px;
            opacity: 0; /* Hide initially on desktop to prevent flash before GSAP setup */
          }
        }
        @media (max-width: 767px) {
          .sky-prev-cards-container {
            position: relative;
            bottom: auto;
            left: auto;
            transform: none;
            margin-top: 40px;
            padding: 0 16px;
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
          color: #d7d7d7;
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
          color: #d7d7d7;
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
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          opacity: 0;
          transform: scale(0);
        }
        .sky-orbit-icon-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: rgba(1, 17, 70, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          animation: skyOrbitFloat 6s ease-in-out infinite;
        }
        @keyframes skyOrbitFloat {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
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
          background-image: radial-gradient(rgba(26, 92, 221, 0.07) 1px, transparent 1px);
          background-size: 18px 18px;
        }

        /* ── DARK GLASSMORPHIC LIVE CARD STYLE ── */
        .sky-prev-card {
          background: radial-gradient(circle at 80% 20%, var(--card-accent-alpha, rgba(37, 99, 235, 0.25)) 0%, transparent 60%), 
                      radial-gradient(circle at 20% 80%, var(--card-accent-alpha, rgba(37, 99, 235, 0.12)) 0%, transparent 60%), 
                      rgba(6, 10, 26, 0.82);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 28px;
          border: 1.5px solid var(--card-accent-border, rgba(255, 255, 255, 0.12));
          border-top: 3.5px solid var(--card-accent, #2563EB); /* Active top border */
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.65), 
                      0 4px 24px var(--card-accent-alpha, rgba(255, 255, 255, 0.02)),
                      inset 0 0 16px rgba(255, 255, 255, 0.02);
          padding: 24px 24px 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        /* Border glow on hover */
        .sky-prev-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 50px var(--card-accent-hover-shadow, rgba(37, 99, 235, 0.4)), 
                      0 4px 16px rgba(0,0,0,0.6),
                      inset 0 0 20px rgba(255, 255, 255, 0.04);
          border-color: var(--card-accent, #2563EB);
          background: radial-gradient(circle at 80% 20%, var(--card-accent-alpha, rgba(37, 99, 235, 0.4)) 0%, transparent 65%), 
                      radial-gradient(circle at 20% 80%, var(--card-accent-alpha, rgba(37, 99, 235, 0.2)) 0%, transparent 65%), 
                      rgba(6, 10, 26, 0.92);
        }

        /* Neon Glow spots */
        .sky-card-glow {
          position: absolute;
          top: -60px;
          right: -60px;
          width: 220px;
          height: 220px;
          background: radial-gradient(circle, var(--card-accent) 0%, transparent 70%);
          opacity: 0.35;
          filter: blur(25px);
          pointer-events: none;
          z-index: 0;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          animation: skyGlowBreathe 7s ease-in-out infinite alternate;
        }
        .sky-prev-card:hover .sky-card-glow {
          transform: scale(1.25);
          opacity: 0.55;
        }
        
        .sky-card-glow-2 {
          position: absolute;
          bottom: -80px;
          left: -80px;
          width: 240px;
          height: 240px;
          background: radial-gradient(circle, var(--card-accent-alpha) 0%, transparent 70%);
          opacity: 0.25;
          filter: blur(35px);
          pointer-events: none;
          z-index: 0;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          animation: skyGlowBreathe2 9s ease-in-out infinite alternate;
        }
        .sky-prev-card:hover .sky-card-glow-2 {
          transform: scale(1.15);
          opacity: 0.4;
        }

        @keyframes skyGlowBreathe {
          0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.35; }
          50%      { transform: scale(1.15) translate(-10px, 10px); opacity: 0.48; }
        }
        @keyframes skyGlowBreathe2 {
          0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.22; }
          50%      { transform: scale(1.1) translate(10px, -10px); opacity: 0.35; }
        }

        /* Premium Buttons inside Cards */
        .sky-card-btn-primary {
          display: block;
          width: 100%;
          text-align: center;
          padding: 11px 12px;
          font-size: 12px;
          font-weight: 800;
          border-radius: 50px;
          color: #ffffff !important;
          background: var(--card-accent, #2563EB);
          box-shadow: 0 4px 18px var(--card-accent-alpha, rgba(37, 99, 235, 0.4));
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        }
        .sky-card-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px var(--card-accent-hover-shadow, rgba(37, 99, 235, 0.6));
          filter: brightness(1.15);
        }
        .sky-card-btn-secondary {
          display: block;
          width: 100%;
          text-align: center;
          padding: 9.5px 12px; /* compensate for 1.5px border */
          font-size: 12px;
          font-weight: 800;
          border-radius: 50px;
          color: #d7d7d7 !important;
          background: transparent;
          border: 1.5px solid rgba(255, 255, 255, 0.12);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .sky-card-btn-secondary:hover {
          transform: translateY(-2px);
          color: #ffffff !important;
          border-color: var(--card-accent, #2563EB);
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
        }

        /* Mockup Micro-animations (Animatics) */
        .sky-prev-card:hover .sky-mockup-line {
          transform: scaleX(1.06);
          background-color: var(--card-accent) !important;
        }
        .sky-mockup-line {
          transition: all 0.3s ease;
          transform-origin: left;
        }
        
        .sky-prev-card:hover .sky-mockup-bar {
          height: 115% !important;
          opacity: 0.9 !important;
        }
        .sky-mockup-bar {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .sky-prev-card:hover .sky-orbit-circle-outer {
          transform: rotate(180deg);
        }
        .sky-orbit-circle-outer {
          transition: transform 1.8s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: center;
        }
        .sky-prev-card:hover .sky-orbit-circle-inner {
          transform: rotate(-180deg);
        }
        .sky-orbit-circle-inner {
          transition: transform 1.8s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: center;
        }
        .sky-prev-card:hover .sky-orbit-node {
          transform: scale(1.2);
        }
        .sky-orbit-node {
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        /* Card label text styling */
        .sky-prev-card .card-label { 
          font-size: 11px; 
          font-weight: 800; 
          letter-spacing: 0.08em; 
          text-transform: uppercase; 
        }
        .sky-prev-card h3 { 
          color: #ffffff !important; 
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 18px;
          font-weight: 800;
          margin-top: 4px;
          margin-bottom: 2px;
        }
        .sky-prev-card p  { 
          color: #d7d7d7 !important; 
          font-size: 12.5px;
          line-height: 1.4;
        }

        /* Carousel sliding track */
        .sky-carousel-track {
          display: flex;
          transition: transform 0.7s cubic-bezier(0.25, 1, 0.5, 1);
        }
        @media (max-width: 767px) {
          .sky-carousel-track { transform: translateX(var(--translate-mobile)); }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .sky-carousel-track { transform: translateX(var(--translate-tablet)); }
        }
        @media (min-width: 1024px) {
          .sky-carousel-track { transform: translateX(var(--translate-desktop)); }
        }

        /* Cards row entrance pop animation */
        @keyframes cardsRowPop {
          0%   { opacity: 0; transform: translateY(40px) scale(0.96); }
          60%  { transform: translateY(-6px) scale(1.01); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .sky-prev-cards-container.is-visible {
          animation: cardsRowPop 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        /* Play-button kill overlay */
        .hero-video-kill {
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;
          background: transparent;
        }
      `}</style>

      <div className="sky-hero-scroll-wrapper relative w-full">
        {/* ─── BANNER CONTAINER ─── */}
        <section id="home-banner" className="sky-banner-sec relative overflow-hidden">

          {/* Ambient Glow Background — fades out on scroll when video reveals */}
          <div className="hero-gradient-bg absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-indigo-600/30 via-blue-600/25 to-sky-400/20 rounded-full blur-[150px] animate-pulse" />
            <div className="absolute bottom-5 left-10 w-[450px] h-[350px] bg-sky-500/20 rounded-full blur-[140px]" />
            <div className="absolute top-20 right-10 w-[450px] h-[350px] bg-purple-600/20 rounded-full blur-[140px]" />
          </div>

          {/* Concentric Orbits & Icons Background */}
          <div className="sky-orbits-wrapper absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
            {/* SVG Orbits */}
            <svg width="100%" height="100%" className="absolute min-w-[1400px] min-h-[1400px] opacity-25" viewBox="0 0 1000 1000" fill="none">
              <circle cx="500" cy="500" r="240" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" strokeDasharray="6 6" />
              <circle cx="500" cy="500" r="380" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" strokeDasharray="6 6" />
              <circle cx="500" cy="500" r="520" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" strokeDasharray="6 6" />
              <circle cx="500" cy="500" r="660" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" strokeDasharray="6 6" />
            </svg>

            {/* Floating Icons positioned on left/right sides */}
            <div className="sky-orbit-icon-wrap" style={{ left: "6%", top: "22%" }}>
              <div className="sky-orbit-icon-inner" style={{ animationDelay: "0s", animationDuration: "5s" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
            </div>
            <div className="sky-orbit-icon-wrap" style={{ right: "6%", top: "20%" }}>
              <div className="sky-orbit-icon-inner" style={{ animationDelay: "1s", animationDuration: "6s" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                  <circle cx="12" cy="12" r="4" fill="none" />
                </svg>
              </div>
            </div>
            <div className="sky-orbit-icon-wrap" style={{ left: "14%", top: "50%" }}>
              <div className="sky-orbit-icon-inner" style={{ animationDelay: "2s", animationDuration: "5.5s" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.42-1.89-1.95-3.5-4-3.5-3 0-5.5 2.5-5.5 5.5A3.5 3.5 0 0 0 10 19Z" />
                </svg>
              </div>
            </div>
            <div className="sky-orbit-icon-wrap" style={{ right: "14%", top: "48%" }}>
              <div className="sky-orbit-icon-inner" style={{ animationDelay: "3s", animationDuration: "6.5s" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19V5M5 12h14" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
            </div>
            <div className="sky-orbit-icon-wrap" style={{ left: "8%", top: "76%" }}>
              <div className="sky-orbit-icon-inner" style={{ animationDelay: "1.5s", animationDuration: "4.8s" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
            </div>
            <div className="sky-orbit-icon-wrap" style={{ right: "8%", top: "74%" }}>
              <div className="sky-orbit-icon-inner" style={{ animationDelay: "2.5s", animationDuration: "5.8s" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
              </div>
            </div>
          </div>

          {/* Background Video — full screen, auto-plays muted without YouTube play button/UI */}
          <div className="hero-video-mask pointer-events-none">
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ zIndex: 1 }}
            >
              <source src="/videos/hero-sys.mp4" type="video/mp4" />
              {/* Fallback high-quality abstract technology loop */}
              <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-background-32158-large.mp4" type="video/mp4" />
            </video>
            {/* Dark overlay — fades out on scroll to reveal video */}
            <div className="absolute inset-0 hero-video-overlay" style={{ background: "linear-gradient(to bottom, rgba(2,7,31,0.80) 0%, rgba(4,8,36,0.65) 50%, rgba(2,7,31,0.78) 100%)", zIndex: 2 }} />
            {/* Play-button kill layer */}
            <div className="hero-video-kill" />
          </div>

          {/* Content — centered vertically, pushed slightly below midpoint */}
          <div className="sky-hero-text-aligner" style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", padding: "0 24px", width: "100%", paddingTop: "10vh", paddingBottom: "4vh" }}>

            {/* Heading and Tag Container */}
            <div className="flex flex-col items-center text-center">
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
            </div>


            {/* Details & CTA Container */}
            <div className="flex flex-col items-center text-center">
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
                  Book a Demo
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
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

          </div>

          {/* ─── 4 CARDS VIEW SLIDER CONTAINER (3-COLUMN LAYOUT ON DESKTOP) ─── */}
          <div className="sky-prev-cards-container relative w-full max-w-[1240px] mx-auto z-20 px-6 md:px-14">

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
                        <div className="sky-prev-card group sky-dotted-grid min-h-[360px]" style={{ "--card-accent": "#3B82F6", "--card-accent-border": "rgba(59, 130, 246, 0.35)", "--card-accent-alpha": "rgba(59, 130, 246, 0.22)", "--card-accent-hover-shadow": "rgba(59, 130, 246, 0.55)" } as React.CSSProperties}>
                          {/* Ambient Glows */}
                          <div className="sky-card-glow" />
                          <div className="sky-card-glow-2" />
                          {/* Background Dotted Line Graphics */}
                          <div className="absolute inset-0 pointer-events-none opacity-20">
                            <svg className="w-full h-full" fill="none">
                              <line x1="20%" y1="0" x2="20%" y2="100%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                              <line x1="80%" y1="0" x2="80%" y2="100%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                              <circle cx="50%" cy="30%" r="5" fill="#38BDF8" className="animate-pulse" />
                            </svg>
                          </div>

                          <div className="flex items-center justify-between mb-3 relative z-10">
                            <span className="card-label" style={{ color: "#2563EB" }}>Custom Websites</span>
                            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] font-bold relative">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping absolute" />
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 relative" />
                              <span className="pl-2.5">LIVE</span>
                            </div>
                          </div>
                          <h3 className="text-[15px] font-extrabold m-0 mb-1 leading-snug relative z-10" style={{color:'#ffffff'}}>Responsive UI/UX</h3>
                          <p className="text-[11.5px] m-0 mb-4 relative z-10" style={{color:'#d7d7d7'}}>High-conversion landing pages & apps</p>

                          {/* Browser Frame Mockup */}
                          <div className="flex-1 bg-slate-950/40 rounded-2xl border border-white/5 p-3 flex flex-col gap-2 min-h-[110px] relative z-10">
                            {/* Browser Header dots */}
                            <div className="flex items-center gap-1.5 pb-2 border-b border-white/5">
                              <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                              <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              <div className="flex-1 bg-white/5 rounded h-4 mx-2 text-[8px] text-slate-400 flex items-center px-2 font-mono truncate">syscorp.tech/websites</div>
                            </div>
                            
                            {/* Website content miniature */}
                            <div className="flex flex-col gap-1.5 pt-1">
                              <div className="flex items-center justify-between">
                                <div className="w-12 h-2 bg-blue-500 rounded sky-mockup-line" />
                                <div className="flex gap-1">
                                  <div className="w-4 h-1.5 bg-white/10 rounded sky-mockup-line" />
                                  <div className="w-4 h-1.5 bg-white/10 rounded sky-mockup-line" />
                                </div>
                              </div>
                              <div className="w-3/4 h-2 bg-white/10 rounded mt-1 sky-mockup-line" />
                              <div className="w-full h-1.5 bg-white/5 rounded sky-mockup-line" />
                            </div>
                          </div>

                          {/* Two Buttons */}
                          <div className="flex gap-2 mt-4 relative z-10">
                            <a href="/services/website-development" className="sky-card-btn-primary">
                              View Demo
                            </a>
                            <a href="/contact" className="sky-card-btn-secondary">
                              Learn More
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  // Card 2: CRM & Maintenance
                  if (card.type === "crm") {
                    return (
                      <div key={idx} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
                        <div className="sky-prev-card group sky-dotted-grid min-h-[360px]" style={{ "--card-accent": "#10B981", "--card-accent-border": "rgba(16, 185, 129, 0.35)", "--card-accent-alpha": "rgba(16, 185, 129, 0.22)", "--card-accent-hover-shadow": "rgba(16, 185, 129, 0.55)" } as React.CSSProperties}>
                          {/* Ambient Glows */}
                          <div className="sky-card-glow" />
                          <div className="sky-card-glow-2" />
                          {/* Background Dotted Curved Trendline */}
                          <div className="absolute inset-0 pointer-events-none opacity-20">
                            <svg className="w-full h-full" fill="none">
                              <path d="M 0 60 Q 75 25 150 45 T 300 20" stroke="white" strokeWidth="1.5" strokeDasharray="3 3" />
                              <circle cx="75" cy="38" r="4" fill="#10B981" />
                              <circle cx="150" cy="45" r="4" fill="#10B981" />
                            </svg>
                          </div>

                          <div className="flex items-center justify-between mb-3 relative z-10">
                            <span className="card-label" style={{ color: "#10B981" }}>CRM & Maintenance</span>
                            <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">+142%</span>
                          </div>
                          <h3 className="text-[15px] font-extrabold m-0 mb-1 leading-snug relative z-10" style={{color:'#ffffff'}}>Sales Target & Support</h3>
                          <p className="text-[11.5px] m-0 mb-4 relative z-10" style={{color:'#d7d7d7'}}>Accelerating pipelines & updates</p>

                          <div className="flex-1 bg-slate-950/40 rounded-2xl border border-white/5 p-3 flex flex-col justify-end min-h-[110px] relative z-10">
                            <div className="w-full h-[65px] relative overflow-hidden mb-1">
                              <svg width="100%" height="65" viewBox="0 0 200 65" fill="none" className="absolute bottom-0 left-0">
                                <defs>
                                  <linearGradient id="crmGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="rgba(16,185,129,0.25)" />
                                    <stop offset="100%" stopColor="rgba(16,185,129,0)" />
                                  </linearGradient>
                                </defs>
                                <path d="M 0 60 Q 40 55 80 35 T 160 18 T 200 5 L 200 65 L 0 65 Z" fill="url(#crmGrad)" />
                                <path d="M 0 60 Q 40 55 80 35 T 160 18 T 200 5" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
                                <circle cx="200" cy="5" r="3.5" fill="#10B981" className="animate-pulse" />
                              </svg>
                              <div className="absolute top-1 left-1 flex flex-col">
                                <span className="text-[11px] font-bold text-white">$569,200</span>
                                <span className="text-[7.5px] text-slate-400">Pipeline Target Reach</span>
                              </div>
                            </div>
                          </div>

                          {/* Two Buttons */}
                          <div className="flex gap-2 mt-4 relative z-10">
                            <a href="/services" className="sky-card-btn-primary">
                              View CRM
                            </a>
                            <a href="/contact" className="sky-card-btn-secondary">
                              Learn More
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  // Card 3: SEO & Rankings
                  if (card.type === "seo") {
                    return (
                      <div key={idx} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
                        <div className="sky-prev-card group sky-dotted-grid min-h-[360px]" style={{ "--card-accent": "#A855F7", "--card-accent-border": "rgba(168, 85, 247, 0.35)", "--card-accent-alpha": "rgba(168, 85, 247, 0.22)", "--card-accent-hover-shadow": "rgba(168, 85, 247, 0.55)" } as React.CSSProperties}>
                          {/* Ambient Glows */}
                          <div className="sky-card-glow" />
                          <div className="sky-card-glow-2" />
                          {/* Background Concentric Dotted Circles */}
                          <div className="absolute inset-0 pointer-events-none opacity-20">
                            <svg className="w-full h-full" fill="none">
                              <circle cx="50%" cy="50%" r="50" stroke="white" strokeWidth="1" strokeDasharray="3 3" />
                              <circle cx="50%" cy="50%" r="28" stroke="white" strokeWidth="1" strokeDasharray="3 3" />
                            </svg>
                          </div>

                          <div className="flex items-center justify-between mb-3 relative z-10">
                            <span className="card-label" style={{ color: "#A855F7" }}>SEO & Rankings</span>
                            <span className="text-[10px] font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full">DA 85</span>
                          </div>
                          <h3 className="text-[15px] font-extrabold m-0 mb-1 leading-snug relative z-10" style={{color:'#ffffff'}}>Organic Growth</h3>
                          <p className="text-[11.5px] m-0 mb-4 relative z-10" style={{color:'#d7d7d7'}}>First-page Google presence</p>

                          <div className="flex-1 bg-slate-950/40 rounded-2xl border border-white/5 p-3 flex flex-col justify-end min-h-[110px] relative z-10">
                            {/* Highlight badge */}
                            <div className="bg-[#A855F7] text-white px-2 py-0.5 rounded text-[8px] font-bold w-fit mx-auto mb-2 relative shadow-lg shadow-purple-500/20">
                              Rank #1 Achieved
                              <div className="absolute bottom-[-3px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-t-[3px] border-t-[#A855F7]" />
                            </div>

                            {/* Bars chart */}
                            <div className="flex items-end justify-between h-[40px] gap-2 px-1 mb-1">
                              <div className="w-full h-[55%] bg-purple-500/20 rounded-t-sm sky-mockup-bar" />
                              <div className="w-full h-[75%] bg-purple-500/20 rounded-t-sm sky-mockup-bar" />
                              <div className="w-full h-[40%] bg-purple-500/20 rounded-t-sm sky-mockup-bar" />
                              <div className="w-full h-[95%] bg-[#A855F7] rounded-t-sm shadow-[0_0_12px_rgba(168,85,247,0.4)] sky-mockup-bar" />
                              <div className="w-full h-[30%] bg-purple-500/20 rounded-t-sm sky-mockup-bar" />
                              <div className="w-full h-[80%] bg-purple-500/20 rounded-t-sm sky-mockup-bar" />
                            </div>

                            {/* Months */}
                            <div className="flex justify-between text-[7.5px] text-slate-500 font-bold px-1">
                              <span>Jan</span>
                              <span>Mar</span>
                              <span>May</span>
                              <span>Jul</span>
                            </div>
                          </div>

                          {/* Two Buttons */}
                          <div className="flex gap-2 mt-4 relative z-10">
                            <a href="/services" className="sky-card-btn-primary">
                              View Report
                            </a>
                            <a href="/contact" className="sky-card-btn-secondary">
                              Learn More
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  // Card 4: Cloud & Security
                  if (card.type === "cloud") {
                    return (
                      <div key={idx} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
                        <div className="sky-prev-card group sky-dotted-grid min-h-[360px]" style={{ "--card-accent": "#0ea5e9", "--card-accent-border": "rgba(14, 165, 233, 0.35)", "--card-accent-alpha": "rgba(14, 165, 233, 0.22)", "--card-accent-hover-shadow": "rgba(14, 165, 233, 0.55)" } as React.CSSProperties}>
                          {/* Ambient Glows */}
                          <div className="sky-card-glow" />
                          <div className="sky-card-glow-2" />
                          {/* Background Dotted Line Graphics */}
                          <div className="absolute inset-0 pointer-events-none opacity-20">
                            <svg className="w-full h-full" fill="none">
                              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white" strokeWidth="1" strokeDasharray="3 3" />
                              <line x1="0" y1="50%" x2="100%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="3 3" />
                            </svg>
                          </div>

                          <div className="flex items-center justify-between mb-3 relative z-10">
                            <span className="card-label" style={{ color: "#0ea5e9" }}>Cloud Ops</span>
                            <span className="text-[10px] font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full">99.9% Uptime</span>
                          </div>
                          <h3 className="text-[15px] font-extrabold m-0 mb-1 leading-snug relative z-10" style={{color:'#ffffff'}}>Cloud Scaling</h3>
                          <p className="text-[11.5px] m-0 mb-4 relative z-10" style={{color:'#d7d7d7'}}>High-availability hosting & security</p>

                          <div className="flex-1 bg-slate-950/40 rounded-2xl border border-white/5 p-3 flex items-center justify-center relative min-h-[110px] z-10">
                            {/* Concentric Dotted Circles that rotate slowly on hover */}
                            <div className="sky-orbit-circle-outer absolute w-[70px] h-[70px] rounded-full border border-dashed border-white/10" />
                            <div className="sky-orbit-circle-inner absolute w-[40px] h-[40px] rounded-full border border-dashed border-white/10" />

                            {/* Center Cloud Icon */}
                            <div className="sky-orbit-node absolute z-10 w-7 h-7 rounded-full bg-slate-900 flex items-center justify-center text-sky-400 border border-sky-500/30 shadow-[0_0_15px_rgba(56,189,248,0.35)] font-bold text-xs">
                              ☁️
                            </div>

                            {/* Connected Cloud Nodes */}
                            <div className="sky-orbit-node absolute top-[8px] left-[18px] bg-slate-900 p-0.5 rounded-full shadow-lg border border-white/5">
                              <span className="text-[8px] leading-none block">⚡</span>
                            </div>
                            <div className="sky-orbit-node absolute top-[8px] right-[18px] bg-slate-900 p-0.5 rounded-full shadow-lg border border-white/5">
                              <span className="text-[8px] leading-none block">🔒</span>
                            </div>
                            <div className="sky-orbit-node absolute bottom-[8px] left-[18px] bg-slate-900 p-0.5 rounded-full shadow-lg border border-white/5">
                              <span className="text-[8px] leading-none block">⚙️</span>
                            </div>
                            <div className="sky-orbit-node absolute bottom-[8px] right-[18px] bg-slate-900 p-0.5 rounded-full shadow-lg border border-white/5">
                              <span className="text-[8px] leading-none block">💾</span>
                            </div>
                          </div>

                          {/* Two Buttons */}
                          <div className="flex gap-2 mt-4 relative z-10">
                            <a href="/services" className="sky-card-btn-primary">
                              View Plans
                            </a>
                            <a href="/contact" className="sky-card-btn-secondary">
                              Learn More
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return null;
                })}

              </div>
            </div>

            {/* Pagination Dots (Mobile/Tablet only) */}
            <div className="flex justify-center gap-2 mt-4 md:hidden">
              {[0, 1, 2, 3].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? "bg-blue-600 w-6" : "bg-slate-300 dark:bg-slate-700"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </section>
      </div>

      {/* ─── PARTNER TICKER ─── */}

    </div>
  );
}
