import { AGENTS } from "@/lib/constants";

export default function AgentShowcase() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            Meet the 8 Specialists
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Each agent brings deep domain expertise and 200k context to your
            development workflow. Automatic selection and coordination means you
            get the right specialist for every task.
          </p>
        </div>

        {/* Agent Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {AGENTS.map((agent, index) => (
            <div
              key={agent.id}
              className="group relative overflow-hidden rounded-md border-l-4 border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-l-4 hover:shadow-lg"
              style={{
                borderLeftColor: agent.color,
                animationDelay: `${index * 75}ms`,
              }}
            >
              {/* Agent Icon Circle */}
              <div
                className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full text-2xl text-white"
                style={{ backgroundColor: agent.color }}
              >
                {agent.icon}
              </div>

              {/* Agent Name */}
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                {agent.name}
              </h3>

              {/* Agent Role */}
              <div
                className="mb-3 text-sm font-semibold"
                style={{ color: agent.color }}
              >
                {agent.role}
              </div>

              {/* Agent Description */}
              <p className="text-sm leading-relaxed text-gray-600">
                {agent.description}
              </p>

              {/* Hover effect overlay */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-5"
                style={{ backgroundColor: agent.color }}
              ></div>
            </div>
          ))}
        </div>

        {/* Agent Formation Visual */}
        <div className="mt-16 rounded-lg border border-gray-200 bg-gray-50 p-8 text-center">
          <p className="mb-6 text-sm font-medium uppercase tracking-wide text-gray-500">
            Orchestrated Agent Formation
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {AGENTS.map((agent, index) => (
              <div key={agent.id} className="flex items-center gap-2">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full text-xl"
                  style={{ backgroundColor: agent.color }}
                  title={agent.name}
                >
                  {agent.icon}
                </div>
                {index < AGENTS.length - 1 && (
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-600">
            Sequential, parallel, or staged execution - Cyril orchestrates the
            optimal workflow for your task.
          </p>
        </div>
      </div>
    </section>
  );
}
