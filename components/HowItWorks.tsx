import { HOW_IT_WORKS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section className="bg-gray-950 py-20 text-white">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            Get Started in <span className="text-primary-500">3 Steps</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            From zero to production in minutes. Cyril is designed for rapid
            deployment with minimal configuration.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-primary-500 to-purple-500 md:left-1/2"></div>

          {/* Steps */}
          <div className="space-y-12">
            {HOW_IT_WORKS.map((item, index) => (
              <div
                key={item.step}
                className={`relative flex flex-col items-start md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step number circle */}
                <div className="absolute left-8 z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-gray-950 bg-gradient-to-br from-primary-500 to-purple-500 text-2xl font-bold md:left-1/2 md:-ml-8">
                  {item.step}
                </div>

                {/* Content */}
                <div
                  className={`ml-24 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                  }`}
                >
                  <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
                    <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>
                    <p className="mb-4 leading-relaxed text-gray-400">
                      {item.description}
                    </p>
                    <div className="rounded-lg bg-gray-950 p-4 font-mono text-sm text-primary-400">
                      <code>{item.command}</code>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
