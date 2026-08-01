// components/ui/Infocard.tsx
import React from "react";

interface InfoCardProps {
  image: string;
  badge: string;
  title: string;
  admin: string;
  comments: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ image, badge, title, admin, comments }) => {
  return (
    <article className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-[#1A5CDD]/20 hover:shadow-2xl transition-all duration-400 flex flex-col h-full"
      style={{ transitionDuration: "350ms" }}>
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Color overlay on hover */}
        <div className="absolute inset-0 bg-[#1A5CDD]/0 group-hover:bg-[#1A5CDD]/10 transition-all duration-500" />

        {/* Date badge — glassmorphic */}
        <div
          className="absolute top-4 left-4 text-xs font-bold px-4 py-2 rounded-full text-white"
          style={{
            background: "rgba(5,12,31,0.75)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          {badge}
        </div>

        {/* Tag pill (top-right) */}
        <div
          className="absolute top-4 right-4 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full text-[#4A9EFF]"
          style={{
            background: "rgba(26,92,221,0.15)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(74,158,255,0.2)",
          }}
        >
          Blog
        </div>
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col gap-4 flex-grow bg-white">
        {/* Meta */}
        <div className="flex items-center gap-5 text-xs text-gray-400 font-bold uppercase tracking-wider">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#1A5CDD]/70" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
            </svg>
            By {admin}
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#1A5CDD]/70" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 18" />
            </svg>
            {comments} Comments
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-lg font-extrabold text-gray-900 leading-snug group-hover:text-[#1A5CDD] transition-colors duration-300 line-clamp-2"
          tabIndex={0}
        >
          {title}
        </h3>

        {/* Divider */}
        <div className="h-px bg-gray-100 mt-auto mb-1" />

        {/* Read More */}
        <div className="flex items-center justify-between">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#1A5CDD] uppercase tracking-widest group-hover:text-blue-700 transition-colors"
          >
            Read More
            <svg
              className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>

          {/* Arrow circle */}
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0"
            style={{ background: "linear-gradient(135deg, #1A5CDD, #0D3FA6)" }}
          >
            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
};
