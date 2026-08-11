"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Search, TrendingUp, Target, BarChart, FileText, Globe, Link as LinkIcon,
    Settings, Users, CheckCircle2, ChevronDown, ArrowRight, ShieldCheck,
    Zap, LineChart, MapPin, Activity, LayoutDashboard, Database, Smartphone, Headset,
    ScanSearch, Bot, Gauge, Rocket, CopyCheck, Link2, Braces, TriangleAlert, Code2,
    BookOpen, Building2, Bookmark, UserCircle, MessageSquare, Megaphone, ShieldAlert, PieChart, Star, ThumbsUp, RefreshCw, Filter, Map, Image as ImageIcon,
    Palmtree, Flower2, GraduationCap, Utensils, Home, ShoppingCart, Scale, Stethoscope, Truck, Dumbbell, Palette, Wrench
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderBanner from "@/components/ui/HeaderBanner";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const FeatureCard = ({ item }: { item: any }) => {
    const Icon = item.icon;
    return (
        <div className="group relative filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:drop-shadow-[0_12px_28px_rgba(26,92,221,0.12)] transition-all duration-300 h-full mt-6">
            <div
                className="absolute inset-0 bg-white border border-slate-200 transition-transform duration-300 group-hover:-translate-y-1 group-hover:border-[#1A5CDD]/20"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)" }}
            />
            <div className="relative h-full px-8 pb-8 pt-12 flex flex-col transition-transform duration-300 group-hover:-translate-y-1">
                <div
                    className="absolute -top-7 left-8 w-14 h-14 rounded-xl bg-[#EEF4FF] border border-[#1A5CDD]/20 text-[#1A5CDD] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#1A5CDD] group-hover:text-white group-hover:border-[#1A5CDD] shadow-sm"
                >
                    <Icon size={24} strokeWidth={2} />
                </div>
                <h3 className="text-[#011146] font-bold text-[17px] mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-grow">{item.desc}</p>
            </div>
        </div>
    );
};

