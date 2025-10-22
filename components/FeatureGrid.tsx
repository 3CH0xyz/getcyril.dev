import { FEATURES } from "@/lib/constants";

export default function FeatureGrid() {
  return (
    <section className="bg-gray-900 py-20 text-white">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            Why <span className="text-primary-500">Cyril</span>?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Built from the ground up for production environments. No shortcuts,
            no placeholders—just real, battle-tested implementations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 p-8 transition-all hover:border-primary-500"
            >
              {/* Glow effect */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary-500/20 blur-3xl transition-all group-hover:scale-150"></div>

              <div className="relative">
                {/* Icon */}
                <div className="mb-4 text-5xl">{feature.icon}</div>

                {/* Title */}
                <h3 className="mb-3 text-2xl font-bold">{feature.title}</h3>

                {/* Description */}
                <p className="leading-relaxed text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
