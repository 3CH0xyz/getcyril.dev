import Hero from "@/components/Hero";
import AgentShowcase from "@/components/AgentShowcase";
import FeatureGrid from "@/components/FeatureGrid";
import HowItWorks from "@/components/HowItWorks";
import CodeExample from "@/components/CodeExample";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AgentShowcase />
      <FeatureGrid />
      <HowItWorks />
      <CodeExample />
      <CTASection />
      <Footer />
    </main>
  );
}
