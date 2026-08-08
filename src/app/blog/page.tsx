import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
    title: "Updates | Latest Company News, Technology Insights",
    description:
        "Stay informed with the latest updates, industry trends, company news, technology insights, and digital innovations that help businesses grow.",
};

export default function BlogPage() {
    return <BlogClient />;
}