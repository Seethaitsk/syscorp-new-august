"use client";
import React, { useState, useEffect } from "react";

const features = [
  {
    label: "ALIGNMENT",
    color: "#10B981", // Emerald
    title: "Business-Focused Development",
    desc: "Every solution is designed around your business objectives, workflows, and long-term growth strategy.",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    label: "TECHNOLOGY",
    color: "#1A5CDD", // Brand Blue
    title: "Modern Technology Stack",
    desc: "We use the latest frameworks, cloud platforms, and development practices to build secure, scalable applications.",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
  {
    label: "TRANSPARENCY",
    color: "#F59E0B", // Amber
    title: "Transparent Management",
    desc: "Receive regular project updates, milestone tracking, and clear communication from start to finish.",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.375c.91 0 1.625-.74 1.625-1.625V11.25c0-.91-.74-1.625-1.625-1.625H9m0 6v-6m0 6H6.375c-.91 0-1.625-.74-1.625-1.625V11.25c0-.91.74-1.625 1.625-1.625H9m1.5-6H6.375C5.465 3 4.75 3.715 4.75 4.625v1.875c0 .91.74 1.625 1.625 1.625H12M9 9h.008v.008H9V9z" />
      </svg>
    ),
  },
  {
    label: "SUPPORT",
    color: "#EF4444", // Red
    title: "Long-Term Support",
    desc: "Our relationship continues beyond launch with maintenance, upgrades, optimization, and technical support.",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.67 2.67 0 0021 17.25l-5.83-5.83m-3.75 3.75a3.75 3.75 0 11-5.3-5.3 3.75 3.75 0 015.3 5.3zm6-6a3.75 3.75 0 11-5.3-5.3 3.75 3.75 0 015.3 5.3z" />
      </svg>
    ),
  },
];

