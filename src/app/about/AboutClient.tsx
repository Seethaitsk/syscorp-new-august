"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Existing Components
import HeaderBanner from "@/components/ui/HeaderBanner";

import FAQSection from "@/components/FaqSection";
import CommunitySection from "@/components/CommunitySection";

// Newly Created Components for Content Overhaul
import CompanyOverview from "@/components/CompanyOverview";
import CompanyStory from "@/components/CompanyStory";
import MissionVisionSection from "@/components/MissionVisionSection";
import CoreValues from "@/components/CoreValues";
import ProcessSection from "@/components/ProcessSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TechExpertise from "@/components/TechExpertise";
import IndustriesSection from "@/components/IndustriesSection";
import OurTeam from "@/components/OurTeam";


if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const AboutClient = () => {
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
                        We Are Syscorp – A <span className="text-[#38bdf8] font-serif italic font-normal">Leading Software Company</span> in Pondicherry.
                    </>
                }
                description="Recognized for delivering intelligent software solutions with innovation, technical excellence, and a commitment to long-term business success."
            />

            <CompanyOverview />
            <CompanyStory />
            <MissionVisionSection />
            <CoreValues />


            <ProcessSection />
            <WhyChooseUs />
            <TechExpertise />
            <IndustriesSection />

            <div className="about-community-sec">
                <CommunitySection />
            </div>

            <div className="about-faq-sec">
                <FAQSection />
            </div>

        </div>
    );
};

export default AboutClient;
