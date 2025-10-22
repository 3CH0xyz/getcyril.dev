import { FEATURES } from "@/lib/constants";

export default function FeatureGrid() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            Why Cyril?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Built from the ground up for production environments. No shortcuts,
            no placeholders—just real, battle-tested implementations.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.id}
              className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-cyril-teal/10 text-3xl">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="leading-relaxed text-gray-600">
                {feature.description}
              </p>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-cyril-teal transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-lg text-gray-600">
            Real implementation, real integrations, real production-ready code.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full bg-success/10 px-4 py-2 text-sm font-semibold text-success">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Zero Placeholders • Zero TODOs • 100% Production Ready
          </div>
        </div>
      </div>
    </section>
  );
}
