"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Palette,
    Layers,
    LayoutDashboard,
    Smartphone,
    Globe,
    Sparkles,
    ArrowRight,
    CheckCircle2,
    Search,
    Users,
    Check,
    Shield,
    TrendingUp,
    Target,
    ChevronDown,
    Monitor,
    PenTool,
    MousePointer,
    Workflow,
    Compass,
    Eye,
    Zap,
    Award,
    Sliders,
    Boxes,
    Paintbrush,
    Layout,
    CheckCircle,
    Building2,
    Layers3,
    HelpCircle,
    Plus,
    Minus,
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import HeaderBanner from "@/components/ui/HeaderBanner";

export default function UIUXClient() {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
    const [processIndex, setProcessIndex] = useState(0);
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);
    const [activeToolCategory, setActiveToolCategory] = useState<number>(0);

    // Infinite auto scroll timer for UI/UX Process slider
    useEffect(() => {
        if (!isAutoScrolling) return;
        const interval = setInterval(() => {
            setProcessIndex((prev) => prev + 1);
        }, 3500);

        return () => clearInterval(interval);
    }, [isAutoScrolling]);

    // 11 Core UI/UX Services Data
    const services = [
        {
            id: "user-research",
            title: "User Research & UX Strategy",
            tagline: "Understand Your Users Before Designing",
            icon: Compass,
            image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
            desc: "Successful products begin with understanding user needs. Our UI/UX Design Services in Pondicherry include user research, competitor analysis, customer journey mapping, and UX strategy to create intuitive experiences that align with business goals and user expectations.",
            features: [
                "User Research",
                "Competitor Analysis",
                "User Persona Creation",
                "Customer Journey Mapping",
                "UX Strategy Planning",
                "Information Architecture",
                "User Flow Design",
                "Business Goal Alignment",
            ],
        },
        {
            id: "wireframing-ia",
            title: "Wireframing & Information Architecture",
            tagline: "Build a Strong Foundation",
            icon: Layout,
            image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop",
            desc: "We create wireframes and information architecture that define layouts, navigation, and content structure before development begins. This helps improve usability, simplify collaboration, and ensure a smooth user experience.",
            features: [
                "Low & High-Fidelity Wireframes",
                "Information Architecture",
                "Navigation Planning",
                "User Flow Mapping",
                "Content Hierarchy",
                "Sitemap Design",
                "Screen Layout Planning",
            ],
        },
        {
            id: "ui-design",
            title: "UI (User Interface) Design",
            tagline: "Modern Interfaces That Reflect Your Brand",
            icon: Palette,
            image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
            desc: "Our UI/UX Design Services in Pondicherry focus on designing visually appealing and consistent interfaces that improve usability and engagement. We create responsive designs for websites, mobile apps, CRM, ERP, SaaS, and enterprise applications.",
            features: [
                "Custom UI Design",
                "Brand-Focused Design",
                "Typography & Color System",
                "Icon & Button Design",
                "Responsive Layouts",
                "Interactive Components",
                "Accessibility Standards",
                "Cross-Platform Compatibility",
            ],
        },
        {
            id: "ux-design",
            title: "UX (User Experience) Design",
            tagline: "Create Seamless User Experiences",
            icon: Workflow,
            image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop",
            desc: "We design intuitive user journeys that simplify navigation and improve customer satisfaction. Our UX experts optimize workflows, user flows, and interactions to deliver better usability and higher conversion rates.",
            features: [
                "User Journey Mapping",
                "User Flow Design",
                "Information Architecture",
                "Interaction Design",
                "Navigation Optimization",
                "User Behavior Analysis",
                "Accessibility Optimization",
                "Conversion-Focused Design",
            ],
        },
        {
            id: "responsive-web-design",
            title: "Responsive Web Design",
            tagline: "Optimized for Every Device",
            icon: Monitor,
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
            desc: "Our responsive web designs provide consistent performance across desktops, tablets, and smartphones. Every interface is optimized for usability, speed, accessibility, and search engine visibility.",
            features: [
                "Mobile-First Design",
                "Responsive Layouts",
                "Cross-Browser Compatibility",
                "Mobile Optimization",
                "Flexible Grid Systems",
                "SEO-Friendly Design",
                "Accessibility Compliance",
            ],
        },
        {
            id: "mobile-app-uiux",
            title: "Mobile App UI/UX Design",
            tagline: "Intuitive Mobile Experiences",
            icon: Smartphone,
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
            desc: "We design engaging Android and iOS applications with smooth navigation, responsive layouts, and user-friendly interfaces that improve customer engagement and retention.",
            features: [
                "Android UI Design",
                "iOS UI Design",
                "Mobile UX Design",
                "Interactive Screens",
                "Touch-Friendly Interfaces",
                "Responsive Mobile Layouts",
                "User Journey Optimization",
                "Cross-Platform Design",
            ],
        },
        {
            id: "interactive-prototype",
            title: "Interactive Prototype Design",
            tagline: "Validate Before Development",
            icon: MousePointer,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
            desc: "We create interactive prototypes that help visualize user flows, test functionality, and gather feedback before development, reducing project risks and improving final outcomes.",
            features: [
                "Clickable Prototypes",
                "Interactive User Flows",
                "Screen Transitions",
                "High-Fidelity Prototypes",
                "Prototype Testing",
                "Design Validation",
                "Development Handoff Support",
            ],
        },
        {
            id: "design-system",
            title: "Design System Development",
            tagline: "Maintain Consistency Across Platforms",
            icon: Boxes,
            image: "https://images.unsplash.com/photo-1581291519195-ef11498d1cf2?q=80&w=800&auto=format&fit=crop",
            desc: "We build scalable design systems with reusable UI components, typography, colors, and design guidelines to ensure consistency across websites, mobile apps, and enterprise software.",
            features: [
                "UI Component Library",
                "Design Tokens",
                "Typography Guidelines",
                "Color Palette",
                "Icon Library",
                "Design Documentation",
                "Brand Style Guide",
                "Developer Handoff Assets",
            ],
        },
        {
            id: "ux-audit-redesign",
            title: "UX Audit & Redesign",
            tagline: "Improve Existing Digital Products",
            icon: Eye,
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
            desc: "Our UX audits identify usability issues, navigation challenges, and design gaps. We redesign existing websites and applications to improve user experience, engagement, and overall performance.",
            features: [
                "UX Audit",
                "Website & App Redesign",
                "Usability Evaluation",
                "User Behavior Analysis",
                "Navigation Improvements",
                "Accessibility Review",
                "Conversion Optimization",
                "UI Modernization",
            ],
        },
        {
            id: "dashboard-admin-panel",
            title: "Dashboard & Admin Panel Design",
            tagline: "Smart Dashboards for Better Productivity",
            icon: LayoutDashboard,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
            desc: "We design clean and intuitive dashboards for CRM, ERP, analytics, and enterprise applications, making data easier to understand and business operations more efficient.",
            features: [
                "Admin Panel Design",
                "Dashboard UI",
                "KPI Visualization",
                "Analytics Dashboard",
                "Data Widgets",
                "Report Layout Design",
                "Responsive Dashboard UI",
                "Enterprise Dashboard Design",
            ],
        },
        {
            id: "usability-testing",
            title: "Usability Testing & Design Validation",
            tagline: "Test Before You Launch",
            icon: Target,
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
            desc: "Our usability testing ensures your website or application is easy to use before development or launch. We evaluate user interactions, identify issues, and refine the design for a better overall experience.",
            features: [
                "Usability Testing",
                "User Feedback Analysis",
                "Prototype Testing",
                "User Acceptance Testing",
                "Task Flow Validation",
                "Accessibility Testing",
                "Interface Optimization",
                "Cross-Device Testing",
            ],
        },
    ];

    // Design Tools & Technologies Categories
    const toolCategories = [
        {
            category: "UI/UX Design",
            tagline: "Industry-standard vector design & prototyping tools for pixel-perfect user interfaces.",
            capabilities: ["Vector Interface Systems", "Interactive Component Libraries", "Responsive Auto-Layout Design"],
            tools: ["Figma", "Adobe XD", "Sketch"],
            icon: PenTool,
            themeColor: "from-purple-500/15 to-indigo-500/15 border-purple-500/25 text-purple-600",
            badgeStyle: "bg-purple-50/90 text-purple-700 border-purple-200/90 hover:bg-purple-600 hover:text-white hover:border-purple-600",
            accentGradient: "from-purple-500 to-indigo-500",
        },
        {
            category: "Graphic Design",
            tagline: "High-resolution graphic creation, brand assets, and visual illustration tools.",
            capabilities: ["Custom Brand Illustrations", "High-Res Vector Graphics", "Digital & Print Asset Specs"],
            tools: ["Adobe Photoshop", "Adobe Illustrator"],
            icon: Paintbrush,
            themeColor: "from-sky-500/15 to-blue-500/15 border-sky-500/25 text-sky-600",
            badgeStyle: "bg-sky-50/90 text-sky-700 border-sky-200/90 hover:bg-sky-600 hover:text-white hover:border-sky-600",
            accentGradient: "from-sky-500 to-blue-500",
        },
        {
            category: "Prototyping & Collaboration",
            tagline: "Interactive wireframing, real-time team whiteboarding, and click-dummy testing tools.",
            capabilities: ["Clickable High-Fi Prototypes", "Real-Time Multi-User Whiteboarding", "User Flow Wireframing"],
            tools: ["InVision", "ProtoPie", "Miro", "FigJam"],
            icon: Layers,
            themeColor: "from-emerald-500/15 to-teal-500/15 border-emerald-500/25 text-emerald-600",
            badgeStyle: "bg-emerald-50/90 text-emerald-700 border-emerald-200/90 hover:bg-emerald-600 hover:text-white hover:border-emerald-600",
            accentGradient: "from-emerald-500 to-teal-500",
        },
        {
            category: "Developer Handoff",
            tagline: "Seamless design system spec export, token handoff, and developer inspection tools.",
            capabilities: ["Design System Spec Export", "Automated CSS/Design Tokens", "Pixel-Perfect Handoff Specs"],
            tools: ["Zeplin", "Figma Dev Mode"],
            icon: Sliders,
            themeColor: "from-amber-500/15 to-orange-500/15 border-amber-500/25 text-amber-600",
            badgeStyle: "bg-amber-50/90 text-amber-700 border-amber-200/90 hover:bg-amber-600 hover:text-white hover:border-amber-600",
            accentGradient: "from-amber-500 to-orange-500",
        },
        {
            category: "User Testing",
            tagline: "Data-driven usability testing, heatmaps, and user behavior analytics tools.",
            capabilities: ["Heatmap & Session Analytics", "Unmoderated Usability Tests", "Conversion Funnel Validation"],
            tools: ["Maze", "Hotjar", "Google Analytics"],
            icon: Eye,
            themeColor: "from-rose-500/15 to-pink-500/15 border-rose-500/25 text-rose-600",
            badgeStyle: "bg-rose-50/90 text-rose-700 border-rose-200/90 hover:bg-rose-600 hover:text-white hover:border-rose-600",
            accentGradient: "from-rose-500 to-pink-500",
        },
        {
            category: "Animation",
            tagline: "High-performance micro-interactions, motion graphics, and Lottie vector animations.",
            capabilities: ["Lottie Vector Animations", "Micro-Interaction UI Motion", "Interactive Hover Dynamics"],
            tools: ["Lottie", "Adobe After Effects"],
            icon: Sparkles,
            themeColor: "from-violet-500/15 to-fuchsia-500/15 border-violet-500/25 text-violet-600",
            badgeStyle: "bg-purple-50/90 text-purple-700 border-purple-200/90 hover:bg-purple-600 hover:text-white hover:border-purple-600",
            accentGradient: "from-violet-500 to-fuchsia-500",
        },
    ];

    // 7-Step UI/UX Process
    const processSteps = [
        {
            step: "Step 1",
            title: "Discovery & Requirement Analysis",
            desc: "Every successful project begins with understanding your business objectives, target audience, and project requirements. We gather detailed information about your users, competitors, and business goals to build a strong foundation for the design process.",
            icon: Search,
        },
        {
            step: "Step 2",
            title: "User Research & UX Strategy",
            desc: "Our design team conducts user research, competitor analysis, and customer journey mapping to understand user behavior and identify opportunities for improving the overall user experience. These insights help us create a strategic UX roadmap tailored to your business.",
            icon: Compass,
        },
        {
            step: "Step 3",
            title: "Information Architecture & Wireframing",
            desc: "Before designing visual interfaces, we organize content, define navigation structures, and create wireframes that outline the application's layout and user flow. This stage ensures a logical and intuitive experience before moving into UI design.",
            icon: Layout,
        },
        {
            step: "Step 4",
            title: "UI Design & Interactive Prototyping",
            desc: "Our designers transform approved wireframes into visually engaging interfaces that reflect your brand identity. Interactive prototypes allow stakeholders to explore the application's functionality and provide valuable feedback before development begins.",
            icon: Palette,
        },
        {
            step: "Step 5",
            title: "Usability Testing & Design Refinement",
            desc: "We evaluate every design through usability testing and stakeholder feedback to identify improvements and optimize user interactions. Necessary refinements are made to ensure the final design delivers an intuitive and seamless experience.",
            icon: Target,
        },
        {
            step: "Step 6",
            title: "Design Handoff & Developer Support",
            desc: "Once the design is approved, we prepare detailed design assets, style guides, and specifications for the development team. We work closely with developers throughout implementation to ensure the final product accurately reflects the approved design.",
            icon: Sliders,
        },
        {
            step: "Step 7",
            title: "Continuous Improvement & Design Optimization",
            desc: "User expectations evolve over time, and so should your digital products. After launch, we analyze user feedback and performance metrics to continuously improve the user experience through design enhancements and usability optimizations.",
            icon: TrendingUp,
        },
    ];

    // Why Choose SysCrop Reasons
    const whyChooseReasons = [
        {
            title: "User-Centered Design",
            desc: "We design experiences that prioritize usability and customer satisfaction.",
            icon: Users,
        },
        {
            title: "Tailored Design Solutions",
            desc: "Every interface is customized to match your business goals and brand identity.",
            icon: Paintbrush,
        },
        {
            title: "Experienced UI/UX Team",
            desc: "Skilled designers with expertise across web, mobile, SaaS, CRM, ERP, and enterprise applications.",
            icon: Award,
        },
        {
            title: "Modern Design Tools",
            desc: "We use the latest technologies to create interactive and scalable designs.",
            icon: Palette,
        },
        {
            title: "Responsive & Accessible",
            desc: "Interfaces optimized for all devices with accessibility best practices.",
            icon: Monitor,
        },
        {
            title: "End-to-End Design Support",
            desc: "From research and wireframes to prototypes and final design delivery.",
            icon: Workflow,
        },
        {
            title: "Quality & On-Time Delivery",
            desc: "We focus on delivering high-quality designs within your project timeline.",
            icon: CheckCircle2,
        },
        {
            title: "Long-Term Partnership",
            desc: "Continuous support and design improvements as your business evolves.",
            icon: Shield,
        },
    ];

    // FAQs Data
    const faqs = [
        {
            q: "What are UI/UX design services, and why are they important?",
            a: "UI/UX design services focus on creating digital products that are visually appealing, easy to use, and user-friendly. A well-designed website or application improves customer satisfaction, increases engagement, reduces bounce rates, and helps businesses achieve better conversion rates.",
        },
        {
            q: "How much do UI/UX design services cost in Pondicherry?",
            a: "The cost of UI/UX Design Services in Pondicherry depends on factors such as project size, number of screens, complexity, features, and business requirements. Whether you need a website, mobile app, or enterprise application, the pricing is customized based on your specific needs.",
        },
        {
            q: "How long does a UI/UX design project take?",
            a: "The timeline varies depending on the scope of the project. A simple website design may take a few weeks, while complex web applications or mobile apps require more time for research, wireframing, prototyping, testing, and final design delivery.",
        },
        {
            q: "Why choose SysCrop for UI/UX Design Services in Pondicherry?",
            a: "SysCrop combines industry expertise, user-centered design practices, and modern design tools to create intuitive and engaging digital experiences. Our team works closely with clients to deliver customized UI/UX solutions that align with their business goals and user expectations.",
        },
        {
            q: "Does SysCrop provide UI/UX design for both websites and mobile applications?",
            a: "Yes. Our UI/UX Design Services in Pondicherry include website UI/UX design, mobile app design, SaaS platforms, CRM and ERP interfaces, dashboards, eCommerce websites, and enterprise applications. Every design is responsive, scalable, and optimized for a seamless user experience.",
        },
        {
            q: "Does SysCrop redesign existing websites and applications?",
            a: "Yes. If your current website or application has usability issues, outdated visuals, or poor user engagement, our team can redesign the interface, improve the user experience, optimize navigation, and create a modern design that better supports your business objectives.",
        },
    ];

    return (
        <main className="bg-white min-h-screen overflow-x-clip font-sans">
            {/* Header Banner */}
            <HeaderBanner
                title={
                    <>
                        <span className="text-[#1A5CDD] bg-clip-text text-transparent bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8]">UI/UX Design Solutions</span> in Pondicherry
                    </>
                }
                description="Transform Ideas into Engaging Digital Experiences with Intuitive, Responsive, and Visually Stunning Interfaces"
            />

            {/* SECTION 1: HERO / INTRO SECTION */}
            <section className="py-20 lg:py-28 bg-[#F0F6FF] relative overflow-hidden">
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[700px] bg-[#1A5CDD]/8 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-[#1A5CDD]/6 rounded-full blur-3xl pointer-events-none" />
                <div
                    className="absolute inset-0 opacity-[0.04] pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(#1A5CDD 1.5px, transparent 1.5px)`,
                        backgroundSize: `24px 24px`,
                    }}
                />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <div className="lg:col-span-7">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 text-[#1A5CDD] mb-6">
                                <span className="w-2 h-2 rounded-full bg-[#1A5CDD] inline-block animate-ping" />
                                UI/UX Design Excellence
                            </div>

                            <h1 className="text-3xl md:text-5xl lg:text-[48px] font-bold text-[#011146] tracking-tight leading-[1.2] mb-4">
                                Top <span className="text-[#1A5CDD]">UI/UX Design Services</span> in Pondicherry
                            </h1>

                            <div className="inline-block bg-gradient-to-r from-[#1A5CDD]/10 via-[#38bdf8]/15 to-blue-50 border border-[#1A5CDD]/20 px-5 py-2.5 rounded-2xl mb-6 shadow-xs">
                                <h2 className="text-lg md:text-xl font-extrabold text-[#1A5CDD] tracking-wide flex items-center gap-2">
                                    <Sparkles size={18} className="text-[#38bdf8]" />
                                    Transform Ideas into Engaging Digital Experiences
                                </h2>
                            </div>

                            <div className="space-y-4 mb-8">
                                <p className="text-slate-600 text-[16.5px] leading-[1.85] font-normal">
                                    A successful digital product combines attractive design with a seamless user experience. At SysCrop, we provide UI/UX Design Services in Pondicherry to help businesses create intuitive, responsive, and visually engaging websites and applications.
                                </p>
                                <p className="text-slate-600 text-[16.5px] leading-[1.85] font-normal">
                                    We design user-friendly interfaces for websites, mobile apps, SaaS platforms, CRM, ERP systems, dashboards, and custom business applications. Every design is based on user research, business goals, and modern design principles to improve usability, engagement, and conversions.
                                </p>
                                <p className="text-slate-600 text-[16.5px] leading-[1.85] font-normal">
                                    From wireframes and prototypes to complete UI design, our team delivers practical solutions that strengthen your brand and enhance customer satisfaction.
                                </p>
                            </div>

                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center gap-3 bg-[#011146] text-white px-8 py-4 rounded-xl font-bold text-[15px] transition-all duration-300 shadow-lg shadow-blue-900/15 hover:bg-[#1A5CDD] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(26,92,221,0.35)] overflow-hidden"
                            >
                                <span className="relative z-10">Start Your Design Project</span>
                                <ArrowRight
                                    size={18}
                                    className="relative z-10 group-hover:translate-x-1.5 transition-transform duration-300"
                                />
                            </Link>
                        </div>

                        <div className="lg:col-span-5 relative flex justify-center items-center mt-12 lg:mt-0">
                            {/* Ambient Background Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] max-w-[500px] max-h-[500px] bg-gradient-to-tr from-[#1A5CDD]/10 to-[#38bdf8]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

                            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] group overflow-visible">
                                {/* Expanding the image container so it can be huge without cropping its soft edges */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] lg:w-[140%] lg:h-[140%]">
                                    <Image
                                        src="/images/webdevelopment/ui_ux_1.svg"
                                        alt="Professional UI/UX Design Services"
                                        fill
                                        className="object-contain transform transition-transform duration-700 ease-out z-10"
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                </div>

                                {/* Floating Badges */}
                                {/* Left Badge */}
                                <div className="absolute top-[12%] -left-4 md:-left-16 bg-white/95 backdrop-blur-md border border-white/50 rounded-2xl px-4 py-3 shadow-[0_15px_35px_rgba(0,0,0,0.06)] flex items-center gap-3 z-20 hover:-translate-y-1 transition-transform duration-300 hidden sm:flex">
                                    <div className="w-9 h-9 rounded-xl bg-[#1A5CDD]/10 text-[#1A5CDD] flex items-center justify-center font-bold">
                                        <Users size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xl font-extrabold text-[#011146] leading-none">100%</p>
                                        <p className="text-slate-500 text-[11px] font-semibold mt-0.5">User-Centered Design</p>
                                    </div>
                                </div>

                                {/* Right Badge */}
                                <div className="absolute top-[76%] right-2 md:-right-4 lg:-right-2 xl:-right-8 bg-white/95 backdrop-blur-md border border-white/50 rounded-2xl px-4 py-3 shadow-[0_15px_35px_rgba(0,0,0,0.06)] flex items-center gap-3 z-20 hover:-translate-y-1 transition-transform duration-300 hidden sm:flex">
                                    <div className="w-9 h-9 rounded-xl bg-[#1A5CDD]/10 text-[#1A5CDD] flex items-center justify-center font-bold">
                                        <Monitor size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xl font-extrabold text-[#011146] leading-none">Scalable</p>
                                        <p className="text-slate-500 text-[11px] font-semibold mt-0.5">Cross-Platform UI</p>
                                    </div>
                                </div>

                                {/* Bottom Badge */}
                                <div className="absolute -bottom-4 -left-4 md:left-0 lg:left-4 bg-white/95 backdrop-blur-md border border-white/50 rounded-2xl px-4 py-3 shadow-[0_15px_35px_rgba(0,0,0,0.06)] flex items-center gap-3 z-20 hover:-translate-y-1 transition-transform duration-300 hidden sm:flex">
                                    <div className="w-9 h-9 rounded-xl bg-[#1A5CDD]/10 text-[#1A5CDD] flex items-center justify-center font-bold">
                                        <Award size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xl font-extrabold text-[#011146] leading-none">20+ Yrs</p>
                                        <p className="text-slate-500 text-[11px] font-semibold mt-0.5">Combined Experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: What are UI/UX Design Services? */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-1 lg:order-2">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 text-[#1A5CDD] mb-6">
                                <Palette size={14} /> Understanding UI/UX Design
                            </span>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#011146] mb-3 leading-tight">
                                What are <span className="text-[#1A5CDD]">UI/UX Design Services?</span>
                            </h2>
                            <h3 className="text-xl md:text-2xl font-bold text-[#1A5CDD] mb-6">
                                Designing Digital Experiences That Users Love
                            </h3>

                            <p className="text-slate-600 text-[16.5px] leading-[1.85] mb-5">
                                UI (User Interface) and UX (User Experience) design focus on creating visually appealing, user-friendly, and engaging digital experiences. UI enhances the look and feel of websites and applications, while UX ensures every interaction is intuitive, seamless, and efficient.
                            </p>
                            <p className="text-slate-600 text-[16.5px] leading-[1.85] mb-8">
                                Our UI/UX Design Services in Pondicherry include user research, wireframing, prototyping, responsive interface design, and usability testing to create digital products that improve user satisfaction and business performance. We design modern, intuitive experiences that strengthen your brand, increase customer engagement, and deliver measurable results across web and mobile platforms.
                            </p>
                        </div>

                        <div className="order-2 lg:order-1 relative w-full h-[500px] lg:h-[580px] flex justify-center items-center">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1A5CDD]/5 to-transparent rounded-[40px] transform rotate-3" />

                            <div className="relative w-[90%] h-[90%] rounded-[32px] overflow-hidden bg-slate-50 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 z-10 group transition-all duration-500 hover:shadow-[0_30px_60px_rgba(26,92,221,0.12)]">
                                <Image
                                    src="/images/webdevelopment/ui_ux_2.svg"  
                                    alt="User Research & UX Design Session"
                                    fill
                                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                                />
                            </div>

                            <div className="absolute top-10 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20 flex items-center gap-4">
                                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
                                    <CheckCircle size={24} />
                                </div>
                                <div>
                                    <p className="font-extrabold text-[#011146] text-lg">Intuitive</p>
                                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">User Flows</p>
                                </div>
                            </div>

                            <div className="absolute bottom-12 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 z-20">
                                <div className="flex items-center gap-3 mb-1">
                                    <div className="w-8 h-8 rounded-full bg-[#1A5CDD] text-white flex items-center justify-center text-xs font-bold">
                                        <Sparkles size={16} />
                                    </div>
                                    <p className="text-[#011146] font-bold text-sm">Usability Validated</p>
                                </div>
                                <p className="text-slate-500 text-xs">Research-backed design decisions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Why Your Business Needs UI/UX Design */}
            <section className="py-20 bg-[#011146] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1A5CDD]/20 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#38bdf8]/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 items-center">
                        <div className="xl:col-span-5">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-white/10 border border-white/20 text-white backdrop-blur-md mb-6">
                                <TrendingUp size={14} /> Essential Business Impact
                            </span>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                Why Your Business Needs <span className="text-[#38bdf8]">UI/UX Design</span>
                            </h2>

                            <p className="text-blue-100/80 text-[16.5px] leading-[1.85] mb-6">
                                Modern users expect websites and applications that are fast, intuitive, and easy to navigate. Poor design often leads to higher bounce rates, lower engagement, and missed business opportunities.
                            </p>
                            <p className="text-blue-100/80 text-[16.5px] leading-[1.85] mb-8">
                                With our UI/UX Design Services in Pondicherry, we create user-focused digital experiences that improve usability, strengthen brand credibility, and increase conversions across websites, mobile apps, CRM, ERP, SaaS, and enterprise applications.
                            </p>

                            <div className="inline-flex items-center gap-4 text-white font-bold text-[16px] border border-[#38bdf8]/30 bg-[#38bdf8]/5 px-6 py-3 rounded-2xl w-fit mt-4 group hover:border-[#38bdf8]/70 hover:bg-[#38bdf8]/10 transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.05)] hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]">
                                <Shield size={22} className="text-[#38bdf8] group-hover:scale-110 transition-transform duration-300" />
                                Drive Higher Conversions & Satisfaction
                            </div>
                        </div>

                        <div className="xl:col-span-7">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                {[
                                    { title: "Reduce bounce rates & customer friction", icon: Shield },
                                    { title: "Strengthen brand credibility & trust", icon: Globe },
                                    { title: "Increase engagement across platforms", icon: Target },
                                    { title: "Simplify navigation for web & mobile apps", icon: Layers },
                                    { title: "Optimize CRM, ERP & SaaS workflows", icon: LayoutDashboard },
                                    { title: "Improve conversion rates & ROI", icon: TrendingUp },
                                    { title: "Deliver mobile-first responsive experiences", icon: Smartphone },
                                    { title: "Ensure accessibility & cross-platform consistency", icon: CheckCircle2 },
                                ].map((item, idx) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={idx} className="relative group pl-5">
                                            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-white/5 group-hover:bg-[#38bdf8] transition-colors duration-500 rounded-full" />
                                            
                                            <div className="relative z-10 flex flex-col gap-3">
                                                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-[#38bdf8] flex items-center justify-center shrink-0 group-hover:bg-gradient-to-br group-hover:from-[#1A5CDD] group-hover:to-[#38bdf8] group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-sm group-hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]">
                                                    <Icon size={20} strokeWidth={2.5} />
                                                </div>
                                                <h4 className="text-white/90 font-bold text-[16px] leading-snug group-hover:text-white transition-colors">
                                                    {item.title}
                                                </h4>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Our UI/UX Design Services */}
            <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50/60 via-white to-slate-50/40 overflow-hidden relative">
                <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-[#1A5CDD]/8 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-[#38bdf8]/10 rounded-full blur-[140px] pointer-events-none" />

                <div className="container mx-auto max-w-7xl px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 text-[#1A5CDD]">
                            <Sparkles size={14} /> Comprehensive UI/UX Offerings
                        </span>

                        <h2 className="mt-5 text-3xl md:text-5xl font-extrabold text-[#011146] tracking-tight">
                            Our UI/UX <span className="bg-gradient-to-r from-[#1A5CDD] via-[#2E8BFF] to-[#38bdf8] bg-clip-text text-transparent">Design Services</span>
                        </h2>

                        <p className="mt-3 text-lg font-bold text-[#1A5CDD]">
                            End-to-End Solutions for Web, Mobile, SaaS & Enterprise Applications
                        </p>

                        <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
                            At SysCrop, we provide UI/UX Design Services in Pondicherry to help businesses create intuitive, engaging, and user-friendly digital products. We design websites, mobile applications, SaaS platforms, CRM, ERP systems, enterprise software, and eCommerce solutions that deliver seamless user experiences and strengthen your brand.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
                            <span className="inline-flex items-center gap-2 bg-white border border-slate-200/80 px-4 py-1.5 rounded-full text-xs font-extrabold text-[#011146] shadow-2xs">
                                <CheckCircle size={14} className="text-[#1A5CDD]" /> 9 Core Service Modules
                            </span>
                            <span className="inline-flex items-center gap-2 bg-white border border-slate-200/80 px-4 py-1.5 rounded-full text-xs font-extrabold text-[#011146] shadow-2xs">
                                <CheckCircle size={14} className="text-[#1A5CDD]" /> Pixel-Perfect Standards
                            </span>
                            <span className="inline-flex items-center gap-2 bg-white border border-slate-200/80 px-4 py-1.5 rounded-full text-xs font-extrabold text-[#011146] shadow-2xs">
                                <CheckCircle size={14} className="text-[#1A5CDD]" /> 100% Tailored UX Strategy
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            const isLastOdd = services.length % 2 !== 0 && index === services.length - 1;

                            return (
                                <div
                                    key={service.id}
                                    id={service.id}
                                    className={`bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group scroll-mt-28 relative overflow-hidden ${isLastOdd ? 'md:col-span-2' : ''}`}
                                >
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1A5CDD] via-[#2E8BFF] to-[#38bdf8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="w-12 h-12 rounded-xl bg-[#011146] text-[#38bdf8] flex items-center justify-center shadow-md group-hover:bg-[#1A5CDD] group-hover:text-white transition-colors duration-300">
                                                <Icon size={22} />
                                            </div>
                                            <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 bg-slate-100 px-3.5 py-1 rounded-full group-hover:bg-blue-50 group-hover:text-[#1A5CDD] transition-colors">
                                                0{index + 1} / 09
                                            </span>
                                        </div>

                                        <h3 className="text-xl sm:text-2xl font-black text-[#011146] group-hover:text-[#1A5CDD] transition-colors leading-snug mb-1">
                                            {service.title}
                                        </h3>

                                        <p className="text-[#1A5CDD] font-extrabold text-xs uppercase tracking-wider mb-3">
                                            {service.tagline}
                                        </p>

                                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                                            {service.desc}
                                        </p>

                                        <div className="mb-5 pt-4 border-t border-slate-100">
                                            <p className="text-[11px] font-black uppercase tracking-widest text-[#011146] mb-3 flex items-center gap-1.5">
                                                <CheckCircle size={13} className="text-[#1A5CDD]" /> Key Deliverables & Features
                                            </p>
                                            <div className={`grid grid-cols-1 ${isLastOdd ? 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'lg:grid-cols-2'} gap-x-6 gap-y-2.5`}>
                                                {service.features.map((feat, fIdx) => (
                                                    <div
                                                        key={fIdx}
                                                        className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 group/feat"
                                                    >
                                                        <div className="w-4 h-4 rounded-full bg-blue-50 text-[#1A5CDD] flex items-center justify-center shrink-0 group-hover/feat:bg-[#1A5CDD] group-hover/feat:text-white transition-colors">
                                                            <Check size={9} strokeWidth={3} />
                                                        </div>
                                                        <span className="truncate">{feat}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-extrabold text-[#1A5CDD]">
                                        <span className="flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                                            Explore Capabilities <ArrowRight size={13} />
                                        </span>
                                        <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                                            UI/UX Solution
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION 5: Design Tools & Technologies We Use */}
            <section className="py-12 sm:py-16 bg-gradient-to-b from-[#F4F8FF] via-white to-[#F4F8FF] relative overflow-hidden">
                <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#1A5CDD]/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-[#38bdf8]/15 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto max-w-7xl px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-8">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 text-[#1A5CDD]">
                            <Sliders size={13} /> Modern Technology Stack
                        </span>

                        <h2 className="mt-3 text-2xl md:text-4xl font-extrabold text-[#011146] tracking-tight">
                            Design Tools & <span className="bg-gradient-to-r from-[#1A5CDD] to-[#2E8BFF] bg-clip-text text-transparent">Technologies We Use</span>
                        </h2>

                        <p className="mt-1.5 text-base font-bold text-[#1A5CDD]">
                            Modern Tools Behind Our UI/UX Design Services
                        </p>

                        <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                            At SysCrop, we use industry-leading design tools to deliver innovative UI/UX Design Services in Pondicherry. As a trusted UI/UX Design Company in Pondicherry, we create responsive interfaces, interactive prototypes, and user-friendly digital experiences using the latest design technologies.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                        <div className="lg:col-span-5 flex flex-col gap-2 justify-center">
                            {toolCategories.map((cat, idx) => {
                                const Icon = cat.icon;
                                const isActive = activeToolCategory === idx;
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveToolCategory(idx)}
                                        className={`w-full text-left px-3.5 py-2.5 rounded-xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${isActive
                                            ? "bg-white border-[#1A5CDD] shadow-md shadow-blue-500/10"
                                            : "bg-white/70 border-slate-200/80 hover:bg-white hover:border-blue-200 hover:shadow-sm"
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isActive ? "bg-[#1A5CDD] text-white" : "bg-blue-50 text-[#1A5CDD] group-hover:bg-blue-100"
                                                }`}>
                                                <Icon size={18} />
                                            </div>
                                            <div>
                                                <h3 className={`font-extrabold text-sm leading-tight transition-colors ${isActive ? "text-[#1A5CDD]" : "text-[#011146] group-hover:text-[#1A5CDD]"
                                                    }`}>
                                                    {cat.category}
                                                </h3>
                                                <span className="text-[11px] font-semibold text-slate-400">
                                                    {cat.tools.length} Industry Tools
                                                </span>
                                            </div>
                                        </div>

                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${isActive ? "bg-[#1A5CDD]/10 text-[#1A5CDD]" : "opacity-0 group-hover:opacity-100 text-slate-400"
                                            }`}>
                                            <ChevronRight size={14} />
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        <div className="lg:col-span-7 bg-gradient-to-br from-[#011146] via-[#0A1A5C] to-[#1A5CDD] text-white rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden flex flex-col justify-between">
                            <div className="absolute top-0 right-0 w-60 h-60 bg-[#38bdf8]/20 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#1A5CDD]/30 rounded-full blur-3xl pointer-events-none" />

                            <div className="relative z-10 space-y-4">
                                <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
                                    <div className="flex items-center gap-2.5">
                                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-white/10 border border-white/20 text-white backdrop-blur-md">
                                            <Sparkles size={12} /> Spotlight Category
                                        </span>
                                        <span className="text-[11px] font-bold text-blue-200/80">
                                            Category 0{activeToolCategory + 1} of 0{toolCategories.length}
                                        </span>
                                    </div>

                                    {(() => {
                                        const ActiveIcon = toolCategories[activeToolCategory].icon;
                                        return (
                                            <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-[#38bdf8] flex items-center justify-center shadow-md shrink-0">
                                                <ActiveIcon size={20} />
                                            </div>
                                        );
                                    })()}
                                </div>

                                <div>
                                    <h3 className="text-2xl font-extrabold tracking-tight text-white mb-1">
                                        {toolCategories[activeToolCategory].category}
                                    </h3>

                                    <p className="text-blue-100/90 text-xs sm:text-sm leading-relaxed max-w-xl">
                                        {toolCategories[activeToolCategory].tagline}
                                    </p>
                                </div>

                                {toolCategories[activeToolCategory].capabilities && (
                                    <div className="space-y-1.5">
                                        <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#38bdf8]">
                                            Core Capabilities
                                        </span>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {toolCategories[activeToolCategory].capabilities.map((cap, cIdx) => (
                                                <div
                                                    key={cIdx}
                                                    className="bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-lg text-xs font-bold text-blue-50 flex items-center gap-2"
                                                >
                                                    <div className="w-4 h-4 rounded-full bg-[#38bdf8]/20 text-[#38bdf8] flex items-center justify-center shrink-0">
                                                        <Check size={10} />
                                                    </div>
                                                    <span>{cap}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="space-y-1.5">
                                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#38bdf8]">
                                        Featured Standard Software
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {toolCategories[activeToolCategory].tools.map((tool, tIdx) => (
                                            <div
                                                key={tIdx}
                                                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-3.5 py-1.5 rounded-xl text-xs font-extrabold flex items-center gap-2 shadow-sm hover:bg-white hover:text-[#011146] transition-all duration-200 cursor-pointer group"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] group-hover:bg-[#1A5CDD] transition-colors" />
                                                <span>{tool}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="pt-3 border-t border-white/15 mt-4 flex items-center justify-between text-[11px] text-blue-200/80 font-bold relative z-10">
                                <span className="flex items-center gap-1.5">
                                    <CheckCircle2 size={13} className="text-[#38bdf8]" />
                                    100% Industry Standard Compliance
                                </span>
                                <span>Seamless Dev Handoff</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Our UI/UX Design Process */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="container mx-auto max-w-7xl px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 text-[#1A5CDD]">
                            <Workflow size={14} /> Proven Methodology
                        </span>

                        <h2 className="mt-6 text-3xl md:text-5xl font-extrabold text-[#011146] tracking-tight">
                            Our UI/UX <span className="bg-gradient-to-r from-[#1A5CDD] to-[#2E8BFF] bg-clip-text text-transparent">Design Process</span>
                        </h2>

                        <p className="mt-3 text-lg font-bold text-[#1A5CDD]">
                            A Strategic Design Process Focused on User Experience and Business Growth
                        </p>

                        <p className="mt-5 text-slate-600 text-[16.5px] leading-relaxed">
                            Creating an exceptional digital experience requires more than attractive visuals—it requires research, planning, and collaboration. At SysCrop, we follow a structured design methodology that transforms business ideas into intuitive digital experiences. As a trusted provider of UI/UX Design Services in Pondicherry, we focus on understanding user needs and creating visually appealing, user-friendly interfaces.
                        </p>
                        <p className="mt-4 text-slate-600 text-[16.5px] leading-relaxed">
                            From user research and wireframing to prototyping, usability testing, and final design delivery, every stage is carefully planned to ensure a seamless user experience. Whether you're building a new product or redesigning an existing one, our process helps improve usability, reduce development risks, and deliver scalable digital solutions.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#1A5CDD] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
                                Step 0{(processIndex % processSteps.length) + 1} of 0{processSteps.length}
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setProcessIndex((prev) => (prev > 0 ? prev - 1 : processSteps.length - 1))}
                                className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 text-[#011146] hover:bg-[#1A5CDD] hover:text-white hover:border-transparent transition-all duration-300 flex items-center justify-center shadow-xs disabled:opacity-50"
                                aria-label="Previous Step"
                            >
                                <ChevronLeft size={22} />
                            </button>
                            <button
                                onClick={() => setProcessIndex((prev) => prev + 1)}
                                className="w-12 h-12 rounded-full bg-[#1A5CDD] text-white shadow-md hover:bg-[#011146] transition-all duration-300 flex items-center justify-center"
                                aria-label="Next Step"
                            >
                                <ChevronRight size={22} />
                            </button>
                        </div>
                    </div>

                    <div
                        className="overflow-hidden rounded-3xl p-4 -m-4"
                        onMouseEnter={() => setIsAutoScrolling(false)}
                        onMouseLeave={() => setIsAutoScrolling(true)}
                    >
                        <div
                            className="flex gap-6 transition-transform duration-500 ease-out"
                            style={{
                                transform: `translateX(calc(-${processIndex % processSteps.length} * (100% / 3 + 0.5rem)))`,
                            }}
                        >
                            {[...processSteps, ...processSteps].map((step, idx) => {
                                const Icon = step.icon;
                                return (
                                    <div
                                        key={idx}
                                        onClick={() => setProcessIndex(idx % processSteps.length)}
                                        className="w-full md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] shrink-0 cursor-pointer rounded-3xl p-8 bg-[#F8FAFC] border border-slate-200/80 hover:border-blue-300 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="flex items-center justify-between mb-6">
                                                <span className="w-12 h-12 rounded-2xl bg-[#011146] text-white flex items-center justify-center text-lg font-black">
                                                    0{(idx % processSteps.length) + 1}
                                                </span>
                                                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#1A5CDD] border border-blue-100 flex items-center justify-center">
                                                    <Icon size={20} />
                                                </div>
                                            </div>

                                            <span className="text-xs font-black uppercase tracking-widest text-[#1A5CDD] mb-1.5 block">
                                                {step.step}
                                            </span>
                                            <h3 className="text-xl font-extrabold text-[#011146] mb-3 leading-snug">
                                                {step.title}
                                            </h3>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-2.5 mt-10">
                        {processSteps.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setProcessIndex(idx)}
                                className={`transition-all duration-300 rounded-full ${(processIndex % processSteps.length) === idx
                                    ? "w-8 h-3 bg-[#1A5CDD]"
                                    : "w-3 h-3 bg-slate-200 hover:bg-blue-300"
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 7: Why Businesses Choose SysCrop */}
            <section className="py-20 bg-gradient-to-b from-[#010D33] via-[#05164E] to-[#010B29] text-white relative overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#1A5CDD]/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#38bdf8]/15 rounded-full blur-[120px] pointer-events-none" />
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(#38bdf8 1.5px, transparent 1.5px)`,
                        backgroundSize: `32px 32px`,
                    }}
                />

                <div className="container mx-auto max-w-7xl px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-white/10 border border-white/20 text-white backdrop-blur-md">
                            <Award size={14} /> Why Choose Us
                        </span>

                        <h2 className="mt-6 text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                            Why Businesses <span className="text-[#38bdf8]">Choose SysCrop</span>
                        </h2>

                        <p className="mt-3 text-xl font-bold text-[#38bdf8]">
                            Trusted UI/UX Design Company in Pondicherry
                        </p>

                        <p className="mt-5 text-blue-100/80 text-[16.5px] leading-relaxed">
                            At SysCrop, we combine creativity, strategy, and technology to deliver exceptional UI/UX Design Services in Pondicherry. Backed by 20+ years of combined industry experience, our team designs intuitive and engaging digital experiences that help businesses improve user satisfaction, strengthen their brand, and achieve long-term growth. As a trusted UI/UX Design Company in Pondicherry, we focus on creating user-centric designs that are scalable, responsive, and built for success.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whyChooseReasons.map((reason, idx) => {
                            const Icon = reason.icon;
                            return (
                                <div
                                    key={idx}
                                    className="group relative bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-xl border border-white/[0.09] hover:border-[#38bdf8]/40 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-[0_20px_40px_rgba(1,17,70,0.5)] overflow-hidden flex flex-col justify-between"
                                >
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div>
                                        <div className="mb-5">
                                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1A5CDD]/30 to-[#38bdf8]/20 border border-[#38bdf8]/30 text-[#38bdf8] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#38bdf8] group-hover:text-[#011146] transition-all duration-300 shadow-md">
                                                <Icon size={22} />
                                            </div>
                                        </div>

                                        <h3 className="text-white font-extrabold text-lg mb-2.5 leading-snug group-hover:text-[#38bdf8] transition-colors">
                                            {reason.title}
                                        </h3>
                                        <p className="text-blue-100/75 text-sm leading-relaxed">
                                            {reason.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION 8: Frequently Asked Questions (FAQs) */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="container mx-auto max-w-7xl px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        <div className="lg:col-span-5 lg:sticky">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 text-[#1A5CDD] mb-6">
                                <HelpCircle size={14} /> Clear Answers
                            </span>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#011146] tracking-tight mb-6 leading-tight">
                                Frequently Asked <span className="text-[#1A5CDD]">Questions (FAQs)</span>
                            </h2>
                            <p className="text-slate-600 text-[16.5px] leading-relaxed mb-8">
                                Got questions about our UI/UX Design Services in Pondicherry? Find all key answers right here to help guide your project decisions.
                            </p>

                            <div className="bg-[#F0F6FF] rounded-2xl p-6 border border-blue-100/80 shadow-xs">
                                <h4 className="text-[#011146] font-bold text-lg mb-2 flex items-center gap-2">
                                    <Sparkles size={18} className="text-[#1A5CDD]" /> Still Have Questions?
                                </h4>
                                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                    Can&apos;t find the answer you&apos;re looking for? Reach out to our design team for a free consultation.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 text-sm font-bold text-[#1A5CDD] hover:text-[#011146] transition-colors"
                                >
                                    <span>Get in Touch With Our Team</span>
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        <div className="lg:col-span-7 space-y-4">
                            {faqs.map((faq, idx) => {
                                const isOpen = activeAccordion === idx;
                                return (
                                    <div
                                        key={idx}
                                        className={`rounded-2xl transition-all duration-300 overflow-hidden ${isOpen
                                            ? "bg-white border-2 border-[#1A5CDD] shadow-md shadow-blue-500/10"
                                            : "bg-white border border-slate-200/80 hover:border-blue-300 shadow-xs"
                                            }`}
                                    >
                                        <button
                                            onClick={() => setActiveAccordion(isOpen ? null : idx)}
                                            className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-[17px] transition-colors group"
                                        >
                                            <span className={isOpen ? "text-[#1A5CDD] font-extrabold" : "text-[#011146] group-hover:text-[#1A5CDD]"}>
                                                {idx + 1}. {faq.q}
                                            </span>
                                            <div className="flex-shrink-0 ml-4">
    <svg className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "text-[#1A5CDD] rotate-180" : "text-slate-400 group-hover:text-[#1A5CDD] rotate-0"}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
</div>
                                        </button>

                                        {isOpen && (
                                            <div className="px-6 pb-6 pt-1 text-slate-600 text-[15.5px] leading-relaxed font-normal">
                                                {faq.a}
                                            </div>
                                        )}
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
