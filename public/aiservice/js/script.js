// ---------- Nav scroll state ----------
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ---------- Reveal on scroll ----------
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

function observeReveals() {
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// ---------- Counter animation ----------
function animateCounters() {
    document.querySelectorAll('.stat-number').forEach(el => {
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || '';
        if (reduceMotion) { el.textContent = target + suffix; return; }
        let current = 0;
        const step = Math.max(1, Math.round(target / 40));
        const tick = () => {
            current += step;
            if (current >= target) {
                el.textContent = target + suffix;
            } else {
                el.textContent = current + suffix;
                requestAnimationFrame(tick);
            }
        };
        tick();
    });
}
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.disconnect();
        }
    });
}, { threshold: 0.4 });
const statsStrip = document.querySelector('.stats-strip');
if (statsStrip) statsObserver.observe(statsStrip);

// ---------- Neural network canvas (hero + cta) ----------
function initNetworkCanvas(canvas, opts = {}) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const nodeCount = opts.nodeCount || 60;
    const maxDist = opts.maxDist || 140;
    const speed = opts.speed || 0.25;
    const color = opts.color || '111,160,255';
    let nodes = [];
    let width, height, animId;

    function resize() {
        width = canvas.clientWidth;
        height = canvas.clientHeight;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function makeNodes() {
        nodes = Array.from({ length: nodeCount }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * speed,
            vy: (Math.random() - 0.5) * speed
        }));
    }

    function step() {
        ctx.clearRect(0, 0, width, height);
        nodes.forEach(n => {
            n.x += n.vx; n.y += n.vy;
            if (n.x < 0 || n.x > width) n.vx *= -1;
            if (n.y < 0 || n.y > height) n.vy *= -1;
        });
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < maxDist) {
                    ctx.strokeStyle = `rgba(${color},${(1 - dist / maxDist) * 0.5})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.stroke();
                }
            }
        }
        nodes.forEach(n => {
            ctx.fillStyle = `rgba(${color},0.9)`;
            ctx.beginPath();
            ctx.arc(n.x, n.y, 1.8, 0, Math.PI * 2);
            ctx.fill();
        });
        animId = requestAnimationFrame(step);
    }

    resize();
    makeNodes();
    if (!reduceMotion) step(); else step(); // draw one static frame either way
    if (reduceMotion) cancelAnimationFrame(animId);

    window.addEventListener('resize', () => {
        resize();
        makeNodes();
    });
}

initNetworkCanvas(document.getElementById('networkCanvas'), { nodeCount: 70, maxDist: 150, speed: 0.3, color: '56,189,248' });
initNetworkCanvas(document.getElementById('ctaCanvas'), { nodeCount: 45, maxDist: 130, speed: 0.2, color: '14,165,233' });

// ---------- Services data and Accordion logic removed (migrated to React in page.tsx) ----------

// ---------- Industry use cases ----------
// Replaced with dynamic scroll timeline below

// Observe reveals again now that dynamic content exists
observeReveals();

// ============================================================
// INDUSTRY CARD & HERO ANIMATIONS (GSAP)
// ============================================================
function initGsapAnimations1() {
    if (typeof gsap === 'undefined') {
        window.setTimeout(initGsapAnimations1, 50);
        return;
    }
    // 0. Hero Text Animation
    gsap.fromTo(".badge-eyebrow",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.2 }
    );
    gsap.fromTo(".hero-title",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.4 }
    );
    gsap.fromTo(".hero-sub",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.6 }
    );
    gsap.fromTo(".hero-btns",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.8 }
    );
    // 1. Continuous Float (Subtle)
    document.querySelectorAll(".industry-card").forEach((card, i) => {
        // give each card a slight random rotation at rest
        const restRot = (i % 2 === 0 ? 1 : -1) * (Math.random() * 2 + 1);
        card.dataset.restRot = restRot;
        gsap.set(card, { rotation: restRot });

        gsap.to(card, {
            y: `+=${6 + (i % 3) * 4}`,
            rotation: restRot + (i % 2 === 0 ? 1.5 : -1.5),
            duration: 3 + (i % 4) * 0.5,
            delay: i * 0.1,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1
        });
    });

    // 2. 3D Hover Lift
    document.querySelectorAll(".industry-card").forEach((card) => {
        card.addEventListener("mousemove", (e) => {
            const r = card.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width - 0.5;
            const py = (e.clientY - r.top) / r.height - 0.5;
            gsap.to(card, {
                rotateX: -py * 20,
                rotateY: px * 20,
                scale: 1.08,
                zIndex: 20,
                duration: 0.4,
                ease: "power2.out",
                transformPerspective: 900,
                overwrite: "auto"
            });
        });

        card.addEventListener("mouseleave", () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                scale: 1,
                zIndex: 1,
                rotation: parseFloat(card.dataset.restRot) || 0,
                duration: 0.8,
                ease: "elastic.out(1, 0.6)",
                overwrite: "auto"
            });
        });
    });
}
initGsapAnimations1();

// ============================================================
// 3D CAROUSEL LOGIC REMOVED - Using CSS Grid Instead
// ============================================================

// ============================================================
// TREND CARDS LIVE SPOTLIGHT & GSAP ANIMATION
// ============================================================
function initGsapAnimations2() {
    if (typeof gsap === 'undefined') {
        window.setTimeout(initGsapAnimations2, 50);
        return;
    }
    const trendCards = document.querySelectorAll('.trend-card');
    const trendsSection = document.getElementById('trends');

    // 1. Live Spotlight Effect
    if (trendsSection) {
        trendsSection.addEventListener('mousemove', (e) => {
            trendCards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--x', `${x}px`);
                card.style.setProperty('--y', `${y}px`);
            });
        });
    }

    // 2. GSAP Entrance Animation
    const trendColumns = document.querySelectorAll('#trends .col-lg-3');
    if (trendColumns.length > 0) {
        // Wait, if ScrollTrigger is not defined, we might get another error.
        // Let's ensure we only use it if it exists, otherwise just animate
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.from(trendColumns, {
                scrollTrigger: {
                    trigger: '#trends',
                    start: 'top 75%'
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                clearProps: "all"
            });
        } else {
            gsap.from(trendColumns, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                clearProps: "all"
            });
        }
    }
}
initGsapAnimations2();

// ============================================================
// HUD SCANNER ANIMATION
// ============================================================
window.setTimeout(() => {
    const hudObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.querySelectorAll('.hud-val').forEach(el => {
                const target = parseInt(el.dataset.target, 10);
                let cur = 0;
                const step = Math.max(1, Math.ceil(target / 40));
                const tick = () => {
                    cur += step;
                    el.textContent = cur >= target ? target : cur;
                    if (cur < target) requestAnimationFrame(tick);
                };
                tick();
            });
            hudObserver.unobserve(entry.target);
        });
    }, { threshold: 0.4 });
    document.querySelectorAll('.services-visual').forEach(el => hudObserver.observe(el));
});

// ============================================================
// SERVICES MARQUEE CHIP CLICK LOGIC
// ============================================================
window.setTimeout(() => {
    document.querySelectorAll('.service-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            const key = chip.dataset.target;
            const item = document.querySelector(`.accordion-item[data-service="${key}"]`);
            if (!item) return;

            const button = item.querySelector('.accordion-button');
            const collapseEl = item.querySelector('.accordion-collapse');

            // Optional: scroll into view slightly higher so it sits nicely in the viewport
            const y = item.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });

            if (button.classList.contains('collapsed')) {
                button.click();
            }

            item.classList.add('chip-jump-highlight');
            setTimeout(() => item.classList.remove('chip-jump-highlight'), 1200);
        });
    });
});

// ============================================================
// FLOW DIAGRAM AUTOMATION
// ============================================================
window.setTimeout(() => {
    const steps = document.querySelectorAll('#flowDiagram .flow-step');
    let activeStep = 0;

    function advanceFlow() {
        if (!steps.length) return;
        steps.forEach(s => s.classList.remove('flow-step-accent', 'flow-step-processing'));
        steps[activeStep].classList.add('flow-step-accent');
        activeStep = (activeStep + 1) % steps.length;
        setTimeout(() => {
            if (steps[activeStep]) steps[activeStep].classList.add('flow-step-processing');
        }, 900);
    }

    if (steps.length > 0) {
        advanceFlow();
        setInterval(advanceFlow, 1800);
    }
});

// ============================================================
// TIMELINE SCROLL LOGIC
// ============================================================
window.setTimeout(() => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineFill = document.getElementById('timelineFill');
    const timeline = document.getElementById('usecaseTimeline');

    if (timelineItems.length > 0 && timeline && timelineFill) {
        const itemObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });

        timelineItems.forEach(item => itemObserver.observe(item));

        window.addEventListener('scroll', () => {
            const rect = timeline.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            let progress = 0;
            const start = viewportHeight * 0.8;

            if (rect.top <= start) {
                const totalHeight = rect.height;
                const scrolled = start - rect.top;
                progress = Math.min(100, Math.max(0, (scrolled / totalHeight) * 100));
            }

            timelineFill.style.height = `${progress}%`;
        });
    }
});

// ============================================================
// HOLOGRAPHIC CARDS (TRENDS)
// ============================================================
window.setTimeout(() => {
    // 3D tilt effect on hover
    document.querySelectorAll('.holo-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.parentElement.style.position = 'relative';
            card.parentElement.style.zIndex = '10';
        });
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const px = (e.clientX - rect.left) / rect.width - 0.5;
            const py = (e.clientY - rect.top) / rect.height - 0.5;
            card.style.setProperty('--tilt-x', `${px * 10}deg`);
            card.style.setProperty('--tilt-y', `${-py * 10}deg`);
        });
        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--tilt-x', '0deg');
            card.style.setProperty('--tilt-y', '0deg');
            card.parentElement.style.zIndex = '';
        });
    });

    // Observer for counting up signal val and triggering bar pulse
    const holoObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const card = entry.target;
            card.classList.add('in-view');
            const target = parseInt(card.dataset.signal, 10);
            const valEl = card.querySelector('.holo-signal-val');

            if (!valEl || isNaN(target)) return;

            let cur = 0;
            const step = Math.max(1, Math.ceil(target / 30));
            const tick = () => {
                cur += step;
                valEl.textContent = cur >= target ? target : cur;
                if (cur < target) requestAnimationFrame(tick);
            };
            tick();

            holoObserver.disconnect(card); // run once per card
        });
    }, { threshold: 0.4 });

    document.querySelectorAll('.holo-card').forEach(c => holoObserver.observe(c));
});

// ---------- Chatbot Functionality ----------
const toggleChatbotBtn = document.getElementById('toggleChatbot');
const chatbotWindow = document.getElementById('chatbotWindow');
const closeChatbotBtn = document.getElementById('closeChatbot');
const chatInput = document.getElementById('chatInput');
const sendChatBtn = document.getElementById('sendChatBtn');
const chatbotBody = document.getElementById('chatbotBody');

if (toggleChatbotBtn && chatbotWindow) {
    toggleChatbotBtn.addEventListener('click', () => {
        chatbotWindow.classList.toggle('active');
        if (chatbotWindow.classList.contains('active')) {
            chatInput.focus();
        }
    });

    closeChatbotBtn.addEventListener('click', () => {
        chatbotWindow.classList.remove('active');
    });

    const sendMsg = () => {
        const text = chatInput.value.trim();
        if (!text) return;

        // Add user msg
        const userHtml = `
            <div class="chat-msg user-msg">
                <div class="msg-content">${text}</div>
                <div class="msg-time">Just now</div>
            </div>
        `;
        chatbotBody.insertAdjacentHTML('beforeend', userHtml);
        chatInput.value = '';
        chatbotBody.scrollTop = chatbotBody.scrollHeight;

        // Simulate typing and bot reply
        setTimeout(() => {
            const botHtml = `
                <div class="chat-msg bot-msg">
                    <div class="msg-content">Thanks for reaching out! This is a demo chatbot for AI Solutions. Please contact our team for more info.</div>
                    <div class="msg-time">Just now</div>
                </div>
            `;
            chatbotBody.insertAdjacentHTML('beforeend', botHtml);
            chatbotBody.scrollTop = chatbotBody.scrollHeight;
        }, 1000);
    };

    sendChatBtn.addEventListener('click', sendMsg);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMsg();
    });
}