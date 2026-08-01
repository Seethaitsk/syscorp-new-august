"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";

const services = [
    {
        key: 'chatbot',
        icon: 'bi-chat-dots',
        img: '/aiservice/images/Chatbot.jpeg',
        title: 'AI chatbot development',
        tagline: 'Intelligent customer engagement through chatbots that give instant, accurate, personalized responses across web, mobile, and messaging.',
        offer: ['Website chatbots', 'Customer support automation', 'WhatsApp & social media bots', 'Lead generation chatbots', 'Appointment booking assistants'],
        benefits: ['24/7 support', 'Faster responses', 'Lower operational cost', 'Higher satisfaction'],
        scenario: 'A customer visits an e-commerce site at midnight asking about order #45892. The chatbot retrieves the order instantly: "Your order was shipped today and arrives June 28. Here\'s your tracking link" — no agent required.'
    },
    {
        key: 'agents',
        icon: 'bi-robot',
        img: '/aiservice/images/customai.jpeg',
        title: 'Custom AI agents',
        tagline: 'Smart digital assistants that handle complex tasks, retrieve information, and automate business workflows end to end.',
        offer: ['HR assistants', 'Sales assistants', 'Internal knowledge agents', 'Workflow automation agents', 'Customer service agents'],
        benefits: ['Higher productivity', 'Less manual work', 'Faster decisions', 'Operational efficiency'],
        scenario: 'An HR team fields hundreds of questions on leave, payroll, and benefits. An AI HR assistant answers directly: "You currently have 8 casual leaves available this year" — pulled straight from policy.'
    },
    {
        key: 'genai',
        icon: 'bi-magic',
        img: '/aiservice/images/genai.jpeg',
        title: 'Generative AI solutions',
        tagline: 'High-quality content, reports, marketing materials, and business documents generated with advanced generative AI.',
        offer: ['Content generation', 'Marketing copy', 'Product descriptions', 'Business documentation', 'Report summarization'],
        benefits: ['Faster production', 'Improved creativity', 'Consistent messaging', 'Lower content cost'],
        scenario: 'A marketing team needs descriptions for 500 products. Input: "Wireless Bluetooth headphones with noise cancellation." Output: SEO-friendly copy generated at scale, in brand voice, instantly.'
    },
    {
        key: 'automation',
        icon: 'bi-diagram-2',
        img: '/aiservice/images/ai_assistant.png',
        title: 'AI workflow automation',
        tagline: 'Eliminate manual tasks across documents, invoices, emails, and approvals with AI-powered workflow automation.',
        offer: ['Document processing', 'Invoice automation', 'Email automation', 'Data entry automation', 'Approval workflows'],
        benefits: ['Fewer errors', 'Faster operations', 'Lower cost', 'Better process efficiency'],
        scenario: 'Accounting processes hundreds of invoices monthly. AI reads each invoice, extracts vendor, amount and date, enters it into the ERP, then routes it for manager approval — automatically.'
    },
    {
        key: 'analytics',
        icon: 'bi-bar-chart-line',
        img: '/aiservice/images/ai_brain.png',
        title: 'Data analytics & business intelligence',
        tagline: 'AI-powered analytics that turn raw data into actionable insight using real-time and predictive intelligence.',
        offer: ['Business dashboards', 'Predictive analytics', 'Sales forecasting', 'Customer insights', 'Performance reporting'],
        benefits: ['Better decisions', 'New revenue opportunities', 'More visibility', 'Accurate forecasts'],
        scenario: 'A retailer wants next month\'s sales forecast. With Jan ₹8L, Feb ₹9L, Mar ₹11L in hand, the model predicts April at ₹12.5L — informing inventory before demand hits.'
    },
    {
        key: 'vision',
        icon: 'bi-camera-video',
        img: '/aiservice/images/ai_assistant.png',
        title: 'Computer vision solutions',
        tagline: 'Intelligent image and video analysis that automates inspection, strengthens security, and improves accuracy.',
        offer: ['Object detection', 'Face recognition', 'OCR solutions', 'Quality inspection systems', 'Video analytics'],
        benefits: ['Automated monitoring', 'Stronger security', 'Higher accuracy', 'Less manual inspection'],
        scenario: 'On a production line, cameras capture every unit. The system flags scratches, missing parts, and incorrect dimensions — removing defective items automatically, no human inspector needed.'
    },
    {
        key: 'nlp',
        icon: 'bi-translate',
        img: '/aiservice/images/ai_brain.png',
        title: 'Natural language processing',
        tagline: 'NLP that helps organizations understand, process, and analyze text and speech data effectively.',
        offer: ['Sentiment analysis', 'Language translation', 'Speech recognition', 'Text classification', 'Document summarization'],
        benefits: ['Better customer understanding', 'Faster processing', 'Better UX', 'Actionable insight'],
        scenario: 'Thousands of reviews arrive monthly. NLP reads "the product quality is excellent, but delivery was delayed" and tags it: product sentiment positive, delivery sentiment negative — automatically.'
    },
    {
        key: 'consulting',
        icon: 'bi-lightbulb',
        img: '/aiservice/images/ai_assistant.png',
        title: 'AI consulting & strategy',
        tagline: 'Identify AI opportunities, build an implementation strategy, and maximize ROI with a future-ready roadmap.',
        offer: ['AI readiness assessment', 'AI strategy development', 'Technology consulting', 'Solution architecture', 'AI adoption planning'],
        benefits: ['Lower implementation risk', 'Faster adoption', 'Higher ROI', 'Long-term growth'],
        scenario: 'A logistics company wants AI but doesn\'t know where to start. Our team maps the highest-value opportunities: a customer chatbot, route optimization, predictive maintenance, and invoice automation.'
    }
];

