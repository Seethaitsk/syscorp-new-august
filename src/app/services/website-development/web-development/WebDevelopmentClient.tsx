"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Globe, Code, Cpu, Layers, Zap, Shield, ArrowRight, CheckCircle2,
    Smartphone, ShoppingCart, Server, ArrowUpRight, Sparkles, TrendingUp,
    Database, Terminal, BarChart3, ChevronDown, Check, Activity, Lock,
    Settings, Wrench, Search, LayoutDashboard, Monitor, RefreshCw,
    Users, Building2, Stethoscope, GraduationCap, Home, Utensils,
    Palmtree, Truck, Flower2, Scale, DollarSign, HelpCircle, Laptop,
    Cloud, HardDrive, FileText, CheckCircle, Target, Star
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderBanner from "@/components/ui/HeaderBanner";
// slider//
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function WebDevelopmentClient() {
    const mainRef = useRef<HTMLDivElement>(null);
    const [activeAccordion, setActiveAccordion] = useState<number | null>(0);


    const services = [
        {
            id: "custom-website",
            title: "Custom Website Development",
            image: "/images/webdevelopment/1.png",
            tag: "Custom Architecture",
            icon: Code,
            desc: "Every business has unique goals, and your website should represent your brand, services, and vision effectively. Our Custom Website Development Services focus on creating personalized websites that match your business objectives and customer expectations.\n\nAs a leading Web Development Company in Pondicherry, we develop scalable, secure, and SEO-optimized websites that provide seamless performance across all devices. From planning and design to development and deployment, we ensure every website delivers a smooth user experience and supports business growth.",
            features: [
                "Unique website design and development",
                "Customized features and functionality",
                "Mobile-responsive layouts",
                "SEO-friendly website structure",
                "Secure coding practices",
                "Scalable website architecture",
            ],
        },
        {
            id: "business-website",
            title: "Business Website Development",
            image: "/images/webdevelopment/2.png",
            tag: "Corporate & Brand",
            icon: Building2,
            desc: "Your website is often the first interaction customers have with your business. A professionally designed business website helps you create a strong first impression and build trust with your audience.\n\nOur Business Website Development Services help companies showcase their products, services, expertise, and brand values through modern and engaging websites.",
            features: [
                "Professional and visually appealing",
                "Easy to manage and update",
                "Optimized for search engines",
                "Fast and responsive",
                "Designed to generate leads",
            ],
        },
        {
            id: "ecommerce-website",
            title: "Ecommerce Website Development",
            image: "/images/webdevelopment/3.png",
            tag: "High Conversion Store",
            icon: ShoppingCart,
            desc: "Our Ecommerce Website Development Services help businesses launch powerful online stores that increase sales and improve customer satisfaction.",
            features: [
                "Product management systems",
                "Secure payment gateway integration",
                "Shopping cart functionality",
                "Customer account features",
                "Order management systems",
                "Mobile-friendly shopping experience",
                "SEO-friendly ecommerce structure",
            ],
        },
        {
            id: "web-application",
            title: "Web Application Development",
            image: "/images/webdevelopment/4.png",
            tag: "SaaS & Cloud Software",
            icon: Cpu,
            desc: "Businesses today need powerful digital solutions to automate processes, improve productivity, and deliver better services. Our Web Application Development Services provide customized applications designed around your business needs.",
            features: [
                "Business automation",
                "Customer management systems",
                "Booking platforms",
                "Internal management tools",
                "Data-driven applications",
                "Enterprise solutions",
            ],
        },
        {
            id: "responsive-website",
            title: "Responsive Website Development",
            image: "/images/webdevelopment/5.png",
            tag: "Cross-Device Fluidity",
            icon: Smartphone,
            desc: "With users accessing websites from multiple devices, responsive design is essential for online success. Our Responsive Website Development Services ensure your website delivers an excellent experience on desktops, tablets, and smartphones.",
            features: [
                "Fast loading speed",
                "Easy navigation",
                "Clear content presentation",
                "Better user engagement",
                "Improved SEO performance",
            ],
        },
        {
            id: "cms-website",
            title: "CMS Website Development",
            image: "/images/webdevelopment/6.png",
            tag: "Easy Content Control",
            icon: LayoutDashboard,
            desc: "Managing website content should be simple and efficient. Our CMS development solutions allow businesses to easily update website pages, images, blogs, and other content without technical expertise.",
            features: [
                "User-friendly dashboards",
                "Custom layouts",
                "Content management features",
                "Plugin integration",
                "SEO optimization support",
            ],
        },
        {
            id: "website-maintenance",
            title: "Website Maintenance & Support",
            image: "/images/webdevelopment/7.png",
            tag: "24/7 Technical Support",
            icon: Settings,
            desc: "A website requires regular updates and maintenance to maintain security, performance, and reliability. Our website maintenance services help businesses keep their websites running smoothly.",
            features: [
                "Website updates",
                "Security monitoring",
                "Performance optimization",
                "Bug fixing",
                "Backup management",
                "Technical support",
            ],
        },
    ];

    const processSteps = [
        {
            step: "1",
            title: "Requirement Analysis & Business Consultation",
            desc: "Every successful website begins with understanding your business objectives. As a trusted Web Development Company in Pondicherry, we take time to understand your industry, target audience, competitors, and business goals before planning the project. This discovery phase helps us recommend the right technologies, features, and development approach that align with your long-term vision."
        },
        {
            step: "2",
            title: "Website Planning & Strategy",
            desc: "A strong strategy is the foundation of every successful website. Our experts prepare a detailed development roadmap covering website architecture, user flow, sitemap, functionality, design approach, and project milestones. As an experienced Software Company in Pondicherry, we ensure every website is planned for scalability, performance, and future business growth."
        },
        {
            step: "3",
            title: "UI/UX Design",
            desc: "Our designers create modern, user-friendly, and visually engaging interfaces that reflect your brand identity. Every layout is designed to provide an excellent browsing experience across desktops, tablets, and smartphones. As a reliable Web Development Company in Pondicherry, we focus on intuitive navigation, responsive layouts, and conversion-focused designs that improve customer engagement."
        },
        {
            step: "4",
            title: "Website Development",
            desc: "Once the design is approved, our developers transform your ideas into a fully functional website using modern technologies and industry best practices. Our Web Development Services in Pondicherry include responsive coding, secure backend development, database integration, API implementation, and performance optimization to ensure your website is fast, reliable, and future-ready."
        },
        {
            step: "5",
            title: "Testing & Quality Assurance",
            desc: "Before launch, every website undergoes comprehensive quality testing. Our Web Development Company in Pondicherry performs functionality testing, browser compatibility checks, mobile responsiveness testing, website speed optimization, security validation, and bug fixing to ensure your website performs flawlessly across all devices and browsers."
        },
        {
            step: "6",
            title: "Website Deployment",
            desc: "After successful testing and client approval, we deploy your website to the live server with minimal downtime. Our team performs final technical checks, SEO configuration, performance optimization, and security verification to ensure a smooth and successful launch. As a trusted Web Development Company in Pondicherry, we ensure your website is fully optimized before it goes live."
        },
        {
            step: "7",
            title: "Website Maintenance & Continuous Support",
            desc: "Launching your website is only the beginning. Our Professional Web Development Services include ongoing maintenance, security updates, regular backups, performance monitoring, bug fixes, and technical support. As your long-term Web Development Company in Pondicherry, we help keep your website secure, updated, and performing at its best while supporting your business as it grows."
        }
    ];
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            align: "start",
            loop: false,
        },
        [Autoplay({ delay: 4000 })]
    );
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on("select", onSelect);
        onSelect();

        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi]);
    const [activeIndex, setActiveIndex] = useState(0);
    const whyChooseReasons = [
        {
            title: "Experienced Web Development Team",
            desc: "Our team of skilled designers, developers, and project managers has extensive experience in delivering websites across various industries. As a leading Web Development Company in Pondicherry, we stay updated with the latest technologies and development standards to build websites that perform exceptionally well.",
            icon: Users
        },
        {
            title: "Customized Website Solutions",
            desc: "Every business is different, and so are its digital requirements. We create tailor-made website solutions that align with your business objectives, brand identity, and customer expectations, ensuring your website stands out in a competitive market.",
            icon: Code
        },
        {
            title: "SEO-Friendly Website Development",
            desc: "A great website should also be easy to find online. Our Web Development Company in Pondicherry follows SEO best practices during development, including clean coding, optimized page structures, fast loading speeds, mobile responsiveness, and search engine-friendly architecture to improve your website's visibility.",
            icon: Search
        },
        {
            title: "Mobile-Responsive Design",
            desc: "With mobile users growing every day, responsive design is no longer optional. We build websites that provide a seamless browsing experience across desktops, tablets, and smartphones, ensuring your customers can access your business anytime, anywhere.",
            icon: Smartphone
        },
        {
            title: "Secure & Reliable Development",
            desc: "Security is at the core of our development process. From secure coding practices and SSL implementation to regular updates and data protection measures, we build websites that safeguard your business and customer information.",
            icon: Shield
        },
        {
            title: "Scalable & Future-Ready Solutions",
            desc: "As your business grows, your website should grow with it. Our scalable development approach ensures your website can accommodate new features, increased traffic, and future business expansion without compromising performance.",
            icon: Layers
        },
        {
            title: "High-Performance Websites",
            desc: "Website speed directly impacts user experience and search rankings. Our Professional Web Development Services focus on optimizing website performance, reducing loading times, improving Core Web Vitals, and delivering smooth navigation across all devices.",
            icon: Zap
        },
        {
            title: "Transparent Communication",
            desc: "We believe successful projects are built on collaboration. Throughout the development process, we keep you informed with regular updates, clear timelines, and open communication, ensuring your vision is reflected in the final product.",
            icon: Activity
        },
        {
            title: "On-Time Project Delivery",
            desc: "We understand the importance of meeting deadlines. Our structured development process and dedicated project management ensure your website is delivered on schedule without compromising quality.",
            icon: CheckCircle2
        },
        {
            title: "Ongoing Website Maintenance & Support",
            desc: "Our partnership doesn't end after your website is launched. As a reliable Web Development Company in Pondicherry, we provide continuous maintenance, security updates, technical support, performance optimization, and feature enhancements to keep your website running smoothly and efficiently.",
            icon: RefreshCw
        }
    ];

    const techCategories = [
        {
            category: "Frontend Technologies",
            desc: "Our frontend development team creates responsive, interactive, and user-friendly website interfaces using modern frontend technologies such as HTML5, CSS3, JavaScript, React.js, Angular, Vue.js, and Bootstrap. We focus on developing visually appealing designs with smooth navigation, fast loading speed, and excellent user experience across desktops, tablets, and mobile devices. Our frontend solutions help businesses deliver engaging digital experiences that improve customer satisfaction and online performance.",
            icon: Monitor,
            tags: ["HTML5", "CSS3", "JavaScript", "React.js", "Angular", "Vue.js", "Bootstrap"]
        },
        {
            category: "Backend Technologies",
            desc: "A powerful backend is the foundation of a reliable website or web application. Our backend development experts use advanced technologies including PHP, Laravel, Node.js, Python, ASP.NET, and CodeIgniter to create secure, scalable, and high-performance solutions. From server-side programming and database management to business logic implementation and API development, we build robust backend systems that ensure smooth functionality, better security, and seamless performance.",
            icon: Server,
            tags: ["PHP", "Laravel", "Node.js", "Python", "ASP.NET", "CodeIgniter"]
        },
        {
            category: "CMS Platforms",
            desc: "We develop flexible and easy-to-manage websites using popular Content Management System (CMS) platforms such as WordPress, WooCommerce, Shopify, and custom CMS solutions. Our CMS development services allow businesses to easily manage website content, update pages, publish blogs, manage products, and make changes without requiring advanced technical knowledge. Whether you need a simple business website or a complete online store, our CMS solutions provide flexibility, security, and ease of management.",
            icon: LayoutDashboard,
            tags: ["WordPress", "WooCommerce", "Shopify", "Custom CMS"]
        },
        {
            category: "Database Management",
            desc: "Efficient database management plays an important role in website performance and application reliability. Our developers work with advanced database technologies including MySQL, PostgreSQL, MongoDB, and Microsoft SQL Server to create secure and optimized database structures. We design database solutions that support fast data processing, smooth application operations, secure information storage, and future scalability for growing businesses.",
            icon: Database,
            tags: ["MySQL", "PostgreSQL", "MongoDB", "Microsoft SQL Server"]
        },
        {
            category: "Cloud & Hosting Solutions",
            desc: "Reliable hosting and cloud infrastructure are essential for maintaining website speed, security, and availability. At SysCrop, we deploy websites and applications on trusted cloud platforms and hosting solutions to ensure excellent performance. We help businesses achieve better scalability, improved website performance, enhanced security, and reliable uptime through efficient cloud and hosting solutions.",
            icon: Cloud,
            items: [
                "Amazon Web Services (AWS)",
                "Microsoft Azure",
                "Google Cloud Platform (GCP)",
                "cPanel Hosting Solutions"
            ]
        },
        {
            category: "API & Third-Party Integrations",
            desc: "Modern websites and applications require seamless connections with multiple business tools and platforms. Our API Integration Services help businesses enhance website functionality and automate different operations. Our API integration solutions help businesses improve workflow efficiency, provide better customer experiences, and create a connected digital ecosystem.",
            icon: Zap,
            items: [
                "Payment gateways",
                "CRM systems",
                "ERP software",
                "Email marketing platforms",
                "Social media platforms",
                "Booking systems",
                "Maps and location services",
                "Business automation tools"
            ]
        },
        {
            category: "Development Tools & Practices",
            desc: "Along with advanced technologies, our development team follows modern coding practices and industry standards to deliver reliable digital solutions. By combining the right technologies with proven development practices, SysCrop delivers web solutions that are secure, efficient, and built for long-term business success.",
            icon: Settings,
            items: [
                "Clean and optimized code structure",
                "Secure development practices",
                "Responsive design principles",
                "Performance optimization",
                "SEO-friendly development",
                "Scalable website architecture",
                "Continuous testing and quality assurance"
            ]
        }
    ];

    const industries = [
        { title: "IT & Software Companies", icon: Code, color: "text-blue-600 bg-blue-50 border-blue-100 group-hover:bg-blue-500" },
        { title: "Healthcare", icon: Stethoscope, color: "text-rose-600 bg-rose-50 border-rose-100 group-hover:bg-rose-500" },
        { title: "Educational Institutions", icon: GraduationCap, color: "text-emerald-600 bg-emerald-50 border-emerald-100 group-hover:bg-emerald-500" },
        { title: "Manufacturing", icon: Wrench, color: "text-slate-700 bg-slate-100 border-slate-200 group-hover:bg-slate-600" },
        { title: "Real Estate", icon: Home, color: "text-indigo-600 bg-indigo-50 border-indigo-100 group-hover:bg-indigo-500" },
        { title: "Retail Businesses", icon: ShoppingCart, color: "text-purple-600 bg-purple-50 border-purple-100 group-hover:bg-purple-500" },
        { title: "Restaurants", icon: Utensils, color: "text-orange-600 bg-orange-50 border-orange-100 group-hover:bg-orange-500" },
        { title: "Hotels", icon: Palmtree, color: "text-sky-600 bg-sky-50 border-sky-100 group-hover:bg-sky-500" },
        { title: "Financial Services", icon: DollarSign, color: "text-emerald-600 bg-emerald-50 border-emerald-100 group-hover:bg-emerald-500" },
        { title: "Construction Companies", icon: Building2, color: "text-amber-600 bg-amber-50 border-amber-100 group-hover:bg-amber-500" },
        { title: "Logistics", icon: Truck, color: "text-cyan-600 bg-cyan-50 border-cyan-100 group-hover:bg-cyan-500" },
        { title: "eCommerce Businesses", icon: ShoppingCart, color: "text-indigo-600 bg-indigo-50 border-indigo-100 group-hover:bg-indigo-500" },
        { title: "Professional Services", icon: Users, color: "text-blue-600 bg-blue-50 border-blue-100 group-hover:bg-blue-500" },
        { title: "Startups", icon: Zap, color: "text-purple-600 bg-purple-50 border-purple-100 group-hover:bg-purple-500" },
        { title: "Enterprises", icon: Shield, color: "text-[#011146] bg-slate-100 border-slate-200 group-hover:bg-[#011146]" }
    ];

    const faqs = [
        {
            q: "Why should I choose SysCrop as my Web Development Company in Pondicherry?",
            a: "SysCrop is a trusted Web Development Company in Pondicherry that delivers responsive, secure, and SEO-friendly websites tailored to your business needs. From business websites and eCommerce platforms to custom web applications, our experienced team provides end-to-end web development solutions that help businesses build a strong online presence and achieve long-term growth."
        },
        {
            q: "How long does it take to develop a website?",
            a: "The development timeline depends on project complexity, features, and customization requirements. Most business websites are completed within a few weeks, while larger web applications may require additional development time."
        },
        {
            q: "Will my website be mobile-friendly?",
            a: "Yes. Every website developed by our Web Development Company in Pondicherry is fully responsive and optimized for desktops, tablets, and mobile devices."
        },
        {
            q: "Do you provide website maintenance services?",
            a: "Yes. We offer website maintenance, performance optimization, security updates, backups, bug fixing, and technical support after launch."
        },
        {
            q: "Can you redesign my existing website?",
            a: "Absolutely. We redesign existing websites with modern UI/UX, improved functionality, faster performance, better SEO, and enhanced user experience."
        },
        {
            q: "Why should I choose a Software Company in Pondicherry for web development?",
            a: "Working with an experienced Software Company in Pondicherry like SysCrop gives you access to expert developers, customized solutions, ongoing support, scalable technologies, and websites built to support long-term business growth."
        },
        {
            q: "How much does website development cost in Pondicherry?",
            a: "The cost depends on factors such as website type, number of pages, design complexity, features, integrations, and customization requirements. As a reliable Web Development Company in Pondicherry, we offer flexible pricing and customized solutions to match your business needs and budget. Contact our team for a free consultation and project estimate."
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

    return (
        <main ref={mainRef} className="bg-white min-h-screen overflow-x-clip font-sans">
            {/* Header Banner */}
            <HeaderBanner
                title={
                    <>
                        Leading <span className="text-[#1A5CDD] bg-clip-text text-transparent bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8]">Web Development Company</span> in Pondicherry
                    </>
                }
                description="We build responsive, secure, and SEO-friendly websites that deliver exceptional user experiences across all devices. Our solutions combine modern design, high performance, and robust security to strengthen your online presence.
"
            />

            {/* SECTION 1: Intro Hero Section */}
            <section className="py-20 bg-[#F0F6FF] relative overflow-hidden">
                {/* Background Decorators */}
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[700px] bg-[#1A5CDD]/8 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-[#1A5CDD]/6 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `radial-gradient(#1A5CDD 1.5px, transparent 1.5px)`, backgroundSize: `24px 24px` }} />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                        {/* Left: Text Content */}
                        <div className="lg:col-span-7 gsap-fade-up">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 text-[#1A5CDD] mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] inline-block animate-pulse" />
                                Next-Gen Web Development
                            </span>

                            <h1 className="text-3xl md:text-5xl lg:text-[48px] font-bold text-[#011146] tracking-tight leading-[1.2] mb-6">
                                Professional <span className="text-[#1A5CDD]">Web Development</span> Services in Pondicherry
                            </h1>

                            <div className="space-y-4 mb-8">
                                <p className="text-slate-600 text-[16.5px] leading-[1.85] font-normal">
                                    At Syscorp, we help businesses build powerful digital experiences through modern, scalable, and result-driven web development solutions. As a leading Web Development Company in Pondicherry, we create high-performance websites with attractive design, seamless functionality, strong security, and SEO-friendly architecture.
                                </p>
                                <p className="text-slate-600 text-[16.5px] leading-[1.85] font-normal">
                                    Whether you're a startup, a growing business, or an enterprise, we deliver customized websites aligned with your business goals. Our services include corporate websites, eCommerce platforms, CMS websites, custom web applications, business portals, and website redesign solutions.
                                </p>
                                <p className="text-slate-600 text-[16.5px] leading-[1.85] font-normal">
                                    As an experienced Software Company in Pondicherry, we combine modern technologies, creative UI/UX design, and industry best practices to build fast, mobile-responsive, and scalable websites that attract customers, increase engagement, and drive long-term digital growth.
                                </p>

                            </div>

                            {/* Stat Chips */}
                            <div className="flex flex-wrap gap-4 mb-8">
                                {[
                                    { label: "Projects Delivered", value: "500+" },
                                    { label: "Client Satisfaction", value: "98%" },
                                    { label: "Years Experience", value: "10+" },
                                ].map((stat, i) => (
                                    <div key={i} className="bg-white border border-slate-200 rounded-2xl px-5 py-3 shadow-sm flex items-center gap-3">
                                        <p className="text-2xl font-extrabold text-[#1A5CDD]">{stat.value}</p>
                                        <p className="text-slate-500 text-xs font-semibold leading-tight">{stat.label}</p>
                                    </div>
                                ))}
                            </div>


                        </div>

                        {/* Right: Premium Visual Panel */}
                        <div className="lg:col-span-5 gsap-fade-up relative">

                            {/* Main card — browser mockup style */}
                            <div className="relative w-full rounded-[28px] overflow-hidden shadow-2xl border-4 border-white bg-white">

                                {/* Main image */}
                                <div className="relative h-[420px] w-full">
                                    <Image
                                        src="/images/webdevelopment/web_development_1.svg"
                                        alt="Developer writing code on laptop"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#011146]/30 to-transparent" />
                                </div>

                            </div>



                            {/* Floating badge — top right */}
                            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 flex items-center gap-3 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                                <div className="w-10 h-10 bg-[#1A5CDD]/10 text-[#1A5CDD] rounded-full flex items-center justify-center">
                                    <Code size={20} />
                                </div>
                                <div>
                                    <p className="text-[#011146] font-extrabold text-xs">Top Rated</p>
                                    <p className="text-slate-400 text-[10px] font-medium">Web Agency</p>
                                </div>
                            </div>

                            {/* Floating notification — bottom left */}
                            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 z-20 flex items-center gap-3 min-w-[180px]">
                                <div className="w-9 h-9 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
                                    <CheckCircle2 size={18} />
                                </div>
                                <div>
                                    <p className="text-[#011146] font-extrabold text-xs">Project Delivered</p>
                                    <p className="text-slate-400 text-[10px]">On time, every time</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* SECTION 2: What is Web Development? */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Text Content */}
                        <div className="gsap-fade-up">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 text-[#1A5CDD] mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] inline-block animate-pulse" />
                                Understanding Web Development
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#011146] mb-6 leading-tight">
                                What exactly is <br /><span className="text-[#1A5CDD]">Web Development?</span>
                            </h2>
                            <p className="text-slate-600 text-[16.5px] leading-[1.8] mb-5">
                                Web development is the complete process of creating, managing, and improving websites and web-based applications. It involves multiple stages including planning, UI/UX design, frontend development, backend programming, database management, security implementation, API integration, testing, deployment, and ongoing maintenance.
                            </p>
                            <p className="text-slate-600 text-[16.5px] leading-[1.8] mb-8">
                                A professionally developed website is more than just an online presence. It acts as a powerful business tool that helps companies showcase their services, generate qualified leads, improve customer communication, and support digital marketing strategies.
                            </p>

                            <div className="bg-[#F0F6FF] rounded-2xl p-5 md:p-6 border border-blue-100">
                                <p className="text-[#011146] font-bold text-[17px] mb-4 flex items-center gap-2">
                                    <Sparkles size={18} className="text-[#1A5CDD]" /> Our focus areas:
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                                    {[
                                        "Fast & responsive",
                                        "Easy to navigate",
                                        "SEO optimized",
                                        "Secure & reliable",
                                        "Scalable for growth",
                                        "Simple to manage"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium text-[15px]">
                                            <div className="w-6 h-6 rounded-full bg-[#1A5CDD]/10 text-[#1A5CDD] flex items-center justify-center shrink-0">
                                                <Check size={14} strokeWidth={3} />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Visual Right Side */}
                        <div className="relative w-full h-[500px] lg:h-[600px] gsap-fade-up mt-12 lg:mt-0">

                            {/* Soft glowing background orb instead of hard square */}
                            <div className="absolute top-10 left-0 right-0 mx-auto w-[80%] h-[80%] bg-[#1A5CDD]/5 rounded-full blur-[60px] pointer-events-none" />

                            {/* Main Image (Centered, Floating) */}
                            <div className="absolute inset-0 w-[95%] h-[95%] mx-auto z-10 flex items-center justify-center">
                                <Image
                                    src="/images/webdevelopment/web-development-1.png"
                                    alt="Web Development Process"
                                    fill
                                    className="object-contain hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
                                />
                            </div>


                            {/* Top Left Floating Card (10/10 Overall rating) */}
                            <div className="absolute top-12 left-0 lg:-left-6 bg-white/90 backdrop-blur-md p-4 pr-6 rounded-2xl shadow-xl z-30 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3.5s' }}>
                                <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center shrink-0">
                                    <Star size={24} fill="currentColor" className="text-orange-500" />
                                </div>
                                <div>
                                    <p className="font-extrabold text-[#011146] text-xl leading-none mb-1">10/10</p>
                                    <p className="text-slate-500 text-sm font-semibold">Overall rating</p>
                                </div>
                            </div>

                            {/* Top Right Circular Badge (Since 2012) */}
                            <div className="absolute top-0 right-0 lg:-right-4 w-28 h-28 bg-[#011146] rounded-full text-white flex items-center justify-center shadow-[0_15px_30px_rgba(1,17,70,0.3)] z-30">
                                {/* Center Text */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                    <span className="font-black text-2xl leading-none text-white">10+</span>
                                    <span className="text-[10px] font-bold text-[#38bdf8] uppercase tracking-wider mt-1">Years</span>
                                </div>
                                {/* Rotating Text */}
                                <svg viewBox="0 0 100 100" className="w-full h-full animate-spin" style={{ animationDuration: '12s' }}>
                                    <path id="circlePath2" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
                                    <text className="text-[9.5px] font-bold uppercase tracking-widest" fill="currentColor">
                                        <textPath href="#circlePath2" startOffset="0%">Syscorp Technology • Since 2012 •</textPath>
                                    </text>
                                </svg>
                            </div>

                            {/* Bottom Left Floating Card (+5k Projects Delivered) */}
                            <div className="absolute bottom-16 left-4 lg:left-0 bg-white/90 backdrop-blur-md p-4 px-5 rounded-2xl shadow-xl z-30 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3.5s' }}>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="flex -space-x-2">
                                        {[
                                            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
                                            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop",
                                            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
                                        ].map((img, i) => (
                                            <div key={i} className="w-9 h-9 rounded-full border-2 border-white overflow-hidden relative shadow-sm">
                                                <Image src={img} alt="User" fill className="object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="w-9 h-9 rounded-full bg-[#1A5CDD] text-white flex items-center justify-center text-xs font-bold border-2 border-white relative -ml-2 shadow-sm">
                                        +5k
                                    </div>
                                </div>
                                <p className="text-[#011146] font-bold text-sm">Projects Delivered</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2.5: Why Your Business Needs a Professional Website */}
            <section className="py-24 bg-[#011146] relative overflow-hidden">
                {/* Dynamic Background Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1A5CDD]/20 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#38bdf8]/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 items-center">

                        {/* Text Content */}
                        <div className="xl:col-span-5 gsap-fade-up">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-white/10 border border-white/20 text-white backdrop-blur-md mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] inline-block animate-pulse" />
                                Business Growth Impact
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                Why Your Business Needs a <span className="text-[#38bdf8]">Professional Website</span>
                            </h2>
                            <p className="text-blue-100/80 text-[16.5px] leading-[1.8] mb-6">
                                In today's digital-first market, your website is often the first interaction customers have with your brand. A slow, outdated, or poorly designed website can reduce trust and drive potential customers toward competitors.
                            </p>
                            <p className="text-blue-100/80 text-[16.5px] leading-[1.8] mb-8">
                                At Syscorp, we design websites that are not only visually appealing but also built to achieve real business objectives. Our development process focuses on combining design, technology, SEO, and performance to create websites that deliver measurable value.
                            </p>

                            <div className="flex items-center gap-4 text-white font-bold text-lg bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm w-fit">
                                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center">
                                    <Shield size={24} />
                                </div>
                                Build Trust & Authority
                            </div>
                        </div>

                        {/* Interactive Grid of Features */}
                        <div className="xl:col-span-7 gsap-fade-up">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                {[
                                    { title: "Build credibility and brand authority", icon: Shield },
                                    { title: "Reach customers 24/7 globally", icon: Globe },
                                    { title: "Generate high-quality leads", icon: Target },
                                    { title: "Showcase products & services", icon: Layers },
                                    { title: "Improve online search visibility", icon: Search },
                                    { title: "Support marketing campaigns", icon: BarChart3 },
                                    { title: "Increase customer engagement", icon: Users },
                                    { title: "Better conversion opportunities", icon: Zap }
                                ].map((item, idx) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={idx} className="group bg-[#0A1A5C]/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-[#1A5CDD]/20 hover:border-[#38bdf8]/50 transition-all duration-300 hover:-translate-y-1">
                                            <div className="w-10 h-10 rounded-xl bg-white/10 text-[#38bdf8] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#38bdf8] group-hover:text-[#011146] transition-all duration-300">
                                                <Icon size={20} strokeWidth={2.5} />
                                            </div>
                                            <h4 className="text-white font-semibold text-[16px] leading-snug">
                                                {item.title}
                                            </h4>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* SECTION 3: Our Professional Web Development Services Cover */}
            <section className="py-24 bg-white overflow-hidden relative">
                <div className="container mx-auto max-w-7xl px-6 relative z-10">

                    {/* Heading */}
                    <div className="text-center max-w-3xl mx-auto mb-24">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 text-[#1A5CDD]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] inline-block animate-pulse" />
                            Comprehensive Solutions
                        </span>

                        <h2 className="mt-6 text-3xl md:text-5xl font-extrabold text-[#011146] tracking-tight">
                            Our Professional <span className="bg-gradient-to-r from-[#1A5CDD] to-[#2E8BFF] bg-clip-text text-transparent">Web Development Services</span>
                        </h2>

                        <p className="mt-5 text-slate-600 text-[16.5px] leading-relaxed">
                            End-to-end web solutions crafted to help businesses build a powerful online presence, engage target audiences, and achieve sustainable long-term growth.
                        </p>
                    </div>

                    <div className="space-y-12">
                        {services.map((service, index) => {
                            const Icon = service.icon;

                            return (
                                <div
                                    key={service.id}
                                    className="relative bg-gradient-to-br from-white via-slate-50/50 to-blue-50/25 rounded-3xl border border-slate-200/80 p-6 sm:p-8 lg:p-9 shadow-md hover:shadow-2xl hover:border-blue-300/80 transition-all duration-500 overflow-hidden group grid lg:grid-cols-12 gap-6 lg:gap-10 items-center"
                                >
                                    {/* Ambient Glow Orb */}
                                    <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#1A5CDD]/5 blur-3xl pointer-events-none group-hover:bg-[#1A5CDD]/12 transition-all duration-700" />

                                    {/* Top Hover Gradient Accent Line */}
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1A5CDD] via-[#2E8BFF] to-[#38bdf8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* High-Resolution Image Container (5-Span) */}
                                    <div className={`lg:col-span-5 w-full ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                                        <div className="relative rounded-2xl bg-slate-900 border border-slate-200/80 shadow-lg overflow-hidden group/img h-[250px] sm:h-[290px] lg:h-[320px] w-full">

                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover object-left group-hover/img:scale-105 transition-transform duration-700 ease-out"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src = "/images/services/Custom-Website.webp";
                                                }}
                                            />

                                            {/* Ambient Vignette Gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#011146]/60 via-transparent to-black/10 pointer-events-none" />

                                            {/* Floating Category Tag */}
                                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 text-[#1A5CDD]">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] inline-block animate-pulse" />
                                                {service.tag}
                                            </span>

                                            {/* Floating Quality Badge */}
                                            <div className="absolute bottom-3.5 left-3.5 bg-[#011146]/85 backdrop-blur-md text-white border border-white/10 px-3 py-1 rounded-xl text-[11px] font-bold shadow-md flex items-center gap-1.5 z-10">
                                                <CheckCircle size={12} className="text-[#38bdf8]" /> High Performance
                                            </div>

                                        </div>
                                    </div>

                                    {/* Content Column (7-Span) */}
                                    <div className={`lg:col-span-7 relative z-10 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>

                                        {/* Cohesive Header Row */}
                                        <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200/60">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1A5CDD] to-[#2E8BFF] text-white flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300 shrink-0">
                                                    <Icon size={20} />
                                                </div>
                                                <div>
                                                    <span className="text-[10.5px] font-black uppercase tracking-widest text-[#1A5CDD] block">
                                                        {service.tag}
                                                    </span>
                                                    <span className="text-[11px] font-bold text-slate-400">
                                                        Service Solution #{String(index + 1).padStart(2, "0")}
                                                    </span>
                                                </div>
                                            </div>

                                            <span className="text-2xl font-black text-slate-200/90 group-hover:text-[#1A5CDD]/30 transition-colors duration-300 select-none">
                                                0{index + 1}
                                            </span>
                                        </div>

                                        <h3 className="text-xl sm:text-2xl font-extrabold text-[#011146] mb-3 tracking-tight leading-snug">
                                            {service.title}
                                        </h3>

                                        <div className="text-slate-600 text-[14px] sm:text-[14.5px] leading-relaxed whitespace-pre-line mb-5">
                                            {service.desc}
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-2.5 mb-6">
                                            {service.features.map((feature, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center gap-2.5 bg-white/90 border border-slate-200/70 hover:border-blue-300/80 hover:bg-blue-50/40 p-2.5 px-3 rounded-xl shadow-xs transition-all duration-300 group/feat"
                                                >
                                                    <div className="w-5 h-5 rounded-full bg-[#1A5CDD]/10 text-[#1A5CDD] flex items-center justify-center shrink-0 group-hover/feat:bg-[#1A5CDD] group-hover/feat:text-white transition-colors duration-300">
                                                        <CheckCircle size={12} />
                                                    </div>
                                                    <span className="text-slate-800 text-[12.5px] font-bold truncate">
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-[#1A5CDD] to-blue-600 text-white text-sm font-extrabold shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 group/btn"
                                        >
                                            <span>Get Free Consultation</span>
                                            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>

                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION 4: Our Website Development Process */}
            <section className="py-24 bg-[#F0F6FF] relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 text-[#1A5CDD] mb-5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] inline-block animate-pulse" />
                            Proven Methodology
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#011146] tracking-tight mb-6 leading-tight">
                            Our Website <span className="bg-gradient-to-r from-[#1A5CDD] to-[#2E8BFF] bg-clip-text text-transparent">Development Process</span>
                        </h2>

                        <div className="space-y-5 text-slate-600 text-[16.5px] md:text-[17.5px] leading-[1.85]">
                            <p>
                                As a leading <span className="font-bold text-[#011146]">Web Development Company in Pondicherry</span>, Syscorp follows a proven and transparent website development process that delivers high-quality digital solutions for businesses of all sizes. Our <span className="font-bold text-[#1A5CDD]">Professional Web Development Services</span> are designed to ensure every website is visually appealing, technically robust, SEO-friendly, and built to achieve your business goals.
                            </p>
                            <p>
                                Being an experienced <span className="font-bold text-[#011146]">Software Company in Pondicherry</span>, we believe every successful website starts with proper planning, strategic execution, and continuous collaboration. Our <span className="font-bold text-[#1A5CDD]">Web Development Services in Pondicherry</span> cover everything from business consultation and UI/UX design to development, testing, deployment, and ongoing support, ensuring a smooth experience from start to finish.
                            </p>
                        </div>
                    </div>

                    {/* Timeline Process Steps */}
                    <div className="relative mt-16">

                        {/* Navigation */}
                        <button
                            onClick={() => emblaApi?.scrollPrev()}
                            className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 hidden lg:flex w-12 h-12 rounded-full bg-white border shadow-lg items-center justify-center hover:bg-[#1A5CDD] hover:text-white transition"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <button
                            onClick={() => emblaApi?.scrollNext()}
                            className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 hidden lg:flex w-12 h-12 rounded-full bg-white border shadow-lg items-center justify-center hover:bg-[#1A5CDD] hover:text-white transition"
                        >
                            <ChevronRight size={20} />
                        </button>

                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className="flex">

                                {processSteps.map((step, idx) => (
                                    <div
                                        key={idx}
                                        className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] xl:flex-[0_0_33.333%] px-4"
                                    >
                                        <div className="group bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 h-full overflow-hidden">

                                            {/* Top Gradient */}
                                            <div className="h-1 bg-gradient-to-r from-[#1A5CDD] to-blue-400"></div>

                                            <div className="p-8">

                                                {/* Step */}
                                                <div className="flex items-center justify-between mb-6">

                                                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-[#1A5CDD] font-bold text-xl">
                                                        {step.step}
                                                    </div>

                                                    <span className="text-6xl font-black text-slate-100">
                                                        {String(step.step).padStart(2, "0")}
                                                    </span>

                                                </div>

                                                <span className="text-xs uppercase tracking-widest text-[#1A5CDD] font-bold">
                                                    Step {step.step}
                                                </span>

                                                <h3 className="mt-3 text-2xl font-bold text-[#011146] leading-snug">
                                                    {step.title}
                                                </h3>

                                                <p className="mt-5 text-slate-600 leading-7 text-[15px] line-clamp-6">
                                                    {step.desc}
                                                </p>

                                            </div>

                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* SECTION 5: Technologies & Frameworks We Use */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 text-[#1A5CDD] mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] inline-block animate-pulse" />
                            Technology Stack
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#011146] tracking-tight mb-6">
                            Technologies & Frameworks We Use
                        </h2>
                        <p className="text-slate-600 text-[16.5px] leading-[1.8] mb-4">
                            As a trusted Web Development Company in Pondicherry, we use modern technologies and frameworks to build secure, scalable, and high-performing websites and web applications tailored to your business needs.
                        </p>
                        <p className="text-slate-600 text-[16.5px] leading-[1.8]">
                            Our Professional Web Development Services include business websites, eCommerce platforms, and custom web applications that deliver speed, reliability, flexibility, and long-term performance.
                        </p>
                    </div>

                    <div className="lg:col-span-8 space-y-8">
                        {techCategories.map((tech, index) => {
                            const Icon = tech.icon;

                            return (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#1A5CDD]/30 hover:shadow-2xl"
                                >
                                    {/* Background Glow */}
                                    <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-gradient-to-br from-[#1A5CDD]/10 to-transparent blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                    {/* Animated Top Border */}
                                    <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-[#1A5CDD] via-blue-400 to-cyan-400 transition-transform duration-500 group-hover:scale-x-100" />

                                    <div className="relative p-8">

                                        <div className="flex flex-col gap-6 md:flex-row md:items-start">

                                            {/* Icon */}
                                            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1A5CDD] to-[#2E8BFF] text-white shadow-md shadow-blue-500/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-blue-500/30 shrink-0">
                                                <Icon size={26} strokeWidth={2.2} />
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1">

                                                <div className="flex items-center justify-between flex-wrap gap-4">

                                                    <h3 className="text-2xl font-bold text-[#011146] transition-colors duration-300 group-hover:text-[#1A5CDD]">
                                                        {tech.category}
                                                    </h3>

                                                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 text-[#1A5CDD]">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] inline-block animate-pulse" />
                                                        Latest Stack
                                                    </span>

                                                </div>

                                                <p className="mt-5 text-[15px] leading-8 text-slate-600">
                                                    {tech.desc}
                                                </p>

                                                {/* Technology Pills */}

                                                {tech.tags && (
                                                    <div className="mt-8 flex flex-wrap gap-3">

                                                        {tech.tags.map((tag, idx) => (

                                                            <span
                                                                key={idx}
                                                                className="group/tag relative overflow-hidden rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-[#1A5CDD] hover:bg-[#1A5CDD] hover:text-white"
                                                            >

                                                                <span className="relative z-10">
                                                                    {tag}
                                                                </span>

                                                                <span className="absolute inset-0 scale-0 rounded-full bg-gradient-to-r from-[#1A5CDD] to-blue-500 transition-transform duration-300 group-hover/tag:scale-100"></span>

                                                            </span>

                                                        ))}

                                                    </div>
                                                )}

                                                {/* Compact 4-Column Features Grid */}
                                                {tech.items && (
                                                    <div className="mt-6 grid gap-2.5 grid-cols-2 sm:grid-cols-2 md:grid-cols-4">
                                                        {tech.items.map((item, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="group/item flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-slate-50/80 px-3 py-2.5 transition-all duration-300 hover:border-[#1A5CDD]/50 hover:bg-white hover:shadow-md hover:-translate-y-0.5"
                                                            >
                                                                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#1A5CDD]/10 text-[#1A5CDD] shrink-0 group-hover/item:bg-[#1A5CDD] group-hover/item:text-white transition-all duration-300">
                                                                    <CheckCircle
                                                                        size={13}
                                                                        className="group-hover/item:text-white transition-colors"
                                                                    />
                                                                </div>

                                                                <span className="text-xs font-bold text-slate-700 group-hover/item:text-[#1A5CDD] transition-colors truncate">
                                                                    {item}
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                            </div>

                                        </div>

                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION 6: Why Choose Syscorp as Your Web Development Company in Pondicherry? */}
            <section className="py-24 bg-[#030C2A] relative overflow-hidden">
                {/* Background Ambient Glows */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1A5CDD]/20 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#38bdf8]/10 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

                <div className="container mx-auto max-w-7xl px-6 relative z-10">

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        {/* Left Side: Text Content */}
                        <div className="lg:col-span-6 space-y-6 lg:sticky">
                            <div>
                                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-white/10 border border-white/20 text-white backdrop-blur-md mb-6">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] inline-block animate-pulse" />
                                    Why Choose Us
                                </span>
                                <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-[42px] font-extrabold text-white mb-6 leading-[1.2] tracking-tight">
                                    Why Choose <span className="bg-gradient-to-r from-[#38bdf8] via-blue-300 to-indigo-300 bg-clip-text text-transparent">Syscorp</span> as Your Web Development Company in Pondicherry?
                                </h2>
                                <p className="text-slate-300/90 text-[16px] leading-[1.8] mb-5">
                                    Choosing the right Web Development Company in Pondicherry is essential for building a website that supports your business growth. We combine creativity, technical expertise, and industry experience to deliver fast, secure, and scalable websites that generate measurable results.
                                </p>
                                <p className="text-slate-300/90 text-[16px] leading-[1.8] mb-5">
                                    As a trusted Software Company in Pondicherry, we provide Professional Web Development Services tailored to your business goals, helping you strengthen your online presence and improve customer engagement.
                                </p>
                                <p className="text-slate-300/90 text-[16px] leading-[1.8] mb-8">
                                    Whether you need a corporate website, eCommerce platform, or custom web application, we create innovative, scalable, and user-focused solutions that deliver long-term business value.
                                </p>

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1A5CDD] to-[#2E8BFF] text-white px-8 py-4 rounded-xl font-bold text-sm hover:scale-[1.02] shadow-lg shadow-blue-900/40 transition-all"
                                >
                                    <span>Get Free Consultation</span>
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>

                        {/* Right Side: 10 Key Points Interactive Accordion */}
                        <div className="lg:col-span-6 space-y-3">
                            {whyChooseReasons.map((item, index) => {
                                const Icon = item.icon;
                                const isSelected = activeIndex === index;

                                return (
                                    <div
                                        key={index}
                                        className={`rounded-2xl transition-all duration-300 border overflow-hidden ${isSelected
                                            ? "border-[#38bdf8]/70 bg-gradient-to-br from-[#0B2368]/95 via-[#07194D]/95 to-[#030D2F]/98 text-white shadow-xl shadow-blue-900/40"
                                            : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:border-white/20"
                                            }`}
                                    >
                                        <button
                                            onClick={() => setActiveIndex(isSelected ? -1 : index)}
                                            className="w-full p-4 text-left flex items-center justify-between gap-4"
                                        >
                                            <div className="flex items-center gap-3.5 pr-2">
                                                <div
                                                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${isSelected
                                                        ? "bg-gradient-to-br from-[#38bdf8] to-[#1A5CDD] text-white shadow-md scale-105"
                                                        : "bg-white/10 text-slate-300"
                                                        }`}
                                                >
                                                    <Icon size={20} />
                                                </div>
                                                <span className={`font-bold text-[15px] sm:text-[16px] leading-snug ${isSelected ? "text-white" : "text-slate-200"}`}>
                                                    {item.title}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-3 shrink-0">
                                                <span className={`text-[11px] font-extrabold px-2.5 py-0.5 rounded-full ${isSelected ? "bg-[#38bdf8]/20 text-[#38bdf8]" : "text-slate-500 bg-white/5"}`}>
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>
                                                <ChevronDown
                                                    size={18}
                                                    className={`transition-transform duration-300 ${isSelected ? "text-[#38bdf8] rotate-180" : "text-slate-500"}`}
                                                />
                                            </div>
                                        </button>

                                        {isSelected && (
                                            <div className="px-5 pb-5 pt-2 border-t border-white/10">
                                                <p className="text-slate-300 text-[14.5px] leading-relaxed">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </section>

            {/* SECTION 7: Industries We Serve (Infinite Capsule Marquee) */}
            <section className="py-24 bg-[#011146] relative overflow-hidden mt-12 mb-12 rounded-[40px] mx-4 lg:mx-auto max-w-[96%]">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1A5CDD]/25 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#38bdf8]/15 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-white/10 border border-white/20 text-white backdrop-blur-md mb-5">
                            Tailored Solutions
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-5">
                            Industries We Serve
                        </h2>
                        <p className="text-slate-300 max-w-2xl mx-auto text-[16px] leading-relaxed">
                            Our Web Development Company in Pondicherry delivers customized website solutions for businesses across multiple industries.
                        </p>
                    </div>

                    <style>{`
                        @keyframes marquee {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(calc(-50% - 12px)); }
                        }
                        .animate-marquee-infinite {
                            animation: marquee 35s linear infinite;
                        }
                        .animate-marquee-infinite:hover {
                            animation-play-state: paused;
                        }
                    `}</style>
                    <div className="relative w-full overflow-hidden flex items-center py-4">
                        <div className="flex w-max animate-marquee-infinite gap-6">
                            {/* Original List */}
                            {industries.map((ind, i) => {
                                const Icon = ind.icon;
                                return (
                                    <div
                                        key={`orig-${i}`}
                                        className="shrink-0 group flex items-center gap-4 px-5 py-3.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(56,189,248,0.2)] hover:-translate-y-1 transition-all duration-300 cursor-default"
                                    >
                                        <div className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-500 shadow-inner ${ind.color}`}>
                                            <Icon size={20} strokeWidth={2.2} />
                                        </div>
                                        <h3 className="font-extrabold text-white text-[15px] pr-4 tracking-wide group-hover:text-[#38bdf8] transition-colors duration-300 whitespace-nowrap">
                                            {ind.title}
                                        </h3>
                                    </div>
                                );
                            })}
                            {/* Duplicate List for seamless loop */}
                            {industries.map((ind, i) => {
                                const Icon = ind.icon;
                                return (
                                    <div
                                        key={`dup-${i}`}
                                        className="shrink-0 group flex items-center gap-4 px-5 py-3.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(56,189,248,0.2)] hover:-translate-y-1 transition-all duration-300 cursor-default"
                                    >
                                        <div className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-500 shadow-inner ${ind.color}`}>
                                            <Icon size={20} strokeWidth={2.2} />
                                        </div>
                                        <h3 className="font-extrabold text-white text-[15px] pr-4 tracking-wide group-hover:text-[#38bdf8] transition-colors duration-300 whitespace-nowrap">
                                            {ind.title}
                                        </h3>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Edge Gradient Fades */}
                <div className="absolute top-0 bottom-0 left-0 w-28 bg-gradient-to-r from-[#011146] to-transparent pointer-events-none z-10" />
                <div className="absolute top-0 bottom-0 right-0 w-28 bg-gradient-to-l from-[#011146] to-transparent pointer-events-none z-10" />
            </section>

            {/* SECTION 8: Frequently Asked Questions (FAQs) - Split Layout */}
            <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
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
                                    Find clear, transparent answers to common questions about our website development services, timelines, maintenance, and processes in Pondicherry.
                                </p>

                                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-[#1A5CDD]/10 text-[#1A5CDD] flex items-center justify-center shrink-0">
                                        <CheckCircle size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-extrabold text-[#011146] text-sm">Need More Clarity?</h4>
                                        <p className="text-xs text-slate-500 font-medium mt-0.5">Our web strategy team is ready to consult on your custom project.</p>
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
                                        <div
                                            className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                                }`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="px-6 pb-6 text-slate-600 text-[15.5px] leading-relaxed border-t border-slate-100 pt-4">
                                                    {faq.a}
                                                </div>
                                            </div>
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
