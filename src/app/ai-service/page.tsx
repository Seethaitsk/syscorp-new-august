import type { Metadata } from "next";
import AiServiceClient from "./AiServiceClient";

export const metadata: Metadata = {
    title: "AI Services in Pondicherry | Custom AI Solutions & Automation",
    description:
        "Transform your business with AI services in Pondicherry. We deliver AI chatbots, AI agents, automation, generative AI, analytics, and custom AI solutions.",
    keywords: [
        "AI Development Company Pondicherry",
        "Artificial Intelligence Solutions Pondicherry",
        "AI Software Development Pondicherry",
        "AI Chatbot Development Pondicherry",
        "AI Automation Services Pondicherry",
        "Generative AI Development Pondicherry",
        "AI Agent Development Pondicherry",
        "Machine Learning Solutions Pondicherry",
        "AI Consulting Pondicherry",
        "Custom AI Application Development Pondicherry",
    ],
};

export default function AiServicePage() {
    return <AiServiceClient />;
}
