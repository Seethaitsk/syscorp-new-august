"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Trophy, Globe2, ShieldCheck, Sparkles, Star, ArrowRight, CheckCircle2, ThumbsUp, Activity, Clock } from "lucide-react";

const avatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=75&w=60&h=60",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=75&w=60&h=60",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=75&w=60&h=60",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=75&w=60&h=60"
];

const stats = [
  { 
    value: "100+", 
    label: "Projects Successfully\nDelivered", 
    growth: "Success", 
    sub: "Delivered Quality",
    color: "#10B981", // Emerald
    icon: <Globe2 className="w-5 h-5" />
  },
  { 
    value: "50+", 
    label: "Happy Business\nClients", 
    growth: "Growth", 
    sub: "Client Trust",
    color: "#1A5CDD", // Brand Blue
    icon: <Star className="w-5 h-5" />
  },
  { 
    value: "8+", 
    label: "Years of Industry\nExperience", 
    growth: "Expertise", 
    sub: "Engineering Depth",
    color: "#8B5CF6", // Purple
    icon: <Trophy className="w-5 h-5" />
  },
  { 
    value: "98%", 
    label: "Client\nSatisfaction", 
    growth: "Rating", 
    sub: "Top Rated",
    color: "#F59E0B", // Amber
    icon: <ShieldCheck className="w-5 h-5" />
  },
  { 
    value: "24/7", 
    label: "Technical\nSupport", 
    growth: "Active", 
    sub: "Always Available",
    color: "#EF4444", // Red
    icon: <Sparkles className="w-5 h-5" />
  }
];