export default function ServiceCompany() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [sprintProgress, setSprintProgress] = useState(0);

  // Animate sprint progress when ActiveIndex changes to Sprint tab
  useEffect(() => {
    if (activeIndex === 2) {
      const timer = setTimeout(() => setSprintProgress(78), 200);
      return () => clearTimeout(timer);
    }
  }, [activeIndex]);

  return (
    <section
      aria-labelledby="commitment-heading"
      className="bg-grid-pattern bg-white dark:bg-slate-950 py-10 md:py-14 lg:py-16 overflow-hidden relative transition-colors duration-500"
    >
      {/* Background radial glow */}
      <div className="sky-glow-orb" />

      <style>{`
        .sky-glow-orb {
          position: absolute;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(26, 92, 221, 0.04) 0%, transparent 70%);
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 0;
          transition: background 0.4s ease;
        }
        .dark .sky-glow-orb {
          background: radial-gradient(circle, rgba(26, 92, 221, 0.09) 0%, transparent 70%);
        }

        .sky-commitment-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        @media (min-width: 1024px) {
          .sky-commitment-grid {
            grid-template-columns: 5fr 6fr;
            gap: 60px;
          }
        }

        /* Phone box styling */
        .sky-phone-box {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 8px 20px 8px 12px;
          border-radius: 50px;
          background: rgba(26, 92, 221, 0.03);
          border: 1.5px solid rgba(26, 92, 221, 0.06);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .dark .sky-phone-box {
          background: rgba(26, 92, 221, 0.08);
          border-color: rgba(26, 92, 221, 0.15);
        }
        .sky-phone-box:hover {
          background: rgba(26, 92, 221, 0.06);
          border-color: rgba(26, 92, 221, 0.18);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(26, 92, 221, 0.04);
        }
        .dark .sky-phone-box:hover {
          background: rgba(26, 92, 221, 0.14);
          border-color: rgba(26, 92, 221, 0.3);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
        }

        .sky-phone-ring-sm {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #1A5CDD;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          animation: skyPhonePing 2.5s ease infinite;
          flex-shrink: 0;
          transition: background 0.3s ease;
        }
        .dark .sky-phone-ring-sm {
          background: #3B82F6;
        }
        @keyframes skyPhonePing {
          0%, 100% { box-shadow: 0 0 0 0 rgba(26, 92, 221, 0.4); }
          50%       { box-shadow: 0 0 0 8px rgba(26, 92, 221, 0); }
        }

        .sky-phone-label {
          font-size: 10px;
          font-weight: 700;
          color: #9CA3AF;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin: 0 0 2px 0;
        }
        .sky-phone-number {
          font-size: 15px;
          font-weight: 850;
          color: #011146;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .dark .sky-phone-number {
          color: #FFFFFF;
        }
        .sky-phone-number:hover {
          color: #1A5CDD;
        }
        .dark .sky-phone-number:hover {
          color: #60A5FA;
        }

        /* CTA Button */
        .sky-contact-us-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #1A5CDD;
          color: #fff;
          font-weight: 700;
          font-size: 14.5px;
          padding: 14px 28px;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 6px 20px rgba(26, 92, 221, 0.18);
        }
        .sky-contact-us-btn:hover {
          background: #154ebc;
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(26, 92, 221, 0.32);
        }
        .dark .sky-contact-us-btn {
          background: #2563EB;
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.25);
        }
        .dark .sky-contact-us-btn:hover {
          background: #1D4ED8;
          box-shadow: 0 10px 28px rgba(29, 78, 216, 0.4);
        }

        .sky-contact-arrow-w {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .sky-contact-us-btn:hover .sky-contact-arrow-w {
          transform: translate(2px, -2px);
        }

        /* Interactive UX Dashboard Styling */
        .dashboard-screen {
          background: #ffffff;
          border: 1px solid rgba(26, 92, 221, 0.08);
          box-shadow: 0 20px 40px rgba(26, 92, 221, 0.03);
          transition: all 0.4s ease;
        }
        .dark .dashboard-screen {
          background: #090f25;
          border-color: rgba(255, 255, 255, 0.08);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        }

        .dashboard-window-bar {
          background: #f8fafc;
          border-bottom: 1px solid rgba(26, 92, 221, 0.06);
        }
        .dark .dashboard-window-bar {
          background: #0f172a;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .dashboard-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .dashboard-grid-overlay {
          background-image: radial-gradient(rgba(26, 92, 221, 0.08) 1.2px, transparent 1.2px);
          background-size: 16px 16px;
        }
        .dark .dashboard-grid-overlay {
          background-image: radial-gradient(rgba(96, 165, 250, 0.08) 1.2px, transparent 1.2px);
        }

        /* Premium Widgets Animations */
        @keyframes floatAnim {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes floatAnimDelayed {
          0%, 100% { transform: translateY(-3px); }
          50% { transform: translateY(3px); }
        }
        .animate-float-1 {
          animation: floatAnim 4s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: floatAnimDelayed 4.5s ease-in-out infinite;
        }

        @keyframes drawChartPath {
          to { stroke-dashoffset: 0; }
        }
        .animate-draw-chart {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: drawChartPath 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes compileBlink {
          50% { opacity: 0; }
        }
        .animate-cursor {
          animation: compileBlink 1s infinite;
        }

        @keyframes dataPulse {
          0% { transform: scale(0.9); opacity: 0.2; }
          50% { transform: scale(1.1); opacity: 0.6; }
          100% { transform: scale(1.3); opacity: 0; }
        }
        .animate-data-pulse {
          animation: dataPulse 2s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }

        @keyframes dashMove {
          to { stroke-dashoffset: -20; }
        }
        .animate-dash-lines {
          stroke-dasharray: 6, 6;
          animation: dashMove 2.5s linear infinite;
        }

        @keyframes ecgHeartbeat {
          0% { stroke-dashoffset: 800; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-ecg {
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          animation: ecgHeartbeat 3.2s linear infinite;
        }

        @keyframes blinkLight {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        .led-blink-1 { animation: blinkLight 1.2s infinite 0.1s; }
        .led-blink-2 { animation: blinkLight 0.9s infinite 0.4s; }
        .led-blink-3 { animation: blinkLight 1.5s infinite 0.7s; }

        /* Tabs list buttons */
        .sky-tab-btn {
          border-left: 3px solid transparent;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .sky-tab-btn-active {
          border-left-color: #1A5CDD;
          background: rgba(26, 92, 221, 0.04);
          box-shadow: inset 1px 0 0 rgba(26, 92, 221, 0.1);
        }
        .dark .sky-tab-btn-active {
          border-left-color: #60A5FA;
          background: rgba(26, 92, 221, 0.1);
          box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.05);
        }

        .tab-icon-box {
          transition: all 0.35s ease;
        }
        .sky-tab-btn-active .tab-icon-box {
          background: #1A5CDD;
          border-color: #1A5CDD;
          color: #ffffff;
          transform: scale(1.05) rotate(4deg);
        }
        .dark .sky-tab-btn-active .tab-icon-box {
          background: #3B82F6;
          border-color: #3B82F6;
          color: #ffffff;
        }
      `}</style>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <div className="sky-commitment-grid">

          {/* LEFT COLUMN: Texts & Info */}
          <div className="gsap-company-left-col flex flex-col gap-7">
            <div className="sky-about-badge-anim flex flex-col gap-[18px]">
              <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 dark:bg-blue-500/10 dark:border-blue-500/20 rounded-full px-3.5 py-1 text-xs font-bold text-[#1A5CDD] dark:text-blue-400 w-fit uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] dark:bg-blue-400 inline-block animate-pulse" />
                WHY CHOOSE US
              </span>
              <h2 id="commitment-heading" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight m-0 font-sans tracking-tight">
                WHY CHOOSE SYSCORP <span className="block text-[#1A5CDD] dark:text-[#60A5FA] text-2xl md:text-3xl lg:text-4xl mt-2 font-bold tracking-tight">Your <span className="highlight-italic">Reliable Software Partner</span> in Pondicherry</span>
              </h2>
            </div>

            {/* Description Paragraphs */}
            <div className="flex flex-col gap-4">
              <p className="text-sm md:text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed m-0 font-sans">
                Finding the right technology partner is essential for building successful digital products. At Syscorp, we combine technical expertise with a business-first approach to deliver solutions that create real value. As a leading Software Company in Pondicherry, we focus on building secure, scalable, and future-ready applications that help businesses stay ahead in a competitive market.
              </p>
              <p className="text-sm md:text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed m-0 font-sans">
                From planning and development to deployment and ongoing support, we maintain complete transparency throughout every stage of your project. Our commitment to quality, innovation, and customer satisfaction makes us a trusted technology partner for businesses across various industries.
              </p>
            </div>

            {/* Call To Actions */}
            <div className="flex items-center gap-5 flex-wrap mt-2">
              <a href="/contact" className="sky-contact-us-btn font-sans">
                Get Started Today
                <span className="sky-contact-arrow-w">
                  <svg style={{ width: "14px", height: "14px" }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </span>
              </a>

              <div className="sky-phone-box font-sans">
                <span className="sky-phone-ring-sm">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.122-4.1-6.924-6.924l1.293-.97a1.242 1.242 0 0 0 .417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </span>
                <div>
                  <p className="sky-phone-label">Call Us Now!</p>
                  <a href="tel:+918939540148" className="sky-phone-number">
                    +91 89395 40148
                  </a>
                </div>
              </div>
            </div>

            {/* Divider line */}
            <div className="h-[1px] bg-slate-200 dark:bg-slate-800/80 w-full mt-3" />
          </div>

          {/* RIGHT COLUMN: Interactive Platform Dashboard Explorer */}
          <div className="gsap-company-right-col flex flex-col lg:flex-row gap-6 items-stretch w-full min-h-[460px]">
            
            {/* Column A: Interactive List Tabs (Vertical on desktop, horizontal on mobile) */}
            <div className="flex flex-col gap-3 lg:w-[42%] w-full justify-center">
              {features.map((f, i) => {
                const isActive = activeIndex === i;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    onMouseEnter={() => setActiveIndex(i)}
                    className={`sky-tab-btn flex items-start gap-4 p-4 rounded-xl text-left cursor-pointer outline-none w-full border border-slate-100 dark:border-slate-900 bg-white/40 dark:bg-slate-950/20 backdrop-blur-xs select-none ${
                      isActive ? "sky-tab-btn-active border-slate-200/60 dark:border-slate-800/40" : "hover:bg-slate-50/50 dark:hover:bg-slate-900/30"
                    }`}
                  >
                    <div className={`tab-icon-box w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 border border-slate-200/50 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/30 text-slate-500 dark:text-slate-400`}>
                      {f.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-full dark:bg-slate-900 bg-slate-100" style={{ color: f.color }}>
                          {f.label}
                        </span>
                      </div>
                      <h3 className="text-sm md:text-base font-extrabold text-slate-800 dark:text-slate-100 font-sans m-0 leading-snug">
                        {f.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-sans mt-1 leading-normal line-clamp-1">
                        {f.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Column B: Showcase Window screen */}
            <div className="lg:w-[58%] w-full flex items-stretch">
              <div className="dashboard-screen rounded-2xl overflow-hidden flex flex-col justify-between w-full min-h-[380px] lg:min-h-[440px] relative border z-10">
                
                {/* 1. Header bar */}
                <div className="dashboard-window-bar px-4 py-3 flex items-center justify-between border-b flex-shrink-0 z-10">
                  <div className="flex items-center gap-2">
                    <span className="dashboard-dot bg-red-400" />
                    <span className="dashboard-dot bg-yellow-400" />
                    <span className="dashboard-dot bg-green-400" />
                  </div>
                  <span className="text-[10px] md:text-xs text-slate-400 dark:text-slate-500 font-mono tracking-wide">
                    syscorp-platform.app
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] text-emerald-500 font-bold uppercase tracking-wider font-sans">LIVE</span>
                  </div>
                </div>

                {/* 2. Visual Content Canvas Area */}
                <div className="dashboard-grid-overlay flex-1 p-6 flex flex-col justify-center items-center relative overflow-hidden bg-slate-50/50 dark:bg-slate-950/20">
                  
                  {/* WIDGET 0: Business-Focused Development (Performance & Growth Graph) */}
                  {activeIndex === 0 && (
                    <div className="w-full h-full flex flex-col justify-between relative z-10 animate-fade-in duration-300">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-xs md:text-sm font-bold text-slate-800 dark:text-slate-200 m-0 font-sans">Conversion & Growth</h4>
                          <p className="text-[10px] text-slate-400 dark:text-slate-500 font-sans m-0">Real-time business performance</p>
                        </div>
                        <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 rounded-md px-2 py-0.5 flex items-center gap-1">
                          <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                          </svg>
                          +42.8%
                        </span>
                      </div>

                      {/* SVG Line Graph */}
                      <div className="flex-1 w-full flex items-center justify-center min-h-[140px] my-3 relative">
                        <svg className="w-full h-full max-h-[140px]" viewBox="0 0 320 120" fill="none" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="graphGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#1A5CDD" stopOpacity="0.25" />
                              <stop offset="100%" stopColor="#1A5CDD" stopOpacity="0.0" />
                            </linearGradient>
                            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                              <stop offset="0%" stopColor="#1A5CDD" />
                              <stop offset="60%" stopColor="#60A5FA" />
                              <stop offset="100%" stopColor="#10B981" />
                            </linearGradient>
                          </defs>

                          {/* Grid Lines */}
                          <line x1="0" y1="30" x2="320" y2="30" stroke="rgba(26,92,221,0.04)" strokeWidth="1" />
                          <line x1="0" y1="60" x2="320" y2="60" stroke="rgba(26,92,221,0.04)" strokeWidth="1" />
                          <line x1="0" y1="90" x2="320" y2="90" stroke="rgba(26,92,221,0.04)" strokeWidth="1" />

                          {/* Area under line */}
                          <path
                            d="M 0,110 C 60,110 80,90 120,65 C 160,40 200,15 320,15 L 320,120 L 0,120 Z"
                            fill="url(#graphGradient)"
                          />

                          {/* Animated Stroke Line */}
                          <path
                            d="M 0,110 C 60,110 80,90 120,65 C 160,40 200,15 320,15"
                            stroke="url(#lineGradient)"
                            strokeWidth="3.2"
                            strokeLinecap="round"
                            className="animate-draw-chart"
                          />

                          {/* Pulse points */}
                          <circle cx="120" cy="65" r="4.5" fill="#60A5FA" />
                          <circle cx="320" cy="15" r="5" fill="#10B981" />
                        </svg>

                        {/* Pulsing indicator orb at peak */}
                        <div className="absolute right-0 top-[2px] w-4 h-4 bg-emerald-400/20 border border-emerald-400 rounded-full animate-ping pointer-events-none" />
                      </div>

                      {/* Floating Micro cards */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="animate-float-1 bg-white/70 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-800/50 p-2.5 rounded-lg flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.5 4.5 6.75-6.75M21 9v6m0-6H15" />
                            </svg>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-400 dark:text-slate-500 block uppercase font-bold font-sans">ROI multiplier</span>
                            <span className="text-xs md:text-sm font-extrabold text-slate-800 dark:text-slate-100 font-mono">3.5x Gained</span>
                          </div>
                        </div>

                        <div className="animate-float-2 bg-white/70 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-800/50 p-2.5 rounded-lg flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center text-blue-500">
                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-400 dark:text-slate-500 block uppercase font-bold font-sans">Engagement</span>
                            <span className="text-xs md:text-sm font-extrabold text-slate-800 dark:text-slate-100 font-mono">+124% Active</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* WIDGET 1: Modern Technology Stack (Topology Hub & logs) */}
                  {activeIndex === 1 && (
                    <div className="w-full h-full flex flex-col justify-between relative z-10 animate-fade-in duration-300">
                      
                      {/* Top Topology Canvas */}
                      <div className="flex-1 w-full relative flex items-center justify-center min-h-[160px]">
                        
                        {/* Connection Lines (SVGs behind) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 280 160">
                          <g stroke="rgba(26,92,221,0.18)" strokeWidth="1.5">
                            {/* Lines from center (140, 80) to satellite nodes */}
                            <line x1="140" y1="80" x2="50" y2="40" className="animate-dash-lines" strokeDashoffset="0" />
                            <line x1="140" y1="80" x2="230" y2="40" className="animate-dash-lines" strokeDashoffset="0" />
                            <line x1="140" y1="80" x2="50" y2="120" className="animate-dash-lines" strokeDashoffset="0" />
                            <line x1="140" y1="80" x2="230" y2="120" className="animate-dash-lines" strokeDashoffset="0" />
                          </g>
                        </svg>

                        {/* Central Hub Core Node */}
                        <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-blue-500 flex flex-col items-center justify-center z-10 relative shadow-[0_0_20px_rgba(26,92,221,0.25)]">
                          <div className="absolute inset-0 rounded-full border border-blue-400 animate-data-pulse pointer-events-none" />
                          <span className="text-[10px] font-bold text-white font-sans tracking-tight">SYSCORP</span>
                          <span className="text-[7px] font-mono text-blue-400 uppercase tracking-widest mt-0.5">CORE</span>
                        </div>

                        {/* Satellites */}
                        {/* React Node (Top-Left) */}
                        <div className="animate-float-1 absolute left-[15%] top-[10%] px-2.5 py-1 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-md shadow-xs flex items-center gap-1.5 text-[9px] font-bold text-slate-800 dark:text-slate-200">
                          <span className="w-2 h-2 rounded-full bg-sky-400" />
                          React / Next
                        </div>

                        {/* Cloud Node (Top-Right) */}
                        <div className="animate-float-2 absolute right-[15%] top-[10%] px-2.5 py-1 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-md shadow-xs flex items-center gap-1.5 text-[9px] font-bold text-slate-800 dark:text-slate-200">
                          <span className="w-2 h-2 rounded-full bg-orange-400" />
                          Cloud (AWS)
                        </div>

                        {/* TypeScript Node (Bottom-Left) */}
                        <div className="animate-float-2 absolute left-[15%] bottom-[12%] px-2.5 py-1 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-md shadow-xs flex items-center gap-1.5 text-[9px] font-bold text-slate-800 dark:text-slate-200">
                          <span className="w-2 h-2 rounded-full bg-blue-500" />
                          TypeScript
                        </div>

                        {/* Node.js Node (Bottom-Right) */}
                        <div className="animate-float-1 absolute right-[15%] bottom-[12%] px-2.5 py-1 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-md shadow-xs flex items-center gap-1.5 text-[9px] font-bold text-slate-800 dark:text-slate-200">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          Node APIs
                        </div>

                      </div>

                      {/* Mini code console logs */}
                      <div className="bg-slate-900 dark:bg-slate-950/80 border border-slate-800/80 rounded-lg p-3 font-mono text-[9px] md:text-xs text-slate-300 w-full overflow-hidden">
                        <div className="flex items-center justify-between text-slate-500 border-b border-slate-800 pb-1.5 mb-1.5">
                          <span>SYSTEM RUNNER</span>
                          <span className="text-[8px] bg-slate-800 px-1.5 py-0.5 rounded text-blue-400 uppercase">turbopack</span>
                        </div>
                        <div className="flex items-center gap-1 text-emerald-400">
                          <span>✓</span>
                          <span>compiled page.tsx in 34ms</span>
                        </div>
                        <div className="flex items-center gap-1 text-slate-400 mt-0.5">
                          <span className="text-blue-400">&gt;</span>
                          <span>active-stack: Next.js + Turbopack + TS</span>
                          <span className="animate-cursor w-1.5 h-3.5 bg-blue-400 inline-block align-middle" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* WIDGET 2: Transparent Project Management (Timeline Tracker) */}
                  {activeIndex === 2 && (
                    <div className="w-full h-full flex flex-col justify-between relative z-10 animate-fade-in duration-300">
                      
                      {/* Title & overall progress */}
                      <div className="flex justify-between items-center mb-3">
                        <div>
                          <h4 className="text-xs md:text-sm font-bold text-slate-800 dark:text-slate-200 m-0 font-sans">Active Sprint: v2.4.0</h4>
                          <p className="text-[10px] text-slate-400 dark:text-slate-500 font-sans m-0">Milestone: Portal Launch</p>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          {/* Circle progress bar */}
                          <div className="relative w-8 h-8 flex items-center justify-center">
                            <svg className="w-full h-full transform -rotate-95" viewBox="0 0 36 36">
                              <path className="text-slate-200 dark:text-slate-800" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                              <path className="text-amber-500 transition-all duration-1000 ease-out" strokeDasharray={`${sprintProgress}, 100`} strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            </svg>
                            <span className="absolute text-[8px] font-extrabold text-slate-800 dark:text-slate-200 font-mono">78%</span>
                          </div>
                        </div>
                      </div>

                      {/* Agile Columns Board Layout */}
                      <div className="flex-1 grid grid-cols-3 gap-2.5 min-h-[140px] my-1 w-full">
                        
                        {/* Column 1: In Progress */}
                        <div className="bg-slate-100/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/30 rounded-lg p-2 flex flex-col gap-2">
                          <span className="text-[8px] font-bold text-blue-500 uppercase tracking-wider font-sans">IN PROGRESS</span>
                          <div className="bg-white dark:bg-slate-950 border-l-2 border-blue-500 border-y border-r border-slate-200/50 dark:border-slate-800/40 p-2 rounded shadow-[0_2px_4px_rgba(0,0,0,0.01)] flex flex-col gap-1.5">
                            <span className="text-[9px] font-bold text-slate-700 dark:text-slate-300 font-sans leading-tight">API Gateway</span>
                            <div className="flex items-center justify-between text-[7px] text-slate-400">
                              <span className="bg-blue-50 dark:bg-blue-900/30 px-1 py-0.2 rounded text-blue-500">Core</span>
                              <span className="font-mono">Task #402</span>
                            </div>
                          </div>
                        </div>

                        {/* Column 2: In Review */}
                        <div className="bg-slate-100/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/30 rounded-lg p-2 flex flex-col gap-2">
                          <span className="text-[8px] font-bold text-amber-500 uppercase tracking-wider font-sans">IN REVIEW</span>
                          <div className="bg-white dark:bg-slate-950 border-l-2 border-amber-500 border-y border-r border-slate-200/50 dark:border-slate-800/40 p-2 rounded shadow-[0_2px_4px_rgba(0,0,0,0.01)] flex flex-col gap-1.5">
                            <span className="text-[9px] font-bold text-slate-700 dark:text-slate-300 font-sans leading-tight">Security Review</span>
                            <div className="flex items-center justify-between text-[7px] text-slate-400">
                              <span className="bg-amber-50 dark:bg-amber-900/30 px-1 py-0.2 rounded text-amber-500">Audit</span>
                              <span className="font-mono">Task #388</span>
                            </div>
                          </div>
                        </div>

                        {/* Column 3: Completed */}
                        <div className="bg-slate-100/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/30 rounded-lg p-2 flex flex-col gap-2">
                          <span className="text-[8px] font-bold text-emerald-500 uppercase tracking-wider font-sans">DONE</span>
                          
                          <div className="bg-white dark:bg-slate-950 border-l-2 border-emerald-500 border-y border-r border-slate-200/50 dark:border-slate-800/40 p-1.5 rounded opacity-75 flex flex-col gap-1">
                            <span className="text-[9px] font-bold text-slate-600 dark:text-slate-400 line-through font-sans leading-tight">Database Schema</span>
                            <span className="text-[7px] font-mono text-emerald-500 flex items-center gap-0.5">
                              ✓ Verified
                            </span>
                          </div>

                          <div className="bg-white dark:bg-slate-950 border-l-2 border-emerald-500 border-y border-r border-slate-200/50 dark:border-slate-800/40 p-1.5 rounded opacity-75 flex flex-col gap-1">
                            <span className="text-[9px] font-bold text-slate-600 dark:text-slate-400 line-through font-sans leading-tight">Wireframes V2</span>
                            <span className="text-[7px] font-mono text-emerald-500 flex items-center gap-0.5">
                              ✓ Approved
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Timeline roadmap footer */}
                      <div className="flex items-center justify-between bg-white dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-800/50 p-2.5 rounded-lg w-full text-[9px] md:text-xs">
                        <div className="flex items-center gap-1.5 text-emerald-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span>1. Wireframe</span>
                        </div>
                        <div className="w-4 h-[1px] bg-slate-300 dark:bg-slate-700" />
                        <div className="flex items-center gap-1.5 text-emerald-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span>2. Development</span>
                        </div>
                        <div className="w-4 h-[1px] bg-slate-300 dark:bg-slate-700" />
                        <div className="flex items-center gap-1.5 text-blue-500 font-bold">
                          <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                          <span>3. Client QA</span>
                        </div>
                        <div className="w-4 h-[1px] bg-slate-300 dark:bg-slate-700" />
                        <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                          <span>4. Launch</span>
                        </div>
                      </div>

                    </div>
                  )}

                  {/* WIDGET 3: Long-Term Support (ECG oscilloscope Uptime Monitor) */}
                  {activeIndex === 3 && (
                    <div className="w-full h-full flex flex-col justify-between relative z-10 animate-fade-in duration-300">
                      
                      {/* Metrics Header */}
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-xs md:text-sm font-bold text-slate-800 dark:text-slate-200 m-0 font-sans">Support & Health Hub</h4>
                          <p className="text-[10px] text-slate-400 dark:text-slate-500 font-sans m-0">Constant diagnostic stream</p>
                        </div>
                        
                        <div className="flex flex-col items-end">
                          <span className="text-xs font-bold text-emerald-400 bg-emerald-950/40 dark:bg-emerald-950/40 border border-emerald-500/30 rounded px-2 py-0.5 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            99.99% Uptime
                          </span>
                        </div>
                      </div>

                      {/* ECG Heartbeat Oscilloscope Grid Area */}
                      <div className="flex-1 w-full bg-slate-900 border border-slate-800/80 rounded-xl my-3 p-3 flex flex-col justify-center relative overflow-hidden">
                        
                        {/* Scope grid lines background */}
                        <div className="absolute inset-0 opacity-15 pointer-events-none" style={{
                          backgroundImage: 'linear-gradient(to right, #10B981 1px, transparent 1px), linear-gradient(to bottom, #10B981 1px, transparent 1px)',
                          backgroundSize: '12px 12px'
                        }} />

                        {/* Oscilloscope SVG trace */}
                        <svg className="w-full h-16 relative z-10" viewBox="0 0 300 60" preserveAspectRatio="none">
                          <path
                            d="M 0,30 L 70,30 L 75,10 L 80,50 L 85,30 L 95,30 L 170,30 L 175,10 L 180,50 L 185,30 L 195,30 L 270,30 L 275,10 L 280,50 L 285,30 L 300,30"
                            stroke="#10B981"
                            strokeWidth="2.5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="animate-ecg"
                          />
                        </svg>

                        {/* Bottom Scope Info */}
                        <div className="flex justify-between items-center text-[8px] font-mono text-emerald-500/80 relative z-10 mt-1 border-t border-emerald-500/10 pt-1">
                          <span>SCALE: 100ms/div</span>
                          <span>SWEEP: AUTOTRIGGER</span>
                          <span>SYS: ONLINE</span>
                        </div>

                      </div>

                      {/* Server hardware LED rows */}
                      <div className="bg-slate-900 dark:bg-slate-900/60 border border-slate-800/80 rounded-lg p-2.5 flex flex-col gap-2 w-full">
                        
                        {/* Node Server Row 1 */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <svg width="12" height="12" fill="none" stroke="#60A5FA" strokeWidth="2.5" viewBox="0 0 24 24">
                              <rect x="2" y="5" width="20" height="14" rx="2" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h12M6 15h12" />
                            </svg>
                            <span className="text-[9px] font-bold font-mono text-slate-300">SERVERSTACK_01</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 led-blink-1" />
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 led-blink-2" />
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 led-blink-3" />
                            <span className="text-[8px] text-slate-500 font-mono">API: 24ms</span>
                          </div>
                        </div>

                        {/* Node Server Row 2 */}
                        <div className="flex items-center justify-between border-t border-slate-800/80 pt-1.5">
                          <div className="flex items-center gap-2">
                            <svg width="12" height="12" fill="none" stroke="#60A5FA" strokeWidth="2.5" viewBox="0 0 24 24">
                              <rect x="2" y="5" width="20" height="14" rx="2" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h12M6 15h12" />
                            </svg>
                            <span className="text-[9px] font-bold font-mono text-slate-300">DBCLUSTER_PRIMARY</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 led-blink-3" />
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 led-blink-1" />
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 led-blink-2" />
                            <span className="text-[8px] text-slate-500 font-mono">DB: 1.2ms</span>
                          </div>
                        </div>

                      </div>

                    </div>
                  )}

                </div>

                {/* 3. Footer info bar */}
                <div className="dashboard-window-bar px-4 py-2 border-t flex items-center justify-between flex-shrink-0 z-10 text-[9px] font-mono text-slate-400 dark:text-slate-500">
                  <span>REGION: IN-PNY</span>
                  <span>SSL SECURED: TRUE</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
