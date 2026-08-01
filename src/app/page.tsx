import type { Metadata } from "next";
import Index from "@/components/Home/Home";

export const metadata: Metadata = {
    title: "Best Software Company in Chennai | Syscorp",
    description:
        "Syscorp is the best software company in Chennai offering custom web development, AI-driven marketing, CRM systems, SEO, and cloud solutions to accelerate your digital transformation.",
    keywords: [
        "software company Chennai",
        "best IT company Chennai",
        "custom web development Chennai",
        "AI marketing tools",
        "CRM software Chennai",
        "SEO services Chennai",
        "cloud solutions India",
        "digital transformation company",
        "Next.js development",
        "React web development",
    ],
    authors: [{ name: "Syscorp", url: "https://syscorp.tech" }],
    creator: "Syscorp",
    publisher: "Syscorp",
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
    },
    alternates: {
        canonical: "https://syscorp.tech/",
    },
    openGraph: {
        type: "website",
        url: "https://syscorp.tech/",
        title: "Best Software Company in Chennai | Syscorp",
        description:
            "Syscorp delivers full-cycle software solutions, AI automation, CRM, and digital marketing services designed to accelerate your business growth.",
        siteName: "Syscorp",
        images: [
            {
                url: "https://syscorp.tech/images/og-syscorp.jpg",
                width: 1200,
                height: 630,
                alt: "Syscorp — Best Software Company in Chennai",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Best Software Company in Chennai | Syscorp",
        description:
            "Custom software, AI marketing, CRM & SEO services by Syscorp — Chennai's leading digital transformation partner.",
        images: ["https://syscorp.tech/images/og-syscorp.jpg"],
        creator: "@syscorptech",
    },
};

export default function Home() {
    return (
        <section className="bg-zinc-50 font-sans dark:bg-black">
            <Index />
        </section>
    );
}
