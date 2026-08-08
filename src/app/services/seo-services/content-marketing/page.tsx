"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Share2, TrendingUp, Target, BarChart, MessageCircle, Users, CheckCircle2,
    ArrowRight, ArrowUpRight, ShieldCheck, Rocket, Smartphone, Heart, Image as ImageIcon, Video,
    FileText, LayoutDashboard, LinkIcon, Settings, Code2, Globe, Bookmark,
    ChevronDown, Palmtree, Flower2, GraduationCap, Utensils, Home, ShoppingCart, Scale, Stethoscope, Truck, Dumbbell, Palette, Wrench, Search, Zap, Activity, UserCircle, Calendar, LineChart, Building2,
    MousePointerClick, DollarSign, Megaphone, MonitorPlay, MapPin, Key, Facebook, Instagram, Grid, Play, Edit
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

export default function ContentMarketingPage() {
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
        }, mainRef);

        return () => ctx.revert();
    }, []);

    const benefits = [
        { title: "Improve Brand Visibility", desc: "Create valuable content that helps your business appear in search results and reach more potential customers.", icon: Globe },
        { title: "Build Brand Authority", desc: "Share industry knowledge and insights to establish your business as a trusted source of information.", icon: ShieldCheck },
        { title: "Increase Website Traffic", desc: "SEO-optimized content helps attract relevant visitors searching for your products or services.", icon: MousePointerClick },
        { title: "Generate Quality Leads", desc: "Informative content helps educate potential customers and encourage them to take action.", icon: Users },
        { title: "Support SEO Performance", desc: "Content marketing improves keyword rankings, website relevance, and organic search visibility.", icon: TrendingUp },
        { title: "Improve Customer Engagement", desc: "Create meaningful content that connects with your audience and strengthens customer relationships.", icon: Heart }
    ];

    const services = [
        { title: "SEO Content Writing", desc: "Our SEO Content Writing Services focus on creating keyword-rich, informative, and engaging content that improves your website's visibility on search engines. We perform detailed keyword research, competitor analysis, and search intent optimization to produce content that ranks for relevant keywords while providing real value to your audience. Our SEO content helps increase organic traffic, improve search engine rankings, reduce bounce rates, and establish your business as an industry authority. Every article is optimized with proper headings, meta optimization, internal linking, readability improvements, and user-focused content to maximize SEO performance.", icon: Search },
        { title: "Blog & Article Writing", desc: "Our Blog Writing Services help businesses consistently publish informative and engaging articles that answer customer questions, solve problems, and build trust with potential customers. We create industry-specific blogs that improve website authority, target high-value keywords, and support your overall content marketing strategy. Regular blogging helps improve search engine rankings, generate organic traffic, increase user engagement, earn backlinks, and establish your brand as a reliable source of information within your industry.", icon: FileText },
        { title: "Website Content Creation", desc: "Your website content represents your business online. Our Website Content Writing Services focus on creating professional, informative, and conversion-driven website copy that clearly communicates your products, services, and unique value proposition. We develop optimized content for Home Pages, About Us Pages, Service Pages, Industry Pages, Category Pages, and Contact Pages while ensuring consistency, readability, SEO optimization, and strong calls-to-action that encourage visitors to become customers.", icon: Globe },
        { title: "Landing Page Content", desc: "Our Landing Page Content Writing Services are designed to maximize conversions by combining persuasive messaging with SEO best practices. Every landing page is carefully structured to capture visitor attention, communicate benefits clearly, build trust, and encourage enquiries, purchases, or registrations. We create optimized landing pages for lead generation campaigns, paid advertising, product launches, service promotions, and local SEO campaigns that improve conversion rates and business performance.", icon: MousePointerClick },
        { title: "SEO Copywriting", desc: "Our SEO Copywriting Services combine compelling marketing messages with advanced search engine optimization techniques. We create website copy that attracts both search engines and potential customers while encouraging meaningful actions such as enquiries, purchases, or bookings. Our SEO copywriting includes keyword optimization, persuasive headlines, optimized page structure, engaging call-to-actions, and user-focused messaging that supports both SEO rankings and conversion goals.", icon: Edit },
        { title: "Social Media Content", desc: "Our Social Media Content Marketing Services help businesses build stronger relationships with their audience across Facebook, Instagram, LinkedIn, X (Twitter), and other social platforms. We create engaging social media posts, promotional content, educational posts, campaign content, reels scripts, carousel content, and branded messaging that improve audience engagement, increase brand awareness, generate website traffic, and support your digital marketing campaigns.", icon: Share2 },
        { title: "Infographics & Visual Content", desc: "Visual content plays an important role in modern digital marketing. We create professional infographics, branded graphics, data visualization, educational visuals, and visual storytelling content that simplify complex information and increase audience engagement. Our visual content improves content shareability, enhances user experience, strengthens brand recognition, and supports your overall content marketing strategy.", icon: ImageIcon },
        { title: "Email Marketing Content", desc: "Our Email Content Marketing Services help businesses communicate effectively with existing customers and potential leads through personalized email campaigns. We create newsletters, promotional emails, welcome emails, abandoned cart emails, product launch campaigns, seasonal campaigns, and lead nurturing sequences that improve customer engagement, increase conversions, and strengthen customer loyalty.", icon: MessageCircle },
        { title: "Press Releases & Digital PR Content", desc: "Our Press Release Writing Services help businesses announce product launches, company updates, business achievements, partnerships, events, and important news professionally. We create SEO-friendly press releases and digital PR content that improve online visibility, build brand credibility, attract media attention, generate backlinks, and strengthen your online reputation.", icon: Megaphone },
        { title: "Guest Posting Content", desc: "Our Guest Posting Content Services support your off-page SEO strategy by creating valuable, informative, and authoritative articles for publication on relevant industry websites. Guest posting helps improve domain authority, increase brand exposure, earn high-quality backlinks, drive referral traffic, and improve search engine rankings while establishing your business as an industry expert.", icon: Bookmark },
        { title: "Video Content Marketing", desc: "Video has become one of the most powerful forms of digital content. Our Video Content Marketing Services help businesses create engaging video strategies that communicate brand messages effectively across websites, YouTube, Facebook, Instagram, LinkedIn, and other digital platforms. We develop video scripts, promotional video content, educational videos, explainer videos, product demonstration videos, customer testimonial videos, and social media video campaigns that increase engagement, improve audience retention, and drive higher conversions.", icon: Video }
    ];

    const seoProcess = [
        { step: "1", title: "Content Strategy Development", desc: "We understand your business goals, audience, industry, and competitors to create a customized content strategy." },
        { step: "2", title: "Keyword & Topic Research", desc: "We identify relevant keywords, trending topics, and customer search behaviour to create content opportunities." },
        { step: "3", title: "Content Creation", desc: "Our team develops high-quality, SEO-friendly, and engaging content that matches your brand voice." },
        { step: "4", title: "Content Optimization", desc: "We optimize existing and new content for search engines, readability, user experience, and conversions." },
        { step: "5", title: "Content Distribution", desc: "We promote content across suitable platforms, including websites, social media channels, and digital marketing platforms." },
        { step: "6", title: "Performance Tracking & Improvement", desc: "We monitor content performance using important metrics and continuously improve strategies for better results." }
    ];

    const industries = [
        { title: "IT & Software Companies", icon: Code2, color: "text-blue-600 bg-blue-50 border-blue-100 group-hover:bg-blue-500" },
        { title: "Healthcare & Medical Businesses", icon: Stethoscope, color: "text-rose-600 bg-rose-50 border-rose-100 group-hover:bg-rose-500" },
        { title: "Educational Institutions", icon: GraduationCap, color: "text-emerald-600 bg-emerald-50 border-emerald-100 group-hover:bg-emerald-500" },
        { title: "Real Estate Companies", icon: Home, color: "text-indigo-600 bg-indigo-50 border-indigo-100 group-hover:bg-indigo-500" },
        { title: "eCommerce Businesses", icon: ShoppingCart, color: "text-purple-600 bg-purple-50 border-purple-100 group-hover:bg-purple-500" },
        { title: "Manufacturing Companies", icon: Wrench, color: "text-slate-700 bg-slate-100 border-slate-200 group-hover:bg-slate-600" },
        { title: "Finance & Professional Services", icon: Scale, color: "text-blue-600 bg-blue-50 border-blue-100 group-hover:bg-blue-500" },
        { title: "Local Businesses", icon: MapPin, color: "text-orange-600 bg-orange-50 border-orange-100 group-hover:bg-orange-500" },
        { title: "Startups and Enterprises", icon: Building2, color: "text-amber-600 bg-amber-50 border-amber-100 group-hover:bg-amber-500" }
    ];

    const faqs = [
        { q: "What are Content Marketing Services?", a: "Content Marketing Services involve creating, optimizing, and promoting valuable content to attract customers, improve brand visibility, and support business growth." },
        { q: "Why is content marketing important for SEO?", a: "Content marketing helps improve SEO by creating keyword-focused content, increasing website relevance, attracting organic traffic, and improving search rankings." },
        { q: "What types of content does Syscorp create?", a: "Syscorp creates blogs, website content, landing pages, SEO articles, social media content, email content, infographics, press releases, guest posts, and video content strategies." },
        { q: "How can content marketing help generate leads?", a: "Content marketing educates potential customers, builds trust, attracts targeted visitors, and encourages users to take actions such as enquiries or purchases." },
        { q: "Does Syscorp provide SEO-friendly content writing?", a: "Yes. We create SEO-optimized content based on keyword research, search intent, and user experience to improve online visibility." },
        { q: "How long does it take to see results from content marketing?", a: "Content marketing is a long-term strategy. Results depend on factors such as competition, industry, content quality, SEO efforts, and consistency." }
    ];

    const whyChooseUs = [
        { title: "Customized Content Strategies", desc: "We create content plans based on your business goals, industry, audience, and marketing objectives.", icon: Settings },
        { title: "SEO-Focused Content Approach", desc: "Our content strategies are designed to improve search visibility and attract relevant organic traffic.", icon: Search },
        { title: "Experienced Content Team", desc: "Our team creates engaging, informative, and conversion-focused content across multiple formats.", icon: Users },
        { title: "Audience-Centric Content Creation", desc: "We focus on understanding your customers and creating content that addresses their needs and interests.", icon: Heart },
        { title: "Data-Driven Optimization", desc: "We analyze content performance and make improvements to maximize visibility, engagement, and results.", icon: BarChart },
        { title: "Complete Content Marketing Solutions", desc: "From research and creation to optimization and distribution, we manage the complete content marketing process.", icon: LayoutDashboard }
    ];

    return (
        <main ref={mainRef} className="bg-white min-h-screen overflow-x-clip font-sans">
            <HeaderBanner
                title={
                    <>
                        Content Marketing <span className="text-[#38bdf8] font-serif italic font-normal">(Social Media Ads)</span>
                    </>
                }
                description="Leading Content Marketing Services in Pondicherry"
            />

            {/* Intro Section */}
            <section className="py-20 lg:py-28 bg-[#F0F8FF]/60 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#1A5CDD]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="gsap-fade-up lg:col-span-7">
                            <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 rounded-full px-3.5 py-1 text-xs font-bold text-[#1A5CDD] uppercase tracking-wider mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] inline-block animate-pulse" />
                                Maximize Your ROI
                            </span>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-[#011146] tracking-tight mb-6 leading-tight">
                                Leading <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8]">Content Marketing Services</span> in Pondicherry
                            </h2>
                            <p className="text-slate-700 text-[18px] leading-relaxed mb-6 font-bold">
                                Create Powerful Content That Builds Brand Authority, Attracts Customers, and Drives Business Growth
                            </p>
                            <p className="text-slate-600 text-[16px] md:text-[17px] leading-relaxed mb-6">
                                At Syscorp, we provide professional Content Marketing Services in Pondicherry that help businesses create, optimize, and distribute valuable content to attract the right audience and achieve their marketing goals. As a trusted Content Marketing Company in Pondicherry, we develop customized content strategies that improve online visibility, strengthen brand authority, increase audience engagement, and support long-term business growth.
                            </p>

                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isIntroExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                                <p className="text-slate-600 text-[16px] md:text-[17px] leading-relaxed mb-6">
                                    Our content marketing approach combines SEO, audience research, keyword analysis, and creative storytelling to create content that not only attracts visitors but also encourages them to take action. From website content and blogs to social media content, landing pages, and marketing materials, we help businesses communicate their message effectively across digital platforms.
                                </p>
                                <p className="text-slate-600 text-[16px] md:text-[17px] leading-relaxed mb-6">
                                    Whether your goal is improving search rankings, generating qualified leads, increasing website traffic, or building customer trust, our Content Marketing Services are designed to deliver meaningful results through strategic and user-focused content.
                                </p>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 mt-8">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 bg-[#011146] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#1A5CDD] transition-all shadow-lg shadow-blue-900/10 hover:-translate-y-0.5"
                                >
                                    Get a Free Content Marketing Audit <ArrowRight size={16} />
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
                            <div className="relative w-[75%] h-[85%] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(1,17,70,0.1)] z-10 group">
                                <Image
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                                    alt="Content Marketing Team"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            {/* Secondary Overlapping Image (Bottom Right) */}
                            <div className="absolute -bottom-4 right-0 lg:-right-4 w-[65%] h-[45%] rounded-[16px] overflow-hidden shadow-[0_20px_50px_rgba(1,17,70,0.2)] border-[4px] border-white z-20 group">
                                <Image
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
                                    alt="Content Marketing Dashboard"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
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

            {/* What is Content Marketing Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto max-w-7xl">
                    <div className="bg-[#011146] rounded-[40px] relative overflow-hidden shadow-2xl">
                        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#1A5CDD]/25 rounded-full blur-[100px] pointer-events-none" />
                        <div className="absolute -bottom-20 left-[20%] w-64 h-64 bg-[#38bdf8]/10 rounded-full blur-[80px] pointer-events-none" />

                        <div className="flex flex-col md:flex-row items-stretch gap-0 relative z-10">

                            <div className="md:w-5/12 p-10 md:p-14 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-8 h-1 bg-[#38bdf8] rounded-full" />
                                    <span className="text-[#38bdf8] text-xs font-bold tracking-widest uppercase">Content Marketing Fundamentals</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-8">
                                    What is <span className="text-[#38bdf8]">Content Marketing?</span>
                                </h2>
                            </div>

                            <div className="md:w-7/12 p-10 md:p-14 flex flex-col justify-between">
                                <div className="space-y-5">
                                    <p className="text-slate-300 text-[15px] leading-relaxed">
                                        Content Marketing is a strategic approach to creating and sharing valuable, relevant, and informative content to attract, engage, and convert your target audience. Instead of directly promoting products or services, content marketing focuses on educating users, solving their problems, and building trust with your brand.
                                    </p>
                                    <p className="text-slate-300 text-[15px] leading-relaxed">
                                        At Syscorp, we create content strategies that combine SEO optimization, industry insights, and audience-focused messaging to improve your digital presence. From increasing organic visibility to supporting lead generation, effective content marketing helps businesses establish authority and create long-term relationships with customers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Content Marketing is Important Section */}
            <section className="py-20 bg-[#F8FAFF] relative overflow-hidden">
                {/* Background ambient light */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1A5CDD]/5 blur-3xl rounded-full pointer-events-none" />

                <div className="container mx-auto px-4 relative max-w-7xl">
                    {/* Hero Split for Why Content Marketing is Important */}
                    <div className="flex flex-col lg:flex-row items-center gap-10 rounded-[40px] p-4 lg:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] bg-white border border-slate-100 group/hero relative overflow-hidden">
                        {/* Left Side: Text Content */}
                        <div className="lg:w-1/2 p-6 lg:p-10 relative z-10">
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 mb-8 shadow-sm">
                                <Target className="text-[#1A5CDD]" size={16} />
                                <span className="text-[13px] font-bold text-[#1A5CDD] tracking-wider uppercase">Business Impact</span>
                            </div>

                            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#011146] mb-5 leading-tight">
                                Why Content Marketing are Important for Your Business
                            </h2>

                            <p className="text-slate-600 text-[16px] leading-relaxed mb-6">
                                Today's customers expect valuable information before they make a purchasing decision. Creating relevant, informative, and engaging content helps your business attract potential customers, build credibility, and stay ahead of the competition. Our Content Marketing Services in Pondicherry focus on delivering high-quality content that strengthens your online presence, improves search visibility, and supports sustainable business growth.
                            </p>
                        </div>

                        {/* Right Side: Redesigned Premium UI */}
                        <div className="lg:w-1/2 relative z-10 flex items-center justify-center p-6 lg:p-12 mt-8 lg:mt-0">

                            {/* Decorative Background Elements */}
                            <div className="absolute top-4 right-4 lg:top-8 lg:right-8 w-40 h-40 bg-[radial-gradient(circle,#1A5CDD_1.5px,transparent_1.5px)] bg-[size:16px_16px] opacity-10 -z-10" />
                            <div className="absolute bottom-4 left-4 lg:-bottom-4 lg:-left-4 w-40 h-40 bg-[radial-gradient(circle,#38bdf8_1.5px,transparent_1.5px)] bg-[size:16px_16px] opacity-20 -z-10" />

                            {/* Main Image Container */}
                            <div className="relative overflow-hidden rounded-[24px] shadow-[0_20px_50px_rgba(1,17,70,0.1)] z-10 w-full lg:w-[90%] aspect-[4/3] bg-white">
                                <Image
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
                                    alt="Content Marketing Strategy Dashboard"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Floating Widget (Top Left) */}
                            <div className="absolute -top-4 -left-2 lg:top-4 lg:-left-6 z-20">
                                <div className="bg-white p-4 lg:p-5 rounded-[20px] shadow-[0_15px_40px_rgba(0,0,0,0.06)] flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#ebfbf3] flex items-center justify-center text-[#03c04a]">
                                        <Activity size={22} strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <p className="text-[#0a1128] font-bold text-[16px] leading-tight">Live Tracking</p>
                                        <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider mt-0.5">Active Now</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Metric Card (Bottom Right) */}
                            <div className="absolute -bottom-6 -right-2 lg:-bottom-6 lg:-right-6 z-20">
                                <div className="bg-[#0a1128] px-6 py-5 rounded-[16px] shadow-[0_20px_40px_rgba(10,17,40,0.2)] flex items-center gap-5">
                                    <div className="w-14 h-14 rounded-full bg-[#2092fc] shadow-[0_0_20px_rgba(32,146,252,0.4)] flex items-center justify-center text-white">
                                        <TrendingUp size={24} strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-[28px] leading-none mb-1">3.4x</p>
                                        <p className="text-[#94a3b8] text-[11px] font-bold tracking-wider uppercase">Avg. ROI Increase</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits of Content Marketing - Sticky Sidebar Layout */}
            <section className="pt-20 pb-12 lg:pt-24 lg:pb-16 bg-white border-y border-slate-100 relative">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 rounded-full px-3.5 py-1 text-xs font-bold text-[#1A5CDD] uppercase tracking-wider mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] inline-block animate-pulse" />
                                Why It Matters
                            </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#011146] tracking-tight mb-8 leading-[1.15]">
                            Benefits of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8]">Content Marketing</span>
                        </h2>
                        <p className="text-slate-600 text-[16px] md:text-[18px] leading-relaxed mb-0 max-w-3xl mx-auto">
                            Strategic content doesn't just fill pages—it drives measurable business growth, builds lasting authority, and transforms passive visitors into loyal customers.
                        </p>
                    </div>

                    {/* Minimalist Floating Grid (Zero Card UI) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon || Activity;
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

            {/* What Our Content Marketing Services Cover */}


            <section className="bg-[#011146] pt-16 pb-24 lg:pt-20 lg:pb-28 relative overflow-hidden">
                {/* Blueprint Grid Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                {/* Ambient Glows */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1A5CDD]/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#38bdf8]/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    {/* Heading */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.05] border border-white/10 mb-8 shadow-sm">
                            <Activity className="text-[#38bdf8]" size={18} strokeWidth={2.5} />
                            <span className="text-[13px] font-extrabold text-[#38bdf8] tracking-[3px] uppercase">
                                Content Marketing Services
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 leading-[1.1] tracking-tight">
                            Everything your brand
                            <span className="block text-[#38bdf8] mt-2">
                                needs to grow.
                            </span>
                        </h2>
                        <p className="text-slate-300/80 mt-5 max-w-2xl mx-auto text-[17px] leading-[1.8]">
                            Premium content experiences designed for search engines, customers, and conversions. We handle every format your business needs.
                        </p>
                    </div>

                    {/* Symmetrical Grid for exactly 6 items (2 columns) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {services.map((item, index) => {
                            const Icon = item.icon || Activity;

                            return (
                                <div
                                    key={index}
                                    className={`group relative rounded-[32px] border border-white/10 bg-[#0a1128]/80 backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[#38bdf8]/50 hover:shadow-[0_20px_40px_rgba(1,17,70,0.5)] flex flex-col min-h-[420px] ${index === services.length - 1 && services.length % 2 !== 0 ? 'md:col-span-2' : ''}`}
                                >
                                    {/* Ambient Hover Glow */}
                                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none">
                                        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#1A5CDD]/20 blur-[80px]" />
                                    </div>

                                    {/* Giant Decorative Background Icon */}
                                    <div className="absolute -bottom-10 -right-10 text-white/[0.02] pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-4 group-hover:-translate-x-4">
                                        <Icon size={220} strokeWidth={1} />
                                    </div>

                                    {/* Animated Bottom Border */}
                                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-20" />

                                    <div className="relative z-10 p-8 lg:p-10 h-full flex flex-col">

                                        {/* Number Badge */}
                                        <div className="absolute top-8 right-8 text-6xl font-black text-white/[0.03] pointer-events-none group-hover:text-white/[0.05] transition-colors">
                                            {index + 1 < 10 ? `0${index + 1}` : index + 1}
                                        </div>

                                        {/* Icon Container */}
                                        <div className="w-16 h-16 rounded-[20px] bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#1A5CDD] group-hover:border-[#1A5CDD] shadow-inner transition-all duration-500">
                                            <Icon size={28} className="text-[#38bdf8] group-hover:text-white transition-colors duration-500" />
                                        </div>

                                        {/* Content Wrapper */}
                                        <div className="mt-8 flex-1">
                                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#38bdf8] transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            <p className={`leading-[1.8] text-slate-300/80 ${index === services.length - 1 && services.length % 2 !== 0 ? 'max-w-4xl' : 'max-w-xl'}`}>
                                                {item.desc}
                                            </p>
                                        </div>

                                        {/* Footer CTA */}
                                        <div className="mt-10 flex items-center gap-3 text-[#38bdf8] font-bold text-[14px] uppercase tracking-wider group-hover:gap-5 transition-all duration-300">
                                            <span>Learn More</span>
                                            <div className="w-8 h-8 rounded-full bg-[#38bdf8]/10 flex items-center justify-center group-hover:bg-[#38bdf8] group-hover:text-[#011146] transition-colors duration-300">
                                                <ArrowUpRight size={18} strokeWidth={2.5} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Content Marketing Process Section */}
            <section className="relative bg-white py-28 overflow-hidden">
                {/* Subtle Dot Grid Background */}
                <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-30"></div>
                
                {/* Background Glows */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-blue-50 blur-[120px] opacity-80"></div>
                    <div className="absolute top-1/3 -right-60 w-[500px] h-[500px] rounded-full bg-cyan-50 blur-[100px] opacity-60"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-6">
                    {/* Heading */}
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm">
                            <Activity className="text-blue-600" size={18} strokeWidth={2.5} />
                            <span className="text-[13px] font-extrabold text-blue-600 tracking-[3px] uppercase">
                                Campaign Management
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                            Our Content Marketing
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mt-2">
                                Management Process
                            </span>
                        </h2>

                        <p className="mt-6 text-[17px] leading-[1.8] text-slate-600">
                            We follow a structured, data-driven approach to create, optimize,
                            and distribute content that helps your business increase visibility,
                            attract qualified customers, and generate measurable growth.
                        </p>
                    </div>

                    {/* Minimalist Connected Grid (Zero Card UI) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-16 max-w-7xl mx-auto">
                        {seoProcess.map((item, index) => (
                            <div key={index} className="relative group">
                                {/* Top Line with Number */}
                                <div className="flex items-center gap-6 mb-6">
                                    {/* Number Circle */}
                                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center font-black text-xl group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_10px_20px_rgba(37,99,235,0.2)] transition-all duration-500 relative z-10 group-hover:-translate-y-1 border border-slate-100 group-hover:border-blue-600">
                                        {String(item.step).padStart(2, '0')}
                                    </div>
                                    
                                    {/* Connector Line */}
                                    <div className="flex-1 h-[2px] bg-slate-100 relative overflow-hidden rounded-full">
                                        <div className="absolute left-0 top-0 bottom-0 w-0 bg-gradient-to-r from-blue-600 to-cyan-400 group-hover:w-full transition-all duration-1000 ease-out"></div>
                                    </div>
                                </div>
                                
                                {/* Content */}
                                <div className="pr-4">
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-500 leading-relaxed text-[15px]">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Syscorp */}
            <section className="py-20 bg-[#F0F8FF] relative overflow-hidden">
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
                                Why Choose Syscorp for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8]">Content Marketing Services in Pondicherry?</span>
                            </h2>
                            <p className="text-slate-600 text-[15px] leading-relaxed mb-5">
                                At Syscorp, our Content Marketing Services in Pondicherry combine creativity, SEO expertise, and data-driven strategies to create high-quality content that attracts your target audience, builds brand authority, and generates measurable business results.
                            </p>
                        </div>

                        {/* Left Side: Graphic */}
                        <div className="lg:w-1/2 relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#1A5CDD]/10 to-[#38bdf8]/10 rounded-full blur-3xl -z-10 pointer-events-none" />
                            <div className="relative group">
                                <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white bg-white">
                                    <div className="w-full h-[400px] flex items-center justify-center relative overflow-hidden bg-slate-900">
                                        <Image
                                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                                            alt="Content Marketing Expertise"
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



            {/* Industries We Serve */}
            <section className="py-20 bg-[#011146] relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/10 pointer-events-none" />
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-flex items-center justify-center gap-2 px-5 py-1.5 rounded-full bg-[#1A5CDD]/20 border border-[#1A5CDD]/30 text-[#38bdf8] text-[12px] font-bold tracking-wider uppercase mb-6 shadow-sm">
                            <Building2 size={14} /> Industries
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
                            Industries We Serve
                        </h2>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            Our Content Marketing Services help businesses across various industries build stronger digital visibility:
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
                    <div className="relative w-full overflow-hidden flex items-center py-4 mask-image-marquee">
                        <div className="flex w-max animate-marquee-infinite gap-6">
                            {/* Original List */}
                            {industries.map((item, index) => {
                                const Icon = item.icon || Activity;
                                return (
                                    <div key={`original-${index}`} className="shrink-0 group flex items-center gap-4 px-4 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] hover:-translate-y-1 transition-all duration-300 cursor-default">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 shadow-inner ${item.color}`}>
                                            <Icon size={20} strokeWidth={2.5} />
                                        </div>
                                        <h4 className="font-extrabold text-white text-[15px] pr-4 tracking-wide group-hover:text-[#38bdf8] transition-colors duration-300 whitespace-nowrap">
                                            {item.title}
                                        </h4>
                                    </div>
                                );
                            })}
                            {/* Duplicated List for seamless loop */}
                            {industries.map((item, index) => {
                                const Icon = item.icon || Activity;
                                return (
                                    <div key={`dup-${index}`} className="shrink-0 group flex items-center gap-4 px-4 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] hover:-translate-y-1 transition-all duration-300 cursor-default">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 shadow-inner ${item.color}`}>
                                            <Icon size={20} strokeWidth={2.5} />
                                        </div>
                                        <h4 className="font-extrabold text-white text-[15px] pr-4 tracking-wide group-hover:text-[#38bdf8] transition-colors duration-300 whitespace-nowrap">
                                            {item.title}
                                        </h4>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Optional: Add gradient masks to the edges of the marquee container for a fading effect */}
                <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#011146] to-transparent pointer-events-none z-10" />
                <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#011146] to-transparent pointer-events-none z-10" />
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