export default function AchievementsSection() {
  const [activeStatIndex, setActiveStatIndex] = useState<number>(0);
  const [gaugeOffset, setGaugeOffset] = useState(283);

  // Animate satisfaction gauge when Widget 3 (index 3) is active
  useEffect(() => {
    if (activeStatIndex === 3) {
      setGaugeOffset(283);
      const timer = setTimeout(() => {
        // 98% of 283 = ~277.34. Remaining offset = 283 - 277.34 = ~5.6
        setGaugeOffset(283 - (283 * 0.98));
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [activeStatIndex]);

  return (
    <section 
      aria-labelledby="achievements-heading"
      className="py-24 lg:py-32 bg-white dark:bg-slate-950 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-500"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#1A5CDD]/10 dark:bg-[#1A5CDD]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#38bdf8]/10 dark:bg-[#38bdf8]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative Grid Mesh overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#1A5CDD_1px,transparent_1px)] dark:bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] dark:opacity-[0.06] pointer-events-none" />

      <style>{`
        /* Achievements Console Style Tokens */
        .console-screen {
          background: #ffffff;
          border: 1px solid rgba(26, 92, 221, 0.08);
          box-shadow: 0 20px 40px rgba(26, 92, 221, 0.03);
          transition: all 0.4s ease;
        }
        .dark .console-screen {
          background: #090f25;
          border-color: rgba(255, 255, 255, 0.08);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        }

        .console-window-bar {
          background: #f8fafc;
          border-bottom: 1px solid rgba(26, 92, 221, 0.06);
        }
        .dark .console-window-bar {
          background: #0f172a;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .console-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .console-grid-overlay {
          background-image: radial-gradient(rgba(26, 92, 221, 0.08) 1.2px, transparent 1.2px);
          background-size: 16px 16px;
        }
        .dark .console-grid-overlay {
          background-image: radial-gradient(rgba(96, 165, 250, 0.08) 1.2px, transparent 1.2px);
        }

        /* Dual-Typography Accent theme overrides */
        .light .highlight-italic {
          color: #1A5CDD;
        }
        .dark .highlight-italic {
          color: #38bdf8;
        }

        /* Widget Animations */
        @keyframes drawGeoLine {
          to { stroke-dashoffset: 0; }
        }
        .animate-draw-geo {
          stroke-dasharray: 240;
          stroke-dashoffset: 240;
          animation: drawGeoLine 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes dataPulse {
          0% { transform: scale(0.95); opacity: 0.3; }
          50% { transform: scale(1.15); opacity: 0.6; }
          100% { transform: scale(1.35); opacity: 0; }
        }
        .animate-data-pulse {
          animation: dataPulse 2s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }

        @keyframes sweepGrid {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-sweep {
          animation: sweepGrid 4s linear infinite;
        }

        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .animate-float-card-1 {
          animation: floatCard 4s ease-in-out infinite;
        }
        .animate-float-card-2 {
          animation: floatCard 4s ease-in-out infinite 2s;
        }

        @keyframes drawTimelineProgress {
          to { stroke-dashoffset: 0; }
        }
        .animate-draw-timeline {
          stroke-dasharray: 180;
          stroke-dashoffset: 180;
          animation: drawTimelineProgress 2s ease-out forwards;
        }

        @keyframes ecgSweep {
          0% { stroke-dashoffset: 600; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-ecg-support {
          stroke-dasharray: 600;
          stroke-dashoffset: 600;
          animation: ecgSweep 2.5s linear infinite;
        }

        @keyframes blinkLight {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        .led-blink-1 { animation: blinkLight 1.2s infinite 0.1s; }
        .led-blink-2 { animation: blinkLight 0.9s infinite 0.4s; }
        .led-blink-3 { animation: blinkLight 1.5s infinite 0.7s; }

        /* Stat tab card active highlight */
        .stat-tab-card {
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .stat-tab-card-active {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(26, 92, 221, 0.08);
          border-color: rgba(26, 92, 221, 0.25) !important;
          background: rgba(26, 92, 221, 0.04) !important;
        }
        .dark .stat-tab-card-active {
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.35);
          border-color: rgba(26, 92, 221, 0.4) !important;
          background: rgba(26, 92, 221, 0.1) !important;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* TOP SECTION: Interactive Console + Main Headers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* LEFT COLUMN: Interactive Achievements Console */}
          <div className="lg:col-span-5 relative w-full flex items-stretch">
            
            {/* Ambient backlight behind console */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#1A5CDD]/20 to-[#38bdf8]/10 dark:from-[#1A5CDD]/30 dark:to-[#38bdf8]/20 blur-xl animate-pulse pointer-events-none" />
            
            {/* The Console Screen */}
            <div className="console-screen rounded-2xl overflow-hidden flex flex-col justify-between w-full min-h-[380px] sm:min-h-[400px] relative border z-10">
              
              {/* Window Header Bar */}
              <div className="console-window-bar px-4 py-3 flex items-center justify-between border-b flex-shrink-0 z-10">
                <div className="flex items-center gap-2">
                  <span className="console-dot bg-red-400" />
                  <span className="console-dot bg-yellow-400" />
                  <span className="console-dot bg-green-400" />
                </div>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono tracking-wide">
                  syscorp-achievements-console.sh
                </span>
                <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-2 py-0.5 rounded">
                  <span className="w-1 h-1 rounded-full bg-blue-500 inline-block animate-ping" />
                  <span className="text-[8px] text-blue-500 dark:text-blue-400 font-bold uppercase tracking-wider font-sans">SECURE</span>
                </div>
              </div>

              {/* Console Canvas Screen */}
              <div className="console-grid-overlay flex-1 p-6 flex flex-col justify-center items-center relative overflow-hidden bg-slate-50/50 dark:bg-slate-950/20">
                
                {/* WIDGET 0: Projects Delivered (Geo deployments) */}
                {activeStatIndex === 0 && (
                  <div className="w-full h-full flex flex-col justify-between relative z-10 animate-fade-in duration-300">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xs md:text-sm font-bold text-slate-800 dark:text-slate-200 m-0 font-sans">Deployment Network</h4>
                        <p className="text-[10px] text-slate-400 dark:text-slate-500 font-sans m-0">Live project releases</p>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 rounded px-2 py-0.5 uppercase tracking-wide">
                        Active Releases
                      </span>
                    </div>

                    {/* Dotted Geo Connection lines */}
                    <div className="flex-1 w-full relative flex items-center justify-center min-h-[140px] my-2">
                      
                      {/* Grid Sweep effect */}
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 via-blue-500/5 to-blue-500/0 h-1/2 w-full animate-sweep pointer-events-none" />

                      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 280 140">
                        {/* Lines from center (140, 70) */}
                        <path d="M 140,70 Q 90,30 40,30" fill="none" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="1.5" />
                        <path d="M 140,70 Q 110,40 80,20" fill="none" stroke="rgba(26, 92, 221, 0.15)" strokeWidth="1.5" />
                        <path d="M 140,70 Q 185,75 230,80" fill="none" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="1.5" />
                        <path d="M 140,70 Q 190,95 240,110" fill="none" stroke="rgba(26, 92, 221, 0.15)" strokeWidth="1.5" />

                        {/* Flowing animated light streams */}
                        <path d="M 140,70 Q 90,30 40,30" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="5, 5" className="animate-draw-geo" />
                        <path d="M 140,70 Q 110,40 80,20" fill="none" stroke="#1A5CDD" strokeWidth="2" strokeDasharray="5, 5" className="animate-draw-geo" />
                        <path d="M 140,70 Q 185,75 230,80" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="5, 5" className="animate-draw-geo" />
                        <path d="M 140,70 Q 190,95 240,110" fill="none" stroke="#1A5CDD" strokeWidth="2" strokeDasharray="5, 5" className="animate-draw-geo" />
                      </svg>

                      {/* Core Node Pondicherry */}
                      <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-[#10B981] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                        <div className="absolute w-12 h-12 rounded-full border border-[#10B981] animate-data-pulse" />
                        <span className="text-[9px] font-black text-white">IN-PNY</span>
                      </div>

                      {/* Satellites */}
                      <span className="absolute left-[8%] top-[14%] text-[8px] font-bold px-2 py-0.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded text-slate-700 dark:text-slate-300">
                        USA
                      </span>
                      <span className="absolute left-[24%] top-[4%] text-[8px] font-bold px-2 py-0.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded text-slate-700 dark:text-slate-300">
                        Europe
                      </span>
                      <span className="absolute right-[14%] top-[50%] text-[8px] font-bold px-2 py-0.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded text-slate-700 dark:text-slate-300">
                        Singapore
                      </span>
                      <span className="absolute right-[8%] bottom-[12%] text-[8px] font-bold px-2 py-0.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded text-slate-700 dark:text-slate-300">
                        Australia
                      </span>

                    </div>

                    <div className="bg-slate-900 dark:bg-slate-950/80 border border-slate-800/80 rounded-lg p-2.5 font-mono text-[9px] md:text-[10px] text-slate-300">
                      <div className="flex justify-between items-center text-slate-500 pb-1 mb-1 border-b border-slate-800">
                        <span>RELEASE MONITOR</span>
                        <span className="text-[7px] text-emerald-400 font-bold uppercase">SYNCED</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-emerald-400">
                        <span>✓</span>
                        <span>100+ Production-ready codebases active</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* WIDGET 1: Happy Clients (Testimonial Card Stack) */}
                {activeStatIndex === 1 && (
                  <div className="w-full h-full flex flex-col justify-between relative z-10 animate-fade-in duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-xs md:text-sm font-bold text-slate-800 dark:text-slate-200 m-0 font-sans">Client Feedback</h4>
                        <p className="text-[10px] text-slate-400 dark:text-slate-500 font-sans m-0">Verified client testimonials</p>
                      </div>
                      <div className="flex items-center gap-1 text-amber-500 text-xs font-black">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>5.0 Rating</span>
                      </div>
                    </div>

                    {/* Floating Review Cards Stack */}
                    <div className="flex-1 flex flex-col gap-3 justify-center">
                      
                      {/* Card 1 */}
                      <div className="animate-float-card-1 bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-800/50 p-3 rounded-xl shadow-xs flex gap-3 items-start">
                        <Image
                          src={avatars[0]}
                          alt="FinTech Client Avatar"
                          width={28}
                          height={28}
                          className="rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] font-black text-slate-800 dark:text-slate-200">Director of Tech</span>
                            <span className="text-[8px] bg-blue-50 dark:bg-blue-900/30 px-1 py-0.2 rounded text-blue-500 font-bold">FinTech Portal</span>
                          </div>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400 font-sans italic leading-normal m-0 mt-1">
                            &ldquo;Syscorp helped us scale our portal 10x and automate processes with absolute engineering excellence.&rdquo;
                          </p>
                        </div>
                      </div>

                      {/* Card 2 */}
                      <div className="animate-float-card-2 bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-800/50 p-3 rounded-xl shadow-xs flex gap-3 items-start">
                        <Image
                          src={avatars[2]}
                          alt="SaaS Founder Avatar"
                          width={28}
                          height={28}
                          className="rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] font-black text-slate-800 dark:text-slate-200">SaaS Founder</span>
                            <span className="text-[8px] bg-emerald-50 dark:bg-emerald-900/30 px-1 py-0.2 rounded text-emerald-500 font-bold">Health App</span>
                          </div>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400 font-sans italic leading-normal m-0 mt-1">
                            &ldquo;Incredible speed of delivery and robust custom architectures. A reliable engineering team.&rdquo;
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* WIDGET 2: Timeline Experience (Evolution) */}
                {activeStatIndex === 2 && (
                  <div className="w-full h-full flex flex-col justify-between relative z-10 animate-fade-in duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-xs md:text-sm font-bold text-slate-800 dark:text-slate-200 m-0 font-sans">Engineering Evolution</h4>
                        <p className="text-[10px] text-slate-400 dark:text-slate-500 font-sans m-0">Syscorp growth history</p>
                      </div>
                      <span className="text-[10px] font-bold text-purple-500 bg-purple-500/10 border border-purple-500/20 rounded px-2 py-0.5">
                        Est. 2018
                      </span>
                    </div>

                    {/* Timeline Tracker */}
                    <div className="flex-1 w-full relative flex flex-col justify-between p-2">
                      
                      {/* SVGs vertical line track */}
                      <svg className="absolute left-[20px] top-[10px] bottom-[10px] w-1 hover:opacity-100 pointer-events-none" preserveAspectRatio="none">
                        <line x1="0" y1="0" x2="0" y2="100%" stroke="rgba(139, 92, 246, 0.15)" strokeWidth="2" />
                        <line x1="0" y1="0" x2="0" y2="100%" stroke="#8B5CF6" strokeWidth="2" className="animate-draw-timeline" />
                      </svg>

                      {/* Milestone Row 1 */}
                      <div className="flex items-center gap-5 ml-1.5 relative z-10">
                        <div className="w-2.5 h-2.5 rounded-full bg-purple-500 ring-4 ring-purple-500/20" />
                        <div>
                          <span className="text-[9px] font-black text-purple-500 block font-mono">2018 ➔ FOUNDATION</span>
                          <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300 leading-none">Custom Web App Studio Setup</span>
                        </div>
                      </div>

                      {/* Milestone Row 2 */}
                      <div className="flex items-center gap-5 ml-1.5 relative z-10">
                        <div className="w-2.5 h-2.5 rounded-full bg-purple-500 ring-4 ring-purple-500/20" />
                        <div>
                          <span className="text-[9px] font-black text-purple-500 block font-mono">2021 ➔ ERP & INTEGRATIONS</span>
                          <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300 leading-none">Enterprise ERP & API Integrations</span>
                        </div>
                      </div>

                      {/* Milestone Row 3 */}
                      <div className="flex items-center gap-5 ml-1.5 relative z-10">
                        <div className="w-2.5 h-2.5 rounded-full bg-purple-500 ring-4 ring-purple-500/20" />
                        <div>
                          <span className="text-[9px] font-black text-purple-500 block font-mono">2024 ➔ CLOUD SCALE</span>
                          <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300 leading-none">DevOps, AWS, and Cloud Native Architectures</span>
                        </div>
                      </div>

                      {/* Milestone Row 4 */}
                      <div className="flex items-center gap-5 ml-1.5 relative z-10">
                        <div className="w-3.5 h-3.5 rounded-full bg-purple-500 flex items-center justify-center ring-4 ring-purple-500/30">
                          <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                        </div>
                        <div>
                          <span className="text-[9px] font-black text-purple-400 block font-mono">2026 ➔ MODERN TECH LEADERS</span>
                          <span className="text-[10px] font-extrabold text-slate-800 dark:text-slate-100 leading-none">Next-Gen IT Transformation Partner</span>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* WIDGET 3: Client Satisfaction (Radial Quality Dial) */}
                {activeStatIndex === 3 && (
                  <div className="w-full h-full flex flex-col justify-between relative z-10 animate-fade-in duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-xs md:text-sm font-bold text-slate-800 dark:text-slate-200 m-0 font-sans">Quality Index Score</h4>
                        <p className="text-[10px] text-slate-400 dark:text-slate-500 font-sans m-0">Performance scorecard</p>
                      </div>
                      <span className="text-[10px] font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20 rounded px-2 py-0.5">
                        Top Rated
                      </span>
                    </div>

                    {/* Radial Dial & Core Web Vitals checklist */}
                    <div className="flex-1 flex items-center justify-around gap-6">
                      
                      {/* Left: Circular Dial Gauge */}
                      <div className="relative w-24 h-24 flex items-center justify-center flex-shrink-0">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="45" stroke="rgba(245, 158, 11, 0.08)" strokeWidth="8" fill="none" />
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            stroke="#F59E0B"
                            strokeWidth="8"
                            strokeLinecap="round"
                            fill="none"
                            strokeDasharray="283"
                            strokeDashoffset={gaugeOffset}
                            className="transition-all duration-1000 ease-out"
                          />
                        </svg>
                        <div className="absolute flex flex-col items-center justify-center">
                          <span className="text-lg font-black text-slate-800 dark:text-slate-100 font-mono leading-none">98%</span>
                          <span className="text-[8px] text-slate-400 dark:text-slate-500 font-sans mt-0.5 font-bold uppercase tracking-wider">Rating</span>
                        </div>
                      </div>

                      {/* Right: Core Vitals checklist */}
                      <div className="flex flex-col gap-2 font-sans text-[10px] text-slate-600 dark:text-slate-300">
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center text-[8px] font-bold">✓</span>
                          <span>Core Web Vitals: 100/100</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center text-[8px] font-bold">✓</span>
                          <span>Security Compliance: PASSED</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center text-[8px] font-bold">✓</span>
                          <span>Client Retention Rate: 96%</span>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* WIDGET 4: Technical Support (ECG Scope + Live Channels) */}
                {activeStatIndex === 4 && (
                  <div className="w-full h-full flex flex-col justify-between relative z-10 animate-fade-in duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-xs md:text-sm font-bold text-slate-800 dark:text-slate-200 m-0 font-sans">Active Support Gateways</h4>
                        <p className="text-[10px] text-slate-400 dark:text-slate-500 font-sans m-0">Live resolution timeline</p>
                      </div>
                      <span className="text-[10px] font-bold text-red-500 bg-red-500/10 border border-red-500/20 rounded px-2 py-0.5">
                        SLA MET: 99.8%
                      </span>
                    </div>

                    {/* Support grid & heartbeat scope */}
                    <div className="flex-1 w-full flex flex-col justify-center gap-2.5">
                      
                      {/* Heartbeat path trace */}
                      <div className="bg-slate-900 border border-slate-800/80 rounded-lg p-2.5 relative overflow-hidden h-14 flex flex-col justify-center">
                        <div className="absolute inset-0 opacity-10" style={{
                          backgroundImage: 'linear-gradient(to right, #EF4444 1px, transparent 1px), linear-gradient(to bottom, #EF4444 1px, transparent 1px)',
                          backgroundSize: '10px 10px'
                        }} />
                        <svg className="w-full h-8 relative z-10" viewBox="0 0 260 40" preserveAspectRatio="none">
                          <path
                            d="M 0,20 L 60,20 L 65,5 L 70,35 L 75,20 L 85,20 L 150,20 L 155,5 L 160,35 L 165,20 L 175,20 L 260,20"
                            stroke="#EF4444"
                            strokeWidth="2.2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="animate-ecg-support"
                          />
                        </svg>
                      </div>

                      {/* support channels list */}
                      <div className="bg-slate-900 border border-slate-800/80 rounded-lg p-2 flex flex-col gap-1.5">
                        <div className="flex items-center justify-between text-[9px] font-mono">
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-blue-400" />
                            <span className="text-slate-300 font-bold">Avg Ticket Resolution</span>
                          </div>
                          <span className="text-emerald-400 font-bold">12 Minutes</span>
                        </div>
                        
                        <div className="flex items-center justify-between text-[9px] font-mono border-t border-slate-800 pt-1.5">
                          <div className="flex items-center gap-1.5">
                            <Activity className="w-3.5 h-3.5 text-red-400" />
                            <span className="text-slate-300 font-bold">System Status Diagnostic</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 led-blink-1" />
                            <span className="text-emerald-500 font-bold uppercase text-[8px]">ONLINE</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

              </div>

              {/* Console window footer */}
              <div className="console-window-bar px-4 py-2.5 border-t flex items-center justify-between flex-shrink-0 z-10 text-[9px] font-mono text-slate-400 dark:text-slate-500">
                <span>SYSTEM REGISTRY: OK</span>
                <span>DB ACTIVE: 100%</span>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: Headers, Trust Pilot rating & checklists */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-[#1A5CDD]/10 dark:bg-[#38bdf8]/10 text-[#1A5CDD] dark:text-[#38bdf8] border border-[#1A5CDD]/20 dark:border-[#38bdf8]/30">
              <Sparkles className="w-3.5 h-3.5" />
              Syscorp Achievements & Milestones
            </div>

            {/* Main Title with Dual-Typography highlight-italic */}
            <h2 
              id="achievements-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12] font-sans"
            >
              Our Numbers <br className="hidden sm:inline" />
              <span className="highlight-italic">Speak for Themselves</span>
            </h2>

            {/* Satisfied Clients Avatar and rating Stack */}
            <div className="flex flex-wrap items-center gap-4 p-3 bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-2xl w-fit">
              <div className="flex -space-x-3 overflow-hidden">
                {avatars.map((src, idx) => (
                  <Image
                    key={idx}
                    src={src}
                    alt="Syscorp satisfied client avatar"
                    width={38}
                    height={38}
                    className="inline-block h-9.5 w-9.5 rounded-full ring-2 ring-white dark:ring-slate-950 object-cover"
                  />
                ))}
              </div>
              <div className="text-xs font-bold text-slate-700 dark:text-slate-300 pr-2">
                <span className="text-slate-900 dark:text-white font-extrabold">25,000+ Enterprise Users</span>
                <div className="flex items-center gap-1 text-amber-500 text-[10px] mt-0.5 font-bold">
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <span className="text-slate-500 dark:text-slate-400 font-semibold ml-1">(4.9/5 rating)</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl font-sans">
              At Syscorp, we are dedicated to delivering high-quality, scalable digital products and custom software solutions designed to accelerate business growth.
            </p>

            {/* Checklist elements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2.5 text-xs font-extrabold text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#1A5CDD] dark:text-[#38bdf8] flex-shrink-0" />
                100/100 Core Web Vitals Guaranteed
              </div>
              <div className="flex items-center gap-2.5 text-xs font-extrabold text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#1A5CDD] dark:text-[#38bdf8] flex-shrink-0" />
                Sub-Second Server Action Velocity
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3 font-sans">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#1A5CDD] hover:bg-[#154ebc] dark:bg-[#38bdf8] dark:hover:bg-[#0284c7] text-white dark:text-[#011146] font-extrabold text-sm px-7 py-4 rounded-full shadow-lg shadow-blue-500/20 dark:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                Get a Free Consultation
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>

              <Link
                href="/services/website-development"
                className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/15 text-slate-900 dark:text-white font-extrabold text-sm px-6 py-4 rounded-full border border-slate-200 dark:border-white/15 transition-all duration-300"
              >
                Explore Stack
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

        {/* BOTTOM SECTION: 2026 Interactive Border-Row Stat Cards */}
        <div className="relative pt-12 border-t border-slate-200 dark:border-slate-800/80">
          
          {/* Subtle Glowing Center Accent Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#1A5CDD] dark:via-[#38bdf8] to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {stats.map((item, index) => {
              const isActive = activeStatIndex === index;
              return (
                <button 
                  key={index} 
                  onClick={() => setActiveStatIndex(index)}
                  onMouseEnter={() => setActiveStatIndex(index)}
                  className={`group text-left border rounded-[20px] p-6 relative transition-all duration-300 ease-out hover:-translate-y-1 flex flex-col justify-between min-h-[160px] cursor-pointer select-none w-full outline-none stat-tab-card ${
                    isActive 
                      ? "stat-tab-card-active" 
                      : "bg-[#1A5CDD]/[0.03] dark:bg-white/[0.02] border-[#1A5CDD]/[0.06] dark:border-white/[0.05] hover:bg-white/[0.95] dark:hover:bg-slate-900/50 hover:border-[#1A5CDD]/15 dark:hover:border-blue-500/20 hover:shadow-[0_12px_30px_rgba(26,92,221,0.04)] dark:hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4 w-full">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight font-sans leading-none group-hover:text-[#1A5CDD] dark:group-hover:text-[#38bdf8] transition-colors duration-300" style={isActive ? { color: item.color } : {}}>
                      {item.value}
                    </span>
                    
                    {/* Icon container */}
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ 
                      color: item.color, 
                      backgroundColor: isActive ? `${item.color}15` : "transparent",
                      border: isActive ? `1px solid ${item.color}25` : "none"
                    }}>
                      {item.icon}
                    </div>
                  </div>

                  <div>
                    <span className="text-[13px] font-extrabold text-slate-800 dark:text-slate-200 leading-snug whitespace-pre-line block font-sans">
                      {item.label}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 block mt-1.5">
                      {item.sub}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
