import type { Metadata } from "next";
import CloudServerClient from "./CloudServerClient";

export const metadata: Metadata = {
    title: "Best Cloud Server Services in Pondicherry | Syscorp",
    description:
        "Get the best Cloud Server Services in Pondicherry with Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP) for secure, scalable cloud solutions.",
    keywords: [
        "Cloud Server Services Pondicherry",
        "Cloud Computing Services Pondicherry",
        "AWS Cloud Services Pondicherry",
        "Microsoft Azure Services Pondicherry",
        "Google Cloud Platform Services Pondicherry",
        "Cloud Migration Services Pondicherry",
        "Managed Cloud Services Pondicherry",
        "Cloud Infrastructure Solutions Pondicherry",
        "Cloud Hosting Services Pondicherry",
        "Cloud Server Providers Pondicherry",
    ],
};

export default function CloudServerPage() {
    return <CloudServerClient />;
}
