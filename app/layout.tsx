import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "ConsultAgent",
  description: "AI advisor for local business growth",
};

function Navbar() {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/demo", label: "Demo" },
    { href: "/about", label: "Architecture" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-fuchsia-400/15 bg-[#050816]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="group">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-fuchsia-400 shadow-[0_0_18px_rgba(232,121,249,1)] transition group-hover:scale-110" />
            <div>
              <p className="text-lg font-semibold tracking-tight text-white">
                <span className="bg-gradient-to-r from-violet-300 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                  ConsultAgent
                </span>
              </p>
              <p className="text-xs text-slate-300">
                AI-powered business intelligence
              </p>
            </div>
          </div>
        </Link>

        <nav className="flex items-center gap-2 rounded-full border border-fuchsia-300/15 bg-white/5 p-1 shadow-[0_0_18px_rgba(217,70,239,0.08)]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-fuchsia-500/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-fuchsia-400/15 bg-[#050816]/85">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-white">
            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              ConsultAgent
            </span>
          </h3>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
            A UC Berkeley MIDS Capstone project exploring how multi-agent AI can support
            small business owners with clearer and more actionable growth strategy.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
            Team
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-200">
            <li>Brian Feldman</li>
            <li>Hiro Naito</li>
            <li>Victor Ndayambaje</li>
            <li>Peter Valverde</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
            Links
          </h4>
          <div className="mt-3 flex flex-col gap-3 text-sm">
            <a
              href="https://github.com/ndvictor/consultagent-web"
              target="_blank"
              rel="noreferrer"
              className="text-slate-200 transition hover:text-white"
            >
              Website Repo
            </a>
            <a
              href="https://github.com/pvalverde1/MIDS-Capstone-ConsultAgent"
              target="_blank"
              rel="noreferrer"
              className="text-slate-200 transition hover:text-white"
            >
              Core Capstone Repo
            </a>
            <a
              href="/demo"
              className="text-slate-200 transition hover:text-white"
            >
              Live Demo
            </a>
            <a
              href="/about"
              className="text-slate-200 transition hover:text-white"
            >
              Architecture & Evaluation
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-fuchsia-400/10 px-6 py-4 text-center text-xs text-slate-400">
        © 2026 ConsultAgent • UC Berkeley MIDS Capstone
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#050816] text-white antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}