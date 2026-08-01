"use client";

import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function TopBar() {
    return (
        <div className="top-nav-bg text-sm">
            <div className="container mx-auto px-4 text-white">
                <div className="flex flex-col items-center justify-between gap-2 py-2 md:flex-row">
                    {/* Left */}
                    <div className="flex flex-wrap items-center gap-4">
                        <a href="mailto:sales@itsk.in" className="flex items-center gap-2 hover:text-[#00A3FF] transition">
                            <Mail size={16} />
                            <span>sales@itsk.in</span>
                        </a>

                        <a href="tel:+919344430402" className="flex items-center gap-2 hover:text-[#00A3FF] transition">
                            <Phone size={16} />
                            <span>+91 93444 30402</span>
                        </a>
                    </div>

                    {/* Right */}
                    <div className="flex items-center gap-4">
                        <a
                            href="#"
                            aria-label="Visit our Facebook page"
                            className="hover:text-[#00A3FF] transition rounded"
                        >
                            <Facebook size={16} />
                        </a>

                        <a
                            href="#"
                            aria-label="Visit our Twitter profile"
                            className="hover:text-[#00A3FF] transition rounded"
                        >
                            <Twitter size={16} />
                        </a>

                        <a
                            href="#"
                            aria-label="Visit our Instagram profile"
                            className="hover:text-[#00A3FF] transition rounded"
                        >
                            <Instagram size={16} />
                        </a>

                        <a
                            href="#"
                            aria-label="Visit our LinkedIn page"
                            className="hover:text-[#00A3FF] transition rounded"
                        >
                            <Linkedin size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
