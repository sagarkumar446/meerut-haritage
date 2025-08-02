import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const links = [
  { name: "Home", path: "/" },
  { name: "Historical Places", path: "/historical-places" },
  { name: "City Guide", path: "/city-guide" },
  { name: "Community", path: "/community" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" }
];

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-auto border-2 solid w-full">
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          {/* Logo or Title */}
          <div className="text-2xl font-bold text-heritage flex items-center">
            Meerut Heritage
          </div>
          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex space-x-8">
            {links.map((val, ind) => (
              <NavLink 
                to={val.path} 
                key={ind}
                className={({ isActive }) =>
                  `no-underline text-black text-sm font-medium h-full p-5${isActive ? " text-heritage" : ""}`
                }
              >
                {val.name}
              </NavLink>
            ))}
          </nav>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-heritage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                // 'X' Close icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                // Hamburger icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile Navigation Dropdown */}
        <nav
          className={`md:hidden bg-white shadow transition-all ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col px-4 py-2 space-y-2">
            {links.map((val, ind) => (
              <NavLink
                to={val.path}
                key={ind}
                className={({ isActive }) =>
                  `no-underline text-black text-base font-medium py-2 px-2 rounded hover:bg-gray-100${isActive ? " text-heritage" : ""}`
                }
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                {val.name}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>
      <div className="h-[80%]">
        <Outlet />
      </div>
        <Footer/>

    </div>
  );
};

export default Home;
