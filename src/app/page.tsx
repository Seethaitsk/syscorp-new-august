import type { Metadata } from "next";
import Index from "@/components/Home/Home";

export const metadata: Metadata = {
    title: "We Are Syscorp - A Leading Software Company in Pondicherry",
    description:
        "Software Company in Pondicherry delivering web development, AI services, SEO, digital marketing, and custom software solutions to accelerate your business growth.",
    keywords: [
        "Software Company in Pondicherry",
        "Software Development Company Pondicherry",
        "IT Company Pondicherry",
        "Custom Software Development Pondicherry",
        "Software Solutions Pondicherry",
        "Web Development Company Pondicherry",
        "Mobile App Development Company Pondicherry",
        "Enterprise Software Company Pondicherry",
        "Software Development Services Pondicherry",
        "Best Software Company Pondicherry",
        "Software Company Near Me Pondicherry",
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
        siteName: "Syscorp",
        title: "Leading Software Company in Pondicherry | Web, AI, SEO & Digital Solutions",
        description:
            "Syscorp is a best software company in Pondicherry offering web development, AI solutions, mobile app development, SEO, digital marketing, ERP, cloud services, and UI/UX design.",
        url: "https://syscorp-new-august-j8mq.vercel.app/",
        images: [
            {
                url: "https://syscorp-new-august-j8mq.vercel.app/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Syscorp — Leading Software Company in Pondicherry",
            },
        ],
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "We Are Syscorp - A Leading Software Company in Pondicherry",
        description:
            "Software Company in Pondicherry delivering web development, AI services, SEO, digital marketing, and custom software solutions to accelerate your business growth.",
        images: ["https://syscorp.tech/images/og-syscorp.jpg"],
        creator: "@syscorptech",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Syscorp",
    "url": "https://syscorp-new-august-j8mq.vercel.app/",
    "logo": "https://syscorp-new-august-j8mq.vercel.app/images/logo.png",
    "description":
        "Software Company in Pondicherry providing website development, software development, AI solutions, SEO, digital marketing, cloud services, ERP development, and UI/UX design.",
    "email": "info@syscorp.in",
    "telephone": "+91-XXXXXXXXXX",
    "sameAs": [
        "https://in.linkedin.com/company/syscorp-technology-private-limited",
        "https://www.facebook.com/SyscorpTechnologyPvtLtd",
        "https://www.instagram.com/syscorptechnologypvtltd/",
    ],
};

export default function Home() {
    return (
        <section className="bg-zinc-50 font-sans dark:bg-black">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Index />
        </section>
    );
}
