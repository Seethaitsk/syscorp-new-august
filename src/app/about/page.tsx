import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
    title: "Software Company in Pondicherry | Web, AI, SEO & Digital Growth Solutions",
    description:
        "Learn who we are, our mission, expertise, and commitment to delivering innovative software, AI, and digital marketing solutions for businesses.",
    keywords: [
        "Software Company in Pondicherry",
        "it companies in pondicherry",
    ],
};

export default function AboutPage() {
    return <AboutClient />;
}
