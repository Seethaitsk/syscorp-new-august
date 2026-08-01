"use client";

import React, { useState } from "react";

const faqData = [
  {
    question: "Are your development processes transparent?",
    answer: "Yes. We believe in full transparency — every project includes regular status updates, clear milestones, and open communication. You'll always know where your project stands and what comes next.",
    bullets: [
      "Providing Quality Web and Mobile Development Services Together",
      "Expertise Across Software Engineering And Product Strategy Projects",
    ],
  },
  {
    question: "Can you customize projects based on client needs?",
    answer: "Absolutely. Every business is unique, so we develop personalized digital solutions based on your industry, target audience, competition, and specific business goals. No cookie-cutter approaches.",
    bullets: [
      "Custom architecture & tech stack selection",
      "Scalable solutions designed for your growth stage",
    ],
  },
  {
    question: "Do you handle both web and mobile projects?",
    answer: "Yes, we specialize in both web applications and mobile app development, delivering customized solutions based on client requirements, budget, and timelines.",
    bullets: [
      "Providing Quality Web And Mobile Development Services Together",
      "Expertise Across Custom Software And Product Strategy Projects",
    ],
  },
  {
    question: "What services does Syscorp offer?",
    answer: "Syscorp provides complete digital solutions including Custom Software Development, Web & Mobile Apps, SEO, Social Media Marketing, Performance Ads (Google & Meta), Branding & Creative Design, and Website Development.",
    bullets: [
      "Full-stack web & software development",
      "Digital marketing & SEO services",
    ],
  },
  {
    question: "How long does SEO take to show results?",
    answer: "SEO is a long-term strategy. Noticeable improvements typically appear within 3–6 months, depending on industry competition, keyword difficulty, and your website's current state.",
    bullets: [
      "Keyword ranking improvements in 60–90 days",
      "Organic traffic growth visible in 3–6 months",
    ],
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(2); // Default open to 3rd item (index 2)

  return (
    <section
      aria-labelledby="faq-heading"
      className="relative bg-white dark:bg-slate-950 py-24 md:py-32 overflow-hidden transition-colors duration-300"
    >
      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="sky-about-badge-anim flex flex-col gap-[18px]">
              <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 dark:bg-blue-500/10 dark:border-blue-500/20 rounded-full px-3.5 py-1 text-xs font-bold text-[#1A5CDD] dark:text-blue-400 w-fit uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] dark:bg-blue-400 inline-block animate-pulse" />
                Frequently Asked Questions
              </span>
              <h2 id="faq-heading" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight m-0 font-sans tracking-tight">
                Your Questions <span className="text-[#1A5CDD] dark:text-[#60A5FA]">Answered</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-[14.5px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm m-0">
              Find clear, honest answers to common questions from our team of experienced professionals.
            </p>

            {/* Pill Button */}
            <a
              href="/contact"
              className="no-underline inline-flex items-center gap-2.5 bg-[#1A5CDD] dark:bg-[#3B82F6] text-white font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-300 hover:bg-[#154ebc] dark:hover:bg-[#2563EB] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(26,92,221,0.25)] dark:hover:shadow-[0_8px_24px_rgba(59,130,246,0.3)] w-fit mt-2"
            >
              View All FAQ&apos;s
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>

            {/* Divider line */}
            <div className="h-[1px] bg-[#1A5CDD]/10 dark:bg-white/10 my-4" />

            {/* Avatar stack + desc */}
            <div className="flex items-center gap-5">
              <div className="flex -space-x-2.5">
                {/* Custom SVG Avatar 1 */}
                <div className="w-9 h-9 rounded-full border-2 border-white dark:border-[#070b13] bg-gradient-to-tr from-blue-500 to-indigo-400 text-white flex items-center justify-center overflow-hidden">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                {/* Custom SVG Avatar 2 */}
                <div className="w-9 h-9 rounded-full border-2 border-white dark:border-[#070b13] bg-gradient-to-tr from-purple-500 to-pink-400 text-white flex items-center justify-center overflow-hidden">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                {/* Custom SVG Avatar 3 */}
                <div className="w-9 h-9 rounded-full border-2 border-white dark:border-[#070b13] bg-gradient-to-tr from-teal-400 to-emerald-500 text-white flex items-center justify-center overflow-hidden">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                {/* Plus circle */}
                <div className="w-9 h-9 rounded-full border-2 border-white dark:border-[#070b13] bg-gray-900 dark:bg-gray-800 text-white flex items-center justify-center text-[11px] font-extrabold">
                  +10
                </div>
              </div>
              <p className="text-[13.5px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-[240px] m-0 font-medium">
                Answers curated directly from our consulting experts.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {faqData.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                      ? "bg-white dark:bg-[#111726] border-[#1A5CDD]/20 dark:border-[#3B82F6]/30 shadow-[0_16px_36px_rgba(26,92,221,0.05)] dark:shadow-[0_16px_36px_rgba(0,0,0,0.3)]"
                      : "bg-[#F8FAFC]/90 dark:bg-[#121824]/40 border-black/5 dark:border-white/5 hover:bg-white dark:hover:bg-[#121824]/80 hover:border-[#1A5CDD]/10 dark:hover:border-white/10 hover:shadow-[0_8px_20px_rgba(0,0,0,0.02)]"
                    }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none bg-transparent border-none cursor-pointer"
                    aria-expanded={isOpen}
                    id={`faq-btn-${idx}`}
                  >
                    <span className={`text-[15px] md:text-[15.5px] font-bold leading-snug font-sans transition-colors duration-250 ${isOpen
                        ? "text-[#1A5CDD] dark:text-[#60A5FA]"
                        : "text-[#011146] dark:text-gray-200 group-hover:text-[#1A5CDD] dark:group-hover:text-[#60A5FA]"
                      }`}>
                      {idx + 1}. {item.question}
                    </span>

                    {/* Rotating Action Indicator */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen
                        ? "bg-[#1A5CDD] dark:bg-[#3B82F6] text-white rotate-45"
                        : "bg-gray-200/60 dark:bg-gray-800/80 text-gray-500 dark:text-gray-400 group-hover:bg-[#1A5CDD]/10 group-hover:text-[#1A5CDD] dark:group-hover:bg-[#3B82F6]/10 dark:group-hover:text-[#60A5FA]"
                      }`}>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </div>
                  </button>

                  {/* Smooth height transition body using CSS Grid */}
                  <div
                    className="transition-all duration-300 ease-in-out"
                    style={{
                      display: "grid",
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-5 pt-1 border-t border-gray-100 dark:border-white/[0.04]">
                        <p className="text-[14px] text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                          {item.answer}
                        </p>
                        {item.bullets && item.bullets.length > 0 && (
                          <ul className="flex flex-col gap-2.5 pl-0.5 list-none m-0">
                            {item.bullets.map((bullet, bidx) => (
                              <li key={bidx} className="flex items-start gap-2.5 text-[13.5px] font-semibold text-gray-700 dark:text-gray-200 leading-normal">
                                <svg className="w-4 h-4 text-[#1A5CDD] dark:text-[#60A5FA] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
