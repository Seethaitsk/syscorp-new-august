import React from "react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const TermsAndConditions = () => {
    return (
        <>
            {/* Page Header - Matches Privacy Policy Style */}
            <section className="bg-[#011146] py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Terms & Conditions</h1>
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
                        {/* Introduction Header */}
                        <div className="px-8 pt-10 pb-6 border-b border-slate-100">
                            <h2 className="text-3xl font-bold mb-4 text-[#011146]">Terms of Use</h2>
                            <p className="text-lg leading-relaxed text-slate-600 max-w-3xl">
                                Please read these Terms of Use carefully before using this site. By accessing the{" "}
                                <strong>itsk.in</strong> site, you signify your agreement with these Terms of Use.
                            </p>
                            <div className="mt-6 p-4 bg-amber-50 rounded-xl border-l-4 border-amber-500">
                                <p className="text-amber-900 text-sm italic m-0 font-medium">
                                    SysCorp Technology reserves the right to modify, alter or otherwise update these
                                    Terms Of Use at any time. You are responsible for reviewing these terms
                                    periodically.
                                </p>
                            </div>
                        </div>

                        {/* Content Body */}
                        <div className="px-8 py-12 prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-strong:text-slate-900">
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
                                    <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                                        <strong className="text-[#011146] block mb-1">Company</strong>
                                        <span className="text-sm">
                                            Syscorp Technology Pvt Ltd, No.37, Kamaraj Salai, Thattanchavady, Puducherry
                                            - 605009.
                                        </span>
                                    </div>
                                    <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                                        <strong className="text-[#011146] block mb-1">Service</strong>
                                        <span className="text-sm">
                                            Refers to the Website and associated digital services.
                                        </span>
                                    </div>
                                    <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                                        <strong className="text-[#011146] block mb-1">Website</strong>
                                        <span className="text-sm">
                                            Accessible from{" "}
                                            <a href="https://syscorp.in/" className="text-blue-600 underline">
                                                SysCorp
                                            </a>
                                        </span>
                                    </div>
                                    <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                                        <strong className="text-[#011146] block mb-1">You</strong>
                                        <span className="text-sm">
                                            The individual or legal entity accessing or using the Service.
                                        </span>
                                    </div>
                                </div>
                            </section>

                            {/* Section 02: Copyrights */}
                            <section className="mb-12">
                                <h2 className="text-2xl font-bold flex items-center gap-2">
                                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-sm">
                                        02
                                    </span>
                                    Copyrights & Restrictions
                                </h2>
                                <p>
                                    All material on this site, including images, illustrations, audio clips, and video
                                    clips, is protected by copyrights owned and controlled by SysCorp Technology or
                                    licensed parties.
                                </p>

                                <div className="bg-red-50 p-6 rounded-2xl border border-red-100 my-6 shadow-sm">
                                    <p className="font-bold text-red-800 mb-2 uppercase text-xs tracking-widest underline underline-offset-4">
                                        Strict Prohibition
                                    </p>
                                    <p className="m-0 text-red-900 leading-relaxed uppercase font-medium text-sm">
                                        EXCEPT AS EXPRESSLY PROVIDED, MATERIAL FROM ISTUDIOTECH.IN OR ANY SITE OWNED BY
                                        SYSCORP TECHNOLOGY MAY NOT BE COPIED, REPRODUCED, REPUBLISHED, UPLOADED, POSTED,
                                        TRANSMITTED, OR DISTRIBUTED IN ANY WAY.
                                    </p>
                                </div>

                                <p>
                                    Modification of the materials or use for any other purpose is a violation of the
                                    Copyrights and proprietary rights. Use of such material on any other Web Site or
                                    networked computer environment is prohibited.
                                </p>
                            </section>

                            {/* Contact Footer */}
                            <section className="border-t border-slate-200 pt-10">
                                <div className="mt-8 p-8 bg-[#011146] rounded-3xl text-center shadow-2xl shadow-blue-900/20">
                                    <h3 className="text-white font-bold text-xl mb-4 italic">Questions?</h3>
                                    <p className="text-slate-400 mb-6 text-sm">
                                        If you have any questions about these Terms, please contact us.
                                    </p>
                                    <a
                                        href="mailto:info@itsk.in"
                                        className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-10 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg"
                                    >
                                        info@itsk.in
                                    </a>
                                </div>
                            </section>
                        </div>

                        {/* Copyright Footer */}
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

export default TermsAndConditions;
