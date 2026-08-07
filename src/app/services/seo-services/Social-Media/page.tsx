"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Share2, TrendingUp, Target, BarChart, MessageCircle, Users, CheckCircle2,
    ArrowLeft, ArrowRight, ShieldCheck, Rocket, Smartphone, Heart, Image as ImageIcon, Video,
    FileText, LayoutDashboard, LinkIcon, Settings, Code2, Globe, Bookmark,
    ChevronDown, ChevronRight, Palmtree, Flower2, GraduationCap, Utensils, Home, ShoppingCart, Scale, Stethoscope, Truck, Dumbbell, Palette, Wrench, Search, Zap, Activity, UserCircle, Calendar, LineChart, Building2
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderBanner from "@/components/ui/HeaderBanner";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

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

export default function SocialMediaOptimizationPage() {
    const mainRef = useRef<HTMLDivElement>(null);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [processRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [Autoplay({ delay: 3500, stopOnInteraction: true })]);

    const scrollPrev = () => {
        if (emblaApi) emblaApi.scrollPrev();
    };
    const scrollNext = () => {
        if (emblaApi) emblaApi.scrollNext();
    };

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
        }, mainRef);

        return () => ctx.revert();
    }, []);

    const benefits = [
        { title: "Brand Presence", desc: "Strengthen your brand presence across major social media platforms.", icon: Target },
        { title: "Organic Reach", desc: "Increase organic reach and profile visibility.", icon: TrendingUp },
        { title: "Build Trust", desc: "Build trust through a professional and consistent brand identity.", icon: ShieldCheck },
        { title: "Audience Engagement", desc: "Improve audience engagement and customer interactions.", icon: Users },
        { title: "Website Traffic", desc: "Drive more traffic to your website and landing pages.", icon: ArrowRight },
        { title: "Audience Growth", desc: "Increase followers with genuine and targeted audience growth.", icon: Users },
        { title: "Brand Awareness", desc: "Enhance brand awareness and online credibility.", icon: Globe },
        { title: "Content Performance", desc: "Improve content performance through strategic optimization.", icon: FileText },
        { title: "Customer Loyalty", desc: "Encourage customer loyalty and long-term relationships.", icon: Heart },
        { title: "Stay Active", desc: "Stay active with a consistent social media presence.", icon: Activity }
    ];

    const services = [
        { title: "Social Media Profile Optimization", desc: "We optimize your social media profiles with complete business information, branded visuals, compelling descriptions, contact details, website links, and relevant keywords to create a professional and trustworthy online presence.", icon: UserCircle },
        { title: "Brand Identity & Profile Branding", desc: "Build a consistent and recognizable brand identity by optimizing profile images, cover banners, brand messaging, colors, and visual elements that reflect your business across all social media platforms.", icon: Palette },
        { title: "Content Strategy & Planning", desc: "Develop a customized content strategy based on your business goals, target audience, and industry trends. We create structured content plans that keep your social media profiles active, engaging, and aligned with your marketing objectives.", icon: FileText },
        { title: "Content Optimization", desc: "Optimize social media posts with engaging captions, relevant keywords, hashtags, images, videos, and call-to-action elements to improve reach, engagement, and content performance.", icon: LayoutDashboard },
        { title: "Hashtag Research & Optimization", desc: "Identify high-performing and industry-relevant hashtags that improve content discoverability, expand audience reach, and increase engagement across social media platforms.", icon: Search },
        { title: "Social Media Posting & Scheduling", desc: "Maintain a consistent posting schedule using platform best practices to maximize audience engagement, increase visibility, and ensure regular communication with your followers.", icon: Calendar },
        { title: "Audience Engagement Optimization", desc: "Strengthen customer relationships by encouraging meaningful interactions, responding to comments and messages, and creating engaging content that builds an active online community.", icon: MessageCircle },
        { title: "Platform-Specific Optimization", desc: "Optimize your presence across platforms such as Facebook, Instagram, LinkedIn, X (Twitter), YouTube, Pinterest, and Google Business Profile, using strategies tailored to each platform's audience and algorithm.", icon: Share2 },
        { title: "Social Media SEO", desc: "Improve the discoverability of your social media profiles by optimizing profile information, keywords, descriptions, website links, and multimedia content, helping your business appear in both social media and search engine results.", icon: Search },
        { title: "Competitor Analysis", desc: "Analyze your competitors' social media performance, content strategies, audience engagement, and posting trends to identify opportunities that strengthen your competitive advantage.", icon: Activity },
        { title: "Performance Monitoring & Analytics", desc: "Track important performance metrics such as follower growth, engagement rate, profile visits, reach, impressions, and audience behavior. Our detailed reports provide actionable insights that help improve your social media strategy.", icon: BarChart },
        { title: "Continuous Social Media Optimization", desc: "Social media trends and platform algorithms constantly evolve. We continuously refine your profiles, content strategy, posting schedule, and engagement techniques to ensure sustainable growth and long-term success.", icon: Settings }
    ];

    const seoProcess = [
        { step: "1", title: "Business Consultation & Requirement Analysis", desc: "We begin by understanding your business, industry, target audience, competitors, brand identity, and marketing objectives. This helps us create a customized Social Media Optimization strategy that aligns with your business goals." },
        { step: "2", title: "Social Media Profile Audit", desc: "Our team performs a detailed audit of your existing social media profiles to evaluate profile completeness, branding consistency, content quality, audience engagement, and overall performance. This helps identify improvement opportunities and build a stronger optimization strategy." },
        { step: "3", title: "Social Media Strategy Development", desc: "Based on our research and audit findings, we develop a customized SMO roadmap that includes content planning, platform selection, posting frequency, engagement strategies, branding improvements, and growth opportunities." },
        { step: "4", title: "Profile & Content Optimization", desc: "Our experts optimize your social media profiles, improve branding elements, create engaging content strategies, optimize captions and hashtags, and implement platform-specific best practices to strengthen your online presence." },
        { step: "5", title: "Audience Engagement & Community Management", desc: "We focus on building meaningful relationships with your audience by encouraging engagement, responding to comments and messages, monitoring customer interactions, and maintaining an active social media community." },
        { step: "6", title: "Performance Monitoring & Continuous Optimization", desc: "We continuously monitor profile performance, engagement metrics, follower growth, content effectiveness, and audience insights. Regular performance reports help us refine the strategy, improve results, and ensure your social media presence continues to grow effectively." }
    ];

    const industries = [
        { title: "IT & Software Companies", icon: Code2, color: "text-blue-600 bg-blue-50 border-blue-100 group-hover:bg-blue-500" },
        { title: "Healthcare & Hospitals", icon: Stethoscope, color: "text-rose-600 bg-rose-50 border-rose-100 group-hover:bg-rose-500" },
        { title: "Educational Institutions", icon: GraduationCap, color: "text-emerald-600 bg-emerald-50 border-emerald-100 group-hover:bg-emerald-500" },
        { title: "Real Estate Companies", icon: Home, color: "text-indigo-600 bg-indigo-50 border-indigo-100 group-hover:bg-indigo-500" },
        { title: "Manufacturing Industries", icon: Wrench, color: "text-slate-700 bg-slate-100 border-slate-200 group-hover:bg-slate-600" },
        { title: "Retail Stores", icon: ShoppingCart, color: "text-purple-600 bg-purple-50 border-purple-100 group-hover:bg-purple-500" },
        { title: "Restaurants & Cafés", icon: Utensils, color: "text-orange-600 bg-orange-50 border-orange-100 group-hover:bg-orange-500" },
        { title: "Hotels & Hospitality", icon: Palmtree, color: "text-sky-600 bg-sky-50 border-sky-100 group-hover:bg-sky-500" },
        { title: "Construction Companies", icon: Building2, color: "text-amber-600 bg-amber-50 border-amber-100 group-hover:bg-amber-500" },
        { title: "Home Service Businesses", icon: Home, color: "text-cyan-600 bg-cyan-50 border-cyan-100 group-hover:bg-cyan-500" },
        { title: "Legal & Financial Firms", icon: Scale, color: "text-indigo-600 bg-indigo-50 border-indigo-100 group-hover:bg-indigo-500" },
        { title: "eCommerce Businesses", icon: ShoppingCart, color: "text-purple-600 bg-purple-50 border-purple-100 group-hover:bg-purple-500" },
        { title: "Automotive Businesses", icon: Truck, color: "text-slate-700 bg-slate-100 border-slate-200 group-hover:bg-slate-600" },
        { title: "Beauty & Wellness Centres", icon: Flower2, color: "text-pink-600 bg-pink-50 border-pink-100 group-hover:bg-pink-500" },
        { title: "Professional Service Providers", icon: Users, color: "text-blue-600 bg-blue-50 border-blue-100 group-hover:bg-blue-500" }
    ];

    const faqs = [
        { q: "What is Social Media Optimization (SMO)?", a: "Social Media Optimization (SMO) is the process of optimizing your social media profiles, content, and engagement strategies to improve brand visibility, increase audience interaction, and strengthen your online presence across social media platforms." },
        { q: "Which social media platforms do you optimize?", a: "We provide optimization services for major social media platforms, including Facebook, Instagram, LinkedIn, X (Twitter), YouTube, Pinterest, and Google Business Profile, based on your business requirements." },
        { q: "How is SMO different from Social Media Marketing (SMM)?", a: "SMO focuses on improving your organic social media presence through profile optimization, content strategy, and audience engagement. SMM focuses on paid advertising campaigns to generate immediate reach, traffic, and conversions." },
        { q: "How long does it take to see results from SMO?", a: "Social Media Optimization is a long-term strategy. While improvements in profile quality and engagement can be seen within a few weeks, significant growth in audience engagement and brand visibility typically develops over several months through consistent optimization." },
        { q: "Why should I choose SysCrop for Social Media Optimization Services?", a: "SysCrop delivers customized SMO strategies that combine professional profile optimization, engaging content planning, audience engagement, and continuous performance monitoring. Our goal is to help your business build a stronger social media presence, improve brand credibility, and achieve sustainable digital growth." }
    ];

    const whyChooseUs = [
        { title: "Customized SMO Strategies", desc: "Every social media strategy is tailored to your business goals, industry, target audience, and preferred social media platforms.", icon: Settings },
        { title: "Professional Profile Optimization", desc: "We optimize your social media profiles with complete business information, professional branding, and engaging content to strengthen your online presence.", icon: LayoutDashboard },
        { title: "Creative Content Planning", desc: "Our team develops content strategies that educate, engage, and inspire your audience while maintaining consistency across all platforms.", icon: FileText },
        { title: "Platform-Specific Optimization", desc: "We implement best practices for Facebook, Instagram, LinkedIn, X (Twitter), YouTube, Pinterest, and other leading social media platforms.", icon: Share2 },
        { title: "Audience Engagement Focus", desc: "We help build meaningful customer relationships by encouraging interactions, managing engagement, and strengthening your online community.", icon: Users },
        { title: "Brand Consistency", desc: "We ensure your business maintains a consistent brand identity, messaging, and visual appearance across every social media platform.", icon: Palette },
        { title: "Organic Growth Strategies", desc: "Our optimization techniques focus on increasing organic reach, improving audience engagement, and growing your followers naturally.", icon: TrendingUp },
        { title: "Performance Monitoring & Reporting", desc: "We provide detailed performance reports with valuable insights into profile growth, audience engagement, content performance, and overall campaign success.", icon: LineChart },
        { title: "Experienced Professionals", desc: "Our team stays updated with the latest social media trends, platform updates, and optimization techniques to deliver the best possible results.", icon: Activity },
        { title: "Continuous Optimization", desc: "Social media is constantly evolving. We continuously refine your profiles, content strategy, and engagement approach to ensure long-term growth and consistent performance.", icon: Rocket }
    ];

    return (
        <main ref={mainRef} className="bg-white min-h-screen overflow-x-clip font-sans">
            <HeaderBanner
                title={
                    <>
                        Social Media Optimization <span className="text-[#38bdf8] font-serif italic font-normal">Services</span>
                    </>
                }
                description="Strengthen Your Brand Presence and Engage Your Audience Across Social Media Platforms"
            />

            {/* Intro Section - Hero Redesign */}
            <section className="py-20 lg:py-28 bg-[#F0F6FF] relative overflow-hidden">
                {/* Background Decorators */}
                {/* 1. Light blue radial gradient & blur circles */}
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[700px] bg-[#1A5CDD]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-[#1A5CDD]/8 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-[#38bdf8]/12 rounded-full blur-3xl pointer-events-none" />

                {/* 2. Background Dot Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.05] pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(#1A5CDD 1.5px, transparent 1.5px)`,
                        backgroundSize: `24px 24px`
                    }}
                />

                {/* 3. Abstract Wave Shapes */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
                        <path d="M-100,300 C250,150 650,450 1000,280 C1250,180 1450,380 1600,250 L1600,800 L-100,800 Z" fill="url(#hero-wave-1)" opacity="0.3" />
                        <defs>
                            <linearGradient id="hero-wave-1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#1A5CDD" stopOpacity="0.15" />
                                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.02" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* 4. Subtle Noise Texture */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.025] mix-blend-overlay">
                    <svg className="w-full h-full">
                        <filter id="heroNoiseFilter">
                            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
                        </filter>
                        <rect width="100%" height="100%" filter="url(#heroNoiseFilter)" />
                    </svg>
                </div>

                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes heroFloat {
                        0%, 100% { transform: translateY(0px) rotate(0deg); }
                        50% { transform: translateY(-14px) rotate(0.8deg); }
                    }
                    @keyframes heroGlowPulse {
                        0%, 100% { box-shadow: 0 0 30px rgba(26,92,221,0.2), 0 20px 50px rgba(1,17,70,0.08); }
                        50% { box-shadow: 0 0 50px rgba(56,189,248,0.35), 0 25px 60px rgba(26,92,221,0.2); }
                    }
                    @keyframes badgeSlideIn {
                        0% { opacity: 0; transform: translateY(-10px); }
                        100% { opacity: 1; transform: translateY(0); }
                    }
                    .animate-hero-float {
                        animation: heroFloat 6s ease-in-out infinite;
                    }
                    .animate-hero-glow {
                        animation: heroGlowPulse 4s ease-in-out infinite;
                    }
                    .animate-badge-slide {
                        animation: badgeSlideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                    }
                `}} />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                        {/* Left Side: Content (lg:col-span-7) */}
                        <div className="lg:col-span-7 gsap-fade-up max-w-[560px]">
                            {/* Animated Badge */}
                            <div className="inline-flex items-center gap-2.5 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 rounded-full px-4 py-1.5 text-[13px] font-extrabold text-[#1A5CDD] uppercase tracking-wider mb-6 shadow-sm animate-badge-slide">
                                <span className="w-2 h-2 rounded-full bg-[#1A5CDD] inline-block animate-ping" />
                                Boost Your Reach
                            </div>

                            {/* Heading: 42–48px */}
                            <h1 className="text-[42px] sm:text-[46px] lg:text-[48px] font-extrabold text-[#011146] tracking-tight mb-6 leading-[1.15]">
                                Professional <span className="text-[#1A5CDD] bg-clip-text text-transparent bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8]">SMO Services</span> in Pondicherry
                            </h1>

                            {/* Paragraphs: 16–17px, Line-height: 1.8–1.9, Max text width: 520–560px */}
                            <div className="space-y-6 mb-8 max-w-[550px]">
                                <p className="text-slate-600 text-[16.5px] leading-[1.85] font-normal">
                                    At SysCrop, we provide professional Social Media Optimization (SMO) Services in Pondicherry that help businesses build a strong social media presence, increase brand awareness, and connect with their target audience. As a trusted Social Media Optimization Company in Pondicherry, we optimize your social media profiles, create engaging content strategies, and improve audience engagement to ensure your business stands out across leading social media platforms.
                                </p>
                                <p className="text-slate-600 text-[16.5px] leading-[1.85] font-normal">
                                    Our SMO services go beyond simply posting content. We focus on optimizing your social media profiles, strengthening brand identity, improving content visibility, increasing organic reach, and encouraging meaningful customer interactions. Whether you're a startup, small business, enterprise, educational institution, healthcare provider, retail store, or service-based business, our customized SMO strategies help you establish a credible online presence and support long-term business growth.
                                </p>
                            </div>

                            {/* CTA & Trust Badge */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                {/* CTA Button with Micro Interactions */}
                                <Link
                                    href="/contact"
                                    className="group relative inline-flex items-center gap-3 bg-[#011146] text-white px-8 py-4 rounded-xl font-bold text-[15px] transition-all duration-300 shadow-lg shadow-blue-900/15 hover:bg-[#1A5CDD] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(26,92,221,0.35)] overflow-hidden"
                                >
                                    {/* Button Ripple / Glow overlay effect */}
                                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

                                    <span className="relative z-10">Get a Free SMO Strategy</span>
                                    <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
                                </Link>

                                {/* Trust Signal */}
                                <div className="flex items-center gap-3">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className={`w-8 h-8 rounded-full border-2 border-[#F0F6FF] bg-slate-200 z-${50 - i * 10} overflow-hidden relative`}>
                                                <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" fill className="object-cover" sizes="32px" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex gap-0.5 text-amber-400">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <svg key={star} className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                            ))}
                                        </div>
                                        <span className="text-[12px] font-bold text-slate-600">Rated 4.9/5 by Clients</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Dynamic UI Composition (lg:col-span-5) */}
                        <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
                            {/* Decorative Background Blob */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#1A5CDD]/15 via-[#38bdf8]/15 to-transparent rounded-full blur-3xl pointer-events-none opacity-80" />

                            <div className="relative w-full max-w-[480px]">
                                {/* Main Image Card */}
                                <div className="relative w-full aspect-[4/3] sm:aspect-square rounded-[32px] border-4 border-white bg-white shadow-2xl shadow-blue-900/10 overflow-hidden group z-10">
                                    <Image
                                        src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1000&auto=format&fit=crop"
                                        alt="Professional SMO Services"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        priority
                                        sizes="(max-width: 768px) 100vw, 45vw"
                                    />
                                    {/* Glass Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#011146]/40 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500" />
                                </div>

                                {/* Floating Stat Card 1 (Top Left) - Follower Growth */}
                                <div className="absolute -top-6 -left-6 sm:-left-12 z-20 bg-white/95 backdrop-blur-md rounded-[20px] p-5 shadow-xl shadow-[#011146]/5 border border-white/60 animate-hero-float flex flex-col gap-2 transform -rotate-3 hover:rotate-0 transition-transform duration-300 w-[200px]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                                            <TrendingUp size={20} className="text-emerald-600" />
                                        </div>
                                        <div>
                                            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Followers</p>
                                            <h4 className="text-[20px] font-black text-[#011146] leading-none mt-1">+28.5%</h4>
                                        </div>
                                    </div>
                                    <div className="w-full h-10 flex items-end gap-1.5 mt-2">
                                        {[30, 45, 40, 60, 55, 80, 100].map((h, i) => (
                                            <div key={i} className="flex-1 bg-gradient-to-t from-emerald-400 to-emerald-300 rounded-t-sm" style={{ height: `${h}%` }} />
                                        ))}
                                    </div>
                                </div>

                                {/* Floating Stat Card 2 (Bottom Right) - Engagement Pulse */}
                                <div className="absolute -bottom-6 -right-4 sm:-right-8 z-20 bg-[#011146]/95 backdrop-blur-md rounded-[20px] p-4 shadow-2xl shadow-[#011146]/20 border border-[#38bdf8]/30 flex items-center gap-4 transform rotate-2 hover:rotate-0 transition-transform duration-300" style={{ animation: 'heroFloat 6s ease-in-out infinite 2s' }}>
                                    <div className="relative">
                                        <div className="w-12 h-12 rounded-full border-2 border-[#38bdf8] bg-slate-800 overflow-hidden relative">
                                            <Image src="https://i.pravatar.cc/100?img=4" alt="Active User" fill className="object-cover" sizes="48px" />
                                        </div>
                                        <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-[#011146]"></span>
                                        </span>
                                    </div>
                                    <div className="pr-2">
                                        <h4 className="text-[16px] font-bold text-white leading-tight mb-1">Active Now</h4>
                                        <p className="text-[12px] font-medium text-[#38bdf8]">2.4k engagements</p>
                                    </div>
                                </div>

                                {/* Floating Platform Icon (Instagram-style) */}
                                <div className="absolute top-1/2 -right-6 sm:-right-10 z-20 w-14 h-14 bg-white rounded-2xl shadow-lg shadow-pink-500/10 border border-slate-100 flex items-center justify-center transform -translate-y-1/2 hover:scale-110 transition-transform duration-300" style={{ animation: 'heroFloat 5s ease-in-out infinite 1s' }}>
                                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="url(#ig-grad)">
                                        <defs>
                                            <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#f09433" />
                                                <stop offset="25%" stopColor="#e6683c" />
                                                <stop offset="50%" stopColor="#dc2743" />
                                                <stop offset="75%" stopColor="#cc2366" />
                                                <stop offset="100%" stopColor="#bc1888" />
                                            </linearGradient>
                                        </defs>
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* What is SMO Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto max-w-7xl">
                    <div className="bg-[#011146] rounded-[40px] relative overflow-hidden shadow-2xl">
                        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#1A5CDD]/25 rounded-full blur-[100px] pointer-events-none" />
                        <div className="absolute -bottom-20 left-[20%] w-64 h-64 bg-[#38bdf8]/10 rounded-full blur-[80px] pointer-events-none" />

                        <div className="flex flex-col md:flex-row items-stretch gap-0 relative z-10">

                            <div className="md:w-5/12 p-10 md:p-14 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-8 h-1 bg-[#38bdf8] rounded-full" />
                                    <span className="text-[#38bdf8] text-xs font-bold tracking-widest uppercase">SMO Fundamentals</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-8">
                                    What is <span className="text-[#38bdf8]">Social Media Optimization</span> (SMO)?
                                </h2>
                            </div>

                            <div className="md:w-7/12 p-10 md:p-14 flex flex-col justify-between">
                                <div className="space-y-5">
                                    <p className="text-slate-300 text-[15px] leading-relaxed">
                                        Social Media Optimization (SMO) is the process of optimizing your social media profiles, content, and overall online presence to improve brand visibility, increase audience engagement, and drive organic growth across social media platforms. It involves creating a consistent brand identity, publishing valuable content, optimizing profile information, and encouraging meaningful interactions that help businesses build trust and strengthen customer relationships.
                                    </p>
                                    <p className="text-slate-300 text-[15px] leading-relaxed">
                                        Unlike Social Media Marketing (SMM), which primarily focuses on paid advertising campaigns, Social Media Optimization emphasizes improving your organic presence through strategic profile optimization, engaging content, audience interaction, and platform-specific best practices. A well-executed SMO strategy helps businesses maintain an active social media presence while increasing brand recognition and customer engagement.
                                    </p>
                                    <p className="text-slate-200 text-[15px] leading-relaxed font-medium">
                                        By optimizing platforms such as Facebook, Instagram, LinkedIn, X (Twitter), YouTube, Pinterest, and Google Business Profile, businesses can improve their online credibility, reach a wider audience, and create stronger connections with potential customers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why SMO is Important Section - Bento Grid Layout */}
            <section className="py-20 bg-[#F0F6FF] relative overflow-hidden">
                {/* Background Decorator 1: Blurred Circles */}
                <div className="absolute top-10 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-[#1A5CDD]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#38bdf8]/15 rounded-full blur-3xl pointer-events-none" />

                {/* Background Decorator 2: Dot Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.06] pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(#1A5CDD 1.5px, transparent 1.5px)`,
                        backgroundSize: `24px 24px`
                    }}
                />

                {/* Background Decorator 3: Abstract Wave Shapes */}
                <div className="absolute inset-0 pointer-events-none opacity-30">
                    <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
                        <path d="M-100,200 C300,100 500,400 900,250 C1200,150 1400,350 1600,200 L1600,800 L-100,800 Z" fill="url(#wave-grad-1)" opacity="0.4" />
                        <path d="M-100,400 C400,250 700,500 1100,350 C1350,250 1500,450 1600,350 L1600,800 L-100,800 Z" fill="url(#wave-grad-2)" opacity="0.25" />
                        <defs>
                            <linearGradient id="wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#1A5CDD" stopOpacity="0.15" />
                                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.05" />
                            </linearGradient>
                            <linearGradient id="wave-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.1" />
                                <stop offset="100%" stopColor="#1A5CDD" stopOpacity="0.02" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* Background Decorator 4: Very Subtle Noise Texture */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay">
                    <svg className="w-full h-full">
                        <filter id="noiseFilter">
                            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
                        </filter>
                        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                    </svg>
                </div>

                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes smoFloat {
                        0%, 100% { transform: translateY(0px) rotate(0deg); }
                        50% { transform: translateY(-12px) rotate(0.5deg); }
                    }
                    @keyframes smoGlowPulse {
                        0%, 100% { box-shadow: 0 0 25px rgba(26,92,221,0.25), 0 0 50px rgba(56,189,248,0.15); }
                        50% { box-shadow: 0 0 45px rgba(26,92,221,0.45), 0 0 70px rgba(56,189,248,0.3); }
                    }
                    @keyframes smoBadgeSlide {
                        0% { opacity: 0; transform: translateX(-24px); }
                        100% { opacity: 1; transform: translateX(0); }
                    }
                    .animate-smo-float {
                        animation: smoFloat 6s ease-in-out infinite;
                    }
                    .animate-smo-glow {
                        animation: smoGlowPulse 4s ease-in-out infinite;
                    }
                    .animate-smo-badge {
                        animation: smoBadgeSlide 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                    }
                `}} />

                <div className="container mx-auto px-4 lg:px-6 relative max-w-7xl z-10">
                    {/* Bento Grid Layout: 2 Columns on desktop (Left: Business Impact, Right: Stacked Cards) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-0">

                        {/* Left Card: Business Impact (lg:col-span-7) */}
                        <div className="lg:col-span-7 gsap-fade-up bg-white/90 backdrop-blur-md rounded-[36px] p-8 md:p-12 border border-[#1A5CDD]/15 shadow-[0_15px_40px_rgba(1,17,70,0.05)] hover:shadow-[0_25px_60px_rgba(26,92,221,0.12)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between group relative overflow-hidden">
                            {/* Accent Neon Top Border Highlight Removed */}

                            <div>
                                {/* Badge -> 13px */}
                                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1A5CDD]/10 border border-[#1A5CDD]/25 mb-6 shadow-sm animate-smo-badge">
                                    <Settings className="text-[#1A5CDD]" size={15} />
                                    <span className="text-[13px] font-extrabold text-[#1A5CDD] tracking-wider uppercase">
                                        Business Impact
                                    </span>
                                </div>

                                {/* Heading -> 32px */}
                                <h2 className="text-[32px] md:text-[36px] font-extrabold text-[#011146] mb-6 leading-[1.25] tracking-tight group-hover:text-[#011146]">
                                    Why Social Media Optimization is Important for Your Business
                                </h2>

                                {/* Paragraphs -> 16px, Line height -> 1.8 */}
                                <div className="space-y-5">
                                    <p className="text-slate-600 text-[16px] leading-[1.8] font-normal">
                                        In today's digital landscape, customers often visit a company's social media profiles before making a purchasing decision. An inactive or poorly optimized profile can reduce customer confidence and cause potential leads to choose your competitors.
                                    </p>
                                    <p className="text-slate-600 text-[16px] leading-[1.8] font-normal">
                                        A professionally optimized social media presence helps businesses build trust, demonstrate credibility, and stay connected with their audience.
                                    </p>
                                    <p className="text-slate-600 text-[16px] leading-[1.8] font-normal">
                                        Whether your goal is to increase brand awareness, drive website traffic, generate business enquiries, or build customer loyalty, Social Media Optimization provides a strong foundation for sustainable digital growth.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side Stacked Cards (lg:col-span-5) */}
                        <div className="lg:col-span-5 flex flex-col gap-6 justify-between">

                            {/* Card 1: Instagram Card (Image Card) */}
                            <div className="gsap-fade-up relative rounded-[24px] border-[10px] border-white bg-white shadow-xl shadow-blue-900/10 hover:scale-[1.03] transition-all duration-500 overflow-hidden animate-smo-float animate-smo-glow group cursor-pointer">
                                {/* Ambient Glow Aura around Image Card */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#1A5CDD]/20 via-transparent to-[#38bdf8]/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[14px]">
                                    <Image
                                        src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop"
                                        alt="Instagram Card - Social Media Optimization"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, 40vw"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#011146]/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                                    {/* Floating Badge overlay on image */}
                                    <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/60 text-[12px] font-bold text-[#011146] shadow-md flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 animate-pulse" />
                                        Instagram Card
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: Decorative Social Icons Card */}
                            <div className="gsap-fade-up bg-white/80 backdrop-blur-md rounded-[28px] p-6 md:p-8 border border-[#1A5CDD]/20 shadow-[0_10px_30px_rgba(26,92,221,0.08)] hover:shadow-[0_15px_40px_rgba(26,92,221,0.18)] hover:border-[#1A5CDD]/40 transition-all duration-500 group relative overflow-hidden flex flex-col justify-center">
                                {/* Frosted neon highlight background */}
                                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#1A5CDD]/10 rounded-full blur-2xl pointer-events-none" />

                                <div className="flex items-center justify-between mb-5">
                                    <h3 className="text-[15px] font-bold text-[#011146] tracking-wide uppercase flex items-center gap-2">
                                        <Share2 size={18} className="text-[#1A5CDD]" />
                                        Social Media Icons
                                    </h3>
                                    <span className="text-[12px] font-semibold text-[#1A5CDD] bg-[#1A5CDD]/10 px-3 py-1 rounded-full border border-[#1A5CDD]/20">
                                        Active Channels
                                    </span>
                                </div>

                                {/* Social Media Icons Grid / Row */}
                                <div className="grid grid-cols-5 gap-3 items-center justify-between">
                                    {/* Facebook Icon */}
                                    <div className="group/icon flex flex-col items-center gap-1.5 p-2.5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-[#1877F2] hover:border-[#1877F2] hover:-translate-y-1 transition-all duration-300 shadow-sm cursor-pointer">
                                        <svg className="w-6 h-6 fill-slate-700 group-hover/icon:fill-white transition-colors" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C20.412 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                        <span className="text-[10px] font-bold text-slate-500 group-hover/icon:text-white transition-colors">FB</span>
                                    </div>

                                    {/* Instagram Icon */}
                                    <div className="group/icon flex flex-col items-center gap-1.5 p-2.5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 hover:border-transparent hover:-translate-y-1 transition-all duration-300 shadow-sm cursor-pointer">
                                        <svg className="w-6 h-6 fill-slate-700 group-hover/icon:fill-white transition-colors" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                        <span className="text-[10px] font-bold text-slate-500 group-hover/icon:text-white transition-colors">IG</span>
                                    </div>

                                    {/* X (Twitter) Icon */}
                                    <div className="group/icon flex flex-col items-center gap-1.5 p-2.5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-black hover:border-black hover:-translate-y-1 transition-all duration-300 shadow-sm cursor-pointer">
                                        <svg className="w-6 h-6 fill-slate-700 group-hover/icon:fill-white transition-colors" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                        <span className="text-[10px] font-bold text-slate-500 group-hover/icon:text-white transition-colors">X</span>
                                    </div>

                                    {/* LinkedIn Icon */}
                                    <div className="group/icon flex flex-col items-center gap-1.5 p-2.5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:-translate-y-1 transition-all duration-300 shadow-sm cursor-pointer">
                                        <svg className="w-6 h-6 fill-slate-700 group-hover/icon:fill-white transition-colors" viewBox="0 0 24 24">
                                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-1.3.7-2.1 1.76-2.1s1.72.8 1.72 2.1v4.93h2.77M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                        </svg>
                                        <span className="text-[10px] font-bold text-slate-500 group-hover/icon:text-white transition-colors">IN</span>
                                    </div>

                                    {/* YouTube Icon */}
                                    <div className="group/icon flex flex-col items-center gap-1.5 p-2.5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-[#FF0000] hover:border-[#FF0000] hover:-translate-y-1 transition-all duration-300 shadow-sm cursor-pointer">
                                        <svg className="w-6 h-6 fill-slate-700 group-hover/icon:fill-white transition-colors" viewBox="0 0 24 24">
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                        </svg>
                                        <span className="text-[10px] font-bold text-slate-500 group-hover/icon:text-white transition-colors">YT</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* Benefits of Social Media Optimization Section */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 lg:px-6 relative max-w-7xl z-10">

                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16 gsap-fade-up">
                        <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 rounded-full px-4 py-1.5 text-[13px] font-extrabold text-[#1A5CDD] uppercase tracking-wider mb-4 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-[#1A5CDD] inline-block animate-ping" />
                            Strategic Value
                        </span>
                        <h3 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#011146] tracking-tight mb-4 leading-tight">
                            Benefits of Social Media Optimization
                        </h3>
                        <p className="text-slate-600 text-[16.5px] leading-[1.8] max-w-2xl mx-auto">
                            Our Social Media Optimization Services help businesses maximize their online presence by improving profile visibility, audience engagement, and brand credibility.
                        </p>
                    </div>

                    {/* Featured Dashboard Card */}
                    <div className="bg-gradient-to-r from-[#011146] via-[#0A2540] to-[#1A5CDD] rounded-[32px] p-8 md:p-12 mb-12 text-white relative overflow-hidden shadow-2xl shadow-blue-950/20 border border-white/10 group cursor-default gsap-fade-up">
                        {/* Decorative Radial Grid Pattern Background */}
                        <div
                            className="absolute inset-0 opacity-15 pointer-events-none group-hover:scale-105 transition-transform duration-1000"
                            style={{
                                backgroundImage: `radial-gradient(rgba(255,255,255,0.4) 1.5px, transparent 1.5px)`,
                                backgroundSize: `28px 28px`
                            }}
                        />

                        {/* Floating Ambient Glow aura */}
                        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#38bdf8]/20 rounded-full blur-3xl pointer-events-none animate-pulse" />

                        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                            {/* Large Icon with Glassmorphic Highlight & Floating Animation */}
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0 shadow-xl group-hover:bg-[#1A5CDD] group-hover:scale-105 transition-all duration-500 animate-hero-float">
                                <TrendingUp size={44} className="text-[#38bdf8] group-hover:text-white transition-colors duration-300" />
                            </div>

                            <div className="flex-1 text-center md:text-left">
                                <div className="flex flex-col md:flex-row items-center gap-4 mb-3 justify-center md:justify-start">
                                    <h4 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                                        Comprehensive Profile Optimization
                                    </h4>
                                    <span className="bg-emerald-500/20 text-emerald-400 text-[13px] font-extrabold px-3.5 py-1.5 rounded-full border border-emerald-500/30 flex items-center gap-1.5 shadow-sm animate-pulse">
                                        <TrendingUp size={15} /> +300% Engagement
                                    </span>
                                </div>
                                <p className="text-blue-100/85 text-[16px] leading-[1.8] max-w-3xl">
                                    Receive expertly optimized profiles that serve as powerful digital assets. We enhance brand messaging, visuals, and strategic keywords to ensure you make a strong first impression on every platform.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Benefit Cards Grid (4 Columns for Rows 1 & 2, 2 Wide Cards for Last Row) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                        {benefits.map((item, i) => {
                            const Icon = item.icon;
                            const trends = [
                                { text: "+45% Reach", isGreen: true },
                                { text: "+20% CTR", isGreen: true },
                                { text: "High Trust", isGreen: true },
                                { text: "Active", isGreen: false },
                                { text: "Growth", isGreen: true },
                                { text: "Top Tier", isGreen: false },
                                { text: "+60% Visibility", isGreen: true },
                                { text: "High Engagement", isGreen: true },
                                { text: "Loyal Base", isGreen: false },
                                { text: "24/7 Impact", isGreen: true }
                            ];
                            const trend = trends[i % trends.length];

                            // Last 2 cards (index 8 and 9) span 2 columns on desktop so the last row has 2 wide cards filling the full 4-column width
                            const isLastRow = i >= 8;
                            const colSpanClass = isLastRow ? "lg:col-span-2" : "lg:col-span-1";

                            return (
                                <div
                                    key={i}
                                    className={`group bg-white/90 backdrop-blur-md rounded-[24px] p-7 border border-slate-200/80 hover:border-[#1A5CDD]/30 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(26,92,221,0.18)] hover:-translate-y-[8px] transition-all duration-300 relative overflow-hidden flex flex-col justify-between cursor-default gsap-fade-up ${colSpanClass}`}
                                >
                                    {/* Hover Glow Accent */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#1A5CDD]/5 via-transparent to-[#38bdf8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                    <div>
                                        {/* Top Header: Icon & Integrated Badge */}
                                        <div className="flex items-center justify-between mb-6 relative z-10">
                                            {/* Icon with scale effect on hover */}
                                            <div className="w-12 h-12 rounded-[16px] bg-slate-50 border border-slate-100 flex items-center justify-center text-[#1A5CDD] group-hover:bg-[#1A5CDD] group-hover:text-white group-hover:border-[#1A5CDD] group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-[0_8px_20px_rgba(26,92,221,0.3)]">
                                                <Icon size={22} strokeWidth={2} />
                                            </div>

                                            {/* Integrated Header Badge */}
                                            <span className={`text-[12px] font-bold px-3 py-1 rounded-full border flex items-center gap-1.5 shadow-sm transition-colors duration-300 ${trend.isGreen
                                                ? 'bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500'
                                                : 'bg-blue-50 text-[#1A5CDD] border-blue-100 group-hover:bg-[#1A5CDD] group-hover:text-white group-hover:border-[#1A5CDD]'
                                                }`}>
                                                <span className="w-1.5 h-1.5 rounded-full bg-current inline-block animate-ping" />
                                                {trend.text}
                                            </span>
                                        </div>

                                        {/* Card Title -> 20-22px */}
                                        <h4 className="font-bold text-[#011146] text-[20px] mb-2.5 group-hover:text-[#1A5CDD] transition-colors duration-300 relative z-10 leading-snug">
                                            {item.title}
                                        </h4>

                                        {/* Paragraph -> 15.5px, Line Height 1.8 */}
                                        <p className="text-slate-600 text-[15.5px] leading-[1.8] relative z-10 flex-1">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* What Our SMO Services Cover */}
            <section className="py-20 bg-[#011146] relative overflow-hidden rounded-[40px] mx-4 lg:mx-auto max-w-[96%] mt-12 mb-32">
                {/* Blueprint Grid Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

                {/* Subtle Radial Glow in Center */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#1A5CDD]/20 blur-[120px] rounded-full pointer-events-none" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <div className="inline-flex items-center justify-center mb-6">
                            <span className="px-5 py-1.5 rounded-full bg-[#1A5CDD]/10 border border-[#1A5CDD]/30 text-[#38bdf8] text-[12px] font-bold tracking-wider uppercase backdrop-blur-sm">
                                Comprehensive Optimization
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                            What Our Social Media Optimization (SMO) Services Cover
                        </h2>
                        <p className="text-slate-300 text-[16px] leading-relaxed max-w-2xl mx-auto">
                            At SysCrop, we offer comprehensive Social Media Optimization (SMO) Services designed to strengthen your brand presence, improve audience engagement, and maximize your organic reach across major social media platforms.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
                        {services.map((item, index) => {
                            const Icon = item.icon;
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

            {/* SMO Process Section */}
            <section className="py-20 bg-[#F8FAFC] relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
                        <div className="max-w-2xl">
                            <span className="inline-flex items-center gap-2 text-[#3B82F6] font-semibold text-sm tracking-wide mb-3">
                                <span className="text-[#3B82F6]/60">//</span> Our Work Process
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#011146] tracking-tight leading-tight">
                                Our Proven <span className="text-[#3B82F6]">Work Process</span>
                            </h2>
                            <p className="text-slate-600 text-[16px] leading-relaxed mt-6">
                                At SysCrop, we follow a strategic and results-driven Social Media Optimization process that helps businesses build a strong online presence, increase audience engagement, and achieve long-term brand growth.
                            </p>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex items-center gap-4 shrink-0 lg:pb-2">
                            <button onClick={scrollPrev} className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-[#1A5CDD] hover:border-[#1A5CDD] hover:bg-[#F0F6FF] transition-all duration-300 shadow-sm focus:outline-none cursor-pointer">
                                <ArrowLeft size={20} strokeWidth={2.5} />
                            </button>
                            <button onClick={scrollNext} className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-[#1A5CDD] hover:border-[#1A5CDD] hover:bg-[#F0F6FF] transition-all duration-300 shadow-sm focus:outline-none cursor-pointer">
                                <ArrowRight size={20} strokeWidth={2.5} />
                            </button>
                        </div>
                    </div>

                    <div className="overflow-hidden relative z-10 -mx-4 px-4 py-8" ref={processRef}>
                        <div className="flex -ml-6">
                            {seoProcess.map((item, index) => {
                                const icons = [Search, Target, Settings, LayoutDashboard, Users, Activity];
                                const Icon = icons[index % icons.length];

                                return (
                                    <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-6 cursor-grab active:cursor-grabbing">
                                        <div className="group h-full bg-white rounded-[24px] p-8 border border-slate-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col cursor-default">
                                            {/* Top Hover Gradient Line */}
                                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />


                                            {/* Content Container */}
                                            <div className="relative z-10 flex-1 flex flex-col">
                                                {/* Header Row: Icon & Small Step Badge */}
                                                <div className="flex items-center justify-between mb-8">
                                                    <div className="w-12 h-12 rounded-xl bg-[#F0F6FF] border border-[#1A5CDD]/10 flex items-center justify-center text-[#1A5CDD] group-hover:bg-[#1A5CDD] group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm">
                                                        <Icon size={22} strokeWidth={2} />
                                                    </div>
                                                    <span className="text-[11px] font-extrabold tracking-widest text-slate-400 uppercase">
                                                        Step 0{item.step}
                                                    </span>
                                                </div>

                                                <h3 className="text-[20px] font-bold text-[#011146] mb-3 group-hover:text-[#1A5CDD] transition-colors duration-300 leading-snug">
                                                    {item.title}
                                                </h3>
                                                <p className="text-slate-500 text-[15px] leading-[1.8] flex-1">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose SysCrop Section - Modern SaaS Bento Grid */}
            <section className="py-20 bg-[#F0F6FF] relative overflow-hidden">
                {/* Background Decorators */}
                {/* 1. Floating Blur Circles */}
                <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#1A5CDD]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-[#38bdf8]/12 rounded-full blur-3xl pointer-events-none" />

                {/* 2. Dot Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.05] pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(#1A5CDD 1.5px, transparent 1.5px)`,
                        backgroundSize: `24px 24px`
                    }}
                />

                {/* 3. Abstract SVG Waves */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none">
                        <path d="M-100,250 C300,100 650,400 1050,220 C1300,120 1500,320 1650,200 L1650,900 L-100,900 Z" fill="url(#bento-wave-1)" opacity="0.3" />
                        <defs>
                            <linearGradient id="bento-wave-1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#1A5CDD" stopOpacity="0.15" />
                                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.03" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* 4. Very Light Noise Texture */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.025] mix-blend-overlay">
                    <svg className="w-full h-full">
                        <filter id="bentoNoiseFilter">
                            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
                        </filter>
                        <rect width="100%" height="100%" filter="url(#bentoNoiseFilter)" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 relative max-w-7xl z-10">
                    {/* Upper Why Choose SysCrop split graphic & text */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-20">
                        {/* Right Side: Text */}
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#1A5CDD]/5 border border-[#1A5CDD]/10 mb-8">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                                    <Activity className="text-[#1A5CDD]" size={20} />
                                </div>
                                <h3 className="text-xl font-bold text-[#011146]">Why SysCrop</h3>
                            </div>
                            <h2 className="text-3xl md:text-[48px] font-bold text-[#011146] mb-6 leading-tight">
                                Why Choose SysCrop for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8]">Social Media Optimization (SMO)?</span>
                            </h2>
                            <p className="text-slate-600 text-[16px] leading-[1.8] mb-5">
                                At SysCrop, we believe that social media is more than just sharing posts—it's about building meaningful relationships, strengthening brand credibility, and creating opportunities for business growth. Our Social Media Optimization (SMO) Services are tailored to your industry, target audience, and business objectives, ensuring your brand maintains a strong and consistent presence across all major social media platforms.
                            </p>
                            <p className="text-slate-600 text-[16px] leading-[1.8]">
                                By combining creative content strategies, profile optimization, audience engagement, and data-driven insights, we help businesses improve their online visibility, increase organic engagement, and establish long-term connections with their customers. Whether you're a startup, small business, or established enterprise, our customized SMO solutions are designed to deliver measurable results and sustainable digital growth.
                            </p>
                        </div>

                        {/* Left Side: Graphic */}
                        <div className="lg:w-1/2 relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#1A5CDD]/10 to-[#38bdf8]/10 rounded-full blur-3xl -z-10 pointer-events-none" />
                            <div className="relative group">
                                <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white bg-white">
                                    <div className="w-full h-[400px] flex items-center justify-center relative overflow-hidden bg-slate-900">
                                        <Image
                                            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop"
                                            alt="Why Choose SysCrop for SMO"
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
                                    <p className="text-sm font-semibold text-slate-600 leading-snug">Brand Consistency</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Header for "What Sets SysCrop Apart?" */}
                    <div className="mt-16 text-center max-w-3xl mx-auto mb-14">
                        <h3 className="text-3xl md:text-[48px] font-bold text-[#011146] tracking-tight">What Sets SysCrop Apart?</h3>
                    </div>

                    {/* Asymmetric Modern SaaS Bento Grid (Vercel & Linear Style) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                        {whyChooseUs.map((item, i) => {
                            const Icon = item.icon;
                            // Determine featured large cards for uneven bento grid rhythm (Row 1 left, Row 3 right -> 12 cols total across 4 rows)
                            const isFeatured = i === 0 || i === 6;
                            const colSpanClass = isFeatured ? "lg:col-span-2" : "lg:col-span-1";

                            return (
                                <div
                                    key={i}
                                    className={`group bg-white/90 backdrop-blur-md rounded-[24px] p-8 border border-slate-200/80 hover:border-[#1A5CDD]/40 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(26,92,221,0.18)] hover:-translate-y-[10px] transition-all duration-[350ms] ease-out relative overflow-hidden flex flex-col justify-between cursor-default ${colSpanClass}`}
                                >
                                    {/* Hover Background Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#1A5CDD]/5 via-transparent to-[#38bdf8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] pointer-events-none" />

                                    {/* Top Neon Accent Border on Hover */}
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8] opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms]" />

                                    <div>
                                        <div className="flex items-center justify-between mb-6 relative z-10">
                                            {/* Icon with 8deg rotation on hover */}
                                            <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#1A5CDD] group-hover:bg-gradient-to-br group-hover:from-[#1A5CDD] group-hover:to-[#38bdf8] group-hover:text-white group-hover:border-transparent group-hover:rotate-[8deg] transition-all duration-[350ms] shadow-sm group-hover:shadow-[0_8px_20px_rgba(26,92,221,0.3)]">
                                                <Icon size={24} strokeWidth={2} />
                                            </div>

                                            {isFeatured && (
                                                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#1A5CDD] bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 px-3 py-1 rounded-full">
                                                    Core Strength
                                                </span>
                                            )}
                                        </div>

                                        {/* Card Title -> 22px */}
                                        <h4 className="font-bold text-[#011146] text-[22px] mb-3 group-hover:text-[#1A5CDD] transition-colors duration-[350ms] relative z-10 leading-tight">
                                            {item.title}
                                        </h4>

                                        {/* Paragraph -> 16px, Line Height -> 1.8 */}
                                        <p className="text-slate-600 text-[16px] leading-[1.8] relative z-10 flex-1">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Industries We Serve - Infinite Marquee */}
            <section className="py-20 bg-[#011146] relative overflow-hidden mt-12 mb-12 rounded-[40px] mx-4 lg:mx-auto max-w-[96%]">
                {/* Background effects */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1A5CDD]/25 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#38bdf8]/15 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#38bdf8] text-xs font-bold tracking-wider uppercase mb-5 border border-white/10 backdrop-blur-sm">Tailored Solutions</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-5">Industries We Serve</h2>
                        <p className="text-slate-300 max-w-2xl mx-auto text-[16px] leading-relaxed">
                            Our Social Media Optimization Services are suitable for businesses across a wide range of industries. Whether you're looking to build brand awareness, engage your audience, or strengthen your online presence, we create customized SMO strategies that align with your business objectives.
                        </p>
                    </div>
                </div>

                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .marquee-container {
                        display: flex;
                        width: fit-content;
                        animation: scroll 40s linear infinite;
                    }
                    .marquee-container:hover {
                        animation-play-state: paused;
                    }
                    .marquee-container.reverse {
                        animation-direction: reverse;
                        animation-duration: 45s;
                    }
                `}} />

                <div className="relative z-10 flex flex-col gap-6 overflow-hidden py-4">
                    {/* Fade Edges for seamless loop effect */}
                    <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-[#011146] to-transparent z-20 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-[#011146] to-transparent z-20 pointer-events-none" />

                    {/* Row 1 - Moving Left */}
                    <div className="marquee-container">
                        {[...industries.slice(0, 8), ...industries.slice(0, 8)].map((ind, i) => (
                            <div key={i} className="w-[300px] shrink-0 group relative bg-white/5 border border-white/10 rounded-full p-3 pr-8 mx-3 hover:bg-[#1A5CDD] hover:border-[#1A5CDD] hover:shadow-[0_10px_30px_rgba(26,92,221,0.4)] transition-all duration-500 overflow-hidden backdrop-blur-sm flex items-center gap-5 cursor-default">
                                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="w-14 h-14 shrink-0 rounded-full bg-[#1A5CDD]/20 flex items-center justify-center group-hover:bg-white text-[#38bdf8] group-hover:text-[#1A5CDD] shadow-inner border border-white/5 group-hover:border-white transition-all duration-500 group-hover:scale-90 group-hover:rotate-12">
                                    <ind.icon size={24} strokeWidth={1.5} />
                                </div>
                                <span className="font-bold text-white text-[15px] leading-tight relative z-10 whitespace-nowrap">{ind.title}</span>
                            </div>
                        ))}
                    </div>

                    {/* Row 2 - Moving Right */}
                    <div className="marquee-container reverse ml-[-200px]">
                        {[...industries.slice(8, 15), ...industries.slice(8, 15)].map((ind, i) => (
                            <div key={i} className="w-[300px] shrink-0 group relative bg-white/5 border border-white/10 rounded-full p-3 pr-8 mx-3 hover:bg-white hover:border-white hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)] transition-all duration-500 overflow-hidden backdrop-blur-sm flex items-center gap-5 cursor-default">
                                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="w-14 h-14 shrink-0 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#1A5CDD] text-white group-hover:text-white shadow-inner border border-white/5 group-hover:border-[#1A5CDD] transition-all duration-500 group-hover:scale-90 group-hover:-rotate-12">
                                    <ind.icon size={24} strokeWidth={1.5} />
                                </div>
                                <span className="font-bold text-white group-hover:text-[#011146] text-[15px] leading-tight relative z-10 transition-colors duration-500 whitespace-nowrap">{ind.title}</span>
                            </div>
                        ))}
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

                            <p className="text-slate-500 text-[15.5px] leading-relaxed mb-8 max-w-sm">
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
                                            <span className={`w-[34px] h-[34px] rounded-full flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm ${activeFaq === index ? "bg-[#1A5CDD] text-white" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-600"}`}>
                                                {activeFaq === index ? (
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                                                ) : (
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
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
