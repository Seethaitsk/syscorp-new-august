"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Share2, TrendingUp, Target, BarChart, MessageCircle, Users, CheckCircle2,
    ArrowRight, ShieldCheck, Rocket, Smartphone, Heart, Image as ImageIcon, Video,
    FileText, LayoutDashboard, LinkIcon, Settings, Code2, Globe, Bookmark,
    ChevronDown, Palmtree, Flower2, GraduationCap, Utensils, Home, ShoppingCart, Scale, Stethoscope, Truck, Dumbbell, Palette, Wrench, Search, Zap, Activity, UserCircle, Calendar, LineChart, Building2,
    MousePointerClick, DollarSign, Megaphone, MonitorPlay, MapPin, Key, Facebook, Instagram, Grid, Play
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

export default function MetaAdsPage() {
    const mainRef = useRef<HTMLDivElement>(null);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [isIntroExpanded, setIsIntroExpanded] = useState(false);

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

            gsap.fromTo(
                ".gsap-line-draw",
                { width: "0%" },
                {
                    width: "100%",
                    duration: 2,
                    ease: "power3.inOut",
                    scrollTrigger: {
                        trigger: ".gsap-line-draw",
                        start: "top 80%",
                    }
                }
            );
        }, mainRef);

        return () => ctx.revert();
    }, []);

    const benefits = [
        { title: "Reach Your Ideal Audience", desc: "Target customers based on interests, demographics, location, age, behaviour, and purchasing intent.", icon: Target },
        { title: "Increase Brand Awareness", desc: "Introduce your brand to a wider audience across Facebook and Instagram.", icon: Globe },
        { title: "Generate High-Quality Leads", desc: "Attract potential customers who are more likely to engage with your business.", icon: Users },
        { title: "Drive Website Traffic", desc: "Bring more relevant visitors to your website, landing pages, or online store.", icon: MousePointerClick },
        { title: "Boost Sales & Conversions", desc: "Promote products and services with campaigns designed to encourage enquiries and purchases.", icon: DollarSign },
        { title: "Multiple Ad Formats", desc: "Advertise using image ads, video ads, carousel ads, stories, reels, and lead generation forms.", icon: ImageIcon },
        { title: "Advanced Audience Targeting", desc: "Reach the right people at the right time with precise audience segmentation.", icon: Target },
        { title: "Flexible Advertising Budget", desc: "Set daily or lifetime budgets that suit your business and marketing goals.", icon: Settings },
        { title: "Performance Tracking & Insights", desc: "Measure campaign performance with detailed analytics and optimize for better results.", icon: BarChart },
        { title: "Support Long-Term Business Growth", desc: "Build stronger customer relationships while increasing engagement, leads, and sales through consistent advertising.", icon: TrendingUp }
    ];

    const services = [
        { title: "1. Campaign Strategy & Planning", desc: "As part of our Meta Ads Services in Pondicherry, we create customized Meta advertising strategies based on your business objectives, target audience, industry, and budget.", icon: LayoutDashboard },
        { title: "2. Audience Research & Targeting", desc: "We analyze your ideal customers and create targeted audience segments based on demographics, interests, location, online behaviour, and customer preferences. This helps your ads reach the people most likely to engage with your business.", icon: Target },
        { title: "3. Facebook Ads Management", desc: "Our experts create and manage Facebook advertising campaigns that help businesses increase visibility, generate leads, promote products, and connect with potential customers through effective ad placements.", icon: Activity },
        { title: "4. Instagram Ads Management", desc: "We design and optimize Instagram advertising campaigns using engaging visuals, videos, Stories, and Reels Ads to help brands improve engagement, attract new customers, and strengthen their social media presence.", icon: ImageIcon },
        { title: "5. Ad Creative Design & Copywriting", desc: "We create compelling ad creatives, headlines, descriptions, and calls-to-action that capture attention and encourage users to interact with your advertisements. Our approach focuses on creating content that matches your brand identity and campaign objectives.", icon: FileText },
        { title: "6. Lead Generation Campaigns", desc: "We create Facebook and Instagram Lead Ads that help businesses collect customer enquiries directly through the platform. These campaigns are designed to simplify the enquiry process and help businesses connect with potential customers.", icon: Users },
        { title: "7. Remarketing Campaigns", desc: "We help businesses reconnect with users who have previously visited their website, interacted with their social media pages, or shown interest in their products and services through personalized remarketing campaigns.", icon: Target },
        { title: "8. Campaign Optimization & Budget Management", desc: "We continuously monitor campaign performance, adjust targeting, optimize budgets, and improve ad performance to ensure your advertising campaigns remain effective and aligned with your business goals.", icon: Settings },
        { title: "9. A/B Testing & Performance Improvement", desc: "We test different ad creatives, audience groups, headlines, and campaign settings to identify what works best. This helps improve engagement, conversions, and overall campaign effectiveness.", icon: Activity },
        { title: "10. Conversion Tracking & Analytics", desc: "We set up tracking tools to measure important campaign activities such as clicks, leads, website visits, and conversions. Detailed performance insights help us make informed decisions and improve campaign results.", icon: BarChart },
        { title: "11. Reporting & Campaign Analysis", desc: "We provide transparent performance reports that include key metrics, campaign insights, and recommendations. Regular analysis helps identify growth opportunities and improve future advertising strategies.", icon: LineChart }
    ];

    const seoProcess = [
        { step: "1", title: "Business Analysis & Strategy Planning", desc: "We understand your business goals, target audience, and competitors to create a customized Meta Ads strategy that aligns with your objectives." },
        { step: "2", title: "Audience Research & Campaign Setup", desc: "We identify the right audience based on interests, demographics, location, and behaviour, then set up campaigns with suitable objectives, ad formats, and targeting options." },
        { step: "3", title: "Ad Creation & Campaign Launch", desc: "We create engaging ad creatives, compelling copy, and optimized campaigns designed to attract attention and encourage customer actions." },
        { step: "4", title: "Monitoring & Optimization", desc: "We continuously monitor campaign performance, optimize targeting, budgets, and creatives to improve engagement, leads, and overall campaign effectiveness." },
        { step: "5", title: "Reporting & Improvement", desc: "We provide performance reports with key insights and recommendations to refine your Meta Ads strategy and improve future campaigns." }
    ];

    const adFormats = [
        { title: "Facebook Feed Ads", icon: Facebook, color: "text-[#1877F2] bg-[#1877F2]/10 border-[#1877F2]/20 group-hover:bg-[#1877F2] group-hover:border-[#1877F2] group-hover:text-white" },
        { title: "Instagram Feed Ads", icon: Instagram, color: "text-[#E1306C] bg-[#E1306C]/10 border-[#E1306C]/20 group-hover:bg-[#E1306C] group-hover:border-[#E1306C] group-hover:text-white" },
        { title: "Facebook & Instagram Stories Ads", icon: Smartphone, color: "text-[#F56040] bg-[#F56040]/10 border-[#F56040]/20 group-hover:bg-[#F56040] group-hover:border-[#F56040] group-hover:text-white" },
        { title: "Facebook & Instagram Reels Ads", icon: MonitorPlay, color: "text-[#C13584] bg-[#C13584]/10 border-[#C13584]/20 group-hover:bg-[#C13584] group-hover:border-[#C13584] group-hover:text-white" },
        { title: "Carousel Ads", icon: Grid, color: "text-[#1A5CDD] bg-[#1A5CDD]/10 border-[#1A5CDD]/20 group-hover:bg-[#1A5CDD] group-hover:border-[#1A5CDD] group-hover:text-white" },
        { title: "Video Ads", icon: Video, color: "text-rose-500 bg-rose-50 border-rose-100 group-hover:bg-rose-500 group-hover:border-rose-500 group-hover:text-white" },
        { title: "Lead Generation Ads", icon: Users, color: "text-emerald-500 bg-emerald-50 border-emerald-100 group-hover:bg-emerald-500 group-hover:border-emerald-500 group-hover:text-white" },
        { title: "Remarketing Ads", icon: Target, color: "text-amber-500 bg-amber-50 border-amber-100 group-hover:bg-amber-500 group-hover:border-amber-500 group-hover:text-white" },
        { title: "Catalog & Shopping Ads", icon: ShoppingCart, color: "text-purple-500 bg-purple-50 border-purple-100 group-hover:bg-purple-500 group-hover:border-purple-500 group-hover:text-white" },
        { title: "Messenger Ads", icon: MessageCircle, color: "text-[#00B2FF] bg-[#00B2FF]/10 border-[#00B2FF]/20 group-hover:bg-[#00B2FF] group-hover:border-[#00B2FF] group-hover:text-white" }
    ];

    const faqs = [
        { q: "What is Meta Ads Management?", a: "Meta Ads Management is the process of creating, managing, and optimizing paid advertising campaigns across Facebook and Instagram. It helps businesses reach their target audience, increase brand awareness, generate leads, and promote products or services effectively." },
        { q: "Why should I choose Syscorp for Meta Ads Management Services?", a: "Syscorp provides customized Meta Ads Management Services based on your business goals, target audience, and budget. Our team manages campaign planning, audience targeting, ad creation, optimization, and reporting to help businesses improve their Facebook and Instagram advertising performance." },
        { q: "What types of Facebook and Instagram Ads does Syscorp manage?", a: "We manage various Meta advertising campaigns, including Facebook Feed Ads, Instagram Feed Ads, Stories Ads, Reels Ads, Carousel Ads, Video Ads, Lead Generation Ads, Remarketing Ads, and Catalog Ads based on your business objectives." },
        { q: "How can Meta Ads help my business grow?", a: "Meta Ads help businesses connect with potential customers based on their interests, location, demographics, and online behaviour. They can help increase brand visibility, drive website traffic, generate enquiries, improve customer engagement, and support sales growth." },
        { q: "Can Syscorp manage my existing Facebook and Instagram Ads campaigns?", a: "Yes. We can analyze your existing campaigns, identify improvement areas, optimize audience targeting, ad creatives, budgets, and campaign settings to improve advertising performance." },
        { q: "Does Syscorp provide Meta Ads campaign reports?", a: "Yes. We provide detailed performance reports that include important metrics such as reach, impressions, clicks, engagement, leads, conversions, and campaign insights to help you understand your advertising results." }
    ];

    const whyChooseUs = [
        { title: "Customized Meta Advertising Strategies", desc: "We create advertising strategies based on your business goals, target audience, industry, and budget to ensure your campaigns are aligned with your objectives.", icon: Settings },
        { title: "Expert Audience Targeting", desc: "We identify and target the right audience using demographics, interests, location, and user behaviour to improve ad relevance and engagement.", icon: Target },
        { title: "Creative Ad Solutions", desc: "Our team develops engaging ad creatives, captions, and campaign messages that help your brand capture attention across Facebook and Instagram.", icon: Palette },
        { title: "Continuous Campaign Optimization", desc: "We regularly monitor campaign performance, test different strategies, and optimize ads to improve engagement, leads, and overall campaign effectiveness.", icon: Activity },
        { title: "Transparent Reporting", desc: "We provide clear campaign reports with important insights, helping you understand your ad performance and make informed marketing decisions.", icon: FileText },
        { title: "Business-Focused Advertising Approach", desc: "Whether your goal is lead generation, brand awareness, website traffic, or sales growth, we create Meta Ads campaigns focused on achieving your business objectives.", icon: LayoutDashboard }
    ];

    return (
        <main ref={mainRef} className="bg-white min-h-screen overflow-x-clip font-sans">
            <HeaderBanner
                title={
                    <>
                        Meta Ads Service in Pondicherry<span className="text-[#38bdf8] font-serif italic font-normal">(Social Media Ads)</span>
                    </>
                }
                description="Leading Meta Ads (Social Media Ads) Services in Pondicherry"
            />

            {/* Intro Section */}
            <section className="py-20 bg-[#F0F8FF]/60 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#1A5CDD]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="gsap-fade-up lg:col-span-7">
                            <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 rounded-full px-3.5 py-1 text-xs font-bold text-[#1A5CDD] uppercase tracking-wider mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] inline-block animate-pulse" />
                                Maximize Your ROI
                            </span>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-[#011146] tracking-tight mb-6 leading-tight">
                                Leading <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8]">Meta Ads Management Services</span> in Pondicherry for Facebook & Instagram Advertising
                            </h2>
                            <p className="text-slate-700 text-[18px] leading-relaxed mb-6 font-bold">
                                Expand Your Reach, Generate High-Quality Leads, and Grow Your Business with Professional Meta Ads Management.
                            </p>
                            <p className="text-slate-600 text-[16px] md:text-[17px] leading-relaxed mb-6">
                                At Syscorp, we provide professional Meta Ads Management (Facebook & Instagram Ads) Services in Pondicherry that help businesses increase brand visibility, generate quality leads, and connect with the right audience through Facebook and Instagram advertising. As a trusted Meta Ads Agency in Pondicherry, we create and manage customized advertising campaigns tailored to your business goals and target audience.
                            </p>

                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isIntroExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                                <p className="text-slate-600 text-[16px] md:text-[17px] leading-relaxed mb-6">
                                    Our Meta Ads Management Services cover everything from audience targeting and ad creative development to campaign optimization and performance monitoring. Whether you're looking to increase website traffic, generate enquiries, boost online sales, or build brand awareness, we help you achieve your marketing objectives through effective Facebook and Instagram advertising.
                                </p>
                                <p className="text-slate-600 text-[16px] md:text-[17px] leading-relaxed mb-6">
                                    Whether you're a startup, small business, eCommerce brand, educational institution, healthcare provider, retail business, or service-based company, our Facebook & Instagram Ads Services are designed to help you reach more potential customers and support your business growth.
                                </p>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 mt-8">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 bg-[#011146] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#1A5CDD] transition-all shadow-lg shadow-blue-900/10 hover:-translate-y-0.5"
                                >
                                    Get a Free Meta Ads Audit <ArrowRight size={16} />
                                </Link>
                                <button
                                    onClick={() => setIsIntroExpanded(!isIntroExpanded)}
                                    className="inline-flex items-center gap-2 bg-white text-[#1A5CDD] border-2 border-[#1A5CDD]/20 px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-[#1A5CDD]/5 hover:border-[#1A5CDD]/30 transition-all"
                                >
                                    {isIntroExpanded ? "Read Less" : "Read More"}
                                    <ChevronDown size={16} className={`transition-transform duration-300 ${isIntroExpanded ? "rotate-180" : ""}`} />
                                </button>
                            </div>
                        </div>

                        {/* Image Right Side (Redesigned with Overlapping Layout) */}
                        <div className="gsap-fade-up lg:col-span-5 relative w-full h-[450px] md:h-[550px] flex items-center justify-center mt-12 lg:mt-0">

                            {/* Primary Large Image */}
                            <div className="relative w-[85%] sm:w-[80%] h-[90%] rounded-[24px] overflow-hidden z-10 group">
                                <Image
                                    src="/images/seo/metadd.png"
                                    alt="Meta Ads Management"
                                    fill
                                    priority
                                    className="object-cover transition-transform duration-700"
                                />
                            </div>

                            {/* Floating Badge (Top Right) */}
                            <div className="absolute top-16 -right-6 lg:-right-8 bg-white px-4 py-2.5 rounded-full shadow-lg flex items-center gap-2.5 border border-slate-100 z-30 animate-bounce-slow">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                                <p className="text-[#011146] font-bold text-[13px]">Active Clients 200+</p>
                            </div>

                            {/* Floating Badge (Bottom Left) */}
                            <div className="absolute bottom-24 -left-6 lg:-left-8 bg-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 z-30 animate-bounce-slow" style={{ animationDelay: "1s" }}>
                                <div className="w-10 h-10 bg-[#F0F8FF] text-[#1A5CDD] rounded-full flex items-center justify-center font-bold text-lg shadow-sm border border-[#1A5CDD]/10">
                                    <TrendingUp size={18} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <p className="text-[#011146] font-extrabold text-[14px]">99.8% Success</p>
                                    <p className="text-slate-500 text-[11px] font-medium mt-0.5">Project Delivery Rate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is Meta Ads Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto max-w-7xl">
                    <div className="bg-[#011146] rounded-[40px] relative overflow-hidden shadow-2xl">
                        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#1A5CDD]/25 rounded-full blur-[100px] pointer-events-none" />
                        <div className="absolute -bottom-20 left-[20%] w-64 h-64 bg-[#38bdf8]/10 rounded-full blur-[80px] pointer-events-none" />

                        <div className="flex flex-col md:flex-row items-stretch gap-0 relative z-10">

                            <div className="md:w-5/12 p-10 md:p-14 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-8 h-1 bg-[#38bdf8] rounded-full" />
                                    <span className="text-[#38bdf8] text-xs font-bold tracking-widest uppercase">Meta Ads Fundamentals</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-8">
                                    What is <span className="text-[#38bdf8]">Meta Ads (Social Media Ads)?</span>
                                </h2>
                            </div>

                            <div className="md:w-7/12 p-10 md:p-14 flex flex-col justify-between">
                                <div className="space-y-5">
                                    <p className="text-slate-300 text-[15px] leading-relaxed">
                                        Meta Ads Management is the process of creating, managing, and optimizing paid advertising campaigns across Facebook and Instagram using the Meta advertising platform. It helps businesses reach the right audience based on their interests, demographics, location, and online behaviour, making it easier to promote products, services, and brand messages.
                                    </p>
                                    <p className="text-slate-300 text-[15px] leading-relaxed">
                                        With Facebook & Instagram Ads, businesses can achieve goals such as increasing brand awareness, driving website traffic, generating quality leads, boosting online sales, and improving customer engagement. Through strategic audience targeting, creative ad formats, and continuous campaign optimization, Meta Ads Management Services help businesses connect with potential customers and achieve their marketing objectives.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Meta Ads is Important Section */}
            <section className="py-20 bg-[#F8FAFF] relative overflow-hidden">
                {/* Background ambient light */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1A5CDD]/5 blur-3xl rounded-full pointer-events-none" />

                <div className="container mx-auto px-4 relative max-w-7xl">
                    {/* Hero Split for Why Meta Ads is Important */}
                    <div className="flex flex-col lg:flex-row items-center gap-10 rounded-[40px] p-4 lg:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] bg-white border border-slate-100 group/hero relative overflow-hidden">
                        {/* Left Side: Text Content */}
                        <div className="lg:w-1/2 p-6 lg:p-10 relative z-10">
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 mb-8 shadow-sm">
                                <Target className="text-[#1A5CDD]" size={16} />
                                <span className="text-[13px] font-bold text-[#1A5CDD] tracking-wider uppercase">Business Impact</span>
                            </div>

                            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#011146] mb-5 leading-tight">
                                Why Meta Ads are Important for Your Business
                            </h2>

                            <p className="text-slate-600 text-[16px] leading-relaxed mb-6">
                                Meta Ads help businesses connect with the right audience, increase brand visibility, and achieve measurable marketing goals through Facebook and Instagram. Whether you're looking to build brand awareness, generate quality leads, or increase online sales, Meta Ads provide a powerful advertising platform to reach potential customers effectively.
                            </p>
                        </div>

                        {/* Right Side: Image (Premium Layout) */}
                        <div className="lg:w-1/2 relative z-10 p-6 lg:p-10">

                            {/* Decorative ambient glow behind image */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-[#1A5CDD]/30 to-[#38bdf8]/30 rounded-full blur-[80px] -z-10 pointer-events-none" />

                            {/* Main Image Container */}
                            <div className="relative overflow-hidden rounded-[32px] shadow-[0_20px_50px_rgba(1,17,70,0.1)] border-[6px] border-white z-10 w-full aspect-[4/3] group/image bg-white">
                                <Image
                                    src="/images/seo/why_meta.png"
                                    alt="Meta Ads Performance Impact"
                                    fill
                                    priority
                                    className="w-full h-full object-cover transform transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#011146]/30 to-transparent pointer-events-none opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Floating Stat Card (Bottom Left) */}
                            <div className="absolute -bottom-4 -left-2 lg:-left-6 z-30">
                                <div className="bg-white px-6 py-5 rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.12)] border border-slate-100 flex items-center gap-5 animate-bounce-slow">
                                    <div className="w-14 h-14 rounded-[16px] bg-[#1A5CDD]/10 flex items-center justify-center text-[#1A5CDD] border border-[#1A5CDD]/20">
                                        <Users size={24} strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <p className="text-[24px] font-extrabold text-[#011146] leading-none mb-1">6,561+</p>
                                        <p className="text-slate-500 text-[13px] font-bold tracking-wide uppercase">Satisfied Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits of Meta Ads (Social Media Ads) - Sticky Sidebar Layout */}
            <section className="py-20 bg-white border-y border-slate-100 relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">

                        {/* Left: Sticky Sidebar */}
                        <div className="lg:w-1/3 w-full">
                            <div className="sticky top-32">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A5CDD]/10 border border-[#1A5CDD]/10 text-[#1A5CDD] text-[13px] font-bold tracking-wide uppercase mb-6 shadow-sm">
                                    <TrendingUp size={14} />
                                    <span>Meta Ads Benefits</span>
                                </div>

                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#011146] mb-6 leading-tight">
                                    Benefits of <br className="hidden lg:block" />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8]">Meta Ads (Social Media Ads)</span>
                                </h3>

                                <p className="text-slate-500 text-[16px] leading-relaxed mb-8">
                                    Our Meta Ads (Social Media Ads) Services help businesses maximize their online visibility by reaching potential customers at the right time, driving qualified traffic, and improving conversion rates. Through strategic campaign management and continuous optimization, we help your business achieve measurable results while maximizing your advertising return on investment (ROI).
                                </p>



                            </div>
                        </div>

                        {/* Right: Flowing Borderless List */}
                        <div className="lg:w-2/3 w-full">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                                {benefits.map((item, i) => {
                                    const Icon = item.icon || Activity;
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
            {/* Explore Our Meta Advertising Solutions */}
            <section className="py-20 bg-[#F8FAFC] relative overflow-hidden">
                <style>{`
                    @keyframes marquee-left {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(calc(-50% - 12px)); }
                    }
                    @keyframes marquee-right {
                        0% { transform: translateX(calc(-50% - 12px)); }
                        100% { transform: translateX(0); }
                    }
                    .animate-marquee-left {
                        animation: marquee-left 35s linear infinite;
                    }
                    .animate-marquee-right {
                        animation: marquee-right 35s linear infinite;
                    }
                    .marquee-container:hover .animate-marquee-left,
                    .marquee-container:hover .animate-marquee-right {
                        animation-play-state: paused;
                    }
                `}</style>

                <div className="container mx-auto px-6 max-w-7xl relative z-10 mb-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="inline-flex items-center justify-center gap-2 px-5 py-1.5 rounded-full bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 text-[#1A5CDD] text-[12px] font-bold tracking-wider uppercase mb-5 shadow-sm">
                            <Target size={14} /> Ad Formats
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#011146] tracking-tight mb-4">
                            Explore Our Meta Advertising Solutions
                        </h2>
                        <p className="text-slate-500 text-[15px] leading-relaxed">
                            Reach your ideal audience with the right advertising format on Facebook and Instagram. At Syscorp, our Meta Ads Services in Pondicherry include creating and managing a wide range of Meta advertising campaigns tailored to your business goals, helping you increase brand awareness, generate quality leads, drive website traffic, and boost online sales.
                        </p>
                    </div>
                </div>

                {/* Marquees */}
                <div className="w-full overflow-hidden marquee-container flex flex-col gap-6 relative py-6 -my-6">
                    {/* Fading Edges */}
                    <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    {/* Row 1: Left Scroll */}
                    <div className="flex w-max animate-marquee-left gap-6">
                        {[...adFormats, ...adFormats].map((format, index) => {
                            const Icon = format.icon || Activity;
                            return (
                                <div key={`row1-${index}`} className="group flex items-center gap-4 bg-white border border-slate-200 px-6 py-4 rounded-full hover:border-[#1A5CDD]/30 hover:shadow-[0_10px_30px_rgba(26,92,221,0.08)] transition-all duration-300 cursor-default whitespace-nowrap hover:-translate-y-1">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${format.color}`}>
                                        <Icon size={20} strokeWidth={1.8} />
                                    </div>
                                    <h4 className="font-bold text-[#011146] text-[15px] group-hover:text-[#1A5CDD] transition-colors duration-300 pr-2">{format.title}</h4>
                                </div>
                            );
                        })}
                    </div>

                    {/* Row 2: Right Scroll */}
                    <div className="flex w-max animate-marquee-right gap-6">
                        {[...adFormats.slice().reverse(), ...adFormats.slice().reverse()].map((format, index) => {
                            const Icon = format.icon || Activity;
                            return (
                                <div key={`row2-${index}`} className="group flex items-center gap-4 bg-white border border-slate-200 px-6 py-4 rounded-full hover:border-[#1A5CDD]/30 hover:shadow-[0_10px_30px_rgba(26,92,221,0.08)] transition-all duration-300 cursor-default whitespace-nowrap hover:-translate-y-1">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${format.color}`}>
                                        <Icon size={20} strokeWidth={1.8} />
                                    </div>
                                    <h4 className="font-bold text-[#011146] text-[15px] group-hover:text-[#1A5CDD] transition-colors duration-300 pr-2">{format.title}</h4>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* What Our Meta Ads Services Cover */}
            <section className="py-20 bg-[#011146] relative overflow-hidden rounded-[40px] mx-4 lg:mx-auto max-w-[96%] my-12 ">
                {/* Blueprint Grid Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

                {/* Subtle Radial Glow in Center */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#1A5CDD]/20 blur-[120px] rounded-full pointer-events-none" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center justify-center mb-6">
                            <span className="px-5 py-1.5 rounded-full bg-[#1A5CDD]/10 border border-[#1A5CDD]/30 text-[#38bdf8] text-[12px] font-bold tracking-wider uppercase backdrop-blur-sm">
                                Complete Social Media Ads Solutions
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
                            What Our Meta Ads Management Services Cover
                        </h2>
                        <p className="text-slate-300 text-[16px] leading-relaxed max-w-2xl mx-auto">
                            Our Meta Ads Management Services in Pondicherry help businesses create, manage, and optimize effective Facebook and Instagram advertising campaigns. We handle campaign planning, audience targeting, ad creation, optimization, and performance tracking to improve reach, engagement, and conversions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14 pt-10">
                        {services.map((item, index) => {
                            const Icon = item.icon || Activity;
                            return (
                                <div key={index} className="group flex items-start gap-5 cursor-default">
                                    {/* Icon Container with Blueprint styling */}
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#38bdf8] shrink-0 group-hover:bg-[#1A5CDD] group-hover:border-[#1A5CDD] group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(26,92,221,0.15)] group-hover:shadow-[0_0_25px_rgba(26,92,221,0.4)]">
                                        <Icon size={22} strokeWidth={1.8} />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 pt-1">
                                        <h4 className="text-white text-[16px] font-bold mb-2 group-hover:text-[#38bdf8] transition-colors duration-300">
                                            {item.title}
                                        </h4>
                                        <p className="text-slate-400 text-[14px] leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Meta Ads Process Section - Horizontal Pipeline */}
            <section className="py-20 bg-[#F8FAFC] relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#1A5CDD]/5 to-transparent rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute bottom-0 left-[-200px] w-[600px] h-[600px] bg-gradient-to-tr from-[#38bdf8]/5 to-transparent rounded-full blur-[80px] pointer-events-none" />

                <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="inline-flex items-center justify-center gap-2 px-5 py-1.5 rounded-full bg-white border border-slate-200 text-[#1A5CDD] text-[12px] font-bold tracking-wider uppercase mb-6 shadow-sm">
                            <Rocket size={14} /> Campaign Execution
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#011146] tracking-tight mb-6">
                            Our Meta Ads Management Process
                        </h2>
                        <p className="text-slate-500 text-[16px] leading-relaxed">
                            A strategic, data-driven approach designed to maximize your ROI. We handle everything from initial audience research to continuous optimization, ensuring your campaigns deliver measurable results.
                        </p>
                    </div>

                    <div className="relative mt-16">
                        {/* Horizontal Connecting Line (Desktop) */}
                        <div className="absolute top-[45px] left-[10%] w-[80%] h-[2px] bg-slate-200 hidden lg:block overflow-hidden">
                            <div className="gsap-line-draw h-full bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8]" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
                            {seoProcess.map((item, index) => (
                                <div key={index} className="flex flex-col items-center text-center group cursor-default relative">

                                    {/* Number Node */}
                                    <div className="w-[90px] h-[90px] rounded-full bg-white border-[4px] border-slate-100 text-slate-300 font-black text-3xl flex items-center justify-center mb-8 group-hover:border-[#1A5CDD] group-hover:text-[#1A5CDD] group-hover:shadow-[0_10px_30px_rgba(26,92,221,0.2)] transition-all duration-300 relative z-10">
                                        0{item.step}
                                        {/* Pulse effect */}
                                        <div className="absolute inset-0 rounded-full border-2 border-[#1A5CDD] scale-100 opacity-0 group-hover:animate-ping" style={{ animationDuration: '2s' }} />
                                    </div>

                                    {/* Card Content */}
                                    <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] group-hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] group-hover:border-[#1A5CDD]/20 transition-all duration-300 w-full flex-1 flex flex-col relative z-10 group-hover:-translate-y-1">
                                        <h3 className="text-[17px] md:text-[18px] font-bold text-[#011146] mb-3 leading-snug group-hover:text-[#1A5CDD] transition-colors">{item.title}</h3>
                                        <p className="text-slate-500 text-[14px] leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Syscorp */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 relative max-w-7xl">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-20">
                        {/* Right Side: Text */}
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#1A5CDD]/5 border border-[#1A5CDD]/10 mb-8">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                                    <Activity className="text-[#1A5CDD]" size={20} />
                                </div>
                                <h3 className="text-xl font-bold text-[#011146]">Why Syscorp</h3>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#011146] mb-6 leading-tight">
                                Why Choose Syscorp for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8]">Meta Ads Management?</span>
                            </h2>
                            <p className="text-slate-600 text-[15px] leading-relaxed mb-5">
                                At Syscorp, our Meta Ads Services in Pondicherry help businesses build effective Facebook and Instagram advertising campaigns that connect with the right audience and support their marketing goals. Our Meta Ads Management Services focus on strategic planning, creative advertising, audience targeting, and continuous optimization to help businesses improve their online presence and generate valuable customer engagement.
                            </p>
                        </div>

                        {/* Left Side: Graphic */}
                        <div className="lg:w-1/2 relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#1A5CDD]/10 to-[#38bdf8]/10 rounded-full blur-3xl -z-10 pointer-events-none" />
                            <div className="relative group">
                                <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white bg-white">
                                    <div className="w-full h-[400px] flex items-center justify-center relative overflow-hidden bg-slate-900">
                                        <Image
                                            src="/images/seo/metaadd.png"
                                            alt="Meta Ads Expertise"
                                            fill
                                            className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                </div>
                                <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-md p-6 rounded-[24px] shadow-xl border border-white max-w-[220px] transform group-hover:-translate-y-2 transition-transform duration-500 hidden md:block">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-10 h-10 bg-blue-100 text-[#1A5CDD] rounded-full flex items-center justify-center">
                                            <TrendingUp size={20} strokeWidth={2.5} />
                                        </div>
                                        <span className="font-extrabold text-2xl text-[#011146]">ROI</span>
                                    </div>
                                    <p className="text-sm font-semibold text-slate-600 leading-snug">Focused on Maximum Returns</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 text-center max-w-3xl mx-auto mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#011146] tracking-tight">What Sets Syscorp Apart?</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                        {whyChooseUs.map((item, i) => {
                            const Icon = item.icon || CheckCircle2;
                            return (
                                <div key={i} className="group bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 hover:border-[#1A5CDD]/20 hover:shadow-[0_20px_50px_rgba(26,92,221,0.12)] transition-all duration-300 relative overflow-hidden flex flex-col cursor-default">
                                    <div className="flex items-center mb-6 relative z-10">
                                        <div className="w-12 h-12 rounded-[14px] bg-slate-50 border border-slate-100 flex items-center justify-center text-[#1A5CDD] group-hover:bg-[#1A5CDD] group-hover:text-white group-hover:border-[#1A5CDD] transition-all duration-500 shadow-sm">
                                            <Icon size={20} strokeWidth={2} />
                                        </div>
                                    </div>
                                    <h4 className="font-bold text-[#011146] text-[16px] mb-2.5 group-hover:text-[#1A5CDD] transition-colors duration-300 relative z-10">{item.title}</h4>
                                    <p className="text-slate-500 text-[14px] leading-relaxed relative z-10 flex-1">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            {/* FAQ Section */}
            <section className="py-20 bg-[#F8FAFC]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                        
                        {/* Left Column - Content */}
                        <div className="lg:w-1/3 flex flex-col justify-start top-32">
                            <div className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 rounded-full px-3.5 py-1 text-[11px] font-black text-[#1A5CDD] uppercase tracking-widest mb-6 w-fit shadow-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD]"></span>
                                FREQUENTLY ASKED QUESTIONS
                            </div>
                            
                            <h2 className="text-4xl md:text-[44px] font-extrabold text-[#011146] tracking-tight mb-4 leading-[1.15]">
                                Your Questions <br />
                                <span className="text-[#1A5CDD]">Answered</span>
                            </h2>
                            
                            <p className="text-slate-500 text-[15.5px] leading-relaxed mb-10 max-w-sm">
                                Find clear, honest answers to common questions from our team of experienced professionals.
                            </p>
                            
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
                                {faqs.map((faq, index) => (
                                    <div
                                        key={index}
                                        className={`transition-all duration-300 rounded-[20px] overflow-hidden border ${activeFaq === index 
                                                ? "border-[#1A5CDD]/30 bg-white shadow-[0_15px_40px_rgba(26,92,221,0.08)]" 
                                                : "border-slate-200/80 bg-white/60 hover:bg-white hover:border-slate-300 hover:shadow-sm"
                                            }`}
                                    >
                                        <button
                                            className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer group"
                                            onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                                        >
                                            <span className={`font-extrabold text-[15.5px] md:text-[16px] pr-8 transition-colors duration-300 ${activeFaq === index ? "text-[#1A5CDD]" : "text-[#011146] group-hover:text-[#1A5CDD]"}`}>
                                                {index + 1}. {faq.q}
                                            </span>
                                            <span className={`w-[34px] h-[34px] rounded-[10px] flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm ${activeFaq === index ? "bg-[#1A5CDD] text-white" : "bg-slate-200/60 text-slate-600 group-hover:bg-slate-200 group-hover:text-slate-800"}`}>
                                                {activeFaq === index ? (
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
                                                ) : (
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                                                )}
                                            </span>
                                        </button>
                                        <div
                                            className={`transition-all duration-300 ease-in-out ${activeFaq === index ? "max-h-96 opacity-100 pb-7 px-6" : "max-h-0 opacity-0 overflow-hidden px-6"
                                                }`}
                                        >
                                            <div className="w-full h-px bg-slate-100 mb-5"></div>
                                            <p className="text-slate-500 leading-relaxed text-[14.5px] font-medium pr-4">
                                                {faq.a}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
