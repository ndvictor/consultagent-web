import Image from "next/image";

export default function Home() {
  const topAgents = [
    {
      title: "Marketing Agent",
      description:
        "Crafts targeted campaigns, analyzes audience sentiment, and drives customer demand.",
      image: "/agents/marketing-agent.png",
      position: "left-[2%] top-0",
    },
    {
      title: "Competitor Agent",
      description:
        "Monitors competitors, compares pricing and offerings, and uncovers opportunities.",
      image: "/agents/competitor-agent.png",
      position: "left-[26%] top-0",
    },
    {
      title: "Revenue Intelligence Agent",
      description:
        "Analyzes sales and financial data, forecasts revenue, and identifies growth levers.",
      image: "/agents/revenue-agent.png",
      position: "left-[50%] top-0",
    },
    {
      title: "Sector Agent",
      description:
        "Tracks local market trends, regulations, and consumer behavior in your industry.",
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(217,70,239,0.30),_transparent_24%),radial-gradient(circle_at_top_right,_rgba(236,72,153,0.24),_transparent_18%),radial-gradient(circle_at_bottom,_rgba(139,92,246,0.18),_transparent_28%),linear-gradient(to_bottom,_#07051a,_#09061f_35%,_#050816_100%)]" />
      <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(#8b5cf6_0.8px,transparent_0.8px)] [background-size:24px_24px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.04),_transparent_40%)]" />

      <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-12">
        <div className="text-center">
          <h1 className="mt-2 text-6xl font-bold tracking-tight sm:text-8xl">
            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_32px_rgba(232,121,249,0.45)]">
              ConsultAgent
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-5xl text-2xl leading-snug text-slate-100 sm:text-4xl">
            A Multi-agent AI advisor for local business growth and success
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-6xl">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-300">
              Why ConsultAgent Matters
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              <span className="bg-gradient-to-r from-violet-200 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
                From business pain point to strategic action
              </span>
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-fuchsia-400/30 bg-[linear-gradient(180deg,rgba(70,18,120,0.92),rgba(24,10,52,0.92))] p-6 shadow-[0_0_34px_rgba(217,70,239,0.16)] backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-fuchsia-300/25 bg-white/10 text-2xl">
                  ⚠️
                </div>
                <h3 className="text-2xl font-semibold text-white">Problem</h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-200">
                Small business owners often lack affordable strategic support and do not
                have time to analyze competitors, operations, and market trends.
              </p>
            </div>

            <div className="rounded-3xl border border-fuchsia-400/30 bg-[linear-gradient(180deg,rgba(92,24,150,0.92),rgba(30,12,66,0.92))] p-6 shadow-[0_0_34px_rgba(217,70,239,0.18)] backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-fuchsia-300/25 bg-white/10 text-2xl">
                  ✨
                </div>
                <h3 className="text-2xl font-semibold text-white">Product</h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-200">
                ConsultAgent is a multi-agent AI advisor that combines business inputs,
                local market signals, competitor intelligence, and sector knowledge into
                a structured business review.
              </p>
            </div>

            <div className="rounded-3xl border border-fuchsia-400/30 bg-[linear-gradient(180deg,rgba(118,30,160,0.92),rgba(38,14,72,0.92))] p-6 shadow-[0_0_34px_rgba(217,70,239,0.20)] backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-fuchsia-300/25 bg-white/10 text-2xl">
                  📈
                </div>
                <h3 className="text-2xl font-semibold text-white">Value</h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-200">
                Owners get more grounded, actionable recommendations faster and at a
                fraction of the cost of traditional consulting.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {[
              "Affordable strategic support",
              "Faster business decisions",
              "Grounded recommendations",
              "Growth-focused outcomes",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-fuchsia-300/15 bg-white/5 px-4 py-3 text-center text-sm font-medium text-slate-100 shadow-[0_0_18px_rgba(217,70,239,0.08)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto mt-16 h-[1420px] max-w-6xl">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1200 1420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="agentLine" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f0abfc" />
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
              d="M155 215 C255 320, 365 410, 485 500"
              stroke="url(#agentLine)"
              strokeWidth="3.2"
              strokeDasharray="10 10"
              opacity="0.95"
              filter="url(#softGlow)"
            />
            <path
              d="M430 215 C470 335, 515 420, 560 500"
              stroke="url(#agentLine)"
              strokeWidth="3.2"
              strokeDasharray="10 10"
              opacity="0.95"
              filter="url(#softGlow)"
            />
            <path
              d="M770 215 C730 335, 685 420, 640 500"
              stroke="url(#agentLine)"
              strokeWidth="3.2"
              strokeDasharray="10 10"
              opacity="0.95"
              filter="url(#softGlow)"
            />
            <path
              d="M1045 215 C945 320, 835 410, 715 500"
              stroke="url(#agentLine)"
              strokeWidth="3.2"
              strokeDasharray="10 10"
              opacity="0.95"
              filter="url(#softGlow)"
            />

            <path
              d="M600 680 L600 810"
              stroke="url(#agentLine)"
              strokeWidth="3.2"
              strokeDasharray="10 10"
              opacity="0.95"
              filter="url(#softGlow)"
            />
          </svg>

          {topAgents.map((agent) => (
            <div
              key={agent.title}
              className={`absolute ${agent.position} w-[21%] rounded-2xl border border-fuchsia-400/35 bg-[linear-gradient(180deg,rgba(58,20,114,0.96),rgba(22,9,52,0.96))] p-5 shadow-[0_0_36px_rgba(217,70,239,0.18)] backdrop-blur-md`}
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-fuchsia-300/25 bg-white/10 p-2">
                  <Image
                    src={agent.image}
                    alt={agent.title}
                    width={52}
                    height={52}
                    className="object-contain"
                    unoptimized
                  />
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-yellow-300/50 bg-yellow-400/15 text-lg shadow-[0_0_18px_rgba(250,204,21,0.35)]">
                  💡
                </div>
              </div>

              <h2 className="text-xl font-semibold text-white">{agent.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-200">
                {agent.description}
              </p>
            </div>
          ))}

          <div className="absolute left-1/2 top-[520px] w-[560px] -translate-x-1/2 rounded-3xl border border-fuchsia-400/40 bg-[linear-gradient(180deg,rgba(95,34,168,0.92),rgba(40,16,90,0.92))] p-7 shadow-[0_0_56px_rgba(217,70,239,0.30)] backdrop-blur-xl">
            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-fuchsia-300/50 bg-fuchsia-500/20 shadow-[0_0_32px_rgba(232,121,249,0.45)]">
                <Image
                  src="/agents/consultagent-supervisor.png"
                  alt="ConsultAgent Supervisor"
                  width={54}
                  height={54}
                  className="object-contain"
                  unoptimized
                />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <h2 className="text-5xl font-bold leading-none">
                    <span className="bg-gradient-to-r from-violet-200 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
                      ConsultAgent
                    </span>
                  </h2>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-yellow-300/50 bg-yellow-400/15 text-lg shadow-[0_0_18px_rgba(250,204,21,0.35)]">
                    💡
                  </span>
                </div>

                <p className="mt-2 text-2xl font-medium text-fuchsia-100">
                  Supervisor Agent
                </p>
              </div>
            </div>

            <p className="mt-5 text-lg leading-8 text-slate-100">
              Orchestrates all AI agents, synthesizes insights, and delivers
              actionable strategic recommendations.
            </p>
          </div>

          <div className="absolute left-1/2 top-[860px] w-[520px] -translate-x-1/2 rounded-3xl border border-fuchsia-400/35 bg-[linear-gradient(180deg,rgba(77,24,154,0.92),rgba(30,12,66,0.92))] p-6 shadow-[0_0_44px_rgba(217,70,239,0.24)] backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-fuchsia-300/25 bg-white/10 p-3">
                <Image
                  src="/agents/strategy-recommendation.png"
                  alt="Strategy Recommendation"
                  width={56}
                  height={56}
                  className="object-contain"
                  unoptimized
                />
              </div>

              <div>
                <h3 className="text-3xl font-semibold text-white">
                  Strategy Recommendation
                </h3>
                <p className="mt-2 text-lg leading-7 text-slate-200">
                  Clear, actionable recommendations tailored to your business goals
                  driving growth and success.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[120px] left-1/2 grid w-full max-w-[980px] -translate-x-1/2 gap-4 rounded-3xl border border-fuchsia-400/25 bg-[linear-gradient(180deg,rgba(34,14,64,0.86),rgba(16,8,35,0.86))] p-5 shadow-[0_0_32px_rgba(217,70,239,0.14)] backdrop-blur-md md:grid-cols-4">
            {valueItems.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 rounded-2xl border border-fuchsia-300/15 bg-white/5 p-4"
              >
                <div className="text-2xl text-fuchsia-300">{item.icon}</div>
                <div>
                  <p className="text-base font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-xs leading-6 text-slate-200">{item.text}</p>
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
            className="rounded-xl border border-fuchsia-300/20 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            View Architecture
          </a>
        </div>
      </section>
    </main>
  );
}