export default function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Large gunmetal orb - top left */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full blur-2xl animate-float-slow"
        style={{
          top: '-300px',
          left: '-300px',
          background: 'radial-gradient(circle, rgba(45, 55, 65, 0.4) 0%, rgba(45, 55, 65, 0.2) 40%, transparent 70%)',
          willChange: 'transform'
        }}
      />

      {/* Medium gray orb - top right */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full blur-2xl animate-float-slower"
        style={{
          top: '0px',
          right: '-250px',
          background: 'radial-gradient(circle, rgba(55, 65, 75, 0.35) 0%, rgba(55, 65, 75, 0.18) 40%, transparent 70%)',
          willChange: 'transform'
        }}
      />

      {/* Dark gunmetal orb - center left */}
      <div
        className="absolute w-[900px] h-[900px] rounded-full blur-2xl animate-float"
        style={{
          top: '35%',
          left: '-350px',
          background: 'radial-gradient(circle, rgba(50, 60, 70, 0.4) 0%, rgba(50, 60, 70, 0.2) 40%, transparent 70%)',
          willChange: 'transform'
        }}
      />

      {/* Cool gray orb - center right */}
      <div
        className="absolute w-[750px] h-[750px] rounded-full blur-2xl animate-float-slow"
        style={{
          top: '45%',
          right: '-280px',
          background: 'radial-gradient(circle, rgba(60, 70, 80, 0.35) 0%, rgba(60, 70, 80, 0.18) 40%, transparent 70%)',
          animationDelay: '5s',
          willChange: 'transform'
        }}
      />

      {/* Medium gunmetal orb - bottom left */}
      <div
        className="absolute w-[850px] h-[850px] rounded-full blur-2xl animate-float-slower"
        style={{
          bottom: '5%',
          left: '10%',
          background: 'radial-gradient(circle, rgba(48, 58, 68, 0.4) 0%, rgba(48, 58, 68, 0.2) 40%, transparent 70%)',
          animationDelay: '8s',
          willChange: 'transform'
        }}
      />

      {/* Warm gray orb - bottom right */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full blur-2xl animate-float"
        style={{
          bottom: '-200px',
          right: '5%',
          background: 'radial-gradient(circle, rgba(55, 60, 65, 0.35) 0%, rgba(55, 60, 65, 0.18) 40%, transparent 70%)',
          animationDelay: '3s',
          willChange: 'transform'
        }}
      />

      {/* Light gunmetal orb - middle */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full blur-2xl animate-float-slow"
        style={{
          top: '55%',
          left: '45%',
          background: 'radial-gradient(circle, rgba(52, 62, 72, 0.3) 0%, rgba(52, 62, 72, 0.15) 40%, transparent 70%)',
          animationDelay: '10s',
          willChange: 'transform'
        }}
      />

      {/* Dark cool gray orb - upper center */}
      <div
        className="absolute w-[750px] h-[750px] rounded-full blur-2xl animate-drift"
        style={{
          top: '20%',
          left: '55%',
          background: 'radial-gradient(circle, rgba(47, 57, 67, 0.35) 0%, rgba(47, 57, 67, 0.18) 40%, transparent 70%)',
          animationDelay: '6s',
          willChange: 'transform'
        }}
      />

      {/* Large subtle gray orb - bottom center for depth */}
      <div
        className="absolute w-[950px] h-[950px] rounded-full blur-3xl animate-float-slower"
        style={{
          bottom: '-400px',
          left: '30%',
          background: 'radial-gradient(circle, rgba(50, 58, 66, 0.25) 0%, rgba(50, 58, 66, 0.12) 40%, transparent 70%)',
          animationDelay: '12s',
          willChange: 'transform'
        }}
      />
    </div>
  );
}
