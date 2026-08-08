"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Search, TrendingUp, Target, BarChart, FileText, Globe, Link as LinkIcon,
    Settings, Users, CheckCircle2, ChevronDown, ArrowRight, ShieldCheck,
    Zap, LineChart, MapPin, Activity, LayoutDashboard, Database, Smartphone, Headset,
    ScanSearch, Bot, Gauge, Rocket, CopyCheck, Link2, Braces, TriangleAlert, Code2,
    Building2, Store, BriefcaseMedical, GraduationCap, Building, Factory, Bookmark,
    Utensils, BedDouble, Hammer, Wrench, Scale, ShoppingCart, Car, Heart, Landmark, Star
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

export default function LocalSEOServicesPage() {
    const mainRef = useRef<HTMLDivElement>(null);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

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
        { desc: "Improve visibility in Google Search and Google Maps.", icon: Globe },
        { desc: "Attract highly targeted local customers.", icon: Target },
        { desc: "Increase website traffic and qualified enquiries.", icon: TrendingUp },
        { desc: "Generate more phone calls, direction requests, and store visits.", icon: MapPin },
        { desc: "Strengthen your online reputation through customer reviews.", icon: Activity },
        { desc: "Build trust with consistent business information across the web.", icon: ShieldCheck },
        { desc: "Improve local keyword rankings and search visibility.", icon: Search },
        { desc: "Increase conversions and long-term business growth.", icon: Rocket }
    ];

    const services = [
        { title: "Google Business Profile (GBP) Optimization", description: "Optimize your Google Business Profile with accurate business information, service categories, business descriptions, products, images, business hours, and regular updates to improve visibility in Google Search, Google Maps, and the Local Pack.", icon: Store },
        { title: "Local Keyword Research", description: "Identify high-intent, location-specific keywords that your potential customers use when searching for your products or services. Our keyword research helps improve local search rankings and attracts relevant traffic with strong conversion potential.", icon: Search },
        { title: "Local Citation Management", description: "Create, optimize, and maintain consistent business listings across trusted online directories and local citation platforms. Accurate citations improve your business credibility, strengthen local search signals, and support better search engine rankings.", icon: Bookmark },
        { title: "NAP Consistency Optimization", description: "Ensure your business Name, Address, and Phone Number (NAP) remain accurate and consistent across your website, Google Business Profile, directories, and social platforms. Consistent business information builds trust with both search engines and potential customers.", icon: CheckCircle2 },
        { title: "Location Page Optimization", description: "Develop and optimize location-specific landing pages that target multiple cities, service areas, or business locations. Our location pages are designed to improve local keyword rankings while delivering valuable and relevant content to your audience.", icon: MapPin },
        { title: "Google Maps SEO", description: "Improve your visibility in Google Maps through profile optimization, location relevance, customer engagement, and local ranking strategies. Our Google Maps SEO services help increase calls, direction requests, and visits from nearby customers.", icon: MapPin },
        { title: "Customer Review Management", description: "Build a strong online reputation by implementing effective review generation and management strategies. We help monitor customer feedback, encourage genuine reviews, and respond professionally to improve customer trust and local search performance.", icon: Target },
        { title: "Local On-Page SEO", description: "Optimize your website with localized content, title tags, meta descriptions, heading structure, internal linking, image optimization, and location-based landing pages. Our on-page optimization improves search relevance and enhances user experience.", icon: FileText },
        { title: "Local Link Building", description: "Strengthen your website's authority by acquiring high-quality backlinks from trusted local directories, business associations, community websites, and industry-relevant platforms. Local backlinks improve your credibility and support higher search rankings.", icon: LinkIcon },
        { title: "Local Schema Markup", description: "Implement Local Business Schema and other structured data to help search engines better understand your business information. Schema markup improves search visibility and increases the chances of earning rich search results.", icon: Database },
        { title: "Competitor Local SEO Analysis", description: "Analyze your local competitors to identify keyword opportunities, content gaps, backlink strategies, and ranking strengths. These insights help us develop a more effective Local SEO strategy that gives your business a competitive advantage.", icon: BarChart },
        { title: "Local SEO Reporting & Performance Tracking", description: "Track the success of your Local SEO campaign through detailed monthly reports covering keyword rankings, Google Business Profile insights, website traffic, customer actions, conversions, and overall campaign performance. Our transparent reporting helps you measure progress and make informed business decisions.", icon: LineChart }
    ];

    const localSeoProcess = [
        { step: "1", title: "Business Consultation & Requirement Analysis", desc: "We begin by understanding your business, industry, target audience, service areas, competitors, and business objectives. This discovery phase helps us develop a customized Local SEO strategy that aligns with your growth goals.", icon: Users },
        { step: "2", title: "Comprehensive Local SEO Audit", desc: "Our team conducts a detailed audit of your website, Google Business Profile, local citations, technical SEO, and competitor performance. This allows us to identify strengths, weaknesses, and opportunities for improvement.", icon: ScanSearch },
        { step: "3", title: "Local SEO Strategy Planning", desc: "Based on our audit findings, we create a tailored Local SEO roadmap outlining target keywords, optimization priorities, content opportunities, and ranking strategies to achieve sustainable results.", icon: Target },
        { step: "4", title: "Strategy Implementation", desc: "Our SEO specialists implement the planned optimizations, including website improvements, Google Business Profile enhancements, citation management, local content optimization, and technical SEO updates to strengthen your local online presence.", icon: Settings },
        { step: "5", title: "Continuous Optimization", desc: "Local SEO is an ongoing process. We continuously monitor search performance, optimize content, manage business listings, improve customer reviews, and adapt your strategy based on Google's latest algorithm updates.", icon: Activity },
        { step: "6", title: "Performance Monitoring & Reporting", desc: "We track keyword rankings, website traffic, Google Business Profile insights, customer actions, and campaign performance through detailed monthly reports. These insights help us refine the strategy and ensure continuous business growth.", icon: LineChart }
    ];

    const whyChooseUs = [
        { title: "Customized Local SEO Strategies", desc: "Every campaign is tailored to your business goals, target locations, and industry requirements.", icon: Settings },
        { title: "Google Business Profile Experts", desc: "We optimize and manage your Google Business Profile to improve visibility in Google Search and Google Maps.", icon: Store },
        { title: "Location-Based Keyword Targeting", desc: "We identify high-intent local keywords that attract nearby customers and increase qualified traffic.", icon: Search },
        { title: "Complete Local SEO Solutions", desc: "From website optimization and citation management to review management and Google Maps SEO, we cover every aspect of Local SEO.", icon: Target },
        { title: "White-Hat SEO Practices", desc: "We follow Google's recommended SEO guidelines to deliver sustainable rankings and long-term business growth.", icon: ShieldCheck },
        { title: "Transparent Reporting", desc: "Receive detailed monthly reports with keyword rankings, traffic insights, lead performance, and campaign progress.", icon: FileText },
        { title: "Experienced SEO Professionals", desc: "Our team stays updated with the latest Local SEO trends, algorithm updates, and best practices to maximize your online visibility.", icon: Users },
        { title: "Focus on Lead Generation", desc: "We don't just improve rankings—we help attract qualified local customers who are more likely to convert into leads and sales.", icon: TrendingUp },
        { title: "Scalable Solutions", desc: "Whether you operate a single location or multiple branches, our Local SEO strategies are designed to support your business growth.", icon: LayoutDashboard },
        { title: "Dedicated Support & Continuous Optimization", desc: "We continuously monitor, refine, and optimize your campaign to ensure consistent performance and long-term success.", icon: Headset }
    ];

    const industries = [
        { name: "IT & Software Companies", icon: Code2 },
        { name: "Healthcare & Hospitals", icon: BriefcaseMedical },
        { name: "Educational Institutions", icon: GraduationCap },
        { name: "Real Estate Companies", icon: Building },
        { name: "Manufacturing Industries", icon: Factory },
        { name: "Retail Stores", icon: Store },
        { name: "Restaurants & Cafés", icon: Utensils },
        { name: "Hotels & Hospitality", icon: BedDouble },
        { name: "Construction Companies", icon: Hammer },
        { name: "Home Service Businesses", icon: Wrench },
        { name: "Legal & Financial Firms", icon: Scale },
        { name: "eCommerce Businesses", icon: ShoppingCart },
        { name: "Automotive Businesses", icon: Car },
        { name: "Beauty & Wellness Centres", icon: Heart },
        { name: "Professional Service Providers", icon: Landmark },
    ];

    const faqs = [
        { q: "What is Local SEO, and how does it benefit my business?", a: "Local SEO helps your business appear in location-based searches, making it easier for nearby customers to find your products or services through Google Search and Google Maps." },
        { q: "How long does it take to see results from Local SEO?", a: "The timeline depends on your industry, competition, and the current state of your online presence. Most businesses begin seeing noticeable improvements within 2 to 4 months, with continued growth through ongoing optimization." },
        { q: "Do I need a Google Business Profile for Local SEO?", a: "Yes. A well-optimized Google Business Profile is one of the most important factors for improving visibility in local search results and Google Maps." },
        { q: "Can Local SEO help businesses with multiple locations?", a: "Absolutely. We create customized Local SEO strategies for businesses operating in multiple cities or branches, optimizing each location to improve local search visibility." },
        { q: "Why should I choose Syscorp for Local SEO Services?", a: "Syscorp delivers customized Local SEO strategies tailored to your business goals, combining technical expertise, local search optimization, citation management, and reputation building to help you attract more local customers and achieve sustainable growth." }
    ];

    return (
        <main ref={mainRef} className="bg-white min-h-screen overflow-x-clip font-sans">
            <HeaderBanner
                title={
                    <>
                        Local SEO Services in <span className="text-[#38bdf8] font-serif italic font-normal">Pondicherry</span>
                    </>
                }
                description="Increase Your Local Visibility and Attract More Customers in Your Target Location"
            />

            {/* Intro Section */}
            <section className="py-20 lg:py-28 bg-[#F0F8FF]/60 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#1A5CDD]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
                <div className="container mx-auto px-6 max-w-6xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="gsap-fade-up">
                            <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 rounded-full px-3.5 py-1 text-xs font-bold text-[#1A5CDD] uppercase tracking-wider mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] inline-block animate-pulse" />
                                Reach Nearby Customers
                            </span>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-[#011146] tracking-tight mb-6">
                                Connect with Customers <span className="text-[#1A5CDD]">Searching Locally</span>
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                At Syscorp, our Local SEO Services in Pondicherry help businesses improve their visibility in local search results and connect with customers who are actively searching for products and services in their area. As a trusted Local SEO Company in Pondicherry, we implement customized local search strategies that strengthen your online presence, improve local rankings, and generate more enquiries, phone calls, and store visits.
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                Our Local SEO approach goes beyond simply optimizing your Google Business Profile. We focus on local keyword targeting, business listings, citation management, location-specific content, review management, and local search optimization to ensure your business stands out in Google Search and Google Maps. Whether you're a startup, retail store, healthcare provider, educational institution, restaurant, or service-based business, our Local SEO solutions are designed to help you reach nearby customers and achieve sustainable business growth.
                            </p>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-[#011146] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#1A5CDD] transition-all shadow-lg shadow-blue-900/10"
                            >
                                Get a Free Local SEO Audit <ArrowRight size={16} />
                            </Link>
                        </div>
                        <div className="gsap-fade-up relative w-full h-[500px] md:h-[600px] flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
                            <div className="absolute top-1/2 right-4 -translate-y-1/2 w-[80%] h-[95%] bg-[#F0F8FF] rounded-[40px] -z-10" />
                            <div className="relative w-[85%] h-[85%] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(1,17,70,0.1)] border-[6px] border-white z-10 group">
                                <Image
                                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
                                    alt="Local Search Map Visualization"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-[#011146]/10 group-hover:bg-transparent transition-colors duration-500" />
                            </div>
                            <div className="absolute -bottom-4 -left-2 lg:-left-6 w-[60%] h-[45%] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(1,17,70,0.15)] border-[6px] border-white z-20 group">
                                <Image
                                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop"
                                    alt="Customer Using Local Search"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="absolute top-6 -right-2 lg:-right-6 bg-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-100 z-30 animate-bounce-slow">
                                <div className="w-12 h-12 bg-blue-50 text-[#1A5CDD] rounded-full flex items-center justify-center font-bold text-xl">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-[#011146] font-extrabold text-sm">#1 Ranked</p>
                                    <p className="text-slate-500 text-xs font-medium mt-0.5">Local SEO Agency</p>
                                </div>
                            </div>
                            <div className="absolute -top-6 left-12 w-24 h-24 bg-[radial-gradient(#1A5CDD_2px,transparent_2px)] [background-size:12px_12px] opacity-20 z-0" />
                        </div>
                    </div>
                </div>
            </section>

            {/* What is Local SEO Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="bg-[#011146] rounded-[40px] relative overflow-hidden shadow-2xl">
                        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#1A5CDD]/25 rounded-full blur-[100px] pointer-events-none" />
                        <div className="absolute -bottom-20 left-[20%] w-64 h-64 bg-[#38bdf8]/10 rounded-full blur-[80px] pointer-events-none" />
                        <div className="flex flex-col md:flex-row items-stretch gap-0 relative z-10">
                            <div className="md:w-5/12 p-10 md:p-14 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-8 h-1 bg-[#38bdf8] rounded-full" />
                                    <span className="text-[#38bdf8] text-xs font-bold tracking-widest uppercase">Local SEO Fundamentals</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-8">
                                    What is <span className="text-[#38bdf8]">Local SEO</span>?
                                </h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                        <p className="text-2xl font-black text-[#38bdf8]">46%</p>
                                        <p className="text-slate-400 text-[12px] mt-1">of all Google searches seek local information</p>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                        <p className="text-2xl font-black text-[#38bdf8]">80%</p>
                                        <p className="text-slate-400 text-[12px] mt-1">of local searches convert</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-7/12 p-10 md:p-14 flex flex-col justify-between">
                                <div className="space-y-5">
                                    <p className="text-slate-300 text-[15px] leading-relaxed">
                                        Local SEO (Local Search Engine Optimization) is the process of optimizing your online presence to improve your visibility in location-based search results on Google and other search engines. It helps your business appear in Google Maps, the Local Pack, and local organic search results when potential customers search for products or services in your area.
                                    </p>
                                    <p className="text-slate-300 text-[15px] leading-relaxed">
                                        Local SEO includes optimizing your Google Business Profile, website content, local keywords, business citations, customer reviews, and location-specific pages. By targeting nearby customers with high purchase intent, Local SEO helps increase website traffic, phone calls, enquiries, and store visits while strengthening your business's credibility in the local market.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-8">
                                    {["Google Maps SEO", "GBP Optimization", "Local Keywords", "Review Management", "Citation Building", "Location Pages"].map((tag) => (
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

            {/* Why Local SEO is Important */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1A5CDD]/5 blur-3xl rounded-full pointer-events-none" />
                <div className="container mx-auto px-4 relative max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-center gap-10 rounded-[40px] p-4 lg:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] bg-white border border-slate-100 group/hero relative overflow-hidden">
                        <div className="lg:w-1/2 p-6 lg:p-10 relative z-10">
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 mb-8 shadow-sm">
                                <Settings className="text-[#1A5CDD]" size={16} />
                                <span className="text-[13px] font-bold text-[#1A5CDD] tracking-wider uppercase">Strategic Advantage</span>
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#011146] mb-5 leading-tight">Why Local SEO is Important for Your Business</h2>
                            <p className="text-slate-600 text-[16px] leading-relaxed mb-6">
                                Most customers search online before choosing a local business. If your business isn't visible in local search results, you're missing valuable opportunities to attract potential customers. Local SEO improves your online visibility, helping your business appear where people are actively searching for your products or services.
                            </p>
                            <p className="text-slate-600 text-[16px] leading-relaxed mb-8">
                                An effective Local SEO strategy increases Google Maps visibility, drives qualified local traffic, builds trust through positive reviews and consistent business information, and generates more leads. Whether you serve a single location or multiple cities, Local SEO helps your business stand out, attract nearby customers, and achieve long-term growth.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex-1 bg-[#F8FAFC] border border-slate-100 rounded-xl p-3.5 flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[#1A5CDD]/10 text-[#1A5CDD] flex items-center justify-center shrink-0">
                                        <CheckCircle2 size={14} strokeWidth={3} />
                                    </div>
                                    <span className="text-[#011146] font-bold text-[14px]">Higher Local Footfall</span>
                                </div>
                                <div className="flex-1 bg-[#F8FAFC] border border-slate-100 rounded-xl p-3.5 flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[#1A5CDD]/10 text-[#1A5CDD] flex items-center justify-center shrink-0">
                                        <CheckCircle2 size={14} strokeWidth={3} />
                                    </div>
                                    <span className="text-[#011146] font-bold text-[14px]">Trusted Online Presence</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative z-10 flex items-center justify-center p-6 lg:p-8">
                            <div className="absolute inset-4 bg-[#1A5CDD]/5 rounded-[32px] transform rotate-3 pointer-events-none" />
                            <div className="absolute inset-4 bg-[#38bdf8]/10 rounded-[32px] transform -rotate-2 pointer-events-none" />
                            <div className="relative overflow-hidden rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-[8px] border-white z-10 w-full aspect-[4/3] group/image">
                                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop" alt="Local SEO Analytics" className="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#011146]/20 to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits of Local SEO */}
            <section className="py-24 bg-[#F8FAFF] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1A5CDD]/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        {/* Left Side: Header & Graphic */}
                        <div className="lg:w-5/12">
                            <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 rounded-full px-3.5 py-1 text-xs font-bold text-[#1A5CDD] uppercase tracking-wider mb-6">
                                Measurable Growth
                            </span>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-[#011146] tracking-tight mb-6 leading-tight">
                                Benefits of Local SEO
                            </h2>
                            <p className="text-slate-600 text-[17px] leading-relaxed mb-8">
                                Our Local SEO Services help businesses achieve measurable growth by improving local search performance and increasing customer engagement.
                            </p>

                            <div className="relative w-full h-[320px] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(26,92,221,0.1)] border-[8px] border-white group hidden sm:block">
                                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" alt="Local SEO Growth" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#011146]/60 to-transparent pointer-events-none" />
                                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#1A5CDD] text-white flex items-center justify-center shrink-0 shadow-lg">
                                        <TrendingUp size={24} />
                                    </div>
                                    <div>
                                        <div className="text-white font-extrabold text-lg">Sustainable Growth</div>
                                        <div className="text-blue-100 text-sm">Through Local Optimization</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Benefits List */}
                        <div className="lg:w-7/12 w-full">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {benefits.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={index} className="group bg-white p-6 rounded-[24px] border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(26,92,221,0.12)] hover:border-[#1A5CDD]/20 transition-all duration-300 flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-[16px] bg-[#F0F8FF] text-[#1A5CDD] flex items-center justify-center shrink-0 border border-[#1A5CDD]/10 group-hover:bg-[#1A5CDD] group-hover:text-white transition-colors duration-300">
                                                <Icon size={22} strokeWidth={2} />
                                            </div>
                                            <p className="text-slate-700 text-[15px] font-medium leading-relaxed pt-1 group-hover:text-[#011146] transition-colors duration-300">
                                                {item.desc}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Our Local SEO Services Cover */}
            <section className="py-24 bg-[#011146] relative overflow-hidden rounded-[40px] mx-4 lg:mx-auto max-w-[96%] mt-12 mb-32">
                {/* Blueprint Grid Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
                
                {/* Subtle Radial Glow in Center */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#1A5CDD]/20 blur-[120px] rounded-full pointer-events-none" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <div className="inline-flex items-center justify-center mb-6">
                            <span className="px-5 py-1.5 rounded-full bg-[#1A5CDD]/10 border border-[#1A5CDD]/30 text-[#38bdf8] text-[12px] font-bold tracking-wider uppercase backdrop-blur-sm">
                                Comprehensive Optimization
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
                            What Our Local SEO Services Cover
                        </h2>
                        <p className="text-slate-300 text-[16px] leading-relaxed max-w-2xl mx-auto">
                            At Syscorp, we provide comprehensive Local SEO Services designed to improve your visibility in Google Search, Google Maps, and other location-based search results.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div key={index} className="group flex items-start gap-5 cursor-default">
                                    {/* Icon Container with Blueprint styling */}
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#38bdf8] shrink-0 group-hover:bg-[#1A5CDD] group-hover:border-[#1A5CDD] group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(26,92,221,0.15)] group-hover:shadow-[0_0_25px_rgba(26,92,221,0.4)]">
                                        <Icon size={22} strokeWidth={1.8} />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 pt-1">
                                        <h4 className="text-white text-[16px] font-bold mb-2 group-hover:text-[#38bdf8] transition-colors duration-300">
                                            {service.title}
                                        </h4>
                                        <p className="text-slate-400 text-[14px] leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Our Local SEO Process */}
            <section className="py-24 bg-[#F8FAFF] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-slate-50 to-transparent pointer-events-none" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 rounded-full px-3.5 py-1 text-xs font-bold text-[#1A5CDD] uppercase tracking-wider mb-4">
                            How We Work
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#011146] tracking-tight">
                            Our Local SEO Process
                        </h2>
                        <p className="mt-5 text-slate-600 text-[16px] leading-relaxed max-w-2xl mx-auto">
                            A proven, step-by-step approach to improving your local search visibility and driving high-quality nearby traffic to your business.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {localSeoProcess.map((item, index) => {
                            return (
                                <div key={index} className="group relative bg-white border border-slate-100 rounded-[32px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(26,92,221,0.12)] hover:border-[#1A5CDD]/20 transition-all duration-500 overflow-hidden text-left flex flex-col h-full cursor-default">
                                    {/* Large faded step number */}
                                    <div className="absolute -right-4 -top-6 text-[#1A5CDD]/5 font-black text-9xl group-hover:scale-110 group-hover:text-[#1A5CDD]/10 transition-all duration-500 select-none">
                                        {item.step.padStart(2, '0')}
                                    </div>

                                    <div className="w-14 h-14 rounded-2xl bg-[#F0F8FF] text-[#1A5CDD] flex items-center justify-center mb-6 shadow-sm border border-[#1A5CDD]/10 group-hover:bg-[#1A5CDD] group-hover:text-white group-hover:-translate-y-1 transition-all duration-300 relative z-10">
                                        <item.icon size={24} strokeWidth={2} />
                                    </div>

                                    <h4 className="text-[19px] font-extrabold text-[#011146] mb-3 group-hover:text-[#1A5CDD] transition-colors duration-300 relative z-10">
                                        Step {item.step}: {item.title}
                                    </h4>

                                    <p className="text-slate-600 leading-relaxed text-[15px] relative z-10 flex-1">
                                        {item.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Us - 3D Flip Cards Grid */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 rounded-full px-3.5 py-1 text-xs font-bold text-[#1A5CDD] uppercase tracking-wider mb-4">
                            Why Syscorp
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#011146] tracking-tight">
                            Why Choose Syscorp for Local SEO?
                        </h2>
                        <p className="mt-6 text-slate-600 text-[16px] leading-relaxed">
                            At Syscorp, we understand that local customers are the driving force behind business growth. Our Local SEO strategies are tailored to your industry, target audience, service areas, and business objectives, ensuring your business appears where your customers are actively searching. By combining technical expertise, local search optimization, reputation management, and data-driven strategies, we help businesses improve local visibility, generate qualified leads, and achieve sustainable long-term growth through ethical SEO practices.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
                        {whyChooseUs.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="group relative w-full h-[240px] [perspective:1000px] cursor-pointer">
                                    <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                                        {/* Front Face */}
                                        <div className="absolute inset-0 [backface-visibility:hidden] bg-white border border-slate-100 rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] group-hover:shadow-none">
                                            <div className="w-16 h-16 rounded-2xl bg-blue-50/50 flex items-center justify-center text-[#1A5CDD] mb-5 border border-blue-100/50">
                                                <Icon size={28} strokeWidth={1.5} />
                                            </div>
                                            <h4 className="text-[16px] font-extrabold text-[#011146] leading-tight px-2">{item.title}</h4>
                                        </div>

                                        {/* Back Face */}
                                        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-[#1A5CDD] to-[#011146] rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-[0_15px_30px_rgba(26,92,221,0.2)]">
                                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white mb-3">
                                                <Icon size={18} strokeWidth={2} />
                                            </div>
                                            <h4 className="text-[15px] font-bold text-white mb-2 leading-tight">{item.title}</h4>
                                            <p className="text-[13px] text-blue-100/90 leading-relaxed overflow-hidden line-clamp-4">{item.desc}</p>
                                        </div>

                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            {/* Industries We Serve - Infinite Marquee */}
            <section className="py-24 bg-[#011146] relative overflow-hidden mt-12 mb-12 rounded-[40px] mx-4 lg:mx-auto max-w-[96%]">
                {/* Background effects */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1A5CDD]/25 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#38bdf8]/15 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#38bdf8] text-xs font-bold tracking-wider uppercase mb-5 border border-white/10 backdrop-blur-sm">Tailored Solutions</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-5">Industries We Serve</h2>
                        <p className="text-slate-300 max-w-2xl mx-auto text-[16px] leading-relaxed">
                            Our Local SEO solutions are customized for businesses across various industries, ensuring you connect with the right local audience.
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
                                <span className="font-bold text-white text-[15px] leading-tight relative z-10 whitespace-nowrap">{ind.name}</span>
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
                                <span className="font-bold text-white group-hover:text-[#011146] text-[15px] leading-tight relative z-10 transition-colors duration-500 whitespace-nowrap">{ind.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-[#F8FAFC]">
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
