import { useState } from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link,
  useLocation,
} from "react-router";
import type { LinksFunction } from "react-router";

import "./app.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" },
];

function Nav() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isLandingPage = location.pathname.startsWith("/get-started");
  const [mobileOpen, setMobileOpen] = useState(false);

  const homeLink = (anchor: string) => (isHome ? anchor : `/${anchor}`);

  const closeMobile = () => setMobileOpen(false);

  if (isLandingPage) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-display font-bold text-lg tracking-tight text-white">
          Prospect<span className="text-amber-500">Fly</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <Link to="/services" className="hover:text-white transition-colors duration-200">
            Services
          </Link>

          <Link to="/pricing" className="hover:text-white transition-colors duration-200">
            Pricing
          </Link>

          <Link to="/about" className="hover:text-white transition-colors duration-200">
            About
          </Link>
        </div>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden md:block bg-lime-400 text-black font-display font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-lime-300 transition-colors duration-200 cursor-pointer"
        >
          Book a Call
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-white cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#16191f] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6 py-6 space-y-1">
            <Link
              to="/"
              onClick={closeMobile}
              className="block py-3 text-white font-medium hover:text-lime-400 transition-colors"
            >
              Home
            </Link>

            <Link
              to="/services"
              onClick={closeMobile}
              className="block py-3 text-white font-medium hover:text-lime-400 transition-colors"
            >
              Services
            </Link>

            <Link
              to="/pricing"
              onClick={closeMobile}
              className="block py-3 text-white font-medium hover:text-lime-400 transition-colors"
            >
              Pricing
            </Link>

            <Link
              to="/about"
              onClick={closeMobile}
              className="block py-3 text-white font-medium hover:text-lime-400 transition-colors"
            >
              About
            </Link>

            <div className="pt-4">
              <Link
                to="/contact"
                onClick={closeMobile}
                className="block w-full text-center bg-lime-400 text-black font-display font-semibold text-sm px-5 py-3 rounded-full hover:bg-lime-300 transition-colors duration-200 cursor-pointer"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  const location = useLocation();
  const isLandingPage = location.pathname.startsWith("/get-started");

  if (isLandingPage) return null;

  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-[#1e2229]">
      <div className="max-w-[1100px] mx-auto px-10 py-10 flex flex-wrap items-center justify-between gap-5">
        <Link to="/" className="text-lg font-extrabold font-display tracking-tight">
          Prospect <span className="text-amber-500">Fly</span>
        </Link>
        <div className="flex gap-7">
          <Link to="/" className="text-[#8a9099] hover:text-white text-[13px] transition-colors">Home</Link>
          <Link to="/services" className="text-[#8a9099] hover:text-white text-[13px] transition-colors">Services</Link>
          <Link to="/pricing" className="text-[#8a9099] hover:text-white text-[13px] transition-colors">Pricing</Link>
          <Link to="/about" className="text-[#8a9099] hover:text-white text-[13px] transition-colors">About</Link>
          <Link to="/contact" className="text-[#8a9099] hover:text-white text-[13px] transition-colors">Contact</Link>
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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MJ6KB4R');`,
          }}
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen flex flex-col font-body text-[#111111] bg-white">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MJ6KB4R"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Nav />
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
