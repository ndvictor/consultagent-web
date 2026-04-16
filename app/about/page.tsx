import Image from "next/image";

const subagents = [
  {
    title: "Marketing Agent",
    subtitle: "campaigns · sentiment · demand",
    color: "from-emerald-500/25 to-emerald-700/10",
    border: "border-emerald-400/30",
    image: "/agents/marketing-agent.png",
  },
  {
    title: "Competitor Agent",
    subtitle: "pricing · positioning · benchmarking",
    color: "from-rose-500/25 to-rose-700/10",
    border: "border-rose-400/30",
    image: "/agents/competitor-agent.png",
  },
  {
    title: "Revenue Intelligence",
    subtitle: "transactions · forecasting · insights",
    color: "from-violet-500/25 to-violet-700/10",
    border: "border-violet-400/30",
    image: "/agents/revenue-agent.png",
  },
  {
    title: "Sector Agent",
    subtitle: "industry trends · macro · opportunities",
    color: "from-amber-500/25 to-amber-700/10",
    border: "border-amber-400/30",
    image: "/agents/sector-agent.png",
  },
];

const dataSources = [
  "Business profile + owner question",
  "Synthetic / POS revenue data",
  "Business trend and outlook docs",
  "Newer trends from online search",
  "Coffee shop websites",
  "3rd party scrapers / APIs",
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.28),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(236,72,153,0.18),_transparent_20%),radial-gradient(circle_at_bottom,_rgba(99,102,241,0.12),_transparent_28%),linear-gradient(to_bottom,_#081126,_#050816)]" />
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#ffffff_0.7px,transparent_0.7px)] [background-size:26px_26px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.06),_transparent_40%)]" />

      <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-14">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 inline-flex rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-4 py-1 text-sm text-fuchsia-200">
            Architecture
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(232,121,249,0.35)]">
              ConsultAgent Workflow
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            Multi-agent orchestration on AWS Bedrock
          </p>
        </div>

        <div className="relative mx-auto mt-14 h-[980px] max-w-6xl">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1200 980"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="wfLine" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#d8b4fe" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
              <filter id="wfGlow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path d="M600 120 L600 180" stroke="url(#wfLine)" strokeWidth="3" strokeDasharray="10 10" filter="url(#wfGlow)" />
            <path d="M600 300 L600 360" stroke="url(#wfLine)" strokeWidth="3" strokeDasharray="10 10" filter="url(#wfGlow)" />

            <path d="M600 520 C480 520, 390 520, 300 520" stroke="url(#wfLine)" strokeWidth="3" strokeDasharray="10 10" filter="url(#wfGlow)" />
            <path d="M600 520 C560 570, 520 600, 470 650" stroke="url(#wfLine)" strokeWidth="3" strokeDasharray="10 10" filter="url(#wfGlow)" />
            <path d="M600 520 C640 570, 680 600, 730 650" stroke="url(#wfLine)" strokeWidth="3" strokeDasharray="10 10" filter="url(#wfGlow)" />
            <path d="M600 520 C720 520, 810 520, 900 520" stroke="url(#wfLine)" strokeWidth="3" strokeDasharray="10 10" filter="url(#wfGlow)" />

            <path d="M300 585 C300 690, 430 760, 600 810" stroke="url(#wfLine)" strokeWidth="2.8" strokeDasharray="10 10" filter="url(#wfGlow)" />
            <path d="M470 715 C500 760, 545 785, 600 810" stroke="url(#wfLine)" strokeWidth="2.8" strokeDasharray="10 10" filter="url(#wfGlow)" />
            <path d="M730 715 C700 760, 655 785, 600 810" stroke="url(#wfLine)" strokeWidth="2.8" strokeDasharray="10 10" filter="url(#wfGlow)" />
            <path d="M900 585 C900 690, 770 760, 600 810" stroke="url(#wfLine)" strokeWidth="2.8" strokeDasharray="10 10" filter="url(#wfGlow)" />

            <path d="M165 440 C165 360, 235 320, 430 270" stroke="url(#wfLine)" strokeWidth="2.5" strokeDasharray="8 8" filter="url(#wfGlow)" opacity="0.75" />
            <path d="M1035 440 C1035 360, 965 320, 770 270" stroke="url(#wfLine)" strokeWidth="2.5" strokeDasharray="8 8" filter="url(#wfGlow)" opacity="0.75" />
          </svg>

          <div className="absolute left-1/2 top-0 w-[300px] -translate-x-1/2 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-center backdrop-blur-md">
            <p className="text-sm uppercase tracking-[0.22em] text-fuchsia-300">1</p>
            <h2 className="mt-2 text-2xl font-semibold">Owner Input</h2>
            <p className="mt-2 text-sm text-slate-300">
              business profile · location · strategic question
            </p>
          </div>

          <div className="absolute left-1/2 top-[180px] w-[360px] -translate-x-1/2 rounded-3xl border border-fuchsia-400/30 bg-[linear-gradient(180deg,rgba(52,26,108,0.92),rgba(24,15,58,0.92))] p-6 shadow-[0_0_40px_rgba(192,132,252,0.24)] backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-3">
                <Image src="/logos/aws-bedrock.png" alt="AWS Bedrock" width={56} height={56} className="h-auto w-auto object-contain" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-fuchsia-300">2</p>
                <h2 className="text-3xl font-bold">AWS Bedrock</h2>
                <p className="mt-1 text-slate-300">Claude Sonnet orchestration layer</p>
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 top-[360px] w-[460px] -translate-x-1/2 rounded-3xl border border-fuchsia-400/30 bg-[linear-gradient(180deg,rgba(57,27,110,0.9),rgba(27,16,62,0.9))] p-7 shadow-[0_0_48px_rgba(192,132,252,0.28)] backdrop-blur-xl">
            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-fuchsia-300/40 bg-fuchsia-500/15 shadow-[0_0_30px_rgba(232,121,249,0.45)]">
                <Image src="/agents/consultagent-supervisor.png" alt="ConsultAgent Supervisor" width={54} height={54} className="h-auto w-auto object-contain" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-fuchsia-300">3</p>
                <h2 className="text-4xl font-bold">
                  <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
                    Supervisor Agent
                  </span>
                </h2>
                <p className="mt-2 text-slate-300">invokes subagents in parallel</p>
              </div>
            </div>
          </div>

          <div className="absolute left-[2%] top-[440px] w-[230px] rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
            <p className="text-sm uppercase tracking-[0.2em] text-fuchsia-300">4A</p>
            <h3 className="mt-2 text-xl font-semibold">AWS Lambda</h3>
            <p className="mt-2 text-sm text-slate-300">entry point</p>
          </div>

          <div className="absolute right-[2%] top-[440px] w-[230px] rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
            <p className="text-sm uppercase tracking-[0.2em] text-fuchsia-300">4B</p>
            <h3 className="mt-2 text-xl font-semibold">S3 · Cache · Prompts</h3>
            <p className="mt-2 text-sm text-slate-300">data, prompts, knowledge assets</p>
          </div>

          <div className="absolute left-[5%] top-[650px] grid w-[90%] gap-5 md:grid-cols-4">
            {subagents.map((agent) => (
              <div
                key={agent.title}
                className={`rounded-2xl border ${agent.border} bg-gradient-to-b ${agent.color} p-5 shadow-[0_0_28px_rgba(192,132,252,0.12)] backdrop-blur-md`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2">
                    <Image src={agent.image} alt={agent.title} width={42} height={42} className="h-auto w-auto object-contain" />
                  </div>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-yellow-300/40 bg-yellow-400/10 text-sm shadow-[0_0_16px_rgba(250,204,21,0.35)]">
                    💡
                  </span>
                </div>
                <h3 className="text-lg font-semibold">{agent.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{agent.subtitle}</p>
              </div>
            ))}
          </div>

          <div className="absolute left-1/2 top-[800px] w-[420px] -translate-x-1/2 rounded-3xl border border-fuchsia-400/25 bg-[linear-gradient(180deg,rgba(41,22,88,0.9),rgba(20,14,48,0.9))] p-6 shadow-[0_0_38px_rgba(192,132,252,0.22)] backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-3">
                <Image src="/agents/strategy-recommendation.png" alt="Strategy Recommendation" width={42} height={42} className="h-auto w-auto object-contain" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-fuchsia-300">5</p>
                <h3 className="text-2xl font-semibold">Strategy Recommendation</h3>
                <p className="mt-1 text-sm text-slate-300">grounded multi-agent output</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <h2 className="text-2xl font-semibold">Data Sources</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {dataSources.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <h2 className="text-2xl font-semibold">Design Notes</h2>
            <div className="mt-5 space-y-3">
              {[
                "Subagents are modular and plug-and-play",
                "Subagents generate separate reports in parallel",
                "No fine-tuning required",
                "Supervisor synthesizes final output",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}