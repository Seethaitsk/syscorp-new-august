"use client";

import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Calendar, User, ArrowUpRight, RefreshCw } from "lucide-react";
import HeaderBanner from "@/components/ui/HeaderBanner";

const FALLBACK_IMAGES = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=75&w=600",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=75&w=600",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=75&w=600",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=75&w=600",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=75&w=600",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=75&w=600",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=75&w=600",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=75&w=600",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=75&w=600"
];

function BlogSkeleton() {
    return (
        <div className="group bg-white border border-[#dbeafe] rounded-[24px] overflow-hidden shadow-[0_10px_30px_rgba(26,92,221,0.02)] flex flex-col h-full animate-pulse">
            <div className="relative aspect-[16/10] w-full bg-slate-100 border-b border-[#dbeafe]" />
            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                    <div className="h-5 w-20 bg-slate-200 rounded-full" />
                    <div className="h-4 w-24 bg-slate-200 rounded" />
                </div>
                <div className="h-6 bg-slate-200 rounded w-5/6 mb-3" />
                <div className="h-6 bg-slate-200 rounded w-2/3 mb-4" />
                <div className="space-y-2 mb-6">
                    <div className="h-4 bg-slate-100 rounded w-full" />
                    <div className="h-4 bg-slate-100 rounded w-full" />
                    <div className="h-4 bg-slate-100 rounded w-4/5" />
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-slate-200" />
                        <div className="h-3 w-16 bg-slate-200 rounded" />
                    </div>
                    <div className="h-4 w-16 bg-slate-200 rounded" />
                </div>
            </div>
        </div>
    );
}

