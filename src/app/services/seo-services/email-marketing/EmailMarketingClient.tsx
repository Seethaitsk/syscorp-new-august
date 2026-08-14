"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Share2, TrendingUp, Target, BarChart, MessageCircle, Users, CheckCircle2,
    ArrowRight, ShieldCheck, Rocket, Smartphone, Heart, Image as ImageIcon, Video,
    FileText, LayoutDashboard, LinkIcon, Settings, Code2, Globe, Bookmark,
    ChevronDown, Activity, Mail, Search, MonitorPlay, LineChart, Star, Zap, Clock, ThumbsUp, Send, UserCheck, Key, MousePointerClick, RefreshCcw,
    Megaphone, ShoppingCart, MapPin, Palette, Edit, Calendar
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderBanner from "@/components/ui/HeaderBanner";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function EmailMarketingClient() {
    const mainRef = useRef<HTMLDivElement>(null);
    const [isIntroExpanded, setIsIntroExpanded] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [activeDiff, setActiveDiff] = useState(0);
      const [activeFaq, setActiveFaq] = useState<number | null>(null);
    // const [activeDiff, setActiveDiff] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".gsap-fade-up",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: mainRef.current,
                        start: "top 80%",
                    }
                }
            );
        }, mainRef);

        return () => ctx.revert();
    }, []);

    const benefits = [
        { title: "Build Strong Customer Relationships", desc: "Stay connected with your customers through personalized email communication that builds trust and encourages long-term loyalty.", icon: Heart },
        { title: "Generate Quality Leads", desc: "Nurture potential customers with relevant content and targeted campaigns that guide them through the buying journey.", icon: Users },
        { title: "Increase Website Traffic", desc: "Drive more visitors to your website, landing pages, blogs, and product pages through strategic email campaigns.", icon: MousePointerClick },
        { title: "Promote Products & Services", desc: "Showcase new products, special offers, promotions, and business updates to your audience with engaging email content.", icon: Target },
        { title: "Improve Customer Retention", desc: "Keep existing customers engaged with newsletters, exclusive offers, follow-up emails, and loyalty campaigns that encourage repeat business.", icon: RefreshCcw },
        { title: "Personalized Email Campaigns", desc: "Deliver customized email content based on customer interests, preferences, behaviour, and purchase history for better engagement.", icon: Settings },
        { title: "Cost-Effective Marketing Solution", desc: "Email marketing offers a high return on investment by reaching a targeted audience at a lower cost than many traditional marketing channels.", icon: TrendingUp },
        { title: "Track Campaign Performance", desc: "Measure important metrics such as email open rates, click-through rates, conversions, and customer engagement to continuously improve campaign performance.", icon: LineChart },
        { title: "Support Sales & Business Growth", desc: "Convert prospects into customers and strengthen existing customer relationships through consistent and strategic email marketing campaigns.", icon: Activity }
    ];

    const solutions = [
        { title: "Promotional Email Campaigns", desc: "Promote your products, services, special offers, discounts, and seasonal campaigns with engaging promotional emails that encourage customers to take action.", icon: Megaphone },
        { title: "Newsletter Campaigns", desc: "Keep your audience informed with regular newsletters featuring company updates, industry insights, new product launches, blogs, and valuable content.", icon: Mail },
        { title: "Welcome Email Campaigns", desc: "Create a positive first impression by sending personalized welcome emails to new subscribers and customers, introducing your brand and services.", icon: UserCheck },
        { title: "Lead Nurturing Campaigns", desc: "Build relationships with potential customers through automated email sequences that educate, engage, and guide them toward making a purchase.", icon: Users },
        { title: "Drip Email Campaigns", desc: "Deliver a series of automated emails based on customer actions and behaviour to keep your audience engaged throughout the customer journey.", icon: Clock },
        { title: "Abandoned Cart Emails", desc: "Recover lost sales by reminding customers about products left in their shopping cart and encouraging them to complete their purchase.", icon: ShoppingCart },
        { title: "Customer Retention Campaigns", desc: "Strengthen customer loyalty with personalized follow-up emails, exclusive offers, loyalty rewards, and re-engagement campaigns.", icon: ShieldCheck },
        { title: "Event & Invitation Emails", desc: "Promote webinars, workshops, product launches, business events, and special occasions through professionally designed invitation emails.", icon: Calendar },
        { title: "Transactional Emails", desc: "Send automated order confirmations, payment receipts, shipping updates, account notifications, and other important customer communications.", icon: FileText },
        { title: "Re-Engagement Email Campaigns", desc: "Reconnect with inactive subscribers through targeted campaigns that encourage them to return and interact with your business again.", icon: Zap }
    ];

    const services = [
        { title: "Email Marketing Strategy & Planning", desc: "We develop customized email marketing strategies based on your business goals, target audience, customer journey, and marketing objectives to ensure every campaign delivers value.", icon: MapPin },
        { title: "Audience Segmentation & List Management", desc: "We organize and segment your email database based on customer interests, demographics, purchase history, and behaviour, helping you send highly relevant and personalized email campaigns.", icon: Users },
        { title: "Email Campaign Design", desc: "Our team creates professional, mobile-friendly, and visually engaging email templates that reflect your brand identity while encouraging customer interaction and conversions.", icon: Palette },
        { title: "Email Content Writing", desc: "We create compelling subject lines, persuasive email copy, and clear calls-to-action that encourage recipients to open, read, and respond to your emails.", icon: Edit },
        { title: "Automated Email Workflows", desc: "We set up automated email sequences such as welcome emails, lead nurturing campaigns, follow-up emails, abandoned cart reminders, and customer retention campaigns to improve engagement without manual effort.", icon: Settings },
        { title: "Promotional Email Campaigns", desc: "We create promotional emails to showcase your products, services, discounts, seasonal offers, and special announcements, helping you attract more customers and increase sales.", icon: Target },
        { title: "Newsletter Management", desc: "We design and manage regular newsletters that keep your audience informed with company updates, industry news, valuable content, and business announcements.", icon: Mail },
        { title: "A/B Testing & Campaign Optimization", desc: "We test different subject lines, email designs, content, and calls-to-action to identify the best-performing campaigns and continuously improve results.", icon: LayoutDashboard },
        { title: "Performance Tracking & Analytics", desc: "We monitor key performance metrics such as open rates, click-through rates, conversions, bounce rates, and subscriber engagement to measure campaign success and identify improvement opportunities.", icon: LineChart },
        { title: "Reporting & Continuous Improvement", desc: "We provide detailed campaign reports with actionable insights and recommendations, helping you refine your email marketing strategy and achieve better long-term results.", icon: TrendingUp }
    ];

    const process = [
        { step: "1", title: "Business Analysis & Strategy Planning", desc: "We begin by understanding your business goals, target audience, products or services, and marketing objectives. Based on these insights, we create a customized email marketing strategy tailored to your business." },
        { step: "2", title: "Audience Segmentation & Campaign Planning", desc: "We organize your email list into targeted audience segments based on customer interests, behaviour, demographics, and purchase history, ensuring every email reaches the right people." },
        { step: "3", title: "Email Design & Content Creation", desc: "Our team designs responsive email templates and creates engaging subject lines, compelling content, and clear calls-to-action that encourage recipients to open, read, and interact with your emails." },
        { step: "4", title: "Campaign Launch & Automation", desc: "We schedule and launch email campaigns while setting up automated workflows such as welcome emails, lead nurturing sequences, promotional campaigns, and follow-up emails for continuous customer engagement." },
        { step: "5", title: "Performance Monitoring & Optimization", desc: "We track key metrics such as open rates, click-through rates, conversions, and customer engagement. Based on campaign performance, we continuously optimize content, timing, and strategy to achieve better results." }
    ];

    const differentiators = [
        { title: "Customized Email Marketing Strategies", desc: "We create tailored email marketing strategies based on your business objectives, target audience, industry, and customer journey to ensure every campaign delivers meaningful results." },
        { title: "Personalized Email Campaigns", desc: "Our team develops personalized email campaigns that deliver relevant content to the right audience, helping improve customer engagement and build stronger relationships." },
        { title: "Professional Email Design & Content", desc: "We create visually appealing email templates and compelling content with engaging subject lines and clear calls-to-action that encourage recipients to take action." },
        { title: "Email Automation & Lead Nurturing", desc: "We implement automated email workflows, including welcome emails, follow-up sequences, promotional campaigns, and lead nurturing emails to keep your audience engaged throughout the customer journey." },
        { title: "Performance Monitoring & Optimization", desc: "We continuously monitor campaign performance, analyze key metrics, and optimize email content, timing, and strategies to improve open rates, click-through rates, and conversions." },
        { title: "Transparent Reporting & Continuous Improvement", desc: "We provide detailed performance reports with actionable insights and recommendations, helping you understand campaign results and continuously improve your email marketing strategy." }
    ];

    const faqs = [
        { q: "What are Email Marketing Services?", a: "Email Marketing Services help businesses communicate with customers through targeted email campaigns. At SysCrop, our Email Marketing Services in Pondicherry include campaign strategy, email design, content creation, automation, audience segmentation, and performance tracking to improve customer engagement and business growth." },
        { q: "Why should I choose SysCrop for Email Marketing Services in Pondicherry?", a: "SysCrop provides customized Email Marketing Services in Pondicherry tailored to your business goals. We create personalized email campaigns, automate customer journeys, monitor campaign performance, and continuously optimize strategies to help you generate leads, increase customer engagement, and improve conversions." },
        { q: "What types of email campaigns does SysCrop create?", a: "We create a wide range of email campaigns, including promotional emails, newsletters, welcome emails, lead nurturing campaigns, drip campaigns, abandoned cart emails, customer retention campaigns, transactional emails, event invitations, and re-engagement campaigns." },
        { q: "How can Email Marketing help my business grow?", a: "Email marketing helps businesses build stronger customer relationships, increase website traffic, promote products and services, generate quality leads, improve customer retention, and encourage repeat purchases through personalized communication." },
        { q: "Can SysCrop manage and automate my email marketing campaigns?", a: "Yes. Our team manages the complete email marketing process, including audience segmentation, campaign creation, email automation, scheduling, A/B testing, performance monitoring, and campaign optimization to ensure effective results." },
        { q: "Does SysCrop provide email marketing performance reports?", a: "Yes. We provide detailed campaign reports that include important metrics such as email open rates, click-through rates, conversions, subscriber engagement, and campaign performance insights to help you measure success and improve future email marketing campaigns." }
    ];

    return (
        <main ref={mainRef} className="bg-white min-h-screen overflow-x-clip font-sans">
            <HeaderBanner
                title={
                    <>
                        <span className="text-[#38bdf8] bg-clip-text text-transparent bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8]">Email Marketing</span> in Pondicherry
                    </>
                }
                description="Reach the Right Audience with Strategic Email Marketing to Drive Conversions & Business Growth."
                badge1={{
                    title: "Drive Conversions",
                    description: "Targeted & Automated Campaigns"
                }}
                badge2={{
                    title: "High ROI & Retention",
                    description: "Engage & Nurture Quality Leads"
                }}
            />

             {/* Intro Section */}
            <section className="py-20 bg-[#F0F8FF]/60 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="gsap-fade-up lg:col-span-6 lg:pr-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 text-[#1A5CDD] mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] animate-pulse"></span>
                                ROI-Driven Campaigns
                            </div>

                            <h2 className="text-[32px] md:text-4xl lg:text-[46px] font-extrabold text-[#011146] tracking-tight mb-6 leading-[1.15]">
                                Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8]">Email Marketing Services</span> in Pondicherry for Business Growth
                            </h2>

                            <h3 className="text-[#011146] text-[18px] md:text-[20px] leading-[1.6] mb-8 font-bold border-l-4 border-[#38bdf8] pl-4">
                                Reach the Right Audience with Strategic Email Marketing.
                            </h3>

                            <p className="text-[#011146] text-[15px] leading-[1.8] mb-6 font-medium">
                                At SysCrop, we provide professional <strong>Email Marketing Services in Pondicherry</strong> to help businesses connect with their target audience, generate quality leads, improve customer engagement, and increase conversions. As a trusted <strong>Email Marketing Agency in Pondicherry</strong>, we create customized email campaigns tailored to your business goals and customer journey.
                            </p>

                            <div className={`pl-5 border-l-3 border-[#1A5CDD]/20 space-y-5 overflow-hidden transition-all duration-500 ease-in-out ${isIntroExpanded ? 'max-h-[500px] opacity-100 mb-6' : 'max-h-0 opacity-0 mb-0 border-transparent'}`}>
                                <p className="text-slate-600 text-[14px] leading-[1.8]">
                                    Our <strong>Email Marketing Services</strong> include email strategy, audience segmentation, campaign creation, email automation, performance optimization, and reporting. Whether you want to promote products, nurture leads, boost online sales, or improve customer retention, we deliver personalized email marketing solutions that drive measurable results.
                                </p>
                                <p className="text-slate-600 text-[14px] leading-[1.8]">
                                    Whether you're a startup, eCommerce business, educational institution, healthcare provider, retail brand, or service-based company, our <strong>Email Marketing Services in Pondicherry</strong> help you strengthen customer relationships, build brand loyalty, and achieve long-term business growth.
                                </p>
                            </div>

                            <button 
                                onClick={() => setIsIntroExpanded(!isIntroExpanded)}
                                className="text-[#1A5CDD] font-bold text-[14px] flex items-center gap-1.5 hover:text-[#011146] transition-colors mb-10"
                            >
                                {isIntroExpanded ? "Read Less" : "Read More"} 
                                <ChevronDown size={16} className={`transition-transform duration-300 ${isIntroExpanded ? 'rotate-180' : ''}`} />
                            </button>

                            <div className="flex flex-wrap items-center gap-4 mt-2">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 bg-[#011146] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#1A5CDD] transition-all shadow-lg shadow-blue-900/10 hover:-translate-y-0.5"
                                >
                                    Start Your Campaign <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        {/* Image Right Side */}
                        <div className="gsap-fade-up lg:col-span-6 relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0">
                            {/* Primary Large Image */}
                            <div className="relative w-full h-full lg:scale-110 z-10">
                                <Image
                                    src="/images/seo/email_marketing.png"
                                    alt="Email Marketing Campaigns"
                                    fill
                                    className="object-contain drop-shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is Email Marketing Section */}
            <section className="py-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="bg-[#011146] rounded-[40px] p-8 lg:p-14 shadow-2xl border border-[#1A5CDD]/20 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center relative overflow-hidden">

                        {/* Decorative glow inside card */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1A5CDD]/20 rounded-full blur-3xl pointer-events-none" />

                        {/* Text Content */}
                        <div className="lg:w-5/12 relative z-10">
                            <h2 className="text-3xl lg:text-[38px] font-extrabold text-white tracking-tight mb-6 leading-tight">What is Email Marketing?</h2>
                            <p className="text-slate-300 text-[15px] lg:text-[16px] leading-[1.8]">
                                Email Marketing is a digital marketing strategy that helps businesses connect with customers through personalized and targeted email campaigns. It is an effective way to promote products or services, nurture leads, strengthen customer relationships, and increase conversions through timely and relevant communication.
                            </p>
                        </div>

                        {/* Image Content */}
                        <div className="lg:w-7/12 w-full relative z-10 flex justify-end">
                            <div className="relative w-full rounded-[32px] overflow-hidden">
                                <Image
                                    src="/images/seo/why_email_marketing.svg"
                                    alt="Email Marketing Analytics Dashboard"
                                    width={900}
                                    height={550}
                                    className="w-full h-full object-cover scale-[1.02]"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Why Email Marketing is Important & Benefits Section */}
            <section className="py-20 bg-[#F0F8FF]/60 relative overflow-hidden border-y border-slate-100">
                {/* Clean, technical background pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1A5CDD]/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#38bdf8]/5 rounded-full blur-[80px] pointer-events-none" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-24">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 text-[#1A5CDD] mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] inline-block animate-pulse" />
                                Why It Matters
                            </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#011146] tracking-tight mb-8 leading-[1.15]">
                            Why Email Marketing is Important
                        </h2>
                        <p className="text-slate-600 text-[16px] md:text-[18px] leading-relaxed mb-0 max-w-3xl mx-auto">
                            Email marketing is one of the most effective digital marketing channels for building customer relationships, increasing engagement, and driving conversions. With a well-planned email strategy, businesses can communicate directly with their audience, deliver personalized messages, and encourage customers to take action.
                        </p>
                    </div>

                    {/* Minimalist Floating Grid (Zero Card UI) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <div key={index} className="flex gap-6 group relative">
                                    {/* Hover Highlight Line */}
                                    <div className="absolute -left-6 top-0 bottom-0 w-1 bg-[#1A5CDD] rounded-r-full scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                                    
                                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#F8FAFC] border border-slate-100 flex items-center justify-center group-hover:bg-[#1A5CDD] group-hover:border-[#1A5CDD] group-hover:shadow-[0_10px_20px_rgba(26,92,221,0.2)] group-hover:-translate-y-1 transition-all duration-500 mt-1 shadow-sm">
                                        <Icon className="text-[#1A5CDD] group-hover:text-white transition-colors duration-500" size={24} strokeWidth={2} />
                                    </div>
                                    
                                    <div className="flex-1 pr-4">
                                        <h4 className="text-[20px] font-bold text-[#011146] mb-3 leading-snug group-hover:text-[#1A5CDD] transition-colors duration-300">
                                            {benefit.title}
                                        </h4>
                                        <p className="text-slate-500 text-[15px] leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
                                            {benefit.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Explore Our Email Marketing Solutions */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 text-[#1A5CDD] mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] inline-block animate-pulse" />
                                Our Solutions
                            </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#011146] tracking-tight mb-8 leading-[1.15]">
                            Explore Our Email Marketing Solutions
                        </h2>
                        <p className="text-slate-600 text-[16px] md:text-[18px] leading-relaxed">
                            Reach your customers with personalized email campaigns designed to engage, nurture, and convert. At Syscorp, our Email Marketing Services in Pondicherry include a wide range of email campaigns tailored to your business goals, helping you strengthen customer relationships, increase engagement, and drive more conversions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
                        {solutions.map((sol, index) => {
                            const Icon = sol.icon;
                            return (
                                <div key={index} className="flex flex-col sm:flex-row gap-6 p-8 rounded-[32px] bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-[0_20px_50px_rgba(26,92,221,0.08)] hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#1A5CDD]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="shrink-0 w-16 h-16 bg-white shadow-sm border border-slate-100 rounded-2xl flex items-center justify-center group-hover:bg-[#1A5CDD] group-hover:border-[#1A5CDD] transition-all duration-500 relative z-10">
                                        <Icon size={28} className="text-[#1A5CDD] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                                    </div>
                                    <div className="relative z-10">
                                        <h4 className="text-[20px] font-bold text-[#011146] mb-3 group-hover:text-[#1A5CDD] transition-colors">{sol.title}</h4>
                                        <p className="text-slate-500 leading-relaxed text-[15px]">{sol.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* What Our Email Marketing Services Cover (Premium Glassmorphism) */}
            <section className="py-20 bg-[#011146] relative overflow-hidden rounded-[40px] mx-4 lg:mx-auto max-w-[96%] my-12">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#1A5CDD]/20 blur-[120px] rounded-full pointer-events-none" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <div className="inline-flex items-center justify-center mb-6">
                            <span className="px-5 py-1.5 rounded-full bg-[#1A5CDD]/10 border border-[#1A5CDD]/30 text-[#38bdf8] text-[12px] font-bold tracking-wider uppercase backdrop-blur-sm">
                                Complete Email Solutions
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
                            What Our Email Marketing Services Cover
                        </h2>
                        <p className="text-slate-300 text-[16px] leading-relaxed max-w-2xl mx-auto">
                            Our Email Marketing Services in Pondicherry help businesses connect with customers through strategic campaigns. We provide complete solutions including email planning, design, automation, and performance tracking to drive better engagement and results.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {services.map((item, index) => {
                            const Icon = item.icon || Activity;
                            return (
                                <div key={index} className="group relative bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/[0.08] hover:border-[#38bdf8]/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full cursor-default shadow-lg hover:shadow-[0_20px_40px_rgba(26,92,221,0.2)]">
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#38bdf8]/10 rounded-full blur-[40px] group-hover:bg-[#38bdf8]/20 transition-colors duration-700 transform translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#38bdf8] mb-8 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#1A5CDD] group-hover:to-[#38bdf8] group-hover:border-transparent group-hover:text-white transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.1)] relative z-10">
                                        <Icon size={28} strokeWidth={1.5} />
                                    </div>
                                    <div className="relative z-10 flex-1 flex flex-col">
                                        <h4 className="text-white text-xl font-bold mb-4 group-hover:text-[#38bdf8] transition-colors duration-300">{item.title}</h4>
                                        <p className="text-slate-400 text-[15px] leading-relaxed flex-1">{item.desc}</p>
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8] group-hover:w-full transition-all duration-700 ease-in-out" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Our Email Marketing Process Section (Premium Timeline UI) */}
            <section className="py-20 relative bg-[#F8FAFC] overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#1A5CDD]/5 blur-[120px]" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[#38bdf8]/5 blur-[120px]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-6">
                    {/* Heading Area with Image */}
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
                        {/* Text Content */}
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
                                <Activity className="text-[#1A5CDD]" size={18} strokeWidth={2.5} />
                                <span className="text-[13px] font-extrabold text-[#1A5CDD] tracking-[3px] uppercase">
                                    Campaign Management
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-extrabold text-[#011146] leading-[1.15] tracking-tight">
                                Our Email Marketing
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8] mt-2">
                                    Management Process
                                </span>
                            </h2>

                            <p className="mt-6 text-[17px] leading-[1.8] text-slate-600">
                                At Syscorp, we follow a strategic and data-driven approach to deliver successful Email Marketing Services in Pondicherry. Our process focuses on understanding your audience, creating engaging email campaigns, and continuously optimizing performance to improve customer engagement, lead generation, and conversions.
                            </p>
                        </div>

                        {/* Right Image Section - Floating & Borderless */}
                        <div className="lg:w-1/2 relative w-full flex items-center justify-center mt-12 lg:mt-0">
                            
                            {/* Static Ambient Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] max-w-[400px] max-h-[400px] bg-gradient-to-tr from-[#1A5CDD]/10 to-[#38bdf8]/10 rounded-full blur-[80px] pointer-events-none -z-10" />

                            <div className="relative w-full h-[350px] lg:h-[480px] group">
                                
                                {/* Dynamic Hover Glows (Activates on hover for depth) */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-[#1A5CDD]/0 rounded-full blur-[50px] pointer-events-none group-hover:bg-[#1A5CDD]/15 transition-colors duration-700" />
                                <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] bg-[#38bdf8]/0 rounded-full blur-[50px] pointer-events-none group-hover:bg-[#38bdf8]/15 transition-colors duration-700 delay-100" />

                                {/* The Illustration with gentle floating animation */}
                                <div className="absolute inset-0">
                                    <Image 
                                        src="/images/seo/email_marketing_1.svg"
                                        alt="Email Marketing Dashboard Illustration"
                                        fill
                                        className="object-contain transition-transform duration-700 ease-out z-10 mix-blend-multiply"
                                        priority
                                        unoptimized
                                    />
                                </div>
                                
                                {/* Decorative Particles */}
                                <div className="absolute top-16 right-8 lg:right-16 w-3 h-3 bg-[#38bdf8] rounded-full opacity-40 blur-[1px] animate-pulse shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                                <div className="absolute bottom-24 left-8 lg:left-12 w-4 h-4 bg-[#1A5CDD] rounded-full opacity-30 blur-[2px] animate-bounce shadow-[0_0_15px_rgba(26,92,221,0.6)]" style={{ animationDuration: '3s' }} />
                                <div className="absolute top-1/2 right-4 w-2 h-2 bg-emerald-400 rounded-full opacity-50 blur-[0.5px] animate-ping" style={{ animationDuration: '4s' }} />
                            </div>
                        </div>
                    </div>

                    {/* Timeline Container */}
                    <div className="relative max-w-5xl m-auto">
                        <div className="space-y-12">
                            {process.map((item, index) => {
                                const icons = [Search, Users, Palette, Send, LineChart];
                                const Icon = icons[index] || Activity;
                                return (
                                    <div key={index} className="relative pl-24 md:pl-32 group cursor-default">
                                        
                                        {/* Connecting Line Segment */}
                                        <div className={`absolute left-[45px] md:left-[61px] w-[2px] bg-slate-200 z-0 ${index === 0 ? 'top-1/2' : 'top-0'} ${index === process.length - 1 ? 'bottom-1/2' : '-bottom-12'}`} />
                                        
                                        {/* Interactive Hover Segment */}
                                        <div className={`absolute left-[45px] md:left-[61px] w-[2px] bg-gradient-to-b from-[#1A5CDD] to-[#38bdf8] z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${index === 0 ? 'top-1/2' : 'top-0'} ${index === process.length - 1 ? 'bottom-1/2' : '-bottom-12'}`} />

                                        {/* Timeline Node */}
                                        <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center z-10 group-hover:bg-[#1A5CDD] group-hover:shadow-[0_8px_25px_rgba(26,92,221,0.25)] transition-all duration-300">
                                            <span className="font-extrabold text-[#1A5CDD] text-lg group-hover:text-white transition-colors">
                                                {String(item.step).padStart(2, "0")}
                                            </span>
                                        </div>

                                        {/* Card */}
                                        <div className="bg-white rounded-[32px] p-8 md:p-10 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] group-hover:shadow-[0_20px_50px_rgba(26,92,221,0.12)] transition-all duration-300 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center gap-8 group-hover:-translate-y-1">
                                            
                                            {/* Top color bar */}
                                            <div className="absolute left-0 top-0 w-full h-1.5 bg-gradient-to-r from-slate-100 to-slate-100 group-hover:from-[#1A5CDD] group-hover:to-[#38bdf8] transition-all duration-500" />
                                            
                                            {/* Icon */}
                                            <div className="w-16 h-16 shrink-0 rounded-2xl bg-[#F8FAFC] border border-slate-100 flex items-center justify-center text-[#1A5CDD] group-hover:bg-[#1A5CDD] group-hover:text-white transition-all duration-500 relative z-10 shadow-sm">
                                                <Icon size={28} strokeWidth={2} />
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 relative z-10">
                                                <div className="flex items-center gap-4 mb-3">
                                                    <span className="px-3 py-1 bg-[#1A5CDD]/5 text-[#1A5CDD] text-xs font-bold uppercase tracking-[2px] rounded-full">Phase {String(item.step).padStart(2, "0")}</span>
                                                </div>
                                                <h3 className="text-2xl font-bold text-[#011146] mb-4 group-hover:text-[#1A5CDD] transition-colors">{item.title}</h3>
                                                <p className="text-slate-500 text-[15px] leading-relaxed">{item.desc}</p>
                                            </div>

                                            {/* Background Watermark */}
                                            <div className="absolute -bottom-8 -right-4 text-[120px] md:text-[140px] font-black text-[#1A5CDD]/[0.02] select-none pointer-events-none group-hover:text-[#1A5CDD]/[0.05] transition-colors duration-500 leading-none">
                                                {String(item.step).padStart(2, "0")}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Syscorp Section */}
            <section className="py-20 bg-[#011146] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:32px_32px] opacity-50" />
                
                <div className="container mx-auto px-4 relative max-w-7xl z-10">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-0">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.2] mb-6">
                                Why Choose Syscorp for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8]">Email Marketing Services?</span>
                            </h2>
                            <p className="text-slate-300 text-lg leading-relaxed mb-8">
                                At Syscorp, we provide strategic and personalized Email Marketing Services in Pondicherry that help businesses strengthen customer relationships, improve engagement, and increase conversions. Our team combines creative content, audience segmentation, automation, and performance analysis to deliver email campaigns that support your business goals and maximize marketing results.
                            </p>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#1A5CDD]/40 to-[#38bdf8]/40 rounded-[40px] blur-3xl -m-4 opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
                                <div className="relative rounded-[40px] overflow-hidden border-2 border-[#38bdf8]/30 shadow-2xl group-hover:border-[#38bdf8]/60 transition-colors duration-500">
                                    <Image
                                        src="/images/seo/why_choose_syscorp.svg"
                                        alt="Why Choose Syscorp"
                                        width={800}
                                        height={600}
                                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#011146]/80 via-transparent to-transparent opacity-60" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 pt-8">
                        <div className="text-center mb-12">
                            <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-6 shadow-sm backdrop-blur-sm">
                                <Star className="text-[#38bdf8]" size={16} strokeWidth={2.5} />
                                <span className="text-[13px] font-extrabold text-[#38bdf8] tracking-[3px] uppercase">
                                    Our Advantage
                                </span>
                            </span>
                            <h3 className="text-3xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">What Makes Syscorp Different?</h3>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 max-w-6xl mx-auto">
                            {/* Left Side: Interactive Tabs */}
                            <div className="lg:col-span-5 flex flex-col gap-3">
                                {differentiators.map((diff, index) => {
                                    const isActive = activeDiff === index;
                                    return (
                                        <button
                                            key={index}
                                            onClick={() => setActiveDiff(index)}
                                            className={`text-left px-6 py-5 rounded-[24px] transition-all duration-300 flex items-center gap-5 group ${
                                                isActive 
                                                ? 'bg-gradient-to-r from-[#1A5CDD]/20 to-[#38bdf8]/10 border border-[#38bdf8]/40 shadow-[0_0_30px_rgba(56,189,248,0.15)]' 
                                                : 'bg-white/[0.02] border border-white/5 hover:bg-white/[0.06] hover:border-white/20'
                                            }`}
                                        >
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                                                isActive ? 'bg-[#38bdf8] text-white shadow-[0_0_20px_rgba(56,189,248,0.4)] scale-110' : 'bg-white/5 border border-white/10 text-slate-400 group-hover:text-white'
                                            }`}>
                                                <CheckCircle2 size={22} strokeWidth={isActive ? 2.5 : 2} />
                                            </div>
                                            <span className={`font-bold transition-all duration-300 ${
                                                isActive ? 'text-white text-lg' : 'text-slate-400 text-[17px] group-hover:text-slate-200'
                                            }`}>
                                                {diff.title}
                                            </span>
                                            
                                            {isActive && (
                                                <ArrowRight className="ml-auto text-[#38bdf8]" size={20} />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Right Side: Showcase Panel */}
                            <div className="lg:col-span-7 mt-8 lg:mt-0">
                                <div className="lg:sticky lg:top-32 h-full lg:min-h-[500px]">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#1A5CDD]/20 to-[#38bdf8]/20 rounded-[40px] blur-[80px] -z-10 transition-all duration-700" />
                                    
                                    <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[40px] p-10 md:p-16 h-full flex flex-col justify-center relative overflow-hidden shadow-2xl">
                                        
                                        {/* Decorative background glows */}
                                        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[radial-gradient(ellipse_at_center,#38bdf8_0%,transparent_60%)] opacity-10 pointer-events-none" />
                                        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[radial-gradient(ellipse_at_center,#1A5CDD_0%,transparent_60%)] opacity-20 pointer-events-none" />
                                        
                                        <div className="relative z-10 transition-all duration-500 ease-out" key={activeDiff}>
                                            <div className="w-20 h-20 bg-gradient-to-br from-[#1A5CDD] to-[#38bdf8] rounded-[24px] flex items-center justify-center text-white mb-10 shadow-[0_10px_40px_rgba(26,92,221,0.4)]">
                                                <Star size={36} strokeWidth={2} />
                                            </div>
                                            
                                            <h4 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-[1.25]">
                                                {differentiators[activeDiff].title}
                                            </h4>
                                            
                                            <div className="w-16 h-1.5 bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8] rounded-full mb-8" />
                                            
                                            <p className="text-slate-300 text-lg md:text-[19px] leading-[1.8]">
                                                {differentiators[activeDiff].desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* FAQ Section */}
            <section className="py-20 bg-[#F8FAFC]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                        
                        {/* Left Column - Content */}
                        <div className="lg:w-1/3 flex flex-col justify-start top-32">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 text-[#1A5CDD] mb-6 w-fit">
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
                                            <div className="flex-shrink-0 ml-4">
    <svg className={`w-5 h-5 transition-transform duration-300 ${activeFaq === index ? "text-[#1A5CDD] rotate-180" : "text-slate-400 group-hover:text-[#1A5CDD] rotate-0"}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
</div>
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
