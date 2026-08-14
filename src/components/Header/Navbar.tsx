"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "WHO WE ARE", href: "/about" },
  { label: "SERVICES", href: "/services", hasDropdown: true },
  { label: "CAREER", href: "/career" },
  { label: "UPDATES", href: "/blog" },
  { label: "CONTACT", href: "/contact" },
];

const megaMenuData = [
  {
    title: "WEBSITE & SOFTWARE",
    items: [
      { label: "Web Development", desc: "Next.js 15 & React enterprise web platforms", href: "/services/website-development/web-development", icon: "Code" },
      { label: "Cloud & Server Solutions", desc: "Scalable cloud infrastructure and managed server services for modern businesses.", href: "/services/website-development/cloud-server", icon: "Server" },
      { label: "UI/UX Design", desc: "Strategic User Interface / User Experience Design to enhance user engagement and satisfaction", href: "/services/website-development/ui-ux", icon: "Palette" },
      { label: "Full Stack Development", desc: "Custom-built web applications using the latest technologies.", href: "/services/website-development/full-stack", icon: "Terminal" },
      { label: "CRM Development", desc: "Custom Customer Relationship Management (CRM) software tailored to your business needs.", href: "/services/website-development/crm-development", icon: "Briefcase" },
      { label: "ERP Development", desc: "Enterprise Resource Planning (ERP) systems that streamline your business operations and improve efficiency.", href: "/services/website-development/erp-development", icon: "Building" },
      { label: "Graphic Design", desc: "Creative visual solutions to build brand identity and effectively communicate your message.", href: "/services/website-development/graphic-design", icon: "Layout" },


    ]
  },
  {
    title: "SEO & PERFORMANCE",
    items: [
      { label: "SEO Service", desc: "SEO Solutions for Sustainable Business Growth", href: "/services/seo-services/seo", icon: "Activity" },
      { label: "Local & Regional SEO", desc: "Geo-targeted search visibility & Google maps", href: "/services/seo-services/local-seo", icon: "MapPin" },
      { label: "Social Media Optimization", desc: "Optimize your social presence to increase reach, engagement, and brand awareness.", href: "/services/seo-services/Social-Media", icon: "Hash" },
      { label: "Google Ads", desc: "Turn Searches into Sales with Smart Google Ads.", href: "/services/seo-services/google-ads", icon: "Target" },
      { label: "Meta Ads", desc: "Grow Your Business with Results-Focused Meta Advertising.", href: "/services/seo-services/meta-ads", icon: "Facebook" },
      { label: "Content Marketing", desc: "Engaging Content Strategies to Attract and Retain Customers.", href: "/services/seo-services/content-marketing", icon: "Edit" },
      { label: "Email Marketing", desc: "Reach your audience with personalized, high-converting email campaigns.", href: "/services/seo-services/email-marketing", icon: "Mail" },

    ]
  }
];

