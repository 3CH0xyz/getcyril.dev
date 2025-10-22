import { HOW_IT_WORKS } from "@/lib/constants";
import * as LucideIcons from "lucide-react";

// Icon name mapper
const getIcon = (iconName: string) => {
  const iconMap: Record<string, React.ComponentType<LucideIcons.LucideProps>> = {
    "package": LucideIcons.Package,
    "key": LucideIcons.Key,
    "rocket": LucideIcons.Rocket,
  };
  return iconMap[iconName] || LucideIcons.Circle;
};

export default function HowItWorks() {
  return (
    <section className="bg-dark-bg py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-dark-text font-semibold">
            Get Started in 3 Steps
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-dark-text-secondary">
            From zero to production in minutes. Cyril is designed for rapid
            deployment with minimal configuration.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mx-auto max-w-4xl">
          {/* Connection Lines - Orange gradient */}
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyril-orange via-cyril-orange to-cyril-orange/30 lg:block"></div>

          <div className="space-y-12 lg:space-y-16">
            {HOW_IT_WORKS.map((item, index) => (
              <div
                key={item.step}
                className={`relative flex flex-col items-center gap-8 lg:flex-row ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Step Circle - Orange background */}
                <div className="z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-4 border-dark-bg bg-cyril-orange text-white shadow-lg lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                  {(() => {
                    const IconComponent = getIcon(item.icon);
                    return <IconComponent size={32} strokeWidth={2} />;
                  })()}
                </div>

                {/* Content Card - Dark surface */}
                <div
                  className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"
                  }`}
                >
                  <div className="rounded-lg border border-dark-border bg-dark-surface p-8 shadow-sm transition-shadow hover:shadow-md hover:border-cyril-orange/50">
                    <div className="mb-2 text-sm font-semibold text-cyril-orange">
                      Step {item.step}
                    </div>
                    <h3 className="mb-3 text-2xl font-semibold text-dark-text">
                      {item.title}
                    </h3>
                    <p className="leading-relaxed text-dark-text-secondary">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <p className="text-sm text-dark-text-secondary">
            Ready in minutes • No complex configuration • Works out of the box
          </p>
        </div>
      </div>
    </section>
  );
}
