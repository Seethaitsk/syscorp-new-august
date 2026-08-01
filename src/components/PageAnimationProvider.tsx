"use client";

/**
 * PageAnimationProvider — Global GSAP ScrollTrigger for main menu pages.
 *
 * ✅ Uses only `data-animate` attributes — zero innerHTML/DOM mutations.
 * ✅ SEO-safe: all text stays in static HTML, animations are purely visual.
 * ✅ Accessible: respects `prefers-reduced-motion`.
 * ✅ Performance: ScrollTriggers killed on every route change, no leaks.
 * ✅ Scoped: runs only on /, /about, /career, /blog, /contact.
 *
 * Supported data-animate values:
 *   "fade-up"     — fade + slide up
 *   "fade-left"   — fade + slide in from left with tilt
 *   "fade-right"  — fade + slide in from right with tilt
 *   "zoom-in"     — elastic scale in + fade
 *   "blur-in"     — blur + scale + fade reveal
 *   "stagger-up"  — stagger direct children up one by one
 */

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const ALLOWED_PATHS = ["/", "/about", "/career", "/blog", "/contact"];

export default function PageAnimationProvider() {
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window === "undefined") return;
        if (!ALLOWED_PATHS.includes(pathname)) return;

        // Respect prefers-reduced-motion
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReduced) return;

        let ctx: ReturnType<typeof gsap.context> | null = null;

        const timer = setTimeout(() => {
            ctx = gsap.context(() => {
                const ease = "power3.out";
                const easeBack = "back.out(1.35)";

                // fade-up
                gsap.utils.toArray<HTMLElement>("[data-animate='fade-up']").forEach((el) => {
                    gsap.fromTo(el,
                        { y: 50, opacity: 0 },
                        {
                            y: 0, opacity: 1, duration: 1.0, ease,
                            scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" }
                        }
                    );
                });

                // fade-left
                gsap.utils.toArray<HTMLElement>("[data-animate='fade-left']").forEach((el) => {
                    gsap.fromTo(el,
                        { x: -80, rotate: -1.5, opacity: 0 },
                        {
                            x: 0, rotate: 0, opacity: 1, duration: 1.1, ease,
                            scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" }
                        }
                    );
                });

                // fade-right
                gsap.utils.toArray<HTMLElement>("[data-animate='fade-right']").forEach((el) => {
                    gsap.fromTo(el,
                        { x: 80, rotate: 1.5, opacity: 0 },
                        {
                            x: 0, rotate: 0, opacity: 1, duration: 1.1, ease,
                            scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" }
                        }
                    );
                });

                // zoom-in
                gsap.utils.toArray<HTMLElement>("[data-animate='zoom-in']").forEach((el) => {
                    gsap.fromTo(el,
                        { scale: 0.93, opacity: 0 },
                        {
                            scale: 1, opacity: 1, duration: 1.0, ease: easeBack,
                            scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" }
                        }
                    );
                });

                // blur-in
                gsap.utils.toArray<HTMLElement>("[data-animate='blur-in']").forEach((el) => {
                    gsap.fromTo(el,
                        { filter: "blur(14px)", y: 40, scale: 0.97, opacity: 0 },
                        {
                            filter: "blur(0px)", y: 0, scale: 1, opacity: 1, duration: 1.2, ease,
                            scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" }
                        }
                    );
                });

                // stagger-up — animates direct children
                gsap.utils.toArray<HTMLElement>("[data-animate='stagger-up']").forEach((container) => {
                    const children = Array.from(container.children) as HTMLElement[];
                    if (children.length < 2) return;
                    gsap.fromTo(children,
                        { y: 60, scale: 0.95, opacity: 0 },
                        {
                            y: 0, scale: 1, opacity: 1,
                            duration: 0.9, stagger: 0.09, ease: easeBack,
                            scrollTrigger: { trigger: container, start: "top 82%", toggleActions: "play none none none" }
                        }
                    );
                });

            });
        }, 450);

        return () => {
            clearTimeout(timer);
            if (ctx) ctx.revert();
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, [pathname]);

    return null;
}
