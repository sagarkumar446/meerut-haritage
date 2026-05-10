import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const links = [
  { name: "Home", path: "/" },
  { name: "Historical Places", path: "/historical-places" },
  { name: "City Guide", path: "/city-guide" },
  { name: "Community", path: "/community" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-heritage-cream text-heritage">
      <header className="sticky top-0 z-50 border-b border-heritage-tan/60 bg-heritage-cream/90 backdrop-blur">
        <div className="section-shell">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-heritage text-heritage-cream flex items-center justify-center font-display text-sm tracking-[0.15em]">
                MH
              </div>
              <div className="leading-tight">
                <p className="text-[11px] uppercase tracking-[0.3em] text-emerald">
                  City Journal
                </p>
                <p className="font-display text-lg">Meerut Heritage</p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              {links.map((val) => (
                <NavLink
                  to={val.path}
                  key={val.name}
                  className={({ isActive }) =>
                    `text-xs uppercase tracking-[0.2em] pb-1 border-b-2 transition-colors ${
                      isActive
                        ? "border-heritage-gold text-heritage"
                        : "border-transparent text-slate-600 hover:text-heritage"
                    }`
                  }
                >
                  {val.name}
                </NavLink>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Weekly Digest
              </span>
              <button className="bg-heritage text-heritage-cream text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full hover:bg-heritage-brown transition">
                Subscribe
              </button>
            </div>

            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-heritage"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <nav className={`lg:hidden bg-heritage-cream border-t border-heritage-tan/60 ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="section-shell py-4 flex flex-col gap-3">
            {links.map((val) => (
              <NavLink
                to={val.path}
                key={val.name}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-[0.2em] py-2 ${
                    isActive ? "text-heritage" : "text-slate-600"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {val.name}
              </NavLink>
            ))}
            <button className="mt-2 bg-heritage text-heritage-cream text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full self-start">
              Subscribe
            </button>
          </div>
        </nav>
      </header>

      <main className="pb-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
