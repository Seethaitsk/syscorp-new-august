"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Client Components
import HeroSlider from "@/components/HeroSlider";
import TestimonialSlider from "@/components/TestimonialSection";

// Server Components
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CommunitySection from "@/components/CommunitySection";
import ServiceCompany from "@/components/ServiceCompany";
import AchievementsSection from "@/components/AchievementsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FaqSection";
import BlogSection from "@/components/BlogSection";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const container = containerRef.current;
        if (!container) return;

        let ctx: ReturnType<typeof gsap.context> | null = null;

        const timer = setTimeout(() => {
            ctx = gsap.context(() => {
                const easeOut = "power3.out";
                const easeBack = "back.out(1.35)";

                // ── About Section — subtle fade-up + zoom out ──
                gsap.fromTo(
                    ".gsap-about-sec",
                    { y: 55, scale: 1.04, opacity: 0 },
                    {
                        y: 0, scale: 1, opacity: 1, duration: 1.1, ease: easeOut,
                        scrollTrigger: { trigger: ".gsap-about-sec", start: "top 85%", toggleActions: "play none none none" }
                    }
                );

                // ── Services Section — header fade-up ──
                gsap.fromTo(
                    ".gsap-services-header-box",
                    { y: 35, opacity: 0 },
                    {
                        y: 0, opacity: 1, duration: 0.9, ease: easeOut,
                        scrollTrigger: { trigger: ".gsap-services-sec", start: "top 85%", toggleActions: "play none none none" }
                    }
                );

                // ── Services Cards — stagger spring entry ──
                gsap.fromTo(
                    ".gsap-service-card-item",
                    { y: 65, scale: 0.94, opacity: 0 },
                    {
                        y: 0, scale: 1, opacity: 1, duration: 0.9,
                        stagger: 0.09, ease: easeBack,
                        scrollTrigger: { trigger: ".gsap-services-sec", start: "top 78%", toggleActions: "play none none none" }
                    }
                );

                // ── Service Company — split columns with tilt ──
                gsap.fromTo(
                    ".gsap-company-left-col",
                    { x: -90, rotate: -2, opacity: 0 },
                    {
                        x: 0, rotate: 0, opacity: 1, duration: 1.15, ease: easeOut,
                        scrollTrigger: { trigger: ".gsap-company-sec", start: "top 82%", toggleActions: "play none none none" }
                    }
                );
                gsap.fromTo(
                    ".gsap-company-right-col",
                    { x: 90, rotate: 2, opacity: 0 },
                    {
                        x: 0, rotate: 0, opacity: 1, duration: 1.15, ease: easeOut,
                        scrollTrigger: { trigger: ".gsap-company-sec", start: "top 82%", toggleActions: "play none none none" }
                    }
                );

                // ── Achievements Section — subtle zoom + fade ──
                gsap.fromTo(
                    ".gsap-achievements-sec",
                    { y: 55, scale: 0.96, opacity: 0 },
                    {
                        y: 0, scale: 1, opacity: 1, duration: 1.1, ease: easeOut,
                        scrollTrigger: { trigger: ".gsap-achievements-sec", start: "top 85%", toggleActions: "play none none none" }
                    }
                );

                // ── Community — blur + scale reveal ──
                gsap.fromTo(
                    ".gsap-community-sec",
                    { filter: "blur(16px)", scale: 0.94, y: 45, opacity: 0 },
                    {
                        filter: "blur(0px)", scale: 1, y: 0, opacity: 1, duration: 1.2, ease: easeOut,
                        scrollTrigger: { trigger: ".gsap-community-sec", start: "top 85%", toggleActions: "play none none none" }
                    }
                );

                // ── Testimonials — fade + rotate reveal ──
                gsap.fromTo(
                    ".gsap-testimonials-sec",
                    { y: 75, rotate: 1.5, opacity: 0 },
                    {
                        y: 0, rotate: 0, opacity: 1, duration: 1.1, ease: easeOut,
                        scrollTrigger: { trigger: ".gsap-testimonials-sec", start: "top 82%", toggleActions: "play none none none" }
                    }
                );

                // ── Pricing header ──
                gsap.fromTo(
                    ".gsap-pricing-header-box",
                    { y: 30, opacity: 0 },
                    {
                        y: 0, opacity: 1, duration: 0.85, ease: easeOut,
                        scrollTrigger: { trigger: ".gsap-pricing-sec", start: "top 85%", toggleActions: "play none none none" }
                    }
                );

                // ── Pricing cards — stagger spring ──
                gsap.fromTo(
                    ".gsap-pricing-card-item",
                    { y: 75, scale: 0.92, opacity: 0 },
                    {
                        y: 0, scale: 1, opacity: 1, duration: 0.9,
                        stagger: 0.11, ease: easeBack,
                        scrollTrigger: { trigger: ".gsap-pricing-sec", start: "top 78%", toggleActions: "play none none none" }
                    }
                );

                // ── FAQ — slide up ──
                gsap.fromTo(
                    ".gsap-faq-sec",
                    { y: 45, scale: 0.98, opacity: 0 },
                    {
                        y: 0, scale: 1, opacity: 1, duration: 1.0, ease: easeOut,
                        scrollTrigger: { trigger: ".gsap-faq-sec", start: "top 85%", toggleActions: "play none none none" }
                    }
                );

                // ── Blog — blur + zoom reveal ──
                gsap.fromTo(
                    ".gsap-blog-sec",
                    { filter: "blur(12px)", scale: 1.03, y: 50, opacity: 0 },
                    {
                        filter: "blur(0px)", scale: 1, y: 0, opacity: 1, duration: 1.15, ease: easeOut,
                        scrollTrigger: { trigger: ".gsap-blog-sec", start: "top 85%", toggleActions: "play none none none" }
                    }
                );

            }, container);
        }, 300);

        return () => {
            clearTimeout(timer);
            if (ctx) ctx.revert();
        };
    }, []);

    return (
        <div 
            ref={containerRef} 
            className="bg-white font-sans dark:bg-black overflow-hidden"
        >

            {/* 1 ─ Hero banner */}
            <HeroSlider />

            {/* 2 ─ About */}
            <div className="gsap-about-sec relative z-20">
                <AboutSection />
            </div>

            {/* 3 ─ Services */}
            <div className="gsap-services-sec relative z-20">
                <ServicesSection />
            </div>

            {/* 4 ─ Service Company */}
            <div className="gsap-company-sec relative z-20">
                <ServiceCompany />
            </div>

            {/* 5 ─ Achievements & Key Metrics */}
            <div className="gsap-achievements-sec relative z-20">
                <AchievementsSection />
            </div>

            {/* 6 ─ Community */}
            <div className="gsap-community-sec relative z-20">
                <CommunitySection />
            </div>

            {/* 6 ─ Testimonials */}
            <div className="gsap-testimonials-sec relative z-20">
                <TestimonialSlider />
            </div>

            {/* 7 ─ Pricing */}
            <div className="gsap-pricing-sec relative z-20">
                <PricingSection />
            </div>

            {/* 8 ─ FAQ */}
            <div className="gsap-faq-sec relative z-20">
                <FAQSection />
            </div>

            {/* 9 ─ Blog */}
            <div className="gsap-blog-sec relative z-20">
                <BlogSection />
            </div>

        </div>
    );
}
