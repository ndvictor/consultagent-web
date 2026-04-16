export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF9EF] text-[#3E2F1C]">
      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">
        <p className="mb-4 rounded-full border border-[#C9A46A] px-4 py-1 text-sm font-medium">
          UC Berkeley MIDS Capstone
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
          ConsultAgent
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5C4A35]">
          An AI powered small business advisor that helps local coffee shop owners make
          smarter growth decisions using business data, local market signals, and
          strategic recommendations.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="/demo"
            className="rounded-xl bg-[#8B5E34] px-6 py-3 text-white shadow hover:opacity-90"
          >
            Try Demo
          </a>
          <a
            href="/about"
            className="rounded-xl border border-[#8B5E34] px-6 py-3 hover:bg-[#F4E7D3]"
          >
            Learn More
          </a>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 md:grid-cols-3">
        <div className="rounded-2xl border border-[#E6D2B5] bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Problem</h2>
          <p className="mt-3 text-[#5C4A35]">
            Small business owners often lack affordable strategic support and do not
            have time to analyze competitors, operations, and market trends.
          </p>
        </div>

        <div className="rounded-2xl border border-[#E6D2B5] bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Solution</h2>
          <p className="mt-3 text-[#5C4A35]">
            ConsultAgent uses a multi agent AI workflow to turn business inputs into a
            grounded, structured business review with actionable recommendations.
          </p>
        </div>

        <div className="rounded-2xl border border-[#E6D2B5] bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Value</h2>
          <p className="mt-3 text-[#5C4A35]">
            Coffee shop owners get faster, more affordable, and more practical business
            guidance without needing to hire a traditional consultant.
          </p>
        </div>
      </section>
    </main>
  );
}