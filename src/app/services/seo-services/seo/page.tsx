import type { Metadata } from "next";
import SEOClient from "./SEOClient";

export const metadata: Metadata = {
    title: "SEO Service in Pondicherry | Drive More Traffic & Rankings",
    description:
        "Boost your online visibility with professional SEO Service in Pondicherry that improves search rankings, drives organic traffic, and generates quality leads.",
    keywords: [
        "SEO Services Pondicherry",
        "SEO Company Pondicherry",
        "Search Engine Optimization Pondicherry",
        "Local SEO Services Pondicherry",
        "Technical SEO Services Pondicherry",
        "On-Page SEO Services Pondicherry",
        "Off-Page SEO Services Pondicherry",
        "SEO Consultant Pondicherry",
        "SEO Agency Pondicherry",
        "SEO Experts Near Me Pondicherry",
    ],
};

export default function SEOServicesPage() {
    return <SEOClient />;
}
