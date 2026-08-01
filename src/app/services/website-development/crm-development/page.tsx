"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Settings, Users, Layout, Zap, Cloud, RefreshCw, Wrench, Smartphone, Rocket, Code, Target, Database, Layers, Activity, FileText, Clock, CheckCircle2, HelpCircle, Headphones, Mail, MessageCircle, Megaphone, BarChart3, Server, DollarSign, CreditCard, ShoppingCart, Share2, ArrowRight, Check, Plus, Minus, ChevronRight, Briefcase, Shield
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderBanner from "@/components/ui/HeaderBanner";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function CRMDevelopmentPondicherryPage() {
    const mainRef = useRef<HTMLDivElement>(null);
    const [activeServiceTab, setActiveServiceTab] = useState<number>(0);
    const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
    const [selectedModuleCategory, setSelectedModuleCategory] = useState<string>("All");

    const crmServices = [
        {
            id: "custom-crm",
            title: "Custom CRM Development",
            desc: "Every business has unique customer management requirements, which is why we build CRM solutions tailored to your workflows and business objectives. Our custom CRM software helps you manage leads, customer interactions, sales activities, and support operations from a centralized platform while improving team collaboration and operational efficiency.\nOur solutions are scalable, secure, and designed to integrate seamlessly with your existing business applications, giving you complete control over customer data and business processes.",
            includes: ["Custom CRM software development", "Lead and contact management", "Sales pipeline management", "Workflow automation", "Customer support management", "Reports and analytics", "Role-based user access", "Cloud and on-premise deployment", "Third-party software integration"],
            icon: Settings
        },
        {
            id: "crm-consulting",
            title: "CRM Consulting",
            desc: "Our CRM consulting services help businesses identify the right CRM strategy based on their operational requirements and long-term goals. We analyze your existing processes, recommend the best CRM architecture, and create an implementation roadmap that improves efficiency and customer engagement.\nFrom planning to deployment, our consultants ensure your CRM solution aligns with your business needs while supporting future growth and scalability.",
            includes: ["Business requirement analysis", "CRM strategy planning", "Process optimization", "CRM architecture consulting", "Technology selection", "Implementation planning", "Data migration strategy", "Performance optimization"],
            icon: Users
        },
        {
            id: "crm-ui-ux",
            title: "CRM UI/UX Design",
            desc: "A well-designed CRM improves productivity and simplifies daily business operations. Our CRM UI/UX design services focus on creating modern, intuitive, and responsive interfaces that make it easier for teams to manage customers, sales, and support activities efficiently.\nEvery dashboard and workflow is designed to provide a seamless user experience across desktop, tablet, and mobile devices.",
            includes: ["User-friendly dashboards", "Responsive CRM interfaces", "Custom workflow design", "Interactive reports", "Role-based dashboards", "Mobile-friendly layouts", "Easy navigation", "Modern UI components"],
            icon: Layout
        },
        {
            id: "crm-integration",
            title: "CRM Integration Services",
            desc: "A CRM system becomes more powerful when it seamlessly connects with your existing business applications. Our CRM Integration Services help you integrate your CRM with ERP systems, accounting software, marketing platforms, payment gateways, communication tools, and other third-party applications to create a unified business ecosystem. This enables smooth data flow, reduces manual work, improves collaboration, and provides a complete view of your business operations.",
            includes: ["ERP Integration", "Accounting Software Integration", "Email Integration", "Payment Gateway Integration", "WhatsApp & SMS Integration", "Marketing Automation Integration", "Social Media Integration", "E-commerce Platform Integration", "Third-Party API Integration", "Data Synchronization & Migration"],
            icon: Zap
        },
        {
            id: "cloud-crm",
            title: "Cloud CRM Development",
            desc: "Access your customer data securely from anywhere with our cloud-based CRM development services. We build scalable and reliable Cloud CRM solutions that enable your teams to collaborate in real time while reducing infrastructure costs. Our cloud CRM applications are designed for high performance, enhanced security, and seamless accessibility across multiple devices.",
            includes: ["Cloud-based CRM Development", "Multi-User Access", "Secure Data Storage", "Real-Time Data Synchronization", "Scalable Cloud Architecture", "Cloud Migration", "Data Backup & Recovery", "Performance Optimization", "Enterprise Security", "Ongoing Cloud Support"],
            icon: Cloud
        },
        {
            id: "crm-migration",
            title: "CRM Migration & Modernization",
            desc: "Upgrade your legacy CRM system with minimal disruption to your business operations. Our CRM migration and modernization services help businesses securely transfer customer data, improve system performance, and implement modern features that enhance productivity and user experience.",
            includes: ["Legacy CRM Migration", "Data Migration & Validation", "CRM Version Upgrades", "Platform Modernization", "Database Migration", "UI/UX Improvements", "Feature Enhancement", "Performance Optimization", "Security Updates", "Post-Migration Support"],
            icon: RefreshCw
        },
        {
            id: "crm-support",
            title: "CRM Support & Maintenance",
            desc: "Ensure your CRM system remains secure, reliable, and up to date with our ongoing support and maintenance services. We provide continuous monitoring, performance optimization, bug fixes, software updates, and technical assistance to keep your CRM running smoothly.",
            includes: ["Regular System Maintenance", "Software Updates", "Performance Monitoring", "Bug Fixes", "Security Patches", "Database Maintenance", "Backup & Recovery Support", "Technical Assistance", "Feature Enhancements", "System Health Checks"],
            icon: Wrench
        },
        {
            id: "mobile-crm",
            title: "Mobile CRM Application Development",
            desc: "Stay connected with your customers wherever you are through our mobile CRM application development services. We build responsive Android and iOS CRM applications that allow your sales and support teams to manage customer information, track leads, schedule follow-ups, and access business data on the go.",
            includes: ["Android CRM Applications", "iOS CRM Applications", "Cross-Platform CRM Apps", "Real-Time Data Access", "Push Notifications", "Mobile Dashboard", "Offline Data Access", "Secure User Authentication", "Customer Activity Tracking", "API Integration"],
            icon: Smartphone
        },
        {
            id: "crm-automation",
            title: "CRM Automation Solutions",
            desc: "Improve business efficiency by automating repetitive tasks and business workflows. Our CRM automation solutions reduce manual effort, improve team productivity, and ensure consistent customer engagement through intelligent workflow automation.",
            includes: ["Sales Workflow Automation", "Lead Assignment Automation", "Follow-Up Reminders", "Email Automation", "Task Automation", "Approval Workflows", "Customer Notifications", "Report Automation", "Marketing Automation", "Business Process Automation"],
            icon: Rocket
        },
        {
            id: "third-party-api",
            title: "Third-Party API Integration",
            desc: "Extend your CRM capabilities by integrating it with the tools your business already uses. Our third-party API integration services ensure seamless connectivity between your CRM and external platforms, enabling smooth data exchange and improved operational efficiency.",
            includes: ["Payment Gateway Integration", "WhatsApp Business API Integration", "SMS Gateway Integration", "Email Service Integration", "ERP Integration", "Accounting Software Integration", "E-commerce Platform Integration", "Social Media Integration", "Marketing Tool Integration", "Custom API Development & Integration"],
            icon: Code
        }
    ];

    const crmModules = [
        { title: "Lead Management", category: "Lead & Sales", icon: Target },
        { title: "Contact Management", category: "Lead & Sales", icon: Users },
        { title: "Customer Database", category: "Lead & Sales", icon: Database },
        { title: "Sales Pipeline Management", category: "Lead & Sales", icon: Layers },
        { title: "Opportunity Tracking", category: "Lead & Sales", icon: Activity },
        { title: "Quotation Management", category: "Lead & Sales", icon: FileText },
        { title: "Follow-Up Reminders", category: "Customer Support", icon: Clock },
        { title: "Task Management", category: "Customer Support", icon: CheckCircle2 },
        { title: "Customer Support", category: "Customer Support", icon: HelpCircle },
        { title: "Helpdesk Management", category: "Customer Support", icon: Headphones },
        { title: "Email Integration", category: "Marketing & Analytics", icon: Mail },
        { title: "WhatsApp Integration", category: "Integrations & Tech", icon: MessageCircle },
        { title: "Marketing Campaign Management", category: "Marketing & Analytics", icon: Megaphone },
        { title: "Reports & Dashboards", category: "Marketing & Analytics", icon: BarChart3 }
    ];

    const technologies = {
        Frontend: ["React.js", "Angular", "Vue.js", "HTML5", "CSS3", "JavaScript"],
        Backend: ["PHP", "Laravel", "Node.js", "ASP.NET", "Python", "Java"],
        Database: ["MySQL", "PostgreSQL", "MongoDB", "Microsoft SQL Server"],
        "Cloud & DevOps": ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform (GCP)", "Docker", "Kubernetes"],
        "APIs & Integrations": ["REST API", "GraphQL", "WhatsApp Business API", "Payment Gateway APIs", "Email & SMS APIs", "Third-Party API Integration"]
    };

    const crmIntegrations = [
        {
            title: "ERP System Integration",
            desc: "Integrate your CRM with ERP software to synchronize customer, sales, inventory, finance, and operational data, enabling seamless business management across departments.",
            icon: Server
        },
        {
            title: "Accounting Software Integration",
            desc: "Connect your CRM with accounting platforms to automate invoicing, payment tracking, customer billing, and financial reporting while reducing manual data entry.",
            icon: DollarSign
        },
        {
            title: "Payment Gateway Integration",
            desc: "Integrate secure payment gateways to simplify online transactions, manage customer payments, generate invoices, and monitor payment status directly from your CRM.",
            icon: CreditCard
        },
        {
            title: "Email Platform Integration",
            desc: "Connect your CRM with popular email platforms to automate email campaigns, manage customer communication, track engagement, and improve lead nurturing.",
            icon: Mail
        },
        {
            title: "WhatsApp Business API Integration",
            desc: "Enable real-time customer communication by integrating WhatsApp Business API for instant messaging, automated responses, notifications, and customer support.",
            icon: MessageCircle
        },
        {
            title: "SMS Gateway Integration",
            desc: "Automate SMS notifications for appointment reminders, order updates, promotional campaigns, OTP verification, and customer alerts directly from your CRM.",
            icon: Smartphone
        },
        {
            title: "Marketing Automation Integration",
            desc: "Integrate your CRM with marketing automation tools to manage campaigns, capture leads, track customer journeys, and measure campaign performance.",
            icon: Megaphone
        },
        {
            title: "E-commerce Platform Integration",
            desc: "Connect your CRM with eCommerce platforms to synchronize customer profiles, orders, products, and purchase history for a seamless shopping experience.",
            icon: ShoppingCart
        },
        {
            title: "Social Media Integration",
            desc: "Manage customer interactions from social media platforms by capturing inquiries, tracking engagement, and converting social leads into customers.",
            icon: Share2
        },
        {
            title: "Third-Party API Integration",
            desc: "Extend your CRM capabilities by integrating custom APIs, business applications, and enterprise tools to streamline workflows and improve operational efficiency.",
            icon: Zap
        },
        {
            title: "Data Synchronization",
            desc: "Ensure real-time synchronization of customer information, sales data, and business records across multiple systems for accurate and consistent information.",
            icon: RefreshCw
        },
        {
            title: "Custom API Development",
            desc: "Develop secure and scalable custom APIs that enable seamless communication between your CRM and external applications based on your unique business requirements.",
            icon: Code
        }
    ];

    const whyChooseUs = [
        "20+ Years of Software Development Expertise",
        "Custom CRM Solutions tailored to your business workflows",
        "Experienced CRM Developers with industry knowledge",
        "Scalable & Secure CRM Applications",
        "Cloud-Based & Mobile-Friendly Solutions",
        "Seamless Third-Party API Integrations",
        "Agile Development Methodology",
        "Enterprise-Grade Security Standards",
        "Transparent Communication & Timely Delivery",
        "Dedicated Support & Maintenance Services"
    ];

    const faqs = [
        {
            q: "What is CRM software, and why does my business need it?",
            a: "CRM (Customer Relationship Management) software helps businesses manage customer information, sales activities, marketing campaigns, and customer support from a centralized platform. It improves customer engagement, streamlines workflows, and enhances overall business productivity."
        },
        {
            q: "Why should I choose your CRM Development Company in Pondicherry?",
            a: "As a trusted CRM Development Company in Pondicherry, we deliver customized, secure, and scalable CRM solutions tailored to your business needs. Our experienced developers focus on creating CRM software that improves efficiency, strengthens customer relationships, and supports long-term business growth."
        },
        {
            q: "Do you develop custom CRM software?",
            a: "Yes. We specialize in custom CRM development, designing solutions that match your business processes, sales workflows, customer management requirements, and operational goals."
        },
        {
            q: "Can you integrate CRM with my existing business software?",
            a: "Absolutely. We provide CRM integration services for ERP systems, accounting software, payment gateways, WhatsApp Business API, email platforms, marketing tools, eCommerce platforms, and other third-party applications."
        },
        {
            q: "Which industries do you provide CRM solutions for?",
            a: "We develop CRM solutions for a wide range of industries, including healthcare, retail, manufacturing, education, logistics, finance, real estate, hospitality, construction, and service-based businesses."
        },
        {
            q: "Do you provide cloud-based CRM solutions?",
            a: "Yes. We develop secure, scalable, and cloud-based CRM applications that allow businesses to access customer information anytime, from anywhere, while ensuring high performance and data security."
        },
        {
            q: "Do you offer CRM maintenance and support services?",
            a: "Yes. Our services include regular software updates, performance optimization, security monitoring, bug fixes, technical support, and ongoing maintenance to keep your CRM running efficiently."
        },
        {
            q: "How long does it take to develop a CRM solution?",
            a: "The development timeline depends on your business requirements, features, integrations, and project complexity. After understanding your needs, we provide a detailed project plan with an estimated timeline for development and deployment."
        }
    ];

    const categories = ["All", "Lead & Sales", "Customer Support", "Marketing & Analytics", "Integrations & Tech"];

    const filteredModules = selectedModuleCategory === "All"
        ? crmModules
        : crmModules.filter(m => m.category === selectedModuleCategory);

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

    return (
        <div ref={mainRef} className="w-full min-h-screen bg-slate-50 text-slate-800 overflow-x-hidden font-sans">
            {/* HERO BANNER */}
            <HeaderBanner
                title={
                    <>
                        CRM Development Company in Pondicherry with <span className="text-[#1A5CDD] bg-clip-text text-transparent bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8]">20+ Years of Proven Expertise</span>
                    </>
                }
                description="Build Stronger Customer Relationships with Custom CRM Solutions"
                primaryBtnText="Request CRM Consultation"
                primaryBtnLink="/contact"
                secondaryBtnLink="#crm-services"
            />

            {/* INTRO SECTION: Light Premium */}
            <section className="py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden gsap-trigger-section">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#1A5CDD]/10 via-[#38bdf8]/5 to-transparent rounded-bl-[140px] pointer-events-none" />

                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center gsap-fade-up">
                        <div className="lg:col-span-6 space-y-6">
                            <span className="inline-flex items-center gap-2 bg-white border border-slate-200 text-[#1A5CDD] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-sm">
                                <Briefcase size={14} />
                                Scalable Business Growth
                            </span>

                            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#011146] tracking-tight leading-[1.15]">
                                Drive Business Growth with <br className="hidden lg:block" /> <span className="text-[#1A5CDD]">Custom CRM Solutions</span>
                            </h2>

                            <div className="space-y-6 text-slate-600 text-lg md:text-xl md:leading-relaxed font-medium">
                                <p>
                                    Managing customers efficiently is essential for business growth. As a trusted CRM Development Company in Pondicherry, we design and develop customized CRM solutions that help businesses manage leads, sales, customer interactions, support, and marketing from a single platform. Our CRM software improves team collaboration, automates business processes, and provides real-time insights to enhance customer satisfaction and increase revenue.
                                </p>
                                <p>
                                    Whether you're a startup, SME, or enterprise, our scalable CRM solutions are built to streamline operations, improve productivity, and support long-term business growth.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-6 relative group flex justify-center lg:justify-end">
                            <div className="w-full max-w-[500px] relative">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-[#1A5CDD]/20 via-[#38bdf8]/15 to-[#1A5CDD]/20 rounded-[40px] blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none scale-110" />

                                <div className="relative rounded-[32px] overflow-hidden border border-slate-200/80 shadow-[0_30px_60px_rgba(1,17,70,0.12)] bg-white ring-4 ring-white group-hover:-translate-y-2 transition-transform duration-700">
                                    <div className="h-12 bg-slate-50 border-b border-slate-100 flex items-center px-5 gap-3 w-full">
                                        <div className="flex gap-2">
                                            <div className="w-3.5 h-3.5 rounded-full bg-rose-400" />
                                            <div className="w-3.5 h-3.5 rounded-full bg-amber-400" />
                                            <div className="w-3.5 h-3.5 rounded-full bg-emerald-400" />
                                        </div>
                                        <div className="mx-auto bg-white h-7 w-2/3 max-w-[200px] rounded-md border border-slate-200 flex items-center px-4 justify-center shadow-sm">
                                            <span className="text-xs text-slate-400 font-mono flex items-center gap-2">
                                                crm.syscorp.com
                                            </span>
                                        </div>
                                    </div>

                                    <Image
                                        src="/images/crm-dashboard-showcase.png"
                                        alt="Enterprise CRM Analytics Dashboard"
                                        width={800}
                                        height={800}
                                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT IS CRM: Dark Atmospheric */}
            <section className="py-20 lg:py-28 bg-[#011146] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.07]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1A5CDD]/20 rounded-full blur-[140px] pointer-events-none" />

                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div>
                            <span className="inline-flex items-center gap-2 bg-[#38bdf8]/10 text-[#38bdf8] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-[#38bdf8]/20 shadow-sm mb-6">
                                <Users size={14} />
                                Centralized Business Intelligence
                            </span>

                            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                                What is Customer Relationship <br className="hidden md:block" /> Management <span className="text-[#38bdf8]">
                                    (CRM)?
                                </span>
                            </h2>
                        </div>

                        <div className="text-slate-300 text-lg md:text-xl leading-relaxed md:leading-[1.8] font-medium bg-white/5 p-8 md:p-12 rounded-[32px] border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.3)] backdrop-blur-md relative overflow-hidden text-left">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#38bdf8]/20 to-transparent rounded-bl-full pointer-events-none" />
                            <p className="relative z-10 text-center">
                                Customer Relationship Management (CRM) is a business solution that enables organizations to manage leads, customers, sales, marketing, and support from a centralized system. By automating workflows and organizing customer data, CRM software improves operational efficiency, strengthens customer relationships, and helps businesses deliver personalized experiences while driving higher sales and long-term growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CRM SERVICES: Premium Light Side-Navigation */}
            <section id="crm-services" className="py-20 relative overflow-hidden bg-[#F8FAFF]">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1A5CDD]/5 rounded-full blur-[140px] pointer-events-none" />

                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-16 space-y-5">
                        <span className="inline-flex items-center gap-2 bg-white text-[#1A5CDD] px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-slate-200 shadow-sm">
                            <Zap size={14} />
                            End-To-End CRM Capabilities
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#011146] tracking-tight leading-tight">
                            Our CRM Development <span className="text-[#1A5CDD]">Services</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Vertical Side Navigation */}
                        <div className="lg:col-span-4 space-y-2 lg:sticky lg:top-32">
                            {crmServices.map((srv, idx) => {
                                const isSelected = activeServiceTab === idx;
                                const SrvIcon = srv.icon;
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveServiceTab(idx)}
                                        className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 cursor-pointer border ${isSelected
                                            ? "bg-[#011146] text-white border-transparent shadow-[0_10px_20px_rgba(1,17,70,0.15)]"
                                            : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300 hover:translate-x-1 shadow-sm"
                                            }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isSelected ? "bg-white/20 text-white" : "bg-[#F0F6FF] text-[#1A5CDD]"}`}>
                                                <SrvIcon size={18} />
                                            </div>
                                            <span className="text-sm font-extrabold text-left">{srv.title}</span>
                                        </div>
                                        {isSelected && <ArrowRight size={16} className="animate-pulse" />}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Active Service Showcase Card */}
                        <div className="lg:col-span-8">
                            <div className="bg-white rounded-[28px] border border-slate-200/80 p-6 md:p-8 lg:p-10 shadow-[0_15px_40px_rgba(1,17,70,0.06)] relative overflow-hidden transition-all duration-500 flex flex-col justify-center">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#1A5CDD]/10 to-transparent rounded-bl-full pointer-events-none" />

                                <div className="space-y-6 relative z-10">
                                    <div className="flex items-center gap-5 pb-5 border-b border-slate-200">
                                        <div className="w-14 h-14 rounded-2xl bg-[#011146] text-white flex items-center justify-center shadow-lg shadow-blue-900/15 shrink-0">
                                            {(() => {
                                                const IconComp = crmServices[activeServiceTab].icon;
                                                return <IconComp size={28} />;
                                            })()}
                                        </div>
                                        <div>
                                            <span className="text-xs font-mono font-extrabold text-[#1A5CDD] uppercase tracking-widest block mb-1">
                                                SERVICE {String(activeServiceTab + 1).padStart(2, '0')}
                                            </span>
                                            <h3 className="text-2xl md:text-3xl font-extrabold text-[#011146] leading-tight">
                                                {crmServices[activeServiceTab].title}
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="text-slate-600 text-sm md:text-base leading-relaxed whitespace-pre-line">
                                        {crmServices[activeServiceTab].desc}
                                    </div>

                                    <div className="pt-2 space-y-3">
                                        <h4 className="text-xs md:text-sm font-mono uppercase tracking-wider text-[#1A5CDD] font-black">
                                            Our {crmServices[activeServiceTab].title} Include:
                                        </h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {crmServices[activeServiceTab].includes.map((inc, iIdx) => (
                                                <div key={iIdx} className="group flex items-center gap-3 p-3 rounded-2xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:border-[#1A5CDD]/20 hover:shadow-[0_8px_30px_-4px_rgba(26,92,221,0.12)] transition-all duration-300">
                                                    <div className="w-8 h-8 rounded-full bg-white shadow-sm text-[#1A5CDD] border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#1A5CDD] group-hover:text-white group-hover:border-[#1A5CDD] transition-all duration-300">
                                                        <Check size={14} strokeWidth={3} />
                                                    </div>
                                                    <span className="text-sm font-bold text-slate-700 leading-tight group-hover:text-[#011146] transition-colors">{inc}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-6 mt-2 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-5">
                                        <div className="space-y-1">
                                            <span className="text-xs font-mono text-[#1A5CDD] font-bold block">Tailored Architecture</span>
                                            <span className="text-xs md:text-sm text-slate-500">Configured precisely for your workflows.</span>
                                        </div>
                                        <Link
                                            href="/contact"
                                            className="w-full sm:w-auto bg-[#011146] hover:bg-[#1A5CDD] text-white py-3.5 px-6 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(1,17,70,0.15)] hover:shadow-[0_10px_25px_rgba(26,92,221,0.25)] shrink-0"
                                        >
                                            <span>Consult Our Team</span>
                                            <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CRM SOLUTIONS WE DEVELOP: Bento Grid */}
            <section className="py-20  bg-white relative overflow-hidden">
                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-16 space-y-5">
                        <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 text-[#1A5CDD] px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-[#1A5CDD]/20 shadow-sm">
                            <Layers size={14} />
                            Modular CRM Studio
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#011146] tracking-tight leading-tight">
                            CRM Solutions We <span className="text-[#1A5CDD] bg-clip-text text-transparent bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8]">Develop</span>
                        </h2>
                        <h3 className="text-xl md:text-2xl font-bold text-[#1A5CDD]">
                            Custom CRM Modules Designed to Streamline Every Business Process
                        </h3>
                        <p className="text-slate-600 text-base md:text-lg max-w-3xl mx-auto pt-2 leading-relaxed">
                            Our CRM software is built to help businesses efficiently manage customer relationships, sales operations, marketing activities, and support services. We develop feature-rich CRM modules that improve collaboration, automate workflows, and provide complete visibility into your customer lifecycle.
                        </p>
                    </div>

                    <div className="flex items-center justify-center gap-3 flex-wrap mb-14">
                        {categories.map((cat, cIdx) => (
                            <button
                                key={cIdx}
                                onClick={() => setSelectedModuleCategory(cat)}
                                className={`px-5 py-2.5 rounded-2xl text-sm font-extrabold transition-all duration-300 border cursor-pointer ${selectedModuleCategory === cat
                                    ? "bg-[#011146] text-white border-transparent shadow-[0_10px_20px_rgba(1,17,70,0.15)] scale-105"
                                    : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-[#011146]"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredModules.map((mod, mIdx) => {
                            const ModIcon = mod.icon;
                            return (
                                <div key={mIdx} className="bg-[#020921] rounded-2xl p-5 border border-[#1A5CDD]/20 shadow-lg hover:-translate-y-1.5 transition-transform duration-500 group relative overflow-hidden">
                                    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity" style={{ backgroundImage: `radial-gradient(#38bdf8 1px, transparent 1px)`, backgroundSize: `16px 16px` }} />
                                    <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#1A5CDD]/40 rounded-full blur-2xl pointer-events-none group-hover:bg-[#38bdf8]/50 transition-colors duration-500" />

                                    <div className="relative z-10 flex flex-col h-full justify-between">
                                        <div>
                                            <div className="w-10 h-10 rounded-lg bg-white/10 text-[#38bdf8] flex items-center justify-center mb-3 shadow-sm border border-white/10 group-hover:bg-[#38bdf8] group-hover:text-[#011146] transition-colors">
                                                <ModIcon size={20} />
                                            </div>
                                            <h4 className="font-extrabold text-white text-base leading-snug mb-1">
                                                {mod.title}
                                            </h4>
                                        </div>
                                        <div className="mt-5">
                                            <span className="inline-block text-[9px] font-bold uppercase tracking-wider text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10 group-hover:border-[#38bdf8]/30 group-hover:text-[#38bdf8] transition-colors">
                                                {mod.category}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* TECHNOLOGIES WE USE: Tech Matrix Grid */}
            <section className="py-20  bg-[#F8FAFC] relative overflow-hidden">
                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-16 space-y-5">
                        <span className="inline-flex items-center gap-2 bg-white border border-slate-200 text-[#1A5CDD] px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-sm">
                            <Code size={14} />
                            Modern Tech Stack
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#011146] tracking-tight leading-tight">
                            Technologies We <span className="text-[#1A5CDD]">Use</span>
                        </h2>
                        <h3 className="text-xl font-bold text-slate-600">Modern Technologies for Secure and Scalable CRM Development</h3>
                        <p className="text-slate-600 text-base md:text-lg max-w-3xl mx-auto pt-2 leading-relaxed">
                            We leverage the latest technologies and development frameworks to build secure, scalable, and high-performance CRM solutions. From intuitive frontend interfaces to robust backend systems, cloud platforms, and databases, our technology stack ensures seamless performance, flexibility, and long-term reliability for businesses of all sizes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.entries(technologies).map(([category, techs], idx) => (
                            <div key={idx} className="group flex flex-col p-8 rounded-[28px] bg-white border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 hover:border-[#1A5CDD]/20 transition-all duration-300 relative overflow-hidden">
                                <h4 className="text-xl font-extrabold text-[#011146] mb-6 flex items-center gap-3 relative z-10">
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 text-[#1A5CDD] border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-[#1A5CDD] group-hover:text-white transition-colors duration-300">
                                        <Code size={18} />
                                    </div>
                                    {category}
                                </h4>
                                <div className="flex flex-wrap gap-2.5 relative z-10">
                                    {techs.map((tech, tIdx) => (
                                        <span key={tIdx} className="bg-white text-slate-700 font-semibold px-4 py-2 rounded-lg border border-slate-200 text-sm hover:border-[#1A5CDD] hover:text-[#1A5CDD] hover:bg-[#F8FAFF] hover:shadow-sm transition-all duration-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CRM INTEGRATION SERVICES: Dark Premium Grid */}
            <section className="py-20 bg-[#011146] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: `32px 32px` }} />
                
                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
                        <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-[#1A5CDD] px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-sm">
                            <RefreshCw size={14} />
                            Seamless Connectivity
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                            CRM <span className="text-[#1A5CDD]">Integration</span> Services
                        </h2>
                        <h3 className="text-xl text-slate-300 font-bold">Connect Your CRM with the Tools You Already Use</h3>
                        <p className="text-slate-400 text-base md:text-lg max-w-3xl mx-auto pt-2 leading-relaxed">
                            Enhance the capabilities of your CRM by integrating it with the business applications you rely on every day. As an experienced CRM Development Company in Pondicherry, we deliver seamless integrations with ERP systems, accounting software, payment gateways, and more.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {crmIntegrations.map((integ, iIdx) => {
                            const Icon = integ.icon;
                            return (
                                <div key={iIdx} className="bg-white p-8 md:p-10 rounded-[32px] border border-slate-200 shadow-[0_15px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_50px_rgba(26,92,221,0.25)] hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full">
                                    <div className="w-16 h-16 rounded-2xl bg-[#F0F6FF] text-[#1A5CDD] flex items-center justify-center mb-8 border border-[#1A5CDD]/10 group-hover:bg-[#1A5CDD] group-hover:text-white transition-all duration-500 shadow-sm">
                                        <Icon size={28} strokeWidth={2} />
                                    </div>
                                    <h4 className="font-extrabold text-[#011146] text-xl md:text-2xl mb-4 group-hover:text-[#1A5CDD] transition-colors leading-tight">
                                        {integ.title}
                                    </h4>
                                    <p className="text-slate-600 text-sm md:text-base leading-relaxed mt-auto">
                                        {integ.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="py-20  bg-white relative overflow-hidden">
                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <span className="inline-flex items-center gap-2 bg-[#F0F6FF] text-[#1A5CDD] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-[#1A5CDD]/10 mb-6">
                                    <Shield size={14} />
                                    Trusted Partner
                                </span>
                                <h2 className="text-3xl md:text-5xl font-extrabold text-[#011146] tracking-tight leading-[1.15]">
                                    Why Choose Our CRM Development <br className="hidden lg:block" /> Company in <span className="text-[#1A5CDD]">Pondicherry?</span>
                                </h2>
                            </div>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Choosing the right CRM development partner is essential for building a solution that supports your business goals and future growth. As a trusted CRM Development Company in Pondicherry, we deliver customized, secure, and scalable CRM solutions designed to improve customer engagement, streamline business processes, and maximize operational efficiency. From consultation and development to integration, deployment, and ongoing support, our experienced team ensures every CRM solution is tailored to your unique business requirements.
                            </p>
                        </div>

                        <div className="bg-[#011146] rounded-[32px] p-8 relative overflow-hidden shadow-2xl border border-slate-200">
                            <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#38bdf8]/20 rounded-full blur-3xl pointer-events-none" />
                            <h3 className="text-2xl font-extrabold text-white mb-6">Why Businesses Choose Us</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 relative z-10">
                                {whyChooseUs.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-white/5 py-2.5 px-3.5 rounded-[14px] border border-white/10 hover:bg-white/10 transition-colors">
                                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                                            <Check size={12} strokeWidth={3} />
                                        </div>
                                        <span className="text-slate-200 text-[13px] leading-tight font-semibold">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQS SECTION */}
            <section className="py-20  bg-[#F8FAFC] relative overflow-hidden">
                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
                        <span className="inline-flex items-center gap-2 bg-white border border-slate-200 text-[#1A5CDD] px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-sm">
                            <HelpCircle size={14} />
                            Knowledge Base
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#011146] tracking-tight leading-tight">
                            Frequently Asked <span className="text-[#1A5CDD]">Questions</span>
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-4">
                        {faqs.map((faq, idx) => {
                            const isActive = activeAccordion === idx;
                            return (
                                <div
                                    key={idx}
                                    className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-sm ${isActive ? "border-[#1A5CDD] shadow-[0_10px_30px_rgba(26,92,221,0.08)]" : "border-slate-200 hover:border-slate-300"}`}
                                >
                                    <button
                                        onClick={() => setActiveAccordion(isActive ? null : idx)}
                                        className="w-full flex items-center justify-between p-6 text-left"
                                    >
                                        <span className={`font-extrabold text-base md:text-lg pr-4 ${isActive ? "text-[#1A5CDD]" : "text-[#011146]"}`}>
                                            {faq.q}
                                        </span>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isActive ? "bg-[#1A5CDD] text-white" : "bg-slate-100 text-slate-500"}`}>
                                            {isActive ? <Minus size={16} /> : <Plus size={16} />}
                                        </div>
                                    </button>
                                    <div
                                        className={`transition-all duration-300 ease-in-out ${isActive ? "max-h-[500px] opacity-100 pb-6 px-6" : "max-h-0 opacity-0 px-6"}`}
                                    >
                                        <p className="text-slate-600 text-base leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
