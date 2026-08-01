"use client";
import React from "react";

const plans = [
  {
    name: "SEO & Growth Plan",
    price: "$149",
    iconBg: "#10B981", // Emerald
    isPopular: false,
    desc: "Boost your online visibility, search rankings, and attract organic traffic with our growth services.",
    icon: (
      <svg width="20" height="20" fill="none" stroke="#fff" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.5 4.5 6.75-6.75M21 9v6m0-6H15" />
      </svg>
    ),
    features: [
      "Keyword Research & Strategy",
      "On-Page SEO Optimization",
      "Technical SEO Auditing",
      "High-Quality Link Building",
      "Monthly Performance Analytics",
    ],
  },
  {
    name: "Website Development Plan",
    price: "$299",
    iconBg: "#1A5CDD", // Brand Blue
    isPopular: true,
    desc: "Get a stunning, custom-built website optimized for performance, UX, and direct conversions.",
    icon: (
      <svg width="20" height="20" fill="none" stroke="#fff" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    features: [
      "Modern Next.js / React Stack",
      "Custom UI/UX Premium Design",
      "Fully Responsive & Mobile-First",
      "Integrated Content CMS",
      "SEO Optimized & Fast Loading",
    ],
  },
  {
    name: "Cloud & Hosting Plan",
    price: "$89",
    iconBg: "#8B5CF6", // Purple
    isPopular: false,
    desc: "Secure, reliable, and high-performance server hosting designed for seamless scaling.",
    icon: (
      <svg width="20" height="20" fill="none" stroke="#fff" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.25h13.5m-13.5 4.5h13.5m-13.5 4.5h13.5m-13.5 4.5h13.5M3 3h18v18H3V3z" />
      </svg>
    ),
    features: [
      "99.99% Uptime Guarantee",
      "SSL Certificate & DDoS Protection",
      "Automated Daily System Backups",
      "AWS / Cloudflare Deployment",
      "24/7 Proactive Server Monitoring",
    ],
  },
];

export default function PricingSection() {
  return (
    <section
      aria-labelledby="pricing-heading"
      className="bg-[#F0F8FF] dark:bg-[#080f25] py-[100px] relative overflow-hidden transition-colors duration-500"
    >
      <style>{`
        .sky-pricing-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .sky-pricing-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Card Wrapper styling */
        .sky-pricing-card {
          background: #FFFFFF;
          border-radius: 28px;
          border: 1px solid rgba(26, 92, 221, 0.08);
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          transition: all 0.3s ease;
          position: relative;
        }
        .sky-pricing-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(26, 92, 221, 0.06);
          border-color: rgba(26, 92, 221, 0.2);
        }
        .dark .sky-pricing-card {
          background: #0d1527;
          border-color: rgba(255, 255, 255, 0.06);
        }
        .dark .sky-pricing-card:hover {
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
          border-color: rgba(255, 255, 255, 0.12);
        }

        .sky-pricing-card-popular {
          background: linear-gradient(135deg, #F0F4FF 0%, #E0EBFF 100%);
          border: 2px solid #1A5CDD;
          border-radius: 28px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          transition: all 0.3s ease;
          position: relative;
        }
        .sky-pricing-card-popular::before {
          content: "MOST POPULAR";
          position: absolute;
          top: -12px;
          right: 24px;
          background: #1A5CDD;
          color: #fff;
          font-size: 9px;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 50px;
          letter-spacing: 0.05em;
          box-shadow: 0 4px 10px rgba(26, 92, 221, 0.2);
        }
        .sky-pricing-card-popular:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 48px rgba(26, 92, 221, 0.15);
        }
        .dark .sky-pricing-card-popular {
          background: linear-gradient(135deg, #0e1d3e 0%, #0c1833 100%);
          border-color: #3B82F6;
        }
        .dark .sky-pricing-card-popular::before {
          background: #3B82F6;
          box-shadow: 0 4px 10px rgba(59, 130, 246, 0.2);
        }
        .dark .sky-pricing-card-popular:hover {
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.4);
        }

        /* Top White Panel */
        .sky-pricing-top-panel {
          background: #F8FAFC;
          border-radius: 20px;
          padding: 28px 24px;
          box-shadow: 0 4px 20px rgba(26, 92, 221, 0.02);
          display: flex;
          flex-direction: column;
        }
        .dark .sky-pricing-top-panel {
          background: #111a2f;
          box-shadow: none;
        }

        .sky-pricing-icon-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        /* Checkmarks */
        .sky-check-circle {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 10px;
          font-weight: 900;
          flex-shrink: 0;
        }

        /* CTA Button styles */
        .sky-pricing-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 14.5px;
          padding: 13px 20px;
          border-radius: 50px;
          transition: all 0.3s ease;
          width: 100%;
          text-align: center;
          margin-top: 12px;
          border: none;
          cursor: pointer;
        }

        .cta-popular {
          background: #1A5CDD;
          color: #ffffff;
        }
        .cta-popular:hover {
          background: #154ebc;
          box-shadow: 0 8px 24px rgba(26, 92, 221, 0.25);
        }
        .dark .cta-popular {
          background: #3B82F6;
          color: #ffffff;
        }
        .dark .cta-popular:hover {
          background: #2563EB;
          box-shadow: 0 8px 24px rgba(59, 130, 246, 0.25);
        }

        .cta-standard {
          background: #0f172a;
          color: #ffffff;
        }
        .cta-standard:hover {
          background: #1e293b;
        }
        .dark .cta-standard {
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .dark .cta-standard:hover {
          background: rgba(255, 255, 255, 0.12);
        }

        .light .highlight-italic {
          color: #1A5CDD;
        }
        .dark .highlight-italic {
          color: #38bdf8;
        }
      `}</style>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>

        {/* Centered Heading and Badge */}
        <div className="sky-about-badge-anim flex flex-col gap-[18px] items-center text-center mb-[64px]">
          <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 dark:bg-blue-500/10 dark:border-blue-500/20 rounded-full px-3.5 py-1 text-xs font-bold text-[#1A5CDD] dark:text-blue-400 w-fit uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] dark:bg-blue-400 inline-block animate-pulse" />
            Our Service Plans
          </span>
          <h2 id="pricing-heading" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight m-0 font-sans tracking-tight">
            Explore Our Service Plans, Exceptional <span className="highlight-italic">Value Guaranteed</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="sky-pricing-grid">
          {plans.map((p, idx) => (
            <div key={idx} className={`${p.isPopular ? "sky-pricing-card-popular" : "sky-pricing-card"} gsap-pricing-card-item`}>

              {/* Top Panel inside Card */}
              <div className="sky-pricing-top-panel">
                <div className="sky-pricing-icon-btn" style={{ background: p.iconBg }}>
                  {p.icon}
                </div>
                <h3 className="text-slate-900 dark:text-white font-extrabold text-base mb-3 font-sans m-0">
                  {p.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-350 text-[13px] leading-relaxed m-0 font-sans">
                  {p.desc}
                </p>
              </div>

              {/* Bottom Panel Features */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 8px 12px" }}>
                <p className="text-slate-900 dark:text-slate-200 font-extrabold text-sm m-0 font-sans">Features Included:</p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "12px", padding: 0, margin: 0 }}>
                  {p.features.map((f, fi) => (
                    <li key={fi} className="text-slate-600 dark:text-slate-300 text-[13px] font-semibold flex items-center gap-2.5 font-sans">
                      <span className="sky-check-circle" style={{ background: p.iconBg }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button className={`sky-pricing-cta ${p.isPopular ? "cta-popular" : "cta-standard"}`}>
                  Get Started
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
