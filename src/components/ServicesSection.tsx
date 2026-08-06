"use client";
import React, { useCallback, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const services = [
  {
    title: "Custom Software Development",
    description: "Build scalable and secure software solutions tailored to your business needs, helping you automate processes, improve efficiency, and accelerate growth.",
    bgImage: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?fm=jpg&q=75&w=600&auto=format&fit=crop",
    icon: (
      <svg className="sky-service-icon" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    tags: ["Enterprise Software", "CRM Solutions", "ERP Development", "API Integration"]
  },
  {
    title: "Website Development",
    description: "Create modern, responsive, and SEO-friendly websites designed to enhance your online presence and deliver seamless digital experiences.",
    bgImage: "https://images.unsplash.com/photo-1547658719-da2b81169b42?fm=jpg&q=75&w=600&auto=format&fit=crop",
    icon: (
      <svg className="sky-service-icon" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8m-8-4h8M12 17v4" />
      </svg>
    ),
    tags: ["React / Next.js", "CMS Development", "E-commerce Solutions", "Web Applications"]
  },
  {
    title: "Mobile App Development",
    description: "Develop high-performance Android and iOS applications with intuitive designs, smooth functionality, and business-focused features.",
    bgImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?fm=jpg&q=75&w=600&auto=format&fit=crop",
    icon: (
      <svg className="sky-service-icon" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="5" y="2" width="14" height="20" rx="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 2h8" />
      </svg>
    ),
    tags: ["iOS & Android", "Flutter Apps", "Native Apps", "Mobile UI"]
  },
  {
    title: "UI/UX Design",
    description: "Design engaging and user-friendly digital experiences that improve usability, customer satisfaction, and brand interaction.",
    bgImage: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?fm=jpg&q=75&w=600&auto=format&fit=crop",
    icon: (
      <svg className="sky-service-icon" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21L14.096 20.187L21 13.283L16.717 9L9.813 15.904Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 10.5L17.5 13.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 14C4 10 7 7 11 7" strokeDasharray="3 3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 19H12" />
      </svg>
    ),
    tags: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
  },
  {
    title: "Cloud Solutions",
    description: "Transform your business infrastructure with secure and scalable cloud solutions that improve flexibility, performance, and reliability.",
    bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?fm=jpg&q=75&w=600&auto=format&fit=crop",
    icon: (
      <svg className="sky-service-icon" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    tags: ["AWS / Azure", "Cloud Migration", "DevOps", "Cloud Security"]
  },
  {
    title: "Digital Marketing",
    description: "Grow your online visibility with data-driven marketing strategies focused on increasing traffic, engagement, and business conversions.",
    bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?fm=jpg&q=75&w=600&auto=format&fit=crop",
    icon: (
      <svg className="sky-service-icon" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    ),
    tags: ["SEO", "PPC Campaigns", "Social Media", "Analytics"]
  },
  {
    title: "AI & Machine Learning",
    description: "Implement intelligent AI solutions that automate decision-making, analyze data, and create smarter business experiences.",
    bgImage: "https://images.unsplash.com/photo-1677442136019-21780efad99a?fm=jpg&q=75&w=600&auto=format&fit=crop",
    icon: (
      <svg className="sky-service-icon" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="5" y="5" width="14" height="14" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4M9 9h6v6H9V9z" />
      </svg>
    ),
    tags: ["Machine Learning", "NLP Models", "Predictive Analytics", "Custom AI Solutions"]
  },
  {
    title: "Cloud & Infrastructure",
    description: "Build reliable digital infrastructure with secure cloud environments, automation, and modern deployment practices.",
    bgImage: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?fm=jpg&q=75&w=600&auto=format&fit=crop",
    icon: (
      <svg className="sky-service-icon" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="5" rx="1" />
        <rect x="2" y="10" width="20" height="5" rx="1" />
        <rect x="2" y="17" width="20" height="5" rx="1" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 5.5h.01M6 12.5h.01M6 19.5h.01M10 5.5h4M10 12.5h4M10 19.5h4" />
      </svg>
    ),
    tags: ["AWS / Azure", "Docker / Kubernetes", "CI/CD Pipeline", "Cloud Security"]
  },
  {
    title: "CRM Development",
    description: "Develop customized CRM platforms that streamline customer management, improve collaboration, and increase business productivity.",
    bgImage: "https://images.unsplash.com/photo-1552581230-c01bc9148c00?fm=jpg&q=75&w=600&auto=format&fit=crop",
    icon: (
      <svg className="sky-service-icon" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.209A9.342 9.342 0 0112 22.5c-2.786 0-5.3-.372-7.533-1.002zM15 5.25a3 3 0 11-6 0 3 3 0 016 0zM8 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    tags: ["Custom CRM", "Sales Automation", "Customer Analytics", "Workflow Management"]
  },
  {
    title: "Software Testing & Quality Assurance",
    description: "Ensure reliable software performance with comprehensive testing solutions that improve quality, security, and user experience.",
    bgImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?fm=jpg&q=75&w=600&auto=format&fit=crop",
    icon: (
      <svg className="sky-service-icon" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    tags: ["Manual Testing", "Automation Testing", "Performance Testing", "Quality Assurance"]
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
                OUR SERVICES
              </span>
              <h2 id="services-heading" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight m-0 font-sans tracking-tight">
                End-to-End IT Services for <span className="text-[#1A5CDD] dark:text-[#60A5FA]">Every Stage of Your Business</span>
              </h2>
            </div>
          </div>

          <div className="sky-services-header-right">
            <p className="sky-services-header-desc">
              As a full-service Software Company in Pondicherry, Syscorp delivers innovative technology solutions that help businesses improve operations, enhance customer experiences, and achieve sustainable growth. Our services are designed to support your business from idea to execution with the right combination of strategy, technology, and ongoing support.
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
