"use client";

import { useEffect, useRef } from "react";
import AboutSection from "@/components/AboutSection";
import TestimonialSlider from "@/components/TestimonialSection";
import FAQSection from "@/components/FaqSection";
import CommunitySection from "@/components/CommunitySection";
import HeaderBanner from "@/components/ui/HeaderBanner";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const Aboutus = () => {
    // Scoped ref — animations ONLY affect elements inside this page
    const pageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const page = pageRef.current;
        if (!page) return;

        const ctx = gsap.context(() => {
            const ease = "power3.out";

            // Community Section — blur reveal
            gsap.fromTo(
                ".about-community-sec",
                { filter: "blur(14px)", scale: 0.94, y: 45, opacity: 0 },
                {
                    filter: "blur(0px)", scale: 1, y: 0, opacity: 1, duration: 1.2, ease,
                    scrollTrigger: {
                        trigger: ".about-community-sec",
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );

            // Testimonials Section — slide up + rotate
            gsap.fromTo(
                ".about-testimonials-sec",
                { y: 70, rotate: 1, opacity: 0 },
                {
                    y: 0, rotate: 0, opacity: 1, duration: 1.05, ease,
                    scrollTrigger: {
                        trigger: ".about-testimonials-sec",
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );

            // FAQ Section — fade up
            gsap.fromTo(
                ".about-faq-sec",
                { y: 40, scale: 0.98, opacity: 0 },
                {
                    y: 0, scale: 1, opacity: 1, duration: 0.95, ease,
                    scrollTrigger: {
                        trigger: ".about-faq-sec",
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );

        }, page); // ← strictly scoped to this page's ref

        return () => ctx.revert();
    }, []);

    return (
        <div ref={pageRef}>
            <HeaderBanner
                title={
                    <>
                        We are a <span className="text-[#38bdf8] font-serif italic font-normal">selectively skilled</span> tech partner with a strong focus.
                    </>
                }
                description="Syscorp is a technology-driven software development company dedicated to building powerful, scalable, and customized digital solutions. Operating at the intersection of architecture, motion, and design, the diversity of our skills drives growth."
            />

            {/* About Section — has its own internal GSAP animations */}
            <AboutSection />

            <div className="about-community-sec">
                <CommunitySection />
            </div>

            <div className="about-faq-sec">
                <FAQSection />
            </div>

            <div className="about-testimonials-sec">
                <TestimonialSlider bgClass="bg-[#F0F8FF] dark:bg-[#080f25]" />
            </div>
        </div>
    );
};

export default Aboutus;
