"use client";

import { AGENTS } from "@/lib/constants";
import * as LucideIcons from "lucide-react";

// Icon name mapper to get the correct Lucide component
const getIcon = (iconName: string) => {
  const iconMap: Record<string, React.ComponentType<LucideIcons.LucideProps>> = {
    "building-2": LucideIcons.Building2,
    "search": LucideIcons.Search,
    "code-2": LucideIcons.Code2,
    "shield-check": LucideIcons.ShieldCheck,
    "flask-conical": LucideIcons.FlaskConical,
    "bug": LucideIcons.Bug,
    "rocket": LucideIcons.Rocket,
    "file-text": LucideIcons.FileText,
  };
  return iconMap[iconName] || LucideIcons.Circle;
};

export default function AgentShowcase() {
  return (
    <section className="bg-dark-bg py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-dark-text font-semibold">
            Meet the 8 Specialists
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-dark-text-secondary">
            Each agent brings deep domain expertise and 200k context to your
            development workflow. Automatic selection and coordination means you
            get the right specialist for every task.
          </p>
        </div>

        {/* Agent Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {AGENTS.map((agent, index) => (
            <div
              key={agent.id}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/50 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
              style={{
                animationDelay: `${index * 75}ms`,
                ['--agent-color' as string]: agent.color,
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = agent.color;
                e.currentTarget.style.boxShadow = `0 25px 50px -12px ${agent.color}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              {/* Gradient accent line */}
              <div
                className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b to-transparent"
                style={{ backgroundColor: agent.color }}
              />

              {/* Agent Icon Circle - Glass effect with agent color */}
              <div
                className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full text-white border"
                style={{
                  backgroundColor: `${agent.color}20`,
                  borderColor: `${agent.color}40`,
                  backdropFilter: 'blur(4px)',
                  WebkitBackdropFilter: 'blur(4px)',
                }}
              >
                <div style={{ color: agent.color }}>
                  {(() => {
                    const IconComponent = getIcon(agent.icon);
                    return <IconComponent size={28} strokeWidth={2} />;
                  })()}
                </div>
              </div>

              {/* Agent Name */}
              <h3 className="mb-2 text-xl font-semibold text-dark-text">
                {agent.name}
              </h3>

              {/* Agent Role - Agent color */}
              <div
                className="mb-3 text-sm font-semibold"
                style={{ color: agent.color }}
              >
                {agent.role}
              </div>

              {/* Agent Description */}
              <p className="text-sm leading-relaxed text-dark-text-secondary">
                {agent.description}
              </p>

              {/* Hover accent line - Agent color expands from left */}
              <div
                className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: agent.color }}
              ></div>
            </div>
          ))}
        </div>

        {/* Agent Formation Visual - Glassmorphism */}
        <div
          className="mt-16 rounded-xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl shadow-black/50 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          style={{ backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
        >
          <p className="mb-6 text-sm font-medium uppercase tracking-wide text-dark-text-secondary">
            Orchestrated Agent Formation
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {AGENTS.map((agent, index) => (
              <div key={agent.id} className="flex items-center gap-2">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ backgroundColor: agent.color }}
                  title={agent.name}
                >
                  {(() => {
                    const IconComponent = getIcon(agent.icon);
                    return <IconComponent size={20} strokeWidth={2} className="text-white" />;
                  })()}
                </div>
                {index < AGENTS.length - 1 && (
                  <LucideIcons.ChevronRight className="h-4 w-4 text-dark-border" />
                )}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-dark-text-secondary">
            Sequential, parallel, or staged execution - Cyril orchestrates the
            optimal workflow for your task.
          </p>
        </div>
      </div>
    </section>
  );
}
