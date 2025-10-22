import { SITE_CONFIG } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-dark-bg py-24 text-white">
      {/* Minimal dot grid pattern (3% opacity) */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IndoaXRlIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
      </div>

      {/* Animated Gradient Orbs Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orange gradient orb */}
        <div className="absolute w-96 h-96 bg-gradient-to-br from-cyril-orange/30 to-cyril-orange/10 rounded-full blur-3xl animate-float top-10 right-10" style={{ willChange: 'transform' }} />

        {/* Emerald gradient orb (Deployer color) */}
        <div className="absolute w-80 h-80 bg-gradient-to-br from-agent-deployer/20 to-agent-deployer/5 rounded-full blur-3xl animate-float-slower bottom-10 left-10" style={{ willChange: 'transform' }} />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-3xl">
          {/* Glass CTA Card */}
          <div
            className="rounded-2xl border border-white/10 bg-white/5 p-12 shadow-2xl shadow-black/50 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center relative overflow-hidden"
            style={{ backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
          >
            {/* Inner gradient orb for extra depth */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyril-orange/20 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Content - relative to stay above gradient */}
            <div className="relative">
              {/* Headline */}
              <h2 className="mb-6 text-dark-text font-semibold">
                Ready to Level Up Your Development?
              </h2>

              {/* Description */}
              <p className="mb-10 text-xl leading-relaxed text-dark-text-secondary">
                Join developers who are building production applications faster with
                Cyril's intelligent multi-agent orchestration system.
              </p>

              {/* CTA Button - Orange */}
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
              </div>

              {/* Bottom Text */}
              <p className="mt-8 text-sm font-medium text-dark-text-secondary">
                Open Source • MIT License • Production Ready
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
