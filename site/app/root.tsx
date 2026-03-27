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
    <header className="bg-[#0a0a0a] w-full">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-white text-xl font-semibold font-display">
          ProspectFly
        </a>
        <div className="flex items-center gap-6">
          <a href="/services" className="text-white hover:text-gray-300 text-sm">Services</a>
          <a href="/case-studies" className="text-white hover:text-gray-300 text-sm">Case Studies</a>
          <a href="/blog" className="text-white hover:text-gray-300 text-sm">Blog</a>
          <a href="/contact" className="text-white hover:text-gray-300 text-sm">Contact</a>
          <a
            href="/contact"
            className="bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-600 transition-colors"
          >
            Book a Call
          </a>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold font-display mb-4">ProspectFly</h3>
            <p className="text-gray-400 text-sm">
              AI automation consultancy for growing SaaS businesses. We help teams do more with less.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/services#audit" className="hover:text-white">Process Audit</a></li>
              <li><a href="/services#build" className="hover:text-white">Automation Build</a></li>
              <li><a href="/services#training" className="hover:text-white">Team Training</a></li>
              <li><a href="/services#fractional" className="hover:text-white">Fractional AI Lead</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/case-studies" className="hover:text-white">Case Studies</a></li>
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="https://linkedin.com" className="hover:text-white">LinkedIn</a></li>
              <li><a href="https://twitter.com" className="hover:text-white">Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          &copy; 2026 ProspectFly. All rights reserved.
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
