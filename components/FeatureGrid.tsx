import { FEATURES } from "@/lib/constants";
import * as LucideIcons from "lucide-react";

// Icon name mapper
const getIcon = (iconName: string) => {
  const iconMap: Record<string, React.ComponentType<LucideIcons.LucideProps>> = {
    "users": LucideIcons.Users,
    "plug-zap": LucideIcons.PlugZap,
    "zap": LucideIcons.Zap,
    "sparkles": LucideIcons.Sparkles,
  };
  return iconMap[iconName] || LucideIcons.Circle;
};

export default function FeatureGrid() {
  return (
    <section className="bg-dark-surface py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-dark-text font-semibold">
            Why Cyril?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-dark-text-secondary">
            Built from the ground up for production environments. No shortcuts,
            no placeholders—just real, battle-tested implementations.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.id}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/50 transition-all duration-300 hover:bg-white/10 hover:border-cyril-orange/30"
              style={{
                animationDelay: `${index * 100}ms`,
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
              }}
            >
              {/* Icon - Glass background with orange accent */}
              <div
                className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-cyril-orange/10 border border-cyril-orange/20 text-cyril-orange"
                style={{ backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}
              >
                {(() => {
                  const IconComponent = getIcon(feature.icon);
                  return <IconComponent size={32} strokeWidth={2} />;
                })()}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-2xl font-semibold text-dark-text">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="leading-relaxed text-dark-text-secondary">
                {feature.description}
              </p>

              {/* Hover accent - Orange underline */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-cyril-orange transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-lg text-dark-text-secondary">
            Real implementation, real integrations, real production-ready code.
          </p>
          <div
            className="inline-flex items-center gap-2 rounded-full bg-success/10 border border-success/20 px-4 py-2 text-sm font-semibold text-success shadow-lg shadow-success/10 hover:bg-success/20 hover:border-success/30 transition-all duration-300"
            style={{ backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
          >
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
