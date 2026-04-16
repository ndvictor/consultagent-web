import Image from "next/image";

const workflowSteps = [
  {
    title: "Owner Input",
    text: "Business profile, address, market context, and strategic question are submitted through the application.",
  },
  {
    title: "AWS Bedrock + Lambda",
    text: "AWS Lambda receives the request and routes the workflow to Bedrock-powered agent orchestration.",
  },
  {
    title: "Supervisor Agent",
    text: "The supervisor coordinates the process and synthesizes outputs from specialized agents into one report.",
  },
  {
    title: "Parallel Subagents",
    text: "Marketing, Competitor, Revenue Intelligence, and Sector agents each analyze a specific part of the business problem.",
  },
  {
    title: "Strategy Recommendation",
    text: "The final output is a grounded, actionable recommendation for the business owner.",
  },
];

const subagents = [
  {
    title: "Marketing Agent",
    subtitle: "campaigns · sentiment · demand",
    image: "/agents/marketing-agent.png",
  },
  {
    title: "Competitor Agent",
    subtitle: "pricing · positioning · benchmarking",
    image: "/agents/competitor-agent.png",
  },
  {
    title: "Revenue Intelligence Agent",
    subtitle: "transactions · forecasting · insights",
    image: "/agents/revenue-agent.png",
  },
  {
    title: "Sector Agent",
    subtitle: "industry trends · macro · opportunities",
    image: "/agents/sector-agent.png",
  },
];

