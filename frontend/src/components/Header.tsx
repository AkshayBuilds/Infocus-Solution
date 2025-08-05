import React, { useState, useEffect } from "react";
import { Menu, X, FileText, ExternalLink } from "lucide-react";
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../Public/LOGO.png';

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
      // Set isScrolled to true if scrolled down, false if at top
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Call once to set initial state
    handleScroll();
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-100"
          : "bg-gradient-to-r from-blue-50/90 to-white/90 backdrop-blur-sm"
        }`}
    >
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              {/* adding a right part */}
              <button
                onClick={() => {
                  const homeElement = document.getElementById('home');
                  if (homeElement) {
                    homeElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="transition-transform duration-300 hover:scale-105 focus:outline-none"
              >
                <img 
                  src={logo} 
                  alt="INFOCUS SOLUTION" 
                  className="h-12 sm:h-[60px]"
                />
                <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
            {/* <span className="text-xl font-bold text-gray-800">
              INFOCUS SOLUTION
            </span> */}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.section}
                to={item.to}
                onClick={() => scrollToSection(item.section)}
                className={`group relative font-semibold transition-all duration-300 px-3 py-2 rounded-lg ${activeSection === item.section
                    ? "text-blue-600 bg-blue-50 shadow-md transform scale-105"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
              >
                {item.name}
                <div className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${activeSection === item.section ? "w-full" : "w-0 group-hover:w-full"
                  }`}></div>
              </NavLink>
            ))}

            {/* Google Form Button */}
            <button
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSccGNHj9f8pjz3A63QadgJlOVMjz_KtQPkPTuoADK5_autLwQ/viewform?usp=dialog', '_blank')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
            >
              <FileText className="h-4 w-4" />
              <span>Apply Now</span>
              <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-xl hover:bg-blue-50 transition-all duration-300 group"
          >
            <div className="relative">
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
              )}
              <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-3 sm:mt-4 py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col space-y-2 sm:space-y-3 px-4">
              {navItems.map((item, index) => (
                <button
                  key={item.section}
                  onClick={() => scrollToSection(item.section)}
                  className={`text-left transition-all duration-300 py-3 px-4 rounded-xl transform hover:scale-105 ${activeSection === item.section
                      ? "text-blue-600 font-semibold bg-gradient-to-r from-blue-50 to-blue-100 shadow-md border border-blue-200"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50"
                    }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    {activeSection === item.section && (
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                    )}
                  </div>
                </button>
              ))}

              {/* Mobile Google Form Button */}
              <button
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSccGNHj9f8pjz3A63QadgJlOVMjz_KtQPkPTuoADK5_autLwQ/viewform?usp=dialog', '_blank')}
                className="bg-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 mt-2"
                style={{ animationDelay: '400ms' }}
              >
                <FileText className="h-4 w-4" />
                <span>Apply Now</span>
                <ExternalLink className="h-4 w-4" />
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
