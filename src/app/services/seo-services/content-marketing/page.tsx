import type { Metadata } from "next";
import ContentMarketingClient from "./ContentMarketingClient";

export const metadata: Metadata = {
    title: "Content Marketing Services in Pondicherry | Syscrop",
    description:
        "Grow your business with Content Marketing services in Pondicherry that improve SEO, build authority, and attract high-quality customers.",
    keywords: [
        "Content Marketing Services Pondicherry",
        "Content Marketing Agency Pondicherry",
        "Content Writing Services Pondicherry",
        "SEO Content Writing Pondicherry",
        "Blog Writing Services Pondicherry",
        "Website Content Writing Pondicherry",
        "Copywriting Services Pondicherry",
        "Content Strategy Services Pondicherry",
        "Content Marketing Consultant Pondicherry",
        "Content Marketing Experts Pondicherry",
    ],
};

export default function ContentMarketingPage() {
    return <ContentMarketingClient />;
}
