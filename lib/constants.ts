/**
 * Constants for the Cyril marketing website.
 * Centralized content management for easy updates.
 */

export const SITE_CONFIG = {
  name: "Cyril",
  tagline: "Claude's intelligent cousin",
  description:
    "Meet Cyril - the intelligent multi-agent orchestration system that turns Claude Code into a production-ready development powerhouse. 8 specialist agents, universal crosspoints, and real implementation only.",
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
    role: "System Design",
    icon: "🏗️",
    description: "Designs scalable architectures and technical solutions",
  },
  {
    id: "researcher",
    name: "Researcher",
    role: "Discovery & Analysis",
    icon: "🔍",
    description: "Explores codebases and finds best practices",
  },
  {
    id: "implementer",
    name: "Implementer",
    role: "Code Generation",
    icon: "⚙️",
    description: "Writes production-quality code following SOLID principles",
  },
  {
    id: "tester",
    name: "Tester",
    role: "Quality Assurance",
    icon: "🧪",
    description: "Creates comprehensive tests with high coverage",
  },
  {
    id: "reviewer",
    name: "Reviewer",
    role: "Code Quality",
    icon: "👁️",
    description: "Audits code for security, performance, and best practices",
  },
  {
    id: "debugger",
    name: "Debugger",
    role: "Bug Diagnosis",
    icon: "🐛",
    description: "Analyzes errors and implements minimal fixes",
  },
  {
    id: "deployer",
    name: "Deployer",
    role: "Release Management",
    icon: "🚀",
    description: "Handles deployments with health checks and rollbacks",
  },
  {
    id: "documenter",
    name: "Documenter",
    role: "Documentation",
    icon: "📝",
    description: "Generates API docs and technical documentation",
  },
];

export const FEATURES = [
  {
    id: "agents",
    title: "8 Specialist Agents",
    description:
      "From architecture to deployment, each agent brings deep domain expertise to your development workflow.",
    icon: "🤖",
  },
  {
    id: "crosspoints",
    title: "Universal Crosspoints",
    description:
      "Seamlessly integrate with Stripe, Vercel, SendGrid, Auth0, and more through a unified abstraction layer.",
    icon: "🔌",
  },
  {
    id: "workflows",
    title: "Intelligent Workflows",
    description:
      "Try-first protocol with smart escalation. Simple tasks complete in minutes, complex tasks get full orchestration.",
    icon: "⚡",
  },
  {
    id: "real-implementation",
    title: "Real Implementation Only",
    description:
      "No placeholders, no TODOs, no fake data. Every line of code is production-ready and fully functional.",
    icon: "✨",
  },
];

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Install Cyril",
    description: "Clone the repository and set up your environment with credentials",
    command: "git clone https://github.com/3CH0xyz/Cyril-Dev.git",
  },
  {
    step: 2,
    title: "Configure Agents",
    description: "Add API keys to .env.local and let crosspoints auto-detect integrations",
    command: "cp .env.example .env.local",
  },
  {
    step: 3,
    title: "Build Faster",
    description: "Use slash commands or natural language to orchestrate multi-agent workflows",
    command: '/cyril-feature "Add payment processing"',
  },
];

export const CODE_EXAMPLE = `import asyncio
from cyril.crosspoints.adapters.stripe_adapter import StripeAdapter

async def main():
    # Real Stripe integration - no mocks
    adapter = StripeAdapter()

    # Create payment intent
    payment = await adapter.create_payment_intent(
        amount=1999,
        currency="usd",
        customer_id="cus_abc123"
    )

    print(f"✅ Payment created: {payment['id']}")
    print(f"💰 Amount: $" + f"{payment['amount'] / 100:.2f}")

asyncio.run(main())`;

export const STATS = {
  agents: 8,
  workflows: 6,
  crosspoints: "12+",
  testCoverage: "87%",
};
