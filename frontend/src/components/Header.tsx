import React, { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { NavLink } from 'react-router-dom';
import './Header.css';

const navItems: { name: string; to: string; section: string }[] = [
  { name: "Home", to: "/home", section: "home" },
  { name: "About", to: "/about", section: "about" },
  { name: "Services", to: "/services", section: "services" },
  { name: "Contact", to: "/contact", section: "contact" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const getLinkClasses = (section: string) =>
    `group relative font-semibold transition-colors duration-200 ${activeSection === section
      ? "text-blue-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-600 after:scale-x-100 after:origin-left after:transition-all after:duration-300 after:ease-in-out"
      : "text-gray-700 hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-all after:duration-300 after:ease-in-out"
    }`;

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "contact"];
      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">
              INFOCUS SOLUTION
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.section}
                to={item.to}
                onClick={() => scrollToSection(item.section)}
                className={getLinkClasses(item.section)}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => scrollToSection(item.section)}
                  className={`text-left transition-colors duration-200 ${activeSection === item.section ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
