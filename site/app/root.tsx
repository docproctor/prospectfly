import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import type { LinksFunction } from "react-router";

import "./app.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]/92 backdrop-blur-md border-b border-[#1e2229]">
      <nav className="max-w-[1100px] mx-auto px-10 h-[68px] flex items-center justify-between">
        <a href="/" className="text-white text-[22px] font-extrabold font-display tracking-tight">
          Prospect <span className="text-amber-500">Fly</span>
        </a>
        <ul className="flex items-center gap-9">
          <li><a href="#services" className="text-[#8a9099] hover:text-white text-sm font-medium transition-colors">Services</a></li>
          <li><a href="#process" className="text-[#8a9099] hover:text-white text-sm font-medium transition-colors">Process</a></li>
          <li><a href="#results" className="text-[#8a9099] hover:text-white text-sm font-medium transition-colors">Results</a></li>
          <li><a href="#about" className="text-[#8a9099] hover:text-white text-sm font-medium transition-colors">About</a></li>
          <li>
            <a
              href="#contact"
              className="bg-lime-400 text-black px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-lime-300 transition-colors cursor-pointer"
            >
              Book a Call
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-[#1e2229]">
      <div className="max-w-[1100px] mx-auto px-10 py-10 flex flex-wrap items-center justify-between gap-5">
        <a href="/" className="text-lg font-extrabold font-display tracking-tight">
          Prospect <span className="text-amber-500">Fly</span>
        </a>
        <div className="flex gap-7">
          <a href="#services" className="text-[#8a9099] hover:text-white text-[13px] transition-colors">Services</a>
          <a href="#process" className="text-[#8a9099] hover:text-white text-[13px] transition-colors">Process</a>
          <a href="#results" className="text-[#8a9099] hover:text-white text-[13px] transition-colors">Results</a>
          <a href="#about" className="text-[#8a9099] hover:text-white text-[13px] transition-colors">About</a>
          <a href="#contact" className="text-[#8a9099] hover:text-white text-[13px] transition-colors">Contact</a>
        </div>
        <div className="text-[13px] text-[#8a9099]">
          &copy; 2026 ProspectFly. All rights reserved. UK-based.
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen flex flex-col font-body text-[#111111] bg-white">
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return <Outlet />;
}
