import type { Metadata } from "next";
import UIUXClient from "./UIUXClient";

export const metadata: Metadata = {
    title: "UI/UX Design Services in Pondicherry | Web & App Design",
    description:
        "Enhance your digital products with professional UI/UX Design Services in Pondicherry. We create intuitive, user-friendly interfaces that improve usability, engagement, and conversions.",
    keywords: [
        "UI UX Design Services Pondicherry",
        "best ui ux design services pondicherry",
        "free ui ux design services pondicherry",
        "Website UI UX Design Pondicherry",
    ],
};

export default function UIUXDesignPage() {
    return <UIUXClient />;
}
