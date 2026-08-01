import React from "react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const Disclaimer = () => {
    return (
        <>
            {/* Page Header - Consistent Brand Style */}
            <section className="bg-[#011146] py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Disclaimer</h1>
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
                        {/* Intro Section */}
                        <div className="px-8 pt-10 pb-6 border-b border-slate-100">
                            <h2 className="text-3xl font-bold mb-4 text-[#011146]">Legal Notice</h2>
                            <p className="text-lg leading-relaxed text-slate-600 max-w-3xl">
                                If you require any more information or have any questions about our site's disclaimer,
                                please feel free to contact us by email at
                                <a
                                    href="mailto:support@itsk.in"
                                    className="text-blue-600 font-bold ml-1 hover:underline underline-offset-4"
                                >
                                    support@itsk.in
                                </a>
                                .
                            </p>
                        </div>

                        {/* Main Content Body */}
                        <div className="px-8 py-12 prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-strong:text-slate-900">
                            {/* Section: Disclaimers */}
                            <section className="mb-12">
                                <h2 className="text-2xl font-bold flex items-center gap-2">
                                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold">
                                        !
                                    </span>
                                    Disclaimers for SysCorp Technology
                                </h2>

                                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 mt-6 shadow-sm">
                                    <p className="m-0 leading-relaxed">
                                        All the information on this website - <strong>http://syscorp.in/</strong> - is
                                        published in good faith and for general information purpose only. SysCorp
                                        Technology (P) Ltd does not make any warranties about the completeness,
                                        reliability and accuracy of this information.
                                    </p>
                                    <p className="mt-4 text-red-700 font-semibold bg-red-50/50 p-3 rounded-lg border border-red-100">
                                        Any action you take upon the information you find on this website (SysCorp
                                        Technology (P) Ltd), is strictly at your own risk.
                                    </p>
                                    <p className="mt-4 m-0 font-medium text-slate-700">
                                        SysCorp Technology (P) Ltd will not be liable for any losses and/or damages in
                                        connection with the use of our website.
                                    </p>
                                </div>
                            </section>

                            {/* Section: External Links */}
                            <section className="mb-12">
                                <h3 className="text-xl font-bold">External Links Disclaimer</h3>
                                <p>
                                    From our website, you can visit other websites by following hyperlinks to such
                                    external sites. While we strive to provide only quality links to useful and ethical
                                    websites, we have no control over the content and nature of these sites.
                                </p>
                                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
                                    <p className="text-amber-900 text-sm m-0 italic">
                                        These links to other websites do not imply a recommendation for all the content
                                        found on these sites. Site owners and content may change without notice and may
                                        occur before we have the opportunity to remove a link which may have gone 'bad'.
                                    </p>
                                </div>
                                <p>
                                    Please be also aware that when you leave our website, other sites may have different
                                    privacy policies and terms which are beyond our control.
                                </p>
                            </section>

                            {/* Consent and Updates Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 pt-10 border-t border-slate-100">
                                <section className="p-4 bg-slate-50 rounded-2xl">
                                    <h3 className="text-lg font-bold uppercase text-[#011146] tracking-tight m-0">
                                        Consent
                                    </h3>
                                    <p className="text-sm mt-2 mb-0">
                                        By using our website, you hereby consent to our disclaimer and agree to its
                                        terms.
                                    </p>
                                </section>
                                <section className="p-4 bg-slate-50 rounded-2xl">
                                    <h3 className="text-lg font-bold uppercase text-[#011146] tracking-tight m-0">
                                        Update
                                    </h3>
                                    <p className="text-sm mt-2 mb-0 italic">
                                        Should we update, amend or make any changes to this document, those changes will
                                        be prominently posted here.
                                    </p>
                                </section>
                            </div>

                            {/* Support CTA */}
                            <section className="mt-16 bg-[#011146] rounded-[2rem] p-8 text-center shadow-2xl shadow-blue-900/20">
                                <h3 className="text-white font-bold text-xl mb-4">Official Support</h3>
                                <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">
                                    For any legal inquiries or technical clarification regarding these disclaimers,
                                    please reach out to our support desk.
                                </p>
                                <a
                                    href="mailto:support@itsk.in"
                                    className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-10 rounded-full transition-all hover:scale-105 shadow-lg active:scale-95"
                                >
                                    Email: support@itsk.in
                                </a>
                            </section>
                        </div>

                        {/* Card Footer */}
                        <div className="bg-slate-50 px-8 py-8 text-center border-t border-slate-200">
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-[0.2em]">
                                © {new Date().getFullYear()} Syscorp Technology Pvt Ltd • Legal Information
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Disclaimer;
