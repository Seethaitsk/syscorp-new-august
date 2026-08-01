"use client";
import React, { useCallback, useState, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    name: "Purvi Chopra",
    role: "SaaS Founder & CEO",
    quote: "The team delivered exceptional software quality and maintained complete transparency throughout the project. The platform was launched on time, and the code quality and project management exceeded our expectations.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=75&w=60&h=60",
  },
  {
    name: "Amita Patel",
    role: "CTO, FinTech Startup",
    quote: "The team delivered exceptional software quality and maintained complete transparency throughout the project. The platform was launched on time, and the code quality and project management exceeded our expectations.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=75&w=60&h=60",
  },
  {
    name: "Rahul Mehta",
    role: "Product Director, Tech Enterprise",
    quote: "The team delivered exceptional software quality and maintained complete transparency throughout the project. The platform was launched on time, and the code quality and project management exceeded our expectations.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=75&w=60&h=60",
  },
  {
    name: "Sneha Reddy",
    role: "Engineering Manager",
    quote: "The team delivered exceptional software quality and maintained complete transparency throughout the project. The platform was launched on time, and the code quality and project management exceeded our expectations.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=75&w=60&h=60",
  },
];

export default function TestimonialSection({ bgClass }: { bgClass?: string } = {}) {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  // GSAP Entrance ScrollTrigger + Hover 3D Tilt Animations
  useEffect(() => {
    if (typeof window === "undefined") return;

    const container = sectionRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const ease = "power2.out";

      // Scroll Trigger entrance timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 82%",
          toggleActions: "play none none none",
        }
      });

      // Stagger animate header blocks
      tl.fromTo([
        ".sky-testi-tag-badge",
        ".sky-testi-title-h2",
        ".sky-testi-desc-p",
        ".sky-testi-all-btn",
        ".sky-carousel-controls"
      ],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65, stagger: 0.08, ease }
      );

      // Slide and fade in Embla Viewport
      tl.fromTo(".sky-embla-slide",
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease },
        "-=0.5"
      );

      // Dots scale entrance
      tl.fromTo(".sky-carousel-dot",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, stagger: 0.06, ease },
        "-=0.4"
      );

      // Center divider scaling
      tl.fromTo(".sky-testi-divider-line",
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, ease },
        "-=0.35"
      );

      tl.fromTo(".sky-testi-divider-text",
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.5, ease },
        "-=0.5"
      );

      // Partner logos stagger scale-rise
      tl.fromTo(".sky-partner-logo",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease },
        "-=0.3"
      );

      // Hover 3D Tilt rotation on card wraps
      const cards = container.querySelectorAll(".sky-testi-card-wrap");
      cards.forEach((card) => {
        const htmlCard = card as HTMLElement;

        const onMouseMove = (e: MouseEvent) => {
          const rect = htmlCard.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const xc = rect.width / 2;
          const yc = rect.height / 2;
          const rotateY = ((x - xc) / xc) * 5; // max 5deg
          const rotateX = -((y - yc) / yc) * 5; // max 5deg

          gsap.to(htmlCard, {
            rotateX: rotateX,
            rotateY: rotateY,
            transformPerspective: 500,
            duration: 0.35,
            ease: "power2.out",
            overwrite: "auto",
          });
        };

        const onMouseLeave = () => {
          gsap.to(htmlCard, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.45,
            ease: "power2.out",
          });
        };

        htmlCard.addEventListener("mousemove", onMouseMove);
        htmlCard.addEventListener("mouseleave", onMouseLeave);

        htmlCard.addEventListener("destroy", () => {
          htmlCard.removeEventListener("mousemove", onMouseMove);
          htmlCard.removeEventListener("mouseleave", onMouseLeave);
        });
      });
    }, container);

    return () => {
      ctx.revert();
      const container = sectionRef.current;
      if (container) {
        const cards = container.querySelectorAll(".sky-testi-card-wrap");
        cards.forEach((card) => {
          card.dispatchEvent(new Event("destroy"));
        });
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="testimonials-heading"
      className={`sky-testi-section ${bgClass || "bg-white dark:bg-slate-950"} py-[100px] overflow-hidden relative transition-colors duration-500`}
    >
      <style>{`
        .sky-services-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 24px;
          box-sizing: border-box;
        }

        .sky-testi-header-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          align-items: flex-start;
          margin-bottom: 56px;
        }
        @media (min-width: 1024px) {
          .sky-testi-header-grid {
            grid-template-columns: 1.1fr 0.9fr;
            gap: 60px;
          }
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

        /* Card Wrap styling */
        .sky-testi-card-wrap {
          height: 100%;
          min-height: 380px;
          background: #fff;
          border-radius: 24px;
          border: 1.5px solid rgba(26, 92, 221, 0.08);
          padding: 40px;
          box-shadow: 0 12px 40px rgba(26, 92, 221, 0.02);
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 28px;
          box-sizing: border-box;
          transform-style: preserve-3d;
          will-change: transform;
          transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
        }
        .dark .sky-testi-card-wrap {
          background: rgba(1, 17, 70, 0.3);
          border-color: rgba(255, 255, 255, 0.05);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
        }
        .sky-testi-card-wrap:hover {
          box-shadow: 0 20px 48px rgba(26, 92, 221, 0.08);
          border-color: rgba(26, 92, 221, 0.2);
        }
        .dark .sky-testi-card-wrap:hover {
          background: rgba(1, 17, 70, 0.55);
          border-color: rgba(26, 92, 221, 0.4);
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.45);
        }

        .sky-testi-quote-icon {
          position: absolute;
          top: 36px;
          right: 40px;
          font-size: 64px;
          line-height: 1;
          color: rgba(26, 92, 221, 0.06);
          font-family: serif;
          user-select: none;
        }
        .dark .sky-testi-quote-icon {
          color: rgba(26, 92, 221, 0.12);
        }

        .sky-testi-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #F5F6F8;
        }
        .dark .sky-testi-avatar {
          border-color: rgba(255, 255, 255, 0.15);
        }

        .sky-testi-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #1A5CDD;
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          padding: 14px 26px;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          width: fit-content;
        }
        .dark .sky-testi-all-btn {
          background: #2563EB;
        }
        .sky-testi-all-btn:hover {
          background: #154ebc;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(26, 92, 221, 0.25);
        }
        .dark .sky-testi-all-btn:hover {
          background: #1D4ED8;
          box-shadow: 0 8px 24px rgba(37, 99, 235, 0.35);
        }

        /* Header typography */
        .sky-testi-title-h2 {
          font-size: clamp(2rem, 3.8vw, 3rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.022em;
          color: #011146;
          font-family: 'Plus Jakarta Sans', sans-serif;
          margin: 0;
          transition: color 0.3s ease;
        }
        .dark .sky-testi-title-h2 {
          color: #FFFFFF;
        }

        .sky-testi-italic {
          font-style: italic;
          color: #64748B;
          font-weight: 400;
          transition: color 0.3s ease;
        }
        .dark .sky-testi-italic {
          color: #94A3B8;
        }

        .sky-testi-tag-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(26, 92, 221, 0.05);
          border: 1px solid rgba(26, 92, 221, 0.15);
          border-radius: 50px;
          padding: 7px 18px;
          font-size: 12px;
          font-weight: 700;
          color: #1A5CDD;
          box-shadow: 0 2px 8px rgba(26, 92, 221, 0.04);
          width: fit-content;
          transition: all 0.3s ease;
        }
        .dark .sky-testi-tag-badge {
          background: rgba(26, 92, 221, 0.15);
          border-color: rgba(26, 92, 221, 0.3);
          color: #60A5FA;
        }

        .sky-testi-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #1A5CDD;
          display: inline-block;
        }
        .dark .sky-testi-dot {
          background: #60A5FA;
        }

        .sky-testi-desc-p {
          font-size: 16px;
          color: #6B7280;
          line-height: 1.78;
          margin: 0;
          transition: color 0.3s ease;
        }
        .dark .sky-testi-desc-p {
          color: #9CA3AF;
        }

        .sky-testi-quote-blockquote {
          font-size: 15px;
          color: #374151;
          line-height: 1.75;
          font-weight: 500;
          margin: 0;
          transition: color 0.3s ease;
        }
        .dark .sky-testi-quote-blockquote {
          color: #D1D5DB;
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

        /* Partner Logos styling */
        .sky-partner-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #94A3B8;
          transition: color 0.3s ease, transform 0.3s ease;
          cursor: pointer;
        }
        .dark .sky-partner-logo {
          color: #4B5563;
        }
        .sky-partner-logo:hover {
          color: #1A5CDD;
          transform: translateY(-2px);
        }
        .dark .sky-partner-logo:hover {
          color: #3B82F6;
        }

        .sky-testi-divider-line {
          flex: 1;
          height: 1px;
          background: rgba(0, 0, 0, 0.08);
          transition: background 0.3s ease;
          transform-origin: center;
        }
        .dark .sky-testi-divider-line {
          background: rgba(255, 255, 255, 0.08);
        }

        .sky-testi-divider-text {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #94A3B8;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        @media (max-width: 640px) {
          .sky-testi-card-wrap {
            padding: 32px 24px;
            gap: 20px;
          }
          .sky-testi-quote-icon {
            top: 24px;
            right: 24px;
            font-size: 48px;
          }
        }
      `}</style>

      <div className="sky-services-container">

        {/* ─── HEADER ROW ─── */}
        <div className="sky-testi-header-grid">
          {/* LEFT: Tag Badge + Title */}
          <div className="sky-about-badge-anim flex flex-col gap-[18px]">
            <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 dark:bg-blue-500/10 dark:border-blue-500/20 rounded-full px-3.5 py-1 text-xs font-bold text-[#1A5CDD] dark:text-blue-400 w-fit uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] dark:bg-blue-400 inline-block animate-pulse" />
              Our Testimonials
            </span>
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight m-0 font-sans tracking-tight">
              What Our Clients Say About Our <span className="text-[#1A5CDD] dark:text-[#60A5FA]">Software Services</span>
            </h2>
          </div>

          {/* RIGHT: Paragraph + Button + Controls */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", paddingTop: "8px" }}>
            <p className="sky-testi-desc-p">
              Our clients&apos; feedback reflects our commitment to quality, reliability, and professionalism.
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
              <a href="/contact" className="sky-testi-all-btn">
                View All Reviews
                <svg style={{ width: "14px", height: "14px" }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>

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

        {/* ─── TESTIMONIAL CARDS SLIDER (EMBLA) ─── */}
        <div className="sky-embla-viewport" ref={emblaRef}>
          <div className="sky-embla-container">
            {testimonials.map((t, idx) => (
              <div key={idx} className="sky-embla-slide">
                <div className="sky-testi-card-wrap">
                  {/* Quote marks icon */}
                  <div className="sky-testi-quote-icon">&ldquo;</div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    {/* Stars rating */}
                    <div style={{ display: "flex", gap: "4px" }}>
                      {[...Array(5)].map((_, si) => (
                        <svg key={si} style={{ width: "18px", height: "18px" }} viewBox="0 0 24 24" fill="#F59E0B">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>

                    {/* Testimonial text */}
                    <blockquote className="sky-testi-quote-blockquote">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                  </div>

                  {/* User details */}
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="sky-testi-avatar"
                    />
                    <div>
                      <p className="sky-testi-name">{t.name}</p>
                      <p className="sky-testi-role">{t.role}</p>
                    </div>
                  </div>
                </div>
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

        {/* ─── CLIENT LOGOS SECTION ─── */}
        <div style={{ marginTop: "56px", display: "flex", flexDirection: "column", gap: "36px" }}>
          {/* Divider line with center text */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div className="sky-testi-divider-line" />
            <span className="sky-testi-divider-text">
              1000+ Trusted Clients Over Worldwide
            </span>
            <div className="sky-testi-divider-line" />
          </div>

          {/* Logos Flex Row */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "32px",
            padding: "0 10px"
          }} className="justify-center md:justify-between">
            {/* Logo 1 */}
            <div className="sky-partner-logo">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="5" r="3.5" fill="currentColor" />
                <circle cx="5" cy="12" r="3.5" fill="currentColor" />
                <circle cx="19" cy="12" r="3.5" fill="currentColor" />
                <circle cx="12" cy="19" r="3.5" fill="currentColor" />
              </svg>
              <span style={{ fontSize: "18px", fontWeight: 800, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Logoipsum</span>
            </div>

            {/* Logo 2 */}
            <div className="sky-partner-logo">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C7.5 7.5 5 11 5 14C5 17.866 8.134 21 12 21C15.866 21 19 17.866 19 14C19 11 16.5 7.5 12 2ZM12 16.5C13.3807 16.5 14.5 15.3807 14.5 14C14.5 12.6193 13.3807 11.5 12 11.5C10.6193 11.5 9.5 12.6193 9.5 14C9.5 15.3807 10.6193 16.5 12 16.5Z" fill="currentColor" />
              </svg>
              <span style={{ fontSize: "18px", fontWeight: 800, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Logoipsum</span>
            </div>

            {/* Logo 3 */}
            <div className="sky-partner-logo">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="5" fill="currentColor" />
                <line x1="12" y1="2" x2="12" y2="5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="2" y1="12" x2="5" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="19" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="5" y1="5" x2="7.1" y2="7.1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="16.9" y1="16.9" x2="19" y2="19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="5" y1="19" x2="7.1" y2="16.9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="16.9" y1="7.1" x2="19" y2="5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <span style={{ fontSize: "18px", fontWeight: 800, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Logoipsum</span>
            </div>

            {/* Logo 4 */}
            <div className="sky-partner-logo">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM4 12C4 11.45 4.45 11 5 11H19C19.55 11 20 11.45 20 12C20 12.55 19.55 13 19 13H5C4.45 13 4 12.55 4 12ZM5.64 7C5.3 7 5 7.3 5.09 7.63C5.78 10.14 8.09 12 10.85 12H13.15C15.91 12 18.22 10.14 18.91 7.63C19 7.3 18.7 7 18.36 7H5.64Z" fill="currentColor" />
              </svg>
              <span style={{ fontSize: "18px", fontWeight: 800, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Logoipsum</span>
            </div>

            {/* Logo 5 */}
            <div className="sky-partner-logo">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L4 5V11C4 16.55 7.42 21.74 12 23C16.58 21.74 20 16.55 20 11V5L12 2ZM11 15H9L13 7V11H15L11 15Z" fill="currentColor" />
              </svg>
              <span style={{ fontSize: "18px", fontWeight: 800, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Logoipsum</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
