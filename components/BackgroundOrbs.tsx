export default function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Large orange orb - top left */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full blur-2xl animate-float-slow"
        style={{
          top: '-300px',
          left: '-300px',
          background: 'radial-gradient(circle, rgba(217, 119, 87, 0.7) 0%, rgba(217, 119, 87, 0.4) 40%, transparent 70%)',
          willChange: 'transform'
        }}
      />

      {/* Purple orb - top right (Architect) */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full blur-2xl animate-float-slower"
        style={{
          top: '0px',
          right: '-250px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.65) 0%, rgba(139, 92, 246, 0.35) 40%, transparent 70%)',
          willChange: 'transform'
        }}
      />

      {/* Teal orb - center left (Implementer) */}
      <div
        className="absolute w-[900px] h-[900px] rounded-full blur-2xl animate-float"
        style={{
          top: '35%',
          left: '-350px',
          background: 'radial-gradient(circle, rgba(20, 184, 166, 0.7) 0%, rgba(20, 184, 166, 0.4) 40%, transparent 70%)',
          willChange: 'transform'
        }}
      />

      {/* Amber orb - center right (Researcher) */}
      <div
        className="absolute w-[750px] h-[750px] rounded-full blur-2xl animate-float-slow"
        style={{
          top: '45%',
          right: '-280px',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.65) 0%, rgba(245, 158, 11, 0.35) 40%, transparent 70%)',
          animationDelay: '5s',
          willChange: 'transform'
        }}
      />

      {/* Emerald orb - bottom left (Deployer) */}
      <div
        className="absolute w-[850px] h-[850px] rounded-full blur-2xl animate-float-slower"
        style={{
          bottom: '5%',
          left: '10%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.7) 0%, rgba(16, 185, 129, 0.4) 40%, transparent 70%)',
          animationDelay: '8s',
          willChange: 'transform'
        }}
      />

      {/* Indigo orb - bottom right (Documenter) */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full blur-2xl animate-float"
        style={{
          bottom: '-200px',
          right: '5%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.65) 0%, rgba(99, 102, 241, 0.35) 40%, transparent 70%)',
          animationDelay: '3s',
          willChange: 'transform'
        }}
      />

      {/* Sky blue orb - middle (Reviewer) */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full blur-2xl animate-float-slow"
        style={{
          top: '55%',
          left: '45%',
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.6) 0%, rgba(14, 165, 233, 0.3) 40%, transparent 70%)',
          animationDelay: '10s',
          willChange: 'transform'
        }}
      />

      {/* Lime orb - upper center (Tester) */}
      <div
        className="absolute w-[750px] h-[750px] rounded-full blur-2xl animate-drift"
        style={{
          top: '20%',
          left: '55%',
          background: 'radial-gradient(circle, rgba(132, 204, 22, 0.65) 0%, rgba(132, 204, 22, 0.35) 40%, transparent 70%)',
          animationDelay: '6s',
          willChange: 'transform'
        }}
      />

      {/* Additional large orange orb - bottom center for more depth */}
      <div
        className="absolute w-[950px] h-[950px] rounded-full blur-3xl animate-float-slower"
        style={{
          bottom: '-400px',
          left: '30%',
          background: 'radial-gradient(circle, rgba(217, 119, 87, 0.5) 0%, rgba(217, 119, 87, 0.25) 40%, transparent 70%)',
          animationDelay: '12s',
          willChange: 'transform'
        }}
      />
    </div>
  );
}
