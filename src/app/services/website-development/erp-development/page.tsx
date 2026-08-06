"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Code, Server, Database, Zap, Layout, Lock, Cloud, Gauge,
    Shield, Wrench, CheckCircle2, ChevronDown, Check, ArrowRight,
    Cpu, Layers, Sparkles, Activity, KeyRound, Monitor, Settings,
    FileCode, Terminal, Globe, Smartphone, RefreshCw, Users, HelpCircle,
    TrendingUp, Rocket, FileText, ChevronRight, ChevronLeft, Building2,
    Truck, DollarSign, Package, ShoppingCart, BarChart3, Factory, Warehouse,
    Briefcase, HardDrive, PieChart, Users2, Workflow, X
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderBanner from "@/components/ui/HeaderBanner";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function ERPDevelopmentPondicherryPage() {
    const mainRef = useRef<HTMLDivElement>(null);
    const processSliderRef = useRef<HTMLDivElement>(null);
    
    // Auto-slide effect for ERP Process Slider
    useEffect(() => {
        const interval = setInterval(() => {
            if (processSliderRef.current) {
                const slider = processSliderRef.current;
                const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
                
                // If at the end, jump back to start
                if (slider.scrollLeft >= maxScrollLeft - 10) {
                    slider.scrollTo({ left: 0, behavior: "smooth" });
                } else {
                    // Calculate scroll amount based on visible cards
                    const scrollAmt = window.innerWidth < 768 ? window.innerWidth * 0.85 : 
                                      window.innerWidth < 1024 ? slider.clientWidth / 2 : 
                                      slider.clientWidth / 3;
                    slider.scrollBy({ left: scrollAmt, behavior: "smooth" });
                }
            }
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
    const [activeProcessIndex, setActiveProcessIndex] = useState<number>(0);
    const [activeModuleIndex, setActiveModuleIndex] = useState<number>(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero-animate", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
            });
        }, mainRef);

        return () => ctx.revert();
    }, []);

    const erpServices = [
        {
            title: "Custom ERP Development",
            icon: Cpu,
            desc: "Every business operates differently, and a one-size-fits-all ERP solution often falls short of meeting specific operational needs. Our Custom ERP Development services focus on building fully tailored ERP software that aligns with your workflows, business goals, and industry requirements. We develop scalable ERP systems with intuitive user interfaces, role-based access, real-time reporting, and seamless integration to ensure your business operates efficiently while remaining prepared for future expansion."
        },
        {
            title: "Cloud ERP Development",
            icon: Cloud,
            desc: "Cloud-based ERP systems provide businesses with the flexibility to access applications and business data securely from anywhere. Our cloud ERP solutions are built using modern cloud technologies to deliver high availability, scalability, automatic backups, and enterprise-grade security. Whether hosted on AWS, Microsoft Azure, or Google Cloud Platform, our cloud ERP solutions enable organizations to reduce infrastructure costs while improving accessibility and business continuity."
        },
        {
            title: "Web-Based ERP Development",
            icon: Globe,
            desc: "Our web-based ERP applications enable businesses to manage daily operations through a secure browser-based platform without requiring complex software installations. Designed with responsive interfaces and powerful functionality, our web ERP solutions provide seamless access to business data across departments, allowing teams to collaborate efficiently from any location."
        },
        {
            title: "Mobile ERP Application Development",
            icon: Smartphone,
            desc: "Business decisions shouldn't be limited to the office. Our mobile ERP applications provide secure access to essential business information from smartphones and tablets, allowing managers and employees to monitor operations, approve requests, track inventory, review reports, and manage workflows while on the move. Our mobile solutions are designed for Android and iOS, ensuring flexibility and convenience for modern businesses."
        },
        {
            title: "ERP Integration Services",
            icon: Workflow,
            desc: "Businesses often rely on multiple software solutions to manage different operations. Our ERP integration services connect your ERP system with CRM platforms, accounting software, HRMS, payment gateways, inventory systems, e-commerce platforms, third-party APIs, and business applications to create a unified digital ecosystem. This seamless integration eliminates duplicate data entry, improves workflow automation, and ensures consistent data across all business systems."
        },
        {
            title: "ERP Migration & Modernization",
            icon: RefreshCw,
            desc: "Modernizing legacy ERP systems is essential for improving performance, security, and scalability. Our ERP migration services help businesses transition from outdated software to modern cloud-enabled ERP solutions with minimal downtime. We carefully migrate applications, databases, and business data while preserving operational continuity and enhancing overall system performance."
        },
        {
            title: "ERP Maintenance & Support",
            icon: Wrench,
            desc: "An ERP system requires continuous monitoring, maintenance, and optimization to perform efficiently. Our dedicated support team provides ongoing maintenance services that include software updates, performance optimization, security enhancements, issue resolution, backup management, and technical support. We ensure your ERP solution remains secure, reliable, and aligned with your evolving business requirements."
        },
        {
            title: "ERP Consulting & Implementation",
            icon: FileText,
            desc: "Successful ERP implementation begins with understanding your business processes and operational goals. Our ERP consultants work closely with your team to analyze existing workflows, identify improvement opportunities, recommend the right ERP architecture, and implement solutions that maximize efficiency. From requirement analysis to deployment and user training, we ensure a smooth implementation process that delivers measurable business value."
        },
        {
            title: "Build an ERP Solution That Grows with Your Business",
            icon: Rocket,
            desc: "At Syscorp, we believe ERP software should do more than automate processes—it should empower your business to operate smarter, faster, and more efficiently. As a leading ERP Development Company in Pondicherry, we deliver customized ERP solutions that integrate people, processes, and technology into one intelligent platform. Whether you require a cloud-based ERP system, industry-specific solution, or enterprise-grade business management software, our ERP Development in Pondicherry is designed to support sustainable growth, improve decision-making, and drive long-term success."
        }
    ];

    const erpModules = [
        {
            title: "Customer Relationship Management (CRM)",
            subtitle: "Build Stronger Customer Relationships and Accelerate Business Growth",
            icon: Users2,
            desc: "Customer Relationship Management (CRM) is one of the most important modules of an ERP system, helping businesses build stronger customer relationships while improving sales and customer service. Our CRM module centralizes customer information, allowing your sales, marketing, and support teams to collaborate effectively throughout the customer journey.\n\nWith our ERP Software Development in Pondicherry, businesses can manage leads, monitor sales opportunities, automate follow-ups, and improve customer satisfaction through a single integrated platform.",
            features: [
                "Lead Management", "Customer Database Management", "Contact Management", "Sales Pipeline Tracking",
                "Opportunity Management", "Quotation & Proposal Management", "Customer Communication History", "Email Integration",
                "Follow-up Reminders", "Task & Activity Management", "Customer Support Ticketing", "Complaint Management",
                "Marketing Campaign Tracking", "Customer Feedback Management", "Sales Performance Reports", "Customer Analytics Dashboard"
            ]
        },
        {
            title: "Human Resource Management System (HRMS)",
            subtitle: "Simplify Workforce Management Through a Centralized HR Platform",
            icon: Briefcase,
            desc: "Managing employees efficiently is essential for business success. Our Human Resource Management System (HRMS) automates every aspect of employee management, from recruitment and onboarding to payroll, attendance, and performance evaluations. The HRMS module simplifies administrative tasks while providing employees and managers with a centralized platform for workforce management.\n\nOur ERP Development Company in Pondicherry develops HRMS solutions that improve workforce productivity, reduce manual effort, and ensure compliance with organizational policies.",
            features: [
                "Employee Information Management", "Recruitment Management", "Candidate Tracking", "Employee Onboarding",
                "Attendance Management", "Leave Management", "Shift Scheduling", "Payroll Processing",
                "Employee Self-Service Portal", "Performance Management", "Goal Setting & Appraisal", "Training Management",
                "Employee Document Management", "Exit Management", "HR Reports & Analytics"
            ]
        },
        {
            title: "Finance & Accounting Management",
            subtitle: "Manage Financial Operations with Accuracy and Complete Visibility",
            icon: DollarSign,
            desc: "The Finance & Accounting module serves as the financial backbone of your ERP system by providing complete visibility into your organization's financial activities. Our ERP solutions help businesses automate accounting processes, monitor cash flow, manage budgets, and generate accurate financial reports that support better decision-making.\n\nAs a trusted provider of ERP Development in Pondicherry, we build finance modules that simplify financial management while ensuring accuracy, transparency, and compliance.",
            features: [
                "General Ledger Management", "Accounts Payable", "Accounts Receivable", "Budget Planning",
                "Financial Forecasting", "Cash Flow Management", "Bank Reconciliation", "Expense Management",
                "Tax Management", "GST Management", "Invoice Generation", "Payment Tracking",
                "Multi-Currency Support", "Profit & Loss Statements", "Balance Sheet Generation", "Financial Reporting Dashboard", "Audit Trail"
            ]
        },
        {
            title: "Inventory Management",
            subtitle: "Manage Your Inventory with Accuracy and Real-Time Visibility",
            icon: Package,
            desc: "Efficient inventory management is essential for maintaining smooth business operations and meeting customer demands. Our Inventory Management module helps businesses track stock movement, monitor inventory levels, manage multiple warehouses, and optimize inventory planning through a centralized ERP system. As part of our ERP Development in Pondicherry, this module provides complete visibility into inventory across all business locations, helping organizations minimize stock shortages, prevent overstocking, and improve operational efficiency.\n\nWith real-time inventory tracking and automated stock management, businesses can streamline procurement, improve warehouse coordination, and make data-driven inventory decisions. The module also integrates seamlessly with sales, purchasing, manufacturing, and finance to ensure accurate inventory records and efficient business operations.",
            features: [
                "Stock Management", "Real-Time Inventory Tracking", "Multi-Warehouse Management", "Batch & Serial Number Tracking",
                "Barcode & QR Code Integration", "Inventory Transfers", "Stock Adjustment", "Reorder Level Management",
                "Goods Receipt & Dispatch", "Inventory Valuation", "Purchase & Sales Integration", "Inventory Reports & Analytics"
            ]
        },
        {
            title: "Sales Management",
            subtitle: "Streamline Your Complete Sales Process",
            icon: ShoppingCart,
            desc: "An efficient sales process directly impacts business growth and customer satisfaction. Our Sales Management module helps businesses manage every stage of the sales cycle, from lead conversion and quotations to order processing, invoicing, and payment tracking. With our ERP Software Development in Pondicherry, organizations can improve sales efficiency while gaining complete visibility into customer transactions.\n\nThe module centralizes sales information, enabling sales teams to monitor performance, manage customer orders, and generate insightful reports for better decision-making.",
            features: [
                "Sales Quotation Management", "Sales Order Processing", "Customer Order Tracking", "Invoice Generation",
                "Pricing & Discount Management", "Payment Tracking", "Sales Return Management", "Delivery Management",
                "Customer Purchase History", "Sales Reports & Analytics", "Revenue Dashboard"
            ]
        },
        {
            title: "Purchase Management",
            subtitle: "Simplify Procurement and Vendor Management",
            icon: Truck,
            desc: "Efficient procurement ensures that businesses have the right materials at the right time while controlling operational costs. Our Purchase Management module automates procurement workflows, supplier communication, purchase approvals, and invoice verification to improve purchasing efficiency and transparency.\n\nAs part of our ERP Development Company in Pondicherry, this module enables organizations to streamline procurement while maintaining better control over vendor relationships and purchasing budgets.",
            features: [
                "Vendor Management", "Purchase Requisition", "Purchase Order Management", "Supplier Quotations",
                "Goods Receipt", "Invoice Verification", "Purchase Approval Workflow", "Vendor Performance Tracking",
                "Purchase Reports", "Procurement Analytics"
            ]
        },
        {
            title: "Manufacturing & Production Management",
            subtitle: "Improve Production Efficiency Through Intelligent Manufacturing Automation",
            icon: Factory,
            desc: "Manufacturing businesses require complete control over production planning, material usage, quality assurance, and resource allocation. Our Manufacturing & Production Management module helps organizations streamline production processes while improving operational efficiency and reducing manufacturing costs.\n\nWith our ERP Development in Pondicherry, manufacturers can plan production schedules, monitor work orders, manage bills of materials, optimize machine utilization, and track production performance in real time. The system helps reduce delays, minimize material wastage, and improve product quality through intelligent production management.",
            features: [
                "Bill of Materials (BOM)", "Production Planning", "Work Order Management", "Material Requirement Planning (MRP)",
                "Shop Floor Management", "Machine Utilization Monitoring", "Production Scheduling", "Quality Control",
                "Finished Goods Tracking", "Production Cost Analysis", "Manufacturing Reports", "Production Dashboard"
            ]
        },
        {
            title: "Warehouse Management",
            subtitle: "Improve Warehouse Operations with Intelligent Inventory Control",
            icon: Warehouse,
            desc: "Efficient warehouse management ensures faster order fulfillment and better inventory control. Our Warehouse Management module provides complete visibility into warehouse operations, enabling businesses to organize inventory, monitor stock movement, and optimize storage utilization.\n\nThe system helps improve warehouse productivity while reducing inventory errors and operational costs.",
            features: [
                "Warehouse Location Management", "Stock Movement Tracking", "Goods Receiving", "Goods Dispatch",
                "Warehouse Transfers", "Barcode Integration", "Inventory Auditing", "Warehouse Reports", "Storage Optimization"
            ]
        },
        {
            title: "Supply Chain Management",
            subtitle: "Build an Efficient and Connected Supply Chain",
            icon: Layers,
            desc: "Supply chain management plays a vital role in ensuring products move efficiently from suppliers to customers. Our Supply Chain Management module enables businesses to coordinate procurement, inventory, logistics, distribution, and supplier management through a centralized ERP platform.\n\nAs part of our ERP Development in Pondicherry, this module improves visibility across the supply chain, helping businesses reduce operational delays, improve inventory availability, and deliver products to customers on time.",
            features: [
                "Supplier Management", "Procurement Planning", "Inventory Synchronization", "Logistics Management",
                "Distribution Management", "Shipment Tracking", "Demand Forecasting", "Order Fulfillment",
                "Supply Chain Analytics", "Vendor Collaboration", "Delivery Monitoring", "Performance Reports"
            ]
        },
        {
            title: "Payroll Management",
            subtitle: "Automate Payroll with Accuracy and Compliance",
            icon: DollarSign,
            desc: "Payroll processing involves multiple calculations and compliance requirements. Our Payroll Management module automates salary processing, tax calculations, reimbursements, employee benefits, and statutory compliance while ensuring timely payroll execution.",
            features: [
                "Salary Processing", "Tax Calculation", "Employee Benefits", "Overtime Management",
                "Reimbursements", "Payslip Generation", "Statutory Compliance", "Payroll Reports", "Salary Analytics"
            ]
        },
        {
            title: "Project Management",
            subtitle: "Manage Projects Efficiently from Planning to Delivery",
            icon: Workflow,
            desc: "Our Project Management module enables businesses to plan, execute, monitor, and complete projects efficiently. It helps project managers allocate resources, assign tasks, monitor progress, manage budgets, and ensure projects are delivered on time.",
            features: [
                "Project Planning", "Task Assignment", "Resource Allocation", "Milestone Tracking",
                "Budget Management", "Time Tracking", "Team Collaboration", "Project Reports", "Performance Dashboard"
            ]
        },
        {
            title: "Asset Management",
            subtitle: "Track and Manage Business Assets Efficiently",
            icon: HardDrive,
            desc: "Our Asset Management module enables businesses to monitor physical assets throughout their lifecycle, from procurement to retirement. Organizations can manage maintenance schedules, asset allocation, depreciation, warranty information, and repairs through a centralized platform.",
            features: [
                "Asset Registration", "Asset Allocation", "Asset Tracking", "Maintenance Scheduling",
                "Depreciation Management", "Warranty Tracking", "Repair Management", "Asset Reports", "Lifecycle Management"
            ]
        },
        {
            title: "Business Intelligence & Reports",
            subtitle: "Turn Business Data into Actionable Insights",
            icon: PieChart,
            desc: "Make informed business decisions with real-time dashboards and advanced reporting. Our Business Intelligence & Reporting module provides complete visibility into finance, sales, inventory, HR, production, and other business operations through interactive reports and analytics. As part of our ERP Development in Pondicherry, we help businesses monitor performance, track KPIs, identify trends, and improve decision-making with accurate, real-time business insights.",
            features: [
                "Executive Dashboards", "Real-Time Business Analytics", "Sales & Revenue Reports", "Financial Reports",
                "Inventory Reports", "Production Performance Reports", "HR & Payroll Analytics", "Project Performance Reports",
                "KPI Monitoring", "Custom Report Builder", "Trend Analysis", "Data Visualization"
            ]
        }
    ];

    const erpProcessSteps = [
        {
            step: 1,
            title: "Business Analysis",
            desc: "We understand your business processes, operational challenges, and project goals to define the right ERP strategy.",
            icon: BarChart3
        },
        {
            step: 2,
            title: "Requirement Gathering",
            desc: "Our team collects functional and technical requirements to create a roadmap tailored to your business.",
            icon: FileText
        },
        {
            step: 3,
            title: "System Design",
            desc: "We design a secure, scalable ERP architecture along with intuitive user interfaces and optimized workflows.",
            icon: Layout
        },
        {
            step: 4,
            title: "Custom ERP Development",
            desc: "Our developers build customized ERP modules using modern technologies while maintaining high coding standards.",
            icon: Cpu
        },
        {
            step: 5,
            title: "Integration & Data Migration",
            desc: "We integrate third-party applications and securely migrate your business data with minimal downtime.",
            icon: RefreshCw
        },
        {
            step: 6,
            title: "Testing & Quality Assurance",
            desc: "Every module undergoes comprehensive testing to ensure performance, security, and reliability before deployment.",
            icon: Shield
        },
        {
            step: 7,
            title: "Deployment",
            desc: "The ERP solution is deployed with minimal disruption to your business operations.",
            icon: Rocket
        },
        {
            step: 8,
            title: "Training & Ongoing Support",
            desc: "We provide user training, software updates, maintenance, security enhancements, and continuous technical support to ensure long-term success.",
            icon: Wrench
        }
    ];

    const whyTrustSyscorp = [
        "Customized ERP Solutions",
        "Experienced ERP Developers",
        "Industry-Specific ERP Expertise",
        "Cloud, Web & Mobile ERP Development",
        "Secure & Scalable Architecture",
        "Seamless Third-Party Integration",
        "Enterprise-Grade Security",
        "Agile Development Methodology",
        "Transparent Project Management",
        "On-Time Project Delivery",
        "Dedicated Technical Support",
        "Long-Term Maintenance & Upgrades"
    ];

    const syscorpStats = [
        { stat: "150+", label: "Projects Delivered", desc: "Successfully delivering ERP, software, web, and enterprise solutions for businesses across multiple industries." },
        { stat: "10+", label: "Years Experience", desc: "A decade of expertise in custom software development and digital transformation." },
        { stat: "30+", label: "Cloud Experts", desc: "Certified professionals specializing in cloud-native application development and infrastructure." },
        { stat: "15+", label: "Countries Served", desc: "Supporting businesses across global markets with innovative technology solutions." },
        { stat: "99.9%", label: "Uptime", desc: "Building highly available ERP systems that ensure uninterrupted business operations." },
        { stat: "24/7", label: "Support", desc: "Dedicated technical support and maintenance services to keep your ERP running smoothly." }
    ];

    const faqs = [
        {
            q: "How do I choose the right ERP Development Company in Pondicherry?",
            a: "Choosing the right ERP Development Company in Pondicherry depends on factors such as industry experience, customization capabilities, technology expertise, implementation process, post-launch support, and the ability to develop ERP software that aligns with your business workflows. A reliable ERP partner should offer scalable solutions that grow with your business."
        },
        {
            q: "How much does custom ERP software development cost?",
            a: "The cost of custom ERP software depends on your business size, required modules, number of users, integrations, deployment model (cloud or on-premise), and overall project complexity. Businesses should choose an ERP solution that fits their operational requirements and future growth rather than focusing only on the initial cost."
        },
        {
            q: "Which industries can benefit from ERP software?",
            a: "ERP software is suitable for businesses across various industries, including manufacturing, retail, healthcare, education, logistics, finance, construction, hospitality, distribution, and service-based organizations. A customized ERP system helps improve efficiency, automate workflows, and centralize business operations regardless of the industry."
        },
        {
            q: "Why choose SysCrop for ERP Development in Pondicherry?",
            a: "SysCrop delivers customized ERP solutions designed around your unique business processes. Our team develops secure, scalable, and feature-rich ERP systems that integrate finance, HR, inventory, sales, procurement, and other business functions into one centralized platform, helping businesses improve productivity and operational efficiency."
        },
        {
            q: "Does SysCrop provide ERP implementation, migration, and ongoing support?",
            a: "Yes. SysCrop offers complete ERP services, including business analysis, custom ERP development, implementation, cloud deployment, legacy ERP migration, third-party integrations, user training, and ongoing maintenance to ensure your ERP system continues to perform efficiently as your business evolves."
        },
        {
            q: "Can SysCrop customize ERP software for my business requirements?",
            a: "Absolutely. Every business operates differently, so SysCrop develops fully customized ERP software tailored to your workflows, departments, and industry requirements. Whether you need CRM, HRMS, Finance, Inventory, Manufacturing, Payroll, or other modules, we build flexible ERP solutions that can be expanded as your business grows."
        }
    ];

    return (
        <main ref={mainRef} className="min-h-screen bg-[#F8FAFC] text-[#011146] selection:bg-[#1A5CDD] selection:text-white font-sans overflow-x-hidden">

            {/* HERO BANNER */}
            <HeaderBanner
                title={
                    <>
                       <span className="text-[#1A5CDD] bg-clip-text text-transparent bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8]">ERP Development</span> in Pondicherry
                    </>
                }
                description="Streamline Operations, Automate Business Workflows & Drive Growth with Tailored Enterprise Solutions."
                primaryBtnText="Discuss Your ERP Project"
                primaryBtnLink="/contact"
            />

            {/* SECTION 1: Intro Hero Section */}
            <section className="py-20 bg-[#F8FAFC] relative overflow-hidden">

                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                        {/* Left Side: Content */}
                        <div className="lg:col-span-6 space-y-6">
                            <span className="hero-animate inline-flex items-center gap-2 bg-white border border-slate-200 text-[#1A5CDD] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-sm">
                                <Briefcase size={14} />
                                Enterprise ERP Solutions
                            </span>

                            <h2 className="hero-animate text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#011146] tracking-tight leading-[1.15]">
                                Transform Your Business with  <br className="hidden lg:block" /> <span className="text-[#1A5CDD]">Custom ERP Development Services</span>
                            </h2>

                            <div className="hero-animate space-y-6 text-slate-600 text-lg md:text-xl md:leading-relaxed font-medium">
                                <p>
                                    Modern businesses need integrated ERP solutions to streamline operations, improve productivity, and support data-driven decision-making. Our intelligent ERP systems simplify complex workflows, automate business processes, and drive long-term growth.
                                </p>
                                <p>
                                    As a trusted provider of <strong className="text-[#011146] font-extrabold">ERP Development in Pondicherry</strong>, we design and develop customized ERP software for startups, SMEs, and enterprises. Our solutions automate daily operations, improve collaboration, and provide real-time business insights across all industries.
                                </p>
                                <p>
                                    If you're looking for a reliable ERP Development Company in Pondicherry, we deliver secure, scalable, and cloud-enabled ERP solutions with end-to-end development, implementation, integration, and ongoing support.
                                </p>
                            </div>

                            <Link
                                href="/contact"
                                className="hero-animate group relative inline-flex items-center gap-3 bg-[#011146] text-white px-8 py-4 rounded-xl font-bold text-[15px] transition-all duration-300 shadow-lg shadow-blue-950/20 hover:bg-[#1A5CDD] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(26,92,221,0.3)] mt-6 overflow-hidden"
                            >
                                <span className="relative z-10">Discuss Your ERP Project</span>
                                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
                            </Link>
                        </div>

                        {/* Right Side Image / Browser Frame */}
                        <div className="lg:col-span-6 relative group flex justify-center lg:justify-end hero-animate">
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
                                                erp.syscorp.com
                                            </span>
                                        </div>
                                    </div>

                                    <Image
                                        src="/images/erp_software_dashboard_hero.png"
                                        alt="ERP Development in Pondicherry"
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

            {/* SECTION 2: What is ERP Software? */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                        {/* Left Column: SaaS Dashboard Visual */}
                        <div className="lg:col-span-5 relative flex justify-center order-2 lg:order-1">
                            <div className="relative w-full max-w-[500px] group">
                                <div className="absolute -inset-1.5 bg-gradient-to-r from-[#1A5CDD] via-[#38bdf8] to-[#011146] rounded-[34px] blur-xl opacity-30 group-hover:opacity-60 transition duration-700 pointer-events-none" />

                                <div className="relative bg-[#03091E] border border-slate-700/80 rounded-[28px] overflow-hidden shadow-[0_25px_60px_rgba(1,17,70,0.3)]">
                                    <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900/90 border-b border-slate-800">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-rose-500/90" />
                                            <div className="w-3 h-3 rounded-full bg-amber-500/90" />
                                            <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
                                            <span className="ml-2 text-xs font-mono text-slate-400">integra-erp-system.v2</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2.5 py-0.5 rounded-full text-[11px] font-mono">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                            Live Analytics
                                        </div>
                                    </div>

                                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-950">
                                        <Image
                                            src="/images/erp_software_dashboard_hero.png"
                                            alt="Custom ERP Software Dashboard in Pondicherry"
                                            width={600}
                                            height={450}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>

                                    <div className="p-4 bg-slate-900/95 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
                                        <span className="flex items-center gap-1.5 font-semibold text-white">
                                            <Shield size={14} className="text-[#38bdf8]" /> Enterprise Grade ERP System
                                        </span>
                                        <span className="font-mono text-[#38bdf8] bg-[#1A5CDD]/20 px-2.5 py-1 rounded-full border border-[#1A5CDD]/30">
                                            Unified Platform
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Content */}
                        <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                            <div className="flex items-center gap-3">
                                <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 text-[#1A5CDD] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider border border-[#1A5CDD]/20 shadow-sm">
                                    <Cpu size={14} />
                                    Core Architecture
                                </span>
                                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                                    What is ERP Software?
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#011146] tracking-tight leading-tight">
                                Centralize, Automate, and Simplify Your Business Operations
                            </h2>

                            <div className="space-y-4 text-slate-600 text-base md:text-[16.5px] leading-[1.8]">
                                <p>
                                    Enterprise Resource Planning (ERP) software is an integrated business management solution that centralizes and automates core business operations within a single platform. It connects departments such as finance, inventory, sales, human resources, procurement, and customer management, enabling seamless information flow across the organization. 
                                </p>
                                <p>
                                    ERP software provides real time access to business data, improves collaboration, eliminates duplicate data entry, automates repetitive tasks, and helps organizations improve operational efficiency, make informed decisions, enhance customer service, and support long term business growth. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* SECTION 3: Why Your Business Needs ERP Software (With Animated ERP Ecosystem Motion Showcase on Right) */}
            <section className="py-20 bg-[#F0F6FF] relative overflow-hidden">
                {/* Background Decorators */}
                <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#1A5CDD]/8 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#38bdf8]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
                    <div className="bg-white/95 backdrop-blur-xl rounded-[36px] p-8 md:p-12 lg:p-14 border border-slate-200/90 shadow-[0_10px_40px_rgba(1,17,70,0.06)] relative overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                            {/* Left Column (55%): Content & Value Points */}
                            <div className="lg:col-span-7 space-y-6">
                                <div className="flex items-center gap-3">
                                    <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 text-[#1A5CDD] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider border border-[#1A5CDD]/20 shadow-sm">
                                        <Zap size={14} />
                                        Strategic Advantage
                                    </span>
                                </div>

                                <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#011146] tracking-tight leading-tight">
                                    Why Your Business Needs ERP Software
                                </h2>

                                <div className="space-y-4 text-slate-600 text-base md:text-[16.5px] leading-[1.8]">
                                    <p>
                                        Managing separate systems for different departments often results in disconnected data, inefficient workflows, and higher operational costs. ERP software integrates all business functions into a single platform, improving efficiency, collaboration, and real-time decision-making.
                                    </p>
                                    <p>
                                        Our ERP Development in Pondicherry helps businesses automate processes, streamline inventory and financial management, strengthen customer relationships, and generate valuable business insights. As a trusted ERP Development Company in Pondicherry, we build secure and scalable ERP solutions that enhance productivity, reduce manual errors, and support long-term business growth.
                                    </p>
                                </div>

                                {/* Key Advantages Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                                    <div className="bg-[#F8FAFC] p-3.5 rounded-2xl border border-slate-200/80">
                                        <span className="text-xs font-extrabold text-[#011146] block mb-1 flex items-center gap-1.5">
                                            <CheckCircle2 size={14} className="text-emerald-500" /> Eliminate Silos
                                        </span>
                                        <span className="text-[11px] text-slate-500 font-medium leading-tight block">
                                            Connect all departments into 1 platform
                                        </span>
                                    </div>
                                    <div className="bg-[#F8FAFC] p-3.5 rounded-2xl border border-slate-200/80">
                                        <span className="text-xs font-extrabold text-[#011146] block mb-1 flex items-center gap-1.5">
                                            <TrendingUp size={14} className="text-[#1A5CDD]" /> Real-Time BI
                                        </span>
                                        <span className="text-[11px] text-slate-500 font-medium leading-tight block">
                                            360° analytics & instant insights
                                        </span>
                                    </div>
                                    <div className="bg-[#F8FAFC] p-3.5 rounded-2xl border border-slate-200/80">
                                        <span className="text-xs font-extrabold text-[#011146] block mb-1 flex items-center gap-1.5">
                                            <Shield size={14} className="text-[#38bdf8]" /> Auto Compliance
                                        </span>
                                        <span className="text-[11px] text-slate-500 font-medium leading-tight block">
                                            Tax, GST & security audit trail
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column (45%): Animated High-Tech ERP Ecosystem Hub */}
                            <div className="lg:col-span-5 relative">
                                <div className="bg-gradient-to-br from-[#011146] via-[#0A1E5C] to-[#011146] rounded-3xl p-6 md:p-8 text-white shadow-2xl border border-white/15 relative overflow-hidden min-h-[460px] flex flex-col justify-between">
                                    {/* Tech Grid Lines & Ambient Glow */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#1A5CDD]/35 rounded-full blur-3xl pointer-events-none" />
                                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `radial-gradient(#38bdf8 1.5px, transparent 1.5px)`, backgroundSize: `24px 24px` }} />

                                    {/* Top Hub Bar */}
                                    <div className="flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
                                        <span className="text-xs font-mono font-bold text-[#38bdf8] flex items-center gap-2">
                                            <Activity size={14} className="animate-pulse text-emerald-400" />
                                            Centralized ERP Engine
                                        </span>
                                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 font-bold">
                                            ● LIVE SYNC
                                        </span>
                                    </div>

                                    {/* Animated Movable Center Matrix */}
                                    <div className="relative py-8 my-auto flex items-center justify-center">

                                        {/* Central Core Pulse Hub */}
                                        <div className="relative z-20 flex items-center justify-center">
                                            <div className="absolute w-28 h-28 bg-[#38bdf8]/20 rounded-full animate-ping pointer-events-none" />
                                            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#1A5CDD] to-[#38bdf8] p-0.5 shadow-[0_0_40px_rgba(56,189,248,0.5)] transform hover:rotate-45 transition-transform duration-700 cursor-pointer">
                                                <div className="w-full h-full bg-[#011146] rounded-[22px] flex items-center justify-center text-white">
                                                    <Layers size={32} className="text-[#38bdf8] animate-pulse" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Floating Movable Node 1: Top Left (CRM) */}
                                        <div className="absolute -top-2 left-0 z-30 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-xl hover:scale-105 transition-transform cursor-pointer animate-[bounce_4s_infinite]">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-[#38bdf8] flex items-center justify-center font-bold">
                                                    <Users size={16} />
                                                </div>
                                                <div>
                                                    <span className="text-[11px] font-bold text-white block leading-tight">CRM & Sales</span>
                                                    <span className="text-[9px] font-mono text-emerald-400 font-bold">99.2% Pipeline</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Floating Movable Node 2: Top Right (Finance) */}
                                        <div className="absolute -top-2 right-0 z-30 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-xl hover:scale-105 transition-transform cursor-pointer animate-[pulse_3s_infinite]">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                                                    <DollarSign size={16} />
                                                </div>
                                                <div>
                                                    <span className="text-[11px] font-bold text-white block leading-tight">Finance & Tax</span>
                                                    <span className="text-[9px] font-mono text-slate-300">GST Auto-Sync</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Floating Movable Node 3: Bottom Left (Inventory) */}
                                        <div className="absolute -bottom-2 left-0 z-30 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-xl hover:scale-105 transition-transform cursor-pointer animate-[pulse_4s_infinite]">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                                                    <Package size={16} />
                                                </div>
                                                <div>
                                                    <span className="text-[11px] font-bold text-white block leading-tight">Stock & Supply</span>
                                                    <span className="text-[9px] font-mono text-amber-400">18.4k SKUs</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Floating Movable Node 4: Bottom Right (BI Analytics) */}
                                        <div className="absolute -bottom-2 right-0 z-30 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-xl hover:scale-105 transition-transform cursor-pointer animate-[bounce_5s_infinite]">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold">
                                                    <BarChart3 size={16} />
                                                </div>
                                                <div>
                                                    <span className="text-[11px] font-bold text-white block leading-tight">Executive BI</span>
                                                    <span className="text-[9px] font-mono text-[#38bdf8]">Real-Time KPIs</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Connecting Dashed SVG Energy Laser Overlay */}
                                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 stroke-[#38bdf8]/40" style={{ strokeDasharray: "4 4" }}>
                                            <line x1="20%" y1="20%" x2="50%" y2="50%" className="animate-pulse" />
                                            <line x1="80%" y1="20%" x2="50%" y2="50%" className="animate-pulse" />
                                            <line x1="20%" y1="80%" x2="50%" y2="50%" className="animate-pulse" />
                                            <line x1="80%" y1="80%" x2="50%" y2="50%" className="animate-pulse" />
                                        </svg>
                                    </div>

                                    {/* Bottom SLA Floating Metric Bar */}
                                    <div className="pt-4 border-t border-white/10 flex items-center justify-between relative z-10 text-[11px] font-mono">
                                        <span className="text-slate-300 flex items-center gap-1.5">
                                            <Zap size={13} className="text-[#38bdf8]" /> 4.2x Workflow Acceleration
                                        </span>
                                        <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                                            Zero Data Loss
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Our ERP Development Services */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
                    <div className="text-center max-w-6xl mx-auto mb-16 space-y-4">
                        <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 text-[#1A5CDD] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider border border-[#1A5CDD]/20 shadow-sm">
                            <Sparkles size={14} />
                            End-to-End Solutions
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#011146] tracking-tight">
                            Our ERP Development Services
                        </h2>
                        <h3 className="text-xl md:text-2xl font-bold text-[#1A5CDD]">
                            End-to-End ERP Development Solutions for Modern Businesses
                        </h3>
                        <div className="space-y-4 text-slate-600 text-base md:text-[17px] leading-[1.8] text-left md:text-center max-w-5xl mx-auto pt-2">
                            <p>
                                At Syscorp, we provide comprehensive ERP Development in Pondicherry that helps businesses automate operations, streamline workflows, and improve overall efficiency. Every organization has unique processes, and our ERP solutions are designed to adapt to your business requirements rather than forcing you to change the way you work. As a trusted ERP Development Company in Pondicherry, we develop scalable, secure, and feature-rich ERP applications that simplify complex business operations and support long-term growth.
                            </p>
                            <p>
                                From consultation and planning to development, implementation, integration, and ongoing support, we deliver complete ERP solutions that centralize your business operations into a single intelligent platform.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {erpServices.map((service, idx) => {
                            const ServiceIcon = service.icon;
                            return (
                                <div
                                    key={idx}
                                    className="bg-white/95 rounded-[32px] p-8 border border-slate-200/90 shadow-[0_10px_35px_rgba(1,17,70,0.05)] hover:shadow-[0_20px_45px_rgba(26,92,221,0.12)] transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1A5CDD]/10 to-transparent rounded-bl-[100px] pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                                    <div>
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#011146] via-[#0A1E5C] to-[#1A5CDD] text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-950/20 group-hover:scale-110 transition-transform">
                                            <ServiceIcon size={26} />
                                        </div>

                                        <h3 className="text-xl font-extrabold text-[#011146] mb-4 group-hover:text-[#1A5CDD] transition-colors leading-snug">
                                            {service.title}
                                        </h3>

                                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                            {service.desc}
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1A5CDD]">
                                        <span className="flex items-center gap-1">
                                            <CheckCircle2 size={14} /> Syscorp Enterprise
                                        </span>
                                        <span className="group-hover:translate-x-1 transition-transform">
                                            <ArrowRight size={14} />
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION 5: ERP Modules We Develop (Sticky Split-Pane Explorer) */}
            <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
                {/* Background Decorators */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#1A5CDD]/5 via-[#38bdf8]/5 to-transparent rounded-bl-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#1A5CDD]/5 via-[#38bdf8]/5 to-transparent rounded-tr-full pointer-events-none" />

                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
                    {/* Header */}
                    <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
                        <span className="inline-flex items-center gap-2 bg-white border border-slate-200 text-[#1A5CDD] px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-sm">
                            <Sparkles size={14} className="text-[#38bdf8]" />
                            Enterprise Architecture
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#011146] tracking-tight leading-tight">
                            ERP Modules We <span className="text-[#1A5CDD] bg-clip-text text-transparent bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8]">Develop</span>
                        </h2>
                        <div className="space-y-4 text-slate-600 text-lg leading-relaxed font-medium max-w-3xl mx-auto pt-2">
                            <p>
                                An ERP system is most effective when every department works together through a single, integrated platform. We develop customized ERP modules that automate workflows and provide real-time visibility.
                            </p>
                        </div>
                    </div>

                    {/* Split Pane Interface */}
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start relative">
                        {/* Left Sidebar: Full Height List */}
                        <div className="w-full lg:w-[380px] shrink-0 rounded-3xl p-3 bg-white border border-slate-200/80 shadow-[0_10px_40px_rgba(1,17,70,0.04)] space-y-2">
                            {erpModules.map((mod, idx) => {
                                const ModIcon = mod.icon;
                                const isActive = activeModuleIndex === idx;
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveModuleIndex(idx)}
                                        className={`w-full flex items-center gap-4 px-5 py-4 rounded-[20px] transition-all duration-300 text-left cursor-pointer group border relative overflow-hidden ${
                                            isActive 
                                                ? "bg-gradient-to-r from-[#F0F6FF] to-white border-[#1A5CDD]/20 shadow-[0_4px_15px_rgba(26,92,221,0.05)]" 
                                                : "bg-transparent border-transparent hover:bg-slate-50 hover:border-slate-100 text-slate-600"
                                        }`}
                                    >
                                        {/* Active State Accent Line (Left edge) */}
                                        {isActive && (
                                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1A5CDD] rounded-l-[20px]" />
                                        )}

                                        <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-colors shadow-sm ${
                                            isActive ? "bg-[#1A5CDD] text-white shadow-[#1A5CDD]/20" : "bg-white border border-slate-200 text-slate-400 group-hover:text-[#1A5CDD] group-hover:border-[#1A5CDD]/30"
                                        }`}>
                                            <ModIcon size={18} />
                                        </div>
                                        <div>
                                            <h4 className={`text-[15px] font-extrabold transition-colors ${isActive ? "text-[#011146]" : "text-slate-600 group-hover:text-[#011146]"}`}>
                                                {mod.title}
                                            </h4>
                                        </div>
                                        {isActive && (
                                            <ChevronRight size={18} className="ml-auto text-[#1A5CDD]" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Right Content Area: Sticky Dynamic Data Hub */}
                        <div className="flex-1 w-full lg:sticky lg:top-32 bg-white rounded-[40px] border border-slate-200/90 shadow-[0_25px_60px_rgba(1,17,70,0.05)] overflow-hidden relative min-h-[500px]">
                            {/* Content Body */}
                            <div className="p-8 md:p-12 relative z-10">
                                {/* Icon & Title */}
                                <div className="flex flex-col sm:flex-row sm:items-end gap-6 mb-8">
                                    <div className="w-24 h-24 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-[#1A5CDD]/10 flex items-center justify-center shrink-0">
                                        {(() => {
                                            const ActiveIcon = erpModules[activeModuleIndex].icon;
                                            return <ActiveIcon size={40} className="text-[#1A5CDD]" />;
                                        })()}
                                    </div>
                                    <div className="pb-2">
                                        <h3 className="text-3xl md:text-4xl font-black text-[#011146] tracking-tight mb-2 leading-tight">
                                            {erpModules[activeModuleIndex].title}
                                        </h3>
                                        <p className="text-lg font-bold text-[#1A5CDD]">
                                            {erpModules[activeModuleIndex].subtitle}
                                        </p>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="text-slate-600 text-[15px] md:text-base leading-relaxed space-y-4 mb-10 max-w-4xl">
                                    {erpModules[activeModuleIndex].desc.split('\n\n').map((paragraph, pIdx) => (
                                        <p key={pIdx}>{paragraph}</p>
                                    ))}
                                </div>

                                {/* Feature Grid */}
                                <div className="bg-[#F8FAFC] rounded-3xl p-8 border border-slate-100">
                                    <h4 className="text-sm font-extrabold text-[#011146] uppercase tracking-wider mb-6 flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-[#1A5CDD]/10 flex items-center justify-center text-[#1A5CDD]">
                                            <Settings size={14} />
                                        </div>
                                        Core Module Capabilities ({erpModules[activeModuleIndex].features.length})
                                    </h4>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                                        {erpModules[activeModuleIndex].features.map((feat, fIdx) => (
                                            <div key={fIdx} className="flex items-start gap-3 group">
                                                <div className="w-5 h-5 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-[#1A5CDD] group-hover:bg-[#1A5CDD] transition-colors shadow-xs">
                                                    <Check size={10} strokeWidth={4} className="text-transparent group-hover:text-white transition-colors" />
                                                </div>
                                                <span className="text-slate-700 text-sm font-semibold group-hover:text-[#011146] transition-colors leading-snug">
                                                    {feat}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Our ERP Development Process (Connected 8-Step Roadmap Grid) */}
            <section className="py-20 bg-white relative overflow-hidden">
                {/* Background Decorators */}
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1A5CDD]/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#38bdf8]/5 rounded-full blur-3xl pointer-events-none" />

                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <div className="space-y-4 max-w-4xl">
                            <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 text-[#1A5CDD] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider border border-[#1A5CDD]/20 shadow-sm">
                                <Workflow size={14} />
                                Agile Roadmap
                            </span>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-[#011146] tracking-tight">
                                Our ERP Development Process
                            </h2>
                            <h3 className="text-xl md:text-2xl font-bold text-[#1A5CDD]">
                                A Structured 8-Step Approach to Successful ERP Implementation
                            </h3>
                            <div className="space-y-4 text-slate-600 text-base md:text-[17px] leading-[1.85] text-left max-w-4xl pt-2">
                                <p>
                                    At Syscorp, we follow a well-defined ERP development process that ensures every solution is delivered with quality, efficiency, and long-term scalability. Our ERP Development in Pondicherry follows industry best practices to reduce implementation risks, improve project transparency, and ensure successful deployment.
                                </p>
                                <p>
                                    Every ERP project begins with understanding your business objectives and ends with continuous support that helps your organization maximize the value of its ERP investment.
                                </p>
                            </div>
                        </div>

                        {/* Slider Navigation Controls */}
                        <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
                            <button 
                                onClick={() => {
                                    if(processSliderRef.current) {
                                        const scrollAmt = window.innerWidth < 768 ? 320 : 380;
                                        processSliderRef.current.scrollBy({ left: -scrollAmt, behavior: 'smooth' });
                                    }
                                }}
                                className="w-12 h-12 rounded-full bg-white border border-slate-200 text-[#011146] flex items-center justify-center hover:bg-[#1A5CDD] hover:text-white hover:border-[#1A5CDD] transition-all shadow-sm"
                                aria-label="Previous Step"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button 
                                onClick={() => {
                                    if(processSliderRef.current) {
                                        const scrollAmt = window.innerWidth < 768 ? 320 : 380;
                                        processSliderRef.current.scrollBy({ left: scrollAmt, behavior: 'smooth' });
                                    }
                                }}
                                className="w-12 h-12 rounded-full bg-white border border-slate-200 text-[#011146] flex items-center justify-center hover:bg-[#1A5CDD] hover:text-white hover:border-[#1A5CDD] transition-all shadow-sm"
                                aria-label="Next Step"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>

                    {/* 8-Step Connected Process Slider */}
                    <div 
                        ref={processSliderRef}
                        className="flex overflow-x-auto gap-6 py-4 -my-4 snap-x snap-mandatory hide-scrollbar relative"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {[
                            {
                                step: "01",
                                title: "Business Analysis",
                                desc: "We analyze your operational workflows, bottlenecks, and growth objectives to define the right ERP architecture.",
                                deliverable: "Strategic ERP Roadmap",
                                icon: BarChart3
                            },
                            {
                                step: "02",
                                title: "Requirement Gathering",
                                desc: "Our team documents functional and technical requirements to create a clear project scope SRS.",
                                deliverable: "Functional Spec SRS",
                                icon: FileText
                            },
                            {
                                step: "03",
                                title: "System Design",
                                desc: "We architect secure database schemas, role-based workflows, and intuitive UI/UX interface mockups.",
                                deliverable: "UI/UX & DB Blueprint",
                                icon: Layout
                            },
                            {
                                step: "04",
                                title: "Custom Development",
                                desc: "Developers engineer tailored ERP modules using modern frameworks following strict security standards.",
                                deliverable: "Core Module Codebase",
                                icon: Cpu
                            },
                            {
                                step: "05",
                                title: "Integration & Migration",
                                desc: "We integrate third-party APIs and securely migrate existing legacy business data with zero data loss.",
                                deliverable: "API & Data Sync",
                                icon: RefreshCw
                            },
                            {
                                step: "06",
                                title: "Testing & Quality Assurance",
                                desc: "Rigorous load, security, user acceptance (UAT), and multi-device performance audits prior to launch.",
                                deliverable: "QA Audit Report",
                                icon: Shield
                            },
                            {
                                step: "07",
                                title: "Deployment",
                                desc: "Staged production deployment onto cloud servers with minimal to zero disruption to daily business.",
                                deliverable: "Production Cloud Launch",
                                icon: Rocket
                            },
                            {
                                step: "08",
                                title: "Training & Support",
                                desc: "Comprehensive user training, ongoing maintenance, security updates, and dedicated technical support.",
                                deliverable: "User Training & SLA Support",
                                icon: Wrench
                            }
                        ].map((proc, idx) => {
                            const ProcIcon = proc.icon;
                            return (
                                <div
                                    key={idx}
                                    className="bg-white rounded-[28px] p-7 border border-slate-200/90 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shrink-0 w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center cursor-grab active:cursor-grabbing"
                                >
                                    {/* Top Accent Line */}
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#011146] via-[#1A5CDD] to-[#38bdf8] opacity-80 group-hover:h-1.5 transition-all" />

                                    <div>
                                        {/* Header Row */}
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#011146] via-[#0A1E5C] to-[#1A5CDD] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                                                <ProcIcon size={22} />
                                            </div>
                                            <span className="text-2xl font-black font-mono text-slate-200 group-hover:text-[#1A5CDD] transition-colors">
                                                {proc.step}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-lg font-extrabold text-[#011146] mb-3 group-hover:text-[#1A5CDD] transition-colors leading-snug">
                                            {proc.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6">
                                            {proc.desc}
                                        </p>
                                    </div>

                                    {/* Deliverable Badge Footer */}
                                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                                        <span className="text-[11px] font-mono font-extrabold uppercase tracking-wider text-[#1A5CDD] bg-[#1A5CDD]/10 px-2.5 py-1 rounded-lg border border-[#1A5CDD]/20 truncate">
                                            ✓ {proc.deliverable}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CSS to hide scrollbar for non-tailwind envs just in case */}
                <style dangerouslySetInnerHTML={{__html: `
                    .hide-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                `}} />
            </section>

            {/* SECTION 7: Why Choose Syscorp for ERP Development in Pondicherry? */}
            <section className="py-20 bg-[#F0F6FF] relative overflow-hidden">
                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
                    <div className="bg-white/95 backdrop-blur-xl rounded-[36px] p-8 md:p-12 lg:p-14 border border-slate-200/90 shadow-[0_10px_40px_rgba(1,17,70,0.06)] relative overflow-hidden">
                        <div className="max-w-4xl mx-auto text-center space-y-4 mb-14">
                            <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 text-[#1A5CDD] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider border border-[#1A5CDD]/20 shadow-sm">
                                <Shield size={14} />
                                Proven Expertise
                            </span>

                            <h2 className="text-3xl md:text-5xl font-extrabold text-[#011146] tracking-tight">
                                Why Choose Syscorp for ERP Development in Pondicherry?
                            </h2>
                            <h3 className="text-xl md:text-2xl font-bold text-[#1A5CDD]">
                                Your Trusted ERP Development Company in Pondicherry
                            </h3>

                            <div className="space-y-4 text-slate-600 text-base md:text-[17px] leading-[1.8] text-left md:text-center pt-2">
                                <p>
                                    Choosing the right technology partner plays a critical role in the success of your ERP project. At Syscorp, we combine technical expertise, industry knowledge, and customer-focused development to deliver ERP solutions that create measurable business value.
                                </p>
                                <p>
                                    As a reliable ERP Development Company in Pondicherry, we work closely with every client to understand their business processes and develop ERP software that improves operational efficiency while supporting future growth.
                                </p>
                            </div>
                        </div>

                        <div className="mb-12">
                            <h4 className="text-center font-extrabold text-xl text-[#011146] mb-8">
                                Why Businesses Trust Syscorp
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {whyTrustSyscorp.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-[#F8FAFC] p-4 rounded-2xl border border-slate-200/80 hover:border-[#1A5CDD]/40 transition-all hover:bg-white shadow-2xs">
                                        <div className="w-8 h-8 rounded-xl bg-[#1A5CDD]/10 text-[#1A5CDD] flex items-center justify-center shrink-0">
                                            <Check size={16} strokeWidth={3} />
                                        </div>
                                        <span className="font-bold text-slate-800 text-sm md:text-base">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-[#011146] via-[#0A1E5C] to-[#1A5CDD] text-white p-6 md:p-8 rounded-3xl text-center max-w-3xl mx-auto shadow-xl">
                            <p className="text-sm md:text-base leading-relaxed font-medium">
                                Whether you're implementing a new ERP system or upgrading an existing one, our ERP Development in Pondicherry is designed to help your business operate more efficiently and stay ahead in an increasingly competitive market.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 8: Stats Grid (Alternative Dark Glassmorphic Enterprise Command Suite) */}
            <section className="py-20 bg-gradient-to-b from-[#011146] via-[#04195B] to-[#011146] text-white relative overflow-hidden">
                {/* Glow Effects & Tech Grid */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#1A5CDD]/25 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#38bdf8]/15 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `radial-gradient(#38bdf8 1.5px, transparent 1.5px)`, backgroundSize: `32px 32px` }} />

                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <span className="inline-flex items-center gap-2 bg-white/10 text-[#38bdf8] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider border border-white/15 backdrop-blur-md shadow-sm">
                            <TrendingUp size={14} />
                            Why Syscorp
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                            Delivering ERP Excellence <span className="text-[#38bdf8] bg-clip-text text-transparent bg-gradient-to-r from-[#38bdf8] to-[#60a5fa]">Across Industries</span>
                        </h2>
                        <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
                            Engineered for high availability, cloud scalability, and continuous business performance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                stat: "150+",
                                label: "Projects Delivered",
                                desc: "Successfully delivering ERP software, web, and enterprise solutions for businesses across multiple industries.",
                                icon: Rocket,
                                tag: "TRACK RECORD",
                                badge: "100% On-Time Delivery"
                            },
                            {
                                stat: "10+",
                                label: "Years Experience",
                                desc: "A decade of expertise in custom software development, system architecture, and digital transformation.",
                                icon: Briefcase,
                                tag: "DOMAIN EXCELLENCE",
                                badge: "Enterprise Architecture"
                            },
                            {
                                stat: "30+",
                                label: "Cloud Experts",
                                desc: "Certified professionals specializing in cloud-native application development, microservices, and infrastructure.",
                                icon: Cloud,
                                tag: "AWS / AZURE / GCP",
                                badge: "Cloud Native Stack"
                            },
                            {
                                stat: "15+",
                                label: "Countries Served",
                                desc: "Supporting businesses across global markets with innovative technology, compliance, and localized systems.",
                                icon: Globe,
                                tag: "GLOBAL FOOTPRINT",
                                badge: "Global Enterprise Reach"
                            },
                            {
                                stat: "99.9%",
                                label: "System Uptime",
                                desc: "Building highly available, resilient ERP systems that ensure uninterrupted business operations and data safety.",
                                icon: Shield,
                                tag: "ENTERPRISE SLA",
                                badge: "High Availability SLA"
                            },
                            {
                                stat: "24/7",
                                label: "Dedicated Support",
                                desc: "Dedicated technical support, proactive maintenance, and security upgrades to keep your ERP running smoothly.",
                                icon: Wrench,
                                tag: "24/7 SLA COVERAGE",
                                badge: "< 15 Min SLA Response"
                            }
                        ].map((st, idx) => {
                            const StatIcon = st.icon;
                            // Helper to split stat for styling
                            const numPart = st.stat.replace('+', '').replace('%', '');
                            const symbolPart = st.stat.includes('+') ? '+' : st.stat.includes('%') ? '%' : '';

                            return (
                                <div
                                    key={idx}
                                    className="bg-[#051130]/40 backdrop-blur-3xl rounded-[32px] p-8 md:p-10 border border-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:bg-[#081845]/60 hover:border-white/[0.15] transition-all duration-500 relative overflow-hidden flex flex-col justify-between group"
                                >
                                    {/* Neon Hover Line */}
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    {/* Ambient Glow */}
                                    <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#38bdf8]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#38bdf8]/20 transition-colors duration-500" />

                                    <div>
                                        {/* Header Row */}
                                        <div className="flex items-center gap-4 mb-10">
                                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-[#38bdf8] flex items-center justify-center group-hover:bg-[#1A5CDD] group-hover:text-white group-hover:border-[#1A5CDD] transition-all duration-500 group-hover:shadow-lg group-hover:shadow-[#1A5CDD]/30 shrink-0">
                                                <StatIcon size={22} />
                                            </div>
                                            <span className="text-[11px] font-mono font-extrabold text-slate-400 uppercase tracking-widest group-hover:text-white transition-colors">
                                                {st.tag}
                                            </span>
                                        </div>

                                        {/* Big Stat Number */}
                                        <div className="flex items-baseline gap-1 mb-4">
                                            <span className="text-5xl md:text-6xl font-black text-white tracking-tighter">
                                                {numPart}
                                            </span>
                                            {symbolPart && (
                                                <span className="text-4xl font-black text-[#38bdf8]">
                                                    {symbolPart}
                                                </span>
                                            )}
                                        </div>

                                        {/* Stat Label */}
                                        <h3 className="text-xl font-bold text-white mb-3">
                                            {st.label}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-slate-400 text-[15px] leading-relaxed">
                                            {st.desc}
                                        </p>
                                    </div>

                                    {/* Footer Highlight Badge */}
                                    <div className="pt-6 mt-8 border-t border-white/[0.08] flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" />
                                        <span className="text-slate-300 font-mono text-[10px] uppercase font-bold tracking-wider">
                                            {st.badge}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION 9: Frequently Asked Questions (FAQs) */}
            <section className="py-20 bg-[#F8FAFC] relative overflow-hidden">
                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                        {/* Left Column Header */}
                        <div className="lg:w-1/3 flex flex-col justify-start lg:sticky">
                            <div className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 rounded-full px-3.5 py-1 text-[11px] font-black text-[#1A5CDD] uppercase tracking-widest mb-6 w-fit shadow-sm">
                                <HelpCircle size={13} />
                                FREQUENTLY ASKED QUESTIONS
                            </div>

                            <h2 className="text-4xl md:text-[44px] font-extrabold text-[#011146] tracking-tight mb-4 leading-[1.15]">
                                Your Questions <br />
                                <span className="text-[#1A5CDD]">Answered</span>
                            </h2>

                            <p className="text-slate-500 text-[15.5px] leading-relaxed mb-8 max-w-sm">
                                Find clear, honest answers to common questions from our team of experienced ERP professionals.
                            </p>

                            <Link
                                href="/contact"
                                className="bg-[#1A5CDD] hover:bg-[#011146] text-white px-6 py-3 rounded-full text-[14px] font-bold transition-colors shadow-lg shadow-blue-900/20 w-fit flex items-center gap-2 mb-10"
                            >
                                Have More Questions? <ArrowRight size={15} />
                            </Link>
                        </div>

                        {/* Right Column FAQ Accordion */}
                        <div className="lg:w-2/3 w-full">
                            <div className="space-y-4">
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
                                                onClick={() => setActiveAccordion(isOpen ? null : index)}
                                                className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                                            >
                                                <span className="font-extrabold text-[17px] text-[#011146] leading-snug">
                                                    {faq.q}
                                                </span>
                                                <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "bg-[#1A5CDD] text-white rotate-180" : "bg-slate-100 text-slate-500"
                                                    }`}>
                                                    <ChevronDown size={18} />
                                                </div>
                                            </button>

                                            {isOpen && (
                                                <div className="px-6 pb-6 pt-2 text-slate-600 text-[15px] leading-relaxed border-t border-slate-100">
                                                    {faq.a}
                                                </div>
                                            )}
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
