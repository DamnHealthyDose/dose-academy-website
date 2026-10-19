import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import slickImage from "@/assets/dose-mascot-custom.png";

const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.15 }
    );
    const el = ref.current;
    if (el) {
      el.querySelectorAll(".scroll-reveal").forEach((child) => observer.observe(child));
    }
    return () => observer.disconnect();
  }, []);
  return ref;
};

const steps = [
  {
    num: 1,
    title: "Pick your tool",
    body: "Overwhelmed? Open SPARK. Can't start homework? Open WAVE. Feeling rejected? Open RSD. Need company to focus? Squad Focus.",
  },
  {
    num: 2,
    title: "Follow the prompts",
    body: "Tap-only. No typing required. Each tool guides you through a structured sequence — 60 to 180 seconds depending on the tool.",
  },
  {
    num: 3,
    title: "Earn XP + badges",
    body: "Every session earns XP. Streaks build identity. 16 badges across all four tools reward consistency, self-awareness, and showing up.",
  },
];

const teenPoints = [
  "Open the app when ADHD hits hard",
  "Pick the right tool for the moment",
  "Follow tap-only guided steps — no typing",
  "Earn XP, badges, and streaks",
  "Study with the squad — silent co-working",
];

const parentPoints = [
  "Dashboard: session count + duration only",
  "Zero access to session content — always private",
  "School SSO via Clever and ClassLink",
  "Pediatric referral link — no app install needed",
  "COPPA compliant · No PII stored from under-13s",
];

const tools = [
  {
    icon: "⚡",
    name: "SPARK Junior",
    tagline: "Emotional crisis reset",
    time: "~2 min",
    bg: "bg-accent",
    border: "border-primary",
    anchor: "#spark",
  },
  {
    icon: "🌊",
    name: "WAVE Junior",
    tagline: "Focus & homework execution",
    time: "~25 min",
    bg: "bg-accent",
    border: "border-primary",
    anchor: "#wave",
  },
  {
    icon: "💜",
    name: "RSD Junior",
    tagline: "Rejection sensitivity",
    time: "~90 sec",
    bg: "bg-pink-100 dark:bg-pink-950/40",
    border: "border-pink-500",
    anchor: "#rsd",
  },
  {
    icon: "👥",
    name: "Squad Focus",
    tagline: "Body-doubling & accountability",
    time: "~25 min",
    bg: "bg-emerald-100 dark:bg-emerald-950/40",
    border: "border-success",
    anchor: "#squad",
  },
];

