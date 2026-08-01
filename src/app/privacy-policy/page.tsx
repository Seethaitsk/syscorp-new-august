import React from "react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const PrivacyPolicy = () => {
    const lastUpdated = "August 18, 2022";

    return (
        <>
            {/* Page Header */}
            <section className="bg-[#011146] py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Privacy Policy</h1>
                    <div className="bg-white/10 backdrop-blur-md inline-block px-4 py-1 rounded-[2rem] border border-white/20">
                        <Breadcrumbs />
                    </div>
                </div>
                {/* Subtle background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            </section>

            <div className="bg-slate-50 min-h-screen py-12">
                <div className="container mx-auto px-4 lg:px-8">
                    {/* Main Content Card */}
                    <div className="mx-auto bg-white shadow-xl rounded-3xl overflow-hidden border border-slate-200">
                        {/* Introduction */}
                        <div className="px-8 pt-10 pb-6 border-b border-slate-100">
                            <h2 className="heading-1 font-bold mb-4">Privacy Policy</h2>

                            <p className="text-lg leading-relaxed text-slate-600 max-w-3xl">
                                This Privacy Policy describes Our policies and procedures on the collection, use and
                                disclosure of Your information when You use the Service and tells You about Your privacy
                                rights and how the law protects You.
                            </p>
                            <div className="mt-6 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                                <p className="text-blue-800 text-sm italic m-0 font-medium">
                                    We use Your Personal data to provide and improve the Service. By using the Service,
                                    You agree to the collection and use of information in accordance with this Privacy
                                    Policy.
                                </p>
                            </div>
                            <p className="mt-4 text-slate-400 text-sm uppercase tracking-wider font-semibold">
                                Last updated: {lastUpdated}
                            </p>
                        </div>

                        {/* Content Body */}
                        <div className="px-8 py-12 prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600 prose-strong:text-slate-900">
                            {/* Section 01: Definitions */}
                            <section className="mb-12">
                                <h2 className="text-2xl font-bold flex items-center gap-2">
                                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-sm">
                                        01
                                    </span>
                                    Interpretation and Definitions
                                </h2>
                                <h3 className="text-xl font-semibold mt-6">Interpretation</h3>
                                <p>
                                    The words of which the initial letter is capitalized have meanings defined under the
                                    following conditions. The following definitions shall have the same meaning
                                    regardless of whether they appear in singular or in plural.
                                </p>
                                <h3 className="text-xl font-semibold mt-6 text-[#011146]">Definitions</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    {[
                                        {
                                            term: "Account",
                                            desc: "A unique account created for You to access our Service.",
                                        },
                                        {
                                            term: "Company",
                                            desc: "Syscorp Technology Pvt Ltd, No.37, Kamaraj Salai, Thattanchavady, Puducherry - 605009.",
                                        },
                                        {
                                            term: "Cookies",
                                            desc: "Small files placed on Your device containing details of Your browsing history.",
                                        },
                                        {term: "Country", desc: "Refers to: Puducherry, India"},
                                        {
                                            term: "Device",
                                            desc: "Any device that can access the Service such as a computer or cellphone.",
                                        },
                                        {
                                            term: "Personal Data",
                                            desc: "Any information that relates to an identified or identifiable individual.",
                                        },
                                        {term: "Service", desc: "Refers to the Website (https://syscorp.in/)."},
                                        {
                                            term: "Usage Data",
                                            desc: "Data collected automatically, generated by the use of the Service.",
                                        },
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-100 transition-colors group"
                                        >
                                            <span className="font-bold text-[#011146] block mb-1 group-hover:text-blue-600 transition-colors">
                                                {item.term}
                                            </span>
                                            <span className="text-sm">{item.desc}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Section 02: Data Collection */}
                            <section className="mb-12">
                                <h2 className="text-2xl font-bold flex items-center gap-2">
                                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-sm">
                                        02
                                    </span>
                                    Collecting and Using Your Personal Data
                                </h2>
                                <div className="bg-white border border-slate-200 rounded-2xl p-6 mt-4 shadow-sm">
                                    <h4 className="font-bold text-slate-800 m-0 mb-4 underline decoration-blue-500 underline-offset-4">
                                        Types of Data Collected
                                    </h4>
                                    <p className="font-semibold text-slate-700">Personal Data</p>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none p-0">
                                        {[
                                            "Email address",
                                            "First name and last name",
                                            "Phone number",
                                            "Usage Data",
                                        ].map((item) => (
                                            <li key={item} className="flex items-center gap-2 text-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <h4 className="text-lg font-semibold mt-8">Usage Data</h4>
                                <p>
                                    Usage Data may include Your Device's IP address, browser type, the pages You visit,
                                    and time spent. On mobile, we collect device ID, OS, and browser type.
                                </p>
                            </section>

                            {/* Section 03: Handling */}
                            <section className="mb-12">
                                <h2 className="text-2xl font-bold flex items-center gap-2">
                                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-sm">
                                        03
                                    </span>
                                    Data Transfer and Disclosure
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-4 bg-slate-50 rounded-xl">
                                        <h3 className="text-lg font-semibold m-0 mb-2">Transfer of Data</h3>
                                        <p className="text-sm m-0">
                                            Your information is processed at the Company's operating offices. It may be
                                            transferred to computers outside Your jurisdiction.
                                        </p>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-xl">
                                        <h3 className="text-lg font-semibold m-0 mb-2">Legal Disclosure</h3>
                                        <p className="text-sm m-0">
                                            We may disclose data to comply with legal obligations, protect Company
                                            rights, or prevent wrongdoing.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Section 04: Security */}
                            <section className="mb-12">
                                <h2 className="text-2xl font-bold flex items-center gap-2">
                                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-sm">
                                        04
                                    </span>
                                    Security & Retention
                                </h2>
                                <p>
                                    We retain Your Personal Data only for as long as necessary for legal obligations.
                                    While we use commercially acceptable security means, no electronic storage is 100%
                                    secure.
                                </p>
                            </section>

                            {/* Section 05: Children */}
                            <section className="mb-12 p-6 bg-red-50 rounded-2xl border border-red-100">
                                <h3 className="text-red-800 font-bold m-0 flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                        />
                                    </svg>
                                    Children's Privacy
                                </h3>
                                <p className="text-red-900/70 text-sm mt-2">
                                    Our Service does not address anyone under the age of 13. If we discover we have
                                    collected data from a child without parental consent, we take steps to remove that
                                    information.
                                </p>
                            </section>

                            {/* Contact Footer */}
                            <section className="border-t border-slate-200 pt-10">
                                <h2 className="text-2xl font-bold">Changes to this Policy</h2>
                                <p>
                                    We will notify You via email or a prominent notice on Our Service prior to any
                                    change becoming effective.
                                </p>

                                <div className="mt-8 p-8 bg-[#011146] rounded-3xl text-center shadow-2xl shadow-blue-900/20">
                                    <h3 className="text-white font-bold text-xl mb-4 italic">Have questions?</h3>
                                    <p className="text-slate-400 mb-6 text-sm">
                                        Our team is here to help you understand your privacy rights.
                                    </p>
                                    <a
                                        href="mailto:info@itsk.in"
                                        className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-10 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg"
                                    >
                                        Email Us: info@itsk.in
                                    </a>
                                </div>
                            </section>
                        </div>

                        {/* Copyright Footer inside card */}
                        <div className="bg-slate-50 px-8 py-6 text-center border-t border-slate-200">
                            <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">
                                © {new Date().getFullYear()} Syscorp Technology Pvt Ltd • All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicy;