const evaluationPoints = [
  "ConsultAgent is compared against a baseline single-LLM approach using the same owner input.",
  "OpenAI GPT-5.2 is used as the judge to evaluate output quality.",
  "Criteria include actionability, specificity, evidence and data grounding, and local relevance.",
  "The evaluation results show ConsultAgent outperforming the baseline in most tested cases.",
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(217,70,239,0.22),_transparent_22%),radial-gradient(circle_at_top_right,_rgba(236,72,153,0.18),_transparent_18%),radial-gradient(circle_at_bottom,_rgba(139,92,246,0.14),_transparent_26%),linear-gradient(to_bottom,_#04030f,_#07051a_35%,_#050816_100%)]" />
      <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(#8b5cf6_0.8px,transparent_0.8px)] [background-size:24px_24px]" />

      <section className="relative mx-auto max-w-7xl px-6 py-14">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 inline-flex rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-4 py-1 text-sm text-fuchsia-200">
            Architecture & Evaluation
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(232,121,249,0.42)]">
              ConsultAgent System Design
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
            A Bedrock-powered multi-agent workflow for grounded small business strategy.
          </p>
        </div>

        <div className="mt-12 rounded-[28px] border border-fuchsia-400/25 bg-[linear-gradient(180deg,rgba(37,16,74,0.92),rgba(12,9,32,0.92))] p-6 shadow-[0_0_40px_rgba(217,70,239,0.16)] backdrop-blur-xl">
          <h2 className="text-2xl font-semibold text-white">Workflow</h2>

          <div className="mt-6 grid gap-5 lg:grid-cols-5">
            {workflowSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-fuchsia-300/20 bg-white/5 p-5 shadow-[0_0_24px_rgba(217,70,239,0.08)]"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-fuchsia-300">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-200">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-[28px] border border-fuchsia-400/25 bg-[linear-gradient(180deg,rgba(48,19,96,0.92),rgba(15,10,38,0.92))] p-6 shadow-[0_0_42px_rgba(217,70,239,0.18)] backdrop-blur-xl">
          <h2 className="text-2xl font-semibold text-white">Architecture</h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-200">
            The diagram below summarizes the end-to-end ConsultAgent system architecture,
            from owner input through AWS Bedrock orchestration, supervisor synthesis,
            and parallel subagent analysis into a final business recommendation.
          </p>

          <div className="mt-8 overflow-hidden rounded-3xl border border-fuchsia-300/20 bg-white/5 p-4 shadow-[0_0_24px_rgba(217,70,239,0.10)]">
            <Image
              src="/architecture/capstone-architecture.png"
              alt="ConsultAgent capstone architecture diagram"
              width={1600}
              height={900}
              className="h-auto w-full rounded-2xl object-contain"
              unoptimized
            />
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {subagents.map((agent) => (
              <div
                key={agent.title}
                className="rounded-2xl border border-fuchsia-300/20 bg-white/5 p-5 shadow-[0_0_24px_rgba(217,70,239,0.08)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-fuchsia-300/20 bg-white/10 p-2">
                    <Image
                      src={agent.image}
                      alt={agent.title}
                      width={50}
                      height={50}
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-yellow-300/50 bg-yellow-400/15 text-lg shadow-[0_0_18px_rgba(250,204,21,0.35)]">
                    💡
                  </div>
                </div>

                <h3 className="mt-4 text-lg font-semibold text-white">
                  {agent.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  {agent.subtitle}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-fuchsia-300/25 bg-[linear-gradient(180deg,rgba(87,29,174,0.28),rgba(24,10,57,0.82))] p-6 shadow-[0_0_36px_rgba(217,70,239,0.16)]">
            <div className="flex flex-col gap-5 md:flex-row md:items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-fuchsia-300/40 bg-fuchsia-500/15 shadow-[0_0_30px_rgba(232,121,249,0.45)]">
                <Image
                  src="/agents/consultagent-supervisor.png"
                  alt="ConsultAgent Supervisor"
                  width={54}
                  height={54}
                  className="object-contain"
                  unoptimized
                />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  <span className="bg-gradient-to-r from-violet-200 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
                    Supervisor Agent
                  </span>
                </h3>
                <p className="mt-2 text-base leading-7 text-slate-100">
                  The supervisor orchestrates the specialized agents, consolidates their
                  outputs, and generates the final strategic recommendation for the owner.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[28px] border border-fuchsia-400/25 bg-[linear-gradient(180deg,rgba(46,18,88,0.92),rgba(12,9,32,0.92))] p-6 shadow-[0_0_42px_rgba(217,70,239,0.18)] backdrop-blur-xl">
          <h2 className="text-2xl font-semibold text-white">Evaluation</h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-200">
            The evaluation compares ConsultAgent against a baseline LLM workflow using the
            same owner input. A separate judge model evaluates the outputs for practical quality.
          </p>

          <div className="mt-8 grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-3xl border border-fuchsia-300/20 bg-white/5 p-4 shadow-[0_0_24px_rgba(217,70,239,0.10)]">
              <div className="overflow-hidden rounded-2xl border border-fuchsia-300/20">
                <Image
                  src="/evaluation/evaluation-framework.png"
                  alt="ConsultAgent evaluation framework"
                  width={1400}
                  height={800}
                  className="h-auto w-full object-contain"
                  unoptimized
                />
              </div>

              <div className="mt-4 overflow-hidden rounded-2xl border border-fuchsia-300/20">
                <Image
                  src="/evaluation/evaluation-results.png"
                  alt="ConsultAgent evaluation results"
                  width={1400}
                  height={800}
                  className="h-auto w-full object-contain"
                  unoptimized
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-fuchsia-300/20 bg-white/5 p-5 shadow-[0_0_24px_rgba(217,70,239,0.08)]">
                <h3 className="text-lg font-semibold text-white">How it works</h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-200">
                  {evaluationPoints.map((point) => (
                    <li
                      key={point}
                      className="rounded-xl border border-fuchsia-300/10 bg-black/20 px-4 py-3"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-fuchsia-300/20 bg-[linear-gradient(180deg,rgba(87,29,174,0.24),rgba(19,11,47,0.88))] p-5 shadow-[0_0_26px_rgba(217,70,239,0.10)]">
                <h3 className="text-lg font-semibold text-white">Key takeaway</h3>
                <p className="mt-3 text-sm leading-7 text-slate-100">
                  The visual framework shows that ConsultAgent’s multi-agent structure is
                  not just more complex architecturally, but also more grounded and more
                  actionable in practice than the baseline approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}