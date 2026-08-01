import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import PageAnimationProvider from "@/components/PageAnimationProvider";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-heading",
    weight: ["400", "500", "600", "700", "800"],
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: ["400", "500", "600", "700", "800"],
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "Best Software Company in Chennai | Syscorp",
        template: "%s | Syscorp",
    },
    description:
        "Choose the best software company in Chennai – Syscorp delivers custom software development, web solutions, and digital transformation services for businesses of all sizes.",
    metadataBase: new URL("https://syscorp.tech"),
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    verification: {
        google: "google-site-verification-token",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Syscorp",
    url: "https://syscorp.tech",
    logo: "https://syscorp.tech/images/syscorp-logo.png",
    description:
        "Syscorp is Chennai's leading software company providing custom web development, AI marketing, CRM, SEO, and cloud solutions.",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Chennai",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
    },
    contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["English", "Tamil"],
    },
    sameAs: [
        "https://www.linkedin.com/company/syscorp",
        "https://twitter.com/syscorptech",
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <meta name="theme-color" content="#02071f" />
                <meta name="color-scheme" content="dark" />
                <link rel="preconnect" href="https://images.unsplash.com" />
                <link rel="dns-prefetch" href="https://images.unsplash.com" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={`${plusJakarta.variable} ${inter.variable} font-sans antialiased`}>
                {/* Skip to main content — accessibility landmark for keyboard/screen-reader users */}
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded focus:text-sm focus:font-semibold"
                >
                    Skip to main content
                </a>
                {/* Lenis smooth scroll — low-overhead RAF integration */}
                <SmoothScrollProvider />
                {/* GSAP scroll-trigger animations — runs only on main menu pages */}
                <PageAnimationProvider />
                <Header />
                <main id="main-content" tabIndex={-1}>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
