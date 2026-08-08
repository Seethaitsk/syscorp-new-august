import type { Metadata } from "next";
import GraphicDesignClient from "./GraphicDesignClient";

export const metadata: Metadata = {
    title: "Professional Graphic Design Services in pondicherry | Syscrop",
    description:
        "Enhance your brand with professional Graphic Design services in Pondicherry, including logos, marketing materials, social media posts, and videos.",
    keywords: [
        "Graphic Design Services Pondicherry",
        "Graphic Design Company Pondicherry",
        "Logo Design Services Pondicherry",
        "Branding Design Agency Pondicherry",
        "Brochure Design Services Pondicherry",
        "Creative Graphic Designers Pondicherry",
        "Corporate Design Services Pondicherry",
        "Print Design Services Pondicherry",
        "Digital Graphic Design Pondicherry",
        "Graphic Designers Near Me Pondicherry",
    ],
};

export default function GraphicDesignPondicherryPage() {
    return <GraphicDesignClient />;
}
