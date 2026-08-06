"use client";

import React, { useState, useEffect, useMemo } from "react";
import HeaderBanner from "@/components/ui/HeaderBanner";
import {
  Code,
  PenTool,
  Megaphone,
  MapPin,
  ArrowRight,
  Search,
  Briefcase,
  X,
  Upload,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Copy,
  Check,
  Filter,
  Sparkles,
  Building2,
  Clock,
} from "lucide-react";

interface Job {
  id: number;
  title: string;
  location: string;
  category: string;
  description: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface JobApplicationResponse {
  reference_code: string;
  status: string;
  full_name: string;
  email: string;
  mobile: string;
  location: string;
  job_title: string;
  submitted_at: string;
}

interface TrackingData {
  reference_code: string;
  status: string;
  full_name: string;
  job_title: string;
  submitted_at: string;
  updated_at: string;
}

export default function CareerPage() {
  // Main states for Jobs Listing API (GET /api/jobs)
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loadingJobs, setLoadingJobs] = useState<boolean>(true);
  const [errorJobs, setErrorJobs] = useState<string | null>(null);

  // Search & Filter
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Job Details Modal (GET /api/jobs/{id})
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);
  const [jobDetail, setJobDetail] = useState<Job | null>(null);
  const [loadingDetail, setLoadingDetail] = useState<boolean>(false);

  // Application Form Modal (POST /api/job-applications)
  const [applyingJob, setApplyingJob] = useState<Job | null>(null);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    mobile: "",
    location: "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [submittingApp, setSubmittingApp] = useState<boolean>(false);
  const [appError, setAppError] = useState<string | null>(null);
  const [appSuccessData, setAppSuccessData] = useState<JobApplicationResponse | null>(null);

  // Application Tracking Modal (GET /api/job-applications/track/{reference})
  const [trackModalOpen, setTrackModalOpen] = useState<boolean>(false);
  const [trackReferenceInput, setTrackReferenceInput] = useState<string>("");
  const [trackingLoading, setTrackingLoading] = useState<boolean>(false);
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);
  const [trackingError, setTrackingError] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  // 1. Fetch Jobs List (GET /api/jobs)
  useEffect(() => {
    let isMounted = true;
    const fetchJobs = async () => {
      setLoadingJobs(true);
      setErrorJobs(null);
      try {
        const response = await fetch("https://wadmin.syscorp.in/api/jobs", {
          headers: { accept: "*/*" },
        });

        
        if (!response.ok) throw new Error("Failed to fetch job listings.");
        const result = await response.json();

        // console.log(result);
        if (isMounted) {
          const list = Array.isArray(result) ? result : result.data || [];
          setJobs(list);
        }
      } catch (err: any) {
        if (isMounted) setErrorJobs(err.message || "Failed to load jobs.");
      } finally {
        if (isMounted) setLoadingJobs(false);
      }
    };

    fetchJobs();
    return () => {
      isMounted = false;
    };
  }, []);

  // 2. Fetch Job Details (GET /api/jobs/{id})
  useEffect(() => {
    if (!selectedJobId) {
      setJobDetail(null);
      return;
    }

    let isMounted = true;
    const fetchJobDetail = async () => {
      setLoadingDetail(true);
      try {
        const response = await fetch(`https://wadmin.syscorp.in/api/jobs/${selectedJobId}`, {
          headers: { accept: "*/*" },
        });
        if (!response.ok) throw new Error("Failed to load job details.");
        const result = await response.json();
        if (isMounted && result && result.data) {
          setJobDetail(result.data);
        //   console.log(result.data);
        }
      } catch (err) {
        console.error("Job detail error:", err);
      } finally {
        if (isMounted) setLoadingDetail(false);
      }
    };

    fetchJobDetail();
    return () => {
      isMounted = false;
    };
  }, [selectedJobId]);

  // Derived category list
  const categories = useMemo(() => {
    const set = new Set<string>();
    jobs.forEach((job) => {
      if (job.category) set.add(job.category);
    });
    return ["All", ...Array.from(set)];
  }, [jobs]);

  // Filtered jobs list
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesCategory =
        selectedCategory === "All" ||
        job.category?.toLowerCase() === selectedCategory.toLowerCase();
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        job.title?.toLowerCase().includes(q) ||
        job.location?.toLowerCase().includes(q) ||
        job.category?.toLowerCase().includes(q) ||
        job.description?.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [jobs, selectedCategory, searchQuery]);

  // 3. Submit Application Form (POST /api/job-applications)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!validTypes.includes(file.type) && !file.name.match(/\.(pdf|doc|docx)$/i)) {
        setAppError("Please upload a valid PDF, DOC, or DOCX document.");
        return;
      }
      setAppError(null);
      setResumeFile(file);
    }
  };

  const handleAppSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!applyingJob) return;
    if (!resumeFile) {
      setAppError("Please upload your resume file (PDF, DOC, or DOCX).");
      return;
    }

    setSubmittingApp(true);
    setAppError(null);

    try {
      const body = new FormData();
      body.append("job_posting_id", String(applyingJob.id));
      body.append("full_name", formData.full_name.trim());
      body.append("email", formData.email.trim());
      body.append("mobile", formData.mobile.trim());
      body.append("location", formData.location.trim());
      body.append("resume", resumeFile);

      const response = await fetch("https://wadmin.syscorp.in/api/job-applications", {
        method: "POST",
        headers: {
          accept: "*/*",
        },
        body,
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setAppSuccessData(resData.data);
      } else {
        const errorMsg =
          resData.message ||
          (resData.errors ? Object.values(resData.errors).flat().join(" ") : "Submission failed.");
        setAppError(errorMsg);
      }
    } catch (err: any) {
      console.error("Application error:", err);
      setAppError("Network error. Please try submitting again.");
    } finally {
      setSubmittingApp(false);
    }
  };

  // 4. Track Application (GET /api/job-applications/track/{reference})
  const handleTrackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const code = trackReferenceInput.trim();
    if (!code) {
      setTrackingError("Please enter your reference code.");
      return;
    }

    setTrackingLoading(true);
    setTrackingError(null);
    setTrackingData(null);

    try {
      const response = await fetch(`https://wadmin.syscorp.in/api/job-applications/track/${encodeURIComponent(code)}`, {
        headers: { accept: "*/*" },
      });
      const resData = await response.json();

      if (response.ok && resData.success && resData.data) {
        setTrackingData(resData.data);
      } else {
        setTrackingError(resData.message || "Reference code not found. Please check and try again.");
      }
    } catch (err) {
      console.error("Tracking error:", err);
      setTrackingError("Unable to fetch application status. Please try again later.");
    } finally {
      setTrackingLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const s = status ? status.toLowerCase() : "";
    if (s.includes("received") || s.includes("new") || s.includes("active")) {
      return {
        label: s === "active" ? "Open Position" : "Received & Under Review",
        bg: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
      };
    }
    if (s.includes("review")) {
      return {
        label: "Under Review",
        bg: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
      };
    }
    if (s.includes("interview")) {
      return {
        label: "Interview Scheduled",
        bg: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
      };
    }
    if (s.includes("accept") || s.includes("hired")) {
      return {
        label: "Application Accepted",
        bg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      };
    }
    return {
      label: status || "Submitted",
      bg: "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20",
    };
  };

  const getCategoryIcon = (category: string) => {
    const c = category ? category.toLowerCase() : "";
    if (c.includes("engineering") || c.includes("dev")) return <Code className="w-5 h-5" />;
    if (c.includes("design") || c.includes("creative")) return <PenTool className="w-5 h-5" />;
    if (c.includes("marketing") || c.includes("sales")) return <Megaphone className="w-5 h-5" />;
    return <Briefcase className="w-5 h-5" />;
  };

  return (
    <main className="min-h-screen bg-[#F0F8FF] dark:bg-[#080f25] transition-colors duration-500 font-sans pb-24">
      {/* ─── HERO HEADER BANNER ─── */}
      <HeaderBanner
        title={
          <>
            Build your career with <span className="text-[#38bdf8] font-serif italic font-normal">Syscorp</span> innovation.
          </>
        }
        description="Explore exciting opportunities to innovate, collaborate, and create high-impact software solutions with our global team."
      />

      <section className="max-w-[1280px] mx-auto px-6 md:px-12 -mt-8 relative z-20">
        
        {/* ─── SEARCH & TRACK TOOLBAR ─── */}
        <div className="bg-white dark:bg-[#0a1128] border border-blue-100 dark:border-blue-950/50 rounded-2xl p-4 md:p-6 shadow-[0_10px_30px_rgba(26,92,221,0.06)] flex flex-col lg:flex-row gap-4 items-center justify-between">
          
          {/* Search Box */}
          <div className="relative w-full lg:w-96">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by job title, location, or skill..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#1A5CDD] text-sm transition-all"
            />
          </div>

          {/* Track Application Button */}
          <button
            onClick={() => {
              setTrackModalOpen(true);
              setTrackingError(null);
              setTrackingData(null);
            }}
            className="w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-[#1A5CDD]/10 hover:bg-[#1A5CDD]/20 text-[#1A5CDD] dark:bg-blue-500/10 dark:hover:bg-blue-500/20 dark:text-blue-400 border border-[#1A5CDD]/20 dark:border-blue-500/30 px-6 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#1A5CDD] dark:text-blue-400 animate-pulse" />
            <span>Track Application Status</span>
          </button>
        </div>

        {/* ─── CATEGORY CHIPS ─── */}
        <div className="flex items-center gap-2 overflow-x-auto py-6 no-scrollbar">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mr-2 flex-shrink-0">
            <Filter className="w-3.5 h-3.5" /> Categories:
          </span>
          {categories.map((cat) => {
            const active = selectedCategory.toLowerCase() === cat.toLowerCase();
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  active
                    ? "bg-[#1A5CDD] text-white shadow-md shadow-blue-500/20 dark:bg-blue-600"
                    : "bg-white dark:bg-[#0a1128] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-[#1A5CDD] dark:hover:border-blue-400"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ─── 1. JOB LISTINGS GRID (GET /api/jobs) ─── */}
        {loadingJobs ? (
          <div className="py-20 flex flex-col items-center justify-center gap-4">
            <Loader2 className="w-10 h-10 animate-spin text-[#1A5CDD] dark:text-blue-400" />
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Fetching available career openings...</p>
          </div>
        ) : errorJobs ? (
          <div className="py-16 text-center bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/30 rounded-2xl p-8 max-w-lg mx-auto">
            <AlertCircle className="w-10 h-10 text-rose-500 mx-auto mb-3" />
            <p className="text-sm font-semibold text-rose-700 dark:text-rose-400">{errorJobs}</p>
          </div>
        ) : filteredJobs.length === 0 ? (
          <div className="py-20 text-center bg-white dark:bg-[#0a1128] border border-slate-200 dark:border-slate-800 rounded-2xl p-12">
            <Briefcase className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">No positions found</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              We couldn&apos;t find any openings matching your criteria. Try adjusting your search query or selecting another category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map((job) => {
              const statusBadge = getStatusBadge(job.status);
              return (
                <div
                  key={job.id}
                  className="group bg-white dark:bg-[#0a1128] border border-blue-100 dark:border-blue-950/40 rounded-2xl p-7 shadow-sm hover:shadow-2xl hover:border-blue-400/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full relative"
                >
                  <div>
                    <div className="flex justify-between items-start mb-5">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-[#1a5cdd] dark:text-blue-400 flex-shrink-0">
                          {getCategoryIcon(job.category)}
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#1a5cdd] dark:text-blue-400 block mb-1">
                            {job.category || "General"}
                          </span>
                          <div className="flex items-center text-slate-500 dark:text-slate-400 text-xs font-medium">
                            <MapPin className="w-3.5 h-3.5 mr-1 text-slate-400" />
                            <span>{job.location || "Remote"}</span>
                          </div>
                        </div>
                      </div>
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${statusBadge.bg}`}>
                        {statusBadge.label}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-3 leading-snug group-hover:text-[#1a5cdd] dark:group-hover:text-blue-400 transition-colors">
                      {job.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3">
                      {job.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <button
                      onClick={() => setSelectedJobId(job.id)}
                      className="flex-1 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold py-3 rounded-xl text-xs transition-all text-center cursor-pointer"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => {
                        setApplyingJob(job);
                        setAppError(null);
                        setAppSuccessData(null);
                        setFormData({ full_name: "", email: "", mobile: "", location: "" });
                        setResumeFile(null);
                      }}
                      className="flex-1 bg-[#1a5cdd] hover:bg-[#154ebc] dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-xs transition-all flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/10 cursor-pointer"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* ─── 2. JOB DETAILS MODAL (GET /api/jobs/{id}) ─── */}
      {selectedJobId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-[#0a1128] border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative">
            <button
              onClick={() => setSelectedJobId(null)}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {loadingDetail ? (
              <div className="py-20 text-center">
                <Loader2 className="w-8 h-8 animate-spin text-[#1A5CDD] mx-auto mb-3" />
                <p className="text-sm font-medium text-slate-500">Loading position specification...</p>
              </div>
            ) : jobDetail ? (
              <div className="flex flex-col gap-6">
                <div>
                  <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 text-[#1A5CDD] dark:bg-blue-500/10 dark:text-blue-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                    {jobDetail.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
                    {jobDetail.title}
                  </h2>
                  <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#1A5CDD]" /> {jobDetail.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-[#1A5CDD]" /> Syscorp Technologies
                    </span>
                  </div>
                </div>

                <div className="h-[1px] bg-slate-100 dark:bg-slate-800" />

                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-3">
                    Job Overview & Description
                  </h4>
                  <div className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed space-y-4 whitespace-pre-line">
                    {jobDetail.description}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setSelectedJobId(null)}
                    className="px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const j = jobDetail;
                      setSelectedJobId(null);
                      setApplyingJob(j);
                      setAppError(null);
                      setAppSuccessData(null);
                      setFormData({ full_name: "", email: "", mobile: "", location: "" });
                      setResumeFile(null);
                    }}
                    className="px-6 py-3 rounded-xl bg-[#1A5CDD] hover:bg-[#154ebc] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-extrabold transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20 cursor-pointer"
                  >
                    <span>Apply for Position</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="py-12 text-center text-slate-500">Failed to load details.</div>
            )}
          </div>
        </div>
      )}

      {/* ─── 3. APPLICATION FORM MODAL (POST /api/job-applications) ─── */}
      {applyingJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-[#0a1128] border border-slate-200 dark:border-slate-800 rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative">
            <button
              onClick={() => {
                setApplyingJob(null);
                setAppSuccessData(null);
              }}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {appSuccessData ? (
              /* SUCCESS STATE */
              <div className="py-6 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
                  Application Submitted!
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-6">
                  Thank you, <strong className="text-slate-900 dark:text-white">{appSuccessData.full_name}</strong>. Your application for <strong className="text-slate-900 dark:text-white">{appSuccessData.job_title}</strong> has been received.
                </p>

                <div className="bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50 rounded-2xl p-5 w-full mb-6 text-center relative">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400 block mb-1">
                    Your Application Reference Code
                  </span>
                  <div className="text-2xl font-mono font-black text-[#1A5CDD] dark:text-blue-400 tracking-wider flex items-center justify-center gap-3">
                    <span>{appSuccessData.reference_code}</span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(appSuccessData.reference_code);
                        setCopiedCode(true);
                        setTimeout(() => setCopiedCode(false), 2000);
                      }}
                      className="p-1.5 rounded-lg bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-[#1A5CDD] shadow-sm cursor-pointer"
                      title="Copy Reference Code"
                    >
                      {copiedCode ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2">
                    Save this reference code to track your application status anytime.
                  </p>
                </div>

                <div className="flex gap-3 w-full">
                  <button
                    onClick={() => {
                      setApplyingJob(null);
                      setAppSuccessData(null);
                    }}
                    className="flex-1 py-3 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 cursor-pointer"
                  >
                    Done
                  </button>
                  <button
                    onClick={() => {
                      const code = appSuccessData.reference_code;
                      setApplyingJob(null);
                      setAppSuccessData(null);
                      setTrackModalOpen(true);
                      setTrackReferenceInput(code);
                    }}
                    className="flex-1 py-3 rounded-xl bg-[#1A5CDD] hover:bg-[#154ebc] dark:bg-blue-600 text-white text-xs font-extrabold transition-all cursor-pointer"
                  >
                    Track Status Now
                  </button>
                </div>
              </div>
            ) : (
              /* FORM STATE */
              <div>
                <div className="mb-6">
                  <span className="text-[11px] font-extrabold text-[#1A5CDD] uppercase tracking-wider block mb-1">
                    Job Application
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    Apply for {applyingJob.title}
                  </h3>
                </div>

                {appError && (
                  <div className="mb-5 p-4 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 flex items-start gap-3 text-rose-700 dark:text-rose-400 text-xs font-semibold">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{appError}</span>
                  </div>
                )}

                <form onSubmit={handleAppSubmit} className="space-y-4">
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-800 dark:text-slate-200 uppercase tracking-wider block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleInputChange}
                      placeholder="e.g. Alex Morgan"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-white text-sm outline-none focus:border-[#1A5CDD]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-extrabold text-slate-800 dark:text-slate-200 uppercase tracking-wider block mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="alex@example.com"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-white text-sm outline-none focus:border-[#1A5CDD]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-extrabold text-slate-800 dark:text-slate-200 uppercase tracking-wider block mb-1.5">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="+91 9876543210"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-white text-sm outline-none focus:border-[#1A5CDD]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-extrabold text-slate-800 dark:text-slate-200 uppercase tracking-wider block mb-1.5">
                      Current Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="e.g. Bangalore, India"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-white text-sm outline-none focus:border-[#1A5CDD]"
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-800 dark:text-slate-200 uppercase tracking-wider block mb-1.5">
                      Upload Resume (PDF, DOC, DOCX) *
                    </label>
                    <div className="relative border-2 border-dashed border-slate-200 dark:border-slate-800 hover:border-[#1A5CDD] rounded-2xl p-5 text-center transition-colors bg-slate-50/50 dark:bg-slate-900/40 cursor-pointer">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        required
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                      />
                      {resumeFile ? (
                        <div className="flex items-center justify-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-xs">
                          <CheckCircle2 className="w-5 h-5" />
                          <span className="truncate max-w-[280px]">{resumeFile.name}</span>
                          <span className="text-[10px] text-slate-400">({(resumeFile.size / 1024).toFixed(0)} KB)</span>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-1.5 text-slate-500 dark:text-slate-400">
                          <Upload className="w-6 h-6 text-[#1A5CDD]" />
                          <span className="text-xs font-semibold">Click or drag file to upload resume</span>
                          <span className="text-[10px] text-slate-400">PDF, DOC, DOCX up to 5MB</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={submittingApp}
                      className="w-full bg-[#1A5CDD] hover:bg-[#154ebc] dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-extrabold text-xs py-4 rounded-xl transition-all flex items-center justify-center gap-2 uppercase tracking-wider shadow-lg shadow-blue-500/20 disabled:opacity-75 cursor-pointer"
                    >
                      {submittingApp ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting Application...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ─── 4. APPLICATION TRACKING MODAL (GET /api/job-applications/track/{reference}) ─── */}
      {trackModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-[#0a1128] border border-slate-200 dark:border-slate-800 rounded-3xl max-w-md w-full p-6 md:p-8 shadow-2xl relative">
            <button
              onClick={() => setTrackModalOpen(false)}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-[11px] font-extrabold text-[#1A5CDD] uppercase tracking-wider block mb-1">
                Status Portal
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                Track Application Status
              </h3>
            </div>

            <form onSubmit={handleTrackSubmit} className="space-y-4 mb-6">
              <div>
                <label className="text-[11px] font-extrabold text-slate-800 dark:text-slate-200 uppercase tracking-wider block mb-1.5">
                  Reference Code *
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={trackReferenceInput}
                    onChange={(e) => setTrackReferenceInput(e.target.value)}
                    placeholder="e.g. RX-VI0WSCLS"
                    required
                    className="flex-1 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-white font-mono text-sm uppercase outline-none focus:border-[#1A5CDD]"
                  />
                  <button
                    type="submit"
                    disabled={trackingLoading}
                    className="px-5 bg-[#1A5CDD] hover:bg-[#154ebc] text-white font-extrabold text-xs rounded-xl transition-all flex items-center justify-center disabled:opacity-60 cursor-pointer"
                  >
                    {trackingLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Track"}
                  </button>
                </div>
              </div>
            </form>

            {trackingError && (
              <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 flex items-start gap-2.5 text-rose-700 dark:text-rose-400 text-xs font-semibold mb-4">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{trackingError}</span>
              </div>
            )}

            {trackingData && (
              <div className="bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                  <span className="text-xs text-slate-500 font-mono">
                    Ref: {trackingData.reference_code}
                  </span>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${getStatusBadge(trackingData.status).bg}`}>
                    {getStatusBadge(trackingData.status).label}
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Applicant:</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">{trackingData.full_name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Position:</span>
                    <span className="font-bold text-[#1A5CDD] dark:text-blue-400">{trackingData.job_title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Submitted On:</span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      {new Date(trackingData.submitted_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
