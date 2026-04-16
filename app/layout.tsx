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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="group">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-fuchsia-400 shadow-[0_0_18px_rgba(232,121,249,1)] transition group-hover:scale-110" />
            <div>
              <p className="text-lg font-semibold tracking-tight text-white">
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                  ConsultAgent
                </span>
              </p>
              <p className="text-xs text-slate-400">
                AI-powered business intelligence
              </p>
            </div>
          </div>
        </Link>

        <nav className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
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
      </body>
    </html>
  );
}