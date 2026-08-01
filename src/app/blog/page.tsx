"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Calendar, User, ArrowUpRight } from "lucide-react";
import HeaderBanner from "@/components/ui/HeaderBanner";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPage() {
    const categories = ["All", "Technology", "SEO", "Business"];
    const [activeCat, setActiveCat] = useState("All");

    const filteredPosts = useMemo(() => {
        return blogPosts.filter((post) => {
            if (activeCat === "All") return true;
            return post.category === activeCat;
        });
    }, [activeCat]);

    return (
        <main className="bg-white min-h-screen">
            <HeaderBanner
                title={
                    <>
                        Explore our <span className="text-[#38bdf8] font-serif italic font-normal">insights, stories, and ideas</span> on modern software engineering.
                    </>
                }
                description="Stay updated with Syscorp's technical insights, coding best practices, UI/UX trends, and articles from our experienced software development team."
            />

            {/* Blog Section */}
            <section className="py-16 lg:py-24 bg-[#F0F8FF]/30">
                <div className="container mx-auto px-4 max-w-6xl">
                    
                    {/* Categories Filter */}
                    <div data-animate="fade-up" className="mb-16">
                        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCat(cat)}
                                    className={`px-6 py-2.5 rounded-full text-sm font-extrabold transition-all duration-350 cursor-pointer ${
                                        activeCat === cat
                                            ? "bg-[#1A5CDD] text-white shadow-lg shadow-blue-500/20"
                                            : "bg-white text-slate-800 border border-[#dbeafe] hover:bg-[#1A5CDD]/5 hover:text-[#1A5CDD] hover:border-[#1A5CDD]/20"
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Blog Grid */}
                    <div data-animate="stagger-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.length > 0 ? (
                            filteredPosts.map((post) => {
                                const { id, title, slug, date, category, image, excerpt, author } = post;

                                return (
                                    <article 
                                        key={id} 
                                        className="group bg-white border border-[#dbeafe] rounded-[24px] overflow-hidden shadow-[0_10px_30px_rgba(26,92,221,0.02)] hover:shadow-[0_20px_50px_rgba(26,92,221,0.08)] hover:-translate-y-1.5 transition-all duration-350 flex flex-col h-full"
                                    >
                                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-50 border-b border-[#dbeafe]">
                                            <Image
                                                src={image}
                                                alt={title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>

                                        <div className="p-6 flex flex-col flex-1">
                                            {/* Meta tags */}
                                            <div className="flex items-center gap-3 text-xs text-slate-500 mb-3 font-semibold">
                                                <span className="px-2.5 py-0.5 bg-[#1A5CDD]/10 text-[#1A5CDD] font-extrabold rounded-full text-[10px] uppercase tracking-wider">
                                                    {category}
                                                </span>
                                                <div className="flex items-center gap-1">
                                                    <Calendar size={12} className="text-slate-400" />
                                                    <span>
                                                        {new Date(date).toLocaleDateString("en-US", {
                                                            month: "short",
                                                            day: "numeric",
                                                            year: "numeric",
                                                        })}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <h2 className="text-lg font-extrabold text-[#011146] hover:text-[#1A5CDD] transition-colors duration-200 mb-3 leading-snug font-sans">
                                                <Link href={`/blog/${slug}`}>{title}</Link>
                                            </h2>

                                            {/* Excerpt */}
                                            <p className="text-sm text-slate-600 mb-6 line-clamp-3 leading-relaxed flex-1">
                                                {excerpt}
                                            </p>

                                            {/* Footer Actions */}
                                            <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-7 h-7 rounded-full bg-slate-150 flex items-center justify-center text-slate-700">
                                                        <User size={13} />
                                                    </div>
                                                    <span className="text-xs font-bold text-slate-800">By {author}</span>
                                                </div>
                                                <Link
                                                    href={`/blog/${slug}`}
                                                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#1A5CDD] group-hover:text-[#154ebc] transition-all"
                                                >
                                                    Read post
                                                    <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
                                );
                            })
                        ) : (
                            <div className="text-center col-span-full py-16 bg-white border border-[#dbeafe] rounded-[24px] p-8">
                                <p className="text-slate-500 font-bold">No articles found in this category.</p>
                            </div>
                        )}
                    </div>

                    {/* Pagination (Styled & Functional fallbacks) */}
                    {filteredPosts.length > 0 && (
                        <nav data-animate="fade-up" className="mt-16 flex justify-center gap-3">
                            <button className="w-10 h-10 border border-[#dbeafe] bg-white text-slate-600 hover:border-[#1A5CDD] hover:text-[#1A5CDD] rounded-xl flex items-center justify-center cursor-pointer transition-all">
                                <ChevronLeft size={16} />
                            </button>
                            <button className="w-10 h-10 bg-[#1A5CDD] text-white shadow-md shadow-blue-500/20 font-bold rounded-xl flex items-center justify-center cursor-pointer">
                                1
                            </button>
                            <button className="w-10 h-10 border border-[#dbeafe] bg-white text-slate-600 hover:border-[#1A5CDD] hover:text-[#1A5CDD] rounded-xl flex items-center justify-center cursor-pointer transition-all">
                                <ChevronRight size={16} />
                            </button>
                        </nav>
                    )}
                </div>
            </section>
        </main>
    );
}