"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Palette, Sparkles, Layout, Monitor, Share2, BookOpen, Briefcase,
    Building2, Package, Target, Layers, Video, Film, Box, PieChart,
    Printer, ArrowRight, CheckCircle2, Check, Shield, Zap, Users,
    Clock, Cpu, Settings, HelpCircle, FileText, ChevronDown, CheckCircle, Plus, Minus,
    ChevronLeft, ChevronRight, MessageSquare, Award
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderBanner from "@/components/ui/HeaderBanner";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function GraphicDesignClient() {
    const mainRef = useRef<HTMLDivElement>(null);
    const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
    const [currentServiceSlide, setCurrentServiceSlide] = useState<number>(0);

    // 17 Graphic Design Services
    const services = [
        {
            id: "logo-design",
            title: "Logo Design",
            desc: "Create professional logos that reflect your business identity and brand values. We design custom logos with unique concepts, typography, and color combinations. Our logos are optimized for websites, social media, packaging, and print materials.",
            icon: Palette,
            features: [
                "Custom visual identity concepts",
                "Scalable vector logo assets",
                "Color palette & typography setup",
                "Optimized for web & print formats"
            ]
        },
        {
            id: "brand-identity",
            title: "Brand Identity Design",
            desc: "Build a consistent brand identity with custom colors, typography, brand guidelines, and visual elements. We create branding assets that maintain consistency across digital and print platforms. Our designs help improve brand recognition and professionalism.",
            icon: Sparkles,
            features: [
                "Comprehensive brand guidelines",
                "Color theory & font pairing",
                "Consistent brand asset system",
                "Multi-channel visual alignment"
            ]
        },
        {
            id: "poster-design",
            title: "Poster Design",
            desc: "Design attractive posters for product launches, events, promotions, and marketing campaigns. We create visually organized layouts with engaging graphics and clear messaging. Our posters are suitable for both digital and print advertising.",
            icon: FileText,
            features: [
                "Promotional event graphics",
                "High-resolution print-ready files",
                "Eye-catching visual hierarchy",
                "Digital campaign adaptations"
            ]
        },
        {
            id: "banner-design",
            title: "Banner Design",
            desc: "Create professional banners for websites, exhibitions, retail stores, and outdoor advertising. We design banners with strong visuals, clear messaging, and consistent branding. Every banner is optimized for maximum visibility and impact.",
            icon: Layout,
            features: [
                "Outdoor & display advertising",
                "Exhibition stand graphics",
                "Retail store promo banners",
                "High-impact visual composition"
            ]
        },
        {
            id: "website-banner",
            title: "Website Banner Design",
            desc: "Develop website banners, hero sections, promotional graphics, and campaign visuals. Our designs improve website appearance while supporting marketing campaigns and user engagement. Every banner is optimized for desktop and mobile devices.",
            icon: Monitor,
            features: [
                "Hero section banner graphics",
                "Mobile-responsive dimensions",
                "E-commerce promotional banners",
                "Conversion-focused call-to-actions"
            ]
        },
        {
            id: "social-media-design",
            title: "Social Media Creative Design",
            desc: "Create engaging social media posts, stories, cover images, carousel posts, and promotional creatives. Our designs maintain brand consistency across Facebook, Instagram, LinkedIn, and other platforms. We create visuals that support your digital marketing campaigns.",
            icon: Share2,
            features: [
                "Instagram & Facebook post templates",
                "Multi-slide carousel graphics",
                "LinkedIn corporate post design",
                "Story & Reel cover graphics"
            ]
        },
        {
            id: "brochure-flyer",
            title: "Brochure & Flyer Design",
            desc: "Design professional brochures, flyers, and leaflets to showcase your products and services. We create well-structured layouts with attractive visuals and clear content. Our designs are suitable for marketing, events, and business promotions.",
            icon: BookOpen,
            features: [
                "Bi-fold & tri-fold layouts",
                "Corporate marketing flyers",
                "Product showcase catalogs",
                "Print-ready PDF exports"
            ]
        },
        {
            id: "business-card-stationery",
            title: "Business Card & Stationery Design",
            desc: "Design business cards, letterheads, envelopes, ID cards, and corporate stationery. We create professional stationery that reflects your brand identity and business values. Every design maintains consistency across your corporate materials.",
            icon: Briefcase,
            features: [
                "Premium business card layouts",
                "Corporate letterhead & envelopes",
                "Employee ID card designs",
                "Cohesive corporate identity"
            ]
        },
        {
            id: "company-profile",
            title: "Company Profile Design",
            desc: "Develop professional company profiles that showcase your business, services, achievements, and expertise. We create visually appealing layouts with organized content and branding. Our profiles are suitable for presentations, proposals, and client meetings.",
            icon: Building2,
            features: [
                "Corporate portfolio decks",
                "Structured corporate narratives",
                "Infographic data visualizers",
                "Print & digital PDF formats"
            ]
        },
        {
            id: "packaging-design",
            title: "Packaging Design",
            desc: "Create packaging and label designs that represent your products and brand identity. We design attractive packaging with organized layouts and product information. Our packaging solutions are suitable for various industries and retail products.",
            icon: Package,
            features: [
                "Product box & label designs",
                "Retail shelf-ready graphics",
                "Dieline & print preparation",
                "3D packaging mockups"
            ]
        },
        {
            id: "marketing-collateral",
            title: "Marketing Collateral Design",
            desc: "Design catalogs, presentation decks, product sheets, advertisements, and promotional materials. We create marketing assets that maintain consistent branding across all campaigns. Our designs support your sales and business marketing activities.",
            icon: Target,
            features: [
                "Sales presentation decks",
                "Product data sheets",
                "Promotional campaign assets",
                "Multi-channel marketing kits"
            ]
        },
        {
            id: "ui-ux-design",
            title: "UI/UX Graphic Design",
            desc: "Create interface graphics, icons, illustrations, and digital assets for websites and mobile applications. Our designs improve visual consistency and user experience across digital platforms. Every design follows modern UI and UX standards.",
            icon: Layers,
            features: [
                "Custom digital UI illustration",
                "App & web icon design sets",
                "Design system UI components",
                "Pixel-perfect interface graphics"
            ]
        },
        {
            id: "video-editing",
            title: "Video Editing",
            desc: "Edit promotional, corporate, product, and social media videos with professional quality. We provide transitions, color correction, subtitles, visual effects, and background music. Our editing enhances video presentation for multiple platforms.",
            icon: Video,
            features: [
                "Corporate & promo video editing",
                "Color grading & sound design",
                "Motion transitions & subtitles",
                "Multi-platform video formats"
            ]
        },
        {
            id: "motion-graphics",
            title: "Motion Graphics",
            desc: "Create motion graphics for advertisements, presentations, explainer videos, and social media campaigns. We combine animation, typography, and visual elements to deliver engaging content. Our motion graphics improve communication and brand presentation.",
            icon: Film,
            features: [
                "Animated logo intro & outro",
                "Dynamic kinetic typography",
                "Social media motion graphics",
                "Product explainer animations"
            ]
        },
        {
            id: "2d-3d-animation",
            title: "2D & 3D Animation",
            desc: "Develop 2D and 3D animations for product demonstrations, presentations, advertisements, and business promotions. We create animations that simplify concepts and improve visual communication. Our solutions support marketing, education, and corporate requirements.",
            icon: Box,
            features: [
                "Product demonstration videos",
                "2D character & vector animation",
                "3D product modeling & rendering",
                "Commercial promotional clips"
            ]
        },
        {
            id: "infographic-design",
            title: "Infographic Design",
            desc: "Transform business data, statistics, and information into visually engaging infographics. We create organized layouts with icons, charts, and illustrations for better understanding. Our infographics are suitable for websites, presentations, and marketing materials.",
            icon: PieChart,
            features: [
                "Complex data visualization",
                "Custom chart & graph design",
                "Engaging visual story flows",
                "Shareable social infographics"
            ]
        },
        {
            id: "print-media-design",
            title: "Print Media Design",
            desc: "Design magazines, catalogs, menus, certificates, invitations, and other print materials. We create professional layouts with consistent branding and high-quality print-ready designs. Our print media solutions support business promotions and corporate communication.",
            icon: Printer,
            features: [
                "Magazine & catalog layouts",
                "Restaurant menu design",
                "Corporate certificates & invites",
                "High-DPI CMYK print preparation"
            ]
        }
    ];

    // 6 Graphic Design Process Steps
    const processSteps = [
        {
            step: "01",
            title: "Requirement Analysis",
            desc: "Understand the business goals, target audience, brand identity, and design requirements before starting the creative process."
        },
        {
            step: "02",
            title: "Research & Concept Development",
            desc: "Develop creative concepts by analyzing industry trends, competitor designs, and branding requirements to create unique visual solutions."
        },
        {
            step: "03",
            title: "Creative Design",
            desc: "Transform ideas into engaging designs using modern design tools while maintaining consistency across digital and print platforms."
        },
        {
            step: "04",
            title: "Review & Revisions",
            desc: "Refine the design based on client feedback to ensure the final output meets branding expectations and project requirements."
        },
        {
            step: "05",
            title: "Final Delivery",
            desc: "Deliver high-quality design files in the required formats, optimized for both digital platforms and print media."
        },
        {
            step: "06",
            title: "Ongoing Design Support",
            desc: "Provide continuous design support for marketing campaigns, branding updates, promotional materials, and future creative requirements."
        }
    ];

    // 12 Design Tools & Technologies
    const designTools = [
        { name: "Adobe Photoshop", desc: "Raster graphics editing, photo manipulation, and digital artwork design.", cat: "Image Editing" },
        { name: "Adobe Illustrator", desc: "Industry-standard vector graphics creation for logos, icons, and illustrations.", cat: "Vector Graphics" },
        { name: "Adobe InDesign", desc: "Professional page layout design for brochures, magazines, and catalogs.", cat: "Publishing & Print" },
        { name: "Figma", desc: "Collaborative UI/UX design, interactive prototyping, and digital design systems.", cat: "UI/UX & Web" },
        { name: "Adobe XD", desc: "Vector-based user experience tool for web and mobile app wireframing.", cat: "UX Prototyping" },
        { name: "Canva Pro", desc: "Rapid social media post graphics and promotional marketing visual creation.", cat: "Social Creatives" },
        { name: "Adobe After Effects", desc: "Advanced motion graphics, visual effects, and cinematic video compositing.", cat: "Motion & VFX" },
        { name: "Adobe Premiere Pro", desc: "Timeline-based professional video editing and audio post-production.", cat: "Video Production" },
        { name: "CorelDRAW", desc: "Precision vector graphics and large-format printing collateral software.", cat: "Print & Signage" },
        { name: "Blender", desc: "Open-source 3D modeling, texturing, rendering, and 3D animation suite.", cat: "3D Animation" },
        { name: "Lightroom", desc: "Professional photo color grading, raw image processing, and photo enhancement.", cat: "Photo Grading" },
        { name: "DaVinci Resolve", desc: "Hollywood-grade video color correction, audio mixing, and visual editing.", cat: "Color & Editing" }
    ];

    // 8 Why Choose Reasons
    const whyChooseReasons = [
        {
            title: "Creative & Custom Designs",
            desc: "Every design is tailored to match your brand identity, business objectives, and target audience.",
            icon: Palette
        },
        {
            title: "Experienced Design Team",
            desc: "Our designers combine creativity with industry best practices to deliver professional and impactful visuals.",
            icon: Users
        },
        {
            title: "Brand-Focused Approach",
            desc: "We create consistent designs that strengthen your brand identity across digital and print platforms.",
            icon: Target
        },
        {
            title: "High-Quality Design Standards",
            desc: "Every project is developed with attention to detail, ensuring professional, polished, and visually appealing results.",
            icon: Shield
        },
        {
            title: "Fast Turnaround Time",
            desc: "Projects are delivered on schedule without compromising quality or creativity.",
            icon: Clock
        },
        {
            title: "Digital & Print Expertise",
            desc: "We design creative assets optimized for websites, social media, advertising, packaging, and print materials.",
            icon: Layout
        },
        {
            title: "Affordable & Scalable Solutions",
            desc: "Our design services are flexible and suitable for startups, small businesses, and enterprises.",
            icon: Zap
        },
        {
            title: "Dedicated Support",
            desc: "From concept to final delivery, our team provides continuous support to ensure complete client satisfaction.",
            icon: CheckCircle2
        }
    ];

    // 10 FAQs
    const faqs = [
        {
            q: "What Graphic Design Services do you offer?",
            a: "We offer a wide range of Graphic Design Services in Pondicherry, including logo design, brand identity, social media creatives, brochures, flyers, banners, website banners, company profiles, packaging design, video editing, motion graphics, and animation."
        },
        {
            q: "Why choose your Graphic Design Company in Pondicherry?",
            a: "As a trusted Graphic Design Company in Pondicherry, we create custom, high-quality designs that align with your brand identity, marketing goals, and business objectives while ensuring creativity and consistency across every project."
        },
        {
            q: "Do you provide custom graphic design solutions?",
            a: "Yes. Every design is created based on your business requirements, target audience, and brand guidelines to ensure a unique and professional visual identity."
        },
        {
            q: "Can you design graphics for social media and digital marketing?",
            a: "Yes. We create social media posts, promotional banners, website graphics, advertisements, and other digital creatives that help improve brand visibility and audience engagement."
        },
        {
            q: "Do you provide print design services?",
            a: "Yes. We design brochures, flyers, business cards, posters, catalogs, company profiles, packaging, and other print materials that are ready for professional printing."
        },
        {
            q: "Can you redesign an existing logo or brand identity?",
            a: "Yes. We can refresh or completely redesign existing logos and branding materials to give your business a modern and consistent visual identity."
        },
        {
            q: "What file formats will I receive?",
            a: "Final designs are delivered in industry-standard formats such as AI, EPS, PSD, PDF, PNG, JPG, and SVG, depending on your project requirements."
        },
        {
            q: "How long does a graphic design project take?",
            a: "Project timelines vary based on the scope and complexity. Simple designs may take a few days, while complete branding or larger creative projects require additional time."
        },
        {
            q: "Do you offer video editing and motion graphics?",
            a: "Yes. Our Graphic Design Services in Pondicherry include professional video editing, motion graphics, and animation for marketing campaigns, social media, and business presentations."
        },
        {
            q: "How do I get started with your Graphic Design Services?",
            a: "Simply contact our team with your design requirements. We'll understand your objectives, discuss the project scope, and provide the right creative solution for your business."
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".gsap-fade-up",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".gsap-trigger-section",
                        start: "top 80%",
                    }
                }
            );
        }, mainRef);

        return () => ctx.revert();
    }, []);

    // Auto-slide effect for the Graphic Design Services slider
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentServiceSlide((prev) => (prev + 1) % services.length);
        }, 4000); // Auto-slide every 4 seconds
        return () => clearInterval(interval);
    }, [services.length]);

    return (
        <main ref={mainRef} className="bg-white min-h-screen overflow-x-clip font-sans">
            {/* Header Banner */}
            <HeaderBanner
                title={
                    <>
                        Graphic Design Services in <span className="text-[#1A5CDD] bg-clip-text text-transparent bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8]">Pondicherry</span>
                    </>
                }
                description="Creative, Professional & Result-Driven Graphic Design Solutions"
            />

            {/* SECTION 1: Intro Hero Section */}
            <section className="py-20 bg-[#F0F6FF] relative overflow-hidden">
                {/* Background Glows */}
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[700px] bg-[#1A5CDD]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-[#1A5CDD]/8 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-[#38bdf8]/12 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `radial-gradient(#1A5CDD 1.5px, transparent 1.5px)`, backgroundSize: `24px 24px` }} />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <div className="lg:col-span-7 gsap-fade-up">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 text-[#1A5CDD] mb-6">
                                <span className="w-2 h-2 rounded-full bg-[#1A5CDD] inline-block animate-ping" />
                                Creative Visual Solutions
                            </div>

                            <h1 className="text-3xl md:text-5xl lg:text-[48px] font-bold text-[#011146] tracking-tight leading-[1.2] mb-4">
                                Top <span className="text-[#1A5CDD]">Graphic Design Services</span> in Pondicherry
                            </h1>

                            <div className="inline-block bg-gradient-to-r from-[#1A5CDD]/10 via-[#38bdf8]/15 to-blue-50 border border-[#1A5CDD]/20 px-5 py-2.5 rounded-2xl mb-6 shadow-xs">
                                <h2 className="text-lg md:text-xl font-extrabold text-[#1A5CDD] tracking-wide flex items-center gap-2">
                                    <Sparkles size={18} className="text-[#38bdf8]" />
                                    Elevate Your Brand Identity with Stunning Designs
                                </h2>
                            </div>

                            <div className="space-y-4 mb-8">
                                <p className="text-slate-600 text-[16.5px] leading-[1.85] font-normal">
                                    At SysCrop, we provide Graphic Design Services in Pondicherry that help businesses build a strong and consistent brand identity. As a trusted Graphic Design Company in Pondicherry, we create visually compelling designs that enhance brand recognition, improve customer engagement, and support marketing success.
                                </p>
                                <p className="text-slate-600 text-[16.5px] leading-[1.85] font-normal">
                                    From logo design and branding to social media creatives, brochures, banners, and marketing materials, our creative team delivers designs that are modern, impactful, and aligned with your business goals.
                                </p>
                            </div>

                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center gap-3 bg-[#011146] text-white px-8 py-4 rounded-xl font-bold text-[15px] transition-all duration-300 shadow-lg shadow-blue-900/15 hover:bg-[#1A5CDD] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(26,92,221,0.35)] overflow-hidden cursor-pointer"
                            >
                                <span className="relative z-10">Get a Free Creative Consultation</span>
                                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
                            </Link>
                        </div>

                        {/* Right Side Visual Showcase Card */}
                        <div className="lg:col-span-5 relative flex justify-center items-center mt-12 lg:mt-0">
                            {/* Ambient Background Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] max-w-[500px] max-h-[500px] bg-gradient-to-tr from-[#1A5CDD]/10 to-[#38bdf8]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

                            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] group overflow-visible">
                                {/* Expanding the image container */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] lg:w-[140%] lg:h-[140%]">
                                    <Image
                                        src="/images/webdevelopment/graphic_design.png"
                                        alt="Graphic Design Services in Pondicherry"
                                        fill
                                        className="object-contain transform transition-transform duration-700 ease-out z-10"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        priority
                                    />
                                </div>

                                {/* Floating Badges */}
                                {/* Left Badge */}
                                <div className="absolute top-[15%] -left-4 md:-left-12 bg-white/95 backdrop-blur-md border border-white/50 rounded-2xl px-4 py-3 shadow-[0_15px_35px_rgba(0,0,0,0.06)] flex items-center gap-3 z-20 hover:-translate-y-1 transition-transform duration-300 hidden sm:flex">
                                    <div className="w-9 h-9 rounded-xl bg-[#1A5CDD]/10 text-[#1A5CDD] flex items-center justify-center font-bold">
                                        <Palette size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xl font-extrabold text-[#011146] leading-none">100%</p>
                                        <p className="text-slate-500 text-[11px] font-semibold mt-0.5">Creative Designs</p>
                                    </div>
                                </div>

                                {/* Right Badge */}
                                <div className="absolute top-[65%] right-0 md:-right-8 lg:-right-4 xl:-right-10 bg-white/95 backdrop-blur-md border border-white/50 rounded-2xl px-4 py-3 shadow-[0_15px_35px_rgba(0,0,0,0.06)] flex items-center gap-3 z-20 hover:-translate-y-1 transition-transform duration-300 hidden sm:flex">
                                    <div className="w-9 h-9 rounded-xl bg-[#1A5CDD]/10 text-[#1A5CDD] flex items-center justify-center font-bold">
                                        <Award size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xl font-extrabold text-[#011146] leading-none">Premium</p>
                                        <p className="text-slate-500 text-[11px] font-semibold mt-0.5">Brand Identity</p>
                                    </div>
                                </div>
                                
                                {/* Bottom Badge */}
                                <div className="absolute -bottom-2 -left-2 md:left-4 lg:left-8 bg-white/95 backdrop-blur-md border border-white/50 rounded-2xl px-4 py-3 shadow-[0_15px_35px_rgba(0,0,0,0.06)] flex items-center gap-3 z-20 hover:-translate-y-1 transition-transform duration-300 hidden sm:flex">
                                    <div className="w-9 h-9 rounded-xl bg-[#1A5CDD]/10 text-[#1A5CDD] flex items-center justify-center font-bold">
                                        <CheckCircle size={18} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-extrabold text-[#011146] leading-none">SysCrop Studio</h4>
                                        <p className="text-[11px] text-slate-500 font-semibold mt-0.5">Logo & Creatives</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2A: What are Graphic Design Services? (Split Layout with Creative Multi-Image Collage) */}
            <section className="py-20 relative overflow-hidden bg-white">
                {/* Decorative Ambient Glowing Orbs */}
                <div className="absolute left-[-200px] top-1/4 w-[600px] h-[600px] bg-[#1A5CDD]/8 blur-[150px] rounded-full pointer-events-none" />
                <div className="absolute right-[-150px] bottom-1/4 w-[500px] h-[500px] bg-[#38bdf8]/10 blur-[130px] rounded-full pointer-events-none" />

                <div className="container mx-auto px-6 lg:px-8 relative max-w-7xl z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                        {/* Left Side: Visual Presentation (45%) */}
                        <div className="lg:w-[45%] w-full relative min-h-[400px] lg:min-h-[500px] order-2 lg:order-1 flex justify-center items-center">
                            {/* Ambient Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-[#1A5CDD]/10 to-[#38bdf8]/15 rounded-full blur-[80px] pointer-events-none -z-10" />

                            <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[550px] group overflow-visible">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] lg:w-[130%] lg:h-[130%]">
                                    <Image
                                        src="/images/webdevelopment/graphic_design_1.png"
                                        alt="Graphic Design Studio Work"
                                        fill
                                        className="object-contain transform transition-transform duration-700 ease-out z-10"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Content (55%) */}
                        <div className="lg:w-[55%] w-full relative order-1 lg:order-2">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 text-[#1A5CDD] mb-6">
                                <Palette size={14} /> Understanding Graphic Design
                            </span>

                            <div className="flex gap-4 mb-5">
                                <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-[#011146] leading-[1.12] tracking-tight">
                                    What are <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8] relative">Graphic Design Services?</span>
                                </h2>
                            </div>

                            <p className="text-slate-600 text-[16.5px] leading-[1.9] mb-4">
                                Graphic Design Services involve creating visual content that represents a business, communicates its message, and strengthens its brand identity. Professional designs help businesses connect with their audience through logos, brochures, social media creatives, advertisements, packaging, and other marketing materials.
                            </p>
                            <p className="text-slate-600 text-[16.5px] leading-[1.9] mb-6">
                                As an experienced Graphic Design Company in Pondicherry, SysCrop delivers creative design solutions that combine aesthetics with strategy to help businesses stand out in today's competitive market.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 pt-2">
                                {[
                                    "Custom Logo & Brand Identity",
                                    "Social Media Posts & Banners",
                                    "Brochures & Marketing Collateral",
                                    "Packaging, Labels & Print Media",
                                    "UI/UX Interface & Motion Graphics"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3.5 py-2 group cursor-pointer">
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-50 to-slate-100 border border-blue-100/50 flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(26,92,221,0.06)] group-hover:shadow-[0_4px_12px_rgba(26,92,221,0.15)] group-hover:scale-110 transition-all duration-300">
                                            <Check size={13} strokeWidth={3} className="text-[#1A5CDD]" />
                                        </div>
                                        <span className="text-slate-700 font-semibold text-[14.5px] group-hover:text-[#011146] group-hover:translate-x-1 transition-all duration-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* SECTION 2B: Why Every Business Needs Graphic Design Services (Enterprise Dark Studio Blueprint) */}
            <section className="py-20 relative overflow-hidden bg-[#011146] text-white">
                {/* Blueprint Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1A5CDD]/20 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6">
                            <Sparkles className="text-[#38bdf8]" size={14} />
                            <span className="text-[12px] font-extrabold uppercase tracking-wider text-[#38bdf8]">Brand Growth & Impact</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
                            Why Every Business Needs <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#60a5fa]">Graphic Design Services</span>
                        </h2>
                        <p className="text-slate-300 text-[16.5px] leading-[1.8] max-w-2xl mx-auto">
                            Professional graphic design helps businesses create a strong first impression, build trust, and maintain a consistent brand identity across digital and print channels.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Strong First Impression", desc: "Captivate prospects instantly with polished, professional visual designs that build immediate confidence.", icon: Sparkles },
                            { title: "Consistent Brand Identity", desc: "Build recognizable brand presence across web, social media, print, advertising, and packaging.", icon: Layers },
                            { title: "Higher Customer Engagement", desc: "Drive meaningful user interaction with visually compelling, conversion-focused creative marketing assets.", icon: Target },
                            { title: "Improved Brand Recognition", desc: "Stand out in competitive markets with unforgettable visual identity elements and cohesive styling.", icon: Palette },
                            { title: "Higher Conversion Rates", desc: "Turn viewers into buyers through strategic visual hierarchy, layout composition, and clear CTA design.", icon: Zap },
                            { title: "Professional Market Standing", desc: "Establish enterprise-grade credibility, authority, and premium positioning in your industry.", icon: Shield }
                        ].map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div key={idx} className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-[28px] p-8 border border-white/10 hover:border-[#38bdf8]/50 hover:from-white/15 hover:to-white/10 hover:-translate-y-2 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col justify-between group relative overflow-hidden">
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1A5CDD] to-[#38bdf8] flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform">
                                            <Icon size={22} strokeWidth={2.5} />
                                        </div>
                                        <h3 className="font-extrabold text-white text-xl mb-3 group-hover:text-[#38bdf8] transition-colors">{item.title}</h3>
                                        <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION 3: Our Graphic Design Services (17 Creative Services Slider) */}
            <section className="py-20 bg-[#F0F6FF] relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 text-[#1A5CDD]">
                            <Sparkles size={14} />
                            Full-Spectrum Design Studio
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#011146] tracking-tight leading-tight">
                            Our Graphic Design <span className="text-[#1A5CDD]">Services</span>
                        </h2>
                        <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                            At SysCrop, we offer Graphic Design Services in Pondicherry that combine creativity with strategy to help businesses build a strong and consistent brand identity.
                        </p>
                    </div>

                    {/* Active Slide Card with Top Navigation Bar */}
                    {(() => {
                        const currentService = services[currentServiceSlide];
                        const Icon = currentService.icon;

                        return (
                            <div className="bg-white rounded-[40px] p-8 md:p-12 lg:p-16 border border-slate-200/80 shadow-[0_20px_80px_rgba(1,17,70,0.06)] transition-all duration-500 relative overflow-hidden group">
                                {/* Soft Accent Gradients */}
                                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#F0F6FF] via-[#F8FAFF] to-transparent rounded-bl-full pointer-events-none" />
                                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#F0F6FF] via-[#F8FAFF] to-transparent rounded-tr-full pointer-events-none" />
                                
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
                                    {/* Left Content Column */}
                                    <div className="lg:col-span-7 flex flex-col h-full justify-between">
                                        <div>
                                            {/* Service Tag */}
                                            <div className="inline-flex items-center gap-3 mb-8 bg-slate-50 border border-slate-200 px-4 py-2 rounded-full">
                                                <div className="w-10 h-10 rounded-full bg-[#1A5CDD] text-white flex items-center justify-center shadow-sm">
                                                    <Icon size={18} />
                                                </div>
                                                <span className="text-xs font-mono font-bold text-slate-600 uppercase tracking-widest pr-2">
                                                    Service {String(currentServiceSlide + 1).padStart(2, '0')} of {services.length}
                                                </span>
                                            </div>

                                            <h3 className="text-3xl md:text-5xl font-black text-[#011146] mb-6 leading-[1.1] tracking-tight">
                                                {currentService.title}
                                            </h3>

                                            <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl font-medium">
                                                {currentService.desc}
                                            </p>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4">
                                            <Link
                                                href="/contact"
                                                className="inline-flex items-center gap-3 bg-[#1A5CDD] text-white px-8 py-4 rounded-2xl font-bold text-[15px] hover:bg-[#011146] shadow-lg hover:shadow-[#1A5CDD]/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                                            >
                                                Inquire About {currentService.title} <ArrowRight size={18} />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Right Features Column & Navigation */}
                                    <div className="lg:col-span-5 flex flex-col h-full justify-between">
                                        <div className="bg-[#F8FAFC] rounded-3xl p-8 md:p-10 border border-slate-200/60 shadow-sm mb-12 relative overflow-hidden group-hover:border-slate-300 transition-colors duration-500">
                                            {/* Subtle corner accent */}
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#1A5CDD]/5 rounded-bl-full pointer-events-none" />
                                            
                                            <h4 className="font-extrabold text-[#011146] text-xl mb-8 flex items-center gap-3">
                                                <Sparkles size={20} className="text-[#1A5CDD]" /> Key Deliverables
                                            </h4>
                                            
                                            <ul className="space-y-5">
                                                {currentService.features.map((feat, fIdx) => (
                                                    <li key={fIdx} className="flex items-start gap-4 text-slate-700 text-base font-semibold">
                                                        <div className="w-6 h-6 rounded-full bg-white border border-slate-200 text-[#1A5CDD] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                                                            <Check size={14} strokeWidth={3} />
                                                        </div>
                                                        <span className="leading-snug">{feat}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Minimalist Navigation */}
                                        <div className="flex justify-start lg:justify-end">
                                            <div className="flex items-center gap-2 bg-white border border-slate-200/80 p-2 rounded-2xl shadow-sm">
                                                <button
                                                    onClick={() => setCurrentServiceSlide((prev) => (prev - 1 + services.length) % services.length)}
                                                    aria-label="Previous Service"
                                                    className="w-12 h-12 rounded-xl bg-slate-50 hover:bg-[#1A5CDD] text-slate-600 hover:text-white flex items-center justify-center transition-colors shadow-sm cursor-pointer border border-slate-100 hover:border-[#1A5CDD]"
                                                >
                                                    <ChevronLeft size={20} />
                                                </button>
                                                <div className="px-5 flex flex-col items-center justify-center">
                                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1.5">Slide</span>
                                                    <span className="font-mono text-sm font-bold text-[#011146] leading-none">
                                                        {String(currentServiceSlide + 1).padStart(2, '0')} <span className="text-slate-300">/</span> {services.length}
                                                    </span>
                                                </div>
                                                <button
                                                    onClick={() => setCurrentServiceSlide((prev) => (prev + 1) % services.length)}
                                                    aria-label="Next Service"
                                                    className="w-12 h-12 rounded-xl bg-slate-50 hover:bg-[#1A5CDD] text-slate-600 hover:text-white flex items-center justify-center transition-colors shadow-sm cursor-pointer border border-slate-100 hover:border-[#1A5CDD]"
                                                >
                                                    <ChevronRight size={20} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })()}

                </div>
            </section>

            {/* SECTION 4: Our Graphic Design Process (6 Steps) */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 text-[#1A5CDD]">
                            <Settings size={14} />
                            Creative Workflow
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#011146] tracking-tight leading-tight">
                            Our Graphic Design <span className="text-[#1A5CDD]">Process</span>
                        </h2>
                        <p className="text-slate-600 text-base md:text-lg max-w-3xl mx-auto pt-1 leading-relaxed">
                            Professional Graphic Design Services in Pondicherry require a structured approach to create designs that are visually appealing, brand-focused, and aligned with business objectives. Every project follows a streamlined process to ensure quality, consistency, and timely delivery.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {processSteps.map((step, idx) => (
                            <div
                                key={idx}
                                className="bg-slate-50 rounded-[28px] p-8 border border-slate-200/90 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group hover:bg-white"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#1A5CDD]/10 to-transparent rounded-bl-[40px] pointer-events-none" />

                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#011146] to-[#1A5CDD] text-white font-extrabold text-lg flex items-center justify-center shadow-md">
                                            {step.step}
                                        </div>
                                        <span className="text-xs font-mono font-extrabold text-[#1A5CDD] bg-[#1A5CDD]/10 px-3 py-1 rounded-full border border-[#1A5CDD]/20">
                                            Step {step.step}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-[#011146] mb-3 group-hover:text-[#1A5CDD] transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-600 text-[14.5px] leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5: Design Tools & Technologies (12 Industry Standard Tools) */}
            <section className="py-20 bg-[#030B26] text-white relative overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#1A5CDD]/20 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#38bdf8]/15 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-white/10 border border-white/20 text-white backdrop-blur-md">
                            <Cpu size={14} />
                            Creative Stack
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                            Design Tools & <span className="text-[#38bdf8] bg-clip-text text-transparent bg-gradient-to-r from-[#38bdf8] to-[#1A5CDD]">Technologies</span>
                        </h2>
                        <p className="text-slate-300 text-base md:text-lg max-w-3xl mx-auto pt-1 leading-relaxed">
                            Professional Graphic Design Services in Pondicherry require industry-standard tools to create high-quality visuals for digital and print media. As a trusted Graphic Design Company in Pondicherry, we work with leading design and creative software to deliver professional results.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {designTools.map((tool, idx) => (
                            <div
                                key={idx}
                                className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-[#38bdf8]/50 hover:bg-slate-900 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
                            >
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[11px] font-mono font-bold text-[#38bdf8] uppercase tracking-wider bg-[#38bdf8]/10 px-2.5 py-0.5 rounded-full border border-[#38bdf8]/20">
                                            {tool.cat}
                                        </span>
                                        <Sparkles size={14} className="text-slate-500 group-hover:text-[#38bdf8] transition-colors" />
                                    </div>
                                    <h3 className="text-lg font-extrabold text-white group-hover:text-[#38bdf8] transition-colors">
                                        {tool.name}
                                    </h3>
                                    <p className="text-slate-400 text-xs leading-relaxed">
                                        {tool.desc}
                                    </p>
                                </div>

                                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-emerald-400">
                                    <span>Industry Standard</span>
                                    <CheckCircle size={14} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 6: Why Choose SysCrop for Graphic Design Services in Pondicherry? */}
            <section className="py-20 bg-[#F0F6FF] relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 text-[#1A5CDD]">
                            <Shield size={14} />
                            Proven Excellence
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#011146] tracking-tight leading-tight">
                            Why Choose SysCrop for <span className="text-[#1A5CDD]">Graphic Design Services</span> in Pondicherry?
                        </h2>
                        <p className="text-slate-600 text-base md:text-lg max-w-3xl mx-auto pt-1 leading-relaxed">
                            Choosing the right design partner is essential for building a strong and memorable brand. SysCrop combines creativity, industry expertise, and a customer-focused approach to deliver designs that align with your business goals. As a trusted Graphic Design Company in Pondicherry, we create visual solutions that strengthen brand identity and support business growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whyChooseReasons.map((reason, idx) => {
                            const Icon = reason.icon;

                            return (
                                <div
                                    key={idx}
                                    className="group bg-white/90 backdrop-blur-md rounded-[28px] p-7 border border-slate-200/80 hover:border-[#1A5CDD]/30 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col justify-between cursor-default"
                                >
                                    <div>
                                        <div className="w-12 h-12 rounded-2xl bg-[#1A5CDD]/10 text-[#1A5CDD] group-hover:bg-[#011146] group-hover:text-white transition-colors flex items-center justify-center shadow-sm mb-6">
                                            <Icon size={22} />
                                        </div>
                                        <h3 className="font-bold text-[#011146] text-xl mb-3 group-hover:text-[#1A5CDD] transition-colors leading-snug">
                                            {reason.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {reason.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION 7: FREQUENTLY ASKED QUESTIONS (Centered 2-Column Layout) */}
            <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
                {/* Decorative background element */}

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    
                    {/* Header Section (Centered) */}
                    <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 text-[#1A5CDD]">
                            <HelpCircle size={14} />
                            FAQ
                        </span>
                        
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#011146] tracking-tight leading-tight">
                            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8]">Questions</span>
                        </h2>
                        
                        <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto font-medium">
                            Find answers to common questions about our Graphic Design Services in Pondicherry, design strategies, and creation processes.
                        </p>
                    </div>

                    {/* FAQ 2-Column Elegant Accordion List */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-0 max-w-7xl mx-auto">
                        {/* Left Column */}
                        <div>
                            {faqs.slice(0, Math.ceil(faqs.length / 2)).map((item, i) => {
                                const index = i;
                                const isOpen = activeAccordion === index;
                                return (
                                    <div key={index} className="mb-4">
                                        <button
                                            onClick={() => setActiveAccordion(isOpen ? null : index)}
                                            className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 ${isOpen ? "bg-[#F4F7FE] border-[#1A5CDD] shadow-sm" : "bg-white border-slate-200 hover:border-slate-300"}`}
                                        >
                                            <span className="font-bold text-[#011146] text-[16px]">{index + 1}. {item.q}</span>
                                            <div className="flex-shrink-0 ml-4">
    <svg className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "text-[#1A5CDD] rotate-180" : "text-slate-400 group-hover:text-[#1A5CDD] rotate-0"}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
</div>
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px] mt-2 p-6 bg-slate-50 rounded-2xl border border-slate-100" : "max-h-0"}`}>
                                            <p className="text-slate-600 text-[14.5px] leading-relaxed">{item.a}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Right Column */}
                        <div>
                            {faqs.slice(Math.ceil(faqs.length / 2)).map((item, i) => {
                                const index = i + Math.ceil(faqs.length / 2);
                                const isOpen = activeAccordion === index;
                                return (
                                    <div key={index} className="mb-4">
                                        <button
                                            onClick={() => setActiveAccordion(isOpen ? null : index)}
                                            className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 ${isOpen ? "bg-[#F4F7FE] border-[#1A5CDD] shadow-sm" : "bg-white border-slate-200 hover:border-slate-300"}`}
                                        >
                                            <span className="font-bold text-[#011146] text-[16px]">{index + 1}. {item.q}</span>
                                            <div className="flex-shrink-0 ml-4">
    <svg className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "text-[#1A5CDD] rotate-180" : "text-slate-400 group-hover:text-[#1A5CDD] rotate-0"}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
</div>
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px] mt-2 p-6 bg-slate-50 rounded-2xl border border-slate-100" : "max-h-0"}`}>
                                            <p className="text-slate-600 text-[14.5px] leading-relaxed">{item.a}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
