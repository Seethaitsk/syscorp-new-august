"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Code, Server, Database, Zap, Layout, Lock, Cloud, Gauge,
    Shield, Wrench, CheckCircle2, ChevronDown, Check, ArrowRight,
    Cpu, Layers, Sparkles, Activity, KeyRound, Monitor, Settings,
    FileCode, Terminal, Globe, Smartphone, RefreshCw, Users, HelpCircle,
    TrendingUp, Rocket, FileText, ChevronRight, ChevronLeft
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderBanner from "@/components/ui/HeaderBanner";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function FullStackClient() {
    const mainRef = useRef<HTMLDivElement>(null);
    const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
    const [activeProcessIndex, setActiveProcessIndex] = useState<number>(0);

    const services = [
        {
            id: "frontend-development",
            title: "Frontend Development",
            subtitle: "Create Fast, Responsive & Engaging User Experiences",
            desc: "Your application's frontend is the first impression users have of your business. A well-designed interface not only attracts visitors but also improves engagement, usability, and customer satisfaction. At SysCrop, our Full-Stack Development Company in Pondicherry builds modern, responsive, and visually appealing user interfaces that deliver seamless experiences across desktops, tablets, and mobile devices.\n\nWe focus on creating intuitive layouts, smooth navigation, and high-performance interfaces that enhance user interaction while maintaining accessibility and cross-browser compatibility. Every frontend application is optimized for speed, responsiveness, and search engine performance, ensuring your users enjoy a consistent experience regardless of the device they use.\n\nOur frontend developers work closely with UI/UX designers to transform creative designs into interactive applications using the latest frameworks and industry best practices. Whether you're developing a business portal, enterprise application, SaaS platform, or eCommerce website, we ensure your frontend is scalable, secure, and future-ready.",
            icon: Monitor,
            technologies: ["React.js", "Angular", "Vue.js", "Next.js", "HTML5", "CSS3", "JavaScript", "TypeScript", "Bootstrap", "Tailwind CSS"]
        },
        {
            id: "backend-development",
            title: "Backend Development",
            subtitle: "Build Secure, Scalable & High-Performance Business Applications",
            desc: "A powerful backend is the foundation of every successful web application. It manages business logic, user authentication, database operations, APIs, and application performance behind the scenes. As a trusted Software Company in Pondicherry, SysCrop develops secure backend systems that ensure reliability, scalability, and smooth business operations.\n\nOur backend development services are designed to handle everything from simple business websites to large-scale enterprise applications with thousands of concurrent users. We build robust server-side architectures that efficiently process data, integrate third-party services, and maintain high levels of security and performance.\n\nWhether you're building a CRM, ERP, SaaS application, online marketplace, or enterprise platform, our backend solutions are developed to support future business growth while maintaining maximum uptime and security.",
            icon: Server,
            technologies: ["Node.js", "Express.js", "PHP", "Laravel", "Python", "Django", "ASP.NET Core", "Java", "Spring Boot"]
        },
        {
            id: "database-development",
            title: "Database Development & Management",
            subtitle: "Secure, Organized & Scalable Data Management Solutions",
            desc: "Every successful application relies on a well-structured database. Our database development services ensure your business data is stored securely, managed efficiently, and easily accessible whenever needed. As part of our Full-Stack Development Company in Pondicherry, we design optimized database architectures that improve application performance, maintain data integrity, and support future scalability.\n\nFrom relational databases to NoSQL solutions, our team selects the right database technology based on your business requirements, ensuring faster query execution, reliable backups, and efficient data processing.",
            icon: Database,
            technologies: ["MySQL", "PostgreSQL", "MongoDB", "Microsoft SQL Server", "Firebase", "Redis"]
        },
        {
            id: "api-integration",
            title: "REST API & Third-Party API Integration",
            subtitle: "Connect Your Applications with Powerful API Solutions",
            desc: "Modern web applications rely on seamless communication between multiple platforms and services. At SysCrop, we develop secure, scalable, and high-performance APIs that enable your applications to exchange data efficiently with third-party systems. As a leading Full-Stack Development Company in Pondicherry, we build custom REST APIs and integrate external services to enhance functionality, automate workflows, and improve business productivity.\n\nWhether you need payment gateway integration, CRM connectivity, ERP synchronization, cloud services, SMS gateways, or social media authentication, our API integration services ensure reliable communication while maintaining security and performance.\n\nOur developers follow industry standards and best practices to build APIs that are easy to maintain, scalable for future growth, and capable of supporting complex business operations.",
            icon: Zap,
            apiServices: [
                "REST API Development",
                "GraphQL API Development",
                "Payment Gateway Integration",
                "CRM & ERP Integration",
                "Cloud API Integration",
                "SMS & Email API Integration",
                "Social Media API Integration",
                "Third-Party Business API Integration",
                "API Documentation",
                "API Security & Authentication"
            ]
        },
        {
            id: "ui-ux-implementation",
            title: "UI/UX Implementation",
            subtitle: "Transform Creative Designs into Interactive User Experiences",
            desc: "A great design is only effective when it is implemented with precision. Our UI/UX implementation services convert design concepts into fully responsive, interactive, and user-friendly web applications that deliver consistent experiences across all devices.\n\nAs an experienced Software Company in Pondicherry, we ensure every interface is developed with pixel-perfect accuracy while maintaining fast loading speeds, accessibility, and cross-browser compatibility.\n\nOur frontend developers work closely with designers to create intuitive user journeys that improve engagement, increase customer satisfaction, and strengthen your brand identity.",
            icon: Layout,
            technologies: ["Figma", "Adobe XD", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "JavaScript", "React.js"]
        },
        {
            id: "authentication-management",
            title: "Authentication & User Management",
            subtitle: "Secure User Access with Enterprise-Grade Authentication",
            desc: "Protecting user data is essential for every modern application. Our authentication and user management solutions help businesses implement secure login systems, role-based permissions, and identity management that protect sensitive information while providing a smooth user experience.\n\nAs part of our Full-Stack Development Company in Pondicherry, we develop authentication systems that are secure, scalable, and easy to manage for businesses of every size.",
            icon: KeyRound,
            features: [
                "User Registration",
                "Secure Login Systems",
                "JWT Authentication",
                "OAuth Authentication",
                "Google Login",
                "Microsoft Login",
                "Social Login Integration",
                "Role-Based Access Control (RBAC)",
                "Multi-Factor Authentication (MFA)",
                "Password Recovery & Reset"
            ]
        },
        {
            id: "cloud-devops",
            title: "Cloud Deployment & DevOps",
            subtitle: "Deploy, Scale & Manage Applications with Confidence",
            desc: "Building an application is only the beginning. Successful businesses require secure deployment, continuous integration, automated updates, and scalable infrastructure to support future growth.\n\nAt SysCrop, our cloud deployment and DevOps services help businesses deploy applications efficiently while maintaining high availability, security, and performance. As a trusted Software Company in Pondicherry, we configure reliable cloud environments that reduce downtime and improve operational efficiency.",
            icon: Cloud,
            platforms: [
                "Amazon Web Services (AWS)",
                "Microsoft Azure",
                "Google Cloud Platform (GCP)",
                "DigitalOcean",
                "Docker",
                "Kubernetes",
                "GitHub Actions",
                "Jenkins",
                "CI/CD Pipeline Implementation"
            ]
        },
        {
            id: "performance-optimization",
            title: "Performance Optimization",
            subtitle: "Build Lightning-Fast Applications That Deliver Better User Experiences",
            desc: "Application speed plays a significant role in customer satisfaction, search engine rankings, and business success. Our performance optimization services focus on improving every aspect of your application, from frontend responsiveness to backend processing and database performance.\n\nAs part of our Full-Stack Development Company in Pondicherry, we optimize applications to deliver faster loading times, improved scalability, and better overall performance.",
            icon: Gauge,
            optimizationServices: [
                "Code Optimization",
                "Database Optimization",
                "Image Optimization",
                "Lazy Loading",
                "Browser Caching",
                "CDN Integration",
                "Server Performance Optimization",
                "Core Web Vitals Optimization",
                "Application Monitoring"
            ]
        },
        {
            id: "security-implementation",
            title: "Security Implementation",
            subtitle: "Protect Your Business with Advanced Application Security",
            desc: "Security is integrated into every stage of our development process. We implement modern security practices that protect applications against cyber threats, unauthorized access, and data breaches.\n\nOur security-first approach helps businesses safeguard sensitive information while ensuring compliance with industry standards and best practices.",
            icon: Shield,
            securityFeatures: [
                "SSL Configuration",
                "Data Encryption",
                "Secure Authentication",
                "Role-Based Authorization",
                "Input Validation",
                "CSRF Protection",
                "XSS Prevention",
                "SQL Injection Prevention",
                "Security Audits",
                "Vulnerability Assessment"
            ]
        },
        {
            id: "testing-qa",
            title: "Testing & Quality Assurance",
            subtitle: "Deliver Reliable Applications with Comprehensive Testing",
            desc: "Every application undergoes rigorous testing before deployment to ensure it performs reliably under real-world conditions. Our quality assurance process helps identify and resolve issues before they impact your users.\n\nAs a trusted Full-Stack Development Company in Pondicherry, we focus on delivering stable, secure, and high-performing applications that meet the highest quality standards.",
            icon: CheckCircle2,
            testingServices: [
                "Functional Testing",
                "UI & UX Testing",
                "API Testing",
                "Performance Testing",
                "Security Testing",
                "Cross-Browser Testing",
                "Mobile Responsiveness Testing",
                "Bug Fixing",
                "Regression Testing"
            ]
        },
        {
            id: "maintenance-support",
            title: "Maintenance & Support",
            subtitle: "Keep Your Applications Running Smoothly",
            desc: "Application development doesn't end after deployment. Continuous maintenance is essential for keeping your software secure, updated, and optimized for changing business needs.\n\nAs an experienced Software Company in Pondicherry, SysCrop provides ongoing maintenance and technical support to ensure your application continues to perform efficiently while adapting to future business requirements.",
            icon: Wrench,
            supportServices: [
                "Software Updates",
                "Security Patches",
                "Bug Fixes",
                "Performance Monitoring",
                "Feature Enhancements",
                "Database Maintenance",
                "Backup & Recovery",
                "Technical Support",
                "Application Monitoring"
            ]
        }
    ];

    const fullStackSteps = [
        {
            step: "1",
            title: "Requirement Analysis & Project Planning",
            desc: "We begin by understanding your business objectives, target audience, project requirements, and technical challenges. Our team gathers detailed requirements and creates a strategic development roadmap to ensure the project aligns with your business goals.",
            icon: FileText
        },
        {
            step: "2",
            title: "UI/UX Design & Architecture Planning",
            desc: "Our designers create intuitive UI/UX layouts and wireframes while our developers design the application architecture, database structure, workflows, and technology stack to build a strong foundation for development.",
            icon: Layout
        },
        {
            step: "3",
            title: "Frontend & Backend Development",
            desc: "Our developers build responsive frontend interfaces and powerful backend systems simultaneously using modern technologies. We ensure seamless communication between the frontend, backend, APIs, and databases while maintaining high performance and security.",
            icon: Code
        },
        {
            step: "4",
            title: "API Integration & Database Development",
            desc: "We integrate third-party APIs, payment gateways, CRM systems, cloud services, and other business applications while developing secure and optimized databases for efficient data management.",
            icon: Zap
        },
        {
            step: "5",
            title: "Testing & Quality Assurance",
            desc: "Before deployment, every application undergoes comprehensive testing to identify and resolve bugs, security vulnerabilities, and performance issues. We perform functional, performance, compatibility, and security testing to deliver a reliable application.",
            icon: Shield
        },
        {
            step: "6",
            title: "Deployment & Launch",
            desc: "After successful testing, we deploy the application to a secure production environment with proper server configuration, cloud deployment, SSL implementation, and performance optimization for a smooth launch.",
            icon: Rocket
        },
        {
            step: "7",
            title: "Maintenance & Continuous Support",
            desc: "Our work continues after deployment. We provide regular maintenance, security updates, performance monitoring, bug fixes, feature enhancements, and technical support to ensure your application continues to perform efficiently as your business grows.",
            icon: Activity
        }
    ];

    const whyChooseUsList = [
        "Experienced Full-Stack Developers",
        "End-to-End Development Services",
        "Modern Technology Stack",
        "Custom Business Solutions",
        "Agile Development Methodology",
        "Secure Coding Standards",
        "Scalable Cloud Architecture",
        "Seamless API Integration",
        "Transparent Communication",
        "On-Time Project Delivery",
        "Dedicated Technical Support",
        "Long-Term Maintenance Services"
    ];

    const fullStackBenefits = [
        "Faster project development",
        "Lower development costs",
        "Better communication between technologies",
        "Improved application performance",
        "Centralized project management",
        "Scalable architecture",
        "Enhanced security",
        "Easier maintenance and updates",
        "Faster deployment",
        "Better return on investment"
    ];

    const faqs = [
        {
            q: "How do I choose the right Full-Stack Development Company in Pondicherry?",
            a: "When selecting a Full-Stack Development Company in Pondicherry, consider factors such as technical expertise, experience, project portfolio, technology stack, communication, post-launch support, and the ability to develop customized solutions that align with your business objectives."
        },
        {
            q: "How much does Full-Stack Development cost?",
            a: "The cost depends on your project's complexity, features, technology stack, third-party integrations, and development timeline. A simple web application costs less than an enterprise-grade CRM, ERP, or SaaS platform. The best approach is to discuss your requirements and receive a customized quotation."
        },
        {
            q: "Can a Full-Stack Development Company build custom software for my business?",
            a: "Yes. A professional Full-Stack Development Company can build fully customized solutions such as CRM software, ERP systems, SaaS applications, business portals, eCommerce platforms, inventory management systems, and enterprise web applications based on your specific business needs."
        },
        {
            q: "Why choose SysCrop for Full-Stack Development in Pondicherry?",
            a: "SysCrop delivers end-to-end Full-Stack Development services using modern technologies and agile development practices. Our team focuses on building secure, scalable, and high-performance web applications that help businesses improve efficiency, streamline operations, and support long-term growth."
        },
        {
            q: "Does SysCrop provide support after the application is launched?",
            a: "Yes. SysCrop offers ongoing maintenance and support services, including software updates, security patches, bug fixes, performance optimization, feature enhancements, and technical assistance to ensure your application continues to perform reliably after deployment."
        },
        {
            q: "Which technologies does SysCrop use for Full-Stack Development?",
            a: "SysCrop works with modern technologies such as React.js, Angular, Vue.js, Node.js, Laravel, Python, .NET, Java, MySQL, PostgreSQL, MongoDB, AWS, Microsoft Azure, Docker, and Kubernetes to build scalable, secure, and future-ready web applications."
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

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveProcessIndex((prev) => (prev === fullStackSteps.length - 1 ? 0 : prev + 1));
        }, 3000);
        return () => clearInterval(timer);
    }, [fullStackSteps.length]);

    return (
        <main ref={mainRef} className="bg-white min-h-screen overflow-x-clip font-sans">
            {/* Header Banner */}
            <HeaderBanner
                title={
                    <>
                     <span className="text-[#1A5CDD] bg-clip-text text-transparent bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8]">Full-Stack Development Service</span> in Pondicherry
                    </>
                }
                description="Complete Frontend & Backend Development Solutions for Modern Businesses"
            />

            {/* SECTION 1: Intro Hero Section */}
            <section className="py-20 bg-[#F0F6FF] relative overflow-hidden">
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[700px] bg-[#1A5CDD]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-[#1A5CDD]/8 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-[#38bdf8]/12 rounded-full blur-3xl pointer-events-none" />

                <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `radial-gradient(#1A5CDD 1.5px, transparent 1.5px)`, backgroundSize: `24px 24px` }} />

                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <div className="lg:col-span-7 gsap-fade-up">
                            <div className="inline-flex items-center gap-2.5 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 rounded-full px-4 py-1.5 text-[12px] font-extrabold text-[#1A5CDD] uppercase tracking-wider mb-5 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-[#1A5CDD] inline-block animate-ping" />
                                End-to-End Engineering
                            </div>

                            <h2 className="text-3xl md:text-5xl lg:text-[48px] font-extrabold text-[#011146] tracking-tight leading-[1.12] mb-6">
                                Best Full-Stack Development<br className="hidden xl:block" /> Company in Pondicherry
                            </h2>

                            <div className="space-y-5 mb-10">
                                <p className="text-slate-600 text-[17px] leading-[1.8] font-normal">
                                    As a trusted Full-Stack Development Company in Pondicherry, we provide secure, scalable, and high-performance web application solutions for startups, SMEs, and enterprises. As a leading Software Company in Pondicherry, we combine modern frontend and backend technologies to build applications tailored to your business needs.
                                </p>
                                <p className="text-slate-600 text-[17px] leading-[1.8] font-normal">
                                    Our Full-Stack Development Company in Pondicherry offers end-to-end services, including UI/UX design, frontend and backend development, database management, API integration, cloud deployment, testing, and ongoing support. As an experienced Software Company in Pondicherry, we develop custom web applications, CRM, ERP, SaaS platforms, and eCommerce solutions that improve efficiency, enhance user experience, and support long-term business growth.
                                </p>
                            </div>

                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center gap-3 bg-[#011146] text-white px-8 py-4 rounded-xl font-bold text-[15px] transition-all duration-300 shadow-lg shadow-blue-900/15 hover:bg-[#1A5CDD] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(26,92,221,0.35)] overflow-hidden"
                            >
                                <span className="relative z-10">Start Your Full-Stack Project</span>
                                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
                            </Link>
                        </div>

                        {/* Right Side Image Card */}
                        <div className="lg:col-span-5 relative flex justify-center">
                            <div className="relative w-full max-w-[460px] aspect-[4/3] sm:aspect-square rounded-[28px] border-[10px] border-white bg-white shadow-2xl shadow-blue-950/15 overflow-hidden group cursor-pointer z-10">
                                <Image
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
                                    alt="Best Full-Stack Development Company in Pondicherry"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#011146]/50 via-transparent to-transparent opacity-60" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: What is Full Stack Development? */}
            <section className="py-20 bg-white relative overflow-hidden">
                {/* Subtle Background Elements */}
                <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `radial-gradient(#1A5CDD 2px, transparent 2px)`, backgroundSize: `32px 32px` }} />

                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">

                        {/* Left Column: Image Visual */}
                        <div className="lg:col-span-5 relative flex flex-col">
                            <div className="relative w-full h-full min-h-[440px] rounded-[28px] overflow-hidden bg-[#010925] shadow-xl border border-slate-200 group">
                                <div className="absolute top-5 left-5 z-20 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full">
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                                    <span className="text-[11px] font-mono text-white font-bold tracking-wider uppercase">System Architecture</span>
                                </div>
                                <Image
                                    src="/images/full_stack_architecture_dashboard.png"
                                    alt="Full Stack Development Architecture Dashboard"
                                    fill
                                    className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#010925]/70 via-transparent to-transparent pointer-events-none" />
                            </div>
                        </div>

                        {/* Right Column: Text Content & 3x3 Grid */}
                        <div className="lg:col-span-7 space-y-7 relative z-20">
                            <div className="inline-flex items-center gap-2 bg-[#F0F6FF] text-[#1A5CDD] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-[#1A5CDD]/10">
                                <Layers size={14} />
                                Core Concept
                            </div>

                            <h2 className="text-3xl md:text-5xl lg:text-[48px] font-extrabold text-[#011146] tracking-tight leading-[1.12]">
                                What is Full Stack Development?
                            </h2>

                            <p className="text-slate-600 text-[17px] leading-[1.8] font-normal">
                                Full Stack Development is the process of creating complete web applications by managing both frontend and backend development. It includes designing user interfaces, developing server-side functionality, managing databases, integrating APIs, implementing security, and deploying applications on reliable platforms.
                            </p>

                            <p className="text-slate-600 text-[16px] leading-[1.8] font-medium text-[#011146]">
                                A professional Full Stack Development Company in Pondicherry handles every stage of application development, including:
                            </p>

                            <div className="bg-[#F8FAFC] rounded-[24px] p-6 border border-slate-100 shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 text-[#1A5CDD]">
                                        <Cpu size={22} />
                                    </div>
                                    <div>
                                        <h4 className="text-[#011146] font-bold text-[16px] mb-1.5">The SysCrop Advantage</h4>
                                        <p className="text-slate-500 text-[14px] leading-[1.7]">
                                            At SysCrop, our full stack developers use modern technologies and industry best practices to build customized solutions that meet specific business requirements.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 9 Stages Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 pt-2">
                                {[
                                    { text: "Requirement Analysis", icon: FileCode, num: "01" },
                                    { text: "UI/UX Design", icon: Layout, num: "02" },
                                    { text: "Frontend Development", icon: Code, num: "03" },
                                    { text: "Backend Development", icon: Server, num: "04" },
                                    { text: "Database Management", icon: Database, num: "05" },
                                    { text: "API Integration", icon: KeyRound, num: "06" },
                                    { text: "Cloud Deployment", icon: Cloud, num: "07" },
                                    { text: "Testing & QA", icon: Activity, num: "08" },
                                    { text: "Ongoing Support", icon: RefreshCw, num: "09" }
                                ].map((stage, idx) => {
                                    const StageIcon = stage.icon;
                                    return (
                                        <div key={idx} className="bg-white rounded-[20px] p-4 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(26,92,221,0.06)] transition-all duration-300 group/stage flex flex-col border border-slate-200/80 hover:border-[#1A5CDD]/20">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="w-9 h-9 rounded-[10px] bg-[#F0F6FF] text-[#1A5CDD] flex items-center justify-center group-hover/stage:bg-[#1A5CDD] group-hover/stage:text-white transition-colors duration-300">
                                                    <StageIcon size={16} strokeWidth={2.5} />
                                                </div>
                                                <span className="text-[10px] font-bold text-slate-300 pt-1 group-hover/stage:text-[#1A5CDD] transition-colors">
                                                    {stage.num}
                                                </span>
                                            </div>
                                            <h4 className="text-[13px] font-bold text-[#011146] leading-tight group-hover/stage:text-[#1A5CDD] transition-colors mt-auto">
                                                {stage.text}
                                            </h4>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Why Choose Full-Stack Development? */}
            <section className="py-20 bg-[#F0F6FF] relative overflow-hidden">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#1A5CDD]/8 via-[#38bdf8]/8 to-transparent rounded-full blur-3xl pointer-events-none" />
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `radial-gradient(#1A5CDD 1.5px, transparent 1.5px)`, backgroundSize: `28px 28px` }} />

                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
                    <div className="bg-white/95 backdrop-blur-xl rounded-[36px] p-8 md:p-12 lg:p-14 border border-slate-200/90 shadow-[0_10px_40px_rgba(1,17,70,0.06)] relative overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                            {/* Left Column: Content */}
                            <div className="lg:col-span-7 space-y-6">
                                <div className="flex items-center gap-3">
                                    <span className="inline-flex items-center gap-2 bg-[#38bdf8]/15 text-[#011146] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider border border-[#38bdf8]/30">
                                        <Zap size={14} className="text-[#1A5CDD]" />
                                        Strategic Value
                                    </span>
                                </div>

                                <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#011146] tracking-tight leading-tight">
                                    Why Choose Full-Stack Development?
                                </h2>

                                <div className="bg-gradient-to-r from-[#011146] via-[#1A5CDD] to-[#011146] text-white p-5 rounded-2xl shadow-md border border-blue-400/20">
                                    <p className="font-bold text-sm md:text-base leading-snug tracking-wide">
                                        Build Smarter Applications with One Complete Technology Solution
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-slate-600 text-base md:text-[16.5px] leading-[1.8]">
                                        Modern businesses require flexible applications that can adapt to changing customer demands and business growth. Full-stack development simplifies the development process by integrating frontend, backend, databases, and APIs into one streamlined solution.
                                    </p>
                                    <p className="text-slate-600 text-base md:text-[16.5px] leading-[1.8]">
                                        Our Full-Stack Development Company in Pondicherry helps businesses build applications that are easier to maintain, more secure, highly scalable, and capable of supporting future expansion.
                                    </p>
                                </div>

                                <div className="bg-[#F0F6FF]/90 rounded-[20px] p-5 border border-slate-200/80 shadow-sm">
                                    <h3 className="text-[#011146] font-extrabold text-[15px] md:text-[17px] mb-3.5 flex items-center gap-2.5">
                                        <TrendingUp size={18} className="text-[#1A5CDD]" />
                                        Benefits of Full-Stack Development
                                    </h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                        {fullStackBenefits.map((benefit, idx) => (
                                            <div key={idx} className="flex items-center gap-2.5 bg-white py-2 px-3 rounded-xl border border-slate-200/80 text-slate-700 font-semibold text-[13px] hover:border-[#1A5CDD]/40 transition-all hover:shadow-sm group/benefit">
                                                <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm group-hover/benefit:scale-110 transition-transform">
                                                    <Check size={12} strokeWidth={3} />
                                                </div>
                                                <span className="leading-tight">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Strategic Metrics & Benefits Dashboard Widget */}
                            <div className="lg:col-span-5 relative flex justify-center">
                                <div className="w-full max-w-[480px] bg-gradient-to-br from-[#011146] via-[#0A1E5C] to-[#011146] rounded-[32px] p-6 border border-[#1A5CDD]/30 shadow-[0_20px_50px_rgba(1,17,70,0.25)] text-white relative overflow-hidden">
                                    <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                                        <span className="text-xs font-extrabold uppercase tracking-wider text-[#38bdf8] flex items-center gap-2">
                                            <Zap size={14} /> Strategic Impact
                                        </span>
                                        <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                                            High Efficiency
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3.5 mb-5">
                                        <div className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-colors">
                                            <div className="w-8 h-8 rounded-lg bg-[#1A5CDD]/40 text-[#38bdf8] flex items-center justify-center mb-2">
                                                <Zap size={16} />
                                            </div>
                                            <p className="text-2xl font-extrabold text-white">40%</p>
                                            <p className="text-xs text-slate-300 font-medium">Faster Deployment</p>
                                        </div>

                                        <div className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-colors">
                                            <div className="w-8 h-8 rounded-lg bg-emerald-500/30 text-emerald-400 flex items-center justify-center mb-2">
                                                <TrendingUp size={16} />
                                            </div>
                                            <p className="text-2xl font-extrabold text-white">100%</p>
                                            <p className="text-xs text-slate-300 font-medium">Unified Codebase</p>
                                        </div>

                                        <div className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-colors">
                                            <div className="w-8 h-8 rounded-lg bg-amber-500/30 text-amber-300 flex items-center justify-center mb-2">
                                                <Gauge size={16} />
                                            </div>
                                            <p className="text-2xl font-extrabold text-white">Optimal</p>
                                            <p className="text-xs text-slate-300 font-medium">Performance</p>
                                        </div>

                                        <div className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-colors">
                                            <div className="w-8 h-8 rounded-lg bg-purple-500/30 text-purple-300 flex items-center justify-center mb-2">
                                                <Shield size={16} />
                                            </div>
                                            <p className="text-2xl font-extrabold text-white">Zero</p>
                                            <p className="text-xs text-slate-300 font-medium">Security Gaps</p>
                                        </div>
                                    </div>

                                    <div className="bg-white/10 border border-white/15 p-4 rounded-2xl flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                                            <span className="text-xs font-semibold text-slate-200">End-to-End Synergy</span>
                                        </div>
                                        <span className="text-xs font-mono text-[#38bdf8]">SysCrop Powered</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: What Our Full-Stack Development Services Cover */}
            <section className="py-20 bg-[#F0F6FF] relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-[#1A5CDD]/8 via-[#38bdf8]/6 to-transparent rounded-full blur-3xl pointer-events-none" />
                <div className="absolute inset-0 opacity-[0.035] pointer-events-none" style={{ backgroundImage: `radial-gradient(#1A5CDD 1.5px, transparent 1.5px)`, backgroundSize: `32px 32px` }} />

                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 text-[#1A5CDD] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-4 border border-[#1A5CDD]/20 shadow-sm">
                            <Sparkles size={14} />
                            Full-Spectrum Capabilities
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#011146] tracking-tight mb-6">
                            What Our Full-Stack Development Services Cover
                        </h2>
                        <p className="text-slate-600 text-base md:text-[17px] leading-[1.8]">
                            We offer complete Full Stack Development Services covering planning, UI design, development, deployment, and ongoing support. As a trusted Full Stack Development Company in Pondicherry and Software Company in Pondicherry, we build secure, scalable, and high performance web applications using modern technologies and industry best practices.  
                        </p>
                    </div>

                    <div className="space-y-10">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            const isEven = index % 2 === 0;
                            const serviceNum = (index + 1).toString().padStart(2, '0');

                            return (
                                <div
                                    key={service.id}
                                    className="bg-white/90 backdrop-blur-xl rounded-[36px] p-7 md:p-10 lg:p-12 border border-slate-200/90 shadow-[0_10px_35px_rgba(1,17,70,0.05)] hover:shadow-[0_20px_50px_rgba(26,92,221,0.12)] hover:border-[#1A5CDD]/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#1A5CDD]/10 to-transparent rounded-bl-[100px] pointer-events-none group-hover:scale-110 transition-transform duration-500" />

                                    {/* Left Column: Content */}
                                    <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                        <div className="flex items-center justify-between mb-5">
                                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#011146] via-[#0A1E5C] to-[#1A5CDD] text-white flex items-center justify-center shadow-lg shadow-blue-950/20">
                                                <Icon size={26} />
                                            </div>
                                            <span className="text-xs font-mono font-bold text-[#1A5CDD] bg-[#1A5CDD]/10 px-3 py-1 rounded-full border border-[#1A5CDD]/20">
                                                CAPABILITY {serviceNum}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-extrabold text-[#011146] mb-2 tracking-tight">
                                            {service.title}
                                        </h3>

                                        <div className="inline-block bg-slate-100 text-[#1A5CDD] px-3.5 py-1.5 rounded-xl text-xs md:text-sm font-bold tracking-wide mb-5 border border-slate-200/80">
                                            {service.subtitle}
                                        </div>

                                        <div className="text-slate-600 text-base leading-[1.8] whitespace-pre-line mb-7">
                                            {service.desc}
                                        </div>

                                        <Link
                                            href="/contact"
                                            className="group/btn inline-flex items-center gap-3 bg-[#011146] text-white px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:bg-[#1A5CDD] hover:shadow-lg hover:shadow-blue-600/25"
                                        >
                                            <span>Consult On {service.title}</span>
                                            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>

                                    {/* Right Column: Creative Tech Console Widget */}
                                    <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                                        <div className="bg-[#03091E] rounded-[28px] p-6 border border-slate-808 text-white shadow-xl relative overflow-hidden group/console">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#1A5CDD]/15 rounded-full blur-2xl pointer-events-none" />

                                            {/* Console Top Bar */}
                                            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/90" />
                                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/90" />
                                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/90" />
                                                    <span className="ml-1 text-[11px] font-mono text-slate-400">tech-stack.config</span>
                                                </div>
                                                <span className="text-[10px] font-mono bg-[#1A5CDD]/20 text-[#38bdf8] px-2 py-0.5 rounded border border-[#1A5CDD]/30 font-bold uppercase">
                                                    Enterprise Ready
                                                </span>
                                            </div>

                                            {/* Technologies Chips */}
                                            {service.technologies && (
                                                <div>
                                                    <h5 className="font-bold text-slate-200 text-sm mb-3.5 flex items-center gap-2">
                                                        <Sparkles size={16} className="text-[#38bdf8]" /> Technologies We Use
                                                    </h5>
                                                    <div className="flex flex-wrap gap-2">
                                                        {service.technologies.map((tech, tIdx) => (
                                                            <span key={tIdx} className="bg-slate-900/90 text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-xl border border-slate-800 hover:border-[#38bdf8]/60 hover:text-[#38bdf8] hover:bg-slate-800 transition-all cursor-default shadow-xs flex items-center gap-1.5">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* API Services List */}
                                            {service.apiServices && (
                                                <div>
                                                    <h5 className="font-bold text-slate-200 text-sm mb-3 flex items-center gap-2">
                                                        <Zap size={16} className="text-[#38bdf8]" /> API Services We Provide
                                                    </h5>
                                                    <div className="space-y-2">
                                                        {service.apiServices.map((api, aIdx) => (
                                                            <div key={aIdx} className="flex items-center gap-2.5 bg-slate-900/70 px-3 py-2 rounded-xl border border-slate-800/80 text-xs font-medium text-slate-300">
                                                                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                                                                <span>{api}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Features List */}
                                            {service.features && (
                                                <div>
                                                    <h5 className="font-bold text-slate-200 text-sm mb-3 flex items-center gap-2">
                                                        <KeyRound size={16} className="text-[#38bdf8]" /> Features Include
                                                    </h5>
                                                    <div className="space-y-2">
                                                        {service.features.map((feat, fIdx) => (
                                                            <div key={fIdx} className="flex items-center gap-2.5 bg-slate-900/70 px-3 py-2 rounded-xl border border-slate-800/80 text-xs font-medium text-slate-300">
                                                                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                                                                <span>{feat}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Platforms List */}
                                            {service.platforms && (
                                                <div>
                                                    <h5 className="font-bold text-slate-200 text-sm mb-3 flex items-center gap-2">
                                                        <Cloud size={16} className="text-[#38bdf8]" /> Platforms We Support
                                                    </h5>
                                                    <div className="space-y-2">
                                                        {service.platforms.map((plat, pIdx) => (
                                                            <div key={pIdx} className="flex items-center gap-2.5 bg-slate-900/70 px-3 py-2 rounded-xl border border-slate-800/80 text-xs font-medium text-slate-300">
                                                                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                                                                <span>{plat}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Optimization Services */}
                                            {service.optimizationServices && (
                                                <div>
                                                    <h5 className="font-bold text-slate-200 text-sm mb-3 flex items-center gap-2">
                                                        <Gauge size={16} className="text-[#38bdf8]" /> Optimization Services
                                                    </h5>
                                                    <div className="space-y-2">
                                                        {service.optimizationServices.map((opt, oIdx) => (
                                                            <div key={oIdx} className="flex items-center gap-2.5 bg-slate-900/70 px-3 py-2 rounded-xl border border-slate-800/80 text-xs font-medium text-slate-300">
                                                                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                                                                <span>{opt}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Security Features */}
                                            {service.securityFeatures && (
                                                <div>
                                                    <h5 className="font-bold text-slate-200 text-sm mb-3 flex items-center gap-2">
                                                        <Shield size={16} className="text-[#38bdf8]" /> Security Features
                                                    </h5>
                                                    <div className="space-y-2">
                                                        {service.securityFeatures.map((sec, sIdx) => (
                                                            <div key={sIdx} className="flex items-center gap-2.5 bg-slate-900/70 px-3 py-2 rounded-xl border border-slate-800/80 text-xs font-medium text-slate-300">
                                                                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                                                                <span>{sec}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Testing Services */}
                                            {service.testingServices && (
                                                <div>
                                                    <h5 className="font-bold text-slate-200 text-sm mb-3 flex items-center gap-2">
                                                        <CheckCircle2 size={16} className="text-[#38bdf8]" /> Testing Services
                                                    </h5>
                                                    <div className="space-y-2">
                                                        {service.testingServices.map((tst, tsIdx) => (
                                                            <div key={tsIdx} className="flex items-center gap-2.5 bg-slate-900/70 px-3 py-2 rounded-xl border border-slate-800/80 text-xs font-medium text-slate-300">
                                                                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                                                                <span>{tst}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Support Services */}
                                            {service.supportServices && (
                                                <div>
                                                    <h5 className="font-bold text-slate-200 text-sm mb-3 flex items-center gap-2">
                                                        <Wrench size={16} className="text-[#38bdf8]" /> Our Support Services
                                                    </h5>
                                                    <div className="space-y-2">
                                                        {service.supportServices.map((sup, suIdx) => (
                                                            <div key={suIdx} className="flex items-center gap-2.5 bg-slate-900/70 px-3 py-2 rounded-xl border border-slate-800/80 text-xs font-medium text-slate-300">
                                                                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                                                                <span>{sup}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION 4: Our Full-Stack Development Process */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-[#1A5CDD]/8 via-[#38bdf8]/6 to-transparent rounded-full blur-3xl pointer-events-none" />
                <div className="absolute inset-0 opacity-[0.035] pointer-events-none" style={{ backgroundImage: `radial-gradient(#1A5CDD 1.5px, transparent 1.5px)`, backgroundSize: `32px 32px` }} />

                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 text-[#1A5CDD] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-4 border border-[#1A5CDD]/20 shadow-sm">
                            <Sparkles size={14} />
                            Agile Execution Roadmap
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#011146] tracking-tight mb-6">
                            Our Full-Stack Development Process
                        </h2>
                        <p className="text-slate-600 text-base md:text-[17px] leading-[1.8]">
                            At SysCrop, we follow a structured and agile development process to build secure, scalable, and high-performance web applications. As a trusted Full-Stack Development Company in Pondicherry, we ensure every project is carefully planned, developed, tested, and deployed to meet your business goals. Our streamlined approach helps businesses receive reliable digital solutions from a leading Software Company in Pondicherry.
                        </p>
                    </div>
                    <div className="relative group/slider">
                        {/* Prev Arrow */}
                        <button
                            onClick={() => setActiveProcessIndex((prev) => (prev === 0 ? fullStackSteps.length - 1 : prev - 1))}
                            className="absolute left-0 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-slate-200 text-[#011146] flex items-center justify-center hover:bg-[#1A5CDD] hover:text-white hover:border-[#1A5CDD] transition-all shadow-xl active:scale-95 opacity-0 group-hover/slider:opacity-100 disabled:opacity-0"
                            title="Previous Step"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        {/* Slider Cards Track */}
                        <div className="overflow-hidden rounded-[40px] py-4 -my-4">
                            <div
                                className="flex transition-transform duration-500 ease-out gap-6 process-slider-track"
                            style={{
                                '--active-idx': activeProcessIndex
                            } as React.CSSProperties}
                        >
                            {fullStackSteps.map((step, idx) => {
                                const StepIcon = step.icon || Code;

                                return (
                                    <div
                                        key={idx}
                                        className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] shrink-0 border rounded-[32px] p-6 md:p-8 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between min-h-[350px] bg-white/95 backdrop-blur-xl border-slate-200/90 hover:border-[#1A5CDD]/40 text-[#011146]"
                                    >
                                        <div className="absolute top-0 right-0 w-36 h-36 rounded-bl-[100px] pointer-events-none group-hover:scale-125 transition-transform duration-500 bg-gradient-to-br from-[#1A5CDD]/10 to-transparent" />

                                        {/* Watermark Step Number */}
                                        <div className="font-black text-6xl md:text-7xl absolute right-5 bottom-3 select-none pointer-events-none transition-colors text-slate-100 group-hover:text-[#1A5CDD]/10">
                                            0{step.step}
                                        </div>

                                        <div>
                                            <div className="flex items-center justify-between mb-6 relative z-10">
                                                <div className="w-13 h-13 rounded-2xl flex items-center justify-center shadow-lg shrink-0 bg-gradient-to-br from-[#011146] via-[#0A1E5C] to-[#1A5CDD] text-white shadow-blue-950/20">
                                                    <StepIcon size={24} />
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-extrabold mb-3 leading-snug relative z-10 transition-colors text-[#011146] group-hover:text-[#1A5CDD]">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm leading-relaxed relative z-10 text-slate-600">
                                                {step.desc}
                                            </p>
                                        </div>

                                        <div className="pt-4 mt-4 border-t flex items-center justify-between relative z-10 text-xs font-bold border-slate-100 text-slate-500">
                                            <span className="flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                                                <Sparkles size={13} className="text-[#1A5CDD]" />
                                                Deliverable Phase
                                            </span>
                                            <button
                                                onClick={() => setActiveProcessIndex((prev) => (prev === fullStackSteps.length - 1 ? 0 : prev + 1))}
                                                className="flex items-center gap-1 transition-colors text-[#1A5CDD] hover:text-[#011146]"
                                            >
                                                Next <ArrowRight size={13} />
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Next Arrow */}
                    <button
                        onClick={() => setActiveProcessIndex((prev) => (prev === fullStackSteps.length - 1 ? 0 : prev + 1))}
                        className="absolute right-0 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#011146] text-white flex items-center justify-center hover:bg-[#1A5CDD] transition-all shadow-xl active:scale-95 opacity-0 group-hover/slider:opacity-100 disabled:opacity-0"
                        title="Next Step"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                    <style jsx>{`
                        .process-slider-track {
                            transform: translateX(calc(-1 * var(--active-idx) * (100% + 1.5rem)));
                        }
                        @media (min-width: 768px) {
                            .process-slider-track {
                                transform: translateX(calc(-1 * min(var(--active-idx), 5) * (50% + 0.75rem)));
                            }
                        }
                        @media (min-width: 1024px) {
                            .process-slider-track {
                                transform: translateX(calc(-1 * min(var(--active-idx), 4) * (33.333% + 0.5rem)));
                            }
                        }
                    `}</style>

                    {/* Step Pagination Dots */}
                    <div className="flex items-center justify-center gap-2 mt-8">
                        {fullStackSteps.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveProcessIndex(idx)}
                                className={`h-2.5 rounded-full transition-all duration-300 ${activeProcessIndex === idx
                                    ? "w-8 bg-[#1A5CDD]"
                                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                                    }`}
                                title={`Go to Step ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5: Why Choose SysCrop? */}
            <section className="py-20 bg-[#F0F6FF] relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-[#1A5CDD]/8 via-[#38bdf8]/6 to-transparent rounded-full blur-3xl pointer-events-none" />
                <div className="absolute inset-0 opacity-[0.035] pointer-events-none" style={{ backgroundImage: `radial-gradient(#1A5CDD 1.5px, transparent 1.5px)`, backgroundSize: `32px 32px` }} />

                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 text-[#1A5CDD] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-4 border border-[#1A5CDD]/20 shadow-sm">
                            <Shield size={14} />
                            Trusted Engineering Partner
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#011146] tracking-tight mb-3">
                            Why Choose SysCrop?
                        </h2>
                        <h3 className="text-xl font-bold text-[#1A5CDD] mb-6">
                            Your Trusted Full-Stack Development Company in Pondicherry
                        </h3>
                        <p className="text-slate-600 text-base md:text-[17px] leading-[1.8] mb-4">
                            Choosing the right technology partner is essential for building successful digital products. At SysCrop, we combine technical expertise, industry experience, and innovative technologies to deliver web applications that help businesses grow faster and operate more efficiently.
                        </p>
                        <p className="text-slate-600 text-base md:text-[17px] leading-[1.8]">
                            As a reliable Full-Stack Development Company in Pondicherry, we focus on delivering high-quality applications that are secure, scalable, and customized to your business needs.
                        </p>
                    </div>

                    {/* Why Businesses Choose SysCrop Grid */}
                    <div className="bg-white/80 backdrop-blur-xl rounded-[36px] p-8 md:p-12 border border-slate-200/90 shadow-[0_10px_35px_rgba(1,17,70,0.05)] mb-12 relative overflow-hidden">

                        <h4 className="text-2xl md:text-3xl font-extrabold text-[#011146] mb-10 text-center tracking-tight">
                            Why Businesses Choose SysCrop
                        </h4>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                            {whyChooseUsList.map((reason, idx) => {
                                const reasonIcons = [
                                    Users, Layers, Terminal, Cpu,
                                    RefreshCw, Shield, Cloud, Zap,
                                    Globe, TrendingUp, Wrench, CheckCircle2
                                ];
                                const ReasonIcon = reasonIcons[idx % reasonIcons.length];
                                const numStr = (idx + 1).toString().padStart(2, '0');

                                return (
                                    <div
                                        key={idx}
                                        className="bg-white border border-slate-200/90 rounded-[24px] p-5 shadow-[0_4px_16px_rgba(1,17,70,0.03)] hover:shadow-[0_15px_35px_rgba(26,92,221,0.12)] hover:border-[#1A5CDD]/40 transition-all duration-300 group flex items-center justify-between gap-4 cursor-default relative overflow-hidden"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#011146] via-[#0A1E5C] to-[#1A5CDD] text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-950/20 group-hover:scale-110 transition-transform">
                                                <ReasonIcon size={22} />
                                            </div>
                                            <span className="font-bold text-[#011146] text-base group-hover:text-[#1A5CDD] transition-colors leading-snug">
                                                {reason}
                                            </span>
                                        </div>
                                        <span className="text-[11px] font-mono font-bold text-[#1A5CDD] bg-[#1A5CDD]/10 px-2 py-0.5 rounded-md shrink-0">
                                            #{numStr}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Executive Commitment Callout Card */}
                    <div className="bg-[#03091E] border border-slate-800 rounded-[32px] p-8 md:p-10 shadow-2xl relative overflow-hidden text-center text-white max-w-4xl mx-auto group">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#1A5CDD]/20 via-[#38bdf8]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1A5CDD]/15 rounded-full blur-2xl pointer-events-none" />

                        <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/20 text-[#38bdf8] px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-[#1A5CDD]/30">
                            <Sparkles size={14} />
                            ENGINEERING VALUE COMMITMENT
                        </span>

                        <p className="text-slate-200 text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-medium relative z-10">
                            Whether you're developing a startup MVP, enterprise application, CRM, ERP, SaaS platform, or eCommerce solution, our team is committed to delivering digital products that create measurable business value.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Frequently Asked Questions (FAQs) */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-[#1A5CDD]/8 via-[#38bdf8]/6 to-transparent rounded-full blur-3xl pointer-events-none" />
                <div className="absolute inset-0 opacity-[0.035] pointer-events-none" style={{ backgroundImage: `radial-gradient(#1A5CDD 1.5px, transparent 1.5px)`, backgroundSize: `32px 32px` }} />

                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

                        {/* Left Column - Content */}
                        <div className="lg:w-1/3 flex flex-col justify-start lg:sticky">
                            <div className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 rounded-full px-3.5 py-1 text-[11px] font-black text-[#1A5CDD] uppercase tracking-widest mb-6 w-fit shadow-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD]"></span>
                                FREQUENTLY ASKED QUESTIONS
                            </div>

                            <h2 className="text-4xl md:text-[44px] font-extrabold text-[#011146] tracking-tight mb-4 leading-[1.15]">
                                Your Questions <br />
                                <span className="text-[#1A5CDD]">Answered</span>
                            </h2>

                            <p className="text-slate-500 text-[15.5px] leading-relaxed mb-8 max-w-sm">
                                Find clear, honest answers to common questions from our team of experienced professionals.
                            </p>

                            <Link
                                href="/contact"
                                className="bg-[#1A5CDD] hover:bg-[#011146] text-white px-6 py-3 rounded-full text-[14px] font-bold transition-colors shadow-lg shadow-blue-900/20 w-fit flex items-center gap-2 mb-10"
                            >
                                View All FAQ's <ChevronRight size={16} strokeWidth={3} />
                            </Link>

                            {/* Avatars */}
                            <div className="flex items-center gap-5 pt-8 border-t border-slate-200/80">
                                <div className="flex -space-x-3.5">
                                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop" className="w-[42px] h-[42px] rounded-full object-cover border-[2.5px] border-[#F8FAFC] shadow-sm relative z-30" alt="Consulting Expert" />
                                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop" className="w-[42px] h-[42px] rounded-full object-cover border-[2.5px] border-[#F8FAFC] shadow-sm relative z-20" alt="Consulting Expert" />
                                    <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop" className="w-[42px] h-[42px] rounded-full object-cover border-[2.5px] border-[#F8FAFC] shadow-sm relative z-10" alt="Consulting Expert" />
                                    <div className="w-[42px] h-[42px] rounded-full bg-[#011146] border-[2.5px] border-[#F8FAFC] flex items-center justify-center text-white text-[11px] font-bold shadow-sm relative z-0">
                                        +10
                                    </div>
                                </div>
                                <p className="text-[12.5px] text-slate-500 font-medium leading-snug max-w-[140px]">
                                    Answers curated directly from our consulting experts.
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Accordions */}
                        <div className="lg:w-2/3 w-full">
                            <div className="flex flex-col gap-3.5">
                                {faqs.map((faq, index) => {
                                    const isOpen = activeAccordion === index;
                                    return (
                                        <div
                                            key={index}
                                            className={`transition-all duration-300 rounded-[20px] overflow-hidden border ${isOpen
                                                ? "border-[#1A5CDD]/30 bg-white shadow-[0_15px_40px_rgba(26,92,221,0.08)]"
                                                : "border-slate-200/80 bg-white/60 hover:bg-white hover:border-slate-300 hover:shadow-sm"
                                                }`}
                                        >
                                            <button
                                                className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer group"
                                                onClick={() => setActiveAccordion(isOpen ? null : index)}
                                            >
                                                <span className={`font-extrabold text-[15.5px] md:text-[16px] pr-8 transition-colors duration-300 ${isOpen ? "text-[#1A5CDD]" : "text-[#011146] group-hover:text-[#1A5CDD]"}`}>
                                                    {index + 1}. {faq.q}
                                                </span>
                                                <span className={`w-[34px] h-[34px] rounded-full flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm ${isOpen ? "bg-[#1A5CDD] text-white" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-600"}`}>
                                                    {isOpen ? (
                                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                                                    ) : (
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                                                    )}
                                                </span>
                                            </button>
                                            <div
                                                className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 pb-7 px-6" : "max-h-0 opacity-0 overflow-hidden px-6"
                                                    }`}
                                            >
                                                <div className="w-full h-px bg-slate-100 mb-5"></div>
                                                <p className="text-slate-500 leading-relaxed text-[14.5px] font-medium pr-4">
                                                    {faq.a}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
