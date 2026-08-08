import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
    title: "Contact | Connect with Our Software and Digital Solutions Experts",
    description:
        "Get in touch with our experienced team for web development, AI, SEO, digital marketing, and custom software solutions tailored to your needs.",
    keywords: [
        "Software Company in Pondicherry",
        "it companies in pondicherry",
    ],
};

export default function ContactUsPage() {
    return <ContactClient />;
}