export default function AiServicePage() {
    const [activeServiceKey, setActiveServiceKey] = useState('chatbot');
    const activeService = services.find(s => s.key === activeServiceKey);
    useEffect(() => {
        // Add aiservice-specific class to body for scoping if needed
        document.body.classList.add("aiservice-page");
        return () => {
            document.body.classList.remove("aiservice-page");
        };
    }, []);

    return (
        <div className="aiservice-wrapper">
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
                href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
                rel="stylesheet"
            />
            {/* Removed the global bootstrap.min.css so it stops conflicting with Tailwind! */}
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet" />
            <link rel="stylesheet" href="/aiservice/css/style.css?v=2" />

            <style dangerouslySetInnerHTML={{
                __html: `
                /* Minimal classes to make the accordion work without Bootstrap's main CSS file */
                .collapse:not(.show) { display: none; }
                .collapsing { height: 0; overflow: hidden; transition: height 0.35s ease; }
            `}} />

            {/* HERO */}
            <header id="top" className="hero flex items-center relative min-h-[100vh] overflow-hidden">
                <video className="hero-video absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
                    <source src="/aiservice/images/banner4.mp4" type="video/mp4" />
                </video>
                <div className="hero-overlay absolute inset-0 z-0"></div>

                <div className="container mx-auto px-4 relative z-10 hero-content text-center pt-24 pb-16">
                    <div className="flex flex-wrap justify-center items-center">
                        <div className="w-full lg:w-10/12 px-4">
                            <span className="badge-eyebrow inline-flex items-center text-[13px] font-medium text-sky-400 bg-sky-400/10 border border-sky-400/30 px-4 py-1.5 rounded-full mb-[22px]">
                                <i className="bi bi-stars mr-1"></i> AI market trends, 2026
                            </span>
                            <h1 className="hero-title text-4xl md:text-[62px] leading-[1.08] font-bold text-white mb-[22px]">
                                AI solutions built for<br /><span className="text-gradient">measurable business value</span>
                            </h1>
                            <p className="hero-sub mx-auto text-[19px] font-medium text-white max-w-[600px] mb-[34px] leading-[1.6]">
                                From intelligent chatbots to enterprise-scale automation — we design, build, and deploy
                                secure, production-ready AI across healthcare, finance, retail, manufacturing, and more.
                            </p>
                            <div className="hero-btns flex flex-wrap justify-center gap-5 mb-10">
                                <a href="#services" className="btn-primary-glow px-[26px] py-[12px] rounded-lg text-white font-medium inline-block shadow-none transition-all">
                                    Explore services <i className="bi bi-arrow-right ml-1"></i>
                                </a>
                                <a href="#contact" className="btn-outline-light-custom px-[26px] py-[12px] rounded-lg text-white font-medium inline-block transition-all">Talk to our AI team</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="scroll-cue absolute bottom-7 left-1/2 -translate-x-1/2 text-white/50 text-[22px] z-10" aria-hidden="true">
                    <i className="bi bi-chevron-down"></i>
                </div>
            </header>

            {/* DIGITAL EXPERIENCES */}
            <section className="section-digital-experiences bg-white py-[100px] overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        {/* Left Column: Image Composition */}
                        <div className="lg:col-span-5 relative">
                            <div className="experience-img-wrap relative">
                                <img src="/aiservice/images/people_working.png" alt="Team working" className="main-exp-img w-full h-auto rounded-xl" />

                                <div className="floating-badge badge-top-right shadow-sm absolute -top-4 -right-4 bg-white px-4 py-2.5 rounded-xl flex items-center gap-2 font-bold text-[14px]">
                                    <div className="badge-dot w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                                    <span>Active Clients 320+</span>
                                </div>

                                <div className="floating-badge badge-bottom-left shadow absolute -bottom-8 -left-4 bg-white p-4 rounded-xl w-44">
                                    <i className="bi bi-graph-up-arrow text-blue-500 text-2xl mb-1 block"></i>
                                    <div>
                                        <strong className="block text-[#011146] mb-1 font-bold text-lg">83.8% Success</strong>
                                        <div className="mini-chart flex gap-1 mt-[6px]">
                                            <span className="h-1.5 w-full bg-blue-600 rounded-full"></span>
                                            <span className="h-1.5 w-full bg-sky-400 rounded-full"></span>
                                            <span className="h-1.5 w-full bg-blue-200 rounded-full"></span>
                                            <span className="h-1.5 w-full bg-slate-100 rounded-full"></span>
                                        </div>
                                    </div>
                                </div>

                                <img src="/aiservice/images/laptop_code.png" alt="Laptop Code" className="overlap-exp-img shadow-lg absolute -bottom-16 -right-8 w-2/3 rounded-xl hidden md:block" />
                            </div>
                        </div>

                        {/* Right Column: Content & 6 Cards */}
                        <div className="lg:col-span-7 pt-12 lg:pt-0">
                            <div className="mb-6">
                                <span className="eyebrow-pill shadow-sm inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full text-xs font-bold text-blue-500 uppercase tracking-widest mb-4 border border-slate-100"><i className="bi bi-bar-chart-fill"></i> MARKET TRENDS 2026</span>
                                <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 leading-tight" style={{ color: "var(--ink)", letterSpacing: "-1px" }}>
                                    AI has moved from experiment to <span className="text-blue-500">core infrastructure</span>
                                </h2>
                                <p style={{ color: "var(--muted)", fontSize: "15.5px", lineHeight: "1.7" }}>
                                    Eight shifts defining how organizations deploy AI at scale — sourced from Stanford HAI and DataForest.
                                </p>
                            </div>

                            <div className="experience-cards-grid grid sm:grid-cols-2 gap-5 mt-4">
                                {/* Card 1 */}
                                <div className="group h-full">
                                    <div className="exp-card relative bg-white p-6 rounded-2xl border border-slate-100 transition-all duration-500 ease-out group-hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.15)] group-hover:border-sky-100 group-hover:-translate-y-1.5 transform-gpu h-full">
                                        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none rounded-2xl"></div>
                                        <div className="relative z-10">
                                            <div className="exp-icon-wrap w-11 h-11 bg-sky-50 rounded-xl flex items-center justify-center text-blue-500 mb-4 transition-all duration-500 ease-out group-hover:bg-blue-500 group-hover:text-white group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-md transform-gpu">
                                                <i className="bi bi-diagram-3 text-lg"></i>
                                            </div>
                                            <div className="exp-card-content">
                                                <h4 className="exp-card-title font-bold text-[17px] mb-2 text-[#011146] transition-colors duration-300 ease-out group-hover:text-blue-600">Agentic AI</h4>
                                                <p className="exp-card-desc text-[14.5px] text-slate-500 leading-relaxed transition-colors duration-300 ease-out group-hover:text-slate-600">AI agents complete full workflows, not just answers — checking CRMs, updating records, closing the loop.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Card 2 */}
                                <div className="group h-full">
                                    <div className="exp-card relative bg-white p-6 rounded-2xl border border-slate-100 transition-all duration-500 ease-out group-hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.15)] group-hover:border-sky-100 group-hover:-translate-y-1.5 transform-gpu h-full">
                                        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none rounded-2xl"></div>
                                        <div className="relative z-10">
                                            <div className="exp-icon-wrap w-11 h-11 bg-sky-50 rounded-xl flex items-center justify-center text-blue-500 mb-4 transition-all duration-500 ease-out group-hover:bg-blue-500 group-hover:text-white group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-md transform-gpu">
                                                <i className="bi bi-magic text-lg"></i>
                                            </div>
                                            <div className="exp-card-content">
                                                <h4 className="exp-card-title font-bold text-[17px] mb-2 text-[#011146] transition-colors duration-300 ease-out group-hover:text-blue-600">Generative AI</h4>
                                                <p className="exp-card-desc text-[14.5px] text-slate-500 leading-relaxed transition-colors duration-300 ease-out group-hover:text-slate-600">From marketing copy to software development, generative AI is now a default business capability.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Card 3 */}
                                <div className="group h-full">
                                    <div className="exp-card relative bg-white p-6 rounded-2xl border border-slate-100 transition-all duration-500 ease-out group-hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.15)] group-hover:border-sky-100 group-hover:-translate-y-1.5 transform-gpu h-full">
                                        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none rounded-2xl"></div>
                                        <div className="relative z-10">
                                            <div className="exp-icon-wrap w-11 h-11 bg-sky-50 rounded-xl flex items-center justify-center text-blue-500 mb-4 transition-all duration-500 ease-out group-hover:bg-blue-500 group-hover:text-white group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-md transform-gpu">
                                                <i className="bi bi-gear-wide-connected text-lg"></i>
                                            </div>
                                            <div className="exp-card-content">
                                                <h4 className="exp-card-title font-bold text-[17px] mb-2 text-[#011146] transition-colors duration-300 ease-out group-hover:text-blue-600">AI-powered automation</h4>
                                                <p className="exp-card-desc text-[14.5px] text-slate-500 leading-relaxed transition-colors duration-300 ease-out group-hover:text-slate-600">Invoices, onboarding, procurement — repetitive processes are increasingly run end-to-end by AI.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Card 4 */}
                                <div className="group h-full">
                                    <div className="exp-card relative bg-white p-6 rounded-2xl border border-slate-100 transition-all duration-500 ease-out group-hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.15)] group-hover:border-sky-100 group-hover:-translate-y-1.5 transform-gpu h-full">
                                        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none rounded-2xl"></div>
                                        <div className="relative z-10">
                                            <div className="exp-icon-wrap w-11 h-11 bg-sky-50 rounded-xl flex items-center justify-center text-blue-500 mb-4 transition-all duration-500 ease-out group-hover:bg-blue-500 group-hover:text-white group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-md transform-gpu">
                                                <i className="bi bi-graph-up-arrow text-lg"></i>
                                            </div>
                                            <div className="exp-card-content">
                                                <h4 className="exp-card-title font-bold text-[17px] mb-2 text-[#011146] transition-colors duration-300 ease-out group-hover:text-blue-600">AI + BI</h4>
                                                <p className="exp-card-desc text-[14.5px] text-slate-500 leading-relaxed transition-colors duration-300 ease-out group-hover:text-slate-600">Dashboards evolve into advisors — organizations ask AI "what should we do next?" not just "what happened?"</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 flex flex-wrap items-center gap-4">
                                <a href="#contact" className="bg-[#0a1329] text-white rounded-full px-6 py-2.5 font-semibold text-sm inline-flex items-center transition hover:bg-black">
                                    More About Us <i className="bi bi-arrow-up-right ml-1.5"></i>
                                </a>
                                <div className="flex items-center gap-2 lg:ml-4 text-[14px] font-medium" style={{ color: "var(--muted)" }}>
                                    <div className="w-6 h-6 rounded-full bg-sky-400/10 flex items-center justify-center text-blue-500">
                                        <i className="bi bi-chat-dots-fill text-[12px]"></i>
                                    </div>
                                    Let's make something great work together. <a href="#contact" className="text-[#011146] font-bold border-b border-[#011146] ml-1 pb-0.5 hover:text-blue-500 hover:border-blue-500 transition no-underline">Get Free Quote</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AGENTIC AI FLOW */}
            <section className="section-flow py-[60px]" style={{ background: "var(--navy)" }}>
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="reveal">
                            <span className="badge-eyebrow inline-flex items-center gap-2 text-[13px] font-medium text-blue-500 bg-sky-400/10 border border-sky-400/30 px-4 py-1.5 rounded-full mb-[22px]">
                                <span className="hud-dot"></span> Example workflow — live
                            </span>
                            <h2 className="text-[28px] md:text-[38px] font-bold mb-[14px]" style={{ color: 'var(--ink)' }}>An AI agent handling a real customer request</h2>
                            <p className="text-muted-blue mb-8">Instead of answering questions only, coordinated AI agents now
                                complete
                                the entire process — the next step organizations are taking in enterprise automation.</p>
                            <div className="agent-robot-wrap w-full mt-6 text-center">
                                <img src="/aiservice/images/Live chatbot.svg" className="max-w-full h-auto floating-img mx-auto"
                                    style={{ maxHeight: "360px", objectFit: "contain", filter: "drop-shadow(0 10px 20px rgba(14,165,233,0.2))" }}
                                    alt="Live Chatbot AI Flow" />
                            </div>
                        </div>
                        <div className="reveal reveal-delay-1">
                            <div className="flow-diagram mx-auto max-w-[380px]" id="flowDiagram">
                                <div className="flow-step" data-step="0">
                                    <i className="bi bi-person"></i> Customer request
                                </div>
                                <div className="flow-arrow"><i className="bi bi-arrow-down"></i></div>
                                <div className="flow-step" data-step="1">
                                    <i className="bi bi-robot"></i> AI agent
                                </div>
                                <div className="flow-arrow"><i className="bi bi-arrow-down"></i></div>
                                <div className="flow-step" data-step="2">
                                    <i className="bi bi-database"></i> Checks CRM &amp; retrieves data
                                </div>
                                <div className="flow-arrow"><i className="bi bi-arrow-down"></i></div>
                                <div className="flow-step" data-step="3">
                                    <i className="bi bi-chat-square-text"></i> Generates response
                                </div>
                                <div className="flow-arrow"><i className="bi bi-arrow-down"></i></div>
                                <div className="flow-step" data-step="4">
                                    <i className="bi bi-check-circle"></i> Updates CRM automatically
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* INDUSTRIES STRIP */}
            <section id="industries" className="section-industries py-[48px] bg-white">
                <div className="container mx-auto px-4">
                    <div className="section-heading text-center max-w-[680px] mx-auto mb-12 reveal">
                        <span className="eyebrow-mono">Who we build for</span>
                        <h2>Target industries</h2>
                    </div>
                    <div className="bento-grid reveal">
                        <div className="bento-card bento-wide">
                            <img src="/aiservice/images/Healthcare.jpeg" className="bento-img" alt="Healthcare" />
                            <div className="bento-overlay">
                                <div className="bento-badge"><i className="bi bi-arrow-up-right"></i></div>
                                <div className="bento-text-wrap">
                                    <span className="bento-category">Health & Food</span>
                                    <h4 className="bento-title">Health Care Program</h4>
                                </div>
                            </div>
                        </div>
                        <div className="bento-card bento-tall">
                            <img src="/aiservice/images/education.png" className="bento-img" alt="Education" />
                            <div className="bento-overlay">
                                <div className="bento-badge"><i className="bi bi-arrow-up-right"></i></div>
                                <div className="bento-text-wrap">
                                    <span className="bento-category">Education & Food</span>
                                    <h4 className="bento-title">Education & Safety Program</h4>
                                </div>
                            </div>
                        </div>
                        <div className="bento-card">
                            <img src="/aiservice/images/finance.jpeg" className="bento-img" alt="Finance" />
                            <div className="bento-overlay">
                                <div className="bento-badge"><i className="bi bi-arrow-up-right"></i></div>
                                <div className="bento-text-wrap">
                                    <span className="bento-category">Finance & Tech</span>
                                    <h4 className="bento-title">Smart Finance Solutions</h4>
                                </div>
                            </div>
                        </div>
                        <div className="bento-card bento-tall">
                            <img src="/aiservice/images/logistics.png" className="bento-img" alt="Logistics" />
                            <div className="bento-overlay">
                                <div className="bento-badge"><i className="bi bi-arrow-up-right"></i></div>
                                <div className="bento-text-wrap">
                                    <span className="bento-category">Transport & Food</span>
                                    <h4 className="bento-title">Transport & Food Program</h4>
                                </div>
                            </div>
                        </div>
                        <div className="bento-card">
                            <img src="/aiservice/images/Retail.jpeg" className="bento-img" alt="Retail" />
                            <div className="bento-overlay">
                                <div className="bento-badge"><i className="bi bi-arrow-up-right"></i></div>
                                <div className="bento-text-wrap">
                                    <span className="bento-category">Retail & Commerce</span>
                                    <h4 className="bento-title">Next-Gen Retail</h4>
                                </div>
                            </div>
                        </div>
                        <div className="bento-card bento-wide">
                            <img src="/aiservice/images/manufacturing.jpeg" className="bento-img" alt="Manufacturing" />
                            <div className="bento-overlay">
                                <div className="bento-badge"><i className="bi bi-arrow-up-right"></i></div>
                                <div className="bento-text-wrap">
                                    <span className="bento-category">Industrial AI</span>
                                    <h4 className="bento-title">Smart Manufacturing</h4>
                                </div>
                            </div>
                        </div>
                        <div className="bento-card">
                            <img src="/aiservice/images/realestate.png" className="bento-img" alt="Real Estate" />
                            <div className="bento-overlay">
                                <div className="bento-badge"><i className="bi bi-arrow-up-right"></i></div>
                                <div className="bento-text-wrap">
                                    <span className="bento-category">Property Tech</span>
                                    <h4 className="bento-title">Real Estate AI</h4>
                                </div>
                            </div>
                        </div>
                        <div className="bento-card bento-wide">
                            <img src="/aiservice/images/it.png" className="bento-img" alt="IT" />
                            <div className="bento-overlay">
                                <div className="bento-badge"><i className="bi bi-arrow-up-right"></i></div>
                                <div className="bento-text-wrap">
                                    <span className="bento-category">Technology & Ops</span>
                                    <h4 className="bento-title">IT Infrastructure Modernization</h4>
                                </div>
                            </div>
                        </div>
                        <div className="bento-card bento-tall">
                            <img src="/aiservice/images/hospitality.png" className="bento-img" alt="Hospitality" />
                            <div className="bento-overlay">
                                <div className="bento-badge"><i className="bi bi-arrow-up-right"></i></div>
                                <div className="bento-text-wrap">
                                    <span className="bento-category">Travel & Leisure</span>
                                    <h4 className="bento-title">Smart Hospitality</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section id="services" className="section-services py-[60px] relative" style={{ background: "var(--navy)" }}>
                <div className="doodle-bg absolute inset-0 overflow-hidden pointer-events-none opacity-10">
                    <i className="bi bi-robot absolute" style={{ top: '10%', left: '5%', fontSize: '4rem', transform: 'rotate(-15deg)' }}></i>
                    <i className="bi bi-cpu absolute" style={{ top: '8%', left: '30%', fontSize: '3rem', transform: 'rotate(10deg)' }}></i>
                    <i className="bi bi-diagram-3 absolute" style={{ top: '25%', left: '15%', fontSize: '3.5rem', transform: 'rotate(-5deg)' }}></i>
                    <i className="bi bi-motherboard absolute" style={{ top: '40%', left: '40%', fontSize: '5rem', transform: 'rotate(0deg)' }}></i>
                    <i className="bi bi-magic absolute" style={{ top: '15%', left: '70%', fontSize: '3.5rem', transform: 'rotate(20deg)' }}></i>
                    <i className="bi bi-bar-chart-steps absolute" style={{ top: '30%', left: '55%', fontSize: '3rem', transform: 'rotate(-10deg)' }}></i>
                    <i className="bi bi-database absolute" style={{ top: '55%', left: '10%', fontSize: '3.5rem', transform: 'rotate(-25deg)' }}></i>
                    <i className="bi bi-hdd-network absolute" style={{ top: '70%', left: '25%', fontSize: '3rem', transform: 'rotate(15deg)' }}></i>
                    <i className="bi bi-bezier2 absolute" style={{ top: '50%', left: '80%', fontSize: '4rem', transform: 'rotate(30deg)' }}></i>
                    <i className="bi bi-fingerprint absolute" style={{ top: '85%', left: '15%', fontSize: '3rem', transform: 'rotate(-10deg)' }}></i>
                    <i className="bi bi-code-slash absolute" style={{ top: '75%', left: '45%', fontSize: '3.5rem', transform: 'rotate(5deg)' }}></i>
                    <i className="bi bi-soundwave absolute" style={{ top: '65%', left: '70%', fontSize: '3rem', transform: 'rotate(45deg)' }}></i>
                    <i className="bi bi-lightning-charge absolute" style={{ top: '85%', left: '60%', fontSize: '4rem', transform: 'rotate(-15deg)' }}></i>
                    <i className="bi bi-braces-asterisk absolute" style={{ top: '90%', left: '35%', fontSize: '2rem', transform: 'rotate(20deg)' }}></i>
                    <i className="bi bi-person-bounding-box absolute" style={{ top: '45%', left: '65%', fontSize: '2rem', transform: 'rotate(-25deg)' }}></i>
                    <i className="bi bi-shield-lock absolute" style={{ top: '60%', left: '85%', fontSize: '3.5rem', transform: 'rotate(10deg)' }}></i>
                    <i className="bi bi-translate absolute" style={{ top: '25%', left: '85%', fontSize: '4rem', transform: 'rotate(-5deg)' }}></i>
                    <i className="bi bi-cloud-arrow-up absolute" style={{ top: '5%', left: '55%', fontSize: '3rem', transform: 'rotate(5deg)' }}></i>
                    <i className="bi bi-qr-code-scan absolute" style={{ top: '40%', left: '25%', fontSize: '2.5rem', transform: 'rotate(-15deg)' }}></i>
                    <i className="bi bi-gear-wide-connected absolute" style={{ top: '80%', left: '85%', fontSize: '3rem', transform: 'rotate(25deg)' }}></i>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="section-heading text-center max-w-[680px] mx-auto mb-12 reveal">
                        <span className="eyebrow-mono text-blue-500 font-mono text-[13px] font-semibold tracking-widest uppercase block mb-3">What we build</span>
                        <h2 className="text-4xl md:text-[38px] font-bold text-[#011146] mb-3">Eight AI services, one <span className="text-gradient">consistent standard</span></h2>
                        <p className="text-muted-blue text-[16px]">Overview, offerings, benefits, and a real scenario for each — open a service
                            to see the detail.</p>
                    </div>

                    <div className="services-marquee-wrap reveal mb-10 overflow-hidden mt-8">
                        <div className="services-marquee-track">
                            {/* set 1 */}
                            <div className="service-chip" data-target="chatbot">
                                <span className="service-chip-icon"><i className="bi bi-chat-dots"></i></span>
                                <span className="service-chip-label">AI chatbot development</span>
                            </div>
                            <div className="service-chip" data-target="agents">
                                <span className="service-chip-icon"><i className="bi bi-cpu"></i></span>
                                <span className="service-chip-label">Custom AI agents</span>
                            </div>
                            <div className="service-chip" data-target="genai">
                                <span className="service-chip-icon"><i className="bi bi-magic"></i></span>
                                <span className="service-chip-label">Generative AI solutions</span>
                            </div>
                            <div className="service-chip" data-target="automation">
                                <span className="service-chip-icon"><i className="bi bi-gear-wide-connected"></i></span>
                                <span className="service-chip-label">AI workflow automation</span>
                            </div>
                            <div className="service-chip" data-target="analytics">
                                <span className="service-chip-icon"><i className="bi bi-graph-up-arrow"></i></span>
                                <span className="service-chip-label">Data analytics &amp; BI</span>
                            </div>
                            <div className="service-chip" data-target="vision">
                                <span className="service-chip-icon"><i className="bi bi-eye"></i></span>
                                <span className="service-chip-label">Computer vision solutions</span>
                            </div>
                            <div className="service-chip" data-target="nlp">
                                <span className="service-chip-icon"><i className="bi bi-translate"></i></span>
                                <span className="service-chip-label">Natural language processing</span>
                            </div>
                            <div className="service-chip" data-target="consulting">
                                <span className="service-chip-icon"><i className="bi bi-lightbulb"></i></span>
                                <span className="service-chip-label">AI consulting &amp; strategy</span>
                            </div>
                            {/* set 2 */}
                            <div className="service-chip" data-target="chatbot" aria-hidden="true">
                                <span className="service-chip-icon"><i className="bi bi-chat-dots"></i></span>
                                <span className="service-chip-label">AI chatbot development</span>
                            </div>
                            <div className="service-chip" data-target="agents" aria-hidden="true">
                                <span className="service-chip-icon"><i className="bi bi-cpu"></i></span>
                                <span className="service-chip-label">Custom AI agents</span>
                            </div>
                            <div className="service-chip" data-target="genai" aria-hidden="true">
                                <span className="service-chip-icon"><i className="bi bi-magic"></i></span>
                                <span className="service-chip-label">Generative AI solutions</span>
                            </div>
                            <div className="service-chip" data-target="automation" aria-hidden="true">
                                <span className="service-chip-icon"><i className="bi bi-gear-wide-connected"></i></span>
                                <span className="service-chip-label">AI workflow automation</span>
                            </div>
                            <div className="service-chip" data-target="analytics" aria-hidden="true">
                                <span className="service-chip-icon"><i className="bi bi-graph-up-arrow"></i></span>
                                <span className="service-chip-label">Data analytics &amp; BI</span>
                            </div>
                            <div className="service-chip" data-target="vision" aria-hidden="true">
                                <span className="service-chip-icon"><i className="bi bi-eye"></i></span>
                                <span className="service-chip-label">Computer vision solutions</span>
                            </div>
                            <div className="service-chip" data-target="nlp" aria-hidden="true">
                                <span className="service-chip-icon"><i className="bi bi-translate"></i></span>
                                <span className="service-chip-label">Natural language processing</span>
                            </div>
                            <div className="service-chip" data-target="consulting" aria-hidden="true">
                                <span className="service-chip-icon"><i className="bi bi-lightbulb"></i></span>
                                <span className="service-chip-label">AI consulting &amp; strategy</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 mt-12">
                        <div className="lg:col-span-7">
                            <div className="flex flex-col gap-4" id="servicesAccordion">
                                {services.map((s, i) => {
                                    const isOpen = activeServiceKey === s.key;
                                    return (
                                        <div key={s.key} className="bg-white border border-sky-400/20 rounded-2xl overflow-hidden transition-all duration-300 hover:border-sky-400/40">
                                            <button
                                                onClick={() => setActiveServiceKey(isOpen ? '' : s.key)}
                                                className="flex items-center w-full px-6 py-5 text-left bg-white outline-none group"
                                            >
                                                <span className="w-10 h-10 shrink-0 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-[18px] mr-4 group-hover:scale-105 transition-transform">
                                                    <i className={`bi ${s.icon}`}></i>
                                                </span>
                                                <span className={`font-semibold text-[18px] transition-colors ${isOpen ? 'text-sky-500' : 'text-[#011146] group-hover:text-sky-500'}`}>
                                                    {i + 1}. {s.title}
                                                </span>
                                                <i className={`bi bi-chevron-down ml-auto text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-sky-500' : ''}`}></i>
                                            </button>
                                            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                                <div className="overflow-hidden">
                                                    <div className="px-6 pb-7">
                                                        <p className="text-slate-500 text-[15px] mb-5">{s.tagline}</p>
                                                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                                                            <div>
                                                                <div className="text-[13px] font-bold text-sky-500 uppercase tracking-wider mb-3">What we offer</div>
                                                                <ul className="space-y-3">
                                                                    {s.offer.map((o, idx) => (
                                                                        <li key={idx} className="flex text-[14.5px] text-[#011146]">
                                                                            <i className="bi bi-check2 text-sky-500 mr-2 mt-0.5"></i>
                                                                            {o}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                            <div>
                                                                <div className="text-[13px] font-bold text-sky-500 uppercase tracking-wider mb-3">Key benefits</div>
                                                                <div className="flex flex-wrap gap-2">
                                                                    {s.benefits.map((b, idx) => (
                                                                        <span key={idx} className="bg-white border border-slate-200 text-[#011146] text-[13px] font-medium px-3.5 py-1.5 rounded-full">
                                                                            {b}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="bg-sky-50 rounded-xl p-5 text-[14.5px] text-[#011146]">
                                                            <span className="font-semibold text-sky-500 mr-1">Scenario —</span>
                                                            {s.scenario}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="lg:col-span-5 order-first lg:order-last mb-8 lg:mb-0">
                            <div className="sticky top-24 z-10">
                                <div className="services-visual shadow-lg mb-6 relative rounded-2xl overflow-hidden">
                                    <img src={activeService?.img || "/aiservice/images/Chatbot.jpeg"} className="services-visual-img w-full block transition-opacity duration-300" alt="AI service visualization"
                                        id="serviceVisualImg" />
                                    <div className="hud-frame absolute inset-3 pointer-events-none z-10">
                                        <span className="hud-corner tl"></span>
                                        <span className="hud-corner tr"></span>
                                        <span className="hud-corner bl"></span>
                                        <span className="hud-corner br"></span>
                                        <div className="hud-scanline"></div>
                                    </div>
                                    <div className="hud-chip hud-chip--1 absolute top-4 left-4 bg-white/85 backdrop-blur border border-sky-400/30 rounded-full px-3.5 py-1.5 flex items-center gap-2 text-[12.5px] z-20">
                                        <span className="hud-dot"></span> Model inference <span className="hud-val text-blue-500 font-semibold"
                                            data-target="94">0</span>%
                                    </div>
                                    <div className="hud-chip hud-chip--2 absolute bottom-4 right-4 bg-white/85 backdrop-blur border border-sky-400/30 rounded-full px-3.5 py-1.5 flex items-center gap-2 text-[12.5px] z-20">
                                        <span className="hud-dot"></span> Nodes active <span className="hud-val text-blue-500 font-semibold"
                                            data-target="128">0</span>
                                    </div>
                                </div>

                                {/* NEW LAYOUT BALANCER: Enterprise Standards Card */}
                                <div className="p-6 rounded-2xl shadow-lg reveal reveal-delay-1 bg-white border border-sky-400/20">
                                    <h4 className="mb-5 text-[16px] font-semibold text-[#011146] tracking-[0.5px]">
                                        ENTERPRISE AI STANDARDS</h4>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-4">
                                            <div
                                                className="w-11 h-11 rounded-xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center text-blue-500">
                                                <i className="bi bi-shield-check text-[20px]"></i>
                                            </div>
                                            <div>
                                                <div className="text-[14.5px] font-semibold text-[#011146]">SOC 2 Type
                                                    II Certified</div>
                                                <div className="text-[13px] text-slate-500">Bank-grade data security
                                                    &amp; privacy</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div
                                                className="w-11 h-11 rounded-xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center text-blue-500">
                                                <i className="bi bi-lightning-charge text-[20px]"></i>
                                            </div>
                                            <div>
                                                <div className="text-[14.5px] font-semibold text-[#011146]">99.99%
                                                    Uptime SLA</div>
                                                <div className="text-[13px] text-slate-500">Highly available, scalable
                                                    infrastructure</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div
                                                className="w-11 h-11 rounded-xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center text-blue-500">
                                                <i className="bi bi-boxes text-[20px]"></i>
                                            </div>
                                            <div>
                                                <div className="text-[14.5px] font-semibold text-[#011146]">Seamless
                                                    Integration</div>
                                                <div className="text-[13px] text-slate-500">Native APIs for 200+
                                                    enterprise tools</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* INDUSTRY USE CASES */}
            <section className="section-usecases py-[60px] bg-white">
                <div className="container mx-auto px-4">
                    <div className="section-heading text-center max-w-[680px] mx-auto mb-12 reveal">
                        <span className="eyebrow-mono">$ ai --use-cases</span>
                        <h2>Real capabilities, applied to <span className="text-gradient">your world</span></h2>
                    </div>

                    <div className="usecase-timeline" id="usecaseTimeline">
                        <div className="timeline-line">
                            <div className="timeline-line-fill" id="timelineFill"></div>
                        </div>

                        <div className="timeline-item timeline-item--left reveal">
                            <div className="timeline-side timeline-question">
                                <span className="usecase-row-label">Problem</span>
                                <p>Patients spend time waiting to schedule appointments.</p>
                            </div>
                            <div className="timeline-node"><i className="bi bi-heart-pulse"></i></div>
                            <div className="timeline-side timeline-answer">
                                <span className="usecase-row-label usecase-row-label--accent">AI solution</span>
                                <p>"Book an appointment with a cardiologist tomorrow." "Dr. Kumar is available at 11:00 AM.
                                    Confirm?"</p>
                            </div>
                            <div className="timeline-tag">Healthcare</div>
                        </div>

                        <div className="timeline-item timeline-item--right reveal">
                            <div className="timeline-side timeline-question">
                                <span className="usecase-row-label">Problem</span>
                                <p>Realtors spend hours matching leads to suitable listings.</p>
                            </div>
                            <div className="timeline-node"><i className="bi bi-building"></i></div>
                            <div className="timeline-side timeline-answer">
                                <span className="usecase-row-label usecase-row-label--accent">AI solution</span>
                                <p>"Show me 2BHK apartments under ₹85L in Chennai." Matching results returned instantly.</p>
                            </div>
                            <div className="timeline-tag">Real estate</div>
                        </div>

                        <div className="timeline-item timeline-item--left reveal">
                            <div className="timeline-side timeline-question">
                                <span className="usecase-row-label">Problem</span>
                                <p>Customers struggle to find suitable products.</p>
                            </div>
                            <div className="timeline-node"><i className="bi bi-cart3"></i></div>
                            <div className="timeline-side timeline-answer">
                                <span className="usecase-row-label usecase-row-label--accent">AI solution</span>
                                <p>A shopper views running shoes — AI recommends matching socks, fitness trackers, and running
                                    apparel.</p>
                            </div>
                            <div className="timeline-tag">E-commerce</div>
                        </div>

                        <div className="timeline-item timeline-item--right reveal">
                            <div className="timeline-side timeline-question">
                                <span className="usecase-row-label">Problem</span>
                                <p>Fraud detection is slow and reactive.</p>
                            </div>
                            <div className="timeline-node"><i className="bi bi-bank"></i></div>
                            <div className="timeline-side timeline-answer">
                                <span className="usecase-row-label usecase-row-label--accent">AI solution</span>
                                <p>A customer usually spends ₹6,000 per transaction. AI flags a sudden ₹1,50,000 international
                                    charge for review.</p>
                            </div>
                            <div className="timeline-tag">Banking &amp; finance</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="contact" className="relative py-24 overflow-hidden bg-[#011146]">
                {/* Background Video with Blend */}
                <video className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen" autoPlay muted loop playsInline>
                    <source src="https://videos.pexels.com/video-files/3129957/3129957-uhd_3840_2160_25fps.mp4" type="video/mp4" />
                </video>
                
                {/* Gradient Overlays for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#011146] via-transparent to-[#011146]"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#011146] via-transparent to-[#011146]"></div>

                {/* Animated Glowing Orbs */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/20 blur-[100px] rounded-full animate-pulse pointer-events-none"></div>
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-sky-400/20 blur-[100px] rounded-full animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>

                <div className="absolute inset-0 opacity-40 pointer-events-none">
                    <canvas id="ctaCanvas" className="block w-full h-full"></canvas>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto relative group">
                        {/* Glass Container */}
                        <div className="relative bg-[#0a1229]/80 backdrop-blur-3xl border border-sky-400/20 rounded-[2.5rem] p-10 md:p-16 overflow-hidden shadow-[0_0_80px_rgba(14,165,233,0.15)] transition-colors duration-500 hover:border-sky-400/40 hover:bg-[#0a1229]/90">
                            {/* Inner ambient shine - subtle radial gradient */}
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400/10 via-transparent to-transparent pointer-events-none"></div>
                            
                            {/* Animated top border line */}
                            <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-50"></div>
                            
                            <div className="relative z-10">
                                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 text-[13px] font-bold tracking-[0.2em] uppercase mb-8 shadow-inner">
                                    <i className="bi bi-stars"></i> AI consulting &amp; strategy
                                </span>
                                
                                <h2 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold !text-white mb-6 tracking-tight leading-[1.1]">
                                    Not sure where to start? <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400">We'll map the roadmap.</span>
                                </h2>
                                
                                <p className="text-[17px] text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                                    Our AI consulting team assesses your operations, identifies the highest-value automation
                                    opportunities, and delivers a clear implementation plan — reducing risk and accelerating ROI.
                                </p>
                                
                                <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(14,165,233,0.4)] hover:brightness-110">
                                    Talk to our AI consulting team <i className="bi bi-arrow-right text-lg"></i>
                                </a>
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
