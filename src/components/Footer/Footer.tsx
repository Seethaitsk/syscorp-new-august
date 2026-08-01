"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

const ourServices = [
  { label: "Custom Software Dev", href: "/services" },
  { label: "Web App Development", href: "/services" },
  { label: "Mobile App Development", href: "/services" },
  { label: "UI/UX Creative Design", href: "/services" },
  { label: "Cloud & DevOps Services", href: "/services" },
];

const Footer = () => {
  return (
    <footer className="bg-[#050814] text-white relative overflow-hidden py-20 pb-10">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Main Container */}
      <div className="max-w-[1280px] mx-auto px-6 relative z-[5]">
        
        {/* ─── TOP HEADER AREA ─── */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-8 items-center pb-12 border-b border-white/8 mb-12">
          {/* Left Heading */}
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold leading-[1.2] tracking-[-0.022em] text-white font-sans m-0">
            Begin your software{" "}
            <em className="not-italic text-gray-400 font-normal">journey with</em>
            <br />
            trusted experts
          </h2>

          {/* Right Social Media Links */}
          <div className="flex flex-col gap-3 items-start md:items-end">
            <span className="text-[12px] font-extrabold text-white uppercase tracking-[0.1em]">
              Explore Our Social Media
            </span>
            <div className="flex gap-3">
              {/* Pinterest */}
              <a href="https://pinterest.com" className="w-10 h-10 rounded-full border-[1.5px] border-blue-500 flex items-center justify-center text-blue-500 no-underline transition-all duration-300 bg-transparent hover:bg-blue-500 hover:text-white hover:-translate-y-0.75" aria-label="Pinterest" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.22 2.61 7.83 6.33 9.32-.1-.79-.2-2-.04-2.86.14-.6.93-3.97.93-3.97s-.24-.48-.24-1.2c0-1.12.65-1.96 1.46-1.96.69 0 1.02.52 1.02 1.14 0 .69-.44 1.73-.67 2.69-.19.81.41 1.48 1.2 1.48 1.45 0 2.56-1.53 2.56-3.73 0-1.95-1.4-3.32-3.41-3.32-2.33 0-3.69 1.75-3.69 3.55 0 .7.27 1.46.61 1.87.07.08.08.15.06.23-.06.26-.2.83-.23.95-.04.16-.14.2-.32.12-1.19-.55-1.93-2.3-1.93-3.7 0-3.02 2.2-5.79 6.32-5.79 3.32 0 5.9 2.37 5.9 5.53 0 3.3-2.08 5.96-4.97 5.96-.97 0-1.89-.5-2.2-1.1l-.6 2.28c-.22.84-.81 1.89-1.21 2.54C10.15 21.84 11.06 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
              </a>
              {/* Twitter / X */}
              <a href="https://twitter.com" className="w-10 h-10 rounded-full border-[1.5px] border-blue-500 flex items-center justify-center text-blue-500 no-underline transition-all duration-300 bg-transparent hover:bg-blue-500 hover:text-white hover:-translate-y-0.75" aria-label="Twitter X" target="_blank" rel="noopener noreferrer">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://facebook.com" className="w-10 h-10 rounded-full border-[1.5px] border-blue-500 flex items-center justify-center text-blue-500 no-underline transition-all duration-300 bg-transparent hover:bg-blue-500 hover:text-white hover:-translate-y-0.75" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" className="w-10 h-10 rounded-full border-[1.5px] border-blue-500 flex items-center justify-center text-blue-500 no-underline transition-all duration-300 bg-transparent hover:bg-blue-500 hover:text-white hover:-translate-y-0.75" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* ─── COLUMNS GRID AREA ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[3.2fr_2.2fr_2.6fr_4fr] gap-10 mb-14">
          {/* Column 1: Logo & About */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center">
              <Image
                src="/images/logo/logo-white.png"
                alt="Syscorp Logo"
                width={150}
                height={40}
                style={{ objectFit: "contain", width: "auto" }}
              />
            </div>
            <p className="text-[14px] text-gray-400 leading-[1.75] m-0">
              We are trusted developers and designers delivering modern, high-quality custom software and digital transformation solutions.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[16px] font-extrabold text-white m-0">Quick Links</h3>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link, idx) => (
                <Link key={idx} href={link.href} className="text-[14px] text-gray-400 no-underline transition-all duration-[250ms] hover:text-blue-500 hover:pl-1 font-medium inline-block">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Our Services */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[16px] font-extrabold text-white m-0">Our Services</h3>
            <div className="flex flex-col gap-3">
              {ourServices.map((service, idx) => (
                <Link key={idx} href={service.href} className="text-[14px] text-gray-400 no-underline transition-all duration-[250ms] hover:text-blue-500 hover:pl-1 font-medium inline-block">
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Newsletter subscribe */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[16px] font-extrabold text-white m-0">Subscribe Newsletter</h3>
            <p className="text-[14px] text-gray-400 leading-[1.6] m-0">
              Subscribe to receive the latest updates, insights, and project news.
            </p>
            <div className="flex bg-[#050814] border border-white/12 rounded-full px-5 py-1 gap-2.5 items-center h-[52px] mt-4">
              <input type="email" placeholder="Enter Your E-mail" className="bg-transparent border-none outline-none text-white text-[14px] flex-1 min-w-0 placeholder:text-white/40" />
              <button type="button" className="w-[42px] h-[42px] bg-[#1A5CDD] border-none rounded-full flex items-center justify-center text-white cursor-pointer transition-all duration-200 hover:scale-[1.05] hover:bg-[#154ebc]" aria-label="Subscribe newsletter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ─── COPYRIGHT BAR ─── */}
        <div className="pt-6 border-t border-white/8 text-center">
          <p className="text-[13px] text-gray-500 m-0">
            Copyright &copy; 2025 All Rights Reserved.
          </p>
        </div>

      </div>

      {/* Floating Scroll to top */}
      <button
        type="button"
        className="fixed bottom-7 right-7 w-11 h-11 rounded-full bg-[#1A5CDD] flex items-center justify-center text-white cursor-pointer z-[999] shadow-[0_8px_24px_rgba(26,92,221,0.25)] border-none transition-all duration-300 hover:bg-white hover:text-[#1A5CDD] hover:-translate-y-1"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
