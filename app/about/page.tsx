export default function AboutPage() {
  const agents = [
    {
      name: "Marketing Agent",
      text: "Analyzes local demand signals, campaign opportunities, and customer engagement ideas.",
    },
    {
      name: "Competitor Agent",
      text: "Maps nearby competitors, compares positioning, and identifies differentiation opportunities.",
    },
    {
      name: "Revenue Intelligence Agent",
      text: "Reviews sales patterns, revenue drivers, and product mix insights to surface growth levers.",
    },
    {
      name: "Sector Agent",
      text: "Adds industry context through market trends, macro signals, and external business intelligence.",
    },
  ];

  const dataSources = [
    "Business profile inputs such as name, address, sector, and owner goals",
    "Point of sale and internal business data when available",
    "Google Places and local competitor information",
    "Sector knowledge base and external strategy content",
    "Census, demographic, and market context data",
  ];

  const evaluationItems = [
    "Baseline comparison against a simpler non-agentic approach",
    "LLM as judge to compare quality, structure, and usefulness of outputs",
    "RAGAS style checks to assess groundedness and faithfulness",
    "Manual review of recommendation clarity and actionability",
  ];

  const roadmapItems = [
    "Live backend integration from the Vercel frontend into the existing agent pipeline",
    "Business document upload and richer memory across repeated sessions",
    "Interactive Q&A on generated reports and uploaded business data",
    "Expanded support beyond coffee shops into other local business categories",
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.22),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.16),_transparent_24%),linear-gradient(to_bottom,_#090f24,_#050816)]" />
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#ffffff_0.6px,transparent_0.6px)] [background-size:26px_26px]" />

      <section className="relative mx-auto max-w-7xl px-6 py-14">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 inline-flex rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-4 py-1 text-sm text-fuchsia-200">
            About the System
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              ConsultAgent Architecture
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            ConsultAgent is a multi-agent system designed to help local business owners
            transform fragmented business inputs into structured, actionable strategy.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-fuchsia-400/20 bg-[linear-gradient(180deg,rgba(30,18,58,0.92),rgba(15,12,34,0.92))] p-6 shadow-[0_0_35px_rgba(192,132,252,0.16)] backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-white">System Flow</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              The system combines specialized analysis agents with a supervisor layer
              that synthesizes results into a final business review.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-fuchsia-300">
                  Step 1
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  Business Input
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  The owner provides business details such as location, business type,
                  operating context, and strategic goals.
                </p>
              </div>

              <div className="flex justify-center text-2xl text-fuchsia-300">↓</div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-fuchsia-300">
                  Step 2
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  Specialized Subagents
                </h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {agents.map((agent) => (
                    <div
                      key={agent.name}
                      className="rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <h4 className="text-base font-semibold text-white">
                        {agent.name}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {agent.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center text-2xl text-fuchsia-300">↓</div>

              <div className="rounded-2xl border border-fuchsia-400/25 bg-fuchsia-500/10 p-5 shadow-[0_0_25px_rgba(192,132,252,0.15)]">
                <p className="text-sm uppercase tracking-[0.2em] text-fuchsia-300">
                  Step 3
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  Supervisor Agent
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  The supervisor agent orchestrates the workflow, reconciles subagent
                  outputs, and produces a structured final report with clear strategic
                  recommendations.
                </p>
              </div>

              <div className="flex justify-center text-2xl text-fuchsia-300">↓</div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-fuchsia-300">
                  Step 4
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  Final Report
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  The user receives an executive summary, competitor analysis, revenue
                  and sector insights, and prioritized strategic recommendations.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl border border-fuchsia-400/20 bg-[linear-gradient(180deg,rgba(20,15,42,0.92),rgba(11,10,28,0.92))] p-6 shadow-[0_0_35px_rgba(192,132,252,0.14)] backdrop-blur-xl">
              <h2 className="text-2xl font-semibold text-white">Data Sources</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                {dataSources.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-fuchsia-400/20 bg-[linear-gradient(180deg,rgba(20,15,42,0.92),rgba(11,10,28,0.92))] p-6 shadow-[0_0_35px_rgba(192,132,252,0.14)] backdrop-blur-xl">
              <h2 className="text-2xl font-semibold text-white">Evaluation</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                {evaluationItems.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-fuchsia-400/20 bg-[linear-gradient(180deg,rgba(20,15,42,0.92),rgba(11,10,28,0.92))] p-6 shadow-[0_0_35px_rgba(192,132,252,0.14)] backdrop-blur-xl">
              <h2 className="text-2xl font-semibold text-white">Roadmap</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                {roadmapItems.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}