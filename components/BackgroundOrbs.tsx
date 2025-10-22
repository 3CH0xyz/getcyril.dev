export default function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Subtle orange-tinted orb - top left */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full blur-2xl animate-float-slow"
        style={{
          top: '-300px',
          left: '-300px',
          background: 'radial-gradient(circle, rgba(85, 70, 65, 0.45) 0%, rgba(65, 60, 58, 0.22) 40%, transparent 70%)',
          willChange: 'transform'
        }}
      />

      {/* Subtle purple-tinted orb - top right */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full blur-2xl animate-float-slower"
        style={{
          top: '0px',
          right: '-250px',
          background: 'radial-gradient(circle, rgba(70, 65, 85, 0.4) 0%, rgba(60, 58, 72, 0.2) 40%, transparent 70%)',
          willChange: 'transform'
        }}
      />

      {/* Subtle teal-tinted orb - center left */}
      <div
        className="absolute w-[900px] h-[900px] rounded-full blur-2xl animate-float"
        style={{
          top: '35%',
          left: '-350px',
          background: 'radial-gradient(circle, rgba(50, 75, 75, 0.45) 0%, rgba(48, 65, 65, 0.22) 40%, transparent 70%)',
          willChange: 'transform'
        }}
      />

      {/* Subtle amber-tinted orb - center right */}
      <div
        className="absolute w-[750px] h-[750px] rounded-full blur-2xl animate-float-slow"
        style={{
          top: '45%',
          right: '-280px',
          background: 'radial-gradient(circle, rgba(80, 72, 60, 0.4) 0%, rgba(70, 65, 58, 0.2) 40%, transparent 70%)',
          animationDelay: '3s',
          willChange: 'transform'
        }}
      />

      {/* Subtle emerald-tinted orb - bottom left */}
      <div
        className="absolute w-[850px] h-[850px] rounded-full blur-2xl animate-float-slower"
        style={{
          bottom: '5%',
          left: '10%',
          background: 'radial-gradient(circle, rgba(52, 75, 70, 0.45) 0%, rgba(50, 68, 65, 0.22) 40%, transparent 70%)',
          animationDelay: '5s',
          willChange: 'transform'
        }}
      />

      {/* Subtle indigo-tinted orb - bottom right */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full blur-2xl animate-float"
        style={{
          bottom: '-200px',
          right: '5%',
          background: 'radial-gradient(circle, rgba(65, 68, 85, 0.4) 0%, rgba(58, 62, 75, 0.2) 40%, transparent 70%)',
          animationDelay: '2s',
          willChange: 'transform'
        }}
      />

      {/* Subtle blue-tinted orb - middle */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full blur-2xl animate-float-slow"
        style={{
          top: '55%',
          left: '45%',
          background: 'radial-gradient(circle, rgba(55, 70, 80, 0.35) 0%, rgba(52, 65, 72, 0.18) 40%, transparent 70%)',
          animationDelay: '7s',
          willChange: 'transform'
        }}
      />

      {/* Subtle lime-tinted orb - upper center */}
      <div
        className="absolute w-[750px] h-[750px] rounded-full blur-2xl animate-drift"
        style={{
          top: '20%',
          left: '55%',
          background: 'radial-gradient(circle, rgba(65, 75, 60, 0.4) 0%, rgba(60, 68, 58, 0.2) 40%, transparent 70%)',
          animationDelay: '4s',
          willChange: 'transform'
        }}
      />

      {/* Large subtle warm orb - bottom center for depth */}
      <div
        className="absolute w-[950px] h-[950px] rounded-full blur-3xl animate-float-slower"
        style={{
          bottom: '-400px',
          left: '30%',
          background: 'radial-gradient(circle, rgba(75, 68, 65, 0.3) 0%, rgba(65, 62, 60, 0.15) 40%, transparent 70%)',
          animationDelay: '8s',
          willChange: 'transform'
        }}
      />
    </div>
  );
}