export default function SEOClient() {
    const mainRef = useRef<HTMLDivElement>(null);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [activeProcessTab, setActiveProcessTab] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".gsap-fade-up",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".gsap-fade-up",
                        start: "top 85%",
                    }
                }
            );

            gsap.utils.toArray('.gsap-stagger-card').forEach((el: any, i) => {
                gsap.fromTo(el,
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%"
                        }
                    }
                );
            });

            // Orbit Animations (Rings rotate, Icons counter-rotate to stay upright)
            gsap.to(".orbit-ring-1", { rotation: 360, duration: 45, repeat: -1, ease: "none" });
            gsap.to(".orbit-icon-1", { rotation: -360, duration: 45, repeat: -1, ease: "none" });

            gsap.to(".orbit-ring-2", { rotation: -360, duration: 35, repeat: -1, ease: "none" });
            gsap.to(".orbit-icon-2", { rotation: 360, duration: 35, repeat: -1, ease: "none" });

            gsap.to(".orbit-ring-3", { rotation: 360, duration: 25, repeat: -1, ease: "none" });
            gsap.to(".orbit-icon-3", { rotation: -360, duration: 25, repeat: -1, ease: "none" });

            gsap.to(".orbit-ring-4", { rotation: -360, duration: 15, repeat: -1, ease: "none" });
            gsap.to(".orbit-icon-4", { rotation: 360, duration: 15, repeat: -1, ease: "none" });

        }, mainRef);

        return () => ctx.revert();
    }, []);

    const whyChooseUs = [
        { title: "Customized SEO Strategies", desc: "Every business is unique, so we create personalized SEO strategies based on your industry, target audience, and business goals.", icon: Settings },
        { title: "Data-Driven Decision Making", desc: "Every SEO strategy is backed by in-depth research, competitor analysis, keyword insights, and performance analytics.", icon: LineChart },
        { title: "Experienced SEO Specialists", desc: "Our SEO experts leverage the latest tools, proven techniques, and Google's best practices to deliver consistent and measurable results.", icon: Users },
        { title: "White Hat SEO Practices", desc: "We follow ethical, Google-compliant SEO methods that ensure sustainable rankings and long-term organic growth.", icon: ShieldCheck },
        { title: "Transparent Reporting", desc: "Receive detailed monthly reports with keyword rankings, traffic growth, backlinks, and actionable insights to track your SEO progress.", icon: FileText },
        { title: "Complete SEO Solutions", desc: "From SEO audits and keyword research to on-page SEO, technical SEO, backlink building, and local SEO, we provide end-to-end optimization services.", icon: Target },
        { title: "Focus on Lead Generation", desc: "Our SEO campaigns are designed to attract qualified visitors who are more likely to convert into customers and drive business growth.", icon: TrendingUp },
        { title: "Dedicated SEO Support", desc: "Our team continuously monitors your website, implements improvements, and provides ongoing support to keep your SEO performance ahead of the competition.", icon: Headset }
    ];

    const onPageServicesData = [
        { title: "Keyword Research & Keyword Mapping", desc: "A successful SEO campaign begins with selecting the right keywords. We perform in-depth keyword research to identify high-intent, location-based, and industry-specific search terms that your customers are actively searching for. Once identified, each keyword is strategically mapped to the most relevant webpage to maximize visibility and avoid keyword cannibalization.", icon: Search },
        { title: "Title Tag & Meta Description Optimization", desc: "Title tags and meta descriptions play a significant role in improving search visibility and click-through rates. We create optimized titles and compelling meta descriptions that accurately represent your page while naturally incorporating your target keywords.", icon: FileText },
        { title: "Heading Structure Optimization", desc: "A well-structured page helps both users and search engines understand your content. We optimize H1, H2, H3, and H4 headings to create a clear content hierarchy while improving readability and keyword relevance.", icon: LayoutDashboard },
        { title: "SEO-Friendly URL Optimization", desc: "Clean and descriptive URLs improve both user experience and search engine indexing. We optimize your page URLs to be concise, keyword-focused, and aligned with SEO best practices.", icon: LinkIcon },
        { title: "Website Content Optimization", desc: "Content is one of the most important ranking factors. Our team reviews and enhances your website content by improving keyword placement, readability, content depth, and relevance. We ensure every page delivers valuable information while targeting the right search intent. Whether it's your homepage, service pages, location pages, or landing pages, every piece of content is optimized to support higher search rankings.", icon: FileText },
        { title: "Internal Linking Optimization", desc: "Internal links help search engines discover your important pages while improving website navigation. We build a strategic internal linking structure that distributes page authority, strengthens topical relevance, and enhances the overall user journey.", icon: LinkIcon },
        { title: "Image SEO Optimization", desc: "Images are optimized to improve both website performance and search visibility. Our Image SEO service includes optimizing image file names, alt text, image titles, captions, compression, and modern image formats to enhance loading speed and accessibility.", icon: Settings },
        { title: "Schema Markup Implementation", desc: "We implement structured data (Schema Markup) to help search engines better understand your website. This improves your chances of earning rich search results such as FAQs, breadcrumbs, business details, reviews, and other enhanced search features.", icon: Database },
        { title: "User Experience (UX) Optimization", desc: "User experience directly impacts SEO performance. We improve page layout, navigation, mobile responsiveness, content readability, and call-to-action placement to increase user engagement, reduce bounce rates, and improve conversions.", icon: Users },
        { title: "Core Web Vitals Optimization", desc: "Google considers website performance as an important ranking factor. We optimize Core Web Vitals by improving page loading speed, visual stability, and responsiveness to deliver a faster and smoother browsing experience across all devices.", icon: Zap },
        { title: "Duplicate Content & Broken Link Analysis", desc: "Duplicate content and broken links can negatively affect your SEO performance. Our team identifies and resolves duplicate content issues, fixes broken links, and ensures all pages are properly optimized for search engine crawling and indexing.", icon: ShieldCheck }
    ];

    const services = [
        {
            title: "Technical SEO Audit",
            description:
                "Identify website issues affecting search engine performance and rankings.",
            icon: Search,
        },
        {
            title: "Website Crawlability Optimization",
            description:
                "Ensure search engines can efficiently crawl every important page.",
            icon: ScanSearch,
        },
        {
            title: "Website Indexing Optimization",
            description:
                "Resolve indexing issues and improve page discoverability.",
            icon: Database,
        },
        {
            title: "XML Sitemap Optimization",
            description:
                "Create and optimize XML sitemaps for faster indexing.",
            icon: FileText,
        },
        {
            title: "Robots.txt Configuration",
            description:
                "Configure robots.txt files to control search engine crawling.",
            icon: Bot,
        },
        {
            title: "Core Web Vitals Optimization",
            description:
                "Improve loading performance, responsiveness, and visual stability.",
            icon: Gauge,
        },
        {
            title: "Website Speed Optimization",
            description:
                "Optimize caching, images, and code for faster loading.",
            icon: Rocket,
        },
        {
            title: "Mobile-Friendly Optimization",
            description:
                "Ensure responsive performance across all mobile devices.",
            icon: Smartphone,
        },
        {
            title: "HTTPS & Website Security",
            description:
                "Improve website security with SSL implementation.",
            icon: ShieldCheck,
        },
        {
            title: "Canonical Tag Implementation",
            description:
                "Prevent duplicate content issues through proper canonicalization.",
            icon: CopyCheck,
        },
        {
            title: "Broken Link & Redirect Management",
            description:
                "Identify broken links and implement 301 redirects.",
            icon: Link2,
        },
        {
            title: "Structured Data (Schema Markup)",
            description:
                "Implement schema to improve search visibility and rich results.",
            icon: Braces,
        },
        {
            title: "404 Error & Server Issue Optimization",
            description:
                "Resolve technical errors that impact user experience.",
            icon: TriangleAlert,
        },
        {
            title: "JavaScript & CSS Optimization",
            description:
                "Improve rendering performance for faster page delivery.",
            icon: Code2,
        },
        {
            title: "Continuous Technical Monitoring",
            description:
                "Regularly monitor website health and technical performance.",
            icon: Activity,
        },
    ];

    const faqs = [
        { q: "Why should I invest in SEO for my business?", a: "SEO helps your business rank higher on search engines, attract qualified organic traffic, increase brand visibility, and generate more leads without relying solely on paid advertising." },
        { q: "How long does it take to see results from SEO?", a: "SEO results vary depending on your industry, competition, website condition, and target keywords. Typically, businesses start seeing measurable improvements within 3 to 6 months. However, at SysCrop, we implement data-driven SEO strategies and prioritize high-impact optimizations to help many businesses achieve noticeable improvements within the first 2 months, wherever possible." },
        { q: "How much do SEO Services in Pondicherry cost?", a: "The cost of SEO depends on your business goals, website size, target keywords, and market competition. SysCrop offers flexible and customized SEO packages designed to suit your business requirements and budget." },
        { q: "Will I receive regular SEO reports and updates?", a: "Yes. We provide detailed monthly SEO reports that include keyword rankings, organic traffic growth, website performance, backlink progress, and recommendations, ensuring complete transparency throughout your SEO campaign." },
        { q: "Can SEO help my business generate more leads and sales?", a: "Yes. A well-planned SEO strategy attracts users who are actively searching for your products or services. By improving your website's visibility for high-intent keywords, SEO helps drive qualified traffic, increase enquiries, and support long-term business growth." }
    ];

    const seoProcess = [
        { step: "1", title: "Website & Business Analysis", desc: "We begin by understanding your business, target audience, competitors, and current website performance. This helps us identify opportunities and build a customized SEO strategy aligned with your objectives." },
        { step: "2", title: "Comprehensive SEO Audit", desc: "Our team performs an in-depth SEO audit to identify technical issues, on-page optimization gaps, content improvements, backlink quality, and website performance challenges that may impact search rankings." },
        { step: "3", title: "Keyword Research & Strategy", desc: "We conduct detailed keyword research to identify high-value, high-intent search terms based on search volume, competition, and customer behaviour. A customized keyword strategy is then developed for every important webpage." },
        { step: "4", title: "On-Page SEO Optimization", desc: "Our specialists optimize your website's content, title tags, meta descriptions, headings, URLs, internal linking, images, and overall page structure to improve search engine relevance and user experience." },
        { step: "5", title: "Technical SEO Optimization", desc: "We optimize your website's technical foundation by improving website speed, Core Web Vitals, mobile responsiveness, crawlability, indexing, structured data, XML sitemaps, robots.txt configuration, and overall website health." },
        { step: "6", title: "Off-Page SEO & Link Building", desc: "We strengthen your website's authority through ethical link-building strategies, quality backlinks, local citations, content outreach, brand mentions, and online reputation management to improve domain authority and search visibility." },
        { step: "7", title: "Performance Monitoring & Reporting", desc: "SEO is an ongoing process. We continuously monitor keyword rankings, website traffic, conversions, and technical performance while providing transparent monthly reports and strategic recommendations for continuous improvement." },
        { step: "8", title: "Continuous SEO Improvements", desc: "Based on performance data, search engine algorithm updates, and market trends, we continuously refine your SEO strategy to maintain rankings, improve visibility, and support long-term business growth." }
    ];

    return (
        <main ref={mainRef} className="bg-white min-h-screen overflow-x-clip font-sans">
            <HeaderBanner
                title={
                    <>
                        SEO Services in <span className="text-[#38bdf8] font-serif italic font-normal">Pondicherry</span>
                    </>
                }
                description="Complete Search Engine Optimization Solutions for Sustainable Business Growth"
            />

            {/* Intro Section */}
            <section className="py-20 bg-[#F0F8FF]/60 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#1A5CDD]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="gsap-fade-up lg:col-span-6 lg:pr-8">
                            <div className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 rounded-full px-3.5 py-1.5 text-[12px] font-bold text-[#1A5CDD] uppercase tracking-wider mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] inline-block animate-pulse" />
                                Drive More Organic Traffic
                            </div>
                            
                            <h2 className="text-[32px] md:text-4xl lg:text-[46px] font-extrabold text-[#011146] tracking-tight mb-6 leading-[1.15]">
                                Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8]">SEO Services</span> in Pondicherry
                            </h2>

                            <h3 className="text-[#011146] text-[18px] md:text-[20px] leading-[1.6] mb-8 font-bold border-l-4 border-[#38bdf8] pl-4">
                                Achieve Long-Term Growth with Data-Driven Optimization.
                            </h3>

                            <p className="text-[#011146] text-[15px] leading-[1.8] mb-3 font-medium">
                                At SysCrop, we deliver result-driven <strong>SEO Services in Pondicherry</strong> to help businesses improve search engine rankings, increase organic traffic, generate qualified leads, and achieve long-term growth. As a trusted SEO Company Pondicherry, we use data-driven strategies and ethical SEO practices to deliver measurable results.
                            </p>

                            <p className="text-slate-600 text-[15px] leading-[1.8] mb-3">
                                Our professional SEO in Pondicherry helps your business improve online visibility, attract the right audience, and stay ahead of the competition. We provide customized SEO solutions for startups, local businesses, eCommerce stores, healthcare, education, real estate, and enterprises. 
                            </p>
                            <p className="text-slate-600 text-[15px] leading-[1.8] mb-4">
                                Whether you want to rank for local keywords, boost website traffic, improve brand visibility, or increase sales, our SEO Services in Pondicherry are designed for sustainable business growth.
                            </p>

                            <div className="flex flex-wrap items-center gap-4 mt-0">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 bg-[#011146] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#1A5CDD] transition-all shadow-lg shadow-blue-900/10 hover:-translate-y-0.5"
                                >
                                    Get a Free SEO Audit <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        <div className="gsap-fade-up lg:col-span-6 relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0">
                            {/* Ambient Background Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#1A5CDD]/5 rounded-full blur-[80px] pointer-events-none -z-10" />

                            {/* Primary Large Image */}
                            <div className="relative w-full h-full lg:scale-110 z-10 group">
                                <Image
                                    src="/images/seo/seo-1.png"
                                    alt="SEO Analytics Dashboard"
                                    fill
                                    className="object-contain drop-shadow-[0_20px_40px_rgba(0,17,70,0.15)] group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            </div>

                            {/* Floating Badge (Top Right) */}
                            <div className="absolute top-8 right-0 lg:-right-4 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.06)] flex items-center gap-4 border border-slate-100 z-30 hover:-translate-y-1 transition-transform duration-300 hidden sm:flex">
                                <div className="w-12 h-12 bg-blue-50 text-[#1A5CDD] rounded-full flex items-center justify-center font-bold text-xl">
                                    <Target size={24} />
                                </div>
                                <div>
                                    <p className="text-[#011146] font-extrabold text-[15px] leading-none">#1 Ranked</p>
                                    <p className="text-slate-500 text-[11px] font-semibold mt-1 uppercase tracking-wider">SEO Agency</p>
                                </div>
                            </div>

                            {/* Decorative Dots */}
                            <div className="absolute top-[10%] left-[10%] w-24 h-24 bg-[radial-gradient(#1A5CDD_2px,transparent_2px)] [background-size:16px_16px] opacity-15 z-0" />
                        </div>
                    </div>
                </div>
            </section>

            {/* What is SEO Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="bg-[#011146] rounded-[40px] relative overflow-hidden shadow-2xl">
                        {/* Decorative glows */}
                        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#1A5CDD]/25 rounded-full blur-[100px] pointer-events-none" />
                        <div className="absolute -bottom-20 left-[20%] w-64 h-64 bg-[#38bdf8]/10 rounded-full blur-[80px] pointer-events-none" />

                        <div className="flex flex-col md:flex-row items-stretch gap-0 relative z-10">

                            {/* Left: Heading Block */}
                            <div className="md:w-5/12 p-10 md:p-14 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-8 h-1 bg-[#38bdf8] rounded-full" />
                                    <span className="text-[#38bdf8] text-xs font-bold tracking-widest uppercase">SEO Fundamentals</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-8">
                                    What is <span className="text-[#38bdf8]">Search Engine Optimization</span> (SEO)?
                                </h2>
                                {/* Stats row */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                        <p className="text-2xl font-black text-[#38bdf8]">93%</p>
                                        <p className="text-slate-400 text-[12px] mt-1">of online experiences begin with a search engine</p>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                        <p className="text-2xl font-black text-[#38bdf8]">14.6%</p>
                                        <p className="text-slate-400 text-[12px] mt-1">close rate for SEO leads vs 1.7% for outbound</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Description Block */}
                            <div className="md:w-7/12 p-10 md:p-14 flex flex-col justify-between">
                                <div className="space-y-5">
                                    <p className="text-slate-300 text-[15px] leading-relaxed">
                                        Search Engine Optimization (SEO) is the process of improving a website's visibility in search engines such as Google, Bing, and Yahoo. SEO involves optimizing various elements of a website so that search engines can understand its content and rank it higher for relevant searches.
                                    </p>
                                    <p className="text-slate-300 text-[15px] leading-relaxed">
                                        The primary objective of SEO is to attract organic traffic without relying solely on paid advertising. A successful SEO strategy improves website rankings, enhances user experience, increases credibility, and drives qualified leads.
                                    </p>
                                    <p className="text-slate-200 text-[15px] leading-relaxed font-medium">
                                        Our SEO Services in Pondicherry cover every aspect of optimization for long-term organic growth.
                                    </p>
                                </div>
                                {/* Service tags */}
                                <div className="flex flex-wrap gap-2 mt-8">
                                    {["Technical SEO", "Keyword Research", "On-Page SEO", "Off-Page SEO", "Local SEO", "Backlink Building", "Performance Monitoring"].map((tag) => (
                                        <span key={tag} className="px-3 py-1.5 rounded-full bg-white/8 border border-white/10 text-slate-300 text-[12px] font-medium hover:bg-[#1A5CDD]/30 hover:border-[#38bdf8]/30 hover:text-white transition-all duration-200 cursor-default">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-[#F8FAFF] relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 rounded-full px-3.5 py-1 text-xs font-bold text-[#1A5CDD] uppercase tracking-wider mb-4">
                            Why SysCrop
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#011146] tracking-tight">
                            Why Choose SysCrop as Your SEO Company in Pondicherry?
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 mt-4">
                        {whyChooseUs.map((item, index) => (
                            <FeatureCard key={index} item={item} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Complete SEO Services & On-Page SEO */}
            <section className="py-20 bg-white relative">
                <div className="container mx-auto px-6 max-w-7xl">

                    {/* Unified Premium Header Card */}
                    <div className="relative mb-24 rounded-[40px] bg-[#011146] p-10 md:p-16 lg:p-20 overflow-hidden shadow-2xl group">
                        {/* Animated abstract background */}
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#1A5CDD]/30 to-transparent rounded-full blur-[100px] opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-1000 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#38bdf8]/20 to-transparent rounded-full blur-[80px] opacity-40 group-hover:opacity-60 transition-all duration-1000 translate-y-1/3 -translate-x-1/4 pointer-events-none" />

                        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                            {/* Left Side: Content (Title, Badge, and Description) */}
                            <div className="lg:w-1/2 w-full relative z-20">
                                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 shadow-xl">
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                        <FileText className="text-white" size={16} />
                                    </div>
                                    <span className="text-[14px] font-bold text-white tracking-wide uppercase">On-Page SEO</span>
                                </div>

                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-8">
                                    Our Complete <br className="hidden lg:block" />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-blue-100">SEO Services</span>
                                </h2>

                                <div className="space-y-4">
                                    <p className="text-slate-200 text-[17px] leading-relaxed font-medium">
                                        At SysCrop, our On-Page SEO Services are designed to optimize every element of your website to improve search engine visibility, enhance user experience, and increase organic traffic.
                                    </p>
                                    <p className="text-slate-400 text-[16px] leading-relaxed">
                                        As a trusted provider of SEO Services in Pondicherry, we focus on optimizing each webpage according to Google's latest ranking guidelines, ensuring your website performs well for both search engines and potential customers. Our On-Page SEO process is comprehensive and tailored to your business goals.
                                    </p>
                                </div>
                            </div>

                            {/* Right Side: GSAP Orbit Animation Box */}
                            <div className="lg:w-1/2 w-full flex justify-center gsap-orbit-box relative z-10 scale-75 md:scale-90 lg:scale-100 mt-12 lg:mt-0">
                                <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] flex items-center justify-center">

                                    {/* Orbit Ring 1 (Outer) */}
                                    <div className="orbit-ring-1 absolute w-[300px] h-[300px] sm:w-[440px] sm:h-[440px] rounded-full border-2 border-dashed border-[#38bdf8]/30 flex items-center justify-center">
                                        <div className="absolute top-1/4 left-1 w-3 h-3 rounded-full bg-[#38bdf8] shadow-[0_0_12px_#38bdf8] animate-pulse z-20"></div>
                                        <div className="absolute bottom-1/4 right-1 w-3 h-3 rounded-full bg-[#1A5CDD] shadow-[0_0_12px_#1A5CDD] z-20"></div>

                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-11 h-11 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 flex items-center justify-center p-2.5 z-20">
                                            <Search className="orbit-icon-1 text-emerald-400 w-full h-full" />
                                        </div>
                                        <div className="absolute top-1/2 right-0 translate-x-4 -translate-y-1/2 w-11 h-11 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 flex items-center justify-center p-2.5 z-20">
                                            <BarChart className="orbit-icon-1 text-orange-400 w-full h-full" />
                                        </div>
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 w-11 h-11 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 flex items-center justify-center p-2.5 z-20">
                                            <Target className="orbit-icon-1 text-rose-400 w-full h-full" />
                                        </div>
                                        <div className="absolute top-1/2 left-0 -translate-x-4 -translate-y-1/2 w-11 h-11 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 flex items-center justify-center p-2.5 z-20">
                                            <TrendingUp className="orbit-icon-1 text-cyan-400 w-full h-full" />
                                        </div>
                                    </div>

                                    {/* Orbit Ring 2 */}
                                    <div className="orbit-ring-2 absolute w-[240px] h-[240px] sm:w-[360px] sm:h-[360px] rounded-full border-2 border-dashed border-[#1A5CDD]/50 flex items-center justify-center">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1.5 w-2.5 h-2.5 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8] animate-ping z-20"></div>
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1.5 w-2.5 h-2.5 rounded-full bg-[#1A5CDD] shadow-[0_0_10px_#1A5CDD] z-20"></div>

                                        <div className="absolute top-6 right-6 w-11 h-11 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 flex items-center justify-center p-2.5 z-20">
                                            <Globe className="orbit-icon-2 text-blue-400 w-full h-full" />
                                        </div>
                                        <div className="absolute bottom-6 right-6 w-11 h-11 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 flex items-center justify-center p-2.5 z-20">
                                            <Activity className="orbit-icon-2 text-purple-400 w-full h-full" />
                                        </div>
                                        <div className="absolute bottom-6 left-6 w-11 h-11 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 flex items-center justify-center p-2.5 z-20">
                                            <LinkIcon className="orbit-icon-2 text-amber-400 w-full h-full" />
                                        </div>
                                        <div className="absolute top-6 left-6 w-11 h-11 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 flex items-center justify-center p-2.5 z-20">
                                            <Users className="orbit-icon-2 text-pink-400 w-full h-full" />
                                        </div>
                                    </div>

                                    {/* Orbit Ring 3 */}
                                    <div className="orbit-ring-3 absolute w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] rounded-full border-2 border-dashed border-[#38bdf8]/60 flex items-center justify-center">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3.5 w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 flex items-center justify-center p-2 z-20">
                                            <MapPin className="orbit-icon-3 text-red-400 w-full h-full" />
                                        </div>
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-3.5 w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 flex items-center justify-center p-2 z-20">
                                            <ScanSearch className="orbit-icon-3 text-lime-400 w-full h-full" />
                                        </div>
                                        <div className="absolute top-1/2 right-0 translate-x-3.5 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 flex items-center justify-center p-2 z-20">
                                            <FileText className="orbit-icon-3 text-fuchsia-400 w-full h-full" />
                                        </div>
                                    </div>

                                    {/* Orbit Ring 4 */}
                                    <div className="orbit-ring-4 absolute w-[130px] h-[130px] sm:w-[200px] sm:h-[200px] rounded-full border-2 border-dashed border-[#1A5CDD]/80 flex items-center justify-center">
                                        <div className="absolute top-2 right-2 w-9 h-9 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 flex items-center justify-center p-2 z-20">
                                            <LineChart className="orbit-icon-4 text-yellow-400 w-full h-full" />
                                        </div>
                                        <div className="absolute bottom-2 left-2 w-9 h-9 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 flex items-center justify-center p-2 z-20">
                                            <PieChart className="orbit-icon-4 text-teal-400 w-full h-full" />
                                        </div>
                                    </div>

                                    {/* Center Logo */}
                                    <div className="w-26 h-26 sm:w-32 sm:h-32 text-white flex flex-col items-center justify-center z-30 p-4 ">
                                        <img alt="Syscorp Logo" loading="lazy" width="120" height="50" className="w-auto h-8 sm:h-11 object-contain drop-shadow-md brightness-0 invert" src="/images/logo/logo.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Modern Bento Cards Grid */}
                    <div className="max-w-7xl mx-auto mt-16 px-2 md:px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                            {onPageServicesData.map((item, index) => {
                                const Icon = item.icon;
                                const isHero = index === 0;
                                return (
                                    <div
                                        key={index}
                                        className={`group relative bg-white rounded-3xl p-7 md:p-9 border border-slate-150 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(26,92,221,0.12)] hover:border-[#1A5CDD]/30 transition-all duration-500 overflow-hidden flex flex-col justify-between ${isHero ? "md:col-span-2 bg-gradient-to-br from-white via-[#F8FAFF] to-[#EEF4FF] border-[#1A5CDD]/20 shadow-[0_10px_30px_rgba(26,92,221,0.06)]" : ""
                                            }`}
                                    >
                                        {/* Corner Accent Glow */}
                                        <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#1A5CDD]/10 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <div>
                                            {/* Top Row: Step Tag + Icon Badge */}
                                            <div className="flex items-center justify-between mb-6">
                                                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1A5CDD]/10 text-[#1A5CDD] text-xs font-extrabold tracking-wider uppercase">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD]" />
                                                    Step {String(index + 1).padStart(2, "0")}
                                                </span>
                                                <div className="w-12 h-12 rounded-2xl bg-[#F0F8FF] border border-[#1A5CDD]/15 text-[#1A5CDD] flex items-center justify-center group-hover:bg-[#1A5CDD] group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm">
                                                    <Icon size={22} strokeWidth={2.2} />
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <h4 className="text-xl md:text-2xl font-extrabold text-[#011146] mb-3 group-hover:text-[#1A5CDD] transition-colors duration-300">
                                                {item.title}
                                            </h4>

                                            {/* Description */}
                                            <p className="text-slate-600 text-[15px] leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>

                                        {/* Bottom Hover Line Indicator */}
                                        <div className="w-0 h-1 bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8] rounded-full mt-6 group-hover:w-full transition-all duration-500" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium Sticky Sidebar Feature List */}
            <section className="py-20 bg-[#F8FAFC] border-y border-slate-100 relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">

                        {/* Left: Sticky Sidebar */}
                        <div className="lg:w-1/3 w-full">
                            <div className="sticky top-32">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A5CDD]/10 border border-[#1A5CDD]/10 text-[#1A5CDD] text-[13px] font-bold tracking-wide uppercase mb-6 shadow-sm">
                                    <LayoutDashboard size={14} />
                                    <span>On-Page Services</span>
                                </div>

                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#011146] mb-6 leading-tight">
                                    Everything you need to <br className="hidden lg:block" />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8]">rank higher.</span>
                                </h3>

                                <p className="text-slate-500 text-[16px] leading-relaxed mb-8">
                                    Our comprehensive On-Page SEO solutions cover every critical element of your website's architecture and content, ensuring Google loves your site as much as your users do.
                                </p>

                                <div className="hidden lg:block w-24 h-1 bg-gradient-to-r from-[#1A5CDD] to-transparent rounded-full mb-8"></div>

                                {/* Decorative SEO Illustration */}
                                <div className="relative mt-8 hidden lg:block group">
                                    {/* Soft glow behind image */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#1A5CDD]/20 to-[#38bdf8]/20 rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-700 pointer-events-none"></div>
                                    <div className="relative overflow-hidden rounded-[24px] ">
                                        <img src="/images/seo/seo-8.png" alt="On-Page SEO Optimization Dashboard" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Flowing Borderless List */}
                        <div className="lg:w-2/3 w-full">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                                {[
                                    { title: "Keyword Optimization", desc: "Strategic placement of primary, long-tail, and semantic keywords.", icon: Search },
                                    { title: "Content Optimization", desc: "Enhancing content for relevance, readability and engagement.", icon: FileText },
                                    { title: "Title Tag Optimization", desc: "Keyword-focused title tags for better search visibility and CTR.", icon: Target },
                                    { title: "Meta Description", desc: "Compelling meta descriptions that encourage users to click.", icon: Braces },
                                    { title: "Header Tag Hierarchy", desc: "Proper H1–H4 heading structure for SEO and readability.", icon: BarChart },
                                    { title: "SEO-Friendly URLs", desc: "Clean, descriptive URLs optimized for search engines.", icon: Link2 },
                                    { title: "Internal Linking", desc: "Connecting pages to improve crawlability and page authority.", icon: LinkIcon },
                                    { title: "Image Optimization", desc: "Optimizing alt text, file names and image loading performance.", icon: ImageIcon },
                                    { title: "Schema Markup", desc: "Structured data for better search visibility and rich results.", icon: Code2 },
                                    { title: "Core Web Vitals", desc: "Improving loading speed, responsiveness and visual stability.", icon: Gauge },
                                    { title: "Mobile Optimization", desc: "Seamless performance across all mobile devices and viewports.", icon: Smartphone },
                                    { title: "Duplicate Content", desc: "Resolving duplicate content issues affecting your rankings.", icon: CopyCheck },
                                    { title: "Broken Link Resolution", desc: "Fixing broken links for better website health and user experience.", icon: TriangleAlert },
                                    { title: "Speed Optimization", desc: "Reducing load times to improve overall Core Web Vitals scores.", icon: Rocket },
                                    { title: "UX Improvements", desc: "Enhancing navigation, layout and conversion-focused design.", icon: Users },
                                    { title: "Ongoing Monitoring", desc: "Continuously refining webpages to maintain top performance.", icon: Activity },
                                ].map((item, i) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={i} className="group flex items-start gap-5 cursor-default">
                                            {/* Icon Node */}
                                            <div className="w-12 h-12 rounded-[14px] bg-white border border-slate-200 shadow-sm text-[#1A5CDD] flex items-center justify-center shrink-0 group-hover:bg-[#1A5CDD] group-hover:text-white group-hover:border-[#1A5CDD] group-hover:shadow-[0_8px_20px_rgba(26,92,221,0.25)] transition-all duration-300 group-hover:-translate-y-1">
                                                <Icon size={20} strokeWidth={2} />
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 pt-1">
                                                <h4 className="text-[16px] font-bold text-[#011146] mb-2 group-hover:text-[#1A5CDD] transition-colors duration-300">
                                                    {item.title}
                                                </h4>
                                                <p className="text-[14px] text-slate-500 leading-relaxed">
                                                    {item.desc}
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

            {/* Technical SEO */}

            <section className="py-20 bg-slate-50 relative overflow-hidden">
                {/* Background ambient light */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1A5CDD]/5 blur-3xl rounded-full pointer-events-none" />

                <div className="container mx-auto px-4 relative max-w-7xl">
                    {/* Hero Split for Technical SEO */}
                    <div className="flex flex-col lg:flex-row items-center gap-10 rounded-[40px] p-4 lg:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] mb-20 bg-white border border-slate-100 group/hero relative overflow-hidden">
                        {/* Left Side: Text Content */}
                        <div className="lg:w-1/2 p-6 lg:p-10 relative z-10">
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 mb-8 shadow-sm">
                                <Settings className="text-[#1A5CDD]" size={16} />
                                <span className="text-[13px] font-bold text-[#1A5CDD] tracking-wider uppercase">Technical Optimization</span>
                            </div>

                            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#011146] mb-5 leading-tight">Technical SEO Services</h2>
                            <h3 className="text-xl font-medium text-[#1A5CDD] mb-8 leading-relaxed">
                                Build a Strong Technical Foundation for Better Search Rankings
                            </h3>

                            <p className="text-slate-600 text-[16px] leading-relaxed mb-6">
                                At SysCrop, our Technical SEO Services are designed to ensure your website is fully optimized for search engine crawling, indexing, and overall performance.
                            </p>
                            <p className="text-slate-600 text-[16px] leading-relaxed">
                                We implement industry best practices to improve your website's health, enhance user experience, and create a solid technical foundation for long-term organic growth.
                            </p>
                        </div>

                        {/* Right Side: Image Showcase */}
                        <div className="lg:w-1/2 relative z-10 flex items-center justify-center p-4 lg:p-6 mt-8 lg:mt-0">
                            {/* Ambient Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#1A5CDD]/5 rounded-full blur-[80px] pointer-events-none -z-10" />

                            {/* Image Container */}
                            <div className="relative w-full z-10 group/image lg:scale-110">
                                <img
                                    src="/images/seo/seo-3.png"
                                    alt="Technical SEO Performance"
                                    className="w-full h-auto object-contain transform group-hover/image:scale-[1.02] transition-transform duration-700 ease-out drop-shadow-[0_20px_40px_rgba(0,17,70,0.15)]"
                                />
                            </div>

                            {/* Floating Metric Badge */}
                            <div className="absolute -bottom-2 -right-2 md:bottom-3 md:right-3 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-xl flex items-center gap-3.5 border border-slate-100 z-20 group-hover:scale-105 transition-transform duration-300">
                                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                                    <Zap size={20} />
                                </div>
                                <div>
                                    <p className="text-[#011146] font-extrabold text-sm">100/100 Score</p>
                                    <p className="text-slate-500 text-xs font-medium">Core Web Vitals</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features - Dark Technical Dashboard UI */}
                    <div className="mt-16 max-w-7xl mx-auto bg-[#011146] rounded-[40px] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
                        {/* High-tech grid background */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

                        {/* Glow effects */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1A5CDD]/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#38bdf8]/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

                        <div className="text-center mb-16 relative z-10">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#38bdf8] text-xs font-bold tracking-wider uppercase mb-4 border border-white/10 backdrop-blur-sm">Technical SEO Solutions</span>
                            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">What Our Technical SEO Services Cover</h3>
                            <p className="text-slate-300 text-[16px] max-w-2xl mx-auto">Our experts optimize every technical layer of your website for better crawlability, speed, and indexing.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 relative z-10">
                            {services.map((service, index) => {
                                const Icon = service.icon;
                                return (
                                    <div key={index} className="group flex items-start gap-5 cursor-default">
                                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#1A5CDD] group-hover:border-[#38bdf8] group-hover:text-white text-[#38bdf8] transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] group-hover:-translate-y-1">
                                            <Icon size={22} strokeWidth={1.5} />
                                        </div>
                                        <div className="flex-1 pt-1">
                                            <h4 className="font-bold text-white text-[16px] mb-2 group-hover:text-[#38bdf8] transition-colors duration-300">
                                                {service.title}
                                            </h4>
                                            <p className="text-slate-400 text-[14px] leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Off-Page SEO */}
            <section className="py-20 relative overflow-hidden">
                <div className="container mx-auto px-4 relative max-w-7xl">

                    {/* Hero Split for Off-Page SEO */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-10">
                        {/* Right Side: Compact Text & Features (DOM order 1, visually right on desktop) */}
                        <div className="gsap-fade-up lg:col-span-6 lg:col-start-7 order-1 lg:order-2 relative z-10">
                            <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold text-[#1A5CDD] uppercase tracking-wider mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD]" />
                                Off-Page SEO Services
                            </span>

                            <h2 className="text-[32px] md:text-4xl lg:text-[40px] font-extrabold text-[#011146] tracking-tight mb-6 leading-[1.15]">
                                Strengthen Your Website Authority & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8]">Organic Growth</span>
                            </h2>

                            <p className="text-slate-600 text-[15px] leading-[1.8] mb-8">
                                At SysCrop, our Off-Page SEO Services strengthen your website's authority, credibility, and online reputation beyond your site. We implement strategic White Hat techniques including brand outreach, local citations, Google Business Profile optimization, and high-quality link building to boost domain authority and search engine rankings.
                            </p>

                            {/* Feature Pills */}
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                <div className="bg-[#F8FAFC] border border-slate-100 rounded-xl p-3 flex items-center gap-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                                    <div className="w-5 h-5 rounded-full bg-[#1A5CDD]/10 text-[#1A5CDD] flex items-center justify-center shrink-0">
                                        <CheckCircle2 size={12} strokeWidth={3} />
                                    </div>
                                    <span className="text-[#011146] font-bold text-xs sm:text-[13px]">Ethical White Hat SEO</span>
                                </div>
                                <div className="bg-[#F8FAFC] border border-slate-100 rounded-xl p-3 flex items-center gap-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                                    <div className="w-5 h-5 rounded-full bg-[#1A5CDD]/10 text-[#1A5CDD] flex items-center justify-center shrink-0">
                                        <CheckCircle2 size={12} strokeWidth={3} />
                                    </div>
                                    <span className="text-[#011146] font-bold text-xs sm:text-[13px]">High-Quality Links</span>
                                </div>
                            </div>

                            {/* Compact Feature Cards Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-[#F8FAFC] border border-slate-100 rounded-2xl p-4 group hover:border-[#1A5CDD]/20 hover:bg-white hover:shadow-md transition-all duration-300">
                                    <div className="flex items-center gap-2.5 mb-2">
                                        <div className="w-7 h-7 rounded-lg bg-blue-100/50 text-[#1A5CDD] flex items-center justify-center shrink-0 group-hover:bg-[#1A5CDD] group-hover:text-white transition-colors">
                                            <TrendingUp size={15} strokeWidth={2.5} />
                                        </div>
                                        <h4 className="text-[#011146] font-extrabold text-sm">Earn Greater Trust</h4>
                                    </div>
                                    <p className="text-slate-500 text-xs leading-[1.6]">
                                        Earn greater trust from search engines and attract sustainable qualified organic traffic.
                                    </p>
                                </div>

                                <div className="bg-[#F8FAFC] border border-slate-100 rounded-2xl p-4 group hover:border-[#1A5CDD]/20 hover:bg-white hover:shadow-md transition-all duration-300">
                                    <div className="flex items-center gap-2.5 mb-2">
                                        <div className="w-7 h-7 rounded-lg bg-blue-100/50 text-[#1A5CDD] flex items-center justify-center shrink-0 group-hover:bg-[#1A5CDD] group-hover:text-white transition-colors">
                                            <Globe size={15} strokeWidth={2.5} />
                                        </div>
                                        <h4 className="text-[#011146] font-extrabold text-sm">Measurable Results</h4>
                                    </div>
                                    <p className="text-slate-500 text-xs leading-[1.6]">
                                        Expand digital presence and improve search visibility with custom off-page strategies.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Left Side: Image Composition (DOM order 2, visually left on desktop) */}
                        <div className="gsap-fade-up lg:col-span-6 lg:col-start-1 order-2 lg:order-1 relative w-full h-[550px] md:h-[650px] flex items-center justify-center mt-8 lg:mt-0">

                            {/* Ambient Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#1A5CDD]/5 rounded-full blur-[80px] pointer-events-none -z-10" />

                            {/* Primary Large Image */}
                            <div className="relative w-[110%] h-[110%] group z-10 lg:-ml-8">
                                <img
                                    src="/images/seo/seo-2.png"
                                    alt="Global Network Off-Page SEO"
                                    className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-700 ease-out drop-shadow-[0_20px_40px_rgba(0,17,70,0.1)]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Features Mosaic Grid */}
                    <div className="mt-20 relative">
                        {/* Decorative Background Elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[800px] bg-gradient-to-br from-[#1A5CDD]/5 to-[#38bdf8]/5 blur-[100px] rounded-full pointer-events-none -z-10" />

                        <div className="text-center mb-16">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1A5CDD]/10 text-[#1A5CDD] text-xs font-bold tracking-wider uppercase mb-4 border border-[#1A5CDD]/10">Network & Authority</span>
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#011146] mb-4">What Our Off-Page SEO Covers</h3>
                            <p className="text-slate-600 text-[17px] max-w-2xl mx-auto">Build authority and rank higher with our comprehensive, white-hat link-building and outreach solutions.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                            {[
                                { title: "High-Quality Backlink Building", desc: "Acquire authoritative and relevant backlinks that strengthen your domain authority.", icon: Link2 },
                                { title: "Guest Posting Services", desc: "Publish high-quality content on trusted industry websites to earn valuable backlinks.", icon: FileText },
                                { title: "Business Directory Submissions", desc: "Submit your business to reputable directories for improved online visibility.", icon: BookOpen },
                                { title: "Local Citation Building", desc: "Create and optimize consistent business listings across local platforms.", icon: MapPin },
                                { title: "Google Business Profile Optimization", desc: "Strengthen your local search presence with optimized business profiles.", icon: Building2 },
                                { title: "Social Bookmarking", desc: "Promote valuable content through trusted bookmarking platforms.", icon: Bookmark },
                                { title: "Profile Creation & Brand Mentions", desc: "Increase your business's online credibility through authoritative profile creation and brand references.", icon: UserCircle },
                                { title: "Forum & Community Engagement", desc: "Build authority by participating in relevant industry discussions.", icon: Users },
                                { title: "Content Promotion & Outreach", desc: "Expand your content reach through strategic outreach campaigns.", icon: Megaphone },
                                { title: "Competitor Backlink Analysis", desc: "Identify new backlink opportunities by analyzing competitor link profiles.", icon: LineChart },
                                { title: "Link Reclamation", desc: "Recover lost backlinks and strengthen your backlink profile.", icon: RefreshCw },
                                { title: "Online Reputation Management", desc: "Improve your brand image through positive online engagement and monitoring.", icon: ThumbsUp },
                                { title: "Review Management", desc: "Encourage and manage customer reviews to strengthen trust and local SEO.", icon: Star },
                                { title: "Toxic Backlink Analysis", desc: "Identify and remove harmful backlinks that may negatively impact rankings.", icon: ShieldAlert },
                                { title: "Monthly Link Building Reports", desc: "Receive transparent reports showing backlink growth, authority improvements, and campaign performance.", icon: PieChart }
                            ].map((item, i) => {
                                const Icon = item.icon;

                                // Dynamic mosaic styling shapes
                                const shapes = [
                                    "rounded-tr-[48px] rounded-bl-[48px] rounded-tl-[16px] rounded-br-[16px]", // Leaf right
                                    "rounded-[24px]", // Standard
                                    "rounded-tl-[48px] rounded-br-[48px] rounded-tr-[16px] rounded-bl-[16px]", // Leaf left
                                    "rounded-t-[40px] rounded-b-[16px]", // Arch
                                ];

                                const shapeClass = shapes[i % shapes.length];

                                return (
                                    <div key={i} className={`group relative bg-white/80 backdrop-blur-sm ${shapeClass} p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(26,92,221,0.12)] border border-slate-100/80 hover:border-[#1A5CDD]/30 transition-all duration-500 overflow-hidden ${i % 3 === 1 ? 'lg:translate-y-8' : ''}`}>

                                        {/* Hover abstract shape */}
                                        <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-[#1A5CDD]/10 to-[#38bdf8]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none opacity-0 group-hover:opacity-100" />

                                        {/* Network Node pulsing effect on hover */}
                                        <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-[#38bdf8] opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                                        <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-[#38bdf8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_#38bdf8]"></div>

                                        <div className="relative z-10 flex flex-col h-full">
                                            <div className="w-14 h-14 rounded-[18px] bg-[#F8FAFC] border border-slate-200 flex items-center justify-center flex-shrink-0 text-[#1A5CDD] group-hover:bg-gradient-to-br group-hover:from-[#1A5CDD] group-hover:to-[#011146] group-hover:text-white group-hover:border-transparent transition-all duration-500 shadow-sm mb-6 group-hover:shadow-[0_8px_25px_rgba(26,92,221,0.4)] group-hover:-translate-y-1">
                                                <Icon size={24} strokeWidth={2} />
                                            </div>
                                            <h4 className="font-extrabold text-[#011146] text-[17px] leading-snug group-hover:text-[#1A5CDD] transition-colors duration-300 mb-3">{item.title}</h4>
                                            <p className="text-slate-500 text-[14px] leading-relaxed relative z-10 mt-auto">{item.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
            {/* Keyword Research Services */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 relative max-w-7xl">

                    {/* Hero Split for Keyword Research */}
                    <div className="flex flex-col lg:flex-row items-center gap-16 mb-20 bg-[#FAFCFF] rounded-[40px] p-5 lg:p-12 border border-[#1A5CDD]/10 shadow-[0_8px_30px_rgba(26,92,221,0.04)] relative overflow-hidden">
                        {/* Decorative background glow within the container */}
                        <div className="absolute -top-20 -left-20 w-96 h-96 bg-white blur-[80px] rounded-full pointer-events-none" />

                        {/* Left Side: Text */}
                        <div className="lg:w-1/2 relative z-10">
                            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-[#1A5CDD]/10 mb-8 shadow-sm">
                                <div className="w-10 h-10 bg-[#EEF4FF] rounded-full flex items-center justify-center">
                                    <Search className="text-[#1A5CDD]" size={20} />
                                </div>
                                <h3 className="text-xl font-bold text-[#011146]">Keyword Research Services</h3>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#011146] mb-6 leading-tight">
                                Discover the Right Keywords That Drive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8]">Qualified Traffic</span>
                            </h2>
                            <p className="text-slate-600 text-[15px] leading-relaxed mb-5">
                                Our Keyword Research Services in Pondicherry form the foundation of every successful SEO campaign. Identifying the right keywords is essential for attracting your target audience, improving search engine visibility, and generating qualified leads. As a trusted Keyword Research Company in Pondicherry, we conduct comprehensive keyword research to uncover the exact search terms your potential customers use throughout their buying journey.
                            </p>
                            <p className="text-slate-600 text-[15px] leading-relaxed">
                                Our keyword research process goes beyond analyzing search volume. We evaluate user intent, industry trends, competitor strategies, keyword difficulty, and conversion opportunities to develop a data-driven keyword strategy tailored to your business objectives. Whether you're targeting local customers, national markets, or niche industries, our strategic keyword research helps your website target high-value search terms, attract qualified organic traffic, and build a strong foundation for sustainable business growth.
                            </p>
                        </div>

                        {/* Right Side: Image with Floating Badge */}
                        <div className="lg:w-1/2 relative flex items-center justify-center mt-8 lg:mt-0">
                            {/* Ambient Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#1A5CDD]/5 rounded-full blur-[80px] pointer-events-none -z-10" />

                            <div className="relative w-[110%] lg:w-[125%] z-10 group/image lg:-ml-6">
                                <img
                                    src="/images/seo/seo-4.png"
                                    alt="Keyword Research Services Illustration"
                                    className="w-full h-auto object-contain transform group-hover/image:scale-[1.02] transition-transform duration-700 ease-out drop-shadow-[0_20px_40px_rgba(0,17,70,0.15)]"
                                />
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-2 -right-2 md:-bottom-5 md:-right-5 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-xl border border-slate-100 max-w-[210px] transform group-hover/image:-translate-y-1.5 transition-transform duration-500 hidden md:flex items-center gap-3.5 z-20">
                                <div className="w-10 h-10 bg-blue-50 text-[#1A5CDD] rounded-xl flex items-center justify-center shrink-0">
                                    <Target size={20} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <span className="font-extrabold text-base text-[#011146] block">Targeted</span>
                                    <p className="text-xs font-semibold text-slate-500 leading-snug">High-Intent Keywords</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Thematic Search Engine UI */}
                    <div className="mt-16 max-w-6xl mx-auto bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden border border-slate-200">
                        {/* Browser / Search Header */}
                        <div className="bg-slate-50 border-b border-slate-200 p-4 sm:px-6 flex flex-col sm:flex-row items-center gap-4">
                            {/* Mac window controls */}
                            <div className="hidden sm:flex items-center gap-2 pr-4 border-r border-slate-200">
                                <div className="w-3 h-3 rounded-full bg-red-400 shadow-sm"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-sm"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400 shadow-sm"></div>
                            </div>

                            {/* Search Bar Mockup */}
                            <div className="flex-1 w-full bg-white border border-slate-300 rounded-full h-11 flex items-center px-4 shadow-inner group cursor-text">
                                <Search size={18} className="text-[#1A5CDD] mr-3" />
                                <div className="flex-1 text-slate-800 font-medium text-[15px]">
                                    What do our keyword research services cover? <span className="animate-pulse font-light text-slate-400">|</span>
                                </div>
                                <div className="bg-[#1A5CDD]/10 rounded-full p-1.5 hidden sm:block">
                                    <Target size={14} className="text-[#1A5CDD]" />
                                </div>
                            </div>
                        </div>

                        {/* Search Results Body */}
                        <div className="p-6 sm:p-10">
                            <div className="flex items-center gap-6 border-b border-slate-100 pb-3 mb-6 overflow-x-auto hide-scrollbar text-[14px]">
                                <span className="text-[#1A5CDD] font-bold border-b-2 border-[#1A5CDD] pb-3 -mb-[14px] whitespace-nowrap flex items-center gap-2"><Search size={14} /> All Results</span>
                                <span className="text-slate-500 hover:text-slate-800 cursor-pointer pb-3 -mb-[14px] whitespace-nowrap">Images</span>
                                <span className="text-slate-500 hover:text-slate-800 cursor-pointer pb-3 -mb-[14px] whitespace-nowrap">News</span>
                                <span className="text-slate-500 hover:text-slate-800 cursor-pointer pb-3 -mb-[14px] whitespace-nowrap">Maps</span>
                                <span className="text-slate-500 hover:text-slate-800 cursor-pointer pb-3 -mb-[14px] whitespace-nowrap">Shopping</span>
                            </div>

                            <p className="text-sm text-slate-400 mb-8">About 10 premium SEO strategies (0.24 seconds)</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                                {[
                                    { title: "Keyword Research Process", desc: "Identify high-value keywords based on your business, industry, and target audience.", icon: Search },
                                    { title: "Search Intent Analysis", desc: "Understand user intent to target keywords that attract qualified visitors.", icon: Users },
                                    { title: "Competitor Keyword Research", desc: "Analyze competitor strategies to discover valuable keyword opportunities.", icon: LineChart },
                                    { title: "Long-Tail Keyword Research", desc: "Target highly specific keywords that improve conversion potential.", icon: Target },
                                    { title: "Local Keyword Research", desc: "Identify location-based keywords to strengthen local search visibility.", icon: MapPin },
                                    { title: "Keyword Mapping", desc: "Assign the right keywords to the right webpages for better SEO performance.", icon: Map },
                                    { title: "Competitor Gap Analysis", desc: "Find untapped keyword opportunities where competitors are gaining visibility.", icon: Zap },
                                    { title: "Keyword Difficulty Analysis", desc: "Prioritize keywords based on competition, search volume, and ranking potential.", icon: BarChart },
                                    { title: "Industry & Trending Keywords", desc: "Discover emerging search trends to keep your SEO strategy competitive.", icon: TrendingUp },
                                    { title: "SEO Keyword Strategy", desc: "Build a structured keyword plan that supports long-term search engine growth.", icon: FileText }
                                ].map((item, i) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={i} className="group cursor-pointer">
                                            <div className="flex items-center gap-2 text-[13px] text-slate-500 mb-1.5">
                                                <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-[#1A5CDD] group-hover:text-white transition-colors duration-300">
                                                    <Icon size={12} />
                                                </div>
                                                <span className="truncate">syscrop.com › services › {item.title.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}</span>
                                            </div>
                                            <h4 className="text-[19px] text-[#1A5CDD] group-hover:underline font-medium mb-1.5 leading-tight">
                                                {item.title}
                                            </h4>
                                            <p className="text-slate-600 text-[14px] leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEO Audit Services */}
            <section className="py-20 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-4 relative max-w-7xl">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-20">
                        {/* Right Side: Text */}
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#1A5CDD]/5 border border-[#1A5CDD]/10 mb-8">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                                    <Activity className="text-[#1A5CDD]" size={20} />
                                </div>
                                <h3 className="text-xl font-bold text-[#011146]">SEO Audit Services in Pondicherry</h3>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#011146] mb-6 leading-tight">
                                Identify SEO Issues and Build a Strong Foundation for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8]">Higher Search Rankings</span>
                            </h2>
                            <p className="text-slate-600 text-[15px] leading-relaxed mb-5">
                                Our SEO Audit Services in Pondicherry provide a comprehensive evaluation of your website to identify the factors affecting its search engine performance. As a trusted SEO Audit Company in Pondicherry, we conduct in-depth website audits to uncover technical issues, on-page optimization gaps, content weaknesses, backlink quality, and overall website performance. Our detailed audit reports provide clear insights and actionable recommendations, helping you build a stronger SEO foundation and improve your website's visibility in search engines.
                            </p>
                            <p className="text-slate-600 text-[15px] leading-relaxed">
                                Our SEO audit process goes beyond identifying problems. We analyze every critical aspect of your website, prioritize issues based on their impact, and create a strategic optimization roadmap that supports long-term organic growth. Whether you're launching a new SEO campaign or improving an existing website, our audit helps you make informed decisions and maximize your website's ranking potential.
                            </p>
                        </div>

                        {/* Left Side: Graphic */}
                        <div className="lg:w-1/2 relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 pointer-events-none" />
                            <div className="relative group">
                                <div className="rounded-[40px] overflow-hidden ">
                                    <div className="w-full h-[400px] flex items-center justify-center relative overflow-hidden ">
                                        <Image
                                            src="/images/seo/seo-5.png"
                                            alt="SEO Audit Services Illustration"
                                            fill
                                            className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                </div>
                                <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-md p-6 rounded-[24px] shadow-xl border border-white max-w-[220px] transform group-hover:-translate-y-2 transition-transform duration-500 hidden md:block">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-10 h-10 bg-blue-100 text-[#1A5CDD] rounded-full flex items-center justify-center">
                                            <ShieldCheck size={20} strokeWidth={2.5} />
                                        </div>
                                        <span className="font-extrabold text-2xl text-[#011146]">100%</span>
                                    </div>
                                    <p className="text-sm font-semibold text-slate-600 leading-snug">Website Health Check</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Diagnostic Audit Checklist */}
                    <div className="mt-16 max-w-5xl mx-auto">
                        <div className="bg-white rounded-[32px] p-6 sm:p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-slate-100">
                            {/* Header inside the report */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-8 mb-8 gap-6">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-extrabold text-[#011146]">Comprehensive SEO Audit</h3>
                                    <p className="text-slate-500 mt-2 font-medium">7-Point Website Health Diagnostic Checklist</p>
                                </div>
                                <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full font-bold shadow-sm self-start sm:self-auto border border-green-100">
                                    <ShieldCheck size={18} />
                                    <span className="text-sm">Status: Ready to Scan</span>
                                </div>
                            </div>

                            {/* Checklist Items */}
                            <div className="space-y-4">
                                {[
                                    { title: "Technical SEO Audit", desc: "Evaluate your website's technical health, crawlability, indexing, website speed, security, and overall search engine accessibility.", icon: Settings },
                                    { title: "On-Page SEO Audit", desc: "Review title tags, meta descriptions, headings, URL structure, internal linking, image optimization, and other on-page elements.", icon: LayoutDashboard },
                                    { title: "Content Audit", desc: "Analyze website content quality, relevance, keyword optimization, duplicate content, and opportunities for improvement.", icon: FileText },
                                    { title: "Backlink Audit", desc: "Assess your backlink profile, identify toxic or low-quality links, and evaluate opportunities to strengthen your domain authority.", icon: LinkIcon },
                                    { title: "Competitor SEO Audit", desc: "Analyze competitor websites, keyword strategies, backlink profiles, and SEO performance to identify competitive opportunities.", icon: LineChart },
                                    { title: "Local SEO Audit", desc: "Review your Google Business Profile, local citations, NAP consistency, local keywords, and local search performance.", icon: MapPin },
                                    { title: "Core Web Vitals Audit", desc: "Measure website loading speed, responsiveness, and visual stability to ensure compliance with Google's performance standards.", icon: Zap },
                                ].map((item, i) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={i} className="group flex flex-col md:flex-row md:items-center gap-5 p-5 rounded-2xl border border-slate-100 hover:border-[#1A5CDD]/30 hover:bg-[#F8FAFC] transition-all duration-300 cursor-pointer hover:shadow-sm">
                                            {/* Icon */}
                                            <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-[#1A5CDD] group-hover:text-white group-hover:border-[#1A5CDD] transition-all duration-500 shrink-0 group-hover:shadow-[0_8px_20px_rgba(26,92,221,0.3)]">
                                                <Icon size={24} strokeWidth={2} />
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1">
                                                <h4 className="text-[17px] font-bold text-[#011146] mb-1.5 group-hover:text-[#1A5CDD] transition-colors duration-300">{item.title}</h4>
                                                <p className="text-slate-500 text-[14px] leading-relaxed pr-0 md:pr-6">{item.desc}</p>
                                            </div>

                                            {/* Diagnostic Progress UI */}
                                            <div className="hidden lg:flex items-center gap-4 w-48 shrink-0 border-l border-slate-200 pl-6">
                                                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden relative">
                                                    <div className="absolute top-0 left-0 h-full bg-slate-200 rounded-full w-full"></div>
                                                    <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8] rounded-full transition-all duration-1000 ease-out w-0 group-hover:w-full"></div>
                                                </div>
                                                <div className="w-6 h-6 rounded-full flex items-center justify-center text-slate-300 group-hover:text-green-500 transition-colors duration-300 delay-[600ms]">
                                                    <CheckCircle2 size={20} strokeWidth={2.5} className="opacity-50 group-hover:opacity-100" />
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEO Reporting & Analytics Services */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 relative max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
                        {/* Left Side: Text */}
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#1A5CDD]/5 border border-[#1A5CDD]/10 mb-8">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                                    <LineChart className="text-[#1A5CDD]" size={20} />
                                </div>
                                <h3 className="text-xl font-bold text-[#011146]">SEO Reporting & Analytics</h3>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#011146] mb-6 leading-tight">
                                Measure, Analyze, and Improve Your SEO Performance with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8]">Data-Driven Insights</span>
                            </h2>
                            <p className="text-slate-600 text-[15px] leading-relaxed mb-5">
                                Our SEO Reporting & Analytics Services help businesses monitor the effectiveness of their SEO campaigns through accurate data, detailed reporting, and actionable insights. We believe every SEO strategy should be measurable, which is why we provide transparent reports that track your website's performance, keyword growth, organic traffic, and overall search visibility.
                            </p>
                            <p className="text-slate-600 text-[15px] leading-relaxed">
                                Our reporting process goes beyond presenting numbers. We analyze your website's performance, identify growth opportunities, monitor competitor progress, and provide strategic recommendations that help improve your SEO results over time. With detailed analytics and regular performance tracking, you gain complete visibility into your SEO campaign and the confidence that every optimization is contributing to your business goals.
                            </p>
                        </div>

                        {/* Right Side: Graphic */}
                        <div className="lg:w-1/2 relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full blur-3xl -z-10 pointer-events-none" />
                            <div className="relative group">
                                <div className="rounded-[40px] overflow-hidden ">
                                    <div className="w-full h-[400px] flex items-center justify-center relative overflow-hidden ">
                                        <Image
                                            src="/images/seo/seo-6.png"
                                            alt="SEO Reporting Services Illustration"
                                            fill
                                            className="object-cover transform transition-transform duration-700"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                </div>
                                <div className="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur-md p-6 rounded-[24px] shadow-xl border border-white max-w-[220px] transform group-hover:-translate-y-2 transition-transform duration-500 hidden md:block">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-10 h-10 bg-blue-100 text-[#1A5CDD] rounded-full flex items-center justify-center">
                                            <TrendingUp size={20} strokeWidth={2.5} />
                                        </div>
                                        <span className="font-extrabold text-2xl text-[#011146]">Data</span>
                                    </div>
                                    <p className="text-sm font-semibold text-slate-600 leading-snug">Actionable Insights</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Analytics Dashboard UI */}
                    <div className="mt-16 max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl md:text-4xl font-extrabold text-[#011146] mb-4">What Our Reporting Services Cover</h3>
                            <p className="text-slate-600 text-[17px] max-w-2xl mx-auto">Get complete transparency and measure your SEO ROI with our comprehensive dashboard reporting.</p>
                        </div>

                        {/* Featured Dashboard Header Card (Item 7) */}
                        <div className="bg-[#011146] rounded-[32px] p-8 md:p-12 mb-6 text-white relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center gap-8 group cursor-pointer border border-[#011146] hover:border-slate-700 transition-colors">
                            {/* Decorative Graph Background */}
                            <div className="absolute inset-0 opacity-20 pointer-events-none group-hover:scale-105 transition-transform duration-1000">
                                <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1000 300" fill="none">
                                    <path d="M0,300 L0,200 C150,250 250,50 400,150 C550,250 650,100 800,120 C900,130 950,50 1000,0 L1000,300 Z" fill="url(#grad1)"></path>
                                    <defs>
                                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#1A5CDD" stopOpacity="0.8" />
                                            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0 shadow-lg group-hover:bg-[#1A5CDD] transition-colors duration-500">
                                <FileText size={40} className="text-[#38bdf8] group-hover:text-white transition-colors" />
                            </div>

                            <div className="flex-1 relative z-10 text-center md:text-left">
                                <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                                    <h4 className="text-2xl md:text-3xl font-extrabold text-white">Monthly SEO Reports</h4>
                                    <span className="bg-emerald-500/20 text-emerald-400 text-[13px] font-bold px-3 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1">
                                        <TrendingUp size={14} /> +142% Growth
                                    </span>
                                </div>
                                <p className="text-blue-100/80 text-[16px] md:text-lg leading-relaxed max-w-3xl">
                                    Receive comprehensive monthly reports with performance summaries, completed SEO activities, ranking improvements, traffic insights, and strategic recommendations to dominate search results.
                                </p>
                            </div>
                        </div>

                        {/* 6-Item Metric Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                            {[
                                { title: "Keyword Ranking Reports", desc: "Monitor keyword positions across search engines and track ranking improvements over time.", icon: Search, trend: "+24 positions" },
                                { title: "Organic Traffic Analysis", desc: "Analyze website traffic, user behaviour, and organic growth to measure SEO performance.", icon: Users, trend: "+8.5k visits" },
                                { title: "Conversion Tracking", desc: "Track enquiries, contact form submissions, phone calls, purchases, and other valuable conversions.", icon: Target, trend: "+12.4% conv." },
                                { title: "Google Analytics Insights", desc: "Measure user engagement, traffic sources, session duration, and other key website performance metrics.", icon: LineChart, trend: "4m 12s avg." },
                                { title: "Search Console Monitoring", desc: "Monitor website indexing, search impressions, clicks, keyword performance, and technical SEO insights.", icon: Activity, trend: "100% indexed" },
                                { title: "Competitor Analysis", desc: "Compare your SEO performance with competitors to identify new ranking opportunities and market trends.", icon: Map, trend: "Top 3 Rank" },
                            ].map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <div key={i} className="group bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 hover:border-[#1A5CDD]/20 hover:shadow-[0_20px_50px_rgba(26,92,221,0.12)] transition-all duration-300 relative overflow-hidden flex flex-col cursor-default">

                                        {/* Fake Sparkline in background */}
                                        <div className="absolute bottom-0 left-0 w-full h-16 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                                            <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 20">
                                                <polyline points="0,20 15,12 30,15 45,5 60,10 75,2 100,8" fill="none" stroke="#1A5CDD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>

                                        <div className="flex items-center justify-between mb-6 relative z-10">
                                            <div className="w-12 h-12 rounded-[14px] bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-[#1A5CDD] group-hover:text-white group-hover:border-[#1A5CDD] transition-all duration-500 shadow-sm group-hover:shadow-[0_8px_20px_rgba(26,92,221,0.3)]">
                                                <Icon size={20} strokeWidth={2} />
                                            </div>
                                            <div className="bg-emerald-50 text-emerald-600 text-[12px] font-bold px-2.5 py-1 rounded-md border border-emerald-100 shadow-sm flex items-center gap-1 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                                                {item.trend}
                                            </div>
                                        </div>

                                        <h4 className="font-bold text-[#011146] text-[16px] mb-2.5 group-hover:text-[#1A5CDD] transition-colors duration-300 relative z-10">{item.title}</h4>
                                        <p className="text-slate-500 text-[14px] leading-relaxed relative z-10 flex-1">{item.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Optimization Services */}
            <section className="py-20 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-4 relative max-w-7xl">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-20">
                        {/* Right Side: Text */}
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#1A5CDD]/5 border border-[#1A5CDD]/10 mb-8">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                                    <FileText className="text-[#1A5CDD]" size={20} />
                                </div>
                                <h3 className="text-xl font-bold text-[#011146]">Content Optimization Services in Pondicherry</h3>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#011146] mb-6 leading-tight">
                                Enhance Your Website Content to Improve <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8]">Search Rankings</span>
                            </h2>
                            <p className="text-slate-600 text-[15px] leading-relaxed mb-5">
                                Our Content Optimization Services in Pondicherry are designed to improve the quality, relevance, and performance of your website content. As a trusted Content Optimization Company in Pondicherry, we optimize your existing content to align with search engine guidelines and user intent, helping your website rank higher, attract qualified organic traffic, and convert visitors into customers.
                            </p>
                            <p className="text-slate-600 text-[15px] leading-relaxed">
                                Our content optimization approach goes beyond adding keywords. We analyze content structure, readability, search intent, topical relevance, internal linking, and overall user experience to ensure every webpage delivers maximum SEO value. Whether it's your homepage, service pages, landing pages, blog articles, or location pages, we optimize your content to improve visibility, engagement, and long-term business growth.
                            </p>
                        </div>

                        {/* Left Side: Graphic */}
                        <div className="lg:w-1/2 relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full blur-3xl -z-10 pointer-events-none" />
                            <div className="relative group">
                                <div className="rounded-[40px] overflow-hidden ">
                                    <div className="w-full h-[400px] flex items-center justify-center relative overflow-hidden ">
                                        <Image
                                            src="/images/seo/seo-7.png"
                                            alt="Content Optimization Services Illustration"
                                            fill
                                            className="object-cover transform transition-transform duration-700"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                </div>
                                <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-md p-6 rounded-[24px] shadow-xl border border-white max-w-[220px] transform group-hover:-translate-y-2 transition-transform duration-500 hidden md:block">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-10 h-10 bg-blue-100 text-[#1A5CDD] rounded-full flex items-center justify-center">
                                            <CopyCheck size={20} strokeWidth={2.5} />
                                        </div>
                                        <span className="font-extrabold text-2xl text-[#011146]">Quality</span>
                                    </div>
                                    <p className="text-sm font-semibold text-slate-600 leading-snug">Engaging Content</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Thematic Content Editor UI (Masonry Layout) */}
                    <div className="mt-16 max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl md:text-4xl font-extrabold text-[#011146] mb-4">What Our Content Optimization Services Cover</h3>
                        </div>

                        <div className="bg-white rounded-[32px] p-6 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-slate-100">
                            {/* Editor Header / Toolbar Mockup */}
                            <div className="flex items-center gap-4 border-b border-slate-100 pb-6 mb-8 overflow-x-auto hide-scrollbar">
                                <div className="flex gap-2 pr-4 border-r border-slate-100 shrink-0">
                                    <div className="w-8 h-8 rounded bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-100 cursor-pointer transition-colors"><FileText size={16} /></div>
                                </div>
                                <div className="flex gap-2 pr-4 border-r border-slate-100 shrink-0">
                                    <span className="font-serif text-lg font-bold text-slate-700 px-2.5 cursor-pointer hover:bg-slate-100 rounded transition-colors">B</span>
                                    <span className="font-serif text-lg italic text-slate-700 px-2.5 cursor-pointer hover:bg-slate-100 rounded transition-colors">I</span>
                                    <span className="font-serif text-lg underline text-slate-700 px-2.5 cursor-pointer hover:bg-slate-100 rounded transition-colors">U</span>
                                </div>
                                <div className="flex gap-5 px-2 text-[14px] text-slate-500 font-medium shrink-0">
                                    <span className="flex items-center gap-1.5 cursor-pointer hover:text-slate-800 transition-colors"><Settings size={14} /> Format</span>
                                    <span className="flex items-center gap-1.5 cursor-pointer hover:text-slate-800 transition-colors"><LinkIcon size={14} /> Link</span>
                                    <span className="flex items-center gap-1.5 cursor-pointer text-[#1A5CDD]"><Zap size={14} /> Optimize</span>
                                </div>
                                <div className="ml-auto bg-[#1A5CDD] text-white text-[13px] font-bold px-5 py-2 rounded-full shadow-sm cursor-pointer hover:bg-[#011146] transition-colors shrink-0">
                                    Publish Updates
                                </div>
                            </div>

                            {/* Masonry Blocks Layout */}
                            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                                {[
                                    { title: "Website Content Audit", desc: "Evaluate your existing content to identify SEO gaps, outdated information, and opportunities for improvement.", icon: Search },
                                    { title: "Content Quality Optimization", desc: "Improve content depth, accuracy, readability, and relevance to deliver greater value to your audience.", icon: Settings },
                                    { title: "SEO Content Optimization", desc: "Optimize content with strategically placed primary, secondary, and semantic keywords while maintaining natural readability.", icon: Target },
                                    { title: "Search Intent Optimization", desc: "Align content with informational, commercial, navigational, and transactional search intent to attract the right audience.", icon: Users },
                                    { title: "Content Structure Optimization", desc: "Improve headings, paragraphs, formatting, and content hierarchy for better readability and search engine understanding.", icon: LayoutDashboard },
                                    { title: "Meta Content Optimization", desc: "Optimize page titles, meta descriptions, and headings to improve search visibility and click-through rates.", icon: FileText },
                                    { title: "Internal Linking Optimization", desc: "Connect relevant pages to improve website navigation, distribute page authority, and strengthen topical relevance.", icon: LinkIcon },
                                    { title: "Duplicate Content Resolution", desc: "Identify and eliminate duplicate or thin content that may impact your website's search performance.", icon: CopyCheck },
                                    { title: "Image & Media Optimization", desc: "Optimize image alt text, file names, captions, and multimedia content to improve accessibility and SEO.", icon: ImageIcon },
                                    { title: "Content Refresh & Updating", desc: "Revise existing content with updated information, keywords, and industry trends to maintain relevance and rankings.", icon: RefreshCw },
                                    { title: "Content Gap Analysis", desc: "Identify missing content opportunities based on competitor research and customer search behaviour.", icon: Zap },
                                    { title: "Conversion-Focused Content", desc: "Improve calls-to-action, messaging, and content flow to increase enquiries, leads, and conversions.", icon: Filter },
                                    { title: "Performance Monitoring", desc: "Track content performance, user engagement, and ranking improvements to support continuous optimization.", icon: Activity }
                                ].map((item, i) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={i} className="break-inside-avoid group relative bg-white border border-slate-100 rounded-2xl p-5 hover:border-[#1A5CDD]/30 hover:bg-[#FAFCFF] transition-all duration-300 cursor-text hover:shadow-sm">
                                            {/* Fake Drag Handle (Notion Style) */}
                                            <div className="absolute top-1/2 -left-3 md:-left-5 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-1 px-2 py-3 cursor-grab">
                                                <div className="flex gap-1"><div className="w-1 h-1 rounded-full bg-slate-300" /><div className="w-1 h-1 rounded-full bg-slate-300" /></div>
                                                <div className="flex gap-1"><div className="w-1 h-1 rounded-full bg-slate-300" /><div className="w-1 h-1 rounded-full bg-slate-300" /></div>
                                                <div className="flex gap-1"><div className="w-1 h-1 rounded-full bg-slate-300" /><div className="w-1 h-1 rounded-full bg-slate-300" /></div>
                                            </div>

                                            <div className="flex gap-4 relative z-10 pl-1 md:pl-2">
                                                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-[#1A5CDD]/10 transition-colors duration-300 border border-slate-100 group-hover:border-transparent">
                                                    <Icon size={16} className="text-slate-400 group-hover:text-[#1A5CDD] transition-colors" />
                                                </div>
                                                <div>
                                                    {/* Text Highlight Effect */}
                                                    <h4 className="font-bold text-[#011146] text-[15px] mb-1.5 inline-block relative">
                                                        <span className="relative z-10">{item.title}</span>
                                                        <span className="absolute bottom-0 left-[-4%] w-[108%] h-3 bg-[#38bdf8]/30 -z-10 rounded-sm scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></span>
                                                    </h4>
                                                    <p className="text-slate-500 text-[13.5px] leading-relaxed relative">
                                                        {item.desc}
                                                        {/* Fake text cursor on hover */}
                                                        <span className="hidden group-hover:inline-block w-0.5 h-3.5 bg-[#1A5CDD] animate-pulse ml-1 align-middle translate-y-[-1px]"></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEO Process Section */}
            <section className="py-20 relative overflow-clip">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">

                        {/* Left Side: Sticky Title */}
                        <div className="lg:w-5/12 relative z-10">
                            <div className="sticky top-32">
                                <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 rounded-full px-3.5 py-1 text-xs font-bold text-[#1A5CDD] uppercase tracking-wider mb-6 shadow-sm">
                                    How We Work
                                </span>
                                <h2 className="text-4xl md:text-5xl font-extrabold text-[#011146] tracking-tight mb-8 leading-tight">
                                    Our SEO Process
                                </h2>
                                <p className="text-slate-600 text-lg leading-relaxed mb-10">
                                    Every SEO strategy is developed around business objectives, industry insights, and audience behaviour. From technical optimization to content improvements, every step follows proven White Hat SEO practices to strengthen search visibility and online presence
                                </p>

                                {/* Decorative elements */}
                                <div className="hidden lg:flex gap-4 items-center mt-12 opacity-60">
                                    <div className="w-16 h-1.5 bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8] rounded-full"></div>
                                    <div className="w-6 h-1.5 bg-[#38bdf8] rounded-full opacity-50"></div>
                                    <div className="w-2 h-1.5 bg-[#38bdf8] rounded-full opacity-30"></div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Stepper Pathway */}
                        <div className="lg:w-7/12 relative">
                            {/* Cards Container */}
                            <div className="space-y-12 md:space-y-32 pb-32">
                                {seoProcess.map((item, index) => (
                                    <div
                                        key={index}
                                        className="relative flex flex-col sm:flex-row gap-6 md:gap-10 group sticky transition-transform duration-500 ease-out"
                                        style={{
                                            top: `calc(120px + ${index * 12}px)`,
                                            zIndex: index + 10
                                        }}
                                    >
                                        {/* Number Marker */}
                                        <div className="relative z-10 shrink-0">
                                            <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center group-hover:border-[#1A5CDD] group-hover:bg-[#1A5CDD] transition-all duration-500">
                                                <span className="text-slate-400 font-black text-xl md:text-2xl group-hover:text-white transition-colors duration-500">0{item.step}</span>
                                            </div>
                                        </div>

                                        {/* Content Card */}
                                        <div className="flex-1 bg-white p-8 md:p-10 rounded-[28px] shadow-sm border border-slate-200 group-hover:border-[#1A5CDD]/50 transition-all duration-500 relative overflow-hidden">
                                            {/* Abstract Watermark Number */}
                                            <div className="absolute -bottom-8 -right-8 text-[120px] md:text-[180px] font-black text-slate-50 group-hover:text-[#EEF4FF] transition-colors duration-500 select-none pointer-events-none leading-none tracking-tighter">
                                                {item.step}
                                            </div>

                                            <h3 className="text-xl md:text-[22px] font-extrabold text-[#011146] mb-4 group-hover:text-[#1A5CDD] transition-colors relative z-10">{item.title}</h3>
                                            <p className="text-slate-500 text-[15px] md:text-[16px] leading-relaxed relative z-10">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 lg:py-28 bg-[#F0F8FF]/50 border-t border-[#1A5CDD]/10">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <span className="text-xs uppercase font-extrabold tracking-wider text-[#1A5CDD] px-3.5 py-1.5 bg-[#1A5CDD]/10 rounded-full">
                            Have Questions?
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#011146] mt-4 tracking-tight">
                            Frequently Asked Questions (FAQs)
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((item, index) => {
                            const isOpen = activeFaq === index;
                            return (
                                <div
                                    key={index}
                                    className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-white ${isOpen ? "border-[#1A5CDD] shadow-lg shadow-blue-900/5" : "border-slate-200 hover:border-slate-300"
                                        }`}
                                >
                                    <button
                                        onClick={() => setActiveFaq(isOpen ? null : index)}
                                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                    >
                                        <h3 className="text-[17px] font-bold text-[#011146] pr-8">
                                            {index + 1}. {item.q}
                                        </h3>
                                        <ChevronDown
                                            className={`text-[#1A5CDD] transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : "rotate-0"
                                                }`}
                                            size={20}
                                        />
                                    </button>
                                    <div
                                        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="px-6 pb-6 text-slate-600 text-[15px] leading-relaxed">
                                                {item.a}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-20 lg:py-28 bg-white border-t border-slate-100">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16 relative">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#011146] tracking-tight mb-4">
                            Industries We Serve in Puducherry
                        </h2>
                        <p className="text-slate-500 text-[15px] md:text-base max-w-2xl mx-auto">
                            From Puducherry's key industries to retail, healthcare, and professional services — we've done SEO for them all.
                        </p>
                    </div>

                    <style>{`
                        @keyframes scroll-marquee {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                        }
                        .animate-marquee {
                            animation: scroll-marquee 35s linear infinite;
                            display: flex;
                            width: max-content;
                        }
                        .marquee-container:hover .animate-marquee {
                            animation-play-state: paused;
                        }
                    `}</style>

                    <div className="relative w-full overflow-hidden marquee-container py-4 -mx-6 px-6 lg:mx-0 lg:px-0">
                        {/* Gradient masks for smooth fade in/out on edges */}
                        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                        <div className="animate-marquee gap-4 md:gap-6">
                            {[
                                { title: "Tourism & Hospitality", icon: Palmtree, color: "text-emerald-600 bg-emerald-50 border-emerald-100 group-hover:bg-emerald-500" },
                                { title: "Wellness & Yoga Retreats", icon: Flower2, color: "text-pink-600 bg-pink-50 border-pink-100 group-hover:bg-pink-500" },
                                { title: "Education & Institutions", icon: GraduationCap, color: "text-blue-600 bg-blue-50 border-blue-100 group-hover:bg-blue-500" },
                                { title: "Restaurants & Cafes", icon: Utensils, color: "text-orange-600 bg-orange-50 border-orange-100 group-hover:bg-orange-500" },
                                { title: "Real Estate", icon: Home, color: "text-indigo-600 bg-indigo-50 border-indigo-100 group-hover:bg-indigo-500" },
                                { title: "Retail & Boutiques", icon: ShoppingCart, color: "text-purple-600 bg-purple-50 border-purple-100 group-hover:bg-purple-500" },
                                { title: "Legal & Finance", icon: Scale, color: "text-slate-700 bg-slate-100 border-slate-200 group-hover:bg-slate-600" },
                                { title: "Healthcare & Clinics", icon: Stethoscope, color: "text-rose-600 bg-rose-50 border-rose-100 group-hover:bg-rose-500" },
                                { title: "Logistics & Transport", icon: Truck, color: "text-amber-600 bg-amber-50 border-amber-100 group-hover:bg-amber-500" },
                                { title: "Fitness & Wellness", icon: Dumbbell, color: "text-cyan-600 bg-cyan-50 border-cyan-100 group-hover:bg-cyan-500" },
                                { title: "Art & Culture", icon: Palette, color: "text-fuchsia-600 bg-fuchsia-50 border-fuchsia-100 group-hover:bg-fuchsia-500" },
                                { title: "Engineering Services", icon: Wrench, color: "text-sky-600 bg-sky-50 border-sky-100 group-hover:bg-sky-500" },
                                // Duplicate array for seamless infinite scrolling
                                { title: "Tourism & Hospitality", icon: Palmtree, color: "text-emerald-600 bg-emerald-50 border-emerald-100 group-hover:bg-emerald-500" },
                                { title: "Wellness & Yoga Retreats", icon: Flower2, color: "text-pink-600 bg-pink-50 border-pink-100 group-hover:bg-pink-500" },
                                { title: "Education & Institutions", icon: GraduationCap, color: "text-blue-600 bg-blue-50 border-blue-100 group-hover:bg-blue-500" },
                                { title: "Restaurants & Cafes", icon: Utensils, color: "text-orange-600 bg-orange-50 border-orange-100 group-hover:bg-orange-500" },
                                { title: "Real Estate", icon: Home, color: "text-indigo-600 bg-indigo-50 border-indigo-100 group-hover:bg-indigo-500" },
                                { title: "Retail & Boutiques", icon: ShoppingCart, color: "text-purple-600 bg-purple-50 border-purple-100 group-hover:bg-purple-500" },
                                { title: "Legal & Finance", icon: Scale, color: "text-slate-700 bg-slate-100 border-slate-200 group-hover:bg-slate-600" },
                                { title: "Healthcare & Clinics", icon: Stethoscope, color: "text-rose-600 bg-rose-50 border-rose-100 group-hover:bg-rose-500" },
                                { title: "Logistics & Transport", icon: Truck, color: "text-amber-600 bg-amber-50 border-amber-100 group-hover:bg-amber-500" },
                                { title: "Fitness & Wellness", icon: Dumbbell, color: "text-cyan-600 bg-cyan-50 border-cyan-100 group-hover:bg-cyan-500" },
                                { title: "Art & Culture", icon: Palette, color: "text-fuchsia-600 bg-fuchsia-50 border-fuchsia-100 group-hover:bg-fuchsia-500" },
                                { title: "Engineering Services", icon: Wrench, color: "text-sky-600 bg-sky-50 border-sky-100 group-hover:bg-sky-500" },
                            ].map((item, index) => (
                                <div key={index} className="flex-shrink-0 group flex items-center gap-3.5 px-3 py-2.5 pr-6 rounded-full bg-white border border-slate-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_25px_rgba(26,92,221,0.1)] transition-all duration-300 cursor-pointer w-max hover:border-[#1A5CDD]/40 hover:-translate-y-0.5">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-sm border ${item.color}`}>
                                        <item.icon size={20} strokeWidth={2.2} />
                                    </div>
                                    <span className="text-[14px] font-extrabold text-[#011146] group-hover:text-[#1A5CDD] transition-colors duration-300 whitespace-nowrap">
                                        {item.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
