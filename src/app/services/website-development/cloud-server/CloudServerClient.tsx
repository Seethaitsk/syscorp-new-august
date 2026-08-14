"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Cloud,
    Server,
    Shield,
    Cpu,
    Database,
    Network,
    Lock,
    Layers,
    Zap,
    Activity,
    RefreshCw,
    CheckCircle,
    ArrowRight,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Sparkles,
    Globe,
    Terminal,
    HardDrive,
    ShieldCheck,
    BarChart3,
    Clock,
    Award,
    TrendingUp,
    Users,
    Check,
    CheckCircle2
} from "lucide-react";
import HeaderBanner from "@/components/ui/HeaderBanner";

export default function CloudServerClient() {
    const mainRef = useRef<HTMLElement>(null);
    const [activeTab, setActiveTab] = useState<"aws" | "azure" | "gcp">("aws");
    const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const processSliderRef = useRef<HTMLDivElement>(null);

    // Auto-slide effect for implementation steps
    useEffect(() => {
        if (!isAutoPlay) return;
        const interval = setInterval(() => {
            if (processSliderRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = processSliderRef.current;
                if (scrollLeft + clientWidth >= scrollWidth - 15) {
                    processSliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
                } else {
                    processSliderRef.current.scrollBy({ left: clientWidth * 0.5, behavior: "smooth" });
                }
            }
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlay]);

    const scrollProcessNext = () => {
        if (processSliderRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = processSliderRef.current;
            if (scrollLeft + clientWidth >= scrollWidth - 10) {
                processSliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                processSliderRef.current.scrollBy({ left: clientWidth * 0.5, behavior: "smooth" });
            }
        }
    };

    const scrollProcessPrev = () => {
        if (processSliderRef.current) {
            processSliderRef.current.scrollBy({ left: -processSliderRef.current.clientWidth * 0.5, behavior: "smooth" });
        }
    };

    // 1. AWS Cloud Services (9 Services)
    const awsServices = [
        {
            title: "Amazon EC2 (Elastic Compute Cloud)",
            desc: "We deploy and manage highly scalable virtual servers for hosting websites, business applications, ERP systems, CRM platforms, and enterprise workloads. Our engineers configure secure EC2 environments with optimized performance, load balancing, and automatic scaling.",
            items: [
                "AWS EC2 Server Deployment",
                "Linux & Windows Server Configuration",
                "Auto Scaling Configuration",
                "Load Balancer Setup",
                "Performance Optimization",
                "High Availability Architecture",
                "Server Monitoring & Maintenance",
                "Security Group Configuration",
                "Virtual Machine Management"
            ]
        },
        {
            title: "Amazon S3 (Simple Storage Service)",
            desc: "Our team implements secure cloud storage solutions that allow businesses to safely store documents, backups, images, videos, application files, and business-critical data with unlimited scalability.",
            items: [
                "Secure Cloud Storage Setup",
                "Data Backup Solutions",
                "Archive Storage",
                "File Sharing Solutions",
                "Lifecycle Management",
                "Cross-Region Replication",
                "Version Control",
                "Storage Cost Optimization",
                "Data Encryption"
            ]
        },
        {
            title: "Amazon RDS (Relational Database Service)",
            desc: "We build and manage fully optimized cloud databases that improve application performance while reducing administrative overhead.",
            items: [
                "MySQL Database Deployment",
                "PostgreSQL Management",
                "SQL Server Hosting",
                "MariaDB Configuration",
                "Oracle Database Management",
                "Automated Backups",
                "Database Scaling",
                "Performance Tuning",
                "Disaster Recovery Planning"
            ]
        },
        {
            title: "Amazon VPC (Virtual Private Cloud)",
            desc: "We create isolated and secure cloud networks that protect business applications while providing complete control over networking, routing, and access permissions.",
            items: [
                "Private Network Design",
                "Subnet Configuration",
                "Route Table Management",
                "Internet Gateway Setup",
                "NAT Gateway Configuration",
                "VPN Connectivity",
                "Secure Network Architecture",
                "Firewall Configuration",
                "Access Control Management"
            ]
        },
        {
            title: "AWS IAM (Identity & Access Management)",
            desc: "Security starts with proper access control. We implement enterprise-grade identity management solutions that protect your AWS infrastructure from unauthorized access.",
            items: [
                "User Management",
                "Role-Based Access Control",
                "Multi-Factor Authentication (MFA)",
                "Permission Policies",
                "Identity Security",
                "Access Monitoring",
                "Security Auditing",
                "Compliance Configuration"
            ]
        },
        {
            title: "AWS Lambda",
            desc: "Build modern serverless applications without maintaining servers. We develop and deploy event-driven applications that automatically scale based on business demand.",
            items: [
                "Serverless Application Development",
                "Event Automation",
                "API Integration",
                "Workflow Automation",
                "Cloud Function Deployment",
                "Performance Monitoring",
                "Cost Optimization"
            ]
        },
        {
            title: "AWS CloudWatch",
            desc: "Continuous monitoring helps businesses maintain application health and infrastructure performance.",
            items: [
                "Infrastructure Monitoring",
                "Resource Monitoring",
                "Performance Metrics",
                "Application Monitoring",
                "Custom Alerts",
                "Log Management",
                "Dashboard Configuration",
                "Incident Notification"
            ]
        },
        {
            title: "AWS Backup",
            desc: "Protect business-critical information through automated cloud backup and disaster recovery planning.",
            items: [
                "Automated Backup Configuration",
                "Database Backup",
                "Server Backup",
                "Application Backup",
                "File Recovery",
                "Backup Scheduling",
                "Disaster Recovery Planning",
                "Data Restoration"
            ]
        },
        {
            title: "AWS Elastic Kubernetes Service (EKS)",
            desc: "Deploy and manage modern containerized applications using Kubernetes without the complexity of managing infrastructure.",
            items: [
                "Kubernetes Cluster Deployment",
                "Container Management",
                "Microservices Architecture",
                "Auto Scaling",
                "CI/CD Integration",
                "Container Security",
                "Monitoring & Maintenance"
            ]
        }
    ];

    // 2. Azure Cloud Services (10 Services)
    const azureServices = [
        {
            title: "Azure Virtual Machines (Azure VM)",
            desc: "Run Windows and Linux virtual servers in a highly secure and scalable cloud environment. We deploy Azure Virtual Machines that support business applications, websites, databases, ERP systems, and enterprise workloads with maximum uptime and performance.",
            items: [
                "Azure Virtual Machine Deployment",
                "Windows & Linux Server Configuration",
                "High Availability Setup",
                "Virtual Machine Scaling",
                "Performance Optimization",
                "Security Hardening",
                "Server Monitoring",
                "Patch Management",
                "Infrastructure Maintenance"
            ]
        },
        {
            title: "Azure App Service",
            desc: "Develop, deploy, and manage web applications and APIs without worrying about infrastructure management. Azure App Service provides a fully managed platform for modern application development.",
            items: [
                "Web Application Deployment",
                "API Hosting",
                "Custom Application Hosting",
                "Continuous Deployment (CI/CD)",
                "SSL Certificate Configuration",
                "Domain Configuration",
                "Application Monitoring",
                "Auto Scaling Configuration"
            ]
        },
        {
            title: "Azure SQL Database",
            desc: "We design and manage secure, fully managed cloud databases that offer excellent performance, automated backups, and high availability for business-critical applications.",
            items: [
                "Azure SQL Database Deployment",
                "Database Migration",
                "Performance Optimization",
                "Automated Backup",
                "High Availability Configuration",
                "Disaster Recovery",
                "Database Security",
                "Monitoring & Maintenance"
            ]
        },
        {
            title: "Azure Blob Storage",
            desc: "Store and manage large amounts of structured and unstructured business data securely using Azure Blob Storage. Ideal for application files, backups, documents, images, videos, and archives.",
            items: [
                "Secure Cloud Storage",
                "Backup Storage Solutions",
                "Archive Storage",
                "Data Lifecycle Management",
                "Storage Optimization",
                "Data Encryption",
                "File Management",
                "Storage Monitoring"
            ]
        },
        {
            title: "Azure Virtual Network (VNet)",
            desc: "Create secure and isolated virtual networks that connect applications, virtual machines, databases, and hybrid infrastructure while maintaining enterprise-level security.",
            items: [
                "Virtual Network Design",
                "Subnet Configuration",
                "VPN Gateway Setup",
                "ExpressRoute Integration",
                "Network Security Groups (NSG)",
                "Firewall Configuration",
                "Secure Connectivity",
                "Network Monitoring"
            ]
        },
        {
            title: "Azure Active Directory (Azure AD)",
            desc: "Secure user identities and control access to cloud applications with Microsoft Azure Active Directory.",
            items: [
                "Identity Management",
                "User Authentication",
                "Role-Based Access Control (RBAC)",
                "Multi-Factor Authentication (MFA)",
                "Single Sign-On (SSO)",
                "User Provisioning",
                "Security Policy Management",
                "Identity Monitoring"
            ]
        },
        {
            title: "Azure Kubernetes Service (AKS)",
            desc: "Deploy, manage, and scale containerized applications efficiently using Azure Kubernetes Service while reducing operational complexity.",
            items: [
                "Kubernetes Cluster Deployment",
                "Container Orchestration",
                "Docker Integration",
                "Application Scaling",
                "CI/CD Integration",
                "Microservices Deployment",
                "Cluster Monitoring",
                "Kubernetes Security"
            ]
        },
        {
            title: "Azure Backup & Site Recovery",
            desc: "Protect business-critical applications and data through automated backup and disaster recovery solutions that ensure business continuity.",
            items: [
                "Automated Cloud Backup",
                "Virtual Machine Backup",
                "Database Backup",
                "File Backup",
                "Disaster Recovery Planning",
                "Site Recovery Configuration",
                "Backup Monitoring",
                "Rapid Data Restoration"
            ]
        },
        {
            title: "Azure Monitor",
            desc: "Gain complete visibility into your cloud infrastructure with real-time monitoring, analytics, and intelligent alerting.",
            items: [
                "Infrastructure Monitoring",
                "Performance Analytics",
                "Resource Monitoring",
                "Log Analytics",
                "Custom Dashboards",
                "Alert Configuration",
                "Application Monitoring",
                "Health Checks"
            ]
        },
        {
            title: "Azure Security Center (Microsoft Defender for Cloud)",
            desc: "Protect your Azure environment with advanced threat detection, compliance management, and proactive security recommendations.",
            items: [
                "Cloud Security Assessment",
                "Threat Detection",
                "Vulnerability Management",
                "Compliance Monitoring",
                "Security Recommendations",
                "Policy Management",
                "Risk Assessment",
                "Continuous Security Monitoring"
            ]
        }
    ];

    // 3. GCP Cloud Services (10 Services)
    const gcpServices = [
        {
            title: "Google Compute Engine",
            desc: "Google Compute Engine provides scalable virtual machines for hosting websites, enterprise applications, databases, ERP systems, CRM platforms, and custom software with enterprise-level reliability.",
            items: [
                "Virtual Machine Deployment",
                "Windows & Linux Server Configuration",
                "Compute Resource Optimization",
                "High Availability Setup",
                "Auto Scaling Configuration",
                "Server Performance Monitoring",
                "Infrastructure Management",
                "Security Hardening",
                "Load Balancing Configuration"
            ]
        },
        {
            title: "Google Kubernetes Engine (GKE)",
            desc: "Deploy, manage, and scale containerized applications using Google's fully managed Kubernetes platform. Our experts simplify container orchestration for modern business applications.",
            items: [
                "Kubernetes Cluster Deployment",
                "Docker Container Management",
                "Microservices Deployment",
                "Container Orchestration",
                "Application Auto Scaling",
                "CI/CD Integration",
                "Cluster Security",
                "Performance Monitoring",
                "Kubernetes Maintenance"
            ]
        },
        {
            title: "Google Cloud Storage",
            desc: "Store, manage, and secure business data with highly durable and scalable cloud storage solutions designed for modern organizations.",
            items: [
                "Secure Cloud Storage Setup",
                "Business File Storage",
                "Backup Storage",
                "Archive Storage",
                "Object Storage Management",
                "Data Lifecycle Policies",
                "Storage Optimization",
                "Data Encryption",
                "Cross-Region Replication"
            ]
        },
        {
            title: "Google Cloud SQL",
            desc: "We deploy and manage fully managed relational databases that provide high performance, automated maintenance, and built-in scalability for business applications.",
            items: [
                "MySQL Deployment",
                "PostgreSQL Deployment",
                "SQL Server Migration",
                "Database Optimization",
                "Automated Backups",
                "High Availability Configuration",
                "Disaster Recovery",
                "Database Monitoring",
                "Performance Tuning"
            ]
        },
        {
            title: "Google Cloud Load Balancing",
            desc: "Ensure fast and reliable application performance by intelligently distributing incoming traffic across multiple cloud resources.",
            items: [
                "Load Balancer Configuration",
                "Traffic Distribution",
                "SSL Configuration",
                "Global Load Balancing",
                "Health Checks",
                "Performance Optimization",
                "Failover Configuration",
                "High Availability Implementation"
            ]
        },
        {
            title: "Google Virtual Private Cloud (VPC)",
            desc: "Create secure, isolated cloud networks that protect your applications and business data while providing complete control over network connectivity.",
            items: [
                "Virtual Network Design",
                "Private Subnet Configuration",
                "Firewall Rule Management",
                "VPN Configuration",
                "Secure Hybrid Connectivity",
                "Network Security",
                "Access Control",
                "Network Monitoring"
            ]
        },
        {
            title: "Google Cloud Functions",
            desc: "Build event-driven serverless applications that automatically scale without managing servers, helping businesses reduce operational costs.",
            items: [
                "Serverless Application Development",
                "Event-Based Automation",
                "API Integration",
                "Workflow Automation",
                "Cloud Function Deployment",
                "Performance Optimization",
                "Monitoring & Maintenance"
            ]
        },
        {
            title: "Google BigQuery",
            desc: "Unlock valuable business insights with Google's powerful cloud data warehouse designed for real-time analytics and business intelligence.",
            items: [
                "Data Warehouse Setup",
                "Business Intelligence Solutions",
                "Real-Time Data Analytics",
                "Data Migration",
                "Query Optimization",
                "Dashboard Integration",
                "Reporting Solutions",
                "Data Visualization Support"
            ]
        },
        {
            title: "Google Cloud Monitoring & Logging",
            desc: "Monitor infrastructure, applications, and cloud resources with comprehensive dashboards, logs, and intelligent alerts to maintain optimal performance.",
            items: [
                "Infrastructure Monitoring",
                "Resource Monitoring",
                "Performance Analytics",
                "Application Monitoring",
                "Log Management",
                "Custom Dashboards",
                "Alert Configuration",
                "Incident Reporting"
            ]
        },
        {
            title: "Google Identity & Access Management (IAM)",
            desc: "Protect your Google Cloud environment with enterprise-grade identity management and secure access control.",
            items: [
                "Identity Management",
                "User Access Control",
                "Role-Based Permissions",
                "Multi-Factor Authentication (MFA)",
                "Security Policy Management",
                "Access Auditing",
                "Compliance Support",
                "Identity Monitoring"
            ]
        }
    ];

    // Why Choose Syscorp (10 Reasons)
    const whyChooseReasons = [
        {
            title: "Certified Cloud Experts",
            desc: "Our experienced cloud professionals specialize in AWS, Microsoft Azure, and Google Cloud Platform, ensuring your cloud infrastructure follows industry best practices and modern architecture standards.",
            icon: Award
        },
        {
            title: "Customized Cloud Solutions",
            desc: "Every business has unique requirements. We design and implement cloud solutions tailored to your applications, workloads, security policies, and long-term business objectives.",
            icon: Cpu
        },
        {
            title: "End-to-End Cloud Migration",
            desc: "From assessment and planning to deployment and post-migration support, we manage the complete cloud migration process with minimal downtime and maximum data integrity.",
            icon: RefreshCw
        },
        {
            title: "Enterprise-Grade Security",
            desc: "We implement advanced security controls, including Identity & Access Management (IAM), Multi-Factor Authentication (MFA), encryption, firewall configuration, network isolation, compliance monitoring, and threat detection to protect your cloud infrastructure.",
            icon: ShieldCheck
        },
        {
            title: "High Availability & Scalability",
            desc: "Our cloud environments are designed with load balancing, auto scaling, failover mechanisms, and disaster recovery strategies to ensure continuous business operations.",
            icon: TrendingUp
        },
        {
            title: "24/7 Monitoring & Managed Support",
            desc: "We continuously monitor your cloud servers, applications, databases, and network resources to identify and resolve issues before they affect your business.",
            icon: Activity
        },
        {
            title: "Cost Optimization",
            desc: "We help businesses optimize cloud spending by selecting the right cloud services, eliminating unused resources, implementing reserved instances, and continuously monitoring cloud usage to maximize return on investment.",
            icon: BarChart3
        },
        {
            title: "Backup & Disaster Recovery",
            desc: "Our comprehensive backup and disaster recovery solutions ensure your business data remains protected and can be restored quickly in case of accidental deletion, cyberattacks, or system failures.",
            icon: HardDrive
        },
        {
            title: "Performance Optimization",
            desc: "We continuously optimize compute resources, storage, databases, networking, and applications to deliver faster performance, improved reliability, and reduced operational costs.",
            icon: Zap
        },
        {
            title: "Dedicated Technical Support",
            desc: "Our cloud specialists provide ongoing consultation, maintenance, troubleshooting, infrastructure upgrades, security enhancements, and performance improvements to keep your cloud environment running smoothly.",
            icon: Users
        }
    ];

    // Deliverables List (15 Capsules)
    const cloudDeliverables = [
        "AWS Cloud Infrastructure Deployment",
        "Microsoft Azure Cloud Solutions",
        "Google Cloud Platform (GCP) Services",
        "Cloud Migration & Modernization",
        "Cloud Infrastructure Management",
        "Cloud Security & Compliance",
        "Server Monitoring & Maintenance",
        "Cloud Storage Solutions",
        "Database Management",
        "Virtual Machine Deployment",
        "Container & Kubernetes Management",
        "Backup & Disaster Recovery",
        "High Availability Architecture",
        "Performance Optimization",
        "24/7 Technical Support"
    ];

    // 6 Implementation Process Steps
    const implementationSteps = [
        {
            step: "01",
            icon: BarChart3,
            title: "Cloud Assessment & Consulting",
            desc: "We begin by understanding your existing IT infrastructure, business objectives, applications, and future growth plans. This enables us to recommend the most suitable cloud platform and deployment strategy for your organization.",
            itemsLabel: "Our Assessment Includes",
            items: [
                "Business Requirement Analysis",
                "Existing Infrastructure Review",
                "Cloud Readiness Assessment",
                "Application & Database Evaluation",
                "Workload Analysis",
                "Cost Planning",
                "Platform Selection (AWS, Azure, GCP)",
                "Migration Roadmap"
            ]
        },
        {
            step: "02",
            icon: Cpu,
            title: "Cloud Architecture & Solution Design",
            desc: "Our cloud architects design a secure, scalable, and future-ready infrastructure tailored to your business requirements. Every solution is built to maximize performance, availability, and security.",
            itemsLabel: "Key Deliverables",
            items: [
                "Cloud Infrastructure Design",
                "Network Architecture",
                "Virtual Private Network Configuration",
                "Storage Architecture",
                "High Availability Planning",
                "Disaster Recovery Design",
                "Security Architecture",
                "Resource Planning"
            ]
        },
        {
            step: "03",
            icon: RefreshCw,
            title: "Cloud Migration & Deployment",
            desc: "We migrate your applications, databases, websites, and workloads with minimal downtime while ensuring data integrity and uninterrupted business operations.",
            itemsLabel: "Migration Services",
            items: [
                "Server Migration",
                "Website Migration",
                "Database Migration",
                "Application Migration",
                "Virtual Machine Deployment",
                "Cloud Server Configuration",
                "Data Synchronization",
                "Deployment Validation"
            ]
        },
        {
            step: "04",
            icon: ShieldCheck,
            title: "Cloud Security & Compliance",
            desc: "Security is integrated into every cloud environment we deploy. We implement enterprise-grade security controls to safeguard your applications and business data.",
            itemsLabel: "Security Features",
            items: [
                "Identity & Access Management (IAM)",
                "Multi-Factor Authentication (MFA)",
                "Firewall Configuration",
                "Data Encryption",
                "Secure Network Configuration",
                "Compliance Implementation",
                "Threat Protection",
                "Security Monitoring"
            ]
        },
        {
            step: "05",
            icon: Zap,
            title: "Performance Optimization",
            desc: "After deployment, we fine-tune your cloud infrastructure to maximize efficiency, improve application performance, and optimize cloud resource utilization.",
            itemsLabel: "Optimization Services",
            items: [
                "Resource Optimization",
                "Auto Scaling Configuration",
                "Load Balancing",
                "Database Performance Tuning",
                "Storage Optimization",
                "Capacity Planning",
                "Cost Optimization",
                "Infrastructure Performance Analysis"
            ]
        },
        {
            step: "06",
            icon: Activity,
            title: "Monitoring & Managed Cloud Support",
            desc: "Our managed support services ensure your cloud infrastructure remains secure, reliable, and optimized through continuous monitoring and proactive maintenance.",
            itemsLabel: "Managed Services Include",
            items: [
                "24/7 Infrastructure Monitoring",
                "Server Health Checks",
                "Performance Monitoring",
                "Backup Management",
                "Security Updates",
                "Incident Response",
                "Preventive Maintenance",
                "Technical Support"
            ]
        }
    ];

    // FAQs (8 Questions)
    const faqs = [
        {
            q: "What cloud platforms does Syscorp support?",
            a: "Syscorp provides comprehensive Cloud Computing Service solutions across leading cloud platforms, including Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). We help businesses select the right platform based on their infrastructure, application requirements, security needs, and budget."
        },
        {
            q: "Why should I choose Syscorp as a Cloud Service Company in Pondicherry?",
            a: "Syscorp is one of the trusted Cloud Service Companies in Pondicherry, offering end-to-end cloud solutions that include cloud consulting, migration, infrastructure deployment, managed services, cloud security, backup, disaster recovery, and continuous support. Our team focuses on delivering secure, scalable, and cost-effective cloud environments that help businesses grow confidently."
        },
        {
            q: "What is a Cloud Computing Service?",
            a: "A Cloud Computing Service allows businesses to access computing resources such as servers, storage, databases, networking, and software over the internet instead of maintaining physical infrastructure. This approach improves scalability, reduces operational costs, and enables secure access to business applications from anywhere."
        },
        {
            q: "Can you migrate our existing applications to the cloud?",
            a: "Yes. We provide complete cloud migration services that include infrastructure assessment, migration planning, application migration, database migration, testing, and post-deployment support. Our experts ensure a smooth migration process with minimal downtime and maximum data integrity."
        },
        {
            q: "Which businesses can benefit from cloud computing?",
            a: "Businesses across industries, including healthcare, education, retail, manufacturing, finance, logistics, real estate, hospitality, IT, and startups, can benefit from cloud technology. Our cloud solutions are customized to meet the operational and security requirements of each business."
        },
        {
            q: "How secure are your cloud solutions?",
            a: "Security is a core part of every solution we deliver. We implement identity and access management, multi-factor authentication, data encryption, firewall protection, continuous monitoring, and backup strategies to safeguard your cloud infrastructure and business data."
        },
        {
            q: "Do you provide managed cloud support after deployment?",
            a: "Yes. Our managed cloud services include 24/7 infrastructure monitoring, performance optimization, security updates, backup management, server maintenance, and technical support. We ensure your cloud environment remains secure, reliable, and optimized as your business grows."
        },
        {
            q: "How do I get started with your Cloud Computing Services?",
            a: "Getting started is simple. Our cloud specialists will assess your current infrastructure, understand your business objectives, recommend the most suitable cloud platform, and develop a customized implementation plan. From consultation to deployment and ongoing support, Syscorp provides complete Cloud Computing Service solutions tailored to your business needs."
        }
    ];

    const currentPlatformServices =
        activeTab === "aws" ? awsServices : activeTab === "azure" ? azureServices : gcpServices;

    return (
        <main ref={mainRef} className="bg-white min-h-screen overflow-x-clip font-sans">
            {/* Header Banner */}
            <HeaderBanner
                title={
                    <>
                        Leading <span className="text-[#1A5CDD] bg-clip-text text-transparent bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8]">Cloud & Server Solutions</span> in Pondicherry
                    </>
                }
                description="Scalable Cloud & Server Services with 99.99% Uptime, Expert Management, and Enterprise-Grade Security"
            />

        {/* SECTION 1: HERO / INTRO SECTION (Light Background) */}
            <section className="py-16 lg:py-20 bg-white relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        {/* Left Side (7 cols) */}
                        <div className="lg:col-span-7 space-y-6">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 text-[#1A5CDD] mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] inline-block animate-pulse" />
                                Enterprise Cloud Infrastructure
                            </span>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#011146] tracking-tight leading-[1.15]">
                                Cloud Server Services <br className="hidden sm:inline" />
                                <span className="bg-gradient-to-r from-[#1A5CDD] via-blue-600 to-[#38bdf8] bg-clip-text text-transparent">
                                    in Pondicherry
                                </span>
                            </h1>

                            <p className="text-lg sm:text-xl font-bold text-[#1A5CDD]">
                                Reliable Cloud Server Solutions in Pondicherry Powered by AWS, Microsoft Azure, Google Cloud & More
                            </p>

                            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                                In today's digital world, businesses need cloud infrastructure that is secure, scalable, and always available. At Syscorp, we provide enterprise-grade Cloud Server in Pondicherry using leading cloud platforms such as Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), VMware Cloud, Kubernetes, and Docker. Whether you're hosting business applications, migrating workloads, managing databases, or building cloud-native solutions, our experts deliver customized cloud environments designed for performance, security, and business growth.
                            </p>

                            <div className="pt-2 flex flex-wrap items-center gap-4">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 rounded-full bg-[#011146] text-white font-extrabold text-sm shadow-xl hover:bg-[#1A5CDD] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3"
                                >
                                    <span>Deploy Your Cloud Server</span>
                                    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                                        <ArrowRight size={15} className="text-white" />
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* Right Side Visual Component (5 cols Overlapping Image Layout) */}
                        <div className="lg:col-span-5 relative w-full h-[450px] sm:h-[500px] flex items-center justify-center mt-10 lg:mt-0">
                            {/* Primary Large Image (Cloud Server Datacenter Rack) */}
                            <div className="relative w-[82%] h-[85%] rounded-[28px] overflow-hidden z-10 group">
                                <Image
                                    src="/images/webdevelopment/cloud_server_services.svg"
                                    alt="Cloud Infrastructure Data Center"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                                <div className="absolute inset-0 bg-slate-900/15 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            {/* Floating Badge (Top Right) */}
                            <div className="absolute top-8 -right-4 lg:-right-6 bg-white px-4 py-2.5 rounded-full shadow-xl flex items-center gap-2.5 border border-slate-100 z-30 animate-bounce-slow">
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                                <p className="text-[#011146] font-extrabold text-[13px]">99.99% Uptime SLA</p>
                            </div>

                            {/* Floating Badge (Bottom Left) */}
                            <div className="absolute bottom-16 -left-4 lg:-left-6 bg-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 z-30 animate-bounce-slow" style={{ animationDelay: "1s" }}>
                                <div className="w-10 h-10 bg-[#EEF4FF] text-[#1A5CDD] rounded-full flex items-center justify-center font-bold text-lg shadow-sm border border-[#1A5CDD]/10">
                                    <Cloud size={20} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <p className="text-[#011146] font-extrabold text-[14px]">Multi-Cloud</p>
                                    <p className="text-slate-500 text-[11px] font-semibold mt-0.5">AWS · Azure · GCP</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: DARK BLUE OVERVIEW CONTAINER (Full-Width Blueprint Enterprise Section) */}
            <section className="py-20 lg:py-20 bg-[#011146] text-white relative overflow-hidden w-full border-t border-b border-white/10">
                {/* Blueprint Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

                {/* Glow spots */}
                <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#1A5CDD]/25 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#38bdf8]/15 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        {/* Left Side Heading (5 cols) */}
                        <div className="lg:col-span-5 pb-8 lg:pb-0 lg:pr-10">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-1 bg-[#38bdf8] rounded-full" />
                                <span className="text-[#38bdf8] text-xs font-black uppercase tracking-widest">
                                    Strategic Vision
                                </span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white mb-4">
                                Enterprise Cloud Environments <br className="hidden sm:inline" />
                                <span className="text-[#38bdf8] bg-clip-text">Built for Growth</span>
                            </h2>
                            <p className="text-slate-300 text-sm font-semibold">
                                Scalable, resilient, and cost-effective multi-cloud infrastructure tailored for modern enterprises.
                            </p>
                        </div>

                        {/* Right Side Content Paragraphs & Feature Badges (7 cols) */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="space-y-4 text-slate-200 text-base sm:text-[16.5px] leading-relaxed">
                                <p className="border-l-2 border-[#38bdf8]/40 pl-4">
                                    Our Cloud Services in Pondicherry help organizations eliminate expensive on-premise infrastructure while improving flexibility, business continuity, and operational efficiency. From startups launching their first application to enterprises managing complex multi-cloud environments, we build cloud solutions that grow with your business.
                                </p>
                                <p className="border-l-2 border-[#1A5CDD]/40 pl-4">
                                    With expertise across multiple cloud platforms, Syscorp offers complete cloud consulting, infrastructure deployment, cloud migration, managed cloud services, security implementation, backup solutions, disaster recovery, and 24/7 monitoring. Every solution is tailored to your organization's specific requirements, ensuring maximum uptime, data protection, and cost optimization.
                                </p>
                            </div>

                            {/* Quick Feature Badges */}
                            <div className="pt-2 flex flex-wrap gap-2.5">
                                <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-slate-200 flex items-center gap-2">
                                    <CheckCircle size={13} className="text-[#38bdf8]" /> Cloud Consulting
                                </span>
                                <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-slate-200 flex items-center gap-2">
                                    <CheckCircle size={13} className="text-[#38bdf8]" /> Infrastructure Deployment
                                </span>
                                <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-slate-200 flex items-center gap-2">
                                    <CheckCircle size={13} className="text-[#38bdf8]" /> Seamless Migration
                                </span>
                                <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-slate-200 flex items-center gap-2">
                                    <CheckCircle size={13} className="text-[#38bdf8]" /> 24/7 Monitoring
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: WHAT IS CLOUD COMPUTING? (Light Mode with Visual Card) */}
            <section className="py-20 lg:py-20 bg-white relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        {/* Left Side (7 cols) */}
                        <div className="lg:col-span-6 space-y-6">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 text-[#1A5CDD]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] inline-block animate-pulse" />
                                Technology Overview
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#011146] tracking-tight">
                                What is Cloud Computing?
                            </h2>
                            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                                Cloud computing delivers servers, storage, databases, networking, software, and security over the internet instead of traditional on-premise infrastructure. It helps businesses access scalable IT resources, reduce infrastructure costs, improve efficiency, and securely manage applications and data from anywhere. As one of the trusted Cloud Service Companies in Pondicherry, we provide reliable Cloud Computing Service solutions that support secure, scalable, and high-performance digital transformation.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 flex items-center gap-3">
                                    <CheckCircle size={18} className="text-[#1A5CDD] shrink-0" />
                                    <span className="text-xs font-bold text-[#011146]">On-Demand Resources</span>
                                </div>
                                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 flex items-center gap-3">
                                    <CheckCircle size={18} className="text-[#1A5CDD] shrink-0" />
                                    <span className="text-xs font-bold text-[#011146]">Zero Capex Hardware</span>
                                </div>
                                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 flex items-center gap-3">
                                    <CheckCircle size={18} className="text-[#1A5CDD] shrink-0" />
                                    <span className="text-xs font-bold text-[#011146]">Secure Access</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side Visual Graphic Container (5 cols Modern Enterprise Card Layout) */}
                        <div className="lg:col-span-6 relative">
                            {/* Ambient Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-br from-[#1A5CDD]/15 to-[#38bdf8]/10 rounded-full blur-3xl -z-10 pointer-events-none" />

                            <div className="relative rounded-[32px] overflow-hidden ">
                                <div className="relative w-full h-[360px] sm:h-[400px]">
                                    <Image
                                        src="/images/webdevelopment/cloud_1.svg"
                                        alt="Modern Cloud Infrastructure & Virtualization"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#011146]/80 via-[#011146]/20 to-transparent" />

                                    {/* Overlay Content Inside Card */}
                                    <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-ping" />
                                            <span className="text-[#38bdf8] text-xs font-black uppercase tracking-wider">Cloud Virtualization</span>
                                        </div>
                                        <h4 className="text-xl font-extrabold text-white">Next-Gen Cloud Architecture</h4>
                                        <p className="text-slate-300 text-xs mt-1">High-performance compute, storage & auto-scaling network layers.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Glass Stat Card (Bottom Right) */}
                            <div className="absolute -bottom-6 -right-2 sm:-right-6 z-20">
                                <div className="bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl shadow-2xl border border-slate-200/80 flex items-center gap-3.5 animate-bounce-slow">
                                    <div className="w-11 h-11 rounded-xl bg-[#1A5CDD] text-white flex items-center justify-center font-bold text-lg shadow-md shadow-blue-500/20">
                                        <Zap size={20} strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <p className="text-[#011146] font-extrabold text-sm leading-none mb-1">Instant Elasticity</p>
                                        <p className="text-[#1A5CDD] text-[11px] font-bold">100% Managed Cloud</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Glass Stat Card (Top Left) */}
                            <div className="absolute -top-4 -left-2 sm:-left-6 z-20">
                                <div className="bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full shadow-xl border border-slate-200/80 flex items-center gap-2">
                                    <ShieldCheck size={16} className="text-emerald-500" />
                                    <span className="text-[#011146] font-extrabold text-xs">Enterprise Security</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: WHY CHOOSE SYSCORP (DARK BLUEPRINT ENTERPRISE HUB - 2-COLUMN GRID) */}
            <section className="py-20 lg:py-20 bg-[#020b29] text-white relative overflow-hidden w-full border-t border-b border-white/10">
                {/* Blueprint Grid Overlay Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

                {/* Glowing Accent Orbs */}
                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#1A5CDD]/25 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#38bdf8]/15 rounded-full blur-[140px] pointer-events-none" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10 space-y-12">
                    {/* Header Row (1 row, 2 columns layout) */}
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-10">
                        {/* Left Side Column */}
                        <div className="lg:col-span-6 space-y-4">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-white/10 border border-white/20 text-white backdrop-blur-md">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] inline-block animate-pulse" />
                                Proven Excellence
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.18]">
                                Why Choose Syscorp as Your 
                                <span className="text-[#38bdf8]"> Cloud Service Company</span> in Pondicherry?
                            </h2>
                        </div>

                        {/* Right Side Text Container */}
                        <div className="lg:col-span-6 bg-[#061238] border border-[#1B2F6E] rounded-[24px] p-6 sm:p-8 space-y-4 shadow-lg">
                            <p className="border-l-2 border-[#38bdf8] pl-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                                Choosing the right cloud partner is essential for building a secure and scalable IT infrastructure. As one of the trusted Cloud Service Companies in Pondicherry, we deliver reliable Cloud Computing Service solutions that help businesses migrate, manage, secure, and optimize their cloud environments using AWS, Microsoft Azure, and Google Cloud Platform (GCP).
                            </p>
                            <p className="border-l-2 border-[#1A5CDD] pl-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                                Among the leading Cloud Computing Companies Pondicherry, we provide secure, high-performance cloud infrastructure with proactive monitoring and ongoing support. Whether you're a startup, SME, or enterprise, our cloud solutions improve operational efficiency, reduce infrastructure costs, and accelerate digital transformation.
                            </p>
                        </div>
                    </div>

                    {/* 10 Reasons Grid in 2-Column Blueprint Card Design (Matching User Image) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {whyChooseReasons.map((reason, idx) => {
                            const IconComponent = reason.icon;
                            return (
                                <div
                                    key={idx}
                                    className="bg-[#061238] border border-[#1B2F6E] hover:border-[#38bdf8]/60 hover:bg-[#091847] rounded-[24px] p-7 transition-all duration-300 group flex flex-col justify-between shadow-lg"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="w-10 h-10 rounded-full bg-[#112356] border border-[#1D3A80] text-[#38bdf8] flex items-center justify-center group-hover:bg-[#1A5CDD] group-hover:text-white transition-all duration-300">
                                                <IconComponent size={20} strokeWidth={2} />
                                            </div>
                                            <span className="w-8 h-8 rounded-full bg-[#0B1A46] border border-[#1D3A80] text-[#38bdf8] text-xs font-extrabold flex items-center justify-center group-hover:border-[#38bdf8]">
                                                0{idx + 1}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-[#38bdf8] transition-colors leading-snug">
                                            {reason.title}
                                        </h3>
                                        <p className="text-slate-300 text-sm leading-relaxed font-normal">
                                            {reason.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION 5: DELIVERABLES SHOWCASE (ANIMATED DUAL-ROW MARQUEE UI) */}
            <section className="py-20 bg-white relative overflow-hidden">
                <style jsx>{`
                    @keyframes marqueeLeft {
                        0% { transform: translateX(0%); }
                        100% { transform: translateX(-50%); }
                    }
                    @keyframes marqueeRight {
                        0% { transform: translateX(-50%); }
                        100% { transform: translateX(0%); }
                    }
                    .animate-marquee-left {
                        animation: marqueeLeft 35s linear infinite;
                    }
                    .animate-marquee-right {
                        animation: marqueeRight 35s linear infinite;
                    }
                    .marquee-container:hover .animate-marquee-left,
                    .marquee-container:hover .animate-marquee-right {
                        animation-play-state: paused;
                    }
                `}</style>

                <div className="container mx-auto px-6 max-w-7xl relative z-10 mb-12">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 text-[#1A5CDD] mb-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] inline-block animate-pulse" />
                                Complete Package
                            </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#011146] tracking-tight">
                            What You Get with Our Cloud Computing Services
                        </h2>
                    </div>
                </div>

                {/* Animated Marquees */}
                <div className="w-full overflow-hidden marquee-container flex flex-col gap-5 relative">
                    {/* Left & Right Fading Edges */}
                    <div className="absolute inset-y-0 left-0 w-24 md:w-44 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-24 md:w-44 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    {/* Row 1: Left Scroll */}
                    <div className="flex w-max animate-marquee-left gap-5">
                        {[...cloudDeliverables.slice(0, 8), ...cloudDeliverables.slice(0, 8)].map((item, index) => (
                            <div
                                key={`row1-${index}`}
                                className="group flex items-center gap-3 bg-slate-50 border border-slate-200/90 px-6 py-3.5 rounded-full hover:border-[#1A5CDD] hover:bg-blue-50/60 hover:shadow-[0_8px_25px_rgba(26,92,221,0.12)] transition-all duration-300 cursor-default whitespace-nowrap hover:-translate-y-0.5"
                            >
                                <div className="w-6 h-6 rounded-full bg-[#1A5CDD] text-white flex items-center justify-center shrink-0 shadow-sm">
                                    <CheckCircle size={14} />
                                </div>
                                <span className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-[#1A5CDD] transition-colors">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Row 2: Right Scroll */}
                    <div className="flex w-max animate-marquee-right gap-5">
                        {[...cloudDeliverables.slice(7), ...cloudDeliverables.slice(7)].map((item, index) => (
                            <div
                                key={`row2-${index}`}
                                className="group flex items-center gap-3 bg-slate-50 border border-slate-200/90 px-6 py-3.5 rounded-full hover:border-[#1A5CDD] hover:bg-blue-50/60 hover:shadow-[0_8px_25px_rgba(26,92,221,0.12)] transition-all duration-300 cursor-default whitespace-nowrap hover:-translate-y-0.5"
                            >
                                <div className="w-6 h-6 rounded-full bg-[#1A5CDD] text-white flex items-center justify-center shrink-0 shadow-sm">
                                    <CheckCircle size={14} />
                                </div>
                                <span className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-[#1A5CDD] transition-colors">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 6: MAJOR DARK NAVY CONTAINER (AWS, AZURE, GCP TABS & SERVICES) */}
            <section className="py-20 lg:py-28 bg-[#011146] text-white relative overflow-hidden w-full border-t border-b border-white/10">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1A5CDD]/25 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#38bdf8]/15 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-white/10 border border-white/20 text-white backdrop-blur-md mb-4">
                            Multi-Cloud Expertise
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-5">
                            Leading Cloud Platforms We Support
                        </h2>
                        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                            Explore our comprehensive services across Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP).
                        </p>
                    </div>

                    {/* Platform Selector Tabs */}
                    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16">
                        <button
                            onClick={() => setActiveTab("aws")}
                            className={`px-6 py-3.5 rounded-2xl font-extrabold text-sm transition-all duration-300 flex items-center gap-2.5 ${activeTab === "aws"
                                ? "bg-gradient-to-r from-[#1A5CDD] to-blue-500 text-white shadow-lg shadow-blue-500/30 scale-105"
                                : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
                                }`}
                        >
                            <Cloud size={18} />
                            <span>Amazon Web Services (AWS)</span>
                        </button>

                        <button
                            onClick={() => setActiveTab("azure")}
                            className={`px-6 py-3.5 rounded-2xl font-extrabold text-sm transition-all duration-300 flex items-center gap-2.5 ${activeTab === "azure"
                                ? "bg-gradient-to-r from-[#1A5CDD] to-blue-500 text-white shadow-lg shadow-blue-500/30 scale-105"
                                : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
                                }`}
                        >
                            <Server size={18} />
                            <span>Microsoft Azure Cloud</span>
                        </button>

                        <button
                            onClick={() => setActiveTab("gcp")}
                            className={`px-6 py-3.5 rounded-2xl font-extrabold text-sm transition-all duration-300 flex items-center gap-2.5 ${activeTab === "gcp"
                                ? "bg-gradient-to-r from-[#1A5CDD] to-blue-500 text-white shadow-lg shadow-blue-500/30 scale-105"
                                : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
                                }`}
                        >
                            <Globe size={18} />
                            <span>Google Cloud Platform (GCP)</span>
                        </button>
                    </div>

                    {/* Active Platform Banner Intro */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-md mb-12">
                        {activeTab === "aws" && (
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                                    AWS Cloud Computing Services in Pondicherry
                                </h3>
                                <p className="text-slate-300 text-base leading-relaxed whitespace-pre-line">
                                    As one of the trusted Cloud Service Companies in Pondicherry, Syscorp delivers end-to-end Amazon Web Services (AWS) solutions that help businesses modernize their IT infrastructure with secure, scalable, and high-performance cloud environments. Our AWS experts design, deploy, migrate, secure, and manage cloud infrastructure for startups, SMEs, and enterprises. Whether you are moving your applications to the cloud or building a cloud-native platform, our Cloud Computing Service ensures maximum availability, business continuity, and operational efficiency.
                                    {"\n\n"}
                                    Being among the growing Cloud Computing Companies Pondicherry, we provide complete AWS consulting, architecture design, migration, security implementation, monitoring, disaster recovery, and ongoing infrastructure management tailored to your business goals.
                                </p>
                            </div>
                        )}

                        {activeTab === "azure" && (
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                                    Microsoft Azure Cloud Computing Services in Pondicherry
                                </h3>
                                <p className="text-slate-300 text-base leading-relaxed whitespace-pre-line">
                                    Syscorp is one of the leading Cloud Service Companies in Pondicherry, delivering secure, scalable, and enterprise-ready Microsoft Azure solutions for businesses across various industries. As experienced Cloud Computing Companies Pondicherry, we help organizations migrate, deploy, manage, and optimize cloud infrastructure using Microsoft Azure's powerful ecosystem. Our Cloud Computing Service enables businesses to improve productivity, strengthen security, reduce infrastructure costs, and achieve greater operational efficiency through intelligent cloud solutions.
                                    {"\n\n"}
                                    Whether you are modernizing legacy applications, building cloud-native solutions, or implementing hybrid cloud infrastructure, our Azure specialists provide end-to-end consulting, migration, deployment, monitoring, and managed services tailored to your business needs.
                                </p>
                            </div>
                        )}

                        {activeTab === "gcp" && (
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                                    Google Cloud Platform (GCP) Cloud Computing Services in Pondicherry
                                </h3>
                                <p className="text-slate-300 text-base leading-relaxed whitespace-pre-line">
                                    As one of the trusted Cloud Service Companies in Pondicherry, Syscorp provides end-to-end Google Cloud Platform (GCP) solutions that help businesses build secure, scalable, and high-performance cloud environments. Our certified cloud engineers assist startups, SMEs, and enterprises in deploying, migrating, managing, and optimizing workloads on Google Cloud. As one of the reliable Cloud Computing Companies Pondicherry, we deliver innovative Cloud Computing Service solutions that improve business agility, reduce infrastructure costs, and accelerate digital transformation.
                                    {"\n\n"}
                                    Whether you need cloud hosting, application modernization, AI-powered solutions, containerized applications, or enterprise-grade storage, our Google Cloud experts ensure your business benefits from Google's global infrastructure, advanced security, and intelligent cloud technologies.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Services Grid for Active Platform */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {currentPlatformServices.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between backdrop-blur-sm group"
                            >
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1A5CDD] to-blue-500 text-white flex items-center justify-center shrink-0 font-extrabold text-sm shadow-md">
                                            #{idx + 1}
                                        </div>
                                        <h4 className="text-xl font-extrabold text-white group-hover:text-[#38bdf8] transition-colors leading-snug">
                                            {item.title}
                                        </h4>
                                    </div>

                                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                                        {item.desc}
                                    </p>
                                </div>

                                <div>
                                    <h5 className="text-xs font-black uppercase tracking-wider text-[#38bdf8] mb-3">
                                        What We Do
                                    </h5>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {item.items.map((subItem, sIdx) => (
                                            <div
                                                key={sIdx}
                                                className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-xl text-xs font-semibold text-slate-200"
                                            >
                                                <CheckCircle size={13} className="text-[#38bdf8] shrink-0" />
                                                <span className="truncate">{subItem}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 7: OUR CLOUD IMPLEMENTATION PROCESS (PREMIUM INTERACTIVE SLIDER HUB) */}
            <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
                {/* Background Ambient Glows */}
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-50/80 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-50/60 rounded-full blur-3xl pointer-events-none" />

                <style jsx>{`
                    .hide-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                    .hide-scrollbar {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                `}</style>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="max-w-3xl mx-auto text-center mb-14">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 text-[#1A5CDD] mb-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] inline-block animate-pulse" />
                                Proven Methodology
                            </span>
                        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#011146] tracking-tight mb-4 leading-tight">
                            Our Cloud Implementation Process
                        </h2>
                        <p className="text-lg font-bold text-[#1A5CDD] mb-8">
                            A Strategic Approach to Successful Cloud Transformation
                        </p>

                        {/* Enhanced Intro Box */}
                        <div className="bg-gradient-to-r from-blue-50/90 via-slate-50 to-indigo-50/70 border border-blue-100/90 rounded-[28px] p-6 sm:p-8 text-slate-700 text-sm sm:text-base leading-relaxed text-left relative overflow-hidden shadow-sm">
                            <div className="w-1.5 h-full bg-gradient-to-b from-[#1A5CDD] to-[#38bdf8] absolute left-0 top-0" />
                            <p className="pl-3">
                                As one of the trusted <strong className="text-[#011146] font-bold">Cloud Service Companies in Pondicherry</strong>, Syscorp follows a proven implementation methodology to deliver secure, scalable, and high-performing cloud environments. Our Cloud Computing Service covers every stage of the cloud journey—from planning and architecture to migration, optimization, and ongoing management. Whether you're adopting AWS, Microsoft Azure, or Google Cloud Platform (GCP), our experts ensure a seamless transition with minimal disruption to your business operations.
                            </p>
                        </div>
                    </div>

                    {/* Slider Header Control Bar */}
                    <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200/80">
                        <div className="flex items-center gap-3">
                            <span className="w-3 h-3 rounded-full bg-[#1A5CDD] animate-pulse" />
                            <span className="text-xs sm:text-sm font-extrabold text-[#011146] uppercase tracking-wider">
                                Implementation Roadmap (Phase 01 - 0{implementationSteps.length})
                            </span>
                        </div>

                        {/* Rounded Arrow Buttons */}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={scrollProcessPrev}
                                aria-label="Previous Phase"
                                className="w-11 h-11 rounded-2xl bg-white border border-slate-200 text-[#011146] hover:bg-[#1A5CDD] hover:text-white hover:border-[#1A5CDD] shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center group active:scale-95"
                            >
                                <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
                            </button>
                            <button
                                onClick={scrollProcessNext}
                                aria-label="Next Phase"
                                className="w-11 h-11 rounded-2xl bg-white border border-slate-200 text-[#011146] hover:bg-[#1A5CDD] hover:text-white hover:border-[#1A5CDD] shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center group active:scale-95"
                            >
                                <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Process Cards Horizontal Slider */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsAutoPlay(false)}
                        onMouseLeave={() => setIsAutoPlay(true)}
                    >
                        <div
                            ref={processSliderRef}
                            className="flex items-stretch overflow-x-auto gap-5 snap-x snap-mandatory hide-scrollbar pb-4 pt-1 px-1 scroll-smooth"
                        >
                            {implementationSteps.map((stepItem, idx) => {
                                const StepIcon = stepItem.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="w-full lg:w-[calc(50%-0.625rem)] shrink-0 snap-start bg-slate-50/60 border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between relative overflow-hidden"
                                    >
                                        <div>
                                            {/* Header Row: Icon Badge + Phase Pill + Watermark */}
                                            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200/70">
                                                <div className="flex items-center gap-2.5">
                                                    <div className="w-10 h-10 rounded-xl bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 text-[#1A5CDD] flex items-center justify-center">
                                                        <StepIcon size={19} strokeWidth={2.2} />
                                                    </div>
                                                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 text-[#1A5CDD]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] inline-block animate-pulse" />
                                Phase {stepItem.step}
                            </span>
                                                </div>

                                                <span className="text-2xl font-black text-slate-300 select-none font-mono">
                                                    {stepItem.step}
                                                </span>
                                            </div>

                                            <h3 className="text-lg sm:text-xl font-extrabold text-[#011146] mb-2 leading-snug">
                                                {stepItem.title}
                                            </h3>

                                            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                                                {stepItem.desc}
                                            </p>
                                        </div>

                                        {/* Deliverables Sub-items Compact Grid */}
                                        <div className="pt-4 border-t border-slate-200/70">
                                            <div className="flex items-center gap-2 mb-3">
                                                <div className="w-2 h-2 rounded-full bg-[#1A5CDD]" />
                                                <h4 className="text-xs font-black uppercase tracking-wider text-[#1A5CDD]">
                                                    {stepItem.itemsLabel}
                                                </h4>
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                {stepItem.items.map((subItem, sIdx) => (
                                                    <div
                                                        key={sIdx}
                                                        className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-white border border-slate-200/80 px-3 py-2 rounded-lg"
                                                    >
                                                        <CheckCircle size={13} className="text-[#1A5CDD] shrink-0" />
                                                        <span className="leading-snug">{subItem}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 8: FREQUENTLY ASKED QUESTIONS (FAQS - 2-COLUMN SPLIT) */}
            <section className="py-20 bg-[#F8FAFC] relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                        {/* Left Column: Heading & Sticky Context */}
                        <div className="lg:w-5/12">
                            <div className="lg:sticky">
                                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 text-[#1A5CDD] mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] inline-block animate-pulse" />
                                Got Questions?
                            </span>

                                <h2 className="text-3xl md:text-5xl font-extrabold text-[#011146] tracking-tight leading-[1.15] mb-6">
                                    Frequently Asked <br />
                                    <span className="bg-gradient-to-r from-[#1A5CDD] to-[#2E8BFF] bg-clip-text text-transparent">
                                        Questions (FAQs)
                                    </span>
                                </h2>

                                <p className="text-slate-600 text-[16.5px] leading-relaxed mb-8">
                                    Find clear, transparent answers to common questions about our cloud server services, cloud migration, security, and platforms in Pondicherry.
                                </p>

                                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-[#1A5CDD]/10 text-[#1A5CDD] flex items-center justify-center shrink-0">
                                        <CheckCircle size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-extrabold text-[#011146] text-sm">Need Cloud Advice?</h4>
                                        <p className="text-xs text-slate-500 font-medium mt-0.5">Our certified cloud architects are available to guide your deployment.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: FAQ Accordion Points */}
                        <div className="lg:w-7/12 space-y-4">
                            {faqs.map((faq, index) => {
                                const isOpen = activeAccordion === index;
                                return (
                                    <div
                                        key={index}
                                        className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-white ${isOpen
                                            ? "border-[#1A5CDD] shadow-xl shadow-blue-900/5 ring-1 ring-[#1A5CDD]/30"
                                            : "border-slate-200/80 hover:border-slate-300"
                                            }`}
                                    >
                                        <button
                                            onClick={() => setActiveAccordion(isOpen ? null : index)}
                                            className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                                        >
                                            <h3 className="text-[17px] font-extrabold text-[#011146] pr-6 group-hover:text-[#1A5CDD] transition-colors leading-snug">
                                                
                                                {index + 1}. {faq.q}
                                            </h3>
                                            <div
                                                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? "bg-[#1A5CDD] text-white rotate-180" : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                                                    }`}
                                            >
                                                <ChevronDown size={18} />
                                            </div>
                                        </button>
                                        {isOpen && (
                                            <div className="px-6 pb-6 text-slate-600 text-[15.5px] leading-relaxed border-t border-slate-100 pt-4">
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
