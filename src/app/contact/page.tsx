"use client";

import dynamic from "next/dynamic";
import HeaderBanner from "@/components/ui/HeaderBanner";

// Lazy-load sub-components to optimize load time
const ContactMap = dynamic(() => import("./ContactMap"), { ssr: false });
const ContactForm = dynamic(() => import("./ContactForm"), { ssr: false });

export default function ContactUs() {
    return (
        <main className="min-h-screen bg-[#F0F8FF] dark:bg-[#080f25] transition-colors duration-500 pb-20">
            <HeaderBanner
                title={
                    <>
                        Let's <span className="text-[#38bdf8] font-serif italic font-normal">collaborate and create</span> next-generation digital products.
                    </>
                }
                description="We're here to help your business grow. Contact us today and let's take your business to the next level with customized solutions."
            />

            {/* Part 1: Heading & Interactive Map Block */}
            <section className="py-20 px-6 md:px-12 lg:px-24">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-center">
                        
                        {/* Left column: Giant text & indicator arrow */}
                        <div data-animate="fade-left" className="space-y-6 flex flex-col justify-center">
                            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed max-w-sm">
                                Let's bring your vision to life—reach out to us with any questions or ideas.
                            </p>
                            
                            <h2 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-none font-sans">
                                Let's get <br />
                                in <span className="text-[#1a5cdd] dark:text-blue-400">touch!</span>
                            </h2>

                            {/* Hand-drawn decorative arrow pointing to the map */}
                            <div className="pl-4">
                                <svg 
                                    className="w-24 h-16 text-blue-600 dark:text-blue-400 rotate-[12deg] opacity-75 hidden lg:block" 
                                    viewBox="0 0 100 60" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="1.8" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                >
                                    <path d="M10,15 C35,5 50,45 70,25 C80,15 82,20 90,30" />
                                    <polyline points="80,30 90,30 90,20" />
                                </svg>
                            </div>
                        </div>

                        {/* Right column: The map and overlaid details card */}
                        <div data-animate="fade-right" className="w-full">
                            <ContactMap />
                        </div>
                    </div>
                </div>
            </section>

            {/* Part 2: Centered Header & Form Fields block */}
            <section className="py-16 px-6 md:px-12 lg:px-24 border-t border-gray-100 dark:border-blue-950/20 bg-white/30 dark:bg-[#070e27]/10">
                <div className="container mx-auto max-w-5xl space-y-12">
                    
                    {/* Header */}
                    <div data-animate="fade-up" className="flex flex-col items-center text-center space-y-3">
                        <span className="inline-block border border-blue-600/30 dark:border-blue-400/30 bg-blue-500/5 px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                            ✦ Get In Touch
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white uppercase font-sans">
                            how we can help you?
                        </h2>
                    </div>

                    {/* The Form container */}
                    <div data-animate="zoom-in">
                        <ContactForm />
                    </div>
                </div>
            </section>
        </main>
    );
}
