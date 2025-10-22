import Hero from "@/components/Hero";
import AgentShowcase from "@/components/AgentShowcase";
import FeatureGrid from "@/components/FeatureGrid";
import HowItWorks from "@/components/HowItWorks";
import CodeExample from "@/components/CodeExample";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import BackgroundOrbs from "@/components/BackgroundOrbs";

export default function Home() {
  return (
    <>
      <BackgroundOrbs />
      <div
        className="relative min-h-screen"
        style={{
          backdropFilter: 'blur(40px) saturate(150%)',
          WebkitBackdropFilter: 'blur(40px) saturate(150%)',
        }}
      >
        <main className="min-h-screen">
          <Hero />
          <AgentShowcase />
          <FeatureGrid />
          <HowItWorks />
          <CodeExample />
          <CTASection />
          <Footer />
        </main>
      </div>
    </>
  );
}
