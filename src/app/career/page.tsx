"use client";

import HeaderBanner from "@/components/ui/HeaderBanner";
import {
    Code,
    PenTool,
    Megaphone,
    MapPin,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

const CareerOpenings = () => {
    return (
        <main className="min-h-screen bg-[#F0F8FF] dark:bg-[#080f25] transition-colors duration-500">
            <HeaderBanner
                title={
                    <>
                        Join our <span className="text-[#38bdf8] font-serif italic font-normal">selectively skilled team</span> to build the future of software solutions.
                    </>
                }
                description="We're looking for passionate designers, brilliant developers, and creative marketers to help us design, code, and launch next-generation products."
            />

            <section className="py-24 px-6 md:px-12 lg:px-24">
                <div className="container mx-auto max-w-7xl">
                    <div data-animate="stagger-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1: Creative Medium */}
                        <div className="group bg-white dark:bg-[#0a1128] border border-blue-100 dark:border-blue-950/40 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:border-blue-400/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-[#1a5cdd] dark:text-blue-400">
                                        <Code className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#1a5cdd] dark:text-blue-400 block mb-1">
                                            Engineering
                                        </span>
                                        <div className="flex items-center text-gray-500 dark:text-gray-450 text-[11px] font-medium">
                                            <MapPin className="w-3.5 h-3.5 mr-1 text-gray-400" />
                                            <span>Remote / New York</span>
                                        </div>
                                    </div>
                                </div>
                                <span className="text-gray-400 dark:text-gray-500 text-[10px] font-semibold">2 days ago</span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-snug group-hover:text-[#1a5cdd] dark:group-hover:text-blue-400 transition-colors">
                                Frontend Developer
                            </h3>
                            <p className="text-gray-655 dark:text-gray-400 text-sm mb-8 flex-grow leading-relaxed">
                                We are hiring Way-finding, Orientation and Navigation Systems designer to build modern
                                interfaces.
                            </p>

                            <button className="w-full bg-[#1a5cdd] hover:bg-[#1a5cdd]/90 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold py-3.5 rounded-full shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                                Apply Now
                                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                            </button>
                        </div>

                        {/* Card 2: Spread-it */}
                        <div className="group bg-white dark:bg-[#0a1128] border border-blue-100 dark:border-blue-950/40 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:border-blue-400/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-[#1a5cdd] dark:text-blue-400">
                                        <PenTool className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#1a5cdd] dark:text-blue-400 block mb-1">
                                            Creative
                                        </span>
                                        <div className="flex items-center text-gray-500 dark:text-gray-450 text-[11px] font-medium">
                                            <MapPin className="w-3.5 h-3.5 mr-1 text-gray-400" />
                                            <span>On-site / London</span>
                                        </div>
                                    </div>
                                </div>
                                <span className="text-gray-400 dark:text-gray-500 text-[10px] font-semibold">4 days ago</span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-snug group-hover:text-[#1a5cdd] dark:group-hover:text-blue-400 transition-colors">
                                UI/UX Designer
                            </h3>
                            <p className="text-gray-655 dark:text-gray-400 text-sm mb-8 flex-grow leading-relaxed">
                                UI/UX Design for APP/Dashboard/Content Management System projects.
                            </p>

                            <button className="w-full bg-[#1a5cdd] hover:bg-[#1a5cdd]/90 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold py-3.5 rounded-full shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                                Apply Now
                                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                            </button>
                        </div>

                        {/* Card 3: Shuriken Rush */}
                        <div className="group bg-white dark:bg-[#0a1128] border border-blue-100 dark:border-blue-950/40 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:border-blue-400/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-[#1a5cdd] dark:text-blue-400">
                                        <Megaphone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#1a5cdd] dark:text-blue-400 block mb-1">
                                            Marketing
                                        </span>
                                        <div className="flex items-center text-gray-500 dark:text-gray-450 text-[11px] font-medium">
                                            <MapPin className="w-3.5 h-3.5 mr-1 text-gray-400" />
                                            <span>Hybrid / Dubai</span>
                                        </div>
                                    </div>
                                </div>
                                <span className="text-gray-400 dark:text-gray-500 text-[10px] font-semibold">1 week ago</span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-snug group-hover:text-[#1a5cdd] dark:group-hover:text-blue-400 transition-colors">
                                Marketing Lead
                            </h3>
                            <p className="text-gray-655 dark:text-gray-400 text-sm mb-8 flex-grow leading-relaxed">
                                A startup creative agency is looking for a talented UI/UX Designer to join our team.
                            </p>

                            <button className="w-full bg-[#1a5cdd] hover:bg-[#1a5cdd]/90 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold py-3.5 rounded-full shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                                Apply Now
                                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                            </button>
                        </div>
                    </div>

                    {/* Pagination */}
                    <div data-animate="fade-up" className="mt-16 flex justify-center items-center gap-2">
                        <button
                            aria-label="Previous Page"
                            className="w-10 h-10 flex items-center justify-center rounded-lg border border-blue-100 dark:border-blue-950/40 bg-white dark:bg-[#0a1128] text-gray-600 dark:text-gray-300 hover:bg-[#1a5cdd] hover:text-white dark:hover:bg-blue-600 transition-all duration-300"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>

                        <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#1a5cdd] dark:bg-blue-600 text-white font-bold text-sm">
                            1
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-blue-100 dark:border-blue-950/40 bg-white dark:bg-[#0a1128] text-gray-650 dark:text-gray-300 hover:border-[#1a5cdd] hover:text-[#1a5cdd] dark:hover:border-blue-400 dark:hover:text-blue-400 font-bold text-sm transition-all duration-300">
                            2
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-blue-100 dark:border-blue-950/40 bg-white dark:bg-[#0a1128] text-gray-655 dark:text-gray-300 hover:border-[#1a5cdd] hover:text-[#1a5cdd] dark:hover:border-blue-400 dark:hover:text-blue-400 font-bold text-sm transition-all duration-300">
                            3
                        </button>
                        <span className="px-2 text-gray-400 dark:text-gray-500 font-bold">...</span>

                        <button
                            aria-label="Next Page"
                            className="w-10 h-10 flex items-center justify-center rounded-lg border border-blue-100 dark:border-blue-950/40 bg-white dark:bg-[#0a1128] text-gray-605 dark:text-gray-300 hover:bg-[#1a5cdd] hover:text-white dark:hover:bg-blue-600 transition-all duration-300"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CareerOpenings;