function getMenuIcon(iconName: string) {
  const commonClasses = "w-[18px] h-[18px]";
  switch (iconName) {
    case "Palette":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.92 0 1.63-.77 1.63-1.7 0-.42-.16-.83-.44-1.14-.29-.32-.46-.74-.46-1.19 0-.93.77-1.7 1.7-1.7H19c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8z" />
          <circle cx="7.5" cy="10.5" r="1" fill="currentColor" />
          <circle cx="11.5" cy="7.5" r="1" fill="currentColor" />
          <circle cx="16.5" cy="9.5" r="1" fill="currentColor" />
        </svg>
      );
    case "Smartphone":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      );
    case "Briefcase":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    case "Building":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <line x1="9" y1="22" x2="9" y2="16" />
          <line x1="15" y1="22" x2="15" y2="16" />
          <line x1="9" y1="16" x2="15" y2="16" />
          <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01" />
        </svg>
      );
    case "ShoppingCart":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      );
    case "Layout":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      );
    case "Server":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      );
    case "Wrench":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case "Code":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "Search":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      );
    case "TrendingUp":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      );
    case "Network":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="16" y="16" width="6" height="6" rx="1" />
          <rect x="2" y="16" width="6" height="6" rx="1" />
          <rect x="9" y="2" width="6" height="6" rx="1" />
          <path d="M12 8v8M12 12H5v4M12 12h7v4" />
        </svg>
      );
    case "Terminal":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      );
    case "MapPin":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "Link":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      );
    case "Activity":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      );
    case "Target":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case "BarChart":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      );
    case "Hash":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="9" x2="20" y2="9" />
          <line x1="4" y1="15" x2="20" y2="15" />
          <line x1="10" y1="3" x2="8" y2="21" />
          <line x1="16" y1="3" x2="14" y2="21" />
        </svg>
      );
    case "Edit":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case "Facebook":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case "LineChart":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="m18.7 8-5.1 5.2-2.8-2.7L7 14.3" />
        </svg>
      );
    case "Mail":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    default:
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const pathname = usePathname();

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setServiceOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServiceOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const fn = () => {
      const banner = document.getElementById("home-banner");
      const threshold = banner ? (banner.offsetHeight - 80) : 600;
      setScrolled(window.scrollY > threshold);
    };
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    window.addEventListener("resize", fn, { passive: true });
    return () => {
      window.removeEventListener("scroll", fn);
      window.removeEventListener("resize", fn);
    };
  }, []);

  return (
    <>
      <style>{`
        .sky-nav {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 48px);
          max-width: 1300px;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          background: transparent;
          border-bottom: 1px solid transparent;
        }
        .sky-nav.scrolled {
          top: 0;
          width: 100%;
          max-width: 100%;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
        }
        .sky-nav-inner {
          background: #fff;
          border-radius: 50px;
          padding: 14px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 4px 30px rgba(0,0,0,0.03);
          border: 1px solid rgba(0, 0, 0, 0.04);
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
        }
        .sky-nav.scrolled .sky-nav-inner {
          background: transparent;
          border-radius: 0;
          border: none;
          box-shadow: none;
          padding: 16px 24px;
        }
        .sky-nav-link {
          font-size: 13px;
          font-weight: 800;
          color: #374151;
          letter-spacing: 0.03em;
          text-decoration: none;
          padding: 6px 2px;
          position: relative;
          transition: color 0.25s ease;
          display: flex;
          align-items: center;
          gap: 4px;
          white-space: nowrap;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .dark .sky-nav-link {
          color: #D1D5DB;
        }
        .sky-nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #1A5CDD;
          transition: width 0.25s ease;
          border-radius: 2px;
        }
        .dark .sky-nav-link::after {
          background: #60A5FA;
        }
        .sky-nav-link:hover, .sky-nav-link.active {
          color: #1A5CDD;
        }
        .dark .sky-nav-link:hover, .dark .sky-nav-link.active {
          color: #60A5FA;
        }
        .sky-nav-link:hover::after, .sky-nav-link.active::after {
          width: 100%;
        }
        .sky-cta-btn {
          display: none;
          align-items: center;
          gap: 8px;
          background: #1A5CDD;
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          padding: 12px 24px;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        @media (min-width: 1024px) {
          .sky-cta-btn {
            display: inline-flex;
          }
        }
        .sky-cta-btn:hover {
          background: #154ebc;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(26,92,221,0.25);
        }
        .sky-dropdown {
          position: absolute;
          top: calc(100% + 16px);
          left: 50%;
          transform: translateX(-50%);
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.1);
          border: 1px solid rgba(0,0,0,0.07);
          padding: 12px;
          min-width: 260px;
          z-index: 100;
          display: grid;
          grid-template-columns: 1fr;
          gap: 4px;
        }
        .sky-drop-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 600;
          color: #374151;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .sky-drop-item:hover {
          background: rgba(26,92,221,0.07);
          color: #1A5CDD;
        }
        .sky-drop-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #1A5CDD;
          opacity: 0.4;
          transition: opacity 0.2s ease;
          flex-shrink: 0;
        }
        .sky-drop-item:hover .sky-drop-dot {
          opacity: 1;
        }
        /* Mobile */
        .sky-mobile-menu {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          z-index: 999;
          display: flex;
          flex-direction: column;
          padding: 80px 28px 40px;
          gap: 4px;
          overflow-y: auto;
        }
        .dark .sky-mobile-menu {
          background: rgba(11, 15, 25, 0.97);
        }
        .sky-mobile-link {
          display: block;
          font-size: 18px;
          font-weight: 800;
          color: #0B132A;
          text-decoration: none;
          padding: 12px 16px;
          border-radius: 12px;
          transition: all 0.25s ease;
          letter-spacing: 0.02em;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .dark .sky-mobile-link {
          color: #FFFFFF;
        }
        .sky-mobile-link:hover, .sky-mobile-link.active {
          background: rgba(26,92,221,0.08);
          color: #1A5CDD;
        }
        .dark .sky-mobile-link:hover, .dark .sky-mobile-link.active {
          background: rgba(59,130,246,0.15);
          color: #60A5FA;
        }
        .sky-ham {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 6px;
        }
        @media (max-width: 1023px) {
          .sky-ham {
            display: flex;
          }
        }
        .sky-ham span {
          display: block;
          width: 22px;
          height: 2px;
          background: #0B132A;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .sky-ham.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
        .sky-ham.open span:nth-child(2) { opacity: 0; }
        .sky-ham.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }
      `}</style>

      <nav className={`sky-nav${scrolled ? " scrolled" : ""}`} aria-label="Main navigation">
        <div className="sky-nav-inner lg:relative">
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <Image
              src="/images/logo/logo.svg"
              alt="Syscorp Technology"
              width={130}
              height={40}
              className="main-logo"
              style={{ height: "36px", width: "auto", objectFit: "contain" }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href} className="lg:static relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span
                    className={`sky-nav-link${pathname.startsWith("/services") ? " active" : ""}`}
                    style={{ cursor: "default" }}
                  >
                    {link.label}
                    <svg
                      style={{
                        width: "14px", height: "14px",
                        transition: "transform 0.3s ease",
                        transform: serviceOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                      fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                    </svg>
                  </span>

                  {/* Mega Menu using strictly Tailwind utility classes with invisible hover bridge */}
                  <div className={`absolute top-[calc(100%+8px)] left-6 right-6 bg-white dark:bg-[#061138] rounded-[28px] shadow-[0_25px_60px_rgba(0,0,0,0.12),0_10px_30px_rgba(26,92,221,0.08)] border border-slate-200/80 dark:border-white/10 p-8 z-[1000] box-sizing-border-box transition-all duration-300 ease-out transform before:content-[''] before:absolute before:-top-8 before:left-0 before:right-0 before:h-8 ${serviceOpen
                    ? "opacity-100 visible translate-y-0 pointer-events-auto"
                    : "opacity-0 invisible translate-y-3 pointer-events-none"
                    }`}>

                    {/* Top Columns Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8 max-h-[calc(100vh-160px)] lg:max-h-none overflow-y-auto lg:overflow-y-visible pr-1">
                      {/* Column 1: Website/Software & Growth/Marketing stacked */}
                      <div className="flex flex-col gap-6 xl:gap-8 col-span-1">
                        {/* WEBSITE & SOFTWARE */}
                        {megaMenuData[0] && (
                          <div className="flex flex-col">
                            <h4 className="px-4 text-[11px] font-black text-[#1A5CDD] dark:text-[#38bdf8] tracking-widest mb-2 uppercase font-sans flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] dark:bg-[#38bdf8] inline-block " />
                              {megaMenuData[0].title}
                            </h4>
                            <div className="flex flex-col gap-1">
                              {megaMenuData[0].items.map((item) => (
                                <Link key={item.label} href={item.href} onClick={() => setServiceOpen(false)} className="group flex items-start gap-3.5 p-2.5 rounded-2xl transition-all duration-300 hover:bg-[#1A5CDD]/5 dark:hover:bg-white/5 no-underline">
                                  <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/10 text-[#1A5CDD] dark:text-[#38bdf8] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#1A5CDD] dark:group-hover:bg-[#38bdf8] group-hover:text-white dark:group-hover:text-[#011146] group-hover:scale-105 mt-0.5 shadow-sm">
                                    {getMenuIcon(item.icon)}
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="text-[13.5px] font-extrabold text-slate-800 dark:text-white transition-colors duration-200 group-hover:text-[#1A5CDD] dark:group-hover:text-[#38bdf8] font-sans leading-tight">
                                      {item.label}
                                    </span>
                                    {item.desc && (
                                      <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                                        {item.desc}
                                      </span>
                                    )}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* GROWTH & MARKETING */}
                        {megaMenuData[2] && (
                          <div className="flex flex-col">
                            <h4 className="px-4 text-[11px] font-black text-[#1A5CDD] dark:text-[#38bdf8] tracking-widest mb-2 uppercase font-sans flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] dark:bg-[#38bdf8] inline-block " />
                              {megaMenuData[2].title}
                            </h4>
                            <div className="flex flex-col gap-1">
                              {megaMenuData[2].items.map((item) => (
                                <Link key={item.label} href={item.href} onClick={() => setServiceOpen(false)} className="group flex items-start gap-3.5 p-2.5 rounded-2xl transition-all duration-300 hover:bg-[#1A5CDD]/5 dark:hover:bg-white/5 no-underline">
                                  <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/10 text-[#1A5CDD] dark:text-[#38bdf8] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#1A5CDD] dark:group-hover:bg-[#38bdf8] group-hover:text-white dark:group-hover:text-[#011146] group-hover:scale-105 mt-0.5 shadow-sm">
                                    {getMenuIcon(item.icon)}
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="text-[13.5px] font-extrabold text-slate-800 dark:text-white transition-colors duration-200 group-hover:text-[#1A5CDD] dark:group-hover:text-[#38bdf8] font-sans leading-tight">
                                      {item.label}
                                    </span>
                                    {item.desc && (
                                      <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                                        {item.desc}
                                      </span>
                                    )}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Column 2 & 3: SEO & PERFORMANCE (spanning 2 columns on xl) */}
                      {megaMenuData[1] && (
                        <div className="col-span-1 xl:col-span-2 flex flex-col">
                          <h4 className="px-4 text-[11px] font-black text-[#1A5CDD] dark:text-[#38bdf8] tracking-widest mb-2 uppercase font-sans flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] dark:bg-[#38bdf8] inline-block " />
                            {megaMenuData[1].title}
                          </h4>
                          <div className="grid grid-cols-1 xl:grid-cols-2 gap-1">
                            {megaMenuData[1].items.map((item) => (
                              <Link key={item.label} href={item.href} onClick={() => setServiceOpen(false)} className="group flex items-start gap-3.5 p-2.5 rounded-2xl transition-all duration-300 hover:bg-[#1A5CDD]/5 dark:hover:bg-white/5 no-underline">
                                <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/10 text-[#1A5CDD] dark:text-[#38bdf8] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#1A5CDD] dark:group-hover:bg-[#38bdf8] group-hover:text-white dark:group-hover:text-[#011146] group-hover:scale-105 mt-0.5 shadow-sm">
                                  {getMenuIcon(item.icon)}
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-[13.5px] font-extrabold text-slate-800 dark:text-white transition-colors duration-200 group-hover:text-[#1A5CDD] dark:group-hover:text-[#38bdf8] font-sans leading-tight">
                                    {item.label}
                                  </span>
                                  {item.desc && (
                                    <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                                      {item.desc}
                                    </span>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* 4th Column - Featured Enterprise Solution Card */}
                      <div className="col-span-1 flex flex-col h-full justify-between relative group/ai-card">
                        <h4 className="text-[12px] font-black text-[#1A5CDD] dark:text-[#38bdf8] tracking-widest mb-4 uppercase font-sans flex items-center gap-2.5">
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1A5CDD] dark:bg-[#38bdf8] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1A5CDD] dark:bg-[#38bdf8]"></span>
                          </span>
                          AI Service
                        </h4>

                        <div className="relative overflow-hidden rounded-[20px] flex-1 min-h-[260px] flex flex-col justify-end p-5 text-white shadow-lg group-hover/ai-card:shadow-2xl transition-all duration-500 border border-slate-200/60 dark:border-white/10 group/promo">
                          {/* Background Image */}
                          <Image
                            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
                            alt="Featured AI Solution"
                            fill
                            className="object-cover absolute inset-0 z-0 transition-transform duration-700 group-hover/promo:scale-110"
                          />

                          {/* Rich Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#011146] via-[#011146]/70 to-transparent z-10 transition-opacity duration-500 group-hover/promo:opacity-90" />
                          <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay z-10"></div>

                          {/* Floating Decorative Element */}
                          <div className="absolute top-4 right-4 z-20 backdrop-blur-md bg-white/10 border border-white/20 rounded-full p-2 translate-x-8 opacity-0 group-hover/promo:translate-x-0 group-hover/promo:opacity-100 transition-all duration-500 delay-75 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                            <svg className="w-4 h-4 text-sky-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                            </svg>
                          </div>

                          <div className="relative z-20 flex flex-col justify-end h-full">
                            {/* Text Content */}
                            <div className="mb-4 transform transition-all duration-500 translate-y-4 opacity-0 group-hover/promo:translate-y-0 group-hover/promo:opacity-100">
                              <h5 className="text-lg font-bold text-white mb-1.5 leading-tight tracking-wide">Next-Gen AI Platform</h5>
                              <p className="text-[12px] text-sky-100/90 font-medium line-clamp-2 leading-relaxed">Elevate your workflows with our custom intelligent automation solutions.</p>
                            </div>

                            {/* Call to Action Button */}
                            <Link
                              href="/ai-service"
                              onClick={() => setServiceOpen(false)}
                              className="relative overflow-hidden group/btn flex items-center justify-between w-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold text-[13px] px-4 py-2.5 rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] hover:border-white/40"
                            >
                              <span className="relative z-10 tracking-wide">Discover Services</span>
                              <div className="relative z-10 w-7 h-7 rounded-lg bg-white text-[#1A5CDD] flex items-center justify-center transform transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:bg-sky-400 group-hover/btn:text-white shadow-sm">
                                <svg className="w-4 h-4 transform transition-transform duration-300 group-hover/btn:-rotate-45" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Enterprise Bottom Bar */}
                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-300">
                      <div className="flex items-center gap-6">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          99.99% Guaranteed SLA
                        </span>
                        <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
                        <span className="hidden sm:inline">
                          ISO 27001 Security Standard
                        </span>
                      </div>
                      <Link
                        href="/services"
                        onClick={() => setServiceOpen(false)}
                        className="inline-flex items-center gap-1.5 text-[#1A5CDD] dark:text-[#38bdf8] font-extrabold hover:underline"
                      >
                        Explore All Engineering Capabilities →
                      </Link>
                    </div>

                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={true}
                  className={`sky-nav-link${pathname === link.href ? " active" : ""}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA (Sign In) + Hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Link href="/contact" prefetch={true} className="sky-cta-btn">
              Get a Demo
              <svg style={{ width: "14px", height: "14px" }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <button
              className={`sky-ham${mobileOpen ? " open" : ""}`}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              <span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div id="mobile-nav" className="sky-mobile-menu dark:bg-[#0b0f19]" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          {/* Close */}
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-5 right-6 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer border-none bg-black/5 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:text-[#1A5CDD] dark:hover:text-[#60A5FA] transition"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <Image src="/images/logo/logo.svg" alt="Syscorp" width={120} height={36} style={{ height: "34px", width: "auto", objectFit: "contain", marginBottom: "16px" }} />

          {navLinks.map((link) => (
            <React.Fragment key={link.href}>
              <Link
                href={link.href}
                className={`sky-mobile-link dark:text-white dark:hover:text-[#60A5FA]${pathname === link.href ? " active" : ""}`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.hasDropdown && (
                <div className="pl-4 grid grid-cols-1 md:grid-cols-3 gap-6 mt-3 mb-4">
                  {megaMenuData.map((category) => (
                    <div key={category.title} className="flex flex-col gap-2">
                      <div className="text-[11px] font-extrabold text-[#6B7280] dark:text-gray-400 tracking-wider px-3 py-1 uppercase border-b border-gray-100 dark:border-gray-800/60 pb-1">
                        {category.title}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-1">
                        {category.items.map((s) => (
                          <Link
                            key={s.label}
                            href={s.href}
                            onClick={() => {
                              setMobileOpen(false);
                            }}
                            className="flex items-center gap-2.5 text-[13px] font-semibold text-gray-600 dark:text-gray-400 hover:text-[#1A5CDD] dark:hover:text-[#60A5FA] px-3 py-2 rounded-xl transition-all duration-200 hover:bg-gray-100/50 dark:hover:bg-gray-800/30 no-underline"
                          >
                            <div className="w-6 h-6 rounded-md bg-[#1A5CDD]/5 dark:bg-[#3B82F6]/10 text-[#1A5CDD] dark:text-[#60A5FA] flex items-center justify-center flex-shrink-0">
                              {getMenuIcon(s.icon)}
                            </div>
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="col-span-1 md:col-span-3 mt-2">
                    <Link
                      href="/services"
                      onClick={() => setMobileOpen(false)}
                      className="inline-flex items-center gap-1.5 text-[13px] font-extrabold text-[#1A5CDD] dark:text-[#60A5FA] px-3 py-2 no-underline"
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}

          {/* Promo Card inside Mobile Menu */}
          <div className="sky-mobile-menu-promo mt-8 mb-6 relative overflow-hidden rounded-2xl h-44 flex flex-col justify-end p-5 text-white border border-white/10 shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=75&w=350&auto=format&fit=crop"
              alt="Promo Banner"
              fill
              className="object-cover absolute inset-0 z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent z-10" />
            <div className="relative z-20">
              <span className="text-[10px] font-extrabold tracking-wider uppercase bg-[#1A5CDD] px-2 py-0.5 rounded-full w-fit mb-1.5 inline-block">
                COLLABORATE WITH US
              </span>
              <h4 className="text-base font-extrabold leading-tight mb-1">
                Ready to scale your business?
              </h4>
              <p className="text-xs text-gray-200 mb-3">
                Let's co-create industry-leading digital products together.
              </p>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center gap-1 bg-white text-slate-900 font-extrabold text-[11px] px-3.5 py-1.5 rounded-lg transition-transform hover:scale-105"
              >
                Let's Talk
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          <a href="/contact" className="sky-cta-btn" style={{ marginTop: "16px", justifyContent: "center" }}>
            Get a Demo
            <svg style={{ width: "14px", height: "14px" }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      )}
    </>
  );
}
