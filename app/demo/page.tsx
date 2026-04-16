export default function DemoPage() {
  const reportSections = [
    {
      title: "Executive Summary",
      content:
        "ConsultAgent identifies strong local demand and solid category fit for this coffee shop, with the biggest opportunity in differentiating the menu, improving repeat customer capture, and sharpening neighborhood positioning.",
    },
    {
      title: "Competitor Analysis",
      content:
        "Nearby competitors appear strong on convenience and product variety. The clearest opportunity is to compete through specialty positioning, customer experience, and targeted local promotions rather than price alone.",
    },
    {
      title: "Revenue Intelligence",
      content:
        "Revenue patterns suggest the business should focus on high margin items, bundle strategy, and daypart optimization. Seasonal and weekday demand differences can support better staffing and product planning.",
    },
    {
      title: "Sector Trends",
      content:
        "Coffee consumers continue responding to premium beverages, loyalty driven retention, convenience, and local brand identity. Cost pressures and changing consumer budgets make pricing discipline important.",
    },
    {
      title: "Strategic Recommendations",
      content:
        "Launch a signature product bundle, improve local digital marketing, build a repeat-customer loyalty loop, and align pricing and promotions around the highest value products and peak demand windows.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.22),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.16),_transparent_24%),linear-gradient(to_bottom,_#090f24,_#050816)]" />
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#ffffff_0.6px,transparent_0.6px)] [background-size:26px_26px]" />

      <section className="relative mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10 text-center">
          <p className="mb-3 inline-flex rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-4 py-1 text-sm text-fuchsia-200">
            Demo
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Try ConsultAgent
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            Enter a local business profile and preview how ConsultAgent turns
            fragmented business signals into a structured strategic report.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[420px_minmax(0,1fr)]">
          <div className="rounded-3xl border border-fuchsia-400/20 bg-[linear-gradient(180deg,rgba(30,18,58,0.92),rgba(15,12,34,0.92))] p-6 shadow-[0_0_35px_rgba(192,132,252,0.16)] backdrop-blur-xl">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-white">
                Business Details
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                This can stay mocked for now. The goal is to make the MVP flow
                feel real and presentation ready.
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Business Name
                </label>
                <input
                  defaultValue="Good Soil Coffee"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-fuchsia-400/50"
                  placeholder="Enter business name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Street Address
                </label>
                <input
                  defaultValue="34 Pier Ave"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-fuchsia-400/50"
                  placeholder="Enter address"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    City
                  </label>
                  <input
                    defaultValue="Hermosa Beach"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-fuchsia-400/50"
                    placeholder="City"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    State
                  </label>
                  <input
                    defaultValue="CA"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-fuchsia-400/50"
                    placeholder="State"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Industry Sector
                </label>
                <select className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-fuchsia-400/50">
                  <option>Coffee Shop / Café</option>
                  <option>Bakery</option>
                  <option>Restaurant</option>
                  <option>Retail</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Business Description
                </label>
                <textarea
                  rows={4}
                  defaultValue="Neighborhood coffee shop focused on quality espresso, community atmosphere, and growing repeat local traffic."
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-fuchsia-400/50"
                  placeholder="Describe the business"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Strategic Focus
                </label>
                <textarea
                  rows={4}
                  defaultValue="How can this coffee shop grow recurring customers and compete more effectively against nearby alternatives?"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-fuchsia-400/50"
                  placeholder="What should the report focus on?"
                />
              </div>

              <button
                type="button"
                className="w-full rounded-xl bg-gradient-to-r from-fuchsia-600 to-violet-600 px-6 py-3 font-medium text-white shadow-lg shadow-fuchsia-900/30 transition hover:scale-[1.01]"
              >
                Generate Report
              </button>

              <p className="text-center text-xs text-slate-400">
                For now, this page can present a polished mock output while you
                decide whether to connect the live backend later.
              </p>
            </form>
          </div>

          <div className="rounded-3xl border border-fuchsia-400/20 bg-[linear-gradient(180deg,rgba(20,15,42,0.92),rgba(11,10,28,0.92))] p-6 shadow-[0_0_35px_rgba(192,132,252,0.14)] backdrop-blur-xl">
            <div className="mb-6 flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-fuchsia-300">
                  Generated Report Preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  Good Soil Coffee
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  Hermosa Beach, CA • Coffee Shop / Café
                </p>
              </div>

              <div className="rounded-2xl border border-fuchsia-400/20 bg-fuchsia-500/10 px-4 py-3 text-sm text-fuchsia-200">
                Multi-Agent Strategic Review
              </div>
            </div>

            <div className="grid gap-4">
              {reportSections.map((section) => (
                <div
                  key={section.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {section.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-400">Priority</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Loyalty Growth
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-400">Key Risk</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Generic Positioning
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-400">Top Action</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Signature Bundle Offer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}