export default function BlogPage() {
    const [blogs, setBlogs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeCat, setActiveCat] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const fetchBlogs = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch("https://wadmin.syscorp.in/api/blogs");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const resData = await response.json();
            if (resData.success && Array.isArray(resData.data)) {
                setBlogs(resData.data);
            } else {
                setError("Failed to parse articles from server.");
            }
        } catch (err) {
            console.error("Error fetching blogs:", err);
            setError("Could not fetch blog posts. Please check your internet connection and try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const categories = useMemo(() => {
        const cats = new Set<string>();
        blogs.forEach((post) => {
            if (post.category) {
                cats.add(post.category);
            }
        });
        return ["All", ...Array.from(cats)];
    }, [blogs]);

    const filteredPosts = useMemo(() => {
        return blogs.filter((post) => {
            if (activeCat === "All") return true;
            return post.category?.toLowerCase() === activeCat.toLowerCase();
        });
    }, [blogs, activeCat]);

    const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);

    const paginatedPosts = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return filteredPosts.slice(startIndex, startIndex + itemsPerPage);
    }, [filteredPosts, currentPage, itemsPerPage]);

    const handleCategoryChange = (cat: string) => {
        setActiveCat(cat);
        setCurrentPage(1);
    };

    const getBlogImage = (post: any) => {
        if (post.image_url) return post.image_url;
        if (post.image) return post.image;
        const index = Math.abs(post.id) % FALLBACK_IMAGES.length;
        return FALLBACK_IMAGES[index];
    };

    const getPageNumbers = () => {
        const pages = [];
        const delta = 1;
        const left = currentPage - delta;
        const right = currentPage + delta + 1;
        const range = [];
        const rangeWithDots = [];
        let l;

        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= left && i < right)) {
                range.push(i);
            }
        }

        for (const i of range) {
            if (l) {
                if (i - l === 2) {
                    rangeWithDots.push(l + 1);
                } else if (i - l !== 1) {
                    rangeWithDots.push('...');
                }
            }
            rangeWithDots.push(i);
            l = i;
        }

        return rangeWithDots;
    };

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
                <div className="container mx-auto px-4 max-w-7xl">
                    
                    {/* Categories Filter */}
                    {!loading && !error && categories.length > 1 && (
                        <div data-animate="fade-up" className="mb-16">
                            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => handleCategoryChange(cat)}
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
                    )}

                    {/* Error State */}
                    {error && (
                        <div className="text-center py-16 bg-white border border-[#dbeafe] rounded-[24px] p-8 max-w-md mx-auto shadow-md">
                            <p className="text-red-500 font-extrabold mb-4">{error}</p>
                            <button
                                onClick={fetchBlogs}
                                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1A5CDD] hover:bg-blue-600 text-white rounded-full text-sm font-bold shadow transition-all duration-300"
                            >
                                <RefreshCw size={16} /> Retry
                            </button>
                        </div>
                    )}

                    {/* Blog Grid */}
                    {!error && (
                        <div data-animate="stagger-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {loading ? (
                                Array.from({ length: 6 }).map((_, idx) => (
                                    <BlogSkeleton key={idx} />
                                ))
                            ) : paginatedPosts.length > 0 ? (
                                paginatedPosts.map((post) => {
                                    const { id, title, slug, created_at, date, category, author, snippet, excerpt } = post;
                                    const displayDate = created_at || date || new Date().toISOString();
                                    const displayExcerpt = snippet || excerpt || "No summary available.";
                                    const displayAuthor = author || "Admin";
                                    const displayImage = getBlogImage(post);

                                    return (
                                        <article 
                                            key={id} 
                                            className="group bg-white border border-[#dbeafe] rounded-[24px] overflow-hidden shadow-[0_10px_30px_rgba(26,92,221,0.02)] hover:shadow-[0_20px_50px_rgba(26,92,221,0.08)] hover:-translate-y-1.5 transition-all duration-350 flex flex-col h-full"
                                        >
                                            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-50 border-b border-[#dbeafe]">
                                                <Image
                                                    src={displayImage}
                                                    alt={title}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                                    unoptimized
                                                />
                                            </div>

                                            <div className="p-6 flex flex-col flex-1">
                                                {/* Meta tags */}
                                                <div className="flex items-center gap-3 text-xs text-slate-500 mb-3 font-semibold">
                                                    <span className="px-2.5 py-0.5 bg-[#1A5CDD]/10 text-[#1A5CDD] font-extrabold rounded-full text-[10px] uppercase tracking-wider">
                                                        {category || "Uncategorized"}
                                                    </span>
                                                    <div className="flex items-center gap-1">
                                                        <Calendar size={12} className="text-slate-400" />
                                                        <span>
                                                            {new Date(displayDate).toLocaleDateString("en-US", {
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
                                                    {displayExcerpt}
                                                </p>

                                                {/* Footer Actions */}
                                                <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700">
                                                            <User size={13} />
                                                        </div>
                                                        <span className="text-xs font-bold text-slate-800">By {displayAuthor}</span>
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
                    )}

                    {/* Pagination */}
                    {!loading && !error && totalPages > 1 && (
                        <nav data-animate="fade-up" className="mt-16 flex justify-center items-center gap-2">
                            <button
                                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                                disabled={currentPage === 1}
                                className={`w-10 h-10 border border-[#dbeafe] rounded-xl flex items-center justify-center transition-all ${
                                    currentPage === 1
                                        ? "opacity-50 cursor-not-allowed bg-slate-50 text-slate-400"
                                        : "bg-white text-slate-600 hover:border-[#1A5CDD] hover:text-[#1A5CDD] cursor-pointer"
                                }`}
                            >
                                <ChevronLeft size={16} />
                            </button>

                            {getPageNumbers().map((pageNum, index) => {
                                if (pageNum === '...') {
                                    return (
                                        <span key={`dots-${index}`} className="w-10 h-10 flex items-center justify-center text-slate-400 font-bold">
                                            ...
                                        </span>
                                    );
                                }
                                return (
                                    <button
                                        key={pageNum}
                                        onClick={() => setCurrentPage(Number(pageNum))}
                                        className={`w-10 h-10 font-bold rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                                            currentPage === pageNum
                                                ? "bg-[#1A5CDD] text-white shadow-md shadow-blue-500/20"
                                                : "border border-[#dbeafe] bg-white text-slate-600 hover:border-[#1A5CDD] hover:text-[#1A5CDD]"
                                        }`}
                                    >
                                        {pageNum}
                                    </button>
                                );
                            })}

                            <button
                                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className={`w-10 h-10 border border-[#dbeafe] rounded-xl flex items-center justify-center transition-all ${
                                    currentPage === totalPages
                                        ? "opacity-50 cursor-not-allowed bg-slate-50 text-slate-400"
                                        : "bg-white text-slate-600 hover:border-[#1A5CDD] hover:text-[#1A5CDD] cursor-pointer"
                                }`}
                            >
                                <ChevronRight size={16} />
                            </button>
                        </nav>
                    )}
                </div>
            </section>
        </main>
    );
}