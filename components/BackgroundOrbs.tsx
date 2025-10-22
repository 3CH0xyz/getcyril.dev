export default function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Large orange orb - top left */}
      <div
        className="absolute w-[600px] h-[600px] bg-gradient-radial from-cyril-orange/40 via-cyril-orange/20 to-transparent rounded-full blur-3xl animate-float-slow"
        style={{ top: '-200px', left: '-200px', willChange: 'transform' }}
      />

      {/* Purple orb - top right (Architect) */}
      <div
        className="absolute w-[500px] h-[500px] bg-gradient-radial from-agent-architect/30 via-agent-architect/15 to-transparent rounded-full blur-3xl animate-float-slower"
        style={{ top: '100px', right: '-150px', willChange: 'transform' }}
      />

      {/* Teal orb - center left (Implementer) */}
      <div
        className="absolute w-[700px] h-[700px] bg-gradient-radial from-agent-implementer/35 via-agent-implementer/18 to-transparent rounded-full blur-3xl animate-float"
        style={{ top: '40%', left: '-250px', willChange: 'transform' }}
      />

      {/* Amber orb - center right (Researcher) */}
      <div
        className="absolute w-[550px] h-[550px] bg-gradient-radial from-agent-researcher/30 via-agent-researcher/15 to-transparent rounded-full blur-3xl animate-float-slow"
        style={{ top: '50%', right: '-200px', willChange: 'transform', animationDelay: '5s' }}
      />

      {/* Emerald orb - bottom left (Deployer) */}
      <div
        className="absolute w-[650px] h-[650px] bg-gradient-radial from-agent-deployer/35 via-agent-deployer/18 to-transparent rounded-full blur-3xl animate-float-slower"
        style={{ bottom: '10%', left: '15%', willChange: 'transform', animationDelay: '8s' }}
      />

      {/* Indigo orb - bottom right (Documenter) */}
      <div
        className="absolute w-[600px] h-[600px] bg-gradient-radial from-agent-documenter/30 via-agent-documenter/15 to-transparent rounded-full blur-3xl animate-float"
        style={{ bottom: '-100px', right: '10%', willChange: 'transform', animationDelay: '3s' }}
      />

      {/* Sky blue orb - middle (Reviewer) */}
      <div
        className="absolute w-[500px] h-[500px] bg-gradient-radial from-agent-reviewer/25 via-agent-reviewer/12 to-transparent rounded-full blur-3xl animate-float-slow"
        style={{ top: '60%', left: '50%', transform: 'translateX(-50%)', willChange: 'transform', animationDelay: '10s' }}
      />

      {/* Lime orb - upper center (Tester) */}
      <div
        className="absolute w-[550px] h-[550px] bg-gradient-radial from-agent-tester/28 via-agent-tester/14 to-transparent rounded-full blur-3xl animate-drift"
        style={{ top: '25%', left: '60%', willChange: 'transform', animationDelay: '6s' }}
      />
    </div>
  );
}
