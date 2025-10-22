/**
 * Cyril Website Constants
 * Design System: CYRIL_DESIGN_BIBLE.md v1.0.0
 * Updated: 2025-10-22
 */

export const SITE_CONFIG = {
  name: "Cyril",
  tagline: "Claude's Intelligent Cousin",
  description:
    "Multi-agent orchestration for developers who demand more. Transform Claude Code into a coordinated team of 8 specialized agents working in perfect harmony.",
  url: "https://getcyril.dev",
  github: "https://github.com/3CH0xyz/Cyril-Dev",
  docs: "https://github.com/3CH0xyz/Cyril-Dev#readme",
  company: "3CH0",
  companyUrl: "https://3ch0.dev",
};

export const AGENTS = [
  {
    id: "architect",
    name: "Architect",
    role: "System design and architecture planning",
    icon: "building-2", // Lucide icon name
    color: "#8B5CF6", // Purple
    description: "Designs scalable system architectures, database schemas, API structures, and deployment strategies.",
  },
  {
    id: "researcher",
    name: "Researcher",
    role: "Deep codebase exploration and discovery",
    icon: "search", // Lucide icon name
    color: "#F59E0B", // Amber
    description: "Explores codebases, discovers patterns, and researches best practices across the web.",
  },
  {
    id: "implementer",
    name: "Implementer",
    role: "Production-ready code generation",
    icon: "code-2", // Lucide icon name
    color: "#14B8A6", // Teal
    description: "Generates clean, maintainable code following SOLID principles and industry best practices.",
  },
  {
    id: "reviewer",
    name: "Reviewer",
    role: "Code quality and security auditing",
    icon: "shield-check", // Lucide icon name
    color: "#0EA5E9", // Sky Blue
    description: "Audits code for security vulnerabilities, performance issues, and adherence to best practices.",
  },
  {
    id: "tester",
    name: "Tester",
    role: "Comprehensive test creation and execution",
    icon: "flask-conical", // Lucide icon name
    color: "#84CC16", // Lime
    description: "Creates comprehensive test suites with high coverage, including unit and integration tests.",
  },
  {
    id: "debugger",
    name: "Debugger",
    role: "Root cause analysis and bug fixes",
    icon: "bug", // Lucide icon name
    color: "#FB923C", // Orange
    description: "Diagnoses errors systematically, identifies root causes, and implements minimal, targeted fixes.",
  },
  {
    id: "deployer",
    name: "Deployer",
    role: "Automated deployment orchestration",
    icon: "rocket", // Lucide icon name
    color: "#10B981", // Emerald
    description: "Handles deployments with health checks, monitoring, and automatic rollback capabilities.",
  },
  {
    id: "documenter",
    name: "Documenter",
    role: "API docs and technical writing",
    icon: "file-text", // Lucide icon name
    color: "#6366F1", // Indigo
    description: "Generates API documentation, README files, and technical explanations from code.",
  },
];

export const FEATURES = [
  {
    id: "agents",
    title: "8 Specialist Agents",
    description:
      "Each agent brings deep domain expertise and 200k context to your development workflow. Automatic selection and coordination means you get the right specialist for every task.",
    icon: "users", // Lucide icon name
  },
  {
    id: "crosspoints",
    title: "Universal Crosspoints",
    description:
      "Seamlessly integrate with Stripe, Vercel, SendGrid, Auth0, and more through a unified abstraction layer that handles authentication, retries, and error handling.",
    icon: "plug-zap", // Lucide icon name
  },
  {
    id: "workflows",
    title: "Intelligent Workflows",
    description:
      "Try-first protocol with smart escalation. Simple tasks complete in 5-10 minutes, complex tasks get full orchestration. Learn from every execution.",
    icon: "zap", // Lucide icon name
  },
  {
    id: "real-implementation",
    title: "Real Implementation Only",
    description:
      "No placeholders, no TODOs, no fake data. Every line of code is production-ready and fully functional. Security-first with comprehensive validation.",
    icon: "sparkles", // Lucide icon name
  },
];

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Install Cyril",
    description: "Clone the repository and set up your environment in minutes",
    icon: "package", // Lucide icon name
  },
  {
    step: 2,
    title: "Configure Crosspoints",
    description: "Add API keys to your environment - crosspoints auto-detect integrations",
    icon: "key", // Lucide icon name
  },
  {
    step: 3,
    title: "Build Faster",
    description: "Use slash commands or natural language to orchestrate multi-agent workflows",
    icon: "rocket", // Lucide icon name
  },
];

export const CODE_EXAMPLE = `from cyril.crosspoints.adapters.stripe_adapter import StripeAdapter
import asyncio

async def main():
    # Real Stripe integration - no mocks, no placeholders
    adapter = StripeAdapter()

    # Create payment intent with full validation
    payment = await adapter.create_payment_intent(
        amount=1999,
        currency="usd",
        customer_id="cus_abc123"
    )

    print(f"✅ Payment created: " + payment['id'])
    print(f"💰 Amount: $" + str(payment['amount'] / 100))

asyncio.run(main())`;

export const STATS = {
  agents: 8,
  workflows: 7,
  crosspoints: "12+",
  testCoverage: "87%",
};
