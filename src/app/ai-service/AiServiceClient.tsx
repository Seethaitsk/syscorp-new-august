"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";
import Link from "next/link";

const services = [
    {
        key: 'genai',
        icon: 'bi-magic',
        img: '/aiservice/images/genai.jpeg',
        title: 'Generative AI Solutions',
        tagline: 'Develop intelligent AI applications powered by advanced language models for content generation, automation, and business workflows.'
    },
    {
        key: 'chatbot',
        icon: 'bi-chat-dots',
        img: '/aiservice/images/Chatbot.jpeg',
        title: 'AI Chatbot Development',
        tagline: 'Build AI-powered chatbots that provide instant customer support, answer queries, and improve engagement across websites and applications.'
    },
    {
        key: 'agents',
        icon: 'bi-robot',
        img: '/aiservice/images/customai.jpeg',
        title: 'AI Agents',
        tagline: 'Create autonomous AI agents capable of handling business tasks, customer interactions, scheduling, research, and workflow execution.'
    },
    {
        key: 'automation',
        icon: 'bi-gear-wide-connected',
        img: '/aiservice/images/ai_assistant.png',
        title: 'AI Automation',
        tagline: 'Automate repetitive business processes using intelligent AI workflows that improve efficiency and reduce manual effort.'
    },
    {
        key: 'software',
        icon: 'bi-code-square',
        img: '/aiservice/images/laptop_code.png',
        title: 'AI Software Development',
        tagline: 'Design and develop custom AI-powered software tailored to your business requirements and industry needs.'
    },
    {
        key: 'integration',
        icon: 'bi-box-seam',
        img: '/aiservice/images/people_working.png',
        title: 'AI API Integration',
        tagline: 'Integrate OpenAI, Gemini, Claude, Llama, and other AI APIs into your existing applications and business systems.'
    },
    {
        key: 'analytics',
        icon: 'bi-graph-up-arrow',
        img: '/aiservice/images/ai_brain.png',
        title: 'AI Analytics',
        tagline: 'Transform complex business data into meaningful insights using AI-powered dashboards and predictive analytics.'
    },
    {
        key: 'cloud',
        icon: 'bi-cloud-arrow-up',
        img: '/aiservice/images/ai_assistant.png',
        title: 'AI Cloud Solutions',
        tagline: 'Deploy scalable AI applications securely on AWS, Microsoft Azure, and Google Cloud Platform.'
    }
];

const faqs = [
    {
        q: "What AI services does Syscorp offer?",
        a: "We provide AI chatbot development, AI agents, generative AI solutions, AI automation, AI software development, AI API integration, AI analytics, and AI cloud solutions."
    },
    {
        q: "Which AI models do you work with?",
        a: "We work with OpenAI (GPT-4), Google Gemini, Anthropic Claude, Meta Llama, and other leading AI platforms based on project requirements."
    },
    {
        q: "Can you integrate AI into our existing software?",
        a: "Yes. We seamlessly integrate AI capabilities into existing websites, mobile applications, CRMs, ERPs, and enterprise software systems without disrupting current workflows."
    },
    {
        q: "Which industries can benefit from AI?",
        a: "Healthcare, finance, education, retail, manufacturing, logistics, e-commerce, real estate, and many other industries can leverage AI to improve efficiency and customer experiences."
    },
    {
        q: "Do you provide ongoing AI support?",
        a: "Yes. We offer continuous maintenance, model monitoring, security updates, performance optimization, and feature enhancements after deployment."
    },
    {
        q: "Why choose Syscorp for AI development?",
        a: "Our experienced AI developers deliver secure, scalable, and customized AI solutions that align with your business objectives and ensure long-term measurable growth."
    }
];

const techCategories = [
    {
        id: "platforms",
        title: "AI Platforms",
        icon: "bi-cpu-fill",
        badge: "4 LLM Engines",
        gradient: "from-sky-400 via-blue-500 to-indigo-600",
        bgGlow: "bg-sky-500/10 text-sky-600 border-sky-400/30",
        items: [
            { name: "OpenAI (GPT-4)", desc: "GPT-4o, DALL-E 3 & Custom Fine-Tuning", icon: "bi-stars", iconColor: "text-amber-500 bg-amber-50 border-amber-200" },
            { name: "Google Gemini", desc: "Gemini 1.5 Pro & Multimodal AI Systems", icon: "bi-gem", iconColor: "text-blue-500 bg-blue-50 border-blue-200" },
            { name: "Anthropic Claude", desc: "Claude 3.5 Sonnet & Advanced Reasoning", icon: "bi-chat-quote-fill", iconColor: "text-purple-500 bg-purple-50 border-purple-200" },
            { name: "Meta Llama", desc: "Llama 3 Open-Source Architecture", icon: "bi-robot", iconColor: "text-indigo-500 bg-indigo-50 border-indigo-200" }
        ]
    },
    {
        id: "frameworks",
        title: "AI Frameworks",
        icon: "bi-diagram-3-fill",
        badge: "3 Frameworks",
        gradient: "from-purple-500 via-indigo-500 to-violet-600",
        bgGlow: "bg-purple-500/10 text-purple-600 border-purple-400/30",
        items: [
            { name: "LangChain", desc: "Agentic Workflows & Enterprise RAG", icon: "bi-link-45deg", iconColor: "text-emerald-600 bg-emerald-50 border-emerald-200" },
            { name: "TensorFlow", desc: "Deep Learning & Production Neural Networks", icon: "bi-bounding-box-circles", iconColor: "text-amber-600 bg-amber-50 border-amber-200" },
            { name: "PyTorch", desc: "Machine Learning Research & Fast Inference", icon: "bi-fire", iconColor: "text-rose-500 bg-rose-50 border-rose-200" }
        ]
    },
    {
        id: "devtech",
        title: "Dev Tech",
        icon: "bi-code-square",
        badge: "4 Core Techs",
        gradient: "from-teal-400 via-emerald-500 to-cyan-600",
        bgGlow: "bg-teal-500/10 text-teal-600 border-teal-400/30",
        items: [
            { name: "Python", desc: "AI Microservices & Data Engineering", icon: "bi-terminal-fill", iconColor: "text-sky-600 bg-sky-50 border-sky-200" },
            { name: "React", desc: "Dynamic Real-Time UI Interfaces", icon: "bi-atom", iconColor: "text-cyan-500 bg-cyan-50 border-cyan-200" },
            { name: "Next.js", desc: "High-Performance Full-Stack SSR", icon: "bi-box-arrow-up-right", iconColor: "text-slate-800 bg-slate-100 border-slate-300" },
            { name: "Node.js", desc: "Asynchronous High-Throughput APIs", icon: "bi-hdd-network-fill", iconColor: "text-emerald-600 bg-emerald-50 border-emerald-200" }
        ]
    },
    {
        id: "cloud",
        title: "Cloud Platforms",
        icon: "bi-cloud-arrow-up-fill",
        badge: "3 Enterprise Clouds",
        gradient: "from-blue-500 via-sky-400 to-indigo-500",
        bgGlow: "bg-blue-500/10 text-blue-600 border-blue-400/30",
        items: [
            { name: "AWS (Amazon Web Services)", desc: "Bedrock, EC2 GPUs & Serverless Lambda", icon: "bi-cloud-check-fill", iconColor: "text-amber-500 bg-amber-50 border-amber-200" },
            { name: "Microsoft Azure", desc: "Azure OpenAI & Cognitive Cloud Services", icon: "bi-windows", iconColor: "text-blue-600 bg-blue-50 border-blue-200" },
            { name: "Google Cloud Platform (GCP)", desc: "Vertex AI & Cloud TPU Cluster Nodes", icon: "bi-google", iconColor: "text-red-500 bg-red-50 border-red-200" }
        ]
    }
];

