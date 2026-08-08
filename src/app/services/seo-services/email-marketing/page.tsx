import type { Metadata } from "next";
import EmailMarketingClient from "./EmailMarketingClient";

export const metadata: Metadata = {
    title: "Email Marketing Services in Pondicherry | Syscorp",
    description:
        "Connect with your audience through Email Marketing services in Pondicherry that improve engagement, customer retention, and conversions.",
    keywords: [
        "Email Marketing Services Pondicherry",
        "Email Marketing Agency Pondicherry",
        "Email Campaign Management Pondicherry",
        "Bulk Email Marketing Pondicherry",
        "Email Automation Services Pondicherry",
        "Newsletter Marketing Pondicherry",
        "Promotional Email Services Pondicherry",
        "Email Marketing Solutions Pondicherry",
        "Email Marketing Consultant Pondicherry",
        "Email Marketing Experts Pondicherry",
    ],
};

export default function EmailMarketingPage() {
    return <EmailMarketingClient />;
}
