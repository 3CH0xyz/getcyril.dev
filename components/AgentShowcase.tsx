import { AGENTS } from "@/lib/constants";

export default function AgentShowcase() {
  return (
    <section className="bg-gray-950 py-20 text-white">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            Meet the <span className="text-primary-500">8 Specialists</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Each agent brings deep domain expertise to your development
            workflow. From architecture to deployment, they work together
            seamlessly.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {AGENTS.map((agent) => (
            <div
              key={agent.id}
              className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900 p-6 transition-all hover:border-primary-500 hover:shadow-lg hover:shadow-primary-500/20"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-purple-500/10 opacity-0 transition-opacity group-hover:opacity-100"></div>

              <div className="relative">
                {/* Icon */}
                <div className="mb-4 text-5xl">{agent.icon}</div>

                {/* Name */}
                <h3 className="mb-2 text-xl font-bold">{agent.name}</h3>

                {/* Role */}
                <div className="mb-3 text-sm font-medium text-primary-400">
                  {agent.role}
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-400">
                  {agent.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
