export default function Home() {
  const topAgents = [
    {
      title: "Marketing Agent",
      description:
        "Crafts targeted campaigns, analyzes audience sentiment, and drives customer demand.",
      icon: "📣",
      position: "left-[4%] top-0",
    },
    {
      title: "Competitor Agent",
      description:
        "Monitors competitors, compares pricing and offerings, and uncovers opportunities.",
      icon: "📊",
      position: "left-[27%] top-0",
    },
    {
      title: "Revenue Intelligence Agent",
      description:
        "Analyzes sales and financial data, forecasts revenue, and identifies growth levers.",
      icon: "📈",
      position: "left-[50%] top-0",
    },
    {
      title: "Sector Agent",
      description:
        "Tracks local market trends, regulations, and consumer behavior in your industry.",
      icon: "📍",
      position: "left-[73%] top-0",
    },
  ];

  const valueItems = [
    {
      title: "Affordable",
      text: "Powerful strategic support at a fraction of traditional consulting cost.",
      icon: "💲",
    },
    {
      title: "Time Saving",
      text: "AI agents work in parallel so owners can focus on running the business.",
      icon: "🕒",
    },
    {
      title: "Actionable",
      text: "Clear, prioritized recommendations you can actually act on.",
      icon: "🎯",
    },
    {
      title: "Growth Focused",
      text: "Recommendations designed to support sustainable business growth.",
      icon: "📶",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.24),_transparent_30%),radial-gradient(circle_at_bottom,_rgba(236,72,153,0.16),_transparent_28%),linear-gradient(to_bottom,_#090f24,_#050816)]" />
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#ffffff_0.6px,transparent_0.6px)] [background-size:26px_26px]" />

      <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-10">
        <div className="text-center">
          <p className="text-2xl text-fuchsia-300 sm:text-3xl">Solution:</p>

          <h1 className="mt-1 text-6xl font-bold tracking-tight sm:text-8xl">
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              ConsultAgent:
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-5xl text-2xl leading-snug text-slate-200 sm:text-4xl">
            A Multi-agent AI advisor for local business growth and success
          </p>
        </div>

        <div className="relative mx-auto mt-14 h-[720px] max-w-6xl">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1200 720"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="agentLine" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#c084fc" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
              <filter id="softGlow">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              d="M165 185 C250 250, 340 290, 465 300"
              stroke="url(#agentLine)"
              strokeWidth="2.5"
              strokeDasharray="8 8"
              opacity="0.95"
              filter="url(#softGlow)"
            />
            <path
              d="M435 185 C475 240, 505 275, 555 300"
              stroke="url(#agentLine)"
              strokeWidth="2.5"
              strokeDasharray="8 8"
              opacity="0.95"
              filter="url(#softGlow)"
            />
            <path
              d="M765 185 C725 240, 695 275, 645 300"
              stroke="url(#agentLine)"
              strokeWidth="2.5"
              strokeDasharray="8 8"
              opacity="0.95"
              filter="url(#softGlow)"
            />
            <path
              d="M1035 185 C950 250, 860 290, 735 300"
              stroke="url(#agentLine)"
              strokeWidth="2.5"
              strokeDasharray="8 8"
              opacity="0.95"
              filter="url(#softGlow)"
            />

            <path
              d="M600 420 L600 455"
              stroke="url(#agentLine)"
              strokeWidth="2.5"
              strokeDasharray="8 8"
              opacity="0.95"
              filter="url(#softGlow)"
            />
          </svg>

          {topAgents.map((agent) => (
            <div
              key={agent.title}
              className={`absolute ${agent.position} w-[19%] rounded-2xl border border-fuchsia-400/25 bg-[linear-gradient(180deg,rgba(31,18,62,0.92),rgba(18,13,40,0.92))] p-5 shadow-[0_0_30px_rgba(192,132,252,0.18)] backdrop-blur-md`}
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="text-4xl">{agent.icon}</div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-fuchsia-300/40 bg-fuchsia-500/10 text-sm text-fuchsia-200 shadow-[0_0_18px_rgba(232,121,249,0.35)]">
                  AI
                </div>
              </div>

              <h2 className="text-xl font-semibold text-white">{agent.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {agent.description}
              </p>
            </div>
          ))}

          <div className="absolute left-1/2 top-[300px] w-[520px] -translate-x-1/2 rounded-3xl border border-fuchsia-400/30 bg-[linear-gradient(180deg,rgba(49,22,98,0.88),rgba(27,16,60,0.88))] p-6 shadow-[0_0_45px_rgba(192,132,252,0.28)] backdrop-blur-xl">
            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-fuchsia-300/40 bg-fuchsia-500/15 text-4xl shadow-[0_0_28px_rgba(232,121,249,0.45)]">
                🤖
              </div>

              <div>
                <h2 className="text-5xl font-bold leading-none">
                  <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
                    ConsultAgent
                  </span>
                </h2>
                <p className="mt-2 text-2xl font-medium text-fuchsia-200">
                  Supervisor Agent
                </p>
              </div>
            </div>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Orchestrates all AI agents, synthesizes insights, and delivers actionable
              strategic recommendations.
            </p>
          </div>

          <div className="absolute left-1/2 top-[455px] w-[460px] -translate-x-1/2 rounded-3xl border border-fuchsia-400/25 bg-[linear-gradient(180deg,rgba(34,18,74,0.88),rgba(20,14,48,0.88))] p-5 shadow-[0_0_36px_rgba(192,132,252,0.2)] backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center text-5xl text-fuchsia-300">
                📈
              </div>

              <div>
                <h3 className="text-3xl font-semibold text-white">
                  Strategy Recommendation
                </h3>
                <p className="mt-2 text-lg leading-7 text-slate-300">
                  Clear, actionable recommendations tailored to your business goals
                  driving growth and success.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 grid w-full max-w-[920px] -translate-x-1/2 gap-4 rounded-3xl border border-fuchsia-400/20 bg-[linear-gradient(180deg,rgba(22,16,42,0.78),rgba(13,10,30,0.78))] p-5 shadow-[0_0_30px_rgba(192,132,252,0.12)] backdrop-blur-md md:grid-cols-4">
            {valueItems.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/5 p-3"
              >
                <div className="text-2xl text-fuchsia-300">{item.icon}</div>
                <div>
                  <p className="text-base font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-300">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
      </section>
    </main>
  );
}