"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSlider1 from "@/components/HeroSlider";
import HeroSlider2 from "@/components/HeroSlider copy";
import HeroSlider3 from "@/components/HeroSlider copy-vedios";
import HeroSlider4 from "@/components/HeroSlider copy 2-color";
import HeroSlider5 from "@/components/HeroSlider copy 3-ani";

const designs = [
  { id: 1, name: "Design 1: Typewriter", label: "Design 1", desc: "Typographic Focus with Typewriter & Hover-Reveal Cards" },
  { id: 2, name: "Design 2: Video Banner", label: "Design 2", desc: "Full-screen Video Banner with Orbits & ScrollTrigger Card Grid" },
  { id: 3, name: "Design 3: Editorial", label: "Design 3", desc: "Symmetric Split Layout with Background Scaling & Stats" },
  { id: 4, name: "Design 4: Canvas Nodes", label: "Design 4", desc: "Interactive Dynamic Particle Canvas & Glass Cards" },
  { id: 5, name: "Design 5: Grid", label: "Design 5", desc: "Responsive Grid Split with Smooth Zoom & GSAP Text Entrance" },
];

export default function HeroDemoPage() {
  const [selectedDesign, setSelectedDesign] = useState(1);

  const activeDesign = designs.find((d) => d.id === selectedDesign) || designs[0];
  const ActiveComponent = selectedDesign === 1 ? HeroSlider4 :
                          selectedDesign === 2 ? HeroSlider3 :
                          selectedDesign === 3 ? HeroSlider2 :
                          selectedDesign === 4 ? HeroSlider5 : HeroSlider1;

  return (
    <div className="min-h-screen bg-[#020512] text-white overflow-x-hidden relative flex flex-col">
      {/* Hide global layout header and footer for this page only */}
      <style>{`
        header.z-50, footer {
          display: none !important;
        }
      `}</style>
      {/* ── SYSCORP DESIGN HEADER (NAVBAR) ── */}
      <header className="sticky top-0 z-[99999] w-full bg-[#010924]/85 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/logo/logo.svg"
              alt="Syscorp Technology"
              width={125}
              height={36}
              className="brightness-0 invert opacity-95 transition-opacity hover:opacity-100"
              style={{ height: "32px", width: "auto", objectFit: "contain" }}
            />
          </Link>

          {/* Center Navigation Selector */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 p-1.5 rounded-full">
            {designs.map((d) => (
              <button
                key={d.id}
                onClick={() => setSelectedDesign(d.id)}
                className={`px-4 py-2 text-xs font-black uppercase tracking-wider rounded-full transition-all duration-300 ${
                  selectedDesign === d.id
                    ? "bg-blue-600 text-white shadow-[0_4px_12px_rgba(37,99,235,0.3)]"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
                title={d.desc}
              >
                {d.label}
              </button>
            ))}
          </nav>

          {/* Right CTA Button */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full border border-white/10 hover:border-white/20 text-white/80 hover:text-white transition-all bg-white/5"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 text-xs font-black uppercase tracking-wider rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-[0_4px_12px_rgba(37,99,235,0.25)] transition-all transform hover:-translate-y-0.5"
            >
              Sign Up
            </Link>
          </div>

        </div>

        {/* Mobile Sub-Navigation Selector */}
        <div className="md:hidden flex items-center justify-center gap-1.5 py-3 border-t border-white/5 bg-[#01071d]/60 overflow-x-auto px-4">
          {designs.map((d) => (
            <button
              key={d.id}
              onClick={() => setSelectedDesign(d.id)}
              className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-full border transition-all ${
                selectedDesign === d.id
                  ? "bg-blue-600 border-blue-500 text-white"
                  : "bg-white/5 border-white/10 text-white/70"
              }`}
            >
              D{d.id}
            </button>
          ))}
        </div>
      </header>

      {/* ── BANNER VIEWPORT ── */}
      <main className="flex-1 w-full relative z-10">
        <ActiveComponent />
      </main>
    </div>
  );
}
