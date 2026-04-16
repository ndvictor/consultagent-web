export default function Home() {
  const agents = [
    { name: "Marketing", className: "top-8 left-1/2 -translate-x-1/2" },
    { name: "Competitor", className: "top-32 left-8" },
    { name: "Revenue Intelligence", className: "top-32 right-8" },
    { name: "Sector", className: "bottom-16 left-24" },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.22),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.18),_transparent_25%),linear-gradient(to_bottom,_#0a0f24,_#050816)]" />
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#ffffff_0.6px,transparent_0.6px)] [background-size:28px_28px]" />

      <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 inline-flex rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-4 py-1 text-sm text-fuchsia-200">
            UC Berkeley MIDS Capstone
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              ConsultAgent
            </span>
          </h1>

          <p className="mt-4 text-xl font-medium text-slate-200 sm:text-2xl">
            AI advisor for local business growth
          </p>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            Multi-agent intelligence for strategy, competition, revenue, and market
            trends designed to help small businesses make better decisions faster.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/demo"
              className="rounded-xl bg-gradient-to-r from-fuchsia-600 to-violet-600 px-6 py-3 font-medium text-white shadow-lg shadow-fuchsia-900/30 transition hover:scale-[1.02]"
            >
              Try Demo
            </a>
            <a
              href="/about"
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              View Architecture
            </a>
          </div>
        </div>

        <div className="relative mx-auto mt-16 h-[560px] max-w-6xl">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1200 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="lineGlow" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#c084fc" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              d="M600 280 L600 90"
              stroke="url(#lineGlow)"
              strokeWidth="2.5"
              strokeDasharray="8 8"
              filter="url(#glow)"
              opacity="0.9"
            />
            <path
              d="M600 280 C520 260, 420 220, 280 170"
              stroke="url(#lineGlow)"
              strokeWidth="2.5"
              strokeDasharray="8 8"
              filter="url(#glow)"
              opacity="0.85"
            />
            <path
              d="M600 280 C680 260, 780 220, 920 170"
              stroke="url(#lineGlow)"
              strokeWidth="2.5"
              strokeDasharray="8 8"
              filter="url(#glow)"
              opacity="0.85"
            />
            <path
              d="M600 280 C520 320, 430 360, 340 430"
              stroke="url(#lineGlow)"
              strokeWidth="2.5"
              strokeDasharray="8 8"
              filter="url(#glow)"
              opacity="0.8"
            />
          </svg>

          {agents.map((agent) => (
            <div
              key={agent.name}
              className={`absolute ${agent.className} w-52 rounded-2xl border border-fuchsia-400/20 bg-white/5 px-5 py-4 text-center shadow-[0_0_35px_rgba(192,132,252,0.18)] backdrop-blur-md`}
            >
              <div className="mx-auto mb-3 h-3 w-3 rounded-full bg-fuchsia-400 shadow-[0_0_18px_rgba(232,121,249,1)]" />
              <p className="text-sm font-semibold text-white sm:text-base">
                {agent.name} Agent
              </p>
            </div>
          ))}

          <div className="absolute left-1/2 top-1/2 w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-fuchsia-400/30 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10 p-8 text-center shadow-[0_0_60px_rgba(192,132,252,0.28)] backdrop-blur-xl">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-fuchsia-300/40 bg-fuchsia-500/20 shadow-[0_0_30px_rgba(232,121,249,0.6)]">
              <span className="text-2xl">✦</span>
            </div>
            <h2 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
                ConsultAgent
              </span>
            </h2>
            <p className="mt-2 text-lg font-medium text-fuchsia-200">
              Supervisor Agent
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Coordinates specialized subagents and turns fragmented business signals
              into clear strategic recommendations.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-2 grid max-w-6xl gap-4 md:grid-cols-4">
          {["Affordable", "Fast", "Actionable", "Growth Focused"].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center text-sm font-medium text-slate-200 backdrop-blur-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}