import type { Metadata } from "next";
import LocalSEOClient from "./LocalSEOClient";

export const metadata: Metadata = {
    title: "Local SEO Services in Pondicherry | Improve Local Search Rankings",
    description:
        "Increase your local visibility with Local & Regional SEO services in Pondicherry designed to attract nearby customers and grow your business.",
    keywords: [
        "Local SEO Services Pondicherry",
        "Local SEO Company Pondicherry",
        "Google Business Profile Optimization Pondicherry",
        "Google Maps SEO Pondicherry",
        "Local Search Optimization Pondicherry",
        "GMB Management Services Pondicherry",
        "Location-Based SEO Pondicherry",
        "Local SEO Consultant Pondicherry",
        "Business Listing Services Pondicherry",
        "Local SEO Experts Pondicherry",
        "Local Digital Marketing Pondicherry",
    ],
};

export default function LocalSEOServicesPage() {
    return <LocalSEOClient />;
}
