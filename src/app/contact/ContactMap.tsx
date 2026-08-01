"use client";

import React, { useEffect, useRef, useState } from "react";
import { Phone, Mail, MessageSquare, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function ContactMap() {
    const [showMap, setShowMap] = useState(false);
    const mapRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setShowMap(true);
                    observer.disconnect();
                }
            },
            { threshold: 0 }
        );

        if (mapRef.current) observer.observe(mapRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={mapRef} className="w-full relative lg:h-[500px] bg-gray-100 dark:bg-[#070e27]/20 flex flex-col lg:block rounded-[28px] overflow-hidden border border-gray-100 dark:border-blue-950/20">
            {/* Map wrapper */}
            <div className="w-full h-[350px] lg:h-full">
                {showMap ? (
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.455807650604!2d79.80274197373379!3d11.942911588285844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a536179f6a96021%3A0x6928eb4736d20045!2sSyscorp%20Technology%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1767345645119!5m2!1sen!2sin"
                        className="w-full h-full border-0"
                        title="Syscorp Technology Pvt Ltd Location Map"
                        allowFullScreen
                        loading="lazy"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <p className="text-gray-500 font-medium text-lg">Loading Map...</p>
                    </div>
                )}
            </div>

            {/* Overlaid contact detail box (Theme-Aligned Deep Navy Sidebar) */}
            <div className="relative lg:absolute lg:right-8 lg:top-8 lg:bottom-8 lg:w-[350px] bg-gradient-to-br from-[#010925] via-[#011146] to-[#0a2373] border border-blue-900/40 text-white p-8 rounded-b-[28px] lg:rounded-3xl shadow-[0_20px_60px_rgba(1,17,70,0.3)] flex flex-col justify-between z-20 space-y-6 lg:space-y-0">
                <div className="space-y-6">
                    <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white font-sans">
                        Get <br />In Touch!
                    </h3>

                    {/* Contacts list */}
                    <div className="space-y-5">
                        {/* Call Directly */}
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-[#fff] flex-shrink-0">
                                <Phone className="w-4.5 h-4.5" />
                            </div>
                            <div>
                                <span className="text-[10px] font-extrabold tracking-wider uppercase text-blue-300 block font-sans">Call Us Directly</span>
                                <a href="tel:+919344430402" className="text-base font-bold text-white hover:text-cyan-400 transition-colors">
                                    +91 93444 30402
                                </a>
                            </div>
                        </div>

                        {/* Need Support */}
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center  text-[#fff]  flex-shrink-0">
                                <Mail className="w-4.5 h-4.5" />
                            </div>
                            <div>
                                <span className="text-[10px] font-extrabold tracking-wider uppercase text-blue-300 block font-sans">Need Support?</span>
                                <a href="mailto:syscorptechno@gmail.com" className="text-sm font-bold text-white hover:text-cyan-400 transition-colors break-all">
                                    syscorptechno@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Start Chat */}
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center  text-[#fff]  flex-shrink-0">
                                <MessageSquare className="w-4.5 h-4.5" />
                            </div>
                            <div>
                                <span className="text-[10px] font-extrabold tracking-wider uppercase text-blue-300 block font-sans">Start Chat</span>
                                <a href="mailto:syscorptechno@gmail.com?subject=Inquiry" className="text-sm font-bold text-white hover:text-cyan-400 transition-colors">
                                    Send message on Chat
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer of the sidebar box */}
                <div className="space-y-4 pt-6 border-t border-blue-900/40">
                    <a href="/faq" className="text-[11px] font-semibold text-blue-300 hover:text-cyan-400 transition-colors block text-center font-sans">
                        See our Refund Policies or FAQ
                    </a>
                    
                    {/* Social links */}
                    <div className="flex items-center justify-center gap-3">
                        <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white hover:text-cyan-400 transition-all">
                            <Facebook className="w-3.5 h-3.5" />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white hover:text-cyan-400 transition-all">
                            <Twitter className="w-3.5 h-3.5" />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white hover:text-cyan-400 transition-all">
                            <Instagram className="w-3.5 h-3.5" />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white hover:text-cyan-400 transition-all">
                            <Linkedin className="w-3.5 h-3.5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
