"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function ClientSatisfactionAccordion() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const items = [
        {
            title: "We Plan the Right Strategy",
            desc: "Based on the client’s needs, we create a clear and effective plan that delivers real results.",
        },
        {
            title: "We Communicate Clearly",
            desc: "We keep clients informed with regular updates and simple explanations without technical confusion.",
        },
        {
            title: "We Deliver Quality Work",
            desc: "Every service is done with care, accuracy, and best practices to ensure high-quality results.",
        },
        {
            title: "We Use Data & Results",
            desc: "We track performance using analytics and show clients progress and improvements.",
        },
        {
            title: "We Share Clear Reports",
            desc: "Clients receive easy-to-understand reports with insights and next steps.",
        },
        {
            title: "We Support After Delivery",
            desc: "Our support continues even after the work is done to ensure long-term success.",
        },
        {
            title: "We Improve Continuously",
            desc: "We refine strategies based on results and feedback to achieve better outcomes.",
        },
    ];

    const toggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        How We Satisfy Our Clients?
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                        Syscorp follows a transparent and performance-focused process to
                        ensure every client gets real SEO improvements.
                    </p>
                </div>

                {/* Accordion */}
                <div className="max-w-4xl mx-auto space-y-4">
                    {items.map((item, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <div
                                key={index}
                                className={`rounded-2xl border bg-white shadow-sm overflow-hidden transition-all duration-300 ${isOpen ? "border-[#011146]" : "border-gray-200"
                                    }`}
                            >
                                {/* Title */}
                                <button
                                    onClick={() => toggle(index)}
                                    aria-expanded={isOpen}
                                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#011146] text-white font-bold">
                                            {index + 1}
                                        </span>

                                        <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                                            {item.title}
                                        </h3>
                                    </div>

                                    {/* Icon */}
                                    <ChevronDown
                                        size={22}
                                        className={`text-[#011146] transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                                            }`}
                                    />
                                </button>

                                {/* Content */}
                                <div
                                    className={`px-6 overflow-hidden transition-all duration-500 ${isOpen ? "max-h-40 pb-6" : "max-h-0"
                                        }`}
                                >
                                    <p className="text-gray-600 text-lg leading-relaxed pl-14">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="mt-14 text-center">
                    <Link
                        href="/contact"
                        className="inline-block bg-[#00a3ff] text-white px-10 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition"
                    >
                        Contact Now
                    </Link>
                </div>
            </div>
        </section>
    );
}
