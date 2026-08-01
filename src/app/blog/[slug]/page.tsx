"use client";

import Link from "next/link";
import Image from "next/image";
import { use } from "react";
import { Calendar, User, ArrowLeft, ArrowUpRight, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { blogPosts } from "@/data/blogPosts";

export default function BlogDetails({ params: paramsPromise }: { params: Promise<{ slug: string }> }) {
    const params = use(paramsPromise);
    const post = blogPosts.find(p => p.slug === params.slug);

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
                <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold">
                    <ArrowLeft size={16} /> Back to Blog
                </Link>
            </div>
        );
    }

    const { title, date, content, image, category, author } = post;
    const recentPosts = blogPosts.filter(p => p.slug !== params.slug).slice(0, 3);

    return (
        <main className="bg-white min-h-screen">
            {/* Header / Hero */}
            <section className="bg-[#011146] py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(26,92,221,0.08),transparent)]" />
                <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
                    <span className="px-3.5 py-1 bg-white/10 text-[#38bdf8] font-bold rounded-full text-xs uppercase tracking-wider mb-6 inline-block border border-white/15">
                        {category}
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
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col lg:flex-row gap-12">
                        
                        {/* Article Content */}
                        <article className="w-full lg:w-2/3">
                            {/* Featured Image */}
                            <div className="relative h-[280px] md:h-[480px] w-full rounded-[24px] overflow-hidden mb-8 bg-gray-100 border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.02)]">
                                <Image 
                                    src={image} 
                                    alt={title} 
                                    fill 
                                    className="object-cover" 
                                    priority 
                                    sizes="(max-width: 1024px) 100vw, 750px"
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
                                        <span className="font-extrabold text-gray-900">{author}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500">
                                        <Calendar size={16} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Published</p>
                                        <span className="font-extrabold text-gray-900">
                                            {new Date(date).toLocaleDateString("en-US", {
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
                                {content && Array.isArray(content) ? content.map((block: any, index: number) => {
                                    if (block.type === 'paragraph') {
                                        return (
                                            <p key={index} className="mb-6 text-slate-655 leading-relaxed text-[16px] md:text-[17px]">
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
                                }) : <p>No content available.</p>}
                            </div>

                            {/* Tags & Sharing options */}
                            <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap justify-between items-center gap-6">
                                <div className="flex gap-2">
                                    <span className="px-4 py-2 bg-slate-50 border border-slate-100 text-slate-600 rounded-xl text-xs font-extrabold uppercase tracking-wider">
                                        #{category}
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
                                        const { id, title: rTitle, slug: rSlug, date: rDate, image: rImage } = recentPost;

                                        return (
                                            <Link href={`/blog/${rSlug}`} key={id} className="flex items-center group">
                                                <div className="w-16 h-16 rounded-xl bg-slate-100 overflow-hidden shrink-0 mr-4 border border-slate-100 relative">
                                                    <Image
                                                        src={rImage}
                                                        alt={rTitle}
                                                        fill
                                                        sizes="64px"
                                                        className="object-cover transition-transform duration-500 group-hover:scale-108"
                                                    />
                                                </div>
                                                <div>
                                                    <h5 className="font-extrabold text-[13.5px] text-gray-900 group-hover:text-[#1A5CDD] transition-colors line-clamp-2 leading-snug font-sans">
                                                        {rTitle}
                                                    </h5>
                                                    <p className="text-[11px] text-slate-450 font-semibold mt-1">
                                                        {new Date(rDate).toLocaleDateString('en-US', {
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

