"use client"

export function AnimatedGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -inset-[10px] opacity-30">
        <div
          className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-primary/40 to-primary/20 rounded-full blur-3xl"
          style={{ animation: "pulse 8s infinite" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-primary/30 to-primary/10 rounded-full blur-3xl"
          style={{ animation: "pulse 10s infinite reverse" }}
        />
      </div>
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1) translate(0px, 0px);
          }
          33% {
            transform: scale(1.1) translate(40px, 40px);
          }
          66% {
            transform: scale(0.9) translate(-40px, 40px);
          }
          100% {
            transform: scale(1) translate(0px, 0px);
          }
        }
      `}</style>
    </div>
  )
}
