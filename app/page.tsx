import Image from "next/image";

export default function Home() {
  const topAgents = [
    {
      title: "Marketing Agent",
      description: "Crafts targeted campaigns, analyzes audience sentiment, and drives customer demand.",
      image: "/agents/marketing-agent.png",
      position: "left-[2%] top-0",
    },
    {
      title: "Competitor Agent",
      description: "Monitors competitors, compares pricing and offerings, and uncovers opportunities.",
      image: "/agents/competitor-agent.png",
      position: "left-[26%] top-0",
    },
    {
      title: "Revenue Intelligence Agent",
      description: "Analyzes sales and financial data, forecasts revenue, and identifies growth levers.",
      image: "/agents/revenue-agent.png",
      position: "left-[50%] top-0",
    },
    {
      title: "Sector Agent",
      description: "Tracks local market trends, regulations, and consumer behavior in your industry.",
      image: "/agents/sector-agent.png",
      position: "left-[74%] top-0",
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
      icon: "📈",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.28),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(236,72,153,0.18),_transparent_20%),radial-gradient(circle_at_bottom,_rgba(99,102,241,0.12),_transparent_28%),linear-gradient(to_bottom,_#081126,_#050816)]" />
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#ffffff_0.7px,transparent_0.7px)] [background-size:26px_26px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.06),_transparent_40%)]" />

      <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-12">
        <div className="text-center">
          <h1 className="mt-2 text-6xl font-bold tracking-tight sm:text-8xl">
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(232,121,249,0.35)]">
              ConsultAgent
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-5xl text-2xl leading-snug text-slate-100 sm:text-4xl">
            A Multi-agent AI advisor for local business growth and success
          </p>
        </div>

        <div className="relative mx-auto mt-16 h-[860px] max-w-6xl">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1200 860"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="agentLine" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#d8b4fe" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
              <filter id="softGlow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              d="M155 215 C255 300, 365 355, 485 388"
              stroke="url(#agentLine)"
              strokeWidth="3"
              strokeDasharray="10 10"
              opacity="0.95"
              filter="url(#softGlow)"
            />
            <path
              d="M430 215 C470 290, 515 345, 560 388"
              stroke="url(#agentLine)"
              strokeWidth="3"
              strokeDasharray="10 10"
              opacity="0.95"
              filter="url(#softGlow)"
            />
            <path
              d="M770 215 C730 290, 685 345, 640 388"
              stroke="url(#agentLine)"
              strokeWidth="3"
              strokeDasharray="10 10"
              opacity="0.95"
              filter="url(#softGlow)"
            />
            <path
              d="M1045 215 C945 300, 835 355, 715 388"
              stroke="url(#agentLine)"
              strokeWidth="3"
              strokeDasharray="10 10"
              opacity="0.95"
              filter="url(#softGlow)"
            />

            <path
              d="M600 545 L600 592"
              stroke="url(#agentLine)"
              strokeWidth="3"
              strokeDasharray="10 10"
              opacity="0.95"
              filter="url(#softGlow)"
            />
          </svg>

          {topAgents.map((agent) => (
            <div
              key={agent.title}
              className={`absolute ${agent.position} w-[21%] rounded-2xl border border-fuchsia-400/25 bg-[linear-gradient(180deg,rgba(35,20,72,0.95),rgba(19,12,44,0.95))] p-5 shadow-[0_0_34px_rgba(192,132,252,0.16)] backdrop-blur-md`}
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2">
                  <Image
                    src={agent.image}
                    alt={agent.title}
                    width={52}
                    height={52}
                    className="h-auto w-auto object-contain"
                  />
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-yellow-300/40 bg-yellow-400/10 text-lg shadow-[0_0_16px_rgba(250,204,21,0.35)]">
                  💡
                </div>
              </div>

              <h2 className="text-xl font-semibold text-white">{agent.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{agent.description}</p>
            </div>
          ))}

          <div className="absolute left-1/2 top-[390px] w-[560px] -translate-x-1/2 rounded-3xl border border-fuchsia-400/30 bg-[linear-gradient(180deg,rgba(57,27,110,0.9),rgba(27,16,62,0.9))] p-7 shadow-[0_0_48px_rgba(192,132,252,0.28)] backdrop-blur-xl">
            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-fuchsia-300/40 bg-fuchsia-500/15 shadow-[0_0_30px_rgba(232,121,249,0.45)]">
                <Image
                  src="/agents/consultagent-supervisor.png"
                  alt="ConsultAgent Supervisor"
                  width={54}
                  height={54}
                  className="h-auto w-auto object-contain"
                />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <h2 className="text-5xl font-bold leading-none">
                    <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
                      ConsultAgent
                    </span>
                  </h2>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-yellow-300/40 bg-yellow-400/10 text-lg shadow-[0_0_16px_rgba(250,204,21,0.35)]">
                    💡
                  </span>
                </div>

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

          <div className="absolute left-1/2 top-[595px] w-[500px] -translate-x-1/2 rounded-3xl border border-fuchsia-400/25 bg-[linear-gradient(180deg,rgba(41,22,88,0.9),rgba(20,14,48,0.9))] p-6 shadow-[0_0_38px_rgba(192,132,252,0.22)] backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-3">
                <Image
                  src="/agents/strategy-recommendation.png"
                  alt="Strategy Recommendation"
                  width={56}
                  height={56}
                  className="h-auto w-auto object-contain"
                />
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

          <div className="absolute bottom-0 left-1/2 grid w-full max-w-[980px] -translate-x-1/2 gap-4 rounded-3xl border border-fuchsia-400/20 bg-[linear-gradient(180deg,rgba(24,16,46,0.82),rgba(13,10,30,0.82))] p-5 shadow-[0_0_30px_rgba(192,132,252,0.14)] backdrop-blur-md md:grid-cols-4">
            {valueItems.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/5 p-4"
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

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
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