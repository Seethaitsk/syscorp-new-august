"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Share2, TrendingUp, Target, BarChart, MessageCircle, Users, CheckCircle2,
    ArrowRight, ArrowUpRight, ShieldCheck, Rocket, Smartphone, Heart, Image as ImageIcon, Video,
    FileText, LayoutDashboard, LinkIcon, Settings, Code2, Globe, Bookmark,
    ChevronDown, Palmtree, Flower2, GraduationCap, Utensils, Home, ShoppingCart, Scale, Stethoscope, Truck, Dumbbell, Palette, Wrench, Search, Zap, Activity, UserCircle, Calendar, LineChart, Building2,
    MousePointerClick, DollarSign, Megaphone, MonitorPlay, MapPin, Key, Facebook, Instagram, Grid, Play, Edit, Sparkles, Award
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

export default function ContentMarketingClient() {
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
        {
            title: "SEO Content Writing",
            desc: "Our SEO Content Writing Services focus on creating keyword-rich, informative, and engaging content that improves your website's visibility on search engines. We perform detailed keyword research, competitor analysis, and search intent optimization to produce content that ranks for relevant keywords while providing real value to your audience. Our SEO content helps increase organic traffic, improve search engine rankings, reduce bounce rates, and establish your business as an industry authority. Every article is optimized with proper headings, meta optimization, internal linking, readability improvements, and user-focused content to maximize SEO performance.",
            icon: Search,
            image: "/images/seo/seo_content.png",
            tag: "Organic Search Optimization"
        },
        {
            title: "Blog & Article Writing",
            desc: "Our Blog Writing Services help businesses consistently publish informative and engaging articles that answer customer questions, solve problems, and build trust with potential customers. We create industry-specific blogs that improve website authority, target high-value keywords, and support your overall content marketing strategy. Regular blogging helps improve search engine rankings, generate organic traffic, increase user engagement, earn backlinks, and establish your brand as a reliable source of information within your industry.",
            icon: FileText,
            image: "/images/seo/blog_writing.png",
            tag: "Industry Authority & Engagement"
        },
        {
            title: "Website Content Creation",
            desc: "Your website content represents your business online. Our Website Content Writing Services focus on creating professional, informative, and conversion-driven website copy that clearly communicates your products, services, and unique value proposition. We develop optimized content for Home Pages, About Us Pages, Service Pages, Industry Pages, Category Pages, and Contact Pages while ensuring consistency, readability, SEO optimization, and strong calls-to-action that encourage visitors to become customers.",
            icon: Globe,
            image: "/images/seo/website_content.png",
            tag: "Conversion-Driven Copy"
        },
        {
            title: "Landing Page Content",
            desc: "Our Landing Page Content Writing Services are designed to maximize conversions by combining persuasive messaging with SEO best practices. Every landing page is carefully structured to capture visitor attention, communicate benefits clearly, build trust, and encourage enquiries, purchases, or registrations. We create optimized landing pages for lead generation campaigns, paid advertising, product launches, service promotions, and local SEO campaigns that improve conversion rates and business performance.",
            icon: MousePointerClick,
            image: "/images/seo/landing_page.png",
            tag: "High Conversion Copywriting"
        },
        {
            title: "SEO Copywriting",
            desc: "Our SEO Copywriting Services combine compelling marketing messages with advanced search engine optimization techniques. We create website copy that attracts both search engines and potential customers while encouraging meaningful actions such as enquiries, purchases, or bookings. Our SEO copywriting includes keyword optimization, persuasive headlines, optimized page structure, engaging call-to-actions, and user-focused messaging that supports both SEO rankings and conversion goals.",
            icon: Edit,
            image: "/images/seo/seo_copywriting.png",
            tag: "Search & Audience Focused"
        },
        {
            title: "Social Media Content",
            desc: "Our Social Media Content Marketing Services help businesses build stronger relationships with their audience across Facebook, Instagram, LinkedIn, X (Twitter), and other social platforms. We create engaging social media posts, promotional content, educational posts, campaign content, reels scripts, carousel content, and branded messaging that improve audience engagement, increase brand awareness, generate website traffic, and support your digital marketing campaigns.",
            icon: Share2,
            image: "/images/seo/social_media1.png",
            tag: "Social Engagement & Reach"
        },
        {
            title: "Infographics & Visual Content",
            desc: "Visual content plays an important role in modern digital marketing. We create professional infographics, branded graphics, data visualization, educational visuals, and visual storytelling content that simplify complex information and increase audience engagement. Our visual content improves content shareability, enhances user experience, strengthens brand recognition, and supports your overall content marketing strategy.",
            icon: ImageIcon,
            image: "/images/seo/infogragphic.png",
            tag: "Visual Storytelling"
        },
        {
            title: "Email Marketing Content",
            desc: "Our Email Content Marketing Services help businesses communicate effectively with existing customers and potential leads through personalized email campaigns. We create newsletters, promotional emails, welcome emails, abandoned cart emails, product launch campaigns, seasonal campaigns, and lead nurturing sequences that improve customer engagement, increase conversions, and strengthen customer loyalty.",
            icon: MessageCircle,
            image: "/images/seo/email_content.png",
            tag: "Lead Nurturing & Sales"
        },
        {
            title: "Press Releases & Digital PR Content",
            desc: "Our Press Release Writing Services help businesses announce product launches, company updates, business achievements, partnerships, events, and important news professionally. We create SEO-friendly press releases and digital PR content that improve online visibility, build brand credibility, attract media attention, generate backlinks, and strengthen your online reputation.",
            icon: Megaphone,
            image: "/images/seo/press_release.png",
            tag: "Brand Credibility & PR"
        },
        {
            title: "Guest Posting Content",
            desc: "Our Guest Posting Content Services support your off-page SEO strategy by creating valuable, informative, and authoritative articles for publication on relevant industry websites. Guest posting helps improve domain authority, increase brand exposure, earn high-quality backlinks, drive referral traffic, and improve search engine rankings while establishing your business as an industry expert.",
            icon: Bookmark,
            image: "/images/seo/guestposting.png",
            tag: "Off-Page SEO & Backlinks"
        },
        {
            title: "Video Content Marketing",
            desc: "Video has become one of the most powerful forms of digital content. Our Video Content Marketing Services help businesses create engaging video strategies that communicate brand messages effectively across websites, YouTube, Facebook, Instagram, LinkedIn, and other digital platforms. We develop video scripts, promotional video content, educational videos, explainer videos, product demonstration videos, customer testimonial videos, and social media video campaigns that increase engagement, improve audience retention, and drive higher conversions.",
            icon: Video,
            image: "/images/seo/video_content.png",
            tag: "High-Impact Video Scripts"
        }
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
        { q: "What types of content does SysCrop create?", a: "SysCrop creates blogs, website content, landing pages, SEO articles, social media content, email content, infographics, press releases, guest posts, and video content strategies." },
        { q: "How can content marketing help generate leads?", a: "Content marketing educates potential customers, builds trust, attracts targeted visitors, and encourages users to take actions such as enquiries or purchases." },
        { q: "Does SysCrop provide SEO-friendly content writing?", a: "Yes. We create SEO-optimized content based on keyword research, search intent, and user experience to improve online visibility." },
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
                        Content Marketing <span className="text-[#38bdf8] font-serif italic font-normal">(SEO & Strategy)</span>
                    </>
                }
                description="Leading Content Marketing Services in Pondicherry"
            />

            {/* Intro Section */}
            <section className="py-20 lg:py-28 bg-[#F0F8FF]/60 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#1A5CDD]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
                        <div className="gsap-fade-up lg:w-[55%] w-full">
                            <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 rounded-full px-3.5 py-1 text-xs font-bold text-[#1A5CDD] uppercase tracking-wider mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] inline-block animate-pulse" />
                                Maximize Your ROI
                            </span>
                            <h1 className="text-3xl md:text-5xl font-extrabold text-[#011146] tracking-tight mb-6 leading-tight">
                                Leading <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8]">Content Marketing Services</span> in Pondicherry
                            </h1>
                            <p className="text-slate-700 text-[18px] leading-relaxed mb-6 font-bold">
                                Create Powerful Content That Builds Brand Authority, Attracts Customers, and Drives Business Growth
                            </p>
                            <p className="text-slate-600 text-[16px] md:text-[17px] leading-relaxed mb-6">
                                At SysCrop, we provide professional Content Marketing Services in Pondicherry that help businesses create, optimize, and distribute valuable content to attract the right audience and achieve their marketing goals. As a trusted Content Marketing Company in Pondicherry, we develop customized content strategies that improve online visibility, strengthen brand authority, increase audience engagement, and support long-term business growth.
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

                        {/* Image Right Side */}
                        <div className="gsap-fade-up lg:w-[45%] w-full relative mt-12 lg:mt-0">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#1A5CDD]/10 to-[#38bdf8]/10 rounded-full blur-[80px] -z-10 pointer-events-none" />
                            <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[540px] xl:h-[580px] flex items-center justify-center">
                                <Image
                                    src="/images/seo/content_marketing.png"
                                    alt="Content Marketing Services"
                                    fill
                                    className="object-center transform group-hover:scale-105 transition-transform duration-700"
                                    priority
                                />
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
                        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#38bdf8]/20 rounded-full blur-[100px] pointer-events-none" />

                        <div className="relative z-10 p-8 md:p-14 lg:p-20 text-white">
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mb-6">
                                <Sparkles size={16} className="text-[#38bdf8]" />
                                <span className="text-[13px] font-bold text-slate-200 tracking-wider uppercase">Strategic Growth Engine</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight max-w-3xl">
                                What is Content Marketing and How Does It Drive Growth?
                            </h2>

                            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-4xl mb-8">
                                Content Marketing is a strategic marketing approach focused on creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience — and, ultimately, to drive profitable customer action. Instead of pitching your products or services, you provide truly relevant and useful content to your prospects and customers to help them solve their issues.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-[#38bdf8] shrink-0 border border-white/10">
                                        <Target size={22} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-white mb-1">Targeted Reach</h3>
                                        <p className="text-slate-400 text-xs leading-relaxed">Connect with high-intent decision makers actively seeking solutions.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-[#38bdf8] shrink-0 border border-white/10">
                                        <Award size={22} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-white mb-1">Authority Building</h3>
                                        <p className="text-slate-400 text-xs leading-relaxed">Position your brand as an industry thought leader and trusted expert.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-[#38bdf8] shrink-0 border border-white/10">
                                        <TrendingUp size={22} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-white mb-1">Sustainable ROI</h3>
                                        <p className="text-slate-400 text-xs leading-relaxed">Evergreen assets that continuously generate qualified inbound leads.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Content Marketing is Important Section */}
            <section className="py-12 lg:py-16 bg-[#F8FAFF] relative overflow-hidden">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1A5CDD]/5 blur-3xl rounded-full pointer-events-none" />

                <div className="container mx-auto px-4 relative max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 rounded-[32px] p-6 lg:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] bg-white border border-slate-100 group/hero relative overflow-hidden">
                        <div className="lg:w-1/2 relative z-10">
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 mb-6 shadow-sm">
                                <Target className="text-[#1A5CDD]" size={16} />
                                <span className="text-[13px] font-bold text-[#1A5CDD] tracking-wider uppercase">Business Impact</span>
                            </div>

                            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#011146] mb-5 leading-tight">
                                Why Content Marketing is Important for Your Business
                            </h2>

                            <p className="text-slate-600 text-[16px] leading-relaxed mb-0">
                                Today's customers expect valuable information before they make a purchasing decision. Creating relevant, informative, and engaging content helps your business attract potential customers, build credibility, and stay ahead of the competition. Our Content Marketing Services in Pondicherry focus on delivering high-quality content that strengthens your online presence, improves search visibility, and supports sustainable business growth.
                            </p>
                        </div>

                        <div className="lg:w-1/2 relative z-10 flex items-center justify-center w-full">
                            <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[360px] flex items-center justify-center">
                                <Image
                                    src="/images/seo/business_impact.png"
                                    alt="Content Marketing Business Impact"
                                    fill
                                    className="object-contain filter drop-shadow-[0_15px_35px_rgba(1,17,70,0.10)] transform group-hover:scale-105 transition-all duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits of Content Marketing */}
            <section className="pt-20 pb-12 lg:pt-24 lg:pb-16 bg-white border-y border-slate-100 relative">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 rounded-full px-4 py-1.5 text-xs font-bold text-[#1A5CDD] uppercase tracking-wider mb-6 shadow-sm">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon || Activity;
                            return (
                                <div key={index} className="flex gap-6 group relative">
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
            <section className="bg-white py-20 lg:py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(#1A5CDD 1.5px, transparent 1.5px)`, backgroundSize: `32px 32px` }} />

                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1A5CDD]/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#38bdf8]/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 mb-6 shadow-sm">
                            <Activity className="text-[#1A5CDD]" size={18} strokeWidth={2.5} />
                            <span className="text-[13px] font-extrabold text-[#1A5CDD] tracking-[3px] uppercase">
                                Content Marketing Services
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#011146] leading-[1.15] tracking-tight">
                            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8]">Content Marketing Services</span> Cover
                        </h2>
                        <p className="text-slate-600 mt-5 text-[17px] leading-[1.8]">
                            Premium content experiences designed for search engines, customers, and conversions. We handle every format your business needs.
                        </p>
                    </div>

                    <div className="space-y-12 lg:space-y-16">
                        {services.map((item, index) => {
                            const Icon = item.icon || Activity;
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={index}
                                    className="relative bg-gradient-to-br from-white via-slate-50/50 to-blue-50/25 rounded-3xl border border-slate-200/80 p-6 sm:p-8 lg:p-10 shadow-md hover:shadow-2xl hover:border-blue-300/80 transition-all duration-500 overflow-hidden group grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                                >
                                    <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#1A5CDD]/5 blur-3xl pointer-events-none group-hover:bg-[#1A5CDD]/12 transition-all duration-700" />
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1A5CDD] via-[#2E8BFF] to-[#38bdf8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className={`lg:col-span-6 w-full ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                                        <div className={`relative rounded-2xl ${!item.image.startsWith('http') ? 'bg-transparent' : 'bg-slate-900 border border-slate-200/80'} overflow-hidden group/img h-[280px] sm:h-[360px] lg:h-[420px] w-full flex items-center justify-center`}>
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className={`${!item.image.startsWith('http') ? 'object-contain' : 'object-cover'} group-hover/img:scale-105 transition-transform duration-700 ease-out`}
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                            {item.image.startsWith('http') && (
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#011146]/60 via-transparent to-black/10 pointer-events-none" />
                                            )}
                                        </div>
                                    </div>

                                    <div className={`lg:col-span-6 relative z-10 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-12 h-12 rounded-2xl bg-[#EEF4FF] border border-[#1A5CDD]/15 text-[#1A5CDD] flex items-center justify-center shadow-sm">
                                                <Icon size={22} strokeWidth={2} />
                                            </div>
                                            <span className="text-xs font-bold text-[#1A5CDD] uppercase tracking-wider bg-[#1A5CDD]/10 px-3.5 py-1.5 rounded-full border border-[#1A5CDD]/20">
                                                {item.tag || "Content Marketing"}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#011146] mb-4 tracking-tight">
                                            {item.title}
                                        </h3>

                                        <p className="text-slate-600 text-[15.5px] leading-relaxed mb-8">
                                            {item.desc}
                                        </p>

                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-2.5 bg-[#011146] text-white px-6 py-3.5 rounded-xl font-bold text-sm hover:bg-[#1A5CDD] transition-all shadow-md hover:-translate-y-0.5 group/btn"
                                        >
                                            <span>Get a Quote for {item.title}</span>
                                            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Content Marketing Process Section */}
            <section className="relative bg-white py-28 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-30"></div>

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-blue-50 blur-[120px] opacity-80"></div>
                    <div className="absolute top-1/3 -right-60 w-[500px] h-[500px] rounded-full bg-cyan-50 blur-[100px] opacity-60"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-6">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-16 max-w-7xl mx-auto">
                        {seoProcess.map((item, index) => (
                            <div key={index} className="relative group">
                                <div className="flex items-center gap-6 mb-6">
                                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center font-black text-xl group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_10px_20px_rgba(37,99,235,0.2)] transition-all duration-500 relative z-10 group-hover:-translate-y-1 border border-slate-100 group-hover:border-blue-600">
                                        {String(item.step).padStart(2, '0')}
                                    </div>

                                    <div className="flex-1 h-[2px] bg-slate-100 relative overflow-hidden rounded-full">
                                        <div className="absolute left-0 top-0 bottom-0 w-0 bg-gradient-to-r from-blue-600 to-cyan-400 group-hover:w-full transition-all duration-1000 ease-out"></div>
                                    </div>
                                </div>

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

            {/* Why Choose SysCrop */}
            <section className="py-20 bg-[#F0F8FF] relative overflow-hidden">
                <div className="container mx-auto px-4 relative max-w-7xl">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-20">
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#1A5CDD]/5 border border-[#1A5CDD]/10 mb-8">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                                    <Activity className="text-[#1A5CDD]" size={20} />
                                </div>
                                <h3 className="text-xl font-bold text-[#011146]">Why SysCrop</h3>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#011146] mb-6 leading-tight">
                                Why Choose SysCrop for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A5CDD] to-[#38bdf8]">Content Marketing Services in Pondicherry?</span>
                            </h2>
                            <p className="text-slate-600 text-[15px] leading-relaxed mb-5">
                                At SysCrop, our Content Marketing Services in Pondicherry combine creativity, SEO expertise, and data-driven strategies to create high-quality content that attracts your target audience, builds brand authority, and generates measurable business results.
                            </p>
                        </div>

                        <div className="lg:w-1/2 relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#1A5CDD]/10 to-[#38bdf8]/10 rounded-full blur-3xl -z-10 pointer-events-none" />
                            <div className="relative group">
                                <div className="rounded-[40px] overflow-hidden">
                                    <div className="w-full h-[400px] flex items-center justify-center relative overflow-hidden bg-transparent">
                                        <Image
                                            src="/images/seo/why_syscorp_content.png"
                                            alt="Content Marketing Expertise"
                                            fill
                                            className="object-contain transform group-hover:scale-105 transition-transform duration-700"
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
                        <h3 className="text-2xl md:text-3xl font-bold text-[#011146] tracking-tight">What Sets SysCrop Apart?</h3>
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

                <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#011146] to-transparent pointer-events-none z-10" />
                <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#011146] to-transparent pointer-events-none z-10" />
            </section>

            {/* FAQs */}
            <section className="py-20 lg:py-28 bg-[#F8FAFC]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                        <div className="lg:w-5/12">
                            <div className="sticky top-32">
                                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase border border-blue-100 mb-6">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                                    Frequently Asked Questions
                                </span>

                                <h2 className="text-4xl md:text-5xl font-extrabold text-[#011146] mb-6 tracking-tight leading-tight">
                                    Your Questions <br />
                                    <span className="text-blue-600">Answered</span>
                                </h2>

                                <p className="text-slate-500 text-lg leading-relaxed mb-10">
                                    Find clear, honest answers to common questions from our team of experienced professionals.
                                </p>

                                <hr className="border-slate-200 mb-8" />

                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-3">
                                        <div className="w-12 h-12 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative shadow-sm">
                                            <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop" alt="Expert" fill className="object-cover" />
                                        </div>
                                        <div className="w-12 h-12 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative shadow-sm">
                                            <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop" alt="Expert" fill className="object-cover" />
                                        </div>
                                        <div className="w-12 h-12 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative shadow-sm">
                                            <Image src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100&auto=format&fit=crop" alt="Expert" fill className="object-cover" />
                                        </div>
                                        <div className="w-12 h-12 rounded-full border-2 border-white bg-[#011146] flex items-center justify-center text-white text-xs font-bold relative z-10 shadow-sm">
                                            +10
                                        </div>
                                    </div>
                                    <p className="text-sm text-slate-500 font-medium leading-tight max-w-[150px]">
                                        Answers curated directly from our consulting experts.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-7/12">
                            <div className="space-y-4">
                                {faqs.map((item, index) => {
                                    const isOpen = activeFaq === index;
                                    return (
                                        <div
                                            key={index}
                                            className={`rounded-[20px] border transition-all duration-300 overflow-hidden bg-white ${isOpen ? "border-blue-600 shadow-md shadow-blue-900/5" : "border-slate-200 hover:border-slate-300"}`}
                                        >
                                            <button
                                                onClick={() => setActiveFaq(isOpen ? null : index)}
                                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                                            >
                                                <h3 className="text-[16px] font-bold text-[#011146] pr-8 group-hover:text-blue-600 transition-colors duration-300">
                                                    {index + 1}. {item.q}
                                                </h3>
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'}`}>
                                                    <span className="text-xl font-light leading-none relative -top-[1px]">{isOpen ? '-' : '+'}</span>
                                                </div>
                                            </button>
                                            <div
                                                className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                                            >
                                                <div className="overflow-hidden">
                                                    <div className="px-6 pb-6 pt-2 text-slate-600 text-[15px] leading-relaxed">
                                                        {item.a}
                                                    </div>
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
        </main>
    );
}
