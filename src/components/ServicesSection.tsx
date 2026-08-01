"use client";
import React, { useCallback, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const services = [
  {
    title: "Web & Mobile Development",
    description: "Building responsive web applications and hybrid mobile apps with modern frameworks.",
    bgImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?fm=jpg&q=75&w=500&auto=format&fit=crop",
    icon: (
      <svg className="sky-service-icon" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="3" y="3" width="11" height="11" rx="2" />
        <rect x="10" y="10" width="11" height="11" rx="2" />
      </svg>
    ),
    tags: ["React / Next.js", "iOS & Android", "Node.js API", "UI Integration"]
  },
  {
    title: "AI & Machine Learning",
    description: "Integrating smart recommendation systems, predictive algorithms, and conversational agents.",
    bgImage: "https://cdn.britannica.com/47/246247-050-F1021DE9/AI-text-to-image-photo-robot-with-computer.jpg",
    icon: (
      <svg className="sky-service-icon" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="7" cy="15" r="4" />
        <circle cx="17" cy="15" r="4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 11V7a2 2 0 012-2h6a2 2 0 012 2v4M12 5v14" />
      </svg>
    ),
    tags: ["NLP Models", "Predictive Analytics", "Custom LLMs", "Computer Vision"]
  },
  {
    title: "Cloud & Infrastructure",
    description: "Designing secure cloud environments on AWS/Azure with automated CI/CD deployment pipelines.",
    bgImage: "https://www.brainvire.com/blog/wp-content/uploads/2024/09/AI-In-Cloud-Computing-Is-Bringing-Efficiency-And-Scalability.webp",
    icon: (
      <svg className="sky-service-icon" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="5" />
        <circle cx="8" cy="14" r="5" />
        <circle cx="16" cy="14" r="5" />
      </svg>
    ),
    tags: ["AWS / Azure", "CI/CD Pipelines", "Docker / K8s", "Cloud Security"]
  },
  {
    title: "UI/UX & Design Systems",
    description: "Crafting modern dashboard user interfaces, interaction flows, and corporate web experiences.",
    bgImage: "https://www.milesweb.com/blog/wp-content/uploads/2024/06/ui-ux-trends.png",
    icon: (
      <svg className="sky-service-icon" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9v3a6 6 0 0012 0V9m-12 0h3v3a3 3 0 006 0V9h3" />
      </svg>
    ),
    tags: ["Figma Prototypes", "Design Systems", "User Research", "Wireframing"]
  }
];

export default function ServicesSection() {
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        playOnInit: true,
      }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const cards = cardsRef.current;
    const ctx = gsap.context(() => {
      cards.forEach((card) => {
        if (!card) return;

        const bgImg = card.querySelector(".sky-service-bg-img");
        const icon = card.querySelector(".sky-service-icon");
        const arrow = card.querySelector(".sky-service-arrow-btn");
        const glow = card.querySelector(".sky-service-glow");
        const title = card.querySelector(".sky-service-title");
        const desc = card.querySelector(".sky-service-desc");
        const cover = card.querySelector(".sky-service-card-cover");

        const onMouseMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          // Compute perspective tilt rotation offsets
          const xc = rect.width / 2;
          const yc = rect.height / 2;
          const rotateY = ((x - xc) / xc) * 8; // max 8 degrees Y axis
          const rotateX = -((y - yc) / yc) * 8; // max 8 degrees X axis

          gsap.to(card, {
            rotateX: rotateX,
            rotateY: rotateY,
            transformPerspective: 500,
            duration: 0.35,
            ease: "power2.out",
            overwrite: "auto",
          });

          // Move spotlight glow
          if (glow) {
            gsap.to(glow, {
              left: `${x}px`,
              top: `${y}px`,
              opacity: 1,
              duration: 0.25,
              ease: "power2.out",
            });
          }
        };

        const onMouseEnter = () => {
          gsap.to(card, {
            scale: 1.025,
            duration: 0.4,
            ease: "power2.out",
          });
          if (cover) {
            gsap.to(cover, {
              xPercent: 100,
              yPercent: -100,
              duration: 0.65,
              ease: "power2.out",
            });
          }
          if (title) {
            gsap.to(title, {
              color: "#FFFFFF",
              duration: 0.45,
            });
          }
          if (desc) {
            gsap.to(desc, {
              color: "rgba(255, 255, 255, 0.9)",
              duration: 0.45,
            });
          }
          if (bgImg) {
            gsap.to(bgImg, {
              scale: 1.1,
              opacity: 0.95,
              duration: 0.6,
              ease: "power2.out",
            });
          }
          if (icon) {
            gsap.to(icon, {
              scale: 1.18,
              rotation: 12,
              color: "#FFFFFF",
              duration: 0.45,
              ease: "back.out(1.7)",
            });
          }
          if (arrow) {
            gsap.to(arrow, {
              scale: 1.1,
              backgroundColor: "#1A5CDD",
              borderColor: "transparent",
              color: "#ffffff",
              rotation: 45,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        };

        const onMouseLeave = () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          });
          if (cover) {
            gsap.to(cover, {
              xPercent: 0,
              yPercent: 0,
              duration: 0.65,
              ease: "power2.out",
            });
          }
          if (glow) {
            gsap.to(glow, {
              opacity: 0,
              duration: 0.5,
            });
          }
          const isDark = document.documentElement.classList.contains("dark");
          if (title) {
            gsap.to(title, {
              color: isDark ? "#FFFFFF" : "#011146",
              duration: 0.45,
            });
          }
          if (desc) {
            gsap.to(desc, {
              color: isDark ? "#9CA3AF" : "#4B5563",
              duration: 0.45,
            });
          }
          if (bgImg) {
            gsap.to(bgImg, {
              scale: 1,
              opacity: 0.95,
              duration: 0.5,
              ease: "power2.out",
            });
          }
          if (icon) {
            gsap.to(icon, {
              scale: 1,
              rotation: 0,
              color: isDark ? "#60A5FA" : "#1A5CDD",
              duration: 0.4,
            });
          }
          if (arrow) {
            gsap.to(arrow, {
              scale: 1,
              backgroundColor: isDark ? "rgba(255, 255, 255, 0.08)" : "#FFFFFF",
              borderColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(26, 92, 221, 0.15)",
              color: isDark ? "#FFFFFF" : "#1A5CDD",
              rotation: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        };

        card.addEventListener("mousemove", onMouseMove);
        card.addEventListener("mouseenter", onMouseEnter);
        card.addEventListener("mouseleave", onMouseLeave);

        // cleanup listeners on unmount
        card.addEventListener("destroy", () => {
          card.removeEventListener("mousemove", onMouseMove);
          card.removeEventListener("mouseenter", onMouseEnter);
          card.removeEventListener("mouseleave", onMouseLeave);
        });
      });
    }, cards);

    return () => {
      ctx.revert();
      cards.forEach((card) => {
        if (card) {
          card.dispatchEvent(new Event("destroy"));
        }
      });
    };
  }, []);

  return (
    <section
      aria-labelledby="services-heading"
      className="sky-services-section bg-[#F0F8FF] dark:bg-[#080f25] py-[100px] relative overflow-hidden transition-colors duration-500"
    >
      {/* Background radial decorations */}
      <div className="sky-services-bg-glow-1" />
      <div className="sky-services-bg-glow-2" />

      <style>{`

        .sky-services-bg-glow-1 {
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(26, 92, 221, 0.03) 0%, transparent 70%);
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 0;
        }
        .dark .sky-services-bg-glow-1 {
          background: radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%);
        }

        .sky-services-bg-glow-2 {
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.03) 0%, transparent 70%);
          bottom: 0;
          right: 0;
          pointer-events: none;
          z-index: 0;
        }
        .dark .sky-services-bg-glow-2 {
          background: radial-gradient(circle, rgba(34, 211, 238, 0.06) 0%, transparent 70%);
        }

        .sky-services-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }

        /* 2-Column Header layout on desktop */
        .sky-services-header {
          display: flex;
          flex-direction: column;
          gap: 28px;
          margin-bottom: 64px;
        }
        @media (min-width: 1024px) {
          .sky-services-header {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
            gap: 64px;
          }
        }

        .sky-services-header-left {
          flex: 1.15;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .sky-services-header-right {
          flex: 0.85;
          display: flex;
          flex-direction: column;
          gap: 24px;
          align-items: flex-start;
        }

        .sky-services-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 800;
          color: #1A5CDD;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .dark .sky-services-badge {
          color: #60A5FA;
        }
        .sky-services-badge-star {
          color: #1A5CDD;
          display: inline-flex;
          align-items: center;
          font-size: 14px;
        }
        .dark .sky-services-badge-star {
          color: #60A5FA;
        }

        .sky-services-heading-caps {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 850;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: #011146;
          font-family: 'Plus Jakarta Sans', sans-serif;
          margin: 0;
          text-transform: uppercase;
        }
        .dark .sky-services-heading-caps {
          color: #FFFFFF;
        }

        .sky-services-header-desc {
          font-size: 15px;
          color: #4B5563;
          line-height: 1.7;
          margin: 0;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .dark .sky-services-header-desc {
          color: #9CA3AF;
        }

        .sky-services-btn-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #1A5CDD;
          color: #FFFFFF;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 14.5px;
          padding: 14px 30px;
          border-radius: 50px;
          text-decoration: none;
          box-shadow: 0 6px 18px rgba(26, 92, 221, 0.15);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .dark .sky-services-btn-pill {
          background: #3B82F6;
          color: #FFFFFF;
          box-shadow: 0 6px 18px rgba(59, 130, 246, 0.25);
        }
        .sky-services-btn-pill:hover {
          background: #011146;
          color: #FFFFFF;
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(1, 17, 70, 0.2);
        }
        .dark .sky-services-btn-pill:hover {
          background: #FFFFFF;
          color: #011146;
          box-shadow: 0 10px 24px rgba(255, 255, 255, 0.15);
        }
        .sky-services-btn-arrow {
          transition: transform 0.3s ease;
        }
        .sky-services-btn-pill:hover .sky-services-btn-arrow {
          transform: translate(2px, -2px);
        }

        /* 4-Card Grid */
        .sky-services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 640px) {
          .sky-services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .sky-services-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        /* Single Card element */
        .sky-service-card {
          position: relative;
          height: 380px;
          border-radius: 24px;
          padding: 30px;
          background: #FFFFFF;
          border: 1px solid rgba(26, 92, 221, 0.08);
          box-shadow: 0 10px 30px rgba(1, 17, 70, 0.02);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          text-decoration: none;
          will-change: transform;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
        .dark .sky-service-card {
          background: #0b0f19;
          border-color: rgba(255, 255, 255, 0.06);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        }

        /* Spotlight glow effect */
        .sky-service-glow {
          position: absolute;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(26, 92, 221, 0.18) 0%, transparent 70%);
          pointer-events: none;
          z-index: 2;
          opacity: 0;
          transform: translate(-50%, -50%);
          mix-blend-mode: screen;
        }
        .dark .sky-service-glow {
          background: radial-gradient(circle, rgba(96, 165, 250, 0.22) 0%, transparent 70%);
        }

        /* Background Hover Image */
        .sky-service-bg-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          opacity: 0.95;
          transform: scale(1);
          border-radius: inherit;
        }
        .sky-service-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(1, 17, 70, 0.55) 0%, rgba(1, 17, 70, 0.85) 100%);
          z-index: 1;
          opacity: 1;
          border-radius: inherit;
        }
        .dark .sky-service-overlay {
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.85) 100%);
        }

        /* Sliding cover layer */
        .sky-service-card-cover {
          position: absolute;
          inset: 0;
          background: #FFFFFF;
          z-index: 3;
          will-change: transform;
          pointer-events: none;
          border-radius: inherit;
        }
        .dark .sky-service-card-cover {
          background: #0b0f19;
        }

        /* Inner Content layout */
        .sky-service-content {
          position: relative;
          z-index: 4;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .sky-service-icon {
          color: #1A5CDD;
          transform-origin: center;
        }
        .dark .sky-service-icon {
          color: #60A5FA;
        }

        .sky-service-title {
          font-size: 19px;
          font-weight: 800;
          color: #011146;
          margin: 16px 0 8px 0;
          font-family: 'Plus Jakarta Sans', sans-serif;
          transition: color 0.3s ease;
        }
        .dark .sky-service-title {
          color: #FFFFFF;
        }

        .sky-service-desc {
          font-size: 13px;
          color: #4B5563;
          line-height: 1.6;
          margin: 0 0 16px 0;
          font-family: 'Plus Jakarta Sans', sans-serif;
          transition: color 0.3s ease;
        }
        .dark .sky-service-desc {
          color: #9CA3AF;
        }

        /* Tags Container */
        .sky-service-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 20px;
        }
        .sky-service-tag-btn {
          font-size: 10px;
          font-weight: 800;
          padding: 5px 10px;
          border-radius: 50px;
          background: rgba(26, 92, 221, 0.05);
          border: 1px solid rgba(26, 92, 221, 0.12);
          color: #1A5CDD;
          transition: all 0.3s ease;
          font-family: 'Plus Jakarta Sans', sans-serif;
          letter-spacing: 0.03em;
        }
        .dark .sky-service-tag-btn {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.08);
          color: #9CA3AF;
        }
        .sky-service-card:hover .sky-service-tag-btn {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.25);
          color: #FFFFFF;
        }

        /* Card bottom action area */
        .sky-service-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          width: 100%;
        }

        .sky-service-learn-more {
          font-size: 12.5px;
          font-weight: 800;
          color: #1A5CDD;
          font-family: 'Plus Jakarta Sans', sans-serif;
          transition: all 0.3s ease;
          letter-spacing: 0.03em;
        }
        .dark .sky-service-learn-more {
          color: #60A5FA;
        }
        .sky-service-card:hover .sky-service-learn-more {
          color: #FFFFFF;
        }

        /* Round arrow CTA button */
        .sky-service-arrow-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1.5px solid rgba(26, 92, 221, 0.15);
          color: #1A5CDD;
          background: #FFFFFF;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
        }
        .dark .sky-service-arrow-btn {
          border-color: rgba(255, 255, 255, 0.1);
          color: #FFFFFF;
          background: rgba(255, 255, 255, 0.08);
        }

        /* Viewport and Containers */
        .sky-embla-viewport {
          overflow: hidden;
          width: 100%;
          cursor: grab;
        }
        .sky-embla-viewport:active {
          cursor: grabbing;
        }
        .sky-embla-container {
          display: flex;
          touch-action: pan-y pinch-zoom;
          margin-left: -24px;
        }
        .sky-embla-slide {
          flex: 0 0 100%;
          min-width: 0;
          padding-left: 24px;
          box-sizing: border-box;
        }
        @media (min-width: 640px) {
          .sky-embla-slide {
            flex: 0 0 50%;
          }
        }
        @media (min-width: 1024px) {
          .sky-embla-slide {
            flex: 0 0 33.3333%;
          }
        }

        /* Carousel Navigation Buttons */
        .sky-carousel-controls {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .sky-carousel-arrow {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: 1.5px solid rgba(26, 92, 221, 0.15);
          background: #FFFFFF;
          color: #011146;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          outline: none;
        }
        .dark .sky-carousel-arrow {
          background: rgba(255, 255, 255, 0.03);
          border-color: rgba(255, 255, 255, 0.08);
          color: #FFFFFF;
        }
        .sky-carousel-arrow:hover {
          background: #1A5CDD;
          border-color: transparent;
          color: #FFFFFF;
          box-shadow: 0 6px 16px rgba(26, 92, 221, 0.2);
        }
        .dark .sky-carousel-arrow:hover {
          background: #3B82F6;
          box-shadow: 0 6px 16px rgba(59, 130, 246, 0.3);
        }

        /* Dot Indicators */
        .sky-carousel-dots {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 36px;
        }
        .sky-carousel-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(26, 92, 221, 0.15);
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all 0.3s ease;
          outline: none;
        }
        .dark .sky-carousel-dot {
          background: rgba(255, 255, 255, 0.15);
        }
        .sky-carousel-dot-active {
          width: 24px;
          border-radius: 6px;
          background: #1A5CDD;
        }
        .dark .sky-carousel-dot-active {
          background: #3B82F6;
        }
      `}</style>

      <div className="sky-services-container">

        {/* HEADER SECTION (2-Columns Responsive) */}
        <div className="sky-services-header gsap-services-header-box">
          <div className="sky-services-header-left">
            <div className="sky-about-badge-anim flex flex-col gap-[18px]">
              <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 dark:bg-blue-500/10 dark:border-blue-500/20 rounded-full px-3.5 py-1 text-xs font-bold text-[#1A5CDD] dark:text-blue-400 w-fit uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] dark:bg-blue-400 inline-block animate-pulse" />
                Our Services
              </span>
              <h2 id="services-heading" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight m-0 font-sans tracking-tight">
                Expert IT Services That Shape <span className="text-[#1A5CDD] dark:text-[#60A5FA]">Powerful Software</span>
              </h2>
            </div>
          </div>

          <div className="sky-services-header-right">
            <p className="sky-services-header-desc">
              We provide end-to-end software engineering and digital transformation solutions focused on enhancing usability, improving scalability, and bringing your business ideas to life.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap", justifyContent: "space-between", width: "100%" }}>
              <Link href="/services" className="sky-services-btn-pill">
                View All Services
                <svg className="sky-services-btn-arrow" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </Link>
              {/* Slider Navigation Arrows */}
              <div className="sky-carousel-controls">
                <button className="sky-carousel-arrow" onClick={scrollPrev} aria-label="Previous slide">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button className="sky-carousel-arrow" onClick={scrollNext} aria-label="Next slide">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICES CARDS SLIDER (EMBLA) */}
        <div className="sky-embla-viewport" ref={emblaRef}>
          <div className="sky-embla-container">
            {services.map((s, i) => (
              <div key={i} className="sky-embla-slide">
                <Link
                  href="/services"
                  ref={(el) => {
                    if (el) cardsRef.current[i] = el;
                  }}
                  className="sky-service-card gsap-service-card-item"
                >
                  {/* Dynamic spotlight glow overlay */}
                  <div className="sky-service-glow" />

                  {/* Background hover image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.bgImage}
                    alt=""
                    className="sky-service-bg-img"
                    loading="lazy"
                  />
                  <div className="sky-service-overlay" />

                  {/* Sliding cover layer */}
                  <div className="sky-service-card-cover" />

                  {/* Card Inner Content */}
                  <div className="sky-service-content">
                    <div>
                      {s.icon}
                      <h3 className="sky-service-title">{s.title}</h3>
                      <p className="sky-service-desc">{s.description}</p>
                      
                      <div className="sky-service-tags">
                        {s.tags?.map((tag, tIdx) => (
                          <span key={tIdx} className="sky-service-tag-btn">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="sky-service-bottom">
                      <span className="sky-service-learn-more">
                        Explore Service
                      </span>
                      <div className="sky-service-arrow-btn">
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3.2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* ─── PROGRESS DOTS ─── */}
        <div className="sky-carousel-dots">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`sky-carousel-dot ${index === selectedIndex ? "sky-carousel-dot-active" : ""}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Bottom CTA row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginTop: "56px" }}>
          <span style={{
            background: "#1A5CDD", color: "#FFFFFF",
            fontSize: "11px", fontWeight: 800, padding: "4px 12px",
            borderRadius: "50px", textTransform: "uppercase", letterSpacing: "0.05em",
            fontFamily: "'Plus Jakarta Sans', sans-serif"
          }}>
            Core
          </span>
          <p style={{ fontSize: "14px", color: "#4B5563", fontWeight: 700, margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="dark:text-gray-300">
            Discover Our Tailored Software & AI Services —{" "}
            <Link href="/services" style={{ fontWeight: 800, color: "#1A5CDD", textDecoration: "underline", fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="dark:text-blue-400">
              Where Innovation Meets Execution
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
}
