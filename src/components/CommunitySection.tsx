"use client";
import React, { useState } from "react";

const tabs = [
  {
    id: "experts",
    label: "AI Experts",
    heading: "AI Experts:",
    body: "As a leading Software Company in Pondicherry, we are AI and software experts dedicated to delivering innovative, high-quality digital solutions with honesty, precision, and reliability. We leverage Artificial Intelligence, automation, and modern development technologies to build scalable, secure, and future-ready software tailored to your business needs. Every solution is developed with transparent processes, robust architecture, and a commitment to quality, ensuring long-term performance, seamless user experiences, and lasting business value.",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21m0 0l-.813-5.096m8.626 0L17 21m0 0l-.813-5.096M3 14.857A6 6 0 0112 3a6 6 0 019 11.857m-18 0a6.002 6.002 0 0012 0m-12 0H9m9 0h-2.187M9 14.857h7.188" />
      </svg>
    ),
    features: [
      {
        label: "Experienced Developers",
        icon: (
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        ),
      },
      {
        label: "Secure Cloud Infrastructure",
        icon: (
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
          </svg>
        ),
      },
      {
        label: "AI-Powered Solutions",
        icon: (
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
        ),
      },
      {
        label: "Client-Focused Approach",
        icon: (
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.97 5.97 0 0 0-.75-2.906m-.173-4.062a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM5.186 12.583a8.224 8.224 0 0 0-1.444.479 3 3 0 0 0-4.682 2.72m.94 3.198.002.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 0 12 21c2.17 0 4.207-.576 5.963-1.584A6.062 6.062 0 0 0 18 18.722m-12 0a5.97 5.97 0 0 1 .75-2.907m-.173-4.062a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0z" />
          </svg>
        ),
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=75&w=400&h=533",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=75&w=400&h=333",
    ],
  },
  {
    id: "builders",
    label: "Software Architects",
    heading: "Software Architects:",
    body: "Our experienced Software Architects design secure, scalable, and high-performance application architectures that power modern businesses. From enterprise software and cloud-native applications to custom software development, we transform complex business requirements into efficient, future-ready digital solutions. As a trusted Software Company in Pondicherry, we focus on building reliable systems that improve performance, reduce infrastructure costs, and support long-term business growth.",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    features: [
      {
        label: "Experienced Architects",
        icon: (
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25" />
          </svg>
        ),
      },
      {
        label: "Scalable Databases",
        icon: (
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75m-16.5-3.75v3.75" />
          </svg>
        ),
      },
      {
        label: "Agile Development",
        icon: (
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
        ),
      },
      {
        label: "Automated QA & CI/CD",
        icon: (
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=75&w=400&h=533",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=75&w=400&h=333",
    ],
  },
  {
    id: "designers",
    label: "SaaS Engineers",
    heading: "SaaS Engineers:",
    body: "Our SaaS Engineers specialize in building secure, responsive, and scalable cloud-based applications that deliver exceptional user experiences. From intuitive client dashboards and enterprise SaaS platforms to seamless API integrations and modern frontend development, we create solutions that improve productivity, streamline operations, and support business growth. Every application is optimized for speed, usability, performance, and long-term scalability.",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25" />
      </svg>
    ),
    features: [
      {
        label: "UI/UX-Focused Development",
        icon: (
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-1.305 3.579M3 22.25h18M9 3.75h6M12 18.5V3.75M9.53 16.122C10.239 16.5 11.094 16.5 11.8 16.122M9.53 16.122a3 3 0 01-3.071-3.071c0-1.272.772-2.42 1.947-2.909M11.8 16.122a3 3 0 003.072-3.072c0-1.272-.773-2.42-1.948-2.908M8.406 10.143a3.001 3.001 0 00-1.947-2.909M12.923 10.143a3.001 3.001 0 011.948-2.909" />
          </svg>
        ),
      },
      {
        label: "Responsive Design",
        icon: (
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
          </svg>
        ),
      },
      {
        label: "Modern CSS & Animations",
        icon: (
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21m0 0l-.813-5.096m8.626 0L17 21m0 0l-.813-5.096M3 14.857A6 6 0 0112 3a6 6 0 019 11.857m-18 0a6.002 6.002 0 0012 0m-12 0H9m9 0h-2.187M9 14.857h7.188" />
          </svg>
        ),
      },
      {
        label: "SEO & Performance Optimization",
        icon: (
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.003V16.5a4.5 4.5 0 014.5-4.5h10.5a4.5 4.5 0 014.5 4.5v1.503m-19.5 0h19.5m-19.5 0l-.364-1.821A8.967 8.967 0 0112 7.5a8.967 8.967 0 017.614 4.182l-.364 1.821M12 12a3 3 0 100-6 3 3 0 000 6z" />
          </svg>
        ),
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1581291518655-9523c932ded7?auto=format&fit=crop&q=75&w=400&h=533",
      "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=75&w=400&h=333",
    ],
  },
];

export default function CommunitySection() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = tabs[activeTab];

  return (
    <section
      aria-labelledby="community-heading"
      className="sky-community-section bg-[#F0F8FF] dark:bg-[#080f25] py-[100px] overflow-hidden relative transition-colors duration-500"
    >
      {/* Background Glows */}
      <div className="sky-comm-bg-glow-1" />
      <div className="sky-comm-bg-glow-2" />

      <style>{`

        .sky-comm-bg-glow-1 {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(26, 92, 221, 0.04) 0%, transparent 70%);
          top: -10%;
          right: 5%;
          pointer-events: none;
          z-index: 0;
        }
        .dark .sky-comm-bg-glow-1 {
          background: radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%);
        }

        .sky-comm-bg-glow-2 {
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.04) 0%, transparent 70%);
          bottom: -10%;
          left: 5%;
          pointer-events: none;
          z-index: 0;
        }
        .dark .sky-comm-bg-glow-2 {
          background: radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, transparent 70%);
        }

        /* Centered tabs container */
        .sky-tabs-wrapper {
          display: flex;
          justify-content: center;
          width: 100%;
          margin-bottom: 56px;
        }

        .sky-tabs-row {
          display: inline-flex;
          background: rgba(26, 92, 221, 0.04);
          border: 1px solid rgba(26, 92, 221, 0.08);
          border-radius: 50px;
          padding: 6px;
          gap: 6px;
          max-width: 100%;
          overflow-x: auto;
          scrollbar-width: none; /* Firefox */
        }
        .dark .sky-tabs-row {
          background: rgba(255, 255, 255, 0.02);
          border-color: rgba(255, 255, 255, 0.06);
        }
        .sky-tabs-row::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }

        .sky-tab-trigger {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 28px;
          border-radius: 50px;
          cursor: pointer;
          background: transparent;
          border: none;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 750;
          font-size: 14.5px;
          color: #4B5563;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          white-space: nowrap;
        }
        .dark .sky-tab-trigger {
          color: #9CA3AF;
        }
        .sky-tab-trigger:hover {
          color: #1A5CDD;
          background: rgba(26, 92, 221, 0.02);
        }
        .dark .sky-tab-trigger:hover {
          color: #60A5FA;
          background: rgba(255, 255, 255, 0.02);
        }
        .sky-tab-trigger.active-tab {
          background: #1A5CDD;
          color: #FFFFFF;
          box-shadow: 0 4px 15px rgba(26, 92, 221, 0.2);
        }
        .dark .sky-tab-trigger.active-tab {
          background: #3B82F6;
          color: #FFFFFF;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
        }

        .sky-tab-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: currentColor;
          flex-shrink: 0;
        }

        /* 2x2 Features Grid */
        .sky-feat-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-top: 12px;
          margin-bottom: 32px;
        }
        @media (min-width: 480px) {
          .sky-feat-grid {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
        }

        .sky-feat-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 20px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(26, 92, 221, 0.05);
          font-size: 14.5px;
          font-weight: 750;
          color: #011146;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .dark .sky-feat-item {
          background: rgba(255, 255, 255, 0.02);
          border-color: rgba(255, 255, 255, 0.04);
          color: #E5E7EB;
        }
        .sky-feat-item:hover {
          transform: translateY(-2px);
          background: #FFFFFF;
          border-color: rgba(26, 92, 221, 0.15);
          box-shadow: 0 10px 25px rgba(26, 92, 221, 0.04);
        }
        .dark .sky-feat-item:hover {
          background: rgba(1, 17, 70, 0.2);
          border-color: rgba(59, 130, 246, 0.15);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .sky-feat-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          border: 1px solid rgba(26, 92, 221, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1A5CDD;
          background: rgba(26, 92, 221, 0.04);
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .dark .sky-feat-icon {
          border-color: rgba(59, 130, 246, 0.2);
          color: #60A5FA;
          background: rgba(59, 130, 246, 0.04);
        }
        .sky-feat-item:hover .sky-feat-icon {
          transform: scale(1.1) rotate(5deg);
        }

        /* Bottom Row Action */
        .sky-contact-row {
          display: flex;
          align-items: center;
          gap: 28px;
          padding-top: 28px;
          border-top: 1px solid rgba(26, 92, 221, 0.08);
          flex-wrap: wrap;
        }
        .dark .sky-contact-row {
          border-color: rgba(255, 255, 255, 0.05);
        }

        .sky-contact-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #1A5CDD;
          color: #FFFFFF;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 750;
          font-size: 14.5px;
          padding: 14px 30px;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 15px rgba(26, 92, 221, 0.15);
        }
        .dark .sky-contact-btn {
          background: #3B82F6;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.25);
        }
        .sky-contact-btn:hover {
          background: #154ebc;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(26, 92, 221, 0.25);
        }
        .dark .sky-contact-btn:hover {
          background: #2563EB;
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.35);
        }

        .sky-contact-arrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          transition: transform 0.3s ease;
        }
        .sky-contact-btn:hover .sky-contact-arrow {
          transform: translate(2px, -2px);
        }

        .sky-phone-badge {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
        }
        .sky-phone-ring {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #1A5CDD;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          flex-shrink: 0;
          box-shadow: 0 0 0 0 rgba(26, 92, 221, 0.4);
          animation: skyPhonePing 2s infinite;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .dark .sky-phone-ring {
          background: #3B82F6;
          box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
        }
        @keyframes skyPhonePing {
          0%   { box-shadow: 0 0 0 0 rgba(26, 92, 221, 0.4); }
          70%  { box-shadow: 0 0 0 10px rgba(26, 92, 221, 0); }
          100% { box-shadow: 0 0 0 0 rgba(26, 92, 221, 0); }
        }
        .sky-phone-badge:hover .sky-phone-ring {
          transform: scale(1.05) rotate(15deg);
        }

        /* Satisfied Client Badge Overlay */
        .sky-satisfied-badge {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(26, 92, 221, 0.08);
          border-radius: 24px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          box-shadow: 0 10px 30px rgba(26, 92, 221, 0.03);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .dark .sky-satisfied-badge {
          background: rgba(11, 21, 48, 0.4);
          border-color: rgba(255, 255, 255, 0.06);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        .sky-satisfied-badge:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 40px rgba(26, 92, 221, 0.08);
          border-color: rgba(26, 92, 221, 0.15);
        }
        .dark .sky-satisfied-badge:hover {
          border-color: rgba(59, 130, 246, 0.15);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
        }

        .sky-avatar {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 2.2px solid #ffffff;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .dark .sky-avatar {
          border-color: #030712;
        }
        .sky-avatar:hover {
          transform: scale(1.1) translateY(-2px);
          z-index: 10;
          position: relative;
        }

        .sky-avatar-plus {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #1A5CDD;
          border: 2.2px solid #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 800;
          color: #ffffff;
          margin-left: -10px;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
          transition: all 0.3s ease;
        }
        .dark .sky-avatar-plus {
          background: #3B82F6;
          border-color: #030712;
        }
        .sky-avatar-plus:hover {
          transform: scale(1.1);
          background: #154ebc;
        }

        @keyframes skyTabAnim {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .sky-tab-content {
          animation: skyTabAnim 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
          position: relative;
          z-index: 1;
        }

        /* Bento grid containers */
        .sky-bento-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          align-items: start;
        }
        @media (min-width: 640px) {
          .sky-bento-grid {
            grid-template-columns: 6.2fr 4.8fr;
          }
        }

        .sky-bento-img-container {
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 15px 35px rgba(1, 17, 70, 0.05);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .sky-bento-img-container:hover {
          box-shadow: 0 25px 50px rgba(1, 17, 70, 0.12);
          transform: translateY(-4px);
        }
        .dark .sky-bento-img-container:hover {
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
        }

        .sky-bento-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .sky-bento-img-container:hover .sky-bento-img {
          transform: scale(1.04);
        }

        /* Text gradient highlight */
        .sky-gradient-text {
          background: linear-gradient(135deg, #1A5CDD 0%, #06B6D4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .dark .sky-gradient-text {
          background: linear-gradient(135deg, #60A5FA 0%, #22D3EE 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Main Grid responsive */
        .sky-community-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: center;
        }
        @media (min-width: 1024px) {
          .sky-community-grid {
            grid-template-columns: 1fr 1fr;
            gap: 72px;
          }
        }
      `}</style>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>

        {/* Header centered */}
        <div className="sky-about-badge-anim flex flex-col gap-[18px] items-center text-center mb-[56px]">
          <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 dark:bg-blue-500/10 dark:border-blue-500/20 rounded-full px-3.5 py-1 text-xs font-bold text-[#1A5CDD] dark:text-blue-400 w-fit uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] dark:bg-blue-400 inline-block animate-pulse" />
            Who We Are
          </span>
          <h2 id="community-heading" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight m-0 font-sans tracking-tight">
            Shaping Futuristic <span className="text-[#1A5CDD] dark:text-[#60A5FA]">Digital Ecosystems</span>
          </h2>
        </div>

        {/* Tab triggers */}
        <div className="sky-tabs-wrapper">
          <div className="sky-tabs-row">
            {tabs.map((t, i) => (
              <button
                key={t.id}
                className={`sky-tab-trigger${activeTab === i ? " active-tab" : ""}`}
                onClick={() => setActiveTab(i)}
              >
                <span className="sky-tab-icon">{t.icon}</span>
                <span>{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <div className="sky-tab-content" key={activeTab}>
          <div className="sky-community-grid">

            {/* LEFT DETAILS COLUMN */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <h3 style={{
                fontSize: "clamp(1.4rem, 2.5vw, 1.95rem)",
                fontWeight: 850,
                lineHeight: 1.25,
                color: "#011146",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                margin: 0,
              }}>
                {tab.heading}
              </h3>
              <p style={{ fontSize: "15px", color: "#4B5563", lineHeight: 1.8, maxWidth: "540px", margin: 0 }}>
                {tab.body}
              </p>

              {/* 2x2 Features Grid of micro-cards */}
              <div className="sky-feat-grid">
                {tab.features.map((f, fi) => (
                  <div key={fi} className="sky-feat-item">
                    <span className="sky-feat-icon">{f.icon}</span>
                    <span>{f.label}</span>
                  </div>
                ))}
              </div>

              {/* Action buttons footer row */}
              <div className="sky-contact-row">
                <a href="/contact" className="sky-contact-btn">
                  Contact Us
                  <span className="sky-contact-arrow">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </span>
                </a>

                <a href="tel:+918939540148" className="sky-phone-badge">
                  <span className="sky-phone-ring">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.14-4.118-6.944-6.94l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
                    </svg>
                  </span>
                  <div>
                    <p style={{ fontSize: "10px", fontWeight: 800, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.12em", margin: "0 0 2px 0" }}>
                      Call Us Now!
                    </p>
                    <span style={{ fontSize: "16px", fontWeight: 800, color: "#011146", transition: "color 0.2s ease" }} className="sky-phone-number-hover">
                      +91 89395 40148
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE BENTO COLUMN */}
            <div className="sky-bento-grid">
              {/* Tall Image */}
              <div className="sky-bento-img-container" style={{ height: "420px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tab.images[0]}
                  alt="Professional developers working"
                  loading="lazy"
                  className="sky-bento-img"
                />
              </div>

              {/* Short Column with Card + Second Image */}
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

                {/* Satisfied Clients Card */}
                <div className="sky-satisfied-badge">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=75&w=60&h=60" alt="" className="sky-avatar" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=75&w=60&h=60" alt="" className="sky-avatar" style={{ marginLeft: "-10px" }} />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=75&w=60&h=60" alt="" className="sky-avatar" style={{ marginLeft: "-10px" }} />
                    <div className="sky-avatar-plus">
                      +
                    </div>
                  </div>

                  {/* Stars */}
                  <div style={{ display: "flex", gap: "3px" }}>
                    {[...Array(5)].map((_, si) => (
                      <svg key={si} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  <p style={{ fontSize: "13px", fontWeight: 800, color: "#011146", margin: 0 }} className="dark:text-white">
                    Our 5k+ Satisfied Clients
                  </p>
                </div>

                {/* Second Image */}
                <div className="sky-bento-img-container" style={{ height: "260px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tab.images[1]}
                    alt="High-quality tech workflow environment"
                    loading="lazy"
                    className="sky-bento-img"
                  />
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