export default function AiServiceClient() {
    const [activeServiceKey, setActiveServiceKey] = useState('genai');
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [activeTechFilter, setActiveTechFilter] = useState('all');

    const activeService = services.find(s => s.key === activeServiceKey);

    useEffect(() => {
        document.body.classList.add("aiservice-page");
        return () => {
            document.body.classList.remove("aiservice-page");
        };
    }, []);

    return (
        <div className="aiservice-wrapper font-sans text-slate-800 bg-white">
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
                href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap"
                rel="stylesheet"
            />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet" />
            <link rel="stylesheet" href="/aiservice/css/style.css?v=3" />

            <style dangerouslySetInnerHTML={{
                __html: `
                .collapse:not(.show) { display: none; }
                .collapsing { height: 0; overflow: hidden; transition: height 0.35s ease; }
            `}} />

            {/* 1. HERO SECTION */}
            <header id="top" className="hero flex items-center relative min-h-[100vh] overflow-hidden bg-[#011146]">
                <video className="hero-video absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
                    <source src="/aiservice/images/banner4.mp4" type="video/mp4" />
                </video>
                <div className="hero-overlay absolute inset-0 z-0 bg-gradient-to-b from-[#011146]/90 via-[#011146]/80 to-[#011146]"></div>

                <div className="container mx-auto px-4 relative z-10 hero-content text-center pt-28 pb-20">
                    <div className="flex flex-wrap justify-center items-center">
                        <div className="w-full lg:w-10/12 px-4">
                            <span className="badge-eyebrow inline-flex items-center text-[13px] font-semibold text-sky-300 bg-sky-500/10 border border-sky-400/30 px-4 py-1.5 rounded-full mb-[22px]">
                                <i className="bi bi-stars mr-1.5 text-sky-400"></i> Build Smarter. Automate Faster. Grow with AI.
                            </span>
                            <h1 className="hero-title text-4xl md:text-[58px] leading-[1.1] font-extrabold !text-white mb-[22px]" style={{ color: '#ffffff' }}>
                                AI Services in Pondicherry <br /><span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-400">That Transform Businesses</span>
                            </h1>
                            <p className="hero-sub mx-auto text-[17.5px] font-normal !text-slate-100 max-w-[780px] mb-[34px] leading-[1.6]" style={{ color: '#f1f5f9' }}>
                                Leverage the power of Artificial Intelligence to automate operations, enhance customer experiences, and unlock data-driven growth. At Syscorp, we develop intelligent AI solutions tailored to your business goals—from AI chatbots and AI agents to automation, analytics, and custom AI software development.
                            </p>
                            <div className="hero-btns flex flex-wrap justify-center gap-4 mb-8">
                                <Link href="/contact" className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full shadow-lg shadow-blue-600/30 transition-all duration-300 transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2">
                                    Get Free Consultation <i className="bi bi-arrow-right ml-1"></i>
                                </Link>
                                <Link href="/contact" className="px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center">
                                    Talk to AI Experts
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="scroll-cue absolute bottom-7 left-1/2 -translate-x-1/2 text-white/50 text-[22px] z-10" aria-hidden="true">
                    <i className="bi bi-chevron-down"></i>
                </div>
            </header>

            {/* 2. WHY CHOOSE AI SOLUTIONS */}
            <section className="section-digital-experiences bg-slate-50 py-[90px] overflow-hidden border-b border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        {/* Left Column: Graphics & Image */}
                        <div className="lg:col-span-5 relative">
                            <div className="experience-img-wrap relative">
                                <img src="/aiservice/images/people_working.png" alt="Team working with AI" className="main-exp-img w-full h-auto rounded-2xl shadow-xl" />

                                <div className="floating-badge shadow-lg absolute -top-4 -right-4 bg-white px-4 py-3 rounded-xl flex items-center gap-2.5 font-bold text-[14px]">
                                    <div className="badge-dot w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
                                    <span className="text-[#011146]">Active AI Clients 320+</span>
                                </div>

                                <div className="floating-badge shadow-lg absolute -bottom-8 -left-4 bg-white p-5 rounded-2xl w-48 border border-slate-200">
                                    <i className="bi bi-graph-up-arrow text-blue-600 text-2xl mb-1 block"></i>
                                    <div>
                                        <strong className="block text-[#011146] font-bold text-lg">98.4% Efficiency</strong>
                                        <div className="mini-chart flex gap-1 mt-2">
                                            <span className="h-1.5 w-full bg-blue-600 rounded-full"></span>
                                            <span className="h-1.5 w-full bg-sky-400 rounded-full"></span>
                                            <span className="h-1.5 w-full bg-blue-300 rounded-full"></span>
                                            <span className="h-1.5 w-full bg-slate-200 rounded-full"></span>
                                        </div>
                                    </div>
                                </div>

                                <img src="/aiservice/images/laptop_code.png" alt="AI Code Development" className="overlap-exp-img shadow-2xl absolute -bottom-12 -right-6 w-2/3 rounded-2xl hidden md:block border-2 border-white" />
                            </div>
                        </div>

                        {/* Right Column: Title, Subtitle, 5 Features */}
                        <div className="lg:col-span-7 pt-8 lg:pt-0">
                            <div className="mb-8">
                                <span className="inline-flex items-center gap-1.5 bg-blue-50 px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-700 uppercase tracking-widest mb-3 border border-blue-200">
                                    <i className="bi bi-lightbulb-fill"></i> Why Choose AI Solutions?
                                </span>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold !text-[#011146] mt-2 mb-4 leading-tight" style={{ color: '#011146' }}>
                                    Drive Business Growth with <span className="text-blue-600">Intelligent AI Solutions</span>
                                </h2>
                                <p className="!text-slate-700 text-[16.5px] leading-relaxed" style={{ color: '#334155' }}>
                                    Artificial Intelligence is helping businesses improve efficiency, reduce operational costs, and make faster, more informed decisions. Whether you're a startup or an enterprise, AI enables you to streamline workflows and deliver better customer experiences while staying ahead of the competition.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4 mt-6">
                                {/* 1. Business Automation */}
                                <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-300 transition-all">
                                    <div className="w-10 h-10 bg-sky-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg mb-3">
                                        <i className="bi bi-diagram-3"></i>
                                    </div>
                                    <h4 className="font-bold !text-[#011146] text-[16.5px] mb-1" style={{ color: '#011146' }}>Business Automation</h4>
                                    <p className="!text-slate-600 text-[14px] leading-snug" style={{ color: '#475569' }}>Automate repetitive tasks, reduce manual effort, and improve operational efficiency across departments.</p>
                                </div>

                                {/* 2. Reduce Operational Costs */}
                                <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-300 transition-all">
                                    <div className="w-10 h-10 bg-sky-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg mb-3">
                                        <i className="bi bi-piggy-bank"></i>
                                    </div>
                                    <h4 className="font-bold !text-[#011146] text-[16.5px] mb-1" style={{ color: '#011146' }}>Reduce Operational Costs</h4>
                                    <p className="!text-slate-600 text-[14px] leading-snug" style={{ color: '#475569' }}>Minimize human intervention, optimize processes, and lower long-term business expenses.</p>
                                </div>

                                {/* 3. Increase Productivity */}
                                <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-300 transition-all">
                                    <div className="w-10 h-10 bg-sky-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg mb-3">
                                        <i className="bi bi-lightning-charge"></i>
                                    </div>
                                    <h4 className="font-bold !text-[#011146] text-[16.5px] mb-1" style={{ color: '#011146' }}>Increase Productivity</h4>
                                    <p className="!text-slate-600 text-[14px] leading-snug" style={{ color: '#475569' }}>Allow your teams to focus on strategic work while AI handles repetitive operations.</p>
                                </div>

                                {/* 4. Enhance Customer Experience */}
                                <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-300 transition-all">
                                    <div className="w-10 h-10 bg-sky-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg mb-3">
                                        <i className="bi bi-heart-pulse"></i>
                                    </div>
                                    <h4 className="font-bold !text-[#011146] text-[16.5px] mb-1" style={{ color: '#011146' }}>Enhance Customer Experience</h4>
                                    <p className="!text-slate-600 text-[14px] leading-snug" style={{ color: '#475569' }}>Deliver instant, personalized, and 24/7 customer support through AI-powered solutions.</p>
                                </div>

                                {/* 5. Data-Driven Decision Making */}
                                <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-300 transition-all sm:col-span-2">
                                    <div className="flex items-start gap-3.5">
                                        <div className="w-10 h-10 shrink-0 bg-sky-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg">
                                            <i className="bi bi-bar-chart-line"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-bold !text-[#011146] text-[16.5px] mb-1" style={{ color: '#011146' }}>Data-Driven Decision Making</h4>
                                            <p className="!text-slate-600 text-[14px] leading-snug" style={{ color: '#475569' }}>Analyze business data in real time and gain actionable insights for smarter decisions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. AI SERVICES WE PROVIDE */}
            <section id="services" className="section-services py-[90px] relative text-white overflow-hidden bg-[#011146]">
                {/* Ambient glow blobs */}
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-[140px] pointer-events-none"></div>
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sky-500/15 rounded-full blur-[140px] pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="section-heading text-center max-w-[720px] mx-auto mb-12">
                        <span className="eyebrow-mono text-sky-400 font-mono text-[13px] font-semibold tracking-widest uppercase block mb-3">What we build</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold !text-white mb-4" style={{ color: '#ffffff' }}>
                            AI Services We Provide
                        </h2>
                        <p className="!text-slate-200 text-[16.5px]" style={{ color: '#e2e8f0' }}>
                            Comprehensive AI Development Services tailored for modern businesses looking to automate, scale, and innovate.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 items-stretch mt-8">
                        {/* Services Selector Cards (2 Columns of 4) */}
                        <div className="lg:col-span-7 flex flex-col justify-between">
                            <div className="grid sm:grid-cols-2 gap-3.5">
                                {services.map((s, i) => {
                                    const isOpen = activeServiceKey === s.key;
                                    return (
                                        <div
                                            key={s.key}
                                            onClick={() => setActiveServiceKey(s.key)}
                                            className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                                                isOpen
                                                    ? "bg-gradient-to-br from-[#0c226b] via-[#09184d] to-[#06123d] border-2 border-sky-400 shadow-[0_0_25px_rgba(56,189,248,0.3)] scale-[1.02]"
                                                    : "bg-[#07133c]/90 border border-slate-700/60 hover:border-sky-400/50 hover:bg-[#0c1e56]"
                                            }`}
                                        >
                                            <div className="flex items-start gap-3 mb-2">
                                                <span
                                                    className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center text-lg transition-all duration-300 ${
                                                        isOpen
                                                            ? "bg-blue-600 text-white shadow-md shadow-blue-600/50"
                                                            : "bg-blue-500/10 text-sky-400 border border-sky-400/20"
                                                    }`}
                                                >
                                                    <i className={`bi ${s.icon}`}></i>
                                                </span>
                                                <div className="min-w-0 flex-1">
                                                    <span className="text-[11px] font-bold text-sky-400/80 uppercase tracking-wider block">Service 0{i + 1}</span>
                                                    <h3
                                                        className={`font-bold text-[15.5px] leading-snug transition-colors truncate ${
                                                            isOpen ? "text-sky-300" : "text-white"
                                                        }`}
                                                        style={{ color: isOpen ? '#7dd3fc' : '#ffffff' }}
                                                    >
                                                        {s.title}
                                                    </h3>
                                                </div>
                                            </div>

                                            <p className="text-[12.5px] !text-slate-300 leading-relaxed font-normal line-clamp-2 mt-1" style={{ color: '#cbd5e1' }}>
                                                {s.tagline}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Interactive Visual Showcase Card */}
                        <div className="lg:col-span-5 flex flex-col justify-between gap-5">
                            <div className="services-visual relative rounded-3xl overflow-hidden border-2 border-blue-500/40 shadow-[0_0_40px_rgba(37,99,235,0.25)] group flex-1 min-h-[300px] flex flex-col justify-end">
                                <img
                                    src={activeService?.img || "/aiservice/images/Chatbot.jpeg"}
                                    className="w-full h-full object-cover absolute inset-0 transition-all duration-500 group-hover:scale-105"
                                    alt="AI Service Visual"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#011146] via-[#011146]/50 to-transparent"></div>

                                <div className="absolute top-4 right-4 z-10">
                                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#011146]/80 backdrop-blur-md border border-sky-400/40 text-sky-300 text-xs font-bold uppercase tracking-wider shadow-lg">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                        Active Capability
                                    </span>
                                </div>

                                <div className="relative z-10 p-6">
                                    <span className="text-sky-400 text-xs font-bold uppercase tracking-widest block mb-1">FEATURED SOLUTION</span>
                                    <h3 className="text-2xl font-bold !text-white mb-2" style={{ color: '#ffffff' }}>{activeService?.title}</h3>
                                    <p className="text-xs text-slate-200 mb-4 line-clamp-2">{activeService?.tagline}</p>
                                    
                                    <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-md">
                                        Explore Solution <i className="bi bi-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>

                            <div className="p-5 rounded-3xl bg-[#07133c] border border-blue-500/30 shadow-xl backdrop-blur-xl">
                                <div className="flex items-center justify-between mb-3.5">
                                    <h4 className="text-[12px] font-bold text-sky-400 tracking-widest uppercase">ENTERPRISE AI STANDARDS</h4>
                                    <span className="text-[11px] bg-emerald-500/20 text-emerald-400 px-2.5 py-0.5 rounded-full font-bold border border-emerald-400/30">Verified</span>
                                </div>

                                <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
                                    <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#030a21] border border-blue-500/20">
                                        <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-400/40 flex items-center justify-center text-sky-300 shrink-0 text-lg">
                                            <i className="bi bi-shield-check"></i>
                                        </div>
                                        <div>
                                            <div className="text-[13px] font-bold !text-white" style={{ color: '#ffffff' }}>SOC 2 Type II Security</div>
                                            <div className="text-[11px] !text-slate-300" style={{ color: '#cbd5e1' }}>Enterprise data privacy</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#030a21] border border-blue-500/20">
                                        <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-400/40 flex items-center justify-center text-sky-300 shrink-0 text-lg">
                                            <i className="bi bi-cpu"></i>
                                        </div>
                                        <div>
                                            <div className="text-[13px] font-bold !text-white" style={{ color: '#ffffff' }}>High-Performance</div>
                                            <div className="text-[11px] !text-slate-300" style={{ color: '#cbd5e1' }}>Sub-second latency</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. AI DEVELOPMENT PROCESS */}
            <section className="py-[90px] bg-slate-50/80 border-b border-slate-200 relative overflow-hidden">
                {/* Subtle background ambient dot grid */}
                <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="section-heading text-center max-w-[700px] mx-auto mb-14">
                        <span className="inline-flex items-center gap-2 bg-blue-50 px-4 py-1.5 rounded-full text-xs font-extrabold text-blue-700 uppercase tracking-widest mb-3 border border-blue-200/80 shadow-2xs">
                            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                            How We Deliver
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold !text-[#011146] mb-4" style={{ color: '#011146' }}>
                            AI Development Process
                        </h2>
                        <p className="!text-slate-600 text-[16.5px]" style={{ color: '#475569' }}>
                            Our AI Development Approach ensures smooth execution from concept to deployment and beyond.
                        </p>
                    </div>

                    {/* Step Cards Layout - Row 1 (Steps 1-4) */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Step 1 */}
                        <div className="relative bg-white p-7 rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-blue-400/60 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group overflow-hidden">
                            <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 to-sky-400 absolute top-0 left-0"></div>
                            <div>
                                <div className="flex items-center justify-between mb-5 mt-1">
                                    <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200/80 flex items-center justify-center text-lg font-bold shadow-2xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <i className="bi bi-search"></i>
                                    </div>
                                    <span className="text-3xl font-extrabold text-slate-200 group-hover:text-blue-500/30 transition-colors">01</span>
                                </div>
                                <h3 className="text-lg font-extrabold !text-[#011146] mb-2" style={{ color: '#011146' }}>1. Requirement Analysis</h3>
                                <p className="!text-slate-600 text-[14px] leading-relaxed font-normal" style={{ color: '#475569' }}>We understand your business objectives, challenges, and automation opportunities.</p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative bg-white p-7 rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-blue-400/60 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group overflow-hidden">
                            <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 to-sky-400 absolute top-0 left-0"></div>
                            <div>
                                <div className="flex items-center justify-between mb-5 mt-1">
                                    <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200/80 flex items-center justify-center text-lg font-bold shadow-2xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <i className="bi bi-compass"></i>
                                    </div>
                                    <span className="text-3xl font-extrabold text-slate-200 group-hover:text-blue-500/30 transition-colors">02</span>
                                </div>
                                <h3 className="text-lg font-extrabold !text-[#011146] mb-2" style={{ color: '#011146' }}>2. AI Strategy</h3>
                                <p className="!text-slate-600 text-[14px] leading-relaxed font-normal" style={{ color: '#475569' }}>Our experts identify the most suitable AI technologies and implementation roadmap.</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative bg-white p-7 rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-blue-400/60 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group overflow-hidden">
                            <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 to-sky-400 absolute top-0 left-0"></div>
                            <div>
                                <div className="flex items-center justify-between mb-5 mt-1">
                                    <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200/80 flex items-center justify-center text-lg font-bold shadow-2xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <i className="bi bi-layers"></i>
                                    </div>
                                    <span className="text-3xl font-extrabold text-slate-200 group-hover:text-blue-500/30 transition-colors">03</span>
                                </div>
                                <h3 className="text-lg font-extrabold !text-[#011146] mb-2" style={{ color: '#011146' }}>3. Solution Design</h3>
                                <p className="!text-slate-600 text-[14px] leading-relaxed font-normal" style={{ color: '#475569' }}>We design scalable AI architecture with user-focused experiences and future growth in mind.</p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="relative bg-white p-7 rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-blue-400/60 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group overflow-hidden">
                            <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 to-sky-400 absolute top-0 left-0"></div>
                            <div>
                                <div className="flex items-center justify-between mb-5 mt-1">
                                    <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200/80 flex items-center justify-center text-lg font-bold shadow-2xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <i className="bi bi-code-slash"></i>
                                    </div>
                                    <span className="text-3xl font-extrabold text-slate-200 group-hover:text-blue-500/30 transition-colors">04</span>
                                </div>
                                <h3 className="text-lg font-extrabold !text-[#011146] mb-2" style={{ color: '#011146' }}>4. Development</h3>
                                <p className="!text-slate-600 text-[14px] leading-relaxed font-normal" style={{ color: '#475569' }}>Our developers build secure, high-performance AI applications using modern frameworks and models.</p>
                            </div>
                        </div>
                    </div>

                    {/* Step Cards Layout - Row 2 Centered (Steps 5-7) */}
                    <div className="grid md:grid-cols-3 gap-6 max-w-[1020px] mx-auto mt-6">
                        {/* Step 5 */}
                        <div className="relative bg-white p-7 rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-blue-400/60 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group overflow-hidden">
                            <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 to-sky-400 absolute top-0 left-0"></div>
                            <div>
                                <div className="flex items-center justify-between mb-5 mt-1">
                                    <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200/80 flex items-center justify-center text-lg font-bold shadow-2xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <i className="bi bi-shield-check"></i>
                                    </div>
                                    <span className="text-3xl font-extrabold text-slate-200 group-hover:text-blue-500/30 transition-colors">05</span>
                                </div>
                                <h3 className="text-lg font-extrabold !text-[#011146] mb-2" style={{ color: '#011146' }}>5. Testing</h3>
                                <p className="!text-slate-600 text-[14px] leading-relaxed font-normal" style={{ color: '#475569' }}>Every AI solution is thoroughly tested for accuracy, security, performance, and reliability.</p>
                            </div>
                        </div>

                        {/* Step 6 */}
                        <div className="relative bg-white p-7 rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-blue-400/60 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group overflow-hidden">
                            <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 to-sky-400 absolute top-0 left-0"></div>
                            <div>
                                <div className="flex items-center justify-between mb-5 mt-1">
                                    <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200/80 flex items-center justify-center text-lg font-bold shadow-2xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <i className="bi bi-rocket-takeoff"></i>
                                    </div>
                                    <span className="text-3xl font-extrabold text-slate-200 group-hover:text-blue-500/30 transition-colors">06</span>
                                </div>
                                <h3 className="text-lg font-extrabold !text-[#011146] mb-2" style={{ color: '#011146' }}>6. Deployment</h3>
                                <p className="!text-slate-600 text-[14px] leading-relaxed font-normal" style={{ color: '#475569' }}>We deploy AI solutions seamlessly into your existing infrastructure with minimal disruption.</p>
                            </div>
                        </div>

                        {/* Step 7 */}
                        <div className="relative bg-white p-7 rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-blue-400/60 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group overflow-hidden">
                            <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 to-sky-400 absolute top-0 left-0"></div>
                            <div>
                                <div className="flex items-center justify-between mb-5 mt-1">
                                    <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200/80 flex items-center justify-center text-lg font-bold shadow-2xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <i className="bi bi-arrow-repeat"></i>
                                    </div>
                                    <span className="text-3xl font-extrabold text-slate-200 group-hover:text-blue-500/30 transition-colors">07</span>
                                </div>
                                <h3 className="text-lg font-extrabold !text-[#011146] mb-2" style={{ color: '#011146' }}>7. Support &amp; Optimization</h3>
                                <p className="!text-slate-600 text-[14px] leading-relaxed font-normal" style={{ color: '#475569' }}>Continuous monitoring, updates, performance optimization, and feature enhancements keep your AI solution performing at its best.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. AI SOLUTIONS ACROSS INDUSTRIES */}
            <section id="industries" className="py-[90px] bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="section-heading text-center max-w-[700px] mx-auto mb-14">
                        <span className="inline-flex items-center gap-1 bg-blue-50 px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-700 uppercase tracking-widest mb-3 border border-blue-200">
                            Tailored Sector Solutions
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold !text-[#011146] mb-4" style={{ color: '#011146' }}>
                            AI Solutions Across Industries
                        </h2>
                        <p className="!text-slate-600 text-[16.5px]" style={{ color: '#475569' }}>
                            AI Solutions for Every Industry — driving innovation and operational excellence.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Healthcare */}
                        <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-400 transition-all">
                            <div className="w-12 h-12 bg-sky-50 text-blue-600 rounded-xl flex items-center justify-center text-xl mb-4 font-bold border border-sky-100">
                                <i className="bi bi-heart-pulse"></i>
                            </div>
                            <h4 className="font-bold !text-[#011146] text-lg mb-2" style={{ color: '#011146' }}>Healthcare</h4>
                            <p className="!text-slate-600 text-[14px] leading-relaxed" style={{ color: '#475569' }}>Improve patient engagement, automate administrative tasks, and enhance medical data analysis.</p>
                        </div>

                        {/* Finance */}
                        <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-400 transition-all">
                            <div className="w-12 h-12 bg-sky-50 text-blue-600 rounded-xl flex items-center justify-center text-xl mb-4 font-bold border border-sky-100">
                                <i className="bi bi-bank"></i>
                            </div>
                            <h4 className="font-bold !text-[#011146] text-lg mb-2" style={{ color: '#011146' }}>Finance</h4>
                            <p className="!text-slate-600 text-[14px] leading-relaxed" style={{ color: '#475569' }}>Detect fraud, automate financial processes, generate reports, and improve risk management.</p>
                        </div>

                        {/* E-commerce */}
                        <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-400 transition-all">
                            <div className="w-12 h-12 bg-sky-50 text-blue-600 rounded-xl flex items-center justify-center text-xl mb-4 font-bold border border-sky-100">
                                <i className="bi bi-cart3"></i>
                            </div>
                            <h4 className="font-bold !text-[#011146] text-lg mb-2" style={{ color: '#011146' }}>E-commerce</h4>
                            <p className="!text-slate-600 text-[14px] leading-relaxed" style={{ color: '#475569' }}>Deliver personalized shopping experiences, AI recommendations, inventory forecasting, and customer support.</p>
                        </div>

                        {/* Education */}
                        <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-400 transition-all">
                            <div className="w-12 h-12 bg-sky-50 text-blue-600 rounded-xl flex items-center justify-center text-xl mb-4 font-bold border border-sky-100">
                                <i className="bi bi-mortarboard"></i>
                            </div>
                            <h4 className="font-bold !text-[#011146] text-lg mb-2" style={{ color: '#011146' }}>Education</h4>
                            <p className="!text-slate-600 text-[14px] leading-relaxed" style={{ color: '#475569' }}>Develop intelligent learning platforms, AI tutors, assessment automation, and student analytics.</p>
                        </div>

                        {/* Real Estate */}
                        <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-400 transition-all">
                            <div className="w-12 h-12 bg-sky-50 text-blue-600 rounded-xl flex items-center justify-center text-xl mb-4 font-bold border border-sky-100">
                                <i className="bi bi-building"></i>
                            </div>
                            <h4 className="font-bold !text-[#011146] text-lg mb-2" style={{ color: '#011146' }}>Real Estate</h4>
                            <p className="!text-slate-600 text-[14px] leading-relaxed" style={{ color: '#475569' }}>Automate property recommendations, customer inquiries, and market analysis.</p>
                        </div>

                        {/* Manufacturing */}
                        <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-400 transition-all">
                            <div className="w-12 h-12 bg-sky-50 text-blue-600 rounded-xl flex items-center justify-center text-xl mb-4 font-bold border border-sky-100">
                                <i className="bi bi-gear-wide"></i>
                            </div>
                            <h4 className="font-bold !text-[#011146] text-lg mb-2" style={{ color: '#011146' }}>Manufacturing</h4>
                            <p className="!text-slate-600 text-[14px] leading-relaxed" style={{ color: '#475569' }}>Optimize production planning, predictive maintenance, and quality control using AI.</p>
                        </div>

                        {/* Logistics */}
                        <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-400 transition-all">
                            <div className="w-12 h-12 bg-sky-50 text-blue-600 rounded-xl flex items-center justify-center text-xl mb-4 font-bold border border-sky-100">
                                <i className="bi bi-truck"></i>
                            </div>
                            <h4 className="font-bold !text-[#011146] text-lg mb-2" style={{ color: '#011146' }}>Logistics</h4>
                            <p className="!text-slate-600 text-[14px] leading-relaxed" style={{ color: '#475569' }}>Improve route optimization, demand forecasting, warehouse automation, and supply chain management.</p>
                        </div>

                        {/* Retail */}
                        <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-400 transition-all">
                            <div className="w-12 h-12 bg-sky-50 text-blue-600 rounded-xl flex items-center justify-center text-xl mb-4 font-bold border border-sky-100">
                                <i className="bi bi-shop"></i>
                            </div>
                            <h4 className="font-bold !text-[#011146] text-lg mb-2" style={{ color: '#011146' }}>Retail</h4>
                            <p className="!text-slate-600 text-[14px] leading-relaxed" style={{ color: '#475569' }}>Enhance customer experiences through personalized recommendations, inventory management, and AI-powered insights.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. AI TOOLS & TECHNOLOGIES WE USE */}
            <section className="py-[100px] bg-[#011146] border-y border-blue-900/50 relative overflow-hidden text-white">
                {/* Futuristic Ambient Glow & Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#082067_1px,transparent_1px),linear-gradient(to_bottom,#082067_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none"></div>
                <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-sky-500/15 rounded-full blur-[140px] pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="section-heading text-center max-w-[760px] mx-auto mb-12">
                        <span className="inline-flex items-center gap-2 bg-blue-500/10 text-sky-300 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest mb-4 border border-sky-400/30 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                            <i className="bi bi-cpu-fill text-sky-400"></i> Enterprise Tech Stack
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold !text-white mb-4 tracking-tight" style={{ color: '#ffffff' }}>
                            AI Tools &amp; <span className="bg-gradient-to-r from-sky-400 via-blue-300 to-indigo-300 bg-clip-text text-transparent">Technologies We Master</span>
                        </h2>
                        <p className="!text-slate-300 text-[16.5px] leading-relaxed font-normal" style={{ color: '#cbd5e1' }}>
                            We leverage industry-leading AI models, high-performance frameworks, modern web stacks, and enterprise cloud infrastructure to build battle-tested AI solutions.
                        </p>
                    </div>

                    {/* Sleek Glassmorphic Category Filter Bar */}
                    <div className="flex justify-center mb-14">
                        <div className="inline-flex flex-wrap justify-center items-center gap-1.5 p-1.5 rounded-full bg-[#07133c]/90 backdrop-blur-xl border border-blue-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                            <button
                                onClick={() => setActiveTechFilter('all')}
                                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 ${
                                    activeTechFilter === 'all'
                                        ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-[0_0_20px_rgba(56,189,248,0.35)] scale-[1.03]"
                                        : "text-slate-300 hover:text-white hover:bg-white/10"
                                }`}
                            >
                                <i className="bi bi-grid-fill"></i> All Technologies
                            </button>
                            {techCategories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveTechFilter(cat.id)}
                                    className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 ${
                                        activeTechFilter === cat.id
                                            ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-[0_0_20px_rgba(56,189,248,0.35)] scale-[1.03]"
                                            : "text-slate-300 hover:text-white hover:bg-white/10"
                                    }`}
                                >
                                    <i className={`bi ${cat.icon}`}></i> {cat.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tech Cards Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 items-stretch">
                        {techCategories
                            .filter(cat => activeTechFilter === 'all' || activeTechFilter === cat.id)
                            .map((cat) => (
                                <div
                                    key={cat.id}
                                    className="bg-[#07143f]/90 backdrop-blur-md rounded-[2rem] border border-blue-500/30 hover:border-sky-400/60 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(14,165,233,0.15)] transition-all duration-500 flex flex-col overflow-hidden group/card transform hover:-translate-y-2 relative"
                                >
                                    {/* Top Dynamic Gradient Accent Line */}
                                    <div className={`h-1.5 w-full bg-gradient-to-r ${cat.gradient}`}></div>

                                    <div className="p-6 sm:p-7 flex-1 flex flex-col">
                                        {/* Card Header */}
                                        <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-blue-900/50">
                                            <div className="flex items-center gap-3.5">
                                                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-400/30 text-sky-300 flex items-center justify-center text-xl shrink-0 shadow-inner transition-transform duration-300 group-hover/card:scale-105">
                                                    <i className={`bi ${cat.icon}`}></i>
                                                </div>
                                                <div>
                                                    <h3 className="font-extrabold text-[17.5px] !text-white" style={{ color: '#ffffff' }}>{cat.title}</h3>
                                                    <span className="text-[10.5px] font-bold text-sky-300/70 uppercase tracking-widest block">Stack Category</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Tech Item Cards */}
                                        <div className="space-y-3 flex-1">
                                            {cat.items.map((tech, idx) => (
                                                <div
                                                    key={idx}
                                                    className="bg-[#040d2a] hover:bg-gradient-to-r hover:from-blue-900/60 hover:to-indigo-900/40 border border-blue-500/20 hover:border-sky-400/50 p-4 rounded-2xl flex items-start gap-3.5 transition-all duration-300 shadow-sm hover:shadow-md group/tech"
                                                >
                                                    <div className="w-9 h-9 rounded-xl bg-blue-500/15 border border-blue-400/30 text-sky-300 text-base flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 group-hover/tech:scale-110 group-hover/tech:bg-blue-600 group-hover/tech:text-white">
                                                        {tech.name === "React" ? (
                                                            <svg className="w-5 h-5" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
                                                                <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
                                                                <g stroke="currentColor" strokeWidth="1" fill="none">
                                                                    <ellipse rx="11" ry="4.2"/>
                                                                    <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                                                                    <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                                                                </g>
                                                            </svg>
                                                        ) : (
                                                            <i className={`bi ${tech.icon}`}></i>
                                                        )}
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="font-bold text-[14.5px] !text-white group-hover/tech:text-sky-300 transition-colors flex items-center justify-between" style={{ color: '#ffffff' }}>
                                                            <span className="truncate">{tech.name}</span>
                                                            <i className="bi bi-arrow-right-short text-base text-blue-400/60 group-hover/tech:text-sky-300 group-hover/tech:translate-x-1 transition-all duration-300"></i>
                                                        </div>
                                                        <p className="text-[12px] !text-slate-300 leading-snug font-normal mt-1" style={{ color: '#cbd5e1' }}>
                                                            {tech.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>

            {/* 7. AI USE CASES & SUCCESS STORIES */}
            <section className="py-[90px] bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="section-heading text-center max-w-[720px] mx-auto mb-14">
                        <span className="inline-flex items-center gap-1 bg-blue-50 px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-700 uppercase tracking-widest mb-3 border border-blue-200">
                            Case Studies
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold !text-[#011146] mb-4" style={{ color: '#011146' }}>
                            AI Use Cases &amp; Success Stories
                        </h2>
                        <p className="!text-slate-600 text-[16.5px]" style={{ color: '#475569' }}>
                            Real Business Problems Solved with AI across various domains.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* 1. AI Customer Support */}
                        <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all">
                            <span className="text-xs font-bold bg-blue-50 text-blue-700 px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block border border-blue-100">Support</span>
                            <h3 className="text-xl font-bold !text-[#011146] mb-3" style={{ color: '#011146' }}>AI Customer Support</h3>
                            <div className="space-y-3 text-[14.5px]">
                                <div><strong className="text-slate-900">Challenge:</strong> <span className="text-slate-600">Customers experienced delayed responses and inconsistent support.</span></div>
                                <div><strong className="text-slate-900">Solution:</strong> <span className="text-slate-600">Implemented an AI chatbot with natural language understanding and API integration for 24/7 assistance.</span></div>
                                <div><strong className="text-slate-900">Technology:</strong> <span className="text-blue-600 font-bold">LLM, NLP, API Integration</span></div>
                                <div className="bg-emerald-50 text-emerald-900 p-3.5 rounded-xl font-medium border border-emerald-200">
                                    <strong>Result:</strong> Reduced response times, increased customer satisfaction, and improved support efficiency.
                                </div>
                            </div>
                        </div>

                        {/* 2. AI Business Automation */}
                        <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all">
                            <span className="text-xs font-bold bg-blue-50 text-blue-700 px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block border border-blue-100">Operations</span>
                            <h3 className="text-xl font-bold !text-[#011146] mb-3" style={{ color: '#011146' }}>AI Business Automation</h3>
                            <div className="space-y-3 text-[14.5px]">
                                <div><strong className="text-slate-900">Challenge:</strong> <span className="text-slate-600">Manual workflows slowed operations and increased errors.</span></div>
                                <div><strong className="text-slate-900">Solution:</strong> <span className="text-slate-600">Developed intelligent AI automation for repetitive business processes.</span></div>
                                <div><strong className="text-slate-900">Technology:</strong> <span className="text-blue-600 font-bold">Python, LangChain, Custom Workflows</span></div>
                                <div className="bg-emerald-50 text-emerald-900 p-3.5 rounded-xl font-medium border border-emerald-200">
                                    <strong>Result:</strong> Faster operations, reduced manual work, and improved productivity.
                                </div>
                            </div>
                        </div>

                        {/* 3. AI Data Analytics */}
                        <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all">
                            <span className="text-xs font-bold bg-blue-50 text-blue-700 px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block border border-blue-100">Analytics</span>
                            <h3 className="text-xl font-bold !text-[#011146] mb-3" style={{ color: '#011146' }}>AI Data Analytics</h3>
                            <div className="space-y-3 text-[14.5px]">
                                <div><strong className="text-slate-900">Challenge:</strong> <span className="text-slate-600">Large volumes of business data made decision-making difficult.</span></div>
                                <div><strong className="text-slate-900">Solution:</strong> <span className="text-slate-600">Created AI-powered analytics dashboards with predictive insights.</span></div>
                                <div><strong className="text-slate-900">Technology:</strong> <span className="text-blue-600 font-bold">PyTorch, Data Pipelines, BI Integration</span></div>
                                <div className="bg-emerald-50 text-emerald-900 p-3.5 rounded-xl font-medium border border-emerald-200">
                                    <strong>Result:</strong> Improved reporting accuracy and faster business decisions.
                                </div>
                            </div>
                        </div>

                        {/* 4. AI Content & Marketing */}
                        <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all">
                            <span className="text-xs font-bold bg-blue-50 text-blue-700 px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block border border-blue-100">Marketing</span>
                            <h3 className="text-xl font-bold !text-[#011146] mb-3" style={{ color: '#011146' }}>AI Content &amp; Marketing</h3>
                            <div className="space-y-3 text-[14.5px]">
                                <div><strong className="text-slate-900">Challenge:</strong> <span className="text-slate-600">Content creation required significant time and resources.</span></div>
                                <div><strong className="text-slate-900">Solution:</strong> <span className="text-slate-600">Implemented AI-powered content generation and marketing automation tools.</span></div>
                                <div><strong className="text-slate-900">Technology:</strong> <span className="text-blue-600 font-bold">Generative AI, GPT-4, Custom Prompting</span></div>
                                <div className="bg-emerald-50 text-emerald-900 p-3.5 rounded-xl font-medium border border-emerald-200">
                                    <strong>Result:</strong> Accelerated campaign execution and increased marketing efficiency.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. WHY BUSINESSES TRUST SYSCORP */}
            <section className="py-[90px] bg-white border-b border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-5">
                            <span className="inline-flex items-center gap-1 bg-blue-50 px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-700 uppercase tracking-widest mb-3 border border-blue-200">
                                Why Choose Us
                            </span>
                            <h2 className="text-3xl md:text-5xl font-extrabold !text-[#011146] mb-4 leading-tight" style={{ color: '#011146' }}>
                                Why Businesses Trust Syscorp
                            </h2>
                            <p className="!text-slate-600 text-[16px] leading-relaxed mb-6" style={{ color: '#475569' }}>
                                <strong className="text-[#011146]">Your Trusted AI Development Partner:</strong> Businesses choose Syscorp because we combine AI expertise with practical business solutions that deliver measurable results.
                            </p>
                            <a href="#contact" className="px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all inline-flex items-center gap-2 text-[14.5px] shadow-md shadow-blue-600/20">
                                Partner With Us <i className="bi bi-arrow-right"></i>
                            </a>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    "Experienced AI developers",
                                    "Custom AI solutions built for your business",
                                    "Secure and scalable AI architecture",
                                    "Agile development methodology",
                                    "Seamless AI integration",
                                    "Continuous maintenance and support",
                                    "Modern AI technologies and cloud platforms",
                                    "Focus on long-term business growth"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200/90 shadow-xs">
                                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold border border-emerald-200">
                                            <i className="bi bi-check-lg"></i>
                                        </div>
                                        <span className="font-bold !text-[#011146] text-[14.5px]" style={{ color: '#011146' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* FREQUENTLY ASKED QUESTIONS */}
            <section className="py-24 bg-[#F8FAFC] border-b border-slate-200">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                        {/* Left Info Column */}
                        <div className="lg:w-5/12">
                            <div className="sticky top-28">
                                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100 text-xs font-bold uppercase tracking-wider mb-6">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                                    Frequently Asked Questions
                                </span>
                                
                                <h2 className="text-3xl md:text-5xl font-extrabold !text-[#011146] mb-6 leading-tight" style={{ color: '#011146' }}>
                                    Your Questions <br />
                                    <span className="text-blue-600">Answered</span>
                                </h2>
                                
                                <p className="!text-slate-500 text-lg leading-relaxed mb-10" style={{ color: '#64748b' }}>
                                    Find clear, honest answers to common questions from our team of experienced professionals.
                                </p>
                                
                                <hr className="border-slate-200 mb-8" />
                                
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-3">
                                        <div className="w-12 h-12 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative shadow-sm">
                                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop" alt="Expert" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="w-12 h-12 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative shadow-sm">
                                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop" alt="Expert" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="w-12 h-12 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative shadow-sm">
                                            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100&auto=format&fit=crop" alt="Expert" className="w-full h-full object-cover" />
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

                        {/* Right Accordion Column */}
                        <div className="lg:w-7/12">
                            <div className="space-y-4">
                                {faqs.map((faq, index) => {
                                    const isOpen = openFaq === index;
                                    return (
                                        <div
                                            key={index}
                                            className={`rounded-[20px] border transition-all duration-300 overflow-hidden bg-white ${isOpen ? "border-blue-600 shadow-md shadow-blue-900/5" : "border-slate-200 hover:border-slate-300"}`}
                                        >
                                            <button
                                                onClick={() => setOpenFaq(isOpen ? null : index)}
                                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group bg-white"
                                            >
                                                <h3 className="text-[16px] font-bold !text-[#011146] pr-8 group-hover:text-blue-600 transition-colors duration-300" style={{ color: '#011146' }}>
                                                    {index + 1}. {faq.q}
                                                </h3>
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'}`}>
                                                    <span className="text-xl font-light leading-none relative -top-[1px]">{isOpen ? '-' : '+'}</span>
                                                </div>
                                            </button>
                                            <div
                                                className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                                            >
                                                <div className="overflow-hidden">
                                                    <div className="px-6 pb-6 pt-2 !text-slate-600 text-[15px] leading-relaxed" style={{ color: '#475569' }}>
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
                </div>
            </section>

            {/* 10. AI CONSULTATION CTA */}
            <section id="contact" className="relative py-24 overflow-hidden bg-[#011146]">
                <video className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen" autoPlay muted loop playsInline>
                    <source src="https://videos.pexels.com/video-files/3129957/3129957-uhd_3840_2160_25fps.mp4" type="video/mp4" />
                </video>
                
                <div className="absolute inset-0 bg-gradient-to-b from-[#011146] via-transparent to-[#011146]"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#011146] via-transparent to-[#011146]"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto relative">
                        <div className="relative bg-[#0a1229]/95 backdrop-blur-3xl border border-sky-400/30 rounded-[2.5rem] p-10 md:p-16 overflow-hidden shadow-[0_0_80px_rgba(14,165,233,0.2)]">
                            <div className="relative z-10">
                                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-[13px] font-bold tracking-[0.2em] uppercase mb-6">
                                    <i className="bi bi-stars"></i> AI Consultation CTA
                                </span>
                                
                                <h2 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold !text-white mb-6 tracking-tight leading-[1.15]" style={{ color: '#ffffff' }}>
                                    Ready to Transform Your Business with AI?
                                </h2>
                                
                                <p className="text-[17px] !text-slate-200 max-w-2xl mx-auto mb-4 leading-relaxed font-normal" style={{ color: '#e2e8f0' }}>
                                    Whether you're looking to automate workflows, build AI-powered applications, integrate intelligent chatbots, or implement advanced analytics, our AI experts are ready to help you achieve your business goals.
                                </p>
                                <p className="text-[17px] text-sky-400 font-bold mb-10">
                                    Let's build intelligent solutions that drive innovation and long-term growth.
                                </p>
                                
                                <div className="flex flex-wrap justify-center gap-4">
                                    <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-[0_10px_30px_rgba(37,99,235,0.4)]">
                                        Get Free Consultation <i className="bi bi-arrow-right text-lg"></i>
                                    </Link>
                                    <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/20">
                                        Talk to AI Experts
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="lazyOnload" />
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
            <Script src="/aiservice/js/script.js" strategy="lazyOnload" />
        </div>
    );
}
