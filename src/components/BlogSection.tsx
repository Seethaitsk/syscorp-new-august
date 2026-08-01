"use client";
import React from "react";

const blogPosts = [
  {
    title: "Modern Software Architecture Trends for 2026",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=60&w=387",
    href: "/blog",
  },
  {
    title: "Benefits Of Custom Development For Enterprise Value",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=60&w=387",
    href: "/blog",
  },
  {
    title: "Scaling SaaS Platforms for High Availability",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=60&w=387",
    href: "/blog",
  },
];

export default function BlogSection() {
  return (
    <section
      aria-labelledby="blog-heading"
      className="bg-[#F0F8FF] dark:bg-[#080f25] py-[100px] overflow-hidden relative transition-colors duration-500"
    >
      <style>{`
        .sky-blog-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 20px;
          margin-bottom: 56px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .sky-blog-cards-container {
          display: flex;
          gap: 32px;
          overflow-x: auto;
          padding: 16px 8px 48px;
          margin: 0 -8px;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none; /* Firefox */
          scroll-snap-type: x mandatory;
        }
        .sky-blog-cards-container::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }

        .sky-blog-card-wrap {
          flex: 1 1 33.333%;
          min-width: 320px;
          scroll-snap-align: start;
          display: flex;
          flex-direction: column;
          gap: 20px;
          text-decoration: none;
          transition: transform 0.3s ease;
        }
        .sky-blog-card-wrap:hover {
          transform: translateY(-4px);
        }

        .sky-blog-img-container {
          width: 100%;
          height: 260px;
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(26, 92, 221, 0.06);
          transition: all 0.3s ease;
        }
        .sky-blog-card-wrap:hover .sky-blog-img-container {
          box-shadow: 0 16px 40px rgba(26, 92, 221, 0.08);
          border-color: rgba(26, 92, 221, 0.15);
        }

        .sky-blog-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .sky-blog-card-wrap:hover .sky-blog-img {
          transform: scale(1.04);
        }

        .sky-blog-title {
          font-size: 18px;
          font-weight: 800;
          line-height: 1.35;
          color: #011146;
          font-family: 'Plus Jakarta Sans', sans-serif;
          margin: 0;
          transition: color 0.3s ease;
        }
        .sky-blog-card-wrap:hover .sky-blog-title {
          color: #1A5CDD;
        }

        .sky-blog-readmore {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 800;
          color: #1A5CDD;
          text-decoration: none;
          transition: gap 0.25s ease, color 0.25s ease;
          width: fit-content;
        }
        .sky-blog-card-wrap:hover .sky-blog-readmore {
          color: #154ebc;
          gap: 10px;
        }

        @media (max-width: 1024px) {
          .sky-blog-card-wrap {
            flex: 0 0 340px;
          }
        }

        @media (max-width: 640px) {
          .sky-blog-card-wrap {
            flex: 0 0 280px;
          }
          .sky-blog-img-container {
            height: 200px;
          }
        }
      `}</style>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>

        {/* ─── HEADER ─── */}
        <div className="sky-about-badge-anim flex flex-col gap-[18px] items-center text-center mb-[56px]">
          <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 dark:bg-blue-500/10 dark:border-blue-500/20 rounded-full px-3.5 py-1 text-xs font-bold text-[#1A5CDD] dark:text-blue-400 w-fit uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] dark:bg-blue-400 inline-block animate-pulse" />
            Latest Blog
          </span>
          <h2 id="blog-heading" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight m-0 font-sans tracking-tight">
            Latest Insights From Software &amp; <span className="text-[#1A5CDD] dark:text-[#60A5FA]">Digital Transformation</span>
          </h2>
        </div>

        {/* ─── BLOG CARDS CONTAINER ─── */}
        <div className="sky-blog-cards-container">
          {blogPosts.map((post, i) => (
            <a key={i} href={post.href} className="sky-blog-card-wrap">
              <div className="sky-blog-img-container">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="sky-blog-img"
                />
              </div>
              <h3 className="sky-blog-title">
                {post.title}
              </h3>
              <span className="sky-blog-readmore">
                Read More
                <svg style={{ width: "13px", height: "13px" }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
