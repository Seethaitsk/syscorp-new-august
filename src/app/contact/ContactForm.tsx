"use client";

import React, { useState } from "react";
import { Loader2, ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";

const servicesList = [
    "Website Design",
    "Responsive UI/UX",
    "SEO Services",
    "Digital Marketing & Ads",
    "Web Applications",
    "Website Maintenance"
];

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        company: "",
        phoneNumber: "",
        service: "Website Design",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            // Simulate API request delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            console.log("Contact Form Submission (Simulated Local Success):", formData);

            setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
            setFormData({
                fullName: "",
                email: "",
                company: "",
                phoneNumber: "",
                service: "Website Design",
                message: ""
            });
        } catch (error: any) {
            console.error("Submission error:", error);
            setStatus({ type: 'error', message: "Something went wrong. Please try again later." });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto bg-white border border-[#dbeafe] rounded-[28px] p-8 md:p-12 shadow-[0_20px_50px_rgba(26,92,221,0.05)] font-sans relative z-10">
            {/* Status alerts */}
            {status && (
                <div className={`mb-8 p-5 rounded-2xl flex items-start gap-3 border transition-all duration-300 ${
                    status.type === 'success'
                        ? 'bg-green-50 text-green-700 border-green-200'
                        : 'bg-red-50 text-red-700 border-red-200'
                }`}>
                    {status.type === 'success' ? (
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-600 mt-0.5" />
                    ) : (
                        <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-600 mt-0.5" />
                    )}
                    <span className="text-sm font-semibold">{status.message}</span>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                        <label className="text-[11px] font-extrabold text-slate-800 tracking-wider block uppercase">
                            Full Name*
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Daniel Scoot"
                            className="w-full px-5 py-4 rounded-xl border border-[#dbeafe] bg-[#F0F8FF]/60 text-slate-900 placeholder:text-slate-450 focus:bg-white focus:border-blue-600 outline-none transition-all duration-200 text-sm"
                            required
                        />
                    </div>

                    {/* Email Address */}
                    <div className="space-y-2">
                        <label className="text-[11px] font-extrabold text-slate-800 tracking-wider block uppercase">
                            Email Address*
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="w-full px-5 py-4 rounded-xl border border-[#dbeafe] bg-[#F0F8FF]/60 text-slate-900 placeholder:text-slate-450 focus:bg-white focus:border-blue-600 outline-none transition-all duration-200 text-sm"
                            required
                        />
                    </div>

                    {/* Company */}
                    <div className="space-y-2">
                        <label className="text-[11px] font-extrabold text-slate-800 tracking-wider block uppercase">
                            Company
                        </label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Ex. Microsoft"
                            className="w-full px-5 py-4 rounded-xl border border-[#dbeafe] bg-[#F0F8FF]/60 text-slate-900 placeholder:text-slate-450 focus:bg-white focus:border-blue-600 outline-none transition-all duration-200 text-sm"
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2">
                        <label className="text-[11px] font-extrabold text-slate-800 tracking-wider block uppercase">
                            Phone Number*
                        </label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="+91 93444 30402"
                            className="w-full px-5 py-4 rounded-xl border border-[#dbeafe] bg-[#F0F8FF]/60 text-slate-900 placeholder:text-slate-450 focus:bg-white focus:border-blue-600 outline-none transition-all duration-200 text-sm"
                            required
                        />
                    </div>
                </div>

                {/* Choose Needed Service */}
                <div className="space-y-2">
                    <label className="text-[11px] font-extrabold text-slate-800 tracking-wider block uppercase">
                        Choose Needed Service
                    </label>
                    <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl border border-[#dbeafe] bg-[#F0F8FF]/60 text-slate-900 focus:bg-white focus:border-blue-600 outline-none transition-all duration-200 text-sm cursor-pointer"
                    >
                        {servicesList.map((serviceName) => (
                            <option key={serviceName} value={serviceName} className="text-slate-900 bg-white">
                                {serviceName}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Project Details */}
                <div className="space-y-2">
                    <label className="text-[11px] font-extrabold text-slate-800 tracking-wider block uppercase">
                        Project Details
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write to brief about project"
                        className="w-full px-5 py-4 rounded-xl border border-[#dbeafe] bg-[#F0F8FF]/60 text-slate-900 placeholder:text-slate-450 focus:bg-white focus:border-blue-600 outline-none transition-all duration-200 text-sm resize-none min-h-[140px]"
                        required
                    />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-[#1A5CDD] hover:bg-[#154ebc] text-white font-extrabold text-xs px-8 py-4.5 rounded-xl shadow-lg hover:shadow-blue-550/20 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-75 disabled:pointer-events-none uppercase tracking-widest"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin text-white" />
                                <span>Submitting...</span>
                            </>
                        ) : (
                            <>
                                <span>Submit Now</span>
                                <ArrowUpRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
