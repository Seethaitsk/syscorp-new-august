"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Share2, TrendingUp, Target, BarChart, MessageCircle, Users, CheckCircle2,
    ArrowRight, ShieldCheck, Rocket, Smartphone, Heart, Image as ImageIcon, Video,
    FileText, LayoutDashboard, LinkIcon, Settings, Code2, Globe, Bookmark,
    ChevronDown, Palmtree, Flower2, GraduationCap, Utensils, Home, ShoppingCart, Scale, Stethoscope, Truck, Dumbbell, Palette, Wrench, Search, Zap, Activity, UserCircle, Calendar, LineChart, Building2,
    MousePointerClick, DollarSign, Megaphone, MonitorPlay, MapPin, Key, Plus, Minus, Mail, HelpCircle
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

export default function GoogleAdsClient() {
    const mainRef = useRef<HTMLDivElement>(null);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [isIntroExpanded, setIsIntroExpanded] = useState(false);
    const [flippedCards, setFlippedCards] = useState<number[]>([]);

    const toggleFlip = (index: number) => {
        if (flippedCards.includes(index)) {
            setFlippedCards(flippedCards.filter(i => i !== index));
        } else {
            setFlippedCards([...flippedCards, index]);
        }
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
        { title: "Top Visibility", desc: "Increase your business visibility at the top of Google Search results.", icon: Zap },
        { title: "Active Reach", desc: "Reach customers who are actively searching for your products or services.", icon: Target },
        { title: "Quality Traffic", desc: "Drive high-quality traffic to your website and landing pages.", icon: MousePointerClick },
        { title: "More Leads", desc: "Generate more qualified leads, enquiries, and sales.", icon: Users },
        { title: "Maximize ROI", desc: "Maximize your return on advertising investment (ROI).", icon: DollarSign },
        { title: "Right Audience", desc: "Target the right audience based on keywords, location, demographics, and interests.", icon: Target },
        { title: "Fast Launches", desc: "Gain immediate online visibility with fast campaign launches.", icon: Rocket },
        { title: "Brand Awareness", desc: "Increase brand awareness across Google Search, Display, YouTube, and Shopping.", icon: Globe },
        { title: "Detailed Analytics", desc: "Monitor campaign performance with detailed analytics and conversion tracking.", icon: BarChart },
        { title: "Cost Optimization", desc: "Optimize advertising costs through continuous bid and campaign optimization.", icon: Settings },
        { title: "Targeted Campaigns", desc: "Promote local, national, or international businesses with targeted PPC campaigns.", icon: MapPin },
        { title: "Scalable Solutions", desc: "Support your overall digital marketing strategy with measurable and scalable advertising solutions.", icon: Activity }
    ];

    const services = [
        { title: "1. Google Ads Strategy & Campaign Planning", desc: "We develop a customized Google Ads strategy based on your business goals, target audience, competitors, industry, and advertising budget. Our campaign planning ensures every advertisement is aligned with your objectives and focused on delivering the highest possible return on investment.", icon: LayoutDashboard },
        { title: "2. Keyword Research & Targeting", desc: "Our experts conduct in-depth keyword research to identify high-performing and high-converting search terms. We select relevant keywords, organize keyword groups, and implement negative keywords to ensure your ads reach the right audience while minimizing wasted ad spend.", icon: Key },
        { title: "3. Google Search Ads Management", desc: "We create and manage highly targeted Google Search Ads that appear when potential customers search for your products or services. Our campaigns focus on improving click-through rates, increasing qualified traffic, and generating valuable business enquiries.", icon: Search },
        { title: "4. Google Display Ads", desc: "Expand your brand visibility with visually engaging Display Ads across Google's extensive network of websites and mobile applications. Our display advertising campaigns help increase brand awareness, attract new customers, and reconnect with previous website visitors.", icon: ImageIcon },
        { title: "5. Google Shopping Ads", desc: "For eCommerce businesses, we create and optimize Google Shopping Ads that showcase your products with images, pricing, ratings, and product details. These campaigns help increase product visibility, drive qualified traffic, and improve online sales.", icon: ShoppingCart },
        { title: "6. YouTube Ads Management", desc: "Reach your audience through engaging video advertisements on YouTube. We create targeted YouTube advertising campaigns that increase brand awareness, promote products and services, and drive customer engagement.", icon: MonitorPlay },
        { title: "7. Performance Max Campaigns", desc: "Leverage Google's AI-powered Performance Max campaigns to reach customers across Google Search, Display, YouTube, Gmail, Discover, and Maps. We continuously optimize these campaigns to maximize conversions and advertising performance.", icon: Activity },
        { title: "8. Remarketing & Retargeting Campaigns", desc: "Reconnect with users who have previously visited your website or interacted with your business. Our remarketing campaigns encourage returning visitors to complete enquiries, purchases, or other valuable actions.", icon: Users },
        { title: "9. Ad Copy Creation & A/B Testing", desc: "We create compelling ad headlines, descriptions, and calls-to-action that encourage users to click and convert. Continuous A/B testing helps us identify the highest-performing ad variations and improve campaign effectiveness.", icon: FileText },
        { title: "10. Landing Page Optimization", desc: "A successful PPC campaign requires an optimized landing page. We provide recommendations to improve landing page relevance, user experience, loading speed, and conversion performance, helping you maximize campaign results.", icon: Smartphone },
        { title: "11. Conversion Tracking & Analytics", desc: "We implement conversion tracking using Google Ads and Google Analytics to monitor leads, phone calls, purchases, form submissions, and other important business goals. Accurate tracking allows us to measure campaign success and make data-driven decisions.", icon: BarChart },
        { title: "12. Campaign Optimization & Performance Reporting", desc: "Google Ads requires ongoing optimization for consistent success. We continuously monitor campaign performance, adjust bidding strategies, refine audience targeting, optimize keywords, and provide detailed performance reports with actionable insights to maximize your return on investment.", icon: LineChart }
    ];

    const seoProcess = [
        { step: "1", title: "Business Consultation & Goal Analysis", desc: "We begin by understanding your business, target audience, products or services, competitors, and marketing objectives. This helps us create a customized Google Ads strategy that aligns with your goals, budget, and expected outcomes." },
        { step: "2", title: "Keyword Research & Campaign Planning", desc: "Our team conducts in-depth keyword research to identify high-intent search terms your potential customers are using. Based on this research, we develop a strategic campaign structure, audience targeting plan, and bidding strategy to maximize campaign performance." },
        { step: "3", title: "Campaign Setup & Ad Creation", desc: "We create well-structured Google Ads campaigns with compelling ad copy, relevant keywords, optimized ad groups, extensions, and audience targeting to improve visibility, increase click-through rates, and drive qualified traffic." },
        { step: "4", title: "Campaign Launch & Optimization", desc: "Once your campaigns go live, we continuously monitor performance, optimize bids, refine keywords, improve ad copy, adjust targeting, and eliminate underperforming elements to maximize conversions and reduce advertising costs." },
        { step: "5", title: "Conversion Tracking & Performance Monitoring", desc: "We implement conversion tracking and monitor important metrics such as clicks, impressions, conversions, CTR, CPC, CPA, and ROI. This helps us evaluate campaign effectiveness and identify opportunities for continuous improvement." },
        { step: "6", title: "Reporting & Continuous Improvement", desc: "We provide detailed performance reports with actionable insights, campaign analysis, and recommendations. Our team continuously refines your Google Ads campaigns to improve performance, maximize return on investment, and support long-term business growth." }
    ];

    const industries = [
        { title: "eCommerce Businesses", icon: ShoppingCart, color: "text-purple-600 bg-purple-50 border-purple-100 group-hover:bg-purple-500" },
        { title: "Healthcare & Clinics", icon: Stethoscope, color: "text-rose-600 bg-rose-50 border-rose-100 group-hover:bg-rose-500" },
        { title: "Educational Institutions", icon: GraduationCap, color: "text-emerald-600 bg-emerald-50 border-emerald-100 group-hover:bg-emerald-500" },
        { title: "Real Estate & Realtors", icon: Home, color: "text-indigo-600 bg-indigo-50 border-indigo-100 group-hover:bg-indigo-500" },
        { title: "Home Service Providers", icon: Wrench, color: "text-slate-700 bg-slate-100 border-slate-200 group-hover:bg-slate-600" },
        { title: "Legal & Financial Firms", icon: Scale, color: "text-blue-600 bg-blue-50 border-blue-100 group-hover:bg-blue-500" },
        { title: "Restaurants & Delivery", icon: Utensils, color: "text-orange-600 bg-orange-50 border-orange-100 group-hover:bg-orange-500" },
        { title: "Travel & Hospitality", icon: Palmtree, color: "text-sky-600 bg-sky-50 border-sky-100 group-hover:bg-sky-500" },
        { title: "B2B & SaaS Companies", icon: Building2, color: "text-amber-600 bg-amber-50 border-amber-100 group-hover:bg-amber-500" },
        { title: "Automotive Dealerships", icon: Truck, color: "text-slate-700 bg-slate-100 border-slate-200 group-hover:bg-slate-600" },
        { title: "Fitness & Wellness Centers", icon: Dumbbell, color: "text-pink-600 bg-pink-50 border-pink-100 group-hover:bg-pink-500" },
        { title: "Local Retail Stores", icon: ShoppingCart, color: "text-purple-600 bg-purple-50 border-purple-100 group-hover:bg-purple-500" },
        { title: "Event Management", icon: Calendar, color: "text-cyan-600 bg-cyan-50 border-cyan-100 group-hover:bg-cyan-500" },
        { title: "Beauty Salons & Spas", icon: Flower2, color: "text-pink-600 bg-pink-50 border-pink-100 group-hover:bg-pink-500" },
        { title: "Professional Services", icon: Users, color: "text-blue-600 bg-blue-50 border-blue-100 group-hover:bg-blue-500" }
    ];

    const faqs = [
        { q: "What are Google Ads (PPC) Services?", a: "Google Ads (PPC) Services involve creating, managing, and optimizing paid advertising campaigns on Google to help businesses increase website traffic, generate qualified leads, boost online sales, and improve brand visibility. Businesses only pay when someone clicks on their advertisement, making PPC a measurable and cost-effective digital marketing strategy." },
        { q: "Why should I choose SysCrop for Google Ads (PPC) Services?", a: "SysCrop provides customized Google Ads (PPC) Services tailored to your business goals, target audience, and budget. Our team manages everything from keyword research and campaign setup to optimization, conversion tracking, and performance reporting, helping you maximize your return on investment (ROI)." },
        { q: "Which Google Ads campaign types does SysCrop manage?", a: "Our Google Ads experts manage a wide range of campaign types, including Google Search Ads, Display Ads, Shopping Ads, YouTube Ads, Performance Max Campaigns, Remarketing Campaigns, and Local Ads. We recommend the most suitable campaign type based on your business objectives and target audience." },
        { q: "How does SysCrop optimize Google Ads campaigns?", a: "We continuously monitor campaign performance by analyzing keywords, bidding strategies, audience targeting, ad copy, and conversion data. Through ongoing optimization and A/B testing, we improve campaign performance, reduce advertising costs, and maximize conversions." },
        { q: "How soon can I see results from Google Ads?", a: "Google Ads can start driving traffic and leads as soon as your campaigns are approved and published. While immediate visibility is possible, campaign performance typically improves over time through continuous optimization and data-driven improvements." },
        { q: "Can SysCrop manage my existing Google Ads account?", a: "Yes. Whether you have an existing Google Ads account or are starting from scratch, our team can audit, optimize, and manage your campaigns to improve performance, reduce wasted ad spend, and increase your return on investment." },
        { q: "How much should I invest in Google Ads?", a: "There is no fixed advertising budget for Google Ads. Our team helps you determine an appropriate budget based on your business goals, industry competition, target keywords, and expected campaign performance to ensure cost-effective advertising." },
        { q: "Do you provide Google Ads performance reports?", a: "Yes. We provide transparent performance reports that include key metrics such as impressions, clicks, click-through rate (CTR), conversions, cost per click (CPC), conversion rate, and return on investment (ROI). These insights help you understand campaign performance and make informed business decisions." }
    ];

    const whyChooseUs = [
        { title: "Customized PPC Strategies", desc: "Every Google Ads campaign is tailored to your business objectives, target audience, industry, and advertising budget to achieve the best possible results.", icon: Settings },
        { title: "Comprehensive Campaign Management", desc: "We manage every aspect of your campaigns, including keyword research, campaign setup, ad creation, audience targeting, bidding strategies, and ongoing optimization.", icon: LayoutDashboard },
        { title: "Advanced Audience Targeting", desc: "We use keyword targeting, demographics, location, interests, and customer intent to ensure your advertisements reach the most relevant audience.", icon: Target },
        { title: "Continuous Campaign Optimization", desc: "Our team regularly monitors campaign performance, optimizes bids, refines keywords, improves ad copy, and enhances targeting to maximize conversions and reduce advertising costs.", icon: Activity },
        { title: "Transparent Performance Reporting", desc: "Receive detailed reports with insights into clicks, impressions, conversions, cost per click (CPC), click-through rate (CTR), and return on investment (ROI), helping you understand campaign performance.", icon: FileText },
        { title: "Conversion-Focused Advertising", desc: "We create campaigns that not only generate clicks but also drive enquiries, phone calls, online sales, and valuable business conversions.", icon: MousePointerClick },
        { title: "Google Ads Best Practices", desc: "We follow Google's latest advertising guidelines and industry best practices to build high-performing, compliant, and scalable PPC campaigns.", icon: CheckCircle2 },
        { title: "Experienced Digital Marketing Professionals", desc: "Our PPC specialists stay updated with the latest Google Ads features, bidding strategies, automation tools, and optimization techniques to deliver the best possible results.", icon: Users },
        { title: "Dedicated Support & Continuous Improvement", desc: "Digital advertising is constantly evolving. We continuously analyze campaign data, identify new growth opportunities, and refine your advertising strategy to ensure long-term business success.", icon: TrendingUp }
    ];

    return (
        <main ref={mainRef} className="bg-white min-h-screen overflow-x-clip font-sans">
            <HeaderBanner
                title={
                    <>
                        Google Ads <span className="text-[#38bdf8] font-serif italic font-normal">(PPC)</span>
                    </>
                }
                description="Leading Google Ads (PPC) Services in Pondicherry"
            />

            {/* Intro Section */}
            <section className="py-20 bg-[#F8FAFC] relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(26,92,221,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(26,92,221,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#1A5CDD]/20 to-[#38bdf8]/10 rounded-full blur-[100px] animate-pulse pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-[#3B82F6]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="gsap-fade-up lg:w-1/2 relative">
                            <div className="absolute -left-10 top-10 w-32 h-32 bg-[#1A5CDD]/5 rounded-full blur-2xl -z-10" />

                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#3B82F6]/20 shadow-sm mb-6 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#1A5CDD]/0 via-[#1A5CDD]/10 to-[#1A5CDD]/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                                <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                                <span className="text-[13px] font-bold text-[#011146] uppercase tracking-wider">Maximize Your ROI</span>
                            </div>

                            <h1 className="text-3xl md:text-5xl font-extrabold text-[#011146] tracking-tight mb-6 leading-tight">
                                Leading <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8] relative inline-block">Google Ads (PPC)
                                </span><br className="hidden sm:block" /> Services in Pondicherry
                            </h1>

                            <p className="text-[#011146] text-[18px] lg:text-[20px] leading-[1.6] mb-6 font-bold border-l-4 border-[#1A5CDD] pl-4">
                                Drive Instant Traffic, Qualified Leads & Higher ROI with Expert Google Ads Management
                            </p>
                            <p className="text-slate-600 text-[16px] leading-[1.8] mb-6">
                                At SysCrop, we provide professional Google Ads (PPC) Services in Pondicherry to help businesses increase online visibility, attract qualified customers, and generate valuable leads through targeted Google advertising. As a trusted Google Ads Company in Pondicherry, we create and manage customized PPC campaigns that connect your business with customers actively searching for your products and services while maximizing your advertising budget.
                            </p>

                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isIntroExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                                <p className="text-slate-600 text-[16px] leading-[1.8] mb-6">
                                    Our PPC Services in Pondicherry are ideal for businesses looking for immediate online visibility. Whether your goal is to generate leads, increase online sales, promote local services, or build brand awareness, our Google Ads specialists develop customized campaigns based on your business goals, target audience, and budget.
                                </p>
                                <p className="text-slate-600 text-[16px] leading-[1.8] mb-6">
                                    We continuously optimize every campaign by improving keyword targeting, ad copy, bidding strategies, audience segmentation, landing pages, and conversion tracking. This helps improve ad performance, attract quality traffic, and maximize your return on investment.
                                </p>
                                <p className="text-slate-600 text-[16px] leading-[1.8] mb-6">
                                    Whether you're a startup, local business, eCommerce store, healthcare provider, educational institution, real estate company, manufacturer, or enterprise, our Google Ads Management Services help increase website traffic, generate more enquiries, improve online sales, and support long-term business growth through effective PPC advertising.
                                </p>
                            </div>

                            <div className="flex flex-wrap items-center gap-6 mt-8">
                                <Link
                                    href="/contact"
                                    className="relative inline-flex items-center justify-center gap-2 bg-[#1A5CDD] text-white px-8 py-4 rounded-xl font-bold text-[15px] overflow-hidden group shadow-[0_10px_30px_rgba(26,92,221,0.3)] transition-all hover:-translate-y-1"
                                >
                                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                                    Get a Free PPC Audit <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <button
                                    onClick={() => setIsIntroExpanded(!isIntroExpanded)}
                                    className="inline-flex items-center gap-2 text-[#011146] font-bold text-[15px] hover:text-[#1A5CDD] transition-colors group"
                                >
                                    {isIntroExpanded ? "Read Less" : "Read More"}
                                    <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-[#1A5CDD] group-hover:bg-[#1A5CDD]/5 transition-colors">
                                        <ChevronDown size={16} className={`transition-transform duration-300 ${isIntroExpanded ? "rotate-180 text-[#1A5CDD]" : ""}`} />
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* Image Right Side */}
                        <div className="gsap-fade-up lg:w-1/2 w-full relative mt-16 lg:mt-0">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#1A5CDD]/10 to-[#38bdf8]/10 rounded-full blur-[80px] -z-10 pointer-events-none" />
                            <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[540px] xl:h-[580px] flex items-center justify-center">
                                <Image
                                    src="/images/seo/leading_googleads.png"
                                    alt="Google Ads Team"
                                    fill
                                    className="object-contain transform group-hover:scale-105 transition-transform duration-700 w-full h-auto"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is Google Ads Section */}
            <section className="py-20 bg-white relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="bg-[#011146] rounded-tl-[32px] rounded-tr-[100px] rounded-br-[32px] rounded-bl-[100px] relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-800">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3B82F6]/15 rounded-full blur-[100px] pointer-events-none" />

                        <div className="relative z-10 flex flex-col md:flex-row items-stretch">
                            <div className="md:w-5/12 p-12 md:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10 relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(#3B82F6_2px,transparent_2px)] [background-size:16px_16px] opacity-20" />
                                <div className="inline-flex items-center gap-2 mb-8">
                                    <div className="w-8 h-1 bg-[#3B82F6] rounded-full" />
                                    <span className="text-[#3B82F6] text-[13px] font-bold tracking-widest uppercase">PPC Fundamentals</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-[1.15] mb-6">
                                    What is <br className="hidden md:block" />
                                    <span className="text-[#3B82F6] relative inline-block mt-2">Google Ads?
                                        <div className="absolute -bottom-2 left-0 w-10 h-1.5 bg-[#3B82F6] rounded-full"></div>
                                    </span>
                                </h2>
                            </div>

                            <div className="md:w-7/12 p-12 md:p-16 flex flex-col justify-center">
                                <div className="space-y-6">
                                    <p className="text-slate-300 text-[16px] leading-[1.8]">
                                        Google Ads (Pay-Per-Click) is Google's online advertising platform that helps businesses promote their products and services across Google Search, YouTube, Google Display Network, Google Shopping, Google Maps, and partner websites. It enables businesses to reach potential customers who are actively searching for relevant products or services, driving qualified traffic, leads, and sales.
                                    </p>
                                    <p className="text-slate-300 text-[16px] leading-[1.8]">
                                        With Pay-Per-Click (PPC) advertising, businesses only pay when someone clicks on their ad. Through strategic keyword targeting, audience selection, and continuous campaign optimization, Google Ads Services in Pondicherry help businesses increase online visibility, generate quality enquiries, maximize return on investment (ROI), and achieve sustainable business growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Google Ads is Important Section */}
            <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#F0F6FF] via-[#F8FAFF] to-[#EEF4FF]">
                <div className="absolute left-[-200px] top-1/4 w-[600px] h-[600px] bg-[#3B82F6]/8 blur-[150px] rounded-full pointer-events-none" />
                <div className="absolute right-[-150px] bottom-1/4 w-[500px] h-[500px] bg-[#38bdf8]/6 blur-[130px] rounded-full pointer-events-none" />
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-[#3B82F6]/10 to-transparent pointer-events-none" />

                <div className="container mx-auto px-6 lg:px-8 relative max-w-7xl z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                        <div className="lg:w-[55%] w-full relative">
                            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-xl border border-[#3B82F6]/15 shadow-[0_4px_20px_rgba(59,130,246,0.08)] mb-10">
                                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] flex items-center justify-center shadow-sm">
                                    <Target className="text-white" size={14} strokeWidth={2.5} />
                                </div>
                                <span className="text-[13px] font-bold text-[#011146] tracking-wide">Business Impact</span>
                            </div>

                            <div className="mb-10">
                                <h2 className="text-3xl md:text-5xl font-extrabold text-[#011146] tracking-tight leading-tight">
                                    Why Google Ads (PPC) <br className="hidden sm:block" />is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] relative inline-block">Important</span> for Your Business
                                </h2>
                            </div>

                            <div className="space-y-7">
                                <p className="text-slate-600 text-[16px] leading-[1.9]">
                                    Google Ads allows businesses to reach the right audience based on search intent, location, demographics, and customer behavior. By displaying relevant advertisements to users at the right moment, businesses can increase brand awareness, generate quality enquiries, drive website traffic, and improve conversions. Unlike traditional advertising, every campaign is measurable, allowing businesses to optimize performance and maximize their return on investment.
                                </p>
                                <p className="text-slate-600 text-[16px] leading-[1.9]">
                                    Whether your goal is to generate more leads, increase online sales, promote local services, or grow your brand, Google Ads Services in Pondicherry provide a reliable and cost-effective advertising solution. With the right strategy, continuous optimization, and performance monitoring, Google Ads helps businesses achieve consistent growth while making the most of their advertising budget.
                                </p>
                            </div>
                        </div>

                        <div className="lg:w-[45%] w-full relative">
                            <div className="relative w-full h-[400px] lg:h-[440px] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(1,17,70,0.12)] border-[8px] border-white z-10 group/main bg-white">
                                <img
                                    src="/images/seo/why_googleads_imp.png"
                                    alt="Google Ads Performance Impact"
                                    className="w-full h-full object-cover transform group-hover/main:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#011146]/15 to-transparent pointer-events-none" />
                            </div>

                            <div className="absolute -top-6 -left-4 bg-white/95 backdrop-blur-xl px-5 py-4 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-100 z-30 flex items-center gap-3.5 transform transition-transform hover:-translate-y-1 hidden md:flex">
                                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] flex items-center justify-center shadow-sm">
                                    <TrendingUp className="text-white" size={20} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <p className="text-[#011146] font-extrabold text-[17px] leading-tight">93.8%</p>
                                    <p className="text-slate-500 text-[11px] font-semibold mt-0.5">Success Rate</p>
                                </div>
                            </div>

                            <div className="absolute -bottom-6 -right-4 bg-white/95 backdrop-blur-xl px-5 py-4 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-100 z-30 flex items-center gap-3.5 transform transition-transform hover:-translate-y-1 hidden md:flex">
                                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center shadow-sm">
                                    <BarChart className="text-white" size={20} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <p className="text-[#011146] font-extrabold text-[17px] leading-tight">+270%</p>
                                    <p className="text-slate-500 text-[11px] font-semibold mt-0.5">ROI Growth</p>
                                </div>
                            </div>

                            <div className="absolute -top-4 right-[10%] w-28 h-28 bg-[radial-gradient(#3B82F6_1.5px,transparent_1.5px)] [background-size:18px_18px] opacity-15 pointer-events-none z-0" />
                            <div className="absolute bottom-[15%] left-[25%] w-24 h-24 bg-[radial-gradient(#1D4ED8_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-10 pointer-events-none z-0" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits of Google Ads (PPC) */}
            <section className="py-20 bg-white relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">

                        <div className="lg:w-1/3 w-full">
                            <div className="sticky top-32">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#3B82F6]/20 shadow-sm mb-6">
                                    <TrendingUp className="text-[#3B82F6]" size={14} />
                                    <span className="text-[13px] font-bold text-[#011146]">Google Ads Benefits</span>
                                </div>

                                <h3 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold text-[#011146] mb-8 leading-[1.15]">
                                    Benefits of <br className="hidden lg:block" />
                                    <span className="text-[#3B82F6] relative inline-block mt-2">
                                        Google Ads (PPC)
                                    </span>
                                </h3>

                                <p className="text-slate-600 text-[16px] leading-[1.8] mb-8">
                                    Our Google Ads (PPC) Services help businesses maximize their online visibility by reaching potential customers at the right time, driving qualified traffic, and improving conversion rates. Through strategic campaign management and continuous optimization, we help your business achieve measurable results while maximizing your advertising return on investment (ROI).
                                </p>

                                <div className="relative mt-12 hidden lg:block">
                                    <div className="absolute -top-4 -left-4 w-32 h-32 bg-[radial-gradient(#1A5CDD_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-20 -z-10" />
                                    <div className="w-full aspect-[4/3] rounded-tl-[60px] rounded-br-[60px] rounded-tr-[24px] rounded-bl-[24px] overflow-hidden border-4 border-white bg-white">
                                        <Image
                                            src="/images/seo/benefits_googleads.png"
                                            alt="Google Ads Data"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-2/3 w-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {benefits.map((item, i) => {
                                    const Icon = item.icon || Activity;
                                    return (
                                        <div key={i} className="bg-white border border-slate-100 rounded-[24px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(59,130,246,0.08)] transition-all duration-300 flex flex-col group cursor-default">
                                            <div className="mb-6">
                                                <div className="w-12 h-12 rounded-full bg-[#EEF4FF] border border-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:text-white transition-colors duration-300">
                                                    <Icon size={20} strokeWidth={2} />
                                                </div>
                                            </div>
                                            <h4 className="font-extrabold text-[#011146] text-[16px] mb-3">{item.title}</h4>
                                            <p className="text-slate-500 text-[14px] leading-[1.7] flex-1">{item.desc}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Our Google Ads Services Cover */}
            <section className="py-20 relative overflow-hidden rounded-[40px] mx-4 lg:mx-auto max-w-[96%] mt-12 mb-12 border border-[#011146]">
                <div className="absolute inset-0 bg-[#011146]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1A5CDD]/30 via-[#011146] to-[#011146] pointer-events-none"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#38bdf8]/20 via-transparent to-transparent pointer-events-none"></div>

                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <div className="inline-flex items-center justify-center mb-8 relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#38bdf8] to-[#1A5CDD] blur-md opacity-40 group-hover:opacity-80 transition-opacity duration-500 rounded-full" />
                            <span className="relative px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/20 text-[#38bdf8] text-[13px] font-extrabold tracking-widest uppercase shadow-sm flex items-center gap-2">
                                <Zap size={14} className="fill-[#38bdf8]" />
                                Complete PPC Solutions
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl lg:text-[52px] font-extrabold text-white mb-8 tracking-tight leading-[1.15]">
                            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#1A5CDD]">Google Ads (PPC)</span><br className="hidden lg:block" /> Services Cover
                        </h2>
                        <p className="text-slate-300 text-[16px] md:text-[17px] leading-relaxed max-w-3xl mx-auto">
                            At SysCrop, we offer comprehensive Google Ads (PPC) Services in Pondicherry designed to help businesses attract high-intent customers, generate qualified leads, and maximize their return on investment (ROI). Our Google Ads Management Services cover every aspect of your PPC campaigns, from strategic planning and keyword research to campaign optimization, conversion tracking, and performance reporting. Whether your goal is lead generation, online sales, local business growth, or brand awareness, we create customized Google Ads campaigns that deliver measurable and sustainable results.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((item, index) => {
                            const Icon = item.icon || Activity;
                            return (
                                <div key={index} className="group relative rounded-[28px] bg-[#021655] p-[1px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(56,189,248,0.2)]">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#38bdf8]/60 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_2s_infinite]" />

                                    <div className="relative h-full bg-[#031B66]/90 backdrop-blur-xl rounded-[27px] p-8 overflow-hidden z-10 border border-white/10 group-hover:border-transparent transition-colors duration-500 flex flex-col">

                                        <div className="absolute -top-24 -left-24 w-64 h-64 bg-gradient-to-br from-[#38bdf8]/40 to-[#1A5CDD]/10 blur-[60px] rounded-full transition-opacity duration-700 opacity-0 group-hover:opacity-100 pointer-events-none" />

                                        <div className="mb-8 relative z-10">
                                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#38bdf8] transition-all duration-500 shadow-sm group-hover:bg-gradient-to-br group-hover:from-[#38bdf8] group-hover:to-[#1A5CDD] group-hover:border-transparent group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_10px_30px_rgba(56,189,248,0.5)]">
                                                <Icon size={24} strokeWidth={2} />
                                            </div>
                                        </div>

                                        <div className="relative z-10 flex-1 flex flex-col">
                                            <h4 className="text-white text-[18px] font-bold mb-3 group-hover:text-[#38bdf8] transition-colors duration-300">
                                                {item.title}
                                            </h4>
                                            <p className="text-slate-400 text-[14px] leading-[1.7] group-hover:text-slate-300 transition-colors duration-300 flex-1">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Google Ads Process Section */}
            <section className="py-20 relative overflow-clip bg-white">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#1A5CDD]/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#3B82F6]/20 shadow-sm mb-6">
                            <Activity className="text-[#3B82F6]" size={14} />
                            <span className="text-[13px] font-bold text-[#011146]">Campaign Management</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#011146] tracking-tight mb-6 leading-tight">
                            Our Google Ads (PPC) <br className="hidden sm:block" />Management Process
                        </h2>
                        <p className="text-slate-600 text-[16px] leading-[1.8]">
                            At SysCrop, we follow a strategic and data-driven Google Ads Management process that helps businesses reach the right audience, maximize advertising performance, and achieve measurable business results.
                        </p>
                    </div>

                    <div className="relative max-w-6xl mx-auto">
                        <div className="hidden lg:block absolute top-[52px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-[#3B82F6]/20 to-transparent z-0" />
                        <div className="hidden lg:block absolute top-[calc(50%+52px)] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-[#3B82F6]/20 to-transparent z-0" />
                        <div className="lg:hidden absolute top-0 bottom-0 left-[52px] w-[2px] bg-gradient-to-b from-transparent via-[#3B82F6]/20 to-transparent z-0" />

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-16 relative z-10">
                            {seoProcess.map((item, index) => {
                                const icons = [Search, Target, Rocket, Settings, MonitorPlay, LineChart];
                                const Icon = icons[index] || Activity;

                                return (
                                    <div key={index} className="relative flex flex-col lg:items-center lg:text-center group">
                                        <div className="flex flex-row lg:flex-col items-center lg:items-center gap-6 lg:gap-8 w-full">
                                            <div className="relative shrink-0">
                                                <div className="w-[104px] h-[104px] rounded-full bg-white border border-[#3B82F6]/10 flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] group-hover:border-[#3B82F6]/30 group-hover:shadow-[0_15px_40px_rgba(59,130,246,0.15)] transition-all duration-300 relative z-10">
                                                    <div className="w-16 h-16 rounded-full bg-[#EEF4FF] flex items-center justify-center text-[#3B82F6] group-hover:scale-110 transition-transform duration-300">
                                                        <Icon size={28} strokeWidth={2} />
                                                    </div>
                                                </div>
                                                <div className="absolute -top-2 -right-2 lg:top-0 lg:right-0 w-8 h-8 rounded-full bg-[#3B82F6] text-white flex items-center justify-center font-bold text-[14px] shadow-md z-20 border-2 border-white">
                                                    {item.step}
                                                </div>
                                            </div>

                                            <div className="flex-1">
                                                <h3 className="text-[18px] font-bold text-[#011146] mb-3 group-hover:text-[#3B82F6] transition-colors">{item.title}</h3>
                                                <p className="text-slate-500 text-[14.5px] leading-[1.7]">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose SysCrop */}
            <section className="py-20 bg-[#F0F8FF] relative overflow-hidden">
                <div className="container mx-auto px-6 relative max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-16">
                        <div className="lg:w-1/2 w-full relative mb-12 lg:mb-0">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#1A5CDD]/10 to-[#38bdf8]/10 rounded-full blur-[80px] -z-10 pointer-events-none" />

                            <div className="relative group">
                                <div className="w-full h-[440px] lg:h-[520px] relative flex items-center justify-center">
                                    <Image
                                        src="/images/seo/why_choose_googleads.png"
                                        alt="Google Ads Expertise"
                                        fill
                                        className="object-contain filter drop-shadow-[0_15px_35px_rgba(1,17,70,0.12)] transform group-hover:scale-105 transition-all duration-700"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 w-full mt-10 lg:mt-0">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#3B82F6]/20 shadow-sm mb-5">
                                <Zap className="text-[#3B82F6] fill-[#3B82F6]" size={14} />
                                <span className="text-[13px] font-bold text-[#011146]">Why SysCrop</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#011146] mb-5 tracking-tight leading-[1.15]">
                                Why Choose SysCrop for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8] relative inline-block mt-1">
                                    Google Ads (PPC)?
                                </span>
                            </h2>

                            <div className="space-y-5">
                                <p className="text-slate-600 text-[15.5px] leading-relaxed">
                                    At SysCrop, we believe that a successful Google Ads campaign is more than simply creating advertisements. It's about reaching the right audience, maximizing every advertising budget, and generating measurable business results. Our Google Ads (PPC) Services are tailored to your business goals, target audience, and industry, ensuring every campaign is strategically planned, professionally managed, and continuously optimized for long-term success.
                                </p>
                                <p className="text-slate-600 text-[15.5px] leading-relaxed">
                                    By combining strategic keyword research, compelling ad creation, audience targeting, campaign optimization, and performance analysis, we help businesses increase online visibility, generate qualified leads, improve conversion rates, and maximize return on investment (ROI). Whether you're a startup, small business, eCommerce brand, or established enterprise, our customized Google Ads Management Services are designed to deliver consistent growth and measurable results.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 text-center max-w-3xl mx-auto mb-14">
                        <h3 className="text-2xl md:text-3xl font-extrabold text-[#011146] tracking-tight">What Sets SysCrop Apart?</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 max-w-7xl mx-auto">
                        {whyChooseUs.map((item, i) => {
                            const Icon = item.icon || CheckCircle2;
                            const isFlipped = flippedCards.includes(i);

                            return (
                                <div
                                    key={i}
                                    className="relative w-full h-[180px] lg:h-[160px] cursor-pointer group"
                                    style={{ perspective: '1000px' }}
                                    onClick={() => toggleFlip(i)}
                                >
                                    <div
                                        className="relative w-full h-full transition-transform duration-700 shadow-[0_4px_20px_rgba(0,0,0,0.03)] group-hover:shadow-[0_15px_40px_rgba(26,92,221,0.08)] rounded-[24px]"
                                        style={{
                                            transformStyle: 'preserve-3d',
                                            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                                        }}
                                    >
                                        <div
                                            className="absolute inset-0 w-full h-full bg-white rounded-[24px] p-6 lg:p-8 flex items-center gap-5 border border-slate-100 group-hover:bg-[#011146] group-hover:border-[#011146] transition-all duration-500"
                                            style={{ backfaceVisibility: 'hidden' }}
                                        >
                                            <div className="w-14 h-14 rounded-2xl bg-[#EEF4FF] flex items-center justify-center text-[#1A5CDD] shrink-0 transition-all group-hover:bg-white/15 group-hover:text-white group-hover:scale-110 duration-500">
                                                <Icon size={24} strokeWidth={2.5} />
                                            </div>
                                            <h4 className="font-extrabold text-[#011146] group-hover:text-white text-[16px] lg:text-[17px] leading-snug transition-colors duration-500">
                                                {item.title}
                                            </h4>
                                        </div>

                                        <div
                                            className="absolute inset-0 w-full h-full bg-[#011146] rounded-[24px] p-6 flex items-center border border-[#011146]"
                                            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                                        >
                                            <p className="text-white/90 text-[13px] leading-relaxed font-medium">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 bg-white border-t border-slate-100 overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4F7FE] border border-[#1A5CDD]/10 mb-6">
                            <HelpCircle className="text-[#1A5CDD]" size={14} />
                            <span className="text-[13px] font-bold text-[#011146]">Got Questions?</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#011146] tracking-tight leading-tight mb-6">
                            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8]">Questions</span>
                        </h2>
                        <p className="text-slate-600 text-[16px] md:text-[17px] leading-relaxed">
                            Find answers to common questions about our Google Ads (PPC) services, strategies, and management processes. If you have any other questions, please feel free to reach out to our team of experts.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-0">
                        <div>
                            {faqs.slice(0, Math.ceil(faqs.length / 2)).map((item, i) => {
                                const index = i;
                                const isOpen = activeFaq === index;
                                return (
                                    <div key={index} className="mb-4">
                                        <button
                                            onClick={() => setActiveFaq(isOpen ? null : index)}
                                            className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 ${isOpen ? "bg-[#F4F7FE] border-[#1A5CDD] shadow-sm" : "bg-white border-slate-200 hover:border-slate-300"}`}
                                        >
                                            <span className="font-bold text-[#011146] text-[16px]">{item.q}</span>
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? "bg-[#1A5CDD] text-white" : "bg-slate-100 text-slate-500"}`}>
                                                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                                            </div>
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px] mt-2 p-6 bg-slate-50 rounded-2xl border border-slate-100" : "max-h-0"}`}>
                                            <p className="text-slate-600 text-[14.5px] leading-relaxed">{item.a}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div>
                            {faqs.slice(Math.ceil(faqs.length / 2)).map((item, i) => {
                                const index = i + Math.ceil(faqs.length / 2);
                                const isOpen = activeFaq === index;
                                return (
                                    <div key={index} className="mb-4">
                                        <button
                                            onClick={() => setActiveFaq(isOpen ? null : index)}
                                            className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 ${isOpen ? "bg-[#F4F7FE] border-[#1A5CDD] shadow-sm" : "bg-white border-slate-200 hover:border-slate-300"}`}
                                        >
                                            <span className="font-bold text-[#011146] text-[16px]">{item.q}</span>
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? "bg-[#1A5CDD] text-white" : "bg-slate-100 text-slate-500"}`}>
                                                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
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