const HowItWorks = () => {
  const containerRef = useScrollReveal();

  return (
    <div className="min-h-screen flex flex-col" ref={containerRef}>
      <Header />

      {/* Section 1 — Hero */}
      <section className="w-full bg-background py-12 md:py-16">
        <div className="max-w-[680px] mx-auto px-5 text-center">
          <p
            className="text-xs uppercase tracking-[0.2em] text-primary mb-4 animate-fade-in"
            style={{ animationDelay: "0ms" }}
          >
            How It Works
          </p>
          <h1
            className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 animate-fade-in"
            style={{ animationDelay: "150ms" }}
          >
            Open the app. Pick your tool. Your brain does the rest.
          </h1>
          <p
            className="text-base text-muted-foreground animate-fade-in"
            style={{ animationDelay: "300ms" }}
          >
            No setup. No account required for your first session. Under 2 minutes.
          </p>
        </div>
      </section>

      {/* Section 2 — Video Placeholder */}
      <section className="w-full bg-background py-8 md:py-12 px-5">
        <div className="max-w-[720px] mx-auto rounded-2xl overflow-hidden shadow-lg">
          <video
            className="w-full"
            controls
            muted
            autoPlay
            playsInline
            loop
            preload="metadata"
          >
            <source src="/videos/dose-onboarding.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-center text-sm font-bold text-foreground py-3 bg-muted">
            How DOSE Academy works — 36 sec
          </p>
        </div>
      </section>

      {/* Section 3 — 3-Step Explainer */}
      <section className="w-full bg-background py-10 px-5">
        <div className="max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="scroll-reveal opacity-0 translate-y-2 transition-all duration-500 bg-accent/50 border border-border rounded-[14px] p-5 flex flex-col items-center text-center"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-extrabold mb-3">
                {step.num}
              </div>
              <h3 className="text-[15px] font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 — Two Perspectives */}
      <section className="w-full bg-accent/50 py-10 px-5">
        <div className="max-w-[960px] mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-2">Two Perspectives</p>
          <h2 className="text-xl md:text-2xl font-extrabold text-foreground mb-6">
            Built for teens. Trusted by parents and schools.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Teen card */}
            <div className="scroll-reveal opacity-0 -translate-x-4 transition-all duration-300 bg-accent rounded-[14px] p-5">
              <p className="text-[11px] uppercase tracking-wider text-accent-foreground mb-3 font-medium">
                For the Teen
              </p>
              <ul className="space-y-3">
                {teenPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            {/* Parent card */}
            <div className="scroll-reveal opacity-0 translate-x-4 transition-all duration-300 bg-card border border-border rounded-[14px] p-5">
              <p className="text-[11px] uppercase tracking-wider text-accent-foreground mb-3 font-medium">
                For Parents & Counselors
              </p>
              <ul className="space-y-3">
                {parentPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — The Four Tools */}
      <section className="w-full bg-background py-10 px-5">
        <div className="max-w-[960px] mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-2">The Four Tools</p>
          <h2 className="text-xl md:text-2xl font-extrabold text-foreground mb-6">
            One for every ADHD moment.
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {tools.map((tool, i) => (
              <div
                key={tool.name}
                className={`scroll-reveal opacity-0 scale-95 transition-all duration-300 ${tool.bg} border-[1.5px] ${tool.border} rounded-xl p-4`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="text-2xl">{tool.icon}</span>
                <h3 className="text-sm font-bold text-foreground mt-2">{tool.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{tool.tagline}</p>
                <span className="inline-block mt-3 text-[11px] bg-primary/15 text-primary font-medium rounded-full px-2.5 py-0.5">
                  {tool.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Slick Callout */}
      <section className="w-full bg-background py-10 px-5">
        <div className="scroll-reveal opacity-0 transition-all duration-500 max-w-[600px] mx-auto bg-accent/50 border border-border rounded-2xl p-7 flex flex-col sm:flex-row items-center gap-5">
          <div className="w-[72px] h-[72px] rounded-full bg-primary flex items-center justify-center shrink-0 overflow-hidden">
            <img src={slickImage} alt="Slick" className="w-full h-full object-cover" />
          </div>
          <div className="text-center sm:text-left">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">Slick says:</p>
            <p className="text-base font-bold text-foreground mb-1">
              "You don't need to feel ready. Just open the app."
            </p>
            <p className="text-xs text-muted-foreground">
              Slick is your AI companion — available in every tool, every session.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7 — CTA Banner */}
      <section className="w-full bg-accent/50 py-7 px-5">
        <div className="max-w-[960px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h2 className="text-lg font-extrabold text-foreground">Ready to try it?</h2>
            <p className="text-xs text-muted-foreground">First 3 sessions free. No credit card required.</p>
          </div>
          <Button
            className="bg-primary text-primary-foreground font-bold rounded-full px-6 py-3 hover:bg-primary/90"
            asChild
          >
            <a href="https://app-doseacademy.vercel.app/" target="_blank" rel="noopener noreferrer">
              Get Started Free
            </a>
          </Button>
        </div>
      </section>

      <Footer />

      <style>{`
        .scroll-reveal.revealed {
          opacity: 1 !important;
          transform: translate(0, 0) scale(1) !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .scroll-reveal {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HowItWorks;
