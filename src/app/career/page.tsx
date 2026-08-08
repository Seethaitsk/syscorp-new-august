import type { Metadata } from "next";
import CareerClient from "./CareerClient";

export const metadata: Metadata = {
    title: "Job Vacancy in Pondicherry | IT Jobs in Pondicherry",
    description:
        "Looking for a job vacancy in Pondicherry? Explore exciting career opportunities in web development, SEO, digital marketing, and software development.",
    keywords: [
        "Job Vacancy Pondicherry",
        "Jobs in Pondicherry",
        "Software Jobs Pondicherry",
        "IT Jobs Pondicherry",
        "job vacancies in pondicherry for freshers",
        "job vacancy for freshers in pondicherry",
        "today job vacancy in pondicherry",
    ],
};

export default function CareerPage() {
    return <CareerClient />;
}
