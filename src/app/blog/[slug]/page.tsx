"use client";

import Link from "next/link";
import Image from "next/image";
import { use, useState, useEffect } from "react";
import { Calendar, User, ArrowLeft, ArrowUpRight, Share2, Facebook, Twitter, Linkedin, RefreshCw } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

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

const getBlogImage = (post: any) => {
    if (post.image_url) return post.image_url;
    if (post.image) return post.image;
    const index = Math.abs(post.id) % FALLBACK_IMAGES.length;
    return FALLBACK_IMAGES[index];
};

function DetailsSkeleton() {
    return (
        <main className="bg-white min-h-screen animate-pulse">
            {/* Header / Hero Skeleton */}
            <section className="bg-[#011146] py-20 relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl flex flex-col items-center">
                    <div className="h-5 w-24 bg-white/20 rounded-full mb-6" />
                    <div className="h-10 bg-white/20 rounded w-3/4 mb-4" />
                    <div className="h-6 bg-white/20 rounded w-1/2 mb-8" />
                    <div className="h-8 bg-white/10 rounded-full w-40" />
                </div>
            </section>

            {/* Main Content & Sidebar Skeleton */}
            <section className="relative mt-16 pb-24">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Article Content Skeleton */}
                        <div className="w-full lg:w-2/3">
                            <div className="relative h-[280px] md:h-[480px] w-full rounded-[24px] bg-slate-100 border border-slate-100 mb-8" />
                            <div className="flex items-center gap-6 mb-8 border-b border-slate-100 pb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-100" />
                                    <div className="space-y-1">
                                        <div className="h-3 w-16 bg-slate-100 rounded" />
                                        <div className="h-4 w-24 bg-slate-200 rounded" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-100" />
                                    <div className="space-y-1">
                                        <div className="h-3 w-16 bg-slate-100 rounded" />
                                        <div className="h-4 w-24 bg-slate-200 rounded" />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-4 bg-slate-100 rounded w-full" />
                                <div className="h-4 bg-slate-100 rounded w-full" />
                                <div className="h-4 bg-slate-100 rounded w-5/6" />
                                <div className="h-4 bg-slate-100 rounded w-full" />
                                <div className="h-4 bg-slate-100 rounded w-4/5" />
                            </div>
                        </div>

                        {/* Sidebar Skeleton */}
                        <aside className="w-full lg:w-1/3 space-y-8">
                            <div className="bg-slate-50/50 border border-[#dbeafe] p-8 rounded-[24px]">
                                <div className="h-6 w-32 bg-slate-200 rounded mb-6" />
                                <div className="space-y-6">
                                    {[1, 2, 3].map((n) => (
                                        <div key={n} className="flex items-center gap-4">
                                            <div className="w-16 h-16 rounded-xl bg-slate-200 shrink-0" />
                                            <div className="space-y-2 flex-1">
                                                <div className="h-4 bg-slate-200 rounded w-full" />
                                                <div className="h-3 bg-slate-150 rounded w-2/3" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default function BlogDetails({ params: paramsPromise }: { params: Promise<{ slug: string }> }) {
    const params = use(paramsPromise);
    const slug = params.slug;

    const [post, setPost] = useState<any | null>(null);
    const [recentPosts, setRecentPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const loadData = async () => {
        try {
            setLoading(true);
            setError(null);
            
            // Fetch post details
            const postResponse = await fetch(`https://wadmin.syscorp.in/api/blogs/${slug}`);
            if (!postResponse.ok) {
                throw new Error(`HTTP error! status: ${postResponse.status}`);
            }
            const postJson = await postResponse.json();
            if (postJson.success && postJson.data) {
                setPost(postJson.data);
            } else {
                setError("Post not found.");
            }

            // Fetch other blogs for the sidebar
            try {
                const blogsResponse = await fetch("https://wadmin.syscorp.in/api/blogs");
                if (blogsResponse.ok) {
                    const blogsJson = await blogsResponse.json();
                    if (blogsJson.success && Array.isArray(blogsJson.data)) {
                        const otherPosts = blogsJson.data
                            .filter((p: any) => p.slug !== slug)
                            .slice(0, 3);
                        setRecentPosts(otherPosts);
                    }
                }
            } catch (recentErr) {
                console.error("Failed to load recent posts:", recentErr);
            }
        } catch (err) {
            console.error("Error loading blog details:", err);
            setError("Could not load article. Please check your internet connection.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, [slug]);

    if (loading) {
        return <DetailsSkeleton />;
    }

    if (error || !post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">{error || "Post not found"}</h1>
                <div className="flex gap-4">
                    <button
                        onClick={loadData}
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1A5CDD] hover:bg-blue-600 text-white rounded-full text-sm font-bold shadow transition-all duration-300 cursor-pointer"
                    >
                        <RefreshCw size={16} /> Retry
                    </button>
                    <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold px-6 py-2.5 bg-white border border-slate-200 rounded-full text-sm shadow">
                        <ArrowLeft size={16} /> Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    const { title, created_at, date, content, category, author } = post;
    const displayDate = created_at || date || new Date().toISOString();
    const displayAuthor = author || "Admin";
    const displayImage = getBlogImage(post);

    const renderContent = (contentData: any) => {
        if (!contentData) return <p>No content available.</p>;
        if (Array.isArray(contentData)) {
            return contentData.map((block: any, index: number) => {
                if (block.type === 'paragraph') {
                    return (
                        <p key={index} className="mb-6 text-slate-700 leading-relaxed text-[16px] md:text-[17px]">
                            {block.text}
                        </p>
                    );
                }
                if (block.type === 'heading') {
                    const HeadingTag = `h${block.level || 2}` as any;
                    return (
                        <HeadingTag key={index} className="text-xl md:text-2xl font-extrabold text-[#011146] mt-10 mb-4 font-sans tracking-tight">
                            {block.text}
                        </HeadingTag>
                    );
                }
                return null;
            });
        }
        if (typeof contentData === 'string') {
            return contentData.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 text-slate-700 leading-relaxed text-[16px] md:text-[17px]">
                    {paragraph}
                </p>
            ));
        }
        return <p>No content available.</p>;
    };

    return (
        <main className="bg-white min-h-screen">
            {/* Header / Hero */}
            <section className="bg-[#011146] py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(26,92,221,0.08),transparent)]" />
                <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
                    <span className="px-3.5 py-1 bg-white/10 text-[#38bdf8] font-bold rounded-full text-xs uppercase tracking-wider mb-6 inline-block border border-white/15">
                        {category || "Uncategorized"}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight tracking-tight">
                        {title}
                    </h1>
                    <div className="bg-white/10 backdrop-blur-md inline-block px-4 py-1.5 rounded-[2rem] border border-white/20">
                        <Breadcrumbs />
                    </div>
                </div>
            </section>

            {/* Main Content & Sidebar */}
            <section className="relative mt-16 pb-24">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-12">
                        
                        {/* Article Content */}
                        <article className="w-full lg:w-2/3">
                            {/* Featured Image */}
                            <div className="relative h-[280px] md:h-[480px] w-full rounded-[24px] overflow-hidden mb-8 bg-gray-100 border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.02)]">
                                <Image 
                                    src={displayImage} 
                                    alt={title} 
                                    fill 
                                    className="object-cover" 
                                    priority 
                                    sizes="(max-width: 1024px) 100vw, 750px"
                                    unoptimized
                                />
                            </div>

                            {/* Author & Date Metadata */}
                            <div className="flex flex-wrap items-center gap-6 mb-8 border-b border-slate-100 pb-8 text-sm">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                                        <User size={16} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Written By</p>
                                        <span className="font-extrabold text-gray-900">{displayAuthor}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500">
                                        <Calendar size={16} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Published</p>
                                        <span className="font-extrabold text-gray-900">
                                            {new Date(displayDate).toLocaleDateString("en-US", {
                                                month: "long",
                                                day: "numeric",
                                                year: "numeric"
                                            })}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Article Body */}
                            <div className="prose prose-blue max-w-none text-slate-700">
                                {renderContent(content)}
                            </div>

                            {/* Tags & Sharing options */}
                            <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap justify-between items-center gap-6">
                                <div className="flex gap-2">
                                    <span className="px-4 py-2 bg-slate-50 border border-slate-100 text-slate-600 rounded-xl text-xs font-extrabold uppercase tracking-wider">
                                        #{category || "Uncategorized"}
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="font-extrabold text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                                        <Share2 size={13} /> Share:
                                    </span>
                                    <div className="flex gap-2">
                                        <button className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#1A5CDD] hover:text-white hover:border-[#1A5CDD] transition-all cursor-pointer">
                                            <Facebook size={14} />
                                        </button>
                                        <button className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#1A5CDD] hover:text-white hover:border-[#1A5CDD] transition-all cursor-pointer">
                                            <Twitter size={14} />
                                        </button>
                                        <button className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#1A5CDD] hover:text-white hover:border-[#1A5CDD] transition-all cursor-pointer">
                                            <Linkedin size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="w-full lg:w-1/3 space-y-8">
                            
                            {/* Recent Articles Card */}
                            <div className="bg-slate-50/50 border border-[#dbeafe] p-8 rounded-[24px] shadow-[0_10px_30px_rgba(26,92,221,0.01)]">
                                <h4 className="text-lg font-extrabold text-[#011146] mb-6 font-sans tracking-tight">Recent Articles</h4>
                                <div className="space-y-6">
                                    {recentPosts.length > 0 ? recentPosts.map((recentPost) => {
                                        const { id, title: rTitle, slug: rSlug, created_at: rCreatedAt, date: rDate } = recentPost;
                                        const displayRDate = rCreatedAt || rDate || new Date().toISOString();
                                        const displayRImage = getBlogImage(recentPost);

                                        return (
                                            <Link href={`/blog/${rSlug}`} key={id} className="flex items-center group">
                                                <div className="w-16 h-16 rounded-xl bg-slate-100 overflow-hidden shrink-0 mr-4 border border-slate-100 relative">
                                                    <Image
                                                        src={displayRImage}
                                                        alt={rTitle}
                                                        fill
                                                        sizes="64px"
                                                        className="object-cover transition-transform duration-500 group-hover:scale-108"
                                                        unoptimized
                                                    />
                                                </div>
                                                <div>
                                                    <h5 className="font-extrabold text-[13.5px] text-gray-900 group-hover:text-[#1A5CDD] transition-colors line-clamp-2 leading-snug font-sans">
                                                        {rTitle}
                                                    </h5>
                                                    <p className="text-[11px] text-slate-450 font-semibold mt-1">
                                                        {new Date(displayRDate).toLocaleDateString('en-US', {
                                                            month: 'short',
                                                            day: 'numeric',
                                                            year: 'numeric'
                                                        })}
                                                    </p>
                                                </div>
                                            </Link>
                                        );
                                    }) : (
                                        <p className="text-slate-500 text-sm font-semibold">No recent articles found.</p>
                                    )}
                                </div>
                            </div>

                            {/* Direct Project Pitch CTA */}
                            <div className="bg-[#011146] p-8 rounded-[24px] text-white text-center relative overflow-hidden shadow-lg">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(26,92,221,0.2),transparent)]" />
                                <div className="relative z-10">
                                    <h4 className="text-xl font-extrabold mb-3 font-sans tracking-tight">Start Your Project</h4>
                                    <p className="text-blue-200 text-sm mb-6 leading-relaxed">
                                        Ready to scale your business with modern, custom software engineering?
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center gap-2 w-full bg-[#1A5CDD] py-3.5 px-6 rounded-xl font-extrabold text-xs uppercase tracking-wider hover:bg-[#154ebc] transition-all shadow-md shadow-blue-900/30 active:scale-[0.98]"
                                    >
                                        Contact Us <ArrowUpRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </aside>

                    </div>
                </div>
            </section>
        </main>
    );
}
