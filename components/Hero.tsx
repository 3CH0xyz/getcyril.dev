import { SITE_CONFIG, STATS } from "@/lib/constants";
import { Sparkles, BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-dark-bg text-white">
      {/* Minimal dot grid pattern (3% opacity) */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IndoaXRlIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
      </div>

      {/* Animated Gradient Orbs Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orange gradient orb (Cyril primary color) */}
        <div className="absolute w-96 h-96 bg-gradient-to-br from-cyril-orange/30 to-cyril-orange/10 rounded-full blur-3xl animate-float-slow top-20 -left-20" style={{ willChange: 'transform' }} />

        {/* Purple gradient orb (Architect agent color) */}
        <div className="absolute w-80 h-80 bg-gradient-to-br from-agent-architect/20 to-agent-architect/5 rounded-full blur-3xl animate-float-slower top-40 right-10" style={{ willChange: 'transform' }} />

        {/* Teal gradient orb (Implementer agent color) */}
        <div className="absolute w-72 h-72 bg-gradient-to-br from-agent-implementer/20 to-agent-implementer/5 rounded-full blur-3xl animate-float bottom-20 left-1/3" style={{ willChange: 'transform' }} />
      </div>

      <div className="container relative mx-auto px-6 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          {/* Version Badge - Glassmorphism with orange status dot */}
          <div className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-1.5 text-sm font-medium shadow-2xl shadow-black/50 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
            <div className="mr-2 h-2 w-2 rounded-full bg-cyril-orange animate-pulse shadow-lg shadow-cyril-orange/50"></div>
            <span className="text-dark-text-secondary">Version 2.1.0 - Production Ready</span>
          </div>

          {/* Main Headline - Semi-bold with responsive clamp */}
          <h1 className="mb-6 text-dark-text font-semibold tracking-tight drop-shadow-lg">
            {SITE_CONFIG.tagline}
          </h1>

          {/* Subheadline */}
          <p className="mb-4 text-xl font-semibold text-dark-text sm:text-2xl drop-shadow-md">
            {SITE_CONFIG.description}
          </p>

          {/* Supporting text */}
          <p className="mb-10 text-lg leading-relaxed text-dark-text-secondary sm:text-xl max-w-3xl mx-auto">
            Just tell Cyril what you want. Everything else happens automatically.
          </p>

          {/* CTA Buttons - Orange primary, bordered secondary */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-cyril-orange px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:bg-cyril-orange-light hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyril-orange"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              Get Started on GitHub
            </a>
            <a
              href={SITE_CONFIG.docs}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border-2 border-cyril-orange bg-transparent px-8 py-4 text-lg font-semibold text-cyril-orange transition-all hover:bg-cyril-orange/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyril-orange"
            >
              <BookOpen className="h-5 w-5" />
              View Documentation
            </a>
          </div>

          {/* Stats Grid */}
          <div className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="animate-fadeIn">
              <div className="text-4xl font-semibold text-dark-text">{STATS.agents}</div>
              <div className="mt-2 text-sm font-medium text-dark-text-secondary uppercase tracking-wide">
                Specialist Agents
              </div>
            </div>
            <div className="animate-fadeIn" style={{ animationDelay: "100ms" }}>
              <div className="text-4xl font-semibold text-dark-text">{STATS.workflows}</div>
              <div className="mt-2 text-sm font-medium text-dark-text-secondary uppercase tracking-wide">
                Workflows
              </div>
            </div>
            <div className="animate-fadeIn" style={{ animationDelay: "200ms" }}>
              <div className="text-4xl font-semibold text-dark-text">{STATS.crosspoints}</div>
              <div className="mt-2 text-sm font-medium text-dark-text-secondary uppercase tracking-wide">
                API Crosspoints
              </div>
            </div>
            <div className="animate-fadeIn" style={{ animationDelay: "300ms" }}>
              <div className="text-4xl font-semibold text-dark-text">{STATS.testCoverage}</div>
              <div className="mt-2 text-sm font-medium text-dark-text-secondary uppercase tracking-wide">
                Test Coverage
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom edge (not wave) */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-border to-transparent"></div>
    </section>
  );
}
